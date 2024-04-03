const setDataLabels = (table: HTMLTableElement): void => {
  const head = table.getElementsByTagName('thead')[0]
  if (head === undefined) return
  const headers = Array.from(head.getElementsByTagName('th'))
  const headings = headers.map(th => th.innerHTML)

  const body = table.getElementsByTagName('tbody')[0]
  if (body === undefined) return
  const rows = Array.from(body.getElementsByTagName('tr'))
  for (const row of rows) {
    const cells = Array.from(row.getElementsByTagName('td'))
    if (cells.length !== headings.length) continue
    for (let i = 0; i < headings.length; i++) {
      cells[i].setAttribute('data-label', headings[i])
    }
  }
}

export default setDataLabels
