let userscore = 0;
let computerscore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");

const Gencomputerchoice = () => {
    const options = ["rock", "paper", "Scissiors"];
    const mathRand = Math.floor(Math.random() * 3);
    return options[mathRand];
    // rock  paper sciss

};
const drawgame = () => {

    msg.innerText = "game was  Draw -------Play Again !";
    msg.style.backgroundColor = "black";
}
const showwinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;

        msg.innerText = `you win your ${compchoice} beat  ${userchoice} `;
        msg.style.backgroundColor = "blue";
    } else {
        computerscore++;
        computerscorepara.innerText = computerscore;

        msg.innerText = `you lose  ${compchoice} beat your ${userchoice} `;
        msg.style.backgroundColor = "red";
    }
};
const playgame = (userchoice) => {

    // genrate computer choice
    const compchoice = Gencomputerchoice();

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;

        }
        else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;

        }
        else {
            userWin = compchoice === "rock" ? false : true;

        }
        showwinner(userWin, compchoice, userchoice);

    }

};
choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    });

});