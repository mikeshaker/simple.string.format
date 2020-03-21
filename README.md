# simple.string.format
Simple String.format() in javascript.

## Lightweight, Zero-dependency

![NPM](https://img.shields.io/npm/l/simple.string.format)
[![npm version](https://img.shields.io/npm/v/simple.string.format?label=simple.string.format)](https://www.npmjs.com/package/simple.string.format)
[![npm bundle size](https://img.shields.io/bundlephobia/min/simple.string.format)](https://bundlephobia.com/result?p=simple.string.format)
[![GitHub issues](https://img.shields.io/github/issues-raw/mikeshaker/simple.string.format)](https://github.com/mikeshaker/simple.string.format/issues)
[![Build Status](https://travis-ci.org/mikeshaker/simple.string.format.svg?branch=master)](https://travis-ci.org/mikeshaker/simple.string.format)


# Getting Started
## Installation
[![NPM](https://nodei.co/npm/simple.string.format.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/simple.string.format)

     npm i simple.string.format 
# Usage

```javascript
    import "simple.string.format";

    let helloWorld = "Hello, {0}!".format("World");
    ///Hello, World!
    let example1 = "Hello, {0}! this is example # {1}.".format("World", 1);
    /// Hello, World! this is example # 1.
    let example2 = "{0} + {0} = {1}".format(1, 2);
    /// 1 + 1 = 2
    let example3 = "{{0}} will be replaced with {0}".format("hi");
    /// {0} will be replaced with hi

```
# Demo
[Demo 1 (RunKit)](https://runkit.com/mikeshaker/simple-string-format)

[Demo 2 (codesandbox)](https://codesandbox.io/s/simplestringformat-yuc2x)

[Demo 3 (stackblitz)](https://stackblitz.com/edit/simple-string-format)


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://www.mikeshaker.com/"><img src="https://avatars2.githubusercontent.com/u/5230588?v=4" width="100px;" alt="Mike Shaker"/><br /><sub><b>Mike Shaker</b></sub></a><br /><a href="#infra-mikeshaker" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/mikeshaker/auctionMobileApp/commits?author=mikeshaker" title="Tests">⚠️</a> <a href="https://github.com/mikeshaker/auctionMobileApp/commits?author=mikeshaker" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
=======
