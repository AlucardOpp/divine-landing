export const reviewSlider = () => {
  const sliderNode = document.querySelector('.reviews__slider');
  if (!sliderNode) {
    return;
  }

  const sliderControls = document.querySelector('.reviews__slider-controls');
  const nextEl = sliderControls.querySelector('.swiper-button-next');
  const prevEl = sliderControls.querySelector('.swiper-button-prev');
  const paginationEl = sliderControls.querySelector('.swiper-pagination');

  // eslint-disable-next-line
  const slider = new Swiper(sliderNode, {
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 22,
    breakpoints: {
      1023: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl,
      prevEl,
    },
    pagination: {
      el: paginationEl,
      type: 'fraction',
      renderFraction(currentClass, totalClass) {
        return `<span class="${currentClass}"></span>` + '/' + `<span class="${totalClass}"></span>`;
      },
    },
  });
};
