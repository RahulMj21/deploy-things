import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

export const UploadSchema = z.object({
  repoUrl: z.string().url(),
});

export type TUploadInput = z.infer<typeof UploadSchema>;

export const UploadJSONSchema = {
  body: zodToJsonSchema(UploadSchema, "UploadSchema"),
};
