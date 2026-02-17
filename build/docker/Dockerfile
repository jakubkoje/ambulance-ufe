# =============================================================================
# Base stage - Common Node.js setup with pnpm
# =============================================================================
FROM node:24-slim AS base

RUN npm install --global corepack@latest
RUN corepack enable pnpm

WORKDIR /app

# =============================================================================
# All deps stage - Install ALL dependencies (dev + prod) needed for building
# =============================================================================
FROM base AS deps

WORKDIR /app

# Copy lockfile
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./

# Install ALL dependencies (including devDependencies for TypeScript, etc.)
RUN pnpm install --frozen-lockfile

# =============================================================================
# Build stage - Build the application
# =============================================================================
FROM base AS build

WORKDIR /app

# Copy ALL dependencies from deps stage
COPY --from=deps /app/node_modules /app/node_modules

# Copy Nuxt source code
COPY . .

# Build the application
RUN pnpm build

# =============================================================================
# Production stage - Final runtime image
# =============================================================================
FROM ghcr.io/polyfea/spa-base

COPY --from=build /app/www /spa/public

ENV OTEL_SERVICE_NAME=xjelinekj-ambulance-ufe
ENV SPA_BASE_PORT=8080
EXPOSE 8080
