import UploadService from "@/services/upload.service";
import { FastifyReply, FastifyRequest } from "fastify";

class UploadController {
  private service: UploadService;

  constructor() {
    this.service = new UploadService();
  }

  upload = async (_request: FastifyRequest, reply: FastifyReply) => {
    return reply.code(200).serialize({ status: "OK" });
  };
}

export default UploadController;
