import populateTestComponents from './populate-test-components'
import createSelect from './create-select'

describe('createSelect', () => {
  beforeEach(populateTestComponents)

  it('creates a select', () => {
    const actual = createSelect()
    expect(actual).toBeInstanceOf(HTMLSelectElement)
  })

  it('populates the options and groups', () => {
    const a = '<option value="component-a">Component A</option>'
    const b = '<option value="component-b">Component B</option>'
    const c = '<option value="component-c">Component C</option>'
    const d = '<option value="component-d">Component D</option>'
    const g1 = `<optgroup label="Category 1">${a}${b}</optgroup>`
    const g2 = `<optgroup label="Category 2">${c}</optgroup>`
    const expected = `<select>${g1}${g2}${d}</select>`
    const actual = createSelect()
    expect(actual.outerHTML).toEqual(expected)
  })
})
