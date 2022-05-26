function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function displayAdvice() {
    let h2 = document.querySelector('h2');
    const API_URL = "https://api.adviceslip.com/advice";
    fetch(API_URL)
        .then(response => response.json())
        .then( slip => {
            let text = document.createTextNode(slip['slip']['advice']);
            h2.appendChild(text);
        })
}

function changeImage() {

        /* Transparent background */

        /*
        transparentBg = document.createElement("div");
        transparentBg.classList.add("transparentBg");
        document.body.appendChild(transparentBg);

        */

        /*Fortune cookie paper
        fortunePaper = document.createElement("p");
        fortuneText = document.createTextNode("slay");
        fortuneContainer = document.createElement("div");
        fortuneContainer.classList.add("cookiePaper");
        fortunePaper.classList.add(fortuneText);

        fortunePaper.appendChild(fortuneText);
        fortuneContainer.appendChild(fortunePaper);
        document.body.appendChild(fortuneContainer);

        */
        clickCount++;

        let image = document.querySelector('img');
        let image2 = document.createElement('img');
        image2.src = `./images/cookie-${clickCount}.png`;
        document.body.replaceChild(image2, image);
        image2.addEventListener("click", changeImage);
        image2.style.maxWidth = "100vw";

        if (clickCount === 3) {

            image2.removeEventListener("click", changeImage);
            let image = document.querySelector('img');

            image.addEventListener("click", toggleModal);
            closeButton.addEventListener("click", toggleModal);
            window.addEventListener("click", windowOnClick);

            displayAdvice();

        }
    
}

function reset() {
    clickCount = 0;
    changeImage();
    text = document.querySelector("h2");
    text.innerText = "";
}

let clickCount = 1;

let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-button");

cookie = document.querySelector('img');
cookie.addEventListener("click", changeImage);

newFortuneButton = document.querySelector('.new-fortune__button');
newFortuneButton.addEventListener("click", reset);