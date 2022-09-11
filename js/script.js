const mario = document.querySelector('.mario');

const jump = () => {
    console.log("entrou na funçao")
    mario.classList.add('jump');
    
    setTimeout(() => {

        mario.classList.remove('jump');   

    } , 500);

}

document.addEventListener('keydown', jump);
