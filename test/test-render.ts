import fs from "fs/promises";
import path from "path";
import { exec } from "child_process";

const openInBrowser = (filePath: string) => {
  const command =
    process.platform === "win32"
      ? "start"
      : process.platform === "darwin"
      ? "open"
      : "xdg-open";

  exec(`${command} ${filePath}`);
};

const testRender = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/render", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        template: "result",
        data: {
          totalScore: 4,
          totalSymptomIndex: 2,
          positiveItemCount: 2,
          positiveSymptomDistressIndex: 2,
          factorScores: {
            somatization: 0.08333333333333333,
            obsessiveCompulsive: 0,
            interpersonalSensitivity: 0,
            depression: 0,
            anxiety: 0.3,
            hostility: 0,
            phobicAnxiety: 0,
            paranoidIdeation: 0,
            psychoticism: 0,
            additionalItems: 0,
          },
        },
      }),
    });

    const result = await response.json();
    if (result.statusCode === 200) {
      // 保存HTML到文件
      const outputPath = path.join(process.cwd(), "test/output.html");
      await fs.writeFile(outputPath, result.html);
      console.log(`渲染结果已保存到: ${outputPath}`);

      // 在浏览器中打开文件
      openInBrowser(outputPath);

      // 在控制台显示HTML内容
      console.log("\n渲染的HTML内容:");
      console.log(result.html);
    } else {
      console.error("渲染失败:", result.message);
    }
  } catch (error) {
    console.error("渲染失败:", error);
  }
};

testRender();
