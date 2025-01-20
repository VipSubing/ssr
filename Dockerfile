FROM node:18-alpine

WORKDIR /app

# 复制构建后的输出目录
COPY .output ./.output

# 暴露端口
EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000

# 启动命令
CMD ["node", ".output/server/index.mjs"]