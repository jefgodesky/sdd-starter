import fs from 'fs'
import { join } from 'path'
import getVersion from './get-version'

const releaseVersion = (filesystem: typeof fs = fs): void => {
  const { existsSync, mkdirSync, readdirSync, copyFileSync } = filesystem
  const { path } = getVersion()
  const root = process.cwd()
  const release = `${root}/dist/${path}`
  if (!existsSync(release)) mkdirSync(release, { recursive: true })

  const scripts = `${root}/dist/scripts`
  const map: { [key: string]: string } = {}
  map[`${root}/dist/stylesheets/index.css`] = `${release}/index.css`

  try {
    const files = readdirSync(scripts)
    for (const file of files) {
      map[join(scripts, file)] = join(release, file)
    }
  } catch (err) {
    console.error(err)
  }

  for (const key in map) {
    copyFileSync(key, map[key])
  }
}

const thisFile = process.cwd() + '/lib/release-version.ts'
if (process.argv[1] === thisFile) releaseVersion()

export default releaseVersion
