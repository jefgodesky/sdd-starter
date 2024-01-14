import { readFileSync } from 'fs'
import { join } from 'path'

const getVersion = (): { version: string, path: string } => {
  const content = readFileSync(join(process.cwd(), 'package.json'), 'utf8')
  const { version } = JSON.parse(content)
  if (typeof version !== 'string') { throw new Error('version is not a string') }
  return { version, path: `v${version.split('.').join('/')}` }
}

export default getVersion
