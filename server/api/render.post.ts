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
    console.log("config.app.baseURL:", config.app.baseURL);
    const pageContent = await $fetch(`/${body.template}`, {
      baseURL: config.app.baseURL,
      params: body.data,
    });

    // 构建完整的HTML文档
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>渲染结果</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    ${pageContent}
</body>
</html>`;

    return {
      statusCode: 200,
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
