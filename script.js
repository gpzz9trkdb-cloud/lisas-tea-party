/* Lisas Tea Party - Umschlag Animation 🌸 */


const openButton = document.getElementById("openInvitation");

const envelopePage = document.querySelector(".envelope-container");

const envelope = document.querySelector(".envelope");

const invitationCard = document.querySelector(".invitation-card");



openButton.addEventListener("click", function () {

    // Umschlag öffnen
    envelope.classList.add("open");


    // kurze Verzögerung, dann Karte zeigen
    setTimeout(() => {

        envelopePage.style.display = "none";

        invitationCard.classList.remove("hidden");

    }, 1200);


});

/* Umschlag öffnet sich 💌 */


.envelope {
    transition: transform 0.8s ease;
}


.envelope.open {

    transform: translateY(10px) scale(1.05);

}


/* kleine Öffnungsbewegung der Klappe */

.envelope.open .flap {

    transform: rotateX(180deg);

}


.flap {

    transform-origin: top;

    transition: transform 0.8s ease;

}
