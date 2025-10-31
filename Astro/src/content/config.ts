import {defineCollection, z} from "astro:content";

const articles = defineCollection({

    schema: z.object({

        title: z.string(),
        category: z.string(),
        date: z.string(),

    })

})

export const collections = {
    articles
};