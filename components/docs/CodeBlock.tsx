interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = "bash", filename }: CodeBlockProps) {
  return (
    <div className="relative">
      {filename && (
        <div className="absolute top-0 right-0 px-3 py-1 text-xs text-muted-foreground bg-muted rounded-bl">
          {filename}
        </div>
      )}
      <pre className={`language-${language}`}>
        <code>{code}</code>
      </pre>
    </div>
  )
}