import parserTs from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';
import configPrettier from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                console: true,
                module: true,
                process: true,
                __dirname: true,
            },
        },
        plugins: {
            '@typescript-eslint': pluginTs,
        },
        settings: {
            node: {
                tryExtensions: ['.ts', '.js', '.json', '.node'],
            },
        },
        rules: {
            // Promise handling
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            'require-atomic-updates': 'error',
            'no-return-await': 'error',

            // Type safety
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/ban-ts-comment': [
                'error',
                {
                    'ts-ignore': 'allow-with-description',
                    'ts-nocheck': 'allow-with-description',
                },
            ],
            '@typescript-eslint/consistent-type-assertions': [
                'error',
                {
                    assertionStyle: 'as',
                    objectLiteralTypeAssertions: 'allow-as-parameter',
                },
            ],
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-dynamic-delete': 'error',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-this-alias': 'error',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
            '@typescript-eslint/no-unnecessary-condition': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
            '@typescript-eslint/unbound-method': 'error',

            // Runtime error prevention
            'no-unreachable': 'error',
            'no-constant-condition': 'error',
            'no-debugger': 'error',
            'no-dupe-args': 'error',
            'no-dupe-else-if': 'error',
            'no-dupe-keys': 'error',
            'no-ex-assign': 'error',
            'no-fallthrough': 'error',
            'no-duplicate-case': 'error',
            'no-empty-pattern': 'error',
            'no-empty': ['error', { allowEmptyCatch: true }],
            'no-global-assign': 'error',
            'no-new-native': 'off',
            'no-new-wrappers': 'error',
            'no-octal': 'error',
            'no-proto': 'error',
            'no-regex-spaces': 'error',
            'no-self-compare': 'error',
            'no-template-curly-in-string': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unreachable-loop': 'error',

            // Security-related
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'no-new-func': 'error',

            // Variable usage
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': [
                'error',
                {
                    functions: false,
                    classes: true,
                    variables: true,
                },
            ],
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',
            'no-shadow-restricted-names': 'error',

            // Modern JS practices
            'prefer-const': 'error',
            'no-var': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/prefer-includes': 'error',
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',

            // Error handling
            'no-throw-literal': 'error',
            'handle-callback-err': 'error',
        },
    },
    configPrettier,
];
