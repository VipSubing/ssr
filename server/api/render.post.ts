import { defineEventHandler, createError } from "h3";
import { useRuntimeConfig } from "#imports";
import { logger } from "~/composables/useLogger";

export default defineEventHandler(async (event) => {
  logger.debug("Received render request:", event);
  try {
    const body = await readBody(event);
    logger.info("Received render request with body:", body);

    if (!body.template || !body.data) {
      throw new Error("Missing required fields: template and data");
    }

    // const config = useRuntimeConfig();
    // const html = await $fetch(`/pages/${body.template}`, {
    //   baseURL: config.app.baseURL,
    //   params: body.data,
    // });
    const html =
      '<pre><span class="stack internal">at createError (./node_modules/h3/dist/index.mjs:78:15)</span>\n' +
      '<span class="stack">at Object.handler (./server/api/render.post.ts:26:1)</span>\n' +
      '<span class="stack internal">at process.processTicksAndRejections (node:internal/process/task_queues:105:5)</span>\n' +
      '<span class="stack internal">at async ./node_modules/h3/dist/index.mjs:1978:19</span>\n' +
      '<span class="stack internal">at async Object.callAsync (./node_modules/unctx/dist/index.mjs:72:16)</span>\n' +
      '<span class="stack internal">at async Server.toNodeHandle (./node_modules/h3/dist/index.mjs:2270:7)</span></pre>';
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
