(()=>{
  const AVATARS=[
    {id:'astronauta',emoji:'🧑‍🚀',name:'Astronauta',price:0,description:'Explora novos conhecimentos sem medo.'},
    {id:'cientista',emoji:'🧑‍🔬',name:'Cientista',price:120,description:'Transforma curiosidade em descobertas.'},
    {id:'estudante',emoji:'🧑‍🎓',name:'Estudante Nota 10',price:180,description:'Celebra cada etapa da aprendizagem.'},
    {id:'robo',emoji:'🤖',name:'Robô Lógico',price:250,description:'Resolve desafios com estratégia e precisão.'},
    {id:'raposa',emoji:'🦊',name:'Raposa Esperta',price:320,description:'Observa pistas e aprende rapidamente.'},
    {id:'tigre',emoji:'🐯',name:'Tigre Corajoso',price:380,description:'Enfrenta missões difíceis com confiança.'},
    {id:'detetive',emoji:'🕵️‍♀️',name:'Detetive do Saber',price:450,description:'Investiga cada questão antes de responder.'},
    {id:'maga',emoji:'🧙‍♀️',name:'Maga dos Estudos',price:520,description:'Transforma esforço em novas conquistas.'}
  ];
  const ACCESSORIES=[
    {id:'nenhum',emoji:'',name:'Sem acessório',price:0,description:'Visual clássico.'},
    {id:'estrela',emoji:'⭐',name:'Estrela do Saber',price:0,description:'Acessório gratuito para começar.'},
    {id:'livro',emoji:'📘',name:'Livro de Aventuras',price:80,description:'Para quem gosta de descobrir histórias.'},
    {id:'oculos',emoji:'🕶️',name:'Óculos da Concentração',price:100,description:'Ajuda a manter o foco na missão.'},
    {id:'fone',emoji:'🎧',name:'Fone do Foco',price:130,description:'Um reforço para estudar com atenção.'},
    {id:'raio',emoji:'⚡',name:'Raio da Agilidade',price:160,description:'Para respostas rápidas e cuidadosas.'},
    {id:'medalha',emoji:'🏅',name:'Medalha do Esforço',price:190,description:'Celebra a constância nos estudos.'},
    {id:'mochila',emoji:'🎒',name:'Mochila da Jornada',price:220,description:'Leva conhecimento para toda parte.'},
    {id:'coroa',emoji:'👑',name:'Coroa Nota 10',price:250,description:'Para quem domina os desafios.'}
  ];
  const KEY='missao-duda-avatar-v1';
  const PROGRESS_KEY='missao-duda-v1';

  function progress(){
    try{return JSON.parse(localStorage.getItem(PROGRESS_KEY)||'{"xp":0,"coins":0,"history":[]}')}
    catch(e){return {xp:0,coins:0,history:[]}}
  }
  function earnedCoins(){return Math.max(0,Number(progress().coins)||0)}
  function xp(){return Math.max(0,Number(progress().xp)||0)}
  function initial(){
    return {
      ownedAvatars:['astronauta'],
      ownedAccessories:['nenhum','estrela'],
      activeAvatar:'astronauta',
      activeAccessory:'nenhum',
      spent:0
    }
  }
  function getState(){
    let s;
    try{s=JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){}
    s=s&&typeof s==='object'?s:initial();
    s.ownedAvatars=Array.isArray(s.ownedAvatars)?s.ownedAvatars:['astronauta'];
    s.ownedAccessories=Array.isArray(s.ownedAccessories)?s.ownedAccessories:['nenhum','estrela'];
    if(!s.ownedAvatars.includes('astronauta'))s.ownedAvatars.unshift('astronauta');
    if(!s.ownedAccessories.includes('nenhum'))s.ownedAccessories.unshift('nenhum');
    if(!s.ownedAccessories.includes('estrela'))s.ownedAccessories.push('estrela');
    s.activeAvatar=AVATARS.some(x=>x.id===s.activeAvatar)?s.activeAvatar:'astronauta';
    s.activeAccessory=ACCESSORIES.some(x=>x.id===s.activeAccessory)?s.activeAccessory:'nenhum';
    s.spent=Math.max(0,Number(s.spent)||0);
    return s
  }
  function saveState(s){
    localStorage.setItem(KEY,JSON.stringify(s));
    window.dispatchEvent(new CustomEvent('duda-avatar-updated',{detail:s}));
    return s
  }
  function balance(){return Math.max(0,earnedCoins()-getState().spent)}
  function avatar(id){return AVATARS.find(x=>x.id===id)||AVATARS[0]}
  function accessory(id){return ACCESSORIES.find(x=>x.id===id)||ACCESSORIES[0]}
  function current(){
    const s=getState();
    return {avatar:avatar(s.activeAvatar),accessory:accessory(s.activeAccessory),state:s}
  }
  function buy(kind,id){
    const s=getState();
    const list=kind==='avatar'?AVATARS:ACCESSORIES;
    const item=list.find(x=>x.id===id);
    const ownedKey=kind==='avatar'?'ownedAvatars':'ownedAccessories';
    if(!item)return {ok:false,message:'Item não encontrado.'};
    if(s[ownedKey].includes(id))return {ok:true,already:true,message:'Este item já está desbloqueado.'};
    if(balance()<item.price)return {ok:false,message:`Faltam ${item.price-balance()} moedas para desbloquear este item.`};
    s.spent+=item.price;
    s[ownedKey].push(id);
    saveState(s);
    return {ok:true,message:`${item.name} foi desbloqueado!`}
  }
  function equip(kind,id){
    const s=getState();
    const ownedKey=kind==='avatar'?'ownedAvatars':'ownedAccessories';
    const activeKey=kind==='avatar'?'activeAvatar':'activeAccessory';
    if(!s[ownedKey].includes(id))return {ok:false,message:'Desbloqueie este item antes de usar.'};
    s[activeKey]=id;
    saveState(s);
    return {ok:true,message:'Visual atualizado!'}
  }
  function markup(size='large'){
    const c=current();
    return `<span class="avatar-display ${size}" aria-label="Avatar ${c.avatar.name}"><span class="avatar-base">${c.avatar.emoji}</span>${c.accessory.emoji?`<span class="avatar-accessory">${c.accessory.emoji}</span>`:''}</span>`
  }
  function renderInto(target,size='large'){
    const el=typeof target==='string'?document.getElementById(target):target;
    if(el)el.innerHTML=markup(size)
  }
  window.DudaAvatarSystem={avatars:AVATARS,accessories:ACCESSORIES,getState,saveState,earnedCoins,xp,balance,current,buy,equip,markup,renderInto}
})();