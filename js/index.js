
// 클릭 시 해당 섹션으로 스크롤
document.querySelectorAll('.custom-nav li').forEach(dot => {
  dot.addEventListener('click', () => {
    const targetId = dot.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 스크롤 감지해 현재 active 표시
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, footer');
  let current = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop;
    const secHeight = sec.clientHeight;
    if (pageYOffset >= secTop - secHeight / 3) {
      current = sec.getAttribute('id');
    }
  });
  document.querySelectorAll('.custom-nav li').forEach(li => {
    li.classList.remove('active');
    if (li.getAttribute('data-target') === current) {
      li.classList.add('active');
    }
  });
});

document.getElementById("langToggle").addEventListener("click", function (event) {
  event.preventDefault(); // 기본 링크 이동 막기
  const langText = document.getElementById("langText");

  if (langText.textContent.trim() === "KO") {
    langText.textContent = "EN";
    this.setAttribute("aria-label", "현재 영어, 한국어로 변경");
  } else {
    langText.textContent = "KO";
    this.setAttribute("aria-label", "현재 한국어, 영어로 변경");
  }
});

var publiishingSwiper = new Swiper(".swiper.publiishing.mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 1200,  // 전환 시간
  autoplay: {
    delay: 3000,             // 4초마다 전환
    disableOnInteraction: false
  },
  effect: "fade",            // 자연스러운 페이드 효과
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper.publiishing.mySwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper.publiishing.mySwiper .swiper-button-next",
    prevEl: ".swiper.publiishing.mySwiper .swiper-button-prev",
  },
});

// 마우스 오버 시 멈추기 / 벗어나면 재생하기
const pubSwiperEl = document.querySelector(".swiper.publiishing.mySwiper");
pubSwiperEl.addEventListener("mouseenter", () => {
  publiishingSwiper.autoplay.stop();
});
pubSwiperEl.addEventListener("mouseleave", () => {
  publiishingSwiper.autoplay.start();
});
