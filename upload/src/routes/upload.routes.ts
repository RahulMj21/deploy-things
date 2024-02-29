import UploadController from "@/controllers/upload.controller";
import { UploadJSONSchema } from "@/schemas/upload.schema";
import { FastifyInstance } from "fastify";

const uploadRoutes = async (fastify: FastifyInstance) => {
  const uploadController = new UploadController();

  fastify.post("/", { schema: UploadJSONSchema }, uploadController.upload);
};

export default uploadRoutes;
