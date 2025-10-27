# syntax=docker/dockerfile:1
# check=error=true

# Node build image
FROM node:22.21.0-bookworm AS builder
# Install Ubuntu packages + dumb-init
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY ./package*.json .
# Install NPM dependencies
RUN npm install
# Copy source files
COPY . .
# Build the app (TS > JS + treeshake + bundle + minify with Esbuild)
RUN npm run build

# Production image
FROM node:22.21.0-bookworm-slim AS production
# Install ca-certificates
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
# Set Node.js environment to production
ENV NODE_ENV=production
# Copy dumb-init from builder
COPY --from=builder /usr/bin/dumb-init /usr/bin/dumb-init
# Do not run as root, create a new user
USER node
WORKDIR /app
# Copy bundled app with source map from builder container
COPY --chown=node:node --from=builder /app/dist .
# Set environment variable as an example
ENV CONTAINERIZED=true
# Run the app
ENTRYPOINT ["dumb-init", "node", "index.mjs"]
CMD []
