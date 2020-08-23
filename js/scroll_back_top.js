
"use strict";

window.addEventListener('load', function () {


  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("goTop").classList.add("display");
      } else {
        document.getElementById("goTop").classList.remove("display");
    }
  }

  function topFunction(scrollDuration) {
    // https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery 

    const scrollHeight = window.scrollY,
          scrollStep = Math.PI / ( scrollDuration / 15 ),
          cosParameter = scrollHeight / 2;
    var   scrollCount = 0,
          scrollMargin,
          scrollInterval = setInterval( function() {
            if ( window.scrollY != 0 ) {
                scrollCount = scrollCount + 1;  
                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            } 
            else clearInterval(scrollInterval); 
          }, 15 );
  }



  window.addEventListener('scroll', function () {
    scrollFunction()  
  });  

  document.getElementById('goTop').addEventListener("click", function(){
    topFunction(500)
  }, false)

});


