import { hasClass } from 'unobtrusive-dom'
import selector from '../selector'
import initCharacterCount from './index.js'

describe('initCharacterCount', () => {
  let textarea: HTMLTextAreaElement | null = null
  let counter: HTMLSpanElement | null = null

  const input = (textarea: HTMLTextAreaElement | null, text: string): void => {
    if (textarea === null) return
    textarea.value = text
    textarea.dispatchEvent(new Event('input'))
  }

  beforeEach(() => {
    document.body.innerHTML = '<textarea maxlength="25"></textarea>'
    const elems = selector('textarea[maxlength]')
    initCharacterCount(elems)
    textarea = document.body.querySelector('textarea') as HTMLTextAreaElement
    counter = document.body.querySelector('textarea + p.character-count')
  })

  it('initializes character counter', () => {
    expect(counter?.innerHTML).toEqual('0/25 characters (25 remaining)')
  })

  it('updates character counter', () => {
    input(textarea, 'Hello, world!')
    expect(counter?.innerHTML).toEqual('13/25 characters (12 remaining)')
  })

  it('does not set error when below maximum', () => {
    input(textarea, 'Hello, world!')
    expect(hasClass(textarea as HTMLTextAreaElement, 'error')).toEqual(false)
    expect(hasClass(counter as HTMLElement, 'error')).toEqual(false)
  })

  it('sets error when above maximum', () => {
    input(textarea, 'Here is some text that exceeds the maximum length of 25 characters.')
    expect(hasClass(textarea as HTMLTextAreaElement, 'error')).toEqual(true)
    expect(hasClass(counter as HTMLElement, 'error')).toEqual(true)
  })

  it('removes error when back below maximum', () => {
    input(textarea, 'Here is some text that exceeds the maximum length of 25 characters.')
    expect(hasClass(textarea as HTMLTextAreaElement, 'error')).toEqual(true)
    expect(hasClass(counter as HTMLElement, 'error')).toEqual(true)

    input(textarea, 'Back below limit.')
    expect(hasClass(textarea as HTMLTextAreaElement, 'error')).toEqual(false)
    expect(hasClass(counter as HTMLElement, 'error')).toEqual(false)
  })
})
