export default {
  preset: 'ts-jest',
  projects: [
    './lib/jest.config.js',
    './scripts/jest.config.js'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '\\.[jt]sx?$': [
      'ts-jest',
      {
        isolatedModules: true,
        useESM: true
      }
    ]
  },
  moduleNameMapper: {
    '^(\\.\\.?\\/.+)\\.js$': '$1'
  },
  extensionsToTreatAsEsm: ['.ts']
}
