# ---------------------------
# Build stage (Bun)
# ---------------------------
FROM oven/bun:1.1 AS builder

WORKDIR /app

# Copy Astro project
COPY astro-app/ .

# Install dependencies with Bun
RUN bun install

# Build Astro (outputs to /app/dist)
RUN bun run build

# ---------------------------
# Runtime stage (Nginx)
# ---------------------------
FROM nginx:alpine

# Copy built Astro files to Nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 4267

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
