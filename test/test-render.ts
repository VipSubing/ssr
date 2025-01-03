const testRender = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/render", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    });

    const result = await response.json();
    console.log("渲染结果:", result);
  } catch (error) {
    console.error("渲染失败:", error);
  }
};

testRender();
