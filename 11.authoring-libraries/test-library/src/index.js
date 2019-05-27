import * as webpackNumbers from "@pengleichen/webpack-numbers";

function component() {
  let ele = document.createElement("div");
  ele.innerHTML = webpackNumbers.numToWord(1);
  console.log(webpackNumbers.wordToNum("Two"));
  return ele;
}

document.body.appendChild(component());
