import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: [
        ...nextCoreWebVitals,
        ...nextTypescript,
        ...compat.extends("eslint:recommended"),
        ...compat.extends("plugin:@typescript-eslint/eslint-recommended"),
        ...compat.extends("plugin:@typescript-eslint/recommended"),
        ...compat.extends("prettier")
    ],

    plugins: {
        "@typescript-eslint": typescriptEslint,
        prettier,
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "@typescript-eslint/no-explicit-any": 2,
        "@typescript-eslint/no-unused-vars": 2,
        "max-lines": 1,
        "react-hooks/exhaustive-deps": 0,
        "react-hooks/set-state-in-effect": 0,
    },
}, {
    files: ["lib/supabase/database.types.ts"],

    rules: {
        "max-lines": "off",
    },
}]);
