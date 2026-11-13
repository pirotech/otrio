# ---------- Step 1: build ----------
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock ./
COPY apps/backend/package.json apps/backend/
COPY apps/frontend/package.json apps/frontend/
COPY packages/shared/package.json packages/shared/
RUN bun install --frozen-lockfile --ignore-scripts

COPY packages/shared packages/shared
COPY apps/backend apps/backend

RUN bun run --filter @otrio/shared build
RUN bun run --filter backend build

# ---------- Step 2: running ----------
FROM oven/bun:1 AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps/backend ./apps/backend

EXPOSE 3000
CMD ["bun", "apps/backend/dist/main.js"]
