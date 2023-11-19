  var myMap;
  ymaps.ready(init);
  function init () {
    myMap = new ymaps.Map("map", {
      center: [43.242572, 76.956439],
      zoom: 13
    });
  }
  
  document.addEventListener('DOMContentLoaded', function(){
//  ety dva mozhno udalyat, esli border ne o4en smotritsya
    $('#divToLight1').mouseover(funcLighter);
    $('#divToLight1').mouseout(funcNotLighter);
// ------------------------------------------------------
    $('#divToLight2').mouseover(funcLighter1);
    $('#divToLight2').mouseout(funcNotLighter1); 

    $('#divToLight3').mouseover(funcLighter1);
    $('#divToLight3').mouseout(funcNotLighter1); 

  })

  function funcLighter() {
    $(this).addClass('toCheck');
  }

  function funcNotLighter() {
    $(this).removeClass('toCheck');
  }

  function funcLighter1() {
    $(this).addClass('toCheck1');
  }

  function funcNotLighter1() {
    $(this).removeClass('toCheck1');
  }
