const input1 = document.querySelectorAll(".infoInput")[0];
const input2 = document.querySelectorAll(".infoInput")[1];
const submitBtn = document.querySelector(".submit");
const result = document.querySelector(".result");

function audan(a1, b2) {
  let a = Number(a1.value);
  let b = Number(b2.value);
  let sum = a * b;
  return sum;
}
function perimetr(a1, b2) {
  let a = Number(a1.value);
  let b = Number(b2.value);
  let sum = (a + b) * 2;
  return sum;
}
const element1 = document.createElement("h1");
const element2 = document.createElement("h1");
submitBtn.addEventListener("click", function () {
  element1.textContent = " Шеңбер ауданы: " + audan(input1, input2);
  element2.textContent = " Шеңбер периметры: " + perimetr(input1, input2);
  result.append(element1);
  result.append(element2);
});
