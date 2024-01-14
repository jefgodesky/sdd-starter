const setScrollbarWidth = (): void => {
  const width = window.innerWidth - document.documentElement.clientWidth
  const expr = `${width}px`
  document.documentElement.style.setProperty('--scrollbar-width', expr)
}

export default setScrollbarWidth
