const openButton = document.getElementById("openInvitation");

const envelopePage = document.querySelector(".envelope-container");

const invitationCard = document.querySelector(".invitation-card");

const envelope = document.querySelector(".envelope");


openButton.addEventListener("click", function () {

    envelope.classList.add("open");


    setTimeout(function () {

        envelopePage.style.opacity = "0";

    }, 900);


    setTimeout(function () {

        envelopePage.style.display = "none";

        invitationCard.classList.remove("hidden");

    }, 2500);


});
