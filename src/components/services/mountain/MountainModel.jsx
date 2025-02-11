/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 mountain.glb 
Author: keremakgn (https://sketchfab.com/keremakgn)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3-mountain-faef03ef9bca40c99e9f2b1780cda99d
Title: 3 Mountain
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import mountainModelPath from "/mountain.glb?url"; // Adjust the path based on your project structure

export function MountainModel(props) {
  const { nodes, materials } = useGLTF(mountainModelPath);
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.152, 0.157]} rotation={[3.112, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload(mountainModelPath);
