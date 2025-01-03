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
                      :class="
                        item.severity === '中度'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      "
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
                      :class="
                        factor.severity === '中度'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      "
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

// 打印接收到的参数
onMounted(() => {
  const data = useRoute().query.data as string;
  console.log("Received data:", data);
  const decodedData = JSON.parse(atob(data)) as TestResult;
  console.log("Decoded data:", decodedData);
});

const summaryResults = ref([
  { name: "总分", score: 249, result: "阳性症状", range: "90~450" },
  {
    name: "总症状指数",
    score: 2.77,
    result: "有症状",
    severity: "轻度",
    range: "1~5",
  },
  { name: "阳性症状项目数", score: 80, range: "0~90" },
  { name: "阴性症状项目数", score: 10, range: "0~90" },
  { name: "阳性症状均分", score: 2.99, range: "0~5" },
]);

const factors = ref([
  {
    name: "躯体化",
    score: 28,
    average: 2.33,
    result: true,
    severity: "轻度",
    range: "12~60",
  },
  {
    name: "强迫症状",
    score: 29,
    average: 2.9,
    result: true,
    severity: "轻度",
    range: "10~50",
  },
  {
    name: "人际敏感",
    score: 28,
    average: 3.11,
    result: true,
    severity: "中度",
    range: "9~45",
  },
  {
    name: "抑郁",
    score: 44,
    average: 3.38,
    result: true,
    severity: "中度",
    range: "13~65",
  },
  {
    name: "焦虑",
    score: 26,
    average: 2.6,
    result: true,
    severity: "轻度",
    range: "10~50",
  },
  {
    name: "敌对",
    score: 16,
    average: 2.67,
    result: true,
    severity: "轻度",
    range: "6~30",
  },
  {
    name: "恐怖",
    score: 20,
    average: 2.86,
    result: true,
    severity: "轻度",
    range: "7~35",
  },
  {
    name: "偏执",
    score: 16,
    average: 2.67,
    result: true,
    severity: "轻度",
    range: "6~30",
  },
  {
    name: "精神病性",
    score: 28,
    average: 2.8,
    result: true,
    severity: "轻度",
    range: "10~50",
  },
  { name: "其它", score: 14, average: 2, result: false, range: "-" },
]);
</script>
