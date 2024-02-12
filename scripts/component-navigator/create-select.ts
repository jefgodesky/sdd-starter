import { create } from 'unobtrusive-dom'
import parseComponents from './parse-components'
import createOptGroup from './create-optgroup'
import createOption from './create-option'

const createSelect = (): HTMLSelectElement => {
  const select = create({ tag: 'select' }) as HTMLSelectElement
  const components = parseComponents()
  if (components === null) return select

  const open = create({ tag: 'option', attrs: { value: '' }, text: 'Select a component' })
  select.appendChild(open)

  const categories = Object.keys(components).filter(category => category !== 'Uncategorized')
  const groups = categories.map(category => createOptGroup(category, components[category]))
  for (const group of groups) select.appendChild(group)

  const uncategorized = components.Uncategorized ?? {}
  const uncategorizedOptions = Object.keys(uncategorized).map(component => createOption(component, uncategorized[component]))
  for (const option of uncategorizedOptions) select.appendChild(option)

  return select
}

export default createSelect
