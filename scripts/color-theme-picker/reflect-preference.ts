import getPreference from './get-preference'

const reflectPreference = (theme: 'light' | 'dark' = getPreference()): void => {
  const root = document.firstElementChild
  if (root === null) return
  root.setAttribute('data-theme', theme)
}

export default reflectPreference
