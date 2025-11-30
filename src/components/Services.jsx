import Section from "./Section";
import RobotV1 from "../assets/images/robot-v1.png";
import RobotV2 from "../assets/images/robot-v2.png";
import DeviceV1 from "../assets/images/device-v1.png";
import CheckMark from "../assets/icons/checkmark.svg?react";
import { servicesSection } from "../constants";
import { capitalizeFirst, capitalizeWordFirst } from "../utilities/textFormat";
import LoadingIcon from "../assets/icons/loading-icon.svg?react";
import ChatMessage from "../assets/icons/chat-message.svg?react";

const Services = () => {
  const servicesFirstSection = servicesSection.sections[0];
  return (
    <Section className="grid max-w-280 mx-auto grid-cols-1 gap-7.5 md:grid-cols-2">
      <h2 className="col-span-full">
        {capitalizeWordFirst(servicesSection.title)}
      </h2>
      <p className="text-gray-md col-span-full text-center">
        {capitalizeFirst(servicesSection.desc)}
      </p>
      <div className="px-10 pt-25 pb-10 col-span-full relative isolate overflow-hidden rounded-2xl border-2 border-white/10 grid grid-cols-1 gap-10 md:grid-cols-2 md:p-10">
        <img
          src={RobotV1}
          alt="robot"
          className="absolute left-0 top-0 -z-20 pointer-events-none brightness-50 md:static md:brightness-100 md:rounded-2xl"
        />
        <div className="flex flex-col gap-5 md:my-auto">
          <h3 className="text-2xl font-semibold">
            {capitalizeWordFirst(servicesFirstSection.title)}
          </h3>
          <p className="text-gray-lite">
            {capitalizeWordFirst(servicesFirstSection.desc)}
          </p>
          <div>
            {servicesFirstSection.features.map((item, index) => (
              <div
                key={item + index}
                className="border-t border-gray-md py-5 flex items-center gap-5 font-semibold text-sm"
              >
                <CheckMark className="h-6 w-6 text-primary-color1" />
                <p>{capitalizeFirst(item)}</p>
              </div>
            ))}
          </div>
          <div className="w-full rounded-4xl p-2 bg-primary-dark font-semibold flex items-center gap-2 md:border md:border-gray-md">
            <LoadingIcon className="h-5 w-5 text-primary-color1" />
            <p>AI is generating!</p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl p-10 overflow-hidden border-2 border-white/10 relative isolate aspect-9/13">
        <img
          src={RobotV2}
          alt="robot"
          className="absolute top-0 left-0 -z-50"
        />
        <div
          className="h-full w-full bg-linear-to-t from-black absolute -z-10 top-0 left-0"
          aria-hidden="true"
        />
        <ChatMessage className="absolute top-[7%] right-[5%] z-20 w-[80%]" />
        <div className="flex flex-col gap-5 justify-end h-full">
          <h3 className="text-2xl md:text-3xl font-semibold">Photo editing</h3>
          <p className="text-gray-lite">
            Automatically enhance your photos using our AI app's photo editing
            feature. Try it now!
          </p>
        </div>
      </div>
      <div className="rounded-2xl flex flex-col gap-7.5 p-10 overflow-hidden border-2 border-white/10 relative isolate aspect-9/13 md:mt-15">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Advanced data processing
        </h3>
        <p className="text-gray-lite">
          Unleash the power of our AI-Powered Insight engine. We don't just
          process data—we transform raw information into actionable strategy.
        </p>
        <div className="absolute h-full w-full overflow-hidden top-0 left-0 brightness-30 -z-50 sm:brightness-100 sm:relative rounded-2xl">
          <div
            className="h-full w-full bg-linear-to-b from-black/70 absolute z-10 top-0 left-0"
            aria-hidden="true"
          />
          <img src={DeviceV1} alt="device" />
        </div>
      </div>
    </Section>
  );
};

export default Services;
