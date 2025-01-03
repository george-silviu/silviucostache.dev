import { useEffect, useState } from "react";

import "./hero.styles.scss";

const Hero = () => {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setFirstLoad(true);
  }, []);

  return (
    <section className={`hero ${firstLoad ? "animated" : ""}`}>
      <h1 className="hero-title">Hi! My name is George-Silviu</h1>
    </section>
  );
};

export default Hero;
