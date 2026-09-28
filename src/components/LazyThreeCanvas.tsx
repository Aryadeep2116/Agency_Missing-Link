import { useEffect, useRef } from "react";

type SceneModule = {
  initThreeHeroScene: (
    canvas: HTMLCanvasElement,
    stage: HTMLDivElement,
    onReady: (ready: boolean) => void,
  ) => () => void;
};

export function LazyThreeCanvas({
  stageRef,
  onReady,
}: {
  stageRef: { current: HTMLDivElement | null };
  onReady: (ready: boolean) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    let cancelled = false;
    let disposeScene: (() => void) | undefined;

    const loadScene = async () => {
      try {
        const sceneAsset = "/three-hero-scene.js";
        const module = (await import(/* @vite-ignore */ sceneAsset)) as SceneModule;
        if (cancelled) return;
        disposeScene = module.initThreeHeroScene(canvas, stage, onReady);
      } catch {
        onReady(false);
      }
    };

    void loadScene();
    return () => {
      cancelled = true;
      disposeScene?.();
    };
  }, [onReady, stageRef]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}