import { create } from 'unobtrusive-dom'

const createOption = (id: string, name: string): HTMLOptionElement => (
  create({
    tag: 'option',
    attrs: { value: id },
    text: name
  }) as HTMLOptionElement
)

export default createOption
