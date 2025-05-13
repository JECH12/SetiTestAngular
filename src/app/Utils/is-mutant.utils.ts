export function isMutant(dna: string[]): boolean {
  const N = dna.length;
  const matrix = dna.map(row => row.split(""));
  let sequences = 0;

  const isValidChar = (char: string) => ['A', 'T', 'C', 'G'].includes(char);

  const checkDirection = (x: number, y: number, dx: number, dy: number) => {
    const char = matrix[x][y];
    for (let i = 1; i < 4; i++) {
      const nx = x + dx * i;
      const ny = y + dy * i;
      if (
        nx >= N || ny >= N || nx < 0 || ny < 0 ||
        matrix[nx][ny] !== char
      ) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < N; i++) {
    if (dna[i].length !== N || ![...dna[i]].every(isValidChar)) {
      throw new Error("DNA inválido: matriz no 6x6 o contiene caracteres no permitidos.");
    }

    for (let j = 0; j < N; j++) {
      const directions = [
        [0, 1],   // horizontal
        [1, 0],   // vertical
        [1, 1],   // diagonal ↘
        [-1, 1],  // diagonal ↗
      ];
      for (const [dx, dy] of directions) {
        if (checkDirection(i, j, dx, dy)) {
          sequences++;
          if (sequences > 1) return true;
        }
      }
    }
  }

  return false;
}