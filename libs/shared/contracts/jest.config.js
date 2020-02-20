module.exports = {
  name: 'shared-contracts',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/contracts',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
