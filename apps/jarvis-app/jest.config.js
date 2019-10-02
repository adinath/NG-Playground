module.exports = {
  name: 'jarvis-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/jarvis-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
