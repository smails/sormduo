import $ from 'jquery'
import 'slick-carousel'

function getSldierInit() {
  $('.plane-item__slider').each((index, item) => {
    $(item).slick({
      arrows: true,
      centerMode: true,
      centerPadding: '350px',
      slidesToShow: 1,
      appendArrows: $(item).next('.plane-item__coordination').find('.slider-arrows'),
      prevArrow: '<button id="prev" type="button" class="slider-arrow slider-arrow_prev"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M.87287 3.24407c-.46046.39877-.46046 1.11309 0 1.51186l3.47248 3.00725C4.99299 8.32406 6 7.864 6 7.00725V.99275C6 .136 4.99299-.32405 4.34535.23682L.87287 3.24407Z"/></svg></button>',
      nextArrow: '<button id="next" type="button" class="slider-arrow slider-arrow_next"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M5.12713 3.24407c.46046.39877.46046 1.11309 0 1.51186L1.65465 7.76318C1.00701 8.32406 0 7.864 0 7.00725V.99275C0 .136 1.00701-.32405 1.65465.23682l3.47248 3.00725Z"/></svg></button>',
      responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: '70px',
          dots: true,
        }
      },
      {
        breakpoint: 1441,
        settings: {
          centerPadding: '180px',
        }
      },]
    });
  })
}
getSldierInit();


$('.plane__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.plane__box').hide().removeClass('active');
  $('.plane__box').eq($(this).index()).fadeIn('slow').addClass('active');
  $('.plane-item__slider').each((index, item) => {$(item).slick('unslick');});
  getSldierInit();
})

$('.plane-item__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.plane-item__box').hide();
  $('.plane__box.active').find('.plane-item__box').eq($(this).index()).fadeIn('slow');
  $('.plane-item__slider').each((index, item) => {$(item).slick('unslick');});
  getSldierInit();
})