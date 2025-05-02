const email = sessionStorage.getItem("email");

function generate() {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  document.getElementById("genPassword").value = password;
}

function save() {
  const site = document.getElementById("site").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("genPassword").value;

  fetch("backend/save_password.php", {
    method: "POST",
    body: JSON.stringify({ email, site, username, password })
  })
  .then(res => res.json())
  .then(() => {
    alert("Password Saved!");
    load();
  });
}

function load() {
  fetch("backend/get_passwords.php", {
    method: "POST",
    body: JSON.stringify({ email })
  })
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("savedPasswords");
    container.innerHTML = "";
    data.forEach(d => {
      container.innerHTML += `
        <div>
          <strong>${d.site}</strong><br>
          Username: ${d.username}<br>
          <input type="password" value="${d.password}" readonly style="width: 100%;">
          <button onclick="navigator.clipboard.writeText('${d.password}')">Copy</button>
        </div>
      `;
    });
  });
}

window.onload = load;
