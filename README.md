# string.format
Simple String.format() in javascript

# Usage

```javascript
    import "simple.string.format";

    let helloWorld = "Hello, {0}!".format("World");
    ///Hello, World!
    let example1 = "Hello, {0}! this is example # {1}.".format("World", 1);
    /// Hello, World! this is example # 1.
    let example2 = "{0} + {0} = 2".format(1, 2);
    /// 1 + 1 = 2
    let example3 = "{{0}} will be replaced with {0}".format("hi");
    /// {0} will be replaced with hi

```
# Demo
[Example](https://codesandbox.io/s/simplestringformat-yuc2x)