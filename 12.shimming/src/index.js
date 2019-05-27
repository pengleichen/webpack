// import { file, parse } from "./globals";

function component() {
  let ele = document.createElement("div");
  //   ele.innerHTML = _.join(["Hello", "webpack"], " ");
  ele.innerHTML = join(["Hello", "webpack"], " ");
  //Assume we are in the context of 'window'
  this.alert(`Hmmm, this probable isn't a great idea...`);
  return ele;
}

document.body.appendChild(component());
