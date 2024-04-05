import reflectPreference from './reflect-preference'

describe('reflectPreference', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    })
  })

  it('sets light theme by default', () => {
    reflectPreference()
    const first = document.firstElementChild
    expect(first?.getAttribute('data-theme')).toEqual('light')
  })

  it('sets dark theme if that\'s your preference', () => {
    window.localStorage.setItem('color-theme-preference', 'dark')
    reflectPreference()
    const first = document.firstElementChild
    expect(first?.getAttribute('data-theme')).toEqual('dark')
  })

  it('sets light theme if that\'s your preference', () => {
    window.localStorage.setItem('color-theme-preference', 'light')
    reflectPreference()
    const first = document.firstElementChild
    expect(first?.getAttribute('data-theme')).toEqual('light')
  })

  it('sets dark theme if given dark', () => {
    window.localStorage.setItem('color-theme-preference', 'light')
    reflectPreference('dark')
    const first = document.firstElementChild
    expect(first?.getAttribute('data-theme')).toEqual('dark')
  })

  it('sets light theme if given light', () => {
    window.localStorage.setItem('color-theme-preference', 'dark')
    reflectPreference('light')
    const first = document.firstElementChild
    expect(first?.getAttribute('data-theme')).toEqual('light')
  })
})
