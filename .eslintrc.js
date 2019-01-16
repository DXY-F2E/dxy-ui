module.exports = {
  root: true,
  parserOptions: {
  },
  env: {
    node: true,
    browser: true
  },
  globals:{
  },
  extends: ['airbnb-base'],
  plugins: [
  ],
  'rules': {
    'camelcase': 0,
    'func-names': 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]

  }
}
