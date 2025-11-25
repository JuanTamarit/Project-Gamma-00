import { defineField, defineType } from 'sanity'

// 1. Bloque de Información del Proyecto
export const projectInfo = defineType({
  name: 'projectInfo',
  title: 'Información del Proyecto',
  type: 'object',
  fields: [
    defineField({
      name: 'role',
      title: 'Rol',
      type: 'string',
      description: 'Ej: Diseñador gráfico, Desarrollador web, UX/UI Designer',
    }),
    defineField({
      name: 'typology',
      title: 'Tipología',
      type: 'string',
      description: 'Ej: Identidad, Web, App móvil, Campaña',
    }),
    defineField({
      name: 'technologies',
      title: 'Tecnologías',
      type: 'string',
      description: 'Ej: React, SCSS, Figma. Si no aplica: </Empty>',
    }),
    defineField({
      name: 'tools',
      title: 'Herramientas',
      type: 'string',
      description: 'Ej: Adobe Illustrator, VS Code',
    }),
    defineField({
      name: 'agency',
      title: 'Agencia/Freelance',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'Cliente',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Año',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Enlace de Proyecto (URL)',
      type: 'url',
      description: 'URL del proyecto desplegado. Si no aplica: </Empty>',
    }),
  ],
})

// 2. Bloques de Contenido Reutilizables

export const projectTextBlock = defineType({
  name: 'projectTextBlock',
  title: 'Bloque de Texto y Concepto',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título (H4)',
      type: 'string',
      description: 'Ej: Concepto',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo (H5)',
      type: 'string',
      description: 'Ej: La música como juego',
    }),
    defineField({
      name: 'description',
      title: 'Descripción (Párrafo principal)',
      type: 'text',
      rows: 5,
    }),
  ],
})

export const projectMediaBlock = defineType({
  name: 'projectMediaBlock',
  title: 'Bloque de Media',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Tipo de Media',
      type: 'string',
      options: {
        list: [
          { title: 'Imagen', value: 'image' },
          { title: 'Video (URL)', value: 'video' },
        ],
      },
      initialValue: 'image',
    }),
    defineField({
      name: 'fileSrc',
      title: 'Archivo (Imagen/URL de Video)',
      type: 'string',
      description: 'Ruta local (ej: /img/jazzing1.jpg) o URL externa de video.',
    }),
    defineField({
      name: 'caption',
      title: 'Subtítulo de la Imagen/Media',
      type: 'string',
      description: 'Texto que se muestra debajo de la imagen (caption)',
    }),
  ],
})

// 3. Documento Principal 'Project'
export default defineType({
  name: 'project',
  title: 'Proyecto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Ej: Jazzing Festival',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Identificador único usado en la URL. Ej: /project/jazzing-festival',
    }),
    defineField({
      name: 'number',
      title: 'Número del Proyecto',
      type: 'string',
      validation: (Rule) => Rule.required().max(5),
      description: 'Ej: 01, 02, etc. (Usado como elemento de diseño)',
    }),
    defineField({
      name: 'intro',
      title: 'Introducción (Párrafo H5)',
      type: 'text',
      rows: 3,
      description: 'La descripción corta que va justo debajo del título.',
    }),
    defineField({
      name: 'info',
      title: 'Datos Clave del Proyecto',
      type: 'projectInfo',
      description: 'Datos detallados como Rol, Cliente y Año.',
    }),
    defineField({
      name: 'content',
      title: 'Contenido Principal (Bloques)',
      type: 'array',
      of: [
        { type: 'projectTextBlock' },
        { type: 'projectMediaBlock' },
      ],
      description: 'Añade y ordena los bloques de contenido (Texto o Media) para formar la historia del proyecto.',
    }),
  ],
})
