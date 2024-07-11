import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Card = ({img, title, link}) => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br px-4 py-12 text-slate-900">
      <TiltCard img={img} title={title} link={link}/>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({img, title, link}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative md:h-96 md:w-72 h-52 w-36 rounded-xl bg-gradient-to-br from-indigo-200 to-violet-200"
    >
      <a
      href={link}
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute md:inset-4 inset-2 grid place-content-center rounded-xl bg-[#211F1F] shadow-lg"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold flex flex-col justify-center items-center"
        >
          <img className="md:w-[200px] w-5/6 pt-3" src={img} alt="" />
          <h2 className="md:text-lg text-xs mt-2 text-[#D0D4FE]">{title}</h2>
        </p>
      </a>
    </motion.div>
  );
};

export default Card;