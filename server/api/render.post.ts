import { defineEventHandler, createError, readBody } from "h3";
import { useRuntimeConfig } from "#imports";

export default defineEventHandler(async (event) => {
  console.log("API endpoint hit");
  try {
    const body = await readBody(event);
    console.log("Request body:", body);
    if (!body.template || !body.data) {
      console.error("Invalid body structure:", body);
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
    console.error("Error processing render request:", error);
    throw createError({
      statusCode: 400,
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
});
