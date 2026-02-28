import { Helmet } from "react-helmet-async";

function Seo({ title, description }) {
  const siteName = import.meta.env.VITE_SITE_NAME || "Bavesta Hospitality Services";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

export default Seo;
