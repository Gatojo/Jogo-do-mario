const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {

        mario.Classlist.remove('jump');   

    } , 500);

}

document.addEventListener('keydown', jump);
