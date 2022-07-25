import HoverableSquare from "../square/hoverSquare";

const AvailableMoves = ({
  game, hovered, setGame, setHovered,
}) => {
  console.log("render: <AvailableMoves/>");
  if(!hovered){ return null}

  return(
    <>
      {hovered.available.moves.map((move) => (
        <HoverableSquare
          key={`(${move[0]},${move[1]})`}
          x={move[0]}
          y={move[1]}
          z={0.01}
          color={(hovered) => (hovered ? "#0000ff" : "#ff00ff")}
          size={0.5}
          game={game}
          hovered={hovered}
          setGame={setGame}
          setHovered={setHovered}
        />
      ))}
      {hovered.available.takes.map((move) => (
        <HoverableSquare
          key={`(${move[0]},${move[1]})`}
          x={move[0]}
          y={move[1]}
          z={0.01}
          color={(hovered) => (hovered ? "#0000ff" : "#ff00ff")}
          size={0.9}
          game={game}
          hovered={hovered}
          setGame={setGame}
          setHovered={setHovered}
        />
      ))}
    </>
  )
}
export const getAvailableMoves = (game, position) => {
  const figure = game.mapping[position[0]][position[1]];
  if (!figure) {
    return null;
  }

  const {
    position: [x, y],
  } = figure;

  const moves = [];
  const takes = [];

  const checkDirection = (signA, signB, range) => {
    const { position } = figure;
    for (let i = 0; i < range + 1; i++) {
      const x = position[0] + signA * i;
      const y = position[1] + signB * i;

      const next = checkField(x, y);
      if (next === true) {
        break;
      } else if (next === false) {
        continue;
      }
    }
  };

  /**
   * Returns true if movement is blocking, false otherwise.
   */
  const checkField = (x, y) => {
    if (x == figure.position[0] && y === figure.position[1]) {
      return false;
    }

    if (x < 0 || y < 0 || x > 7 || y > 7) {
      return true;
    }

    const field = game.mapping[x][y];

    if (field) {
      if (field.color === figure.color) {
        return true;
      }
      if (figure.piece !== "pawn") {
        takes.push([x, y]);
      }

      return true;
    }

    moves.push([x, y]);
  };

  switch (figure.piece) {
    case "bishop":
      checkDirection(-1, -1, 8);
      checkDirection(-1, 1, 8);
      checkDirection(1, -1, 8);
      checkDirection(1, 1, 8);
      break;
    case "king":
      checkDirection(-1, -1, 1);
      checkDirection(-1, 1, 1);
      checkDirection(1, -1, 1);
      checkDirection(1, 1, 1);
      checkDirection(0, -1, 1);
      checkDirection(0, 1, 1);
      checkDirection(1, 0, 1);
      checkDirection(-1, 0, 1);
      break;
    case "knight":
      const knightMoves = [
        [x - 2, y - 1],
        [x - 1, y - 2],
        [x + 1, y - 2],
        [x + 2, y - 1],
        [x + 2, y + 1],
        [x + 1, y + 2],
        [x - 1, y + 2],
        [x - 2, y + 1],
      ];

      knightMoves.forEach((move) => {
        checkField(move[0], move[1]);
      });
      break;
    case "pawn":
      if (figure.color === "white") {
        if (y === 6) {
          checkDirection(0, -1, 2);
        } else {
          checkDirection(0, -1, 1);
        }

        if (x - 1 >= 0 && y - 1 >= 0) {
          const checkLeft = game.mapping[x - 1][y - 1];
          if (checkLeft && checkLeft.color === "black") {
            takes.push([x - 1, y - 1]);
          }
        }

        if (x + 1 <= 7 && y - 1 >= 0) {
          const checkRight = game.mapping[x + 1][y - 1];
          if (checkRight && checkRight.color === "black") {
            takes.push([x + 1, y - 1]);
          }
        }
      } else {
        if (y === 1) {
          checkDirection(0, 1, 2);
        } else {
          checkDirection(0, 1, 1);
        }

        if (x - 1 >= 0 && y - 1 >= 0) {
          const checkLeft = game.mapping[x - 1][y + 1];
          if (checkLeft && checkLeft.color === "white") {
            takes.push([x - 1, y + 1]);
          }
        }

        if (x + 1 <= 7 && y - 1 >= 0) {
          const checkRight = game.mapping[x + 1][y + 1];
          if (checkRight && checkRight.color === "white") {
            takes.push([x + 1, y + 1]);
          }
        }
      }
      break;
    case "queen":
      checkDirection(-1, -1, 8);
      checkDirection(-1, 1, 8);
      checkDirection(1, -1, 8);
      checkDirection(1, 1, 8);
      checkDirection(0, -1, 8);
      checkDirection(0, 1, 8);
      checkDirection(1, 0, 8);
      checkDirection(-1, 0, 8);
      break;
    case "rook":
      checkDirection(0, -1, 8);
      checkDirection(0, 1, 8);
      checkDirection(1, 0, 8);
      checkDirection(-1, 0, 8);
      break;
  }

  return { moves, takes };
};

export default AvailableMoves;