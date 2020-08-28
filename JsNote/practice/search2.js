const list = document.querySelector(".container datalist");
const inputBox = document.querySelector(" .container input");
list.innerHTML = "";
let myHistory = [];

// 按钮点击触发方法
function showHistory() {
  // 如果输入框内的值不为空
  if (inputBox.value != "") {
    //   unshift（）把搜索内容加到最前面
    myHistory.unshift(inputBox.value);

    // 点完搜索，搜索框清空
    inputBox.value = "";
    // 遍历myHistory里的值
    list.innerHTML = "";
    for (let i = 0; i < myHistory.length; i++) {
      // let liItem = myHistory[i];

      let list_item = document.createElement("option");
      list_item.textContent = myHistory[i];
      list.appendChild(list_item);
    }
    // 如果历史搜索记录多于5个，自动清空第一次的搜索记录
    if (myHistory.length >= 5) {
      myHistory.pop();
    }
    // 清空并聚焦到搜索框，准备下一次的搜索
    inputBox.value = "";
    inputBox.focus();
    // visiable();
  }
}
