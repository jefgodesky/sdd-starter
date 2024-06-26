import { create, addClass, removeClass } from 'unobtrusive-dom'
import getCharacterCountStatus from './get-character-count-status'

const initCharacterCount = (elems: Element[] | null): void => {
  if (elems === null) return
  for (const elem of elems) {
    if (!(elem instanceof HTMLTextAreaElement)) continue
    const { text, error } = getCharacterCountStatus(elem)
    const classes = ['character-count', error ? 'error' : null]
    const counter = create({ tag: 'p', text, classes })
    elem.insertAdjacentElement('afterend', counter)

    elem.addEventListener('input', event => {
      const { text, error } = getCharacterCountStatus(elem)
      counter.innerHTML = text
      const fn = error ? addClass : removeClass
      fn(elem, 'error')
      fn(counter, 'error')
    })
  }
}

export default initCharacterCount
