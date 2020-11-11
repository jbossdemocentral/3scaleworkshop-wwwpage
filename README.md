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

## Production Build

Compiled assets are written to a *dist/* folder in the root of this repository.

```bash
npx bower@1.8 install
npm install
npx gulp
```

## Docker Local Development Server

Use this method to avoid messing with Node.js and npm versions on your host machine.

```
# Build the dev container
docker build -f Dockerfile.dev . -t intlinc-dev

# Run the dev container with the dev/ directory mounted
docker run -p 8080:8080 -v "$(pwd)/dev:/usr/src/app/dev/" intlinc-dev
```