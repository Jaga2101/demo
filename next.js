document.addEventListener("DOMContentLoaded", function () {
    displayUserData();
});

function displayUserData() {
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');

    // Retrieve values from localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');

    nameElement.innerText = `Name: ${name}`;
    emailElement.innerText = `Email: ${email}`;
    phoneElement.innerText = `Phone: ${phone}`;
}
