[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> Demo project illustrating using versioned web components with a centrally shared component library.

:zap: Share, but also take care.

You can visit this demo at [wc-version-demo.samples.piral.cloud/](https://wc-version-demo.samples.piral.cloud/).

## Getting Started

Install the dependencies:

```sh
yarn install
```

Now run the application:

```sh
yarn start
```

## What's Inside

- A simple app shell using `lib-v1`
- A micro frontend (mf-one) using the web components from `lib-v1`
- A micro frontend (mf-two) using its own version of the web component library (`lib-v2`)
- Two versions of the same library, `lib-v1` and `lib-v2`

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
