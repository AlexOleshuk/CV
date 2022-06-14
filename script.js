"use strict";

const x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav");
  element.classList.toggle("_active");
  // document.body.classList.toggle("_lock");
  
  x.classList.toggle("change");
}
