module.exports = {
  name: 'functional-components',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/functional-components',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
