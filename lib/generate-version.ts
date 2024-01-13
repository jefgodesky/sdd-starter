import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const generateVersion = (): void => {
  const { version } = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf8'))
  if (typeof version !== 'string') { throw new Error('version is not a string') }
  const data = {
    version,
    'version path': `/v${version.split('.').join('/')}`
  }
  writeFileSync(join(process.cwd(), 'version.json'), JSON.stringify(data, null, 2), { encoding: 'utf8' })
}

const thisFile = process.cwd() + '/lib/generate-version.ts'
if (process.argv[1] === thisFile) generateVersion()

export default generateVersion
