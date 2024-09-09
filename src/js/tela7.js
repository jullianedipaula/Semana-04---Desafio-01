document.addEventListener("DOMContentLoaded", function () {
  const userData = localStorage.getItem("userData");

  if (userData) {
    const user = JSON.parse(userData);

    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
  } else {
    window.location.href = "formulario.html";
  }
});
