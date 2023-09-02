let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/google.png") {
    myImage.setAttribute("src", "images/a.jpg");
    myImage.setAttribute("width", 300);
    myInmage.setAttribute("heigh", 300);
  } else {
    myImage.setAttribute("src", "images/google.png");
    myImage.setAttribute("width", 500);
    myInmage.setAttribute("heigh", 50);
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("please type your name");
    if (myName === null){
      myName = "Visitor"
    }

    localStorage.setItem("name", myName);
    myHeading.textContent = "It's so coooooool, " + myName;
    
  }
  
myButton.onclick = function () {
    setUserName();
};
  

  