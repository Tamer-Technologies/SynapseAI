const CircleGradient = ({ className }) => {
  const id = crypto.randomUUID();
  return (
    <svg
      width="159"
      height="159"
      viewBox="0 0 161 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="159"
        height="159"
        rx="79.5"
        fill="#0B040C"
        stroke={`url(#paint0_linear_156_2${id})`}
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_156_2${id}`}
          className="grad-border animate-[gradient-loop_1s_linear_infinite]"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5A79C9" />
          <stop offset="1" stop-color="#666666" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CircleGradient;
