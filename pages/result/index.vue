<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-900">
        测试结果
      </h1>

      <!-- 总评估结果报告 -->
      <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 class="text-xl leading-6 font-semibold text-gray-900">
            总评估结果报告
          </h2>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  统计项目
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  得分结果
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  参考结果
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  数值范围
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in summaryResults" :key="index">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {{ item.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ item.score }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div class="flex flex-wrap gap-2" v-if="item.result">
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
                    >
                      {{ item.result }}
                    </span>
                    <span
                      v-if="item.severity"
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      :class="getSeverityClass(item.severity)"
                    >
                      {{ item.severity }}
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ item.range }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-4 py-4 sm:px-6 bg-gray-50">
          <p class="text-sm text-gray-500">
            说明：当测试总分超过160分，或阳性项目数超过43项，需考虑筛选阳性，阳性即说明可能存在问题。由于量表只是辅助筛查工具，因此量表测试结果仅供参考。
          </p>
        </div>
      </div>

      <!-- 各项症状评估结果报告 -->
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 class="text-xl leading-6 font-semibold text-gray-900">
            各项症状评估结果报告
          </h2>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  因子
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  得分
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  平均分数
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  参考结果
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  数值范围
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="factor in factors" :key="factor.name">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {{ factor.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ factor.score }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ factor.average }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div class="flex flex-wrap gap-2" v-if="factor.result">
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
                    >
                      有症状
                    </span>
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      :class="getSeverityClass(factor.severity)"
                    >
                      {{ factor.severity }}
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ factor.range }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-4 py-4 sm:px-6 bg-gray-50">
          <p class="text-sm text-gray-500">
            说明：由于量表只是辅助筛查工具，因此量表测试结果仅供参考。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TestResult } from "@/types";
// 使用 useAsyncData 获取数据
const data = useRoute().query.data as string;
console.log("Received data:", data);
const decodedData = JSON.parse(atob(data)) as TestResult;
console.log("Decoded data:", decodedData);
// Update summary results based on decoded data
const summaryResults = [
  {
    name: "总分",
    score: decodedData.totalScore,
    result: decodedData.totalScore >= 160 ? "阳性症状" : undefined,
    range: "90~450",
  },
  {
    name: "总症状指数",
    score: decodedData.totalSymptomIndex,
    result: decodedData.totalSymptomIndex >= 2 ? "有症状" : undefined,
    severity: getSeverity(decodedData.totalSymptomIndex),
    range: "1~5",
  },
  {
    name: "阳性症状项目数",
    score: decodedData.positiveItemCount,
    result: decodedData.positiveItemCount >= 43 ? "阳性症状" : undefined,
    range: "0~90",
  },
  {
    name: "阳性症状均分",
    score: decodedData.positiveSymptomDistressIndex,
    range: "0~5",
  },
];

// Update factors based on decoded data
const factors = [
  {
    name: "躯体化",
    score: decodedData.factorScores.somatization,
    average: Number((decodedData.factorScores.somatization / 12).toFixed(2)),
    result:
      decodedData.factorScores.somatization / 12 >= 2 ? "有症状" : undefined,
    severity: getSeverity(decodedData.factorScores.somatization / 12),
    range: "12~60",
  },
  {
    name: "强迫症状",
    score: decodedData.factorScores.obsessiveCompulsive,
    average: Number(
      (decodedData.factorScores.obsessiveCompulsive / 10).toFixed(2)
    ),
    result:
      decodedData.factorScores.obsessiveCompulsive / 10 >= 2
        ? "有症状"
        : undefined,
    severity: getSeverity(decodedData.factorScores.obsessiveCompulsive / 10),
    range: "10~50",
  },
  {
    name: "人际敏感",
    score: decodedData.factorScores.interpersonalSensitivity,
    average: Number(
      (decodedData.factorScores.interpersonalSensitivity / 9).toFixed(2)
    ),
    result:
      decodedData.factorScores.interpersonalSensitivity / 9 >= 2
        ? "有症状"
        : undefined,
    severity: getSeverity(
      decodedData.factorScores.interpersonalSensitivity / 9
    ),
    range: "9~45",
  },
  {
    name: "抑郁",
    score: decodedData.factorScores.depression,
    average: Number((decodedData.factorScores.depression / 13).toFixed(2)),
    result:
      decodedData.factorScores.depression / 13 >= 2 ? "有症状" : undefined,
    severity: getSeverity(decodedData.factorScores.depression / 13),
    range: "13~65",
  },
  {
    name: "焦虑",
    score: decodedData.factorScores.anxiety,
    average: Number((decodedData.factorScores.anxiety / 10).toFixed(2)),
    result: decodedData.factorScores.anxiety / 10 >= 2 ? "有症状" : undefined,
    severity: getSeverity(decodedData.factorScores.anxiety / 10),
    range: "10~50",
  },
  {
    name: "敌对",
    score: decodedData.factorScores.hostility,
    average: Number((decodedData.factorScores.hostility / 6).toFixed(2)),
    result: decodedData.factorScores.hostility / 6 >= 2 ? "有症状" : undefined,
    severity: getSeverity(decodedData.factorScores.hostility / 6),
    range: "6~30",
  },
  {
    name: "恐怖",
    score: decodedData.factorScores.phobicAnxiety,
    average: Number((decodedData.factorScores.phobicAnxiety / 7).toFixed(2)),
    result:
      decodedData.factorScores.phobicAnxiety / 7 >= 2 ? "有症状" : undefined,
    severity: getSeverity(decodedData.factorScores.phobicAnxiety / 7),
    range: "7~35",
  },
  {
    name: "偏执",
    score: decodedData.factorScores.paranoidIdeation,
    average: Number((decodedData.factorScores.paranoidIdeation / 6).toFixed(2)),
    result:
      decodedData.factorScores.paranoidIdeation / 6 >= 2 ? "有症状" : undefined,
    severity: getSeverity(decodedData.factorScores.paranoidIdeation / 6),
    range: "6~30",
  },
  {
    name: "精神病性",
    score: decodedData.factorScores.psychoticism,
    average: Number((decodedData.factorScores.psychoticism / 10).toFixed(2)),
    result:
      decodedData.factorScores.psychoticism / 10 >= 2 ? "有症状" : undefined,
    severity: getSeverity(decodedData.factorScores.psychoticism / 10),
    range: "10~50",
  },
  {
    name: "其它",
    score: decodedData.factorScores.additionalItems,
    average: Number((decodedData.factorScores.additionalItems / 7).toFixed(2)),
    result:
      decodedData.factorScores.additionalItems / 7 >= 2 ? "有症状" : undefined,
    severity: getSeverity(decodedData.factorScores.additionalItems / 7),
    range: "7~35",
  },
];

function getSeverity(score: number) {
  if (score >= 4) {
    return "重度";
  } else if (score >= 3) {
    return "中度";
  } else if (score >= 1) {
    return "轻度";
  } else {
    return "无症状";
  }
}

function getSeverityClass(severity: string) {
  switch (severity) {
    case "重度":
      return "bg-red-100 text-red-800";
    case "中度":
      return "bg-yellow-100 text-yellow-800";
    case "轻度":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
</script>
