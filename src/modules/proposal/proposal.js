import $ from 'jquery'
import '../../static/js/jquery-ui.js'


$(".proposal__group .slider").slider({
  animate: "slow",
  range: true,
  min: 1,
  max: 25,
  values: [1,25],
  step: 0.1,
  slide : function(event, ui) {    
      $(".proposal__group .range-start").text( ui.values[ 0 ]);       
      $(".proposal__group .range-end").text( ui.values[ 1 ]);
  },
  stop  : function(event, ui) {    
      $(".proposal__group .price_start").val( ui.values[ 0 ] ).change(); 
      $(".proposal__group .price_end").val( ui.values[ 1 ] ).change(); 
  }
});