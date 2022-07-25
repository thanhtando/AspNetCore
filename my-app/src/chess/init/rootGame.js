
// init game position
const InitGame = {
  currentTurn: "white",
  figures:[
    {
      piece: "pawn",
      color: "black",
      position: [0, 1],
    },
    {
      piece: "pawn",
      color: "black",
      position: [1, 1],
    },
    {
      piece: "pawn",
      color: "black",
      position: [2, 1],
    },
    {
      piece: "pawn",
      color: "black",
      position: [3, 1],
    },
    {
      piece: "pawn",
      color: "black",
      position: [4, 1],
    },
    {
      piece: "pawn",
      color: "black",
      position: [5, 1],
    },
    {
      piece: "pawn",
      color: "black",
      position: [6, 1],
    },
    {
      piece: "pawn",
      color: "black",
      position: [7, 1],
    },
    {
      piece: "rook",
      color: "black",
      position: [0, 0],
    },
    {
      piece: "knight",
      color: "black",
      position: [1, 0],
    },
    {
      piece: "bishop",
      color: "black",
      position: [2, 0],
    },
    {
      piece: "queen",
      color: "black",
      position: [3, 0],
    },
    {
      piece: "king",
      color: "black",
      position: [4, 0],
    },
    {
      piece: "bishop",
      color: "black",
      position: [5, 0],
    },
    {
      piece: "knight",
      color: "black",
      position: [6, 0],
    },
    {
      piece: "rook",
      color: "black",
      position: [7, 0],
    },

    {
      piece: "pawn",
      color: "white",
      position: [0, 6],
    },
    {
      piece: "pawn",
      color: "white",
      position: [1, 6],
    },
    {
      piece: "pawn",
      color: "white",
      position: [2, 6],
    },
    {
      piece: "pawn",
      color: "white",
      position: [3, 6],
    },
    {
      piece: "pawn",
      color: "white",
      position: [4, 6],
    },
    {
      piece: "pawn",
      color: "white",
      position: [5, 6],
    },
    {
      piece: "pawn",
      color: "white",
      position: [6, 6],
    },
    {
      piece: "pawn",
      color: "white",
      position: [7, 6],
    },
    {
      piece: "rook",
      color: "white",
      position: [0, 7],
    },
    {
      piece: "knight",
      color: "white",
      position: [1, 7],
    },
    {
      piece: "bishop",
      color: "white",
      position: [2, 7],
    },
    {
      piece: "queen",
      color: "white",
      position: [3, 7],
    },
    {
      piece: "king",
      color: "white",
      position: [4, 7],
    },
    {
      piece: "bishop",
      color: "white",
      position: [5, 7],
    },
    {
      piece: "knight",
      color: "white",
      position: [6, 7],
    },
    {
      piece: "rook",
      color: "white",
      position: [7, 7],
    },
  ],
  mapping: [[], [], [], [], [], [], [], []]
}

InitGame.figures.forEach((figure)=>{
  //TODO: check map
  //console.log(figure.position[0], figure.position[1]);
  InitGame.mapping[figure.position[0]][figure.position[1]] = figure
  // console.log(figure)
})

// init game hovered
const Position = [0,0];
export const InitHover = {
  position:[],
  selected: false,
  available: {
    moves: [],
    takes: []
  }
}
export default InitGame;