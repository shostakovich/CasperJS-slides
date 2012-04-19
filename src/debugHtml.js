var casper = require('casper').create();

casper.start('http://www.google.fr/', function() {
    this.debugHTML();
});

casper.run();
