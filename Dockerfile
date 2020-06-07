FROM node:alpine AS compile-frontend

WORKDIR /app/frontend

COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install

COPY ./frontend ./
RUN npm run build


FROM python:3.8 AS noticrawl-image

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -qq \
gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 \
libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 \
libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 \
libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation \
libappindicator1 libnss3 lsb-release xdg-utils wget

WORKDIR /app/backend

COPY ./backend/poetry.lock ./backend/pyproject.toml ./
RUN pip install -q poetry==1.0.* && \
    poetry config virtualenvs.create false && \
    poetry install
RUN pyppeteer-install

COPY ./backend/src ./src
COPY ./backend/database.secrets.toml ./backend/auth.secrets.toml ./
COPY --from=compile-frontend /app/frontend/build/ /app/frontend/build/

EXPOSE 8000

ENTRYPOINT ["poetry"]
CMD ["run", "task", "dev-server"]