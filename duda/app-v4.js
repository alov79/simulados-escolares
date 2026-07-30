const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
let current=null;
let lastFocus=null;

function state(){
  try{return JSON.parse(localStorage.getItem(KEY)||'{"xp":0,"coins":0,"history":[],"streak":0,"last":""}')}
  catch(e){return {xp:0,coins:0,history:[],streak:0,last:''}}
}
function save(s){
  localStorage.setItem(KEY,JSON.stringify(s));
  window.dispatchEvent(new CustomEvent('duda-progress-updated',{detail:s}));
  renderStats()
}
function updateStreak(s){
  const today=new Date().toISOString().slice(0,10);
  if(s.last===today)return;
  if(s.last){
    const y=new Date();y.setDate(y.getDate()-1);
    s.streak=s.last===y.toISOString().slice(0,10)?s.streak+1:1
  }else s.streak=1;
  s.last=today
}
function stageBase(stage){
  if(stage==='review')return 35;
  if(stage==='challenge')return 100;
  const n=Number((stage.match(/exercise(\d+)/)||[])[1]||1);
  return [0,60,75,90,110,140][n]||60
}
function complete(id,stage,score=0,total=0){
  const s=state(),key=id+'-'+stage,existing=s.history.find(x=>x.key===key);
  updateStreak(s);
  const base=stageBase(stage),bonus=total?Math.round((score/total)*50):0;
  if(!existing){
    s.xp+=base+bonus;
    s.coins+=Math.round((base+bonus)/2);
    s.history.push({key,id,stage,score,total,date:new Date().toISOString().slice(0,10)})
  }else if(total&&score>(existing.score||0)){
    const oldBonus=Math.round(((existing.score||0)/(existing.total||total))*50);
    const extra=Math.max(0,bonus-oldBonus);
    s.xp+=extra;
    s.coins+=Math.round(extra/2);
    existing.score=score;
    existing.total=total;
    existing.date=new Date().toISOString().slice(0,10)
  }
  save(s)
}
function isDone(id,stage){return state().history.some(x=>x.key===id+'-'+stage)}
function stagesFor(m){return m.levels?m.levels.map((_,i)=>'exercise'+(i+1)):['challenge']}
function finalStage(m){const stages=stagesFor(m);return stages[stages.length-1]}
function missionComplete(id,m){return isDone(id,finalStage(m))}
function questionsForStage(m,stage){
  if(m.levels){
    const n=Number(stage.replace('exercise',''));
    return m.levels[n-1].questions
  }
  return m.questions||[]
}
function nextStage(m,stage){
  const stages=stagesFor(m),idx=stages.indexOf(stage);
  return idx>=0&&idx<stages.length-1?stages[idx+1]:null
}
function stageTitle(m,stage){
  if(stage==='challenge')return 'Simulado';
  const n=Number(stage.replace('exercise',''));
  return m.levels[n-1].title
}
function totalQuestionCount(m){
  return m.levels?m.levels.reduce((sum,l)=>sum+l.questions.length,0):(m.questions||[]).length
}
function closeMission(){
  $('#missionModal').classList.add('hidden');
  document.body.classList.remove('modal-open');
  current=null;
  if(lastFocus)lastFocus.focus()
}
function showTab(name){
  $$('#missionTabs .tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));
  $$('#missionPanels .panel').forEach(p=>p.classList.toggle('hidden',p.dataset.panel!==name));
  $('#modalBox').scrollTo({top:0,behavior:'smooth'})
}
function quizHtml(qs,stage,meta={}){
  const isLevel=stage.startsWith('exercise');
  const label=isLevel?`Corrigir ${meta.title.toLowerCase()}`:'Corrigir simulado';
  const color=stage==='challenge'||stage==='exercise5'?'orange':'blue';
  const head=meta.title?`<div class="level-head"><div><h3>${meta.title}</h3><p class="small">${meta.difficulty} • ${qs.length} perguntas</p></div><span class="level-count">${meta.number}/${meta.total}</span></div>`:
    `<div class="level-head"><div><h3>Simulado da matéria</h3><p class="small">Acesso livre • ${qs.length} perguntas</p></div><span class="level-count">ABERTO</span></div>`;
  return `${head}<div class="step-note">💡 Responda ${qs.length===1?'a questão':`as ${qs.length} questões`} e toque em <b>${label}</b>. Você pode refazer para melhorar sua pontuação.</div>
    <form data-stage="${stage}" novalidate>
      ${qs.map((q,i)=>`<div class="quiz-q" data-q="${i}"><b>${i+1}. ${q[0]}</b>${q[1].map((o,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}</div>`).join('')}
      <div class="stage-actions"><button type="button" class="btn soft close-inside">Fechar e voltar</button><button type="submit" class="btn ${color}">${label}</button></div>
      <div class="result" hidden aria-live="polite"></div>
    </form>`
}
function bindDynamicButtons(){
  $$('.close-inside').forEach(b=>b.onclick=closeMission);
  $$('.go-next').forEach(b=>b.onclick=()=>showTab(b.dataset.next));
  $$('.try-again').forEach(b=>b.onclick=()=>{
    const form=b.closest('form');
    form.reset();
    form.querySelectorAll('.option').forEach(x=>x.classList.remove('correct','wrong'));
    const result=form.querySelector('.result');
    result.hidden=true;
    form.scrollIntoView({behavior:'smooth',block:'start'})
  })
}
function refreshTabStatus(){
  if(!current)return;
  $$('#missionTabs .tab').forEach(b=>b.classList.toggle('done',isDone(current,b.dataset.tab)))
}
function openMission(id,trigger,startStage='review'){
  current=id;
  lastFocus=trigger||document.activeElement;
  const m=missions[id],stages=stagesFor(m);
  $('#modalBadge').textContent=m.subject;
  $('#modalTitle').textContent=m.title;
  $('#modalDesc').textContent=(m.desc||'')+' Todas as etapas estão liberadas: escolha a revisão ou qualquer exercício.';
  $('#missionTabs').innerHTML=`<button type="button" class="tab active" data-tab="review">📚 Revisar</button>`+
    stages.map((stage,i)=>{
      const label=m.levels?`${i+1}️⃣ Exercício ${i+1}`:'📝 Simulado';
      return `<button type="button" class="tab" data-tab="${stage}">${label}</button>`
    }).join('');
  const reviewDone=isDone(id,'review');
  const reviewHtml='<div class="open-access">🔓 <b>Acesso livre:</b> não é necessário concluir uma etapa para abrir a próxima.</div>'+ 
    '<div class="review-box">'+m.review.map(x=>`<article class="tip"><h4>${x[0]}</h4><p>${x[1]}</p></article>`).join('')+
    `</div><div class="stage-actions"><button type="button" class="btn soft close-inside">Fechar e voltar</button><button type="button" class="btn green" id="completeReview">${reviewDone?'Revisão concluída — abrir exercícios':'Concluir revisão e abrir exercícios'}</button></div>`;
  let panels=`<section class="panel" data-panel="review">${reviewHtml}</section>`;
  stages.forEach((stage,i)=>{
    const meta=m.levels?{title:m.levels[i].title,difficulty:m.levels[i].difficulty,number:i+1,total:m.levels.length}:{};
    panels+=`<section class="panel hidden" data-panel="${stage}">${quizHtml(questionsForStage(m,stage),stage,meta)}</section>`
  });
  $('#missionPanels').innerHTML=panels;
  $('#missionModal').classList.remove('hidden');
  document.body.classList.add('modal-open');
  bindDynamicButtons();
  refreshTabStatus();
  $('#completeReview').onclick=()=>{
    complete(current,'review');
    refreshTabStatus();
    $('#completeReview').textContent='Revisão concluída ✓';
    setTimeout(()=>showTab(stages[0]),200)
  };
  $$('#missionTabs .tab').forEach(b=>b.onclick=()=>showTab(b.dataset.tab));
  const valid=['review',...stages];
  showTab(valid.includes(startStage)?startStage:'review');
  setTimeout(()=>$('#closeModal').focus(),50)
}
$$('.open-mission').forEach(b=>b.onclick=()=>openMission(b.dataset.id,b,b.dataset.start||'review'));
$('#closeModal').onclick=closeMission;
$('#missionModal').onclick=e=>{if(e.target.id==='missionModal')closeMission()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#missionModal').classList.contains('hidden'))closeMission()});
$('#missionModal').addEventListener('submit',e=>{
  const form=e.target;
  if(!form.dataset.stage)return;
  e.preventDefault();
  const m=missions[current],stage=form.dataset.stage,qs=questionsForStage(m,stage),result=form.querySelector('.result'),unanswered=[];
  qs.forEach((q,i)=>{if(!form.querySelector(`input[name="q${i}"]:checked`))unanswered.push(i)});
  if(unanswered.length){
    result.hidden=false;
    result.className='result error';
    result.textContent=`Falta responder ${unanswered.length} questão${unanswered.length===1?'':'ões'}. Marque uma alternativa em todas antes de corrigir.`;
    form.querySelector(`[data-q="${unanswered[0]}"]`).scrollIntoView({behavior:'smooth',block:'center'});
    return
  }
  let score=0;
  qs.forEach((q,i)=>{
    const picked=Number(form.querySelector(`input[name="q${i}"]:checked`).value);
    if(picked===q[2])score++;
    form.querySelectorAll(`[name="q${i}"]`).forEach(input=>{
      const label=input.closest('.option');
      label.classList.remove('correct','wrong');
      if(Number(input.value)===q[2])label.classList.add('correct');
      else if(input.checked)label.classList.add('wrong')
    })
  });
  complete(current,stage,score,qs.length);
  refreshTabStatus();
  const perfect=score===qs.length,next=nextStage(m,stage);
  result.hidden=false;
  result.className='result '+(perfect?'success':'');
  if(next){
    result.innerHTML=`Você acertou <b>${score} de ${qs.length}</b>. ${perfect?'Excelente! Você dominou esta etapa.':'Confira as alternativas em verde e continue quando estiver pronta.'}<div class="stage-actions"><button type="button" class="btn soft try-again">Refazer este exercício</button><button type="button" class="btn green go-next" data-next="${next}">Continuar para ${stageTitle(m,next)}</button></div>`
  }else{
    const total=totalQuestionCount(m);
    const detail=m.levels?`Esta trilha possui ${m.levels.length} exercícios e ${total} perguntas no total.`:`Este simulado possui ${total} pergunta${total===1?'':'s'} e permanece aberto para novas tentativas.`;
    result.innerHTML=`Você acertou <b>${score} de ${qs.length}</b>. ${perfect?'Excelente! Etapa dominada.':'As respostas corretas estão em verde.'}<div class="finish-card"><b>Atividade concluída.</b><p class="small">${detail}</p><div class="stage-actions"><button type="button" class="btn soft try-again">Refazer atividade</button><button type="button" class="btn green close-inside">Escolher outra matéria</button></div></div>`
  }
  bindDynamicButtons();
  result.scrollIntoView({behavior:'smooth',block:'center'})
});

function renderAvatar(){
  if(!window.DudaAvatarSystem)return;
  const c=DudaAvatarSystem.current();
  DudaAvatarSystem.renderInto('homeAvatar','home');
  DudaAvatarSystem.renderInto('avatarCardPreview','medium');
  const homeName=$('#homeAvatarName'),cardName=$('#avatarCardName');
  if(homeName)homeName.textContent=c.avatar.name+(c.accessory.emoji?' + '+c.accessory.name:'');
  if(cardName)cardName.textContent=c.avatar.name
}
function renderStats(){
  const s=state();
  $('#xp').textContent=s.xp;
  $('#coins').textContent=window.DudaAvatarSystem?DudaAvatarSystem.balance():s.coins;
  $('#streak').textContent=s.streak+' dia'+(s.streak===1?'':'s');
  const entries=Object.entries(missions),completed=entries.filter(([id,m])=>missionComplete(id,m)).length;
  $('#done').textContent=completed;
  const totalMissions=entries.length;
  const reviewed=new Set(s.history.filter(x=>x.stage==='review').map(x=>x.id)).size;
  const totalExercises=entries.reduce((sum,[,m])=>sum+stagesFor(m).length,0);
  const validExerciseKeys=new Set();
  entries.forEach(([id,m])=>stagesFor(m).forEach(stage=>validExerciseKeys.add(id+'-'+stage)));
  const doneExercises=new Set(s.history.filter(x=>validExerciseKeys.has(x.key)).map(x=>x.key)).size;
  const reviewPct=Math.round(reviewed/totalMissions*100);
  const exercisePct=Math.round(doneExercises/totalExercises*100);
  const missionPct=Math.round(completed/totalMissions*100);
  $('#reviewBar').style.width=reviewPct+'%';
  $('#reviewPct').textContent=reviewPct+'%';
  $('#warmupBar').style.width=exercisePct+'%';
  $('#warmupPct').textContent=exercisePct+'%';
  $('#challengeBar').style.width=missionPct+'%';
  $('#challengePct').textContent=missionPct+'%';
  $('#parentSummary').textContent=completed?
    `${completed} matéria${completed===1?'':'s'} com atividade concluída. XP acumulado: ${s.xp}. Todos os conteúdos continuam abertos para revisão e novas tentativas.`:
    'Todos os deveres estão liberados. Duda pode escolher qualquer matéria, revisar e fazer o simulado sem precisar seguir uma ordem.';
  renderAvatar()
}
$('#resetBtn').onclick=()=>{
  if(confirm('Deseja apagar o progresso dos exercícios neste navegador? Os avatares e acessórios já comprados serão preservados.')){
    localStorage.removeItem(KEY);
    renderStats()
  }
};
window.addEventListener('duda-avatar-updated',renderStats);
renderStats();