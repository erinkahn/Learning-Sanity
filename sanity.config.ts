import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'sanity test project',

  projectId: 'h7i0s7ln',
  dataset: 'test',

  plugins: [structureTool({
   structure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
