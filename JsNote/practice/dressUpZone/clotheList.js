// 左侧显示服装列表和缩略图
// 所有衣服按钮容器
const derss_div = document.querySelector(".derss_div");
console.log("3444");

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
