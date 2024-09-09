function validatePasswords(password, confirmPassword) {
  return password === confirmPassword;
}

document
  .getElementById("formDeRegistro")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    try {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (!validatePasswords(password, confirmPassword)) {
        alert("Passwords do not match");
        return;
      }

      const userData = {
        name: name,
        email: email,
        password: password,
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      window.location.href = "./tela7.html";
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
