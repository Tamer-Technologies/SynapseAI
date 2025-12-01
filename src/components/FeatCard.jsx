import { Link } from "react-router-dom";
import FeatCardGradient from "../assets/icons/FeatCardGradient";
import RobotFeatBg from "../assets/images/robot-feat-bg.png";
import { useState } from "react";
import { getColor } from "../utilities/getColors";

const FeatCard = ({ title, desc, icon, className }) => {
  const [color, setColor] = useState(getColor());
  return (
    <div
      onClick={() => {
        setColor(getColor());
      }}
      className={`relative lg:aspect-square isolate p-10 grid grid-rows-[auto_1fr_auto_auto] sm:grid-rows-[auto_1fr_auto] grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 group ${className}`}
    >
      <FeatCardGradient
        className="absolute pointer-events-none -z-20 top-0 left-0 h-full w-full"
        style={{ color: color }}
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute pointer-events-none -z-10 h-full w-full opacity-0 group-hover:opacity-30  duration-150"
      >
        <img src={RobotFeatBg} alt="black robot" />
      </div>
      <p className="text-3xl sm:text-4xl lg:text-2xl font-semibold col-span-full">
        {title}
      </p>
      <p className="text-gray-lite col-span-full text-2xl lg:text-lg">{desc}</p>
      <div
        className={`h-13 aspect-square p-1.5 rounded-2xl place-self-center sm:place-self-start`}
        style={{ backgroundColor: color }}
      >
        <img src={icon} alt={`${title} icon`} />
      </div>
      <Link
        to="#ask-anything"
        className="place-self-center sm:place-self-start  font-bold font-sharp uppercase text-xs sm:max-lg:text-lg p-4 pr-0 hover:text-primary-color1 duration-150"
      >
        explore more <span className="ml-3">&gt;</span>
      </Link>
    </div>
  );
};

export default FeatCard;
