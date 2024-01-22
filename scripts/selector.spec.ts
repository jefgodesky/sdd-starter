import selector from './selector.js'

describe('selector', () => {
  it('returns an array of matching elements', () => {
    document.body.innerHTML = '<p>1</p><p>2</p><p>3</p>'
    const actual = selector('p')
    const check = actual === null ? [] : actual.map(el => el.tagName)
    expect(check.join(' ')).toEqual('P P P')
  })

  it('returns null if nothing matches', () => {
    document.body.innerHTML = '<p>1</p><p>2</p><p>3</p>'
    const actual = selector('ol')
    expect(actual).toEqual(null)
  })
})
