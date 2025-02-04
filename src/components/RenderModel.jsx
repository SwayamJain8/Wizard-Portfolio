"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

function RenderModel({ children, className }) {
  return (
    <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
      <Suspense>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
}

export default RenderModel;
