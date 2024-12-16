import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'

import schemas from './schemas/schema';

export default defineConfig({
  name: 'nickspaargarennl',
  title: 'Nick Spaargaren',
  projectId: '5mfdvpuc',
  dataset: 'production',
  plugins: [
    structureTool(),
  ],
  schema: {
    types: schemas,
  },
});
