/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	__webpack_require__(41);
	
	__webpack_require__(45);
	
	__webpack_require__(47);
	
	__webpack_require__(48);
	
	var _exampleGettingStartedVue = __webpack_require__(49);
	
	var _exampleGettingStartedVue2 = _interopRequireDefault(_exampleGettingStartedVue);
	
	var _srcAffixVue = __webpack_require__(51);
	
	var _srcAffixVue2 = _interopRequireDefault(_srcAffixVue);
	
	var _exampleContainerVue = __webpack_require__(58);
	
	var _exampleContainerVue2 = _interopRequireDefault(_exampleContainerVue);
	
	var _exampleHeaderDocsVue = __webpack_require__(60);
	
	var _exampleHeaderDocsVue2 = _interopRequireDefault(_exampleHeaderDocsVue);
	
	var _exampleAlertDocsVue = __webpack_require__(62);
	
	var _exampleAlertDocsVue2 = _interopRequireDefault(_exampleAlertDocsVue);
	
	var _exampleAccordionDocsVue = __webpack_require__(72);
	
	var _exampleAccordionDocsVue2 = _interopRequireDefault(_exampleAccordionDocsVue);
	
	var _exampleAffixDocsVue = __webpack_require__(83);
	
	var _exampleAffixDocsVue2 = _interopRequireDefault(_exampleAffixDocsVue);
	
	var _exampleAsideDocsVue = __webpack_require__(94);
	
	var _exampleAsideDocsVue2 = _interopRequireDefault(_exampleAsideDocsVue);
	
	var _exampleCarouselDocsVue = __webpack_require__(103);
	
	var _exampleCarouselDocsVue2 = _interopRequireDefault(_exampleCarouselDocsVue);
	
	var _exampleButtonsDocsVue = __webpack_require__(152);
	
	var _exampleButtonsDocsVue2 = _interopRequireDefault(_exampleButtonsDocsVue);
	
	var _exampleDatepickerDocsVue = __webpack_require__(167);
	
	var _exampleDatepickerDocsVue2 = _interopRequireDefault(_exampleDatepickerDocsVue);
	
	var _exampleDropdownDocsVue = __webpack_require__(185);
	
	var _exampleDropdownDocsVue2 = _interopRequireDefault(_exampleDropdownDocsVue);
	
	var _exampleModalDocsVue = __webpack_require__(191);
	
	var _exampleModalDocsVue2 = _interopRequireDefault(_exampleModalDocsVue);
	
	var _examplePopoverDocsVue = __webpack_require__(199);
	
	var _examplePopoverDocsVue2 = _interopRequireDefault(_examplePopoverDocsVue);
	
	var _exampleProgressbarDocsVue = __webpack_require__(207);
	
	var _exampleProgressbarDocsVue2 = _interopRequireDefault(_exampleProgressbarDocsVue);
	
	var _exampleSelectDocsVue = __webpack_require__(213);
	
	var _exampleSelectDocsVue2 = _interopRequireDefault(_exampleSelectDocsVue);
	
	var _exampleTabsDocsVue = __webpack_require__(216);
	
	var _exampleTabsDocsVue2 = _interopRequireDefault(_exampleTabsDocsVue);
	
	var _exampleTooltipDocsVue = __webpack_require__(229);
	
	var _exampleTooltipDocsVue2 = _interopRequireDefault(_exampleTooltipDocsVue);
	
	var _exampleTypeaheadDocsVue = __webpack_require__(232);
	
	var _exampleTypeaheadDocsVue2 = _interopRequireDefault(_exampleTypeaheadDocsVue);
	
	new Vue({
	  el: '#wrapper',
	  components: {
	    gettingStarted: _exampleGettingStartedVue2['default'],
	    container: _exampleContainerVue2['default'],
	    affix: _srcAffixVue2['default'],
	    alertDocs: _exampleAlertDocsVue2['default'],
	    headerDocs: _exampleHeaderDocsVue2['default'],
	    accordionDocs: _exampleAccordionDocsVue2['default'],
	    affixDocs: _exampleAffixDocsVue2['default'],
	    asideDocs: _exampleAsideDocsVue2['default'],
	    carouselDocs: _exampleCarouselDocsVue2['default'],
	    buttonsDocs: _exampleButtonsDocsVue2['default'],
	    datepickerDocs: _exampleDatepickerDocsVue2['default'],
	    dropdownDocs: _exampleDropdownDocsVue2['default'],
	    modalDocs: _exampleModalDocsVue2['default'],
	    popoverDocs: _examplePopoverDocsVue2['default'],
	    progressbarDocs: _exampleProgressbarDocsVue2['default'],
	    selectDocs: _exampleSelectDocsVue2['default'],
	    tabsDocs: _exampleTabsDocsVue2['default'],
	    tooltipDocs: _exampleTooltipDocsVue2['default'],
	    typeaheadDocs: _exampleTypeaheadDocsVue2['default'],
	    list: {
	      inherit: true,
	      template: '<li v-repeat="anchor"><a href="#{{$value.toLowerCase()}}">{{$value | space}}</a></li>'
	    }
	  },
	  data: function data() {
	    return {
	      anchor: []
	    };
	  },
	  filters: {
	    space: function space(val) {
	      return val.replace('-', ' ');
	    }
	  },
	  ready: function ready() {
	    // add h1.anchor.innerHTML to sidebar list
	    var anchor = document.querySelectorAll('.anchor');
	    this.anchor = [].concat(_toConsumableArray(anchor)).map(function (el) {
	      return el.innerHTML.replace(' ', '-');
	    });
	    // Scrollspy
	    var section = document.querySelectorAll('.bs-docs-section');
	    var sections = {};
	    var navbar = document.querySelector('#sidenav');
	    var i = 0;
	
	    window.onload = function () {
	      Array.prototype.forEach.call(section, function (e) {
	        sections[e.id] = e.offsetTop;
	      });
	    };
	
	    function scrollSpy() {
	      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	
	      for (i in sections) {
	        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
	        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
	        if (sections[i] + 420 <= scrollPosition) {
	          if (navbar.querySelector('.active')) navbar.querySelector('.active').className = '';
	          navbar.querySelector('a[href*=' + i + ']').parentNode.className = 'active';
	        }
	      }
	    }
	
	    window.onscroll = function () {
	      scrollSpy();
	    };
	  }
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./docs.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./docs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Bootstrap Docs (http://getbootstrap.com)\n * Copyright 2011-2014 Twitter, Inc.\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n * details, see http://creativecommons.org/licenses/by/3.0/.\n */\n\n\n/*\n * Bootstrap Documentation\n * Special styles for presenting Bootstrap's documentation and code examples.\n *\n * Table of contents:\n *\n * Scaffolding\n * Main navigation\n * Footer\n * Social buttons\n * Homepage\n * Page headers\n * Old docs callout\n * Ads\n * Side navigation\n * Docs sections\n * Callouts\n * Grid styles\n * Examples\n * Code snippets (highlight)\n * Responsive tests\n * Glyphicons\n * Customizer\n * MenuItem\n * Miscellaneous\n */\n\n\n/*\n * Scaffolding\n *\n * Update the basics of our documents to prep for docs content.\n */\n\nbody {\n  position: relative; /* For scrollspy */\n}\n\n/* Keep code small in tables on account of limited space */\n.table code {\n  font-size: 13px;\n  font-weight: normal;\n}\n\n/* Outline button for use within the docs */\n.btn-outline {\n  color: #563d7c;\n  background-color: transparent;\n  border-color: #563d7c;\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n/* Inverted outline button (white on dark) */\n.btn-outline-inverse {\n  color: #fff;\n  background-color: transparent;\n  border-color: #cdbfe3;\n}\n.btn-outline-inverse:hover,\n.btn-outline-inverse:focus,\n.btn-outline-inverse:active {\n  color: #563d7c;\n  text-shadow: none;\n  background-color: #fff;\n  border-color: #fff;\n}\n\n/* Bootstrap \"B\" icon */\n.bs-docs-booticon {\n  display: block;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  cursor: default;\n  background-color: #563d7c;\n  border-radius: 15%;\n}\n.bs-docs-booticon-sm {\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n  line-height: 28px;\n}\n.bs-docs-booticon-lg {\n  width: 144px;\n  height: 144px;\n  font-size: 108px;\n  line-height: 140px;\n}\n.bs-docs-booticon-inverse {\n  color: #563d7c;\n  background-color: #fff;\n}\n.bs-docs-booticon-outline {\n  background-color: transparent;\n  border: 1px solid #cdbfe3;\n}\n\n\n/*\n * Main navigation\n *\n * Turn the `.navbar` at the top of the docs purple.\n */\n\n.bs-docs-nav {\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 0;\n}\n.bs-home-nav .bs-nav-b {\n  display: none;\n}\n.bs-docs-nav .navbar-brand,\n.bs-docs-nav .navbar-nav > li > a {\n  font-weight: 500;\n  color: #563d7c;\n}\n.bs-docs-nav .navbar-nav > li > a:hover,\n.bs-docs-nav .navbar-nav > .active > a,\n.bs-docs-nav .navbar-nav > .active > a:hover {\n  color: #463265;\n  background-color: #f9f9f9;\n}\n.bs-docs-nav .navbar-toggle .icon-bar {\n  background-color: #563d7c;\n}\n.bs-docs-nav .navbar-header .navbar-toggle {\n  border-color: #fff;\n}\n.bs-docs-nav .navbar-header .navbar-toggle:hover,\n.bs-docs-nav .navbar-header .navbar-toggle:focus {\n  background-color: #f9f9f9;\n  border-color: #f9f9f9;\n}\n\n\n/*\n * Footer\n *\n * Separated section of content at the bottom of all pages, save the homepage.\n */\n\n.bs-docs-footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 100px;\n  color: #777;\n  text-align: center;\n  border-top: 1px solid #e5e5e5;\n}\n.bs-docs-footer-links {\n  padding-left: 0;\n  margin-top: 20px;\n  color: #999;\n}\n.bs-docs-footer-links li {\n  display: inline;\n  padding: 0 2px;\n}\n.bs-docs-footer-links li:first-child {\n  padding-left: 0;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-footer p {\n    margin-bottom: 0;\n  }\n}\n\n\n/*\n * Social buttons\n *\n * Twitter and GitHub social action buttons (for homepage and footer).\n */\n\n.bs-docs-social {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.bs-docs-social-buttons {\n  display: inline-block;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.bs-docs-social-buttons li {\n  display: inline-block;\n  padding: 5px 8px;\n  line-height: 1;\n}\n.bs-docs-social-buttons .twitter-follow-button {\n  width: 225px !important;\n}\n.bs-docs-social-buttons .twitter-share-button {\n  width: 98px !important;\n}\n/* Style the GitHub buttons via CSS instead of inline attributes */\n.github-btn {\n  overflow: hidden;\n  border: 0;\n}\n\n\n/*\n * Homepage\n *\n * Tweaks to the custom homepage and the masthead (main jumbotron).\n */\n\n/* Share masthead with page headers */\n.bs-docs-masthead,\n.bs-docs-header {\n  position: relative;\n  padding: 30px 15px;\n  color: #cdbfe3;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,.1);\n  background-color: #6f5499;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#563d7c), to(#6f5499));\n  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:      -o-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:         linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);\n  background-repeat: repeat-x;\n}\n\n/* Masthead (headings and download button) */\n.bs-docs-masthead .bs-docs-booticon {\n  margin: 0 auto 30px;\n}\n.bs-docs-masthead h1 {\n  font-weight: 300;\n  line-height: 1;\n  color: #fff;\n}\n.bs-docs-masthead .lead {\n  margin: 0 auto 30px;\n  font-size: 20px;\n  color: #fff;\n}\n.bs-docs-masthead .version {\n  margin-top: -15px;\n  margin-bottom: 30px;\n  color: #9783b9;\n}\n.bs-docs-masthead .btn {\n  width: 100%;\n  padding: 15px 30px;\n  font-size: 20px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-masthead .btn {\n    width: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .bs-docs-masthead h1 {\n    font-size: 60px;\n  }\n  .bs-docs-masthead .lead {\n    font-size: 24px;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-masthead .lead {\n    width: 80%;\n    font-size: 30px;\n  }\n}\n\n\n/*\n * Page headers\n *\n * Jumbotron-esque headers at the top of every page that's not the homepage.\n */\n\n/* Page headers */\n.bs-docs-header {\n  margin-bottom: 40px;\n  font-size: 20px;\n}\n.bs-docs-header h1 {\n  margin-top: 0;\n  color: #fff;\n}\n.bs-docs-header p {\n  margin-bottom: 0;\n  font-weight: 300;\n  line-height: 1.4;\n}\n.bs-docs-header .container {\n  position: relative;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-header {\n    padding-top: 60px;\n    padding-bottom: 60px;\n    font-size: 24px;\n    text-align: left;\n  }\n  .bs-docs-header h1 {\n    font-size: 60px;\n    line-height: 1;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-header h1,\n  .bs-docs-header p {\n    margin-right: 380px;\n  }\n}\n\n\n/*\n * Carbon ads\n *\n * Single display ad that shows on all pages (except homepage) in page headers.\n * The hella `!important` is required for any pre-set property.\n */\n\n.carbonad {\n  width: auto !important;\n  height: auto !important;\n  padding: 20px !important;\n  margin: 30px -30px -31px !important;\n  overflow: hidden; /* clearfix */\n  font-size: 13px !important;\n  line-height: 16px !important;\n  text-align: left;\n  background: transparent !important;\n  border: solid #866ab3 !important;\n  border-width: 1px 0 !important;\n}\n.carbonad-img {\n  margin: 0 !important;\n}\n.carbonad-text,\n.carbonad-tag {\n  display: block !important;\n  float: none !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: 145px !important;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n}\n.carbonad-text {\n  padding-top: 0 !important;\n}\n.carbonad-tag {\n  color: inherit !important;\n  text-align: left !important;\n}\n.carbonad-text a,\n.carbonad-tag a {\n  color: #fff !important;\n}\n.carbonad #azcarbon > img {\n  display: none; /* hide what I assume are tracking images */\n}\n\n@media (min-width: 480px) {\n  .carbonad {\n    width: 330px !important;\n    margin: 20px auto !important;\n    border-width: 1px !important;\n    border-radius: 4px;\n  }\n  .bs-docs-masthead .carbonad {\n    margin: 50px auto 0 !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .carbonad {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .carbonad {\n    position: absolute;\n    top: 0;\n    right: 15px; /* 15px instead of 0 since box-sizing */\n    width: 330px !important;\n    padding: 15px !important;\n    margin: 0 !important;\n  }\n  .bs-docs-masthead .carbonad {\n    position: static;\n  }\n}\n\n\n/*\n * Homepage featurettes\n *\n * Reasons to use Bootstrap, entries from the Expo, and more.\n */\n\n.bs-docs-featurette {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #555;\n  text-align: center;\n  background-color: #fff;\n  border-bottom: 1px solid #e5e5e5;\n}\n.bs-docs-featurette + .bs-docs-footer {\n  margin-top: 0;\n  border-top: 0;\n}\n\n.bs-docs-featurette-title {\n  margin-bottom: 5px;\n  font-size: 30px;\n  font-weight: normal;\n  color: #333;\n}\n.half-rule {\n  width: 100px;\n  margin: 40px auto;\n}\n.bs-docs-featurette h3 {\n  margin-bottom: 5px;\n  font-weight: normal;\n  color: #333;\n}\n.bs-docs-featurette-img {\n  display: block;\n  margin-bottom: 20px;\n  color: #333;\n}\n.bs-docs-featurette-img:hover {\n  color: #428bca;\n  text-decoration: none;\n}\n.bs-docs-featurette-img img {\n  display: block;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-featurette .img-responsive {\n    margin-top: 30px;\n  }\n}\n@media (min-width: 768px) {\n  .bs-docs-featurette {\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n  .bs-docs-featurette-title {\n    font-size: 40px;\n  }\n  .bs-docs-featurette .lead {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .bs-docs-featured-sites .col-sm-3:first-child img {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  .bs-docs-featured-sites .col-sm-3:last-child img {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n\n  .bs-docs-featurette .img-responsive {\n    margin-top: 0;\n  }\n}\n\n/* Featured sites */\n.bs-docs-featured-sites {\n  margin-right: -1px;\n  margin-left: -1px;\n}\n.bs-docs-featured-sites .col-sm-3 {\n  padding-right: 1px;\n  padding-left: 1px;\n}\n.bs-docs-featured-sites .img-responsive {\n  margin-bottom: 15px;\n}\n@media (min-width: 480px) {\n  .bs-docs-featured-sites .img-responsive {\n    margin-bottom: 0;\n  }\n}\n\n/* Example thumbnails */\n@media (max-width: 480px) {\n  .bs-examples {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n  .bs-examples > [class^=\"col-\"] {\n    padding-right: 10px;\n    padding-left: 10px;\n  }\n}\n\n\n/*\n * Side navigation\n *\n * Scrollspy and affixed enhanced navigation to highlight sections and secondary\n * sections of docs content.\n */\n\n/* By default it's not affixed in mobile views, so undo that */\n.bs-docs-sidebar.affix {\n  position: static;\n}\n@media (min-width: 768px) {\n  .bs-docs-sidebar {\n    padding-left: 20px;\n  }\n}\n\n/* First level of nav */\n.bs-docs-sidenav {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n/* All levels of nav */\n.bs-docs-sidebar .nav > li > a {\n  display: block;\n  padding: 4px 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #999;\n}\n.bs-docs-sidebar .nav > li > a:hover,\n.bs-docs-sidebar .nav > li > a:focus {\n  padding-left: 19px;\n  color: #1D976C;\n  text-decoration: none;\n  background-color: transparent;\n  border-left: 1px solid #1D976C;\n}\n.bs-docs-sidebar .nav > .active > a,\n.bs-docs-sidebar .nav > .active:hover > a,\n.bs-docs-sidebar .nav > .active:focus > a {\n  padding-left: 18px;\n  font-weight: bold;\n  color: #1D976C;\n  background-color: transparent;\n  border-left: 2px solid #1D976C;\n}\n\n/* Nav: second level (shown on .active) */\n.bs-docs-sidebar .nav .nav {\n  display: none; /* Hide by default, but at >768px, show it */\n  padding-bottom: 10px;\n}\n.bs-docs-sidebar .nav .nav > li > a {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 30px;\n  font-size: 12px;\n  font-weight: normal;\n}\n.bs-docs-sidebar .nav .nav > li > a:hover,\n.bs-docs-sidebar .nav .nav > li > a:focus {\n  padding-left: 29px;\n}\n.bs-docs-sidebar .nav .nav > .active > a,\n.bs-docs-sidebar .nav .nav > .active:hover > a,\n.bs-docs-sidebar .nav .nav > .active:focus > a {\n  padding-left: 28px;\n  font-weight: 500;\n}\n\n/* Back to top (hidden on mobile) */\n.back-to-top,\n.bs-docs-theme-toggle {\n  display: none;\n  padding: 4px 10px;\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #999;\n}\n.back-to-top:hover,\n.bs-docs-theme-toggle:hover {\n  color: #563d7c;\n  text-decoration: none;\n}\n.bs-docs-theme-toggle {\n  margin-top: 0;\n}\n\n@media (min-width: 768px) {\n  .back-to-top,\n  .bs-docs-theme-toggle {\n    display: block;\n  }\n}\n\n/* Show and affix the side nav when space allows it */\n@media (min-width: 992px) {\n  .bs-docs-sidebar .nav > .active > ul {\n    display: block;\n  }\n  /* Widen the fixed sidebar */\n  .bs-docs-sidebar.affix,\n  .bs-docs-sidebar.affix-bottom {\n    width: 213px;\n  }\n  .bs-docs-sidebar.affix {\n    position: fixed; /* Undo the static from mobile first approach */\n    top: 20px;\n  }\n  .bs-docs-sidebar.affix-bottom {\n    position: absolute; /* Undo the static from mobile first approach */\n  }\n  .bs-docs-sidebar.affix-bottom .bs-docs-sidenav,\n  .bs-docs-sidebar.affix .bs-docs-sidenav {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1200px) {\n  /* Widen the fixed sidebar again */\n  .bs-docs-sidebar.affix-bottom,\n  .bs-docs-sidebar.affix {\n    width: 263px;\n  }\n}\n\n\n/*\n * Docs sections\n *\n * Content blocks for each component or feature.\n */\n\n/* Space things out */\n.bs-docs-section {\n  margin-bottom: 60px;\n}\n.bs-docs-section:last-child {\n  margin-bottom: 0;\n}\n\nh1[id] {\n  padding-top: 20px;\n  margin-top: 0;\n}\n\n\n/*\n * Callouts\n *\n * Not quite alerts, but custom and helpful notes for folks reading the docs.\n * Requires a base and modifier class.\n */\n\n/* Common styles for all types */\n.bs-callout {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px;\n}\n.bs-callout h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n  margin-bottom: 0;\n}\n.bs-callout code {\n  border-radius: 3px;\n}\n\n/* Tighten up space between multiple callouts */\n.bs-callout + .bs-callout {\n  margin-top: -5px;\n}\n\n/* Variations */\n.bs-callout-danger {\n  border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n  color: #d9534f;\n}\n.bs-callout-warning {\n  border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n  color: #f0ad4e;\n}\n.bs-callout-info {\n  border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n  color: #5bc0de;\n}\n\n\n/*\n * Color swatches\n *\n * Color swatches and associated values for our grayscale and brand colors.\n */\n\n.color-swatches {\n  margin: 0 -5px;\n  overflow: hidden; /* clearfix */\n}\n.color-swatch {\n  float: left;\n  width: 60px;\n  height: 60px;\n  margin: 0 5px;\n  border-radius: 3px;\n}\n\n@media (min-width: 768px) {\n  .color-swatch {\n    width: 100px;\n    height: 100px;\n  }\n}\n\n/* Framework colors */\n.color-swatches .gray-darker {\n  background-color: #222;\n}\n.color-swatches .gray-dark {\n  background-color: #333;\n}\n.color-swatches .gray {\n  background-color: #555;\n}\n.color-swatches .gray-light {\n  background-color: #999;\n}\n.color-swatches .gray-lighter {\n  background-color: #eee;\n}\n.color-swatches .brand-primary {\n  background-color: #428bca;\n}\n.color-swatches .brand-success {\n  background-color: #5cb85c;\n}\n.color-swatches .brand-warning {\n  background-color: #f0ad4e;\n}\n.color-swatches .brand-danger {\n  background-color: #d9534f;\n}\n.color-swatches .brand-info {\n  background-color: #5bc0de;\n}\n\n/* Docs colors */\n.color-swatches .bs-purple {\n  background-color: #563d7c;\n}\n.color-swatches .bs-purple-light {\n  background-color: #c7bfd3;\n}\n.color-swatches .bs-purple-lighter {\n  background-color: #e5e1ea;\n}\n.color-swatches .bs-gray {\n  background-color: #f9f9f9;\n}\n\n\n/*\n * Team members\n *\n * Avatars, names, and usernames for core team.\n */\n\n.bs-team .team-member {\n  line-height: 32px;\n  color: #555;\n}\n.bs-team .team-member:hover {\n  color: #333;\n  text-decoration: none;\n}\n.bs-team .github-btn {\n  float: right;\n  width: 180px;\n  height: 20px;\n  margin-top: 6px;\n}\n.bs-team img {\n  float: left;\n  width: 32px;\n  margin-right: 10px;\n  border-radius: 4px;\n}\n\n\n/*\n * Grid examples\n *\n * Highlight the grid columns within the docs so folks can see their padding,\n * alignment, sizing, etc.\n */\n\n.show-grid {\n  margin-bottom: 15px;\n}\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: #eee;\n  background-color: rgba(86,61,124,.15);\n  border: 1px solid #ddd;\n  border: 1px solid rgba(86,61,124,.2);\n}\n\n\n/*\n * Examples\n *\n * Isolated sections of example content for each component or feature. Usually\n * followed by a code snippet.\n */\n\n.bs-example {\n  position: relative;\n  padding: 45px 15px 15px;\n  margin: 0 -15px 15px;\n  border-color: #e5e5e5 #eee #eee;\n  border-style: solid;\n  border-width: 1px 0;\n  -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n          box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n}\n/* Echo out a label for the example */\n.bs-example:after {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #959595;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  content: \"Example\";\n}\n\n/* Tweak display of the code snippets when following an example */\n.bs-example + .highlight {\n  margin: -15px -15px 15px;\n  border-width: 0 0 1px;\n  border-radius: 0;\n}\n\n/* Make the examples and snippets not full-width */\n@media (min-width: 768px) {\n  .bs-example {\n    margin-right: 0;\n    margin-left: 0;\n    background-color: #fff;\n    border-color: #ddd;\n    border-width: 1px;\n    border-radius: 4px 4px 0 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .bs-example + .highlight {\n    margin-top: -16px;\n    margin-right: 0;\n    margin-left: 0;\n    border-width: 1px;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n}\n\n/* Undo width of container */\n.bs-example .container {\n  width: auto;\n}\n\n/* Tweak content of examples for optimum awesome */\n.bs-example > p:last-child,\n.bs-example > ul:last-child,\n.bs-example > ol:last-child,\n.bs-example > blockquote:last-child,\n.bs-example > .form-control:last-child,\n.bs-example > .table:last-child,\n.bs-example > .navbar:last-child,\n.bs-example > .jumbotron:last-child,\n.bs-example > .alert:last-child,\n.bs-example > .panel:last-child,\n.bs-example > .list-group:last-child,\n.bs-example > .well:last-child,\n.bs-example > .progress:last-child,\n.bs-example > .table-responsive:last-child > .table {\n  margin-bottom: 0;\n}\n.bs-example > p > .close {\n  float: none;\n}\n\n/* Typography */\n.bs-example-type .table .type-info {\n  color: #999;\n  vertical-align: middle;\n}\n.bs-example-type .table td {\n  padding: 15px 0;\n  border-color: #eee;\n}\n.bs-example-type .table tr:first-child td {\n  border-top: 0;\n}\n.bs-example-type h1,\n.bs-example-type h2,\n.bs-example-type h3,\n.bs-example-type h4,\n.bs-example-type h5,\n.bs-example-type h6 {\n  margin: 0;\n}\n\n/* Contextual background colors */\n.bs-example-bg-classes p {\n  padding: 15px;\n}\n\n/* Images */\n.bs-example > .img-circle,\n.bs-example > .img-rounded,\n.bs-example > .img-thumbnail {\n  margin: 5px;\n}\n\n/* Tables */\n.bs-example > .table-responsive > .table {\n  background-color: #fff;\n}\n\n/* Buttons */\n.bs-example > .btn,\n.bs-example > .btn-group {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.bs-example > .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n/* Forms */\n.bs-example-control-sizing select,\n.bs-example-control-sizing input[type=\"text\"] + input[type=\"text\"] {\n  margin-top: 10px;\n}\n.bs-example-form .input-group {\n  margin-bottom: 10px;\n}\n.bs-example > textarea.form-control {\n  resize: vertical;\n}\n\n/* List groups */\n.bs-example > .list-group {\n  max-width: 400px;\n}\n\n/* Navbars */\n.bs-example .navbar:last-child {\n  margin-bottom: 0;\n}\n.bs-navbar-top-example,\n.bs-navbar-bottom-example {\n  z-index: 1;\n  padding: 0;\n  overflow: hidden; /* cut the drop shadows off */\n}\n.bs-navbar-top-example .navbar-header,\n.bs-navbar-bottom-example .navbar-header {\n  margin-left: 0;\n}\n.bs-navbar-top-example .navbar-fixed-top,\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  position: relative;\n  margin-right: 0;\n  margin-left: 0;\n}\n.bs-navbar-top-example {\n  padding-bottom: 45px;\n}\n.bs-navbar-top-example:after {\n  top: auto;\n  bottom: 15px;\n}\n.bs-navbar-top-example .navbar-fixed-top {\n  top: -1px;\n}\n.bs-navbar-bottom-example {\n  padding-top: 45px;\n}\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  bottom: -1px;\n}\n.bs-navbar-bottom-example .navbar {\n  margin-bottom: 0;\n}\n@media (min-width: 768px) {\n  .bs-navbar-top-example .navbar-fixed-top,\n  .bs-navbar-bottom-example .navbar-fixed-bottom {\n    position: absolute;\n  }\n}\n\n/* Pagination */\n.bs-example .pagination {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n/* Pager */\n.bs-example > .pager {\n  margin-top: 0;\n}\n\n/* Example modals */\n.bs-example-modal {\n  background-color: #f5f5f5;\n}\n.bs-example-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  z-index: 1;\n  display: block;\n}\n.bs-example-modal .modal-dialog {\n  left: auto;\n  margin-right: auto;\n  margin-left: auto;\n}\n.custom-modal {\n  width: 90%;\n}\n\n/* Example dropdowns */\n.bs-example > .dropdown > .dropdown-toggle {\n  float: left;\n}\n.bs-example > .dropdown > .dropdown-menu {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n/* Example tabbable tabs */\n.bs-example-tabs .nav-tabs {\n  margin-bottom: 15px;\n}\n\n/* Tooltips */\n.bs-example-tooltips {\n  text-align: center;\n}\n.bs-example-tooltips > .btn {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n/* Popovers */\n.bs-example-popover {\n  padding-bottom: 24px;\n  background-color: #f9f9f9;\n}\n.bs-example-popover .popover {\n  position: relative;\n  display: block;\n  float: left;\n  width: 260px;\n  margin: 20px;\n}\n\n/* Scrollspy demo on fixed height div */\n.scrollspy-example {\n  position: relative;\n  height: 200px;\n  margin-top: 10px;\n  overflow: auto;\n}\n\n/* MenuItem */\n.bs-example .dropdown-menu.open {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n\n/*\n * Code snippets\n *\n * Generated via Pygments and Jekyll, these are snippets of HTML, CSS, and JS.\n */\n\n.highlight {\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n  border-radius: 4px;\n}\n.highlight pre {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  word-break: normal;\n  word-wrap: nowrap;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.highlight pre code {\n  font-size: inherit;\n  color: #333; /* Effectively the base text color */\n}\n.highlight pre code:first-child {\n  display: inline-block;\n  padding-right: 45px;\n}\n\n\n/*\n * Responsive tests\n *\n * Generate a set of tests to show the responsive utilities in action.\n */\n\n/* Responsive (scrollable) doc tables */\n.table-responsive .highlight pre {\n  white-space: normal;\n}\n\n/* Utility classes table  */\n.bs-table th small,\n.responsive-utilities th small {\n  display: block;\n  font-weight: normal;\n  color: #999;\n}\n.responsive-utilities tbody th {\n  font-weight: normal;\n}\n.responsive-utilities td {\n  text-align: center;\n}\n.responsive-utilities td.is-visible {\n  color: #468847;\n  background-color: #dff0d8 !important;\n}\n.responsive-utilities td.is-hidden {\n  color: #ccc;\n  background-color: #f9f9f9 !important;\n}\n\n/* Responsive tests */\n.responsive-utilities-test {\n  margin-top: 5px;\n}\n.responsive-utilities-test .col-xs-6 {\n  margin-bottom: 10px;\n}\n.responsive-utilities-test span {\n  display: block;\n  padding: 15px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.1;\n  text-align: center;\n  border-radius: 4px;\n}\n.visible-on .col-xs-6 .hidden-xs,\n.visible-on .col-xs-6 .hidden-sm,\n.visible-on .col-xs-6 .hidden-md,\n.visible-on .col-xs-6 .hidden-lg,\n.hidden-on .col-xs-6 .hidden-xs,\n.hidden-on .col-xs-6 .hidden-sm,\n.hidden-on .col-xs-6 .hidden-md,\n.hidden-on .col-xs-6 .hidden-lg {\n  color: #999;\n  border: 1px solid #ddd;\n}\n.visible-on .col-xs-6 .visible-xs-block,\n.visible-on .col-xs-6 .visible-sm-block,\n.visible-on .col-xs-6 .visible-md-block,\n.visible-on .col-xs-6 .visible-lg-block,\n.hidden-on .col-xs-6 .visible-xs-block,\n.hidden-on .col-xs-6 .visible-sm-block,\n.hidden-on .col-xs-6 .visible-md-block,\n.hidden-on .col-xs-6 .visible-lg-block {\n  color: #468847;\n  background-color: #dff0d8;\n  border: 1px solid #d6e9c6;\n}\n\n\n/*\n * Glyphicons\n *\n * Special styles for displaying the icons and their classes in the docs.\n */\n\n.bs-glyphicons {\n  margin: 0 -10px 20px;\n  overflow: hidden;\n}\n.bs-glyphicons-list {\n  padding-left: 0;\n  list-style: none;\n}\n.bs-glyphicons li {\n  float: left;\n  width: 25%;\n  height: 115px;\n  padding: 10px;\n  font-size: 10px;\n  line-height: 1.4;\n  text-align: center;\n  background-color: #f9f9f9;\n  border: 1px solid #fff;\n}\n.bs-glyphicons .glyphicon {\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-size: 24px;\n}\n.bs-glyphicons .glyphicon-class {\n  display: block;\n  text-align: center;\n  word-wrap: break-word; /* Help out IE10+ with class names */\n}\n.bs-glyphicons li:hover {\n  color: #fff;\n  background-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .bs-glyphicons {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .bs-glyphicons li {\n    width: 12.5%;\n    font-size: 12px;\n  }\n}\n\n\n/*\n * Customizer\n *\n * Since this is so form control heavy, we have quite a few styles to customize\n * the display of inputs, headings, and more. Also included are all the download\n * buttons and actions.\n */\n\n.bs-customizer .toggle {\n  float: right;\n  margin-top: 25px;\n}\n\n/* Headings and form contrls */\n.bs-customizer label {\n  margin-top: 10px;\n  font-weight: 500;\n  color: #555;\n}\n.bs-customizer h2 {\n  padding-top: 30px;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-customizer h3 {\n  margin-bottom: 0;\n}\n.bs-customizer h4 {\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n.bs-customizer .bs-callout h4 {\n  margin-top: 0; /* lame, but due to specificity we have to duplicate */\n  margin-bottom: 5px;\n}\n.bs-customizer input[type=\"text\"] {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  background-color: #fafafa;\n}\n.bs-customizer .help-block {\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n/* For the variables, use regular weight */\n#less-section label {\n  font-weight: normal;\n}\n\n.bs-customizer-input {\n  float: left;\n  width: 33.333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n/* Downloads */\n.bs-customize-download .btn-outline {\n  padding: 20px;\n}\n\n/* Error handling */\n.bs-customizer-alert {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  padding: 15px 0;\n  color: #fff;\n  background-color: #d9534f;\n  border-bottom: 1px solid #b94441;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n          box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n}\n.bs-customizer-alert .close {\n  margin-top: -4px;\n  font-size: 24px;\n}\n.bs-customizer-alert p {\n  margin-bottom: 0;\n}\n.bs-customizer-alert .glyphicon {\n  margin-right: 5px;\n}\n.bs-customizer-alert pre {\n  margin: 10px 0 0;\n  color: #fff;\n  background-color: #a83c3a;\n  border-color: #973634;\n  -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n          box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n}\n\n\n/*\n * Brand guidelines\n *\n * Extra styles for displaying wordmarks, logos, etc.\n */\n\n/* Logo series wrapper */\n.bs-brand-logos {\n  display: table;\n  width: 100%;\n  margin-bottom: 15px;\n  overflow: hidden;\n  color: #563d7c;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n}\n\n/* Individual items */\n.bs-brand-item {\n  padding: 60px 0;\n  text-align: center;\n}\n.bs-brand-item + .bs-brand-item {\n  border-top: 1px solid #fff;\n}\n.bs-brand-logos .inverse {\n  color: #fff;\n  background-color: #563d7c;\n}\n.bs-brand-item .svg {\n  width: 144px;\n  height: 144px;\n}\n\n/* Heading content within */\n.bs-brand-item h1,\n.bs-brand-item h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.bs-brand-item .bs-docs-booticon {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/* Make the icons stand out on what is/isn't okay */\n.bs-brand-item .glyphicon {\n  width: 30px;\n  height: 30px;\n  margin: 10px auto -10px;\n  line-height: 30px;\n  color: #fff;\n  border-radius: 50%;\n}\n.bs-brand-item .glyphicon-ok {\n  background-color: #5cb85c;\n}\n.bs-brand-item .glyphicon-remove {\n  background-color: #d9534f;\n}\n\n@media (min-width: 768px) {\n  .bs-brand-item {\n    display: table-cell;\n    width: 1%;\n  }\n  .bs-brand-item + .bs-brand-item {\n    border-top: 0;\n    border-left: 1px solid #fff;\n  }\n  .bs-brand-item h1 {\n    font-size: 60px;\n  }\n}\n\n\n/*\n * Miscellaneous\n *\n * Odds and ends for optimum docs display.\n */\n\n/* Examples gallery: space out content better */\n.bs-examples .thumbnail {\n  margin-bottom: 10px;\n}\n.bs-examples h4 {\n  margin-bottom: 5px;\n}\n.bs-examples p {\n  margin-bottom: 20px;\n}\n\n/* Pseudo :focus state for showing how it looks in the docs */\n#focusedInput {\n  border-color: rgb(204,204,204); /* Restate unfocused value to make CSSLint happy that there's a pre-CSS3 fallback*/\n  border-color: rgba(82,168,236,.8);\n  outline: 0;\n  outline: thin dotted \\9; /* IE6-9 */\n  -webkit-box-shadow: 0 0 8px rgba(82,168,236,.6);\n          box-shadow: 0 0 8px rgba(82,168,236,.6);\n}\n\n\n/*\n * ZeroClipboard styles\n */\n\n.zero-clipboard {\n  position: relative;\n  display: none;\n}\n.btn-clipboard {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  display: block;\n  padding: 5px 8px;\n  font-size: 12px;\n  color: #777;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #e1e1e8;\n  border-radius: 0 4px 0 4px;\n}\n.btn-clipboard-hover {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .zero-clipboard {\n    display: block;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 43 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n * React-Bootstrap Documentation\n * Special styles for presenting react-bootstrap's documentation and code examples.\n * Based on the Bootstrap Documentation styles and overridden as necessary.\n */\n\nbody {\n  font-family: 'Source Sans Pro', 'helvetica neue', 'Avenir Next', 'Avenir',Arial, sans-serif;\n}\n\n.bs-docs-section h1 {\n  font-size: 42px\n}\n\n.bs-docs-nav .navbar-nav > li > a {\n  color: #333;\n}\n.bs-docs-footer {\n  padding-top: 20px;\n  text-align: left;\n}\n.bs-docs-nav .navbar-collapse {\n  overflow: hidden;\n}\n.bs-docs-nav {\n    box-shadow: 0 3px 3px rgba(0,0,0,0.175);\n}\n\n.bs-docs-header p {\n  font-weight: lighter;\n}\n\n\n.bs-docs-header a {\n  color: white;\n  font-weight: normal;\n}\n.btn-outline-inverse {\n  border-color: white;\n  transition: color .15s ease;\n}\n.bs-docs-header a:hover,\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active,\n.bs-docs-nav .navbar-brand {\n  color: #1D976C;\n}\n\n.bs-docs-masthead, .bs-docs-header {\n  background:         linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* W3C */\n\n  filter: none;\n  color: #e9e9e9;\n}\n\n.bs-docs-masthead {\n  margin-bottom: 20px;\n}\n\n.bs-docs-header h1 {\n  color: #ffffff;\n}\n\n.bs-docs-header p {\n  color: #ffffff;\n}\n\na.back-to-top {\n  font-size: 13px;\n  margin-top: 0;\n}\n\n.bs-docs-sidebar .nav>li>a {\n  color: #767676;\n  font-size: 14px;\n}\n\n.bs-docs-sidebar .nav>li>a:hover, .bs-docs-sidebar .nav>li>a:focus {\n  color: #42b983;\n  border-left: 1px solid #42b983;\n}\n\n.back-to-top:hover {\n  color: #42b983;\n}\n\n\n.CodeMirror, .CodeMirror-scroll {\n  height: auto;\n}\n\n.bs-example .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n.bs-example .static-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  left: auto;\n  bottom: auto;\n  z-index: 1;\n  display: block;\n}\n\n.bs-docs-booticon {\n  background-size: contain;\n  border: 0;\n  width: 200px;\n  height: 200px;\n}\n\n.bs-example-popover-contained {\n  height: 200px;\n}\n\n.bs-example-popover-contained > div {\n  position: relative;\n}\n\n.bs-example-popover-scroll {\n  overflow: scroll;\n  height: 200px;\n}\n\n.bs-example-popover-scroll > div {\n  position: relative;\n  padding: 100px 0;\n}\n\n.playground {\n  margin-bottom: 36px;\n}\n\n.bs-example {\n  margin-bottom: 0;\n}\n\n.bs-example + .highlight {\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top: none;\n  border-bottom-right-radius: 0;\n}\n\n.code-toggle {\n  float: right;\n  display: inline-block;\n  position: relative;\n  top: -1px;\n  background: #fafafa;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border: 1px solid #e1e1e8;\n  border-top: none;\n  padding: 4px 8px;\n}\n\n@media (min-width: 768px) {\n  .code-toggle {\n    background: #fff;\n  }\n}\n\n.code-toggle.open {\n  background: #f8f5ec;\n}\n\n/* Minimal CSS Needed for contained modals */\n.modal-container {\n  position: relative;\n}\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute;\n}\n\n.prop-table {\n  background-color: white;\n}\n\n.bs-example.tooltip-static .tooltip {\n  position: relative;\n  display: inline-block;\n  margin: 5px 10px;\n\n}\n\n.bs-example .super-colors {\n  background: -moz-linear-gradient( top ,\n      rgba(255, 0, 0, 1) 0%,\n      rgba(255, 255, 0, 1) 15%,\n      rgba(0, 255, 0, 1) 30%,\n      rgba(0, 255, 255, 1) 50%,\n      rgba(0, 0, 255, 1) 65%,\n      rgba(255, 0, 255, 1) 80%,\n      rgba(255, 0, 0, 1) 100%);\n  background: -webkit-gradient(linear,  left top,  left bottom,\n      color-stop(0%, rgba(255, 0, 0, 1)),\n      color-stop(15%, rgba(255, 255, 0, 1)),\n      color-stop(30%, rgba(0, 255, 0, 1)),\n      color-stop(50%, rgba(0, 255, 255, 1)),\n      color-stop(65%, rgba(0, 0, 255, 1)),\n      color-stop(80%, rgba(255, 0, 255, 1)),\n      color-stop(100%, rgba(255, 0, 0, 1)));\n}\n\n/*.bs-example .custom-menu > ul > li {\n    padding: 0 20px;\n}*/\n\n.anchor,\n.anchor:hover,\n.anchor:active,\n.anchor:focus {\n  color: black;\n  text-decoration: none;\n  position: relative;\n}\n.anchor-icon {\n  font-size: 90%;\n  padding-top: 0.1em;\n  position: absolute;\n  left: -0.8em;\n  opacity: 0;\n}\n\nh1:hover .anchor-icon,\nh1 a:focus .anchor-icon,\nh2:hover .anchor-icon,\nh2 a:focus .anchor-icon,\nh3:hover .anchor-icon,\nh3 a:focus .anchor-icon,\nh4:hover .anchor-icon,\nh4 a:focus .anchor-icon {\n  opacity: 0.5;\n}\n\n.prop-desc pre {\n  border-radius: 0;\n  border-width: 0;\n  border-left-width: 3px;\n}\n\n.prop-desc-heading {\n  margin-bottom: 10px;\n}\n\n.bs-callout {\n    padding: 20px;\n    margin: 20px 0;\n    border: 1px solid #eee;\n    border-left-width: 5px;\n    border-radius: 3px;\n}\n.bs-callout h4 {\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n    margin-bottom: 0;\n}\n.bs-callout code {\n    border-radius: 3px;\n}\n.bs-callout+.bs-callout {\n    margin-top: -5px;\n}\n.bs-callout-default {\n    border-left-color: #777;\n}\n.bs-callout-default h4 {\n    color: #777;\n}\n.bs-callout-primary {\n    border-left-color: #428bca;\n}\n.bs-callout-primary h4 {\n    color: #428bca;\n}\n.bs-callout-success {\n    border-left-color: #42b983;\n}\n.bs-callout-success h4 {\n    color: #42b983;\n}\n.bs-callout-danger {\n    border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n    color: #d9534f;\n}\n.bs-callout-warning {\n    border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n    color: #f0ad4e;\n}\n.bs-callout-info {\n    border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n    color: #5bc0de;\n}\n", ""]);
	
	// exports


/***/ },
/* 47 */
/***/ function(module, exports) {

	
	/* **********************************************
	     Begin prism-core.js
	********************************************** */
	
	self = (typeof window !== 'undefined')
		? window   // if in browser
		: (
			(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
		);
	
	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */
	
	var Prism = (function(){
	
	// Private helper vars
	var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
	
	var _ = self.Prism = {
		util: {
			encode: function (tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
				} else if (_.util.type(tokens) === 'Array') {
					return tokens.map(_.util.encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},
	
			type: function (o) {
				return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
			},
	
			// Deep clone a language definition (e.g. to extend it)
			clone: function (o) {
				var type = _.util.type(o);
	
				switch (type) {
					case 'Object':
						var clone = {};
	
						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = _.util.clone(o[key]);
							}
						}
	
						return clone;
	
					case 'Array':
						return o.map(function(v) { return _.util.clone(v); });
				}
	
				return o;
			}
		},
	
		languages: {
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);
	
				for (var key in redef) {
					lang[key] = redef[key];
				}
	
				return lang;
			},
	
			/**
			 * Insert a token before another token in a language literal
			 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
			 * we cannot just provide an object, we need anobject and a key.
			 * @param inside The key (or language id) of the parent
			 * @param before The key to insert before. If not provided, the function appends instead.
			 * @param insert Object with the key/value pairs to insert
			 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || _.languages;
				var grammar = root[inside];
				
				if (arguments.length == 2) {
					insert = arguments[1];
					
					for (var newToken in insert) {
						if (insert.hasOwnProperty(newToken)) {
							grammar[newToken] = insert[newToken];
						}
					}
					
					return grammar;
				}
				
				var ret = {};
	
				for (var token in grammar) {
	
					if (grammar.hasOwnProperty(token)) {
	
						if (token == before) {
	
							for (var newToken in insert) {
	
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}
	
						ret[token] = grammar[token];
					}
				}
				
				// Update references in other language definitions
				_.languages.DFS(_.languages, function(key, value) {
					if (value === root[inside] && key != inside) {
						this[key] = ret;
					}
				});
	
				return root[inside] = ret;
			},
	
			// Traverse a language definition with Depth First Search
			DFS: function(o, callback, type) {
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
	
						if (_.util.type(o[i]) === 'Object') {
							_.languages.DFS(o[i], callback);
						}
						else if (_.util.type(o[i]) === 'Array') {
							_.languages.DFS(o[i], callback, i);
						}
					}
				}
			}
		},
	
		highlightAll: function(async, callback) {
			var elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
	
			for (var i=0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, callback);
			}
		},
	
		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;
	
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}
	
			if (parent) {
				language = (parent.className.match(lang) || [,''])[1];
				grammar = _.languages[language];
			}
	
			if (!grammar) {
				return;
			}
	
			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
	
			// Set language on the parent, for styling
			parent = element.parentNode;
	
			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
	
			var code = element.textContent;
	
			if(!code) {
				return;
			}
	
			code = code.replace(/^(?:\r?\n|\r)/,'');
	
			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};
	
			_.hooks.run('before-highlight', env);
	
			if (async && self.Worker) {
				var worker = new Worker(_.filename);
	
				worker.onmessage = function(evt) {
					env.highlightedCode = Token.stringify(JSON.parse(evt.data), language);
	
					_.hooks.run('before-insert', env);
	
					env.element.innerHTML = env.highlightedCode;
	
					callback && callback.call(env.element);
					_.hooks.run('after-highlight', env);
				};
	
				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code
				}));
			}
			else {
				env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
	
				_.hooks.run('before-insert', env);
	
				env.element.innerHTML = env.highlightedCode;
	
				callback && callback.call(element);
	
				_.hooks.run('after-highlight', env);
			}
		},
	
		highlight: function (text, grammar, language) {
			var tokens = _.tokenize(text, grammar);
			return Token.stringify(_.util.encode(tokens), language);
		},
	
		tokenize: function(text, grammar, language) {
			var Token = _.Token;
	
			var strarr = [text];
	
			var rest = grammar.rest;
	
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}
	
				delete grammar.rest;
			}
	
			tokenloop: for (var token in grammar) {
				if(!grammar.hasOwnProperty(token) || !grammar[token]) {
					continue;
				}
	
				var patterns = grammar[token];
				patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
	
				for (var j = 0; j < patterns.length; ++j) {
					var pattern = patterns[j],
						inside = pattern.inside,
						lookbehind = !!pattern.lookbehind,
						lookbehindLength = 0,
						alias = pattern.alias;
	
					pattern = pattern.pattern || pattern;
	
					for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop
	
						var str = strarr[i];
	
						if (strarr.length > text.length) {
							// Something went terribly wrong, ABORT, ABORT!
							break tokenloop;
						}
	
						if (str instanceof Token) {
							continue;
						}
	
						pattern.lastIndex = 0;
	
						var match = pattern.exec(str);
	
						if (match) {
							if(lookbehind) {
								lookbehindLength = match[1].length;
							}
	
							var from = match.index - 1 + lookbehindLength,
								match = match[0].slice(lookbehindLength),
								len = match.length,
								to = from + len,
								before = str.slice(0, from + 1),
								after = str.slice(to + 1);
	
							var args = [i, 1];
	
							if (before) {
								args.push(before);
							}
	
							var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias);
	
							args.push(wrapped);
	
							if (after) {
								args.push(after);
							}
	
							Array.prototype.splice.apply(strarr, args);
						}
					}
				}
			}
	
			return strarr;
		},
	
		hooks: {
			all: {},
	
			add: function (name, callback) {
				var hooks = _.hooks.all;
	
				hooks[name] = hooks[name] || [];
	
				hooks[name].push(callback);
			},
	
			run: function (name, env) {
				var callbacks = _.hooks.all[name];
	
				if (!callbacks || !callbacks.length) {
					return;
				}
	
				for (var i=0, callback; callback = callbacks[i++];) {
					callback(env);
				}
			}
		}
	};
	
	var Token = _.Token = function(type, content, alias) {
		this.type = type;
		this.content = content;
		this.alias = alias;
	};
	
	Token.stringify = function(o, language, parent) {
		if (typeof o == 'string') {
			return o;
		}
	
		if (_.util.type(o) === 'Array') {
			return o.map(function(element) {
				return Token.stringify(element, language, o);
			}).join('');
		}
	
		var env = {
			type: o.type,
			content: Token.stringify(o.content, language, parent),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language,
			parent: parent
		};
	
		if (env.type == 'comment') {
			env.attributes['spellcheck'] = 'true';
		}
	
		if (o.alias) {
			var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
			Array.prototype.push.apply(env.classes, aliases);
		}
	
		_.hooks.run('wrap', env);
	
		var attributes = '';
	
		for (var name in env.attributes) {
			attributes += name + '="' + (env.attributes[name] || '') + '"';
		}
	
		return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
	
	};
	
	if (!self.document) {
		if (!self.addEventListener) {
			// in Node.js
			return self.Prism;
		}
	 	// In worker
		self.addEventListener('message', function(evt) {
			var message = JSON.parse(evt.data),
			    lang = message.language,
			    code = message.code;
	
			self.postMessage(JSON.stringify(_.util.encode(_.tokenize(code, _.languages[lang]))));
			self.close();
		}, false);
	
		return self.Prism;
	}
	
	// Get current script and highlight
	var script = document.getElementsByTagName('script');
	
	script = script[script.length - 1];
	
	if (script) {
		_.filename = script.src;
	
		if (document.addEventListener && !script.hasAttribute('data-manual')) {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
	
	return self.Prism;
	
	})();
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}
	
	
	/* **********************************************
	     Begin prism-markup.js
	********************************************** */
	
	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?.+?\?>/,
		'doctype': /<!DOCTYPE.+?>/,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[\w:-]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[\w-]+?:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /=|>|"/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[\w:-]+/,
					inside: {
						'namespace': /^[\w-]+?:/
					}
				}
	
			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};
	
	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function(env) {
	
		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});
	
	
	/* **********************************************
	     Begin prism-css.js
	********************************************** */
	
	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'punctuation': /[;:]/
			}
		},
		'url': /url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*(?=\s*\{)/,
		'string': /("|')(\\\n|\\?.)*?\1/,
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'punctuation': /[\{\};:]/,
		'function': /[-a-z0-9]+(?=\()/i
	};
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/i,
				inside: {
					'tag': {
						pattern: /<style[\w\W]*?>|<\/style>/i,
						inside: Prism.languages.markup.tag.inside
					},
					rest: Prism.languages.css
				},
				alias: 'language-css'
			}
		});
		
		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}
	
	/* **********************************************
	     Begin prism-clike.js
	********************************************** */
	
	Prism.languages.clike = {
		'comment': [
			{
				pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
				lookbehind: true
			},
			{
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true
			}
		],
		'string': /("|')(\\\n|\\?.)*?\1/,
		'class-name': {
			pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': {
			pattern: /[a-z0-9_]+\(/i,
			inside: {
				punctuation: /\(/
			}
		},
		'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
		'operator': /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,
		'ignore': /&(lt|gt|amp);/i,
		'punctuation': /[{}[\];(),.:]/
	};
	
	
	/* **********************************************
	     Begin prism-javascript.js
	********************************************** */
	
	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,
		'function': /(?!\d)[a-z0-9_$]+(?=\()/i
	});
	
	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true
		}
	});
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i,
				inside: {
					'tag': {
						pattern: /<script[\w\W]*?>|<\/script>/i,
						inside: Prism.languages.markup.tag.inside
					},
					rest: Prism.languages.javascript
				},
				alias: 'language-javascript'
			}
		});
	}
	
	
	/* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */
	
	(function () {
		if (!self.Prism || !self.document || !document.querySelector) {
			return;
		}
	
		self.Prism.fileHighlight = function() {
	
			var Extensions = {
				'js': 'javascript',
				'html': 'markup',
				'svg': 'markup',
				'xml': 'markup',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell'
			};
	
			Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function(pre) {
				var src = pre.getAttribute('data-src');
				var extension = (src.match(/\.(\w+)$/) || [,''])[1];
				var language = Extensions[extension] || extension;
	
				var code = document.createElement('code');
				code.className = 'language-' + language;
	
				pre.textContent = '';
	
				code.textContent = 'Loading…';
	
				pre.appendChild(code);
	
				var xhr = new XMLHttpRequest();
	
				xhr.open('GET', src, true);
	
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {
	
						if (xhr.status < 400 && xhr.responseText) {
							code.textContent = xhr.responseText;
	
							Prism.highlightElement(code);
						}
						else if (xhr.status >= 400) {
							code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
						}
						else {
							code.textContent = '✖ Error: File does not exist or is empty';
						}
					}
				};
	
				xhr.send(null);
			});
	
		};
	
		self.Prism.fileHighlight();
	
	})();


/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	(function () {
	
		if (typeof self === 'undefined' || !self.Prism || !self.document) {
			return;
		}
	
		// The languages map is built automatically with gulp
		var Languages = /*languages_placeholder[*/{ "css": "CSS", "clike": "C-like", "javascript": "JavaScript", "abap": "ABAP", "actionscript": "ActionScript", "apacheconf": "Apache Configuration", "apl": "APL", "applescript": "AppleScript", "aspnet": "ASP.NET (C#)", "autoit": "AutoIt", "autohotkey": "AutoHotkey", "basic": "BASIC", "csharp": "C#", "cpp": "C++", "coffeescript": "CoffeeScript", "css-extras": "CSS Extras", "fsharp": "F#", "glsl": "GLSL", "http": "HTTP", "inform7": "Inform 7", "latex": "LaTeX", "lolcode": "LOLCODE", "matlab": "MATLAB", "mel": "MEL", "nasm": "NASM", "nginx": "nginx", "nsis": "NSIS", "objectivec": "Objective-C", "ocaml": "OCaml", "php": "PHP", "php-extras": "PHP Extras", "powershell": "PowerShell", "jsx": "React JSX", "rest": "reST (reStructuredText)", "sas": "SAS", "sass": "Sass (Sass)", "scss": "Sass (Scss)", "sql": "SQL", "typescript": "TypeScript", "vhdl": "VHDL", "vim": "vim", "wiki": "Wiki markup", "yaml": "YAML" } /*]*/;
		Prism.hooks.add('before-highlight', function (env) {
			var pre = env.element.parentNode;
			if (!pre || !/pre/i.test(pre.nodeName)) {
				return;
			}
			var language = Languages[env.language] || env.language.substring(0, 1).toUpperCase() + env.language.substring(1);
			pre.setAttribute('data-language', language);
		});
	})();

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(50)


/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"getting-started\">\n    <h1 class=\"page-header\"><a href=\"#getting-started\" class=\"anchor\">Getting started</a></h1>\n    <div class=\"bs-callout bs-callout-success\">\n      <h4>About this project</h4>\n      <p>\n        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.\n        As a result no dependency on jQuery or Bootstrap's JavaScript is required.\n        The only required dependencies are:\n      </p>\n      <ul>\n        <li><a href=\"http://vuejs.org/\">Vue.js</a>\n          (required ^0.12, test with 0.12.10).</li>\n        <li><a href=\"http://getbootstrap.com/\">Bootstrap CSS</a>\n          (required 3.x.x, test with 3.3.5).\n          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.\n        </li>\n      </ul>\n    </div>\n    <h2>CommonJS</h2>\n    <pre><code class=\"language-javascript\">\n$ npm install vue-strap\n\nvar alert = require('vue-strap/lib/alert');\n// or\nvar alert = require('vue-strap').alert;\n\nnew Vue({\n  components: {\n    'alert': alert\n  }\n})\n    </code></pre>\n    <h2>ES6</h2>\n    <pre><code class=\"language-javascript\">\n$ npm install vue-strap\n\nimport alert from 'vue-strap/src/alert'\n// or\nimport { alert } from 'vue-strap'\n\nnew Vue({\n  components: {\n    alert\n  }\n})\n    </code></pre>\n    <h2>Browser globals</h2>\n    <p>\n      The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.js</code> with\n      all components exported in the <code>window.VueStrap</code> object.\n    </p>\n    <pre><code class=\"language-markup\">\n&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;path/to/vue-strap.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  var alert = VueStrap.alert\n&lt;/script&gt;\n    </code></pre>\n  </div>";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52)
	module.exports = __webpack_require__(54)
	module.exports.template = __webpack_require__(57)


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".vue-affix {\n    position: fixed;\n  }", ""]);
	
	// exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	exports['default'] = {
	  props: {
	    offset: {
	      type: Number,
	      'default': 0
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false,
	      styles: {}
	    };
	  },
	  methods: {
	    scrolling: function scrolling() {
	      var scrollTop = this.getScroll(window, true);
	      var elementOffset = this.getOffset(this.$el);
	      if (!this.affixed && scrollTop > elementOffset.top) {
	        this.affixed = true;
	        this.styles = {
	          top: this.offset + 'px',
	          left: elementOffset.left + 'px',
	          width: this.$el.offsetWidth + 'px'
	        };
	      }
	      if (this.affixed && scrollTop < elementOffset.top) {
	        this.affixed = false;
	        this.styles = {};
	      }
	    },
	    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
	    getScroll: function getScroll(w, top) {
	      var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	      var method = 'scroll' + (top ? 'Top' : 'Left');
	      if (typeof ret !== 'number') {
	        var d = w.document;
	        // ie6,7,8 standard mode
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	          // quirks mode
	          ret = d.body[method];
	        }
	      }
	      return ret;
	    },
	    getOffset: function getOffset(element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = this.getScroll(window, true);
	      var scrollLeft = this.getScroll(window);
	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }
	  },
	  ready: function ready() {
	    this._scrollEvent = _utilsEventListenerJs2['default'].listen(window, 'scroll', this.scrolling);
	    this._resizeEvent = _utilsEventListenerJs2['default'].listen(window, 'resize', this.scrolling);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._scrollEvent) {
	      this._scrollEvent.remove();
	    }
	    if (this._resizeEvent) {
	      this._resizeEvent.remove();
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  }
	};
	
	exports['default'] = EventListener;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "<div>\n<div v-class=\"vue-affix:affixed\"\n  v-style=\"styles\">\n  <content></content>\n</div>\n</div>";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(59)


/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container bs-docs-container\">\n    <div class=\"row\">\n        <content></content>\n    </div>\n  </div>";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.template = __webpack_require__(61)


/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<header class=\"navbar navbar-static-top bs-docs-nav\" id=\"top\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbar\" aria-controls=\"bs-navbar\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a href=\"../\" class=\"navbar-brand\">VueStrap</a>\n      </div>\n      <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li>\n            <a href=\"#accordion\" style=\"color:#19986B\">Components</a>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"https://github.com/yuche/vue-strap\">\n            <span class=\"icon-github-circled\"></span>\n            GitHub\n          </a></li>\n        </ul>\n      </nav>\n    </div>\n  </header>";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63)
	module.exports = __webpack_require__(65)
	module.exports.template = __webpack_require__(71)


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".alert-icon-float-left {\n    font-size:32px;float:left;margin-right:5px;\n  }", ""]);
	
	// exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcAlertVue = __webpack_require__(66);
	
	var _srcAlertVue2 = _interopRequireDefault(_srcAlertVue);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      showRight: false,
	      showTop: false
	    };
	  },
	  components: {
	    alert: _srcAlertVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67)
	module.exports = __webpack_require__(69)
	module.exports.template = __webpack_require__(70)


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(68);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".fade-transition {\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave {\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 2;\n}", ""]);
	
	// exports


/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    type: {
	      type: String
	    },
	    dismissable: {
	      type: Boolean,
	      "default": false
	    },
	    show: {
	      type: Boolean,
	      "default": true,
	      twoWay: true
	    },
	    duration: {
	      type: Number,
	      "default": 0
	    },
	    width: {
	      type: String
	    },
	    placement: {
	      type: String
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && !!this.duration) {
	        this._timeout = setTimeout(function () {
	          return _this.show = false;
	        }, this.duration);
	      }
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<div\n    v-show=\"show\"\n    class=\"alert\"\n    v-class=\"\n      alert-success:type == 'success',\n      alert-warning:type == 'warning',\n      alert-info:type == 'info',\n      alert-danger:type == 'danger',\n      top: placement === 'top',\n      top-right: placement === 'top-right'\n    \"\n    v-transition=\"fade\"\n    v-style=\"width:width\"\n    role=\"alert\">\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\n      v-on=\"click:show = false\">\n      <span >&times;</span>\n    </button>\n    <content>\n    </content>\n  </div>";

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"alert\">\n    <h1 class=\"page-header\">\n      <a href=\"#alert\" class=\"anchor\">Alert</a>\n    </h1>\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-success btn-lg\"\n        v-on=\"click:showRight = !showRight\">\n        Click to toggle alert on right\n      </button>\n\n      <button class=\"btn btn-danger btn-lg\"\n        v-on=\"click:showTop = !showTop\">\n        Click to toggle alert on top\n      </button>\n      <hr>\n      <alert type=\"success\" >\n        <strong>Well Done!</strong>\n        You successfully read this important alert message.\n      </alert>\n\n      <alert type=\"info\" >\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n      </alert>\n\n      <alert type=\"danger\" dismissable>\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n      </alert>\n\n      <alert type=\"warning\" dismissable>\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\n      </alert>\n\n      <alert\n        show=\"{{@showRight}}\"\n        duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"top-right\"\n        dismissable\n      >\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <strong>Well Done!</strong>\n        <p>You successfully read this important alert message.</p>\n      </alert>\n\n      <alert\n        show=\"{{@showTop}}\"\n        duration=\"3000\"\n        type=\"danger\"\n        width=\"400px\"\n        placement=\"top\"\n        dismissable>\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <strong>Heads up!</strong>\n        <p>This alert needs your attention.</p>\n      </alert>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default btn-lg\"\n  v-on=\"click:showRight = !showRight\">\n  Click to toggle alert on right\n</button>\n\n<button class=\"btn btn-default btn-lg\"\n  v-on=\"click:showTop = !showTop\">\n  Click to toggle alert on top\n</button>\n<hr>\n<alert type=\"success\" >\n  <strong>Well Done!</strong>\n  You successfully read this important alert message.\n</alert>\n\n<alert type=\"info\" >\n  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n</alert>\n\n<alert type=\"danger\" dismissable>\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</alert>\n\n<alert type=\"warning\" dismissable>\n  <strong>Warning!</strong> Better check yourself, you're not looking too good.\n</alert>\n\n<alert\n  show=\"{{@showRight}}\"\n  duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable>\n  <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n  <strong>Well Done!</strong>\n  <p>You successfully read this important alert message.</p>\n</alert>\n\n<alert\n  show=\"{{@showTop}}\"\n  duration=\"3000\"\n  type=\"info\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable>\n  <span class=\"icon-info-circled alert-icon-float-left\"></span>\n  <strong>Heads up!</strong>\n  <p>This alert needs your attention.</p>\n</alert>\n\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>Whether show the component</td>\n        </tr>\n        <tr>\n          <td>dismissable</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether show close button</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of\n          <code>success</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>danger</code></td>\n          <td><code>success</code></td>\n          <td>Components styles</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>String</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\n          <td></td>\n          <td>how to position the component.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(73)
	module.exports.template = __webpack_require__(82)


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcAccordionVue = __webpack_require__(74);
	
	var _srcAccordionVue2 = _interopRequireDefault(_srcAccordionVue);
	
	var _srcPanelVue = __webpack_require__(77);
	
	var _srcPanelVue2 = _interopRequireDefault(_srcPanelVue);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      checked: true
	    };
	  },
	  components: {
	    accordion: _srcAccordionVue2['default'],
	    panel: _srcPanelVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(75)
	module.exports.template = __webpack_require__(76)


/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    oneAtATime: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    this.$on('isOpenEvent', function (child) {
	      if (_this.oneAtATime) {
	        _this.$children.forEach(function (item) {
	          if (child !== item) {
	            item.isOpen = false;
	          }
	        });
	      }
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\n  <content></content>\n</div>";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78)
	module.exports = __webpack_require__(80)
	module.exports.template = __webpack_require__(81)


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}", ""]);
	
	// exports


/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    isOpen: {
	      type: Boolean,
	      'default': false
	    },
	    header: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      height: 0
	    };
	  },
	  methods: {
	    toggleIsOpen: function toggleIsOpen() {
	      this.isOpen = !this.isOpen;
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  ready: function ready() {
	    var panel = this.$$.panel;
	    panel.style.display = 'block';
	    this.height = panel.offsetHeight;
	    panel.style.maxHeight = this.height + 'px';
	    if (!this.isOpen) panel.style.display = 'none';
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a class=\"accordion-toggle\"\n          v-on=\"click:toggleIsOpen(this)\">\n           {{ header }}\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el=\"panel\"\n      v-show=\"isOpen\"\n      v-transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <content></content>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"accordion\">\n    <h1 class=\"page-header\"><a href=\"#accordion\" class=\"anchor\">Accordion</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <input type=\"checkbox\" v-model=\"checked\">\n        Open only one at a time.\n      </p>\n      <accordion one-at-atime=\"{{checked}}\">\n        <panel header=\"Panel #1\" is-open=\"true\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #2\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #3\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #4\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n      </accordion>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"checkbox\" v-model=\"checked\">\n<label for=\"checked\">Open only one at a time.</label>\n\n<accordion one-at-atime=\"{{checked}}\">\n  <panel header=\"Panel #1\" is-open=\"true\">\n    ...\n  </panel>\n  <panel header=\"Panel #2\">\n    ...\n  </panel>\n  <panel header=\"Panel #3\">\n    ...\n  </panel>\n  <panel header=\"Panel #4\">\n    ...\n  </panel>\n</accordion>\n</script></code></pre>\n    <h2>Accordion Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>one-at-time</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Control whether expanding an item will cause the other items to close.</td>\n        </tr>\n      </tbody>\n    </table>\n    <h2>Panel Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>is-open</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether accordion group is open or closed.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84)
	module.exports = __webpack_require__(86)
	module.exports.template = __webpack_require__(93)


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    animation-iteration-count: infinite\n}\n@keyframes shake {\n    0%, 100% {transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {transform: translateX(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}", ""]);
	
	// exports


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcTooltipVue = __webpack_require__(87);
	
	var _srcTooltipVue2 = _interopRequireDefault(_srcTooltipVue);
	
	exports['default'] = {
	  components: {
	    tooltip: _srcTooltipVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88)
	module.exports = __webpack_require__(90)
	module.exports.template = __webpack_require__(92)


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(89);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  animation:fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}", ""]);
	
	// exports


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _popoverMixinsJs = __webpack_require__(91);
	
	var _popoverMixinsJs2 = _interopRequireDefault(_popoverMixinsJs);
	
	exports['default'] = {
	  mixins: [_popoverMixinsJs2['default']],
	  props: {
	    trigger: {
	      type: String,
	      'default': 'hover'
	    },
	    effect: {
	      type: String,
	      'default': 'scale'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	var PopoverMixin = {
	  props: {
	    trigger: {
	      type: String,
	      'default': 'click'
	    },
	    effect: {
	      type: String,
	      'default': 'fadein'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      'default': true
	    },
	    placement: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      },
	      show: true
	    };
	  },
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var popover = this.$$.popover;
	    var triger = this.$$.trigger.children[0];
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _utilsEventListenerJs2['default'].listen(triger, 'mouseenter', function () {
	        return _this.show = true;
	      });
	      this._mouseleaveEvent = _utilsEventListenerJs2['default'].listen(triger, 'mouseleave', function () {
	        return _this.show = false;
	      });
	    } else if (this.trigger === 'focus') {
	      this._focusEvent = _utilsEventListenerJs2['default'].listen(triger, 'focus', function () {
	        return _this.show = true;
	      });
	      this._blurEvent = _utilsEventListenerJs2['default'].listen(triger, 'blur', function () {
	        return _this.show = false;
	      });
	    } else {
	      this._clickEvent = _utilsEventListenerJs2['default'].listen(triger, 'click', this.toggle);
	    }
	
	    switch (this.placement) {
	      case 'top':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	        this.position.top = triger.offsetTop - popover.offsetHeight;
	        break;
	      case 'left':
	        this.position.left = triger.offsetLeft - popover.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	        break;
	      case 'right':
	        this.position.left = triger.offsetLeft + triger.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	        break;
	      case 'bottom':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	        this.position.top = triger.offsetTop + triger.offsetHeight;
	        break;
	      default:
	        console.log('Wrong placement prop');
	    }
	    popover.style.top = this.position.top + 'px';
	    popover.style.left = this.position.left + 'px';
	    popover.style.display = 'none';
	    this.show = !this.show;
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._blurEvent) {
	      this._blurEvent.remove();
	      this._focusEvent.remove();
	    }
	    if (this._mouseenterEvent) {
	      this._mouseenterEvent.remove();
	      this._mouseleaveEvent.remove();
	    }
	    if (this._clickEvent) this._clickEvent.remove();
	  }
	};
	
	exports['default'] = PopoverMixin;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<span v-el=\"trigger\">\n    <content>\n    </content>\n  </span>\n  <div class=\"tooltip\"\n    v-class=\"\n    top:placement === 'top',\n    left:placement === 'left',\n    right:placement === 'right',\n    bottom:placement === 'bottom'\n    \"\n    v-el=\"popover\"\n    v-show=\"show\"\n    v-transition=\"{{effect}}\"\n    role=\"tooltip\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\">\n      {{{content}}}\n    </div>\n  </div>";

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"affix\">\n    <h1 class=\"page-header\"><a href=\"#affix\" class=\"anchor\">Affix</a></h1>\n    <div class=\"bs-example\">\n      <h3>\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<affix offset=\"\">\n  <nav class=\"sidebar\">\n    <ul>\n      <li>...</li>\n      <li>...</li>\n      <li>...</li>\n    </ul>\n  </nav>\n</affix>\n</script></code></pre>\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>offset</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Pixels to offset from top of screen when calculating position of scroll.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(95)
	module.exports.template = __webpack_require__(102)


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcAsideVue = __webpack_require__(96);
	
	var _srcAsideVue2 = _interopRequireDefault(_srcAsideVue);
	
	exports['default'] = {
	  components: {
	    sidebar: _srcAsideVue2['default']
	  },
	  data: function data() {
	    return {
	      showLeft: false,
	      showRight: false
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97)
	module.exports = __webpack_require__(99)
	module.exports.template = __webpack_require__(101)


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".aside-open {\n    transition: transform 0.3s;\n  }\n  .aside-open.has-push-right {\n    transform: translateX(-300px);\n  }\n  .aside {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      z-index: 1049;\n      overflow: auto;\n      background: #fff;\n  }\n  .aside.left {\n    left: 0;\n    right: auto;\n  }\n  .aside.right {\n    left: auto;\n    right: 0;\n  }\n\n  .slideleft-enter {\n    animation:slideleft-in .3s;\n  }\n  .slideleft-leave {\n    animation:slideleft-out .3s;\n  }\n  @keyframes slideleft-in {\n    0% {\n      transform: translateX(-100%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @keyframes slideleft-out {\n    0% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      transform: translateX(-100%);\n      opacity: 0;\n    }\n  }\n  .slideright-enter {\n    animation:slideright-in .3s;\n  }\n  .slideright-leave {\n    animation:slideright-out .3s;\n  }\n  @keyframes slideright-in {\n    0% {\n      transform: translateX(100%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @keyframes slideright-out {\n    0% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      transform: translateX(100%);\n      opacity: 0;\n    }\n  }\n\n  .aside:focus {\n      outline: 0\n  }\n\n  @media (max-width: 991px) {\n      .aside {\n          min-width:240px\n      }\n  }\n\n  .aside.left {\n      right: auto;\n      left: 0\n  }\n\n  .aside.right {\n      right: 0;\n      left: auto\n  }\n\n  .aside .aside-dialog .aside-header {\n      border-bottom: 1px solid #e5e5e5;\n      min-height: 16.43px;\n      padding: 6px 15px;\n      background: #337ab7;\n      color: #fff\n  }\n\n  .aside .aside-dialog .aside-header .close {\n      margin-right: -8px;\n      padding: 4px 8px;\n      color: #fff;\n      font-size: 25px;\n      opacity: .8\n  }\n\n  .aside .aside-dialog .aside-body {\n      position: relative;\n      padding: 15px\n  }\n\n  .aside .aside-dialog .aside-footer {\n      padding: 15px;\n      text-align: right;\n      border-top: 1px solid #e5e5e5\n  }\n\n  .aside .aside-dialog .aside-footer .btn+.btn {\n      margin-left: 5px;\n      margin-bottom: 0\n  }\n\n  .aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n      margin-left: -1px\n  }\n\n  .aside .aside-dialog .aside-footer .btn-block+.btn-block {\n      margin-left: 0\n  }\n\n  .aside-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1040;\n      opacity: 0;\n      transition: opacity .3s ease;\n      background-color: #000\n  }\n\n\n  .aside-backdrop.in {\n      opacity: .5;\n      filter: alpha(opacity=50)\n  }", ""]);
	
	// exports


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	var _utilsGetScrollBarWidthJs = __webpack_require__(100);
	
	var _utilsGetScrollBarWidthJs2 = _interopRequireDefault(_utilsGetScrollBarWidthJs);
	
	exports['default'] = {
	  props: {
	    show: {
	      type: Boolean,
	      require: true,
	      twoWay: true
	    },
	    placement: {
	      type: String,
	      'default': 'right'
	    },
	    header: {
	      type: String
	    },
	    width: {
	      type: Number,
	      'default': '320'
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var backdrop = document.createElement('div');
	      var body = document.body;
	      backdrop.className = 'aside-backdrop';
	      var scrollBarWidth = (0, _utilsGetScrollBarWidthJs2['default'])();
	      if (val) {
	        body.appendChild(backdrop);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        // request property that requires layout to force a layout
	        var x = backdrop.clientHeight;
	        backdrop.className += ' in';
	        this._clickEvent = _utilsEventListenerJs2['default'].listen(backdrop, 'click', this.close);
	      } else {
	        if (this._clickEvent) this._clickEvent.remove();
	        backdrop = document.querySelector('.aside-backdrop');
	        backdrop.className = 'aside-backdrop';
	        setTimeout(function () {
	          body.classList.remove('modal-open');
	          body.style.paddingRight = '0';
	          body.removeChild(backdrop);
	        }, 300);
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function () {
	  var inner = document.createElement('p');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  outer.style.position = 'absolute';
	  outer.style.top = '0px';
	  outer.style.left = '0px';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '200px';
	  outer.style.height = '150px';
	  outer.style.overflow = 'hidden';
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 === w2) w2 = outer.clientWidth;
	
	  document.body.removeChild(outer);
	
	  return w1 - w2;
	};
	
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aside\"\n    v-style=\"width:width + 'px'\"\n    v-class=\"\n    left:placement === 'left',\n    right:placement === 'right'\n    \"\n    v-show=\"show\"\n    v-transition=\"{{this.placement === 'left' ? 'slideleft' : 'slideright'}}\">\n    <div class=\"aside-dialog\">\n      <div class=\"aside-content\">\n        <div class=\"aside-header\">\n          <button type=\"button\" class=\"close\" v-on='click:close'><span>&times;</span></button>\n          <h4 class=\"aside-title\">{{header}}</h4>\n        </div>\n        <div class=\"aside-body\">\n          <content></content>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"aside\">\n    <h1 class=\"page-header\"><a href=\"#aside\" class=\"anchor\">Aside</a></h1>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-success btn-lg\" v-on=\"click:showRight = true\">Show Aside on right</button>\n\n      <sidebar  show=\"{{@showRight}}\" placement=\"right\" header=\"Title\" width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n          <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" v-on=\"click:showRight=false\">Close</button>\n        </div>\n      </sidebar>\n\n      <button class=\"btn btn-danger btn-lg\" v-on=\"click:showLeft = true\">Show Aside on left</button>\n\n      <sidebar  show=\"{{@showLeft}}\" placement=\"left\" header=\"Title\" width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" v-on=\"click:showLeft=false\">Close</button>\n        </div>\n      </sidebar>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button\nclass=\"btn btn-success btn-lg\"\nv-on=\"click:showRight = true\">Show Aside on right</button>\n\n<sidebar show=\"{{@showRight}}\" placement=\"right\" header=\"Title\" width=\"350\">\n...\n</sidebar>\n\n<button\nclass=\"btn btn-danger btn-lg\"\nv-on=\"click:showLeft = true\">Show Aside on left</button>\n\n<sidebar show=\"{{@showLeft}}\" placement=\"left\" header=\"Title\" width=\"350\">\n...\n</sidebar></script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td></td>\n          <td>Whether show the component.</td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>, one of <code>left</code>, <code>right</code></td>\n          <td><code>right</code></td>\n          <td>how to position the component.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Header text of the aside component.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(104)
	module.exports.template = __webpack_require__(151)


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcCarouselVue = __webpack_require__(105);
	
	var _srcCarouselVue2 = _interopRequireDefault(_srcCarouselVue);
	
	var _srcSliderVue = __webpack_require__(148);
	
	var _srcSliderVue2 = _interopRequireDefault(_srcSliderVue);
	
	exports['default'] = {
	  components: {
	    carousel: _srcCarouselVue2['default'],
	    slider: _srcSliderVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(106)
	module.exports = __webpack_require__(108)
	module.exports.template = __webpack_require__(147)


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(107);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-2949497a .carousel-control {\n    cursor: pointer;\n}", ""]);
	
	// exports


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray = __webpack_require__(109)['default'];
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	exports['default'] = {
	  props: {
	    indicators: {
	      type: Boolean,
	      'default': true
	    },
	    controls: {
	      type: Boolean,
	      'default': true
	    },
	    interval: {
	      type: Number,
	      'default': 5000
	    }
	  },
	  components: {
	    'indicator': {
	      inherit: true,
	      template: '<li v-repeat="indicator" v-on="click:handleIndicatorClick($index)" v-class="active:$index === activeIndex"</li>',
	      methods: {
	        handleIndicatorClick: function handleIndicatorClick(index) {
	          if (this.isAnimating) return false;
	          this.isAnimating = true;
	          this.activeIndex = index;
	        }
	      }
	    }
	  },
	  data: function data() {
	    return {
	      indicator: [],
	      activeIndex: 0,
	      isAnimating: false
	    };
	  },
	  computed: {
	    slider: function slider() {
	      return this.$el.querySelectorAll('.item');
	    }
	  },
	  watch: {
	    activeIndex: function activeIndex(newVal, oldVal) {
	      newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal);
	    }
	  },
	  methods: {
	    slide: function slide(direction, selected, prev) {
	      var _this = this;
	
	      if (this._prevSelectedEvent) this._prevSelectedEvent.remove();
	      if (this._selectedEvent) this._selectedEvent.remove();
	
	      var prevSelectedEl = this.slider[prev];
	      var selectedEl = this.slider[selected];
	      var transitionendFn = function transitionendFn() {
	        [].concat(_toConsumableArray(_this.slider)).forEach(function (el) {
	          return el.className = 'item';
	        });
	        selectedEl.classList.add('active');
	        _this.isAnimating = false;
	      };
	
	      direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev');
	      // request property that requires layout to force a layout
	      var x = selectedEl.clientHeight;
	      this._prevSelectedEvent = _utilsEventListenerJs2['default'].listen(prevSelectedEl, 'transitionend', transitionendFn);
	      this._selectedEvent = _utilsEventListenerJs2['default'].listen(selectedEl, 'transitionend', transitionendFn);
	      prevSelectedEl.classList.add(direction);
	      selectedEl.classList.add(direction);
	    },
	    nextClick: function nextClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0;
	    },
	    prevClick: function prevClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1;
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    var intervalID = null;
	    var el = this.$el;
	    function intervalManager(flag, func, time) {
	      flag ? intervalID = setInterval(func, time) : clearInterval(intervalID);
	    }
	    if (!!this.interval) {
	      intervalManager(true, this.nextClick, this.interval);
	      el.addEventListener('mouseenter', function () {
	        return intervalManager(false);
	      });
	      el.addEventListener('mouseleave', function () {
	        return intervalManager(true, _this2.nextClick, _this2.interval);
	      });
	    }
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Array$from = __webpack_require__(110)["default"];
	
	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(112);
	__webpack_require__(134);
	module.exports = __webpack_require__(120).Array.from;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(113)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(116)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(114)
	  , defined   = __webpack_require__(115);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(117)
	  , $def            = __webpack_require__(118)
	  , $redef          = __webpack_require__(121)
	  , hide            = __webpack_require__(122)
	  , has             = __webpack_require__(127)
	  , SYMBOL_ITERATOR = __webpack_require__(128)('iterator')
	  , Iterators       = __webpack_require__(131)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(132)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(123).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(133)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(119)
	  , core      = __webpack_require__(120)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 119 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 120 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(122);

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(123)
	  , createDesc = __webpack_require__(124);
	module.exports = __webpack_require__(125) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(126)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 127 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(129)('wks')
	  , Symbol = __webpack_require__(119).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(130))('Symbol.' + name));
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(119)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(123)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(122)(IteratorPrototype, __webpack_require__(128)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(124)(1,next)});
	  __webpack_require__(133)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(127)
	  , hide = __webpack_require__(122)
	  , TAG  = __webpack_require__(128)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(135)
	  , $def        = __webpack_require__(118)
	  , toObject    = __webpack_require__(137)
	  , call        = __webpack_require__(138)
	  , isArrayIter = __webpack_require__(141)
	  , toLength    = __webpack_require__(142)
	  , getIterFn   = __webpack_require__(143);
	$def($def.S + $def.F * !__webpack_require__(146)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(136);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(115);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(139);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(140);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(131)
	  , ITERATOR  = __webpack_require__(128)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(114)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(144)
	  , ITERATOR  = __webpack_require__(128)('iterator')
	  , Iterators = __webpack_require__(131);
	module.exports = __webpack_require__(120).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(145)
	  , TAG = __webpack_require__(128)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 145 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(128)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel slide v-2949497a\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\n    <indicator></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <content>\n    </content>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" v-on=\"click:prevClick\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" v-on=\"click:nextClick\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>";

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(149)
	module.exports.template = __webpack_require__(150)


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray = __webpack_require__(109)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	  computed: {
	    show: function show() {
	      return this.activeIndex === this.index;
	    }
	  },
	  ready: function ready() {
	    this.index = [].concat(_toConsumableArray(this.$el.parentNode.children)).indexOf(this.$el);
	    this.$parent.indicator.push(this.index);
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<div class=\"item\">\n    <content></content>\n  </div>";

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"carousel\">\n    <h1 class=\"page-header\"><a href=\"#caoursel\" class=\"anchor\">Carousel</a></h1>\n    <div class=\"bs-example\">\n      <carousel>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=one\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #1</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=two\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #2</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=three\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #3</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n      </carousel>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<carousel>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=one\">\n      <div class=\"carousel-caption\">\n       ...\n     </div>\n  </slider>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=two\">\n  </slider>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=three\">\n  </slider>\n</carousel>\n</script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>indicators</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the indicators.</td>\n      </tr>\n      <tr>\n        <td>controls</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the direction controls.</td>\n      </tr>\n      <tr>\n        <td>interval</td>\n        <td><code>Number</code></td>\n        <td><code>5000</code></td>\n        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(153)
	module.exports.template = __webpack_require__(166)


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcRadioGroupVue = __webpack_require__(154);
	
	var _srcRadioGroupVue2 = _interopRequireDefault(_srcRadioGroupVue);
	
	var _srcRadioBtnVue = __webpack_require__(157);
	
	var _srcRadioBtnVue2 = _interopRequireDefault(_srcRadioBtnVue);
	
	var _srcCheckboxGroupVue = __webpack_require__(160);
	
	var _srcCheckboxGroupVue2 = _interopRequireDefault(_srcCheckboxGroupVue);
	
	var _srcCheckboxBtnVue = __webpack_require__(163);
	
	var _srcCheckboxBtnVue2 = _interopRequireDefault(_srcCheckboxBtnVue);
	
	exports['default'] = {
	  components: {
	    radio: _srcRadioBtnVue2['default'],
	    radioGroup: _srcRadioGroupVue2['default'],
	    checkboxGroup: _srcCheckboxGroupVue2['default'],
	    checkbox: _srcCheckboxBtnVue2['default']
	  },
	  data: function data() {
	    return {
	      checkboxValue: [],
	      radioValue: ''
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(155)
	module.exports.template = __webpack_require__(156)


/***/ },
/* 155 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    type: {
	      type: String,
	      'default': 'default'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\n    <content></content>\n  </div>";

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(158)
	module.exports.template = __webpack_require__(159)


/***/ },
/* 158 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      "default": false
	    }
	  },
	  computed: {
	    type: function type() {
	      return this.$parent.type;
	    },
	    active: function active() {
	      return this.$parent.value === this.value;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.$parent.value = this.value;
	    }
	  },
	  created: function created() {
	    if (this.checked) this.$parent.value = this.value;
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "<label class=\"btn\"\n  v-class=\"active:active,\n  btn-success:type == 'success',\n  btn-warning:type == 'warning',\n  btn-info:type == 'info',\n  btn-danger:type == 'danger',\n  btn-default:type == 'default',\n  btn-primary:type == 'primary',\n  \">\n\n    <input type=\"radio\" autocomplete=\"off\"\n    checked=\"{{checked}}\"\n    v-on=\"click:handleClick\">\n\n    <content></content>\n\n  </label>";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(161)
	module.exports.template = __webpack_require__(162)


/***/ },
/* 161 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    value: {
	      type: Array,
	      'default': function _default() {
	        return [];
	      }
	    },
	    type: {
	      type: String,
	      'default': 'default'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\n    <content></content>\n  </div>";

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(164)
	module.exports.template = __webpack_require__(165)


/***/ },
/* 164 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      "default": false
	    }
	  },
	  computed: {
	    type: function type() {
	      return this.$parent.type;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      var index = parent.value.indexOf(this.value);
	      index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      this.checked = !this.checked;
	    }
	  },
	  created: function created() {
	    if (this.checked) this.$parent.value.push(this.value);
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = "<label class=\"btn\"\n  v-class=\"active:checked,\n  btn-success:type == 'success',\n  btn-warning:type == 'warning',\n  btn-info:type == 'info',\n  btn-danger:type == 'danger',\n  btn-default:type == 'default',\n  btn-primary:type == 'primary',\n  \">\n\n    <input type=\"checkbox\" autocomplete=\"off\"\n    checked=\"{{checked}}\"\n    v-on=\"click:handleClick\">\n\n    <content></content>\n\n  </label>";

/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"buttons\">\n    <h1 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Buttons</a></h1>\n    <div class=\"bs-example\">\n      <h4>Checkbox</h4>\n      <checkbox-group value=\"{{checkboxValue}}\">\n        <checkbox value=\"left\">Left</checkbox>\n        <checkbox value=\"middle\" checked>Middle</checkbox>\n        <checkbox value=\"right\">Right</checkbox>\n      </checkbox-group>\n      <p>\n        <pre>\nCheckbox value: {{checkboxValue | json}}\n        </pre>\n      </p>\n      <hr>\n      <h4>Radio</h4>\n      <radio-group value=\"{{@radioValue}}\" type=\"primary\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n\n      <radio-group value=\"{{@radioValue}}\" type=\"success\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n      <p>\n        <pre>\nRadio value: {{radioValue}}\n        </pre>\n      </p>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<checkbox-group value=\"{{checkboxValue}}\">\n  <checkbox value=\"left\">Left</checkbox>\n  <checkbox value=\"middle\" checked>Middle</checkbox>\n  <checkbox value=\"right\">Right</checkbox>\n</checkbox-group>\n\n<radio-group value=\"{{@radioValue}}\" type=\"primary\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n\n<radio-group value=\"{{@radioValue}}\" type=\"success\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n</script></code></pre>\n\n    <h2>Group options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td>Array</td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of <code>default</code>\n          <code>primary</code>\n          <code>danger</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>success</code></td>\n          <td><code>default</code></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(168)
	module.exports.template = __webpack_require__(184)


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcDatepickerVue = __webpack_require__(169);
	
	var _srcDatepickerVue2 = _interopRequireDefault(_srcDatepickerVue);
	
	var _srcSelectVue = __webpack_require__(174);
	
	var _srcSelectVue2 = _interopRequireDefault(_srcSelectVue);
	
	var _srcOptionVue = __webpack_require__(179);
	
	var _srcOptionVue2 = _interopRequireDefault(_srcOptionVue);
	
	exports['default'] = {
	  components: {
	    datepicker: _srcDatepickerVue2['default'],
	    select: _srcSelectVue2['default'],
	    option: _srcOptionVue2['default']
	  },
	  data: function data() {
	    return {
	      disabled: [],
	      value: 'Oct/06/2015',
	      format: ['MMM/dd/yyyy']
	    };
	  },
	  watch: {
	    disabled: function disabled() {
	      this.$.dp.getDateRange();
	    },
	    format: function format() {
	      this.value = this.$.dp.stringify(new Date(this.value));
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(170)
	module.exports = __webpack_require__(172)
	module.exports.template = __webpack_require__(173)


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".datepicker{\n    position: relative;\n    display: inline-block;\n}\n\n.datepicker-popup{\n    position: absolute;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background: #fff;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\n    width: 218px;\n\n}\n.datepicker-body{\n    padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span{\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n}\n.datepicker-ctrl p {\n    width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-mouthRange span{\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray{\n    color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n}\n.datepicker-mouthRange {\n  margin-top: 10px\n}\n.datepicker-mouthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-mouthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n    background-color : #eeeeee;\n}\n\n.datepicker-weekRange span{\n    font-weight: bold;\n}\n.datepicker-label{\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n}\n.datepicker-ctrl{\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n}\n.month-btn{\n  font-weight: bold;\n  -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n}\n.datepicker-preBtn{\n    left: 2px;\n}\n.datepicker-nextBtn{\n    right: 2px;\n}", ""]);
	
	// exports


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	exports['default'] = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      'default': 'MMMM/dd/yyyy'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      'default': function _default() {
	        return [];
	      }
	    },
	    width: {
	      type: String,
	      'default': '200px'
	    }
	  },
	  data: function data() {
	    return {
	      weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: false,
	      displayMouthView: false,
	      displayYearView: false,
	      mouthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	    };
	  },
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMouthView = this.displayMouthView = false;
	    },
	    inputClick: function inputClick() {
	      if (this.displayMouthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, mouths, date);
	      } else {
	        this.currDate = new Date(year + 10, mouths, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, mouths, date);
	      } else {
	        this.currDate = new Date(year + 1, mouths, date);
	      }
	    },
	    yearSelect: function yearSelect(el, e) {
	      e.stopPropagation();
	      this.displayYearView = false;
	      this.displayMouthView = true;
	      this.currDate = new Date(el.$el.innerHTML, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(date, el) {
	      if (el.$el.classList[0] === 'datepicker-item-disable') {
	        return false;
	      } else {
	        this.currDate = date;
	        this.value = this.stringify(this.currDate);
	        this.displayDayView = false;
	      }
	    },
	    switchMouthView: function switchMouthView() {
	      this.displayDayView = false;
	      this.displayMouthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMouthView = false;
	      this.displayYearView = true;
	    },
	    mouthSelect: function mouthSelect(index) {
	      this.displayMouthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.mouthNames[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMouth: function parseMouth(date) {
	      return this.mouthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var mouthName = this.parseMouth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, mouthName).replace(/MMM/g, mouthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      var date = new Date(str);
	      return isNaN(date.getFullYear()) ? null : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	        return 28;
	      }
	
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      var _this = this;
	
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var i = 1; i < firstDayWeek; i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function (i) {
	        var date = new Date(time.year, time.month, i);
	        var week = date.getDay();
	        var sclass = '';
	        _this.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
	        });
	
	        if (i === time.day) {
	          if (_this.value) {
	            var valueDate = _this.parse(_this.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = 'datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this.dateRange.push({
	          text: i,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var i = 1; i <= dayCount; i++) {
	        _loop(i);
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var i = 1; i <= nextMonthNeed; i++) {
	          this.dateRange.push({
	            text: i,
	            date: new Date(nextMonth.year, nextMonth.month, i),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    this.$dispatch('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    this._closeEvent = _utilsEventListenerJs2['default'].listen(window, 'click', function (e) {
	      if (!_this2.$el.contains(e.target)) _this2.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "<div class=\"datepicker\">\n    <input class=\"form-control datepicker-input\" type=\"text\"\n    v-style=\"width:width\"\n    v-on=\"click:inputClick\"\n    v-model=\"value\"/>\n      <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n          <div class=\"datepicker-inner\">\n              <div class=\"datepicker-body\">\n                  <div class=\"datepicker-ctrl\">\n                      <span class=\"month-btn datepicker-preBtn\" v-on=\"click:preNextMonthClick(0)\">&lt;</span>\n                      <span class=\"month-btn datepicker-nextBtn\" v-on=\"click:preNextMonthClick(1)\">&gt;</span>\n                      <p v-on=\"click:switchMouthView\">\n                      {{stringifyDayHeader(currDate)}}\n                      </p>\n                  </div>\n                  <div class=\"datepicker-weekRange\">\n                      <span v-repeat=\"w:weekRange\">{{w}}</span>\n                  </div>\n                  <div class=\"datepicker-dateRange\">\n                      <span v-repeat=\"d:dateRange\" v-class=\"d.sclass\" v-on=\"click:daySelect(d.date,this)\">{{d.text}}</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"datepicker-popup\" v-show=\"displayMouthView\">\n        <div class=\"datepicker-inner\">\n            <div class=\"datepicker-body\">\n                <div class=\"datepicker-ctrl\">\n                    <span class=\"month-btn datepicker-preBtn\" v-on=\"click:preNextYearClick(0)\">&lt;</span>\n                    <span class=\"month-btn datepicker-nextBtn\" v-on=\"click:preNextYearClick(1)\">&gt;</span>\n                    <p v-on=\"click:switchDecadeView\">\n                    {{stringifyYearHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"datepicker-mouthRange\">\n                    <span v-repeat=\"m:mouthNames\"\n                    v-class=\"datepicker-dateRange-item-active:\n                    (this.mouthNames[this.parse(this.value).getMonth()]  === m) &&\n                    this.currDate.getFullYear() === this.parse(this.value).getFullYear()\"\n                    v-on=\"click:mouthSelect($index)\">\n                      {{m.substr(0,3)}}\n                    </span>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n        <div class=\"datepicker-inner\">\n            <div class=\"datepicker-body\">\n                <div class=\"datepicker-ctrl\">\n                    <span class=\"month-btn datepicker-preBtn\" v-on=\"click:preNextDecadeClick(0)\">&lt;</span>\n                    <span class=\"month-btn datepicker-nextBtn\" v-on=\"click:preNextDecadeClick(1)\">&gt;</span>\n                    <p>\n                    {{stringifyDecadeHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"datepicker-mouthRange decadeRange\">\n                    <span v-repeat=\"decade:decadeRange\"\n                    v-class=\"datepicker-dateRange-item-active:\n                    this.parse(this.value).getFullYear() === decade.text\"\n                    v-on=\"click:yearSelect(this,$event)\">\n                      {{decade.text}}\n                    </span>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(175)
	module.exports = __webpack_require__(177)
	module.exports.template = __webpack_require__(178)


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(176);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".btn-group .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\n   pointer-events: none;\n  opacity: .9;\n}", ""]);
	
	// exports


/***/ },
/* 177 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    value: {
	      twoWay: true,
	      type: Array,
	      'default': function _default() {
	        return [];
	      }
	    },
	    placeholder: {
	      type: String,
	      'default': 'Nothing Selected'
	    },
	    multiple: {
	      type: Boolean,
	      'default': false
	    },
	    limit: {
	      type: Number,
	      'default': 1024
	    }
	  },
	  data: function data() {
	    return {
	      show: false,
	      showNotify: false
	    };
	  },
	  computed: {
	    showPlaceholder: function showPlaceholder() {
	      return this.value.length <= 0;
	    }
	  },
	  watch: {
	    value: function value(val) {
	      var _this = this;
	
	      var timeout = undefined;
	      if (timeout) clearTimeout(timeout);
	      if (val.length > this.limit) {
	        this.showNotify = true;
	        this.value.pop();
	        timeout = setTimeout(function () {
	          return _this.showNotify = false;
	        }, 1000);
	      }
	    }
	  },
	  methods: {
	    toggleDropdown: function toggleDropdown() {
	      this.show = !this.show;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" v-class=\"open:show\">\n    <button v-el=\"btn\" type=\"button\" class=\"btn btn-default dropdown-toggle\" v-on=\"click:toggleDropdown,blur:this.show = false\">\n          <span class=\"placeholder\" v-show=\"showPlaceholder\">\n            {{placeholder}}\n          </span>\n          <span class=\"content\">\n            {{value.join(', ')}}\n          </span>\n          <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <content></content>\n      <div class=\"notify\" v-show=\"showNotify\" v-transition=\"fadein\">Limit reached ({{limit}} items max).</div>\n    </ul>\n  </div>";

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(180)
	module.exports = __webpack_require__(182)
	module.exports.template = __webpack_require__(183)


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(181);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, "a span.check-mark {\n    position: absolute;\n    display: inline-block;\n    right: 15px;\n    margin-top: 5px;\n  }", ""]);
	
	// exports


/***/ },
/* 182 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    value: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      chosen: false
	    };
	  },
	  computed: {
	    chosen: function chosen() {
	      return this.$parent.value.indexOf(this.value) !== -1 ? true : false;
	    }
	  },
	  methods: {
	    handleClick: function handleClick(e) {
	      e.preventDefault();
	      var parent = this.$parent;
	      var index = parent.value.indexOf(this.value);
	      if (parent.multiple) {
	        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      } else {
	        parent.value = [];
	        parent.value.push(this.value);
	        parent.show = false;
	      }
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "<li style=\"position:relative\">\n    <a v-on='mousedown:handleClick' style=\"cursor:pointer\">\n      <content></content>\n      <content select=\"span.text\">\n        {{value}}\n      </content>\n      <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\"></span>\n    </a>\n  </li>";

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"datepicker\">\n    <h1 class=\"page-header\"><a href=\"#datepicker\" class=\"anchor\">Datepicker</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\nSelected date is: {{new Date(value).toString().slice(0, -23)}}\n        </pre>\n      </p>\n      <datepicker v-ref=\"dp\" value=\"{{@value}}\" disabled-days-of-Week=\"{{disabled}}\"\n      format=\"{{format.toString()}}\"></datepicker>\n      <h4>Disabled days of week</h4>\n      <select multiple value=\"{{@disabled}}\">\n        <option value=\"{{(0).toString()}}\"></option>\n        <option value=\"{{(1).toString()}}\"></option>\n        <option value=\"{{(2).toString()}}\"></option>\n        <option value=\"{{(3).toString()}}\"></option>\n        <option value=\"{{(4).toString()}}\"></option>\n        <option value=\"{{(5).toString()}}\"></option>\n        <option value=\"{{(6).toString()}}\"></option>\n      </select>\n      <h4>Format</h4>\n      <select  value=\"{{@format}}\">\n        <option value=\"yyyy,MM,dd\"></option>\n        <option value=\"yyyy-MM-dd\"></option>\n        <option value=\"yyyy.MM.dd\"></option>\n        <option value=\"MMM/dd/yyyy\"></option>\n        <option value=\"MMMM/dd/yyyy\"></option>\n      </select>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<datepicker\n  value=\"{{@value}}\"\n  disabled-days-of-Week=\"{{disabled}}\"\n  format=\"{{format}}\">\n</datepicker>\n\n<select multiple value=\"{{@disabled}}\">\n  <option value=\"0\"></option>\n  <option value=\"1\"></option>\n  <option value=\"2\"></option>\n  <option value=\"3\"></option>\n  <option value=\"4\"></option>\n  <option value=\"5\"></option>\n  <option value=\"6\"></option>\n</select>\n<select  value=\"{{@format}}\">\n  <option value=\"yyyy,MM,dd\"></option>\n  <option value=\"yyyy-MM-dd\"></option>\n  <option value=\"yyyy.MM.dd\"></option>\n  <option value=\"MMM/dd/yyyy\"></option>\n  <option value=\"MMMM/dd/yyyy\"></option>\n</select>\n    </script></code></pre>\n    <h2>Option</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Value of the input DOM</td>\n        </tr>\n        <tr>\n          <td>Width</td>\n          <td><code>String</code></td>\n          <td>200px</td>\n          <td>Width of the input DOM</td>\n        </tr>\n        <tr>\n          <td>format</td>\n          <td><code>String</code></td>\n          <td><code>MMMM/dd/yyyy</code></td>\n          <td>The date format, combination of d, dd, M, MM ,MMM , MMMM, yyyy.</td>\n        </tr>\n        <tr>\n          <td>disabledDaysOfWeek</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).\n             Multiple values should be comma-separated.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(186)
	module.exports.template = __webpack_require__(190)


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcDropdownVue = __webpack_require__(187);
	
	var _srcDropdownVue2 = _interopRequireDefault(_srcDropdownVue);
	
	exports['default'] = {
	  components: {
	    dropdown: _srcDropdownVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(188)
	module.exports.template = __webpack_require__(189)


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsEventListener = __webpack_require__(56);
	
	var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);
	
	exports['default'] = {
	  methods: {
	    toggleDropdown: function toggleDropdown(e) {
	      e.preventDefault();
	      this.$el.classList.toggle('open');
	    }
	  },
	  ready: function ready() {
	    var el = this.$el;
	    var toggle = el.querySelector('[data-toggle="dropdown"]');
	    toggle.style.borderRadius = '4px';
	    toggle.addEventListener('click', this.toggleDropdown);
	    this._closeEvent = _utilsEventListener2['default'].listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) el.classList.remove('open');
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\">\n    <content select=\"[data-toggle='dropdown']\" ></content>\n    <content select=\"ul.dropdown-menu\"></content>\n  </div>";

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"dropdown\">\n    <h1 class=\"page-header\"><a href=\"#dropdown\" class=\"anchor\">Dropdown</a></h1>\n    <div class=\"bs-example\">\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n          Action\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Action</a></li>\n          <li><a href=\"#\">Another action</a></li>\n          <li><a href=\"#\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-success\" data-toggle=\"dropdown\">\n          Action <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Action</a></li>\n          <li><a href=\"#\">Another action</a></li>\n          <li><a href=\"#\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"dropdown\">\n          Action <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Action</a></li>\n          <li><a href=\"#\">Another action</a></li>\n          <li><a href=\"#\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <div class=\"btn-group btn-group-justified\" role=\"group\">\n        <a href=\"#\" class=\"btn btn-default\" role=\"button\">Left</a>\n        <a href=\"#\" class=\"btn btn-default\" role=\"button\">Middle</a>\n        <dropdown>\n          <a href=\"#\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n            Dropdown <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </dropdown>\n      </div>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<dropdown>\n  <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n    Action\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li role=\"separator\" class=\"divider\"></li>\n    <li><a href=\"#\">Separated link</a></li>\n  </ul>\n</dropdown>\n</script></code></pre>\n    <h2>Usage</h2>\n    <p>\n      Just use as <a target=\"_blank\" href=\"http://getbootstrap.com/javascript/#dropdowns\">original Bootstrap way</a>.\n      Working on progress, considered refactoring with directive. Currently the other components(Select, etc..) not depend on this component.\n    </p>\n  </div>";

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(192)
	module.exports.template = __webpack_require__(198)


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcModalVue = __webpack_require__(193);
	
	var _srcModalVue2 = _interopRequireDefault(_srcModalVue);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      showModal: false,
	      bigModal: false,
	      zoomModal: false,
	      showCustomModal: false
	    };
	  },
	  components: {
	    modal: _srcModalVue2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(194)
	module.exports = __webpack_require__(196)
	module.exports.template = __webpack_require__(197)


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(195);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    -moz-transform: scale(0.1);\n    -ms-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n}", ""]);
	
	// exports


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsGetScrollBarWidthJs = __webpack_require__(100);
	
	var _utilsGetScrollBarWidthJs2 = _interopRequireDefault(_utilsGetScrollBarWidthJs);
	
	var _utilsEventListenerJs = __webpack_require__(56);
	
	var _utilsEventListenerJs2 = _interopRequireDefault(_utilsEventListenerJs);
	
	exports['default'] = {
	  props: {
	    title: {
	      type: String,
	      'default': ''
	    },
	    show: {
	      require: true,
	      type: Boolean,
	      twoWay: true
	    },
	    width: {
	      type: Number,
	      'default': 600
	    },
	    callback: {
	      type: Function,
	      'default': function _default() {}
	    },
	    effect: {
	      type: String,
	      'default': 'fade'
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      var el = this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _utilsGetScrollBarWidthJs2['default'])();
	      if (val) {
	        el.querySelector('.modal-content').focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          return el.classList.add('in');
	        }, 0);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        this._blurModalContentEvent = _utilsEventListenerJs2['default'].listen(this.$el, 'click', function (e) {
	          if (e.target === el) _this.show = false;
	        });
	      } else {
	        if (this._blurModalContentEvent) this._blurModalContentEvent.remove();
	        el.classList.remove('in');
	        setTimeout(function () {
	          el.style.display = 'none';
	          body.classList.remove('modal-open');
	          body.style.paddingRight = '0';
	        }, 300);
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal fade\" role=\"dialog\"\n    v-class=\"\n    fade:effect === 'fade',\n    zoom:effect === 'zoom'\"\n    >\n    <div class=\"modal-dialog\" role=\"document\"\n      v-style=\"width: width + 'px'\n      \">\n      <div class=\"modal-content\">\n        <content select=\".modal-header\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" v-on='click:close'><span>&times;</span></button>\n            <h4 class=\"modal-title\" >{{title}}</h4>\n          </div>\n        </content>\n        <content select=\".modal-body\">\n          <div class=\"modal-body\"></div>\n        </content>\n        <content select=\".modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" v-on='click:close'>Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" v-on='click:callback'>Save changes</button>\n          </div>\n        </content>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"modal\">\n    <h1 class=\"page-header\"><a href=\"#modal\" class=\"anchor\">Modal</a></h1>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-default btn-lg\" v-on=\"click:showModal = true\">Show modal</button>\n      <modal title=\"Modal title\" show=\"{{@showModal}}\" effect=\"fade\" width=\"400\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal <b>Title</b></h4>\n        </div>\n        <div class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-success btn-lg\" v-on=\"click:bigModal = true\">Big modal</button>\n      <modal title=\"Big Modal\" show=\"{{@bigModal}}\" effect=\"fade\" width=\"800\">\n        <div class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-primary btn-lg\" v-on=\"click:zoomModal = true\">Zoom modal</button>\n      <modal title=\"Zoom Modal\" show=\"{{@zoomModal}}\" effect=\"zoom\" width=\"400\">\n        <div class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-default btn-lg\" v-on=\"click:showCustomModal = true\">Show custom modal</button>\n      <modal show=\"{{@showCustomModal}}\" effect=\"fade\" width=\"400\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n        </div>\n        <div class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" v-on='click:showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" v-on='click:showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default btn-lg\"\n  v-on=\"click:showModal = true\"\n  >Show modal\n</button>\n<modal show=\"{{@showModal}}\" effect=\"fade\" width=\"400\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-primary btn-lg\"\n  v-on=\"click:bigModal = true\">\n  Big modal\n</button>\n<modal title=\"Big Modal\" show=\"{{@bigModal}}\" effect=\"fade\" width=\"800\">\n  <div class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-success btn-lg\"\n  v-on=\"click:zoomModal = true\">\n  Zoom modal\n</button>\n<modal title=\"Zoom Modal\" show=\"{{@zoomModal}}\" effect=\"zoom\" width=\"400\">\n  <div class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-default btn-lg\"\n  v-on=\"click:showCustomModal = true\">\n  Show custom modal\n</button>\n<modal show=\"{{@showCustomModal}}\" effect=\"fade\" width=\"400\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      <i>Custom</i> <code>Modal</code> <b>Title</b>\n    </h4>\n  </div>\n  <div class=\"modal-body\">...</div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" v-on='click:showCustomModal = false'>Exit</button>\n    <button type=\"button\" class=\"btn btn-success\" v-on='click:showCustomModal = false'>Custom Save</button>\n  </div>\n</modal>\n  </script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Title of the modal component.</td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td><code>Number</code></td>\n        <td><code>600</code></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>callback</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>A callback Function when you click the modal primary button.</td>\n      </tr>\n    </tbody>\n  </table>\n  <h2>Usage</h2>\n  <p>\n    If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you\n    need to put custom HTML or a custom footer, you can override the header or footer block by using\n    <code>&lt;div class=\"modal-title\"&gt;...&lt;/div&gt;</code> and\n    <code>&lt;div class=\"modal-footer\"&gt;...&lt;/div&gt;</code>.\n  </p>\n  </div>";

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(200)
	module.exports.template = __webpack_require__(206)


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcPopover = __webpack_require__(201);
	
	var _srcPopover2 = _interopRequireDefault(_srcPopover);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  },
	  components: {
	    popover: _srcPopover2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(202)
	module.exports = __webpack_require__(204)
	module.exports.template = __webpack_require__(205)


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(203);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  animation:scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-out {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}", ""]);
	
	// exports


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _popoverMixinsJs = __webpack_require__(91);
	
	var _popoverMixinsJs2 = _interopRequireDefault(_popoverMixinsJs);
	
	exports['default'] = {
	  mixins: [_popoverMixinsJs2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "<span v-el=\"trigger\">\n    <content>\n    </content>\n  </span>\n  <div class=\"popover\"\n    v-class=\"\n    top:placement === 'top',\n    left:placement === 'left',\n    right:placement === 'right',\n    bottom:placement === 'bottom'\n    \"\n    v-el=\"popover\"\n    v-show=\"show\"\n    v-transition=\"{{effect}}\">\n      <div class=\"arrow\"></div>\n      <h3 class=\"popover-title\" v-show=\"header\">{{title}}</h3>\n      <div class=\"popover-content\">\n        {{{content}}}\n      </div>\n  </div>";

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"popover\">\n    <h1 class=\"page-header\"><a href=\"#popover\" class=\"anchor\">Popover</a></h1>\n    <div class=\"bs-example\">\n      <popover effect=\"fade\" header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\" header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\" header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\" header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>No title</h4>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <popover effect=\"scale\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Mouseenter</button>\n        </popover>\n      </p>\n      <popover effect=\"scale\"\n      title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </popover>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<popover\n  effect=\"fade\"\n  placement=\"bottom\"\n  title=\"Title\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">Popover on bottom</button>\n</popover>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>click</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the popover is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>\n        <td><code>fade</code></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the header.</td>\n      </tr>\n      <tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the popover.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(208)
	module.exports.template = __webpack_require__(212)


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcProgressbar = __webpack_require__(209);
	
	var _srcProgressbar2 = _interopRequireDefault(_srcProgressbar);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      dynamicData: [5, 15, 25, 35, 45],
	      stackedData: [10, 20, 30, 40]
	    };
	  },
	  components: {
	    progressbar: _srcProgressbar2['default']
	  },
	  methods: {
	    dynamicClick: function dynamicClick() {
	      this.dynamicData = this.dynamicData.map(function () {
	        return Math.floor(Math.random() * 50);
	      });
	    },
	    stackedClick: function stackedClick() {
	      var i = 100;
	      this.stackedData = this.stackedData.map(function () {
	        var random = Math.floor(Math.random() * i);
	        i = i - random;
	        return random;
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(210)
	module.exports.template = __webpack_require__(211)


/***/ },
/* 210 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    now: {
	      type: Number,
	      require: true
	    },
	    label: {
	      type: Boolean,
	      "default": false
	    },
	    type: {
	      type: String
	    },
	    striped: {
	      type: Boolean,
	      "default": false
	    },
	    animated: {
	      type: Boolean,
	      "default": false
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "<div class=\"progress-bar\" role=\"progressbar\"\n    v-class=\"\n    progress-bar-success:type == 'success',\n    progress-bar-warning:type == 'warning',\n    progress-bar-info:type == 'info',\n    progress-bar-danger:type == 'danger',\n    progress-bar-striped:striped,\n    active:animated\n    \"\n    v-style=\"width:now + '%'\">\n    {{label ? now + '%':'' }}\n  </div>";

/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"progressbar\">\n    <h1 class=\"page-header\"><a href=\"#progressbar\" class=\"anchor\">Progressbar</a></h1>\n    <div class=\"bs-example\">\n      <h4>Static</h4>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar now=\"20\" type=\"success\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar now=\"40\" type=\"info\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar now=\"60\" type=\"primary\"></progressbar>\n          </div>\n        </div>\n      </div>\n\n      <hr>\n\n      <h4>\n        Dynamic\n        <button type=\"button\" class=\"btn btn-default\" v-on=\"click:dynamicClick\">Randomize</button>\n      </h4>\n      <div class=\"progress\">\n        <progressbar now=\"{{dynamicData[0] * 2}}\" type=\"info\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar now=\"{{dynamicData[1] * 2}}\" type=\"warning\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar now=\"{{dynamicData[2] * 2}}\" type=\"danger\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar now=\"{{dynamicData[3] * 2}}\" type=\"success\" striped></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar now=\"{{dynamicData[4] * 2}}\" type=\"success\" striped animated></progressbar>\n      </div>\n\n      <hr>\n\n      <h4>\n        Stacked\n        <button type=\"button\" class=\"btn btn-default\" v-on=\"click:stackedClick\">Randomize</button>\n      </h4>\n\n      <div class=\"progress\">\n        <progressbar now=\"{{stackedData[0]}}\" label type=\"warning\" striped></progressbar>\n\n        <progressbar now=\"{{stackedData[1]}}\" label type=\"success\" ></progressbar>\n\n        <progressbar now=\"{{stackedData[2]}}\" label type=\"danger\"></progressbar>\n\n        <progressbar now=\"{{stackedData[3]}}\" label type=\"primary\" striped animated></progressbar>\n      </div>\n\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- Stacked -->\n<div class=\"progress\">\n  <progressbar now=\"\" label type=\"warning\" striped></progressbar>\n\n  <progressbar now=\"\" label type=\"success\" ></progressbar>\n\n  <progressbar now=\"\" label type=\"danger\"></progressbar>\n\n  <progressbar now=\"\" label type=\"primary\" striped animated></progressbar>\n</div>\n<!-- Single -->\n<div class=\"progress\">\n  <progressbar now=\"\" label type=\"warning\" striped></progressbar>\n</div>\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>now</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td>The current value of progress completed.</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Style type. Possible values are 'success', 'warning' etc.</td>\n        </tr>\n        <tr>\n          <td>label</td>\n          <td><code>Boolean</code></td>\n          <td>false</td>\n          <td>Whether to show the label.</td>\n        </tr>\n        <tr>\n          <td>striped</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether the progressbar has striped effect or not.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(214)
	module.exports.template = __webpack_require__(215)


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcSelect = __webpack_require__(174);
	
	var _srcSelect2 = _interopRequireDefault(_srcSelect);
	
	var _srcOption = __webpack_require__(179);
	
	var _srcOption2 = _interopRequireDefault(_srcOption);
	
	exports['default'] = {
	  components: {
	    vSelect: _srcSelect2['default'],
	    vOption: _srcOption2['default']
	  },
	  data: function data() {
	    return {
	      single: [],
	      multiple: [],
	      multipleLimit: [],
	      custom: []
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"select\">\n    <h1 class=\"page-header\"><a href=\"#select\" class=\"anchor\">Select</a></h1>\n    <p>\n      This a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.\n    </p>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\nSelect data : {{single}}\n        </pre>\n      </p>\n      <v-select value=\"{{@single}}\">\n        <v-option value=\"Apple\"></v-option>\n        <v-option value=\"Banana\"></v-option>\n        <v-option value=\"Cherry\"></v-option>\n        <v-option value=\"Orange\"></v-option>\n        <v-option value=\"Grape\"></v-option>\n      </v-select>\n      <hr>\n      <h4>Multiple select</h4>\n      <p>\n        <pre>\nSelect data : {{multiple.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple value=\"{{@multiple}}\">\n        <v-option value=\"Apple\"></v-option>\n        <v-option value=\"Banana\"></v-option>\n        <v-option value=\"Cherry\"></v-option>\n        <v-option value=\"Orange\"></v-option>\n        <v-option value=\"Grape\"></v-option>\n      </v-select>\n      <hr>\n      <h4>Multiple select limit</h4>\n      <p>\n        <pre>\nSelect data : {{multipleLimit.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple limit=\"2\" value=\"{{@multipleLimit}}\">\n        <v-option value=\"Apple\"></v-option>\n        <v-option value=\"Banana\"></v-option>\n        <v-option value=\"Cherry\"></v-option>\n        <v-option value=\"Orange\"></v-option>\n        <v-option value=\"Grape\"></v-option>\n      </v-select>\n      <hr>\n      <h4>Custom template</h4>\n      <p>\n        <pre>\nSelect data : {{custom.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple value=\"{{@custom}}\">\n        <v-option value=\"Star\"><span class=\"glyphicon glyphicon-star\"></span> Star</v-option>\n        <v-option value=\"Heart\"><span class=\"glyphicon glyphicon-heart\"></span> Heart</v-option>\n        <v-option value=\"Film\"><span class=\"glyphicon glyphicon-film\"></span> Film</v-option>\n        <v-option value=\"Inbox\"><span class=\"glyphicon glyphicon-inbox\"></span> Inbox</v-option>\n      </v-select>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-select>\n  <v-option value=\"Apple\"></v-option>\n  <v-option value=\"Banana\"></v-option>\n  <v-option value=\"Cherry\"></v-option>\n  <v-option value=\"Orange\"></v-option>\n  <v-option value=\"Grape\"></v-option>\n</v-select>\n<hr>\n<v-select multiple>\n  <v-option value=\"Apple\"></v-option>\n  <v-option value=\"Banana\"></v-option>\n  <v-option value=\"Cherry\"></v-option>\n  <v-option value=\"Orange\"></v-option>\n  <v-option value=\"Grape\"></v-option>\n</v-select>\n<hr>\n<v-select multiple limit=\"2\">\n  <v-option value=\"Apple\"></v-option>\n  <v-option value=\"Banana\"></v-option>\n  <v-option value=\"Cherry\"></v-option>\n  <v-option value=\"Orange\"></v-option>\n  <v-option value=\"Grape\"></v-option>\n</v-select>\n<hr>\n<v-select multiple>\n  <v-option value=\"Star\"><span class=\"glyphicon glyphicon-star\"></span> Star</v-option>\n  <v-option value=\"Heart\"><span class=\"glyphicon glyphicon-heart\"></span> Heart</v-option>\n  <v-option value=\"Film\"><span class=\"glyphicon glyphicon-film\"></span> Film</v-option>\n  <v-option value=\"Inbox\"><span class=\"glyphicon glyphicon-inbox\"></span> Inbox</v-option>\n</v-select>\n    </script></code></pre>\n    <h2>Select Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>Array</code></td>\n          <td><code>[]</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td>Nothing Selected</td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>1024</code></td>\n          <td>Limit the number of elements you are allowed to select.</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>";

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(217)
	module.exports.template = __webpack_require__(228)


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcTabset = __webpack_require__(218);
	
	var _srcTabset2 = _interopRequireDefault(_srcTabset);
	
	var _srcTab = __webpack_require__(223);
	
	var _srcTab2 = _interopRequireDefault(_srcTab);
	
	exports['default'] = {
	  components: {
	    tabs: _srcTabset2['default'],
	    tab: _srcTab2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219)
	module.exports = __webpack_require__(221)
	module.exports.template = __webpack_require__(222)


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(220);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-97456a72 .nav-tabs {\n    margin-bottom: 15px\n}", ""]);
	
	// exports


/***/ },
/* 221 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  props: {
	    effect: {
	      type: String,
	      'default': 'fadein'
	    }
	  },
	  data: function data() {
	    return {
	      renderData: [],
	      activeIndex: 0
	    };
	  },
	  components: {
	    'tablist': {
	      inherit: true,
	      template: '<li v-on="click:handleTablistClick($event,$index,this)"\n        v-class="active:$index === activeIndex,\n        disabled:disabled === true">\n        <a href="#">\n        {{{header}}}\n        </a></li>',
	      methods: {
	        handleTablistClick: function handleTablistClick(e, index, el) {
	          e.preventDefault();
	          if (!el.disabled) this.activeIndex = index;
	        }
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-97456a72\">\n    <!-- Nav tabs -->\n     <ul class=\"nav nav-tabs\" role=\"tablist\">\n       <tablist v-repeat=\"renderData\"></tablist>\n     </ul>\n\n     <!-- Tab panes -->\n     <div class=\"tab-content\" v-el=\"tabContent\">\n       <content></content>\n     </div>\n\n  </div>";

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224)
	module.exports = __webpack_require__(226)
	module.exports.template = __webpack_require__(227)


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(225);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-903c5e2a .tab-content > .tab-pane {\n    display: block;\n}\n.v-903c5e2a .tab-content > .tab-pane.hide {\n    position: absolute;\n}", ""]);
	
	// exports


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _toConsumableArray = __webpack_require__(109)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      "default": false
	    }
	  },
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	  computed: {
	    show: function show() {
	      return this.$parent.activeIndex === this.index;
	    },
	    transition: function transition() {
	      return this.$parent.effect;
	    }
	  },
	  created: function created() {
	    this.$parent.renderData.push({
	      header: this.header,
	      disabled: this.disabled
	    });
	  },
	  ready: function ready() {
	    this.index = [].concat(_toConsumableArray(this.$el.parentNode.children)).indexOf(this.$el);
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "<div role=\"tabpanel\" class=\"tab-pane v-903c5e2a\" v-class=\"hide:!show\" v-show=\"show\" v-transition=\"{{transition}}\">\n    <content></content>\n  </div>";

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"tabs\">\n    <h1 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs</a></h1>\n    <div class=\"bs-example\">\n      <tabs>\n        <tab header=\"one\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse\n             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </p>\n        </tab>\n        <tab header=\"two\">\n           <p>\n              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.\n           </p>\n        </tab>\n        <tab header=\"three\" disabled>\n          ...\n        </tab>\n      </tabs>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tabs>\n  <tab header=\"one\">\n    ...\n  </tab>\n  <tab header=\"two\">\n    ...\n  </tab>\n  <tab header=\"three\" disabled>\n    ...\n  </tab>\n</tabs>\n</script></code></pre>\n  <h2>Tab Options (NOT TABS)</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>header</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Heading text of the tab.</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>Whether tab is clickable and can be activated. </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(230)
	module.exports.template = __webpack_require__(231)


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcTooltip = __webpack_require__(87);
	
	var _srcTooltip2 = _interopRequireDefault(_srcTooltip);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  },
	  components: {
	    tooltip: _srcTooltip2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"tooltip\">\n    <h1 class=\"page-header\"><a href=\"#tooltip\" class=\"anchor\">Tooltip</a></h1>\n    <div class=\"bs-example\">\n      <tooltip  header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">tooltip on top</button>\n      </tooltip>\n      <tooltip  header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">tooltip on left</button>\n      </tooltip>\n      <tooltip  header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">tooltip on right</button>\n      </tooltip>\n      <tooltip  placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">tooltip on bottom</button>\n      </tooltip>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <tooltip trigger=\"click\"\n        effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Click</button>\n        </tooltip>\n      </p>\n      <tooltip effect=\"scale\"\n    content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </tooltip>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tooltip\n  effect=\"scale\"\n  placement=\"bottom\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">tooltip on bottom</button>\n</tooltip>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>hover</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the tooltip is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fadein</code></td>\n        <td><code>scale</code></td>\n        <td></td>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the tooltip.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(233)
	module.exports.template = __webpack_require__(240)


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _srcTypeahead = __webpack_require__(234);
	
	var _srcTypeahead2 = _interopRequireDefault(_srcTypeahead);
	
	var _srcTooltip = __webpack_require__(87);
	
	var _srcTooltip2 = _interopRequireDefault(_srcTooltip);
	
	exports['default'] = {
	  components: {
	    typeahead: _srcTypeahead2['default'],
	    tooltip: _srcTooltip2['default']
	  },
	  data: function data() {
	    return {
	      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
	      asynchronous: '{{formatted_address}}',
	      customTemplate: '<img width="18px" height="18px" v-attr="src:avatar_url"/> <span>{{login}}</span>'
	    };
	  },
	  methods: {
	    googleCallback: function googleCallback(items, targetVM) {
	      var that = targetVM.$parent;
	      that.reset();
	      that.query = items.formatted_address;
	    },
	    githubCallback: function githubCallback(items) {
	      window.open(items.html_url, '_blank');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(235)
	module.exports = __webpack_require__(237)
	module.exports.template = __webpack_require__(239)


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(43)();
	// imports
	
	
	// module
	exports.push([module.id, ".dropdown-menu > li > a {\n  cursor: pointer;\n}", ""]);
	
	// exports


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(55)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilsCallAjaxJs = __webpack_require__(238);
	
	var _utilsCallAjaxJs2 = _interopRequireDefault(_utilsCallAjaxJs);
	
	var typeahead = {
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	  components: {
	    list: {
	      inherit: true,
	      template: '',
	      created: function created() {
	        this.$options.template = '<li v-repeat="items" v-class="active: isActive($index)"><a v-on="mousedown:hit,mousemove: setActive($index)">' + this.template + '</a></li>';
	      }
	    }
	  },
	  props: {
	    data: {
	      type: Array
	    },
	    limit: {
	      type: Number,
	      'default': 8
	    },
	    async: {
	      type: String
	    },
	    template: {
	      'default': '<span v-html="$value | highlight query"></span>'
	    },
	    key: {
	      type: String
	    },
	    matchCase: {
	      type: Boolean,
	      'default': false
	    },
	    onHit: {
	      type: Function,
	      'default': function _default(items) {
	        this.reset();
	        this.query = items;
	      }
	    },
	    placeholder: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      query: '',
	      showDropdown: false,
	      noResults: true,
	      current: 0,
	      items: []
	    };
	  },
	  computed: {
	    primitiveData: function primitiveData() {
	      var _this = this;
	
	      if (this.data) {
	        return this.data.filter(function (value) {
	          value = _this.matchCase ? value : value.toLowerCase();
	          return value.indexOf(_this.query) !== -1;
	        }).slice(0, this.limit);
	      }
	    }
	  },
	  methods: {
	    update: function update() {
	      var _this2 = this;
	
	      if (!this.query) {
	        this.reset();
	        return false;
	      }
	      if (this.data) {
	        this.items = this.primitiveData;
	        this.showDropdown = this.items.length ? true : false;
	      }
	      if (this.async) {
	        (0, _utilsCallAjaxJs2['default'])(this.async + this.query, function (data) {
	          _this2.items = data[_this2.key].slice(0, _this2.limit);
	          _this2.showDropdown = _this2.items.length ? true : false;
	        });
	      }
	    },
	    reset: function reset() {
	      this.items = [];
	      this.query = '';
	      this.loading = false;
	      this.showDropdown = false;
	    },
	    setActive: function setActive(index) {
	      this.current = index;
	    },
	    isActive: function isActive(index) {
	      return this.current === index;
	    },
	    hit: function hit(e) {
	      e.preventDefault();
	      this.onHit(this.items[this.current], e.targetVM);
	    },
	    up: function up() {
	      if (this.current > 0) this.current--;
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) this.current++;
	    }
	  },
	  filters: {
	    highlight: function highlight(value, phrase) {
	      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
	    }
	  }
	};
	exports['default'] = typeahead;
	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (url, callback) {
	    var httpRequest = new XMLHttpRequest();
	    httpRequest.onreadystatechange = function () {
	        if (httpRequest.readyState === 4) {
	            if (httpRequest.status === 200) {
	                var data = JSON.parse(httpRequest.responseText);
	                if (callback) callback(data);
	            }
	        }
	    };
	    httpRequest.open('GET', url);
	    httpRequest.send();
	};
	
	module.exports = exports['default'];

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\"\n  v-class=\"open:showDropdown\"\n  >\n  <input type=\"text\" class=\"form-control\"\n  placeholder=\"{{placeholder}}\"\n  autocomplete=\"off\"\n  v-model=\"query\"\n  v-on=\"\n  input: update,\n  keydown: up|key 'up',\n  keydown: down | key 'down',\n  keydown: hit|key 'enter',\n  keydown: reset|key 'esc',\n  blur:showDropdown = false\n  \"\n  />\n  <ul class=\"dropdown-menu\" v-el=\"dropdown\">\n  <list></list>\n  </ul>\n</div>";

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"typeahead\">\n    <h1 class=\"page-header\"><a href=\"#typeahead\" class=\"anchor\">Typeahead</a></h1>\n    <div class=\"bs-example\">\n      <h4>\n        Static arrays\n      </h4>\n      <typeahead data=\"{{USstate}}\" placeholder=\"USA states\"></typeahead>\n      <hr>\n      <h4>\n      Asynchronous results\n      <tooltip trigger=\"click\" content=\"The suggestions via a Google Map API, are you behind a FireWall?\" placement=\"top\">\n        <small style=\"cursor:pointer\">(not working?)</small>\n      </tooltip>\n      </h4>\n      <typeahead placeholder=\"Address, async via maps.googleapis.com\"\n      key=\"results\" async=\"https://maps.googleapis.com/maps/api/geocode/json?address=\" template=\"{{asynchronous}}\"\n      on-hit=\"{{googleCallback}}\"></typeahead>\n      <hr>\n      <h4>\n      Custom templates for results\n      </h4>\n      <typeahead placeholder=\"Github users, async via api.github.com\"\n      key=\"items\" async=\"https://api.github.com/search/users?q=\" template=\"{{customTemplate}}\"\n      on-hit=\"{{githubCallback}}\"></typeahead>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<h4>Static arrays</h4>\n<typeahead\n  data=\"{{USstate}}\"\n  placeholder=\"USA states\">\n</typeahead>\n\n<h4>Asynchronous results</h4>\n  <typeahead\n    placeholder=\"Address, async via maps.googleapis.com\"\n    key=\"results\"\n    src=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n    template=\"{{asynchronous}}\"\n    on-hit=\"{{googleCallback}}\">\n</typeahead>\n\n<h4>Custom templates for results</h4>\n  <typeahead\n    placeholder=\"Github users, async via api.github.com\"\n    key=\"items\"\n    src=\"https://api.github.com/search/users?q=\"\n    template=\"{{customTemplate}}\"\n    on-hit=\"{{githubCallback}}\">\n</typeahead>\n  </script></code></pre>\n    <pre><code class=\"language-javascript\"><script type=\"language-javascript\">\nnew Vue {\n  components: {\n    typeahead\n  },\n  data() {\n    return {\n      USstate: ['Alabama', 'Alaska', 'Arizona',...],\n      asynchronous: '{{formatted_address}}',\n      customTemplate: '<img width=\"18px\" height=\"18px\" v-attr=\"src:avatar_url\"/>' +\n      '<span>{{login}}</span>'\n    }\n  },\n  methods: {\n    googleCallback(items, targetVM) {\n      const that = targetVM.$parent\n      that.reset()\n      that.query = items.formatted_address\n    },\n    githubCallback(items) {\n      window.open(items.html_url, '_blank')\n    }\n  }\n}\n    </script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>data</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>The local data source for suggestions. Expected to be a primitive array.</td>\n        </tr>\n        <tr>\n          <td>async</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>8</code></td>\n          <td>The max number of suggestions to be displayed.</td>\n        </tr>\n        <tr>\n          <td>key</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>The remote JSON key you want to render.</td>\n        </tr>\n        <tr>\n          <td>match-case</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Case sensitive for suggestions.</td>\n        </tr>\n        <tr>\n          <td>on-hit</td>\n          <td><code>Function</code></td>\n          <td></td>\n          <td>A callback function when you click or hit return on an item.</td>\n        </tr>\n        <tr>\n          <td>template</td>\n          <td><code>String</code></td>\n          <td><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></td>\n          <td>Used to render suggestion.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ }
/******/ ]);
//# sourceMappingURL=build-docs.js.map