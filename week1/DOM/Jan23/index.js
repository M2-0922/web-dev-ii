window.addEventListener("load", function() {
    let headerButton = document.querySelector("#headerButton");
    let headerParagrapgh = document.querySelector("#header");
    
    headerButton.addEventListener("click", () => {
        console.log("Button Clicked!");
        headerParagrapgh.style.background = "orange";
    })
})



