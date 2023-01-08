# be-one-and-only

[![NPM version](https://badge.fury.io/js/be-one-and-only.png)](http://badge.fury.io/js/be-one-and-only)
[![Playwright Tests](https://github.com/bahrus/be-one-and-only/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-one-and-only/actions/workflows/CI.yml)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-one-and-only?style=for-the-badge)](https://bundlephobia.com/result?p=be-one-and-only)
<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-one-and-only?compression=gzip">

```html
<template be-one-and-only="Zhou Sheng Chen">
    My content
</template>

<template be-one-and-only="Zhou Sheng Chen">
    My content
</template>
```

... only one instance is instantiated in any single Shadow DOM realm.

## Viewing Locally

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.
4.  Open command window to folder where you cloned this repo.
5.  > npm install
6.  > npm run serve
7.  Open http://localhost:3030/demo/dev in a modern browser.

## Importing in ES Modules:

```JavaScript
import 'be-one-and-only/be-one-and-only.js';
```

## CDN

```JavaScript
import 'https://esm.run/be-one-and-only';

```