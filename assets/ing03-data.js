const Q=(q,o,a,e)=>({q,o,a,e});const M=(t,d,n,a)=>({t,d,notes:n,training:a.slice(0,3),quiz:a});window.MISSION50_DATA={subject:'Inglês • Avaliação nº 02',icon:'🇬🇧',map:'ingles03-v3.html',videos:[],missions:[
M('Places in town','Reconhecer lugares da cidade e escolher o local adequado para cada situação.',['Places in town são locais da cidade, como bank, hospital, bakery, supermarket e library.','Leia a situação: o que a pessoa precisa fazer? Isso ajuda a escolher o lugar correto.','Algumas questões misturam vocabulário e compreensão de contexto.'],[
Q('You need to borrow a book. Where should you go?',['Library','Bakery','Hospital','Bank'],0,'You borrow books at a library.'),
Q('Where can you buy bread and cakes?',['Museum','Bakery','Police station','School'],1,'A bakery sells bread and cakes.'),
Q('Your little brother is sick. Where do you take him?',['Park','Hospital','Cinema','Post office'],1,'A hospital is the correct place for medical care.'),
Q('You want to watch a movie. Where do you go?',['Cinema','Bank','Pharmacy','Library'],0,'You watch movies at the cinema.'),
Q('Where can you buy medicine?',['Pharmacy','Bakery','Museum','Restaurant'],0,'You buy medicine at a pharmacy.'),
Q('You need to buy fruit, milk and cereal. Where do you go?',['Supermarket','Police station','Cinema','Library'],0,'A supermarket sells food and household products.'),
Q('Where do police officers work?',['Police station','Hospital','Bakery','Park'],0,'Police officers work at a police station.'),
Q('You need to send a letter. Which place is best?',['Post office','Museum','School','Restaurant'],0,'You send letters at a post office.'),
Q('Which place is mainly for seeing paintings and old objects?',['Museum','Bank','Pharmacy','Bakery'],0,'Museums display art and historical objects.'),
Q('You want to eat a meal prepared for you. Where do you go?',['Restaurant','Library','Bank','Post office'],0,'You eat prepared meals at a restaurant.')
]),
M('Directions','Entender instruções simples para se deslocar pela cidade.',['Go straight = siga em frente. Turn left = vire à esquerda. Turn right = vire à direita.','Next to = ao lado de. Across from = em frente a. Between = entre.','Leia a sequência inteira antes de escolher o destino ou a instrução correta.'],[
Q('Which instruction means “vire à direita”?',['Turn left','Go straight','Turn right','Stop here'],2,'Turn right means vire à direita.'),
Q('Which instruction means “siga em frente”?',['Go straight','Turn left','Across from','Next to'],0,'Go straight means siga em frente.'),
Q('The bank is next to the bakery. What does “next to” mean?',['Atrás de','Ao lado de','Longe de','Dentro de'],1,'Next to means ao lado de.'),
Q('The cinema is across from the park. Where is the cinema?',['Em frente ao parque','Ao lado do parque','Dentro do parque','Atrás do parque'],0,'Across from means em frente a.'),
Q('The library is between the bank and the museum. Which place is in the middle?',['The bank','The museum','The library','The park'],2,'Between means entre two places; the library is in the middle.'),
Q('You are walking north. The school is on your left. What should you do to reach it?',['Turn left','Turn right','Go back home','Keep going forever'],0,'If the school is on your left, turn left.'),
Q('Read the directions: “Go straight, then turn right. The pharmacy is next to the bank.” What happens first?',['Turn right','Go straight','Enter the bank','Turn left'],1,'The first instruction is go straight.'),
Q('Which sentence gives a direction, not a location?',['The hospital is next to the bank.','Turn left at the corner.','The park is across from the school.','The museum is between two shops.'],1,'Turn left at the corner tells you what to do.'),
Q('The supermarket is across from the school and next to the bakery. Which statement is true?',['It is in front of the school.','It is inside the school.','It is far from the bakery.','It is behind the bakery.'],0,'Across from means in front of/opposite the school.'),
Q('“Turn left at the bank and go straight. The museum is on your right.” Where should you look after going straight?',['To your right','To your left','Behind you','At the bank'],0,'The directions say the museum is on your right.')
]),
M('Going to: plans','Usar be going to para falar de planos futuros em frases afirmativas e negativas.',['Use be going to for plans: I am going to study. She is going to travel. They are going to play.','Negative forms: I am not going to..., He/She isn’t going to..., We/You/They aren’t going to...','Choose am/is/are according to the subject.'],[
Q('Complete: “I ___ going to visit my grandmother tomorrow.”',['am','is','are','be'],0,'With I, use am: I am going to...'),
Q('Complete: “She ___ going to watch a movie tonight.”',['am','are','is','be'],2,'With she, use is.'),
Q('Complete: “They ___ going to play soccer after school.”',['is','are','am','be'],1,'With they, use are.'),
Q('Choose the correct sentence.',['He is going to study tonight.','He are going to study tonight.','He am going to study tonight.','He going to studies tonight.'],0,'He takes is, followed by going to + base verb.'),
Q('Choose the correct negative sentence for “She is going to swim.”',['She not going to swim.','She isn’t going to swim.','She aren’t going to swim.','She doesn’t going to swim.'],1,'The correct negative is she isn’t going to swim.'),
Q('Complete: “We ___ going to go to the cinema today.”',['is','am','are','be'],2,'With we, use are.'),
Q('Which sentence means “Eu não vou estudar esta noite”?',['I am not going to study tonight.','I is not going to study tonight.','I aren’t going to study tonight.','I not going study tonight.'],0,'I am not going to... is the correct structure.'),
Q('Complete: “My brother ___ going to eat dinner at 7.”',['are','is','am','be'],1,'My brother = he, so use is.'),
Q('Choose the correct form: “You ___ going to listen to music later.”',['am','is','are','be'],2,'With you, use are.'),
Q('Which sentence is NOT correct?',['They are going to travel.','She is going to read.','I am going to sleep.','We is going to eat.'],3,'With we, the verb must be are, not is.')
]),
M('Going to: questions','Formar perguntas e respostas curtas com be going to.',['Questions invert the verb be and the subject: Is she going to...? Are they going to...?','Short answers repeat only be: Yes, she is. No, they aren’t.','With I: Am I going to...? With he/she: Is... With you/we/they: Are...'],[
Q('Choose the correct question.',['Is she going to eat dinner?','Does she going to eat dinner?','She is going to eat dinner?','Are she going to eat dinner?'],0,'With she, use Is she going to...?'),
Q('Complete: “___ they going to play soccer?”',['Is','Am','Are','Do'],2,'With they, use Are.'),
Q('Complete: “___ he going to visit the museum?”',['Are','Is','Am','Do'],1,'With he, use Is.'),
Q('Question: “Are you going to the cinema?” Choose a correct short answer.',['Yes, I am.','Yes, I is.','Yes, I are.','Yes, I going.'],0,'For you → I in the answer: Yes, I am.'),
Q('Question: “Is she going to study?” Choose the negative short answer.',['No, she aren’t.','No, she isn’t.','No, she not.','No, she doesn’t.'],1,'The correct answer is No, she isn’t.'),
Q('Question: “Are they going to travel?” Choose the positive short answer.',['Yes, they is.','Yes, they am.','Yes, they are.','Yes, they going.'],2,'With they, use are.'),
Q('Which is the correct question for “We are going to New York City”?',['Are we going to New York City?','Is we going to New York City?','Do we going to New York City?','We are going to New York City?'],0,'Question form: Are we going to...?'),
Q('Complete: “___ I going to need a jacket?”',['Is','Are','Am','Do'],2,'With I, the question begins Am I...?'),
Q('Choose the correct pair.',['Is he going to eat? — Yes, he is.','Is he going to eat? — Yes, he are.','Are he going to eat? — Yes, he is.','Does he going to eat? — Yes, he does.'],0,'Is he...? Yes, he is.'),
Q('Which answer matches “Are we going to listen to music?”',['No, we aren’t.','No, we isn’t.','No, we am not.','No, we don’t going.'],0,'With we, the short negative answer is No, we aren’t.')
]),
M('Final Review','Misturar Directions, Places in town e Going to em situações mais próximas de prova.',['Combine vocabulário da cidade, instruções de caminho e planos futuros.','Preste atenção ao sujeito para escolher am/is/are.','Nas questões de direção, leia todas as pistas antes de responder.'],[
Q('You are at the bank. Go straight and turn left at the bakery. The library is next to the bakery. Where are you going?',['To the library','To the hospital','To the park','To the cinema'],0,'The directions place the library next to the bakery after the left turn.'),
Q('Complete: “Tomorrow, we ___ going to visit the museum.”',['is','am','are','be'],2,'With we, use are.'),
Q('Which place is best if you need medicine before going home?',['Pharmacy','Cinema','Museum','School'],0,'Medicine is bought at a pharmacy.'),
Q('Read: “The supermarket is across from the bank.” What does this tell you?',['They are opposite each other.','They are the same building.','The supermarket is behind the bank.','The bank is inside the supermarket.'],0,'Across from means opposite/in front of.'),
Q('Choose the correct negative sentence.',['They aren’t going to play today.','They isn’t going to play today.','They don’t going to play today.','They not are going to play today.'],0,'With they, the negative is aren’t going to.'),
Q('Choose the correct question.',['Are you going to go to the cinema?','Is you going to go to the cinema?','Do you going to go to the cinema?','You are going to go to the cinema?'],0,'With you, use Are you going to...?'),
Q('Directions: “Go straight. Turn right at the bank. The hospital is on your left.” What do you do at the bank?',['Turn right','Turn left','Stop and go back','Cross the park'],0,'The instruction says turn right at the bank.'),
Q('Question: “Is Pedro going to eat at the restaurant?” Which short answer is correct?',['Yes, he is.','Yes, he are.','Yes, Pedro am.','Yes, he going.'],0,'Pedro = he, so Yes, he is.'),
Q('The museum is between the library and the cinema. Which statement is correct?',['The museum is in the middle of the two places.','The museum is across from both places.','The library is inside the museum.','The cinema is next to itself.'],0,'Between means in the middle of two places.'),
Q('Read: “Sofia and Ana are going to the bakery. First, they go straight and then turn left.” Which statement combines the plan and the direction correctly?',['They are going to the bakery, and they need to turn left after going straight.','They is going to the bakery and turn right first.','They are going to the hospital and go back.','They am going to the bakery and never turn.'],0,'This option matches both the going-to plan and the directions.')
])
]};