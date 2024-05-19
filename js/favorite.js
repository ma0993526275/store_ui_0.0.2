let icon = document.querySelectorAll('.products i');

let form = document.querySelectorAll('.fr ');

let btn = document.querySelector('.btn-sub-none');

console.log(btn);

icon.forEach(element => {

    element.onclick = function (){

       element.classList.toggle('select');

       btn.click();
    }
});

