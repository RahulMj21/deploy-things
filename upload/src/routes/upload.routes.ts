import UploadController from "@/controllers/upload.coltroller";
import { FastifyInstance } from "fastify";

const uploadRoutes = async (fastify: FastifyInstance) => {
  const uploadController = new UploadController();

  fastify.post("/", uploadController.upload);
};

export default uploadRoutes;
