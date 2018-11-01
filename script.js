window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    showStart();

}

function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hide start");
    document.querySelector("#play").removeEventListener("click", hideStart);

    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("start game");
    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").classList.add("hide");

    document.querySelector("#tyv").addEventListener("click", clickBox1);
    document.querySelector("#bedstemor").addEventListener("click", clickBox2);

}

//En variabel med et tal
let score = 0;


function pageLoaded() {
    console.log("loaded");

    document.querySelector("#score").innerHTML = score;

}

function clickBox1() {
    console.log("tyv");

    score++;
    console.log(score);

    document.querySelector("#score").innerHTML = score;

    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click", clickBox1)
}

function clickBox2() {
    console.log("bedstemor");

    score--;
    console.log(score);
    document.querySelector("#score").innerHTML = score;

    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click", clickBox2)
}
