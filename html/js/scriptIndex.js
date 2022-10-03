const createAccount = document.getElementById("create_account");
const regDisplay = document.querySelector(".zyber-info");
const exitRegister = document.getElementById("exit-register");

createAccount.addEventListener("click", (e) => {
    e.preventDefault();
    regDisplay.style.display = "flex";
    regDisplay.style.opacity = 1;
});

exitRegister.addEventListener("click", (e) => {
    e.preventDefault();
    regDisplay.style.display = "none";
    regDisplay.style.opacity = 0;
});