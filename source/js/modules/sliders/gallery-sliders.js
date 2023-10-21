export const initGallerySlider = () => {
  const gallery = document.querySelector('.work-gallery__gallery');
  if (!gallery) {
    return;
  }

  const nextEl = gallery.querySelector('.swiper-button-next');
  const prevEl = gallery.querySelector('.swiper-button-prev');
  const paginationEl = gallery.querySelector('.swiper-pagination');

  // eslint-disable-next-line
  const swiper = new Swiper(gallery, {
    slidesPerView: 'auto',
    spaceBetween: 15,
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
