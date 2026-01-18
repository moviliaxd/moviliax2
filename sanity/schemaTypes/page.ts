import { defineType, defineField } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Páginas',
  type: 'document',

  fields: [
    // 📝 TÍTULO
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // 🔗 SLUG
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // 📄 CONTENIDO
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    // 👀 PREVIEW AVANZADO (SEGUR0, SIN "no query")
    defineField({
      name: 'preview',
      title: 'Vista previa',
      type: 'url',
      readOnly: true,
      description: 'Abrir esta página en el sitio (modo preview)',
      initialValue: (_: any, context: any) => {
        const slug = context.document?.slug?.current

        // ⚠️ Si NO hay slug, NO genera URL (evita errores)
        if (!slug) return ''

        return `http://localhost:3000/api/preview?slug=${slug}`
      },
    }),
  ],

  // 🧭 CÓMO SE VE EN LA LISTA DEL STUDIO
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title: title || 'Sin título',
        subtitle: slug ? `/${slug}` : 'Sin slug',
      }
    },
  },
})
