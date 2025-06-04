// next-i18next.config.js
module.exports = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: true,
  },
};

/*
locales: The list of supported languages on the site.

defaultLocale: The default language that will be shown if the user does not specify a language (in your case, this will be "en").

localeDetection:

true: Automatically redirects based on the user's browser language.

false: Always starts with the defaultLocale (i.e., "en"), regardless of the user's browser language.
*/
