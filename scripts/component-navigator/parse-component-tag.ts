const parseComponentTag = (elem: HTMLElement): { id: string, name: string, category: string | null } => (
  {
    id: elem.getAttribute('id') ?? '',
    name: elem.querySelector('h2')?.innerHTML ?? '',
    category: elem.getAttribute('data-component-category') ?? null
  }
)

export default parseComponentTag
