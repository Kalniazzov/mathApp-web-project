const btn2 = document.querySelector(".submit2");
const result2 = document.querySelector(".result2");
const strElement = document.createElement("h1");

function lengStr() {
  const textarea = document.querySelector(".textarea").value;
  let res = textarea.length;
  return res;
}
btn2.addEventListener("click", function () {
  strElement.textContent = lengStr() + "-әріп бар";
  result2.append(strElement);
});
