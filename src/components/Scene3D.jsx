import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = ({ type }) => {
  const shapeRef = useRef();

  useFrame((state) => {
    if (shapeRef.current) {
      shapeRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      shapeRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
    }
  });

  const geometry = useMemo(() => {
    switch (type) {
      case 'diagnostic': return <torusKnotGeometry args={[1, 0.3, 128, 16]} />;
      case 'staff': return <octahedronGeometry args={[1.5, 0]} />;
      case 'finance': return <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />;
      case 'communication': return <icosahedronGeometry args={[1.5, 0]} />;
      case 'portal': return <torusGeometry args={[1.2, 0.4, 16, 100]} />;
      case 'administration': return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case 'transport': return <boxGeometry args={[2, 0.8, 1]} />;
      case 'library': return <boxGeometry args={[1, 1.5, 0.2]} />;
      case 'hostel': return <coneGeometry args={[1.2, 2, 4]} />;
      case 'reports': return <boxGeometry args={[1, 2, 1]} />;
      case 'technical': return <sphereGeometry args={[1.2, 32, 32]} />;
      default: return <sphereGeometry args={[1, 32, 32]} />;
    }
  }, [type]);

  const material = useMemo(() => {
    const color = new THREE.Color(
      type === 'finance' ? '#fbbf24' : 
      type === 'diagnostic' ? '#3b82f6' : 
      type === 'staff' ? '#6366f1' :
      type === 'communication' ? '#f59e0b' :
      '#60a5fa'
    );

    return (
      <MeshDistortMaterial 
        color={color} 
        speed={2} 
        distort={0.4} 
        radius={1}
        emissive={color}
        emissiveIntensity={0.5}
      />
    );
  }, [type]);

  return (
    <mesh ref={shapeRef}>
      {geometry}
      {material}
    </mesh>
  );
};

export const Background3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas shadow={{ type: 'basic' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {Array.from({ length: 20 }).map((_, i) => (
          <Float key={i} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={2} position={[
            (Math.random() - 0.5) * 25,
            (Math.random() - 0.5) * 25,
            (Math.random() - 0.5) * 15
          ]}>
            <mesh rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
              <octahedronGeometry args={[Math.random() * 0.8, 0]} />
              <MeshDistortMaterial color={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#6366f1" : "#a855f7"} speed={2} distort={0.4} />
            </mesh>
          </Float>
        ))}
      </Canvas>
    </div>
  );
};

const Scene3D = ({ type }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 lg:opacity-100">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <AnimatedShape type={type} />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={4} />
      </Canvas>
    </div>
  );
};

export default Scene3D;


