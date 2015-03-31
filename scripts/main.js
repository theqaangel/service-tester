require.config({
  baseUrl: 'node_modules',
  paths: {
    'jquery'        : 'jquery/dist/jquery',
    'mocha'         : 'mocha/mocha',
    'chai'          : 'chai/chai',
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

