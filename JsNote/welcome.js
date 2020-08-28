// 个性化欢迎
let myButton = document.querySelector("button");
let myHead = document.querySelector("h4");
function setUsername() {
  let myName = prompt("请输入姓名");
  if (!myName || myName === null) {
    setUsername();
  } else {
    localStorage.setItem("name", myName);

    myHead.textContent = "欢迎仙女" + myName ;
  }
}
if (!localStorage.getItem("name")) {
  setUsername();
} else {
  let storeName = localStorage.getItem("name");
  myHead.textContent = "今天" + storeName + "想测点什么呢？";
}
