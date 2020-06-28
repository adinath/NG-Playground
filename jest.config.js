module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  runner: "groups",
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  reporters: ['default','jest-junit',"jest-html-reporters"],
  coverageReporters: ['html','cobertura']
};
