import _ from "lodash";

//import Print from "./print";

document.body.appendChild(() => {
  let ele = document.createElement("div");
  ele.innerHTML = _.join(["Hello", "webpack"], " ");
  //ele.onclick = Print.bind(null, "Hello webpack!");
  return ele;
});
