"use client";

import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Nav() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, pathname, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);

  const changeLocale = (newLocale: string) => {
    router.push(pathname, asPath, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" locale={locale} className="hover:underline">
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <Link href="/about" locale={locale} className="hover:underline">
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link href="/products" locale={locale} className="hover:underline">
              {t("nav.products")}
            </Link>
          </li>
        </ul>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-1 hover:underline focus:outline-none"
          >
            <span>{t("nav.language")}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg">
              <li>
                <button
                  onClick={() => changeLocale("en")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {t("nav.en")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLocale("tr")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {t("nav.tr")}
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
