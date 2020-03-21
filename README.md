# simple.string.format
Simple String.format() in javascript.

## Lightweight ![npm bundle size](https://img.shields.io/bundlephobia/min/simple.string.format), Zero-dependency

![NPM](https://img.shields.io/npm/l/simple.string.format)
![npm](https://img.shields.io/npm/v/simple.string.format)
![npm bundle size](https://img.shields.io/bundlephobia/min/simple.string.format)
![GitHub issues](https://img.shields.io/github/issues-raw/mikeshaker/simple.string.format)
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
[Example 1](https://codesandbox.io/s/simplestringformat-yuc2x)

[Example 2](https://stackblitz.com/edit/simple-string-format)
