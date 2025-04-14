// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import configPrettier from 'eslint-config-prettier';

export default tseslint.config(
    {
        ignores: ['dist/**'],
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    configPrettier
);
