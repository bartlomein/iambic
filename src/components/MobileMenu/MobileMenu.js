import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={isOpen ? { width: 300 } : 0}
    >
      <motion.div
        className="background"
        variants={sidebar}
        isOpen={isOpen}
        style={isOpen ? { zIndex: 2, width: 300 } : { zIndex: 0, width: 0 }}
      />
      <Navigation toggleOpen={() => toggleOpen()} isOpen={isOpen} />
      <MenuToggle
        toggle={() => toggleOpen()}
        style={{ zIndex: 999, paddingTop: 6 }}
      />
    </motion.nav>
  );
};
