import { z } from "zod";

export const favoriteListSchema = z.array(
  z.object({
    id: z.string(),
    skill: z.string(),
  }),
);

export type favoriteListType = z.infer<typeof favoriteListSchema>;
