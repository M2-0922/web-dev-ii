window.addEventListener("load", () => {

    const circle = document.getElementById("circle");
    let scrollY = 0;

    window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
        console.log(scrollY);
        circle.style.transform = `scale(${1 + scrollY / 100})`
    })
})