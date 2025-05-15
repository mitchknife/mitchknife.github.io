import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateRange: z.string(),
    tech: z.array(z.string()),
  }),
});

export const collections = { experience };
