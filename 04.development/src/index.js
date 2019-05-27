import _ from "lodash";

import printMe from "./print";

function component() {
  let ele = document.createElement("div");

  ele.innerHTML = _.join(["Hello", "webpack"], " ");

  printMe();
  return ele;
}

document.body.appendChild(component());
