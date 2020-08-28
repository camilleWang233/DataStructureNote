let MyImage = document.querySelector("img");
MyImage.onclick = function () {
  let mySrc = MyImage.getAttribute("src");
  if (mySrc === "../assets/imgs/001.jpg") {
    MyImage.setAttribute("src", "../assets/imgs/002.jpg");
  } else {
    MyImage.setAttribute("src", "../assets/imgs/003.jpg");
  }
  if (mySrc === "../assets/imgs/003.jpg"){
    MyImage.setAttribute("src", "../assets/imgs/001.jpg");
  }
};
