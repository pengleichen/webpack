import _ from "lodash";
function component() {
  let ele = document.createElement("div");
  let btn = document.createElement("button");
  let br = document.createElement("br");

  ele.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "Click me and look at the console!";
  ele.appendChild(br);
  ele.appendChild(btn);

  btn.onclick = e =>
    import(/*webpackChunkName: "print" */ "./print").then(module => {
      let print = module.default;

      print();
    });
  return ele;
}

document.body.appendChild(component());
