const openButton = document.getElementById("openButton");
const hero = document.querySelector(".hero");
const invitation = document.getElementById("invitation");

openButton.addEventListener("click", () => {

    // Button ausblenden
    openButton.style.display = "none";

    // Brief fährt hoch
    const letter = document.querySelector(".letter");

    letter.animate(
        [
            {
                transform: "translateX(-50%) translateY(0)"
            },
            {
                transform: "translateX(-50%) translateY(-120px)"
            }
        ],
        {
            duration: 1000,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );

    // Danach Einladung anzeigen
    setTimeout(() => {

        hero.style.display = "none";

        invitation.classList.remove("hidden");

    }, 1100);

});
