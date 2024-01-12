import fastify from "fastify";
import { appRoutes } from "@/http/routes";
import { ZodError } from "zod";
import { env } from "./env";

export const app = fastify();

appRoutes(app);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error!", reasons: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: Here we should log to an external tool like DataDog/Sentry/NewRelic/Sentry (Observability)
  }

  return reply.status(500).send({ message: "Internal error server!" });
});
