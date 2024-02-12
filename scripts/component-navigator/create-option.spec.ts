import createOption from './create-option'

describe('createOption', () => {
  it('creates an option', () => {
    const actual = createOption('test', 'Test Component')
    expect(actual).toBeInstanceOf(HTMLOptionElement)
  })

  it('sets the option value', () => {
    const actual = createOption('test', 'Test Component')
    expect(actual.value).toEqual('test')
  })

  it('displays the name', () => {
    const actual = createOption('test', 'Test Component')
    expect(actual.innerHTML).toEqual('Test Component')
  })
})
