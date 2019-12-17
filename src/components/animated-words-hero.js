import React, { useEffect, useState } from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui'

const AnimatedWordsHero = props => {
  const [initialized, setInitialized] = useState(null);
  const words = ["Development", "Drupal", "Gatsby", "Decoupled", "DevOps", "it all!"];

  useEffect(() => {
    if (!initialized) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/typer-dot-js@0.1.0/typer.js";
      script.async = true;
      document.body.appendChild(script);
      setInitialized(true)
    }
  });
  return (
    <div className=" md:h-title-hero lg:h-hero h-14 flex items-center justify-center w-full font-serif " sx={{
      // height: 'hero',
      background: "linear-gradient(-30deg,#644B78 0%,#AF1F45 100%)",
    }}>
      <h1 className="text-white text-3xl lg:text-6xl">we<span className="font-bold">Know </span></h1>
      <span id="main" className="typer ml-3 font-slim text-3xl lg:text-6xl" data-colors="white" data-words={words.join(",")} data-delay="100" data-deletedelay="1000"></span>
      <span className="cursor font-slim text-3xl lg:text-6xl text-white" data-owner="main"></span>
    </div>
  );
};

export default AnimatedWordsHero;
