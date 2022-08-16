// VISUAL애서 애플리케이션 제목이 나타나는 효과
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7 1.4
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".picture .swiper-container", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, // 5초
  },
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); //2022
