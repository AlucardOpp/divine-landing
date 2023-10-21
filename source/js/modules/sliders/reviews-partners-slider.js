export const reviewPartnersSlider = () => {
  const sliderReviewNode = document.querySelector('.reviews-partners__slider');
  if (!sliderReviewNode) {
    return;
  }

  const sliderReviewControls = document.querySelector('.reviews-partners__slider-controls');
  const nextEl = sliderReviewControls.querySelector('.swiper-button-next');
  const prevEl = sliderReviewControls.querySelector('.swiper-button-prev');
  const paginationEl = sliderReviewControls.querySelector('.swiper-pagination');

  // eslint-disable-next-line
  const slider = new Swiper(sliderReviewNode, {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
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
