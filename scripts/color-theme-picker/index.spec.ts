import initColorThemePicker from './index'

describe('initColorThemePicker', () => {
  let root: HTMLElement | null
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

  beforeEach(() => {
    document.body.innerHTML = '<div id="color-theme-picker"></div>'
    root = document.getElementById('color-theme-picker')
  })

  it('renders the SVG', () => {
    mockMatchMedia()
    initColorThemePicker([root as HTMLElement])
    expect(root?.innerHTML).not.toEqual('')
  })

  it('flips from light to dark', () => {
    mockMatchMedia(false)
    initColorThemePicker([root as HTMLElement])
    root?.dispatchEvent(new Event('click'))
    const first = document.firstElementChild
    expect(first?.getAttribute('data-theme')).toEqual('dark')
  })

  it('flips from dark to light', () => {
    mockMatchMedia(true)
    initColorThemePicker([root as HTMLElement])
    root?.dispatchEvent(new Event('click'))
    const first = document.firstElementChild
    expect(first?.getAttribute('data-theme')).toEqual('light')
  })
})
