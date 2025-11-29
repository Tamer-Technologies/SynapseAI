import Section from "./Section";
import { features } from "../constants";
import FeatCard from "./FeatCard";

const Features = () => {
  return (
    <Section id="features">
      <div className="flex flex-col gap-20">
        <h2>
          Chat Smarter, Not Harder <br /> with SynapseAI
        </h2>
        <div className="sm:px-2 md:px-10 relative grid gap-10 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(17.813rem,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(19.813rem,1fr))]">
          {features.map((item, index) => (
            <FeatCard
              key={item.title + index}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
          <div
            aria-hidden
            className="absolute w-[30%] aspect-square bg-primary-color2 top-[50%] left-[20%] rounded-full blur-3xl -z-10 opacity-30"
          ></div>
          <div
            aria-hidden
            className="absolute w-[50%] aspect-square bg-primary-color2 top-[10%] left-[60%] rounded-full blur-3xl -z-10 opacity-30"
          ></div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
