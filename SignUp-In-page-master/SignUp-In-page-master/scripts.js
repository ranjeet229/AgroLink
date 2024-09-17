function registerUser(event) {
    event.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple form validation
    if (fullName === "" || email === "" || password === "") {
        alert("All fields are required.");
        return false;
    }

    // Simulate registration success
    alert("Registration successful!");

    // Redirect to login page
    window.location.href = "login.html";
}
