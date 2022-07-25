import { BoxBufferGeometry } from "three";

const Square = ({
  x, y, z, size, color
}) => {

  return(
    <group position={[x-4, z||0, y-4]}>
      <mesh>
        <boxBufferGeometry attach={"geometry"} args={[size, 0, size]}/>
        <meshStandardMaterial attach={"material"} color={color}/>
      </mesh>
    </group>
  )
}
const ChessBoard = () => {

  console.log("render: <ChessBoard/>");

  const fields = [0, 1, 2, 3, 4, 5, 6, 7];

  const mapping = fields.map((x)=>fields.map((y)=>(
    <Square
      key={`(${x},${y})`}
      x={x}
      y={y}
      size={1}
      color={(x+y)%2 ===0?"#666" : "#aaa"}
    />
  )))
  return  mapping;
}

export default ChessBoard;