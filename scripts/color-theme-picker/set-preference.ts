const setPreference = (pref: 'light' | 'dark'): void => {
  window.localStorage.setItem('color-theme-preference', pref)
}

export default setPreference
