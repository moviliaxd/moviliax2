'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\sanity\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './studio-moviliax/env'
import {schema} from './studio-moviliax/schemaTypes'
import {structure} from './studio-moviliax/structure'

export default defineConfig({
  basePath: '/studio-moviliax',
  projectId: 'j66pc035',
  dataset: 'production',
  apiVersion,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
