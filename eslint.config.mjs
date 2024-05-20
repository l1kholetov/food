import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js';


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },

    rules: {
      semi: ["error", "always"],
      // curly: "error",
      "no-debugger": "off",
      "@stylistic/js/max-len": ["error", { "code": 235 }],
      "@stylistic/js/comma-dangle": ["error", "never"],
      "no-unused-vars": "off",
      "camelcase": "error",
      "no-undef": "warn",
      "no-constant-condition": "off",
      "indent": ["error", 2, { "VariableDeclarator": "first", "SwitchCase": 1 }]
    }
  }
];
