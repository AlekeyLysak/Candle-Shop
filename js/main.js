const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
   menuMobile.classList.toggle('menu-open');
});


const swiperOne = new Swiper('.feedback__slider', {
   loop: true,
   pagination: {
<<<<<<< HEAD
      el: '.swiper-pagination',
   },
});
=======
     el: '.swiper-pagination',
   },
});
 
>>>>>>> 02402f0c4e5c25e063b4e9cf23a78358c888ddcc

const swiperTwo = new Swiper('.certificates__slider', {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 20,
   pagination: {
<<<<<<< HEAD
      el: '.swiper-pagination',
   },
   breakpoints: {
      640: {
         slidesPerView: 3,
      },
      480: {
         slidesPerView: 2,
      },
      360: {
         slidesPerView: 1,
      },
   },
});
=======
     el: '.swiper-pagination',
   },
 });
>>>>>>> 02402f0c4e5c25e063b4e9cf23a78358c888ddcc
