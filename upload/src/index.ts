import buildServer from "@/fastify";
import { HOST, PORT } from "@/config";

const main = async () => {
  const fastify = buildServer();

  try {
    await fastify.listen({ host: HOST, port: Number(PORT) });
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

main();
