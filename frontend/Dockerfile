FROM node:12.5.0-alpine

ENV HOME="/hippy_app" \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo

WORKDIR ${HOME}

RUN apk update && \
    apk upgrade && \
    npm install -g npm && \
    npm install -g @vue/cli

COPY . /hippy_app

# install dependencies in package.json
RUN npm install

ENV HOST 0.0.0.0
EXPOSE 8080