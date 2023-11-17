# ie-dev.github.io - Start Page
========

### Live Demo: <a href="https://ie-dev.github.io/">Demo</a>

## Building

Building requires Node, this is built using Next.js.

1. edit the `data.json`
2. build using the following commands

``` bash
nvm install
nvm use

npm install
npm run build
```

## Autocomplete Requirements

Your endpoint should accept the following parameters `?query=test&lang=uk-en`

The response should be in the following format:

```
[{"phrase":"test"},{"phrase":"testwise"},{"phrase":"test internet speed"},{"phrase":"testosterone"},{"phrase":"testing"},{"phrase":"test microphone"},{"phrase":"testament"},{"phrase":"test camera"}]
```

I also recommend that you lock it down to specific domains / IP addresses, this will avoid hitting rate limiting and large charges from your provider.

If you are struggling with setting up autocomplete, feel free to message me, and I'll try to get back to you with some hints and tips.
