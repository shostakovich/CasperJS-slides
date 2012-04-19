# Testing with CasperJS

## What is CasperJS

* PhantomJs is a testing & navigation
* based on PhantomJs
* It can create Jenkins Compatible JUnit XML

## How does it compare to PHPUnit & Co

* Unit
	* Fast very low level
	* PHPUnit / Jasmine
	
* Low Level Functional
	* PHPUnit + sfTestBrowser
	* Slower than Unit tests, Faster then Casper
	* A little bit better integrated
	* Can not test JS at all
	* Can not test if ressources are loaded
	* Can not catch problems with external JS
	
* CasperJS
	* Very High Level Functional test
	* Like a remote for a browser
	* A little bit slower
	* Can test JS, external JavaScript
	* Can test ressources
	* our site in a real browser 
	