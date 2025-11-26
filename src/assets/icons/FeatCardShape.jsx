const FeatCardShape = ({ id = "default", className, style }) => {
  return (
    <svg
      width="453"
      height="453"
      viewBox="0 0 453 453"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M354.39 1C364.428 1 374.099 4.77415 381.483 11.5732L439.094 64.6172C447.32 72.191 452 82.8624 452 94.0439V412C452 434.091 434.091 452 412 452H41C18.9086 452 1 434.091 1 412V41C1 18.9086 18.9086 1 41 1H354.39Z"
        fill="#0B040C"
      />
      <path
        d="M381.483 11.5732L382.161 10.8376L382.161 10.8376L381.483 11.5732ZM439.094 64.6172L438.416 65.3528L438.416 65.3528L439.094 64.6172ZM452 412L453 412V412H452ZM354.39 1V2C364.177 2 373.606 5.6798 380.806 12.3089L381.483 11.5732L382.161 10.8376C374.592 3.8685 364.679 0 354.39 0V1ZM381.483 11.5732L380.806 12.3089L438.416 65.3528L439.094 64.6172L439.771 63.8815L382.161 10.8376L381.483 11.5732ZM439.094 64.6172L438.416 65.3528C446.437 72.7373 451 83.1419 451 94.0439H452H453C453 82.5828 448.203 71.6447 439.771 63.8815L439.094 64.6172ZM452 94.0439H451V412H452H453V94.0439H452ZM452 412L451 412C451 433.539 433.539 451 412 451V452V453C434.644 453 453 434.644 453 412L452 412ZM412 452V451H41V452V453H412V452ZM41 452V451C19.4609 451 2 433.539 2 412H1H0C0 434.644 18.3563 453 41 453V452ZM1 412H2V41H1H0V412H1ZM1 41H2C2 19.4609 19.4609 2 41 2V1V0C18.3563 0 0 18.3563 0 41H1ZM41 1V2H354.39V1V0H41V1Z"
        fill={`url(#paint0_linear_119_feat_card${id})`}
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

export default FeatCardShape;
