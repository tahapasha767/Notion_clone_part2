import React from "react";
import { motion } from "framer-motion";
import stringToColor from "@/lib/stringToColor";

type FollowPointerProps = {
  x: number;
  y: number;
  info: any;
};

const FollowPointer: React.FC<FollowPointerProps> = ({ x, y, info }) => {
  const color = stringToColor(info?.email || "1");

  return (
    <motion.div
      className="absolute z-50"
      style={{
        top: y,
        left: x,
        translateX: "-10%", // offset to align the pointer tip
        translateY: "-10%",
        pointerEvents: "none",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      exit={{ scale: 0, opacity: 0 }}
    >
      {/* Pointer SVG */}
      <svg
        width="24"
        height="36"
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.5 16.8829V1.19841L11.7841 12.3673H5.65376Z"
          fill={color}
        />
      </svg>

      {/* Optional: label beside cursor */}
      {/* 
      <span
        className="absolute left-6 top-1 text-xs font-medium text-gray-700 bg-white rounded px-1"
      >
        {info?.name || info?.email || "Anonymous"}
      </span>
      */}
    </motion.div>
  );
};

export default FollowPointer;
