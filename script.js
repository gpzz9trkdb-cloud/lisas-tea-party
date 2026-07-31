// ==========================
// SUPABASE
// ==========================

const SUPABASE_URL = "https://arxauuilfkynrzitwtet.supabase.co";
const SUPABASE_KEY = "sb_publishable_Qa1edI4RjgcNNCDBsl4Piw_9rsLeFiQ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// ==========================
// SEITEN WECHSELN
// ==========================

function showPage(pageId){

    document.querySelectorAll(".page").forEach(page=>{

        page.classList.remove("active");

    });

    document.getElementById(pageId).classList.add("active");

}

// ==========================
// START
// ==========================

function openInvitation(){

    showPage("invitation");

}

// ==========================
// ZUSAGE SPEICHERN
// ==========================

async function saveYes(){

    const name =
        document.getElementById("nameYes").value.trim();

    const drink =
        document.getElementById("drinkWish").value.trim();

    if(name===""){

        alert("Bitte gib deinen Namen ein :)");
        showPage("yes");
        return;

    }

    const { error } =
        await supabaseClient
        .from("guests")
        .insert({

            name:name,
            attending:true,
            drink:drink,
            gift:null

        });

    if(error){

        console.error(error);

        alert("Fehler beim Speichern.");

        return;

    }

    showPage("thanks");

}

// ==========================
// ABSAGE SPEICHERN
// ==========================

async function saveNo(){

    const name =
        document.getElementById("nameNo").value.trim();

    if(name===""){

        alert("Bitte gib deinen Namen ein :)");
        return;

    }

    const { error } =
        await supabaseClient
        .from("guests")
        .insert({

            name:name,
            attending:false,
            drink:null,
            gift:null

        });
    if (error) {
    console.log(error);
    alert(error.message);
    return;
}

    showPage("thanks");

