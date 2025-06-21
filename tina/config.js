import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: null, // Dato che non usiamo il servizio cloud, questi valori rimangono null
  token: null,    //
  build: {
    outputFolder: "admin",
    publicFolder: "_site",
  },
  media: {
    tina: {
      mediaRoot: "src/img",
      publicFolder: "src",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "src/posts", // Il percorso dove si trovano i tuoi file .md dei post
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: 'string',
            name: 'layout',
            label: 'Layout',
            required: true,
            options: ['post.njk'] // Assicuriamoci che il layout sia sempre quello corretto
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            initialValue: 'post' // Manteniamo il tag di default
          }
        ],
      },
    ],
  },
});