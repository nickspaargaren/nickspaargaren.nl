import { motion, useScroll, useTransform } from "framer-motion";
import React, { ReactElement, useEffect, useRef, useState } from "react";

const SlideAnimation = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [elementTop, setElementTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    if (!ref.current) return;
    setElementTop(ref.current.offsetTop);
    setWindowHeight(window.innerHeight);
  }, []);

  const opacity = useTransform(
    scrollY,
    [elementTop - windowHeight, elementTop - windowHeight + 70],
    [0, 1],
  );
  const y = useTransform(
    scrollY,
    [elementTop - windowHeight, elementTop - windowHeight + 70],
    [20, 0],
  );

  return (
    <motion.div ref={ref} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
};

export default SlideAnimation;
