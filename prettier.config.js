/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  singleQuote: true,
  useTabs: true,
  tabWidth: 4,
  bracketSpacing: true,
  bracketSameLine: true,
  embeddedLanguageFormatting: "auto",
  semi: true,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
};
