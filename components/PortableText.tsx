import { PortableText as PT } from '@portabletext/react'

export function RichText({ value }: { value: any }) {
  return (
    <PT
      value={value}
      components={{
        block: {
          h1: ({ children }) => <h1>{children}</h1>,
          h2: ({ children }) => <h2>{children}</h2>,
          h3: ({ children }) => <h3>{children}</h3>,
          normal: ({ children }) => <p>{children}</p>,
        },
        marks: {
          strong: ({ children }) => <strong>{children}</strong>,
          em: ({ children }) => <em>{children}</em>,
          link: ({ children, value }) => (
            <a href={value.href} target="_blank" rel="noreferrer">
              {children}
            </a>
          ),
        },
      }}
    />
  )
}
