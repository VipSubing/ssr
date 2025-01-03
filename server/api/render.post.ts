import { defineEventHandler, createError, readBody } from "h3";
import { useRuntimeConfig } from "#imports";
import { log } from "console";

// 添加 base64 编码函数
const base64Encode = (obj: any) => {
  return btoa(JSON.stringify(obj));
};

export default defineEventHandler(async (event) => {
  console.log("API endpoint hit");
  try {
    const body = await readBody(event);
    if (!body.template || !body.data) {
      console.error("Invalid body structure:", body);
      throw new Error("Missing required fields: template and data");
    }

    const config = useRuntimeConfig();

    const pageContent = await $fetch(`/${body.template}`, {
      baseURL: config.app.baseURL,
      params: {
        data: base64Encode(body.data),
      },
    });

    // 构建完整的HTML文档
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
