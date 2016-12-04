'use strict';
require.config({
   pahts: {
      "a": 'a',
      "b": 'b',
      "c": 'c'
   }
});
require(['a','b','c'], function(a, b, c ) {
   a.console();
   c.console();
   c.console();
});
