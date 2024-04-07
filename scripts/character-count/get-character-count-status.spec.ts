import { create } from 'unobtrusive-dom'
import getCharacterCountStatus from './get-character-count-status'

describe('getCharacterCountStatus', () => {
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
