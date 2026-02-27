import clsx from "clsx";

function Button({ children, className, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-gold text-white hover:bg-cocoa",
    ghost: "border border-gold text-gold hover:bg-gold/10",
    dark: "bg-espresso text-cream hover:bg-cocoa",
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:opacity-60",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
