// mySwiper1___________

var swiper = new Swiper('.mySwiper1', {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove : false,
  on: {
    activeIndexChange: function () {
      // alert(this.realIndex+'번째 slide입니다.');
      const slideIndex = this.realIndex + 1;

      if (slideIndex == 2) {
        s3_slide_02();
      }
    },
  },
});

const tllA = gsap.timeline();

function s3_slide_02() {
  let air = document.querySelectorAll('#s3 .air span');
  let bg = document.querySelectorAll('#s3 .bg span');

  tllA.from(air, {opacity: 0, y: 600 , 
    stagger:{
      each: 0.2,
      from: 'edges',
      duration: 10,
    }
  });
  tllA.from(bg, {
    keyframes: {
      '0%': {},
      '30%': { y: 1, rotation: 2 },
      '60%': { y: -1 },
      '100%': { y: 1, rotation: -2 },
    },
    duration: 2,
    repeat: -1,
    yoyo: true,
  });
};

// mySwiper2_________________

var swiper = new Swiper('.mySwiper2', {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove : false,
  on: {
    activeIndexChange: function () {
      // alert(this.realIndex+'번째 slide입니다.');
      const slideIndex = this.realIndex + 1;

      if (slideIndex == 2) {
        s4_slide_02();
      }
    },
  },
});

const tllB = gsap.timeline();

function s4_slide_02() {
  let mainMobile = document.querySelector('#s4 .content .frame .mobile');
  let mainTablet = document.querySelector('#s4 .content .frame .tablet');

  tllB.from(mainMobile, {x: 500,opacity:0, duration: .5},'+=.5')
  tllB.from(mainTablet, {x: -500,opacity:0, duration: .5},'<')
};

// mySwiper3_________________

var swiper = new Swiper('.mySwiper3', {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove : false,
  on: {
    activeIndexChange: function () {
      // alert(this.realIndex+'번째 slide입니다.');
      const slideIndex = this.realIndex + 1;

      if (slideIndex == 2) {
        s5_slide_02();
      }
    },
  },
});

const tllC = gsap.timeline();

function s5_slide_02() {
  let mainImage = document.querySelector('#s5 .content .frame .image .phone');
  let logoImage = document.querySelector('#s5 .content .app_logo img');
  let logoText = document.querySelector('#s5 .content .app_logo p');

  tllC.from(mainImage, {y: 90, duration: 1});
  tllC.from(logoImage, {opacity:0, x: 600, y: 500, duration: 1});
  tllC.from(logoText, {opacity:0, duration: 1});
  tllC.from(logoText, {
    keyframes: {
      '0%': { y: -5},
      '50%': {y:-8},
      '100%': { y: -5},
    },
    duration: 1,
    repeat: -1,
    yoyo: true,
  }, "+=1");
};