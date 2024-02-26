import fastifyCors from "@fastify/cors";
import { WEB_URL } from "@/config";
import Fastify from "fastify";
import uploadRoutes from "@/routes/upload.routes";

const buildServer = () => {
  const fastify = Fastify({ logger: true });

  // register plugins
  fastify.register(fastifyCors, {
    origin: [WEB_URL],
    methods: ["GET", "POST", "PUT"],
  });

  // register routes
  fastify.register(uploadRoutes, { prefix: "/api/upload" });

  return fastify;
};

export default buildServer;
