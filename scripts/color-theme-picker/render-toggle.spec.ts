import renderToggle from './render-toggle'

describe('renderToggle', () => {
  it('renders the SVG', () => {
    const actual = renderToggle()
    expect(actual.tagName).toEqual('SVG')
  })
})
