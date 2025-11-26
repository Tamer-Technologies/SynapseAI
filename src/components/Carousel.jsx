import PlaceHolderLogos from "../assets/icons/placeholder-logo.svg";

const Carousel = ({ className, imgSrcs, label }) => {
  if (!imgSrcs) {
    imgSrcs = Array.from({ length: 5 }, () => PlaceHolderLogos);
  }

  const doubledImgSrcs = [...imgSrcs, ...imgSrcs];

  return (
    <div className="flex flex-col justify-center items-center gap-15 my-20">
      {label && (
        <p className="text-sm navbar:text-lg uppercase text-gray-md font-semibold text-center">
          {label}
        </p>
      )}
      <div
        className={`w-[80%] overflow-x-hidden m-auto fade-in-out ${className}`}
      >
        <div className="flex animate-carousel-loop w-max ">
          {doubledImgSrcs.map((src) => (
            <div className="h-10 md:h-15 navbar:h-20 flex-[0_0_auto] mx-10">
              <img src={src} alt="logo" className="w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
