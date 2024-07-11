// eslint-disable-next-line no-undef
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'jest --bail --detectOpenHandles --passWithNoTests',
    'eslint --fix',
    'prettier --write'
  ]
}
