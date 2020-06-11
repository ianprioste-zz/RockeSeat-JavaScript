// MÓDULO 1
// VARIÁVEIS //
// var nome = 'Ian';
// var idade = 27;
// var peso = 79.5;
// var humano = true;
// var alunos = ['Ian', 'Diego', 'Gabriel'];
// var aluno = {
//  nome: 'Ian',
//  idade: 27,
//  peso: 79.5,
//  humano: true
// };

// console.log(alunos[1]);
// console.log(aluno.peso) #}

// Operações Matemáticas //
// var x = 10, y = 5;    
// console.log(x,5)    
// var resultado = x+y;
// console.log(resultado)
// x = x+3;
// console.log(x)
// x += 3;
// console.log(x)

// FUNÇÕES //
//function soma (numero1, numero2){
//    var resultado = numero1 + numero2;
//    return resultado;
//}
//var resultado = soma(1,2);
//console.log(resultado);

// CONDICIONAIS //
//IF ELSE //
// function retornaSexo(sexo){
//    if (sexo === 'M'){
//        return 'Masculino';
//    } else if (sexo === 'F') {
//        return 'Feminino';
//    } else {
//        return 'Outro';
//    }
//}

//var resultado = retornaSexo('F');  
//console.log(resultado);

// Switch //
//    function retornaSexo(sexo){
//        switch(sexo){
//            case 'M':
//                return 'Masculino';
//            case 'F':
//                return 'Feminino';
//            default:
//                return 'Outro';
//        }
//    }
//    var resultado = retornaSexo('T');  
//    console.log(resultado);


// INTERVALO E TIMEOUT //

// function exibeAlgo(){
//     console.log('Hello World');
// }
// // Executa a função a cada 1segundo
// setInterval(exibeAlgo, 1000);

// // Aguarda 5s para executar a função
// setTimeout(exibeAlgo, 5000);

//EXERCÍCIOS - M01    

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
// 

// MÓDULO 2

// DOM - É a árvore de elementos no HTML (div, botão, todos os elementos visuais)

    //// Buscar Elemento
    // var inputElement = document.querySelector('input[name=nome]');
    // var btnElement = document.querySelector('button.botao')
    // btnElement.onclick = function(){
    //     alert(inputElement.value)
    // }
    // console.log(inputElement)

    //// Incluir Elemento
    // var linkElement = document.createElement('a');
    // linkElement.setAttribute('href','http://google.com');
    // var textElement = document.createTextNode('Acessar Google');
    // linkElement.appendChild(textElement);
    // var containerElement = document.querySelector('#app')
    // containerElement.appendChild(linkElement)
    // var inputElement = document.querySelector('#nome');
    
    //// Remover Elemento
    // containerElement.removeChild(inputElement)

    // // Controlar estilizações CSS
    // var boxElement = document.querySelector('.box');

    // boxElement.style.width = 100;
    // boxElement.style.height = 100;
    // boxElement.style.backgroundColor = '#f00';   

    // EXERCÍCIOS - M02

    