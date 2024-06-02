// Navbar

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Reset error messages
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }

    // Validate Name
    var nameInput = document.getElementById('name');
    var nameError = document.querySelector('.name .error');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
    } else if (nameInput.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long';
    }

    // Validate Email
    var emailInput = document.getElementById('email');
    var emailError = document.querySelector('.email .error');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format';
    }

    // Validate Password
    var passwordInput = document.getElementById('password');
    var passwordError = document.querySelector('.password .error');
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required';
    } else if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
    }

    // Validate Date of Birth
    var dobInput = document.getElementById('dob');
    var dobError = document.querySelector('.dob .error');
    if (dobInput.value.trim() === '') {
        dobError.textContent = 'Date of Birth is required';
    }

    // Validate Consent
    var consentInput = document.getElementById('consent');
    var consentError = document.querySelector('.consent .error');
    if (!consentInput.checked) {
        consentError.textContent = 'You must agree to the terms and conditions';
    }

    // Check if there are any error messages
    var errorElements = document.getElementsByClassName('error');
    var isError = false;
    for (var i = 0; i < errorElements.length; i++) {
        if (errorElements[i].textContent !== '') {
            isError = true;
            break;
        }
    }

    // If no errors, display success message
    if (!isError) {
        var successMessage = document.createElement('span');
        successMessage.textContent = 'Form submitted successfully';
        successMessage.classList.add('success');
        document.getElementById('form').appendChild(successMessage);
    }
});
