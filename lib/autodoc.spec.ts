import autodoc from './autodoc'

describe('autodoc', () => {
  const withCode = `
      <section id="component-link" class="component" data-component-category="Navigation">
        <h2>Link</h2>
        <div class="example centered">
          <a href="#component-link">Link</a>
        </div>
        <details>
          <summary>Markup</summary>
          <code class="block">&lt;a href="#"&gt;Link&lt;/a&gt;</code>
        </details>
      </section>
    `

  const withoutCode = `
      <section id="component-link" class="component" data-component-category="Navigation">
        <h2>Link</h2>
        <div class="example centered">
          <a href="#component-link">Link</a>
        </div>
        <details>
          <summary>Markup</summary>
          <code class="block"></code>
        </details>
      </section>
    `

  const withoutBlock = `
      <section id="component-link" class="component" data-component-category="Navigation">
        <h2>Link</h2>
        <div class="example centered">
          <a href="#component-link">Link</a>
        </div>
        <details>
          <summary>Markup</summary>
        </details>
      </section>
    `

  const withoutDetails = `
      <section id="component-link" class="component" data-component-category="Navigation">
        <h2>Link</h2>
        <div class="example centered">
          <a href="#component-link">Link</a>
        </div>
      </section>
    `

  const multiline = `
      <section id="component-input-button" class="component" data-component-category="Forms">
        <h2>Input &amp; Button</h2>
        <div class="example centered">
          <fieldset class="input-button">
            <input type="search" placeholder="Search">
            <button>Search</button>
          </fieldset>
        </div>
        <details>
          <summary>Markup</summary>
          <code class="block">&lt;fieldset class="input-button"&gt;
  &lt;input type="search" placeholder="Search"&gt;
  &lt;button&gt;Search&lt;/button&gt;
&lt;/fieldset&gt;</code>
        </details>
      </section>
    `

  it('applies syntax highlighting to existing example code', () => {
    const highlighted = autodoc(withCode)
    expect(highlighted).toContain('<span class="hljs-tag">')
    expect(highlighted).toContain('<span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>')
    expect(highlighted).toContain('<a href="#component-link">Link</a>')
  })

  it('copies example code and highlights it if no example code is provided', () => {
    const highlighted = autodoc(withoutCode)
    expect(highlighted).toContain('<span class="hljs-tag">')
    expect(highlighted).toContain('<span class="hljs-attr">href</span>=<span class="hljs-string">"#component-link"</span>')
    expect(highlighted).toContain('<a href="#component-link">Link</a>')
  })

  it('copies example code and highlights it if no code block is provided', () => {
    const highlighted = autodoc(withoutBlock)
    expect(highlighted).toContain('<span class="hljs-tag">')
    expect(highlighted).toContain('<span class="hljs-attr">href</span>=<span class="hljs-string">"#component-link"</span>')
    expect(highlighted).toContain('<a href="#component-link">Link</a>')
  })

  it('copies example code and highlights it if no details tag is provided', () => {
    const highlighted = autodoc(withoutDetails)
    expect(highlighted).toContain('<span class="hljs-tag">')
    expect(highlighted).toContain('<span class="hljs-attr">href</span>=<span class="hljs-string">"#component-link"</span>')
    expect(highlighted).toContain('<a href="#component-link">Link</a>')
  })

  it('is idempotent', () => {
    const first = autodoc(multiline)
    const second = autodoc(multiline)
    expect(first).toEqual(second)
  })
})
