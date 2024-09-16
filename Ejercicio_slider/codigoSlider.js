//variable step que incrementará una unidad cada vez que hagamos click en el botón/enlace...
// la variable se multiplicará por 512 para obtener el margin left que ebemos aplicar a la capa, para que se desplaze horizontalmente
let step =0;
const sliderWidth=512
const slider = document.querySelector('.slider');

const moveSlider = () =>{
    step = step >-2 ? step -1:0;
    console.log(step);
	slider.style.marginLeft = sliderWidth * step + 'px';

}
document.querySelector('.nextButton').addEventListener('click', moveSlider);
