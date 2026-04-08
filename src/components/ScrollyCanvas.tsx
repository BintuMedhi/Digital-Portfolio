"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 45;

const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(2, "0")}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images
    let loadedCount = 0;
    const loadImages = () => {
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            setImagesLoaded(loadedCount);
          }
        };
        imagesRef.current[i] = img;
      }
    };

    loadImages();
  }, []);

  const drawImageWithCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const renderFrame = (index: number) => {
    if (imagesLoaded !== FRAME_COUNT) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set proper internal width/height to retina resolution if needed
    // or simply match client bounds for simplicity
    const parent = canvas.parentElement;
    if (parent) {
      if (canvas.width !== parent.clientWidth || canvas.height !== parent.clientHeight) {
        // High DPI canvas rendering can be expensive, sticking to client sizes
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    }

    const img = imagesRef.current[index];
    if (img) {
      drawImageWithCover(ctx, img, canvas);
    }
  };

  // Render initial frame on load
  useEffect(() => {
    if (imagesLoaded === FRAME_COUNT) {
      // Need a small timeout to let layout settle, or trigger resize
      const handleResize = () => renderFrame(Math.round(frameIndex.get()));
      window.addEventListener('resize', handleResize);
      handleResize(); // trigger initial draw
      return () => window.removeEventListener('resize', handleResize);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded]);

  // Render frame on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(Math.round(latest));
  });

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
        {imagesLoaded < FRAME_COUNT && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm tracking-widest z-50 pointer-events-none">
            LOADING ASSETS...
          </div>
        )}
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
