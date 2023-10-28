const modal = document.querySelector(".share-modol");
const overlay = document.querySelector(".overlay");

// For open

const openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// for close

const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");

}