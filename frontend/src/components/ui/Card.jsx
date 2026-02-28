import clsx from "clsx";

function Card({ children, className }) {
  return <div className={clsx("glass-panel p-6", className)}>{children}</div>;
}

export default Card;
