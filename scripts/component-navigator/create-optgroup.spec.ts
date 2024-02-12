import createOptGroup from './create-optgroup'

describe('createOptGroup', () => {
  const group = {
    a: 'Component A',
    b: 'Component B'
  }

  it('creates an optgroup', () => {
    const actual = createOptGroup('Group 1', group)
    expect(actual).toBeInstanceOf(HTMLOptGroupElement)
  })

  it('labels the optgroup', () => {
    const actual = createOptGroup('Group 1', group)
    expect(actual.getAttribute('label')).toEqual('Group 1')
  })

  it('appends the options', () => {
    const actual = createOptGroup('Group 1', group)
    expect(actual.childNodes).toHaveLength(2)
  })
})
