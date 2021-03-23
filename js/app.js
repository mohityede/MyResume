const hamButton = document.getElementById('hamburger');
const nevList = document.getElementById('nav-list');

function toggleButton(){
    nevList.classList.toggle('show');
}

hamButton.addEventListener('click', toggleButton);