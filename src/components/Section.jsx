import PlusIcon from "../assets/icons/plus-icon.svg?react";

const Section = ({
  children,
  firstSection = false,
  crosses = true,
  className,
}) => {
  const section = (
    <section className="relative p-2 md:p-5 lg:px-10 ">
      <div className={`container m-auto p-5 sm:p-10 ${className}`}>
        {children}
      </div>
      {crosses && (
        <div className="hidden sm:block">
          <div className="w-px h-full bg-gray-dark absolute top-0 left-10" />
          <div className="w-px h-full bg-gray-dark absolute top-0 right-10" />
          <div className="h-px w-full bg-gray-dark absolute bottom-0 left-0" />
          <PlusIcon className={`text-white absolute left-9 -top-1.5`} />
          <PlusIcon className={`text-white absolute right-9 -top-1.5`} />
        </div>
      )}
    </section>
  );
  return firstSection ? (
    <div className="pt-26.25 navbar:pt-23.75">{section}</div>
  ) : (
    section
  );
};

export default Section;
