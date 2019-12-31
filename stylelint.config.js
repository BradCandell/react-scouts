module.exports = {
    defaultSeverity: 'warning',
    extends: ['stylelint-config-recommended', 'stylelint-a11y/recommended'],
    plugins: ['stylelint-use-nesting'],
    rules: {
        'color-hex-case': 'lower',
        'csstools/use-nesting': 'always',
        'at-rule-no-unknown': [true, { ignoreAtRules: ['function', 'return', 'include', 'mixin'] }],
        'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'selector-id-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'string-quotes': 'single',
        'unit-blacklist': 'px'
    }
};
