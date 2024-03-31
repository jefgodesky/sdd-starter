import { create, hasClass } from 'unobtrusive-dom'
import selector from '../selector'
import initCharacterCount, { getCharacterCountStatus } from './index.js'

describe('getCharacterCountText', () => {
  it('gets the text when the textarea is empty', () => {
    const textarea = create({ tag: 'textarea', attrs: { maxlength: '25' } })
    const { text } = getCharacterCountStatus(textarea)
    expect(text).toBe('0/25 characters (25 remaining)')
  })

  it('gets the text when the textarea is not empty', () => {
    const textarea = create({ tag: 'textarea', attrs: { maxlength: '25' } }) as HTMLTextAreaElement
    textarea.value = 'Hello, world!'
    const { text } = getCharacterCountStatus(textarea)
    expect(text).toBe('13/25 characters (12 remaining)')
  })

  it('gets the text when the textarea is over the limit', () => {
    const textarea = create({ tag: 'textarea', attrs: { maxlength: '10' } }) as HTMLTextAreaElement
    textarea.value = 'Hello, world!'
    const { text } = getCharacterCountStatus(textarea)
    expect(text).toBe('13/10 characters (3 over)')
  })

  it('has no error when under the limit', () => {
    const textarea = create({ tag: 'textarea', attrs: { maxlength: '10' } }) as HTMLTextAreaElement
    const { error } = getCharacterCountStatus(textarea)
    expect(error).toEqual(false)
  })

  it('has no error when at the limit', () => {
    const textarea = create({ tag: 'textarea', attrs: { maxlength: '13' } }) as HTMLTextAreaElement
    textarea.value = 'Hello, world!'
    const { error } = getCharacterCountStatus(textarea)
    expect(error).toEqual(false)
  })

  it('returns an error when over the limit', () => {
    const textarea = create({ tag: 'textarea', attrs: { maxlength: '5' } }) as HTMLTextAreaElement
    textarea.value = 'Hello, world!'
    const { error } = getCharacterCountStatus(textarea)
    expect(error).toEqual(true)
  })
})

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
