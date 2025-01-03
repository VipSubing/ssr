import pino from "pino";

export const useLogger = () => {
  return pino({
    level: "debug",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        levelFirst: true,
        translateTime: "SYS:standard",
      },
    },
  });
};

// 配置全局logger
export const logger = useLogger();
