// Schema de ejemplo para categorías
// Copia este contenido al archivo schemas/category.ts en tu proyecto de Sanity Studio

export default {
  name: 'category',
  title: 'Categorías',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'Cian Eléctrico', value: '#00E0FF' },
          { title: 'Violeta Tech', value: '#6B46FF' },
          { title: 'Verde', value: '#10B981' },
          { title: 'Amarillo', value: '#F59E0B' },
          { title: 'Rojo', value: '#EF4444' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
