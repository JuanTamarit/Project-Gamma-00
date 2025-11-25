// portafolio-cms/schemas/index.ts

import { type SchemaTypeDefinition } from 'sanity'

// Importa el documento principal y los subtipos desde project.ts
import project, {
  projectInfo,
  projectTextBlock,
  projectMediaBlock,
} from './project'

// Exporta todos los tipos de contenido que Sanity debe usar
export const schemaTypes: SchemaTypeDefinition[] = [
  project,
  projectInfo,
  projectTextBlock,
  projectMediaBlock,
]
