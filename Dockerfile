# 启用 BuildKit 高级功能
# syntax=docker/dockerfile:1

# ============================================
#  Builder 阶段
# ============================================
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装所有依赖（包括 devDependencies，构建时需要 vite）
RUN --mount=type=cache,target=/root/.npm \
    npm ci --ignore-scripts

# 复制源代码
COPY . .

# 构建生产版本
RUN npm run build

# ============================================
#  Runtime 阶段
# ============================================
FROM nginx:1.25-alpine

# 安装必要的工具
RUN apk add --no-cache \
    ca-certificates \
    tzdata

# 设置时区
ENV TZ=Asia/Shanghai

# 复制构建产物到 Nginx 静态文件目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制自定义 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Nginx 前台运行
CMD ["nginx", "-g", "daemon off;"]