"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
let btn = document.querySelector(".btn");
let skillsList = document.querySelector(".skills");
btn?.addEventListener("click", () => {
    if (skillsList.style.display === "none" || !skillsList.style.display) {
        skillsList.style.display = "block";
    }
    else {
        skillsList.style.display = "none";
    }
});
