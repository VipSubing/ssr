<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-900">
        静态页面生成服务
      </h1>

      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-xl leading-6 font-semibold text-gray-900">
            请求示例
          </h2>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
          <pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto">
POST /api/render
Content-Type: application/json

{
  "template": "result",
  "data": {
    "summaryResults": [...],
    "factors": [...]
  }
}</pre
          >
        </div>
      </div>

      <div class="mt-8 text-center">
        <NuxtLink
          :to="{ path: '/result', query: { data: json } }"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          查看示例页面
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const test = {
  totalScore: 240,
  totalSymptomIndex: 2.77,
  positiveItemCount: 80,
  positiveSymptomDistressIndex: 2.99,
  factorScores: {
    somatization: 23.3,
    obsessiveCompulsive: 29,
    interpersonalSensitivity: 31.1,
    depression: 33.8,
    anxiety: 26,
    hostility: 26.7,
    phobicAnxiety: 28.6,
    paranoidIdeation: 26.7,
    psychoticism: 28,
    additionalItems: 2,
  },
};
const json = ref("");
onMounted(() => {
  console.log(" index.vue onMounted");
  json.value = btoa(JSON.stringify(test));
});
</script>
