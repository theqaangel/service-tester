require.config({
  baseUrl: '.',
  paths: {
    'jquery'        : 'ext_modules/jquery-1.11.2',
    'mocha'         : 'ext_modules/mocha/mocha',
    'chai'          : 'ext_modules/chai-2.2.0',
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});
 
define(function(require) {
  var chai = require('chai');
  require('mocha');
  require('jquery');
 
  // Chai
  var should = chai.should();
 
  mocha.setup('bdd');
 
  require([
    'tests/test.js',
  ], function(require) {
    mocha.run();
  });
 
});

