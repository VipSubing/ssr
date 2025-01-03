import { defineEventHandler, createError } from "h3";
import { useRuntimeConfig } from "#imports";
import { logger } from "~/composables/useLogger";

export default defineEventHandler(async (event) => {
  console.log("API endpoint hit");

  logger.debug({ event }, "Received render request");
  try {
    const body = await readBody(event);
    logger.info({ body }, "Received request body");

    if (!body.template || !body.data) {
      throw new Error("Missing required fields: template and data");
    }

    const html = `<div>Test render - template: ${body.template}</div>`;

    return {
      html,
      status: "success",
    };
  } catch (error) {
    logger.error({ error }, "Error processing render request");
    throw createError({
      statusCode: 400,
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
});
