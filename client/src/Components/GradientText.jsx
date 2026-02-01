// import "./GradientText.css";

export default function GradientText({
  children,
  className = "h-500",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className='gradient-overlay' style={gradientStyle}></div>
      )}
      <div className='text-content  h-30 w-110' style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
