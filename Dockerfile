FROM node:18-alpine

WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 暴露端口
EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000

# 启动命令
CMD ["node", ".output/server/index.mjs"] 