var typed = new Typed(".typing", {
    strings: ["Laudos e Projetos"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var navLinks = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.right = "0";
    }

    function hideMenu(){
        navLinks.style.right = "-200px";
    }