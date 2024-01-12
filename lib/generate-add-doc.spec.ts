import fs from 'fs'
import { join } from 'path'
import generateAddDoc from './generate-add-doc'

jest.mock('fs/promises')

describe('generateAddDoc', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('generates add-doc.json', () => {
    const writeFileMock = jest.fn()
    fs.readFileSync = jest.fn().mockReturnValueOnce('{"version": "1.0.0"}')
    fs.writeFileSync = writeFileMock
    generateAddDoc()
    const filename = join(process.cwd(), 'add-doc.json')
    const content = '{\n  "version": "1.0.0",\n  "version path": "/v1/0/0"\n}'
    const options = { encoding: 'utf8' }
    expect(writeFileMock).toHaveBeenCalledWith(filename, content, options)
  })
})
