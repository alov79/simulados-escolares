(function(){
const pick=(a,i)=>a[((i%a.length)+a.length)%a.length];
const rot=(a,n)=>a.map((_,i)=>a[(i+n)%a.length]);
const opts=(correct,pool,i)=>{const out=[correct];let k=1;while(out.length<4&&k<30){const v=pick(pool,i+k*3);if(!out.includes(v))out.push(v);k++}return out};
const q=(prompt,options,correct)=>{const r=(prompt.length+String(correct).length)%options.length,s=rot(options,r);return[prompt,s,s.indexOf(correct)]};
window.addU3Concept=function(id,meta,concepts){
 const terms=concepts.map(x=>x[0]),defs=concepts.map(x=>x[1]),examples=concepts.map(x=>x[2]);
 const levels=[
  {title:'Exercício 1',difficulty:'Conceitos fundamentais',questions:concepts.map((c,i)=>q('Qual definição corresponde a “'+c[0]+'”?',opts(c[1],defs,i),c[1]))},
  {title:'Exercício 2',difficulty:'Reconhecimento e compreensão',questions:concepts.map((c,i)=>q('O conceito descrito como “'+c[1]+'” é:',opts(c[0],terms,i+2),c[0]))},
  {title:'Exercício 3',difficulty:'Aplicação em exemplos',questions:concepts.map((c,i)=>q('Leia o exemplo: “'+c[2]+'”. Ele se relaciona principalmente a:',opts(c[0],terms,i+4),c[0]))},
  {title:'Exercício 4',difficulty:'Interpretação e associação',questions:concepts.map((c,i)=>q('Qual exemplo representa melhor “'+c[0]+'”?',opts(c[2],examples,i+5),c[2]))},
  {title:'Exercício 5',difficulty:'Desafio de síntese',questions:concepts.map((c,i)=>{const correct=c[0]+' — '+c[1];const pool=concepts.map((x,j)=>x[0]+' — '+pick(defs,j+i+1));return q('Assinale a associação correta sobre o conteúdo estudado:',opts(correct,pool,i+7),correct)})}
 ];
 missions[id]={subject:meta.subject,title:meta.title,desc:meta.desc,review:concepts.slice(0,5).map(x=>[x[0],x[1]]),levels};
};
window.u3MathQ=(prompt,correct,wrongs)=>q(prompt,[String(correct),...wrongs.map(String)],String(correct));
})();