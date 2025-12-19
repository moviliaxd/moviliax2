// Schema de ejemplo para autores
// Copia este contenido al archivo schemas/author.ts en tu proyecto de Sanity Studio

export default {
  name: 'author',
  title: 'Autores',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Biografía',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'role',
      title: 'Rol',
      type: 'string',
      options: {
        list: [
          { title: 'Editor', value: 'editor' },
          { title: 'Colaborador', value: 'contributor' },
          { title: 'Guest Writer', value: 'guest' },
        ],
      },
    },
    {
      name: 'social',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
