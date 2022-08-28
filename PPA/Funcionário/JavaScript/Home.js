const iconMenu = document.querySelector('.Icon_Menu');
const SideBar = document.querySelector('.SideBar');
const home = document.querySelector('.dados_home');
const main = document.querySelector('.dados_main');
const sala = document.querySelector('.caixa-chave');
const aux = document.querySelector('.item_menu');

function movHome(){
    SideBar.classList.toggle('active');
    home.classList.toggle('active');
    main.classList.toggle('active');
    sala.classList.toggle('active');
    aux.classList.toggle('active');
}

iconMenu.addEventListener('click', movHome);