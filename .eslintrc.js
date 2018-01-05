module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module'
  },
  'globals': {
    'require': true
  },
  'rules': {
    'array-bracket-spacing': [1, 'never'],
    'arrow-parens': [1, 'always'],
    'arrow-spacing': [1, { before: true, 'after': true }],
    'brace-style': [1, 'stroustrup', { "allowSingleLine": true }],
    'camelcase': [1, { properties: 'always' }],
    'comma-dangle': [1, 'never'],
    'comma-style': [1, 'last'],
    'dot-notation': 1,
    'eqeqeq': 1,
    'func-style': [1, 'expression'],
    'keyword-spacing': [1, { after: true, before: true }],
    // 'indent': [ 0, 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'no-array-constructor': 1,
    'no-console': 0,
    'no-else-return': 0,
    'no-extra-semi': 1,
    'no-dupe-class-members': 1,
    'no-nested-ternary': 0,
    'no-new-func': 1,
    'no-new-object': 1,
    'no-tabs': 1,
    'no-undef': 2,
    'no-unused-vars': 1,
    'no-unneeded-ternary': 1,
    'no-useless-concat': 1,
    'no-useless-constructor': 1,
    'no-useless-escape': 1,
    'no-useless-return': 1,
    'no-trailing-spaces': 1,
    'no-whitespace-before-property': 1,
    'prefer-const': 1,
    'prefer-rest-params': 1,
    'quotes': [ 1, 'single' ],
    'quote-props': [1, 'as-needed'],
    'radix': [1, 'as-needed'],
    'semi': [ 1, 'always' ],
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': [1, { anonymous: 'never', named: 'never', asyncArrow: 'never' }],
    'spaced-comment': [1, 'always'],
    'space-infix-ops': 1,
    'space-in-parens': [1, 'never'],
    'template-curly-spacing': [1, 'never']
  }
};
