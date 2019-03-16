//наведение на элемент
$('.menu-el').hover(show);

function show(){
    //отобразить элемент с классом modal
    $('.modal').toggle();
    // $('.modal-el').html(this.innerText);
   
    //создать картинку
    let imgSrc = $(this).data('img');
    let img = $(`<img src=${imgSrc}>`);
    console.log(img);
   
    $('.modal-el').html(img);
   
    //смена параметра фильтра
    let randomNumber = Math.random()*0.02;
    $('feTurbulence').attr('baseFrequency' , randomNumber);

    

    
    // console.log(this);
}
