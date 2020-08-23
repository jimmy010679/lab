"use strict";

window.addEventListener('load', function () {
  function headerHidden() {
  	if ( document.getElementsByClassName("left")[0] && window.innerWidth <= 1200  ) {

      var scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop

      var topBarY =  document.getElementsByClassName("left")[0].dataset.ty
      var topBarOldY =  document.getElementsByClassName("left")[0].dataset.oldy

      window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - (window.innerHeight * 0.3) 

      if ( scrollY > topBarOldY ) {
        //向下
        if ( scrollY == 0 || scrollY < 52 ) {
          //未超過50
          topBarY = 0
        } else if ( topBarY == 0 ) {
          topBarY = -52
        }
      } else if ( scrollY < topBarOldY ) {
        //向上
        if ( scrollY == 0 || scrollY < 52 ) {
          //頂部
          topBarY = 0
        } else if ( topBarY ==  -52 ) {
          topBarY = 0
        }
      }
      
      document.getElementsByClassName("left")[0].style.transform = 'translateY('+ topBarY +'px)'      
      document.getElementsByClassName("left")[0].dataset.ty = topBarY
      document.getElementsByClassName("left")[0].dataset.oldy = scrollY
    }
  }

  window.addEventListener('scroll', headerHidden )

});
