import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.15.0/index.js";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.15.0/ScrollTrigger.js";

function createOrb(color, glowColor) {
  const group = new THREE.Group();
  const geometry = new THREE.IcosahedronGeometry(0.72, 3);
  const surface = new THREE.Mesh(
    geometry,
    new THREE.MeshPhysicalMaterial({
      color,
      emissive: glowColor,
      emissiveIntensity: 0.28,
      metalness: 0.48,
      roughness: 0.19,
      clearcoat: 1,
      clearcoatRoughness: 0.09,
      iridescence: 0.22,
      transparent: true,
      opacity: 0.94,
    }),
  );
  group.add(surface);

  const wireframe = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
    }),
  );
  wireframe.scale.setScalar(1.006);
  group.add(wireframe);

  group.add(
    new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.89, 2),
      new THREE.MeshBasicMaterial({
        color: glowColor,
        transparent: true,
        opacity: 0.075,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    ),
  );
  return group;
}

function createGlowLine(parent, count, opacity) {
  const geometry = new THREE.BufferGeometry();
  const attribute = new THREE.BufferAttribute(new Float32Array(count * 3), 3);
  attribute.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute("position", attribute);

  const line = new THREE.Line(
    geometry,
    new THREE.LineBasicMaterial({
      color: 0xff7a1a,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  line.frustumCulled = false;
  parent.add(line);
  return line;
}

function disposeScene(scene) {
  scene.traverse((object) => {
    if (!object.isMesh && !object.isLine) return;
    object.geometry.dispose();
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.forEach((material) => material.dispose());
  });
}

export function initThreeHeroScene(canvas, stage, onReady) {
  gsap.registerPlugin(ScrollTrigger);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 7.1);

  const pointerTarget = new THREE.Vector2();
  const pointer = new THREE.Vector2();
  const floatingGroup = new THREE.Group();
  const bridgeGroup = new THREE.Group();
  floatingGroup.add(bridgeGroup);
  bridgeGroup.position.set(2, 0.16, 0);
  scene.add(floatingGroup);

  const leftOrb = createOrb(0xe11d74, 0xc0135f);
  const rightOrb = createOrb(0xffc145, 0xe0a020);
  leftOrb.position.set(-1.17, 0, 0);
  rightOrb.position.set(1.17, 0, 0);
  bridgeGroup.add(leftOrb, rightOrb);

  const nodeGeometry = new THREE.IcosahedronGeometry(0.078, 1);
  const nodeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd78a,
    emissive: 0xff7a1a,
    emissiveIntensity: 1.65,
    metalness: 0.2,
    roughness: 0.2,
  });
  const nodes = Array.from({ length: 7 }, () => {
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    bridgeGroup.add(node);
    return node;
  });

  const linkGlow = createGlowLine(bridgeGroup, 40, 0.2);
  const linkLine = createGlowLine(bridgeGroup, 40, 0.78);
  const warmRim = new THREE.PointLight(0xffc145, 16, 7, 2);
  warmRim.position.set(3.2, 1.4, 1.4);
  scene.add(warmRim);
  scene.add(new THREE.AmbientLight(0x1c1024, 1.1));
  scene.add(new THREE.AmbientLight(0xffe0c2, 0.28));

  const magentaKey = new THREE.PointLight(0xe11d74, 32, 10, 2);
  magentaKey.position.set(-3.2, 2.2, 3.4);
  scene.add(magentaKey);
  const orangeFill = new THREE.PointLight(0xff7a1a, 26, 9, 2);
  orangeFill.position.set(2.6, -1.1, 2.8);
  scene.add(orangeFill);
  const goldRim = new THREE.PointLight(0xffc145, 14, 8, 2);
  goldRim.position.set(-0.3, 3, -1.6);
  scene.add(goldRim);

  scene.fog = new THREE.FogExp2(0x0f0a12, 0.028);
  const dust = new THREE.Points(
    new THREE.BufferGeometry().setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        Array.from({ length: 240 }, () => (Math.random() - 0.5) * 10),
        3,
      ),
    ),
    new THREE.PointsMaterial({
      color: 0xffc145,
      size: 0.035,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    }),
  );
  scene.add(dust);

  let renderer;
  let composer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
      stencil: false,
      depth: true,
    });
    renderer.setClearColor(0x0f0a12, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(1, 1), 0.58, 0.62, 0.18));
    composer.addPass(new OutputPass());
  } catch {
    canvas.style.display = "none";
    composer?.dispose();
    renderer?.dispose();
    disposeScene(scene);
    onReady(false);
    return () => {};
  }

  let resizeObserver;
  let frameId = 0;
  let lastFrame = 0;
  let disposed = false;
  let hasReportedReady = false;
  let scrollTimeline;
  const cardTweens = [];

  const resize = () => {
    const width = Math.max(stage.clientWidth, 1);
    const height = Math.max(stage.clientHeight, 1);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);
    composer.setPixelRatio(pixelRatio);
    composer.setSize(width, height);
  };
  resize();
  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);
  window.addEventListener("resize", resize, { passive: true });

  const updateLink = () => {
    const startX = leftOrb.position.x + 0.67;
    const endX = rightOrb.position.x - 0.67;
    const positions = linkLine.geometry.getAttribute("position");
    const glowPositions = linkGlow.geometry.getAttribute("position");

    for (let i = 0; i < positions.count; i += 1) {
      const t = i / (positions.count - 1);
      const x = THREE.MathUtils.lerp(startX, endX, t);
      const y = Math.sin(t * Math.PI) * 0.18;
      const z = Math.sin(t * Math.PI * 2) * 0.04;
      positions.setXYZ(i, x, y, z);
      glowPositions.setXYZ(i, x, y, z);
    }
    positions.needsUpdate = true;
    glowPositions.needsUpdate = true;
    linkLine.geometry.computeBoundingSphere();
    linkGlow.geometry.computeBoundingSphere();

    nodes.forEach((node, index) => {
      const t = (index + 1) / (nodes.length + 1);
      node.position.set(
        THREE.MathUtils.lerp(startX, endX, t),
        Math.sin(t * Math.PI) * 0.18,
        Math.sin(t * Math.PI * 2) * 0.04,
      );
    });
  };

  const frame = (now) => {
    if (disposed || document.hidden) return;
    frameId = window.requestAnimationFrame(frame);
    if (now - lastFrame < 1000 / 32) return;

    lastFrame = now;
    const elapsed = now * 0.001;
    pointer.lerp(pointerTarget, 0.045);
    floatingGroup.rotation.x +=
      (pointer.y * 0.12 + Math.sin(elapsed * 0.22) * 0.055 - floatingGroup.rotation.x) * 0.035;
    floatingGroup.rotation.y +=
      (elapsed * 0.12 + pointer.x * 0.16 - floatingGroup.rotation.y) * 0.035;
    floatingGroup.rotation.z = Math.sin(elapsed * 0.16) * 0.035;
    leftOrb.rotation.set(elapsed * 0.11, elapsed * 0.16, elapsed * 0.08);
    rightOrb.rotation.set(-elapsed * 0.08, -elapsed * 0.13, elapsed * 0.07);
    nodes.forEach((node, index) => {
      node.scale.setScalar(1 + Math.sin(elapsed * 2 + index * 0.9) * 0.1);
    });
    updateLink();
    composer.render();

    if (!hasReportedReady) {
      hasReportedReady = true;
      canvas.style.opacity = "1";
      onReady(true);
    }
  };

  const startRendering = () => {
    if (!frameId && !document.hidden) frameId = window.requestAnimationFrame(frame);
  };
  const stopRendering = () => {
    window.cancelAnimationFrame(frameId);
    frameId = 0;
    lastFrame = 0;
  };
  const onPointerMove = (event) => {
    if (event.pointerType === "touch") return;
    pointerTarget.set(
      (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2,
      (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * -2,
    );
  };
  const onPointerLeave = () => pointerTarget.set(0, 0);
  const onVisibilityChange = () => {
    if (document.hidden) stopRendering();
    else startRendering();
  };

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("blur", onPointerLeave);
  document.addEventListener("visibilitychange", onVisibilityChange);

  scrollTimeline = gsap.timeline({
    scrollTrigger: {
      id: "missing-link-hero-bridge",
      trigger: "#top",
      start: "top top",
      endTrigger: "#services",
      end: "top top",
      scrub: 1.15,
      pin: stage,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onEnter: startRendering,
      onEnterBack: startRendering,
      onLeave: stopRendering,
      onLeaveBack: startRendering,
    },
  });
  scrollTimeline
    .to(bridgeGroup.position, { x: 3.15, y: 1.12, z: -0.35, duration: 1, ease: "none" }, 0)
    .to(bridgeGroup.scale, { x: 0.58, y: 0.58, z: 0.58, duration: 1, ease: "none" }, 0)
    .to(leftOrb.position, { x: -0.58, duration: 1, ease: "none" }, 0)
    .to(rightOrb.position, { x: 0.58, duration: 1, ease: "none" }, 0)
    .to(camera.position, { x: 0.45, y: 0.22, z: 6.3, duration: 1, ease: "none" }, 0)
    .to(bridgeGroup.rotation, { x: 0.42, y: Math.PI * 0.8, duration: 1, ease: "none" }, 0);

  const cards = gsap.utils.toArray("#services .service-card");
  cards.forEach((card, index) => {
    const tween = gsap.fromTo(
      card,
      { autoAlpha: 0, y: 34, rotationX: 7, transformPerspective: 1000 },
      {
        autoAlpha: 1,
        y: 0,
        rotationX: 0,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          id: `missing-link-service-card-${index}`,
          trigger: card,
          start: "top 90%",
          once: true,
        },
      },
    );
    cardTweens.push(tween);
  });

  if (!document.hidden) startRendering();

  return () => {
    disposed = true;
    stopRendering();
    resizeObserver.disconnect();
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("blur", onPointerLeave);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    scrollTimeline.scrollTrigger?.kill();
    scrollTimeline.kill();
    cardTweens.forEach((tween) => {
      tween.scrollTrigger?.kill();
      tween.kill();
    });
    ScrollTrigger.refresh();
    composer.dispose();
    renderer.dispose();
    disposeScene(scene);
    onReady(false);
  };
}