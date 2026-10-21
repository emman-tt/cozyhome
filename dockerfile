#Stage 1 :install dependencies and build
FROM node:lts-alpine AS base

RUN corepack enable

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

# Copy package files (best caching)
COPY package.json  pnpm-lock.yaml* pnpm-workspace.yaml*  ./


RUN --mount=type=cache,target=/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

#Stage 2 :run app on production

FROM nginx:alpine

WORKDIR /app

COPY --from=base /app/dist /usr/share/nginx/html

EXPOSE 80

#Using port 3003 as host port
CMD ["nginx", "-g", "daemon off;"]


