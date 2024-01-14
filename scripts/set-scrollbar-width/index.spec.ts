import setScrollbarWidth from './index'

describe('setScrollbarWidth', () => {
  it('sets the --scrollbar-width property', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 10 })
    Object.defineProperty(document.documentElement, 'clientWidth', { writable: true, configurable: true, value: 8 })
    setScrollbarWidth()
    expect(getComputedStyle(document.documentElement).getPropertyValue('--scrollbar-width')).toBe('2px')
  })
})
