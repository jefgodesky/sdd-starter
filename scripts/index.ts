import selector from './selector'
import setScrollbarWidth from './set-scrollbar-width'

setScrollbarWidth()

interface ModuleConfig {
  elems: Element[] | null
  name: string
}

const modules: ModuleConfig[] = [
  { elems: selector('#component-navigator'), name: 'component-navigator' },
  { elems: selector('textarea[maxlength]'), name: 'character-count' },
  { elems: selector('table:not(.card)'), name: 'responsive-table' },
  { elems: selector('.color-theme-picker'), name: 'color-theme-picker' }
]

const loadModules = async (configs: ModuleConfig[]): Promise<void> => {
  for (const { elems, name } of configs) {
    if (elems === null) continue
    const module = await import(`./${name}/index`)
    await module.default(elems)
  }
}

void loadModules(modules)
