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



function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    //alert("prevented")
    for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function(event) {
    event.preventDefault();
    SendData()
    });
    }
}

 window.addEventListener("load", preventFormSubmit); 

// I used Google Apps Script to handle Email
function SendData() {
    // e.preventDefault()
     const formEle = document.querySelector(".hero-Contact-Page form");
     const formDatab = new FormData(formEle);
     console.log("sent")
     console.log(formDatab)
     formDatab.forEach(el => {
         console.log(el)
     })
     fetch(
     "https://script.google.com/macros/s/AKfycbwcGmdLuLK81k02EvRmvsexi8iiah0Cz-qmV7-JyzCxMjJR9CVDEkzMVx2jCmDX2SjEEw/exec",
     {
         method: "POST",
         body: formDatab
     }
     )
     .then((res) => res.text())
     .then((data) => {
         console.log(data);
     })
     .catch((error) => {
         console.log(error);
     });

    formEle.reset()

    let thankyou =  `<div class="thanks" style="text-align:center">
         <p style="Color:green;font-size:2rem;margin-bottom:10px">
             Thank You!
         </p>
         <p>
             Your Message has been Sent.
        </p>
     </div>`;
     document.querySelector(".hero-Contact-Page").innerHTML = thankyou
 }
 
