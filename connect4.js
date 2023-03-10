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
    let piece = document.getElementById(row.toString() + "-" + column.toString());
    if(current == playerRed) {
        piece.classList.add("r-chip");
        current = playerYell;
    }
    else{
        piece.classList.add("y-chip");
        current = playerRed;
    }
    row -= 1;
    currentColumn[column] = row;

    cWin();
}

function setGame(){
    board = [];
    currentColumn = [5, 5, 5, 5, 5, 5, 5];
    for (let r = 0; r < rows; r++){
        let row = [];
        for(let c = 0; c < columns; c++){

            row.push(' ');

            let piece = document.createElement("div");
            piece.id = r.toString() + "-" + c.toString();
            piece.classList.add("piece");
            piece.addEventListener("click", placePiece)
            document.getElementById("board").append(piece);
        }
        board.push(row);
    }
}

function setWin(r, c){
    let winner = document.getElementById("win");
    if(board[r][c] == playerRed) {winner.innerText = "Red Wins!";}
    if(board[r][c] == playerYell){
        winner.innertext = "Yellow Wins!"
    }
    gameOver=true;
}

function cWin(){
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            if(board[r][c] != ' '){
                if(board[r][c] == board[r][c + 1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                    setWin(r, c);
                    return;
                }
            }
        }
    }
    for(let r=0; r < rows-3; r++){
        for (let c = 0; c < columns-3; c++){
            if(board[r][c]!=' '){
                if(board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]){
                    setWin(r,c);
                    return;
                }
            }
        }
    }
    for(let r=3; r < rows; r++){
        for (let c = 0; c < columns - 3; c++){
            if(board[r][c]!=' '){
                if(board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]){
                    setWin(r,c);
                    return;
                }
            }
        }
    }
    for(let c = 0; c < columns; c++){
        for(let r = 0; r < rows-3; r++){
            if(board[r][c] != ' '){
                if(board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]){
                    setWin(r, c);
                    return;
                }
            }
        }
    }
}