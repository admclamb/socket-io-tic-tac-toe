export function getWinner(matrix) {
  // Check rows for a win
  for (let i = 0; i < matrix.length; i++) {
    if (
      matrix[i][0] !== "" &&
      matrix[i][0] === matrix[i][1] &&
      matrix[i][1] === matrix[i][2]
    ) {
      return matrix[i][0];
    }
  }

  // Check columns for a win
  for (let j = 0; j < matrix.length; j++) {
    if (
      matrix[0][j] !== "" &&
      matrix[0][j] === matrix[1][j] &&
      matrix[1][j] === matrix[2][j]
    ) {
      return matrix[0][j];
    }
  }

  // Check diagonals for a win
  if (
    matrix[0][0] !== "" &&
    matrix[0][0] === matrix[1][1] &&
    matrix[1][1] === matrix[2][2]
  ) {
    return matrix[0][0];
  }
  if (
    matrix[0][2] !== "" &&
    matrix[0][2] === matrix[1][1] &&
    matrix[1][1] === matrix[2][0]
  ) {
    return matrix[0][2];
  }

  // Check if there are any empty spaces left
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === "") {
        return null;
      }
    }
  }

  // If there are no empty spaces left and no win, it's a tie
  return "tie";
}
