let number = document.querySelectorAll(".num");
let started = false;

function count(e) {
  let goul = e.dataset.num;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == goul) {
      clearInterval(counter);
    }
  }, 200 / goul);
}

window.onscroll = function () {
  if (window.scrollY >= 900) {
    if (!started) {
      number.forEach((ele) => count(ele));
    }
    started = true;
  }
};
let form = document.getElementById("sheetdb-form");
form.action = "https://sheetdb.io/api/v1/e2dtwpi9kmzjf";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      window.location.href = "confairm.html";
    });
});
