import $ from 'jquery'

$('.header__open-nav').click(function () {
  $(this).toggleClass('open');
  $('.nav').slideToggle()
})