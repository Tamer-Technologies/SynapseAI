const Spark = ({ className }) => (
  <div
    className={`absolute w-5 aspect-square rounded-full bg-linear-[0deg,#C261D1_0%,#7D278B_100%] ${className}`}
  />
);

const Sparks = ({ className, ref }) => {
  return (
    <div
      ref={ref}
      className={`absolute w-full h-full pointer-events-none ${className}`}
    >
      <Spark className="left-[10%] top-[10%]" />
      <Spark className="left-[2%] top-[40%] scale-75" />
      <Spark className="right-[2%] top-[60%] scale-75" />
      <Spark className="right-[10%] top-[25%] scale-50" />
    </div>
  );
};

export default Sparks;
