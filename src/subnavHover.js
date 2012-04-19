var casper = require('casper').create();

casper.start('http://gf.dev/');

casper.thenEvaluate(function(){
	$("#tagNavigation li").mouseover();
});

casper.then(function(){
	this.captureSelector('google.png', '#tagNavigation');
  this.test.assert(this.visible('#tagNavigation ul'), "subnav is shown on mouseover");
});

casper.run();
