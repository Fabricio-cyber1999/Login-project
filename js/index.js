function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password')

    if(eye.style.display === 'nome') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'nome';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'nome';
        eyeSlash.style.display = 'block'
        fieldPassword.type = 'text';
    }
};

document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('logado')
})