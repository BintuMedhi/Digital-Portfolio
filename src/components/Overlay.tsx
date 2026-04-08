"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: Shows from 0% to 30%, completely hidden after 35%
  const opacity1 = useTransform(progress, [0, 0.15, 0.3, 0.35], [1, 1, 0, 0]);
  const display1 = useTransform(progress, (p) => (p > 0.35 ? "none" : "flex"));

  // Section 2: Shows from 50% to 85%, fades out after 85%. Completely hidden outside that range.
  const opacity2 = useTransform(progress, [0.45, 0.55, 0.8, 0.9], [0, 1, 1, 0]);
  const display2 = useTransform(progress, (p) => (p < 0.45 || p > 0.95 ? "none" : "flex"));

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, display: display1 }}
        className="absolute w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] flex-col items-center justify-center top-1/2 -translate-y-1/2 text-center"
      >
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white drop-shadow-xl">
          Bintu Medhi<span className="text-white/30">.</span>
        </h1>
        <p className="text-xl md:text-3xl text-neutral-300 mt-6 tracking-wide font-light drop-shadow-md">
          Digital Marketing Enthusiast & Cinematographer
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, display: display2 }}
        className="absolute w-[calc(100%-3rem)] md:w-1/2 flex-col items-start top-1/2 -translate-y-1/2 left-6 md:left-12 text-left"
      >
        <h2 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl">
          I craft engaging <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 filter drop-shadow-sm">
            visual stories.
          </span>
        </h2>
      </motion.div>
    </div>
  );
}
