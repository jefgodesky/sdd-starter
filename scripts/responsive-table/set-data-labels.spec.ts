import setDataLabels from './set-data-labels'

describe('setDataLabels', () => {
  const headings = ['Column 1', 'Column 2']
  const cells = ['Hello', 'World']

  beforeEach(() => {
    const head = `<thead><tr>${headings.map(heading => `<th>${heading}</th>`).join('')}</tr></thead>`
    const body = `<tbody><tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr></tbody>`
    document.body.innerHTML = `<table>${head}${body}</table>`
  })

  it('copies headings to data-label attributes', () => {
    setDataLabels(document.querySelector('table') as HTMLTableElement)
    const cells = document.querySelectorAll('td')
    for (let i = 0; i < headings.length; i++) {
      expect(cells[i].getAttribute('data-label')).toEqual(headings[i])
    }
  })
})
