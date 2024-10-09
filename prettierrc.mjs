export default {
  semi: false,
  useTabs: true,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: "es5",
  endOfLime: "lf",
  tabWidth: 4,
  printWidth: 160,
  overrides: [
    {
      files: ["*.json", "*.yml", "*.yaml"],
      options: {
        useTabs: true,
        tabWidth: 2,
      },
    },
  ],
};
