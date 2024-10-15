import $ from 'jquery'
import 'slick-carousel'

$('.banner__slider').slick({
  arrows: true,
  appendArrows: $('.banner__container').find('.slider-arrows'),
  prevArrow: '<button id="prev" type="button" class="slider-arrow slider-arrow_prev"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M.87287 3.24407c-.46046.39877-.46046 1.11309 0 1.51186l3.47248 3.00725C4.99299 8.32406 6 7.864 6 7.00725V.99275C6 .136 4.99299-.32405 4.34535.23682L.87287 3.24407Z"/></svg></button>',
  nextArrow: '<button id="next" type="button" class="slider-arrow slider-arrow_next"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M5.12713 3.24407c.46046.39877.46046 1.11309 0 1.51186L1.65465 7.76318C1.00701 8.32406 0 7.864 0 7.00725V.99275C0 .136 1.00701-.32405 1.65465.23682l3.47248 3.00725Z"/></svg></button>'
});
