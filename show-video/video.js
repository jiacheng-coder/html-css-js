var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

pauseButton.addEventListener("click", function() {//点击事件发生时执行下列函数
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();//执行播放操作
    pauseButton.innerHTML = "Pause";//将button的内容设置为Pause
  } else {
    vid.pause();//执行暂停操作
    pauseButton.innerHTML = "Paused";//将button的内容设置为Paused
  }
})

function vidFade() {
  vid.classList.add("stopfade");//为video标签添加属性，使得透明度从1变为0.5
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 

