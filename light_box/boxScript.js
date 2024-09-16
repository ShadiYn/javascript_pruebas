const lightBox = document.querySelector("#lightboxContainer");

const showBox =()=>{
    lightboxContainer.style.display = 'block';

}

const hideBox=()=>{
    lightboxContainer.style.display='none';
}
document.querySelector('.button').addEventListener('click',showBox);
document.querySelector('.btnClose').addEventListener('click',hideBox);