const FeatCardGradient = ({ className, style, ...rest }) => {
  const id = crypto.randomUUID();
  return (
    <svg
      viewBox="0 0 453 453"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...rest}
    >
      <path
        d="M354.39 1C364.428 1 374.099 4.77415 381.483 11.5732L439.094 64.6172C447.32 72.191 452 82.8624 452 94.0439V412C452 434.091 434.091 452 412 452H41C18.9086 452 1 434.091 1 412V41C1 18.9086 18.9086 1 41 1H354.39Z"
        fill="#0B040C"
        stroke={`url(#paint0_linear_119_feat_card${id})`}
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
      <defs>
        <linearGradient
          id={`paint0_linear_119_feat_card${id}`}
          className="grad-border"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(0)"
        >
          <stop stopColor="currentColor" />
          <stop offset="0.586538" stopColor="white" stopOpacity="0.13" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FeatCardGradient;
