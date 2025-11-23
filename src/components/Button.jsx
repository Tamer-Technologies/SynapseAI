import { Link } from "react-router-dom";
import GradientWrapper from "./units/GradientWrapper/GradientWrapper";

const Button = ({
  contentClassName,
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
          <button
            className={`cursor-pointer ${contentClassName}`}
            onClick={onClick}
          >
            {children}
          </button>
        </GradientWrapper>
      );

    return (
      <button
        className={`cursor-pointer ${contentClassName}`}
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
          <Link className={`cursor-pointer ${contentClassName}`} to={href}>
            {children}
          </Link>
        </GradientWrapper>
      );

    return (
      <Link className={`cursor-pointer ${contentClassName}`} to={href}>
        {children}
      </Link>
    );
  };

  return href ? renderLink() : renderButton();
};

export default Button;
