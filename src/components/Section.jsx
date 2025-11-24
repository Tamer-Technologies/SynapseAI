import PlusIcon from "../assets/icons/plus-icon.svg?react";

const Section = ({
  children,
  firstSection = false,
  padding,
  crosses = true,
  className,
}) => {
  return (
    <div className={` ${firstSection && "pt-26.25 navbar:pt-23.75"}`}>
      <section className="relative px-10">
        <div className={`container m-auto ${className} ${padding || "p-10"}`}>
          {children}
        </div>
        {crosses && (
          <>
            <div className="w-px h-full bg-gray-dark absolute top-0 left-10" />
            <div className="w-px h-full bg-gray-dark absolute top-0 right-10" />
            <div className="h-px w-full bg-gray-dark absolute bottom-0 left-0" />
            <PlusIcon className={`text-white absolute left-9 -top-1.5`} />
            <PlusIcon className={`text-white absolute right-9 -top-1.5`} />
          </>
        )}
      </section>
    </div>
  );
};

export default Section;
