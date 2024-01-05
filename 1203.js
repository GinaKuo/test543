let currentIndex = 0;

function changeSlide(direction) {
  const carousel = document.getElementById('carousel');
  const totalSlides = document.querySelectorAll('#carousel img').length;
  const slideWidth = document.getElementById('carousel-container').offsetWidth;

  // 計算下一個索引
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  // 設定transform屬性以移動跑馬燈
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

document.getElementById('mobile-menu').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('show');
});