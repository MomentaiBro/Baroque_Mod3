const navBar = document.getElementById("sidenav");

const openBtn = document.getElementById("openbtn");

const closeBtn = document.getElementById("closebtn")

openBtn.addEventListener("click", openNav)

closeBtn.addEventListener("click", closeNav)



function openNav() {
    document.getElementById("sidenav").style.transform = "translateX(0px)";
}


function closeNav() {
    document.getElementById("sidenav").style.transform = "translateX(-384px)";

}