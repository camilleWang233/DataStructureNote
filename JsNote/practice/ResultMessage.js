// 1. 定义变量和函数

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");
// 随机返回数组中的元素
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 2. 纯文本字符串

const storyText =
  "名字是猫，选择:inserta:[:inserte:]:insertb: - 不宜:insertc:，宜:insertd:。god保佑你。";

// inserta
let insertA = ["女祭司[2]", "隐者[9]", "权杖[23]"];

// insertb
let insertB = [
  "过于洁癖，无知，贪心，目光短浅，自尊心过高，偏差的判断，有勇无谋，自命不凡。",
  " 失望，来自朋友和生意伙伴的反对。",
  "  在你所有的事业中都要谨慎，那些看似朋友的人，可能会成为你的敌人。",
];

//insertc
let insertC = ["抽烟", "喝酒", "烫头"];
//insertd
let insertD = ["敲代码", "开车", "吃拉面"];
// inserte
let insertE = ["顺位", "逆位"];






// 3. 事件监听器和未完成的函数定义
// 为 randomize 变量增加一个点击事件的监听器。于是当所引用的按钮被点击时，result() 函数就会运行。
// randomize.addEventListener("click", result);

function result() {
  console.log("2333");
  let newStory = storyText;
//   const Itema = randomValueFromArray(insertA);
//   const Itemb = randomValueFromArray(insertB);
//   const Itemc = randomValueFromArray(insertC);
//   const Itemd = randomValueFromArray(insertD);
//   const Iteme = randomValueFromArray(insertE);
  //    这里不是很确定
  //   let Item="";
  let result = "";
  result = newStory.replace(/:inserta:/, randomValueFromArray(insertA));
  result =  result.replace(/:insertb:/, randomValueFromArray(insertB));
  result =  result.replace(/:insertc:/, randomValueFromArray(insertC));
  result =  result.replace(/:insertd:/, randomValueFromArray(insertD));
  result =  result.replace(/:inserte:/, randomValueFromArray(insertE));
console.log(result);


  if (customName.value !== "") {
    // let name = customName.value;
    result = result.replace(/猫/, customName.value);

    console.log(result);
  }

  if (document.getElementById("metric").checked) {
    // newStory.replace(/god/, "上帝");
    result = result.replace(/god/, "红娘");
  } else {
    result = result.replace(/god/, "丘比特");
  }

  story.textContent = result;
  story.style.visibility = "visible";
}
