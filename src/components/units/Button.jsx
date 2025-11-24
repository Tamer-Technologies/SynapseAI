import { Link } from "react-router-dom";
import GradientWrapper from "./GradientWrapper";

const Button = ({
  className,
  wrapperClassName,
  children,
  onClick,
  variant,
  href,
  ...rest
}) => {
  const renderButton = () => {
    if (variant === "gradient")
      return (
        <GradientWrapper className={wrapperClassName} {...rest}>
          <button className={`cursor-pointer ${className}`} onClick={onClick}>
            {children}
          </button>
        </GradientWrapper>
      );

    return (
      <button
        className={`cursor-pointer ticket ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  const renderLink = () => {
    if (variant === "gradient")
      return (
        <GradientWrapper className={wrapperClassName} {...rest}>
          <Link
            className={`cursor-pointer ${className}`}
            onClick={onClick}
            to={href}
          >
            {children}
          </Link>
        </GradientWrapper>
      );

    return (
      <Link
        className={`cursor-pointer ticket ${className}`}
        onClick={onClick}
        to={href}
      >
        {children}
      </Link>
    );
  };

  return href ? renderLink() : renderButton();
};

export default Button;
