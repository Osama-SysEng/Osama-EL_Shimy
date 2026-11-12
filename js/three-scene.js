// Three.js Interactive 3D Canvas Scene
(function() {
  const container = document.getElementById('hero-canvas-container');
  if (!container) return;

  let scene, camera, renderer, particles, mainGeometry, wireframeMesh, innerCore;
  let mouseX = 0, mouseY = 0;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;

  function init() {
    // 1. Scene & Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 500;

    // 2. Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 3. Central 3D Futuristic Neural Core
    const coreGroup = new THREE.Group();

    // Outer Wireframe Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(130, 2);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    wireframeMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    coreGroup.add(wireframeMesh);

    // Inner Glowing Core
    const innerGeom = new THREE.OctahedronGeometry(75, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    innerCore = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerCore);

    // Orbiting Golden Ring (representing NASA & Ministerial Honors)
    const ringGeom = new THREE.TorusGeometry(180, 2, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.5
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    coreGroup.add(ringMesh);

    // Position the 3D core slightly to the side on larger screens
    if (window.innerWidth > 1024) {
      coreGroup.position.x = 260;
    } else {
      coreGroup.position.y = -60;
    }
    scene.add(coreGroup);
    mainGeometry = coreGroup;

    // 4. Background Starfield / Neural Particles Network
    const particleCount = 750;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x06b6d4); // Cyan
    const color2 = new THREE.Color(0x8b5cf6); // Purple
    const color3 = new THREE.Color(0xf59e0b); // Gold

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 1600;
      positions[i + 1] = (Math.random() - 0.5) * 1200;
      positions[i + 2] = (Math.random() - 0.5) * 1200;

      const mixedColor = Math.random() > 0.6 ? color1 : (Math.random() > 0.3 ? color2 : color3);
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 5. Event Listeners
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchmove', onDocumentTouchMove, { passive: true });
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mainGeometry) {
      if (window.innerWidth > 1024) {
        mainGeometry.position.x = 260;
        mainGeometry.position.y = 0;
      } else {
        mainGeometry.position.x = 0;
        mainGeometry.position.y = -60;
      }
    }
  }

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.4;
    mouseY = (event.clientY - windowHalfY) * 0.4;
  }

  function onDocumentTouchMove(event) {
    if (event.touches.length > 0) {
      mouseX = (event.touches[0].clientX - windowHalfX) * 0.4;
      mouseY = (event.touches[0].clientY - windowHalfY) * 0.4;
    }
  }

  function animate() {
    requestAnimationFrame(animate);

    // Rotate main 3D Core
    if (mainGeometry) {
      mainGeometry.rotation.y += 0.007;
      mainGeometry.rotation.x += 0.003;
      if (innerCore) {
        innerCore.rotation.y -= 0.012;
        innerCore.rotation.z += 0.005;
      }
    }

    // Gentle particle floating
    if (particles) {
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;
    }

    // Camera inertia towards mouse
    camera.position.x += (mouseX - camera.position.x) * 0.04;
    camera.position.y += (-mouseY - camera.position.y) * 0.04;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  // Initialize once DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init();
      animate();
    });
  } else {
    init();
    animate();
  }
})();
