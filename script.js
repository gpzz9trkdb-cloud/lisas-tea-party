console.log("Script läuft");

// Supabase Verbindung
const SUPABASE_URL = https://arxauuilfkynrzitwtet.supabase.co;
const SUPABASE_KEY = sb_publishable_CPHlclXrIvEaHKQjFBXT3w_Ws2FaWmF;

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// Seiten wechseln

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });


    const nextPage = document.getElementById(pageId);

    if(nextPage){
        nextPage.classList.add("active");
    }

}



function openInvitation(){

    showPage("invitation");

}



// Einladung öffnen

function openInvitation(){

    showPage("invitation");

}



// Zusage speichern

async function saveYes(){

    const name = document.getElementById("nameYes").value;
    const drink = document.getElementById("drinkWish").value;


    const { data, error } = await supabaseClient
        .from("guests")
        .insert([
            {
                name: name,
                attending: true,
                drink: drink
            }
        ]);


    if(error){

        console.log(error);
        alert("Da ist etwas schief gegangen.");

    } else {

        showPage("thanks");

    }

}



// Absage speichern

async function saveNo(){

    const name = document.getElementById("nameNo").value;


    const { data, error } = await supabaseClient
        .from("guests")
        .insert([
            {
                name: name,
                attending: false
            }
        ]);


    if(error){

        console.log(error);
        alert("Da ist etwas schief gegangen.");

    } else {

        showPage("thanksNo");

    }

}
