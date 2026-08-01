// ==========================
// SUPABASE
// ==========================

const SUPABASE_URL = "https://arxauuilfkynrzitwtet.supabase.co";
const SUPABASE_KEY = "sb_publishable_vi6j1dhwxDE2MPpam-vzqQ_CDNKYodh";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// ==========================
// SEITEN
// ==========================

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

function openInvitation(){

    const letter = document.querySelector(".letter");

    letter.style.transform =
        "translateX(-50%) translateY(-45px)";

    setTimeout(()=>{

        showPage("invitation");

    },600);

}

// ==========================
// ZUSAGE
// ==========================

async function saveYes() {

    const name = document.getElementById("nameYes").value.trim();
    const drink = document.getElementById("drinkWish").value.trim();

    if (name === "") {
        alert("Bitte gib deinen Namen ein.");
        showPage("yes");
        return;
    }

    const { error } = await supabaseClient
        .from("guests")
        .insert({
            name: name,
            attending: true,
            drink: drink
        });

    if (error) {
        console.log(error);
        alert(error.message);
        return;
    }

    showPage("thanks");
}

// ==========================
// ABSAGE
// ==========================

async function saveNo() {

    const name = document.getElementById("nameNo").value.trim();

    if (name === "") {
        alert("Bitte gib deinen Namen ein.");
        return;
    }

    const { error } = await supabaseClient
        .from("guests")
        .insert({
            name: name,
            attending: false
        });

    if (error) {
        console.log(error);
        alert(error.message);
        return;
    }

    showPage("thanksNo");
}
