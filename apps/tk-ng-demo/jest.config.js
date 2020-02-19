module.exports = {
  name: 'tk-ng-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tk-ng-demo',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
