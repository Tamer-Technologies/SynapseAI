import { useEffect, useRef } from "react";

const useMouseParallex = (strenth = 0.02) => {
  const ref = useRef(null);

  useEffect(() => {
    function handleMouseMove(e) {
      if (!ref.current) return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (e.clientX - centerX) * strenth;
      const offsetY = (e.clientY - centerY) * strenth;

      ref.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strenth]);

  return ref;
};

export default useMouseParallex;
