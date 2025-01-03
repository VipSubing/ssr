import pino from "pino";

export const useLogger = () => {
  return pino({
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  });
};
// 配置全局logger
export const logger = useLogger();
