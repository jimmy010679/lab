/*
  修改至
  https://codepen.io/MacOnMars/pen/qMyKdr
*/

"use strict";

window.addEventListener('load', function () {


  var canvas = document.getElementById('snow');
  var w = canvas.offsetWidth,
      h = canvas.offsetHeight,
      ctx = canvas.getContext('2d'),
      raf,
      arc = 10,
      time,
      count,
      size = 10,
      speed = 5,
      lights = [],
      colors = ['#00debc','#00EBC7','#00C4A6','#009E86','#005E50'];

  canvas.setAttribute('width',w);
  canvas.setAttribute('height',h);

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame     ||
            window.oRequestAnimationFrame      ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  function init() {
    time = 0;
    count = 0;

    for(var i = 0; i < arc; i++) {
      lights[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 + 1,
        toY: Math.random() * 5 + 1,
        c: colors[Math.floor(Math.random()*colors.length)],
        size: Math.random() * size
      }
    }
  }

  function snow() {
    ctx.clearRect(0,0,w,h);

    for(var i = 0; i < arc; i++) {
      //let lights[i] = lights[i];
    
      ctx.beginPath();
      ctx.arc( lights[i].x, lights[i].y, lights[i].size, 0, Math.PI*2, false);
      ctx.fillStyle = lights[i].c;
      ctx.closePath();
      ctx.fill();
    
      lights[i].x = lights[i].x + lights[i].toX * (time * 0.05);
      lights[i].y = lights[i].y + lights[i].toY * (time * 0.05);
     
      if( lights[i].x > w ) { lights[i].x = 0; }
      if( lights[i].y > h ) { lights[i].y = 0; }
      if( lights[i].x < 0 ) { lights[i].x = w; }
      if( lights[i].y < 0 ) { lights[i].y = h; }

    }
    if(time < speed) {
      time++;
    }

    raf = window.requestAnimFrame(snow);
  }

  init();
  snow();

});