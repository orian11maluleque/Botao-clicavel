const buttonHeight = 150;
const buttonWidth = 50;

const maxHeight = window.innerHeight - buttonHeight
const maxWidht = window.innerWidth - buttonWidth

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');


    button.addEventListener('click', () => {
        button.style.left = Math.floor(Math.random() * (maxWidht + 1)) + 'px';

        button.style.top = Math.floor(Math.random() * (maxHeight + 1 )) + 'px';
    })

});