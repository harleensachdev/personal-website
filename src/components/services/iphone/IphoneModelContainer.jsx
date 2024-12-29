import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { IphoneModel } from "./IphoneModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const IphoneModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <IphoneModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default IphoneModelContainer;
