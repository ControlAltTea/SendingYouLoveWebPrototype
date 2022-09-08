const revealElement = document.querySelector(".revealElement");

const hideElement = document.querySelector(".hideElement");

const bodyContainer = document.querySelector(".body");

console.log(revealElement);
console.log(hideElement);

function revealLoginSplash() {
    hideElement.classList.add("hidden");
    revealElement.classList.remove("hidden");
}

setTimeout(revealLoginSplash, 5000);