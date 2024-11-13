import $ from 'jquery'
import '../../static/js/jquery-ui.js'


$(".squere .slider").slider({
  animate: "slow",
  range: true,
  min: 1,
  max: 25,
  values: [1,25],
  step: 0.1,
  slide : function(event, ui) {    
      $(".squere .range-start").text( ui.values[ 0 ]);       
      $(".squere .range-end").text( ui.values[ 1 ]);
  },
  stop  : function(event, ui) {    
      $(".squere .price_start").val( ui.values[ 0 ] ).change(); 
      $(".squere .price_end").val( ui.values[ 1 ] ).change(); 
  }
});

$(".price .slider").slider({
  animate: "slow",
  range: true,
  min: 1,
  max: 25,
  values: [1,25],
  step: 0.1,
  slide : function(event, ui) {    
      $(".price .range-start").text( ui.values[ 0 ]);       
      $(".price .range-end").text( ui.values[ 1 ]);
  },
  stop  : function(event, ui) {    
      $(".price .price_start").val( ui.values[ 0 ] ).change(); 
      $(".price .price_end").val( ui.values[ 1 ] ).change(); 
  }
});