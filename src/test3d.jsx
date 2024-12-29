// USING THREE.JS TO CREATE 3D SHAPES

import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Test3d = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        /* canvas is responsive to parent node so resizing here can change canvas size scene,*/
      }}
    >
      <Canvas>
        {/* everything thing in canvas is a native element, no need to import*/}{" "}
        {/* represents scene, renders */}
        <mesh>
          {" "}
          {/* mesh is a basic scene object in three.js that holds material to represent a 3d shape*/}
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#DB8B9B"
              attach="material"
              distort={0.5}
              speed={2}
              /* allows distortion of an object by attaching 'material' with a distortion meter, it distorts at a speed on different sides of the sphere*/
            />
          </Sphere>
          {/* <meshStandardMaterial color="red"/> => CHANGES COLOR OF SHAPE TO RED*/}
          <ambientLight intensity={2} />{" "}
          {/*non directional light to brighten entire scene in same amount*/}
          <directionalLight position={[1, 2, 3]} />
          {/* different amounts of light in different sides of shape to give 3d shape*/}
          {/* <OrbitControls enableZoom={false} /> => allows rotation, enlargement, shrinking of shape with mouse */}
        </mesh>
      </Canvas>
    </section>
  );
};

export default Test3d;
