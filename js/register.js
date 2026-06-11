document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem(
        username,
        JSON.stringify({ username, password })
    );

    alert("Registration successful");
    window.location.href = "index.html";
});