function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("backend/login.php", {
    method: "POST",
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      sessionStorage.setItem("email", email);
      window.location.href = "dashboard.html";
    } else {
      alert("Login failed: " + data.message);
    }
  });
}

function handleGoogle(response) {
  const token = response.credential;
  const decoded = parseJwt(token);
  const email = decoded.email;

  fetch("backend/google_login.php", {
    method: "POST",
    body: JSON.stringify({ email })
  })
  .then(res => res.json())
  .then(data => {
    sessionStorage.setItem("email", email);
    if (data.status === "new") {
      window.location.href = "set-password.html";
    } else {
      window.location.href = "dashboard.html";
    }
  });
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}
