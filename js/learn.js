"use strict";

window.addEventListener('load', function () {

  var thematic_wrapper = document.getElementsByClassName('thematic_wrapper')[0];
  var thematic_wrapper_box = thematic_wrapper.getElementsByClassName('box');
  var thematic_wrapper_box_active = false;

  var video_lightbox = document.getElementById('video-lightbox');
  video_lightbox.addEventListener("click", function(){VideoBoxBg();}, false);


  for ( let i = 0 ; i <= thematic_wrapper_box.length - 1 ; i++ ) {
    thematic_wrapper_box[i].addEventListener("click", function(){ ImgLightbox(this);}, false);
  }

  function ImgLightbox(e) {
    video_lightbox.classList.toggle('video-lightbox-open');
    thematic_wrapper_box_active = true;
  }

  function VideoBoxBg() {
    if ( thematic_wrapper_box_active == true ) {
      video_lightbox.classList.toggle('video-lightbox-open');
      thematic_wrapper_box_active = false;
    }
  }




});