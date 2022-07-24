
import { useState } from "react";

const HoverableSquare = ({
  x, y, z, size, color, 
  game, hovered, setGame, setHovered
}) => {

  const [isHovered, setIsHovered] = useState(false);

  const onPointerUp=() => {
    if (!hovered) {
      return;
    }

    const beating = game.mapping[x][y];

    if (game.mapping[x][y] === hovered.position) {
      return;
    }

    if (beating) {
      game.figures = game.figures.filter(
        (figure) => !(figure.position[0] === x && figure.position[1] === y)
      );
      const current = game.mapping[hovered.position[0]][hovered.position[1]];
      game.mapping[x][y] = current;
      current.position = [x, y];
      game.mapping[hovered.position[0]][hovered.position[1]] = undefined;
    } else {
      const current = game.mapping[hovered.position[0]][hovered.position[1]];
      game.mapping[x][y] = current;
      current.position = [x, y];
      game.mapping[hovered.position[0]][hovered.position[1]] = undefined;
    }
    setHovered(null);
    setGame({
      ...game,
      currentTurn: game.currentTurn === "white" ? "black" : "white",
    });
  }
  return(
    <group
      position={[x - 4, z || 0, y -4]}
      onPointerOver ={ () => setIsHovered(true)}
      onPointerOut={()=>setIsHovered(false)}
      onPointerUp={()=>onPointerUp()}
    >
      <mesh>
        <boxBufferGeometry attach="geometry" args={[size, 0, size]} />
        <meshStandardMaterial attach="material" color={color(isHovered)} />
      </mesh>
    </group>
  );
}
export default HoverableSquare;