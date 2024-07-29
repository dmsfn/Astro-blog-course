/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "all",
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "avoid",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
