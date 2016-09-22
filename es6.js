module.exports = {

  extends: [
    './es5.js'
  ],

  env: {
    es6: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },

  plugins: [
    'import'
  ],

  settings: {

    //don't parse files other than script files e.g. style and image files
    'import/extensions': [
      '.js',
      '.jsx'
    ],

    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.json'
        ]
      }
    }

  },

  rules: {

    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', {before: true, after: true}],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {before: true, after: false}],
    'no-confusing-arrow': ['error'],
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'error',
    'prefer-reflect': 'warn',
    'prefer-spread': 'error',
    'prefer-template': 'warn',
    'require-yield': 'error',

    'import/no-unresolved': ['error', {/*ignore: []*/}], //update to work with short paths e.g. ~module
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',

    'import/export': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error', //too strict?

    'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off', //how do we do this only for client?

    'import/imports-first': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    // 'import/extensions': ['error', 'always', { //require extension for everything but .js and .jsx => broken
    //   js: 'never',
    //   jsx: 'never'
    // }],
    'import/order': ['error', {groups: ['builtin', 'external', 'internal', 'parent', 'index', 'sibling']}], //too strict? change to just builtin and external?
    'import/newline-after-import': 'off',
    'import/prefer-default-export': 'error', //too strict?
    'import/max-dependencies': 'off' //maybe should enable it? but what number?

  }

};
