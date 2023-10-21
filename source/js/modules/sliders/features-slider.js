const slider = document.querySelector('.features__slider');

const featuresSlider = () => {
  if (!slider) {
    return;
  }

  const nextEl = slider.querySelector('.swiper-button-next');
  const prevEl = slider.querySelector('.swiper-button-prev');
  const paginationEl = slider.querySelector('.swiper-pagination');
  // eslint-disable-next-line
  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
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

export {featuresSlider};
