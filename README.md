# TMS

TMS static site
___________

### All categories and products content in `data.js`

### start webpack-dev-server
```
docker-compose up -d
```

### make build
```
docker-compose run --rm web yarn build && cp -R dist/* ../ulmikas.github.io/tms/
```
### deploy to githab pages
```
cp -R dist/* ../ulmikas.github.io/tms/
cd ../ulmikas.github.io/tms/
gaa && gc && gp
```
