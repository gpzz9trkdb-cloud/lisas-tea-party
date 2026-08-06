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


    const newPage = document.getElementById(pageId);

    newPage.classList.add("active");

}

function openInvitation(){

    const envelope = document.querySelector(".envelope");
    const letter = document.querySelector(".letter");


    // 1. Brief zieht sich aus dem Umschlag
    letter.style.transform =
        "translateX(-50%) translateY(-80px)";


    // 2. Umschlag verschwindet
    setTimeout(()=>{

        envelope.style.opacity = "0";

    },1000);


    // 3. Brief wird groß
    setTimeout(()=>{

        letter.style.transform =
            "translateX(-50%) translateY(-80px) scale(2.8)";

    },1500);


    // 4. Übergang zur Einladung
    setTimeout(()=>{

        letter.style.opacity = "0";

    },2800);


    setTimeout(()=>{

        showPage("invitation");

    },3200);

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

    

createPetals();

    showPage("thanks");

return;
  
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

    createPetals();

showPage("thanksNo");
}


// ==========================
// BLÜTEN
// ==========================

function createPetals(){

    const colors=[
        "#fffdf8",
        "#f8edf1",
        "#f6f2e8"
    ];

    for(let i=0;i<28;i++){

        const petal=document.createElement("div");

        petal.className="petal";

        petal.innerHTML="❀";

        petal.style.color=
            colors[Math.floor(Math.random()*colors.length)];

        petal.style.left=Math.random()*100+"vw";

        petal.style.fontSize=
            (14+Math.random()*14)+"px";

        petal.style.animationDuration=
            (5+Math.random()*4)+"s";

        petal.style.animationDelay=
            (Math.random()*2)+"s";

        document.body.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },9000);

    }

}
