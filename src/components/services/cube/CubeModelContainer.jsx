import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CubeModel } from "./CubeModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const CubeModelContainer = () => {
  return (
    <Canvas shadows>
      <Suspense fallback="Loading...">
        <Stage
          environment="sunset" // Updated environment for better ambiance
          intensity={0.7} // Increased lighting intensity
          shadows={{ type: "soft" }} // Soft shadows for smoother edges
        >
          <CubeModel />
        </Stage>
        <ambientLight intensity={0.3} /> {/* Subtle ambient light */}
        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
        <OrbitControls
          enableZoom={true} // Allow zoom for better exploration
          autoRotate
          autoRotateSpeed={2} // Faster auto-rotation
        />
        <PerspectiveCamera
          position={[-2, 1, 2]}
          zoom={0.4} // Adjusted camera position for better view
          makeDefault
        />
      </Suspense>
    </Canvas>
  );
};

export default CubeModelContainer;
