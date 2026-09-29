
(function(){
function addMath02(){
 const L1=[],L2=[],L3=[],L4=[],L5=[];
 const eqs=[[3,8,29],[5,-4,21],[7,2,44],[4,9,33],[6,-5,31],[8,3,59],[9,-7,38],[2,11,25],[10,-6,54],[12,5,89]];
 eqs.forEach(([a,b,c])=>{const x=(c-b)/a;L1.push(u3MathQ(`Resolva: ${a}x ${b>=0?'+ '+b:'- '+(-b)} = ${c}.`,x,[x+1,x-1,-x]))});
 const rects=[[8,5],[12,7],[9,6],[14,3],[11,8],[15,4],[13,9],[20,6],[7,7],[16,5]];
 rects.forEach(([a,b])=>L2.push(u3MathQ(`Qual é a área de um retângulo de ${a} cm por ${b} cm?`,a*b,[a+b,2*(a+b),a*b+10])));
 const shapes=[[10,6],[14,8],[9,12],[15,5],[18,7],[20,9],[11,4],[13,6],[16,10],[25,8]];
 shapes.forEach(([base,h],i)=>{const tri=i%2===0,ans=tri?base*h/2:base*h;L3.push(u3MathQ(`Calcule a área de um ${tri?'triângulo':'paralelogramo'} com base ${base} cm e altura ${h} cm.`,ans,[base+h,base*h,ans+base]))});
 const vols=[[4,3,5],[6,2,7],[8,5,3],[10,4,2],[9,3,6],[7,4,5],[12,2,3],[5,5,8],[11,3,4],[6,6,6]];
 vols.forEach(([a,b,c])=>L4.push(u3MathQ(`Um paralelepípedo mede ${a} cm × ${b} cm × ${c} cm. Qual é o volume?`,a*b*c,[a+b+c,2*(a*b+a*c+b*c),a*b*c+10])));
 const probs=[
 ["O triplo de um número mais 5 é 32. Qual é o número?",9,[8,10,11]],
 ["Um terreno retangular mede 18 m por 12 m. Qual é sua área?",216,[60,108,360]],
 ["Uma caixa mede 8 cm × 5 cm × 4 cm. Qual é seu volume?",160,[17,80,320]],
 ["O dobro de um número menos 7 é 19. Qual é o número?",13,[6,12,26]],
 ["Uma parede de 6 m por 3 m será pintada. Qual é a área?",18,[9,12,36]],
 ["Uma caixa de 10 cm × 3 cm × 7 cm ocupa qual volume?",210,[20,70,420]],
 ["Cinco vezes um número mais 2 é 42. Qual é o número?",8,[7,9,10]],
 ["Um piso quadrado tem lado 9 m. Qual é a área?",81,[18,36,90]],
 ["Um aquário mede 12 cm × 4 cm × 5 cm. Qual é seu volume?",240,[21,120,480]],
 ["Quatro vezes um número menos 6 é 30. Qual é o número?",9,[6,8,10]]
 ]; probs.forEach(x=>L5.push(u3MathQ(x[0],x[1],x[2])));
 missions.u3_math02={subject:"➗ Matemática nº 02",title:"Equações, áreas e volume",desc:"3ª unidade • 28/09 a 02/10 • 50 questões em 5 exercícios progressivos.",review:[["Equações","Ampliação da resolução de equações do 1º grau e situações-problema."],["Área","Cálculo de área de figuras planas e resolução de problemas."],["Volume","Volume do paralelepípedo = comprimento × largura × altura."],["Estratégia","Leia o problema, identifique os dados e escolha a operação antes de calcular."],["Unidades","Área usa unidades quadradas; volume usa unidades cúbicas."]],levels:[{title:"Exercício 1",difficulty:"Equações",questions:L1},{title:"Exercício 2",difficulty:"Área de retângulos",questions:L2},{title:"Exercício 3",difficulty:"Áreas de figuras planas",questions:L3},{title:"Exercício 4",difficulty:"Volume do paralelepípedo",questions:L4},{title:"Exercício 5",difficulty:"Problemas mistos",questions:L5}]};
}
function addMath03(){
 addMath02();
 const base=missions.u3_math02,L1=base.levels[0],L2=base.levels[2],L3=base.levels[3],L4=[],L5=[];
 const prop=[
 ["Se 3 cadernos custam R$ 18, quanto custam 5 cadernos?",30,[24,28,36]],
 ["4 pessoas fazem uma tarefa em 6 horas. Mantendo a produtividade, 8 pessoas fariam em quantas horas?",3,[6,8,12]],
 ["Uma receita para 4 pessoas usa 300 g de arroz. Para 10 pessoas, quantos gramas?",750,[600,700,900]],
 ["Se 6 máquinas produzem 900 peças, 2 máquinas produzem quantas no mesmo tempo?",300,[150,450,600]],
 ["Um carro percorre 180 km com 15 L. Mantido o consumo, com 25 L percorre:",300,[250,280,360]],
 ["12 operários fazem um serviço em 15 dias. Com 20 operários, no mesmo ritmo, seriam:",9,[12,18,25]],
 ["5 camisetas custam R$ 125. O preço de 8 camisetas é:",200,[160,180,250]],
 ["Uma torneira enche 60 L em 4 min. Em 10 min, enche:",150,[100,120,180]],
 ["8 caixas pesam 48 kg. 15 caixas iguais pesam:",90,[72,80,96]],
 ["3 impressoras fazem 600 páginas em certo tempo. 5 iguais fazem:",1000,[800,900,1200]]
 ]; prop.forEach(x=>L4.push(u3MathQ(x[0],x[1],x[2])));
 const pct=[
 ["20% de 150 é:",30,[20,25,35]],["Um produto de R$ 200 teve 15% de desconto. O desconto foi:",30,[15,20,40]],
 ["25% de 320 é:",80,[64,75,100]],["Uma turma de 40 alunos tem 60% presentes. Quantos estão presentes?",24,[20,28,30]],
 ["R$ 500 aumentaram 10%. O novo valor é:",550,[510,540,600]],["12 corresponde a 30% de qual número?",40,[36,42,60]],
 ["Um preço caiu de R$ 80 para R$ 68. O desconto percentual foi:",15,[10,12,20]],["75% de 240 é:",180,[160,170,200]],
 ["Em uma prova com 50 questões, 84% de acertos correspondem a:",42,[40,43,45]],["Um valor de R$ 120 aumentou 25%. O novo valor é:",150,[135,145,160]]
 ]; pct.forEach(x=>L5.push(u3MathQ(x[0],x[1],x[2])));
 missions.u3_math03={subject:"➗ Matemática nº 03",title:"Equações, áreas, volume, proporções e porcentagem",desc:"3ª unidade • 16 a 19/11 • 50 questões em 5 exercícios progressivos.",review:[["Equações","Resolva mantendo a igualdade dos dois lados."],["Área e volume","Retome área de figuras planas e volume do paralelepípedo."],["Razão e proporção","Compare grandezas e identifique relações diretas ou inversas."],["Regra de três","Organize grandezas correspondentes e encontre o valor desconhecido."],["Porcentagem","Converta a taxa percentual em fração ou decimal para calcular."]],levels:[L1,L2,L3,{title:"Exercício 4",difficulty:"Razões e proporções",questions:L4},{title:"Exercício 5",difficulty:"Porcentagem e regra de três",questions:L5}]};
}
addMath03();
})();