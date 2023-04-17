import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Techy Blox',
  projectId: 'u0pkzdiq',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,

  },
  studio: {
    components: { 
      
      // navbar: StudioNavbar,
    }
  },
  theme: myTheme
})
