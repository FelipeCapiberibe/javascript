// console
console.log("Teste"); 
// console.error("TesteError"); 
// console.warn("Teste Aviso");

// variáveis: são formas de guardar algum valor na memoria para uso posterior no nosso software
var x = 10; 
let y =  15; 
const z = 20;

if (1) {
    let y = 55    
    console.log(y);
}; 
console.log(x); 
console.log(y);
console.log(z);

// tipos de dados
const nome = "felipe"; 
console.log(nome);
console.log( typeof nome); // o typeof exibe o tipo de dado

const linguagens = [ "JavaScript" , "PHP" , "Python" , "22" ]; 
console.log( linguagens )
console.log( typeof linguagens )


const user = { email: "luizfelipe@teste.com" , password: "teste12345" , idade: 30 } //object literals 
console.log( user )
console.log( typeof user )