function Card({ children, className = "" }) {
  return (
    <article className={`rounded-xl border border-sand/70 bg-white/90 p-6 shadow-luxe backdrop-blur-sm ${className}`}>
      {children}
    </article>
  );
}

export default Card;
