import fastifyCors from "@fastify/cors";
import { WEB_URL } from "@/config";
import Fastify from "fastify";

const buildServer = () => {
  const fastify = Fastify({ logger: true });

  // register plugins
  fastify.register(fastifyCors, {
    origin: [WEB_URL],
    methods: ["GET", "POST", "PUT"],
  });

  // register routes
  fastify.get("/", async () => ({ status: "OK", message: "all good!" }));

  return fastify;
};

export default buildServer;
