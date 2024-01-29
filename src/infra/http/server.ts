import "source-map-support/register"
import "dotenv/config"
import { app } from "./app"
import { fastifyConfig } from "../../config"

export async function start() {
  const PORT = process.env.PORT ?? 8080
  const HOST = process.env.HOST ?? '0.0.0.0'

  try {
    const server = await app(fastifyConfig)
    const address = await server.listen({ port: +PORT, host: HOST })

    /* Print all routes */
    server.blipp()

    console.log(`Server up 'n running - ${address}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()
