import { motion } from "framer-motion";
import clsx from "clsx";

function Button({ children, className, variant = "primary", disabled = false, ...props }) {
  const variants = {
    primary:
      "border border-gold/70 bg-gold text-midnight hover:bg-[#e0bc7c] hover:border-[#e0bc7c] shadow-[0_14px_35px_-20px_rgba(201,165,106,0.9)]",
    ghost:
      "border border-gold/65 bg-transparent text-gold hover:bg-gold/12 hover:border-gold",
    slate:
      "border border-[#27466f] bg-[#0f243e]/92 text-pearl hover:bg-[#153156] hover:border-[#3a5f92]",
    accent:
      "border border-[#f1892d] bg-[#f1892d] text-white hover:bg-[#de7519] hover:border-[#de7519] shadow-[0_18px_35px_-22px_rgba(241,137,45,0.95)]",
    neutral:
      "border border-[#d8d5cc] bg-white text-[#1f2431] hover:bg-[#f6f5f1] hover:border-[#c9c5b9]",
  };

  return (
    <motion.button
      type="button"
      whileHover={disabled ? undefined : { scale: 1.01, y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.985 }}
      className={clsx(
        "inline-flex min-h-11 items-center justify-center rounded-[14px] px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-200 focus:outline-none focus:ring-2 focus:ring-gold/45 disabled:cursor-not-allowed disabled:opacity-50",
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
