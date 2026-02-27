import { Helmet } from "react-helmet-async";

function Seo({ title, description }) {
  const site = import.meta.env.VITE_SITE_NAME || "Grand Aurelia Hotel & Restaurant";
  const fullTitle = `${title} | ${site}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Seo;
