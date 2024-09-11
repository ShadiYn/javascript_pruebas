/*
asdasdasd
asdasdasd
comentarios
*/

//variables
let nombreVariable = 'valor de la variable';
console.log(nombreVariable)
let txt = 'hola q tal';
let number =5;
console.log(number)
let miText= "holaaa";
console.log(miText)

//variables typeof
let texto = "hola q tal";
let numero =5;
console.log(typeof number)
console.log(typeof txt)

//tipos datos primitivos javascript
//number
let i =5;
let j = 3;
console.log(i+j)
console.log(j*i)
//string
let texto2="Soy una cadena";

console.log('texto "alakazham"'); 
console.log(texto2); 


//conversion de tipos
//de numero a text
let n1 =5;
let numberConvertedIntext = String(n1);
let numberconvertedInText2 = ''+number;

let i2 =5;
let j3=3;

console.log(''+i2+j)

//convertir un texto en un numero
let texto1='5';
let number1 = Number(texto1);
let number2 = +texto1;
let number3 = parseInt(texto1) //si hubiera decimalos los eliminaria porque lo convierte a entero

console.log(number1)
console.log(number2)
console.log(number3)

//condicional if+

const dato1 =10
const dato2 =3

if(dato1 > dato2){
    console.log('el dato',dato1,'es mas grande que ',dato2)
}
//ELSE IF

const d1 =1
const d2 = 5

if(d1 > d2){
    console.log(d1,'mas grande que ', d2)
}else if(d2 == d1){
    console.log(d2,'mas grande que ', d1)

}else{
    console.log('va a ser que no')
}

//bucle for

for(let i =0; i<=10;i++){
    console.log(i)
}

//funciones
/*function [nombreDeLaFuncion]([parámetros de la función, si los tuviese]){
   [código de la función]
}*/

//con parametros
function saludarPersona(nombrePersona){
    console.log('hola',nombrePersona,'te damos la bienvenida')
}

saludarPersona('Sebastian');

function saludarAlumno(){
    console.log('bUENAS TARDES')
}

saludarAlumno();

//funcion que no devuelve nada

function noDevuelveNada(a,b){
    const resultado = a+b
    console.log(resultado);
}

noDevuelveNada(10,30);

//funcion que devuelve algo
function devuelveValor(a,b){
    const resultado = a*b;
        return resultado;
}
const devuelveValor2 = devuelveValor(3,7);
console.log(devuelveValor2)

//para llamar funciones al cabo de un tiempo 2 maneras

//llamarlas al cabo de 2 segundos
    //setTimeout(devuelveValor2,2000)

    //llamar cada 2 segundos
        //setInterval(devuelveValor2,2000)

    //funciones flecha con return
    const suma1 = (x,y)=> x*y; //esto estaria totalmente correcto es decir, la funcion devuelve x*y
    const valor3 = suma1(2,5);
    console.log(valor3);