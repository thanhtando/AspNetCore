import React, { Suspense, useState } from "react";
import InitGame, { InitHover } from "./init/rootGame";
import { Canvas } from "@react-three/fiber";
import { Stats, softShadows } from "@react-three/drei";
import ChessBoard from "./board/chessBoard";
import AvailableMoves from "./moves/moves";
import Figures from "./figures";

softShadows({});
const GameApp = () => {

  console.log("render: <app/>");

  //
  const [game, setGame] = useState(InitGame);

  // hover
  const [hovered, setHovered] = useState(InitHover);
  
  //console.log(game);
  return(
    <>
      <label>game main</label>
      <Canvas
        camera={{position:[4, 10, 0]}}
      >
        <Stats/>
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, 0, -20]} color="purple" intensity={2.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <directionalLight
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          intensity={1.5}
          position={[4, 10, 4]}
        />
        <Suspense fallback={null}>
          <ChessBoard/>
          <Figures
            game={game}
            hovered={hovered}
            setHovered={setHovered}
          />
          <AvailableMoves
            game={game}
            hovered={hovered}
            setGame={setGame}
            setHovered={setHovered}
          />
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0.05, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" transparent opacity={0.3} />
          </mesh>
        </Suspense>
      </Canvas>
    </>
  )
}

export default GameApp;