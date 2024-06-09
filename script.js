document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const loginForm = document.getElementById('login-form');

    loginBtn.addEventListener('click', function() {
        loginForm.classList.toggle('hidden');
    });

    document.getElementById('chat').addEventListener('click', function() {
        window.location.href = 'page2.html';
    });
});
