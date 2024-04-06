import getPreference from './get-preference'
import reflectPreference from './reflect-preference'
import setPreference from './set-preference'
import renderToggle from './render-toggle'

/**
 * This color theme picker is very much a port of Adam Argyle’s theme picker,
 * posted on web.dev
 * https://web.dev/articles/building/a-theme-switch-component
 */

const initColorThemePicker = (elems: HTMLElement[]): void => {
  reflectPreference()

  for (const root of elems) {
    renderToggle(root)
    root.addEventListener('click', () => {
      const pref = getPreference()
      setPreference(pref === 'light' ? 'dark' : 'light')
    })
  }
}

export default initColorThemePicker
