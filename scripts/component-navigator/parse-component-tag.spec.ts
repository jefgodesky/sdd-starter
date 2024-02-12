import parseComponentTag from './parse-component-tag'
import populateTestComponents from './populate-test-components'

describe('parseComponentTag', () => {
  beforeEach(populateTestComponents)

  it('returns the component name', () => {
    const component = document.getElementById('component-a')
    const { name } = parseComponentTag(component as HTMLElement)
    expect(name).toEqual('Component A')
  })

  it('returns the component ID', () => {
    const component = document.getElementById('component-a')
    const { id } = parseComponentTag(component as HTMLElement)
    expect(id).toEqual('component-a')
  })

  it('returns the component category', () => {
    const component = document.getElementById('component-a')
    const { category } = parseComponentTag(component as HTMLElement)
    expect(category).toEqual('Category 1')
  })

  it('returns null for a component without a category', () => {
    const component = document.getElementById('component-d')
    const { category } = parseComponentTag(component as HTMLElement)
    expect(category).toEqual(null)
  })
})
