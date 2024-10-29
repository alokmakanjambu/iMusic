document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
      event.preventDefault();
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  });

function openDocument() {
  window.location.href = uts / index.html;
}
