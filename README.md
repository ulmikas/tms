# tms
tms static site

WDS: docker-compose up -d

build: docker-compose run --rm web yarn build && cp -R dist/* ../ulmikas.github.io/tms/