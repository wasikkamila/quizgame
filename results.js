window.addEventListener("DOMContentLoaded", () => { //display score on the results page
    const finalScore = localStorage.getItem("quizScore");
    document.getElementById("score").textContent = finalScore;
})
