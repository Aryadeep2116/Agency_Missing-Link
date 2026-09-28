import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";

const ThreeHeroCanvas = lazy(() =>
  import("@/components/LazyThreeCanvas").then((module) => ({
    default: module.LazyThreeCanvas,
  })),
);

function BridgeArtwork() {
  return (
    <svg
      className="h-full w-full overflow-visible"
      viewBox="0 0 800 580"
      fill="none"
      role="presentation"
    >
      <defs>
        <linearGradient id="bridge-line" x1="190" y1="280" x2="620" y2="310" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E11D74" />
          <stop offset="0.52" stopColor="#FF7A1A" />
          <stop offset="1" stopColor="#FFC145" />
        </linearGradient>
        <radialGradient id="bridge-blue" cx="0" cy="0" r="1" gradientTransform="matrix(108 100 -90 97 235 248)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB0D0" />
          <stop offset="0.32" stopColor="#E11D74" />
          <stop offset="1" stopColor="#E11D74" stopOpacity="0.05" />
        </radialGradient>
        <radialGradient id="bridge-teal" cx="0" cy="0" r="1" gradientTransform="matrix(108 100 -90 97 566 304)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE7A8" />
          <stop offset="0.3" stopColor="#FFC145" />
          <stop offset="1" stopColor="#FFC145" stopOpacity="0.04" />
        </radialGradient>
        <filter id="bridge-blur" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="11" />
        </filter>
        <filter id="bridge-soft" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      <g className="bridge-fallback-float">
        <ellipse cx="401" cy="287" rx="302" ry="145" stroke="white" strokeOpacity="0.12" strokeDasharray="3 12" />
        <ellipse cx="400" cy="287" rx="248" ry="105" stroke="url(#bridge-line)" strokeOpacity="0.16" transform="rotate(-12 400 287)" />

        <path d="M264 292C320 232 360 354 408 293C456 232 500 340 542 292" stroke="url(#bridge-line)" strokeWidth="25" strokeLinecap="round" opacity="0.66" filter="url(#bridge-blur)" />
        <path d="M264 292C320 232 360 354 408 293C456 232 500 340 542 292" stroke="url(#bridge-line)" strokeWidth="3" strokeLinecap="round" />

        <circle cx="236" cy="282" r="83" fill="url(#bridge-blue)" stroke="#FF7AA8" strokeOpacity="0.52" />
        <circle cx="236" cy="282" r="84" stroke="white" strokeOpacity="0.23" />
        <path d="M180 225C201 206 234 198 264 210" stroke="white" strokeOpacity="0.46" strokeWidth="2" strokeLinecap="round" />
        <circle cx="566" cy="302" r="83" fill="url(#bridge-teal)" stroke="#FFC145" strokeOpacity="0.55" />
        <circle cx="566" cy="302" r="84" stroke="white" strokeOpacity="0.23" />
        <path d="M510 245C531 226 564 218 594 230" stroke="white" strokeOpacity="0.46" strokeWidth="2" strokeLinecap="round" />

        <g fill="#FFC145" stroke="#3A1C0A" strokeOpacity="0.2">
          <circle cx="309" cy="269" r="8" />
          <circle cx="358" cy="295" r="6" />
          <circle cx="408" cy="293" r="9" />
          <circle cx="459" cy="286" r="6" />
          <circle cx="506" cy="308" r="8" />
        </g>
        <g fill="white" opacity="0.55" filter="url(#bridge-soft)">
          <circle cx="309" cy="269" r="12" />
          <circle cx="408" cy="293" r="13" />
          <circle cx="506" cy="308" r="12" />
        </g>
        <path d="M134 417C222 464 560 473 674 396" stroke="url(#bridge-line)" strokeOpacity="0.23" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

export function HeroScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [loadScene, setLoadScene] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  const handleReady = useCallback((ready: boolean) => {
    setSceneReady(ready);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const hero = document.getElementById("top");
    if (!stage || !hero) return;

    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const device = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    const lowPower =
      Number(navigator.hardwareConcurrency || 8) <= 4 ||
      (typeof device.deviceMemory === "number" && device.deviceMemory <= 4) ||
      device.connection?.saveData === true;

    if (mobile || reducedMotion || lowPower || !("WebGLRenderingContext" in window)) {
      return;
    }

    let timeoutId: number | undefined;
    let idleId: number | undefined;
    const idleWindow = window as IdleWindow;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (idleWindow.requestIdleCallback) {
          idleId = idleWindow.requestIdleCallback(() => setLoadScene(true), { timeout: 850 });
        } else {
          timeoutId = window.setTimeout(() => setLoadScene(true), 180);
        }
      },
      { rootMargin: "160px 0px" },
    );

    observer.observe(hero);

    const moveFallback = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      stage.style.setProperty("--parallax-x", `${x * 5}deg`);
      stage.style.setProperty("--parallax-y", `${-y * 4}deg`);
    };
    const resetFallback = () => {
      stage.style.setProperty("--parallax-x", "0deg");
      stage.style.setProperty("--parallax-y", "0deg");
    };

    window.addEventListener("pointermove", moveFallback, { passive: true });
    window.addEventListener("blur", resetFallback);

    return () => {
      observer.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      if (idleId !== undefined) idleWindow.cancelIdleCallback?.(idleId);
      window.removeEventListener("pointermove", moveFallback);
      window.removeEventListener("blur", resetFallback);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="hero-scene-stage pointer-events-none absolute inset-x-0 top-0 z-0 h-[100svh] min-h-[520px] max-h-[1000px] overflow-hidden"
      data-scene-ready={sceneReady}
      aria-hidden="true"
    >
      <div className="hero-scene-wash absolute inset-0" />
      <div className="bridge-fallback-art absolute left-1/2 top-[66%] aspect-[800/580] w-[min(112vw,860px)] -translate-x-1/2 -translate-y-1/2 md:left-[60%] md:top-[48%] lg:left-[64%]">
        <div className="bridge-fallback-parallax h-full w-full">
          <BridgeArtwork />
        </div>
      </div>
      {loadScene && (
        <Suspense fallback={null}>
          <ThreeHeroCanvas stageRef={stageRef} onReady={handleReady} />
        </Suspense>
      )}
    </div>
  );
}