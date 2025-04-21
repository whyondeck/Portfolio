"use client";
import React from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";

function RobotModel() {
  const { scene } = useGLTF("/models/appIcon.glb");
  const modelRef = useRef();

  useFrame((state, delta) => {
    modelRef.current.rotation.y += delta * 0.3;
    modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={[0.6, 0.6, 0.6]}
      position={[0, 0, 0]}
    />
  );
}

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-16 ">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  drop-shadow-lg">
          WhyOnDeck
        </h1>
        <p className="mt-4  text-lg max-w-md mx-auto md:mx-0">
          Your gateway to futuristic interaction, innovation, and design.
        </p>
      </motion.div>

      {/* 3D Model Section */}
      <div className="z-10 aspect-square w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <RobotModel />
          <OrbitControls enablePan={false} enableZoom={false} />
          <Environment preset="studio" />
        </Canvas>
      </div>
    </div>
  );
}

export default HeroSection;

useGLTF.preload("/models/appIcon.glb");
