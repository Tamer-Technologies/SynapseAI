import Section from "./Section";
import HeadingLine from "../assets/icons/heading-line.svg?react";
import Robot from "../assets/images/robot.webp";
import RobotShadow from "../assets/images/robot-shadow.webp";
import useMouseParallex from "../hooks/useMouseParallex";
import Notification from "./units/Notification";
import Carousel from "./units/Carousel";
import ButtonVariant from "./units/ButtonVariant";
import { heroSection } from "../constants";
import PlanetsBackground from "../assets/icons/planets-bg.svg?react";

const Hero = () => {
  const ref = useMouseParallex(0.01);

  return (
    <>
      <Section
        firstSection
        padding="p-20"
        className="flex flex-col justify-center items-center gap-10 isolate relative"
      >
        <h1 className="text-center mb-[0.3em]">
          {heroSection.heading.main.part1} <br />{" "}
          {heroSection.heading.main.part2}{" "}
          <span className="relative">
            {heroSection.heading.highlight}
            <HeadingLine className="absolute left-0 -bottom-[0.3em] w-[110%] h-auto -z-10" />
          </span>
        </h1>
        <p className="text-center text-gray-lite">
          {heroSection.description.part1} <br /> {heroSection.description.part2}
        </p>
        <ButtonVariant
          to={heroSection.cta.url}
          variant="horns"
          className="py-2 px-6 font-sharp"
        >
          {heroSection.cta.text}
        </ButtonVariant>

        <div className="relative pointer-events-none">
          <div className="max-w-4xl gradient-border-css aspect-[3/1.5] rounded-2xl">
            <img
              src={Robot}
              alt="robot"
              className="rounded-xl"
              width={962}
              height={935}
            />
          </div>
          {heroSection.notifications.map((item) => (
            <Notification
              label={item.label}
              date={item.date}
              className={item.position}
              key={item.id}
            />
          ))}
          <img
            src={RobotShadow}
            aria-hidden="true"
            className="absolute h-auto w-full left-0 -top-[47.5%] -z-10 opacity-50"
            width={962}
            height={935}
          />
        </div>
        <div
          className="absolute w-[60%] aspect-3/2 bg-primary-color1 blur-[9999px] opacity-25 rounded-full -z-10 pointer-events-none"
          aria-hidden="true"
        />

        <PlanetsBackground
          className="-z-20 absolute w-full"
          ref={ref}
          aria-hidden="true"
        />
        <div className="mb-5 mt-25 sm:mt-40 w-full">
          <Carousel label={heroSection.carousel.label} />
        </div>
      </Section>
    </>
  );
};

export default Hero;
