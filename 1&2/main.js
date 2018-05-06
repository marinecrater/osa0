function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Greetings Comrade ' + myName + "!";
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Greetings Comrade ' + storedName + "!";
}


var myImg=document.querySelector("img");
myImg.onclick= function() {
  var mySrc = myImg.getAttribute("src");
  if (mySrc === "marx.jpg") {
    myImg.setAttribute("src","communist-tux.png");
  } else {
    myImg.setAttribute("src","marx.jpg");
  }
}



myButton.onclick = function() {
  setUserName();
}
