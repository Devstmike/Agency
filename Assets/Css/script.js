let EntranceSection = document.querySelector(".EntranceAnimation");
let EntranceText = document.querySelector(".EntranceAnimation h3")
let heroText = document.querySelector(".hero h1")

setTimeout(() => {
    EntranceSection.classList.add("ExitAnimation")
    EntranceText.style.color = "white";
     EntranceText.classList.remove("animate__flipInX")
    EntranceText.classList.add("animate__bounceOut")
    setTimeout(() => {
        EntranceSection.style.display = "none"
        EntranceSection.style.animationName = "myOpacity"
        EntranceSection.style.animationDuration = "10s"
        EntranceSection.style.animationFillMode = "forwards"
        heroText.classList.add("animate__zoomIn")
    }, 1000);
}, 2000);


let MenuIcon = document.querySelector("header i.fa-bars");
let cancelIcon = document.querySelector("header i.fa-xmark");
let navBar = document.querySelector("header nav");

MenuIcon.onclick = () => {
    navBar.classList.add("showMe")
    MenuIcon.classList.add("hideMe")
    cancelIcon.classList.add("showMe");
}


cancelIcon.onclick = () => {
    navBar.classList.remove("showMe")
    MenuIcon.classList.remove("hideMe")
    cancelIcon.classList.remove("showMe");
}