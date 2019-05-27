import { Student } from "./student";
function component() {
  let ele = document.createElement("div");
  const student = new Student(1, "John").buildScore(99);
  ele.innerHTML = student.toString();
  return ele;
}
document.body.appendChild(component());
