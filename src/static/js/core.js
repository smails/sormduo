import $ from 'jquery'

$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.modal').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $(`[data-modal="${modal}"]`).fadeIn();
  if (modal == '#place') getPlaceModalSlider();
  if (modal == '#finish') getFinishModalSlider();
  if (modal == '#plane') getPlaneModalSlider();
});

$('.build__item').click((e) => {
  e.preventDefault();
  $('.modal-work').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $('.modal-work').show();
  $('.modal-work__btn').removeClass('active');
  $(`[data-view="${modal}"]`).fadeIn();
  $(`[href="${modal}"]`).addClass('active');
  getBuildhModalSlider(modal)
});

$('.modal-work__btn').click((e) => {
  e.preventDefault();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $('.modal-work__box').hide();
  $(`[data-view="${modal}"]`).fadeIn();
  $(e.target).addClass('active').siblings().removeClass('active');
  getBuildhModalSlider(modal)
});

$('.pay__item').click((e) => {
  e.preventDefault();
  $('.modal-pay').fadeIn();
});

$('.js-close-modal').click((e) => {
  e.preventDefault();
  $('.modal').fadeOut();
  $('.modal-pay').fadeOut();
});

$('.modal-work__close').click(() => {
  $('.modal-work').hide();
  $('.modal-work__box').fadeOut();
});

function getPlaceModalSlider() {
  $('.place-modal__slider').slick({
    arrows: true,
    slidesToShow: 1,
    appendArrows: $('[data-modal="#place"]').find('.slider-arrows'),
    prevArrow: '<button id="prev" type="button" class="slider-arrow slider-arrow_prev"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M.87287 3.24407c-.46046.39877-.46046 1.11309 0 1.51186l3.47248 3.00725C4.99299 8.32406 6 7.864 6 7.00725V.99275C6 .136 4.99299-.32405 4.34535.23682L.87287 3.24407Z"/></svg></button>',
    nextArrow: '<button id="next" type="button" class="slider-arrow slider-arrow_next"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M5.12713 3.24407c.46046.39877.46046 1.11309 0 1.51186L1.65465 7.76318C1.00701 8.32406 0 7.864 0 7.00725V.99275C0 .136 1.00701-.32405 1.65465.23682l3.47248 3.00725Z"/></svg></button>',
    responsive: [{
      breakpoint: 600,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });
}

function getFinishModalSlider() {
  $('.modal-finish__slider').slick({
    arrows: true,
    slidesToShow: 1,
    appendArrows: $('[data-modal="#finish"]').find('.slider-arrows'),
    prevArrow: '<button id="prev" type="button" class="slider-arrow slider-arrow_prev"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M.87287 3.24407c-.46046.39877-.46046 1.11309 0 1.51186l3.47248 3.00725C4.99299 8.32406 6 7.864 6 7.00725V.99275C6 .136 4.99299-.32405 4.34535.23682L.87287 3.24407Z"/></svg></button>',
    nextArrow: '<button id="next" type="button" class="slider-arrow slider-arrow_next"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M5.12713 3.24407c.46046.39877.46046 1.11309 0 1.51186L1.65465 7.76318C1.00701 8.32406 0 7.864 0 7.00725V.99275C0 .136 1.00701-.32405 1.65465.23682l3.47248 3.00725Z"/></svg></button>',
    responsive: [{
      breakpoint: 600,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });
}

function getBuildhModalSlider(modal) {
  $(`[data-view="${modal}"]`).find('.modal-work__slider').slick({
    arrows: true,
    slidesToShow: 1,
    appendArrows: $(`[data-view="${modal}"]`).find('.slider-arrows'),
    prevArrow: '<button id="prev" type="button" class="slider-arrow slider-arrow_prev"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M.87287 3.24407c-.46046.39877-.46046 1.11309 0 1.51186l3.47248 3.00725C4.99299 8.32406 6 7.864 6 7.00725V.99275C6 .136 4.99299-.32405 4.34535.23682L.87287 3.24407Z"/></svg></button>',
    nextArrow: '<button id="next" type="button" class="slider-arrow slider-arrow_next"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M5.12713 3.24407c.46046.39877.46046 1.11309 0 1.51186L1.65465 7.76318C1.00701 8.32406 0 7.864 0 7.00725V.99275C0 .136 1.00701-.32405 1.65465.23682l3.47248 3.00725Z"/></svg></button>',
    dots: true,
    appendDots: $(`[data-view="${modal}"]`).find('.slider-dots'),
    customPaging: function (slider, i) {
      return (i + 1) + '/' + slider.slideCount;
    },
    responsive: [{
      breakpoint: 600,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });
}

$('.modal-finish__btn').click(function (e) {
  e.preventDefault();
  $(this).addClass('active').siblings().removeClass('active');
  const slideno = $(this).data('slide');
  $('.modal-finish__slider').slick('slickGoTo', slideno - 1);
});


function getPlaneModalSlider() {
  $('.modal-plane__slider').slick({
    arrows: true,
    slidesToShow: 1,
    appendArrows: $('[data-modal="#plane"]').find('.slider-arrows'),
    prevArrow: '<button id="prev" type="button" class="slider-arrow slider-arrow_prev"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M.87287 3.24407c-.46046.39877-.46046 1.11309 0 1.51186l3.47248 3.00725C4.99299 8.32406 6 7.864 6 7.00725V.99275C6 .136 4.99299-.32405 4.34535.23682L.87287 3.24407Z"/></svg></button>',
    nextArrow: '<button id="next" type="button" class="slider-arrow slider-arrow_next"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" fill="none"><path fill="#006E90" d="M5.12713 3.24407c.46046.39877.46046 1.11309 0 1.51186L1.65465 7.76318C1.00701 8.32406 0 7.864 0 7.00725V.99275C0 .136 1.00701-.32405 1.65465.23682l3.47248 3.00725Z"/></svg></button>',
    responsive: [{
      breakpoint: 600,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });
}



$('.team__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.team__box').hide();
  $('.team__box').eq($(this).index()).fadeIn('slow');
})