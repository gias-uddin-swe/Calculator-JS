var len = document.getElementsByClassName("button").length;
for (let i = 0; i < len; i++) {
  document
    .querySelectorAll(".button")
    [i].addEventListener("click", function () {
      const currentScreenValue = document.getElementById("screen").innerText;
      const text = this.innerText;
      document.getElementById("screen").innerText = currentScreenValue + text;
      console.log(text);
      clearScreen();
    });
}
symbol("button-plus", " + ");
symbol("button-minus", "-");
symbol("button-multiply", "*");
symbol("button-divaid", "/");
symbol("button-modulas", "%");
symbol("button-dot", ".");

lastlValueRemove();

let currentScreenValue1 = document.getElementById("screen");

function symbol(id, n) {
  document.getElementById(id).addEventListener("click", function () {
    const currentScreenValue = document.getElementById("screen").innerText;
    document.getElementById("screen").innerText = currentScreenValue + n;
  });
}
// clear all value in screen
function clearScreen() {
  document.getElementById("button-C").addEventListener("dblclick", function () {
    document.getElementById("screen").innerText = "";
  });
}
//one click in button C for remove last number from screen
function lastlValueRemove() {
  document.getElementById("button-C").addEventListener("click", function () {
    const currentValue = document.getElementById("screen").innerText;
    const delet = currentValue.slice(0, -1);
    document.getElementById("screen").innerText = delet;
  });
}

document.getElementById("button-equal").addEventListener("click", function () {
  const total = eval(document.getElementById("screen").innerText);
  document.getElementById("screen").innerText = total;
});
