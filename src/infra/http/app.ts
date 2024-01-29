import fastifyCors from "@fastify/cors"
import fastifyHelmet from "@fastify/helmet"
import fastifySwagger from "@fastify/swagger"
import fastify, { FastifyServerOptions } from "fastify"
import fastifyBlipp from "fastify-blipp"
import routes from "../routes"

export function app(FASTIFY_CONFIG: FastifyServerOptions) {
  const app = fastify(FASTIFY_CONFIG)

  /* Plugins */
  app.register(fastifyBlipp)
  app.register(fastifyCors)
  app.register(fastifyHelmet)
  app.register(fastifySwagger)

  /* Routes */
  app.register(routes)

  return app
}
