window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});

function toggleMenu(){
    const menuToggle=document.querySelector('.menuToggle');
    const navigation=document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
function changeColor(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    var form=document.querySelector('.contactForm');
    form.classList.toggle("dark");
  
}
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween:24,
    loop:'true',
    slidesPerView:'auto',
    centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBlullets:true,
    },
    breakpoints: {
        992: {
          spaceBetween: 80,
        },
      },
});