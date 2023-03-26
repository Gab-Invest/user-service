module.exports = {
  // Run ESLint on all JavaScript files
  '**/*.(js|ts)': ['yarn lint:fix', 'yarn test']
}
