const buttonHeight = 150;
const buttonWidth = 50;

const maxHeight = window.innerHeight - buttonHeight
const maxWidht = window.innerWidth - buttonWidth

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');

    button.addEventListener('click', () => alert('Clicaste! mas o nome não muda sera Edinho para sempre'));

    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWidht + 1)) + 'px';
       
    })
});