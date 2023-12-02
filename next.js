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

    nameElement.innerText = `${name}`;
    emailElement.innerText = `${email}`;
    phoneElement.innerText = `${phone}`;
}
