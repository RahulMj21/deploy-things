// import { DEPLOY_SUCCESS_QUEUE, UPLOAD_ROUTING_KEY } from "@/config";
// import QueueService from "@/services/queue.service";
// import UploadService from "@/services/upload.service";
import { TUploadInput } from "@/schemas/upload.schema";
import { generateRandomId } from "@/utils";
import { FastifyReply, FastifyRequest } from "fastify";
import path from "path";
import simpleGit from "simple-git";

class UploadController {
  // private service: UploadService;
  // private queueService: QueueService;

  constructor() {
    // this.service = new UploadService();
    // this.queueService = new QueueService();
    // this.queueService.subscribeMessage(
    //   UPLOAD_ROUTING_KEY,
    //   DEPLOY_SUCCESS_QUEUE,
    // );
  }

  upload = async (
    request: FastifyRequest<{ Body: TUploadInput }>,
    reply: FastifyReply,
  ) => {
    try {
      const { repoUrl } = request.body;
      console.log({ repoUrl });
      const randomId = generateRandomId();

      const options = ["--depth", "1"];
      const callback = () => {
        console.log("DONE");
      };

      simpleGit()
        .outputHandler((_command, stdout, stderr) => {
          stdout.pipe(process.stdout);
          stderr.pipe(process.stderr);

          stdout.on("data", (data) => {
            console.log(data.toString("utf8"));
          });
        })
        .clone(repoUrl, `./output/${randomId}`, options, callback);

      return reply.code(200).serialize({ status: "OK", data: randomId });
    } catch (error) {
      return reply
        .code(500)
        .serialize({ status: "ERROR", message: JSON.stringify(error) });
    }
  };
}

export default UploadController;
