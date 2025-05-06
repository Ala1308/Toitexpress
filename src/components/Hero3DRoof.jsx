import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

// House base (walls) with door, windows, chimney
function HouseBase() {
  const brickTexture = useTexture('https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=512&q=80');
  const doorTexture = useTexture('https://images.unsplash.com/photo-1562530113-dc6a2b9c966e?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=512&q=80');
  const windowTexture = useTexture('https://images.unsplash.com/photo-1598982110503-e9b28f6d0c8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=512&q=80');
  
  return (
    <group>
      {/* Main house body */}
      <mesh position={[0, -1.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.5, 2, 2]} />
        <meshStandardMaterial map={brickTexture} roughness={0.9} />
      </mesh>
      {/* Door */}
      <mesh position={[0, -1.6, 1.01]} castShadow>
        <boxGeometry args={[0.7, 1.0, 0.06]} />
        <meshStandardMaterial map={doorTexture} roughness={0.8} />
      </mesh>
      {/* Door handle */}
      <mesh position={[0.25, -1.6, 1.08]} castShadow>
        <sphereGeometry args={[0.06]} />
        <meshStandardMaterial color="#ffa500" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Left window */}
      <mesh position={[-1, -0.8, 1.01]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.06]} />
        <meshStandardMaterial map={windowTexture} transmission={0.5} roughness={0.2} />
      </mesh>
      {/* Window frame left */}
      <mesh position={[-1, -0.8, 1.02]} castShadow>
        <boxGeometry args={[0.65, 0.05, 0.02]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <mesh position={[-1, -0.8, 1.02]} castShadow>
        <boxGeometry args={[0.05, 0.65, 0.02]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      {/* Right window */}
      <mesh position={[1, -0.8, 1.01]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.06]} />
        <meshStandardMaterial map={windowTexture} transmission={0.5} roughness={0.2} />
      </mesh>
      {/* Window frame right */}
      <mesh position={[1, -0.8, 1.02]} castShadow>
        <boxGeometry args={[0.65, 0.05, 0.02]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <mesh position={[1, -0.8, 1.02]} castShadow>
        <boxGeometry args={[0.05, 0.65, 0.02]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      {/* Chimney */}
      <mesh position={[-1.1, 0.8, 0.6]} castShadow>
        <boxGeometry args={[0.3, 1.0, 0.3]} />
        <meshStandardMaterial map={brickTexture} roughness={0.9} />
      </mesh>
      {/* Chimney top */}
      <mesh position={[-1.1, 1.35, 0.6]} castShadow>
        <boxGeometry args={[0.4, 0.1, 0.4]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}

// Roof base (static, under shingles)
function RoofBase() {
  const woodTexture = useTexture('https://images.unsplash.com/photo-1566312921547-7cc68f8e1d6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=512&q=80');
  
  return (
    <group>
      {/* Main roof base */}
      <mesh position={[0, 0.25, 0]} rotation={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.7, 0.45, 2.05]} />
        <meshStandardMaterial map={woodTexture} roughness={0.8} />
      </mesh>
      {/* Roof edges */}
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]} castShadow>
        <boxGeometry args={[3.9, 0.08, 2.2]} />
        <meshStandardMaterial color="#8a5a17" />
      </mesh>
    </group>
  );
}

// Shingle with texture
function Shingle({ position, color, scrollY, index, delay }) {
  const mesh = useRef();
  const shingleTexture = useTexture('https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=512&q=80');
  
  useFrame(() => {
    let t = Math.min((scrollY.current - delay) / 400, 1);
    // Only animate when user scrolls past delay
    if (scrollY.current <= delay) t = 0;
    // Clamp to prevent negative values
    t = Math.max(0, t);
    
    mesh.current.position.x = position[0];
    mesh.current.position.y = position[1];
    mesh.current.position.z = position[2] + t * 3.5 + index * 0.01;
    mesh.current.scale.set(1 + t * 0.8, 1 + t * 0.6, 1);
    // Add rotation for more dynamic effect
    mesh.current.rotation.x = t * 0.3 * (index % 3 - 1);
    mesh.current.rotation.y = t * 0.2 * (index % 5 - 2);
    mesh.current.rotation.z = t * 0.1 * (index % 2 - 0.5);
  });
  
  return (
    <mesh ref={mesh} position={position} castShadow receiveShadow>
      <boxGeometry args={[0.55, 0.22, 0.08]} />
      <meshStandardMaterial 
        color={color} 
        map={shingleTexture} 
        roughness={0.9} 
        metalness={0.1}
      />
    </mesh>
  );
}

function RoofShingles({ scrollY }) {
  // Arrange shingles in a pitched roof pattern
  const rows = 6;
  const cols = 9;
  const shingles = [];
  const baseDelay = 50; // Base delay before animation starts
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // Curve the shingles to match a pitched roof
      const roofY = 0.45 + 0.18 * (rows - y - 1);
      const roofX = (x - (cols - 1) / 2) * 0.45;
      const roofZ = 0.98 - Math.abs((x - (cols - 1) / 2)) * 0.10 - y * 0.03;
      
      // Vary colors for more realistic roof
      let color;
      if (y === 0) {
        color = '#ffa500';
      } else if (y === 1) {
        color = x % 2 === 0 ? '#b97a20' : '#c98730';
      } else {
        // Subtle variations in darker shingles
        const shade = 30 + Math.floor(Math.random() * 20);
        color = `rgb(${shade}, ${shade}, ${shade})`;
      }
      
      // Add slight randomness to position for realism
      const randomOffsetX = (Math.random() - 0.5) * 0.05;
      const randomOffsetY = (Math.random() - 0.5) * 0.03;
      
      // Add delay based on position for cascading effect
      const delay = baseDelay + (y * cols + x) * 5;
      
      shingles.push(
        <Shingle
          key={`${x}-${y}`}
          position={[roofX + randomOffsetX, roofY + randomOffsetY, roofZ]}
          color={color}
          scrollY={scrollY}
          index={y * cols + x}
          delay={delay}
        />
      );
    }
  }
  return <>{shingles}</>;
}

// Animated clouds in the background
function Clouds() {
  const cloud1 = useRef();
  const cloud2 = useRef();
  const cloud3 = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    cloud1.current.position.x = Math.sin(t * 0.05) * 5;
    cloud2.current.position.x = Math.sin(t * 0.04 + 2) * 7;
    cloud3.current.position.x = Math.sin(t * 0.03 + 4) * 6;
  });
  
  return (
    <group position={[0, 3, -10]}>
      <mesh ref={cloud1} position={[-5, 2, -5]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="white" transparent opacity={0.8} />
      </mesh>
      <mesh ref={cloud2} position={[3, 0, -8]}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshStandardMaterial color="white" transparent opacity={0.6} />
      </mesh>
      <mesh ref={cloud3} position={[-2, -1, -12]}>
        <sphereGeometry args={[3, 16, 16]} />
        <meshStandardMaterial color="white" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

// Animated sun with glow
function Sun() {
  const sun = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    sun.current.rotation.z = t * 0.1;
    sun.current.scale.x = 1 + Math.sin(t * 0.5) * 0.05;
    sun.current.scale.y = 1 + Math.sin(t * 0.5) * 0.05;
  });
  
  return (
    <mesh ref={sun} position={[8, 5, -15]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="#ffdd00" />
    </mesh>
  );
}

export default function Hero3DRoof() {
  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ width: '100%', height: '380px', background: 'linear-gradient(to bottom, #003366, #001a33)', borderRadius: '0 0 32px 32px', overflow: 'hidden', boxShadow: '0 6px 32px rgba(0,0,0,0.2)' }}>
      <Canvas camera={{ position: [0, 1.5, 8], fov: 35 }} shadows dpr={[1, 2]}>
        <color attach="background" args={['#003366']} />
        <fog attach="fog" args={['#001a33', 8, 20]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 10]} intensity={1.2} castShadow shadow-mapSize={1024} />
        <spotLight position={[-5, 10, -2]} intensity={0.5} angle={0.5} penumbra={0.8} castShadow />
        
        {/* Sky elements */}
        <Sun />
        <Clouds />
        
        {/* Shadow plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.4, 0]} receiveShadow>
          <planeGeometry args={[30, 30]} />
          <shadowMaterial opacity={0.15} />
        </mesh>
        
        {/* Ground with grass texture */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.15, 0]} receiveShadow>
          <planeGeometry args={[12, 12]} />
          <meshStandardMaterial color="#1a6600" roughness={0.9} />
        </mesh>
        
        {/* House with slight rotation for better perspective */}
        <group position={[0, -0.15, 0]} rotation={[0, Math.PI * 0.03, 0]}>
          <HouseBase />
          <RoofBase />
          {/* Roof group with slight rotation for 3D effect */}
          <group rotation={[-Math.PI / 12, 0, 0]}>
            <RoofShingles scrollY={scrollY} />
          </group>
        </group>
        
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}
