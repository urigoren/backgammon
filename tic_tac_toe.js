let Xturn = true;
function check(id) {
    const cell = document.getElementById(id);
    const status = document.getElementById('statusInfo');
    if (cell.innerHTML === "") {
        if (Xturn) {
            cell.innerHTML = "X";
        } else {
            cell.innerHTML = "O";
        }
        Xturn = !Xturn;
        status.innerHTML = checkWinner();
    }
}
function reset() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    Xturn = true;
}
function getBoard() {
    let boardArray = [];
    for (let row=1; row<=3; row++) {
        let rowArray = [];
        for (let col=1; col<=3; col++) {
            const cell = document.getElementById(row+""+col);
            rowArray.push(cell.innerHTML);
        }
        boardArray.push(rowArray);
    }
    return boardArray;
}
function checkWinner() {
    const board = getBoard();
    return "";
}