
"use strict";

window.addEventListener('load', function () {

  function menuBtn() {
    document.getElementsByTagName('nav')[0].classList.toggle("mobile");
    document.getElementById('menuLeave').classList.toggle("mobile");
  }
  
  document.getElementById('menuBtn').addEventListener("click", function(){
    menuBtn()
  }, false)
  document.getElementById('menuLeave').addEventListener("click", function(){
    menuBtn()
  }, false)
});

console.log("%c    888888   88    88   88888888   88    88    888888       8      8  88888888  88888888   88    88   ", 'color: #008dc9; font-size: 12px;');
console.log("%c   88        88    88      88      888   88   88            88    88     88        88      888   88   ", 'color: #008dc9; font-size: 12px;');
console.log("%c  88         88888888      88      88 88 88   88 88888      888  888     88        88      88 88 88   ", 'color: #008dc9; font-size: 12px;');
console.log("%c   88        88    88      88      88   888   88 88 88      88 88 88     88        88      88   888   ", 'color: #008dc9; font-size: 12px;');
console.log("%c    888888   88    88   88888888   88    88    888888       88 88 88  88888888  88888888   88    88   ", 'color: #008dc9; font-size: 12px;');
console.log("%c                                                                                    Design By Jimmy   ", 'background: #008dc9; color: #fff; font-size: 12px;');
