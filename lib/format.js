String.prototype.format = function() {
    a = this;
    if (!a.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
          throw new Error('invalid format string.');
      }
      
       return a.replace(/((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g, (m, str, index) => {
          if (str) {
              return str.replace(/(?:{{)|(?:}})/g, m => m[0]);
          } else {
              if (index >= arguments.length) {
                  throw new Error('argument index is out of range in format');
              }
              return arguments[index];
          }
      });
  }