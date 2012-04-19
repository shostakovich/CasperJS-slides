var casper = require('casper').create();
var oldWidgetText;

casper.start('http://www.gutefrage.net/');

casper.then(function(){
	casper.test.comment("Hi, I'm a comment");
	this.test.assertExists("#top50Table .navItem[title='2']", "Link to second exists");
  oldWidgetText = this.fetchText('#top50Table');
	casper.test.info("Hi, I'm an informative message.");

});

casper.thenEvaluate(function(){

	$("#top50Table .navItem[title='2']").mouseover()
});

casper.then(function(){
	casper.test.fail("Georges W. Bush");
	this.test.assert(oldWidgetText !== this.fetchText('#top50Table'), 
		"Widget text changes on mouseOver")
});

casper.run();