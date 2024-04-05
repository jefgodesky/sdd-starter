import getPreference from './get-preference'

describe('getPreference', () => {
  const mockMatchMedia = (matches: boolean = false): void => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    })
  }

  it('returns light if browser does not specify dark theme', () => {
    mockMatchMedia(false)
    const pref = getPreference()
    expect(pref).toEqual('light')
  })

  it('returns dark if browser specifies dark theme', () => {
    mockMatchMedia(true)
    const pref = getPreference()
    expect(pref).toEqual('dark')
  })

  it('returns light if user has specified light theme', () => {
    mockMatchMedia(true)
    window.localStorage.setItem('color-theme-preference', 'light')
    const pref = getPreference()
    expect(pref).toEqual('light')
  })

  it('returns dark if user has specified dark theme', () => {
    mockMatchMedia(false)
    window.localStorage.setItem('color-theme-preference', 'dark')
    const pref = getPreference()
    expect(pref).toEqual('dark')
  })
})
