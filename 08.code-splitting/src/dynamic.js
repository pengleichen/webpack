/*
function getComponent() {
  return import(//webpackChunkName: "lodash"
  "lodash")
    .then(({ default: _ }) => {
      let ele = document.createElement("div");
      var _ = _.default;
      ele.innerHTML = _.join(["Hello", "webpack"], " ");

      return ele;
    })
    .catch(error => "An error occurred while loading the component");
}
*/

async function getComponent() {
  let ele = document.createElement("div");
  const { default: _ } = await import(//webpackChunkName: "lodash"
  "lodash");
  ele.innerHTML = _.join(["Hello", "webpack"], " ");
  return ele;
}
getComponent().then(compoent => document.body.appendChild(compoent));
