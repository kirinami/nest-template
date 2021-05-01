module.exports = {
    root: true,

    env: {
        node: true,
        jest: true,
    },

    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
    },

    plugins: ['@typescript-eslint/eslint-plugin'],

    extends: [
        'airbnb-typescript/base',

        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],

    rules: {
        'no-plusplus': 'off',
        'no-continue': 'off',
        'no-useless-return': 'off',
        'no-param-reassign': 'off',
        'no-nested-ternary': 'warn',
        'no-return-assign': ['error', 'except-parens'],
        'no-underscore-dangle': [
            'error', {
                'allow': [
                    '_id',
                ],
                'allowAfterSuper': true,
                'allowAfterThis': true,
            },
        ],
        'no-multiple-empty-lines': [
            'error', {
                'max': 1,
                'maxBOF': 0,
                'maxEOF': 1,
            },
        ],
        'linebreak-style': 'off',
        'prefer-destructuring': 'off',
        'prefer-arrow-callback': [
            'error', {
                'allowNamedFunctions': true,
                'allowUnboundThis': true,
            },
        ],
        'max-len': [
            'error', 128, 4, {
                'ignoreUrls': true,
                'ignoreComments': true,
                'ignoreRegExpLiterals': true,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
            },
        ],
        'arrow-parens': [
            'warn', 'as-needed', {
                'requireForBlockBody': true,
            },
        ],
        'object-curly-newline': [
            'error', {
                'multiline': true,
                'consistent': true,
            },
        ],
        'class-methods-use-this': 'warn',
        'global-require': 'off',

        'import/prefer-default-export': 'warn',

        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/indent': [
            'error', 4, {
                'SwitchCase': 1,
                'ignoreComments': true,
            },
        ],
        '@typescript-eslint/lines-between-class-members': [
            'error', 'always', {
                'exceptAfterSingleLine': true,
            },
        ],
    },

    ignorePatterns: ['.eslintrc.js'],
};
