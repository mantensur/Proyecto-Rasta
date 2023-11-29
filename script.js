var swiper = new Swiper(".mySwiper-1",{
slidesPerView:1,
spaceBetween:30,
loop:true,
pagination:{
    el:".swiper-pagination",
    clickcable:true,
},
navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
}



})
var swiper = new Swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        },
    }
    
    
    
    });
    let tabinputs = document.querySelectorAll("tabinput");

    tabinputs.forEach(function(input) {
        input.addEventListener('change',function(){
            let id = input.arialValuemax;
            let thisisSwiper = document. getElementById('swiper'+id);
            thisisSwiper.swiper.update();
        })
    });
