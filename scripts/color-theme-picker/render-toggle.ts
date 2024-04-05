import { create } from 'unobtrusive-dom'

const renderToggle = (): HTMLElement => {
  const svg = create({ tag: 'svg', attrs: { width: '24', height: '24', viewBox: '0 0 24 24' } })
  const moonMaskId = 'color-theme-picker-moon-mask'
  const moonMask = create({ tag: 'mask', classes: ['moon'], attrs: { id: moonMaskId } })
  moonMask.appendChild(create({ tag: 'rect', attrs: { x: '0', y: '0', height: '100%', width: '100%' } }))
  moonMask.appendChild(create({ tag: 'circle', attrs: { cx: '24', cy: '10', r: '6' } }))
  svg.appendChild(moonMask)

  svg.appendChild(create({
    tag: 'circle',
    classes: ['sun'],
    attrs: {
      cx: '12',
      cy: '12',
      r: '6',
      mask: `url(#${moonMaskId})`,
      fill: 'currentColor'
    }
  }))

  const sunbeamCoords = [
    [12, 1, 12, 3],
    [12, 21, 12, 23],
    [4.22, 4.22, 5.64, 5.64],
    [18.36, 18.36, 19.78, 19.78],
    [1, 12, 3, 12],
    [21, 12, 23, 12],
    [4.22, 19.78, 5.64, 18.36],
    [18.36, 5.64, 19.78, 4.22]
  ]
  const sunbeamsGroup = create({ tag: 'g', classes: ['sunbeams'], attrs: { stroke: 'currentColor' } })
  for (const c of sunbeamCoords) {
    sunbeamsGroup.appendChild(create({
      tag: 'line',
      attrs: {
        x1: c[0].toString(),
        y1: c[1].toString(),
        x2: c[2].toString(),
        y2: c[3].toString()
      }
    }))
  }
  svg.appendChild(sunbeamsGroup)

  return svg
}

export default renderToggle
