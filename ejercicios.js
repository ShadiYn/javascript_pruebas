//ejercicio 1
let n=5;
console.log(n)

//ejercicio 2
let texto = 'Hola';
console.log(texto)

//ejercicio 3
let a;
a=7;
let b = a;
console.log(a)

//ejercicio 6
//intercambiar contendio de dos variables
let i =5;
let j = 7;
let k =i;
i=j
j=k
console.log('a:',i)
console.log('b:',j)

//concatenación
const t = 'texto2';
console.log(`texto1 ${t} texto3`);

console.log('adición ', 7+2);
console.log('sustracción ', 7-2);
console.log('multiplicación ', 7*2);
console.log('división ', 7/2);
console.log('resto ', 7%2);
console.log('potencia', 7**2);


//sugar sintax
//Estas 3 expresiones son equivalentes:
i = i + 1;
i++;
i += 1;


//ejercicios bucle for
//1. imprimir numeros pares enteros
for(let i =0; i<100;i++){
    if(i%2==0){
        console.log(i)
    }
}

//3.
//numeros del 1 al 20 divisibles por 3 fizz
//divisibles por 5 buzz
//por 3 y 5 fizzbuzz
for(let i=0; i<20;i++){
    if(i%3==0){
        console.log('fizz')
    } if(i%5==0){
        console.log('buzz')
    } if( i%5 ==0 && i%3==0){
        console.log("fizzBuzz")
    }else{
        console.log(i)
    }
}