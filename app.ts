let btn = document.querySelector(".btn") as HTMLButtonElement;
let skillsList = document.querySelector(".skills") as HTMLElement;

btn?.addEventListener("click", () => {
    if (skillsList.style.display === "none" || !skillsList.style.display) {
        skillsList.style.display = "block";
    }
    else {
        skillsList.style.display = "none";
    }
});