import { type SchemaTypeDefinition } from 'sanity'
import { page } from './page'

export const schemaTypes: SchemaTypeDefinition[] = [page]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
