import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Nav from "../components/Nav";
import { GetStaticPropsContext } from "next";
import HeadMeta from "@/components/HeadMeta";
import JsonLd from "@/components/JsonLd";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <>
      <HeadMeta
        title={t("about.seo.title")}
        description={t("about.seo.description")}
        canonical="https://www.example.com"
        ogImage="https://www.example.com/og-image.jpg"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: t("about.title"),
          description: t("about.description"),
        }}
      />
      <Nav />
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{t("about.title")}</h1>
        <p className="text-lg">{t("about.description")}</p>
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
