// Mobile menu toggle button
const menuBtn = document.querySelector('.menu-btn');
var mobNav = document.querySelector('.mob__nav');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
    // If open class is added to menu button, then show mobile navigation menu; else, remove it.
    if(!menuOpen) {
        menuBtn.classList.add('open');
        mobNav.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        mobNav.classList.remove('active');
        menuOpen = false;
    }
});

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("models__item");
  if (c == "all") c = "";
  // Add .show class with "display:block" property to necessary elements, and remove the it from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current class button
var btnContainer = document.getElementById("filter__btn");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
