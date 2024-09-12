const dni = prompt("Introduce tu dni pero sin la letra porfavor");
const text = parseInt(dni);

const calcularLetra = (text)=>{
    if(text.length === 8 ){
        const resto = text % 23;
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE'
        const letra = letras.charAt(resto);
        return letra;
    } else{
        console.log('hola2')
    }
}
const letra = calcularLetra(dni);
console.log('La letra del dni',dni,'es: ',letra)
