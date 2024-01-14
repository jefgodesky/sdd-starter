import { writeFileSync } from 'fs'
import { join } from 'path'
import getVersion from './get-version'

const generateVersion = (): void => {
  const { version, path } = getVersion()
  const data = {
    version,
    'version path': path
  }
  writeFileSync(join(process.cwd(), 'version.json'), JSON.stringify(data, null, 2), { encoding: 'utf8' })
}

const thisFile = process.cwd() + '/lib/generate-version.ts'
if (process.argv[1] === thisFile) generateVersion()

export default generateVersion
