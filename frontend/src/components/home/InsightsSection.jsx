import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function InsightsSection({ posts }) {
  return (
    <section className="section-shell pb-14 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="rounded-[34px] border border-[#70469f] bg-[#643687] px-5 py-8 sm:px-8 lg:px-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">Blog Post</h3>
            <span className="relative top-0.5 text-2xl font-semibold text-white/90 sm:text-3xl">Latest</span>
          </div>
          <Link to="/contact?inquiry=newsletter">
            <Button variant="accent" className="px-12">
              Subscribe
            </Button>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border border-white/18 bg-white/10 p-4 text-white"
            >
              <img src={post.image} alt={post.title} className="h-40 w-full rounded-xl object-cover" />
              <h4 className="mt-4 text-lg font-semibold leading-7 sm:text-xl">{post.title}</h4>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default InsightsSection;
