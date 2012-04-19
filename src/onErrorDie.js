var casper = require('casper').create();

casper.start('http://gf.dev/');

casper.thenEvaluate(function(){
	$("#mainNavigation li:first-child").mouseover();
});

casper.then(function(){
	this.test.assert(
		this.visible("#mainNavigation li:first-child .subnav", "Subnav is visible")
	);
});

casper.run();

