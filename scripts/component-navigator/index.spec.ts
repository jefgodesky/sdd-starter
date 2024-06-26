import selector from '../selector'
import populateTestComponents from './populate-test-components'
import initComponentNavigator from './index'

describe('initComponentNavigator', () => {
  let select: HTMLSelectElement | null = null

  beforeEach(() => {
    populateTestComponents()
    const elems = selector('#component-navigator')
    initComponentNavigator(elems)
    const selects = selector('#component-navigator > select')
    select = selects === null ? null : selects[0] as HTMLSelectElement
  })

  it('populates the component navigator element', () => {
    expect(select).toHaveLength(5)
  })

  it('lists uncategorized components on the page', () => {
    const options = selector('#component-navigator > select > option')
    const second = options === null ? null : options[1] as HTMLOptionElement
    expect(options).toHaveLength(2)
    expect(second?.innerHTML).toEqual('Component D')
  })

  it('jumps to the selected option', () => {
    if (select === null) { expect(select).not.toBeNull(); return }
    select.value = 'component-a'
    select.dispatchEvent(new Event('change'))
    expect(window.location.href).toContain('#component-a')
  })
})
