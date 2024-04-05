import setPreference from './set-preference'

describe('setPreference', () => {
  it('can set preference for light theme', () => {
    setPreference('light')
    const actual = window.localStorage.getItem('color-theme-preference')
    expect(actual).toEqual('light')
  })

  it('can set preference for dark theme', () => {
    setPreference('dark')
    const actual = window.localStorage.getItem('color-theme-preference')
    expect(actual).toEqual('dark')
  })
})
