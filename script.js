const openButton = document.getElementById("openInvitation");

const envelopePage = document.querySelector(".envelope-container");

const invitationCard = document.querySelector(".invitation-card");


openButton.addEventListener("click", function () {

    envelopePage.style.display = "none";

    invitationCard.classList.remove("hidden");

});
