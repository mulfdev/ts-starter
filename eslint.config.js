// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import configPrettier from 'eslint-config-prettier';

export default tseslint.config(
    {
        ignores: ['dist/**'],
    },
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/return-await': 'error',
            '@typescript-eslint/strict-boolean-expressions': 'error',
            '@typescript-eslint/unbound-method': 'error',
            '@typescript-eslint/only-throw-error': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
        },
    },
    configPrettier
);
