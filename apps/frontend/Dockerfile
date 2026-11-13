# ---------- Step 1: build ----------
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock ./
COPY apps/backend/package.json apps/backend/
COPY apps/frontend/package.json apps/frontend/
COPY packages/shared/package.json packages/shared/
RUN bun install --frozen-lockfile --ignore-scripts

COPY packages/shared packages/shared
COPY apps/frontend apps/frontend

RUN bun run --filter @otrio/shared build
RUN bun run --filter frontend build

# ---------- Step 2: static cast ----------
FROM nginx:alpine
COPY --from=build /app/apps/frontend/dist /usr/share/nginx/html
EXPOSE 80
