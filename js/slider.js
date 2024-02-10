const slider_list = document.querySelectorAll('.slider-container'); //разные слайдеры
console.log(slider_list[0].children)
for (let i = 0; i < slider_list.length; i++) {

    function updateSlider(S) {
    // Получаем элементы слайдера
    const slider = S.children[0];
    const prevButton = S.children[1];
    const nextButton = S.children[2];
    const slides = Array.from(slider.querySelectorAll('img','iframe'));
    if (slider.querySelectorAll('iframe').length != 0) {
        slides.push(Array.from(slider.querySelectorAll('iframe'))[0]);
    }
    const slideCount = slides.length;
    let slideIndex = 0;

    // Устанавливаем обработчики событий для кнопок
    showPreviousSlide()
    showNextSlide()
    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Функция для показа предыдущего слайда
    function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    }

    // Функция для показа следующего слайда
    function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    }

    // Функция для обновления отображения слайдера
    function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
        slide.style.display = 'block';
        } else {
        slide.style.display = 'none';
        }
    });
    }
    }   
    // Инициализация слайдера
    updateSlider(slider_list[i]);
}
