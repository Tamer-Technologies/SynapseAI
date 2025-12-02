import Section from "./Section";
import RobotV1 from "../assets/images/robot-v1.png";
import RobotV2 from "../assets/images/robot-v2.png";
import DeviceV1 from "../assets/images/device-v1.png";
import CheckMark from "../assets/icons/checkmark.svg?react";
import LoadingIcon from "../assets/icons/loading-icon.svg?react";
import ChatMessage from "../assets/icons/chat-message.svg?react";
import { servicesSection } from "../constants";

const images = {
  "robot-v1": RobotV1,
  "robot-v2": RobotV2,
  "device-v1": DeviceV1,
};

const ServiceHeader = ({ title, description }) => (
  <>
    <h2 className="col-span-full text-3xl font-bold">{title}</h2>
    <p className="text-gray-md col-span-full text-center max-w-3xl mx-auto">
      {description}
    </p>
  </>
);

const ServiceCard1 = ({ data }) => (
  <div className="px-10 pt-25 pb-10 col-span-full relative isolate overflow-hidden rounded-2xl border-2 border-white/10 grid grid-cols-1 gap-10 md:grid-cols-2 md:p-10">
    <div className="absolute -z-10 h-full w-full rounded-2xl overflow-hidden pointer-events-none brightness-50 md:brightness-100 md:relative aspect-14/15">
      <img src={images[data.image]} alt={data.title} />
      <div
        className="absolute top-0 left-0 w-full h-full z-10 bg-linear-to-b from-black/80 md:bg-linear-to-t md:from-black/70"
        aria-hidden="true"
      />
    </div>
    <div className="flex flex-col gap-5 md:my-auto">
      <h3 className="text-2xl font-semibold">{data.title}</h3>
      <p className="text-gray-lite">{data.description}</p>

      <ul className="flex flex-col">
        {data.features.map((item) => (
          <li
            key={item.id}
            className="border-t border-gray-md py-5 flex items-center gap-5 font-semibold text-sm"
          >
            <CheckMark className="h-6 w-6 text-primary-color1" />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>

      <div className="w-full rounded-4xl p-2 bg-primary-dark font-semibold flex items-center gap-2 md:border md:border-gray-md">
        <LoadingIcon className="h-5 w-5 text-primary-color1" />
        <p>{data.loadingText}</p>
      </div>
    </div>
  </div>
);

const ServiceCard2 = ({ data }) => (
  <div className="rounded-2xl p-10 overflow-hidden border-2 border-white/10 relative isolate aspect-9/13">
    <div
      className="absolute top-0 left-0 w-full h-full -z-10 bg-linear-to-t from-black"
      aria-hidden="true"
    >
      <img
        src={images[data.image]}
        alt={data.title}
        className="w-full h-full object-cover opacity-50"
      />
    </div>
    <ChatMessage className="absolute top-[7%] right-[5%] z-20 w-[80%]" />

    <div className="flex flex-col gap-5 justify-end h-full">
      <h3 className="text-2xl md:text-3xl font-semibold">{data.title}</h3>
      <p className="text-gray-lite">{data.description}</p>
    </div>
  </div>
);

const ServiceCard3 = ({ data }) => (
  <div className="rounded-2xl flex flex-col gap-7.5 p-10 overflow-hidden border-2 border-white/10 relative isolate aspect-9/13 md:mt-15">
    <h3 className="text-2xl md:text-3xl font-semibold">{data.title}</h3>
    <p className="text-gray-lite">{data.description}</p>

    <div className="absolute h-full w-full overflow-hidden top-0 left-0 -z-50 rounded-2xl">
      <div
        className="h-full w-full bg-linear-to-b from-black/70 absolute z-10 top-0 left-0"
        aria-hidden="true"
      />
      <img
        src={images[data.image]}
        alt={data.title}
        className="w-full h-full object-cover brightness-30 sm:brightness-100"
      />
    </div>
  </div>
);

const Services = () => {
  const [heroCard, photoCard, dataCard] = servicesSection.cards;

  return (
    <Section
      className="grid max-w-280 mx-auto grid-cols-1 gap-7.5 md:grid-cols-2"
      id="services"
    >
      <ServiceHeader
        title={servicesSection.heading}
        description={servicesSection.description}
      />

      <ServiceCard1 data={heroCard} />
      <ServiceCard2 data={photoCard} />
      <ServiceCard3 data={dataCard} />
    </Section>
  );
};

export default Services;
