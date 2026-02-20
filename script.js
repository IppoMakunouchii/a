function nextPage() {
    window.location.href = "yes.html";
}

const noButton = document.getElementById("noButton");

const messages = [
    "No 😒",
    "Please 🥺",
    "Consider again 💕",
    "Think once more 😭",
    "Are you sure? 😢",
    "One more chance 😭",
    "Pleaseeee 😫"
];

let index = 0;

noButton.addEventListener("click", function () {
    index++;

    if (index >= messages.length) {
        index = 0; // repeat again
    }

    noButton.innerText = messages[index];
});
