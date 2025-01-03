import { defineEventHandler, createError } from "h3";
import { useRuntimeConfig } from "#imports";
import { logger } from "~/composables/useLogger";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    logger.info("Received render request with body:", body);

    if (!body.template || !body.data) {
      throw new Error("Missing required fields: template and data");
    }

    const config = useRuntimeConfig();
    const html = await $fetch(`/pages/${body.template}`, {
      baseURL: config.app.baseURL,
      params: body.data,
    });

    return {
      html,
      status: "success",
    };
  } catch (error) {
    logger.error("Error processing render request:", error);
    throw createError({
      statusCode: 400,
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
});
