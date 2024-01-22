import initCode from './index.js'

describe('initCode', () => {
  it('initializes Prism.js syntax highlighting', () => {
    document.body.innerHTML = '<code class="language-html block">&gt;p&lt;Hello, world!&gt;p&/lt;</code>'
    initCode()
    expect(document.body.querySelector('code.block span.token')).not.toBeNull()
  })
})
