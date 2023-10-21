import {reviewSlider} from './review-slider';
import {televisionSliders} from './television-sliders';
import {initGallerySlider} from './gallery-sliders';
import {featuresSlider} from './features-slider';
import {reviewPartnersSlider} from './reviews-partners-slider';
import {categoriesSlider} from './categories-slider';

const initSliders = () => {
  featuresSlider();
  televisionSliders();
  reviewSlider();
  reviewPartnersSlider();
  initGallerySlider();
  categoriesSlider();
};

export {initSliders};
