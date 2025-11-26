window.addEventListener("DOMContentLoaded", () => { //display score on the results page
    const finalScore = localStorage.getItem("quizScore");
    document.getElementById("score").textContent = finalScore;
})

document.getElementById("playAgain").addEventListener("mouseover", function() {
    document.getElementById("playAgain").src = "images/playagainD.png";
});

document.getElementById("playAgain").addEventListener("mouseout", function() {
    document.getElementById("playAgain").src = "images/playagain.png";
});

document.getElementById("playAgain").addEventListener("click", function() {
    localStorage.removeItem('quizScore');
    window.location.href="index.html";
});

