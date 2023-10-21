const sliders = document.querySelectorAll('.television__element');

const televisionSliders = () => {
  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    const nextEl = slider.querySelector('.swiper-button-next');
    const prevEl = slider.querySelector('.swiper-button-prev');
    const paginationEl = slider.querySelector('.swiper-pagination');
    // eslint-disable-next-line
    const swiper = new Swiper(slider, {
      slidesPerView: 1,
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
  });
};

export {televisionSliders};
