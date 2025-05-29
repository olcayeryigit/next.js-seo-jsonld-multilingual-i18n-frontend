import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import products from "@/data/products";
import Nav from "@/components/Nav";
import ProductCard from "@/components/ProductCard";
import { GetStaticPropsContext } from "next";
import HeadMeta from "@/components/HeadMeta";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <HeadMeta
        title={t("products.seo.title")}
        description={t("products.seo.description")}
        canonical="https://www.example.com"
        ogImage="https://www.example.com/og-image.jpg"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: t("products.title"),
          description: t("products.description"),
        }}
      />
      <Nav />
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{t("home.title")}</h1>
        <p className="text-lg mb-6">{t("home.description")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                viewDetailsText: t("product.viewDetails"),
              }}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const lang = locale ?? "en"; // locale varsa al, yoksa 'en' kullan

  return {
    props: {
      ...(await serverSideTranslations(lang, ["common"])),
    },
  };
}
