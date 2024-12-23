const btn = document.querySelector("#enter");
const nameInput = document.querySelector("#text");
const startPage = document.querySelector(".verify");
const mainPage = document.querySelector(".gallery");
const popupCard = document.getElementById("popupCard");
const closePopupButton = document.getElementById("closePopup");


function showPopup() {
    popupCard.style.display = "flex"; 
}


closePopupButton.addEventListener("click", () => {
    popupCard.style.display = "none"; 
});

btn.addEventListener("click", () => {
    const enteredName = nameInput.value.trim();

 
    if (enteredName.toLowerCase() === "deepak") {
        mainPage.style.display = "grid";
        startPage.style.display = "none";
    } else {
        
        showPopup();
    }
});
