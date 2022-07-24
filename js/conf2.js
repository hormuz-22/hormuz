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
      window.location.href = "confirm3.html";
    });
});
