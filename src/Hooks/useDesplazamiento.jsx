import { useEffect, useRef } from "react";

export const useDesplazamiento = () => {
  const desplazamiento = useRef({ current: 0 });
    const handleScroll = (e) => {
      
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return desplazamiento;
};
