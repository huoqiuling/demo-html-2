module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Add your custom rules here
    "no-unused-vars": "warn",
    "no-console": "off",
    eqeqeq: "error",
  },
};
