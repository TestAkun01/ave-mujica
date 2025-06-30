"use client";

import { Text } from "@react-three/drei";

export default function LoadingThree() {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[0, 0, 0]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#881144" wireframe />
      </mesh>
      <Text
        position={[0, -2, 0]}
        color="#881144"
        fontSize={0.5}
        anchorX="center"
        anchorY="middle"
      >
        Loading...
      </Text>
    </group>
  );
}
