import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";

export default async (server: FastifyInstance, _opts: FastifyPluginOptions) => {
  server.route({
    method: "GET",
    url: "/health",
    handler: (_req: FastifyRequest, res: FastifyReply) =>
      res.type("application/JSON").code(200).send("OK"),
  });
};
