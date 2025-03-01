export interface CodeBlock {
  code: string
  language?: string
  filename?: string
}

export interface DocSection {
  id: string
  title: string
  description?: string
}