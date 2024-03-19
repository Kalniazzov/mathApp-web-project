const input1 = document.querySelectorAll(".infoInput3")[0];
const input2 = document.querySelectorAll(".infoInput3")[1];
const dateTapsirma = document.querySelector(".dateEx");
const list = document.querySelector(".list");
const listElem = document.querySelectorAll(".info_title");
const listLi = document.querySelectorAll("li");
const exInfo = document.querySelectorAll(".exs");
const button1 = document.querySelector(".submit3");

// get btns
const succesBtn = document.querySelectorAll(".success");
const closeBtn = document.querySelector(".close");

function inp1(a) {
  let title = a.value;
  return title;
}
function inp2(a) {
  let title2 = a.value;
  return title2;
}
function date(a) {
  let date = a.value;
  return date;
}

for (let a = 0; a < succesBtn.length; a++) {
  succesBtn[a].addEventListener("click", function () {
    listLi[a].style.display = "none";
  });
}
button1.addEventListener("click", function () {
  list.insertAdjacentHTML(
    "beforeend",
    `
            <li>
              <div class="info_title">
                ${inp1(input1)}
                <button type="submit" class="success">&#10003;</button>
                <button type="submit" class="close">&#x2715;</button>
              </div>
              <div class="exs">
                <div class="info_exs active2">
                  <h1 class="titleText">${inp1(input1)}</h1>
                  <p class="textInfo">
                    ${inp2(input2)}
                  </p>
                  <p class="date">${date(dateTapsirma)}</p>
                </div>
              </div>
            </li>
  `
  );
});
/*
function acc() {
  let panel = this.nextElementSibling;
  if (panel.style.display === "flex") {
    panel.style.display = "none";
  } else {
    panel.style.display = "flex";
  }
}

for (let a = 0; a < listElem.length; a++) {
  listElem[a].addEventListener("click", acc);
}

*/
