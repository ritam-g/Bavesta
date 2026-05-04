import { motion } from "framer-motion";
import clsx from "clsx";

function Button({ children, className, variant = "primary", disabled = false, ...props }) {
  const variants = {
    primary:
      "border border-transparent bg-gray-900 text-white hover:bg-gray-800 shadow-sm",
    ghost:
      "border border-gray-200 bg-transparent text-gray-900 hover:bg-gray-50 hover:border-gray-300",
    slate:
      "border border-transparent bg-gray-700 text-white hover:bg-gray-600 shadow-sm",
    accent:
      "border border-transparent bg-gray-900 text-white hover:bg-gray-800 shadow-sm",
    neutral:
      "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-300 shadow-sm",
  };

  return (
    <motion.button
      type="button"
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={clsx(
        "inline-flex min-h-[44px] items-center justify-center rounded-lg px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900/50 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
