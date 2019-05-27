import _ from "lodash";
import printMe from "./print";
import "./style.css";

function component() {
  let ele = document.createElement("div");
  ele.innerHTML = _.join(["Hello", "webpack"], " ");

  let btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console";
  btn.onclick = printMe;

  ele.classList.add("hello");

  ele.appendChild(btn);

  return ele;
}
let ele = component();
document.body.appendChild(ele);

if (module.hot) {
  module.hot.accept("./print.js", () => {
    console.log("Accepting the updated printMe method!");
    //printMe()
    document.body.removeChild(ele);
    ele = component();
    document.body.appendChild(ele);
  });
}
