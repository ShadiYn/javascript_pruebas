const box = document.querySelector('.box');







const animate = () => {
    box.classList.add('animate__animated', 'animate__bounce');
}

box.addEventListener('animationend', () => {
    box.classList.remove('animate__animated', 'animate__bounce');
});




const animate2 = () => {
    box.classList.add('animate__animated', 'animate__rubberBand');
}

box.addEventListener('animationend', () => {
    box.classList.remove('animate__animated', 'animate__rubberBand');
});



const animate3 = () => {
    box.classList.add('animate__animated', 'animate__tada');
}

box.addEventListener('animationend', () => {
    box.classList.remove('animate__animated', 'animate__tada');
});


document.querySelector('.botarr').addEventListener('click', animate);
document.querySelector('.estirar').addEventListener('click',animate2);
document.querySelector('.shake').addEventListener('click',animate3);
