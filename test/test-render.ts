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
          totalScore: 249,
          totalSymptomIndex: 2.77,
          positiveItemCount: 80,
          positiveSymptomDistressIndex: 2.99,
          factorScores: {
            somatization: 28,
            obsessiveCompulsive: 29,
            interpersonalSensitivity: 28,
            depression: 44,
            anxiety: 26,
            hostility: 28,
            phobicAnxiety: 28,
            paranoidIdeation: 28,
            psychoticism: 28,
            additionalItems: 14,
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
