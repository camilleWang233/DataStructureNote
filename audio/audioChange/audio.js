// 创建按钮
let audiu_btn = document.createElement("div");
console.log(audiu_btn);
audiu_btn.setAttribute("id", "audiu_btn");
audiu_btn.setAttribute("class", "on");
// 创建按钮点击事件audioControl()
audiu_btn.setAttribute("onclick", "audioControl()");
document.body.appendChild(audiu_btn);
// 创建<audio>
let audio_div = document.createElement("audio");
audio_div.setAttribute("id", "player");
audio_div.setAttribute("autoplay", "autoplay");
audio_div.setAttribute("loop", "loop");
audio_div.setAttribute("preload", "auto");
audio_div.setAttribute("src", "../music/薛之谦,韩红 - 小尖尖.mp3");
document.body.appendChild(audio_div);
// 默认自动播放
audio_div.play();
document.addEventListener(
  "WeixinJSBridgeReady",
  function () {
    document.getElementById("player").play();
  },
  false
);
// 按钮点击事件
const audioControl = () => {
  if (audio_div.paused) {
    audio_div.play();
    audiu_btn.classList.remove("off");
    audiu_btn.classList.add("on");
  } else {
    audio_div.pause();
    audiu_btn.classList.remove("on");
    audiu_btn.classList.add("off");
  }
};
