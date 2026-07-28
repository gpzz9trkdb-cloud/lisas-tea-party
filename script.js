/* Lisas Tea Party - erste Funktionen 🌸 */
const openButton = document.getElementById("openInvitation");
const envelopePage = document.querySelector(".envelope-container");
const invitationCard = document.querySelector(".invitation-card");
openButton.addEventListener("click", function () {
    // Umschlag ausblenden
    envelopePage.style.display = "none";
    // Einladung anzeigen
    invitationCard.classList.remove("hidden");
});
