import selector from '../selector'
import parseComponentTag from './parse-component-tag'

interface ComponentCategory {
  [id: string]: string
}

interface ComponentMap {
  [category: string]: ComponentCategory
}

const parseComponents = (): ComponentMap | null => {
  const components = selector('.component')
  if (components === null) return null

  const map: ComponentMap = {}
  for (const component of components) {
    const { id, name, category } = parseComponentTag(component as HTMLElement)
    const cat = category ?? 'Uncategorized'
    if (map[cat] === undefined) map[cat] = {}
    map[cat][id] = name
  }

  return map
}

export default parseComponents
