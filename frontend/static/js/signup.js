const form = document.querySelector('.signup-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    }
});

