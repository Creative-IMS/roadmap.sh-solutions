let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay")
let closeBtn = document.getElementById("close");
let contactBtn = document.getElementById("contact-button");

contactBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function openModal(){
    modal.style.display = "block";
    overlay.style.display = "block";

}

function closeModal(){
    modal.style.display = "none";
    overlay.style.display = "none";
}
