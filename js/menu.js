const menu = document.querySelector('button');
const itemMenu = document.querySelectorAll('ul');
const nav = document.querySelector('nav');

menu.addEventListener('click', function(event){
    itemMenu.forEach(item =>{
        item.classList.toggle('active');
    })
});