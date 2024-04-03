import debounce from 'debounce'
import { addClass, removeClass } from 'unobtrusive-dom'
import tokens from '../../tokens.json'
import setDataLabels from './set-data-labels'

const PX_PER_REM = tokens.numbers['default-px-per-rem'].$value.toString()
const DEFAULT_BREAKPOINT = parseInt(tokens.breakpoints.desktop.$value)

const updateTable = (table: HTMLTableElement): void => {
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize ?? PX_PER_REM)
  const rem = parseInt(getComputedStyle(table).getPropertyValue('--breakpoint')) ?? DEFAULT_BREAKPOINT
  const fn = window.innerWidth < rem * fontSize ? addClass : removeClass
  fn(table, 'card')
}

const initResponsiveTables = (tables: HTMLTableElement[]): void => {
  for (const table of tables) {
    if (table instanceof HTMLTableElement) setDataLabels(table)
    updateTable(table)
    const debouncedUpdate = debounce(() => updateTable(table), 250)
    window.addEventListener('resize', debouncedUpdate)
  }
}

export default initResponsiveTables
