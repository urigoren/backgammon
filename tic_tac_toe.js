let Xturn = true;
function check(id) {
    const cell = document.getElementById(id);
    if (cell.innerHTML === "") {
        if (Xturn) {
            cell.innerHTML = "X";
        } else {
            cell.innerHTML = "O";
        }
        Xturn = !Xturn;
    }
}