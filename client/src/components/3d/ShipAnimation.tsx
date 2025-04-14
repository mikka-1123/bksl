import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';

const ShipAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x162d4e);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.set(5, 3, 7);
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 2;
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x3498db, 1, 10);
    pointLight.position.set(0, 2, 3);
    scene.add(pointLight);
    
    // Create simplified cargo ship
    const createShip = () => {
      const shipGroup = new THREE.Group();
      
      // Ship hull (base)
      const hullGeometry = new THREE.BoxGeometry(4, 0.5, 1.2);
      const hullMaterial = new THREE.MeshStandardMaterial({ color: 0x34495e });
      const hull = new THREE.Mesh(hullGeometry, hullMaterial);
      hull.position.y = 0.25;
      hull.castShadow = true;
      hull.receiveShadow = true;
      shipGroup.add(hull);
      
      // Hull bottom shape (for bow)
      const bowGeometry = new THREE.ConeGeometry(0.6, 1, 4);
      const bow = new THREE.Mesh(bowGeometry, hullMaterial);
      bow.rotation.z = Math.PI / 2;
      bow.rotation.y = Math.PI / 4;
      bow.position.set(-2, 0.25, 0);
      bow.castShadow = true;
      bow.receiveShadow = true;
      shipGroup.add(bow);
      
      // Deck
      const deckGeometry = new THREE.BoxGeometry(3.2, 0.1, 1);
      const deckMaterial = new THREE.MeshStandardMaterial({ color: 0x95a5a6 });
      const deck = new THREE.Mesh(deckGeometry, deckMaterial);
      deck.position.set(0, 0.55, 0);
      deck.castShadow = true;
      deck.receiveShadow = true;
      shipGroup.add(deck);
      
      // Bridge
      const bridgeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
      const bridgeMaterial = new THREE.MeshStandardMaterial({ color: 0xecf0f1 });
      const bridge = new THREE.Mesh(bridgeGeometry, bridgeMaterial);
      bridge.position.set(1.2, 1, 0);
      bridge.castShadow = true;
      bridge.receiveShadow = true;
      shipGroup.add(bridge);
      
      // Windows on bridge
      const windowMaterial = new THREE.MeshStandardMaterial({ color: 0x3498db, emissive: 0x3498db, emissiveIntensity: 0.5 });
      const windowGeometry = new THREE.BoxGeometry(0.82, 0.2, 0.82);
      const bridgeWindows = new THREE.Mesh(windowGeometry, windowMaterial);
      bridgeWindows.position.set(1.2, 1.15, 0);
      shipGroup.add(bridgeWindows);
      
      // Containers
      const containerColors = [0xe74c3c, 0x3498db, 0x2ecc71, 0xf1c40f, 0x9b59b6];
      
      for (let i = 0; i < 8; i++) {
        const containerGeometry = new THREE.BoxGeometry(0.4, 0.3, 0.3);
        const containerMaterial = new THREE.MeshStandardMaterial({ 
          color: containerColors[Math.floor(Math.random() * containerColors.length)]
        });
        const container = new THREE.Mesh(containerGeometry, containerMaterial);
        
        // Position in grid pattern
        const col = Math.floor(i / 2);
        const row = i % 2;
        container.position.set(-0.5 + col * 0.5, 0.75 + row * 0.3, 0);
        container.castShadow = true;
        container.receiveShadow = true;
        shipGroup.add(container);
      }
      
      // Chimney/funnel
      const funnelGeometry = new THREE.CylinderGeometry(0.15, 0.2, 0.6, 8);
      const funnelMaterial = new THREE.MeshStandardMaterial({ color: 0xe74c3c });
      const funnel = new THREE.Mesh(funnelGeometry, funnelMaterial);
      funnel.position.set(0.6, 1.2, 0);
      funnel.castShadow = true;
      funnel.receiveShadow = true;
      shipGroup.add(funnel);
      
      // Create "smoke" particles from the funnel
      const smokeParticles = new THREE.Group();
      for (let i = 0; i < 5; i++) {
        const smokeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const smokeMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xcccccc, 
          transparent: true, 
          opacity: 0.7 - (i * 0.1)
        });
        const smoke = new THREE.Mesh(smokeGeometry, smokeMaterial);
        smoke.position.set(0.6, 1.5 + (i * 0.1), 0);
        smoke.scale.set(0.5 + (i * 0.2), 0.5 + (i * 0.2), 0.5 + (i * 0.2));
        smoke.userData = { speed: 0.005 + (Math.random() * 0.005) };
        smokeParticles.add(smoke);
      }
      shipGroup.add(smokeParticles);
      
      // Create water animation plane
      const waterGeometry = new THREE.PlaneGeometry(15, 15, 32, 32);
      const waterMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a6b96,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      
      // Animate water vertices to create waves
      const { count } = waterGeometry.attributes.position;
      const waterVertices = waterGeometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const x = waterVertices[i * 3];
        const z = waterVertices[i * 3 + 2];
        waterVertices[i * 3 + 1] = Math.sin(x + z) * 0.1;
      }
      
      const water = new THREE.Mesh(waterGeometry, waterMaterial);
      water.rotation.x = -Math.PI / 2;
      water.position.y = -0.2;
      water.receiveShadow = true;
      scene.add(water);
      
      // Animation for the waves
      const waterUniforms = {
        time: { value: 0 }
      };
      
      // Return elements that need to be animated
      return { shipGroup, smokeParticles, water, waterVertices, waterGeometry, waterUniforms };
    };
    
    const { shipGroup, smokeParticles, water, waterVertices, waterGeometry } = createShip();
    scene.add(shipGroup);
    
    // Add floating animation to the ship
    gsap.to(shipGroup.position, {
      y: 0.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // Slight rotation animation to simulate waves
    gsap.to(shipGroup.rotation, {
      z: 0.03,
      x: 0.02,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update controls
      controls.update();
      
      // Animate smoke particles
      smokeParticles.children.forEach((particle, i) => {
        particle.position.y += particle.userData.speed;
        particle.userData.opacity = particle.material.opacity -= 0.002;
        
        // Reset smoke particle when it's faded away
        if (particle.material.opacity <= 0) {
          particle.position.y = 1.5;
          particle.material.opacity = 0.7 - (i * 0.1);
          particle.scale.set(0.5 + (i * 0.2), 0.5 + (i * 0.2), 0.5 + (i * 0.2));
        }
      });
      
      // Animate water waves
      const time = Date.now() * 0.003;
      for (let i = 0; i < waterVertices.length / 3; i++) {
        const x = waterVertices[i * 3];
        const z = waterVertices[i * 3 + 2];
        waterVertices[i * 3 + 1] = Math.sin(x / 2 + time) * 0.1 + Math.sin(z / 3 + time) * 0.1;
      }
      waterGeometry.attributes.position.needsUpdate = true;
      
      // Render scene
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Dispose geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="w-full h-full rounded-xl overflow-hidden bg-[#162d4e] shadow-xl"
      style={{ position: 'relative' }}
    ></div>
  );
};

export default ShipAnimation;