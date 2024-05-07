FROM node

RUN wget http://mirrors.kernel.org/ubuntu/pool/universe/x/x264/libx264-152_0.152.2854+gite9a5903-2_amd64.deb -O /tmp/libx264-152.deb

RUN apt-get update \
    && apt-get install -y \
        libnss3 \
        libnspr4 \
        libdbus-1-3 \
        libatk1.0-0 \
        libatk-bridge2.0-0 \
        libcups2 \
        libdrm2 \
        libatspi2.0-0 \
        libxcomposite1 \
        libxdamage1 \
        libxfixes3 \
        libxrandr2 \
        libgbm1 \
        libxkbcommon0 \
        libasound2 \
        libx11-xcb1 \
        libxcursor1 \
        libgtk-3-0 \
        libgdk-pixbuf2.0-0 \
        libsoup2.4 \
        libgstreamer1.0-0 \
        libvpx-dev \
        libopus0 \
        libharfbuzz-icu0 \
        gstreamer1.0-plugins-base \
        gstreamer1.0-plugins-good \
        gstreamer1.0-plugins-bad \
        gstreamer1.0-plugins-ugly \
        gstreamer1.0-libav \
        gstreamer1.0-gl \
        gstreamer1.0-alsa \
        libenchant-2-2 \
        libsecret-1-0 \
        libhyphen0 \
        libmanette-0.2-0 \
        libflite1 \
        libgles2 \
    && dpkg -i /tmp/libx264-152.deb \
    && rm /tmp/libx264-152.deb \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

COPY ./node_modules ./node_modules

RUN npm install

RUN npx playwright install

COPY . .

EXPOSE 8081

CMD ["npm", "start"]
