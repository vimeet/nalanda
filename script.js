// function a500() {
//     var element = document.getElementById("amount500");
//     element.classList.toggle("amount-selected");
//  }

var header = document.getElementById("amount-outer");
var btns = header.getElementsByClassName("amount");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("amount-active");
  current[0].className = current[0].className.replace(" amount-active", "");
  this.className += " amount-active";
  });
}

var area = document.getElementById("inner-card");
var options = area.getElementsByClassName("option");
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}