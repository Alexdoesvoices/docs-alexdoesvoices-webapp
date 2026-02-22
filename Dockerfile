# Stage 1: Build
FROM oven/bun:1.1 AS builder
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install 

COPY . .
RUN bun run build

# Stage 2: Runtime
FROM oven/bun:1.1-slim
WORKDIR /app

# Astro builds into the 'dist' folder when using the node adapter
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production

EXPOSE 4321
CMD ["bun", "./dist/server/entry.mjs"]