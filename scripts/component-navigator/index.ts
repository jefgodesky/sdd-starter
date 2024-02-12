import createSelect from './create-select'

const initComponentNavigator = (elems: Element[] | null): void => {
  if (elems === null) return
  const select = createSelect()

  select.addEventListener('change', event => {
    window.location.href = `#${(event.target as HTMLSelectElement).value}`
  })

  for (const elem of elems) {
    elem.appendChild(select)
  }
}

export default initComponentNavigator
