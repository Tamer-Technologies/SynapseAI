import Section from "./Section";
import HeadingLine from "../assets/icons/heading-line.svg?react";
import { authPortal } from "../constants";
import { Link } from "react-router-dom";
import Robot from "../assets/images/robot.png";
import RobotShadow from "../assets/images/robot-shadow.png";
import Sparks from "./units/Sparks";

const Hero = () => {
  return (
    <>
      <Section
        firstSection
        padding="p-20"
        className="flex flex-col justify-center items-center gap-10 isolate relative"
      >
        <h1 className="text-center mb-[0.3em]">
          Explore the Possibilities <br /> of AI Chatting with{" "}
          <span className="relative">
            SynapseAi{" "}
            <HeadingLine className="absolute left-0 -bottom-[0.3em] w-[110%] h-auto -z-10" />
          </span>{" "}
        </h1>
        <p className="text-center text-gray-lite">
          Unleash the power of AI within SynapseAI. Upgrade your productivity
          With <br /> SynapseAI, the open AI chat app.
        </p>
        <Link
          to={authPortal.login.url}
          className="bg-white text-primary-dark ticket py-2 px-8 font-sharp"
        >
          get started
        </Link>

        <div className="relative pointer-events-none">
          <div className="max-w-4xl gradient-border aspect-[3/1.5] rounded-2xl">
            <img src={Robot} alt="robot" className="rounded-xl" />
          </div>
          <img
            src={RobotShadow}
            aria-hidden
            className="absolute  h-auto w-full left-0 -top-[47.5%] -z-10 opacity-50"
          />
        </div>
        <div className="absolute w-[60%] aspect-3/2 bg-primary-color1 blur-[9999px] opacity-25 rounded-full -z-10 pointer-events-none"></div>

        <Sparks className="-z-20" />
      </Section>
    </>
  );
};

export default Hero;
