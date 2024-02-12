import populateTestComponents from './populate-test-components'
import parseComponents from './parse-components'

describe('parseComponents', () => {
  beforeEach(populateTestComponents)

  it('builds a map of components on the page', () => {
    const actual = parseComponents()
    const expected = {
      'Category 1': {
        'component-a': 'Component A',
        'component-b': 'Component B'
      },
      'Category 2': {
        'component-c': 'Component C'
      },
      Uncategorized: {
        'component-d': 'Component D'
      }
    }
    expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected))
  })
})
