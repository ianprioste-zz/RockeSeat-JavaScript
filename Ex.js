// var endereco = {
//     rua: "Rua dos pinheiros",
//     numero: 1293,
//     bairro: "Centro",
//     cidade: "São Paulo",
//     uf: "SP"
// };

// console.log('O usuário mora em', endereco.cidade, '/', endereco.uf, 'no bairro', endereco.bairro, 'na rua "', endereco.rua, '" com nº', endereco.numero);

// function pares(x, y) {
//     let npares = []
//     while (x < y) {
//         if (x % 2 == 0) {
//             npares.push(x)
//         }
//         x++;
//     }
//     return npares;
// }

// console.log(pares(32, 321))

// function temHabilidade(skills) {
//     for (let i = 0; i < skills.length; i++) {
//         if (skills[i] === 'Javascript') {
//             return true
//         }
//     }
//     return false
// }
// var skills = ["Node.js", "Javascript", "React Native"];
// console.log(temHabilidade(skills)); // true ou false

// function temHabilidade(skills) {
//     return skills.indexOf('Javascript', 0) == 0 ? true : false;
// }
// var skills = ["Javascript", "ReactJS", "React Native"];
// console.log(temHabilidade(skills)); // true ou false

// function experiencia(anos) {
//     switch (true) {
//         case (anos <= 1):
//             return 'Iniciante';
//         case (anos <= 3):
//             return 'Intermediário';
//         case (anos <= 6):
//             return 'Avançado';
//         default:
//             return 'Jedi Master'
//     }
// }
// var anosEstudo = 3;
// console.log(experiencia(anosEstudo));
// // De 0-1 ano: Iniciante
// // De 1-3 anos: Intermediário
// // De 3-6 anos: Avançado
// // De 7 acima: Jedi Master


// var usuarios = [{
//         nome: "Diego",
//         habilidades: ["Javascript", "ReactJS", "Redux"]
//     },
//     {
//         nome: "Gabriel",
//         habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
//     }
// ];

// for (usuario of usuarios) {
//     console.log('O', usuario.nome, 'possui as habilidades:', usuario.habilidades)
// }