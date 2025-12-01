import Section from "./Section";
import GradientCube from "../assets/icons/gradient-cube.svg?react";
import PlanetsBackground from "../assets/icons/planets-bg.svg?react";
import useMouseParallex from "../hooks/useMouseParallex";
import { pricingPlans } from "../constants/index";
import { capitalizeFirst } from "../utilities/textFormat";
import ButtonVariant from "./units/ButtonVariant";
import CheckMart from "../assets/icons/checkmark.svg?react";

const Pricing = () => {
  const mouseParallexRef = useMouseParallex(0.005);
  return (
    <Section className="grid grid-cols-1 lg:grid-cols-3 gap-10" id="pricing">
      <div className="min-h-130 col-span-full flex flex-col gap-10 items-center justify-center relative">
        <PlanetsBackground
          className="-z-10 absolute h-[90%] pointer-events-none"
          aria-hidden="true"
        />
        <div ref={mouseParallexRef} className="pointer-events-none">
          <GradientCube className="w-full h-auto max-w-70" aria-hidden="true" />
        </div>
        <p className="uppercase  text-2xl text-gray-lite text-center">
          &#91; get started with synapseai &#93;
        </p>
      </div>
      <h2 className="col-span-full">Pay once, use forever</h2>
      {pricingPlans.map((item) => (
        <div
          key={item.name}
          className="border-2 border-white/15 rounded-2xl px-3 py-7.5 md:px-10 flex flex-col h-full"
        >
          <h3
            className="text-2xl font-semibold md:text-4xl mb-3"
            style={{ color: `${item.color}` }}
          >
            {capitalizeFirst(item.name)}
          </h3>

          <p className="text-gray-lite min-h-12 mb-3">{item.description}</p>

          <div className="h-24 flex items-center mb-5">
            <p className="text-3xl font-semibold flex items-center">
              {item.name.toLowerCase() === "enterprise" ? (
                <span className="text-4xl">{item.price}</span>
              ) : (
                <>
                  {item.price[0]}
                  <span className="text-6xl">{item.price.slice(1)}</span>
                </>
              )}
            </p>
          </div>

          <ButtonVariant className="p-3 font-semibold mb-7.5 w-full">
            {item.buttonText}
          </ButtonVariant>

          <div className="grow flex flex-col gap-4">
            {item.features.map((feat) => (
              <div key={feat} className="flex gap-5 items-center">
                <CheckMart className="h-5 w-auto text-primary-color1 shrink-0" />
                <p>{feat}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Pricing;
