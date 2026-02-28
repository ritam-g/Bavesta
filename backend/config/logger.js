const isProd = process.env.NODE_ENV === "production";

const logger = {
  info: (...args) => {
    if (!isProd) console.log(...args);
  },
  warn: (...args) => {
    if (!isProd) console.warn(...args);
  },
  error: (...args) => {
    console.error(...args);
  },
};

module.exports = logger;
