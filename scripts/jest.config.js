import base from '../jest.config.js'

const config = Object.assign({}, base, {
  testEnvironment: 'jsdom',
  testMatch: ['**/scripts/**/*.spec.ts']
})

delete config.projects
export default config
