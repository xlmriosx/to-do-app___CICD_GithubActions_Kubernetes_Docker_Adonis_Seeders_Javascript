ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine as builder
ARG environment=local

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY . /usr/src/app/
COPY .env.${environment} .env
RUN npm install

# -----------------------------------------------------------------------------------#

FROM alpine as app

RUN addgroup -S node && adduser -S node -G node -G adm

COPY --chown=node:node --from=builder /usr/src/app /usr/src/app

COPY --from=builder /usr/lib /usr/lib
COPY --from=builder /usr/local/share /usr/local/share
COPY --from=builder /usr/local/lib /usr/local/lib
COPY --from=builder /usr/local/include /usr/local/include
COPY --from=builder /usr/local/bin /usr/local/bin

WORKDIR /usr/src/app

# Tell docker that all future commands should run as the node user
USER node

ENV CACHE_DIR /home/node/app/.cache/

CMD ["npm", "run", "dev"]
