import { readFileSync, writeFileSync } from 'fs'
import hljs from 'highlight.js'
import pretty from 'pretty'
import { JSDOM } from 'jsdom'

const getDetails = (component: Element, document: Document): Element => {
  let details = component.querySelector('details')
  if (details !== null) return details
  const example = component.querySelector('.example')
  details = document.createElement('details')
  details.innerHTML = '<summary>Markup</summary>'
  details.outerHTML = pretty(details.outerHTML)
  if (example !== null) example.insertAdjacentElement('afterend', details)
  return details
}

const getCodeBlock = (details: Element, document: Document): Element => {
  let codeBlock = details.querySelector('details .block')
  if (codeBlock !== null) return codeBlock
  codeBlock = document.createElement('code')
  codeBlock.setAttribute('class', 'block')
  details.appendChild(codeBlock)
  return codeBlock
}

const autodoc = (orig: string): string => {
  const dom = new JSDOM(orig)
  const doc = dom.window.document

  const components = doc.querySelectorAll('.component')
  for (const component of components) {
    const example = component.querySelector('.example')
    if (example === null) continue
    const codeBlock = getCodeBlock(getDetails(component, doc), doc)
    const markup = (codeBlock?.textContent ?? '').trim().length > 0
      ? codeBlock?.textContent ?? ''
      : example.innerHTML
    codeBlock.innerHTML = hljs.highlight(markup, { language: 'html' }).value
  }

  return doc.documentElement.outerHTML
}

const thisFile = process.cwd() + '/lib/autodoc.ts'
if (process.argv[1] === thisFile) {
  const file = process.cwd() + '/docs/components.html'
  const src = readFileSync(file, { encoding: 'utf8' })
  const docked = autodoc(src)
  writeFileSync(file, docked, { encoding: 'utf8' })
}

export default autodoc
