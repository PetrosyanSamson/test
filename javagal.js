document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const pager = document.querySelector('.pager');
  
    const slideWidth = slides.clientWidth / 3; // Ширина одного изображения
  
    let currentSlide = 0;
  
    function updatePager() {
      const totalPages = Math.ceil(slides.childElementCount / 3); // Показываем 3 слайда
      const currentPage = Math.floor(currentSlide / 3) + 1;
      pager.textContent = `Page ${currentPage} / ${totalPages}`;
    }
  
    function updateButtons() {
      prevBtn.disabled = currentSlide === 0;
      nextBtn.disabled = currentSlide >= slides.childElementCount - 3; // Показываем 3 слайда
    }
  
    function slideTo(index) {
      currentSlide = index;
      slider.scrollTo({
        left: slideWidth * currentSlide,
        behavior: 'smooth'
      });
      updatePager();
      updateButtons();
    }
  
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        slideTo(currentSlide - 3); // Перемещаемся на три изображения влево
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentSlide < slides.childElementCount - 3) { // Показываем 3 слайда
        slideTo(currentSlide + 3); // Перемещаемся на три изображения вправо
      }
    });
  
    updatePager();
    updateButtons();
  });
  