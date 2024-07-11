// eslint-disable-next-line no-undef
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'jest --bail --passWithNoTests --detectOpenHandles'
  ]
}
