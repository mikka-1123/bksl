import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ShipAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    
    // Create basic ship hull
    const shipGeometry = new THREE.BoxGeometry(2, 0.5, 4);
    const shipMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x0f2549, 
      flatShading: true
    });
    const ship = new THREE.Mesh(shipGeometry, shipMaterial);
    scene.add(ship);
    
    // Create ship cabin
    const cabinGeometry = new THREE.BoxGeometry(1, 0.6, 1.5);
    const cabinMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x0ea5e9, 
      flatShading: true
    });
    const cabin = new THREE.Mesh(cabinGeometry, cabinMaterial);
    cabin.position.y = 0.55;
    cabin.position.z = 1;
    ship.add(cabin);
    
    // Create containers
    const createContainer = (x: number, y: number, z: number, color: number) => {
      const containerGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.8);
      const containerMaterial = new THREE.MeshPhongMaterial({ 
        color, 
        flatShading: true 
      });
      const container = new THREE.Mesh(containerGeometry, containerMaterial);
      container.position.set(x, y, z);
      ship.add(container);
      return container;
    };
    
    // Add some containers with different colors
    createContainer(-0.6, 0.45, -1, 0xf59e0b); // Gold
    createContainer(-0.2, 0.45, -1, 0xe11d48); // Red
    createContainer(0.2, 0.45, -1, 0x2563eb);  // Blue
    createContainer(0.6, 0.45, -1, 0x16a34a);  // Green
    
    createContainer(-0.6, 0.45, -0.1, 0x6366f1); // Indigo
    createContainer(-0.2, 0.45, -0.1, 0xa855f7); // Purple
    createContainer(0.2, 0.45, -0.1, 0xf59e0b);  // Gold
    createContainer(0.6, 0.45, -0.1, 0xe11d48);  // Red
    
    // Add a second layer of containers
    createContainer(-0.6, 0.85, -1, 0x2563eb);  // Blue
    createContainer(-0.2, 0.85, -1, 0x16a34a);  // Green
    createContainer(0.2, 0.85, -1, 0xf59e0b);   // Gold
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Create simple water
    const waterGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    const waterMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x0284c7,
      transparent: true,
      opacity: 0.7,
      flatShading: true,
    });
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -0.5;
    scene.add(water);
    
    // Animation variables
    let frame = 0;
    const animate = () => {
      frame += 0.01;
      
      // Gentle ship rocking
      ship.rotation.z = Math.sin(frame) * 0.05;
      ship.rotation.x = Math.sin(frame * 0.5) * 0.03;
      
      // Ship moving forward and along wave pattern
      ship.position.y = Math.sin(frame) * 0.1;
      
      // Rotate the camera slightly to add movement interest
      camera.position.y = Math.sin(frame * 0.5) * 0.2;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Handle responsive resizing
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return (
    <motion.div 
      ref={containerRef} 
      className="w-full h-96 md:h-[400px] lg:h-[500px] bg-gradient-to-b from-sky-50 to-sky-100 relative overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(14,165,233,0.1)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
      
      {/* Maritime-inspired decorative elements */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-[#0ea5e9]/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-r from-[#0ea5e9]/20 to-transparent pointer-events-none"></div>
      
      {/* Compass rose decoration */}
      <div className="absolute bottom-4 right-4 w-16 h-16 opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" stroke="#0f2549" strokeWidth="1" fill="none" />
          <path d="M50,5 L50,95 M5,50 L95,50" stroke="#0f2549" strokeWidth="1" />
          <path d="M26,26 L74,74 M26,74 L74,26" stroke="#0f2549" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="3" fill="#0ea5e9" />
        </svg>
      </div>
      
      {/* Status panel */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg pointer-events-none">
        <p className="text-sm font-medium text-[#0f2549]">Cargo Ship Simulation</p>
        <div className="flex items-center mt-1">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
          <p className="text-xs text-gray-600">Active Journey</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ShipAnimation;