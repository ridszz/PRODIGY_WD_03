let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    document.getElementById("message").innerHTML=`Winner is ${currentPlayer}`;
    setTimeout(resetGame, 2000); // Delay before resetting the game
    return true;
}

  if (!arr.some((e) => e === null)) {
    document.getElementById("alert").innerHTML=`Draw !`;
    setTimeout(resetGame, 2000); // Delay before resetting the game
    return true;
  }
  return false;
}

function handleClick(el) {
    const id = Number(el.id);
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  if (!checkWinner()){
      currentPlayer = currentPlayer === "X" ? "0" : "X";
  }
}

function resetGame() {
    arr.fill(null);
    currentPlayer = "X";
    const cells = document.querySelectorAll('.col');
    cells.forEach(col => col.innerText = '');
    document.getElementById("message").innerHTML = ''; // Clear the message
}