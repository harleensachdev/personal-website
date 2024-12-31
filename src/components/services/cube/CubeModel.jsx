/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 cube.glb 
Author: Akshat (https://sketchfab.com/shooter24994)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tesseract-cube-43c205c3ea964d96b0e40319c2db5a14
Title: Tesseract Cube
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function CubeModel(props) {
  const { nodes, materials } = useGLTF("/cube.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube_Material_0.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/cube.glb");