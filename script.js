//Jak będzie Ci się chciało to zrób sztuczną inteliegncję ;*


let k = [];
let flag = 1;
let turn = 9;

let playerScore = 0;
let aiScore = 0;

//guzik restartu
const restart = document.createElement("div");
restart.id = "rest";
restart.innerText = "Jeszcze raz?";
const end = document.querySelector(".wrap");

//Odświerzanie planszy funkcja
function newGame() {
    for(let x = 1; x <=9; x++){
        k[x].innerHTML = "";
        restart.remove();
        flag = 1;
    }
}


//Odświerzanie planszy dodane do guzika
restart.addEventListener('click', newGame); 

// pobieranie pól 
for(let x = 1; x <=9; x++) {
 k[x] = document.getElementById('k'+x);
 k[x].addEventListener('click', draw); 
}

//rysowanie koła na wybranym polu
function draw() {
    if(this.innerHTML != '') { }
    else {
        if(flag == 1) {
            this.innerHTML = 'O';
            checkWin();
            flag = 0;
                turn--;
}}
ai();
}

// Ruchy ai
function ai() {
    if(flag == 0) {
    let rand = Math.floor(Math.random() * 9 +1); 
 
            if(k[rand].innerHTML == '') {
            k[rand].innerHTML ='X';
            checkWin();
            flag = 1;
                turn--;
        }
        else {
            ai();
        }
}}
// Tablica wyników 
function won(lastPlayer) {
    let winner = "";
    if(lastPlayer == 1) {
        winner = "O";
        playerScore++;
        scoreTab(winner)
    }
    else if(lastPlayer == 0) {
        winner ="X";
        aiScore++;
        scoreTab(winner);
    }
    else if(lastPlayer == "~")
        {
            winner ="~";
            scoreTab(winner);
        }
}


function scoreTab(whoWin) {
    k[1].innerHTML = "~";
    k[2].innerHTML = whoWin;
    k[3].innerHTML = "~";
    if(whoWin == "~") {
    k[4].innerHTML = "T";
    k[5].innerHTML = "I";
    k[6].innerHTML = "E";
    }
    else {
    k[4].innerHTML = "W";
    k[5].innerHTML = "I";
    k[6].innerHTML = "N"; 
    }
    k[7].innerHTML = playerScore;
    k[8].innerHTML = "-";
    k[9].innerHTML = aiScore;
        end.appendChild(restart);
                turn = 10;
}

// Sprawdzanie wygranej
function checkWin() {
            if(k[1].innerHTML == "O" && k[2].innerHTML == "O" && k[3].innerHTML == "O" || 
               k[1].innerHTML == "X" && k[2].innerHTML == "X" && k[3].innerHTML == "X"){
                 won(flag);}
            if(k[4].innerHTML == "O" && k[5].innerHTML == "O" && k[6].innerHTML == "O" || 
               k[4].innerHTML == "X" && k[5].innerHTML == "X" && k[6].innerHTML == "X"){
                won(flag);}
            if(k[7].innerHTML == "O" && k[8].innerHTML == "O" && k[9].innerHTML == "O" || 
               k[7].innerHTML == "X" && k[8].innerHTML == "X" && k[9].innerHTML == "X"){
                won(flag);}
            if(k[1].innerHTML == "O" && k[4].innerHTML == "O" && k[7].innerHTML == "O" || 
               k[1].innerHTML == "X" && k[4].innerHTML == "X" && k[7].innerHTML == "X"){
                won(flag);}
            if(k[2].innerHTML == "O" && k[5].innerHTML == "O" && k[8].innerHTML == "O" || 
               k[2].innerHTML == "X" && k[5].innerHTML == "X" && k[8].innerHTML == "X"){
                won(flag);}
            if(k[3].innerHTML == "O" && k[6].innerHTML == "O" && k[9].innerHTML == "O" || 
               k[3].innerHTML == "X" && k[6].innerHTML == "X" && k[9].innerHTML == "X"){
                won(flag);}
            if(k[1].innerHTML == "O" && k[5].innerHTML == "O" && k[9].innerHTML == "O" || 
               k[1].innerHTML == "X" && k[5].innerHTML == "X" && k[9].innerHTML == "X"){
                won(flag);}
            if(k[3].innerHTML == "O" && k[5].innerHTML == "O" && k[7].innerHTML == "O" || 
               k[3].innerHTML == "X" && k[5].innerHTML == "X" && k[7].innerHTML == "X"){
                won(flag);}
            else if(turn <= 1){
                won("~");
            }
    console.log(turn);
}
