import quotes from "./datas.js";

const generatorButton = document.getElementsByClassName("quoteGenerator");
const patchBox = document.getElementById("quoteBox");
generatorButton[0].addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 38);
  patchBox.innerHTML = quotes[randomNum].quote;

  const quoteCaption = document.createElement("caption");
  const quoteChild1 = patchBox.appendChild(quoteCaption);
  quoteCaption.innerHTML = `${quotes[randomNum].source}`;

  const btn = document.createElement("button");
  const quoteChild = patchBox.appendChild(btn);
  btn.innerHTML = "Clear";

  btn.addEventListener("click", () => {
    patchBox.innerHTML = "";
  });
});
