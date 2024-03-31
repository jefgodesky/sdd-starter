import { create, addClass, removeClass } from 'unobtrusive-dom'

const getCharacterCountStatus = (textarea: HTMLElement): { text: string, error: boolean } => {
  if (!(textarea instanceof HTMLTextAreaElement)) return { text: 'Not a textarea', error: true }
  const max: number = parseInt(textarea.getAttribute('maxlength') ?? '0')
  const curr: number = textarea.value.length ?? 0
  const counterStatus = `${curr}/${max} characters`
  const counterRemainder = curr > max
    ? `${curr - max} over`
    : `${max - curr} remaining`
  return {
    text: `${counterStatus} (${counterRemainder})`,
    error: curr > max
  }
}

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
export { getCharacterCountStatus }
