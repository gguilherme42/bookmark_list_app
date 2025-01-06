const button = document.querySelector(".alert");

button.addEventListener("click", () => {
    alert(`Path: ${__dirname}`);
});