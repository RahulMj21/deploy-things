import { DEPLOY_SUCCESS_QUEUE, UPLOAD_ROUTING_KEY } from "@/config";
import QueueService from "@/services/queue.service";
import UploadService from "@/services/upload.service";
import { FastifyReply, FastifyRequest } from "fastify";

class UploadController {
  private service: UploadService;
  private queueService: QueueService;

  constructor() {
    this.service = new UploadService();
    this.queueService = new QueueService();

    this.queueService.subscribeMessage(
      UPLOAD_ROUTING_KEY,
      DEPLOY_SUCCESS_QUEUE,
    );
  }

  upload = async (_request: FastifyRequest, reply: FastifyReply) => {
    return reply.code(200).serialize({ status: "OK" });
  };
}

export default UploadController;
