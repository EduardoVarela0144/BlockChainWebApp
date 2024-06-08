import React from "react";
import { motion as m } from "framer-motion";

export default function AnimationLayout({ children }) {
  return (
    <m.main
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {" "}
      {children}
    </m.main>
  );
}
