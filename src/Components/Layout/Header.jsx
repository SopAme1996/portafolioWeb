import React from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { SideBar } from "../SideBar/SideBar";

export const Header = () => {
  const particlesInit = async (main) => {
    await loadFirePreset(main);
  };

  return (
    <header id="Inicio">
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 120,
          preset: "fire",
          detectRetina: true,
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
        }}
        init={particlesInit}
      />
      <SideBar />
    </header>
  );
};
