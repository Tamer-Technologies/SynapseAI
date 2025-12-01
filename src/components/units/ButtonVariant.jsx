import { Link } from "react-router-dom";
import ButtonGradient from "../../assets/icons/ButtonGradient";
import ButtonNormal from "../../assets/icons/button-normal.svg?react";
import ButtonHorn from "../../assets/icons/button-horn.svg?react";

const VARIANT_CONFIGS = {
  gradient: {
    Background: ButtonGradient,
    className: "relative isolate",
  },
  normal: {
    Background: ButtonNormal,
    className: "relative isolate text-primary-dark group",
    backgroundClassName: "group-hover:text-primary-color1 duration-300",
  },
  horns: {
    hasHorns: true,
    className:
      "relative isolate text-primary-dark group bg-white duration-300 hover:text-primary-color1",
  },
};

const ButtonVariant = ({
  className = "",
  children = "Button Here",
  onClick,
  variant = "gradient",
  href,
}) => {
  const config = VARIANT_CONFIGS[variant];
  const Component = href ? Link : "button";
  const baseProps = {
    className: `${config.className} ${className}`,
    onClick,
    ...(href && { to: href }),
  };

  return (
    <Component {...baseProps}>
      {children}

      {config.hasHorns ? (
        <>
          <ButtonHorn
            aria-hidden="true"
            className="absolute bottom-0 right-full h-full w-auto border-r border-gray-md -z-10 text-white group-hover:bottom-1/2 duration-300"
          />
          <ButtonHorn
            aria-hidden="true"
            className="absolute bottom-0 left-full border-r border-gray-md h-full w-auto -z-10 rotate-y-180 text-white group-hover:bottom-1/2 duration-300"
          />
        </>
      ) : (
        <config.Background
          aria-hidden
          className={`absolute top-0 left-0 h-full w-full -z-10 text-white ${
            config.backgroundClassName || ""
          }`}
        />
      )}
    </Component>
  );
};

export default ButtonVariant;
