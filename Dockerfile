FROM node:20-alpine as build

ENV TZ UTC
ENV PORT 3333
ENV HOST 0.0.0.0
ENV LOG_LEVEL info

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci && npm cache clean --force
COPY . /app
RUN npm run build

# package only the build folder
FROM node:20-alpine

ENV NODE_ENV production
ENV TZ UTC
ENV PORT 3333
ENV HOST 0.0.0.0
ENV LOG_LEVEL info

WORKDIR /app
COPY --from=build /app/build /app
RUN npm ci --omit=dev && npm cache clean --force
EXPOSE 3333
CMD ["node", "bin/server.js"]
