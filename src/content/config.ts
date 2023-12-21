import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    // You can also transform a date string (e.g. "2022-07-08") to a Date object
    // publishDate: z.string().transform((str) => new Date(str)),
    // Advanced: Validate that the string is also an email
    updatedDate: z.coerce.date().optional(),
    // heroImage: z.string().optional(),
    heroImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    // author: z.string().default("Eefje").optional(),
    // authorContact: z.string().email().optional(),
    // tags: z.array(z.string()).optional(),
    // An optional frontmatter property. Very common!
    footnote: z.string().optional(),
    // In frontmatter, dates written without quotes around them are interpreted as Date objects
  }),
});

export const collections = { blog };
