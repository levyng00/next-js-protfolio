import { useState, useEffect } from "react";
type MousePosition = {
  x: number | null;
  y: number | null;
};
const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return mousePosition;
};

export default useMousePosition;
