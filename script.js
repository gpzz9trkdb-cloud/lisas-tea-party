const button = document.getElementById("openButton");
const letter = document.querySelector(".letter");
const envelope = document.querySelector(".envelope");
const hero = document.querySelector(".hero");

button.addEventListener("click", () => {

    button.disabled = true;

    // Brief fährt langsam heraus
    letter.animate(
        [
            {
                transform: "translateX(-50%) translateY(0px)",
                opacity: 1
            },
            {
                transform: "translateX(-50%) translateY(-120px)",
                opacity: 1
            }
        ],
        {
            duration: 1200,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );

    // Danach vergrößert sich der Brief
    setTimeout(() => {

        letter.style.transition = "all 0.9s ease";

        letter.style.position = "fixed";
        letter.style.left = "50%";
        letter.style.top = "50%";
        letter.style.bottom = "auto";

        letter.style.transform = "translate(-50%, -50%)";

        letter.style.width = "90vw";
        letter.style.maxWidth = "700px";
        letter.style.aspectRatio = "auto";
        letter.style.height = "80vh";
        letter.style.zIndex = "100";

    }, 1200);

});
