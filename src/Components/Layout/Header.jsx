import React from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { SideBar } from "../SideBar/SideBar";

export const Header = () => {
  const particlesInit = async (main) => {
    await loadFirePreset(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <header>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 120,
          preset: "fire",
          detectRetina: true,
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <SideBar />
    </header>
  );
};
