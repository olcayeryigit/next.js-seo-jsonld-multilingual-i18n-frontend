import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import products from "../../data/products";
import ProductDetailClient from "../../components/ProductDetailClient";
import Nav from "../../components/Nav";
import HeadMeta from "@/components/HeadMeta";
import JsonLd from "@/components/JsonLd";
import { Product } from "@/types/product"; // veya aynı dosyada tanımlıysa kaldır

interface Props {
  product: Product;
}

export default function ProductPage({ product }: Props) {
  const { t } = useTranslation("common");

  return (
    <>
      <HeadMeta
        title={product.name}
        description={product.desc}
        canonical={`https://www.example.com/products/${product.id}`}
        ogImage="https://www.example.com/og-image.jpg"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.desc,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "USD",
          },
        }}
      />
      <Nav />
      <ProductDetailClient product={product} />
    </>
  );
}

export async function getStaticProps({
  params,
  locale,
}: GetStaticPropsContext) {
  const product = products.find((p) => p.id === params?.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

export async function getStaticPaths() {
  const paths = products.flatMap((product) =>
    ["en", "tr"].map((locale) => ({
      params: { id: product.id },
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
}
