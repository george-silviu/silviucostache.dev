import { useEffect, useState } from "react";

import "./hero.styles.scss";

const Hero = () => {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setFirstLoad(true);
  }, []);

  return (
    <section className={`hero ${firstLoad ? "animated" : ""}`}>
      Hi! My name is George-Silviu
    </section>
  );
};

export default Hero;
