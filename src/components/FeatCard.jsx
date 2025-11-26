import { Link } from "react-router-dom";
import { capitalizeFirst } from "../utilities/textFormat";
import FeatCardShape from "../assets/icons/FeatCardShape";
import RobotFeatBg from "../assets/images/robot-feat-bg.png";
import { useState } from "react";

function getColor() {
  const colors = [
    "#c261d1",
    "#6184d1",
    "#61d1ba",
    "#d16181",
    "#d1c061",
    "#7661d1",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const FeatCard = ({ title, desc, icon, className }) => {
  const [color, setColor] = useState(getColor());
  return (
    <div
      onClick={() => {
        setColor(getColor());
        console.log("color changed");
      }}
      className={`relative aspect-square isolate p-10 grid grid-rows-[auto_1fr_auto] grid-cols-[1fr_auto] gap-10 group ${className}`}
    >
      <FeatCardShape
        className="absolute pointer-events-none -z-20 top-0 left-0 h-full w-full"
        style={{ color: color }}
        id={crypto.randomUUID()}
      />
      <div className="absolute pointer-events-none -z-10 h-full w-full opacity-0 group-hover:opacity-30  duration-150">
        <img src={RobotFeatBg} alt="black robot" />
      </div>
      <p className="text-3xl sm:text-4xl lg:text-2xl font-semibold col-span-full">
        {capitalizeFirst(title)}
      </p>
      <p className="text-gray-lite col-span-full sm:text-2xl lg:text-lg">
        {capitalizeFirst(desc)}
      </p>
      <div className="h-13">
        <img src={icon} alt={`${title} icon`} className="w-auto rounded-xl" />
      </div>
      <Link
        to="#ask-anything"
        className="self-center font-bold font-sharp uppercase text-xs sm:max-lg:text-lg p-4 pr-0 hover:text-primary-color1 duration-150"
      >
        explore more <span className="ml-3">&gt;</span>
      </Link>
    </div>
  );
};

export default FeatCard;
