const person_div = document.querySelector(".person_div");
// const person_img = document.querySelector(".person_img");
const z_div = document.querySelector(".z_div");
const derss_div = document.querySelector(".derss_div");

// 创建包裹衣服的div标签
let clothe_div = document.createElement("div");
// 创建衣服的img标签
let img = document.createElement("img");
let img_1 = document.querySelector(".img_1");
let xz = document.getElementById("xzRange");
let i = 0;

// 左侧显示服装列表和缩略图
// 所有衣服按钮容器

// 创建单个衣服按钮div
// console.log(CLOTHE_LIST);
function ClotheList(imgsrc, content) {
  let btn = document.createElement("div");

  console.log(btn);
  btn.setAttribute("class", "btn");
  btn.setAttribute("onclick", "dressme()");
  btn.innerHTML = `
    <img src="../../../assets/imgs/tiny_pic/${imgsrc}"
    width="100px" style="    position: absolute;
        
    left: -17px;
    top: -15px;
">

<p style="position: relative;top: 78px;">${content}</p>
    
    `;
  derss_div.appendChild(btn);
  console.log();
}
for (let i = 0; i < CLOTHE_LIST.length; i++) {
  ClotheList(CLOTHE_LIST[i].imgsrc, CLOTHE_LIST[i].content);
}

  

// 点击左边衣服按钮把衣服加到人身上
function dressme() {
    console.log("1");
  if (i == 0) {

    console.log(person_div);
    // 将衣服div加到person_div下
    person_div.appendChild(clothe_div);
    img.setAttribute("src", "../../../assets/imgs/02.png");
    img.setAttribute("onclick", "chooseme()");
    img.setAttribute("class", "img_1");
    img.dataset.clothe = "clothe";
    console.log("222", img);
    clothe_div.appendChild(img);
    i = 1;
    img.style.opacity = "1";
    console.log(person_div);
  } else {
    img.style.opacity = "0";
    i = 0;
    console.log("2333", i);
  }
}



// 点击衣服触发右边滑动条
function chooseme() {
  z_div.style.opacity = "1";

  let test = xz.value;

  console.log(test);
  // img_1.transform= rotate(xz);

  // transform:rotate(9deg);
}
function xFunction() {
  let x = document.getElementById("xRange").value;
  img.style.left = x + "px";
}
function yFunction() {
  let y = document.getElementById("yRange").value;
  img.style.top = y + "px";
}
function zFunction() {
  let z = document.getElementById("zRange").value;
  img.style.zIndex = z;
}
function xzFunction() {
  let xz = document.getElementById("xzRange").value;
  img.style.transform = `rotate(${xz}deg)`;
}
function clearClothe() {
  console.log(11111);
  console.log(person_div);
  let temp = person_div.querySelectorAll("[data-clothe]");
  console.log(temp);
  console.log(Array.from(temp))
  Array.from(temp).map((item, index) => {
    console.log(item.parentElement)
    person_div.removeChild(item.parentElement)
  });
}
