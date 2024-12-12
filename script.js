const emailInp = document.getElementById('email');
const passwordInp = document.getElementById('password');
const btn = document.getElementById('submit');


btn.addEventListener('mouseover', () =>{
    let email = emailInp.value.trim();
    let password = passwordInp.value

    if (!email || !password || !validateEmail(email) || password.length < 6) {
        const container = btn.parentElement;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = btn.getBoundingClientRect();

        // Calculate random new position within container
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        btn.style.left = `${newX}px`;
        btn.style.top = `${newY}px`;
        btn.classList.add("moving");
    } else {
        btn.classList.remove("moving");
        btn.style.left = "";
        btn.style.top = "";
    }

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        let email = emailInp.value.trim();
        let password = passwordInp.value;
        if (validateEmail(email) && password.length >= 6) {
            window.location.href = "https://nanocodes.com.ng";
        } 
        else {
            alert("Please enter valid details.");
        }
    })
});

emailInp.addEventListener("input", resetButton);
passwordInp.addEventListener("input", resetButton);

btn.addEventListener("click", (e) => {
    let email = emailInp.value.trim();
    let password = passwordInp.value;
    if (validateEmail(email) && password.length >= 6) {
        window.location.href = "https://nanocodes.com.ng/";
    } 
    else {
        e.preventDefault();
        alert("Please enter valid details.");
    }
});

function resetButton() {
    btn.classList.remove("moving");
    btn.style.left = "";
    btn.style.top = "";
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}