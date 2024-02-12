const populateTestComponents = (): void => {
  const componentCategories: Array<number | null> = [1, 1, 2, null]
  const components = componentCategories.map((elem: number | null, index: number) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const name = letters[index]
    const heading = `<h2>Component ${name}</h2>`
    const id = `component-${name.toLowerCase()}`
    const open = elem === null
      ? `<section id="${id}" class="component">`
      : `<section id="${id}" class="component" data-component-category="Category ${elem}">`
    return `${open}${heading}</section>`
  })
  document.body.innerHTML = '<div id="component-navigator"></div>' + components.join('')
}

export default populateTestComponents
