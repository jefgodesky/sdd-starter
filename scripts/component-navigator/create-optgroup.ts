import { create } from 'unobtrusive-dom'
import { ComponentCategory } from './parse-components'
import createOption from './create-option'

const createOptGroup = (name: string, group: ComponentCategory): HTMLOptGroupElement => {
  const optgroup = create({ tag: 'optgroup', attrs: { label: name } }) as HTMLOptGroupElement
  for (const key in group) {
    const option = createOption(key, group[key])
    optgroup.appendChild(option)
  }
  return optgroup
}

export default createOptGroup
