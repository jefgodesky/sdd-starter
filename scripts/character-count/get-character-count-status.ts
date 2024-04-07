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

export default getCharacterCountStatus
