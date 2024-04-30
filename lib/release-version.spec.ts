import fs from 'fs'
import { vol, fs as memfs } from 'memfs'
import releaseVersion from './release-version'

describe('releaseVersion', () => {
  const root: string = process.cwd()
  const css: string = 'body { color: red; }'
  const js: string = "console.log('Hello, world!')"

  beforeAll(async () => {
    vol.fromJSON({
      [`${root}/package.json`]: '{"version": "1.0.0"}',
      [`${root}/dist/stylesheets/index.css`]: css,
      [`${root}/dist/scripts/bundle.js`]: js
    })
    releaseVersion(memfs as any as typeof fs)
  })

  afterAll(() => {
    vol.reset()
  })

  it('creates the directory', () => {
    expect(memfs.existsSync(`${root}/dist/v1/0/0`)).toBeTruthy()
  })

  it('copies the stylesheet', () => {
    const filename = `${root}/dist/v1/0/0/index.css`
    expect(memfs.readFileSync(filename, 'utf-8')).toBe(css)
  })

  it('copies the script bundle', () => {
    const filename = `${root}/dist/v1/0/0/bundle.js`
    expect(memfs.readFileSync(filename, 'utf-8')).toBe(js)
  })
})
