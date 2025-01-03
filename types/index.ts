// 根据json`{
//   "totalScore": 4,
//   "totalSymptomIndex": 2,
//   "positiveItemCount": 2,
//   "positiveSymptomDistressIndex": 2,
//   "factorScores": {
//     "somatization": 0.08333333333333333,
//     "obsessiveCompulsive": 0,
//     "interpersonalSensitivity": 0,
//     "depression": 0,
//     "anxiety": 0.3,
//     "hostility": 0,
//     "phobicAnxiety": 0,
//     "paranoidIdeation": 0,
//     "psychoticism": 0,
//     "additionalItems": 0
//   }
// }`生成类型
export interface TestResult {
  totalScore: number;
  totalSymptomIndex: number;
  positiveItemCount: number;
  positiveSymptomDistressIndex: number;
  factorScores: FactorScores;
}

export interface FactorScores {
  somatization: number;
  obsessiveCompulsive: number;
  interpersonalSensitivity: number;
  depression: number;
  anxiety: number;
  hostility: number;
  phobicAnxiety: number;
  paranoidIdeation: number;
  psychoticism: number;
  additionalItems: number;
}
