import renderToggle from './render-toggle'

describe('renderToggle', () => {
  it('renders the SVG', () => {
    document.body.innerHTML = '<div id="test"></div>'
    const root = document.getElementById('test')
    renderToggle(root)
    expect(root.innerHTML).toContain('<svg')
  })
})
