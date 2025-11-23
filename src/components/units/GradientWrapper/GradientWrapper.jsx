import styles from "./GradientWrapper.module.css";

const GradientWrapper = ({
  children,
  className,
  thickness = "0.2",
  gradientColors = "#96569f 0%, #58569f 25%, #569f97 50%, #58569f 75%, #96569f 100%",
  backgroundColor = "primary-dark",
  speed = "5s",
  edgeSize = "1",
}) => {
  const variables = {
    "--edge-size": `${edgeSize}em`,
    "--border-width": `${thickness}em`,
    "--animation-speed": speed,
    "--bg-color": backgroundColor,
    "--gradient-colors": gradientColors,
  };

  return (
    <div className={`${styles.wrapper} ${className}`} style={variables}>
      {children}
    </div>
  );
};

export default GradientWrapper;
