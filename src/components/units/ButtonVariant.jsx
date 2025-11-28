import { Link } from "react-router-dom";
import ButtonGradient from "../../assets/icons/ButtonGradient";

const ButtonVariant = ({
  className,
  children = "Button Here",
  onClick,
  variant = "gradient",
  href,
}) => {
  const renderButton = () => {
    if (variant === "gradient")
      return (
        <button className={`${className} relative isolate`} onClick={onClick}>
          {children}
          <ButtonGradient
            aria-hidden
            className="absolute top-0 left-0 h-full w-full -z-10"
          />
        </button>
      );
  };

  const renderLink = () => {
    if (variant === "gradient")
      return (
        <Link
          className={`${className} relative isolate`}
          onClick={onClick}
          to={href}
        >
          {children}
          <ButtonGradient
            aria-hidden
            className="absolute top-0 left-0 h-full w-full -z-10"
          />
        </Link>
      );
  };

  return href ? renderLink() : renderButton();
};

export default ButtonVariant;
