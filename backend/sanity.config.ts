import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';

export default defineConfig({
  name: 'nickspaargarennl',
  title: 'Nick Spaargaren',
  projectId: '5mfdvpuc',
  dataset: 'production',
  plugins: [
    deskTool(),
    visionTool()
  ],
  schema: {
    types: schemas,
  },
});
