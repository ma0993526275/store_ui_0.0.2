let titel = document.querySelectorAll('.titel span');

let images = document.querySelectorAll('.box');

titel.forEach((element , index )=> {
    element.addEventListener('click',(e)=> {
        titel.forEach(element => {
            element.classList.remove('acitv');
    });
    e.target.classList.add('acitv');

    if(e.target.dataset.control == 'all'){
        images.forEach(element => {
            element.classList.remove('none');
            console.log(element);
          });
    }else{
    images.forEach(element => {
      element.classList.add('none');
      console.log(element);
    });

   let show = document.querySelectorAll('.' + e.target.dataset.control)

   show.forEach(element => {
    element.classList.remove('none');

   });
    }
});
});
