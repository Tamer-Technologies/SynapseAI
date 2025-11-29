import { collaborations } from "../constants";
import { capitalizeFirst, capitalizeWordFirst } from "../utilities/textFormat";
import Section from "./Section";
import CheckMark from "../assets/icons/checkmark.svg?react";
import Arrow from "../assets/icons/arrow.svg?react";
import ButtonVariant from "./units/ButtonVariant";
import { useState } from "react";
import {
  SiDatabricks,
  SiDiscord,
  SiFigma,
  SiNotion,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { BsCpu } from "react-icons/bs";
import CircleGradient from "../assets/icons/CircleGradient";

const IconBox = ({ children, className }) => {
  return (
    <div
      className={`h-14 aspect-square border-2 border-gray-dark rounded-2xl bg-primary-dark p-2 ${className}`}
    >
      {children}
    </div>
  );
};

const Collaboration = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const icons = [
    { id: "figma", element: <SiNotion className="w-full h-full" /> },
    { id: "figma", element: <SiDatabricks className="w-full h-full" /> },
    { id: "discord", element: <SiDiscord className="w-full h-full" /> },
    { id: "figma", element: <SiFigma className="w-full h-full" /> },
    { id: "figma", element: <SiReact className="w-full h-full" /> },
    { id: "discord", element: <SiTailwindcss className="w-full h-full" /> },
  ];

  function handleAccordion(id) {
    if (id === activeAccordion) {
      setActiveAccordion(null);
      return;
    }

    setActiveAccordion(id);
  }

  return (
    <Section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:place-items-center">
      <div>
        <h2 className="mb-10">
          AI chat app for <br className="hidden sm:inline-block" /> seamless
          collaboration
        </h2>
        {collaborations.map((item, index) => {
          const id = item.label + index;
          return (
            <div
              key={id}
              className="flex flex-col border-b border-gray-dark py-5"
            >
              <button
                className="flex gap-5 items-center text-start"
                onClick={() => handleAccordion(id)}
              >
                <CheckMark
                  aria-label="checkmark"
                  className="text-primary-color1 h-6 w-auto"
                />
                <h3>{capitalizeWordFirst(item.label)}</h3>
                <Arrow
                  className={`ml-auto h-4 w-4 transition-all duration-500 ${
                    id !== activeAccordion && "-rotate-90"
                  }`}
                  aria-label="arrow"
                />
              </button>
              <p
                className={`text-gray-md overflow-hidden transition-all duration-500 ease-in-out ${
                  activeAccordion === id
                    ? "max-h-[500px] opacity-100 pt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                {capitalizeFirst(item.desc)}
              </p>
            </div>
          );
        })}
        <div className="mt-10 flex justify-center">
          <ButtonVariant
            className="font-sharp uppercase text-center px-8 py-3 font-semibold hover:text-primary-color1"
            href="#collaboration-try-now"
          >
            try it now
          </ButtonVariant>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-gray-md text-center lg:text-lg">
          With smart automation and top-notch security.{" "}
          <br className="hidden sm:inline-block" /> It's the perfect solution
          for teams looking to work smarter.
        </p>
        <div>
          <div className="hidden sm:block max-w-100 mx-auto rounded-full aspect-square relative isolate border-2 border-gray-dark pointer-events-none">
            {icons.map((icon, index) => (
              <div
                key={icon.id + index}
                className="absolute -top-7 left-1/2 translate-x-[-50%] origin-[50%_407%] animate-[rotate-clockwise_45s_linear_infinite]"
                style={{
                  animationDelay: `${
                    (45 / icons.length) * (icons.length - index) * -1
                  }s`,
                }}
              >
                <div
                  className="animate-[rotate-anti-clockwise_45s_linear_infinite]"
                  style={{
                    animationDelay: `${
                      (45 / icons.length) * (icons.length - index) * -1
                    }s`,
                  }}
                >
                  <IconBox>{icon.element}</IconBox>
                </div>
              </div>
            ))}
            <div
              aria-hidden
              className="absolute border-2 top-1/2 left-1/2 -translate-1/2 border-gray-dark w-[50%] aspect-square rounded-full"
            />
            <BsCpu className="h-10 w-10 absolute top-1/2 left-1/2 -translate-1/2 z-20" />
            <CircleGradient className="h-18 w-18 absolute top-1/2 left-1/2 -translate-1/2" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
