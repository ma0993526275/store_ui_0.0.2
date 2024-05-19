let menu = document.querySelector('.alt-menu');

let iconMenu = document.querySelector('.icon-menu');

let mainIconMenu = document.querySelector('.main-icon-menu');

let mainManu = document.querySelector('.main-manu ul');


mainIconMenu.onclick = function () {

    mainManu.classList.toggle('flex');
}

iconMenu.onclick = function (){

    menu.classList.toggle('flex');

}

document.onclick = function (e){

    if(e.target.className !== 'fas fa-user fa-2x fa-fw icon-menu')

        menu.classList.remove('flex');
        
    if(e.target.className !==  'main-icon-menu')

        mainManu.classList.remove('flex');
}