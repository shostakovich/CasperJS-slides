var casper = require('casper').create();
var didPixelLoad = false;

casper.start('http://www.gutefrage.net/');

casper.on('resource.received', function(resource) {
  if (resource.url.toString().search(/http:\/\/www.google-analytics.com\/__utm.gif/i) > -1 ) {
  	didPixelLoad = true;
  }
});

casper.then(function() {
	this.test.assert(didPixelLoad, "Tracking pixel was loaded");
});

casper.run();