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
