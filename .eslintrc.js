export const eslintExtends = [
  'eslint:recommended',
  'plugin:vue/vue3-essential',
  'prettier', // Integrating Prettier configuration
];
export const plugins = ['prettier'];
export const rules = {
  'prettier/prettier': ['error'], // Make Prettier formatting errors show up as ESLint errors
};
