import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Cliente principal con CDN para producción
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

// Cliente para preview/draft mode (sin CDN, con token)
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_PREVIEW_TOKEN,
  perspective: 'previewDrafts',
})

// Helper para obtener el cliente correcto según el modo
export const getClient = (preview = false) => (preview ? previewClient : client)
