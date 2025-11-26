//animations for 'start' button when you hover on it
document.getElementById("start").addEventListener("mouseover", function() {
    document.getElementById("start").src = "images/playD.png";
});

document.getElementById("start").addEventListener("mouseout", function() {
    document.getElementById("start").src = "images/play.png";
});

//go to game page when click
document.getElementById("start").addEventListener("click", function() {
    window.location.href="game.html";
});

//animation for 'info' button when hover on it
document.getElementById("info").addEventListener("mouseover", function() {
    document.getElementById("info").src = "images/infoD.png";
});

document.getElementById("info").addEventListener("mouseout", function() {
    document.getElementById("info").src = "images/info.png";
});
//go to info page when click
document.getElementById("info").addEventListener("click", function() {
    window.location.href="howtoplay.html";
});

