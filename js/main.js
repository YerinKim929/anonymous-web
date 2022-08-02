// VISUAL애서 애플리케이션 제목이 나타나는 효과 (하나 더 추가할 것)
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7 1.4
    opacity: 1,
  });
});
