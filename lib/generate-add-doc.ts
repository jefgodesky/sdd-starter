import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const generateAddDoc = (): void => {
  const { version } = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf8'))
  if (typeof version !== 'string') { throw new Error('version is not a string') }
  const data = {
    version,
    'version path': `/v${version.split('.').join('/')}`
  }
  writeFileSync(join(process.cwd(), 'add-doc.json'), JSON.stringify(data, null, 2), { encoding: 'utf8' })
}

export default generateAddDoc
