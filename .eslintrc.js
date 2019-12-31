const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:cypress/recommended' /* Permits use of the global 'cy' variable without defining it' */, 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': OFF,
        'react/prop-types': OFF
    },
    env: {
        browser: true /* Permits console and other browser window references without defining them */,
        jest: true /* Permits describe, it, expect, and other jest references without defining them */,
        node: true /* Permits use of module (e.g. module.exports) without defining module */,
        es6: true /* Permits use of es6 features like Promise without defining them */
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
