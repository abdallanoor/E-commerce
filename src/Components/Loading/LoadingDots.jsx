

const dots = "mx-[1px] inline-block h-1 w-1 animate-blink rounded-md";

const LoadingDots = ({ className }) => {
  return (
    <span className="mx-2 inline-flex items-center">
      <span
        className={`mx-[1px] inline-block h-1 w-1 animate-blink rounded-md ${className}`}
      />
      <span
        className={`mx-[1px] inline-block h-1 w-1 animate-blink animation-delay-[200ms] rounded-md ${className}`}
      />
      <span
        className={`mx-[1px] inline-block h-1 w-1 animate-blink animation-delay-[400ms] rounded-md ${className}`}
      />
    </span>
  );
};

export default LoadingDots;
