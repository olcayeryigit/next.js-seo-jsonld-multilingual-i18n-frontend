import type { ProductCard } from "@/types/productCard";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface Props {
  product: ProductCard;
}

export default function ProductCard({ product }: Props) {
  const { t } = useTranslation("common");

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.desc}</p>
      <p className="text-lg font-bold mb-4">
        {/* Önemli */}
        {t("product.price", { p: product.price })}
      </p>

      <Link
        href={`/products/${product.id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {t("product.viewDetails")}
      </Link>
    </div>
  );
}
