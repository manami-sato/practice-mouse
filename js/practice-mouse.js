//
// マウスストーカー、マウスカーソル
//
const cursor = (position, cursorFlag) => {
  // position => 円の位置（マウスストーカー→-10、カーソル→-円のサイズ/2）
  // cursorFlag => マウスストーカーならtrue、カーソルならfalse
  const mouseCursor = document.createElement("div");
  const main = document.querySelector("main");
  mouseCursor.classList.add("mouseCursor");
  main.appendChild(mouseCursor);
  const objects = [
    document.querySelector("html"),
    document.querySelector("body"),
    document.querySelector("a"),
  ];
  // 円のスタイル
  mouseCursor.style.top = position;
  mouseCursor.style.left = position;
  document.addEventListener("mousemove", (el) => {
    let clientX = el.clientX;
    let clientY = el.clientY;
    mouseCursor.style.transform =
      "translate(" + clientX + "px," + clientY + "px)";
  });
  if (cursorFlag) {
    mouseCursor.style.transition = "transform 0.2s";
  } else {
    for (let i = 0; i < objects.length; i++) {
      objects[i].style.cursor = "none";
    }
  }
  const link = document.querySelectorAll("a");
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mouseover", () => {
      mouseCursor.setAttribute("id", "hover");
    });
    link[i].addEventListener("mouseout", () => {
      mouseCursor.removeAttribute("id");
    });
  }
};
