let themeGreen = document.querySelector(".theme__green")
let themeRed = document.querySelector(".theme__red")
let themeBlue = document.querySelector(".theme__blue")

let page = document.querySelector("html")

themeGreen.addEventListener("click", () => {

    page.removeAttribute("class")
    page.classList.add("theme__green--active")

})

themeRed.addEventListener("click", () => {

    page.removeAttribute("class")
    page.classList.add("theme__red--active")

})

themeBlue.addEventListener("click", () => {

    page.removeAttribute("class")
    page.classList.add("theme__blue--active")

})