"use client";

import { useTranslation } from "next-i18next";
import { Product } from "@/types/product"; // aynı yerde tanımlıysa buna gerek yok

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const { t } = useTranslation("common");

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg mb-4">{product.desc}</p>
      <p className="text-xl font-semibold">
        {t("product.price", { p: product.price })}
      </p>
    </main>
  );
}
