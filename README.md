# International Inc Web Page

## Requirements 

* Node.js v10.x
* npm v6.x

*NOTE: Install [nvm](https://github.com/nvm-sh/nvm) to easily switch between Node.js versions on your development machine. Run `npm install -g npm@6` to update to npm 6.x if necessary.*

See `gulpfile.js` for task config.

## Development Server with Live Reload

```bash
npm install
npx bower install
npx gulp serve
```

## Production Build (Assets only)

Compiled assets are written to a *dist/* folder in the root of this repository.

```bash
npx bower install
npm install
npx gulp
```

## Production Build (Docker image)

Creates an image that can be deployed. Note this uses Node.js to serve the assets. Apache/NGINX would be better, but this works for a demo.

```
NAME=intl-inc
docker build -f Dockerfile . -t $NAME
docker run -p 8080:8080 $NAME
```

## Docker Local Development Server

Use this method to avoid messing with Node.js and npm versions on your host machine.

```
# Build the dev container
docker build -f Dockerfile.dev . -t intlinc-dev

# Run the dev container with the dev/ directory mounted
docker run -p 8080:8080 -v "$(pwd)/dev:/usr/src/app/dev/" intlinc-dev
```

## OpenShift Deployment using CLI

Note that `--name` is required since the default name generated starts with a number, and this is not supported.

```
oc new-app nodejs:10~https://github.com/jbossdemocentral/3scaleworkshop-wwwpage \
--name wwwpage
```