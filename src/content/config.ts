// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const mentoringCollection = defineCollection({
    type: 'data', // v2.5.0 and later
    schema: z.object({
        className: z.string(),
        title: z.string(),
        month: z.string(),
        forText: z.string(),
        details: z.array(z.string()),
    }),
});

const translationCollection = defineCollection({
    type: 'data', // v2.5.0 and later
    schema: z.object({
        className: z.string(),
        title: z.string(),
        month: z.string(),
        forText: z.string(),
        details: z.array(z.string()),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    mentoring: mentoringCollection,
    translation: translationCollection,
};
