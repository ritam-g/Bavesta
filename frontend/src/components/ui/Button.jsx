import { motion } from "framer-motion";
import clsx from "clsx";

function Button({ children, className, variant = "primary", disabled = false, ...props }) {
  const variants = {
    primary: "bg-gold text-midnight hover:bg-[#d7b987]",
    ghost: "border border-gold/70 text-gold hover:bg-gold/10",
    slate: "border border-white/15 bg-white/5 text-pearl hover:bg-white/10",
  };

  return (
    <motion.button
      type="button"
      whileHover={disabled ? undefined : { scale: 1.02, y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-gold/40 disabled:cursor-not-allowed disabled:opacity-50",
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
