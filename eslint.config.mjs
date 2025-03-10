import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Deshabilita errores por usar 'any'
      "@typescript-eslint/no-unused-vars": "off", // Deshabilita errores por variables no usadas
      "@next/next/no-img-element": "off", // Permite el uso de <img>
    },
  },
];

export default eslintConfig;
