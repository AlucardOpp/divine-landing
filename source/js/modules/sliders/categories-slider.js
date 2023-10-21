export const categoriesSlider = () => {
  const categoriesBlock = document.querySelector('.categories');
  if (!categoriesBlock) {
    return;
  }

  let mySwiper;

  const sliderCategoriesNode = categoriesBlock.querySelector('.categories__slider');
  const nextEl = categoriesBlock.querySelector('.categories__button--prev');
  const prevEl = categoriesBlock.querySelector('.categories__button--next');
  const breakpoint = window.matchMedia('(max-width:767px)');

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) {
        mySwiper.destroy(true, true);
      }
    } else if (breakpoint.matches === false) {
      // eslint-disable-next-line consistent-return
      // console.log('enableSwiper');
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    // eslint-disable-next-line
    mySwiper = new Swiper(sliderCategoriesNode, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      grabCursor: true,
      spaceBetween: 13,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl,
        prevEl,
      },
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

