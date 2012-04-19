var casper = require('casper').create();

casper.start('http://gf.dev/');

casper.thenEvaluate(function(){
	$("#fRegister_nickname").focus();
});

casper.then(function(){
	this.test.assert(
		this.visible("#fRegister_password"), 
		"Password field is unhidden");
});

casper.run();