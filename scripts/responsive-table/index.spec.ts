import { hasClass } from 'unobtrusive-dom'
import selector from '../selector'
import initResponsiveTables from './index'

describe('initResponsiveTables', () => {
  const setWindowWidth = (width: number): void => {
    Object.defineProperty(window, 'innerWidth', {
      value: width,
      writable: true
    })
    window.dispatchEvent(new Event('resize'))
    jest.advanceTimersByTime(300)
  }

  beforeAll(() => {
    jest.useFakeTimers()
  })

  beforeEach(() => {
    document.documentElement.style.fontSize = '16px'
    document.body.innerHTML = '<table style="--breakpoint: 10rem"></table>'
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => {
        return {
          getPropertyValue (property: string): string {
            if (property === '--breakpoint') return '10rem'
            return ''
          }
        }
      }
    })
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('applies card class on narrow screens', () => {
    setWindowWidth(150)
    const tables = selector('table') as HTMLTableElement[] ?? []
    initResponsiveTables(tables)
    expect(hasClass(tables[0], 'card')).toEqual(true)
  })

  it('doesn\'t apply card class on wide screens', () => {
    setWindowWidth(170)
    const tables = selector('table') as HTMLTableElement[] ?? []
    initResponsiveTables(tables)
    expect(hasClass(tables[0], 'card')).toEqual(false)
  })

  it('adds card class when screen narrows', () => {
    setWindowWidth(170)
    const tables = selector('table') as HTMLTableElement[] ?? []
    initResponsiveTables(tables)
    setWindowWidth(150)
    expect(hasClass(tables[0], 'card')).toEqual(true)
  })

  it('removes card class when screen widens', () => {
    setWindowWidth(150)
    const tables = selector('table') as HTMLTableElement[] ?? []
    initResponsiveTables(tables)
    setWindowWidth(170)
    expect(hasClass(tables[0], 'card')).toEqual(false)
  })
})
