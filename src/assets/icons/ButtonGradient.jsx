const ButtonShape = ({
  gradientColors = ["#5A79C9", "#866ACC", "#C261D1"],
  className,
  ...rest
}) => {
  const id = crypto.randomUUID();
  return (
    <svg
      viewBox="0 0 122 61"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M5 1.5H102.692C103.54 1.5 104.359 1.80802 104.997 2.36621L119.305 14.8848C120.064 15.5493 120.5 16.5094 120.5 17.5186V56C120.5 57.933 118.933 59.5 117 59.5H5C3.067 59.5 1.5 57.933 1.5 56V5C1.5 3.067 3.067 1.5 5 1.5Z"
        fill="#0B040C"
        stroke={`url(#paint0_linear_128_7_${id})`}
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
      <defs>
        <linearGradient
          id={`paint0_linear_128_7_${id}`}
          className="grad-border animate-[gradient-loop_4s_linear_infinite]"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          {Array.from({ length: gradientColors.length }, (_, index) => (
            <>
              <stop
                offset={index / (gradientColors.length - 1)}
                stopColor={gradientColors[index]}
              />
            </>
          ))}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonShape;
