import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function QuoteFab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
    >
      <Link
        to="/contact?inquiry=quote"
        className="flex h-[96px] w-[96px] flex-col items-center justify-center rounded-full border border-[#e7ba19] bg-[#f8c616] text-[#5c2e84] shadow-[0_24px_40px_-22px_rgba(94,67,18,0.75)] transition hover:scale-[1.03]"
        aria-label="Get a quote"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#5c2e84] text-[#f8c616]">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M7.8 9.4c0 1.6-1.1 2.8-2.7 3l1.8 3.8H4L2 12.6C2 10.1 3.8 8 6.3 8c1 0 1.5.6 1.5 1.4Zm8.2 0c0 1.6-1.1 2.8-2.7 3l1.8 3.8h-2.9l-2-3.6C10.2 10.1 12 8 14.5 8c1 0 1.5.6 1.5 1.4Z" />
          </svg>
        </span>
        <span className="mt-1 text-sm font-bold">Get a quote</span>
      </Link>
    </motion.div>
  );
}

export default QuoteFab;
