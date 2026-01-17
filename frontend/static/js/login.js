document.addEventListener("DOMContentLoaded", function() {
    const emailField = document.getElementById("email")
    const passwordField = document.getElementById("password")
    const loginForm = document.querySelector(".login-form")

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault()
        const email = emailField.value
        const password = passwordField.value
        const formData = {
            email: email,
            password: password
        }
        const response = await fetch("http://localhost:4444/api/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'credentials': 'include'
            },
            body: JSON.stringify(formData)
        })
        console.log(response)
    })
})