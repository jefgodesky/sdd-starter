import fs from 'fs'
import { join } from 'path'
import generateVersion from './generate-version'

jest.mock('fs/promises')

describe('generateVersion', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('generates version.json', () => {
    const writeFileMock = jest.fn()
    fs.readFileSync = jest.fn().mockReturnValueOnce('{"version": "1.0.0"}')
    fs.writeFileSync = writeFileMock
    generateVersion()
    const filename = join(process.cwd(), 'version.json')
    const content = '{\n  "version": "1.0.0",\n  "version path": "/v1/0/0"\n}'
    const options = { encoding: 'utf8' }
    expect(writeFileMock).toHaveBeenCalledWith(filename, content, options)
  })
})
