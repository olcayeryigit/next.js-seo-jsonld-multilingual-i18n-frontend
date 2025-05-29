import { NextSeo } from "next-seo";
import { SEOProps } from "../types/seo";

export default function HeadMeta({
  title,
  description,
  canonical,
  ogImage,
}: SEOProps) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title,
          description,
          images: ogImage ? [{ url: ogImage, alt: title }] : [],
          site_name: "My Next App",
        }}
        twitter={{
          handle: "@yourhandle",
          site: "@yourhandle",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}
