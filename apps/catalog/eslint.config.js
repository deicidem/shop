import antfu from '@antfu/eslint-config';

export default antfu(
    {
        vue: true,
        yaml: false,
        rules: {
            'no-console': 'off',
            'vue/block-order': 0,
            'unused-imports/no-unused-vars': ['error', { varsIgnorePattern: '^(props|emits|slots|_)', argsIgnorePattern: '^_' }],
            'vue/custom-event-name-casing': ['error', 'kebab-case', {
                ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'],
            }],
            'vue/no-v-text-v-html-on-component': [
                'error',
                { allow: ['router-link', 'nuxt-link', 'ppd-icon'] },
            ],
            'n/prefer-global/process': 'warn',
            'antfu/top-level-function': 'error',
            'vue/max-attributes-per-line': ['error', {
                singleline: {
                    max: 3,
                },
                multiline: {
                    max: 1,
                },
            }],
            'ts/no-namespace': 'off',
        },
        stylistic: {
            indent: 4,
            quotes: 'single',
            semi: true,
        },
        formatters: {
        // remove this line to run linter for project
            css: true,
            html: true,
            prettierOptions: {
                tabWidth: 4,
                useTabs: false,
            },
        },
    },
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },
    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },
    {
        rules: {
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                },
            ],
            'vue/multi-word-component-names': 'off',
        },
    },
);
