module.exports = {
  env: {
    mocha: true
  },
  globals: {
    expect: true,
    sinon: true
  },
  rules: {
    // allow unused expressions for Chai's expect syntax
    'no-unused-expressions': 0
  }
}
