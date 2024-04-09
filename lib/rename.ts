import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import prompts, { PromptObject, Answers } from 'prompts'

const questions: PromptObject[] = [
  {
    type: 'text',
    name: 'full',
    message: 'Full Name: '
  },
  {
    type: 'text',
    name: 'short',
    message: 'Short Name:'
  }
]

const getDocs = (dir: string): string[] => {
  const files = readdirSync(dir, { withFileTypes: true })
  const html = []

  for (const file of files) {
    if (file.isDirectory()) {
      html.push(...getDocs(join(dir, file.name)))
    } else if (file.name.endsWith('.html')) {
      html.push(join(dir, file.name))
    }
  }

  return html
}

const escape = (html: string): string => {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

(async () => {
  console.clear()
  console.log(`
The SDD Starter template is called \x1b[1mAn SDD Design System\x1b[0m because it’s a
painfully generic starter template. This utility will quickly replace that
across the documentation of your new design system with the name you specify,
making this truly \x1b[1myour\x1b[0m design system.`)
  console.log(`
The \x1b[1mFull Name\x1b[0m is the full name of your design system (as you might expect). The
template’s full name is \x1b[1mAn SDD Design System\x1b[0m.`)
  console.log(`
The \x1b[1mShort Name\x1b[0m is the shorter version of your design system’s name. The
template’s short name is \x1b[1mSDD/DS\x1b[0m.`)
  console.log(`
So, what will your design system be?
`)
  const response: Answers<string> = await prompts(questions)

  const strings: { [key: string]: { old: RegExp, new: string } } = {
    title: {
      old: /<title>An SDD Design System<\/title>/gi,
      new: `<title>${response.full as string}</title>`
    },
    home: {
      old: /<a class="home" href="(.*)">SDD\/DS<\/a>/gi,
      new: `<a class="home" href="$1">${response.short as string}</a>`
    },
    heading: {
      old: /<h1>An SDD Design System<\/h1>/gi,
      new: `<h1>${response.full as string}</h1>`
    }
  }

  try {
    const docs = getDocs('./docs')
    for (const doc of docs) {
      let content = readFileSync(doc, { encoding: 'utf-8' })
      for (const key in strings) {
        content = content.replace(strings[key].old, strings[key].new)
        content = content.replace(new RegExp(escape(strings[key].old.source)), escape(strings[key].new))
      }
      writeFileSync(doc, content, { encoding: 'utf-8' })
    }
  } catch (err) {
    console.error(err)
  }
})().catch(err => {
  console.error(err)
})
