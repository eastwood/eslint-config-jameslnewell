module.exports = {

  env: {
    commonjs: true
  },

  plugins: [
    'mocha'
  ],

  rules: {
    'comma-dangle': [2, 'never'],
    'no-cond-assign': [2, 'always'],
    'no-console': 2,
    'no-constant-condition': 2,
    'no-control-regex': 1,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': [1, {
      prefer: {
        'arg':        'param',
        'argument':   'param',
        'return':     'returns',
        'class':      'constructor',
        'exception':  'throws'
      },
      requireParamDescription: false,
      requireReturnDescription: false
    }],
    'valid-typeof': 2,

    'accessor-pairs': 1,
    'block-scoped-var': 2,
    'complexity': [1, 11],
    'consistent-return': 2,
    'default-case': 2,
    'dot-notation': 2,
    'dot-location': [2, 'property'],
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 1,
    'no-else-return': 0,
    'no-empty-label': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-unexpected-multiline': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 1,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': [2, 'always'],
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': 1,
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 1,
    'wrap-iife': [2, 'inside'],
    'yoda': [2, 'never'],

    'no-multi-spaces': 2,
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true, 'mode': 'strict'}],

    'init-declarations': 1,
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,

    'callback-return': [2, ['callback', 'cb', 'next', 'done']],
    'global-require': 2,
    'handle-callback-err': [2, '^(err|error)$'],
    'no-mixed-requires': 0,
    'no-new-require': 2,

    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'never'],
    'brace-style': [2, '1tbs'],
    'camelcase': [2, {'properties': 'always'}],
    'comma-spacing': [2, {'before': false, 'after': true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': 2,
    'func-names': 0,
    'func-style': [2, 'declaration', {'allowArrowFunctions': true}],
    'id-length': 0,
    'indent': [2, 2, {'SwitchCase': 1, 'VariableDeclarator': 0}],
    'wrap-regex': 0,
    'spaced-comment': [0, 'never'],
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'space-return-throw-case': 2,
    'space-infix-ops': [2, {'int32Hint': true}],
    'space-in-parens': [2, 'never'],
    'space-before-function-paren': [2, 'never'],
    'space-before-blocks': 2,
    'space-before-keywords': [2, 'always'],
    'space-after-keywords': [2, 'always'],
    'sort-vars': 0,
    'semi': [2, 'always'],
    'semi-spacing': [2, {'before': false, 'after': true}],
    'require-jsdoc': 1,
    'quotes': [2, 'single', 'avoid-escape'],
    'quote-props': 0,
    'padded-blocks': 0,
    'operator-linebreak': [2, 'before'],
    'operator-assignment': 0,
    'one-var': 0,
    'object-curly-spacing': [2, 'never'],
    'no-unneeded-ternary': 2,
    'no-underscore-dangle': 0,
    'no-trailing-spaces': 0,
    'no-ternary': 0,
    'no-spaced-func': 2,
    'no-new-object': 2,
    'no-nested-ternary': 2,
    'no-multiple-empty-lines': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-lonely-if': 2,
    'no-inline-comments': 0,
    'no-continue': 0,
    'no-array-constructor': 2,
    'newline-after-var': 0,
    'new-parens': 2,
    'new-cap': 2,
    'max-nested-callbacks': [1, 4],
    'max-len': [1, 150, 2],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': [0, {'beforeBlockComment': true, 'afterBlockComment': false, 'beforeLineComment': true, 'afterLineComment': false}],

    //tests
    'mocha/no-exclusive-tests': 2,
    'mocha/handle-done-callback': 2,
    'mocha/no-global-tests': 2

  },

  extends: [
    'eslint:recommended'
  ]

};
