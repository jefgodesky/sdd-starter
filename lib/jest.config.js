import base from '../jest.config.js'

const config = Object.assign({}, base, {
  testEnvironment: 'node',
  testMatch: ['**/lib/**/*.spec.ts']
})

delete config.projects
export default config
