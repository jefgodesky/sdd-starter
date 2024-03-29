import selector from './selector'
import setScrollbarWidth from './set-scrollbar-width'

setScrollbarWidth()

interface ModuleConfig {
  elems: Element[] | null
  name: string
}

const modules: ModuleConfig[] = [
  { elems: selector('code.block'), name: 'code' }
]

const loadModules = async (configs: ModuleConfig[]): Promise<void> => {
  for (const { elems, name } of configs) {
    if (elems === null) continue
    const module = await import(`./${name}/index`)
    await module.default(elems)
  }
}

void loadModules(modules)
