let youScore = 0;
let comScore = 0;

const genComChoice = () => ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];


const playGame = (youChoice) => {
    console.log("you Choice=", youChoice);
    const comChoice = genComChoice();
    console.log("com Choice=", comChoice);
    // TODO: update scores and UI as needed
   
};

// Single listener using event delegation — minimal and avoids duplicate handlers
document.addEventListener("click", (e) => {
    const el = e.target.closest(".choise[id]");
    if (!el) return;
    playGame(el.id);
});