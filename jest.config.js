module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'android.ts',
    'ios.ts',
    'android.js',
    'ios.js',
    'ts',
    'js',
    'json',
    'vue',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/src/$1',
    '@/(.*)$': '<rootDir>/src/$1',
    '^projectRoot/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  setupFiles: [
    '<rootDir>/jest/typescript-helpers.js',
    '<rootDir>/jest/nativescript-vue-stubs.js',
  ],
  transformIgnorePatterns: [],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
  ],
  coverageReporters: ['text-summary', 'html'],
};
