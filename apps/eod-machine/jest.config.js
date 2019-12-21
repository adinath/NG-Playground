module.exports = {
  name: 'eod-machine',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/eod-machine',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
