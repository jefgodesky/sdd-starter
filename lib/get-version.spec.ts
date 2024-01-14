import fs from 'fs'
import { join } from 'path'
import getVersion from './get-version'

jest.mock('fs/promises')

describe('getVersion', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('gets the version from package.json', () => {
    fs.readFileSync = jest.fn().mockReturnValueOnce('{"version": "1.0.0"}')
    const { version, path } = getVersion()
    expect(fs.readFileSync).toHaveBeenNthCalledWith(1, join(process.cwd(), 'package.json'), 'utf8')
    expect(version).toBe('1.0.0')
    expect(path).toBe(join('v1/0/0'))
  })
})
