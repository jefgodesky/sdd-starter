import reflectPreference from './reflect-preference'

const setPreference = (pref: 'light' | 'dark'): void => {
  window.localStorage.setItem('color-theme-preference', pref)
  reflectPreference(pref)
}

export default setPreference
