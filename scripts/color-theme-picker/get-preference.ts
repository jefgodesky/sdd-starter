const getPreference = (): 'light' | 'dark' => {
  const stored = window.localStorage.getItem('color-theme-preference') as 'light' | 'dark' | null
  return stored !== null
    ? stored
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

export default getPreference
