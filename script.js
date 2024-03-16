const img = document.querySelector(".container img");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    if (img.classList.contains("move-diagonal")) {
        img.classList.remove("move-diagonal");
    } else {
        img.classList.add("move-diagonal");
    }
})