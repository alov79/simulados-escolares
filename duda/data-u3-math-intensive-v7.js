
(function(){
const mq=u3MathQ;
function eqSet(start){
 const out=[];
 for(let i=0;i<10;i++){
  const a=2+((i+start)%8), x=2+((i*3+start)%11), b=((i+start)%2?1:-1)*(3+((i*2+start)%9)), c=a*x+b;
  out.push(mq(`Resolva a equação: ${a}x ${b>=0?'+ '+b:'- '+(-b)} = ${c}.`,x,[x+1,x-1,x+2]));
 }
 return out
}
function eqProblemSet(start){
 const templates=[];
 for(let i=0;i<10;i++){
  const x=4+((i*2+start)%12), a=2+((i+start)%5), b=3+((i*3+start)%8), total=a*x+b;
  templates.push(mq(`Um número multiplicado por ${a} e depois somado a ${b} resulta em ${total}. Qual é esse número?`,x,[x-1,x+1,a+x]));
 }
 return templates
}
function areaRectSet(start){
 const out=[];for(let i=0;i<10;i++){const a=5+((i+start)%13),b=3+((i*2+start)%9),ans=a*b;out.push(mq(`Um retângulo mede ${a} cm de comprimento e ${b} cm de largura. Qual é sua área?`,ans,[a+b,2*(a+b),ans+b]))}return out
}
function areaTriSet(start){
 const out=[];for(let i=0;i<10;i++){const b=6+2*((i+start)%7),h=4+((i*3+start)%8),ans=b*h/2;out.push(mq(`Calcule a área de um triângulo de base ${b} cm e altura ${h} cm.`,ans,[b*h,b+h,ans+h]))}return out
}
function areaMixedSet(start){
 const out=[];for(let i=0;i<10;i++){
   const kind=i%3;
   if(kind===0){const l=4+((i+start)%10),ans=l*l;out.push(mq(`Um quadrado tem lado ${l} m. Qual é sua área?`,ans,[l*4,l*2,ans+l]))}
   else if(kind===1){const b=7+((i+start)%9),h=5+((i*2+start)%7),ans=b*h;out.push(mq(`Um paralelogramo tem base ${b} m e altura ${h} m. Qual é sua área?`,ans,[b+h,2*(b+h),ans+h]))}
   else {const B=12+((i+start)%8),b=6+((i*2+start)%5),h=4+((i+start)%6),ans=(B+b)*h/2;out.push(mq(`Um trapézio tem bases ${B} cm e ${b} cm e altura ${h} cm. Qual é sua área?`,ans,[B*b,(B+b)*h,ans+h]))}
 }return out
}
function volumeSet(start){
 const out=[];for(let i=0;i<10;i++){const a=4+((i+start)%8),b=3+((i*2+start)%6),c=2+((i*3+start)%7),ans=a*b*c;out.push(mq(`Uma caixa retangular mede ${a} cm × ${b} cm × ${c} cm. Qual é seu volume?`,ans,[a+b+c,a*b+c,2*(a*b+a*c+b*c)]))}return out
}
function unitSet(){
 return [
 mq("Uma área de 3 m² corresponde a quantos cm²?",30000,[300,3000,300000]),
 mq("Um volume de 2 dm³ corresponde a quantos cm³?",2000,[200,20,20000]),
 mq("Qual unidade é adequada para medir a área do piso de uma sala?","m²",["m","m³","cm"]),
 mq("Qual unidade é adequada para medir o volume de uma caixa?","cm³",["cm","cm²","m²"]),
 mq("Um quadrado de lado 100 cm tem área de:",10000,[100,1000,100000]),
 mq("Se o comprimento de um retângulo dobra e a largura permanece igual, a área:","dobra",["permanece igual","cai pela metade","quadruplica"]),
 mq("Se todas as dimensões de um paralelepípedo dobram, o volume:","fica 8 vezes maior",["dobra","fica 4 vezes maior","permanece igual"]),
 mq("Área mede:","superfície",["comprimento","capacidade linear","massa"]),
 mq("Volume mede:","espaço ocupado",["perímetro","comprimento de um lado","temperatura"]),
 mq("Para calcular área de retângulo usamos:","base × altura",["base + altura","2 × base × altura","base ÷ altura"])
 ]
}
function mixedSet(){
 return [
 mq("O dobro de um número mais 9 é 35. Qual é o número?",13,[11,12,14]),
 mq("Um terreno retangular mede 24 m por 15 m. Qual é a área?",360,[78,180,390]),
 mq("Uma caixa mede 12 cm × 8 cm × 5 cm. Qual é o volume?",480,[96,240,960]),
 mq("Três vezes um número menos 4 é 29. Qual é o número?",11,[9,10,12]),
 mq("Um triângulo tem base 18 cm e altura 10 cm. Qual é a área?",90,[180,28,100]),
 mq("Um quadrado tem área 144 cm². Quanto mede seu lado?",12,[10,14,36]),
 mq("Uma caixa tem volume 240 cm³, comprimento 10 cm e largura 6 cm. Qual é a altura?",4,[3,5,6]),
 mq("Cinco vezes um número mais 7 é 52. Qual é o número?",9,[8,10,11]),
 mq("Um retângulo tem área 96 cm² e largura 8 cm. Qual é o comprimento?",12,[10,11,14]),
 mq("Um paralelepípedo de 5 cm × 4 cm × h tem volume 140 cm³. Quanto vale h?",7,[5,6,8])
 ]
}
missions.u3_math02={
 subject:"➗ Matemática nº 02",
 title:"Equações, áreas e volume • Intensivo",
 desc:"3ª unidade • 28/09 a 02/10 • trilha intensiva com 100 questões em 10 exercícios de 10.",
 review:[
  ["Aula 1 — Equações","Isole a incógnita fazendo a mesma operação nos dois lados. Ex.: 3x + 5 = 20 → 3x = 15 → x = 5."],
  ["Aula 2 — Problemas com equações","Transforme o texto em uma igualdade antes de calcular. Ex.: “o dobro de um número mais 3 é 17” → 2x + 3 = 17."],
  ["Aula 3 — Área","Retângulo: A=b×h. Quadrado: A=l². Triângulo: A=(b×h)/2. Paralelogramo: A=b×h. Trapézio: A=(B+b)×h/2."],
  ["Aula 4 — Volume","Paralelepípedo: V=comprimento×largura×altura. Sempre use unidade cúbica, como cm³ ou m³."],
  ["Aula 5 — Conferência","Depois de resolver uma equação, substitua o valor encontrado na expressão original. Em geometria, confira se usou área ou volume e a unidade correta."]
 ],
 levels:[
  {title:"Exercício 1",difficulty:"Equações • nível 1",questions:eqSet(0)},
  {title:"Exercício 2",difficulty:"Equações • nível 2",questions:eqSet(5)},
  {title:"Exercício 3",difficulty:"Problemas com equações",questions:eqProblemSet(1)},
  {title:"Exercício 4",difficulty:"Área de retângulos",questions:areaRectSet(2)},
  {title:"Exercício 5",difficulty:"Área de triângulos",questions:areaTriSet(1)},
  {title:"Exercício 6",difficulty:"Áreas de figuras planas",questions:areaMixedSet(3)},
  {title:"Exercício 7",difficulty:"Volume do paralelepípedo",questions:volumeSet(2)},
  {title:"Exercício 8",difficulty:"Unidades e raciocínio geométrico",questions:unitSet()},
  {title:"Exercício 9",difficulty:"Problemas mistos",questions:mixedSet()},
  {title:"Exercício 10",difficulty:"Desafio final • prova simulada",questions:[...eqSet(2).slice(0,2),...eqProblemSet(4).slice(0,2),...areaMixedSet(5).slice(0,2),...volumeSet(5).slice(0,2),...mixedSet().slice(0,2)]}
 ]
};
const m2=missions.u3_math02;
function propSet(){
 return [
 mq("Se 4 cadernos custam R$ 28, quanto custam 9 cadernos?",63,[56,60,72]),
 mq("Uma receita para 6 pessoas usa 450 g de arroz. Para 10 pessoas, quantos gramas?",750,[600,700,900]),
 mq("5 máquinas produzem 1000 peças. 8 máquinas, no mesmo tempo, produzem:",1600,[1250,1400,1800]),
 mq("Um carro percorre 240 km com 20 L. Com 35 L, no mesmo consumo, percorre:",420,[360,400,480]),
 mq("7 camisetas custam R$ 210. Quanto custam 12?",360,[300,330,420]),
 mq("Uma torneira enche 90 L em 6 min. Em 14 min, enche:",210,[180,200,240]),
 mq("8 caixas pesam 56 kg. 15 caixas iguais pesam:",105,[90,98,112]),
 mq("3 impressoras fazem 900 páginas. 7 iguais fazem:",2100,[1800,2000,2400]),
 mq("12 trabalhadores fazem uma tarefa em 10 dias. 20 trabalhadores, no mesmo ritmo, fazem em:",6,[5,8,12]),
 mq("6 pessoas consomem uma reserva em 15 dias. 10 pessoas consumiriam em:",9,[6,10,12])
 ]
}
function percentSet(){
 return [
 mq("15% de 240 é:",36,[24,30,40]),
 mq("25% de 360 é:",90,[72,80,100]),
 mq("40% de 150 é:",60,[45,50,75]),
 mq("Um produto de R$ 320 recebeu 20% de desconto. O desconto foi:",64,[32,60,80]),
 mq("Um valor de R$ 500 aumentou 12%. O novo valor é:",560,[512,550,620]),
 mq("18 corresponde a 30% de qual número?",60,[54,72,90]),
 mq("Um preço caiu de R$ 200 para R$ 170. O desconto percentual foi:",15,[10,20,30]),
 mq("Uma turma de 50 alunos teve 86% de presença. Quantos alunos compareceram?",43,[40,42,45]),
 mq("75% de 280 é:",210,[180,200,220]),
 mq("R$ 160 com aumento de 25% passa a:",200,[180,190,220])
 ]
}
missions.u3_math03={
 subject:"📊 Matemática nº 03",
 title:"Equações, geometria, proporções e porcentagem • Intensivo",
 desc:"3ª unidade • 16 a 19/11 • 100 questões em 10 exercícios de 10.",
 review:[
  ...m2.review,
  ["Aula 6 — Razões e proporções","Grandezas diretamente proporcionais crescem ou diminuem juntas. Inversamente proporcionais variam em sentidos opostos."],
  ["Aula 7 — Regra de três","Organize grandezas correspondentes, identifique se a relação é direta ou inversa e monte a proporção."],
  ["Aula 8 — Porcentagem","p% de N = (p/100)×N. Em aumento ou desconto, calcule a variação e depois some ou subtraia do valor inicial."]
 ],
 levels:[
  {title:"Exercício 1",difficulty:"Equações",questions:eqSet(3)},
  {title:"Exercício 2",difficulty:"Problemas com equações",questions:eqProblemSet(6)},
  {title:"Exercício 3",difficulty:"Áreas",questions:areaMixedSet(7)},
  {title:"Exercício 4",difficulty:"Volume",questions:volumeSet(7)},
  {title:"Exercício 5",difficulty:"Razão e proporção",questions:propSet()},
  {title:"Exercício 6",difficulty:"Proporção direta e inversa",questions:propSet().slice().reverse()},
  {title:"Exercício 7",difficulty:"Porcentagem",questions:percentSet()},
  {title:"Exercício 8",difficulty:"Regra de três e porcentagem",questions:[...propSet().slice(0,5),...percentSet().slice(0,5)]},
  {title:"Exercício 9",difficulty:"Problemas mistos",questions:[...mixedSet().slice(0,5),...percentSet().slice(5)]},
  {title:"Exercício 10",difficulty:"Desafio final • prova simulada",questions:[...eqProblemSet(8).slice(0,2),...areaMixedSet(8).slice(0,2),...volumeSet(8).slice(0,2),...propSet().slice(0,2),...percentSet().slice(0,2)]}
 ]
};
console.assert(missions.u3_math02.levels.reduce((s,l)=>s+l.questions.length,0)===100);
console.assert(missions.u3_math03.levels.reduce((s,l)=>s+l.questions.length,0)===100);
})();