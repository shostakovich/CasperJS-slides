var casper = require('casper').create();

casper.start('http://www.gutefrage.net/', function() {
  this.test.assertExists(".logo", "The logo exists");
});

casper.run();
