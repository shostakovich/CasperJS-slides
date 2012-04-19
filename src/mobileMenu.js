var casper = require('casper').create({
    viewportSize : {width :  800, height: 600}
});

casper.start('http://www.gutefrage.net/', function(){
  this.wait(1000, function() {
	this.debugPage();
	this.click("#menuButton");
	this.assertVisible("#navigationTab1");
  });
});

casper.run();
