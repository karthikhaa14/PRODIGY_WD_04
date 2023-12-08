const cells = document.querySelectorAll('.cell');
const status = document.querySelector('.status');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const checkWin = () => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      gameActive = false;
      return gameState[a];
    }
  }

  return '';
};
const handleCellClick = (e, index) => {
  if (!gameActive || gameState[index] !== '') return;

  gameState[index] = currentPlayer;
  cells[index].innerText = currentPlayer;
  cells[index].classList.add(currentPlayer);

  const winner = checkWin();
  if (winner !== '') {
    status.innerText = `Player ${winner} wins!`;
    gameActive = false;
    return;
  }

  if (!gameState.includes('')) {
    status.innerText = "It's a tie!";
    gameActive = false;
    return;
  }
  if (currentPlayer=='X')
    currentPlayer='O';
  else
    currentPlayer='X';
  status.innerText = `Player ${currentPlayer}'s turn`;
};
const resetGame = () => {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  cells.forEach((cell) => {
    cell.innerText = '';
    cell.classList.remove('X', 'O');
  });
  status.innerText = `Player ${currentPlayer}'s turn`;
};
cells.forEach((cell, index) => {
  cell.addEventListener('click', (e) => handleCellClick(e, index));
});

resetButton.addEventListener('click', resetGame);

