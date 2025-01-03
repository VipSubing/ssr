import { defineEventHandler } from "h3";
import { logger } from "~/composables/useLogger";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    logger.info("Received render request with body:", body);

    // 这里处理渲染逻辑
    // 可以根据body参数动态生成HTML

    return {
      html: `<div>渲染的HTML内容 - ${JSON.stringify(body)}</div>`,
    };
  } catch (error) {
    logger.error("Error processing render request:", error);
    throw error;
  }
});
