import base from '../jest.config.js'

const config = Object.assign({}, base, {
  maxWorkers: 2,
  testEnvironment: 'jsdom',
  testMatch: ['**/scripts/**/*.spec.ts']
})

delete config.projects
export default config
