var playerRed = "Red";
var playerYell = "Yellow";
var current = playerRed;
var gameOver = false;
var board;
var currentColumn;


var rows=6;
var columns = 7;

window.onload = function() {
    setGame();
}

function setGame(){
    board = [];
    currentColumn = [5, 5, 5, 5, 5, 5, 5];
    for (let r = 0; r < rows; r++){
        let row = [];
        for(let c = 0; c < columns; c++){

            row.push(' ');

            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", placePiece)
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function placePiece() {
    if(gameOver) return;

    let coords = this.id.split("-");  
    let row = parseInt(coords[0]);
    let column = parseInt(coords[1]);

    row = currentColumn[column];
    if(row < 0){
        return;
    }
    board[row][column] = current;
    let tile = document.getElementById(row.toString() + "-" + column.toString());
    if(current == playerRed) {
        tile.classList.add("red-chip");
        current = playerYell;
    }
    else{
        tile.classList.add("yellow-chip");
        current = playerRed;
    }
    row -= 1;
    currentColumn[column] = row;

    cWin();
}

function cWin(){

}