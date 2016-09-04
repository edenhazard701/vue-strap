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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _bodyDocs = __webpack_require__(69);
	
	var _bodyDocs2 = _interopRequireDefault(_bodyDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(291);
	__webpack_require__(293);
	__webpack_require__(295);
	__webpack_require__(296);
	
	Vue.config.debug = true;
	
	new Vue({
	  el: 'body',
	  components: {
	    bodyDocs: _bodyDocs2.default
	  },
	  created: function created() {
	    if (!this.$root.sections) {
	      this.$root.sections = [];
	    }
	  },
	  ready: function ready() {
	    var list = this.$root.sections;
	    while (list.length) {
	      list.pop();
	    }(0, _NodeList2.default)('.bs-docs-section', this.$els.sections).each(function (el) {
	      list.push({
	        id: el.id,
	        name: (0, _NodeList2.default)('.anchor', el).textContent,
	        el: el
	      });
	    });
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(2);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _iterator24 = __webpack_require__(20);
	
	var _iterator25 = _interopRequireDefault(_iterator24);
	
	var _getOwnPropertyNames = __webpack_require__(56);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _getIterator2 = __webpack_require__(62);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _classCallCheck2 = __webpack_require__(67);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(68);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ArrayProto = Array.prototype;
	var nodeError = new Error('Passed arguments must be of Node');
	var blurEvent = void 0;
	var blurList = [];
	var Events = [];
	
	var NodeList = function () {
	  function NodeList(args) {
	    (0, _classCallCheck3.default)(this, NodeList);
	
	    var i = 0,
	        l,
	        nodes = args;
	    if (args[0] === window) {
	      nodes = [window];
	    } else if (typeof args[0] === 'string') {
	      nodes = (args[1] || document).querySelectorAll(args[0]);
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    } else if (0 in args && !(args[0] instanceof Node) && args[0] && 'length' in args[0]) {
	      nodes = args[0];
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    }
	    if (nodes) {
	      for (var _i in nodes) {
	        this[_i] = nodes[_i];
	      }
	      this.length = nodes.length;
	    } else {
	      this.length = 0;
	    }
	  }
	
	  (0, _createClass3.default)(NodeList, [{
	    key: 'concat',
	    value: function concat() {
	      var nodes = ArrayProto.slice.call(this);
	      function flatten(arr) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = (0, _getIterator3.default)(arr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var el = _step.value;
	
	            if (el instanceof Node) {
	              if (!~nodes.indexOf(el)) nodes.push(el);
	            } else if (el) {
	              flatten(el);
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(arguments), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var arg = _step2.value;
	
	          if (arg instanceof Node) {
	            if (!~nodes.indexOf(arg)) nodes.push(arg);
	          } else if (arg instanceof window.NodeList || arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array) {
	            flatten(arg);
	          } else {
	            throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'each',
	    value: function each() {
	      ArrayProto.forEach.apply(this, arguments);
	      return this;
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return this.map(function (el) {
	        return el.parentNode;
	      });
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      return new NodeList([ArrayProto.filter.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'find',
	    value: function find(element) {
	      var nodes = [];
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(flatten(this)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var el = _step3.value;
	
	          var node = el.querySelectorAll(element);
	          if (node && node.length) nodes.push(node);
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	
	      return flatten(nodes, this.owner);
	    }
	  }, {
	    key: 'findChildren',
	    value: function findChildren(element) {
	      var _this = this;
	
	      return this.find(element).filter(function (el) {
	        return _this.includes(el.parentElement);
	      });
	    }
	  }, {
	    key: 'forEach',
	    value: function forEach() {
	      ArrayProto.forEach.apply(this, arguments);
	      return this;
	    }
	  }, {
	    key: 'includes',
	    value: function includes(element, index) {
	      return ~this.indexOf(element, index);
	    }
	  }, {
	    key: 'map',
	    value: function map() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return flatten(ArrayProto.map.apply(this, args), this);
	    }
	  }, {
	    key: 'pop',
	    value: function pop(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var pop = ArrayProto.pop.bind(this);
	      while (amount--) {
	        nodes.push(pop());
	      }return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;
	
	      try {
	        for (var _iterator4 = (0, _getIterator3.default)(arguments), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var arg = _step4.value;
	
	          if (!(arg instanceof Node)) throw nodeError;
	          if (!~this.indexOf(arg)) ArrayProto.push.call(this, arg);
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4.return) {
	            _iterator4.return();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var list = new NodeList([[], this.owner]);
	      var splice = function splice(index) {
	        return ArrayProto.splice.apply();
	      };
	      var i = this.length - 1;
	      for (var el = this[i]; el; el = this[--i]) {
	        if (el.remove) {
	          el.remove();
	          ArrayProto.splice.call(this, i, 1);
	        } else if (el.parentNode) {
	          el.parentNode.removeChild(el);
	          ArrayProto.splice.call(this, i, 1);
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'shift',
	    value: function shift(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var shift = ArrayProto.shift.bind(this);
	      while (amount--) {
	        nodes.push(shift());
	      }return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      return new NodeList([ArrayProto.slice.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var i = 2, l = arguments.length; i < l; i++) {
	        if (!(arguments[i] instanceof Node)) throw nodeError;
	      }
	      return new NodeList([ArrayProto.splice.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift() {
	      var unshift = ArrayProto.unshift.bind(this);
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;
	
	      try {
	        for (var _iterator5 = (0, _getIterator3.default)(arguments), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var arg = _step5.value;
	
	          if (!(arg instanceof Node)) throw nodeError;
	          if (!~this.indexOf(arg)) unshift(arg);
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'addClass',
	    value: function addClass(classes) {
	      return this.toggleClass(classes, true);
	    }
	  }, {
	    key: 'removeClass',
	    value: function removeClass(classes) {
	      return this.toggleClass(classes, false);
	    }
	  }, {
	    key: 'toggleClass',
	    value: function toggleClass(classes, value) {
	      var _this2 = this;
	
	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = classes.trim().replace(/\s+/, ' ').split(' ');
	      }
	      classes.forEach(function (c) {
	        return _this2.each(function (el) {
	          return el.classList[method](c);
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'get',
	    value: function get(prop) {
	      var arr = [];
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;
	
	      try {
	        for (var _iterator6 = (0, _getIterator3.default)(this), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var el = _step6.value;
	
	          if (el !== null) {
	            el = el[prop];
	          }
	          arr.push(el);
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6.return) {
	            _iterator6.return();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }
	
	      return flatten(arr, this);
	    }
	  }, {
	    key: 'set',
	    value: function set(prop, value) {
	      if (prop.constructor === Object) {
	        var _iteratorNormalCompletion7 = true;
	        var _didIteratorError7 = false;
	        var _iteratorError7 = undefined;
	
	        try {
	          for (var _iterator7 = (0, _getIterator3.default)(this), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	            var el = _step7.value;
	
	            if (el) {
	              for (key in prop) {
	                if (key in el) {
	                  el[key] = prop[key];
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError7 = true;
	          _iteratorError7 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion7 && _iterator7.return) {
	              _iterator7.return();
	            }
	          } finally {
	            if (_didIteratorError7) {
	              throw _iteratorError7;
	            }
	          }
	        }
	      } else {
	        var _iteratorNormalCompletion8 = true;
	        var _didIteratorError8 = false;
	        var _iteratorError8 = undefined;
	
	        try {
	          for (var _iterator8 = (0, _getIterator3.default)(this), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	            var _el = _step8.value;
	
	            if (prop in _el) {
	              _el[prop] = value;
	            }
	          }
	        } catch (err) {
	          _didIteratorError8 = true;
	          _iteratorError8 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion8 && _iterator8.return) {
	              _iterator8.return();
	            }
	          } finally {
	            if (_didIteratorError8) {
	              throw _iteratorError8;
	            }
	          }
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      var method = ArrayProto.shift.call(args);
	      var arr = [];
	      var returnThis = true;
	      var _iteratorNormalCompletion9 = true;
	      var _didIteratorError9 = false;
	      var _iteratorError9 = undefined;
	
	      try {
	        for (var _iterator9 = (0, _getIterator3.default)(this), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	          var el = _step9.value;
	
	          if (el && el[method] instanceof Function) {
	            el = el[method].apply(el, args);
	            arr.push(el);
	            if (returnThis && el !== undefined) {
	              returnThis = false;
	            }
	          } else {
	            arr.push(undefined);
	          }
	        }
	      } catch (err) {
	        _didIteratorError9 = true;
	        _iteratorError9 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion9 && _iterator9.return) {
	            _iterator9.return();
	          }
	        } finally {
	          if (_didIteratorError9) {
	            throw _iteratorError9;
	          }
	        }
	      }
	
	      return returnThis ? this : flatten(arr, this);
	    }
	  }, {
	    key: 'item',
	    value: function item(index) {
	      return new NodeList([[this[index]], this]);
	    }
	  }, {
	    key: 'on',
	
	
	    // event handlers
	    value: function on(events, selector, callback) {
	      if (typeof events === 'string') {
	        events = events.trim().replace(/\s+/, ' ').split(' ');
	      }
	      if (!this || !this.length) return this;
	      if (callback === undefined) {
	        callback = selector;
	        selector = null;
	      }
	      if (!callback) return this;
	      var fn = callback;
	      callback = selector ? function (e) {
	        var els = new NodeList([selector, this]);
	        if (!els.length) {
	          return;
	        }
	        els.some(function (el) {
	          var target = el.contains(e.target);
	          if (target) fn.call(el, e, el);
	          return target;
	        });
	      } : function (e) {
	        fn.apply(this, [e, this]);
	      };
	      var _iteratorNormalCompletion10 = true;
	      var _didIteratorError10 = false;
	      var _iteratorError10 = undefined;
	
	      try {
	        for (var _iterator10 = (0, _getIterator3.default)(events), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	          var event = _step10.value;
	          var _iteratorNormalCompletion11 = true;
	          var _didIteratorError11 = false;
	          var _iteratorError11 = undefined;
	
	          try {
	            for (var _iterator11 = (0, _getIterator3.default)(this), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	              var el = _step11.value;
	
	              el.addEventListener(event, callback, false);
	              Events.push({
	                el: el,
	                event: event,
	                callback: callback
	              });
	            }
	          } catch (err) {
	            _didIteratorError11 = true;
	            _iteratorError11 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion11 && _iterator11.return) {
	                _iterator11.return();
	              }
	            } finally {
	              if (_didIteratorError11) {
	                throw _iteratorError11;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError10 = true;
	        _iteratorError10 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion10 && _iterator10.return) {
	            _iterator10.return();
	          }
	        } finally {
	          if (_didIteratorError10) {
	            throw _iteratorError10;
	          }
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      if (events instanceof Function) {
	        callback = events;
	        events = null;
	      }
	      if (typeof events === 'string' && callback instanceof Function) {
	        var _iteratorNormalCompletion12 = true;
	        var _didIteratorError12 = false;
	        var _iteratorError12 = undefined;
	
	        try {
	          for (var _iterator12 = (0, _getIterator3.default)(this), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	            var el = _step12.value;
	
	            for (var e in Events) {
	              var _iteratorNormalCompletion13 = true;
	              var _didIteratorError13 = false;
	              var _iteratorError13 = undefined;
	
	              try {
	                for (var _iterator13 = (0, _getIterator3.default)(events.split(' ')), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
	                  var event = _step13.value;
	
	                  if (Events[e] && Events[e].el === el && Events[e].event === event && Events[e].callback === callback) {
	                    Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                    delete Events[e];
	                  }
	                }
	              } catch (err) {
	                _didIteratorError13 = true;
	                _iteratorError13 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion13 && _iterator13.return) {
	                    _iterator13.return();
	                  }
	                } finally {
	                  if (_didIteratorError13) {
	                    throw _iteratorError13;
	                  }
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError12 = true;
	          _iteratorError12 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion12 && _iterator12.return) {
	              _iterator12.return();
	            }
	          } finally {
	            if (_didIteratorError12) {
	              throw _iteratorError12;
	            }
	          }
	        }
	      } else if (typeof events === 'string') {
	        var _iteratorNormalCompletion14 = true;
	        var _didIteratorError14 = false;
	        var _iteratorError14 = undefined;
	
	        try {
	          for (var _iterator14 = (0, _getIterator3.default)(this), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
	            var _el2 = _step14.value;
	
	            for (var _e in Events) {
	              var _iteratorNormalCompletion15 = true;
	              var _didIteratorError15 = false;
	              var _iteratorError15 = undefined;
	
	              try {
	                for (var _iterator15 = (0, _getIterator3.default)(events.split(' ')), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
	                  var _event = _step15.value;
	
	                  if (Events[_e] && Events[_e].el === _el2 && Events[_e].event === _event) {
	                    Events[_e].el.removeEventListener(Events[_e].event, Events[_e].callback);
	                    delete Events[_e];
	                  }
	                }
	              } catch (err) {
	                _didIteratorError15 = true;
	                _iteratorError15 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion15 && _iterator15.return) {
	                    _iterator15.return();
	                  }
	                } finally {
	                  if (_didIteratorError15) {
	                    throw _iteratorError15;
	                  }
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError14 = true;
	          _iteratorError14 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion14 && _iterator14.return) {
	              _iterator14.return();
	            }
	          } finally {
	            if (_didIteratorError14) {
	              throw _iteratorError14;
	            }
	          }
	        }
	      } else if (callback instanceof Function) {
	        var _iteratorNormalCompletion16 = true;
	        var _didIteratorError16 = false;
	        var _iteratorError16 = undefined;
	
	        try {
	          for (var _iterator16 = (0, _getIterator3.default)(this), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
	            var _el3 = _step16.value;
	
	            for (var _e2 in Events) {
	              if (Events[_e2] && Events[_e2].el === _el3 && Events[_e2].callback === callback) {
	                Events[_e2].el.removeEventListener(Events[_e2].event, Events[_e2].callback);
	                delete Events[_e2];
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError16 = true;
	          _iteratorError16 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion16 && _iterator16.return) {
	              _iterator16.return();
	            }
	          } finally {
	            if (_didIteratorError16) {
	              throw _iteratorError16;
	            }
	          }
	        }
	      } else {
	        var _iteratorNormalCompletion17 = true;
	        var _didIteratorError17 = false;
	        var _iteratorError17 = undefined;
	
	        try {
	          for (var _iterator17 = (0, _getIterator3.default)(this), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
	            var _el4 = _step17.value;
	
	            for (var _e3 in Events) {
	              if (Events[_e3] && Events[_e3].el === _el4) {
	                Events[_e3].el.removeEventListener(Events[_e3].event, Events[_e3].callback);
	                delete Events[_e3];
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError17 = true;
	          _iteratorError17 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion17 && _iterator17.return) {
	              _iterator17.return();
	            }
	          } finally {
	            if (_didIteratorError17) {
	              throw _iteratorError17;
	            }
	          }
	        }
	      }
	      Events = Events.filter(function (el) {
	        return el !== undefined;
	      });
	      return this;
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(callback) {
	      if (!this || !this.length) return this;
	      if (!callback) return this;
	      this.each(function (el) {
	        blurList.push({
	          el: el,
	          callback: callback
	        });
	      });
	      if (!blurEvent) {
	        blurEvent = function blurEvent(e) {
	          var _iteratorNormalCompletion18 = true;
	          var _didIteratorError18 = false;
	          var _iteratorError18 = undefined;
	
	          try {
	            for (var _iterator18 = (0, _getIterator3.default)(blurList), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
	              var item = _step18.value;
	
	              var target = item.el.contains(e.target) || item.el === e.target;
	              if (!target) item.callback.call(item.el, e, item.el);
	            }
	          } catch (err) {
	            _didIteratorError18 = true;
	            _iteratorError18 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion18 && _iterator18.return) {
	                _iterator18.return();
	              }
	            } finally {
	              if (_didIteratorError18) {
	                throw _iteratorError18;
	              }
	            }
	          }
	        };
	        document.addEventListener('click', blurEvent, false);
	        document.addEventListener('touchstart', blurEvent, false);
	      }
	      return this;
	    }
	  }, {
	    key: 'offBlur',
	    value: function offBlur(callback) {
	      this.each(function (el) {
	        for (var e in blurList) {
	          if (blurList[e] && blurList[e].el === el && (!callback || blurList[e].callback === callback)) {
	            delete blurList[e];
	          }
	        }
	      });
	      blurList = blurList.filter(function (el) {
	        return el !== undefined;
	      });
	      return this;
	    }
	  }, {
	    key: 'asArray',
	    get: function get() {
	      return ArrayProto.slice.call(this);
	    }
	  }]);
	  return NodeList;
	}();
	
	var NL = NodeList.prototype;
	
	function flatten(arr, owner) {
	  var list = [];
	  var _iteratorNormalCompletion19 = true;
	  var _didIteratorError19 = false;
	  var _iteratorError19 = undefined;
	
	  try {
	    for (var _iterator19 = (0, _getIterator3.default)(arr), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
	      var el = _step19.value;
	
	      if (el instanceof Node || el === null) {
	        if (!~list.indexOf(el)) list.push(el);
	      } else if (el instanceof window.NodeList || el instanceof NodeList || el instanceof HTMLCollection || el instanceof Array) {
	        var _iteratorNormalCompletion20 = true;
	        var _didIteratorError20 = false;
	        var _iteratorError20 = undefined;
	
	        try {
	          for (var _iterator20 = (0, _getIterator3.default)(el), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
	            var el2 = _step20.value;
	            list.push(el2);
	          }
	        } catch (err) {
	          _didIteratorError20 = true;
	          _iteratorError20 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion20 && _iterator20.return) {
	              _iterator20.return();
	            }
	          } finally {
	            if (_didIteratorError20) {
	              throw _iteratorError20;
	            }
	          }
	        }
	      } else {
	        arr.get = NL.get;
	        arr.set = NL.set;
	        arr.call = NL.call;
	        arr.owner = owner;
	        return arr;
	      }
	    }
	  } catch (err) {
	    _didIteratorError19 = true;
	    _iteratorError19 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion19 && _iterator19.return) {
	        _iterator19.return();
	      }
	    } finally {
	      if (_didIteratorError19) {
	        throw _iteratorError19;
	      }
	    }
	  }
	
	  return new NodeList([list, owner]);
	}
	
	(0, _getOwnPropertyNames2.default)(ArrayProto).forEach(function (key) {
	  if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && NL[key] === undefined) {
	    NL[key] = ArrayProto[key];
	  }
	});
	if (window.Symbol && _iterator25.default) {
	  NL[_iterator25.default] = NL.values = ArrayProto[_iterator25.default];
	}
	var div = document.createElement('div');
	function setterGetter(prop) {
	  var _this3 = this,
	      _arguments = arguments;
	
	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      var arr = [];
	      var returnThis = true;
	      var _iteratorNormalCompletion21 = true;
	      var _didIteratorError21 = false;
	      var _iteratorError21 = undefined;
	
	      try {
	        for (var _iterator21 = (0, _getIterator3.default)(NL), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
	          var el = _step21.value;
	
	          if (el && el[prop] instanceof Function) {
	            el = el[prop].apply(el, _arguments);
	            arr.push(el);
	            if (returnThis && el !== undefined) {
	              returnThis = false;
	            }
	          } else {
	            arr.push(undefined);
	          }
	        }
	      } catch (err) {
	        _didIteratorError21 = true;
	        _iteratorError21 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion21 && _iterator21.return) {
	            _iterator21.return();
	          }
	        } finally {
	          if (_didIteratorError21) {
	            throw _iteratorError21;
	          }
	        }
	      }
	
	      return returnThis ? _this3 : flatten(arr, _this3);
	    };
	  } else {
	    (0, _defineProperty2.default)(NL, prop, {
	      get: function get() {
	        var arr = [];
	        var _iteratorNormalCompletion22 = true;
	        var _didIteratorError22 = false;
	        var _iteratorError22 = undefined;
	
	        try {
	          for (var _iterator22 = (0, _getIterator3.default)(this), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
	            var el = _step22.value;
	
	            if (el !== null) {
	              el = el[prop];
	            }
	            arr.push(el);
	          }
	        } catch (err) {
	          _didIteratorError22 = true;
	          _iteratorError22 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion22 && _iterator22.return) {
	              _iterator22.return();
	            }
	          } finally {
	            if (_didIteratorError22) {
	              throw _iteratorError22;
	            }
	          }
	        }
	
	        return flatten(arr, this);
	      },
	      set: function set(value) {
	        var _iteratorNormalCompletion23 = true;
	        var _didIteratorError23 = false;
	        var _iteratorError23 = undefined;
	
	        try {
	          for (var _iterator23 = (0, _getIterator3.default)(this), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
	            var el = _step23.value;
	
	            if (el && prop in el) {
	              el[prop] = value;
	            }
	          }
	        } catch (err) {
	          _didIteratorError23 = true;
	          _iteratorError23 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion23 && _iterator23.return) {
	              _iterator23.return();
	            }
	          } finally {
	            if (_didIteratorError23) {
	              throw _iteratorError23;
	            }
	          }
	        }
	      }
	    });
	  }
	}
	for (var prop in div) {
	  setterGetter(prop);
	}function NodeListJS() {
	  return new NodeList(arguments);
	}
	window.NL = NodeListJS;
	
	exports.default = NodeListJS;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	var $Object = __webpack_require__(7).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(15), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , ctx       = __webpack_require__(8)
	  , hide      = __webpack_require__(10)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(9);
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
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(19);
	module.exports = __webpack_require__(15) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(18)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function(){
	  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	__webpack_require__(51);
	module.exports = __webpack_require__(55).f('iterator');

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(23)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(26)(String, 'String', function(iterated){
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(24)
	  , defined   = __webpack_require__(25);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(27)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(28)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(29)
	  , Iterators      = __webpack_require__(30)
	  , $iterCreate    = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(47)
	  , getPrototypeOf = __webpack_require__(49)
	  , ITERATOR       = __webpack_require__(48)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);

/***/ },
/* 29 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(32)
	  , descriptor     = __webpack_require__(19)
	  , setToStringTag = __webpack_require__(47)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(48)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(17)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(34);
	
	module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(29)
	  , toIObject    = __webpack_require__(36)
	  , arrayIndexOf = __webpack_require__(39)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37)
	  , defined = __webpack_require__(25);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(40)
	  , toIndex   = __webpack_require__(41);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(24)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(24)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(43)('keys')
	  , uid    = __webpack_require__(44);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(29)
	  , TAG = __webpack_require__(48)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(43)('wks')
	  , uid        = __webpack_require__(44)
	  , Symbol     = __webpack_require__(6).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(29)
	  , toObject    = __webpack_require__(50)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(25);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var global        = __webpack_require__(6)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(30)
	  , TO_STRING_TAG = __webpack_require__(48)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(53)
	  , step             = __webpack_require__(54)
	  , Iterators        = __webpack_require__(30)
	  , toIObject        = __webpack_require__(36);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(26)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(48);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	var $Object = __webpack_require__(7).Object;
	module.exports = function getOwnPropertyNames(it){
	  return $Object.getOwnPropertyNames(it);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(59)('getOwnPropertyNames', function(){
	  return __webpack_require__(60).f;
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(16);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36)
	  , gOPN      = __webpack_require__(61).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(35)
	  , hiddenKeys = __webpack_require__(45).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(22);
	module.exports = __webpack_require__(64);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12)
	  , get      = __webpack_require__(65);
	module.exports = __webpack_require__(7).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(66)
	  , ITERATOR  = __webpack_require__(48)('iterator')
	  , Iterators = __webpack_require__(30);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(38)
	  , TAG = __webpack_require__(48)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(2);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(70)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\bodyDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(290)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-58838205/bodyDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _affixSidebar = __webpack_require__(71);
	
	var _affixSidebar2 = _interopRequireDefault(_affixSidebar);
	
	var _navbarHeader = __webpack_require__(78);
	
	var _navbarHeader2 = _interopRequireDefault(_navbarHeader);
	
	var _gettingStarted = __webpack_require__(91);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _accordionDocs = __webpack_require__(97);
	
	var _accordionDocs2 = _interopRequireDefault(_accordionDocs);
	
	var _affixDocs = __webpack_require__(140);
	
	var _affixDocs2 = _interopRequireDefault(_affixDocs);
	
	var _alertDocs = __webpack_require__(151);
	
	var _alertDocs2 = _interopRequireDefault(_alertDocs);
	
	var _asideDocs = __webpack_require__(161);
	
	var _asideDocs2 = _interopRequireDefault(_asideDocs);
	
	var _buttonGroupDocs = __webpack_require__(169);
	
	var _buttonGroupDocs2 = _interopRequireDefault(_buttonGroupDocs);
	
	var _carouselDocs = __webpack_require__(180);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _checkboxDocs = __webpack_require__(191);
	
	var _checkboxDocs2 = _interopRequireDefault(_checkboxDocs);
	
	var _container = __webpack_require__(194);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _datepickerDocs = __webpack_require__(196);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _dropdownDocs = __webpack_require__(209);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _inputDocs = __webpack_require__(212);
	
	var _inputDocs2 = _interopRequireDefault(_inputDocs);
	
	var _modalDocs = __webpack_require__(220);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _popoverDocs = __webpack_require__(232);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _progressbarDocs = __webpack_require__(240);
	
	var _progressbarDocs2 = _interopRequireDefault(_progressbarDocs);
	
	var _radioDocs = __webpack_require__(246);
	
	var _radioDocs2 = _interopRequireDefault(_radioDocs);
	
	var _selectDocs = __webpack_require__(249);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _spinnerDocs = __webpack_require__(254);
	
	var _spinnerDocs2 = _interopRequireDefault(_spinnerDocs);
	
	var _tabsDocs = __webpack_require__(263);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _tooltipDocs = __webpack_require__(279);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _typeaheadDocs = __webpack_require__(282);
	
	var _typeaheadDocs2 = _interopRequireDefault(_typeaheadDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    affixSidebar: _affixSidebar2.default,
	    navbarHeader: _navbarHeader2.default,
	    gettingStarted: _gettingStarted2.default,
	    accordionDocs: _accordionDocs2.default,
	    affixDocs: _affixDocs2.default,
	    alertDocs: _alertDocs2.default,
	    asideDocs: _asideDocs2.default,
	    buttonGroupDocs: _buttonGroupDocs2.default,
	    carouselDocs: _carouselDocs2.default,
	    checkboxDocs: _checkboxDocs2.default,
	    container: _container2.default,
	    datepickerDocs: _datepickerDocs2.default,
	    dropdownDocs: _dropdownDocs2.default,
	    inputDocs: _inputDocs2.default,
	    modalDocs: _modalDocs2.default,
	    popoverDocs: _popoverDocs2.default,
	    progressbarDocs: _progressbarDocs2.default,
	    radioDocs: _radioDocs2.default,
	    selectDocs: _selectDocs2.default,
	    spinnerDocs: _spinnerDocs2.default,
	    tabsDocs: _tabsDocs2.default,
	    tooltipDocs: _tooltipDocs2.default,
	    typeaheadDocs: _typeaheadDocs2.default
	  }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//   <div id="wrapper">
	//     <navbar-header></navbar-header>
	//     <div class="bs-docs-header">
	//       <div class="container">
	//         <h1>VueStrap</h1>
	//         <p>Bootstrap components built with <a target="_blank" href="http://vuejs.org/">Vue.js</a>.</p>
	//         <p>No jQuery, bootstrap.js, or any 3rd party plugins required.</p>
	//         <br>
	//         <p><a class="btn btn-outline-inverse btn-lg" href="https://github.com/yuche/vue-strap">Code on GitHub</a></p>
	//       </div>
	//     </div>
	//     <container>
	//       <div v-el:sections class="col-md-9">
	//         <getting-started></getting-started>
	//         <accordion-docs></accordion-docs>
	//         <affix-docs></affix-docs>
	//         <alert-docs></alert-docs>
	//         <aside-docs></aside-docs>
	//         <button-group-docs></button-group-docs>
	//         <checkbox-docs></checkbox-docs>
	//         <carousel-docs></carousel-docs>
	//         <datepicker-docs></datepicker-docs>
	//         <dropdown-docs></dropdown-docs>
	//         <input-docs></input-docs>
	//         <modal-docs></modal-docs>
	//         <popover-docs></popover-docs>
	//         <progressbar-docs></progressbar-docs>
	//         <radio-docs></radio-docs>
	//         <select-docs></select-docs>
	//         <tabs-docs></tabs-docs>
	//         <tooltip-docs></tooltip-docs>
	//         <typeahead-docs></typeahead-docs>
	//         <spinner-docs></spinner-docs>
	//       </div>
	//       <div class="col-md-3">
	//         <affix-sidebar></affix-sidebar>
	//       </div>
	//     </container>
	//   </div>
	//   <footer class="bs-docs-footer">
	//     <div class="container">
	//       <p>Designed and built by <a href="https://github.com/yuche/">yuche</a>.</p>
	//       <p>
	//         Using <a href="http://twitter.github.com/bootstrap" target="_blank">Twitter Bootstrap</a>
	//         and the <a href="css/docs.css" target="_blank">Bootstrap's docs styles</a> designed and built by <a href="http://twitter.com/mdo" target="_blank">@mdo</a>
	//         and <a href="http://twitter.com/fat" target="_blank">@fat</a>.
	//       </p>
	//       <p>
	//         Code licensed under <a href="//github.com/mgcrea/angular-strap/blob/master/LICENSE.md" target="_blank">The MIT License</a>,
	//         documentation under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.
	//       </p>
	//     </div>
	//   </footer>
	// </template>
	//
	// <script>

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(72)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\affixSidebar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(77)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-91569a18/affixSidebar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(62);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _Affix = __webpack_require__(73);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <affix offset="50">
	//     <ul class="nav bs-docs-sidenav" id="sidenav">
	//       <li v-for="s in sections" :class="{active:active==s.id}"><a href="#{{ s.id }}">{{ s.name }}</a></li>
	//     </ul>
	//     <a href="#" class="back-to-top">Back to top</a>
	//     <a href="https://github.com/yuche/vue-strap" class="back-to-top">GitHub</a>
	//   </affix>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    affix: _Affix2.default
	  },
	  filters: {
	    space: function space(val) {
	      return val.replace('-', ' ');
	    }
	  },
	  data: function data() {
	    return {
	      active: null,
	      sections: []
	    };
	  },
	  created: function created() {
	    var _this = this;
	
	    (0, _NodeList2.default)(window).on('scroll load resize', function () {
	      return _this.scrollSpy();
	    });
	    if (!this.$root.sections) {
	      this.$root.sections = [];
	    }
	    this.sections = this.$root.sections;
	  },
	
	  methods: {
	    scrollSpy: function scrollSpy() {
	      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.sections), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var s = _step.value;
	
	          // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
	          // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
	          if (s.el.offsetTop + 420 <= scrollPosition) {
	            this.active = s.id;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(74)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(76)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5ebddebf/Affix.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="hidden-print hidden-xs hidden-sm">
	//     <nav class="bs-docs-sidebar" :class="{affix:affixed}" :style="{marginTop:top}">
	//       <slot></slot>
	//     </nav>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    offset: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false
	    };
	  },
	
	  computed: {
	    top: function top() {
	      return this.offset > 0 ? this.offset + 'px' : null;
	    }
	  },
	  methods: {
	    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
	    checkScroll: function checkScroll() {
	      // if is hidden don't calculate anything
	      if (!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) {
	        return;
	      }
	      // get window scroll and element position to detect if have to be normal or affixed
	      var scroll = {};
	      var element = {};
	      var rect = this.$el.getBoundingClientRect();
	      var body = document.body;
	      var _arr = ['Top', 'Left'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var type = _arr[_i];
	        var t = type.toLowerCase();
	        var ret = window['page' + (type === 'Top' ? 'Y' : 'X') + 'Offset'];
	        var method = 'scroll' + type;
	        if (typeof ret !== 'number') {
	          // ie6,7,8 standard mode
	          ret = document.documentElement[method];
	          if (typeof ret !== 'number') {
	            // quirks mode
	            ret = document.body[method];
	          }
	        }
	        scroll[t] = ret;
	        element[t] = scroll[t] + rect[t] - (this.$el['client' + type] || body['client' + type] || 0);
	      }
	      var fix = scroll.top > element.top - this.offset;
	      if (this.affixed !== fix) {
	        this.affixed = fix;
	      }
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.checkScroll();
	    (0, _NodeList2.default)(window).on('scroll resize', function () {
	      return _this.checkScroll();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this2 = this;
	
	    (0, _NodeList2.default)(window).off('scroll resize', function () {
	      return _this2.checkScroll();
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.coerce = undefined;
	
	var _getIterator2 = __webpack_require__(62);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	exports.callAjax = callAjax;
	exports.getScrollBarWidth = getScrollBarWidth;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// coerce convert som types of data into another type
	var coerce = exports.coerce = {
	  // Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
	  boolean: function boolean(val) {
	    return typeof val !== 'string' ? val : val === 'true' ? true : val === 'false' ? false : val === 'null' ? false : val === 'undefined' ? false : val;
	  },
	  // Attempt to convert a string value to a Number. Otherwise, return 0.
	  number: function number(val) {
	    var alt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    return typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val);
	  }
	};
	
	// callAjax (only get)
	function callAjax(url, callback) {
	  var request = new window.XMLHttpRequest();
	  var data = {};
	  // p (-simulated- promise)
	  var p = {
	    then: function then(fn1, fn2, fn3) {
	      return p.done(fn1).fail(fn2).always(fn3);
	    }
	  };
	  var _arr = ['done', 'fail', 'always'];
	
	  var _loop = function _loop() {
	    var name = _arr[_i];
	    data[name] = [];
	    p[name] = function (fn) {
	      if (fn instanceof Function) data[name].push(fn);
	      return p;
	    };
	  };
	
	  for (var _i = 0; _i < _arr.length; _i++) {
	    _loop();
	  }
	  p.done(callback);
	  request.onreadystatechange = function () {
	    if (request.readyState === 4) {
	      if (request.status === 200) {
	        try {
	          var response = JSON.parse(request.responseText);
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = (0, _getIterator3.default)(data.done), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var done = _step.value;
	              done(response);
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        } catch (e) {
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;
	
	          try {
	            for (var _iterator2 = (0, _getIterator3.default)(data.fail), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var fail = _step2.value;
	              fail(e);
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }
	        }
	      } else {
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;
	
	        try {
	          for (var _iterator3 = (0, _getIterator3.default)(data.fail), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _fail = _step3.value;
	
	            _fail({ status: request.status });
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	              _iterator3.return();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }
	      }
	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;
	
	      try {
	        for (var _iterator4 = (0, _getIterator3.default)(data.always), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var always = _step4.value;
	
	          always({ status: request.status });
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4.return) {
	            _iterator4.return();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }
	    }
	  };
	  request.open('GET', url);
	  request.setRequestHeader('Accept', 'application/json');
	  request.send();
	  return p;
	}
	
	function getScrollBarWidth() {
	  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
	    return 0;
	  }
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
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"hidden-print hidden-xs hidden-sm\">\n  <nav class=\"bs-docs-sidebar\" :class=\"{affix:affixed}\" :style=\"{marginTop:top}\">\n    <slot></slot>\n  </nav>\n</div>\n";

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "\n<affix offset=\"50\">\n  <ul class=\"nav bs-docs-sidenav\" id=\"sidenav\">\n    <li v-for=\"s in sections\" :class=\"{active:active==s.id}\"><a href=\"#{{ s.id }}\">{{ s.name }}</a></li>\n  </ul>\n  <a href=\"#\" class=\"back-to-top\">Back to top</a>\n  <a href=\"https://github.com/yuche/vue-strap\" class=\"back-to-top\">GitHub</a>\n</affix>\n";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(79)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\navbarHeader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(90)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-415f19c5/navbarHeader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Navbar = __webpack_require__(80);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Dropdown = __webpack_require__(83);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <navbar>
	//     <a href="/" title="Home" slot="brand" class="navbar-brand">VueStrap</a>
	//     <dropdown text="Component List" type="primary">
	//       <li v-for="s in sections"><a :href="'#'+s.id" v-text="s.name"></a></li>
	//     </dropdown>
	//     <li>
	//       <a href="https://github.com/yuche/vue-strap" target="_blank">
	//         Fork this project on Github
	//         <svg height="16px" fill="#777" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
	//       </a>
	//     </li>
	//   </navbar>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    navbar: _Navbar2.default,
	    dropdown: _Dropdown2.default
	  },
	  data: function data() {
	    return {
	      sections: []
	    };
	  },
	  created: function created() {
	    if (!this.$root.sections) {
	      this.$root.sections = [];
	    }
	    this.sections = this.$root.sections;
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(81)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Navbar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(82)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-38f0619e/Navbar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    placement: {
	      type: String,
	      default: 'top'
	    }
	  },
	  data: function data() {
	    return {
	      id: 'bs-example-navbar-collapse-1',
	      collapsed: true,
	      styles: {}
	    };
	  },
	
	  computed: {
	    slots: function slots() {
	      return this._slotContents;
	    }
	  },
	  methods: {
	    toggleCollapse: function toggleCollapse(e) {
	      e && e.preventDefault();
	      this.collapsed = !this.collapsed;
	    }
	  },
	  created: function created() {
	    this._navbar = true;
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var $dropdown = (0, _NodeList2.default)('.dropdown>[data-toggle="dropdown"]', this.$el).parent();
	    $dropdown.on('click', '.dropdown-toggle', function (e) {
	      e.preventDefault();
	      $dropdown.each(function (content) {
	        if (content.contains(e.target)) {
	          content.classList.toggle('open');
	        }
	      });
	    }).on('click', '.dropdown-menu>li>a', function (e) {
	      $dropdown.each(function (content) {
	        if (content.contains(e.target)) {
	          content.classList.remove('open');
	        }
	      });
	    }).onBlur(function (e) {
	      $dropdown.each(function (content) {
	        if (!content.contains(e.target)) {
	          content.classList.remove('open');
	        }
	      });
	    });
	    var height = this.$el.offsetHeight;
	    if (this.placement === 'top') {
	      document.body.style.paddingTop = height + 'px';
	    }
	    if (this.placement === 'bottom') {
	      document.body.style.paddingBottom = height + 'px';
	    }
	    if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).on('click', function (e) {
	      return _this.toggleCollapse(e);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)('.dropdown', this.$el).off('click').offBlur();
	    if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).off('click');
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <nav v-el:navbar :class="['navbar',{
	//     'navbar-inverse':(type == 'inverse'),
	//     'navbar-default':(type == 'default'),
	//     'navbar-fixed-top':(placement === 'top'),
	//     'navbar-fixed-bottom':(placement === 'bottom'),
	//     'navbar-static-top':(placement === 'static')
	//   }]">
	//     <div class="container-fluid">
	//       <div class="navbar-header">
	//         <button v-if="!slots.collapse" type="button" class="navbar-toggle collapsed"  aria-expanded="false" @click="toggleCollapse">
	//           <span class="sr-only">Toggle navigation</span>
	//           <span class="icon-bar"></span>
	//           <span class="icon-bar"></span>
	//           <span class="icon-bar"></span>
	//         </button>
	//         <slot name="collapse"></slot>
	//         <slot name="brand"></slot>
	//       </div>
	//       <div :class="['navbar-collapse',{collapse:collapsed}]">
	//         <ul class="nav navbar-nav">
	//           <slot></slot>
	//         </ul>
	//         <ul v-if="slots.right" class="nav navbar-nav navbar-right">
	//           <slot name="right"></slot>
	//         </ul>
	//       </div>
	//     </div>
	//   </nav>
	// </template>
	//
	// <script>

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\n<nav v-el:navbar :class=\"['navbar',{\n  'navbar-inverse':(type == 'inverse'),\n  'navbar-default':(type == 'default'),\n  'navbar-fixed-top':(placement === 'top'),\n  'navbar-fixed-bottom':(placement === 'bottom'),\n  'navbar-static-top':(placement === 'static')\n}]\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button v-if=\"!slots.collapse\" type=\"button\" class=\"navbar-toggle collapsed\"  aria-expanded=\"false\" @click=\"toggleCollapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <slot name=\"collapse\"></slot>\n      <slot name=\"brand\"></slot>\n    </div>\n    <div :class=\"['navbar-collapse',{collapse:collapsed}]\">\n      <ul class=\"nav navbar-nav\">\n        <slot></slot>\n      </ul>\n      <ul v-if=\"slots.right\" class=\"nav navbar-nav navbar-right\">\n        <slot name=\"right\"></slot>\n      </ul>\n    </div>\n  </div>\n</nav>\n";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(84)
	__vue_script__ = __webpack_require__(88)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(89)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-39be1072/Dropdown.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-39be1072&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dropdown.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-39be1072&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dropdown.vue");
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

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.secret[_v-39be1072] {\r\n  position: absolute;\r\n  clip: rect(0 0 0 0);\r\n  overflow: hidden;\r\n  margin: -1px;\r\n  height: 1px;\r\n  width: 1px;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n", "", {"version":3,"sources":["/./src/Dropdown.vue?6c79095c"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqGA;EACA,mBAAA;EACA,oBAAA;EACA,iBAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;CACA","file":"Dropdown.vue","sourcesContent":["<template>\r\n  <li v-if=\"$parent._navbar||$parent.menu||$parent._tabset\" v-el:dropdown class=\"dropdown\" :class=\"classes\">\r\n      <a v-if=\"text\" class=\"dropdown-toggle\" role=\"button\" :class=\"{disabled: disabled}\" @keyup.esc=\"show = false\">\r\n        {{ text }}\r\n        <span class=\"caret\"></span>\r\n      </a>\r\n      <slot v-else name=\"button\"></slot>\r\n    <slot v-if=\"slots['dropdown-menu']\" name=\"dropdown-menu\"></slot>\r\n    <ul v-else class=\"dropdown-menu\">\r\n      <slot></slot>\r\n    </ul>\r\n  </li>\r\n  <div v-else v-el:dropdown class=\"btn-group\" :class=\"classes\">\r\n      <button v-if=\"text\" type=\"button\" class=\"btn btn-{{type||'default'}} dropdown-toggle\" @keyup.esc=\"show = false\" :disabled=\"disabled\">\r\n        {{ text }}\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n      <slot v-else name=\"button\"></slot>\r\n    <slot v-if=\"slots['dropdown-menu']\" name=\"dropdown-menu\"></slot>\r\n    <ul v-else class=\"dropdown-menu\">\r\n      <slot></slot>\r\n    </ul>\r\n  </div>\r\n</template>\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\nexport default {\r\n  props: {\r\n    show: {\r\n      twoWay: true,\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    'class': null,\r\n    disabled: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    text: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    type: {\r\n      type: String,\r\n      default: null\r\n    }\r\n  },\r\n  computed: {\r\n    classes () {\r\n      return [{open: this.show, disabled: this.disabled}, this.class]\r\n    },\r\n    menu () {\r\n      return !this.$parent || this.$parent.navbar\r\n    },\r\n    submenu () {\r\n      return this.$parent && (this.$parent.menu || this.$parent.submenu)\r\n    },\r\n    slots () {\r\n      return this._slotContents\r\n    }\r\n  },\r\n  methods: {\r\n    blur () {\r\n      this.unblur()\r\n      this._hide = setTimeout(() => {\r\n        this._hide = null\r\n        this.show = false\r\n      }, 100)\r\n    },\r\n    unblur () {\r\n      if (this._hide) {\r\n        clearTimeout(this._hide)\r\n        this._hide = null\r\n      }\r\n    }\r\n  },\r\n  ready () {\r\n    const $el = $(this.$els.dropdown)\r\n    $el.onBlur((e) => { this.show = false })\r\n    $el.findChildren('a,button').on('click', (e) => {\r\n      e.preventDefault()\r\n      if (this.disabled) { return false }\r\n      this.show = !this.show\r\n      return false\r\n    })\r\n    $el.findChildren('ul').on('click', 'li>a', (e) => { this.show = false })\r\n  },\r\n  beforeDestroy () {\r\n    const $el = $(this.$els.dropdown)\r\n    $el.offBlur()\r\n    $el.findChildren('a,button').off()\r\n    $el.findChildren('ul').off()\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.secret {\r\n  position: absolute;\r\n  clip: rect(0 0 0 0);\r\n  overflow: hidden;\r\n  margin: -1px;\r\n  height: 1px;\r\n  width: 1px;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 86 */
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
/* 87 */
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
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
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
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
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
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <li v-if="$parent._navbar||$parent.menu||$parent._tabset" v-el:dropdown class="dropdown" :class="classes">
	//       <a v-if="text" class="dropdown-toggle" role="button" :class="{disabled: disabled}" @keyup.esc="show = false">
	//         {{ text }}
	//         <span class="caret"></span>
	//       </a>
	//       <slot v-else name="button"></slot>
	//     <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
	//     <ul v-else class="dropdown-menu">
	//       <slot></slot>
	//     </ul>
	//   </li>
	//   <div v-else v-el:dropdown class="btn-group" :class="classes">
	//       <button v-if="text" type="button" class="btn btn-{{type||'default'}} dropdown-toggle" @keyup.esc="show = false" :disabled="disabled">
	//         {{ text }}
	//         <span class="caret"></span>
	//       </button>
	//       <slot v-else name="button"></slot>
	//     <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
	//     <ul v-else class="dropdown-menu">
	//       <slot></slot>
	//     </ul>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    show: {
	      twoWay: true,
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    'class': null,
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    text: {
	      type: String,
	      default: null
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  },
	  computed: {
	    classes: function classes() {
	      return [{ open: this.show, disabled: this.disabled }, this.class];
	    },
	    menu: function menu() {
	      return !this.$parent || this.$parent.navbar;
	    },
	    submenu: function submenu() {
	      return this.$parent && (this.$parent.menu || this.$parent.submenu);
	    },
	    slots: function slots() {
	      return this._slotContents;
	    }
	  },
	  methods: {
	    blur: function blur() {
	      var _this = this;
	
	      this.unblur();
	      this._hide = setTimeout(function () {
	        _this._hide = null;
	        _this.show = false;
	      }, 100);
	    },
	    unblur: function unblur() {
	      if (this._hide) {
	        clearTimeout(this._hide);
	        this._hide = null;
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    var $el = (0, _NodeList2.default)(this.$els.dropdown);
	    $el.onBlur(function (e) {
	      _this2.show = false;
	    });
	    $el.findChildren('a,button').on('click', function (e) {
	      e.preventDefault();
	      if (_this2.disabled) {
	        return false;
	      }
	      _this2.show = !_this2.show;
	      return false;
	    });
	    $el.findChildren('ul').on('click', 'li>a', function (e) {
	      _this2.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    var $el = (0, _NodeList2.default)(this.$els.dropdown);
	    $el.offBlur();
	    $el.findChildren('a,button').off();
	    $el.findChildren('ul').off();
	  }
	};
	// </script>
	//
	// <style scoped>
	// .secret {
	//   position: absolute;
	//   clip: rect(0 0 0 0);
	//   overflow: hidden;
	//   margin: -1px;
	//   height: 1px;
	//   width: 1px;
	//   padding: 0;
	//   border: 0;
	// }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "\n<li v-if=\"$parent._navbar||$parent.menu||$parent._tabset\" v-el:dropdown=\"\" class=\"dropdown\" :class=\"classes\" _v-39be1072=\"\">\n    <a v-if=\"text\" class=\"dropdown-toggle\" role=\"button\" :class=\"{disabled: disabled}\" @keyup.esc=\"show = false\" _v-39be1072=\"\">\n      {{ text }}\n      <span class=\"caret\" _v-39be1072=\"\"></span>\n    </a>\n    <slot v-else=\"\" name=\"button\" _v-39be1072=\"\"></slot>\n  <slot v-if=\"slots['dropdown-menu']\" name=\"dropdown-menu\" _v-39be1072=\"\"></slot>\n  <ul v-else=\"\" class=\"dropdown-menu\" _v-39be1072=\"\">\n    <slot _v-39be1072=\"\"></slot>\n  </ul>\n</li>\n<div v-else=\"\" v-el:dropdown=\"\" class=\"btn-group\" :class=\"classes\" _v-39be1072=\"\">\n    <button v-if=\"text\" type=\"button\" class=\"btn btn-{{type||'default'}} dropdown-toggle\" @keyup.esc=\"show = false\" :disabled=\"disabled\" _v-39be1072=\"\">\n      {{ text }}\n      <span class=\"caret\" _v-39be1072=\"\"></span>\n    </button>\n    <slot v-else=\"\" name=\"button\" _v-39be1072=\"\"></slot>\n  <slot v-if=\"slots['dropdown-menu']\" name=\"dropdown-menu\" _v-39be1072=\"\"></slot>\n  <ul v-else=\"\" class=\"dropdown-menu\" _v-39be1072=\"\">\n    <slot _v-39be1072=\"\"></slot>\n  </ul>\n</div>\n";

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "\n<navbar>\n  <a href=\"/\" title=\"Home\" slot=\"brand\" class=\"navbar-brand\">VueStrap</a>\n  <dropdown text=\"Component List\" type=\"primary\">\n    <li v-for=\"s in sections\"><a :href=\"'#'+s.id\" v-text=\"s.name\"></a></li>\n  </dropdown>\n  <li>\n    <a href=\"https://github.com/yuche/vue-strap\" target=\"_blank\">\n      Fork this project on Github\n      <svg height=\"16px\" fill=\"#777\" class=\"octicon octicon-mark-github\" viewBox=\"0 0 16 16\" version=\"1.1\" aria-hidden=\"true\"><path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg>\n    </a>\n  </li>\n</navbar>\n";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(92)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\gettingStarted.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(96)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f4a32152/gettingStarted.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docCode: _docCode2.default
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="getting-started">
	//     <h1 class="page-header"><a href="#getting-started" class="anchor">Getting started</a></h1>
	//     <div class="bs-callout bs-callout-success">
	//       <h4>About this project</h4>
	//       <p>
	//         This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.
	//         As a result no dependency on jQuery or Bootstrap's JavaScript is required.
	//         The only required dependencies are:
	//       </p>
	//       <ul>
	//         <li><a href="http://vuejs.org/">Vue.js</a>
	//           (required ^1.0.8, test with 1.0.8).</li>
	//         <li><a href="http://getbootstrap.com/">Bootstrap CSS</a>
	//           (required 3.x.x, test with 3.3.5).
	//           VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.
	//         </li>
	//       </ul>
	//     </div>
	//     <h2>CommonJS</h2>
	//     <doc-code language="javascript">
	//       $ npm install vue-strap
	//
	//       var alert = require('vue-strap/src/alert');
	//       // or
	//       var alert = require('vue-strap').alert;
	//
	//       new Vue({
	//         components: {
	//           alert: alert
	//         }
	//       })
	//     </doc-code>
	//     <h2>ES6</h2>
	//     <doc-code language="javascript">
	//       $ npm install vue-strap
	//
	//       import alert from 'vue-strap/src/alert'
	//       // or
	//       import { alert } from 'vue-strap'
	//
	//       new Vue({
	//         components: {
	//           alert
	//         }``
	//       })
	//     </doc-code>
	//
	//     <h2>AMD</h2>
	//     <doc-code language="javascript">
	//       $ bower install vue-strap
	//
	//       define(['vue-strap'], function(VueStrap) { var alert = VueStrap.alert; ... });
	//     </doc-code>
	//     <h2>Browser globals</h2>
	//     <p>
	//       The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.min.js</code> with
	//       all components exported in the <code>window.VueStrap</code> object. These bundles are also available on both the
	//       Bower and NPM packages.
	//     </p>
	//     <doc-code language="markup">
	//       <v-select :options="options"></v-select>
	//
	//       <script src="path/to/vue.js"></script>
	//       <script src="path/to/vue-strap.js"></script>
	//       <script>
	//         new Vue({
	//           components: {
	//             vSelect: VueStrap.select
	//           },
	//           data: {
	//             options: []
	//           }
	//         })
	//       </script>
	//     </doc-code>
	//     <h2>Mobile detection (optional):</h2>
	//     <p>If you need to enable/disable options if is a mobile device you can add:</p>
	//     <doc-code language="markup">
	//       <script src="path/to/isMobileBrowser.js"></script>
	//     </doc-code>
	//     <p>Then in javascript you can check it just doing:</p>
	//     <doc-code language="javascript">
	//       if (navigator.isMobile) {
	//         //do something if is mobile
	//       }
	//       if ('isMobile' in navigator) {
	//         //do things only if the plugin was loaded
	//
	//         if (!navigator.isMobile) {
	//           //do something if is not a mobile
	//         }
	//       }
	//     </doc-code>
	//     <p>Based on <a href="http://detectmobilebrowsers.com/">Detect Mobile Browsers</a>.</p>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(94)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\docCode.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(95)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3531220a/docCode.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    language: {
	      type: String,
	      default: null
	    }
	  },
	  compiled: function compiled() {
	    var content = '';
	    (0, _NodeList2.default)(this._slotContents.default.childNodes).each(function (el) {
	      content += el.outerHTML || el.nodeValue;
	    });
	    if (~['html', 'markup'].indexOf(this.language)) content = content.replace(/(\w+)=""/g, '$1');
	    var matches = content.match(/(\n|\r)[ ]*\S/g);
	    if (matches) {
	      (function () {
	        var values = matches.map(function (el) {
	          return el.length - 2;
	        });
	        var min = Math.min.apply(Math, values);
	        content = content.replace(/(\n|\r)([^\n\S]*)/g, function (str, nr, s) {
	          return nr + s.substr(min);
	        });
	      })();
	    }
	    this.$els.container.innerHTML = content.replace(/^\s+|\s+$/g, '');
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <pre v-if="!language" v-el:container></pre>
	//   <template v-else>
	//     <pre v-if="language=='markup'"><code class="language-markup"><script v-el:container type="language-mark-up"></script></code></pre>
	//     <pre v-else><code class="language-{{language}}"><script v-el:container type="language-{{language}}"></script></code></pre>
	//   </template>
	// </template>
	//
	// <script>

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "\n<pre v-if=\"!language\" v-el:container></pre>\n<template v-else>\n  <pre v-if=\"language=='markup'\"><code class=\"language-markup\"><script v-el:container type=\"language-mark-up\"></script></code></pre>\n  <pre v-else><code class=\"language-{{language}}\"><script v-el:container type=\"language-{{language}}\"></script></code></pre>\n</template>\n";

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"bs-docs-section\" id=\"getting-started\">\n  <h1 class=\"page-header\"><a href=\"#getting-started\" class=\"anchor\">Getting started</a></h1>\n  <div class=\"bs-callout bs-callout-success\">\n    <h4>About this project</h4>\n    <p>\n      This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.\n      As a result no dependency on jQuery or Bootstrap's JavaScript is required.\n      The only required dependencies are:\n    </p>\n    <ul>\n      <li><a href=\"http://vuejs.org/\">Vue.js</a>\n        (required ^1.0.8, test with 1.0.8).</li>\n      <li><a href=\"http://getbootstrap.com/\">Bootstrap CSS</a>\n        (required 3.x.x, test with 3.3.5).\n        VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.\n      </li>\n    </ul>\n  </div>\n  <h2>CommonJS</h2>\n  <doc-code language=\"javascript\">\n    $ npm install vue-strap\n\n    var alert = require('vue-strap/src/alert');\n    // or\n    var alert = require('vue-strap').alert;\n\n    new Vue({\n      components: {\n        alert: alert\n      }\n    })\n  </doc-code>\n  <h2>ES6</h2>\n  <doc-code language=\"javascript\">\n    $ npm install vue-strap\n\n    import alert from 'vue-strap/src/alert'\n    // or\n    import { alert } from 'vue-strap'\n\n    new Vue({\n      components: {\n        alert\n      }``\n    })\n  </doc-code>\n\n  <h2>AMD</h2>\n  <doc-code language=\"javascript\">\n    $ bower install vue-strap\n\n    define(['vue-strap'], function(VueStrap) { var alert = VueStrap.alert; ... });\n  </doc-code>\n  <h2>Browser globals</h2>\n  <p>\n    The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.min.js</code> with\n    all components exported in the <code>window.VueStrap</code> object. These bundles are also available on both the\n    Bower and NPM packages.\n  </p>\n  <doc-code language=\"markup\">\n    <v-select :options=\"options\"></v-select>\n\n    <script src=\"path/to/vue.js\"></script>\n    <script src=\"path/to/vue-strap.js\"></script>\n    <script>\n      new Vue({\n        components: {\n          vSelect: VueStrap.select\n        },\n        data: {\n          options: []\n        }\n      })\n    </script>\n  </doc-code>\n  <h2>Mobile detection (optional):</h2>\n  <p>If you need to enable/disable options if is a mobile device you can add:</p>\n  <doc-code language=\"markup\">\n    <script src=\"path/to/isMobileBrowser.js\"></script>\n  </doc-code>\n  <p>Then in javascript you can check it just doing:</p>\n  <doc-code language=\"javascript\">\n    if (navigator.isMobile) {\n      //do something if is mobile\n    }\n    if ('isMobile' in navigator) {\n      //do things only if the plugin was loaded\n\n      if (!navigator.isMobile) {\n        //do something if is not a mobile\n      }\n    }\n  </doc-code>\n  <p>Based on <a href=\"http://detectmobilebrowsers.com/\">Detect Mobile Browsers</a>.</p>\n</div>\n";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(98)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\accordionDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(139)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-76818dd9/accordionDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Accordion = __webpack_require__(105);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Checkbox = __webpack_require__(108);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Panel = __webpack_require__(113);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _Select = __webpack_require__(118);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    accordion: _Accordion2.default,
	    checkbox: _Checkbox2.default,
	    panel: _Panel2.default,
	    vSelect: _Select2.default
	  },
	  data: function data() {
	    return {
	      checked: true,
	      selected: 'info',
	      first: 'primary',
	      types: ['default', 'primary', 'info', 'success', 'warning', 'danger']
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <doc-section id="accordion" name="Accordion">
	//     <div class="bs-example">
	//       <checkbox :checked.sync="checked" type="primary">Open only one at a time.</checkbox>
	//       <p><v-select :options="types" clear-button :value.sync="selected" placeholder="Global type"></v-select></p>
	//       <p><v-select :options="types" clear-button :value.sync="first" placeholder="First element type"></v-select></p>
	//       <accordion :one-at-atime="checked" :type="selected">
	//         <panel is-open :type="first=='panel'?null:first">
	//           <strong slot="header"><u>Panel #1</u></strong>
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #2">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #3">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #4">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//       </accordion>
	//     </div>
	//     <doc-code language="markup">
	//       <accordion :one-at-atime="checked" type="info">
	//         <panel is-open type="primary">
	//           <strong slot="header"><u>Panel #1</u></strong>
	//           ...
	//         </panel>
	//         <panel header="Panel #2">
	//           ...
	//         </panel>
	//         <panel header="Panel #3">
	//           ...
	//         </panel>
	//         <panel header="Panel #4">
	//           ...
	//         </panel>
	//       </accordion>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Define the type of color for the tabs (global).</p>
	//       </div>
	//       <div>
	//         <p>one-at-time</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Control whether expanding an item will cause the other items to close.</p>
	//       </div>
	//     </doc-options>
	//     <doc-options name="Panel">
	//       <div>
	//         <p>header</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>The clickable text on the group's header. You need one to be able to click on the header for toggling.</p>
	//       </div>
	//       <div>
	//         <p>is-open</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Whether accordion group is open or closed.</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Define the type of color for the tab (single).</p>
	//       </div>
	//     </doc-options>
	//     <p>If you want to personalice your header with some html you can use the slot instead of header attribute (panel&nbsp;#1 in the example).</p>
	//   </doc-section>
	// </template>
	//
	// <script>

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(100)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\docSection.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(101)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-69a9be47/docSection.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="bs-docs-section" :id="id">
	//     <h1 class="page-header"><a href="#{{id}}" class="anchor">{{name}}</a></h1>
	//     <slot></slot>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    id: {
	      required: true,
	      type: String,
	      default: null
	    },
	    name: {
	      required: true,
	      type: String,
	      default: null
	    }
	  },
	  created: function created() {
	    this._section = true;
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"bs-docs-section\" :id=\"id\">\n  <h1 class=\"page-header\"><a href=\"#{{id}}\" class=\"anchor\">{{name}}</a></h1>\n  <slot></slot>\n</div>\n";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(103)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\docOptions.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(104)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-33144180/docOptions.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    name: {
	      type: String,
	      default: null
	    }
	  },
	  data: function data() {
	    return {
	      options: []
	    };
	  },
	  created: function created() {
	    if (!this.name && this.$parent._section) {
	      this.name = this.$parent.name;
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var container = this._slotContents.default;
	    if (container) {
	      (0, _NodeList2.default)(container.children).each(function (option) {
	        _this.options.push((0, _NodeList2.default)(option.children).innerHTML);
	      });
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <h2 v-if="options.length">{{name}} Options</h2>
	//   <div class="table-responsive">
	//     <table v-if="options.length" class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr v-for="option in options">
	//           <td v-for="el in option" v-html="el" v-if="$index<4"></td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "\n<h2 v-if=\"options.length\">{{name}} Options</h2>\n<div class=\"table-responsive\">\n  <table v-if=\"options.length\" class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"option in options\">\n        <td v-for=\"el in option\" v-html=\"el\" v-if=\"$index<4\"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n";

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(106)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Accordion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(107)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d4b75a92/Accordion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: null
	    },
	    oneAtAtime: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    this._isAccordion = true;
	    this.$on('isOpenEvent', function (child) {
	      if (_this.oneAtAtime) {
	        _this.$children.forEach(function (item) {
	          if (child !== item) {
	            item.isOpen = false;
	          }
	        });
	      }
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="panel-group">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel-group\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(109)
	__vue_script__ = __webpack_require__(111)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Checkbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(112)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6922bf24/Checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(110);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6922bf24&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6922bf24&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.checkbox[_v-6922bf24] { position: relative; }\r\n.checkbox > label > input[_v-6922bf24] {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  z-index: -1;\r\n  padding: 0;\r\n  opacity: 0;\r\n  margin: 0;\r\n}\r\n.checkbox > label > .icon[_v-6922bf24] {\r\n  position: absolute;\r\n  top: .2rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  line-height:1rem;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border-radius: .35rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n.checkbox:not(.active) > label > .icon[_v-6922bf24] {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\n.checkbox > label > input:focus ~ .icon[_v-6922bf24] {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.checkbox.active > label > .icon[_v-6922bf24] {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\r\n}\r\n.checkbox.active .btn-default[_v-6922bf24] { -webkit-filter: brightness(75%); filter: brightness(75%); }\r\n\r\n.checkbox.disabled > label > .icon[_v-6922bf24],\r\n.checkbox.readonly > label > .icon[_v-6922bf24],\r\n.btn.readonly[_v-6922bf24] {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=checkbox][_v-6922bf24] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}\r\n", "", {"version":3,"sources":["/./src/Checkbox.vue?26931b2e"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkIA,yBAAA,mBAAA,EAAA;AACA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;CACA;AACA;EACA,mBAAA;EACA,WAAA;EACA,QAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,0BAAA;KAAA,uBAAA;MAAA,sBAAA;UAAA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,mCAAA;EACA,yBAAA;CACA;AACA;EACA,uBAAA;EACA,uBAAA;CACA;AACA;EACA,WAAA;EACA,0BAAA;EACA,0EAAA;CACA;AACA;EACA,2BAAA;EACA,kZAAA;CACA;AACA,6CAAA,gCAAA,CAAA,wBAAA,EAAA;;AAEA;;;EAGA,0BAAA;EACA,iBAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;CACA","file":"Checkbox.vue","sourcesContent":["<template>\r\n  <label v-if=\"buttonStyle\" :class=\"['btn btn-'+typeColor,{active:checked,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <input type=\"checkbox\" autocomplete=\"off\"\r\n      v-el:input\r\n      v-show=\"!readonly\"\r\n      :checked=\"active\"\r\n      :value=\"value\"\r\n      :name=\"name\"\r\n      :readonly=\"readonly\"\r\n      :disabled=\"disabled\"\r\n    />\r\n    <slot></slot>\r\n  </label>\r\n  <div v-else :class=\"['checkbox',typeColor,{active:checked,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <label class=\"open\">\r\n      <input type=\"checkbox\" autocomplete=\"off\"\r\n        v-el:input\r\n        :checked=\"active\"\r\n        :value=\"value\"\r\n        :name=\"name\"\r\n        :readonly=\"readonly\"\r\n        :disabled=\"disabled\"\r\n      />\r\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\r\n      <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\r\n      <slot></slot>\r\n    </label>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\n\r\nexport default {\r\n  props: {\r\n    value: {\r\n      default: true\r\n    },\r\n    checked: {\r\n      twoWay: true\r\n    },\r\n    button: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    name: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    type: {\r\n      type: String,\r\n      default: null\r\n    }\r\n  },\r\n  computed: {\r\n    active () {\r\n      return typeof this.value !== 'boolean' && this.group ? ~this.$parent.value.indexOf(this.value) : this.checked === this.value\r\n    },\r\n    buttonStyle () {\r\n      return this.button || (this.group && this.$parent.buttons)\r\n    },\r\n    group () {\r\n      return this.$parent && this.$parent._checkboxGroup\r\n    },\r\n    typeColor () {\r\n      return (this.type || (this.$parent && this.$parent.type)) || 'default'\r\n    }\r\n  },\r\n  watch: {\r\n    checked (val) {\r\n      if (typeof this.value !== 'boolean' && this.group) {\r\n        if (this.checked && !~this.$parent.value.indexOf(this.value)) this.$parent.value.push(this.value)\r\n        if (!this.checked && ~this.$parent.value.indexOf(this.value)) this.$parent.value.$remove(this.value)\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    if (typeof this.value === 'boolean') { return }\r\n    const parent = this.$parent\r\n    if (parent && parent._btnGroup && !parent._radioGroup) {\r\n      parent._checkboxGroup = true\r\n      if (!(parent.value instanceof Array)) { parent.value = [] }\r\n    }\r\n  },\r\n  ready () {\r\n    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') { return }\r\n    if (this.$parent.value.length) {\r\n      this.checked = ~this.$parent.value.indexOf(this.value)\r\n    } else if (this.checked) {\r\n      this.$parent.value.push(this.value)\r\n    }\r\n  },\r\n  methods: {\r\n    eval () {\r\n      if (typeof this.value !== 'boolean' && this.group) {\r\n        this.checked = ~this.$parent.value.indexOf(this.value)\r\n      }\r\n    },\r\n    focus () {\r\n      this.$els.input.focus()\r\n    },\r\n    toggle () {\r\n      if (!this.disabled) {\r\n        this.focus()\r\n        if (!this.readonly) {\r\n          this.checked = this.checked ? null : this.value\r\n          if (this.group && typeof this.value !== 'boolean') {\r\n            const index = this.$parent.value.indexOf(this.value)\r\n            this.$parent.value[~index ? '$remove' : 'push'](this.value)\r\n          }\r\n        }\r\n      }\r\n      return false\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.checkbox { position: relative; }\r\n.checkbox > label > input {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  z-index: -1;\r\n  padding: 0;\r\n  opacity: 0;\r\n  margin: 0;\r\n}\r\n.checkbox > label > .icon {\r\n  position: absolute;\r\n  top: .2rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  line-height:1rem;\r\n  text-align: center;\r\n  user-select: none;\r\n  border-radius: .35rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n.checkbox:not(.active) > label > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\n.checkbox > label > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.checkbox.active > label > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\r\n}\r\n.checkbox.active .btn-default { filter: brightness(75%); }\r\n\r\n.checkbox.disabled > label > .icon,\r\n.checkbox.readonly > label > .icon,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=checkbox] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	exports.default = {
	  props: {
	    value: {
	      default: true
	    },
	    checked: {
	      twoWay: true
	    },
	    button: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  },
	  computed: {
	    active: function active() {
	      return typeof this.value !== 'boolean' && this.group ? ~this.$parent.value.indexOf(this.value) : this.checked === this.value;
	    },
	    buttonStyle: function buttonStyle() {
	      return this.button || this.group && this.$parent.buttons;
	    },
	    group: function group() {
	      return this.$parent && this.$parent._checkboxGroup;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  watch: {
	    checked: function checked(val) {
	      if (typeof this.value !== 'boolean' && this.group) {
	        if (this.checked && !~this.$parent.value.indexOf(this.value)) this.$parent.value.push(this.value);
	        if (!this.checked && ~this.$parent.value.indexOf(this.value)) this.$parent.value.$remove(this.value);
	      }
	    }
	  },
	  created: function created() {
	    if (typeof this.value === 'boolean') {
	      return;
	    }
	    var parent = this.$parent;
	    if (parent && parent._btnGroup && !parent._radioGroup) {
	      parent._checkboxGroup = true;
	      if (!(parent.value instanceof Array)) {
	        parent.value = [];
	      }
	    }
	  },
	  ready: function ready() {
	    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') {
	      return;
	    }
	    if (this.$parent.value.length) {
	      this.checked = ~this.$parent.value.indexOf(this.value);
	    } else if (this.checked) {
	      this.$parent.value.push(this.value);
	    }
	  },
	
	  methods: {
	    eval: function _eval() {
	      if (typeof this.value !== 'boolean' && this.group) {
	        this.checked = ~this.$parent.value.indexOf(this.value);
	      }
	    },
	    focus: function focus() {
	      this.$els.input.focus();
	    },
	    toggle: function toggle() {
	      if (!this.disabled) {
	        this.focus();
	        if (!this.readonly) {
	          this.checked = this.checked ? null : this.value;
	          if (this.group && typeof this.value !== 'boolean') {
	            var index = this.$parent.value.indexOf(this.value);
	            this.$parent.value[~index ? '$remove' : 'push'](this.value);
	          }
	        }
	      }
	      return false;
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	// .checkbox { position: relative; }
	// .checkbox > label > input {
	//   box-sizing: border-box;
	//   position: absolute;
	//   z-index: -1;
	//   padding: 0;
	//   opacity: 0;
	//   margin: 0;
	// }
	// .checkbox > label > .icon {
	//   position: absolute;
	//   top: .2rem;
	//   left: 0;
	//   display: block;
	//   width: 1.4rem;
	//   height: 1.4rem;
	//   line-height:1rem;
	//   text-align: center;
	//   user-select: none;
	//   border-radius: .35rem;
	//   background-repeat: no-repeat;
	//   background-position: center center;
	//   background-size: 50% 50%;
	// }
	// .checkbox:not(.active) > label > .icon {
	//   background-color: #ddd;
	//   border: 1px solid #bbb;
	// }
	// .checkbox > label > input:focus ~ .icon {
	//   outline: 0;
	//   border: 1px solid #66afe9;
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
	// }
	// .checkbox.active > label > .icon {
	//   background-size: 1rem 1rem;
	//   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);
	// }
	// .checkbox.active .btn-default { filter: brightness(75%); }
	//
	// .checkbox.disabled > label > .icon,
	// .checkbox.readonly > label > .icon,
	// .btn.readonly {
	//   filter: alpha(opacity=65);
	//   box-shadow: none;
	//   opacity: .65;
	// }
	// label.btn > input[type=checkbox] {
	//   position: absolute;
	//   clip: rect(0,0,0,0);
	//   pointer-events: none;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <label v-if="buttonStyle" :class="['btn btn-'+typeColor,{active:checked,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
	//     <input type="checkbox" autocomplete="off"
	//       v-el:input
	//       v-show="!readonly"
	//       :checked="active"
	//       :value="value"
	//       :name="name"
	//       :readonly="readonly"
	//       :disabled="disabled"
	//     />
	//     <slot></slot>
	//   </label>
	//   <div v-else :class="['checkbox',typeColor,{active:checked,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
	//     <label class="open">
	//       <input type="checkbox" autocomplete="off"
	//         v-el:input
	//         :checked="active"
	//         :value="value"
	//         :name="name"
	//         :readonly="readonly"
	//         :disabled="disabled"
	//       />
	//       <span class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
	//       <span v-if="active&&typeColor==='default'" class="icon"></span>
	//       <slot></slot>
	//     </label>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "\n<label v-if=\"buttonStyle\" :class=\"['btn btn-'+typeColor,{active:checked,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\" _v-6922bf24=\"\">\n  <input type=\"checkbox\" autocomplete=\"off\" v-el:input=\"\" v-show=\"!readonly\" :checked=\"active\" :value=\"value\" :name=\"name\" :readonly=\"readonly\" :disabled=\"disabled\" _v-6922bf24=\"\">\n  <slot _v-6922bf24=\"\"></slot>\n</label>\n<div v-else=\"\" :class=\"['checkbox',typeColor,{active:checked,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\" _v-6922bf24=\"\">\n  <label class=\"open\" _v-6922bf24=\"\">\n    <input type=\"checkbox\" autocomplete=\"off\" v-el:input=\"\" :checked=\"active\" :value=\"value\" :name=\"name\" :readonly=\"readonly\" :disabled=\"disabled\" _v-6922bf24=\"\">\n    <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\" _v-6922bf24=\"\"></span>\n    <span v-if=\"active&amp;&amp;typeColor==='default'\" class=\"icon\" _v-6922bf24=\"\"></span>\n    <slot _v-6922bf24=\"\"></slot>\n  </label>\n</div>\n";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(114)
	__vue_script__ = __webpack_require__(116)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b1e0461a/Panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(115);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.accordion-toggle {\r\n  cursor: pointer;\r\n}\r\n.collapse-transition {\r\n  -webkit-transition: max-height .5s ease;\r\n  transition: max-height .5s ease;\r\n}\r\n.collapse-enter, .collapse-leave {\r\n  max-height: 0!important;\r\n}\r\n", "", {"version":3,"sources":["/./src/Panel.vue?e66a4626"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0EA;EACA,gBAAA;CACA;AACA;EACA,wCAAA;EAAA,gCAAA;CACA;AACA;EACA,wBAAA;CACA","file":"Panel.vue","sourcesContent":["<template>\r\n  <div class=\"panel {{panelType}}\">\r\n    <div :class=\"['panel-heading',{'accordion-toggle':inAccordion}]\" @click.prevent=\"inAccordion&&toggle()\">\r\n      <slot name=\"header\">\r\n        <h4 class=\"panel-title\">{{ header }}</h4>\r\n      </slot>\r\n    </div>\r\n    <div class=\"panel-collapse\"\r\n      v-el:panel\r\n      v-show=\"isOpen\"\r\n      transition=\"collapse\"\r\n    >\r\n      <div class=\"panel-body\">\r\n        <slot></slot>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\n\r\nexport default {\r\n  props: {\r\n    header: {\r\n      type: String\r\n    },\r\n    isOpen: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: null\r\n    },\r\n    type: {\r\n      type: String,\r\n      default : null\r\n    }\r\n  },\r\n  computed: {\r\n    inAccordion () {\r\n      return this.$parent && this.$parent._isAccordion\r\n    },\r\n    panelType () {\r\n      return 'panel-' + (this.type || (this.$parent && this.$parent.type) || 'default')\r\n    }\r\n  },\r\n  methods: {\r\n    toggle () {\r\n      this.isOpen = !this.isOpen\r\n      this.$dispatch('isOpenEvent', this)\r\n    }\r\n  },\r\n  transitions: {\r\n    collapse: {\r\n      afterEnter (el) {\r\n        el.style.maxHeight = ''\r\n        el.style.overflow = ''\r\n      },\r\n      beforeLeave (el) {\r\n        el.style.maxHeight = el.offsetHeight + 'px'\r\n        el.style.overflow = 'hidden'\r\n        // Recalculate DOM before the class gets added.\r\n        return el.offsetHeight\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    if (this.isOpen === null) {\r\n      this.isOpen = !this.inAccordion\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.accordion-toggle {\r\n  cursor: pointer;\r\n}\r\n.collapse-transition {\r\n  transition: max-height .5s ease;\r\n}\r\n.collapse-enter, .collapse-leave {\r\n  max-height: 0!important;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    isOpen: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: null
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  },
	  computed: {
	    inAccordion: function inAccordion() {
	      return this.$parent && this.$parent._isAccordion;
	    },
	    panelType: function panelType() {
	      return 'panel-' + (this.type || this.$parent && this.$parent.type || 'default');
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.isOpen = !this.isOpen;
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  transitions: {
	    collapse: {
	      afterEnter: function afterEnter(el) {
	        el.style.maxHeight = '';
	        el.style.overflow = '';
	      },
	      beforeLeave: function beforeLeave(el) {
	        el.style.maxHeight = el.offsetHeight + 'px';
	        el.style.overflow = 'hidden';
	        // Recalculate DOM before the class gets added.
	        return el.offsetHeight;
	      }
	    }
	  },
	  created: function created() {
	    if (this.isOpen === null) {
	      this.isOpen = !this.inAccordion;
	    }
	  }
	};
	// </script>
	//
	// <style>
	// .accordion-toggle {
	//   cursor: pointer;
	// }
	// .collapse-transition {
	//   transition: max-height .5s ease;
	// }
	// .collapse-enter, .collapse-leave {
	//   max-height: 0!important;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="panel {{panelType}}">
	//     <div :class="['panel-heading',{'accordion-toggle':inAccordion}]" @click.prevent="inAccordion&&toggle()">
	//       <slot name="header">
	//         <h4 class="panel-title">{{ header }}</h4>
	//       </slot>
	//     </div>
	//     <div class="panel-collapse"
	//       v-el:panel
	//       v-show="isOpen"
	//       transition="collapse"
	//     >
	//       <div class="panel-body">
	//         <slot></slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel {{panelType}}\">\n  <div :class=\"['panel-heading',{'accordion-toggle':inAccordion}]\" @click.prevent=\"inAccordion&&toggle()\">\n    <slot name=\"header\">\n      <h4 class=\"panel-title\">{{ header }}</h4>\n    </slot>\n  </div>\n  <div class=\"panel-collapse\"\n    v-el:panel\n    v-show=\"isOpen\"\n    transition=\"collapse\"\n  >\n    <div class=\"panel-body\">\n      <slot></slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(119)
	__vue_script__ = __webpack_require__(121)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(138)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e514dbc6/Select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(120);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e514dbc6&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e514dbc6&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.btn-select[_v-e514dbc6] { display: inline-block; }\r\n.btn-select>.btn-group>.dropdown-menu>li[_v-e514dbc6] { position:relative; }\r\n.btn-select>.btn-group>.dropdown-menu>li>a[_v-e514dbc6] { cursor:pointer; }\r\n.bs-searchbox[_v-e514dbc6] {\r\n  position: relative;\r\n  margin: 4px 8px;\r\n}\r\n.bs-searchbox .close[_v-e514dbc6] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\nbutton>.close[_v-e514dbc6] { margin-left: 5px;}\r\n.btn-group>.notify[_v-e514dbc6] { position: relative; }\r\n.btn-group .dropdown-menu .notify[_v-e514dbc6],\r\n.btn-group .notify > div[_v-e514dbc6] {\r\n  position: absolute;\r\n  width: 96%;\r\n  margin: 0 2%;\r\n  min-height: 26px;\r\n  padding: 3px 5px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  pointer-events: none;\r\n}\r\n.btn-group .notify > div[_v-e514dbc6] {\r\n  top: 5px;\r\n  z-index: 1;\r\n}\r\n.btn-group .dropdown-menu .notify[_v-e514dbc6] {\r\n  opacity: .9;\r\n  bottom: 5px;\r\n}\r\n.btn-group.btn-group-justified .dropdown-menu[_v-e514dbc6] { width: 100%; }\r\nspan.caret[_v-e514dbc6] {\r\n  float: right;\r\n  margin-top: 9px;\r\n  margin-left: 5px;\r\n}\r\n.secret[_v-e514dbc6] {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\n.bs-searchbox input[_v-e514dbc6]:focus,\r\n.secret:focus + button[_v-e514dbc6] {\r\n  outline: 0;\r\n  border-color: #66afe9 !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n", "", {"version":3,"sources":["/./src/Select.vue?61a4468a"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgTA,2BAAA,sBAAA,EAAA;AACA,wDAAA,kBAAA,EAAA;AACA,0DAAA,eAAA,EAAA;AACA;EACA,mBAAA;EACA,gBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA,6BAAA,iBAAA,CAAA;AACA,kCAAA,mBAAA,EAAA;AACA;;EAEA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,0BAAA;EACA,4CAAA;EACA,qBAAA;CACA;AACA;EACA,SAAA;EACA,WAAA;CACA;AACA;EACA,YAAA;EACA,YAAA;CACA;AACA,6DAAA,YAAA,EAAA;AACA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;CACA;AACA;EACA,UAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,WAAA;EACA,mBAAA;EACA,WAAA;CACA;AACA;;EAEA,WAAA;EACA,iCAAA;EAEA,0EAAA;CACA","file":"Select.vue","sourcesContent":["<template>\r\n<div v-el:select :class=\"{'btn-group btn-group-justified': justified, 'btn-select': !justified}\">\r\n  <slot name=\"before\"></slot>\r\n  <div :class=\"{open:show,dropdown:!justified}\">\r\n    <select v-el:sel v-model=\"value\" v-show=\"show\" name=\"{{name}}\" class=\"secret\" :multiple=\"multiple\" :required=\"required\" :readonly=\"readonly\" :disabled=\"disabled\">\r\n      <option v-if=\"required\" value=\"\"></option>\r\n      <option v-for=\"option in options\" :value=\"option.value||option\">{{ option.label||option }}</option>\r\n    </select>\r\n    <button type=\"button\" class=\"form-control dropdown-toggle\"\r\n      :disabled=\"disabled || !hasParent\"\r\n      :readonly=\"readonly\"\r\n      @click=\"toggle()\"\r\n      @keyup.esc=\"show = false\"\r\n    >\r\n      <span class=\"btn-content\">{{ loading ? text.loading : showPlaceholder || selectedItems }}</span>\r\n      <span class=\"caret\"></span>\r\n      <span v-if=\"clearButton&&values.length\" class=\"close\" @click=\"clear()\">&times;</span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\">\r\n      <template v-if=\"options.length\">\r\n        <li v-if=\"canSearch\" class=\"bs-searchbox\">\r\n          <input type=\"text\" placeholder=\"{{searchText||text.search}}\" class=\"form-control\" autocomplete=\"off\"\r\n            v-el:search\r\n            v-model=\"searchValue\"\r\n            @keyup.esc=\"show = false\"\r\n          />\r\n          <span v-show=\"searchValue\" class=\"close\" @click=\"clearSearch\">&times;</span>\r\n        </li>\r\n        <li v-if=\"required&&!clearButton\"><a @mousedown.prevent=\"clear() && blur()\">{{ placeholder || text.notSelected }}</a></li>\r\n        <li v-for=\"option in options | filterBy searchValue\" :id=\"option.value||option\">\r\n          <a @mousedown.prevent=\"select(option.value||option)\">\r\n            {{ option.label||option }}\r\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"isSelected(option.value||option)\"></span>\r\n          </a>\r\n        </li>\r\n      </template>\r\n      <slot v-else></slot>\r\n      <div v-if=\"showNotify && !closeOnSelect\" class=\"notify\" transition=\"fadein\">{{limitText}}</div>\r\n    </ul>\r\n    <div v-if=\"showNotify && closeOnSelect\" class=\"notify\" transition=\"fadein\"><div>{{limitText}}</div></div>\r\n  </div>\r\n  <slot name=\"after\"></slot>\r\n</div>\r\n</template>\r\n\r\n<script>\r\nimport {callAjax, coerce} from './utils/utils.js'\r\nimport translations from './translations.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\nvar timeout = {}\r\nexport default {\r\n  props: {\r\n    value: {\r\n      twoWay: true\r\n    },\r\n    options: {\r\n      twoWay: true,\r\n      type: Array,\r\n      default () { return [] }\r\n    },\r\n    multiple: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    clearButton: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    closeOnSelect: { // only works when multiple\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    justified: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    lang: {\r\n      type: String,\r\n      default: navigator.language\r\n    },\r\n    limit: {\r\n      type: Number,\r\n      coerce: coerce.number,\r\n      default: 1024\r\n    },\r\n    name: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    parent: {\r\n      default: true\r\n    },\r\n    placeholder: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: null\r\n    },\r\n    required: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: null\r\n    },\r\n    minSearch: {\r\n      type: Number,\r\n      coerce: coerce.number,\r\n      default: 0\r\n    },\r\n    search: { // Allow searching (only works when options are provided)\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    searchText: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    url: {\r\n      type: String,\r\n      default: null\r\n    // },\r\n    // cache: { // save old data -- not working yet (experimental)\r\n    //   type: Array,\r\n    //   default: true\r\n    }\r\n  },\r\n  data () {\r\n    return {\r\n      loading: null,\r\n      searchValue: null,\r\n      show: false,\r\n      showNotify: false\r\n    }\r\n  },\r\n  computed: {\r\n    selectedItems () {\r\n      let foundItems = []\r\n      let value = this.values\r\n      if (value.length) {\r\n        for (var item of value) {\r\n          if (this.options.length === 0) {\r\n            foundItems = value\r\n          } else {\r\n            if (~['number', 'string'].indexOf(typeof item)) {\r\n              let option\r\n              this.options.some(o => {\r\n                if ((o instanceof Object && o.value === item) || o === item ) {\r\n                  option = o\r\n                  return true\r\n                }\r\n              })\r\n              if (option) foundItems.push(option.label || option)\r\n            }\r\n          }\r\n        }\r\n      }\r\n      return foundItems.join(', ')\r\n    },\r\n    canSearch () {\r\n      return this.minSearch ? this.options.length >= this.minSearch : this.search\r\n    },\r\n    limitText () {\r\n      return this.text.limit.replace('{{limit}}', this.limit)\r\n    },\r\n    showPlaceholder () {\r\n      return (this.values.length === 0 || !this.hasParent) ? (this.placeholder || this.text.notSelected) : null\r\n    },\r\n    text () {\r\n      return translations(this.lang)\r\n    },\r\n    hasParent () {\r\n      return this.parent instanceof Array ? this.parent.length : this.parent\r\n    },\r\n    values () {\r\n      return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : []\r\n    }\r\n  },\r\n  watch: {\r\n    options (options) {\r\n      let changed = false\r\n      if (options instanceof Array && options.length) {\r\n        for (let i in options) {\r\n          if (!(options[i] instanceof Object)) {\r\n            options[i] = {label: options[i], value: options[i]}\r\n            changed = true\r\n          }\r\n        }\r\n      }\r\n      if (changed) this.options = options\r\n    },\r\n    value (val) {\r\n      if (this.value instanceof Array && val.length > this.limit) {\r\n        this.showNotify = true\r\n        if (timeout.limit) clearTimeout(timeout.limit)\r\n        timeout.limit = setTimeout(() => {\r\n          timeout.limit = false\r\n          this.showNotify = false\r\n        }, 1500)\r\n      }\r\n      this.checkValue()\r\n    },\r\n    show (val) {\r\n      if (val) {\r\n        this.$els.sel.focus()\r\n        this.$els.search && this.$els.search.focus()\r\n      }\r\n    },\r\n    url () {\r\n      this.update()\r\n    }\r\n  },\r\n  methods: {\r\n    select (v) {\r\n      if (this.value instanceof Array) {\r\n        if (~this.value.indexOf(v)) {\r\n          this.value.$remove(v)\r\n        } else {\r\n          this.value.push(v)\r\n        }\r\n        if (this.closeOnSelect) {\r\n          this.toggle()\r\n        }\r\n      } else {\r\n        this.value = v\r\n        this.toggle()\r\n      }\r\n    },\r\n    clear () {\r\n      if (this.disabled || this.readonly) { return }\r\n      this.value = this.value instanceof Array ? [] : null\r\n      this.toggle()\r\n    },\r\n    clearSearch () {\r\n      this.searchValue = ''\r\n      this.$els.search.focus()\r\n    },\r\n    checkValue () {\r\n      if (this.multiple && !(this.value instanceof Array)) {\r\n        this.value = (this.value === null || this.value === undefined) ? [] : [this.value]\r\n      }\r\n      if (!this.multiple && this.value instanceof Array) {\r\n        this.value = this.value.length ? this.value.pop() : null\r\n      }\r\n      if (this.limit < 1) { this.limit = 1 }\r\n      if (this.values.length > this.limit) {\r\n        this.value = this.value.slice(0, this.limit)\r\n      }\r\n    },\r\n    isSelected (v) {\r\n      return this.values.indexOf(v) > -1\r\n    },\r\n    toggle () {\r\n      this.show = !this.show\r\n    },\r\n    blur () {\r\n      this.show = false\r\n    },\r\n    update () {\r\n      if (!this.url) return\r\n      this.loading = true\r\n      callAjax(this.url, (data) => {\r\n        let options = []\r\n        for (let opc of data) {\r\n          if (opc.value !== undefined && opc.label !== undefined) options.push({value: opc.value, label: opc.label})\r\n        }\r\n        this.options = options\r\n        if (!options.length) { this.value = this.value instanceof Array ? [] : null }\r\n      }).always(() => {\r\n        this.loading = false\r\n        this.checkValue()\r\n      })\r\n    }\r\n  },\r\n  created () {\r\n    if (this.value === undefined || !this.parent) { this.value = null }\r\n    if (!this.multiple && this.value instanceof Array) {\r\n      this.value = this.value.shift()\r\n    }\r\n    this.checkValue()\r\n    if (this.url) this.update()\r\n  },\r\n  ready () {\r\n    $(this.$els.select).onBlur((e) => { this.show = false })\r\n  },\r\n  beforeDestroy () {\r\n    $(this.$els.select).offBlur()\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.btn-select { display: inline-block; }\r\n.btn-select>.btn-group>.dropdown-menu>li { position:relative; }\r\n.btn-select>.btn-group>.dropdown-menu>li>a { cursor:pointer; }\r\n.bs-searchbox {\r\n  position: relative;\r\n  margin: 4px 8px;\r\n}\r\n.bs-searchbox .close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\nbutton>.close { margin-left: 5px;}\r\n.btn-group>.notify { position: relative; }\r\n.btn-group .dropdown-menu .notify,\r\n.btn-group .notify > div {\r\n  position: absolute;\r\n  width: 96%;\r\n  margin: 0 2%;\r\n  min-height: 26px;\r\n  padding: 3px 5px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  pointer-events: none;\r\n}\r\n.btn-group .notify > div {\r\n  top: 5px;\r\n  z-index: 1;\r\n}\r\n.btn-group .dropdown-menu .notify {\r\n  opacity: .9;\r\n  bottom: 5px;\r\n}\r\n.btn-group.btn-group-justified .dropdown-menu { width: 100%; }\r\nspan.caret {\r\n  float: right;\r\n  margin-top: 9px;\r\n  margin-left: 5px;\r\n}\r\n.secret {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\n.bs-searchbox input:focus,\r\n.secret:focus + button {\r\n  outline: 0;\r\n  border-color: #66afe9 !important;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(122);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _getIterator2 = __webpack_require__(62);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _utils = __webpack_require__(75);
	
	var _translations = __webpack_require__(137);
	
	var _translations2 = _interopRequireDefault(_translations);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var timeout = {}; // <template>
	// <div v-el:select :class="{'btn-group btn-group-justified': justified, 'btn-select': !justified}">
	//   <slot name="before"></slot>
	//   <div :class="{open:show,dropdown:!justified}">
	//     <select v-el:sel v-model="value" v-show="show" name="{{name}}" class="secret" :multiple="multiple" :required="required" :readonly="readonly" :disabled="disabled">
	//       <option v-if="required" value=""></option>
	//       <option v-for="option in options" :value="option.value||option">{{ option.label||option }}</option>
	//     </select>
	//     <button type="button" class="form-control dropdown-toggle"
	//       :disabled="disabled || !hasParent"
	//       :readonly="readonly"
	//       @click="toggle()"
	//       @keyup.esc="show = false"
	//     >
	//       <span class="btn-content">{{ loading ? text.loading : showPlaceholder || selectedItems }}</span>
	//       <span class="caret"></span>
	//       <span v-if="clearButton&&values.length" class="close" @click="clear()">&times;</span>
	//     </button>
	//     <ul class="dropdown-menu">
	//       <template v-if="options.length">
	//         <li v-if="canSearch" class="bs-searchbox">
	//           <input type="text" placeholder="{{searchText||text.search}}" class="form-control" autocomplete="off"
	//             v-el:search
	//             v-model="searchValue"
	//             @keyup.esc="show = false"
	//           />
	//           <span v-show="searchValue" class="close" @click="clearSearch">&times;</span>
	//         </li>
	//         <li v-if="required&&!clearButton"><a @mousedown.prevent="clear() && blur()">{{ placeholder || text.notSelected }}</a></li>
	//         <li v-for="option in options | filterBy searchValue" :id="option.value||option">
	//           <a @mousedown.prevent="select(option.value||option)">
	//             {{ option.label||option }}
	//             <span class="glyphicon glyphicon-ok check-mark" v-show="isSelected(option.value||option)"></span>
	//           </a>
	//         </li>
	//       </template>
	//       <slot v-else></slot>
	//       <div v-if="showNotify && !closeOnSelect" class="notify" transition="fadein">{{limitText}}</div>
	//     </ul>
	//     <div v-if="showNotify && closeOnSelect" class="notify" transition="fadein"><div>{{limitText}}</div></div>
	//   </div>
	//   <slot name="after"></slot>
	// </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      twoWay: true
	    },
	    options: {
	      twoWay: true,
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    multiple: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    clearButton: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    closeOnSelect: { // only works when multiple
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    justified: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    },
	    limit: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 1024
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    parent: {
	      default: true
	    },
	    placeholder: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: null
	    },
	    required: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: null
	    },
	    minSearch: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    },
	    search: { // Allow searching (only works when options are provided)
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    searchText: {
	      type: String,
	      default: null
	    },
	    url: {
	      type: String,
	      default: null
	      // },
	      // cache: { // save old data -- not working yet (experimental)
	      //   type: Array,
	      //   default: true
	    }
	  },
	  data: function data() {
	    return {
	      loading: null,
	      searchValue: null,
	      show: false,
	      showNotify: false
	    };
	  },
	
	  computed: {
	    selectedItems: function selectedItems() {
	      var foundItems = [];
	      var value = this.values;
	      if (value.length) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = (0, _getIterator3.default)(value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var item = _step.value;
	
	            if (this.options.length === 0) {
	              foundItems = value;
	            } else {
	              if (~['number', 'string'].indexOf(typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item))) {
	                var option = void 0;
	                this.options.some(function (o) {
	                  if (o instanceof Object && o.value === item || o === item) {
	                    option = o;
	                    return true;
	                  }
	                });
	                if (option) foundItems.push(option.label || option);
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	      return foundItems.join(', ');
	    },
	    canSearch: function canSearch() {
	      return this.minSearch ? this.options.length >= this.minSearch : this.search;
	    },
	    limitText: function limitText() {
	      return this.text.limit.replace('{{limit}}', this.limit);
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.values.length === 0 || !this.hasParent ? this.placeholder || this.text.notSelected : null;
	    },
	    text: function text() {
	      return (0, _translations2.default)(this.lang);
	    },
	    hasParent: function hasParent() {
	      return this.parent instanceof Array ? this.parent.length : this.parent;
	    },
	    values: function values() {
	      return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : [];
	    }
	  },
	  watch: {
	    options: function options(_options) {
	      var changed = false;
	      if (_options instanceof Array && _options.length) {
	        for (var i in _options) {
	          if (!(_options[i] instanceof Object)) {
	            _options[i] = { label: _options[i], value: _options[i] };
	            changed = true;
	          }
	        }
	      }
	      if (changed) this.options = _options;
	    },
	    value: function value(val) {
	      var _this = this;
	
	      if (this.value instanceof Array && val.length > this.limit) {
	        this.showNotify = true;
	        if (timeout.limit) clearTimeout(timeout.limit);
	        timeout.limit = setTimeout(function () {
	          timeout.limit = false;
	          _this.showNotify = false;
	        }, 1500);
	      }
	      this.checkValue();
	    },
	    show: function show(val) {
	      if (val) {
	        this.$els.sel.focus();
	        this.$els.search && this.$els.search.focus();
	      }
	    },
	    url: function url() {
	      this.update();
	    }
	  },
	  methods: {
	    select: function select(v) {
	      if (this.value instanceof Array) {
	        if (~this.value.indexOf(v)) {
	          this.value.$remove(v);
	        } else {
	          this.value.push(v);
	        }
	        if (this.closeOnSelect) {
	          this.toggle();
	        }
	      } else {
	        this.value = v;
	        this.toggle();
	      }
	    },
	    clear: function clear() {
	      if (this.disabled || this.readonly) {
	        return;
	      }
	      this.value = this.value instanceof Array ? [] : null;
	      this.toggle();
	    },
	    clearSearch: function clearSearch() {
	      this.searchValue = '';
	      this.$els.search.focus();
	    },
	    checkValue: function checkValue() {
	      if (this.multiple && !(this.value instanceof Array)) {
	        this.value = this.value === null || this.value === undefined ? [] : [this.value];
	      }
	      if (!this.multiple && this.value instanceof Array) {
	        this.value = this.value.length ? this.value.pop() : null;
	      }
	      if (this.limit < 1) {
	        this.limit = 1;
	      }
	      if (this.values.length > this.limit) {
	        this.value = this.value.slice(0, this.limit);
	      }
	    },
	    isSelected: function isSelected(v) {
	      return this.values.indexOf(v) > -1;
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    },
	    blur: function blur() {
	      this.show = false;
	    },
	    update: function update() {
	      var _this2 = this;
	
	      if (!this.url) return;
	      this.loading = true;
	      (0, _utils.callAjax)(this.url, function (data) {
	        var options = [];
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	          for (var _iterator2 = (0, _getIterator3.default)(data), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var opc = _step2.value;
	
	            if (opc.value !== undefined && opc.label !== undefined) options.push({ value: opc.value, label: opc.label });
	          }
	        } catch (err) {
	          _didIteratorError2 = true;
	          _iteratorError2 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	              _iterator2.return();
	            }
	          } finally {
	            if (_didIteratorError2) {
	              throw _iteratorError2;
	            }
	          }
	        }
	
	        _this2.options = options;
	        if (!options.length) {
	          _this2.value = _this2.value instanceof Array ? [] : null;
	        }
	      }).always(function () {
	        _this2.loading = false;
	        _this2.checkValue();
	      });
	    }
	  },
	  created: function created() {
	    if (this.value === undefined || !this.parent) {
	      this.value = null;
	    }
	    if (!this.multiple && this.value instanceof Array) {
	      this.value = this.value.shift();
	    }
	    this.checkValue();
	    if (this.url) this.update();
	  },
	  ready: function ready() {
	    var _this3 = this;
	
	    (0, _NodeList2.default)(this.$els.select).onBlur(function (e) {
	      _this3.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)(this.$els.select).offBlur();
	  }
	};
	// </script>
	//
	// <style scoped>
	// .btn-select { display: inline-block; }
	// .btn-select>.btn-group>.dropdown-menu>li { position:relative; }
	// .btn-select>.btn-group>.dropdown-menu>li>a { cursor:pointer; }
	// .bs-searchbox {
	//   position: relative;
	//   margin: 4px 8px;
	// }
	// .bs-searchbox .close {
	//   position: absolute;
	//   top: 0;
	//   right: 0;
	//   z-index: 2;
	//   display: block;
	//   width: 34px;
	//   height: 34px;
	//   line-height: 34px;
	//   text-align: center;
	// }
	// button>.close { margin-left: 5px;}
	// .btn-group>.notify { position: relative; }
	// .btn-group .dropdown-menu .notify,
	// .btn-group .notify > div {
	//   position: absolute;
	//   width: 96%;
	//   margin: 0 2%;
	//   min-height: 26px;
	//   padding: 3px 5px;
	//   background: #f5f5f5;
	//   border: 1px solid #e3e3e3;
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
	//   pointer-events: none;
	// }
	// .btn-group .notify > div {
	//   top: 5px;
	//   z-index: 1;
	// }
	// .btn-group .dropdown-menu .notify {
	//   opacity: .9;
	//   bottom: 5px;
	// }
	// .btn-group.btn-group-justified .dropdown-menu { width: 100%; }
	// span.caret {
	//   float: right;
	//   margin-top: 9px;
	//   margin-left: 5px;
	// }
	// .secret {
	//   border: 0;
	//   clip: rect(0 0 0 0);
	//   height: 1px;
	//   margin: -1px;
	//   overflow: hidden;
	//   padding: 0;
	//   position: absolute;
	//   width: 1px;
	// }
	// .bs-searchbox input:focus,
	// .secret:focus + button {
	//   outline: 0;
	//   border-color: #66afe9 !important;
	//   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(20);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(123);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(125);
	__webpack_require__(134);
	__webpack_require__(135);
	__webpack_require__(136);
	module.exports = __webpack_require__(7).Symbol;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(6)
	  , has            = __webpack_require__(29)
	  , DESCRIPTORS    = __webpack_require__(15)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(28)
	  , META           = __webpack_require__(126).KEY
	  , $fails         = __webpack_require__(16)
	  , shared         = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(47)
	  , uid            = __webpack_require__(44)
	  , wks            = __webpack_require__(48)
	  , wksExt         = __webpack_require__(55)
	  , wksDefine      = __webpack_require__(127)
	  , keyOf          = __webpack_require__(128)
	  , enumKeys       = __webpack_require__(129)
	  , isArray        = __webpack_require__(132)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(18)
	  , createDesc     = __webpack_require__(19)
	  , _create        = __webpack_require__(32)
	  , gOPNExt        = __webpack_require__(60)
	  , $GOPD          = __webpack_require__(133)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(34)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(131).f  = $propertyIsEnumerable;
	  __webpack_require__(130).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(27)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(44)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(29)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(16)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(6)
	  , core           = __webpack_require__(7)
	  , LIBRARY        = __webpack_require__(27)
	  , wksExt         = __webpack_require__(55)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(34)
	  , toIObject = __webpack_require__(36);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(34)
	  , gOPS    = __webpack_require__(130)
	  , pIE     = __webpack_require__(131);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 131 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(131)
	  , createDesc     = __webpack_require__(19)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(18)
	  , has            = __webpack_require__(29)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 134 */
/***/ function(module, exports) {



/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(127)('asyncIterator');

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(127)('observable');

/***/ },
/* 137 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// return all the translations
	var text = {
	  daysOfWeek: {
	    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
	    'pt-BR': ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa'],
	    fr: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa']
	  },
	  limit: {
	    en: 'Limit reached ({{limit}} items max).',
	    es: 'Limite alcanzado (máximo {{limit}} items).',
	    'pt-BR': 'Limite atingido (máximo {{limit}} items).',
	    fr: 'Limite atteinte ({{limit}} éléments max).'
	  },
	  loading: {
	    en: 'Loading...',
	    es: 'Cargando...',
	    'pt-BR': 'Cargando...',
	    fr: 'Chargement en cours...'
	  },
	  minLength: {
	    en: 'Min. Length',
	    es: 'Tamaño Mínimo',
	    'pt-BR': 'Tamanho Mínimo',
	    fr: 'Longueur Minimum'
	  },
	  months: {
	    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	    'pt-BR': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
	    fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
	  },
	  notSelected: {
	    en: 'Nothing Selected',
	    es: 'Nada seleccionado',
	    'pt-BR': 'Nada selecionado',
	    fr: 'Aucune sélection'
	  },
	  required: {
	    en: 'Required',
	    es: 'Requerido',
	    'pt-BR': 'Requerido',
	    fr: 'Requis'
	  },
	  search: {
	    en: 'Search',
	    es: 'Buscar',
	    'pt-BR': 'Buscar',
	    fr: 'Recherche'
	  }
	};
	
	exports.default = function () {
	  var lang = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];
	
	  var tr = {};
	  for (var i in text) {
	    tr[i] = text[i][lang] || text[i]['en'];
	  }
	  return tr;
	};

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:select=\"\" :class=\"{'btn-group btn-group-justified': justified, 'btn-select': !justified}\" _v-e514dbc6=\"\">\n  <slot name=\"before\" _v-e514dbc6=\"\"></slot>\n  <div :class=\"{open:show,dropdown:!justified}\" _v-e514dbc6=\"\">\n    <select v-el:sel=\"\" v-model=\"value\" v-show=\"show\" name=\"{{name}}\" class=\"secret\" :multiple=\"multiple\" :required=\"required\" :readonly=\"readonly\" :disabled=\"disabled\" _v-e514dbc6=\"\">\n      <option v-if=\"required\" value=\"\" _v-e514dbc6=\"\"></option>\n      <option v-for=\"option in options\" :value=\"option.value||option\" _v-e514dbc6=\"\">{{ option.label||option }}</option>\n    </select>\n    <button type=\"button\" class=\"form-control dropdown-toggle\" :disabled=\"disabled || !hasParent\" :readonly=\"readonly\" @click=\"toggle()\" @keyup.esc=\"show = false\" _v-e514dbc6=\"\">\n      <span class=\"btn-content\" _v-e514dbc6=\"\">{{ loading ? text.loading : showPlaceholder || selectedItems }}</span>\n      <span class=\"caret\" _v-e514dbc6=\"\"></span>\n      <span v-if=\"clearButton&amp;&amp;values.length\" class=\"close\" @click=\"clear()\" _v-e514dbc6=\"\">×</span>\n    </button>\n    <ul class=\"dropdown-menu\" _v-e514dbc6=\"\">\n      <template v-if=\"options.length\">\n        <li v-if=\"canSearch\" class=\"bs-searchbox\" _v-e514dbc6=\"\">\n          <input type=\"text\" placeholder=\"{{searchText||text.search}}\" class=\"form-control\" autocomplete=\"off\" v-el:search=\"\" v-model=\"searchValue\" @keyup.esc=\"show = false\" _v-e514dbc6=\"\">\n          <span v-show=\"searchValue\" class=\"close\" @click=\"clearSearch\" _v-e514dbc6=\"\">×</span>\n        </li>\n        <li v-if=\"required&amp;&amp;!clearButton\" _v-e514dbc6=\"\"><a @mousedown.prevent=\"clear() &amp;&amp; blur()\" _v-e514dbc6=\"\">{{ placeholder || text.notSelected }}</a></li>\n        <li v-for=\"option in options | filterBy searchValue\" :id=\"option.value||option\" _v-e514dbc6=\"\">\n          <a @mousedown.prevent=\"select(option.value||option)\" _v-e514dbc6=\"\">\n            {{ option.label||option }}\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"isSelected(option.value||option)\" _v-e514dbc6=\"\"></span>\n          </a>\n        </li>\n      </template>\n      <slot v-else=\"\" _v-e514dbc6=\"\"></slot>\n      <div v-if=\"showNotify &amp;&amp; !closeOnSelect\" class=\"notify\" transition=\"fadein\" _v-e514dbc6=\"\">{{limitText}}</div>\n    </ul>\n    <div v-if=\"showNotify &amp;&amp; closeOnSelect\" class=\"notify\" transition=\"fadein\" _v-e514dbc6=\"\"><div _v-e514dbc6=\"\">{{limitText}}</div></div>\n  </div>\n  <slot name=\"after\" _v-e514dbc6=\"\"></slot>\n</div>\n";

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"accordion\" name=\"Accordion\">\n  <div class=\"bs-example\">\n    <checkbox :checked.sync=\"checked\" type=\"primary\">Open only one at a time.</checkbox>\n    <p><v-select :options=\"types\" clear-button :value.sync=\"selected\" placeholder=\"Global type\"></v-select></p>\n    <p><v-select :options=\"types\" clear-button :value.sync=\"first\" placeholder=\"First element type\"></v-select></p>\n    <accordion :one-at-atime=\"checked\" :type=\"selected\">\n      <panel is-open :type=\"first=='panel'?null:first\">\n        <strong slot=\"header\"><u>Panel #1</u></strong>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </panel>\n      <panel header=\"Panel #2\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </panel>\n      <panel header=\"Panel #3\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </panel>\n      <panel header=\"Panel #4\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </panel>\n    </accordion>\n  </div>\n  <doc-code language=\"markup\">\n    <accordion :one-at-atime=\"checked\" type=\"info\">\n      <panel is-open type=\"primary\">\n        <strong slot=\"header\"><u>Panel #1</u></strong>\n        ...\n      </panel>\n      <panel header=\"Panel #2\">\n        ...\n      </panel>\n      <panel header=\"Panel #3\">\n        ...\n      </panel>\n      <panel header=\"Panel #4\">\n        ...\n      </panel>\n    </accordion>\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>type</p>\n      <p><code>String</code></p>\n      <p><code>null</code></p>\n      <p>Define the type of color for the tabs (global).</p>\n    </div>\n    <div>\n      <p>one-at-time</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p>Control whether expanding an item will cause the other items to close.</p>\n    </div>\n  </doc-options>\n  <doc-options name=\"Panel\">\n    <div>\n      <p>header</p>\n      <p><code>String</code></p>\n      <p></p>\n      <p>The clickable text on the group's header. You need one to be able to click on the header for toggling.</p>\n    </div>\n    <div>\n      <p>is-open</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p>Whether accordion group is open or closed.</p>\n    </div>\n    <div>\n      <p>type</p>\n      <p><code>String</code></p>\n      <p><code>null</code></p>\n      <p>Define the type of color for the tab (single).</p>\n    </div>\n  </doc-options>\n  <p>If you want to personalice your header with some html you can use the slot instead of header attribute (panel&nbsp;#1 in the example).</p>\n</doc-section>\n";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(141)
	__vue_script__ = __webpack_require__(143)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\affixDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(150)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-81085d3e/affixDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(142);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.animated {\r\n    -webkit-animation-duration: 3s;\r\n    animation-duration: 3s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite\r\n}\r\n@-webkit-keyframes shake {\r\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\r\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\r\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\r\n}\r\n@keyframes shake {\r\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\r\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\r\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\r\n}\r\n.shake {\r\n    -webkit-animation-name: shake;\r\n    animation-name: shake;\r\n}\r\n", "", {"version":3,"sources":["/./docs/example/affixDocs.vue?5da226ea"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiDA;IACA,+BAAA;IACA,uBAAA;IACA,kCAAA;IACA,0BAAA;IACA,4CAAA;YAAA,mCAAA;CACA;AACA;IACA,UAAA,iCAAA,yBAAA,CAAA;IACA,yBAAA,oCAAA,4BAAA,CAAA;IACA,oBAAA,mCAAA,2BAAA,CAAA;CACA;AAJA;IACA,UAAA,iCAAA,yBAAA,CAAA;IACA,yBAAA,oCAAA,4BAAA,CAAA;IACA,oBAAA,mCAAA,2BAAA,CAAA;CACA;AACA;IACA,8BAAA;IACA,sBAAA;CACA","file":"affixDocs.vue","sourcesContent":["<template>\r\n  <doc-section id=\"affix\" name=\"Affix\">\r\n    <div class=\"bs-example\">\r\n      <h3>\r\n        The sub-navigation on the RIGHT is a live demo of the affix.\r\n        <spam class=\"visible-xs-block visible-sm-block\">(Is hidden in small screens)</spam>\r\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\r\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake hidden-xs hidden-sm\"></span>\r\n        </tooltip>\r\n      </h3>\r\n    </div>\r\n    <doc-code language=\"markup\">\r\n      <affix offset=\"0\">\r\n        <ul>\r\n          <li>...</li>\r\n          <li>...</li>\r\n          <li>...</li>\r\n        </ul>\r\n        <a href=\"#\">...</a>\r\n      </affix>\r\n    </doc-code>\r\n    <doc-options>\r\n      <div>\r\n        <p>offset</p>\r\n        <p><code>Number</code></p>\r\n        <p><code>0</code></p>\r\n        <p>Pixels to offset from top of screen when calculating position of scroll.</p>\r\n      </div>\r\n    </doc-options>\r\n  </doc-section>\r\n</template>\r\n\r\n<script>\r\nimport docSection from './docSection.vue'\r\nimport docOptions from './docOptions.vue'\r\nimport docCode from './docCode.vue'\r\nimport tooltip from 'src/Tooltip.vue'\r\n\r\nexport default {\r\n  components: {\r\n    docSection,\r\n    docOptions,\r\n    docCode,\r\n    tooltip\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.animated {\r\n    -webkit-animation-duration: 3s;\r\n    animation-duration: 3s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    animation-iteration-count: infinite\r\n}\r\n@keyframes shake {\r\n    0%, 100% {transform: translateX(0);}\r\n    10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}\r\n    20%, 40%, 60%, 80% {transform: translateX(5px);}\r\n}\r\n.shake {\r\n    -webkit-animation-name: shake;\r\n    animation-name: shake;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Tooltip = __webpack_require__(144);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="affix" name="Affix">
	//     <div class="bs-example">
	//       <h3>
	//         The sub-navigation on the RIGHT is a live demo of the affix.
	//         <spam class="visible-xs-block visible-sm-block">(Is hidden in small screens)</spam>
	//         <tooltip trigger="hover" effect="fadein" content="I'm a direction, not jerking off!" placement="left">
	//           <span class="glyphicon glyphicon-hand-right pull-right animated shake hidden-xs hidden-sm"></span>
	//         </tooltip>
	//       </h3>
	//     </div>
	//     <doc-code language="markup">
	//       <affix offset="0">
	//         <ul>
	//           <li>...</li>
	//           <li>...</li>
	//           <li>...</li>
	//         </ul>
	//         <a href="#">...</a>
	//       </affix>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>offset</p>
	//         <p><code>Number</code></p>
	//         <p><code>0</code></p>
	//         <p>Pixels to offset from top of screen when calculating position of scroll.</p>
	//       </div>
	//     </doc-options>
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    tooltip: _Tooltip2.default
	  }
	};
	// </script>
	//
	// <style>
	// .animated {
	//     -webkit-animation-duration: 3s;
	//     animation-duration: 3s;
	//     -webkit-animation-fill-mode: both;
	//     animation-fill-mode: both;
	//     animation-iteration-count: infinite
	// }
	// @keyframes shake {
	//     0%, 100% {transform: translateX(0);}
	//     10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}
	//     20%, 40%, 60%, 80% {transform: translateX(5px);}
	// }
	// .shake {
	//     -webkit-animation-name: shake;
	//     animation-name: shake;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(145)
	__vue_script__ = __webpack_require__(147)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(149)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-48fb51b2/Tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.tooltip {\r\n  opacity: .9\r\n}\r\n.fadein-enter {\r\n  -webkit-animation:fadein-in 0.3s ease-in;\r\n          animation:fadein-in 0.3s ease-in;\r\n}\r\n.fadein-leave {\r\n  -webkit-animation:fadein-out 0.3s ease-out;\r\n          animation:fadein-out 0.3s ease-out;\r\n}\r\n@-webkit-keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@-webkit-keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n", "", {"version":3,"sources":["/./src/Tooltip.vue?e2212476"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkCA;EACA,WAAA;CACA;AACA;EACA,yCAAA;UAAA,iCAAA;CACA;AACA;EACA,2CAAA;UAAA,mCAAA;CACA;AACA;EACA;IACA,WAAA;GACA;EACA;IACA,YAAA;GACA;CACA;AAPA;EACA;IACA,WAAA;GACA;EACA;IACA,YAAA;GACA;CACA;AACA;EACA;IACA,YAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AAPA;EACA;IACA,YAAA;GACA;EACA;IACA,WAAA;GACA;CACA","file":"Tooltip.vue","sourcesContent":["<template>\r\n  <span v-el:trigger>\r\n    <slot></slot>\r\n  </span>\r\n  <div v-el:popover v-show=\"show\" role=\"tooltip\"\r\n    :class=\"['tooltip',placement]\"\r\n    :transition=\"effect\"\r\n  >\r\n    <div class=\"tooltip-arrow\"></div>\r\n    <div class=\"tooltip-inner\">\r\n      <slot name=\"content\">{{{content}}}</slot>\r\n   </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport PopoverMixin from './popoverMixins.js'\r\n\r\nexport default {\r\n  mixins: [PopoverMixin],\r\n  props: {\r\n    trigger: {\r\n      type: String,\r\n      default: 'hover'\r\n    },\r\n    effect: {\r\n      type: String,\r\n      default: 'scale'\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.tooltip {\r\n  opacity: .9\r\n}\r\n.fadein-enter {\r\n  animation:fadein-in 0.3s ease-in;\r\n}\r\n.fadein-leave {\r\n  animation:fadein-out 0.3s ease-out;\r\n}\r\n@keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(148);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    effect: {
	      type: String,
	      default: 'scale'
	    }
	  }
	};
	// </script>
	//
	// <style>
	// .tooltip {
	//   opacity: .9
	// }
	// .fadein-enter {
	//   animation:fadein-in 0.3s ease-in;
	// }
	// .fadein-leave {
	//   animation:fadein-out 0.3s ease-out;
	// }
	// @keyframes fadein-in {
	//   0% {
	//     opacity: 0;
	//   }
	//   100% {
	//     opacity: .9;
	//   }
	// }
	// @keyframes fadein-out {
	//   0% {
	//     opacity: .9;
	//   }
	//   100% {
	//     opacity: 0;
	//   }
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <span v-el:trigger>
	//     <slot></slot>
	//   </span>
	//   <div v-el:popover v-show="show" role="tooltip"
	//     :class="['tooltip',placement]"
	//     :transition="effect"
	//   >
	//     <div class="tooltip-arrow"></div>
	//     <div class="tooltip-inner">
	//       <slot name="content">{{{content}}}</slot>
	//    </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    trigger: {
	      type: String
	    },
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
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
	    toggle: function toggle(e) {
	      this.show = !this.show;
	      if (e && this.trigger === 'contextmenu') e.preventDefault();
	    }
	  },
	  ready: function ready() {
	    var popover = this.$els.popover;
	    if (!popover) return console.error('Could not find popover v-el in your component that uses popoverMixin.');
	    var trigger = this.$els.trigger.children[0];
	    switch (this.placement) {
	      case 'top':
	        this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	        this.position.top = trigger.offsetTop - popover.offsetHeight;
	        break;
	      case 'left':
	        this.position.left = trigger.offsetLeft - popover.offsetWidth;
	        this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	        break;
	      case 'right':
	        this.position.left = trigger.offsetLeft + trigger.offsetWidth;
	        this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	        break;
	      case 'bottom':
	        this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	        this.position.top = trigger.offsetTop + trigger.offsetHeight;
	        break;
	      default:
	        console.warn('Wrong placement prop');
	    }
	    popover.style.top = this.position.top + 'px';
	    popover.style.left = this.position.left + 'px';
	    popover.style.display = 'none';
	    this.show = !this.show;
	
	    var events = this.trigger === 'contextmenu' ? 'contextmenu' : this.trigger === 'hover' ? 'mouseleave mouseenter' : this.trigger === 'focus' ? 'blur focus' : 'click';
	    (0, _NodeList2.default)(trigger).on(events, this.toggle);
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)(this.$els.trigger.children[0]).off();
	  }
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot></slot>\n</span>\n<div v-el:popover v-show=\"show\" role=\"tooltip\"\n  :class=\"['tooltip',placement]\"\n  :transition=\"effect\"\n>\n  <div class=\"tooltip-arrow\"></div>\n  <div class=\"tooltip-inner\">\n    <slot name=\"content\">{{{content}}}</slot>\n </div>\n</div>\n";

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"affix\" name=\"Affix\">\n  <div class=\"bs-example\">\n    <h3>\n      The sub-navigation on the RIGHT is a live demo of the affix.\n      <spam class=\"visible-xs-block visible-sm-block\">(Is hidden in small screens)</spam>\n      <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n        <span class=\"glyphicon glyphicon-hand-right pull-right animated shake hidden-xs hidden-sm\"></span>\n      </tooltip>\n    </h3>\n  </div>\n  <doc-code language=\"markup\">\n    <affix offset=\"0\">\n      <ul>\n        <li>...</li>\n        <li>...</li>\n        <li>...</li>\n      </ul>\n      <a href=\"#\">...</a>\n    </affix>\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>offset</p>\n      <p><code>Number</code></p>\n      <p><code>0</code></p>\n      <p>Pixels to offset from top of screen when calculating position of scroll.</p>\n    </div>\n  </doc-options>\n</doc-section>\n";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(152)
	__vue_script__ = __webpack_require__(154)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\alertDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(160)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c3778626/alertDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.alert-icon-float-left {\r\n  font-size:32px;\r\n  float:left;\r\n  margin-right:5px;\r\n}\r\n", "", {"version":3,"sources":["/./docs/example/alertDocs.vue?53212756"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6HA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;CACA","file":"alertDocs.vue","sourcesContent":["<template>\r\n  <doc-section id=\"alert\" name=\"Alert\">\r\n    <div class=\"bs-example\" >\r\n      <button class=\"btn btn-danger btn-lg\"\r\n        @click=\"showTop = !showTop\">\r\n        Click to toggle alert on top\r\n      </button>\r\n      <button class=\"btn btn-success btn-lg\"\r\n        @click=\"showRight = !showRight\">\r\n        Click to toggle alert on right\r\n      </button>\r\n      <hr>\r\n      <alert type=\"success\">\r\n        <strong>Well Done!</strong>\r\n        You successfully read this important alert message.\r\n      </alert>\r\n      <alert type=\"info\">\r\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n      </alert>\r\n      <alert type=\"danger\" dismissable>\r\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n      </alert>\r\n      <alert type=\"warning\" dismissable>\r\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n      </alert>\r\n      <alert :show.sync=\"showRight\" placement=\"top-right\" duration=\"3000\"\r\n        type=\"success\" width=\"400px\" dismissable\r\n      >\r\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\r\n        <strong>Well Done!</strong>\r\n        <p>You successfully read this important alert message.</p>\r\n      </alert>\r\n      <alert :show.sync=\"showTop\" placement=\"top\" duration=\"3000\"\r\n        type=\"danger\" width=\"400px\" dismissable\r\n      >\r\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\r\n        <strong>Heads up!</strong>\r\n        <p>This alert needs your attention.</p>\r\n      </alert>\r\n    </div>\r\n\r\n    <doc-code language=\"markup\">\r\n      <alert type=\"success/info/danger/warning\">\r\n        ...\r\n      </alert>\r\n\r\n      <alert :show.sync=\"showRight\" placement=\"top-right\" duration=\"3000\" type=\"success\" width=\"400px\" dismissable>\r\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\r\n        <strong>Well Done!</strong>\r\n        <p>You successfully read this important alert message.</p>\r\n      </alert>\r\n\r\n      <alert :show.sync=\"showTop\" placement=\"top\" duration=\"3000\" type=\"danger\" width=\"400px\" dismissable>\r\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\r\n        <strong>Heads up!</strong>\r\n        <p>This alert needs your attention.</p>\r\n      </alert>\r\n    </doc-code>\r\n    <doc-options>\r\n      <div>\r\n        <p>show</p>\r\n        <p><code>Boolean</code></p>\r\n        <p><code>true</code></p>\r\n        <p>Whether show the component</p>\r\n      </div>\r\n      <div>\r\n        <p>dismissable</p>\r\n        <p><code>Boolean</code></p>\r\n        <p><code>false</code></p>\r\n        <p>Whether show close button</p>\r\n      </div>\r\n      <div>\r\n        <p>type</p>\r\n        <p><code>String</code>, one of\r\n        <code>success</code>\r\n        <code>info</code>\r\n        <code>warning</code>\r\n        <code>danger</code></p>\r\n        <p><code>success</code></p>\r\n        <p>Components styles</p>\r\n      </div>\r\n      <div>\r\n        <p>duration</p>\r\n        <p><code>Number</code></p>\r\n        <p><code>0</code></p>\r\n        <p>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</p>\r\n      </div>\r\n      <div>\r\n        <p>width</p>\r\n        <p><code>String</code></p>\r\n        <p></p>\r\n      </div>\r\n      <div>\r\n        <p>placement</p>\r\n        <p><code>String</code>. one of <code>top</code>, <code>top-right</code></p>\r\n        <p></p>\r\n        <p>how to position the component.</p>\r\n      </div>\r\n    </doc-options>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport docSection from './docSection.vue'\r\nimport docOptions from './docOptions.vue'\r\nimport docCode from './docCode.vue'\r\nimport alert from 'src/Alert.vue'\r\n\r\nexport default {\r\n  components: {\r\n    docSection,\r\n    docOptions,\r\n    docCode,\r\n    alert\r\n  },\r\n  data () {\r\n    return {\r\n      showRight: false,\r\n      showTop: false\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.alert-icon-float-left {\r\n  font-size:32px;\r\n  float:left;\r\n  margin-right:5px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Alert = __webpack_require__(155);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="alert" name="Alert">
	//     <div class="bs-example" >
	//       <button class="btn btn-danger btn-lg"
	//         @click="showTop = !showTop">
	//         Click to toggle alert on top
	//       </button>
	//       <button class="btn btn-success btn-lg"
	//         @click="showRight = !showRight">
	//         Click to toggle alert on right
	//       </button>
	//       <hr>
	//       <alert type="success">
	//         <strong>Well Done!</strong>
	//         You successfully read this important alert message.
	//       </alert>
	//       <alert type="info">
	//         <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
	//       </alert>
	//       <alert type="danger" dismissable>
	//         <strong>Oh snap!</strong> Change a few things up and try submitting again.
	//       </alert>
	//       <alert type="warning" dismissable>
	//         <strong>Warning!</strong> Better check yourself, you're not looking too good.
	//       </alert>
	//       <alert :show.sync="showRight" placement="top-right" duration="3000"
	//         type="success" width="400px" dismissable
	//       >
	//         <span class="icon-ok-circled alert-icon-float-left"></span>
	//         <strong>Well Done!</strong>
	//         <p>You successfully read this important alert message.</p>
	//       </alert>
	//       <alert :show.sync="showTop" placement="top" duration="3000"
	//         type="danger" width="400px" dismissable
	//       >
	//         <span class="icon-info-circled alert-icon-float-left"></span>
	//         <strong>Heads up!</strong>
	//         <p>This alert needs your attention.</p>
	//       </alert>
	//     </div>
	//
	//     <doc-code language="markup">
	//       <alert type="success/info/danger/warning">
	//         ...
	//       </alert>
	//
	//       <alert :show.sync="showRight" placement="top-right" duration="3000" type="success" width="400px" dismissable>
	//         <span class="icon-ok-circled alert-icon-float-left"></span>
	//         <strong>Well Done!</strong>
	//         <p>You successfully read this important alert message.</p>
	//       </alert>
	//
	//       <alert :show.sync="showTop" placement="top" duration="3000" type="danger" width="400px" dismissable>
	//         <span class="icon-info-circled alert-icon-float-left"></span>
	//         <strong>Heads up!</strong>
	//         <p>This alert needs your attention.</p>
	//       </alert>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>show</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>Whether show the component</p>
	//       </div>
	//       <div>
	//         <p>dismissable</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Whether show close button</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of
	//         <code>success</code>
	//         <code>info</code>
	//         <code>warning</code>
	//         <code>danger</code></p>
	//         <p><code>success</code></p>
	//         <p>Components styles</p>
	//       </div>
	//       <div>
	//         <p>duration</p>
	//         <p><code>Number</code></p>
	//         <p><code>0</code></p>
	//         <p>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</p>
	//       </div>
	//       <div>
	//         <p>width</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>placement</p>
	//         <p><code>String</code>. one of <code>top</code>, <code>top-right</code></p>
	//         <p></p>
	//         <p>how to position the component.</p>
	//       </div>
	//     </doc-options>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    alert: _Alert2.default
	  },
	  data: function data() {
	    return {
	      showRight: false,
	      showTop: false
	    };
	  }
	};
	// </script>
	//
	// <style>
	// .alert-icon-float-left {
	//   font-size:32px;
	//   float:left;
	//   margin-right:5px;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(156)
	__vue_script__ = __webpack_require__(158)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Alert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(159)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-af7c1f6a/Alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(157);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.fade-transition {\r\n  -webkit-transition: opacity .3s ease;\r\n  transition: opacity .3s ease;\r\n}\r\n.fade-enter,\r\n.fade-leave {\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\r\n}\r\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\r\n}\r\n", "", {"version":3,"sources":["/./src/Alert.vue?5f1d1c49"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkEA;EACA,qCAAA;EAAA,6BAAA;CACA;AACA;;EAEA,UAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,cAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,cAAA;CACA","file":"Alert.vue","sourcesContent":["<template>\r\n  <div\r\n    v-show=\"show\"\r\n    v-bind:class=\"{\r\n      'alert':\t\ttrue,\r\n      'alert-success':(type == 'success'),\r\n      'alert-warning':(type == 'warning'),\r\n      'alert-info':\t(type == 'info'),\r\n      'alert-danger':\t(type == 'danger'),\r\n      'top': \t\t\t(placement === 'top'),\r\n      'top-right': \t(placement === 'top-right')\r\n    }\"\r\n    transition=\"fade\"\r\n    v-bind:style=\"{width:width}\"\r\n    role=\"alert\">\r\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\r\n      @click=\"show = false\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\n\r\nexport default {\r\n  props: {\r\n    type: {\r\n      type: String\r\n    },\r\n    dismissable: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    show: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: true,\r\n      twoWay: true\r\n    },\r\n    duration: {\r\n      type: Number,\r\n      coerce: coerce.number,\r\n      default: 0\r\n    },\r\n    width: {\r\n      type: String\r\n    },\r\n    placement: {\r\n      type: String\r\n    }\r\n  },\r\n  watch: {\r\n    show (val) {\r\n      if (this._timeout) clearTimeout(this._timeout)\r\n      if (val && Boolean(this.duration)) {\r\n        this._timeout = setTimeout(() => { this.show = false }, this.duration)\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.fade-transition {\r\n  transition: opacity .3s ease;\r\n}\r\n.fade-enter,\r\n.fade-leave {\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\r\n}\r\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    dismissable: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true,
	      twoWay: true
	    },
	    duration: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
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
	      if (val && Boolean(this.duration)) {
	        this._timeout = setTimeout(function () {
	          _this.show = false;
	        }, this.duration);
	      }
	    }
	  }
	};
	// </script>
	//
	// <style>
	// .fade-transition {
	//   transition: opacity .3s ease;
	// }
	// .fade-enter,
	// .fade-leave {
	//   height: 0;
	//   opacity: 0;
	// }
	// .alert.top {
	//   position: fixed;
	//   top: 30px;
	//   margin: 0 auto;
	//   left: 0;
	//   right: 0;
	//   z-index: 1050;
	// }
	// .alert.top-right {
	//   position: fixed;
	//   top: 30px;
	//   right: 50px;
	//   z-index: 1050;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div
	//     v-show="show"
	//     v-bind:class="{
	//       'alert':		true,
	//       'alert-success':(type == 'success'),
	//       'alert-warning':(type == 'warning'),
	//       'alert-info':	(type == 'info'),
	//       'alert-danger':	(type == 'danger'),
	//       'top': 			(placement === 'top'),
	//       'top-right': 	(placement === 'top-right')
	//     }"
	//     transition="fade"
	//     v-bind:style="{width:width}"
	//     role="alert">
	//     <button v-show="dismissable" type="button" class="close"
	//       @click="show = false">
	//       <span>&times;</span>
	//     </button>
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "\n<div\n  v-show=\"show\"\n  v-bind:class=\"{\n    'alert':\t\ttrue,\n    'alert-success':(type == 'success'),\n    'alert-warning':(type == 'warning'),\n    'alert-info':\t(type == 'info'),\n    'alert-danger':\t(type == 'danger'),\n    'top': \t\t\t(placement === 'top'),\n    'top-right': \t(placement === 'top-right')\n  }\"\n  transition=\"fade\"\n  v-bind:style=\"{width:width}\"\n  role=\"alert\">\n  <button v-show=\"dismissable\" type=\"button\" class=\"close\"\n    @click=\"show = false\">\n    <span>&times;</span>\n  </button>\n  <slot></slot>\n</div>\n";

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "\n  <doc-section id=\"alert\" name=\"Alert\">\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-danger btn-lg\"\n        @click=\"showTop = !showTop\">\n        Click to toggle alert on top\n      </button>\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showRight = !showRight\">\n        Click to toggle alert on right\n      </button>\n      <hr>\n      <alert type=\"success\">\n        <strong>Well Done!</strong>\n        You successfully read this important alert message.\n      </alert>\n      <alert type=\"info\">\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n      </alert>\n      <alert type=\"danger\" dismissable>\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n      </alert>\n      <alert type=\"warning\" dismissable>\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\n      </alert>\n      <alert :show.sync=\"showRight\" placement=\"top-right\" duration=\"3000\"\n        type=\"success\" width=\"400px\" dismissable\n      >\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <strong>Well Done!</strong>\n        <p>You successfully read this important alert message.</p>\n      </alert>\n      <alert :show.sync=\"showTop\" placement=\"top\" duration=\"3000\"\n        type=\"danger\" width=\"400px\" dismissable\n      >\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <strong>Heads up!</strong>\n        <p>This alert needs your attention.</p>\n      </alert>\n    </div>\n\n    <doc-code language=\"markup\">\n      <alert type=\"success/info/danger/warning\">\n        ...\n      </alert>\n\n      <alert :show.sync=\"showRight\" placement=\"top-right\" duration=\"3000\" type=\"success\" width=\"400px\" dismissable>\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <strong>Well Done!</strong>\n        <p>You successfully read this important alert message.</p>\n      </alert>\n\n      <alert :show.sync=\"showTop\" placement=\"top\" duration=\"3000\" type=\"danger\" width=\"400px\" dismissable>\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <strong>Heads up!</strong>\n        <p>This alert needs your attention.</p>\n      </alert>\n    </doc-code>\n    <doc-options>\n      <div>\n        <p>show</p>\n        <p><code>Boolean</code></p>\n        <p><code>true</code></p>\n        <p>Whether show the component</p>\n      </div>\n      <div>\n        <p>dismissable</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Whether show close button</p>\n      </div>\n      <div>\n        <p>type</p>\n        <p><code>String</code>, one of\n        <code>success</code>\n        <code>info</code>\n        <code>warning</code>\n        <code>danger</code></p>\n        <p><code>success</code></p>\n        <p>Components styles</p>\n      </div>\n      <div>\n        <p>duration</p>\n        <p><code>Number</code></p>\n        <p><code>0</code></p>\n        <p>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</p>\n      </div>\n      <div>\n        <p>width</p>\n        <p><code>String</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>placement</p>\n        <p><code>String</code>. one of <code>top</code>, <code>top-right</code></p>\n        <p></p>\n        <p>how to position the component.</p>\n      </div>\n    </doc-options>\n  </div>\n</template>";

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(162)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\asideDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(168)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1babdcc9/asideDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Aside = __webpack_require__(163);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="aside" name="Aside">
	//     <div class="bs-example">
	//       <button class="btn btn-danger btn-lg" @click="showLeft = true">Show Aside on left</button>
	//       <button class="btn btn-success btn-lg" @click="showRight = true">Show Aside on right</button>
	//
	//       <sidebar :show.sync="showLeft" placement="left" header="Title" :width="350">
	//         <h4>Text in aside</h4>
	//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//         tempor incididunt ut labore et dolore magna aliqua.</p>
	//         <p> Ut enim ad minim veniam,
	//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//         consequat.</p>
	//         <doc-code language="javascript">
	//           if (talk === cheap){
	//             code.style.display = 'block'
	//           }
	//         </doc-code>
	//         <div class="aside-footer">
	//           <button type="button" class="btn btn-default" @click="showLeft=false">Close</button>
	//         </div>
	//       </sidebar>
	//       <sidebar :show.sync="showRight" placement="right" header="Title" :width="350">
	//         <h4>Text in aside</h4>
	//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//         tempor incididunt ut labore et dolore magna aliqua.</p>
	//         <p> Ut enim ad minim veniam,
	//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//         consequat.</p>
	//         <doc-code language="javascript">
	//           if (talk === cheap){
	//             code.style.display = 'block'
	//           }
	//         </doc-code>
	//         <div class="aside-footer">
	//           <button type="button" class="btn btn-default" @click="showRight=false">Close</button>
	//         </div>
	//       </sidebar>
	//     </div>
	//     <doc-code language="markup">
	//       <aside :show.sync="showRight" placement="right" header="Title" width="350">
	//         ...
	//       </aside>
	//       <aside :show.sync="showLeft" placement="left" header="Title" width="350">
	//         ...
	//       </aside>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>show</p>
	//         <p><code>Boolean</code></p>
	//         <p></p>
	//         <p>Whether show the component.</p>
	//       </div>
	//       <div>
	//         <p>placement</p>
	//         <p><code>String</code>, one of <code>left</code>, <code>right</code></p>
	//         <p><code>right</code></p>
	//         <p>how to position the component.</p>
	//       </div>
	//       <div>
	//         <p>header</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Header text of the aside component.</p>
	//       </div>
	//       <div>
	//         <p>width</p>
	//         <p><code>Number</code></p>
	//         <p></p>
	//         <p></p>
	//       </div>
	//     </doc-options>
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    sidebar: _Aside2.default
	  },
	  data: function data() {
	    return {
	      showLeft: false,
	      showRight: false
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(164)
	__vue_script__ = __webpack_require__(166)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Aside.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(167)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3a4bde27/Aside.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(165);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.aside-open {\r\n  -webkit-transition: -webkit-transform 0.3s;\r\n  transition: -webkit-transform 0.3s;\r\n  transition: transform 0.3s;\r\n  transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n.aside-open.has-push-right {\r\n  -webkit-transform: translateX(-300px);\r\n          transform: translateX(-300px);\r\n}\r\n.aside {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1049;\r\n    overflow: auto;\r\n    background: #fff;\r\n}\r\n.aside.left {\r\n  left: 0;\r\n  right: auto;\r\n}\r\n.aside.right {\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.slideleft-enter {\r\n  -webkit-animation:slideleft-in .3s;\r\n          animation:slideleft-in .3s;\r\n}\r\n.slideleft-leave {\r\n  -webkit-animation:slideleft-out .3s;\r\n          animation:slideleft-out .3s;\r\n}\r\n@-webkit-keyframes slideleft-in {\r\n  0% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideleft-in {\r\n  0% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes slideleft-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes slideleft-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.slideright-enter {\r\n  -webkit-animation:slideright-in .3s;\r\n          animation:slideright-in .3s;\r\n}\r\n.slideright-leave {\r\n  -webkit-animation:slideright-out .3s;\r\n          animation:slideright-out .3s;\r\n}\r\n@-webkit-keyframes slideright-in {\r\n  0% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideright-in {\r\n  0% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes slideright-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes slideright-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.aside:focus {\r\n    outline: 0\r\n}\r\n@media (max-width: 991px) {\r\n  .aside {\r\n    min-width:240px\r\n  }\r\n}\r\n.aside.left {\r\n  right: auto;\r\n  left: 0\r\n}\r\n.aside.right {\r\n  right: 0;\r\n  left: auto\r\n}\r\n.aside .aside-dialog .aside-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  min-height: 16.43px;\r\n  padding: 6px 15px;\r\n  background: #337ab7;\r\n  color: #fff\r\n}\r\n.aside .aside-dialog .aside-header .close {\r\n  margin-right: -8px;\r\n  padding: 4px 8px;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  opacity: .8\r\n}\r\n.aside .aside-dialog .aside-body {\r\n  position: relative;\r\n  padding: 15px\r\n}\r\n.aside .aside-dialog .aside-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5\r\n}\r\n.aside .aside-dialog .aside-footer .btn+.btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0\r\n}\r\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\r\n  margin-left: -1px\r\n}\r\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\r\n  margin-left: 0\r\n}\r\n.aside-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  opacity: 0;\r\n  -webkit-transition: opacity .3s ease;\r\n  transition: opacity .3s ease;\r\n  background-color: #000\r\n}\r\n.aside-backdrop.in {\r\n  opacity: .5;\r\n  filter: alpha(opacity=50)\r\n}\r\n", "", {"version":3,"sources":["/./src/Aside.vue?b581b1da"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6FA;EACA,2CAAA;EAAA,mCAAA;EAAA,2BAAA;EAAA,mDAAA;CACA;AACA;EACA,sCAAA;UAAA,8BAAA;CACA;AACA;IACA,gBAAA;IACA,OAAA;IACA,UAAA;IACA,cAAA;IACA,eAAA;IACA,iBAAA;CACA;AACA;EACA,QAAA;EACA,YAAA;CACA;AACA;EACA,WAAA;EACA,SAAA;CACA;AACA;EACA,mCAAA;UAAA,2BAAA;CACA;AACA;EACA,oCAAA;UAAA,4BAAA;CACA;AACA;EACA;IACA,qCAAA;YAAA,6BAAA;IACA,WAAA;GACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,qCAAA;YAAA,6BAAA;IACA,WAAA;GACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;EACA;IACA,qCAAA;YAAA,6BAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;EACA;IACA,qCAAA;YAAA,6BAAA;IACA,WAAA;GACA;CACA;AACA;EACA,oCAAA;UAAA,4BAAA;CACA;AACA;EACA,qCAAA;UAAA,6BAAA;CACA;AACA;EACA;IACA,oCAAA;YAAA,4BAAA;IACA,WAAA;GACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,oCAAA;YAAA,4BAAA;IACA,WAAA;GACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;EACA;IACA,oCAAA;YAAA,4BAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,iCAAA;YAAA,yBAAA;IACA,WAAA;GACA;EACA;IACA,oCAAA;YAAA,4BAAA;IACA,WAAA;GACA;CACA;AACA;IACA,UAAA;CACA;AACA;EACA;IACA,eAAA;GACA;CACA;AACA;EACA,YAAA;EACA,OAAA;CACA;AACA;EACA,SAAA;EACA,UAAA;CACA;AACA;EACA,iCAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,aAAA;CACA;AACA;EACA,cAAA;EACA,kBAAA;EACA,6BAAA;CACA;AACA;EACA,iBAAA;EACA,gBAAA;CACA;AACA;EACA,iBAAA;CACA;AACA;EACA,cAAA;CACA;AACA;EACA,gBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,cAAA;EACA,WAAA;EACA,qCAAA;EAAA,6BAAA;EACA,sBAAA;CACA;AACA;EACA,YAAA;EACA,yBAAA;CACA","file":"Aside.vue","sourcesContent":["<template>\r\n  <div class=\"aside\"\r\n    v-bind:style=\"{width:width + 'px'}\"\r\n    v-bind:class=\"{\r\n    left:placement === 'left',\r\n    right:placement === 'right'\r\n    }\"\r\n    v-show=\"show\"\r\n    :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\r\n    <div class=\"aside-dialog\">\r\n      <div class=\"aside-content\">\r\n        <div class=\"aside-header\">\r\n          <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\r\n          <h4 class=\"aside-title\">\r\n          <slot name=\"header\">\r\n            {{ header }}\r\n          </slot>\r\n          </h4>\r\n        </div>\r\n        <div class=\"aside-body\">\r\n          <slot></slot>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce, getScrollBarWidth} from './utils/utils.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\nexport default {\r\n  props: {\r\n    show: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      required: true,\r\n      twoWay: true\r\n    },\r\n    placement: {\r\n      type: String,\r\n      default: 'right'\r\n    },\r\n    header: {\r\n      type: String\r\n    },\r\n    width: {\r\n      type: Number,\r\n      coerce: coerce.number,\r\n      default: 320\r\n    }\r\n  },\r\n  watch: {\r\n    show (val) {\r\n      const body = document.body\r\n      const scrollBarWidth = getScrollBarWidth()\r\n      if (val) {\r\n        if (!this._backdrop) {\r\n          this._backdrop = document.createElement('div')\r\n        }\r\n        this._backdrop.className = 'aside-backdrop'\r\n        body.appendChild(this._backdrop)\r\n        body.classList.add('modal-open')\r\n        if (scrollBarWidth !== 0) {\r\n          body.style.paddingRight = scrollBarWidth + 'px'\r\n        }\r\n        // request property that requires layout to force a layout\r\n        var x = this._backdrop.clientHeight\r\n        this._backdrop.classList.add('in')\r\n        $(this._backdrop).on('click', () => this.close())\r\n      } else {\r\n        $(this._backdrop).on('transitionend', () => {\r\n          $(this._backdrop).off()\r\n          try {\r\n            body.classList.remove('modal-open')\r\n            body.style.paddingRight = '0'\r\n            body.removeChild(this._backdrop)\r\n            this._backdrop = null\r\n          } catch (e) {}\r\n        })\r\n        this._backdrop.className = 'aside-backdrop'\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    close () {\r\n      this.show = false\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.aside-open {\r\n  transition: transform 0.3s;\r\n}\r\n.aside-open.has-push-right {\r\n  transform: translateX(-300px);\r\n}\r\n.aside {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1049;\r\n    overflow: auto;\r\n    background: #fff;\r\n}\r\n.aside.left {\r\n  left: 0;\r\n  right: auto;\r\n}\r\n.aside.right {\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.slideleft-enter {\r\n  animation:slideleft-in .3s;\r\n}\r\n.slideleft-leave {\r\n  animation:slideleft-out .3s;\r\n}\r\n@keyframes slideleft-in {\r\n  0% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideleft-out {\r\n  0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.slideright-enter {\r\n  animation:slideright-in .3s;\r\n}\r\n.slideright-leave {\r\n  animation:slideright-out .3s;\r\n}\r\n@keyframes slideright-in {\r\n  0% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideright-out {\r\n  0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.aside:focus {\r\n    outline: 0\r\n}\r\n@media (max-width: 991px) {\r\n  .aside {\r\n    min-width:240px\r\n  }\r\n}\r\n.aside.left {\r\n  right: auto;\r\n  left: 0\r\n}\r\n.aside.right {\r\n  right: 0;\r\n  left: auto\r\n}\r\n.aside .aside-dialog .aside-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  min-height: 16.43px;\r\n  padding: 6px 15px;\r\n  background: #337ab7;\r\n  color: #fff\r\n}\r\n.aside .aside-dialog .aside-header .close {\r\n  margin-right: -8px;\r\n  padding: 4px 8px;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  opacity: .8\r\n}\r\n.aside .aside-dialog .aside-body {\r\n  position: relative;\r\n  padding: 15px\r\n}\r\n.aside .aside-dialog .aside-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5\r\n}\r\n.aside .aside-dialog .aside-footer .btn+.btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0\r\n}\r\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\r\n  margin-left: -1px\r\n}\r\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\r\n  margin-left: 0\r\n}\r\n.aside-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  opacity: 0;\r\n  transition: opacity .3s ease;\r\n  background-color: #000\r\n}\r\n.aside-backdrop.in {\r\n  opacity: .5;\r\n  filter: alpha(opacity=50)\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="aside"
	//     v-bind:style="{width:width + 'px'}"
	//     v-bind:class="{
	//     left:placement === 'left',
	//     right:placement === 'right'
	//     }"
	//     v-show="show"
	//     :transition="(this.placement === 'left') ? 'slideleft' : 'slideright'">
	//     <div class="aside-dialog">
	//       <div class="aside-content">
	//         <div class="aside-header">
	//           <button type="button" class="close" @click='close'><span>&times;</span></button>
	//           <h4 class="aside-title">
	//           <slot name="header">
	//             {{ header }}
	//           </slot>
	//           </h4>
	//         </div>
	//         <div class="aside-body">
	//           <slot></slot>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      required: true,
	      twoWay: true
	    },
	    placement: {
	      type: String,
	      default: 'right'
	    },
	    header: {
	      type: String
	    },
	    width: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 320
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      var body = document.body;
	      var scrollBarWidth = (0, _utils.getScrollBarWidth)();
	      if (val) {
	        if (!this._backdrop) {
	          this._backdrop = document.createElement('div');
	        }
	        this._backdrop.className = 'aside-backdrop';
	        body.appendChild(this._backdrop);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        // request property that requires layout to force a layout
	        var x = this._backdrop.clientHeight;
	        this._backdrop.classList.add('in');
	        (0, _NodeList2.default)(this._backdrop).on('click', function () {
	          return _this.close();
	        });
	      } else {
	        (0, _NodeList2.default)(this._backdrop).on('transitionend', function () {
	          (0, _NodeList2.default)(_this._backdrop).off();
	          try {
	            body.classList.remove('modal-open');
	            body.style.paddingRight = '0';
	            body.removeChild(_this._backdrop);
	            _this._backdrop = null;
	          } catch (e) {}
	        });
	        this._backdrop.className = 'aside-backdrop';
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	// </script>
	//
	// <style>
	// .aside-open {
	//   transition: transform 0.3s;
	// }
	// .aside-open.has-push-right {
	//   transform: translateX(-300px);
	// }
	// .aside {
	//     position: fixed;
	//     top: 0;
	//     bottom: 0;
	//     z-index: 1049;
	//     overflow: auto;
	//     background: #fff;
	// }
	// .aside.left {
	//   left: 0;
	//   right: auto;
	// }
	// .aside.right {
	//   left: auto;
	//   right: 0;
	// }
	// .slideleft-enter {
	//   animation:slideleft-in .3s;
	// }
	// .slideleft-leave {
	//   animation:slideleft-out .3s;
	// }
	// @keyframes slideleft-in {
	//   0% {
	//     transform: translateX(-100%);
	//     opacity: 0;
	//   }
	//   100% {
	//     transform: translateX(0);
	//     opacity: 1;
	//   }
	// }
	// @keyframes slideleft-out {
	//   0% {
	//     transform: translateX(0);
	//     opacity: 1;
	//   }
	//   100% {
	//     transform: translateX(-100%);
	//     opacity: 0;
	//   }
	// }
	// .slideright-enter {
	//   animation:slideright-in .3s;
	// }
	// .slideright-leave {
	//   animation:slideright-out .3s;
	// }
	// @keyframes slideright-in {
	//   0% {
	//     transform: translateX(100%);
	//     opacity: 0;
	//   }
	//   100% {
	//     transform: translateX(0);
	//     opacity: 1;
	//   }
	// }
	// @keyframes slideright-out {
	//   0% {
	//     transform: translateX(0);
	//     opacity: 1;
	//   }
	//   100% {
	//     transform: translateX(100%);
	//     opacity: 0;
	//   }
	// }
	// .aside:focus {
	//     outline: 0
	// }
	// @media (max-width: 991px) {
	//   .aside {
	//     min-width:240px
	//   }
	// }
	// .aside.left {
	//   right: auto;
	//   left: 0
	// }
	// .aside.right {
	//   right: 0;
	//   left: auto
	// }
	// .aside .aside-dialog .aside-header {
	//   border-bottom: 1px solid #e5e5e5;
	//   min-height: 16.43px;
	//   padding: 6px 15px;
	//   background: #337ab7;
	//   color: #fff
	// }
	// .aside .aside-dialog .aside-header .close {
	//   margin-right: -8px;
	//   padding: 4px 8px;
	//   color: #fff;
	//   font-size: 25px;
	//   opacity: .8
	// }
	// .aside .aside-dialog .aside-body {
	//   position: relative;
	//   padding: 15px
	// }
	// .aside .aside-dialog .aside-footer {
	//   padding: 15px;
	//   text-align: right;
	//   border-top: 1px solid #e5e5e5
	// }
	// .aside .aside-dialog .aside-footer .btn+.btn {
	//   margin-left: 5px;
	//   margin-bottom: 0
	// }
	// .aside .aside-dialog .aside-footer .btn-group .btn+.btn {
	//   margin-left: -1px
	// }
	// .aside .aside-dialog .aside-footer .btn-block+.btn-block {
	//   margin-left: 0
	// }
	// .aside-backdrop {
	//   position: fixed;
	//   top: 0;
	//   right: 0;
	//   bottom: 0;
	//   left: 0;
	//   z-index: 1040;
	//   opacity: 0;
	//   transition: opacity .3s ease;
	//   background-color: #000
	// }
	// .aside-backdrop.in {
	//   opacity: .5;
	//   filter: alpha(opacity=50)
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"aside\"\n  v-bind:style=\"{width:width + 'px'}\"\n  v-bind:class=\"{\n  left:placement === 'left',\n  right:placement === 'right'\n  }\"\n  v-show=\"show\"\n  :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\n  <div class=\"aside-dialog\">\n    <div class=\"aside-content\">\n      <div class=\"aside-header\">\n        <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\n        <h4 class=\"aside-title\">\n        <slot name=\"header\">\n          {{ header }}\n        </slot>\n        </h4>\n      </div>\n      <div class=\"aside-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"aside\" name=\"Aside\">\n  <div class=\"bs-example\">\n    <button class=\"btn btn-danger btn-lg\" @click=\"showLeft = true\">Show Aside on left</button>\n    <button class=\"btn btn-success btn-lg\" @click=\"showRight = true\">Show Aside on right</button>\n\n    <sidebar :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\n      <h4>Text in aside</h4>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.</p>\n      <p> Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat.</p>\n      <doc-code language=\"javascript\">\n        if (talk === cheap){\n          code.style.display = 'block'\n        }\n      </doc-code>\n      <div class=\"aside-footer\">\n        <button type=\"button\" class=\"btn btn-default\" @click=\"showLeft=false\">Close</button>\n      </div>\n    </sidebar>\n    <sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\n      <h4>Text in aside</h4>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.</p>\n      <p> Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat.</p>\n      <doc-code language=\"javascript\">\n        if (talk === cheap){\n          code.style.display = 'block'\n        }\n      </doc-code>\n      <div class=\"aside-footer\">\n        <button type=\"button\" class=\"btn btn-default\" @click=\"showRight=false\">Close</button>\n      </div>\n    </sidebar>\n  </div>\n  <doc-code language=\"markup\">\n    <aside :show.sync=\"showRight\" placement=\"right\" header=\"Title\" width=\"350\">\n      ...\n    </aside>\n    <aside :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" width=\"350\">\n      ...\n    </aside>\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>show</p>\n      <p><code>Boolean</code></p>\n      <p></p>\n      <p>Whether show the component.</p>\n    </div>\n    <div>\n      <p>placement</p>\n      <p><code>String</code>, one of <code>left</code>, <code>right</code></p>\n      <p><code>right</code></p>\n      <p>how to position the component.</p>\n    </div>\n    <div>\n      <p>header</p>\n      <p><code>String</code></p>\n      <p></p>\n      <p>Header text of the aside component.</p>\n    </div>\n    <div>\n      <p>width</p>\n      <p><code>Number</code></p>\n      <p></p>\n      <p></p>\n    </div>\n  </doc-options>\n</doc-section>\n";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(170)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\buttonGroupDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(179)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4ba9927e/buttonGroupDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _buttonGroup = __webpack_require__(171);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Checkbox = __webpack_require__(108);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Radio = __webpack_require__(174);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="button-group" name="Button Group">
	//     <div class="bs-example">
	//       <h4>Checkbox</h4>
	//       <button-group :value.sync="checkboxValue">
	//         <checkbox value="left">Left</checkbox>
	//         <checkbox value="middle">Middle</checkbox>
	//         <checkbox value="right">Right</checkbox>
	//       </button-group>
	//       <p>
	//         <pre>Checkbox value: {{checkboxValue | json}}</pre>
	//       </p>
	//       <hr>
	//       <h4>Radio</h4>
	//       <p>
	//         <button-group :value.sync="radioValue" type="primary">
	//           <radio value="left">Left</radio>
	//           <radio value="middle">Middle</radio>
	//           <radio value="right">Right</radio>
	//         </button-group>
	//       </p>
	//       <p>
	//         <button-group :value.sync="radioValue" type="success">
	//           <radio value="left">Left</radio>
	//           <radio value="middle">Middle</radio>
	//           <radio value="right">Right</radio>
	//         </button-group>
	//       </p>
	//       <p>
	//         <label>Not buttons:</label>
	//         <button-group :value.sync="radioValue" type="info" buttons="false">
	//           <radio value="left">Left</radio>
	//           <radio value="middle">Middle</radio>
	//           <radio value="right">Right</radio>
	//         </button-group>
	//       </p>
	//       <p>
	//         <pre>Radio value: {{radioValue}}</pre>
	//       </p>
	//     </div>
	//     <doc-code language="markup">
	//       <button-group :value.sync="checkboxValue">
	//         <checkbox value="left">Left</checkbox>
	//         <checkbox value="middle">Middle</checkbox>
	//         <checkbox value="right">Right</checkbox>
	//       </button-group>
	//
	//       <button-group :value.sync="radioValue" type="primary">
	//         <radio value="left">Left</radio>
	//         <radio value="middle">Middle</radio>
	//         <radio value="right">Right</radio>
	//       </button-group>
	//
	//       Not Buttons:
	//       <button-group :value.sync="radioValue" type="info" buttons="false">
	//         <radio value="left">Left</radio>
	//         <radio value="middle">Middle</radio>
	//         <radio value="right">Right</radio>
	//       </button-group>
	//     </doc-code>
	//
	//     <doc-options>
	//       <div>
	//         <p>value</p>
	//         <p><code>Array</code> or <code>String</code></p>
	//         <p></p>
	//         <p>If defined, then the defined values will be checked otherwise the elements with a checked attribute
	//         will be checked.</p>
	//       </div>
	//       <div>
	//         <p>buttons</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>
	//           <p>Can enable/disable button style.</p>
	//           <p>Group normal checks if you want to set the same type color for all.</p>
	//         </p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of <code>default</code>
	//         <code>primary</code>
	//         <code>danger</code>
	//         <code>info</code>
	//         <code>warning</code>
	//         <code>success</code></p>
	//         <p><code>default</code></p>
	//         <p></p>
	//       </div>
	//     </doc-options>
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    buttonGroup: _buttonGroup2.default,
	    checkbox: _Checkbox2.default,
	    radio: _Radio2.default
	  },
	  data: function data() {
	    return {
	      checkboxValue: [],
	      radioValue: 'middle'
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(172)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\buttonGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(173)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-323defbc/buttonGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	exports.default = {
	  props: {
	    value: null,
	    buttons: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    type: {
	      type: String,
	      default: 'default'
	    }
	  },
	  watch: {
	    value: {
	      deep: true,
	      handler: function handler(val) {
	        this.$children.forEach(function (el) {
	          if (el.group && el.eval) el.eval();
	        });
	      }
	    }
	  },
	  created: function created() {
	    this._btnGroup = true;
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div :class="{'btn-group':buttons}" :data-toggle="buttons&&'buttons'">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"{'btn-group':buttons}\" :data-toggle=\"buttons&&'buttons'\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(175)
	__vue_script__ = __webpack_require__(177)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(178)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-74cfd92c/Radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(176);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue");
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

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.radio { position: relative; }\r\n.radio > label > input {\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  box-sizing: border-box;\r\n}\r\n.radio > label > .icon {\r\n  position: absolute;\r\n  top: .15rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border-radius: .7rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n.radio:not(.active) > label > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\n.radio > label > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.radio.active > label > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\r\n}\r\n.radio.active .btn-default { -webkit-filter: brightness(75%); filter: brightness(75%); }\r\n\r\n.radio.disabled > label > .icon,\r\n.radio.readonly > label > .icon,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}\r\n", "", {"version":3,"sources":["/./src/Radio.vue?af3750e0"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgHA,SAAA,mBAAA,EAAA;AACA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;CACA;AACA;EACA,mBAAA;EACA,YAAA;EACA,QAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,mBAAA;EACA,0BAAA;KAAA,uBAAA;MAAA,sBAAA;UAAA,kBAAA;EACA,qBAAA;EACA,6BAAA;EACA,mCAAA;EACA,yBAAA;CACA;AACA;EACA,uBAAA;EACA,uBAAA;CACA;AACA;EACA,WAAA;EACA,0BAAA;EACA,0EAAA;CACA;AACA;EACA,2BAAA;EACA,8OAAA;CACA;AACA,6BAAA,gCAAA,CAAA,wBAAA,EAAA;;AAEA;;;EAGA,0BAAA;EACA,iBAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;CACA","file":"Radio.vue","sourcesContent":["<template>\r\n  <label v-if=\"buttonStyle\" :class=\"['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <input type=\"radio\" autocomplete=\"off\"\r\n      v-el:input\r\n      v-show=\"!readonly\"\r\n      :checked=\"active\"\r\n      :value=\"value\"\r\n      :name=\"name\"\r\n      :readonly=\"readonly\"\r\n      :disabled=\"disabled\"\r\n    />\r\n    <slot></slot>\r\n  </label>\r\n  <div v-else :class=\"['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <label class=\"open\">\r\n      <input type=\"radio\" autocomplete=\"off\"\r\n        v-el:input\r\n        :checked=\"active\"\r\n        :value=\"value\"\r\n        :name=\"name\"\r\n        :readonly=\"readonly\"\r\n        :disabled=\"disabled\"\r\n      />\r\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\r\n      <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\r\n      <slot></slot>\r\n    </label>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\n\r\nexport default {\r\n  props: {\r\n    value: {\r\n      default: true\r\n    },\r\n    checked: {\r\n      twoWay: true\r\n    },\r\n    button: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    name: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    type: {\r\n      type: String,\r\n      default: null\r\n    }\r\n  },\r\n  computed: {\r\n    active () {\r\n      return this.group ? this.$parent.value === this.value : this.value === this.checked\r\n    },\r\n    buttonStyle () {\r\n      return this.button || (this.group && this.$parent.buttons)\r\n    },\r\n    group () {\r\n      return this.$parent && this.$parent._radioGroup\r\n    },\r\n    typeColor () {\r\n      return (this.type || (this.$parent && this.$parent.type)) || 'default'\r\n    }\r\n  },\r\n  created () {\r\n    const parent = this.$parent\r\n    if (!parent) return\r\n    if (parent._btnGroup && !parent._checkboxGroup) {\r\n      parent._radioGroup = true\r\n    }\r\n  },\r\n  ready () {\r\n    if (!this.$parent._radioGroup) return\r\n    if (this.$parent.value) {\r\n      this.checked = (this.$parent.value === this.value)\r\n    } else if (this.checked) {\r\n      this.$parent.value = this.value\r\n    }\r\n  },\r\n  methods: {\r\n    focus () {\r\n      this.$els.input.focus()\r\n    },\r\n    toggle () {\r\n      if (this.disabled) { return }\r\n      this.focus()\r\n      if (this.readonly) { return }\r\n      this.checked = this.value\r\n      if (this.group) {\r\n        this.$parent.value = this.value\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scope>\r\n.radio { position: relative; }\r\n.radio > label > input {\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  box-sizing: border-box;\r\n}\r\n.radio > label > .icon {\r\n  position: absolute;\r\n  top: .15rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  text-align: center;\r\n  user-select: none;\r\n  border-radius: .7rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n.radio:not(.active) > label > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\n.radio > label > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.radio.active > label > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\r\n}\r\n.radio.active .btn-default { filter: brightness(75%); }\r\n\r\n.radio.disabled > label > .icon,\r\n.radio.readonly > label > .icon,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	exports.default = {
	  props: {
	    value: {
	      default: true
	    },
	    checked: {
	      twoWay: true
	    },
	    button: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.group ? this.$parent.value === this.value : this.value === this.checked;
	    },
	    buttonStyle: function buttonStyle() {
	      return this.button || this.group && this.$parent.buttons;
	    },
	    group: function group() {
	      return this.$parent && this.$parent._radioGroup;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    if (!parent) return;
	    if (parent._btnGroup && !parent._checkboxGroup) {
	      parent._radioGroup = true;
	    }
	  },
	  ready: function ready() {
	    if (!this.$parent._radioGroup) return;
	    if (this.$parent.value) {
	      this.checked = this.$parent.value === this.value;
	    } else if (this.checked) {
	      this.$parent.value = this.value;
	    }
	  },
	
	  methods: {
	    focus: function focus() {
	      this.$els.input.focus();
	    },
	    toggle: function toggle() {
	      if (this.disabled) {
	        return;
	      }
	      this.focus();
	      if (this.readonly) {
	        return;
	      }
	      this.checked = this.value;
	      if (this.group) {
	        this.$parent.value = this.value;
	      }
	    }
	  }
	};
	// </script>
	//
	// <style scope>
	// .radio { position: relative; }
	// .radio > label > input {
	//   position: absolute;
	//   margin: 0;
	//   padding: 0;
	//   opacity: 0;
	//   z-index: -1;
	//   box-sizing: border-box;
	// }
	// .radio > label > .icon {
	//   position: absolute;
	//   top: .15rem;
	//   left: 0;
	//   display: block;
	//   width: 1.4rem;
	//   height: 1.4rem;
	//   text-align: center;
	//   user-select: none;
	//   border-radius: .7rem;
	//   background-repeat: no-repeat;
	//   background-position: center center;
	//   background-size: 50% 50%;
	// }
	// .radio:not(.active) > label > .icon {
	//   background-color: #ddd;
	//   border: 1px solid #bbb;
	// }
	// .radio > label > input:focus ~ .icon {
	//   outline: 0;
	//   border: 1px solid #66afe9;
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
	// }
	// .radio.active > label > .icon {
	//   background-size: 1rem 1rem;
	//   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
	// }
	// .radio.active .btn-default { filter: brightness(75%); }
	//
	// .radio.disabled > label > .icon,
	// .radio.readonly > label > .icon,
	// .btn.readonly {
	//   filter: alpha(opacity=65);
	//   box-shadow: none;
	//   opacity: .65;
	// }
	// label.btn > input[type=radio] {
	//   position: absolute;
	//   clip: rect(0,0,0,0);
	//   pointer-events: none;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <label v-if="buttonStyle" :class="['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
	//     <input type="radio" autocomplete="off"
	//       v-el:input
	//       v-show="!readonly"
	//       :checked="active"
	//       :value="value"
	//       :name="name"
	//       :readonly="readonly"
	//       :disabled="disabled"
	//     />
	//     <slot></slot>
	//   </label>
	//   <div v-else :class="['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
	//     <label class="open">
	//       <input type="radio" autocomplete="off"
	//         v-el:input
	//         :checked="active"
	//         :value="value"
	//         :name="name"
	//         :readonly="readonly"
	//         :disabled="disabled"
	//       />
	//       <span class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
	//       <span v-if="active&&typeColor==='default'" class="icon"></span>
	//       <slot></slot>
	//     </label>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "\n<label v-if=\"buttonStyle\" :class=\"['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\n  <input type=\"radio\" autocomplete=\"off\"\n    v-el:input\n    v-show=\"!readonly\"\n    :checked=\"active\"\n    :value=\"value\"\n    :name=\"name\"\n    :readonly=\"readonly\"\n    :disabled=\"disabled\"\n  />\n  <slot></slot>\n</label>\n<div v-else :class=\"['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\n  <label class=\"open\">\n    <input type=\"radio\" autocomplete=\"off\"\n      v-el:input\n      :checked=\"active\"\n      :value=\"value\"\n      :name=\"name\"\n      :readonly=\"readonly\"\n      :disabled=\"disabled\"\n    />\n    <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\n    <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\n    <slot></slot>\n  </label>\n</div>\n";

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"button-group\" name=\"Button Group\">\n  <div class=\"bs-example\">\n    <h4>Checkbox</h4>\n    <button-group :value.sync=\"checkboxValue\">\n      <checkbox value=\"left\">Left</checkbox>\n      <checkbox value=\"middle\">Middle</checkbox>\n      <checkbox value=\"right\">Right</checkbox>\n    </button-group>\n    <p>\n      <pre>Checkbox value: {{checkboxValue | json}}</pre>\n    </p>\n    <hr>\n    <h4>Radio</h4>\n    <p>\n      <button-group :value.sync=\"radioValue\" type=\"primary\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\">Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </button-group>\n    </p>\n    <p>\n      <button-group :value.sync=\"radioValue\" type=\"success\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\">Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </button-group>\n    </p>\n    <p>\n      <label>Not buttons:</label>\n      <button-group :value.sync=\"radioValue\" type=\"info\" buttons=\"false\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\">Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </button-group>\n    </p>\n    <p>\n      <pre>Radio value: {{radioValue}}</pre>\n    </p>\n  </div>\n  <doc-code language=\"markup\">\n    <button-group :value.sync=\"checkboxValue\">\n      <checkbox value=\"left\">Left</checkbox>\n      <checkbox value=\"middle\">Middle</checkbox>\n      <checkbox value=\"right\">Right</checkbox>\n    </button-group>\n\n    <button-group :value.sync=\"radioValue\" type=\"primary\">\n      <radio value=\"left\">Left</radio>\n      <radio value=\"middle\">Middle</radio>\n      <radio value=\"right\">Right</radio>\n    </button-group>\n\n    Not Buttons:\n    <button-group :value.sync=\"radioValue\" type=\"info\" buttons=\"false\">\n      <radio value=\"left\">Left</radio>\n      <radio value=\"middle\">Middle</radio>\n      <radio value=\"right\">Right</radio>\n    </button-group>\n  </doc-code>\n\n  <doc-options>\n    <div>\n      <p>value</p>\n      <p><code>Array</code> or <code>String</code></p>\n      <p></p>\n      <p>If defined, then the defined values will be checked otherwise the elements with a checked attribute\n      will be checked.</p>\n    </div>\n    <div>\n      <p>buttons</p>\n      <p><code>Boolean</code></p>\n      <p><code>true</code></p>\n      <p>\n        <p>Can enable/disable button style.</p>\n        <p>Group normal checks if you want to set the same type color for all.</p>\n      </p>\n    </div>\n    <div>\n      <p>type</p>\n      <p><code>String</code>, one of <code>default</code>\n      <code>primary</code>\n      <code>danger</code>\n      <code>info</code>\n      <code>warning</code>\n      <code>success</code></p>\n      <p><code>default</code></p>\n      <p></p>\n    </div>\n  </doc-options>\n</doc-section>\n";

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(181)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\carouselDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(190)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7f149bf5/carouselDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Carousel = __webpack_require__(182);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slider = __webpack_require__(187);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    carousel: _Carousel2.default,
	    slider: _Slider2.default
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <doc-section id="carousel" name="Carousel">
	//     <div class="bs-example">
	//       <carousel>
	//         <slider>
	//           <img src="http://placehold.it/1200x500?text=one">
	//           <div class="carousel-caption">
	//            <h3>Slide #1</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//         <slider>
	//           <img src="http://placehold.it/1200x500?text=two">
	//           <div class="carousel-caption">
	//            <h3>Slide #2</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//         <slider>
	//           <img src="http://placehold.it/1200x500?text=three">
	//           <div class="carousel-caption">
	//            <h3>Slide #3</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//       </carousel>
	//     </div>
	//     <doc-code language="markup">
	//       <carousel>
	//         <slider>
	//           <img src="http://placehold.it/1200x400?text=one">
	//           <div class="carousel-caption">
	//             ...
	//           </div>
	//         </slider>
	//         <slider>
	//           <img src="http://placehold.it/1200x400?text=two">
	//         </slider>
	//         <slider>
	//           <img src="http://placehold.it/1200x400?text=three">
	//         </slider>
	//       </carousel>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>indicators</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>Whether to show the indicators.</p>
	//       </div>
	//       <div>
	//         <p>controls</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>Whether to show the direction controls.</p>
	//       </div>
	//       <div>
	//         <p>interval</p>
	//         <p><code>Number</code></p>
	//         <p><code>5000</code></p>
	//         <p>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,
	//           carousel will not automatically cycle.
	//         </p>
	//       </div>
	//     </doc-options>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(183)
	__vue_script__ = __webpack_require__(185)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(186)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-322dee41/Carousel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(184);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-322dee41&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-322dee41&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.carousel-control[_v-322dee41] {\r\n  cursor: pointer;\r\n}\r\n", "", {"version":3,"sources":["/./src/Carousel.vue?17e03760"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2GA;EACA,gBAAA;CACA","file":"Carousel.vue","sourcesContent":["<template>\r\n<div class=\"carousel slide\" data-ride=\"carousel\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\r\n    <li v-for=\"i in indicator\" @click=\"indicatorClick($index)\" v-bind:class=\"{active:$index === index}\"><span></span></li>\r\n  </ol>\r\n  <!-- Wrapper for slides -->\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <slot></slot>\r\n  </div>\r\n  <!-- Controls -->\r\n  <div v-show=\"controls\" class=\"carousel-controls hidden-xs\">\r\n    <a class=\"left carousel-control\" role=\"button\" @click=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n    </a>\r\n    <a class=\"right carousel-control\" role=\"button\" @click=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n</div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\n  export default {\r\n    props: {\r\n      indicators: {\r\n        type: Boolean,\r\n        coerce: coerce.boolean,\r\n        default: true\r\n      },\r\n      controls: {\r\n        type: Boolean,\r\n        coerce: coerce.boolean,\r\n        default: true\r\n      },\r\n      interval: {\r\n        type: Number,\r\n        coerce: coerce.number,\r\n        default: 5000\r\n      }\r\n    },\r\n    data () {\r\n      return {\r\n        indicator: [],\r\n        index: 0,\r\n        isAnimating: false,\r\n      }\r\n    },\r\n    computed: {\r\n      slider () {\r\n        return this.$el.querySelectorAll('.item')\r\n      }\r\n    },\r\n    watch: {\r\n      index(newVal, oldVal) {\r\n        this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal)\r\n      }\r\n    },\r\n    methods: {\r\n      indicatorClick(index) {\r\n        if (this.isAnimating || this.index === index) return false\r\n        this.isAnimating = true\r\n        this.index = index\r\n      },\r\n      slide (direction, next, prev) {\r\n        const selected = this.slider[next]\r\n        $(selected).addClass(direction === 'left' ? 'next' : 'prev')\r\n        // request property that requires layout to force a layout\r\n        var x = selected.clientHeight\r\n        $([this.slider[prev], selected]).addClass(direction).on('transitionend', () => {\r\n          $(this.slider).off('transitionend').className = 'item'\r\n          $(selected).addClass('active')\r\n          this.isAnimating = false\r\n        })\r\n      },\r\n      next() {\r\n        if (this.isAnimating) return false\r\n        this.isAnimating = true\r\n        this.index + 1 < this.slider.length ? this.index += 1 : this.index = 0\r\n      },\r\n      prev() {\r\n        if (this.isAnimating) return false\r\n        this.isAnimating = true\r\n        this.index === 0 ? this.index = this.slider.length - 1 : this.index -= 1\r\n      }\r\n    },\r\n    ready () {\r\n      if (this.interval > 0) {\r\n        const intervalManager = () => {\r\n          this.intervalID = setInterval(this.next, this.interval)\r\n        }\r\n        $(this.$el).on('mouseenter', () => clearInterval(this.intervalID)).on('mouseleave', () => intervalManager())\r\n        intervalManager()\r\n      }\r\n    },\r\n    beforeDestroy() {\r\n      if(this.intervalID) {\r\n        clearInterval(this.intervalID)\r\n      }\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n.carousel-control {\r\n  cursor: pointer;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="carousel slide" data-ride="carousel">
	//   <!-- Indicators -->
	//   <ol class="carousel-indicators" v-show="indicators">
	//     <li v-for="i in indicator" @click="indicatorClick($index)" v-bind:class="{active:$index === index}"><span></span></li>
	//   </ol>
	//   <!-- Wrapper for slides -->
	//   <div class="carousel-inner" role="listbox">
	//     <slot></slot>
	//   </div>
	//   <!-- Controls -->
	//   <div v-show="controls" class="carousel-controls hidden-xs">
	//     <a class="left carousel-control" role="button" @click="prev">
	//       <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	//     </a>
	//     <a class="right carousel-control" role="button" @click="next">
	//       <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	//     </a>
	//   </div>
	// </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    controls: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    interval: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 5000
	    }
	  },
	  data: function data() {
	    return {
	      indicator: [],
	      index: 0,
	      isAnimating: false
	    };
	  },
	
	  computed: {
	    slider: function slider() {
	      return this.$el.querySelectorAll('.item');
	    }
	  },
	  watch: {
	    index: function index(newVal, oldVal) {
	      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal);
	    }
	  },
	  methods: {
	    indicatorClick: function indicatorClick(index) {
	      if (this.isAnimating || this.index === index) return false;
	      this.isAnimating = true;
	      this.index = index;
	    },
	    slide: function slide(direction, next, prev) {
	      var _this = this;
	
	      var selected = this.slider[next];
	      (0, _NodeList2.default)(selected).addClass(direction === 'left' ? 'next' : 'prev');
	      // request property that requires layout to force a layout
	      var x = selected.clientHeight;
	      (0, _NodeList2.default)([this.slider[prev], selected]).addClass(direction).on('transitionend', function () {
	        (0, _NodeList2.default)(_this.slider).off('transitionend').className = 'item';
	        (0, _NodeList2.default)(selected).addClass('active');
	        _this.isAnimating = false;
	      });
	    },
	    next: function next() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.index + 1 < this.slider.length ? this.index += 1 : this.index = 0;
	    },
	    prev: function prev() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.index === 0 ? this.index = this.slider.length - 1 : this.index -= 1;
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    if (this.interval > 0) {
	      (function () {
	        var intervalManager = function intervalManager() {
	          _this2.intervalID = setInterval(_this2.next, _this2.interval);
	        };
	        (0, _NodeList2.default)(_this2.$el).on('mouseenter', function () {
	          return clearInterval(_this2.intervalID);
	        }).on('mouseleave', function () {
	          return intervalManager();
	        });
	        intervalManager();
	      })();
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.intervalID) {
	      clearInterval(this.intervalID);
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	// .carousel-control {
	//   cursor: pointer;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"carousel slide\" data-ride=\"carousel\" _v-322dee41=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-322dee41=\"\">\n    <li v-for=\"i in indicator\" @click=\"indicatorClick($index)\" v-bind:class=\"{active:$index === index}\" _v-322dee41=\"\"><span _v-322dee41=\"\"></span></li>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-322dee41=\"\">\n    <slot _v-322dee41=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <div v-show=\"controls\" class=\"carousel-controls hidden-xs\" _v-322dee41=\"\">\n    <a class=\"left carousel-control\" role=\"button\" @click=\"prev\" _v-322dee41=\"\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-322dee41=\"\"></span>\n    </a>\n    <a class=\"right carousel-control\" role=\"button\" @click=\"next\" _v-322dee41=\"\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-322dee41=\"\"></span>\n    </a>\n  </div>\n</div>\n";

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(188)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(189)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-32185b82/Slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 188 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="item">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    show: function show() {
	      return this.$parent.index === this.index;
	    }
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c] === this) {
	        this.index = parseInt(c, 10);
	        break;
	      }
	    }
	    //this.index = [...this.$el.parentNode.children].indexOf(this.$el)
	    this.$parent.indicator.push(this.index);
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"item\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "\n  <doc-section id=\"carousel\" name=\"Carousel\">\n    <div class=\"bs-example\">\n      <carousel>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=one\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #1</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=two\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #2</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=three\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #3</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n      </carousel>\n    </div>\n    <doc-code language=\"markup\">\n      <carousel>\n        <slider>\n          <img src=\"http://placehold.it/1200x400?text=one\">\n          <div class=\"carousel-caption\">\n            ...\n          </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x400?text=two\">\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x400?text=three\">\n        </slider>\n      </carousel>\n    </doc-code>\n    <doc-options>\n      <div>\n        <p>indicators</p>\n        <p><code>Boolean</code></p>\n        <p><code>true</code></p>\n        <p>Whether to show the indicators.</p>\n      </div>\n      <div>\n        <p>controls</p>\n        <p><code>Boolean</code></p>\n        <p><code>true</code></p>\n        <p>Whether to show the direction controls.</p>\n      </div>\n      <div>\n        <p>interval</p>\n        <p><code>Number</code></p>\n        <p><code>5000</code></p>\n        <p>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        </p>\n      </div>\n    </doc-options>\n  </div>\n</template>";

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(192)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\checkboxDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(193)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c8bf7950/checkboxDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Checkbox = __webpack_require__(108);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="checkbox" name="Checkbox">
	//     <div class="bs-example">
	//       <h4>Checkbox</h4>
	//       <checkbox :checked.sync="checkboxValue.one" value="one">One</checkbox>
	//       <checkbox :checked.sync="checkboxValue.two" value="two" type="danger" disabled>Two (disabled)</checkbox>
	//       <checkbox :checked.sync="checkboxValue.two" value="two" type="warning" readonly>Two (readonly)</checkbox>
	//       <checkbox :checked.sync="checkboxValue.two" value="two" type="success">Two</checkbox>
	//       <hr>
	//       <h4>Checkbox Button (Single button)</h4>
	//       <checkbox button :checked.sync="checkboxValue.three" value="three" type="primary">Three</checkbox>
	//       <checkbox button :checked.sync="checkboxValue.four" value="four" type="info" disabled>Four (disabled)</checkbox>
	//       <checkbox button :checked.sync="checkboxValue.four" value="four" type="info" readonly>Four (readonly)</checkbox>
	//       <checkbox button :checked.sync="checkboxValue.four" value="four" type="info">Four</checkbox>
	//       <p>
	//         <pre>Checkbox values: {{checkboxValue | json}}</pre>
	//       </p>
	//     </div>
	//     <doc-code language="markup">
	//       <checkbox :checked.sync="checkboxValue.one" value="one">One</checkbox>
	//       <checkbox :checked.sync="checkboxValue.two" value="two" type="primary">Two</checkbox>
	//       <checkbox :checked.sync="checkboxValue.three" value="three" type="info">Three</checkbox>
	//       <checkbox button :checked.sync="checkboxValue.four" value="four" type="danger">Four</checkbox>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>checked</p>
	//         <p><code>Number</code> or <code>String</code></p>
	//         <p></p>
	//         <p>Handle the selected value.</p>
	//       </div>
	//       <div>
	//         <p>value</p>
	//         <p><code>Number</code> or <code>String</code></p>
	//         <p></p>
	//         <p>Value to return if the checkbox item is selected.</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of <code>default</code>
	//         <code>primary</code>
	//         <code>danger</code>
	//         <code>info</code>
	//         <code>warning</code>
	//         <code>success</code></p>
	//         <p><code>default</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>button</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>Button style.</p>
	//       </div>
	//     </doc-options>
	//     <p>See <a href="#button-group">Button Group</a> for more options.</p>
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    checkbox: _Checkbox2.default
	  },
	  data: function data() {
	    return {
	      checkboxValue: {
	        one: null,
	        two: 'two',
	        three: null,
	        four: null
	      }
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 193 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"checkbox\" name=\"Checkbox\">\n  <div class=\"bs-example\">\n    <h4>Checkbox</h4>\n    <checkbox :checked.sync=\"checkboxValue.one\" value=\"one\">One</checkbox>\n    <checkbox :checked.sync=\"checkboxValue.two\" value=\"two\" type=\"danger\" disabled>Two (disabled)</checkbox>\n    <checkbox :checked.sync=\"checkboxValue.two\" value=\"two\" type=\"warning\" readonly>Two (readonly)</checkbox>\n    <checkbox :checked.sync=\"checkboxValue.two\" value=\"two\" type=\"success\">Two</checkbox>\n    <hr>\n    <h4>Checkbox Button (Single button)</h4>\n    <checkbox button :checked.sync=\"checkboxValue.three\" value=\"three\" type=\"primary\">Three</checkbox>\n    <checkbox button :checked.sync=\"checkboxValue.four\" value=\"four\" type=\"info\" disabled>Four (disabled)</checkbox>\n    <checkbox button :checked.sync=\"checkboxValue.four\" value=\"four\" type=\"info\" readonly>Four (readonly)</checkbox>\n    <checkbox button :checked.sync=\"checkboxValue.four\" value=\"four\" type=\"info\">Four</checkbox>\n    <p>\n      <pre>Checkbox values: {{checkboxValue | json}}</pre>\n    </p>\n  </div>\n  <doc-code language=\"markup\">\n    <checkbox :checked.sync=\"checkboxValue.one\" value=\"one\">One</checkbox>\n    <checkbox :checked.sync=\"checkboxValue.two\" value=\"two\" type=\"primary\">Two</checkbox>\n    <checkbox :checked.sync=\"checkboxValue.three\" value=\"three\" type=\"info\">Three</checkbox>\n    <checkbox button :checked.sync=\"checkboxValue.four\" value=\"four\" type=\"danger\">Four</checkbox>\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>checked</p>\n      <p><code>Number</code> or <code>String</code></p>\n      <p></p>\n      <p>Handle the selected value.</p>\n    </div>\n    <div>\n      <p>value</p>\n      <p><code>Number</code> or <code>String</code></p>\n      <p></p>\n      <p>Value to return if the checkbox item is selected.</p>\n    </div>\n    <div>\n      <p>type</p>\n      <p><code>String</code>, one of <code>default</code>\n      <code>primary</code>\n      <code>danger</code>\n      <code>info</code>\n      <code>warning</code>\n      <code>success</code></p>\n      <p><code>default</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>button</p>\n      <p><code>Boolean</code></p>\n      <p>false</p>\n      <p>Button style.</p>\n    </div>\n  </doc-options>\n  <p>See <a href=\"#button-group\">Button Group</a> for more options.</p>\n</doc-section>\n";

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(195)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f02dfa92/container.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container bs-docs-container\">\n  <div class=\"row\">\n      <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(197)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\datepickerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(208)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4158485e/datepickerDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Checkbox = __webpack_require__(108);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Datepicker = __webpack_require__(198);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Select = __webpack_require__(118);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(203);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    checkbox: _Checkbox2.default,
	    datepicker: _Datepicker2.default,
	    vSelect: _Select2.default,
	    vOption: _Option2.default
	  },
	  data: function data() {
	    return {
	      disabled: [],
	      value: '2015-06-10',
	      formats: [{ value: 'dd/MM/yyyy', label: 'dd/MM/yyyy' }, { value: 'dd-MM-yyyy', label: 'dd-MM-yyyy' }, { value: 'yyyy,MM,dd', label: 'yyyy,MM,dd' }, { value: 'yyyy-MM-dd', label: 'yyyy-MM-dd' }, { value: 'yyyy.MM.dd', label: 'yyyy.MM.dd' }, { value: 'MMM/dd/yyyy', label: 'MMM/dd/yyyy' }, { value: 'MMMM/dd/yyyy', label: 'MMMM/dd/yyyy' }, { value: 'MM/dd/yyyy', label: 'MM/dd/yyyy' }, { value: 'MM-dd-yyyy', label: 'MM-dd-yyyy' }],
	      format: ['yyyy-MM-dd'],
	      clear: true,
	      placeholder: 'placeholder is displayed when value is null or empty'
	    };
	  },
	
	  watch: {
	    disabled: function disabled() {
	      this.$refs.dp.getDateRange();
	    },
	    format: function format(newV) {
	      this.value = this.$refs.dp.stringify();
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <doc-section id="datepicker" name="Datepicker">
	//     <div class="bs-example">
	//       <p>
	//         <pre>Selected date is: {{new Date($refs.dp.parse()).toString()}}</pre>
	//       </p>
	//       <datepicker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled" :format="format.toString()" :clear-button="clear" :placeholder="placeholder" width="370px"></datepicker>
	//       <h4>Disabled days of week</h4>
	//
	//       <v-select multiple :value.sync="disabled" :options="[0,1,2,3,4,5,6]"></v-select>
	//
	//       <h4>Format</h4>
	//       <v-select :value.sync="format" :options="formats"></v-select>
	//
	//       <h4>Reset button</h4>
	//       <checkbox :checked.sync="clear" type="primary">toggle clear button</checkbox>
	//
	//       <h4>Placeholder</h4>
	//       <input :value="placeholder" type="text" style="width: 370px"></input>
	//     </div>
	//     <doc-code language="markup">
	//       <datepicker
	//         :value.sync="value"
	//         :disabled-days-of-Week="disabled"
	//         :format="format"
	//         :clear-button="clear"
	//         :placeholder="placeholder">
	//       </datepicker>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>value</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Value of the input DOM</p>
	//       </div>
	//       <div>
	//         <p>width</p>
	//         <p><code>String</code></p>
	//         <p>200px</p>
	//         <p>Width of the input DOM</p>
	//       </div>
	//       <div>
	//         <p>format</p>
	//         <p><code>String</code></p>
	//         <p><code>MMMM/dd/yyyy</code></p>
	//         <p>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</p>
	//       </div>
	//       <div>
	//         <p>disabled-days-of-week</p>
	//         <p><code>Array</code></p>
	//         <p></p>
	//         <p>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).
	//            Multiple values should be comma-separated.</p>
	//       </div>
	//       <div>
	//         <p>clear-button</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>If <strong>true</strong> shows an &times; shaped button to clear the selected date.
	//           Usefull in forms where date entry is optional.</p>
	//       </div>
	//       <div>
	//         <p>placeholder</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Placeholder to put on the input field when no date (null or empty) is set</p>
	//       </div>
	//     </doc-options>
	//   </div>
	//   <div></div>
	// </template>
	//
	// <script>

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(199)
	__vue_script__ = __webpack_require__(201)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Datepicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(202)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-477b8e5d/Datepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(200);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.datepicker{\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\r\n}\r\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.datepicker > button.close:focus {\r\n  opacity: .2;\r\n}\r\n.datepicker-popup{\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n}\r\n.datepicker-inner{\r\n  width: 218px;\r\n}\r\n.datepicker-body{\r\n  padding: 10px 10px;\r\n}\r\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span{\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n}\r\n.datepicker-ctrl p {\r\n  width: 65%;\r\n}\r\n.datepicker-ctrl span {\r\n  position: absolute;\r\n}\r\n.datepicker-body span {\r\n  text-align: center;\r\n}\r\n.datepicker-monthRange span{\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n}\r\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\r\n}\r\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray{\r\n  color: #999;\r\n}\r\n\r\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white!important;\r\n}\r\n.datepicker-monthRange {\r\n  margin-top: 10px\r\n}\r\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\r\n}\r\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\r\n}\r\n.datepicker-weekRange span{\r\n  font-weight: bold;\r\n}\r\n.datepicker-label{\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\r\n}\r\n.datepicker-ctrl{\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.month-btn{\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\r\n}\r\n.datepicker-preBtn{\r\n  left: 2px;\r\n}\r\n.datepicker-nextBtn{\r\n  right: 2px;\r\n}\r\n", "", {"version":3,"sources":["/./src/Datepicker.vue?1e63b7b1"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0VA;EACA,mBAAA;EACA,sBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,yCAAA;CACA;AACA;EACA,aAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;;;EAGA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AACA;EACA,kCAAA;EACA,8BAAA;CACA;AACA;;;;EAIA,YAAA;CACA;;AAEA;;EAEA,wCAAA;EACA,uBAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;;;;EAIA,gBAAA;CACA;AACA;;;;;EAKA,2BAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,0BAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;CACA;AACA;EACA,UAAA;CACA;AACA;EACA,WAAA;CACA","file":"Datepicker.vue","sourcesContent":["<template>\r\n  <div class=\"datepicker\">\r\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': clearButton}\" type=\"text\" :placeholder=\"placeholder\"\r\n        :style=\"{width:width}\"\r\n        @click=\"inputClick\"\r\n        v-model=\"value\"/>\r\n    <button v-if=\"clearButton && value\" type=\"button\" class=\"close\" @click=\"value = ''\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextMonthClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextMonthClick(1)\"></span>\r\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-weekRange\">\r\n            <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\r\n          </div>\r\n          <div class=\"datepicker-dateRange\">\r\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextYearClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextYearClick(1)\"></span>\r\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange\">\r\n            <template v-for=\"m in text.months\">\r\n              <span   :class=\"{'datepicker-dateRange-item-active':\r\n                  (this.text.months[this.parse(this.value).getMonth()]  === m) &&\r\n                  this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\r\n                  @click=\"monthSelect($index)\"\r\n                >{{m.substr(0,3)}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextDecadeClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextDecadeClick(1)\"></span>\r\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange decadeRange\">\r\n            <template v-for=\"decade in decadeRange\">\r\n              <span :class=\"{'datepicker-dateRange-item-active':\r\n                  this.parse(this.value).getFullYear() === decade.text}\"\r\n                  @click.stop=\"yearSelect(decade.text)\"\r\n                >{{decade.text}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport translations from './translations.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\nexport default {\r\n  props: {\r\n    value: {\r\n      type: String,\r\n      twoWay: true\r\n    },\r\n    format: {\r\n      default: 'MM/dd/yyyy'\r\n    },\r\n    disabledDaysOfWeek: {\r\n      type: Array,\r\n      default () {\r\n        return []\r\n      }\r\n    },\r\n    width: {\r\n      type: String,\r\n      default: '200px'\r\n    },\r\n    clearButton: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    lang: {\r\n      type: String,\r\n      default: navigator.language\r\n    },\r\n    placeholder: {\r\n      type: String\r\n    }\r\n  },\r\n  ready () {\r\n    this._blur = (e) => {\r\n      if (!this.$el.contains(e.target)) this.close()\r\n    }\r\n    this.$dispatch('child-created', this)\r\n    this.currDate = this.parse(this.value) || this.parse(new Date())\r\n    $(window).on('click', this._blur)\r\n  },\r\n  beforeDestroy () {\r\n    $(window).off('click', this._blur)\r\n  },\r\n  data () {\r\n    return {\r\n      currDate: new Date(),\r\n      dateRange: [],\r\n      decadeRange: [],\r\n      displayDayView: false,\r\n      displayMonthView: false,\r\n      displayYearView: false\r\n    }\r\n  },\r\n  watch: {\r\n    currDate () {\r\n      this.getDateRange()\r\n    }\r\n  },\r\n  computed: {\r\n    text () {\r\n      return translations(this.lang)\r\n    }\r\n  },\r\n  methods: {\r\n    close () {\r\n      this.displayDayView = this.displayMonthView = this.displayYearView = false\r\n    },\r\n    inputClick () {\r\n      this.currDate = this.parse(this.value) || this.parse(new Date())\r\n      if (this.displayMonthView || this.displayYearView) {\r\n        this.displayDayView = false\r\n      } else {\r\n        this.displayDayView = !this.displayDayView\r\n      }\r\n    },\r\n    preNextDecadeClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const months = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        this.currDate = new Date(year - 10, months, date)\r\n      } else {\r\n        this.currDate = new Date(year + 10, months, date)\r\n      }\r\n    },\r\n    preNextMonthClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const month = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        const preMonth = this.getYearMonth(year, month - 1)\r\n        this.currDate = new Date(preMonth.year, preMonth.month, date)\r\n      } else {\r\n        const nextMonth = this.getYearMonth(year, month + 1)\r\n        this.currDate = new Date(nextMonth.year, nextMonth.month, date)\r\n      }\r\n    },\r\n    preNextYearClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const months = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        this.currDate = new Date(year - 1, months, date)\r\n      } else {\r\n        this.currDate = new Date(year + 1, months, date)\r\n      }\r\n    },\r\n    yearSelect (year) {\r\n      this.displayYearView = false\r\n      this.displayMonthView = true\r\n      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())\r\n    },\r\n    daySelect (date, el) {\r\n      if (el.$el.classList[0] === 'datepicker-item-disable') {\r\n        return false\r\n      } else {\r\n        this.currDate = date\r\n        this.value = this.stringify(this.currDate)\r\n        this.displayDayView = false\r\n      }\r\n    },\r\n    switchMonthView () {\r\n      this.displayDayView = false\r\n      this.displayMonthView = true\r\n    },\r\n    switchDecadeView () {\r\n      this.displayMonthView = false\r\n      this.displayYearView = true\r\n    },\r\n    monthSelect (index) {\r\n      this.displayMonthView = false\r\n      this.displayDayView = true\r\n      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())\r\n    },\r\n    getYearMonth (year, month) {\r\n      if (month > 11) {\r\n        year++\r\n        month = 0\r\n      } else if (month < 0) {\r\n        year--\r\n        month = 11\r\n      }\r\n      return {year: year, month: month}\r\n    },\r\n    stringifyDecadeHeader (date) {\r\n      const yearStr = date.getFullYear().toString()\r\n      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0\r\n      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10\r\n      return firstYearOfDecade + '-' + lastYearOfDecade\r\n    },\r\n    stringifyDayHeader (date) {\r\n      return this.text.months[date.getMonth()] + ' ' + date.getFullYear()\r\n    },\r\n    parseMonth (date) {\r\n      return this.text.months[date.getMonth()]\r\n    },\r\n    stringifyYearHeader (date) {\r\n      return date.getFullYear()\r\n    },\r\n    stringify (date, format = this.format) {\r\n      if (!date) date = this.parse()\r\n      if (!date) return ''\r\n      const year = date.getFullYear()\r\n      const month = date.getMonth() + 1\r\n      const day = date.getDate()\r\n      const monthName = this.parseMonth(date)\r\n\r\n      return format\r\n      .replace(/yyyy/g, year)\r\n      .replace(/MMMM/g, monthName)\r\n      .replace(/MMM/g, monthName.substring(0, 3))\r\n      .replace(/MM/g, ('0' + month).slice(-2))\r\n      .replace(/dd/g, ('0' + day).slice(-2))\r\n      .replace(/yy/g, year)\r\n      .replace(/M(?!a)/g, month)\r\n      .replace(/d/g, day)\r\n    },\r\n    parse (str = this.value) {\r\n      let date\r\n      if (str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {\r\n        date = new Date(str.substring(6, 10), str.substring(3, 5), str.substring(0, 2))\r\n      } else {\r\n        date = new Date(str)\r\n      }\r\n      return isNaN(date.getFullYear()) ? new Date(null) : date\r\n    },\r\n    getDayCount (year, month) {\r\n      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\r\n      if (month === 1) {\r\n        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {\r\n          return 29\r\n        }\r\n      }\r\n      return dict[month]\r\n    },\r\n    getDateRange () {\r\n      this.dateRange = []\r\n      this.decadeRange = []\r\n      const time = {\r\n        year: this.currDate.getFullYear(),\r\n        month: this.currDate.getMonth(),\r\n        day: this.currDate.getDate()\r\n      }\r\n      const yearStr = time.year.toString()\r\n      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1\r\n      for (let i = 0; i < 12; i++) {\r\n        this.decadeRange.push({\r\n          text: firstYearOfDecade + i\r\n        })\r\n      }\r\n\r\n      const currMonthFirstDay = new Date(time.year, time.month, 1)\r\n      let firstDayWeek = currMonthFirstDay.getDay() + 1\r\n      if (firstDayWeek === 0) {\r\n        firstDayWeek = 7\r\n      }\r\n      const dayCount = this.getDayCount(time.year, time.month)\r\n      if (firstDayWeek > 1) {\r\n        const preMonth = this.getYearMonth(time.year, time.month - 1)\r\n        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)\r\n        for (let i = 1; i < firstDayWeek; i++) {\r\n          const dayText = prevMonthDayCount - firstDayWeek + i + 1\r\n          this.dateRange.push({\r\n            text: dayText,\r\n            date: new Date(preMonth.year, preMonth.month, dayText),\r\n            sclass: 'datepicker-item-gray'\r\n          })\r\n        }\r\n      }\r\n\r\n      for (let i = 1; i <= dayCount; i++) {\r\n        const date = new Date(time.year, time.month, i)\r\n        const week = date.getDay()\r\n        let sclass = ''\r\n        this.disabledDaysOfWeek.forEach((el) => {\r\n          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable'\r\n        })\r\n        if (i === time.day) {\r\n          if (this.value) {\r\n            const valueDate = this.parse(this.value)\r\n            if (valueDate) {\r\n              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {\r\n                sclass = 'datepicker-dateRange-item-active'\r\n              }\r\n            }\r\n          }\r\n        }\r\n        this.dateRange.push({\r\n          text: i,\r\n          date: date,\r\n          sclass: sclass\r\n        })\r\n      }\r\n\r\n      if (this.dateRange.length < 42) {\r\n        const nextMonthNeed = 42 - this.dateRange.length\r\n        const nextMonth = this.getYearMonth(time.year, time.month + 1)\r\n\r\n        for (let i = 1; i <= nextMonthNeed; i++) {\r\n          this.dateRange.push({\r\n            text: i,\r\n            date: new Date(nextMonth.year, nextMonth.month, i),\r\n            sclass: 'datepicker-item-gray'\r\n          })\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.datepicker{\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\r\n}\r\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.datepicker > button.close:focus {\r\n  opacity: .2;\r\n}\r\n.datepicker-popup{\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n}\r\n.datepicker-inner{\r\n  width: 218px;\r\n}\r\n.datepicker-body{\r\n  padding: 10px 10px;\r\n}\r\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span{\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n}\r\n.datepicker-ctrl p {\r\n  width: 65%;\r\n}\r\n.datepicker-ctrl span {\r\n  position: absolute;\r\n}\r\n.datepicker-body span {\r\n  text-align: center;\r\n}\r\n.datepicker-monthRange span{\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n}\r\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\r\n}\r\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray{\r\n  color: #999;\r\n}\r\n\r\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white!important;\r\n}\r\n.datepicker-monthRange {\r\n  margin-top: 10px\r\n}\r\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\r\n}\r\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\r\n}\r\n.datepicker-weekRange span{\r\n  font-weight: bold;\r\n}\r\n.datepicker-label{\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\r\n}\r\n.datepicker-ctrl{\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.month-btn{\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\r\n}\r\n.datepicker-preBtn{\r\n  left: 2px;\r\n}\r\n.datepicker-nextBtn{\r\n  right: 2px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _translations = __webpack_require__(137);
	
	var _translations2 = _interopRequireDefault(_translations);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="datepicker">
	//     <input class="form-control datepicker-input" :class="{'with-reset-button': clearButton}" type="text" :placeholder="placeholder"
	//         :style="{width:width}"
	//         @click="inputClick"
	//         v-model="value"/>
	//     <button v-if="clearButton && value" type="button" class="close" @click="value = ''">
	//       <span>&times;</span>
	//     </button>
	//     <div class="datepicker-popup" v-show="displayDayView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></span>
	//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></span>
	//             <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-weekRange">
	//             <span v-for="w in text.daysOfWeek">{{w}}</span>
	//           </div>
	//           <div class="datepicker-dateRange">
	//             <span v-for="d in dateRange" :class="d.sclass" @click="daySelect(d.date,this)">{{d.text}}</span>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayMonthView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextYearClick(0)"></span>
	//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextYearClick(1)"></span>
	//             <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange">
	//             <template v-for="m in text.months">
	//               <span   :class="{'datepicker-dateRange-item-active':
	//                   (this.text.months[this.parse(this.value).getMonth()]  === m) &&
	//                   this.currDate.getFullYear() === this.parse(this.value).getFullYear()}"
	//                   @click="monthSelect($index)"
	//                 >{{m.substr(0,3)}}</span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayYearView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextDecadeClick(0)"></span>
	//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextDecadeClick(1)"></span>
	//             <p>{{stringifyDecadeHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange decadeRange">
	//             <template v-for="decade in decadeRange">
	//               <span :class="{'datepicker-dateRange-item-active':
	//                   this.parse(this.value).getFullYear() === decade.text}"
	//                   @click.stop="yearSelect(decade.text)"
	//                 >{{decade.text}}</span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'MM/dd/yyyy'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    width: {
	      type: String,
	      default: '200px'
	    },
	    clearButton: {
	      type: Boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    },
	    placeholder: {
	      type: String
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this._blur = function (e) {
	      if (!_this.$el.contains(e.target)) _this.close();
	    };
	    this.$dispatch('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    (0, _NodeList2.default)(window).on('click', this._blur);
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)(window).off('click', this._blur);
	  },
	  data: function data() {
	    return {
	      currDate: new Date(),
	      dateRange: [],
	      decadeRange: [],
	      displayDayView: false,
	      displayMonthView: false,
	      displayYearView: false
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    }
	  },
	  computed: {
	    text: function text() {
	      return (0, _translations2.default)(this.lang);
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMonthView = this.displayYearView = false;
	    },
	    inputClick: function inputClick() {
	      this.currDate = this.parse(this.value) || this.parse(new Date());
	      if (this.displayMonthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, months, date);
	      } else {
	        this.currDate = new Date(year + 10, months, date);
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
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, months, date);
	      } else {
	        this.currDate = new Date(year + 1, months, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMonthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
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
	    switchMonthView: function switchMonthView() {
	      this.displayDayView = false;
	      this.displayMonthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMonthView = false;
	      this.displayYearView = true;
	    },
	    monthSelect: function monthSelect(index) {
	      this.displayMonthView = false;
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
	      return this.text.months[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMonth: function parseMonth(date) {
	      return this.text.months[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      if (!date) date = this.parse();
	      if (!date) return '';
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse() {
	      var str = arguments.length <= 0 || arguments[0] === undefined ? this.value : arguments[0];
	
	      var date = void 0;
	      if (str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {
	        date = new Date(str.substring(6, 10), str.substring(3, 5), str.substring(0, 2));
	      } else {
	        date = new Date(str);
	      }
	      return isNaN(date.getFullYear()) ? new Date(null) : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	      }
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      var _this2 = this;
	
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
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function _loop(_i2) {
	        var date = new Date(time.year, time.month, _i2);
	        var week = date.getDay();
	        var sclass = '';
	        _this2.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
	        });
	        if (_i2 === time.day) {
	          if (_this2.value) {
	            var valueDate = _this2.parse(_this2.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = 'datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this2.dateRange.push({
	          text: _i2,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        _loop(_i2);
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          this.dateRange.push({
	            text: _i3,
	            date: new Date(nextMonth.year, nextMonth.month, _i3),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	    }
	  }
	};
	// </script>
	//
	// <style>
	// .datepicker{
	//   position: relative;
	//   display: inline-block;
	// }
	// input.datepicker-input.with-reset-button {
	//   padding-right: 25px;
	// }
	// .datepicker > button.close {
	//   position: absolute;
	//   top: 0;
	//   right: 0;
	//   outline: none;
	//   z-index: 2;
	//   display: block;
	//   width: 34px;
	//   height: 34px;
	//   line-height: 34px;
	//   text-align: center;
	// }
	// .datepicker > button.close:focus {
	//   opacity: .2;
	// }
	// .datepicker-popup{
	//   position: absolute;
	//   border: 1px solid #ccc;
	//   border-radius: 5px;
	//   background: #fff;
	//   margin-top: 2px;
	//   z-index: 1000;
	//   box-shadow: 0 6px 12px rgba(0,0,0,0.175);
	// }
	// .datepicker-inner{
	//   width: 218px;
	// }
	// .datepicker-body{
	//   padding: 10px 10px;
	// }
	// .datepicker-ctrl p,
	// .datepicker-ctrl span,
	// .datepicker-body span{
	//   display: inline-block;
	//   width: 28px;
	//   line-height: 28px;
	//   height: 28px;
	//   border-radius: 4px;
	// }
	// .datepicker-ctrl p {
	//   width: 65%;
	// }
	// .datepicker-ctrl span {
	//   position: absolute;
	// }
	// .datepicker-body span {
	//   text-align: center;
	// }
	// .datepicker-monthRange span{
	//   width: 48px;
	//   height: 50px;
	//   line-height: 45px;
	// }
	// .datepicker-item-disable {
	//   background-color: white!important;
	//   cursor: not-allowed!important;
	// }
	// .decadeRange span:first-child,
	// .decadeRange span:last-child,
	// .datepicker-item-disable,
	// .datepicker-item-gray{
	//   color: #999;
	// }
	//
	// .datepicker-dateRange-item-active:hover,
	// .datepicker-dateRange-item-active {
	//   background: rgb(50, 118, 177)!important;
	//   color: white!important;
	// }
	// .datepicker-monthRange {
	//   margin-top: 10px
	// }
	// .datepicker-monthRange span,
	// .datepicker-ctrl span,
	// .datepicker-ctrl p,
	// .datepicker-dateRange span {
	//   cursor: pointer;
	// }
	// .datepicker-monthRange span:hover,
	// .datepicker-ctrl p:hover,
	// .datepicker-ctrl i:hover,
	// .datepicker-dateRange span:hover,
	// .datepicker-dateRange-item-hover {
	//   background-color : #eeeeee;
	// }
	// .datepicker-weekRange span{
	//   font-weight: bold;
	// }
	// .datepicker-label{
	//   background-color: #f8f8f8;
	//   font-weight: 700;
	//   padding: 7px 0;
	//   text-align: center;
	// }
	// .datepicker-ctrl{
	//   position: relative;
	//   height: 30px;
	//   line-height: 30px;
	//   font-weight: bold;
	//   text-align: center;
	// }
	// .month-btn{
	//   font-weight: bold;
	//   -webkit-user-select:none;
	//   -moz-user-select:none;
	//   -ms-user-select:none;
	//   user-select:none;
	// }
	// .datepicker-preBtn{
	//   left: 2px;
	// }
	// .datepicker-nextBtn{
	//   right: 2px;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"datepicker\">\n  <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': clearButton}\" type=\"text\" :placeholder=\"placeholder\"\n      :style=\"{width:width}\"\n      @click=\"inputClick\"\n      v-model=\"value\"/>\n  <button v-if=\"clearButton && value\" type=\"button\" class=\"close\" @click=\"value = ''\">\n    <span>&times;</span>\n  </button>\n  <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextMonthClick(0)\"></span>\n          <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextMonthClick(1)\"></span>\n          <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-weekRange\">\n          <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\n        </div>\n        <div class=\"datepicker-dateRange\">\n          <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextYearClick(0)\"></span>\n          <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextYearClick(1)\"></span>\n          <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-monthRange\">\n          <template v-for=\"m in text.months\">\n            <span   :class=\"{'datepicker-dateRange-item-active':\n                (this.text.months[this.parse(this.value).getMonth()]  === m) &&\n                this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n                @click=\"monthSelect($index)\"\n              >{{m.substr(0,3)}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextDecadeClick(0)\"></span>\n          <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextDecadeClick(1)\"></span>\n          <p>{{stringifyDecadeHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-monthRange decadeRange\">\n          <template v-for=\"decade in decadeRange\">\n            <span :class=\"{'datepicker-dateRange-item-active':\n                this.parse(this.value).getFullYear() === decade.text}\"\n                @click.stop=\"yearSelect(decade.text)\"\n              >{{decade.text}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(204)
	__vue_script__ = __webpack_require__(206)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(207)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-42088116/Option.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(205);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-42088116&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-42088116&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\na span.check-mark[_v-42088116] {\r\n  position: absolute;\r\n  display: inline-block;\r\n  right: 15px;\r\n  margin-top: 5px;\r\n}\r\n", "", {"version":3,"sources":["/./src/Option.vue?39ff38be"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0CA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;CACA","file":"Option.vue","sourcesContent":["<template>\r\n  <li style=\"position:relative\">\r\n    <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\">\r\n      <span v-el:v><slot></slot></span>\r\n      <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\"></span>\r\n    </a>\r\n  </li>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    value: {\r\n      type: String\r\n    }\r\n  },\r\n  data () {\r\n    return {\r\n      chosen: false\r\n    }\r\n  },\r\n  computed: {\r\n    chosen () {\r\n      return this.$parent.value.indexOf(this.value) !== -1\r\n    }\r\n  },\r\n  methods: {\r\n    handleClick () {\r\n      const parent = this.$parent\r\n      if (parent.multiple) {\r\n        const index = parent.value.indexOf(this.value)\r\n        parent.value[~index ? '$remove' : 'push'](this.value)\r\n      } else {\r\n        parent.value = [this.value]\r\n        parent.show = false\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\na span.check-mark {\r\n  position: absolute;\r\n  display: inline-block;\r\n  right: 15px;\r\n  margin-top: 5px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 206 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <li style="position:relative">
	//     <a @mousedown.prevent="handleClick" style="cursor:pointer">
	//       <span v-el:v><slot></slot></span>
	//       <span class="glyphicon glyphicon-ok check-mark" v-show="chosen"></span>
	//     </a>
	//   </li>
	// </template>
	//
	// <script>
	exports.default = {
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
	      return this.$parent.value.indexOf(this.value) !== -1;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      if (parent.multiple) {
	        var index = parent.value.indexOf(this.value);
	        parent.value[~index ? '$remove' : 'push'](this.value);
	      } else {
	        parent.value = [this.value];
	        parent.show = false;
	      }
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	// a span.check-mark {
	//   position: absolute;
	//   display: inline-block;
	//   right: 15px;
	//   margin-top: 5px;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "\n<li style=\"position:relative\" _v-42088116=\"\">\n  <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\" _v-42088116=\"\">\n    <span v-el:v=\"\" _v-42088116=\"\"><slot _v-42088116=\"\"></slot></span>\n    <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\" _v-42088116=\"\"></span>\n  </a>\n</li>\n";

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "\n  <doc-section id=\"datepicker\" name=\"Datepicker\">\n    <div class=\"bs-example\">\n      <p>\n        <pre>Selected date is: {{new Date($refs.dp.parse()).toString()}}</pre>\n      </p>\n      <datepicker v-ref:dp :value.sync=\"value\" :disabled-days-of-Week=\"disabled\" :format=\"format.toString()\" :clear-button=\"clear\" :placeholder=\"placeholder\" width=\"370px\"></datepicker>\n      <h4>Disabled days of week</h4>\n\n      <v-select multiple :value.sync=\"disabled\" :options=\"[0,1,2,3,4,5,6]\"></v-select>\n\n      <h4>Format</h4>\n      <v-select :value.sync=\"format\" :options=\"formats\"></v-select>\n\n      <h4>Reset button</h4>\n      <checkbox :checked.sync=\"clear\" type=\"primary\">toggle clear button</checkbox>\n\n      <h4>Placeholder</h4>\n      <input :value=\"placeholder\" type=\"text\" style=\"width: 370px\"></input>\n    </div>\n    <doc-code language=\"markup\">\n      <datepicker\n        :value.sync=\"value\"\n        :disabled-days-of-Week=\"disabled\"\n        :format=\"format\"\n        :clear-button=\"clear\"\n        :placeholder=\"placeholder\">\n      </datepicker>\n    </doc-code>\n    <doc-options>\n      <div>\n        <p>value</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>Value of the input DOM</p>\n      </div>\n      <div>\n        <p>width</p>\n        <p><code>String</code></p>\n        <p>200px</p>\n        <p>Width of the input DOM</p>\n      </div>\n      <div>\n        <p>format</p>\n        <p><code>String</code></p>\n        <p><code>MMMM/dd/yyyy</code></p>\n        <p>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</p>\n      </div>\n      <div>\n        <p>disabled-days-of-week</p>\n        <p><code>Array</code></p>\n        <p></p>\n        <p>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).\n           Multiple values should be comma-separated.</p>\n      </div>\n      <div>\n        <p>clear-button</p>\n        <p><code>Boolean</code></p>\n        <p>false</p>\n        <p>If <strong>true</strong> shows an &times; shaped button to clear the selected date.\n          Usefull in forms where date entry is optional.</p>\n      </div>\n      <div>\n        <p>placeholder</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>Placeholder to put on the input field when no date (null or empty) is set</p>\n      </div>\n    </doc-options>\n  </div>\n  <div></div>\n</template>";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(210)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\dropdownDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(211)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-20763da6/dropdownDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Dropdown = __webpack_require__(83);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="dropdown" name="Dropdown">
	//     <div class="bs-example">
	//       <dropdown>
	//         <button slot="button" type="button" class="btn btn-default dropdown-toggle">
	//           Action
	//           <span class="caret"></span>
	//         </button>
	//         <ul slot="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#dropdown">Action</a></li>
	//           <li><a href="#dropdown">Another action</a></li>
	//           <li><a href="#dropdown">Something else here</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#dropdown">Separated link</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown text="Action" type="primary">
	//         <li><a href="#dropdown">Action</a></li>
	//         <li><a href="#dropdown">Another action</a></li>
	//         <li><a href="#dropdown">Something else here</a></li>
	//         <li role="separator" class="divider"></li>
	//         <li><a href="#dropdown">Separated link</a></li>
	//       </dropdown>
	//       <dropdown>
	//         <button slot="button" type="button" class="btn btn-success dropdown-toggle">
	//           Action <span class="caret"></span>
	//         </button>
	//         <ul slot="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#dropdown">Action</a></li>
	//           <li><a href="#dropdown">Another action</a></li>
	//           <li><a href="#dropdown">Something else here</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#dropdown">Separated link</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown text="Disabled" type="warning" disabled>
	//         <li><a href="#dropdown">Action</a></li>
	//       </dropdown>
	//       <div class="btn-group btn-group-justified" role="group">
	//         <a href="#dropdown" class="btn btn-default" role="button">Left</a>
	//         <dropdown>
	//           <a slot="button" href="#dropdown" class="btn btn-default">
	//             Dropdown <span class="caret"></span>
	//           </a>
	//           <ul slot="dropdown-menu" class="dropdown-menu">
	//             <li><a href="#dropdown">Action</a></li>
	//             <li><a href="#dropdown">Another action</a></li>
	//             <li><a href="#dropdown">Something else here</a></li>
	//             <li role="separator" class="divider"></li>
	//             <li><a href="#dropdown">Separated link</a></li>
	//           </ul>
	//         </dropdown>
	//         <a href="#dropdown" class="btn btn-default" role="button">Right</a>
	//       </div>
	//     </div>
	//     <doc-code language="markup">
	//       Boostrap style:
	//       <dropdown>
	//         <button type="button" class="btn btn-default">
	//           Action
	//           <span class="caret"></span>
	//         </button>
	//         <ul slot="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#dropdown">Action</a></li>
	//           <li><a href="#dropdown">Another action</a></li>
	//           <li><a href="#dropdown">Something else here</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#dropdown">Separated link</a></li>
	//         </ul>
	//       </dropdown>
	//
	//       Component style:
	//       <dropdown text="Action" type="primary">
	//         <li><a href="#dropdown">Action</a></li>
	//         <li><a href="#dropdown">Another action</a></li>
	//         <li><a href="#dropdown">Something else here</a></li>
	//         <li role="separator" class="divider"></li>
	//         <li><a href="#dropdown">Separated link</a></li>
	//       </dropdown>
	//       <dropdown text="Disabled" type="warning" disabled>
	//         <li><a href="#dropdown">Action</a></li>
	//       </dropdown>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>show</p>
	//         <p><code>Boolean</code></p>
	//         <p></p>
	//         <p>Whether show the component.</p>
	//       </div>
	//       <div>
	//         <p>class</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>classes to change the style.</p>
	//       </div>
	//       <div>
	//         <p>disabled</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>text</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Dropdown button text.</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of <code>default</code>
	//         <code>primary</code>
	//         <code>danger</code>
	//         <code>info</code>
	//         <code>warning</code>
	//         <code>success</code></p>
	//         <p><code>default</code></p>
	//         <p></p>
	//       </div>
	//     </doc-options>
	//     <h2>Usage</h2>
	//     <p>Just like the examples. Can use it as the <a target="_blank" href="http://getbootstrap.com/javascript/#dropdowns">original Bootstrap way</a>.</p>
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    dropdown: _Dropdown2.default
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"dropdown\" name=\"Dropdown\">\n  <div class=\"bs-example\">\n    <dropdown>\n      <button slot=\"button\" type=\"button\" class=\"btn btn-default dropdown-toggle\">\n        Action\n        <span class=\"caret\"></span>\n      </button>\n      <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n        <li><a href=\"#dropdown\">Action</a></li>\n        <li><a href=\"#dropdown\">Another action</a></li>\n        <li><a href=\"#dropdown\">Something else here</a></li>\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"#dropdown\">Separated link</a></li>\n      </ul>\n    </dropdown>\n    <dropdown text=\"Action\" type=\"primary\">\n      <li><a href=\"#dropdown\">Action</a></li>\n      <li><a href=\"#dropdown\">Another action</a></li>\n      <li><a href=\"#dropdown\">Something else here</a></li>\n      <li role=\"separator\" class=\"divider\"></li>\n      <li><a href=\"#dropdown\">Separated link</a></li>\n    </dropdown>\n    <dropdown>\n      <button slot=\"button\" type=\"button\" class=\"btn btn-success dropdown-toggle\">\n        Action <span class=\"caret\"></span>\n      </button>\n      <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n        <li><a href=\"#dropdown\">Action</a></li>\n        <li><a href=\"#dropdown\">Another action</a></li>\n        <li><a href=\"#dropdown\">Something else here</a></li>\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"#dropdown\">Separated link</a></li>\n      </ul>\n    </dropdown>\n    <dropdown text=\"Disabled\" type=\"warning\" disabled>\n      <li><a href=\"#dropdown\">Action</a></li>\n    </dropdown>\n    <div class=\"btn-group btn-group-justified\" role=\"group\">\n      <a href=\"#dropdown\" class=\"btn btn-default\" role=\"button\">Left</a>\n      <dropdown>\n        <a slot=\"button\" href=\"#dropdown\" class=\"btn btn-default\">\n          Dropdown <span class=\"caret\"></span>\n        </a>\n        <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#dropdown\">Action</a></li>\n          <li><a href=\"#dropdown\">Another action</a></li>\n          <li><a href=\"#dropdown\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#dropdown\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <a href=\"#dropdown\" class=\"btn btn-default\" role=\"button\">Right</a>\n    </div>\n  </div>\n  <doc-code language=\"markup\">\n    Boostrap style:\n    <dropdown>\n      <button type=\"button\" class=\"btn btn-default\">\n        Action\n        <span class=\"caret\"></span>\n      </button>\n      <ul slot=\"dropdown-menu\" class=\"dropdown-menu\">\n        <li><a href=\"#dropdown\">Action</a></li>\n        <li><a href=\"#dropdown\">Another action</a></li>\n        <li><a href=\"#dropdown\">Something else here</a></li>\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"#dropdown\">Separated link</a></li>\n      </ul>\n    </dropdown>\n\n    Component style:\n    <dropdown text=\"Action\" type=\"primary\">\n      <li><a href=\"#dropdown\">Action</a></li>\n      <li><a href=\"#dropdown\">Another action</a></li>\n      <li><a href=\"#dropdown\">Something else here</a></li>\n      <li role=\"separator\" class=\"divider\"></li>\n      <li><a href=\"#dropdown\">Separated link</a></li>\n    </dropdown>\n    <dropdown text=\"Disabled\" type=\"warning\" disabled>\n      <li><a href=\"#dropdown\">Action</a></li>\n    </dropdown>\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>show</p>\n      <p><code>Boolean</code></p>\n      <p></p>\n      <p>Whether show the component.</p>\n    </div>\n    <div>\n      <p>class</p>\n      <p><code>String</code></p>\n      <p><code>null</code></p>\n      <p>classes to change the style.</p>\n    </div>\n    <div>\n      <p>disabled</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>text</p>\n      <p><code>String</code></p>\n      <p></p>\n      <p>Dropdown button text.</p>\n    </div>\n    <div>\n      <p>type</p>\n      <p><code>String</code>, one of <code>default</code>\n      <code>primary</code>\n      <code>danger</code>\n      <code>info</code>\n      <code>warning</code>\n      <code>success</code></p>\n      <p><code>default</code></p>\n      <p></p>\n    </div>\n  </doc-options>\n  <h2>Usage</h2>\n  <p>Just like the examples. Can use it as the <a target=\"_blank\" href=\"http://getbootstrap.com/javascript/#dropdowns\">original Bootstrap way</a>.</p>\n</doc-section>\n";

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(213)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\inputDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(219)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-646fbd5b/inputDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Input = __webpack_require__(214);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _buttonGroup = __webpack_require__(171);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Checkbox = __webpack_require__(108);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="input" name="Input">
	//     <div class="bs-example text-left">
	//       <form action="." method="get" accept-charset="utf-8">
	//         <div class="row">
	//           <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	//             <bs-input name="username"
	//               :disabled="check.disabled"
	//               :error="check.error && 'Insert user name'"
	//               help="Only allows lowercase letters and numbers."
	//               :enter-submit="check.enterSubmit"
	//               :icon="check.icon"
	//               :label="check.label && 'User Name'"
	//               :mask="check.mask?mask:null"
	//               :minlength="check.minlength?5:0"
	//               pattern="^[a-z][a-z0-9]+$"
	//               :placeholder="check.placeholder && 'Username can\'t start with a number.'"
	//               :readonly="check.readonly"
	//               :required="check.required"
	//               :clear-button="check.clearButton"
	//               :value.sync="input"
	//             ></bs-input>
	//           </div>
	//           <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	//             <bs-input name="match" required label="Match value" type="password" :match="input" :icon="check.icon" :enter-submit="check.enterSubmit" help="Match the User Name"></bs-input>
	//           </div>
	//         </div>
	//         <div class="row">
	//           <button-group type="primary" buttons="false">
	//             <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	//               <p><checkbox :checked.sync="check.label">Label</checkbox></p>
	//               <p><checkbox :checked.sync="check.placeholder">placeholder</checkbox></p>
	//               <p><checkbox :checked.sync="check.disabled">disabled</checkbox></p>
	//               <p><checkbox :checked.sync="check.error">error</checkbox></p>
	//               <p><checkbox :checked.sync="check.icon">icon</checkbox></p>
	//               <p><checkbox :checked.sync="check.enterSubmit">enterSubmit</checkbox></p>
	//             </div>
	//             <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	//               <p><checkbox :checked.sync="check.mask">mask</checkbox></p>
	//               <p><checkbox :checked.sync="check.minlength">minlength=5</checkbox></p>
	//               <p><checkbox :checked.sync="check.readonly">readonly</checkbox></p>
	//               <p><checkbox :checked.sync="check.required">required</checkbox></p>
	//               <p><checkbox :checked.sync="check.clearButton">clear button</checkbox></p>
	//             </div>
	//           </button-group>
	//         </div>
	//         <bs-input name="textarea" label="Textarea" type="textarea" :icon="check.icon" :enter-submit="check.enterSubmit" no-validate></bs-input>
	//       </form>
	//     </div>
	//     <doc-code language="markup">
	//       <bs-input :value.sync="input"
	//         label="Username"
	//         help="Only allows lowercase letters and numbers."
	//         error="Insert username"
	//         placeholder="Username can't start with a number."
	//         pattern="^[a-z][a-z0-9]+$"
	//         :mask="mask"
	//         minlength="5"
	//         readonly
	//         required
	//         icon
	//       ></bs-input>
	//       <bs-input required label="Match value" type="password" :match="input"></bs-input>
	//       <bs-input label="Textarea" type="textarea" no-validate></bs-input>
	//     </doc-code>
	//     <doc-code language="javascript">
	//       mask: function (value) {
	//         // change to lowercase, remove first non-letter and all other unsupported characters
	//         return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/\W/g,'');
	//       }
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>value</p>
	//         <p><code>String</code></p>
	//         <p><code>''</code></p>
	//         <p>Input value. Use <code>:value.sync="value"</code></p>
	//       </div>
	//       <div>
	//         <p>match</p>
	//         <p><code>String</code></p>
	//         <p><code>''</code></p>
	//         <p>Matching value. Both have to be the same value.</p>
	//       </div>
	//       <div>
	//         <p>disabled</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>enterSubmit</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Submit when you press <code>Enter</code>. Not supported on type <code>textarea</code>.</p>
	//       </div>
	//       <div>
	//         <p>error</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Error message.</p>
	//       </div>
	//       <div>
	//         <p>help</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Help text behind the input</p>
	//       </div>
	//       <div>
	//         <p>hide-help</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>Only work with help and error.<br/>Hide the help if have to show any error message.</p>
	//       </div>
	//       <div>
	//         <p>icon</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>label</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Enable input label (name).</p>
	//       </div>
	//       <div>
	//         <p>lang</p>
	//         <p><code>String</code></p>
	//         <p>Browser language</p>
	//         <p><abbr title="ISO 639-1 code"><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>
	//       </div>
	//       <div>
	//         <p>mask</p>
	//         <p><code>Function</code></p>
	//         <p><code>null</code></p>
	//         <p>Mask function that receive and edit the value.</p>
	//       </div>
	//       <div>
	//         <p>maxlength</p>
	//         <p><code>Number</code></p>
	//         <p><code>null</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>minlength</p>
	//         <p><code>Number</code></p>
	//         <p><code>0</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>name</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>no-validate</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Disable validations (don't affect masking).</p>
	//       </div>
	//       <div>
	//         <p>onfocus</p>
	//         <p><code>Function</code></p>
	//         <p><code>null</code></p>
	//         <p>A callable function that trigger when focus the input.</p>
	//       </div>
	//       <div>
	//         <p>pattern</p>
	//         <p><code>String</code> or <code>Function</code></p>
	//         <p><code>null</code></p>
	//         <p>Validation pattern.</p>
	//       </div>
	//       <div>
	//         <p>placeholder</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>required</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code></p>
	//         <p><code>text</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>validation-delay</p>
	//         <p><code>Number</code></p>
	//         <p><code>250</code></p>
	//         <p></p>
	//       </div>
	//     </doc-options>
	//
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    bsInput: _Input2.default,
	    buttonGroup: _buttonGroup2.default,
	    checkbox: _Checkbox2.default
	  },
	  data: function data() {
	    return {
	      check: {
	        label: true
	      },
	      input: null,
	      match: null
	    };
	  },
	
	  methods: {
	    focus: function focus() {
	      alert('focus');
	    },
	    mask: function mask(value) {
	      return value.toLowerCase().replace(/^[^a-z]+/, '').replace(/\W/g, '');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(215)
	__vue_script__ = __webpack_require__(217)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(218)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-652ad7b9/Input.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(216);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-652ad7b9&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Input.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-652ad7b9&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.form-group[_v-652ad7b9] {\r\n  position: relative;\r\n}\r\nlabel~.close[_v-652ad7b9] {\r\n    top: 25px;\r\n}\r\n.close[_v-652ad7b9] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.has-feedback.has-success button.close[_v-652ad7b9],\r\n.has-feedback.has-error button.close[_v-652ad7b9] {\r\n  right:20px;\r\n}\r\n", "", {"version":3,"sources":["/./src/Input.vue?4efa8649"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6PA;EACA,mBAAA;CACA;AACA;IACA,UAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;;EAEA,WAAA;CACA","file":"Input.vue","sourcesContent":["<template>\r\n  <div class=\"form-group\" @click=\"focus()\" :class=\"{'has-feedback':icon,'has-error':valid===false,'has-success':valid===true,validate:!noValidate}\">\r\n    <label v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <textarea v-if=\"type=='textarea'\" class=\"form-control\" v-el:input v-model=\"value\"\r\n      :cols=\"cols\"\r\n      :rows=\"rows\"\r\n      :name=\"name\"\r\n      :readonly=\"readonly\"\r\n      :required=\"required\"\r\n      :disabled=\"disabled\"\r\n      :maxlength=\"maxlength\"\r\n      :placeholder=\"placeholder\"\r\n    ></textarea>\r\n    <template v-else>\r\n      <div v-if=\"slots.before||slots.after\" class=\"input-group\">\r\n        <slot name=\"before\"></slot>\r\n        <input class=\"form-control\" v-el:input v-model=\"value\"\r\n          :name=\"name\"\r\n          :type=\"type\"\r\n          :readonly=\"readonly\"\r\n          :required=\"required\"\r\n          :disabled=\"disabled\"\r\n          :maxlength=\"maxlength\"\r\n          :placeholder=\"placeholder\"\r\n          @keyup.enter=\"enterSubmit&&submit()\"\r\n        />\r\n        <slot name=\"after\"></slot>\r\n      </div>\r\n      <input v-else class=\"form-control\" v-el:input v-model=\"value\"\r\n        :name=\"name\"\r\n        :type=\"type\"\r\n        :readonly=\"readonly\"\r\n        :required=\"required\"\r\n        :disabled=\"disabled\"\r\n        :maxlength=\"maxlength\"\r\n        :placeholder=\"placeholder\"\r\n        @keyup.enter=\"enterSubmit&&submit()\"\r\n      />\r\n    </template>\r\n    <span v-if=\"clearButton && value\" class=\"close\" @click=\"value = ''\">&times;</span>\r\n    <span v-if=\"icon&&valid!==null\" class=\"glyphicon glyphicon-{{valid?'ok':'remove'}} form-control-feedback\" aria-hidden=\"true\"></span>\r\n    <div v-if=\"showHelp\" class=\"help-block\">{{help}}</div>\r\n    <div v-if=\"showError\" class=\"help-block with-errors\">{{errorText}}</div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\nimport translations from './translations.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\nexport default {\r\n  props: {\r\n    value: {\r\n      twoWay: true,\r\n      default: null\r\n    },\r\n    match: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    clearButton: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    enterSubmit: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    error: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    help: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    hideHelp: { // hide when have error\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: true\r\n    },\r\n    icon: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    label: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    lang: {\r\n      type: String,\r\n      default: navigator.language\r\n    },\r\n    mask: null,\r\n    maxlength: {\r\n      type: Number,\r\n      coerce: coerce.number,\r\n      default: null\r\n    },\r\n    minlength: {\r\n      type: Number,\r\n      coerce: coerce.number,\r\n      default: 0\r\n    },\r\n    name: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    noValidate: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    onfocus: null,\r\n    pattern: null,\r\n    placeholder: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    required: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    rows: {\r\n      type: Number,\r\n      coerce: coerce.number,\r\n      default: 3\r\n    },\r\n    type: {\r\n      type: String,\r\n      default: 'text'\r\n    },\r\n    validationDelay: {\r\n      type: Number,\r\n      coerce: coerce.number,\r\n      default: 250\r\n    }\r\n  },\r\n  data () {\r\n    return {\r\n      valid: null,\r\n      timeout: null\r\n    }\r\n  },\r\n  computed: {\r\n    slots () {\r\n      return this._slotContents || {}\r\n    },\r\n    bsForm () {\r\n      return true\r\n    },\r\n    input () {\r\n      return true\r\n    },\r\n    text () {\r\n      return translations(this.lang)\r\n    },\r\n    showHelp () {\r\n      return this.help && (!this.showError || !this.hideHelp)\r\n    },\r\n    showError () {\r\n      return this.error && this.valid===false\r\n    },\r\n    errorText () {\r\n      let value = this.value\r\n      let error = [this.error]\r\n      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')')\r\n      if (value && (value.length < this.minlength)) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')')\r\n      return error.join(' ')\r\n    }\r\n  },\r\n  watch: {\r\n    match (val) {\r\n      this.eval()\r\n    },\r\n    valid (val) {\r\n      if (this.$parent.eval) {\r\n        this.$parent.eval()\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    focus () {\r\n      this.$els.input.focus()\r\n    },\r\n    eval () {\r\n      let value = this.value || ''\r\n      if (this.mask instanceof Function) value = this.mask(value)\r\n      if (this.value !== value) this.value = value\r\n      if (this.timeout) clearTimeout(this.timeout)\r\n      if (this.noValidate) {\r\n        if (this.valid !== null) this.valid = null\r\n      } else {\r\n        this.timeout = setTimeout(() => {\r\n          this.valid = this.validate()\r\n          this.timeout = null\r\n        }, coerce.number(this.validationDelay, 250))\r\n      }\r\n    },\r\n    submit () {\r\n      if (this.$els.input.form) {\r\n        const invalids = $('.form-group.validate:not(.has-success)',this.$els.input.form)\r\n        if (invalids.length) {\r\n          invalids.find('input,textarea,select')[0].focus()\r\n        } else {\r\n          this.$els.input.form.submit()\r\n        }\r\n      }\r\n    },\r\n    validate () {\r\n      let value = (this.value || '').trim()\r\n      if (!value) { return !this.required }\r\n      if (this.match!==null && this.match !== value) { return false }\r\n      if (value.length < this.minlength) { return false }\r\n      let valid = true\r\n      if (this.$els.input.checkValidity && !this.$els.input.checkValidity()){ return false }\r\n      if (this.pattern instanceof Function) valid = this.pattern(this.value)\r\n      if (typeof this.pattern === 'string') {\r\n        let regex = new RegExp(this.pattern)\r\n        valid = regex.test(this.value)\r\n      }\r\n      return valid\r\n    }\r\n  },\r\n  ready () {\r\n    $(this.$els.input).on('change keypress keydown keyup', () => this.eval()).on('blur', () => {\r\n      if (!this.noValidate) { this.valid = this.validate() }\r\n    }).on('focus', (e) => {\r\n      if (this.onfocus instanceof Function) this.onfocus.call(this, e)\r\n    })\r\n  },\r\n  beforeDestroy () {\r\n    $(this.$els.input).off()\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.form-group {\r\n  position: relative;\r\n}\r\nlabel~.close {\r\n    top: 25px;\r\n}\r\n.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.has-feedback.has-success button.close,\r\n.has-feedback.has-error button.close {\r\n  right:20px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	var _translations = __webpack_require__(137);
	
	var _translations2 = _interopRequireDefault(_translations);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      twoWay: true,
	      default: null
	    },
	    match: {
	      type: String,
	      default: null
	    },
	    clearButton: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    enterSubmit: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    error: {
	      type: String,
	      default: null
	    },
	    help: {
	      type: String,
	      default: null
	    },
	    hideHelp: { // hide when have error
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    icon: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    label: {
	      type: String,
	      default: null
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    },
	    mask: null,
	    maxlength: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: null
	    },
	    minlength: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    noValidate: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    onfocus: null,
	    pattern: null,
	    placeholder: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    required: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    rows: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 3
	    },
	    type: {
	      type: String,
	      default: 'text'
	    },
	    validationDelay: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 250
	    }
	  },
	  data: function data() {
	    return {
	      valid: null,
	      timeout: null
	    };
	  },
	
	  computed: {
	    slots: function slots() {
	      return this._slotContents || {};
	    },
	    bsForm: function bsForm() {
	      return true;
	    },
	    input: function input() {
	      return true;
	    },
	    text: function text() {
	      return (0, _translations2.default)(this.lang);
	    },
	    showHelp: function showHelp() {
	      return this.help && (!this.showError || !this.hideHelp);
	    },
	    showError: function showError() {
	      return this.error && this.valid === false;
	    },
	    errorText: function errorText() {
	      var value = this.value;
	      var error = [this.error];
	      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')');
	      if (value && value.length < this.minlength) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')');
	      return error.join(' ');
	    }
	  },
	  watch: {
	    match: function match(val) {
	      this.eval();
	    },
	    valid: function valid(val) {
	      if (this.$parent.eval) {
	        this.$parent.eval();
	      }
	    }
	  },
	  methods: {
	    focus: function focus() {
	      this.$els.input.focus();
	    },
	    eval: function _eval() {
	      var _this = this;
	
	      var value = this.value || '';
	      if (this.mask instanceof Function) value = this.mask(value);
	      if (this.value !== value) this.value = value;
	      if (this.timeout) clearTimeout(this.timeout);
	      if (this.noValidate) {
	        if (this.valid !== null) this.valid = null;
	      } else {
	        this.timeout = setTimeout(function () {
	          _this.valid = _this.validate();
	          _this.timeout = null;
	        }, _utils.coerce.number(this.validationDelay, 250));
	      }
	    },
	    submit: function submit() {
	      if (this.$els.input.form) {
	        var invalids = (0, _NodeList2.default)('.form-group.validate:not(.has-success)', this.$els.input.form);
	        if (invalids.length) {
	          invalids.find('input,textarea,select')[0].focus();
	        } else {
	          this.$els.input.form.submit();
	        }
	      }
	    },
	    validate: function validate() {
	      var value = (this.value || '').trim();
	      if (!value) {
	        return !this.required;
	      }
	      if (this.match !== null && this.match !== value) {
	        return false;
	      }
	      if (value.length < this.minlength) {
	        return false;
	      }
	      var valid = true;
	      if (this.$els.input.checkValidity && !this.$els.input.checkValidity()) {
	        return false;
	      }
	      if (this.pattern instanceof Function) valid = this.pattern(this.value);
	      if (typeof this.pattern === 'string') {
	        var regex = new RegExp(this.pattern);
	        valid = regex.test(this.value);
	      }
	      return valid;
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    (0, _NodeList2.default)(this.$els.input).on('change keypress keydown keyup', function () {
	      return _this2.eval();
	    }).on('blur', function () {
	      if (!_this2.noValidate) {
	        _this2.valid = _this2.validate();
	      }
	    }).on('focus', function (e) {
	      if (_this2.onfocus instanceof Function) _this2.onfocus.call(_this2, e);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)(this.$els.input).off();
	  }
	};
	// </script>
	//
	// <style scoped>
	// .form-group {
	//   position: relative;
	// }
	// label~.close {
	//     top: 25px;
	// }
	// .close {
	//   position: absolute;
	//   top: 0;
	//   right: 0;
	//   z-index: 2;
	//   display: block;
	//   width: 34px;
	//   height: 34px;
	//   line-height: 34px;
	//   text-align: center;
	// }
	// .has-feedback.has-success button.close,
	// .has-feedback.has-error button.close {
	//   right:20px;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="form-group" @click="focus()" :class="{'has-feedback':icon,'has-error':valid===false,'has-success':valid===true,validate:!noValidate}">
	//     <label v-if="label" class="control-label">{{label}}</label>
	//     <textarea v-if="type=='textarea'" class="form-control" v-el:input v-model="value"
	//       :cols="cols"
	//       :rows="rows"
	//       :name="name"
	//       :readonly="readonly"
	//       :required="required"
	//       :disabled="disabled"
	//       :maxlength="maxlength"
	//       :placeholder="placeholder"
	//     ></textarea>
	//     <template v-else>
	//       <div v-if="slots.before||slots.after" class="input-group">
	//         <slot name="before"></slot>
	//         <input class="form-control" v-el:input v-model="value"
	//           :name="name"
	//           :type="type"
	//           :readonly="readonly"
	//           :required="required"
	//           :disabled="disabled"
	//           :maxlength="maxlength"
	//           :placeholder="placeholder"
	//           @keyup.enter="enterSubmit&&submit()"
	//         />
	//         <slot name="after"></slot>
	//       </div>
	//       <input v-else class="form-control" v-el:input v-model="value"
	//         :name="name"
	//         :type="type"
	//         :readonly="readonly"
	//         :required="required"
	//         :disabled="disabled"
	//         :maxlength="maxlength"
	//         :placeholder="placeholder"
	//         @keyup.enter="enterSubmit&&submit()"
	//       />
	//     </template>
	//     <span v-if="clearButton && value" class="close" @click="value = ''">&times;</span>
	//     <span v-if="icon&&valid!==null" class="glyphicon glyphicon-{{valid?'ok':'remove'}} form-control-feedback" aria-hidden="true"></span>
	//     <div v-if="showHelp" class="help-block">{{help}}</div>
	//     <div v-if="showError" class="help-block with-errors">{{errorText}}</div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"form-group\" @click=\"focus()\" :class=\"{'has-feedback':icon,'has-error':valid===false,'has-success':valid===true,validate:!noValidate}\" _v-652ad7b9=\"\">\n  <label v-if=\"label\" class=\"control-label\" _v-652ad7b9=\"\">{{label}}</label>\n  <textarea v-if=\"type=='textarea'\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :cols=\"cols\" :rows=\"rows\" :name=\"name\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" _v-652ad7b9=\"\"></textarea>\n  <template v-else=\"\">\n    <div v-if=\"slots.before||slots.after\" class=\"input-group\" _v-652ad7b9=\"\">\n      <slot name=\"before\" _v-652ad7b9=\"\"></slot>\n      <input class=\"form-control\" v-el:input=\"\" v-model=\"value\" :name=\"name\" :type=\"type\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @keyup.enter=\"enterSubmit&amp;&amp;submit()\" _v-652ad7b9=\"\">\n      <slot name=\"after\" _v-652ad7b9=\"\"></slot>\n    </div>\n    <input v-else=\"\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :name=\"name\" :type=\"type\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @keyup.enter=\"enterSubmit&amp;&amp;submit()\" _v-652ad7b9=\"\">\n  </template>\n  <span v-if=\"clearButton &amp;&amp; value\" class=\"close\" @click=\"value = ''\" _v-652ad7b9=\"\">×</span>\n  <span v-if=\"icon&amp;&amp;valid!==null\" class=\"glyphicon glyphicon-{{valid?'ok':'remove'}} form-control-feedback\" aria-hidden=\"true\" _v-652ad7b9=\"\"></span>\n  <div v-if=\"showHelp\" class=\"help-block\" _v-652ad7b9=\"\">{{help}}</div>\n  <div v-if=\"showError\" class=\"help-block with-errors\" _v-652ad7b9=\"\">{{errorText}}</div>\n</div>\n";

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"input\" name=\"Input\">\n  <div class=\"bs-example text-left\">\n    <form action=\".\" method=\"get\" accept-charset=\"utf-8\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <bs-input name=\"username\"\n            :disabled=\"check.disabled\"\n            :error=\"check.error && 'Insert user name'\"\n            help=\"Only allows lowercase letters and numbers.\"\n            :enter-submit=\"check.enterSubmit\"\n            :icon=\"check.icon\"\n            :label=\"check.label && 'User Name'\"\n            :mask=\"check.mask?mask:null\"\n            :minlength=\"check.minlength?5:0\"\n            pattern=\"^[a-z][a-z0-9]+$\"\n            :placeholder=\"check.placeholder && 'Username can\\'t start with a number.'\"\n            :readonly=\"check.readonly\"\n            :required=\"check.required\"\n            :clear-button=\"check.clearButton\"\n            :value.sync=\"input\"\n          ></bs-input>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <bs-input name=\"match\" required label=\"Match value\" type=\"password\" :match=\"input\" :icon=\"check.icon\" :enter-submit=\"check.enterSubmit\" help=\"Match the User Name\"></bs-input>\n        </div>\n      </div>\n      <div class=\"row\">\n        <button-group type=\"primary\" buttons=\"false\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n            <p><checkbox :checked.sync=\"check.label\">Label</checkbox></p>\n            <p><checkbox :checked.sync=\"check.placeholder\">placeholder</checkbox></p>\n            <p><checkbox :checked.sync=\"check.disabled\">disabled</checkbox></p>\n            <p><checkbox :checked.sync=\"check.error\">error</checkbox></p>\n            <p><checkbox :checked.sync=\"check.icon\">icon</checkbox></p>\n            <p><checkbox :checked.sync=\"check.enterSubmit\">enterSubmit</checkbox></p>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n            <p><checkbox :checked.sync=\"check.mask\">mask</checkbox></p>\n            <p><checkbox :checked.sync=\"check.minlength\">minlength=5</checkbox></p>\n            <p><checkbox :checked.sync=\"check.readonly\">readonly</checkbox></p>\n            <p><checkbox :checked.sync=\"check.required\">required</checkbox></p>\n            <p><checkbox :checked.sync=\"check.clearButton\">clear button</checkbox></p>\n          </div>\n        </button-group>\n      </div>\n      <bs-input name=\"textarea\" label=\"Textarea\" type=\"textarea\" :icon=\"check.icon\" :enter-submit=\"check.enterSubmit\" no-validate></bs-input>\n    </form>\n  </div>\n  <doc-code language=\"markup\">\n    <bs-input :value.sync=\"input\"\n      label=\"Username\"\n      help=\"Only allows lowercase letters and numbers.\"\n      error=\"Insert username\"\n      placeholder=\"Username can't start with a number.\"\n      pattern=\"^[a-z][a-z0-9]+$\"\n      :mask=\"mask\"\n      minlength=\"5\"\n      readonly\n      required\n      icon\n    ></bs-input>\n    <bs-input required label=\"Match value\" type=\"password\" :match=\"input\"></bs-input>\n    <bs-input label=\"Textarea\" type=\"textarea\" no-validate></bs-input>\n  </doc-code>\n  <doc-code language=\"javascript\">\n    mask: function (value) {\n      // change to lowercase, remove first non-letter and all other unsupported characters\n      return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/\\W/g,'');\n    }\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>value</p>\n      <p><code>String</code></p>\n      <p><code>''</code></p>\n      <p>Input value. Use <code>:value.sync=\"value\"</code></p>\n    </div>\n    <div>\n      <p>match</p>\n      <p><code>String</code></p>\n      <p><code>''</code></p>\n      <p>Matching value. Both have to be the same value.</p>\n    </div>\n    <div>\n      <p>disabled</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>enterSubmit</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p>Submit when you press <code>Enter</code>. Not supported on type <code>textarea</code>.</p>\n    </div>\n    <div>\n      <p>error</p>\n      <p><code>String</code></p>\n      <p><code>null</code></p>\n      <p>Error message.</p>\n    </div>\n    <div>\n      <p>help</p>\n      <p><code>String</code></p>\n      <p><code>null</code></p>\n      <p>Help text behind the input</p>\n    </div>\n    <div>\n      <p>hide-help</p>\n      <p><code>Boolean</code></p>\n      <p><code>true</code></p>\n      <p>Only work with help and error.<br/>Hide the help if have to show any error message.</p>\n    </div>\n    <div>\n      <p>icon</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>label</p>\n      <p><code>String</code></p>\n      <p><code>null</code></p>\n      <p>Enable input label (name).</p>\n    </div>\n    <div>\n      <p>lang</p>\n      <p><code>String</code></p>\n      <p>Browser language</p>\n      <p><abbr title=\"ISO 639-1 code\"><a href=\"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>\n    </div>\n    <div>\n      <p>mask</p>\n      <p><code>Function</code></p>\n      <p><code>null</code></p>\n      <p>Mask function that receive and edit the value.</p>\n    </div>\n    <div>\n      <p>maxlength</p>\n      <p><code>Number</code></p>\n      <p><code>null</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>minlength</p>\n      <p><code>Number</code></p>\n      <p><code>0</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>name</p>\n      <p><code>String</code></p>\n      <p><code>null</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>no-validate</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p>Disable validations (don't affect masking).</p>\n    </div>\n    <div>\n      <p>onfocus</p>\n      <p><code>Function</code></p>\n      <p><code>null</code></p>\n      <p>A callable function that trigger when focus the input.</p>\n    </div>\n    <div>\n      <p>pattern</p>\n      <p><code>String</code> or <code>Function</code></p>\n      <p><code>null</code></p>\n      <p>Validation pattern.</p>\n    </div>\n    <div>\n      <p>placeholder</p>\n      <p><code>String</code></p>\n      <p><code>null</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>required</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>type</p>\n      <p><code>String</code></p>\n      <p><code>text</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>validation-delay</p>\n      <p><code>Number</code></p>\n      <p><code>250</code></p>\n      <p></p>\n    </div>\n  </doc-options>\n\n</doc-section>\n";

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(221)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\modalDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(231)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7394cd3e/modalDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Modal = __webpack_require__(222);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="modal" name="Modal">
	//     <div class="bs-example">
	//       <button class="btn btn-default" @click="showModal = true">Show modal</button>
	//       <modal title="Modal title" :show.sync="showModal">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title">Modal <b>Title</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-success" @click="fadeModal = true">Fade modal</button>
	//       <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-primary" @click="zoomModal = true">Zoom modal</button>
	//       <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-default" @click="showCustomModal = true">Show custom modal</button>
	//       <modal :show.sync="showCustomModal" effect="fade" width="50%">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//         <div slot="modal-footer" class="modal-footer">
	//           <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
	//           <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
	//         </div>
	//       </modal>
	//       <button class="btn btn-warning" @click="largeModal = true">Large modal</button>
	//       <modal title="Large Modal" :show.sync="largeModal" large>
	//         <div slot="modal-body" class="modal-body">
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//         </div>
	//       </modal>
	//       <button class="btn btn-danger" @click="smallModal = true">Small modal</button>
	//       <modal title="Small Modal" :show.sync="smallModal" small>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat.
	//         </div>
	//       </modal>
	//     </div>
	//     <doc-code language="markup">
	//       <modal :show.sync="...">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title">Modal title</h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">...</div>
	//       </modal>
	//
	//       <modal title="Fade Modal" :show.sync="..." effect="fade" width="800">
	//         <div slot="modal-body" class="modal-body">...</div>
	//       </modal>
	//
	//       <modal title="Zoom Modal" :show.sync="..." effect="zoom" width="400">
	//         <div slot="modal-body" class="modal-body">...</div>
	//       </modal>
	//
	//       <modal :show.sync="showCustomModal" effect="fade" width="400">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title">
	//             <i>Custom</i> <code>Modal</code> <b>Title</b>
	//           </h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">...</div>
	//         <div slot="modal-footer" class="modal-footer">
	//           <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
	//           <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
	//         </div>
	//       </modal>
	//       <modal title="Large Modal" large :show.sync="...">
	//         <div slot="modal-body" class="modal-body">...</div>
	//       </modal>
	//       <modal title="Small Modal" small :show.sync="...">
	//         <div slot="modal-body" class="modal-body">...</div>
	//       </modal>
	//   </doc-code>
	//   <doc-options>
	//     <div>
	//       <p>title</p>
	//       <p><code>String</code></p>
	//       <p></p>
	//       <p>Title of the modal component.</p>
	//     </div>
	//     <div>
	//       <p>ok-text</p>
	//       <p><code>String</code></p>
	//       <p>Save changes</p>
	//       <p>Text for OK button</p>
	//     </div>
	//     <div>
	//       <p>cancel-text</p>
	//       <p><code>String</code></p>
	//       <p>Close</p>
	//       <p>Text for cancel button</p>
	//     </div>
	//     <div>
	//       <p>width</p>
	//       <p><code>Number, String or null</code></p>
	//       <p><code>null</code></p>
	//       <p>Pass a Number in pixels or a String with relational sizes ( e.g. '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</p>
	//     </div>
	//     <div>
	//       <p>callback</p>
	//       <p><code>Function</code></p>
	//       <p></p>
	//       <p>A callback Function when you click the modal primary button.</p>
	//     </div>
	//     <div>
	//       <p>large</p>
	//       <p><code>Boolean</code></p>
	//       <p><code>false</code></p>
	//       <p>Creates a large modal ( see boostrap's documentation for .modal-lg )</p>
	//     </div>
	//     <div>
	//       <p>small</p>
	//       <p><code>Boolean</code></p>
	//       <p><code>false</code></p>
	//       <p>Creates a small modal ( see boostrap's documentation for .modal-sm )</p>
	//     </div>
	//     <div>
	//       <p>backdrop</p>
	//       <p><code>Boolean</code></p>
	//       <p><code>true</code></p>
	//       <p>Enables/disables closing the modal by clicking on the backdrop.</p>
	//     </div>
	//   </doc-options>
	//   <h2>Usage</h2>
	//   <p>
	//     If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you
	//     need to put custom HTML or a custom footer, you can override the header or footer block by using
	//     <code>&lt;div slot="modal-title" class="modal-title"&gt;...&lt;/div&gt;</code> and
	//     <code>&lt;div slot="modal-footer" class="modal-footer"&gt;...&lt;/div&gt;</code>.
	//   </p>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    modal: _Modal2.default
	  },
	  data: function data() {
	    return {
	      showModal: false,
	      fadeModal: false,
	      zoomModal: false,
	      showCustomModal: false,
	      largeModal: false,
	      smallModal: false
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(223)
	__vue_script__ = __webpack_require__(225)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(230)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-fe7d5dc8/Modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(224);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.modal {\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n.modal.in {\r\n  background-color: rgba(0,0,0,0.5);\r\n}\r\n.modal.zoom .modal-dialog {\r\n  -webkit-transform: scale(0.1);\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n.modal.zoom.in .modal-dialog {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transform: translate3d(0, -300px, 0);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\r\n}\r\n", "", {"version":3,"sources":["/./src/Modal.vue?58bc6a21"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoIA;EACA,kCAAA;EAAA,0BAAA;CACA;AACA;EACA,kCAAA;CACA;AACA;EACA,8BAAA;EAGA,sBAAA;EACA,WAAA;EACA,WAAA;EACA,6BAAA;EAEA,qBAAA;CACA;AACA;EACA,4BAAA;EAGA,oBAAA;EACA,6CAAA;EACA,qCAAA;EACA,WAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\r\n  <div role=\"dialog\"\r\n    v-bind:class=\"{\r\n    'modal':true,\r\n    'fade':effect === 'fade',\r\n    'zoom':effect === 'zoom'\r\n    }\"\r\n    >\r\n    <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\r\n      v-bind:style=\"{width: optionalWidth}\">\r\n      <div class=\"modal-content\">\r\n        <slot name=\"modal-header\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\r\n            <h4 class=\"modal-title\" > \r\n              <slot name=\"title\">\r\n                {{title}}\r\n              </slot>\r\n            </h4>\r\n          </div>\r\n        </slot>\r\n        <slot name=\"modal-body\">\r\n          <div class=\"modal-body\"></div>\r\n        </slot>\r\n        <slot name=\"modal-footer\">\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" @click=\"close\">{{ cancelText }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"callback\">{{ okText }}</button>\r\n          </div>\r\n        </slot>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce, getScrollBarWidth} from './utils/utils.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\nexport default {\r\n  props: {\r\n    okText: {\r\n      type: String,\r\n      default: 'Save changes'\r\n    },\r\n    cancelText: {\r\n      type: String,\r\n      default: 'Close'\r\n    },\r\n    title: {\r\n      type: String,\r\n      default: ''\r\n    },\r\n    show: {\r\n      required: true,\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      twoWay: true\r\n    },\r\n    width: {\r\n      default: null\r\n    },\r\n    callback: {\r\n      type: Function,\r\n      default () {}\r\n    },\r\n    effect: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    backdrop: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: true\r\n    },\r\n    large: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    small: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    }\r\n  },\r\n  computed: {\r\n    optionalWidth () {\r\n      if (this.width === null) {\r\n        return null\r\n      } else if (Number.isInteger(this.width)) {\r\n        return this.width + 'px'\r\n      }\r\n      return this.width\r\n    }\r\n  },\r\n  watch: {\r\n    show (val) {\r\n      const el = this.$el\r\n      const body = document.body\r\n      const scrollBarWidth = getScrollBarWidth()\r\n      if (val) {\r\n        $(el).find('.modal-content').focus()\r\n        el.style.display = 'block'\r\n        setTimeout(() => $(el).addClass('in'), 0)\r\n        $(body).addClass('modal-open')\r\n        if (scrollBarWidth !== 0) {\r\n          body.style.paddingRight = scrollBarWidth + 'px'\r\n        }\r\n        if (this.backdrop) {\r\n          $(el).on('click', (e) => {\r\n            if (e.target === el) this.show = false\r\n          })\r\n        }\r\n      } else {\r\n        $(el).on('transitionend', () => {\r\n          $(el).off('click transitionend')\r\n          el.style.display = 'none'\r\n          body.style.paddingRight = '0'\r\n        }).removeClass('in')\r\n        $(body).removeClass('modal-open')\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    close () {\r\n      this.show = false\r\n    }\r\n  }\r\n}\r\n</script>\r\n<style>\r\n.modal {\r\n  transition: all 0.3s ease;\r\n}\r\n.modal.in {\r\n  background-color: rgba(0,0,0,0.5);\r\n}\r\n.modal.zoom .modal-dialog {\r\n  -webkit-transform: scale(0.1);\r\n  -moz-transform: scale(0.1);\r\n  -ms-transform: scale(0.1);\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  -moz-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n.modal.zoom.in .modal-dialog {\r\n  -webkit-transform: scale(1);\r\n  -moz-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transform: translate3d(0, -300px, 0);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(226);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _utils = __webpack_require__(75);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div role="dialog"
	//     v-bind:class="{
	//     'modal':true,
	//     'fade':effect === 'fade',
	//     'zoom':effect === 'zoom'
	//     }"
	//     >
	//     <div v-bind:class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document"
	//       v-bind:style="{width: optionalWidth}">
	//       <div class="modal-content">
	//         <slot name="modal-header">
	//           <div class="modal-header">
	//             <button type="button" class="close" @click="close"><span>&times;</span></button>
	//             <h4 class="modal-title" > 
	//               <slot name="title">
	//                 {{title}}
	//               </slot>
	//             </h4>
	//           </div>
	//         </slot>
	//         <slot name="modal-body">
	//           <div class="modal-body"></div>
	//         </slot>
	//         <slot name="modal-footer">
	//           <div class="modal-footer">
	//             <button type="button" class="btn btn-default" @click="close">{{ cancelText }}</button>
	//             <button type="button" class="btn btn-primary" @click="callback">{{ okText }}</button>
	//           </div>
	//         </slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    okText: {
	      type: String,
	      default: 'Save changes'
	    },
	    cancelText: {
	      type: String,
	      default: 'Close'
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    show: {
	      required: true,
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      twoWay: true
	    },
	    width: {
	      default: null
	    },
	    callback: {
	      type: Function,
	      default: function _default() {}
	    },
	    effect: {
	      type: String,
	      default: null
	    },
	    backdrop: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    large: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    small: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  computed: {
	    optionalWidth: function optionalWidth() {
	      if (this.width === null) {
	        return null;
	      } else if ((0, _isInteger2.default)(this.width)) {
	        return this.width + 'px';
	      }
	      return this.width;
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      var el = this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _utils.getScrollBarWidth)();
	      if (val) {
	        (0, _NodeList2.default)(el).find('.modal-content').focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          return (0, _NodeList2.default)(el).addClass('in');
	        }, 0);
	        (0, _NodeList2.default)(body).addClass('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        if (this.backdrop) {
	          (0, _NodeList2.default)(el).on('click', function (e) {
	            if (e.target === el) _this.show = false;
	          });
	        }
	      } else {
	        (0, _NodeList2.default)(el).on('transitionend', function () {
	          (0, _NodeList2.default)(el).off('click transitionend');
	          el.style.display = 'none';
	          body.style.paddingRight = '0';
	        }).removeClass('in');
	        (0, _NodeList2.default)(body).removeClass('modal-open');
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	// </script>
	// <style>
	// .modal {
	//   transition: all 0.3s ease;
	// }
	// .modal.in {
	//   background-color: rgba(0,0,0,0.5);
	// }
	// .modal.zoom .modal-dialog {
	//   -webkit-transform: scale(0.1);
	//   -moz-transform: scale(0.1);
	//   -ms-transform: scale(0.1);
	//   transform: scale(0.1);
	//   top: 300px;
	//   opacity: 0;
	//   -webkit-transition: all 0.3s;
	//   -moz-transition: all 0.3s;
	//   transition: all 0.3s;
	// }
	// .modal.zoom.in .modal-dialog {
	//   -webkit-transform: scale(1);
	//   -moz-transform: scale(1);
	//   -ms-transform: scale(1);
	//   transform: scale(1);
	//   -webkit-transform: translate3d(0, -300px, 0);
	//   transform: translate3d(0, -300px, 0);
	//   opacity: 1;
	// }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(227), __esModule: true };

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(228);
	module.exports = __webpack_require__(7).Number.isInteger;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(229)});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"dialog\"\n  v-bind:class=\"{\n  'modal':true,\n  'fade':effect === 'fade',\n  'zoom':effect === 'zoom'\n  }\"\n  >\n  <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n    v-bind:style=\"{width: optionalWidth}\">\n    <div class=\"modal-content\">\n      <slot name=\"modal-header\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n          <h4 class=\"modal-title\" > \n            <slot name=\"title\">\n              {{title}}\n            </slot>\n          </h4>\n        </div>\n      </slot>\n      <slot name=\"modal-body\">\n        <div class=\"modal-body\"></div>\n      </slot>\n      <slot name=\"modal-footer\">\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"close\">{{ cancelText }}</button>\n          <button type=\"button\" class=\"btn btn-primary\" @click=\"callback\">{{ okText }}</button>\n        </div>\n      </slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = "\n  <doc-section id=\"modal\" name=\"Modal\">\n    <div class=\"bs-example\">\n      <button class=\"btn btn-default\" @click=\"showModal = true\">Show modal</button>\n      <modal title=\"Modal title\" :show.sync=\"showModal\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-success\" @click=\"fadeModal = true\">Fade modal</button>\n      <modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-primary\" @click=\"zoomModal = true\">Zoom modal</button>\n      <modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-default\" @click=\"showCustomModal = true\">Show custom modal</button>\n      <modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"50%\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n        <div slot=\"modal-footer\" class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n      <button class=\"btn btn-warning\" @click=\"largeModal = true\">Large modal</button>\n      <modal title=\"Large Modal\" :show.sync=\"largeModal\" large>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </div>\n      </modal>\n      <button class=\"btn btn-danger\" @click=\"smallModal = true\">Small modal</button>\n      <modal title=\"Small Modal\" :show.sync=\"smallModal\" small>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat.\n        </div>\n      </modal>\n    </div>\n    <doc-code language=\"markup\">\n      <modal :show.sync=\"...\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal title</h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n      </modal>\n\n      <modal title=\"Fade Modal\" :show.sync=\"...\" effect=\"fade\" width=\"800\">\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n      </modal>\n\n      <modal title=\"Zoom Modal\" :show.sync=\"...\" effect=\"zoom\" width=\"400\">\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n      </modal>\n\n      <modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"400\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">\n            <i>Custom</i> <code>Modal</code> <b>Title</b>\n          </h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n        <div slot=\"modal-footer\" class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n      <modal title=\"Large Modal\" large :show.sync=\"...\">\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n      </modal>\n      <modal title=\"Small Modal\" small :show.sync=\"...\">\n        <div slot=\"modal-body\" class=\"modal-body\">...</div>\n      </modal>\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>title</p>\n      <p><code>String</code></p>\n      <p></p>\n      <p>Title of the modal component.</p>\n    </div>\n    <div>\n      <p>ok-text</p>\n      <p><code>String</code></p>\n      <p>Save changes</p>\n      <p>Text for OK button</p>\n    </div>\n    <div>\n      <p>cancel-text</p>\n      <p><code>String</code></p>\n      <p>Close</p>\n      <p>Text for cancel button</p>\n    </div>\n    <div>\n      <p>width</p>\n      <p><code>Number, String or null</code></p>\n      <p><code>null</code></p>\n      <p>Pass a Number in pixels or a String with relational sizes ( e.g. '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</p>\n    </div>\n    <div>\n      <p>callback</p>\n      <p><code>Function</code></p>\n      <p></p>\n      <p>A callback Function when you click the modal primary button.</p>\n    </div>\n    <div>\n      <p>large</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p>Creates a large modal ( see boostrap's documentation for .modal-lg )</p>\n    </div>\n    <div>\n      <p>small</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p>Creates a small modal ( see boostrap's documentation for .modal-sm )</p>\n    </div>\n    <div>\n      <p>backdrop</p>\n      <p><code>Boolean</code></p>\n      <p><code>true</code></p>\n      <p>Enables/disables closing the modal by clicking on the backdrop.</p>\n    </div>\n  </doc-options>\n  <h2>Usage</h2>\n  <p>\n    If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you\n    need to put custom HTML or a custom footer, you can override the header or footer block by using\n    <code>&lt;div slot=\"modal-title\" class=\"modal-title\"&gt;...&lt;/div&gt;</code> and\n    <code>&lt;div slot=\"modal-footer\" class=\"modal-footer\"&gt;...&lt;/div&gt;</code>.\n  </p>\n  </div>\n</template>";

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(233)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\popoverDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(239)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f2fdac94/popoverDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Popover = __webpack_require__(234);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="popover" name="Popover">
	//     <div class="bs-example">
	//       <popover v-for="place in placements" effect="fade" :content="text" :placement="place">
	//         <button class="btn btn-default">Popover on {{place}}</button>
	//       </popover>
	//       <hr>
	//       <h4>Title</h4>
	//       <popover v-for="place in placements" effect="fade" header title="Title" :content="text" :placement="place">
	//         <button class="btn btn-default">Popover on {{place}}</button>
	//       </popover>
	//       <hr>
	//       <h4>Trigger</h4>
	//       <p>
	//         <popover effect="scale" title="Title" :content="content" placement="top" trigger="hover">
	//           <button class="btn btn-default">Mouseenter</button>
	//         </popover>
	//         <popover effect="scale" title="Title" :content="text" placement="top" trigger="contextmenu">
	//           <button class="btn btn-default">Contextmenu (right click)</button>
	//         </popover>
	//       </p>
	//       <popover effect="scale" title="Title" :content="text" placement="bottom" trigger="focus">
	//         <input type="text" class="form-control" placeholder="Focus">
	//       </popover>
	//     </div>
	//     <doc-code language="markup">
	//       <popover effect="fade" placement="bottom" title="Title" content="content">
	//         <button class="btn btn-default">Popover on bottom</button>
	//       </popover>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>trigger</p>
	//         <p><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code> <code>contextmenu</code></p>
	//         <p><code>click</code></p>
	//         <p>How the popover is triggered.</p>
	//       </div>
	//       <div>
	//         <p>effect</p>
	//         <p><code>String</code>, one of <code>scale</code> <code>fade</code></p>
	//         <p><code>fade</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>title</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>content</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>header</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>true</code></p>
	//         <p>Whether to show the header.</p>
	//       </div>
	//       <div>
	//         <p>placement</p>
	//         <p><code>String</code>, one of <code>top</code>
	//         <code>left</code>
	//         <code>right</code>
	//         <code>bottom</code></p>
	//         <p></p>
	//         <p>How to position the popover.</p>
	//       </div>
	//     </doc-options>
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    popover: _Popover2.default
	  },
	  data: function data() {
	    return {
	      placements: ['top', 'left', 'right', 'bottom'],
	      text: 'Lorem ipsum dolor sit amet',
	      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod'
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(235)
	__vue_script__ = __webpack_require__(237)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(238)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2465bf54/Popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
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

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.scale-transition,\r\n.fade-transition {\r\n  display: block;\r\n}\r\n.scale-enter {\r\n  -webkit-animation:scale-in 0.15s ease-in;\r\n          animation:scale-in 0.15s ease-in;\r\n}\r\n.scale-leave {\r\n  -webkit-animation:scale-out 0.15s ease-out;\r\n          animation:scale-out 0.15s ease-out;\r\n}\r\n@-webkit-keyframes scale-in {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes scale-in {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes scale-out {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes scale-out {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n", "", {"version":3,"sources":["/./src/Popover.vue?012b97f4"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiCA;;EAEA,eAAA;CACA;AACA;EACA,yCAAA;UAAA,iCAAA;CACA;AACA;EACA,2CAAA;UAAA,mCAAA;CACA;AACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA","file":"Popover.vue","sourcesContent":["<template>\r\n  <span v-el:trigger>\r\n    <slot></slot>\r\n  </span>\r\n  <div v-el:popover v-show=\"show\"\r\n    :class=\"['popover',placement]\"\r\n    :transition=\"effect\"\r\n  >\r\n    <div class=\"arrow\"></div>\r\n    <h3 class=\"popover-title\" v-if=\"title\">\r\n      <slot name=\"title\">{{title}}</slot>\r\n    </h3>\r\n    <div class=\"popover-content\">\r\n      <slot name=\"content\">{{{content}}}</slot>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport PopoverMixin from './popoverMixins.js'\r\n\r\nexport default {\r\n  mixins: [PopoverMixin],\r\n  props: {\r\n    trigger: {\r\n      type: String,\r\n      default: 'click'\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.scale-transition,\r\n.fade-transition {\r\n  display: block;\r\n}\r\n.scale-enter {\r\n  animation:scale-in 0.15s ease-in;\r\n}\r\n.scale-leave {\r\n  animation:scale-out 0.15s ease-out;\r\n}\r\n@keyframes scale-in {\r\n  0% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes scale-out {\r\n  0% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(148);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    }
	  }
	};
	// </script>
	//
	// <style>
	// .scale-transition,
	// .fade-transition {
	//   display: block;
	// }
	// .scale-enter {
	//   animation:scale-in 0.15s ease-in;
	// }
	// .scale-leave {
	//   animation:scale-out 0.15s ease-out;
	// }
	// @keyframes scale-in {
	//   0% {
	//     transform: scale(0);
	//     opacity: 0;
	//   }
	//   100% {
	//     transform: scale(1);
	//     opacity: 1;
	//   }
	// }
	// @keyframes scale-out {
	//   0% {
	//     transform: scale(1);
	//     opacity: 1;
	//   }
	//   100% {
	//     transform: scale(0);
	//     opacity: 0;
	//   }
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <span v-el:trigger>
	//     <slot></slot>
	//   </span>
	//   <div v-el:popover v-show="show"
	//     :class="['popover',placement]"
	//     :transition="effect"
	//   >
	//     <div class="arrow"></div>
	//     <h3 class="popover-title" v-if="title">
	//       <slot name="title">{{title}}</slot>
	//     </h3>
	//     <div class="popover-content">
	//       <slot name="content">{{{content}}}</slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot></slot>\n</span>\n<div v-el:popover v-show=\"show\"\n  :class=\"['popover',placement]\"\n  :transition=\"effect\"\n>\n  <div class=\"arrow\"></div>\n  <h3 class=\"popover-title\" v-if=\"title\">\n    <slot name=\"title\">{{title}}</slot>\n  </h3>\n  <div class=\"popover-content\">\n    <slot name=\"content\">{{{content}}}</slot>\n  </div>\n</div>\n";

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"popover\" name=\"Popover\">\n  <div class=\"bs-example\">\n    <popover v-for=\"place in placements\" effect=\"fade\" :content=\"text\" :placement=\"place\">\n      <button class=\"btn btn-default\">Popover on {{place}}</button>\n    </popover>\n    <hr>\n    <h4>Title</h4>\n    <popover v-for=\"place in placements\" effect=\"fade\" header title=\"Title\" :content=\"text\" :placement=\"place\">\n      <button class=\"btn btn-default\">Popover on {{place}}</button>\n    </popover>\n    <hr>\n    <h4>Trigger</h4>\n    <p>\n      <popover effect=\"scale\" title=\"Title\" :content=\"content\" placement=\"top\" trigger=\"hover\">\n        <button class=\"btn btn-default\">Mouseenter</button>\n      </popover>\n      <popover effect=\"scale\" title=\"Title\" :content=\"text\" placement=\"top\" trigger=\"contextmenu\">\n        <button class=\"btn btn-default\">Contextmenu (right click)</button>\n      </popover>\n    </p>\n    <popover effect=\"scale\" title=\"Title\" :content=\"text\" placement=\"bottom\" trigger=\"focus\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n    </popover>\n  </div>\n  <doc-code language=\"markup\">\n    <popover effect=\"fade\" placement=\"bottom\" title=\"Title\" content=\"content\">\n      <button class=\"btn btn-default\">Popover on bottom</button>\n    </popover>\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>trigger</p>\n      <p><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code> <code>contextmenu</code></p>\n      <p><code>click</code></p>\n      <p>How the popover is triggered.</p>\n    </div>\n    <div>\n      <p>effect</p>\n      <p><code>String</code>, one of <code>scale</code> <code>fade</code></p>\n      <p><code>fade</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>title</p>\n      <p><code>String</code></p>\n      <p></p>\n      <p></p>\n    </div>\n    <div>\n      <p>content</p>\n      <p><code>String</code></p>\n      <p></p>\n      <p></p>\n    </div>\n    <div>\n      <p>header</p>\n      <p><code>Boolean</code></p>\n      <p><code>true</code></p>\n      <p>Whether to show the header.</p>\n    </div>\n    <div>\n      <p>placement</p>\n      <p><code>String</code>, one of <code>top</code>\n      <code>left</code>\n      <code>right</code>\n      <code>bottom</code></p>\n      <p></p>\n      <p>How to position the popover.</p>\n    </div>\n  </doc-options>\n</doc-section>\n";

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(241)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\progressbar-docs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(245)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-358fa89c/progressbar-docs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Progressbar = __webpack_require__(242);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="progressbar" name="Progressbar">
	//     <div class="bs-example">
	//       <h4>Static</h4>
	//       <div class="row">
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar now="20" type="success"></progressbar>
	//           </div>
	//         </div>
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar now="40" type="info"></progressbar>
	//           </div>
	//         </div>
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar now="60" type="primary"></progressbar>
	//           </div>
	//         </div>
	//       </div>
	//       <hr/>
	//       <h4>Dynamic <button type="button" class="btn btn-default" @click="dynamicClick">Randomize</button></h4>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[0]" type="info"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[1]" type="warning"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[2]" type="danger"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[3]" type="success" striped></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[4]" type="success" striped animated></progressbar>
	//       </div>
	//       <hr/>
	//       <h4>Stacked <button type="button" class="btn btn-default" @click="stackedClick">Randomize</button></h4>
	//       <div class="progress">
	//         <progressbar :now="stackedData[0]" label type="warning" striped></progressbar>
	//         <progressbar :now="stackedData[1]" label type="success" ></progressbar>
	//         <progressbar :now="stackedData[2]" label type="danger"></progressbar>
	//         <progressbar :now="stackedData[3]" label type="primary" striped animated></progressbar>
	//       </div>
	//
	//     </div>
	//     <doc-code language="markup">
	//       Stacked:
	//       <div class="progress">
	//         <progressbar now="" label type="warning" striped></progressbar>
	//         <progressbar now="" label type="success" ></progressbar>
	//         <progressbar now="" label type="danger"></progressbar>
	//         <progressbar now="" label type="primary" striped animated></progressbar>
	//       </div>
	//       Single:
	//       <div class="progress">
	//         <progressbar now="" label type="warning" striped></progressbar>
	//       </div>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>now</p>
	//         <p><code>Number</code></p>
	//         <p></p>
	//         <p>The current value of progress completed. Required.</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Style type. Possible values are 'success', 'warning' etc.</p>
	//       </div>
	//       <div>
	//         <p>label</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>Whether to show the label.</p>
	//       </div>
	//       <div>
	//         <p>striped</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Whether the progressbar has striped effect or not.</p>
	//       </div>
	//     </doc-options>
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    progressbar: _Progressbar2.default
	  },
	  data: function data() {
	    return {
	      dynamicData: [10, 30, 50, 70, 90],
	      stackedData: [10, 20, 30, 40]
	    };
	  },
	
	  methods: {
	    dynamicClick: function dynamicClick() {
	      this.dynamicData = this.dynamicData.map(function () {
	        return Math.floor(Math.random() * 100);
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
	// </script>

	/* generated by vue-loader */

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(243)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Progressbar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(244)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-68aa3375/Progressbar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	exports.default = {
	  props: {
	    now: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      required: true
	    },
	    label: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String
	    },
	    striped: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    animated: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div role="progressbar" 
	//     :class="['progress-bar',{
	//       'progress-bar-success':type == 'success',
	//       'progress-bar-warning':type == 'warning',
	//       'progress-bar-info':type == 'info',
	//       'progress-bar-danger':type == 'danger',
	//       'progress-bar-striped':striped,
	//       'active':animated
	//     }]"
	//     :style="{width: now + '%'}"
	//   >
	//     {{label ? now + '%' : ''}}
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"progressbar\" \n  :class=\"['progress-bar',{\n    'progress-bar-success':type == 'success',\n    'progress-bar-warning':type == 'warning',\n    'progress-bar-info':type == 'info',\n    'progress-bar-danger':type == 'danger',\n    'progress-bar-striped':striped,\n    'active':animated\n  }]\"\n  :style=\"{width: now + '%'}\"\n>\n  {{label ? now + '%' : ''}}\n</div>\n";

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"progressbar\" name=\"Progressbar\">\n  <div class=\"bs-example\">\n    <h4>Static</h4>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"progress\">\n          <progressbar now=\"20\" type=\"success\"></progressbar>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"progress\">\n          <progressbar now=\"40\" type=\"info\"></progressbar>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"progress\">\n          <progressbar now=\"60\" type=\"primary\"></progressbar>\n        </div>\n      </div>\n    </div>\n    <hr/>\n    <h4>Dynamic <button type=\"button\" class=\"btn btn-default\" @click=\"dynamicClick\">Randomize</button></h4>\n    <div class=\"progress\">\n      <progressbar :now=\"dynamicData[0]\" type=\"info\"></progressbar>\n    </div>\n    <div class=\"progress\">\n      <progressbar :now=\"dynamicData[1]\" type=\"warning\"></progressbar>\n    </div>\n    <div class=\"progress\">\n      <progressbar :now=\"dynamicData[2]\" type=\"danger\"></progressbar>\n    </div>\n    <div class=\"progress\">\n      <progressbar :now=\"dynamicData[3]\" type=\"success\" striped></progressbar>\n    </div>\n    <div class=\"progress\">\n      <progressbar :now=\"dynamicData[4]\" type=\"success\" striped animated></progressbar>\n    </div>\n    <hr/>\n    <h4>Stacked <button type=\"button\" class=\"btn btn-default\" @click=\"stackedClick\">Randomize</button></h4>\n    <div class=\"progress\">\n      <progressbar :now=\"stackedData[0]\" label type=\"warning\" striped></progressbar>\n      <progressbar :now=\"stackedData[1]\" label type=\"success\" ></progressbar>\n      <progressbar :now=\"stackedData[2]\" label type=\"danger\"></progressbar>\n      <progressbar :now=\"stackedData[3]\" label type=\"primary\" striped animated></progressbar>\n    </div>\n\n  </div>\n  <doc-code language=\"markup\">\n    Stacked:\n    <div class=\"progress\">\n      <progressbar now=\"\" label type=\"warning\" striped></progressbar>\n      <progressbar now=\"\" label type=\"success\" ></progressbar>\n      <progressbar now=\"\" label type=\"danger\"></progressbar>\n      <progressbar now=\"\" label type=\"primary\" striped animated></progressbar>\n    </div>\n    Single:\n    <div class=\"progress\">\n      <progressbar now=\"\" label type=\"warning\" striped></progressbar>\n    </div>\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>now</p>\n      <p><code>Number</code></p>\n      <p></p>\n      <p>The current value of progress completed. Required.</p>\n    </div>\n    <div>\n      <p>type</p>\n      <p><code>String</code></p>\n      <p></p>\n      <p>Style type. Possible values are 'success', 'warning' etc.</p>\n    </div>\n    <div>\n      <p>label</p>\n      <p><code>Boolean</code></p>\n      <p>false</p>\n      <p>Whether to show the label.</p>\n    </div>\n    <div>\n      <p>striped</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p>Whether the progressbar has striped effect or not.</p>\n    </div>\n  </doc-options>\n</doc-section>\n";

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(247)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\radioDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(248)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0f85b88c/radioDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Radio = __webpack_require__(174);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="radio" name="Radio">
	//     <div class="bs-example">
	//       <h4>Radio</h4>
	//       <radio :checked.sync="radioValue" value="one">One</radio>
	//       <radio :checked.sync="radioValue" value="two" type="danger" disabled>Two (disabled)</radio>
	//       <radio :checked.sync="radioValue" value="two" type="warning" readonly>Two (readonly)</radio>
	//       <radio :checked.sync="radioValue" value="two" type="success">Two</radio>
	//       <hr>
	//       <h4>Radio Button (Single buttons)</h4>
	//       <radio button :checked.sync="radioValue" value="three" type="primary">Three</radio>
	//       <radio button :checked.sync="radioValue" value="four" type="info" disabled>Four (disabled)</radio>
	//       <radio button :checked.sync="radioValue" value="four" type="info" readonly>Four (readonly)</radio>
	//       <radio button :checked.sync="radioValue" value="four" type="info">Four</radio>
	//       <p><pre>Radio value: {{radioValue | json}}</pre></p>
	//     </div>
	//     <doc-code language="markup">
	//       <radio :checked.sync="radioValue" value="one">One</radio>
	//       <radio :checked.sync="radioValue" value="two" type="primary">Two</radio>
	//       <radio button :checked.sync="radioValue" value="three" type="danger">Three</radio>
	//       <radio button :checked.sync="radioValue" value="four" type="info">Four</radio>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>checked</p>
	//         <p><code>Number</code> or <code>String</code></p>
	//         <p></p>
	//         <p>Handle the selected value.</p>
	//       </div>
	//       <div>
	//         <p>value</p>
	//         <p><code>Number</code> or <code>String</code></p>
	//         <p></p>
	//         <p>Value to return if the radio item is selected.</p>
	//       </div>
	//       <div>
	//         <p>type</p>
	//         <p><code>String</code>, one of <code>default</code>
	//         <code>primary</code>
	//         <code>danger</code>
	//         <code>info</code>
	//         <code>warning</code>
	//         <code>success</code></p>
	//         <p><code>default</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>button</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>Button style.</p>
	//       </div>
	//     </doc-options>
	//     <p>See <a href="#button-group">Button Group</a> for more options.</p>
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    radio: _Radio2.default
	  },
	  data: function data() {
	    return {
	      radioValue: null
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"radio\" name=\"Radio\">\n  <div class=\"bs-example\">\n    <h4>Radio</h4>\n    <radio :checked.sync=\"radioValue\" value=\"one\">One</radio>\n    <radio :checked.sync=\"radioValue\" value=\"two\" type=\"danger\" disabled>Two (disabled)</radio>\n    <radio :checked.sync=\"radioValue\" value=\"two\" type=\"warning\" readonly>Two (readonly)</radio>\n    <radio :checked.sync=\"radioValue\" value=\"two\" type=\"success\">Two</radio>\n    <hr>\n    <h4>Radio Button (Single buttons)</h4>\n    <radio button :checked.sync=\"radioValue\" value=\"three\" type=\"primary\">Three</radio>\n    <radio button :checked.sync=\"radioValue\" value=\"four\" type=\"info\" disabled>Four (disabled)</radio>\n    <radio button :checked.sync=\"radioValue\" value=\"four\" type=\"info\" readonly>Four (readonly)</radio>\n    <radio button :checked.sync=\"radioValue\" value=\"four\" type=\"info\">Four</radio>\n    <p><pre>Radio value: {{radioValue | json}}</pre></p>\n  </div>\n  <doc-code language=\"markup\">\n    <radio :checked.sync=\"radioValue\" value=\"one\">One</radio>\n    <radio :checked.sync=\"radioValue\" value=\"two\" type=\"primary\">Two</radio>\n    <radio button :checked.sync=\"radioValue\" value=\"three\" type=\"danger\">Three</radio>\n    <radio button :checked.sync=\"radioValue\" value=\"four\" type=\"info\">Four</radio>\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>checked</p>\n      <p><code>Number</code> or <code>String</code></p>\n      <p></p>\n      <p>Handle the selected value.</p>\n    </div>\n    <div>\n      <p>value</p>\n      <p><code>Number</code> or <code>String</code></p>\n      <p></p>\n      <p>Value to return if the radio item is selected.</p>\n    </div>\n    <div>\n      <p>type</p>\n      <p><code>String</code>, one of <code>default</code>\n      <code>primary</code>\n      <code>danger</code>\n      <code>info</code>\n      <code>warning</code>\n      <code>success</code></p>\n      <p><code>default</code></p>\n      <p></p>\n    </div>\n    <div>\n      <p>button</p>\n      <p><code>Boolean</code></p>\n      <p>false</p>\n      <p>Button style.</p>\n    </div>\n  </doc-options>\n  <p>See <a href=\"#button-group\">Button Group</a> for more options.</p>\n</doc-section>\n";

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(250)
	__vue_script__ = __webpack_require__(252)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\selectDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(253)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9e6117de/selectDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(251);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./selectDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./selectDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.checkbox>label:not(:first-child) {\r\n  margin-left: 15px;\r\n}\r\n", "", {"version":3,"sources":["/./docs/example/selectDocs.vue?2b7e150c"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiLA;EACA,kBAAA;CACA","file":"selectDocs.vue","sourcesContent":["<template>\r\n  <doc-section id=\"select\" name=\"Select\">\r\n    <p>Based in a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.</p>\r\n    <div class=\"bs-example\">\r\n      <h4>Select with options:</h4>\r\n      <p><pre>Selected data : {{show(single)}}</pre></p>\r\n      <v-select :value.sync=\"single\">\r\n        <v-option value=\"apple\">Apple</v-option>\r\n        <v-option value=\"banana\">Banana</v-option>\r\n        <v-option value=\"cherry\">Cherry</v-option>\r\n        <v-option value=\"orange\">Orange</v-option>\r\n        <v-option value=\"grape\">Grape</v-option>\r\n      </v-select>\r\n      <hr/>\r\n      <h4>Test options:</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n          <p><pre>Normal select data: {{show(select.normal)}}</pre></p>\r\n          <form action=\"./#select\" method=\"get\">\r\n            <v-select :options=\"select.options\" :value.sync=\"select.normal\" name=\"animal'\" :search=\"select.search\" :justified=\"select.justified\"\r\n              :required=\"select.required\" :clear-button=\"select.clearButton\" :disabled=\"select.disabled\"\r\n            ></v-select>\r\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n          <p><pre>Multiple select data : {{show(select.multiple)}}</pre></p>\r\n          <form action=\"./#select\" method=\"get\">\r\n            <v-select :options=\"select.options\" :value.sync=\"select.multiple\" name=\"animals[]\" :search=\"select.search\" :justified=\"select.justified\"\r\n              multiple :required=\"select.required\" :clear-button=\"select.clearButton\"\r\n              :close-on-select=\"select.closeOnSelect\" :limit=\"select.limit?3:1024\" :disabled=\"select.disabled\"\r\n            ></v-select>\r\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <button-group type=\"primary\" buttons=\"false\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n            <p><checkbox :checked.sync=\"select.disabled\">Disabled</checkbox></p>\r\n            <p><checkbox :checked.sync=\"select.search\">Search</checkbox></p>\r\n            <p><checkbox :checked.sync=\"select.justified\">Justified</checkbox></p>\r\n            <p><checkbox :checked.sync=\"select.clearButton\">Clear Button</checkbox></p>\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n            <p><checkbox :checked.sync=\"select.required\">Required (empty value if noting selected)</checkbox></p>\r\n            <p>\r\n              Multiple:\r\n              <checkbox v-if=\"select.multiple\" :checked.sync=\"select.limit\">Limit (e.g. 3)</checkbox>\r\n              <checkbox v-if=\"select.multiple\" :checked.sync=\"select.closeOnSelect\">Close on Select</checkbox>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </button-group>\r\n    </div>\r\n    <doc-code language=\"markup\">\r\n      <v-select>\r\n        <v-option value=\"apple\">Apple</v-option>\r\n        <v-option value=\"banana\">Banana</v-option>\r\n        <v-option value=\"cherry\">Cherry</v-option>\r\n        <v-option value=\"orange\">Orange</v-option>\r\n        <v-option value=\"grape\">Grape</v-option>\r\n      </v-select>\r\n      <form action=\"./#select\" method=\"get\">\r\n        <v-select :value.sync=\"select.value\" :options=\"select.options\"\r\n          multiple name=\"animals[]\" limit=\"3\"\r\n          search justified required disabled\r\n          clear-button close-on-select\r\n        ></v-select>\r\n        <button type=\"submit\" class=\"btn btn-default\">Submit form</button>\r\n      </form>\r\n    </doc-code>\r\n    <doc-code language=\"javascript\">\r\n      options: [\r\n        {value: 1, label: 'Cat'},\r\n        {value: 2, label: 'Cow'},\r\n        {value: 3, label: 'Dog'},\r\n        {value: 4, label: 'Elephant'},\r\n        {value: 5, label: 'Fish'},\r\n        {value: 6, label: 'Lion'},\r\n        {value: 7, label: 'Tiger'},\r\n        {value: 8, label: 'Turtle'}\r\n      ]\r\n    </doc-code>\r\n\r\n    <hr />\r\n    <h4>Ajax data and parent dependency:</h4>\r\n    <p>The second element has inheritance. Enable when the first get some value and the ajax return values.</p>\r\n    <v-select url=\"docs/data.json\" :value.sync=\"ajax.value\" clear-button v-ref:ajax></v-select>\r\n    <v-select url=\"docs/data.json\" multiple :parent=\"ajax.value\"></v-select>\r\n    <doc-code language=\"markup\">\r\n      <v-select url=\"docs/data.json\" :value.sync=\"ajax.value\" clear-button></v-select>\r\n      <v-select url=\"docs/data.json\" multiple :parent=\"ajax.value\"></v-select>\r\n    </doc-code>\r\n    <p>Ajax response:</p>\r\n    <doc-code language=\"markup\"><span v-html=\"$refs.ajax.options|json\"></span></doc-code>\r\n\r\n    <doc-options name=\"Other\">\r\n      <div>\r\n        <p>min-search</p>\r\n        <p><code>Number</code></p>\r\n        <p><code>0</code></p>\r\n        <p>If defined, the searchbox is disabled if are less than the minimum value you set.</p>\r\n      </div>\r\n      <div>\r\n        <p>lang</p>\r\n        <p><code>String</code></p>\r\n        <p>Browser language</p>\r\n        <p><abbr title=\"ISO 639-1 code\"><a href=\"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>\r\n      </div>\r\n      <div>\r\n        <p>placeholder</p>\r\n        <p><code>String</code></p>\r\n        <p>Nothing Selected</p>\r\n        <p></p>\r\n      </div>\r\n      <div>\r\n        <p>search-text</p>\r\n        <p><code>String</code></p>\r\n        <p></p>\r\n        <p></p>\r\n      </div>\r\n    </doc-options>\r\n  </doc-section>\r\n</template>\r\n\r\n<script>\r\nimport docSection from './docSection.vue'\r\nimport docOptions from './docOptions.vue'\r\nimport docCode from './docCode.vue'\r\nimport buttonGroup from 'src/buttonGroup.vue'\r\nimport checkbox from 'src/Checkbox.vue'\r\nimport vSelect from 'src/Select.vue'\r\nimport vOption from 'src/Option.vue'\r\n\r\nexport default {\r\n  components: {\r\n    docSection,\r\n    docOptions,\r\n    docCode,\r\n    buttonGroup,\r\n    checkbox,\r\n    vSelect,\r\n    vOption\r\n  },\r\n  data () {\r\n    return {\r\n      select: {\r\n        options: [\r\n          {value: 1, label: 'Cat'},\r\n          {value: 2, label: 'Cow'},\r\n          {value: 3, label: 'Dog'},\r\n          {value: 4, label: 'Elephant'},\r\n          {value: 5, label: 'Fish'},\r\n          {value: 6, label: 'Lion'},\r\n          {value: 7, label: 'Tiger'},\r\n          {value: 8, label: 'Turtle'}\r\n        ],\r\n        justified: true,\r\n        search: true\r\n      },\r\n      ajax: {\r\n        value:null\r\n      },\r\n      single: []\r\n    }\r\n  },\r\n  methods: {\r\n    show (value) {\r\n      return value instanceof Array ? value.join(', ') : value\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.checkbox>label:not(:first-child) {\r\n  margin-left: 15px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _buttonGroup = __webpack_require__(171);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Checkbox = __webpack_require__(108);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Select = __webpack_require__(118);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(203);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    buttonGroup: _buttonGroup2.default,
	    checkbox: _Checkbox2.default,
	    vSelect: _Select2.default,
	    vOption: _Option2.default
	  },
	  data: function data() {
	    return {
	      select: {
	        options: [{ value: 1, label: 'Cat' }, { value: 2, label: 'Cow' }, { value: 3, label: 'Dog' }, { value: 4, label: 'Elephant' }, { value: 5, label: 'Fish' }, { value: 6, label: 'Lion' }, { value: 7, label: 'Tiger' }, { value: 8, label: 'Turtle' }],
	        justified: true,
	        search: true
	      },
	      ajax: {
	        value: null
	      },
	      single: []
	    };
	  },
	
	  methods: {
	    show: function show(value) {
	      return value instanceof Array ? value.join(', ') : value;
	    }
	  }
	};
	// </script>
	//
	// <style>
	// .checkbox>label:not(:first-child) {
	//   margin-left: 15px;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <doc-section id="select" name="Select">
	//     <p>Based in a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.</p>
	//     <div class="bs-example">
	//       <h4>Select with options:</h4>
	//       <p><pre>Selected data : {{show(single)}}</pre></p>
	//       <v-select :value.sync="single">
	//         <v-option value="apple">Apple</v-option>
	//         <v-option value="banana">Banana</v-option>
	//         <v-option value="cherry">Cherry</v-option>
	//         <v-option value="orange">Orange</v-option>
	//         <v-option value="grape">Grape</v-option>
	//       </v-select>
	//       <hr/>
	//       <h4>Test options:</h4>
	//       <div class="row">
	//         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
	//           <p><pre>Normal select data: {{show(select.normal)}}</pre></p>
	//           <form action="./#select" method="get">
	//             <v-select :options="select.options" :value.sync="select.normal" name="animal'" :search="select.search" :justified="select.justified"
	//               :required="select.required" :clear-button="select.clearButton" :disabled="select.disabled"
	//             ></v-select>
	//             <button type="submit" class="btn btn-default">Submit</button>
	//           </form>
	//         </div>
	//         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
	//           <p><pre>Multiple select data : {{show(select.multiple)}}</pre></p>
	//           <form action="./#select" method="get">
	//             <v-select :options="select.options" :value.sync="select.multiple" name="animals[]" :search="select.search" :justified="select.justified"
	//               multiple :required="select.required" :clear-button="select.clearButton"
	//               :close-on-select="select.closeOnSelect" :limit="select.limit?3:1024" :disabled="select.disabled"
	//             ></v-select>
	//             <button type="submit" class="btn btn-default">Submit</button>
	//           </form>
	//         </div>
	//       </div>
	//       <br/>
	//       <button-group type="primary" buttons="false">
	//         <div class="row">
	//           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
	//             <p><checkbox :checked.sync="select.disabled">Disabled</checkbox></p>
	//             <p><checkbox :checked.sync="select.search">Search</checkbox></p>
	//             <p><checkbox :checked.sync="select.justified">Justified</checkbox></p>
	//             <p><checkbox :checked.sync="select.clearButton">Clear Button</checkbox></p>
	//           </div>
	//           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
	//             <p><checkbox :checked.sync="select.required">Required (empty value if noting selected)</checkbox></p>
	//             <p>
	//               Multiple:
	//               <checkbox v-if="select.multiple" :checked.sync="select.limit">Limit (e.g. 3)</checkbox>
	//               <checkbox v-if="select.multiple" :checked.sync="select.closeOnSelect">Close on Select</checkbox>
	//             </p>
	//           </div>
	//         </div>
	//       </button-group>
	//     </div>
	//     <doc-code language="markup">
	//       <v-select>
	//         <v-option value="apple">Apple</v-option>
	//         <v-option value="banana">Banana</v-option>
	//         <v-option value="cherry">Cherry</v-option>
	//         <v-option value="orange">Orange</v-option>
	//         <v-option value="grape">Grape</v-option>
	//       </v-select>
	//       <form action="./#select" method="get">
	//         <v-select :value.sync="select.value" :options="select.options"
	//           multiple name="animals[]" limit="3"
	//           search justified required disabled
	//           clear-button close-on-select
	//         ></v-select>
	//         <button type="submit" class="btn btn-default">Submit form</button>
	//       </form>
	//     </doc-code>
	//     <doc-code language="javascript">
	//       options: [
	//         {value: 1, label: 'Cat'},
	//         {value: 2, label: 'Cow'},
	//         {value: 3, label: 'Dog'},
	//         {value: 4, label: 'Elephant'},
	//         {value: 5, label: 'Fish'},
	//         {value: 6, label: 'Lion'},
	//         {value: 7, label: 'Tiger'},
	//         {value: 8, label: 'Turtle'}
	//       ]
	//     </doc-code>
	//
	//     <hr />
	//     <h4>Ajax data and parent dependency:</h4>
	//     <p>The second element has inheritance. Enable when the first get some value and the ajax return values.</p>
	//     <v-select url="docs/data.json" :value.sync="ajax.value" clear-button v-ref:ajax></v-select>
	//     <v-select url="docs/data.json" multiple :parent="ajax.value"></v-select>
	//     <doc-code language="markup">
	//       <v-select url="docs/data.json" :value.sync="ajax.value" clear-button></v-select>
	//       <v-select url="docs/data.json" multiple :parent="ajax.value"></v-select>
	//     </doc-code>
	//     <p>Ajax response:</p>
	//     <doc-code language="markup"><span v-html="$refs.ajax.options|json"></span></doc-code>
	//
	//     <doc-options name="Other">
	//       <div>
	//         <p>min-search</p>
	//         <p><code>Number</code></p>
	//         <p><code>0</code></p>
	//         <p>If defined, the searchbox is disabled if are less than the minimum value you set.</p>
	//       </div>
	//       <div>
	//         <p>lang</p>
	//         <p><code>String</code></p>
	//         <p>Browser language</p>
	//         <p><abbr title="ISO 639-1 code"><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>
	//       </div>
	//       <div>
	//         <p>placeholder</p>
	//         <p><code>String</code></p>
	//         <p>Nothing Selected</p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>search-text</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p></p>
	//       </div>
	//     </doc-options>
	//   </doc-section>
	// </template>
	//
	// <script>

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"select\" name=\"Select\">\n  <p>Based in a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.</p>\n  <div class=\"bs-example\">\n    <h4>Select with options:</h4>\n    <p><pre>Selected data : {{show(single)}}</pre></p>\n    <v-select :value.sync=\"single\">\n      <v-option value=\"apple\">Apple</v-option>\n      <v-option value=\"banana\">Banana</v-option>\n      <v-option value=\"cherry\">Cherry</v-option>\n      <v-option value=\"orange\">Orange</v-option>\n      <v-option value=\"grape\">Grape</v-option>\n    </v-select>\n    <hr/>\n    <h4>Test options:</h4>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <p><pre>Normal select data: {{show(select.normal)}}</pre></p>\n        <form action=\"./#select\" method=\"get\">\n          <v-select :options=\"select.options\" :value.sync=\"select.normal\" name=\"animal'\" :search=\"select.search\" :justified=\"select.justified\"\n            :required=\"select.required\" :clear-button=\"select.clearButton\" :disabled=\"select.disabled\"\n          ></v-select>\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <p><pre>Multiple select data : {{show(select.multiple)}}</pre></p>\n        <form action=\"./#select\" method=\"get\">\n          <v-select :options=\"select.options\" :value.sync=\"select.multiple\" name=\"animals[]\" :search=\"select.search\" :justified=\"select.justified\"\n            multiple :required=\"select.required\" :clear-button=\"select.clearButton\"\n            :close-on-select=\"select.closeOnSelect\" :limit=\"select.limit?3:1024\" :disabled=\"select.disabled\"\n          ></v-select>\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n      </div>\n    </div>\n    <br/>\n    <button-group type=\"primary\" buttons=\"false\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n          <p><checkbox :checked.sync=\"select.disabled\">Disabled</checkbox></p>\n          <p><checkbox :checked.sync=\"select.search\">Search</checkbox></p>\n          <p><checkbox :checked.sync=\"select.justified\">Justified</checkbox></p>\n          <p><checkbox :checked.sync=\"select.clearButton\">Clear Button</checkbox></p>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n          <p><checkbox :checked.sync=\"select.required\">Required (empty value if noting selected)</checkbox></p>\n          <p>\n            Multiple:\n            <checkbox v-if=\"select.multiple\" :checked.sync=\"select.limit\">Limit (e.g. 3)</checkbox>\n            <checkbox v-if=\"select.multiple\" :checked.sync=\"select.closeOnSelect\">Close on Select</checkbox>\n          </p>\n        </div>\n      </div>\n    </button-group>\n  </div>\n  <doc-code language=\"markup\">\n    <v-select>\n      <v-option value=\"apple\">Apple</v-option>\n      <v-option value=\"banana\">Banana</v-option>\n      <v-option value=\"cherry\">Cherry</v-option>\n      <v-option value=\"orange\">Orange</v-option>\n      <v-option value=\"grape\">Grape</v-option>\n    </v-select>\n    <form action=\"./#select\" method=\"get\">\n      <v-select :value.sync=\"select.value\" :options=\"select.options\"\n        multiple name=\"animals[]\" limit=\"3\"\n        search justified required disabled\n        clear-button close-on-select\n      ></v-select>\n      <button type=\"submit\" class=\"btn btn-default\">Submit form</button>\n    </form>\n  </doc-code>\n  <doc-code language=\"javascript\">\n    options: [\n      {value: 1, label: 'Cat'},\n      {value: 2, label: 'Cow'},\n      {value: 3, label: 'Dog'},\n      {value: 4, label: 'Elephant'},\n      {value: 5, label: 'Fish'},\n      {value: 6, label: 'Lion'},\n      {value: 7, label: 'Tiger'},\n      {value: 8, label: 'Turtle'}\n    ]\n  </doc-code>\n\n  <hr />\n  <h4>Ajax data and parent dependency:</h4>\n  <p>The second element has inheritance. Enable when the first get some value and the ajax return values.</p>\n  <v-select url=\"docs/data.json\" :value.sync=\"ajax.value\" clear-button v-ref:ajax></v-select>\n  <v-select url=\"docs/data.json\" multiple :parent=\"ajax.value\"></v-select>\n  <doc-code language=\"markup\">\n    <v-select url=\"docs/data.json\" :value.sync=\"ajax.value\" clear-button></v-select>\n    <v-select url=\"docs/data.json\" multiple :parent=\"ajax.value\"></v-select>\n  </doc-code>\n  <p>Ajax response:</p>\n  <doc-code language=\"markup\"><span v-html=\"$refs.ajax.options|json\"></span></doc-code>\n\n  <doc-options name=\"Other\">\n    <div>\n      <p>min-search</p>\n      <p><code>Number</code></p>\n      <p><code>0</code></p>\n      <p>If defined, the searchbox is disabled if are less than the minimum value you set.</p>\n    </div>\n    <div>\n      <p>lang</p>\n      <p><code>String</code></p>\n      <p>Browser language</p>\n      <p><abbr title=\"ISO 639-1 code\"><a href=\"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>\n    </div>\n    <div>\n      <p>placeholder</p>\n      <p><code>String</code></p>\n      <p>Nothing Selected</p>\n      <p></p>\n    </div>\n    <div>\n      <p>search-text</p>\n      <p><code>String</code></p>\n      <p></p>\n      <p></p>\n    </div>\n  </doc-options>\n</doc-section>\n";

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(255)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\spinnerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(262)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4184c92a/spinnerDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Checkbox = __webpack_require__(108);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Select = __webpack_require__(118);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Spinner = __webpack_require__(256);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="spinner" name="Spinner">
	//     <div class="bs-example">
	//       <p><checkbox :checked.sync="fixed" type="info">fixed</checkbox></p>
	//       <p><v-select :options="sizes" :value.sync="size">size</v-select></p>
	//       <p><button class="btn btn-info" @click="$broadcast('show::spinner')">show spinner</button></p>
	//       <div><spinner id="spinner-box" :size="size" :fixed="fixed" text="I will close in 2 secs"></spinner></div>
	//     </div>
	//     <doc-code language="markup">
	//       &lt;spinner v-ref:spinner :size="(sm,md,lg...)" :fixed="(true,false)" text="I will close in 2 secs">&lt;/spinner>
	//     </doc-code>
	//     <doc-code language="markup">
	//       // using ref
	//       this.$refs.spinner.show()
	//       this.$refs.spinner.hide()
	//       // using broadcast
	//       this.$broadcast('show::spinner')
	//       this.$broadcast('hide::spinner')
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>size</p>
	//         <p><code>Text</code></p>
	//         <p>md</p>
	//         <p>The size of the spinner (either [sm, md, lg]).</p>
	//       </div>
	//       <div>
	//         <p>fixed</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>Set to true if you want the spinner to occupy the entire window space.</p>
	//       </div>
	//     </doc-options>
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    checkbox: _Checkbox2.default,
	    spinner: _Spinner2.default,
	    vSelect: _Select2.default
	  },
	  data: function data() {
	    return {
	      fixed: false,
	      size: 'lg',
	      sizes: ['sm', 'md', 'lg', 'xl']
	    };
	  },
	
	  events: {
	    'shown::spinner': function shownSpinner(id) {
	      var _this = this;
	
	      setTimeout(function () {
	        _this.$root.$broadcast('hide::spinner', id);
	      }, 2000);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(257)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Spinner.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(261)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8b298e70/Spinner.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(258);
	
	var _utils = __webpack_require__(75);
	
	// <template>
	//   <div :class="['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]" v-show="active">
	//     <div class="spinner-wrapper">
	//       <div class="spinner-circle"></div>
	//       <div class="spinner-text">{{text}}</div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	// import styling
	var MIN_WAIT = 500; // in ms
	
	exports.default = {
	  props: {
	    size: {
	      type: String,
	      default: 'md'
	    },
	    text: {
	      type: String,
	      default: ''
	    },
	    fixed: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      active: false
	    };
	  },
	
	  computed: {
	    spinnerSize: function spinnerSize() {
	      return this.size ? 'spinner-' + this.size : 'spinner-sm';
	    }
	  },
	  ready: function ready() {
	    this._body = document.querySelector('body');
	    this._bodyOverflow = this._body.style.overflowY || '';
	  },
	
	  methods: {
	    getMinWait: function getMinWait(delay) {
	      delay = delay || 0;
	      return new Date().getTime() - this._started.getTime() < MIN_WAIT ? MIN_WAIT - parseInt(new Date().getTime() - this._started.getTime(), 10) + delay : 0 + delay;
	    },
	    show: function show(options) {
	      if (options && options.text) {
	        this.text = options.text;
	      }
	      if (options && options.size) {
	        this.size = options.size;
	      }
	      if (options && options.fixed) {
	        this.fixed = options.fixed;
	      }
	
	      // block scrolling when spinner is on
	      this._body.style.overflowY = 'hidden';
	
	      // activate spinner
	      this._started = new Date();
	      this.active = true;
	      this.$root.$broadcast('shown::spinner');
	    },
	    hide: function hide() {
	      var _this = this;
	
	      var delay = 0;
	      this._spinnerAnimation = setTimeout(function () {
	        _this.active = false;
	        _this._body.style.overflowY = _this._bodyOverflow;
	        _this.$root.$broadcast('hidden::spinner');
	      }, this.getMinWait(delay));
	    }
	  },
	  events: {
	    'show::spinner': function showSpinner(options) {
	      this.show(options);
	    },
	    'hide::spinner': function hideSpinner() {
	      this.hide();
	    },
	    'start::ajax': function startAjax(options) {
	      this.show(options);
	    },
	    'end::ajax': function endAjax() {
	      this.hide();
	    }
	  },
	  destroyed: function destroyed() {
	    clearTimeout(this._spinnerAnimation);
	    this._body.style.overflowY = this._bodyOverflow;
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(259);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(260)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./spinner.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./spinner.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n *\r\n * Spinner\r\n * With fallback to IE9\r\n *\r\n */\n@keyframes spin {\n  100% {\n    transform: rotate(360deg); } }\n\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9); }\n  .spinner-gritcode.spinner-fixed {\n    position: fixed; }\n  .spinner-gritcode .spinner-wrapper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n  .spinner-gritcode .spinner-circle {\n    position: relative;\n    border: 4px solid #ccc;\n    border-right-color: #337ab7;\n    border-radius: 50%;\n    display: inline-block;\n    animation: spin 0.6s linear;\n    animation-iteration-count: infinite;\n    width: 3em;\n    height: 3em;\n    z-index: 2; }\n  .spinner-gritcode .spinner-text {\n    position: relative;\n    text-align: center;\n    margin-top: 0.5em;\n    z-index: 2;\n    width: 100%;\n    font-size: 95%;\n    color: #337ab7; }\n\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em; }\n\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em; }\n\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em; }\n\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em; }\n\n.lt-ie10 .spinner-gritcode .spinner-circle, .ie9 .spinner-gritcode .spinner-circle, .oldie .spinner-gritcode .spinner-circle, .no-csstransitions .spinner-gritcode .spinner-circle, .no-csstransforms3d .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px; }\n", ""]);
	
	// exports


/***/ },
/* 260 */
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
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
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
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
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
/* 261 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]\" v-show=\"active\">\n  <div class=\"spinner-wrapper\">\n    <div class=\"spinner-circle\"></div>\n    <div class=\"spinner-text\">{{text}}</div>\n  </div>\n</div>\n";

/***/ },
/* 262 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"spinner\" name=\"Spinner\">\n  <div class=\"bs-example\">\n    <p><checkbox :checked.sync=\"fixed\" type=\"info\">fixed</checkbox></p>\n    <p><v-select :options=\"sizes\" :value.sync=\"size\">size</v-select></p>\n    <p><button class=\"btn btn-info\" @click=\"$broadcast('show::spinner')\">show spinner</button></p>\n    <div><spinner id=\"spinner-box\" :size=\"size\" :fixed=\"fixed\" text=\"I will close in 2 secs\"></spinner></div>\n  </div>\n  <doc-code language=\"markup\">\n    &lt;spinner v-ref:spinner :size=\"(sm,md,lg...)\" :fixed=\"(true,false)\" text=\"I will close in 2 secs\">&lt;/spinner>\n  </doc-code>\n  <doc-code language=\"markup\">\n    // using ref\n    this.$refs.spinner.show()\n    this.$refs.spinner.hide()\n    // using broadcast\n    this.$broadcast('show::spinner')\n    this.$broadcast('hide::spinner')\n  </doc-code>\n  <doc-options>\n    <div>\n      <p>size</p>\n      <p><code>Text</code></p>\n      <p>md</p>\n      <p>The size of the spinner (either [sm, md, lg]).</p>\n    </div>\n    <div>\n      <p>fixed</p>\n      <p><code>Boolean</code></p>\n      <p>false</p>\n      <p>Set to true if you want the spinner to occupy the entire window space.</p>\n    </div>\n  </doc-options>\n</doc-section>\n";

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(264)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\tabsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(278)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6c035dda/tabsDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Tabset = __webpack_require__(265);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _TabGroup = __webpack_require__(270);
	
	var _TabGroup2 = _interopRequireDefault(_TabGroup);
	
	var _Tab = __webpack_require__(275);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="tabs" name="Tabs">
	//     <div class="bs-example">
	//       <tabs>
	//         <tab header="one">
	//           <p>
	//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//             consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
	//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
	//             non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//           </p>
	//         </tab>
	//         <tab header="two" disabled>
	//           ...
	//         </tab>
	//         <tab-group header="group1">
	//           <tab header="three">
	//            <p>
	//               Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
	//            </p>
	//           </tab>
	//           <tab header="four" disabled>
	//             ...
	//           </tab>
	//         </tab-group>
	//         <tab-group header="group2" disabled>
	//           <tab header="five">
	//             ...
	//           </tab>
	//         </tab-group>
	//       </tabs>
	//     </div>
	//     <doc-code language="markup">
	//       <tabs>
	//         <tab header="one">
	//           ...
	//         </tab>
	//         <tab header="two" disabled>
	//           ...
	//         </tab>
	//         <tab-group header="group1">
	//           <tab header="three">
	//             ...
	//           </tab>
	//           <tab header="four" disabled>
	//             ...
	//           </tab>
	//         </tab-group>
	//         <tab-group header="group2">
	//           <tab header="five">
	//             ...
	//           </tab>
	//         </tab-group>
	//       </tabs>
	//     </doc-code>
	//     <doc-code language="javascript">
	//       components: {
	//         tabs: VueStrap.tabset,
	//         tabGroup: VueStrap.tabGroup,
	//         tab: VueStrap.tab
	//       }
	//     </doc-code>
	//     <doc-options name="Tabset (container)">
	//       <div>
	//         <p>active</p>
	//         <p><code>Number</code></p>
	//         <p><code>0</code></p>
	//         <p>Active tab index (0 based)</p>
	//       </div>
	//     </doc-options>
	//     <doc-options name="TabGroup (dropdown)">
	//       <div>
	//         <p>disabled</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Whether tabgroup is clickable.</p>
	//       </div>
	//       <div>
	//         <p>header</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>Group Title</p>
	//       </div>
	//     </doc-options>
	//     <doc-options name="Tab (element)">
	//       <div>
	//         <p>header</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>Tab Title</p>
	//       </div>
	//       <div>
	//         <p>disabled</p>
	//         <p><code>Boolean</code></p>
	//         <p>false</p>
	//         <p>Whether tab is clickable and can be activated.</p>
	//       </div>
	//     </doc-options>
	//   </doc-section>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    tabGroup: _TabGroup2.default,
	    tabs: _Tabset2.default,
	    tab: _Tab2.default
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(266)
	__vue_script__ = __webpack_require__(268)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Tabset.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(269)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-09e2754e/Tabset.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(267);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-09e2754e&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-09e2754e&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.nav-tabs[_v-09e2754e] {\r\n  margin-bottom: 15px;\r\n}\r\n", "", {"version":3,"sources":["/./src/Tabset.vue?0b60d66a"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqEA;EACA,oBAAA;CACA","file":"Tabset.vue","sourcesContent":["<template>\r\n  <!-- Nav tabs -->\r\n  <ul class=\"nav nav-{{navStyle}}\" role=\"tablist\">\r\n    <template v-for=\"t in headers\">\r\n      <li v-if=\"!t._tabgroup\" :class=\"{active:t.active, disabled:t.disabled}\" @click.prevent=\"select(t)\">\r\n        <a href=\"#\"><slot name=\"header\">{{{t.header}}}</slot></a>\r\n      </li>\r\n      <dropdown v-else :text=\"t.header\" :class=\"{active:t.active}\" :disabled=\"t.disabled\">\r\n        <li v-for=\"tab in t.tabs\" :class=\"{disabled:tab.disabled}\"><a href=\"#\" @click.prevent=\"select(tab)\">{{tab.header}}</a></li>\r\n      </dropdown>\r\n    </template>\r\n  </ul>\r\n  <div class=\"tab-content\" v-el:tab-content>\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\nimport dropdown from './Dropdown.vue'\r\n\r\nexport default {\r\n  components: {\r\n    dropdown\r\n  },\r\n  props: {\r\n    navStyle: {\r\n      type: String,\r\n      default: 'tabs'\r\n    },\r\n    effect: {\r\n      type: String,\r\n      default: 'fadein'\r\n    },\r\n    active: {\r\n      type: Number,\r\n      coerce: coerce.number,\r\n      default: 0\r\n    }\r\n  },\r\n  data () {\r\n    return {\r\n      show: null,\r\n      headers: [],\r\n      tabs: []\r\n    }\r\n  },\r\n  created () {\r\n    this._tabset = true\r\n  },\r\n  watch: {\r\n    active (val) {\r\n      this.show = this.tabs[val]\r\n    }\r\n  },\r\n  ready () {\r\n    this.show = this.tabs[this.active]\r\n  },\r\n  methods: {\r\n    select (tab) {\r\n      if (!tab.disabled) {\r\n        this.active = tab.index\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.nav-tabs {\r\n  margin-bottom: 15px;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	var _Dropdown = __webpack_require__(83);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <!-- Nav tabs -->
	//   <ul class="nav nav-{{navStyle}}" role="tablist">
	//     <template v-for="t in headers">
	//       <li v-if="!t._tabgroup" :class="{active:t.active, disabled:t.disabled}" @click.prevent="select(t)">
	//         <a href="#"><slot name="header">{{{t.header}}}</slot></a>
	//       </li>
	//       <dropdown v-else :text="t.header" :class="{active:t.active}" :disabled="t.disabled">
	//         <li v-for="tab in t.tabs" :class="{disabled:tab.disabled}"><a href="#" @click.prevent="select(tab)">{{tab.header}}</a></li>
	//       </dropdown>
	//     </template>
	//   </ul>
	//   <div class="tab-content" v-el:tab-content>
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    dropdown: _Dropdown2.default
	  },
	  props: {
	    navStyle: {
	      type: String,
	      default: 'tabs'
	    },
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    active: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      show: null,
	      headers: [],
	      tabs: []
	    };
	  },
	  created: function created() {
	    this._tabset = true;
	  },
	
	  watch: {
	    active: function active(val) {
	      this.show = this.tabs[val];
	    }
	  },
	  ready: function ready() {
	    this.show = this.tabs[this.active];
	  },
	
	  methods: {
	    select: function select(tab) {
	      if (!tab.disabled) {
	        this.active = tab.index;
	      }
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	// .nav-tabs {
	//   margin-bottom: 15px;
	// }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 269 */
/***/ function(module, exports) {

	module.exports = "\n<!-- Nav tabs -->\n<ul class=\"nav nav-{{navStyle}}\" role=\"tablist\" _v-09e2754e=\"\">\n  <template v-for=\"t in headers\">\n    <li v-if=\"!t._tabgroup\" :class=\"{active:t.active, disabled:t.disabled}\" @click.prevent=\"select(t)\" _v-09e2754e=\"\">\n      <a href=\"#\" _v-09e2754e=\"\"><slot name=\"header\" _v-09e2754e=\"\">{{{t.header}}}</slot></a>\n    </li>\n    <dropdown v-else=\"\" :text=\"t.header\" :class=\"{active:t.active}\" :disabled=\"t.disabled\" _v-09e2754e=\"\">\n      <li v-for=\"tab in t.tabs\" :class=\"{disabled:tab.disabled}\" _v-09e2754e=\"\"><a href=\"#\" @click.prevent=\"select(tab)\" _v-09e2754e=\"\">{{tab.header}}</a></li>\n    </dropdown>\n  </template>\n</ul>\n<div class=\"tab-content\" v-el:tab-content=\"\" _v-09e2754e=\"\">\n  <slot _v-09e2754e=\"\"></slot>\n</div>\n";

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(271)
	__vue_script__ = __webpack_require__(273)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\TabGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(274)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-55faf3cb/TabGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(272);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-55faf3cb&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TabGroup.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-55faf3cb&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TabGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.nav-tabs[_v-55faf3cb] {\r\n  margin-bottom: 15px;\r\n}\r\n", "", {"version":3,"sources":["/./src/TabGroup.vue?3f8fab13"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwDA;EACA,oBAAA;CACA","file":"TabGroup.vue","sourcesContent":["<template><slot></slot></template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\n\r\nexport default {\r\n  props: {\r\n    disabled: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    header: {\r\n      type: String\r\n    }\r\n  },\r\n  data () {\r\n    return {\r\n      tabs: [],\r\n      show: false\r\n    }\r\n  },\r\n  computed: {\r\n    active () {\r\n      return ~this.tabs.indexOf(this._tabset.show)\r\n    }\r\n  },\r\n  created () {\r\n    this._tabgroup = true\r\n    let tabset = (this.$parent && this.$parent._tabset === true) ? this.$parent : {}\r\n    if (this.$parent && this.$parent._tabgroup) {\r\n      console.error('Can\\'t nest tabgroups.')\r\n    }\r\n    while (tabset && !tabset._tabset && tabset.$parent) {\r\n      tabset = tabset.$parent\r\n    }\r\n    if (!tabset._tabset) {\r\n      this._tabset = {}\r\n      this.show = true\r\n      console.warn('Warning: tabgroup depend on tabset to work properly.')\r\n    } else {\r\n      this._tabset = tabset\r\n    }\r\n  },\r\n  methods: {\r\n    blur () {\r\n      this.show = false\r\n    },\r\n    toggle () {\r\n      this.show = !this.show\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.nav-tabs {\r\n  margin-bottom: 15px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	exports.default = {
	  props: {
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    header: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      tabs: [],
	      show: false
	    };
	  },
	
	  computed: {
	    active: function active() {
	      return ~this.tabs.indexOf(this._tabset.show);
	    }
	  },
	  created: function created() {
	    this._tabgroup = true;
	    var tabset = this.$parent && this.$parent._tabset === true ? this.$parent : {};
	    if (this.$parent && this.$parent._tabgroup) {
	      console.error('Can\'t nest tabgroups.');
	    }
	    while (tabset && !tabset._tabset && tabset.$parent) {
	      tabset = tabset.$parent;
	    }
	    if (!tabset._tabset) {
	      this._tabset = {};
	      this.show = true;
	      console.warn('Warning: tabgroup depend on tabset to work properly.');
	    } else {
	      this._tabset = tabset;
	    }
	  },
	
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	// .nav-tabs {
	//   margin-bottom: 15px;
	// }
	// </style>

	/* generated by vue-loader */
	// <template><slot></slot></template>
	//
	// <script>

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = "<slot _v-55faf3cb=\"\"></slot>";

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(276)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(277)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0985e878/Tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  computed: {
	    active: function active() {
	      return this._tabset.show == this;
	    },
	    index: function index() {
	      return this._tabset.tabs.indexOf(this);
	    },
	    show: function show() {
	      return this._tabset && this._tabset.show === this;
	    },
	    transition: function transition() {
	      return this._tabset ? this._tabset.effect : null;
	    }
	  },
	  created: function created() {
	    this._ingroup = this.$parent && this.$parent._tabgroup;
	    var tabset = this;
	    while (tabset && tabset._tabset !== true && tabset.$parent) {
	      tabset = tabset.$parent;
	    }
	    if (!tabset._tabset) {
	      this._tabset = {};
	      console.warn('Warning: "tab" depend on "tabset" to work properly.');
	    } else {
	      tabset.tabs.push(this);
	      if (!this._ingroup) {
	        tabset.headers.push(this);
	      } else {
	        if (!~tabset.headers.indexOf(this.$parent)) {
	          tabset.headers.push(this.$parent);
	        }
	      }
	      this._tabset = tabset;
	    }
	    if (this._ingroup) {
	      this.$parent.tabs.push(this);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._tabset.active === this.index) {
	      this._tabset.active = 0;
	    }
	    this._tabset.tabs.$remove(this);
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div role="tabpanel" class="tab-pane active" v-show="show"
	//     :class="{hide:!show}"
	//     :transition="transition"
	//   >
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 277 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" class=\"tab-pane active\" v-show=\"show\"\n  :class=\"{hide:!show}\"\n  :transition=\"transition\"\n>\n  <slot></slot>\n</div>\n";

/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = "\n<doc-section id=\"tabs\" name=\"Tabs\">\n  <div class=\"bs-example\">\n    <tabs>\n      <tab header=\"one\">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </p>\n      </tab>\n      <tab header=\"two\" disabled>\n        ...\n      </tab>\n      <tab-group header=\"group1\">\n        <tab header=\"three\">\n         <p>\n            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.\n         </p>\n        </tab>\n        <tab header=\"four\" disabled>\n          ...\n        </tab>\n      </tab-group>\n      <tab-group header=\"group2\" disabled>\n        <tab header=\"five\">\n          ...\n        </tab>\n      </tab-group>\n    </tabs>\n  </div>\n  <doc-code language=\"markup\">\n    <tabs>\n      <tab header=\"one\">\n        ...\n      </tab>\n      <tab header=\"two\" disabled>\n        ...\n      </tab>\n      <tab-group header=\"group1\">\n        <tab header=\"three\">\n          ...\n        </tab>\n        <tab header=\"four\" disabled>\n          ...\n        </tab>\n      </tab-group>\n      <tab-group header=\"group2\">\n        <tab header=\"five\">\n          ...\n        </tab>\n      </tab-group>\n    </tabs>\n  </doc-code>\n  <doc-code language=\"javascript\">\n    components: {\n      tabs: VueStrap.tabset,\n      tabGroup: VueStrap.tabGroup,\n      tab: VueStrap.tab\n    }\n  </doc-code>\n  <doc-options name=\"Tabset (container)\">\n    <div>\n      <p>active</p>\n      <p><code>Number</code></p>\n      <p><code>0</code></p>\n      <p>Active tab index (0 based)</p>\n    </div>\n  </doc-options>\n  <doc-options name=\"TabGroup (dropdown)\">\n    <div>\n      <p>disabled</p>\n      <p><code>Boolean</code></p>\n      <p><code>false</code></p>\n      <p>Whether tabgroup is clickable.</p>\n    </div>\n    <div>\n      <p>header</p>\n      <p><code>String</code></p>\n      <p><code>null</code></p>\n      <p>Group Title</p>\n    </div>\n  </doc-options>\n  <doc-options name=\"Tab (element)\">\n    <div>\n      <p>header</p>\n      <p><code>String</code></p>\n      <p></p>\n      <p>Tab Title</p>\n    </div>\n    <div>\n      <p>disabled</p>\n      <p><code>Boolean</code></p>\n      <p>false</p>\n      <p>Whether tab is clickable and can be activated.</p>\n    </div>\n  </doc-options>\n</doc-section>\n";

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(280)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\tooltipDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(281)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-672a5d14/tooltipDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Tooltip = __webpack_require__(144);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <doc-section id="tooltip" name="Tooltip">
	//     <div class="bs-example">
	//       <tooltip v-for="place in ['top','left','right','bottom']" header content="Lorem ipsum dolor sit amet" :placement="place">
	//         <button class="btn btn-default">Popover on {{place}}</button>
	//       </tooltip>
	//       <hr>
	//       <h4>Trigger</h4>
	//       <p>
	//         <tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="top" trigger="click">
	//           <button class="btn btn-default">Click</button>
	//         </tooltip>
	//         <tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="top" trigger="contextmenu">
	//           <button class="btn btn-default">Contextmenu (right click)</button>
	//         </tooltip>
	//       </p>
	//       <tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
	//         <input type="text" class="form-control" placeholder="Focus">
	//       </tooltip>
	//     </div>
	//     <doc-code language="markup">
	//       <tooltip effect="scale" placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//         <button class="btn btn-default">tooltip on bottom</button>
	//       </tooltip>
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>trigger</p>
	//         <p><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code> <code>contextmenu</code></p>
	//         <p><code>click</code></p>
	//         <p>How the tooltip is triggered.</p>
	//       </div>
	//       <div>
	//         <p>effect</p>
	//         <p><code>String</code>, one of <code>scale</code> <code>fadein</code></p>
	//         <p><code>scale</code></p>
	//         <p></p>
	//       <div>
	//         <p>content</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>placement</p>
	//         <p><code>String</code>, one of <code>top</code>
	//         <code>left</code>
	//         <code>right</code>
	//         <code>bottom</code></p>
	//         <p></p>
	//         <p>How to position the tooltip.</p>
	//       </div>
	//     </doc-options>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    tooltip: _Tooltip2.default
	  },
	  data: function data() {
	    return {
	      text: 'Lorem ipsum dolor sit amet',
	      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod'
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = "\n  <doc-section id=\"tooltip\" name=\"Tooltip\">\n    <div class=\"bs-example\">\n      <tooltip v-for=\"place in ['top','left','right','bottom']\" header content=\"Lorem ipsum dolor sit amet\" :placement=\"place\">\n        <button class=\"btn btn-default\">Popover on {{place}}</button>\n      </tooltip>\n      <hr>\n      <h4>Trigger</h4>\n      <p>\n        <tooltip effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"click\">\n          <button class=\"btn btn-default\">Click</button>\n        </tooltip>\n        <tooltip effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"contextmenu\">\n          <button class=\"btn btn-default\">Contextmenu (right click)</button>\n        </tooltip>\n      </p>\n      <tooltip effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </tooltip>\n    </div>\n    <doc-code language=\"markup\">\n      <tooltip effect=\"scale\" placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default\">tooltip on bottom</button>\n      </tooltip>\n    </doc-code>\n    <doc-options>\n      <div>\n        <p>trigger</p>\n        <p><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code> <code>contextmenu</code></p>\n        <p><code>click</code></p>\n        <p>How the tooltip is triggered.</p>\n      </div>\n      <div>\n        <p>effect</p>\n        <p><code>String</code>, one of <code>scale</code> <code>fadein</code></p>\n        <p><code>scale</code></p>\n        <p></p>\n      <div>\n        <p>content</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p></p>\n      </div>\n      <div>\n        <p>placement</p>\n        <p><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></p>\n        <p></p>\n        <p>How to position the tooltip.</p>\n      </div>\n    </doc-options>\n  </div>\n</template>";

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(283)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs\\example\\typeaheadDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(289)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-60f07458/typeaheadDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _docSection = __webpack_require__(99);
	
	var _docSection2 = _interopRequireDefault(_docSection);
	
	var _docOptions = __webpack_require__(102);
	
	var _docOptions2 = _interopRequireDefault(_docOptions);
	
	var _docCode = __webpack_require__(93);
	
	var _docCode2 = _interopRequireDefault(_docCode);
	
	var _Typeahead = __webpack_require__(284);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Tooltip = __webpack_require__(144);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    docSection: _docSection2.default,
	    docOptions: _docOptions2.default,
	    docCode: _docCode2.default,
	    typeahead: _Typeahead2.default,
	    tooltip: _Tooltip2.default
	  },
	  partials: {},
	  data: function data() {
	    return {
	      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
	      'asyncTemplate': '{{ item.formatted_address }}',
	      'githubTemplate': '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'
	    };
	  },
	
	  methods: {
	    googleCallback: function googleCallback(items, targetVM) {
	      targetVM.reset();
	      targetVM.value = items.formatted_address;
	    },
	    githubCallback: function githubCallback(items) {
	      window.open(items.html_url, '_blank');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <doc-section id="typeahead" name="Typeahead">
	//     <div class="bs-example">
	//       <h4>
	//         Static arrays
	//       </h4>
	//       <typeahead
	//         :data="USstate"
	//         placeholder="USA states"
	//       ></typeahead>
	//       <hr>
	//       <h4>
	//       Asynchronous results
	//       <tooltip trigger="click" content="The suggestions via a Google Map API, are you behind a FireWall?" placement="top">
	//         <small style="cursor:pointer">(not working?)</small>
	//       </tooltip>
	//       </h4>
	//       <typeahead
	//         placeholder="CCCAddress, async via maps.googleapis.com"
	//         key="results"
	//         async="https://maps.googleapis.com/maps/api/geocode/json?address="
	//         template-name="async"
	//         :template="asyncTemplate"
	//         :on-hit="googleCallback"
	//       ></typeahead>
	//       <hr>
	//       <h4>
	//       Custom templates for results
	//       </h4>
	//       <typeahead
	//         placeholder="Github users, async via api.github.com"
	//         key="items"
	//         async="https://api.github.com/search/users?q="
	//         template-name="github"
	//         :template="githubTemplate"
	//         :on-hit="githubCallback"
	//       ></typeahead>
	//     </div>
	//     <doc-code language="markup">
	//       <h4>Static arrays</h4>
	//       <typeahead
	//         :data="USstate"
	//         placeholder="USA states">
	//       </typeahead>
	//
	//       <h4>Asynchronous results</h4>
	//         <typeahead
	//           placeholder="Address, async via maps.googleapis.com"
	//           key="results"
	//           src="https://maps.googleapis.com/maps/api/geocode/json?address="
	//           template-name="async"
	//           :template="asyncTemplate"
	//           :on-hit="googleCallback">
	//       </typeahead>
	//
	//       <h4>Custom templates for results</h4>
	//         <typeahead
	//           placeholder="Github users, async via api.github.com"
	//           key="items"
	//           src="https://api.github.com/search/users?q="
	//           template-name="typeahead-github-template"
	//           :template="githubTemplate"
	//           :on-hit="githubCallback">
	//       </typeahead>
	//     </doc-code>
	//     <doc-code language="javascript">
	//       new Vue {
	//         components: {
	//           typeahead
	//         },
	//         data() {
	//           return {
	//             USstate: ['Alabama', 'Alaska', 'Arizona',...],
	//             asynchronous: '{{formatted_address}}',
	//             customTemplate: '<img width="18px" height="18px" v-attr="src:avatar_url"/>' +
	//             '<span>{{login}}</span>'
	//           }
	//         },
	//         methods: {
	//           googleCallback(items, targetVM) {
	//             const that = targetVM;
	//             that.reset()
	//             that.value = items.formatted_address
	//           },
	//           githubCallback(items) {
	//             window.open(items.html_url, '_blank')
	//           }
	//         }
	//       }
	//     </doc-code>
	//     <doc-options>
	//       <div>
	//         <p>value</p>
	//         <p><code>String</code></p>
	//         <p><code>''</code></p>
	//         <p></p>
	//       </div>
	//       <div>
	//         <p>data</p>
	//         <p><code>Array</code></p>
	//         <p></p>
	//         <p>The local data source for suggestions. Expected to be a primitive array.</p>
	//       </div>
	//       <div>
	//         <p>async</p>
	//         <p><code>String</code></p>
	//         <p></p>
	//         <p>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</p>
	//       </div>
	//       <div>
	//         <p>limit</p>
	//         <p><code>Number</code></p>
	//         <p><code>8</code></p>
	//         <p>The max number of suggestions to be displayed.</p>
	//       </div>
	//       <div>
	//         <p>key</p>
	//         <p><code>String</code></p>
	//         <p><code>null</code></p>
	//         <p>The remote JSON key you want to render. if null, render directly using the remote JSON(should be Array).</p>
	//       </div>
	//       <div>
	//         <p>match-case</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Case sensitive for suggestions.</p>
	//       </div>
	//       <div>
	//         <p>match-start</p>
	//         <p><code>Boolean</code></p>
	//         <p><code>false</code></p>
	//         <p>Match only against start of suggestions. E.g. if true, "a" matches "ab" but not "ba".</p>
	//       </div>
	//       <div>
	//         <p>on-hit</p>
	//         <p><code>Function</code></p>
	//         <p></p>
	//         <p>A callback function when you click or hit return on an item.</p>
	//       </div>
	//       <div>
	//         <p>template</p>
	//         <p><code>String</code></p>
	//         <p><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></p>
	//         <p>Used to render suggestion.</p>
	//       </div>
	//     </doc-options>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(285)
	__vue_script__ = __webpack_require__(287)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Typeahead.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(288)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5b5f5e94/Typeahead.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(286);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.dropdown-menu > li > a {\r\n  cursor: pointer;\r\n}\r\n", "", {"version":3,"sources":["/./src/Typeahead.vue?7bcd1af4"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+JA;EACA,gBAAA;CACA","file":"Typeahead.vue","sourcesContent":["<template>\r\n  <div style=\"position: relative\"\r\n    v-bind:class=\"{'open':showDropdown}\"\r\n  >\r\n    <input type=\"text\" class=\"form-control\"\r\n      :placeholder=\"placeholder\"\r\n      autocomplete=\"off\"\r\n      v-model=\"value\"\r\n      @input=\"update\"\r\n      @keydown.up=\"up\"\r\n      @keydown.down=\"down\"\r\n      @keydown.enter= \"hit\"\r\n      @keydown.esc=\"reset\"\r\n      @blur=\"showDropdown = false\"\r\n    />\r\n    <ul class=\"dropdown-menu\" v-el:dropdown>\r\n      <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\r\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\r\n          <partial :name=\"templateName\"></partial>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {callAjax, coerce} from './utils/utils.js'\r\n\r\nlet Vue = window.Vue\r\n\r\nexport default {\r\n  created () {\r\n    this.items = this.primitiveData\r\n  },\r\n  partials: {\r\n    default: '<span v-html=\"item | highlight query\"></span>'\r\n  },\r\n  props: {\r\n    value: {\r\n      twoWay : true,\r\n      type: String,\r\n      default: ''\r\n    },\r\n    data: {\r\n      type: Array\r\n    },\r\n    limit: {\r\n      type: Number,\r\n      default: 8\r\n    },\r\n    async: {\r\n      type: String\r\n    },\r\n    template: {\r\n      type: String\r\n    },\r\n    templateName: {\r\n      type: String,\r\n      default: 'default'\r\n    },\r\n    key: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    matchCase: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    matchStart: {\r\n      type: Boolean,\r\n      coerce: coerce.boolean,\r\n      default: false\r\n    },\r\n    onHit: {\r\n      type: Function,\r\n      default (items) {\r\n        this.reset()\r\n        this.value = items\r\n      }\r\n    },\r\n    placeholder: {\r\n      type: String\r\n    }\r\n  },\r\n  data () {\r\n    return {\r\n      showDropdown: false,\r\n      noResults: true,\r\n      current: 0,\r\n      items: []\r\n    }\r\n  },\r\n  computed: {\r\n    primitiveData () {\r\n      if (this.data) {\r\n        return this.data.filter(value => {\r\n          value = this.matchCase ? value : value.toLowerCase()\r\n          var query = this.matchCase ? this.value : this.value.toLowerCase()\r\n          return this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1\r\n        }).slice(0, this.limit)\r\n      }\r\n    }\r\n  },\r\n  ready () {\r\n    // register a partial:\r\n    if (this.templateName && this.templateName !== 'default') {\r\n      Vue.partial(this.templateName, this.template)\r\n    }\r\n  },\r\n  methods: {\r\n    update () {\r\n      if (!this.value) {\r\n        this.reset()\r\n        return false\r\n      }\r\n      if (this.data) {\r\n        this.items = this.primitiveData\r\n        this.showDropdown = this.items.length > 0\r\n      }\r\n      if (this.async) {\r\n        callAjax(this.async + this.value, (data) => {\r\n          this.items = (this.key ? data[this.key] : data).slice(0, this.limit)\r\n          this.showDropdown = this.items.length > 0\r\n        })\r\n      }\r\n    },\r\n    reset () {\r\n      this.items = []\r\n      this.value = ''\r\n      this.loading = false\r\n      this.showDropdown = false\r\n    },\r\n    setActive (index) {\r\n      this.current = index\r\n    },\r\n    isActive (index) {\r\n      return this.current === index\r\n    },\r\n    hit (e) {\r\n      e.preventDefault()\r\n      this.onHit(this.items[this.current], this)\r\n    },\r\n    up () {\r\n      if (this.current > 0) this.current--\r\n    },\r\n    down () {\r\n      if (this.current < this.items.length - 1) this.current++\r\n    }\r\n  },\r\n  filters: {\r\n    highlight (value, phrase) {\r\n      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>')\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.dropdown-menu > li > a {\r\n  cursor: pointer;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(75);
	
	var Vue = window.Vue; // <template>
	//   <div style="position: relative"
	//     v-bind:class="{'open':showDropdown}"
	//   >
	//     <input type="text" class="form-control"
	//       :placeholder="placeholder"
	//       autocomplete="off"
	//       v-model="value"
	//       @input="update"
	//       @keydown.up="up"
	//       @keydown.down="down"
	//       @keydown.enter= "hit"
	//       @keydown.esc="reset"
	//       @blur="showDropdown = false"
	//     />
	//     <ul class="dropdown-menu" v-el:dropdown>
	//       <li v-for="item in items" v-bind:class="{'active': isActive($index)}">
	//         <a @mousedown.prevent="hit" @mousemove="setActive($index)">
	//           <partial :name="templateName"></partial>
	//         </a>
	//       </li>
	//     </ul>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	
	  partials: {
	    default: '<span v-html="item | highlight query"></span>'
	  },
	  props: {
	    value: {
	      twoWay: true,
	      type: String,
	      default: ''
	    },
	    data: {
	      type: Array
	    },
	    limit: {
	      type: Number,
	      default: 8
	    },
	    async: {
	      type: String
	    },
	    template: {
	      type: String
	    },
	    templateName: {
	      type: String,
	      default: 'default'
	    },
	    key: {
	      type: String,
	      default: null
	    },
	    matchCase: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    matchStart: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    onHit: {
	      type: Function,
	      default: function _default(items) {
	        this.reset();
	        this.value = items;
	      }
	    },
	    placeholder: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
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
	          var query = _this.matchCase ? _this.value : _this.value.toLowerCase();
	          return _this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
	        }).slice(0, this.limit);
	      }
	    }
	  },
	  ready: function ready() {
	    // register a partial:
	    if (this.templateName && this.templateName !== 'default') {
	      Vue.partial(this.templateName, this.template);
	    }
	  },
	
	  methods: {
	    update: function update() {
	      var _this2 = this;
	
	      if (!this.value) {
	        this.reset();
	        return false;
	      }
	      if (this.data) {
	        this.items = this.primitiveData;
	        this.showDropdown = this.items.length > 0;
	      }
	      if (this.async) {
	        (0, _utils.callAjax)(this.async + this.value, function (data) {
	          _this2.items = (_this2.key ? data[_this2.key] : data).slice(0, _this2.limit);
	          _this2.showDropdown = _this2.items.length > 0;
	        });
	      }
	    },
	    reset: function reset() {
	      this.items = [];
	      this.value = '';
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
	      this.onHit(this.items[this.current], this);
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
	// </script>
	//
	// <style>
	// .dropdown-menu > li > a {
	//   cursor: pointer;
	// }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 288 */
/***/ function(module, exports) {

	module.exports = "\n<div style=\"position: relative\"\n  v-bind:class=\"{'open':showDropdown}\"\n>\n  <input type=\"text\" class=\"form-control\"\n    :placeholder=\"placeholder\"\n    autocomplete=\"off\"\n    v-model=\"value\"\n    @input=\"update\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n    @blur=\"showDropdown = false\"\n  />\n  <ul class=\"dropdown-menu\" v-el:dropdown>\n    <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        <partial :name=\"templateName\"></partial>\n      </a>\n    </li>\n  </ul>\n</div>\n";

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = "\n  <doc-section id=\"typeahead\" name=\"Typeahead\">\n    <div class=\"bs-example\">\n      <h4>\n        Static arrays\n      </h4>\n      <typeahead\n        :data=\"USstate\"\n        placeholder=\"USA states\"\n      ></typeahead>\n      <hr>\n      <h4>\n      Asynchronous results\n      <tooltip trigger=\"click\" content=\"The suggestions via a Google Map API, are you behind a FireWall?\" placement=\"top\">\n        <small style=\"cursor:pointer\">(not working?)</small>\n      </tooltip>\n      </h4>\n      <typeahead\n        placeholder=\"CCCAddress, async via maps.googleapis.com\"\n        key=\"results\"\n        async=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n        template-name=\"async\"\n        :template=\"asyncTemplate\"\n        :on-hit=\"googleCallback\"\n      ></typeahead>\n      <hr>\n      <h4>\n      Custom templates for results\n      </h4>\n      <typeahead\n        placeholder=\"Github users, async via api.github.com\"\n        key=\"items\"\n        async=\"https://api.github.com/search/users?q=\"\n        template-name=\"github\"\n        :template=\"githubTemplate\"\n        :on-hit=\"githubCallback\"\n      ></typeahead>\n    </div>\n    <doc-code language=\"markup\">\n      <h4>Static arrays</h4>\n      <typeahead\n        :data=\"USstate\"\n        placeholder=\"USA states\">\n      </typeahead>\n\n      <h4>Asynchronous results</h4>\n        <typeahead\n          placeholder=\"Address, async via maps.googleapis.com\"\n          key=\"results\"\n          src=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n          template-name=\"async\"\n          :template=\"asyncTemplate\"\n          :on-hit=\"googleCallback\">\n      </typeahead>\n\n      <h4>Custom templates for results</h4>\n        <typeahead\n          placeholder=\"Github users, async via api.github.com\"\n          key=\"items\"\n          src=\"https://api.github.com/search/users?q=\"\n          template-name=\"typeahead-github-template\"\n          :template=\"githubTemplate\"\n          :on-hit=\"githubCallback\">\n      </typeahead>\n    </doc-code>\n    <doc-code language=\"javascript\">\n      new Vue {\n        components: {\n          typeahead\n        },\n        data() {\n          return {\n            USstate: ['Alabama', 'Alaska', 'Arizona',...],\n            asynchronous: '{{formatted_address}}',\n            customTemplate: '<img width=\"18px\" height=\"18px\" v-attr=\"src:avatar_url\"/>' +\n            '<span>{{login}}</span>'\n          }\n        },\n        methods: {\n          googleCallback(items, targetVM) {\n            const that = targetVM;\n            that.reset()\n            that.value = items.formatted_address\n          },\n          githubCallback(items) {\n            window.open(items.html_url, '_blank')\n          }\n        }\n      }\n    </doc-code>\n    <doc-options>\n      <div>\n        <p>value</p>\n        <p><code>String</code></p>\n        <p><code>''</code></p>\n        <p></p>\n      </div>\n      <div>\n        <p>data</p>\n        <p><code>Array</code></p>\n        <p></p>\n        <p>The local data source for suggestions. Expected to be a primitive array.</p>\n      </div>\n      <div>\n        <p>async</p>\n        <p><code>String</code></p>\n        <p></p>\n        <p>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</p>\n      </div>\n      <div>\n        <p>limit</p>\n        <p><code>Number</code></p>\n        <p><code>8</code></p>\n        <p>The max number of suggestions to be displayed.</p>\n      </div>\n      <div>\n        <p>key</p>\n        <p><code>String</code></p>\n        <p><code>null</code></p>\n        <p>The remote JSON key you want to render. if null, render directly using the remote JSON(should be Array).</p>\n      </div>\n      <div>\n        <p>match-case</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Case sensitive for suggestions.</p>\n      </div>\n      <div>\n        <p>match-start</p>\n        <p><code>Boolean</code></p>\n        <p><code>false</code></p>\n        <p>Match only against start of suggestions. E.g. if true, \"a\" matches \"ab\" but not \"ba\".</p>\n      </div>\n      <div>\n        <p>on-hit</p>\n        <p><code>Function</code></p>\n        <p></p>\n        <p>A callback function when you click or hit return on an item.</p>\n      </div>\n      <div>\n        <p>template</p>\n        <p><code>String</code></p>\n        <p><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></p>\n        <p>Used to render suggestion.</p>\n      </div>\n    </doc-options>\n  </div>\n</template>";

/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"wrapper\">\n  <navbar-header></navbar-header>\n  <div class=\"bs-docs-header\">\n    <div class=\"container\">\n      <h1>VueStrap</h1>\n      <p>Bootstrap components built with <a target=\"_blank\" href=\"http://vuejs.org/\">Vue.js</a>.</p>\n      <p>No jQuery, bootstrap.js, or any 3rd party plugins required.</p>\n      <br>\n      <p><a class=\"btn btn-outline-inverse btn-lg\" href=\"https://github.com/yuche/vue-strap\">Code on GitHub</a></p>\n    </div>\n  </div>\n  <container>\n    <div v-el:sections class=\"col-md-9\">\n      <getting-started></getting-started>\n      <accordion-docs></accordion-docs>\n      <affix-docs></affix-docs>\n      <alert-docs></alert-docs>\n      <aside-docs></aside-docs>\n      <button-group-docs></button-group-docs>\n      <checkbox-docs></checkbox-docs>\n      <carousel-docs></carousel-docs>\n      <datepicker-docs></datepicker-docs>\n      <dropdown-docs></dropdown-docs>\n      <input-docs></input-docs>\n      <modal-docs></modal-docs>\n      <popover-docs></popover-docs>\n      <progressbar-docs></progressbar-docs>\n      <radio-docs></radio-docs>\n      <select-docs></select-docs>\n      <tabs-docs></tabs-docs>\n      <tooltip-docs></tooltip-docs>\n      <typeahead-docs></typeahead-docs>\n      <spinner-docs></spinner-docs>\n    </div>\n    <div class=\"col-md-3\">\n      <affix-sidebar></affix-sidebar>\n    </div>\n  </container>\n</div>\n<footer class=\"bs-docs-footer\">\n  <div class=\"container\">\n    <p>Designed and built by <a href=\"https://github.com/yuche/\">yuche</a>.</p>\n    <p>\n      Using <a href=\"http://twitter.github.com/bootstrap\" target=\"_blank\">Twitter Bootstrap</a>\n      and the <a href=\"css/docs.css\" target=\"_blank\">Bootstrap's docs styles</a> designed and built by <a href=\"http://twitter.com/mdo\" target=\"_blank\">@mdo</a>\n      and <a href=\"http://twitter.com/fat\" target=\"_blank\">@fat</a>.\n    </p>\n    <p>\n      Code licensed under <a href=\"//github.com/mgcrea/angular-strap/blob/master/LICENSE.md\" target=\"_blank\">The MIT License</a>,\n      documentation under <a href=\"http://creativecommons.org/licenses/by/3.0/\">CC BY 3.0</a>.\n    </p>\n  </div>\n</footer>\n";

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(292);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(260)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?root=./docs!./docs.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?root=./docs!./docs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * Bootstrap Docs (http://getbootstrap.com)\r\n * Copyright 2011-2014 Twitter, Inc.\r\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\r\n * details, see http://creativecommons.org/licenses/by/3.0/.\r\n */\r\n\r\n\r\n/*\r\n * Bootstrap Documentation\r\n * Special styles for presenting Bootstrap's documentation and code examples.\r\n *\r\n * Table of contents:\r\n *\r\n * Scaffolding\r\n * Main navigation\r\n * Footer\r\n * Social buttons\r\n * Homepage\r\n * Page headers\r\n * Old docs callout\r\n * Ads\r\n * Side navigation\r\n * Docs sections\r\n * Callouts\r\n * Grid styles\r\n * Examples\r\n * Code snippets (highlight)\r\n * Responsive tests\r\n * Glyphicons\r\n * Customizer\r\n * MenuItem\r\n * Miscellaneous\r\n */\r\n\r\n\r\n/*\r\n * Scaffolding\r\n *\r\n * Update the basics of our documents to prep for docs content.\r\n */\r\n\r\nbody {\r\n  position: relative; /* For scrollspy */\r\n}\r\n\r\n/* Keep code small in tables on account of limited space */\r\n.table code {\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n}\r\n\r\n/* Outline button for use within the docs */\r\n.btn-outline {\r\n  color: #563d7c;\r\n  background-color: transparent;\r\n  border-color: #563d7c;\r\n}\r\n.btn-outline:hover,\r\n.btn-outline:focus,\r\n.btn-outline:active {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n  border-color: #563d7c;\r\n}\r\n\r\n/* Inverted outline button (white on dark) */\r\n.btn-outline-inverse {\r\n  color: #fff;\r\n  background-color: transparent;\r\n  border-color: #cdbfe3;\r\n}\r\n.btn-outline-inverse:hover,\r\n.btn-outline-inverse:focus,\r\n.btn-outline-inverse:active {\r\n  color: #563d7c;\r\n  text-shadow: none;\r\n  background-color: #fff;\r\n  border-color: #fff;\r\n}\r\n\r\n/* Bootstrap \"B\" icon */\r\n.bs-docs-booticon {\r\n  display: block;\r\n  font-weight: 500;\r\n  color: #fff;\r\n  text-align: center;\r\n  cursor: default;\r\n  background-color: #563d7c;\r\n  border-radius: 15%;\r\n}\r\n.bs-docs-booticon-sm {\r\n  width: 30px;\r\n  height: 30px;\r\n  font-size: 20px;\r\n  line-height: 28px;\r\n}\r\n.bs-docs-booticon-lg {\r\n  width: 144px;\r\n  height: 144px;\r\n  font-size: 108px;\r\n  line-height: 140px;\r\n}\r\n.bs-docs-booticon-inverse {\r\n  color: #563d7c;\r\n  background-color: #fff;\r\n}\r\n.bs-docs-booticon-outline {\r\n  background-color: transparent;\r\n  border: 1px solid #cdbfe3;\r\n}\r\n\r\n\r\n/*\r\n * Main navigation\r\n *\r\n * Turn the `.navbar` at the top of the docs purple.\r\n */\r\n\r\n.bs-docs-nav {\r\n  margin-bottom: 0;\r\n  background-color: #fff;\r\n  border-bottom: 0;\r\n}\r\n.bs-home-nav .bs-nav-b {\r\n  display: none;\r\n}\r\n.bs-docs-nav .navbar-brand,\r\n.bs-docs-nav .navbar-nav > li > a {\r\n  font-weight: 500;\r\n  color: #563d7c;\r\n}\r\n.bs-docs-nav .navbar-nav > li > a:hover,\r\n.bs-docs-nav .navbar-nav > .active > a,\r\n.bs-docs-nav .navbar-nav > .active > a:hover {\r\n  color: #463265;\r\n  background-color: #f9f9f9;\r\n}\r\n.bs-docs-nav .navbar-toggle .icon-bar {\r\n  background-color: #563d7c;\r\n}\r\n.bs-docs-nav .navbar-header .navbar-toggle {\r\n  border-color: #fff;\r\n}\r\n.bs-docs-nav .navbar-header .navbar-toggle:hover,\r\n.bs-docs-nav .navbar-header .navbar-toggle:focus {\r\n  background-color: #f9f9f9;\r\n  border-color: #f9f9f9;\r\n}\r\n\r\n\r\n/*\r\n * Footer\r\n *\r\n * Separated section of content at the bottom of all pages, save the homepage.\r\n */\r\n\r\n.bs-docs-footer {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  margin-top: 100px;\r\n  color: #777;\r\n  text-align: center;\r\n  border-top: 1px solid #e5e5e5;\r\n}\r\n.bs-docs-footer-links {\r\n  padding-left: 0;\r\n  margin-top: 20px;\r\n  color: #999;\r\n}\r\n.bs-docs-footer-links li {\r\n  display: inline;\r\n  padding: 0 2px;\r\n}\r\n.bs-docs-footer-links li:first-child {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-docs-footer p {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Social buttons\r\n *\r\n * Twitter and GitHub social action buttons (for homepage and footer).\r\n */\r\n\r\n.bs-docs-social {\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n.bs-docs-social-buttons {\r\n  display: inline-block;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n.bs-docs-social-buttons li {\r\n  display: inline-block;\r\n  padding: 5px 8px;\r\n  line-height: 1;\r\n}\r\n.bs-docs-social-buttons .twitter-follow-button {\r\n  width: 225px !important;\r\n}\r\n.bs-docs-social-buttons .twitter-share-button {\r\n  width: 98px !important;\r\n}\r\n/* Style the GitHub buttons via CSS instead of inline attributes */\r\n.github-btn {\r\n  overflow: hidden;\r\n  border: 0;\r\n}\r\n\r\n\r\n/*\r\n * Homepage\r\n *\r\n * Tweaks to the custom homepage and the masthead (main jumbotron).\r\n */\r\n\r\n/* Share masthead with page headers */\r\n.bs-docs-masthead,\r\n.bs-docs-header {\r\n  position: relative;\r\n  padding: 30px 15px;\r\n  color: #cdbfe3;\r\n  text-align: center;\r\n  text-shadow: 0 1px 0 rgba(0,0,0,.1);\r\n  background-color: #6f5499;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#563d7c), to(#6f5499));\r\n  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);\r\n  background-image:      -o-linear-gradient(top, #563d7c 0%, #6f5499 100%);\r\n  background-image:         linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);\r\n  background-repeat: repeat-x;\r\n}\r\n\r\n/* Masthead (headings and download button) */\r\n.bs-docs-masthead .bs-docs-booticon {\r\n  margin: 0 auto 30px;\r\n}\r\n.bs-docs-masthead h1 {\r\n  font-weight: 300;\r\n  line-height: 1;\r\n  color: #fff;\r\n}\r\n.bs-docs-masthead .lead {\r\n  margin: 0 auto 30px;\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n.bs-docs-masthead .version {\r\n  margin-top: -15px;\r\n  margin-bottom: 30px;\r\n  color: #9783b9;\r\n}\r\n.bs-docs-masthead .btn {\r\n  width: 100%;\r\n  padding: 15px 30px;\r\n  font-size: 20px;\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .bs-docs-masthead .btn {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-docs-masthead h1 {\r\n    font-size: 60px;\r\n  }\r\n  .bs-docs-masthead .lead {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .bs-docs-masthead .lead {\r\n    width: 80%;\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Page headers\r\n *\r\n * Jumbotron-esque headers at the top of every page that's not the homepage.\r\n */\r\n\r\n/* Page headers */\r\n.bs-docs-header {\r\n  margin-bottom: 40px;\r\n  font-size: 20px;\r\n}\r\n.bs-docs-header h1 {\r\n  margin-top: 0;\r\n  color: #fff;\r\n}\r\n.bs-docs-header p {\r\n  margin-bottom: 0;\r\n  font-weight: 300;\r\n  line-height: 1.4;\r\n}\r\n.bs-docs-header .container {\r\n  position: relative;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-docs-header {\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n    font-size: 24px;\r\n    text-align: left;\r\n  }\r\n  .bs-docs-header h1 {\r\n    font-size: 60px;\r\n    line-height: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .bs-docs-header h1,\r\n  .bs-docs-header p {\r\n    margin-right: 380px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Carbon ads\r\n *\r\n * Single display ad that shows on all pages (except homepage) in page headers.\r\n * The hella `!important` is required for any pre-set property.\r\n */\r\n\r\n.carbonad {\r\n  width: auto !important;\r\n  height: auto !important;\r\n  padding: 20px !important;\r\n  margin: 30px -30px -31px !important;\r\n  overflow: hidden; /* clearfix */\r\n  font-size: 13px !important;\r\n  line-height: 16px !important;\r\n  text-align: left;\r\n  background: transparent !important;\r\n  border: solid #866ab3 !important;\r\n  border-width: 1px 0 !important;\r\n}\r\n.carbonad-img {\r\n  margin: 0 !important;\r\n}\r\n.carbonad-text,\r\n.carbonad-tag {\r\n  display: block !important;\r\n  float: none !important;\r\n  width: auto !important;\r\n  height: auto !important;\r\n  margin-left: 145px !important;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\r\n}\r\n.carbonad-text {\r\n  padding-top: 0 !important;\r\n}\r\n.carbonad-tag {\r\n  color: inherit !important;\r\n  text-align: left !important;\r\n}\r\n.carbonad-text a,\r\n.carbonad-tag a {\r\n  color: #fff !important;\r\n}\r\n.carbonad #azcarbon > img {\r\n  display: none; /* hide what I assume are tracking images */\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .carbonad {\r\n    width: 330px !important;\r\n    margin: 20px auto !important;\r\n    border-width: 1px !important;\r\n    border-radius: 4px;\r\n  }\r\n  .bs-docs-masthead .carbonad {\r\n    margin: 50px auto 0 !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .carbonad {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .carbonad {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 15px; /* 15px instead of 0 since box-sizing */\r\n    width: 330px !important;\r\n    padding: 15px !important;\r\n    margin: 0 !important;\r\n  }\r\n  .bs-docs-masthead .carbonad {\r\n    position: static;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Homepage featurettes\r\n *\r\n * Reasons to use Bootstrap, entries from the Expo, and more.\r\n */\r\n\r\n.bs-docs-featurette {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  color: #555;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n.bs-docs-featurette + .bs-docs-footer {\r\n  margin-top: 0;\r\n  border-top: 0;\r\n}\r\n\r\n.bs-docs-featurette-title {\r\n  margin-bottom: 5px;\r\n  font-size: 30px;\r\n  font-weight: normal;\r\n  color: #333;\r\n}\r\n.half-rule {\r\n  width: 100px;\r\n  margin: 40px auto;\r\n}\r\n.bs-docs-featurette h3 {\r\n  margin-bottom: 5px;\r\n  font-weight: normal;\r\n  color: #333;\r\n}\r\n.bs-docs-featurette-img {\r\n  display: block;\r\n  margin-bottom: 20px;\r\n  color: #333;\r\n}\r\n.bs-docs-featurette-img:hover {\r\n  color: #428bca;\r\n  text-decoration: none;\r\n}\r\n.bs-docs-featurette-img img {\r\n  display: block;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .bs-docs-featurette .img-responsive {\r\n    margin-top: 30px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .bs-docs-featurette {\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n  }\r\n  .bs-docs-featurette-title {\r\n    font-size: 40px;\r\n  }\r\n  .bs-docs-featurette .lead {\r\n    max-width: 80%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n  .bs-docs-featured-sites .col-sm-3:first-child img {\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n  }\r\n  .bs-docs-featured-sites .col-sm-3:last-child img {\r\n    border-top-right-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n  }\r\n\r\n  .bs-docs-featurette .img-responsive {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n/* Featured sites */\r\n.bs-docs-featured-sites {\r\n  margin-right: -1px;\r\n  margin-left: -1px;\r\n}\r\n.bs-docs-featured-sites .col-sm-3 {\r\n  padding-right: 1px;\r\n  padding-left: 1px;\r\n}\r\n.bs-docs-featured-sites .img-responsive {\r\n  margin-bottom: 15px;\r\n}\r\n@media (min-width: 480px) {\r\n  .bs-docs-featured-sites .img-responsive {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n/* Example thumbnails */\r\n@media (max-width: 480px) {\r\n  .bs-examples {\r\n    margin-right: -10px;\r\n    margin-left: -10px;\r\n  }\r\n  .bs-examples > [class^=\"col-\"] {\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Side navigation\r\n *\r\n * Scrollspy and affixed enhanced navigation to highlight sections and secondary\r\n * sections of docs content.\r\n */\r\n\r\n/* By default it's not affixed in mobile views, so undo that */\r\n.bs-docs-sidebar.affix {\r\n  position: static;\r\n}\r\n@media (min-width: 768px) {\r\n  .bs-docs-sidebar {\r\n    padding-left: 20px;\r\n  }\r\n}\r\n\r\n/* First level of nav */\r\n.bs-docs-sidenav {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* All levels of nav */\r\n.bs-docs-sidebar .nav > li > a {\r\n  display: block;\r\n  padding: 4px 20px;\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  color: #999;\r\n}\r\n.bs-docs-sidebar .nav > li > a:hover,\r\n.bs-docs-sidebar .nav > li > a:focus {\r\n  padding-left: 19px;\r\n  color: #1D976C;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  border-left: 1px solid #1D976C;\r\n}\r\n.bs-docs-sidebar .nav > .active > a,\r\n.bs-docs-sidebar .nav > .active:hover > a,\r\n.bs-docs-sidebar .nav > .active:focus > a {\r\n  padding-left: 18px;\r\n  font-weight: bold;\r\n  color: #1D976C;\r\n  background-color: transparent;\r\n  border-left: 2px solid #1D976C;\r\n}\r\n\r\n/* Nav: second level (shown on .active) */\r\n.bs-docs-sidebar .nav .nav {\r\n  display: none; /* Hide by default, but at >768px, show it */\r\n  padding-bottom: 10px;\r\n}\r\n.bs-docs-sidebar .nav .nav > li > a {\r\n  padding-top: 1px;\r\n  padding-bottom: 1px;\r\n  padding-left: 30px;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n}\r\n.bs-docs-sidebar .nav .nav > li > a:hover,\r\n.bs-docs-sidebar .nav .nav > li > a:focus {\r\n  padding-left: 29px;\r\n}\r\n.bs-docs-sidebar .nav .nav > .active > a,\r\n.bs-docs-sidebar .nav .nav > .active:hover > a,\r\n.bs-docs-sidebar .nav .nav > .active:focus > a {\r\n  padding-left: 28px;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Back to top (hidden on mobile) */\r\n.back-to-top,\r\n.bs-docs-theme-toggle {\r\n  display: none;\r\n  padding: 4px 10px;\r\n  margin-top: 10px;\r\n  margin-left: 10px;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: #999;\r\n}\r\n.back-to-top:hover,\r\n.bs-docs-theme-toggle:hover {\r\n  color: #563d7c;\r\n  text-decoration: none;\r\n}\r\n.bs-docs-theme-toggle {\r\n  margin-top: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .back-to-top,\r\n  .bs-docs-theme-toggle {\r\n    display: block;\r\n  }\r\n}\r\n\r\n/* Show and affix the side nav when space allows it */\r\n@media (min-width: 992px) {\r\n  .bs-docs-sidebar .nav > .active > ul {\r\n    display: block;\r\n  }\r\n  /* Widen the fixed sidebar */\r\n  .bs-docs-sidebar.affix,\r\n  .bs-docs-sidebar.affix-bottom {\r\n    width: 213px;\r\n  }\r\n  .bs-docs-sidebar.affix {\r\n    position: fixed; /* Undo the static from mobile first approach */\r\n    top: 20px;\r\n  }\r\n  .bs-docs-sidebar.affix-bottom {\r\n    position: absolute; /* Undo the static from mobile first approach */\r\n  }\r\n  .bs-docs-sidebar.affix-bottom .bs-docs-sidenav,\r\n  .bs-docs-sidebar.affix .bs-docs-sidenav {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  /* Widen the fixed sidebar again */\r\n  .bs-docs-sidebar.affix-bottom,\r\n  .bs-docs-sidebar.affix {\r\n    width: 263px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Docs sections\r\n *\r\n * Content blocks for each component or feature.\r\n */\r\n\r\n/* Space things out */\r\n.bs-docs-section {\r\n  margin-bottom: 60px;\r\n}\r\n.bs-docs-section:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\nh1[id] {\r\n  padding-top: 20px;\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n/*\r\n * Callouts\r\n *\r\n * Not quite alerts, but custom and helpful notes for folks reading the docs.\r\n * Requires a base and modifier class.\r\n */\r\n\r\n/* Common styles for all types */\r\n.bs-callout {\r\n  padding: 20px;\r\n  margin: 20px 0;\r\n  border: 1px solid #eee;\r\n  border-left-width: 5px;\r\n  border-radius: 3px;\r\n}\r\n.bs-callout h4 {\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.bs-callout p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.bs-callout code {\r\n  border-radius: 3px;\r\n}\r\n\r\n/* Tighten up space between multiple callouts */\r\n.bs-callout + .bs-callout {\r\n  margin-top: -5px;\r\n}\r\n\r\n/* Variations */\r\n.bs-callout-danger {\r\n  border-left-color: #d9534f;\r\n}\r\n.bs-callout-danger h4 {\r\n  color: #d9534f;\r\n}\r\n.bs-callout-warning {\r\n  border-left-color: #f0ad4e;\r\n}\r\n.bs-callout-warning h4 {\r\n  color: #f0ad4e;\r\n}\r\n.bs-callout-info {\r\n  border-left-color: #5bc0de;\r\n}\r\n.bs-callout-info h4 {\r\n  color: #5bc0de;\r\n}\r\n\r\n\r\n/*\r\n * Color swatches\r\n *\r\n * Color swatches and associated values for our grayscale and brand colors.\r\n */\r\n\r\n.color-swatches {\r\n  margin: 0 -5px;\r\n  overflow: hidden; /* clearfix */\r\n}\r\n.color-swatch {\r\n  float: left;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: 0 5px;\r\n  border-radius: 3px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .color-swatch {\r\n    width: 100px;\r\n    height: 100px;\r\n  }\r\n}\r\n\r\n/* Framework colors */\r\n.color-swatches .gray-darker {\r\n  background-color: #222;\r\n}\r\n.color-swatches .gray-dark {\r\n  background-color: #333;\r\n}\r\n.color-swatches .gray {\r\n  background-color: #555;\r\n}\r\n.color-swatches .gray-light {\r\n  background-color: #999;\r\n}\r\n.color-swatches .gray-lighter {\r\n  background-color: #eee;\r\n}\r\n.color-swatches .brand-primary {\r\n  background-color: #428bca;\r\n}\r\n.color-swatches .brand-success {\r\n  background-color: #5cb85c;\r\n}\r\n.color-swatches .brand-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n.color-swatches .brand-danger {\r\n  background-color: #d9534f;\r\n}\r\n.color-swatches .brand-info {\r\n  background-color: #5bc0de;\r\n}\r\n\r\n/* Docs colors */\r\n.color-swatches .bs-purple {\r\n  background-color: #563d7c;\r\n}\r\n.color-swatches .bs-purple-light {\r\n  background-color: #c7bfd3;\r\n}\r\n.color-swatches .bs-purple-lighter {\r\n  background-color: #e5e1ea;\r\n}\r\n.color-swatches .bs-gray {\r\n  background-color: #f9f9f9;\r\n}\r\n\r\n\r\n/*\r\n * Team members\r\n *\r\n * Avatars, names, and usernames for core team.\r\n */\r\n\r\n.bs-team .team-member {\r\n  line-height: 32px;\r\n  color: #555;\r\n}\r\n.bs-team .team-member:hover {\r\n  color: #333;\r\n  text-decoration: none;\r\n}\r\n.bs-team .github-btn {\r\n  float: right;\r\n  width: 180px;\r\n  height: 20px;\r\n  margin-top: 6px;\r\n}\r\n.bs-team img {\r\n  float: left;\r\n  width: 32px;\r\n  margin-right: 10px;\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\n/*\r\n * Grid examples\r\n *\r\n * Highlight the grid columns within the docs so folks can see their padding,\r\n * alignment, sizing, etc.\r\n */\r\n\r\n.show-grid {\r\n  margin-bottom: 15px;\r\n}\r\n.show-grid [class^=\"col-\"] {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  background-color: #eee;\r\n  background-color: rgba(86,61,124,.15);\r\n  border: 1px solid #ddd;\r\n  border: 1px solid rgba(86,61,124,.2);\r\n}\r\n\r\n\r\n/*\r\n * Examples\r\n *\r\n * Isolated sections of example content for each component or feature. Usually\r\n * followed by a code snippet.\r\n */\r\n\r\n.bs-example {\r\n  position: relative;\r\n  padding: 45px 15px 15px;\r\n  margin: 0 -15px 15px;\r\n  border-color: #e5e5e5 #eee #eee;\r\n  border-style: solid;\r\n  border-width: 1px 0;\r\n  -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\r\n          box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\r\n}\r\n/* Echo out a label for the example */\r\n.bs-example:after {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  color: #959595;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  content: \"Example\";\r\n}\r\n\r\n/* Tweak display of the code snippets when following an example */\r\n.bs-example + .highlight {\r\n  margin: -15px -15px 15px;\r\n  border-width: 0 0 1px;\r\n  border-radius: 0;\r\n}\r\n\r\n/* Make the examples and snippets not full-width */\r\n@media (min-width: 768px) {\r\n  .bs-example {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    background-color: #fff;\r\n    border-color: #ddd;\r\n    border-width: 1px;\r\n    border-radius: 4px 4px 0 0;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n  }\r\n  .bs-example + .highlight {\r\n    margin-top: -16px;\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    border-width: 1px;\r\n    border-bottom-right-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n  }\r\n}\r\n\r\n/* Undo width of container */\r\n.bs-example .container {\r\n  width: auto;\r\n}\r\n\r\n/* Tweak content of examples for optimum awesome */\r\n.bs-example > p:last-child,\r\n.bs-example > ul:last-child,\r\n.bs-example > ol:last-child,\r\n.bs-example > blockquote:last-child,\r\n.bs-example > .form-control:last-child,\r\n.bs-example > .table:last-child,\r\n.bs-example > .navbar:last-child,\r\n.bs-example > .jumbotron:last-child,\r\n.bs-example > .alert:last-child,\r\n.bs-example > .panel:last-child,\r\n.bs-example > .list-group:last-child,\r\n.bs-example > .well:last-child,\r\n.bs-example > .progress:last-child,\r\n.bs-example > .table-responsive:last-child > .table {\r\n  margin-bottom: 0;\r\n}\r\n.bs-example > p > .close {\r\n  float: none;\r\n}\r\n\r\n/* Typography */\r\n.bs-example-type .table .type-info {\r\n  color: #999;\r\n  vertical-align: middle;\r\n}\r\n.bs-example-type .table td {\r\n  padding: 15px 0;\r\n  border-color: #eee;\r\n}\r\n.bs-example-type .table tr:first-child td {\r\n  border-top: 0;\r\n}\r\n.bs-example-type h1,\r\n.bs-example-type h2,\r\n.bs-example-type h3,\r\n.bs-example-type h4,\r\n.bs-example-type h5,\r\n.bs-example-type h6 {\r\n  margin: 0;\r\n}\r\n\r\n/* Contextual background colors */\r\n.bs-example-bg-classes p {\r\n  padding: 15px;\r\n}\r\n\r\n/* Images */\r\n.bs-example > .img-circle,\r\n.bs-example > .img-rounded,\r\n.bs-example > .img-thumbnail {\r\n  margin: 5px;\r\n}\r\n\r\n/* Tables */\r\n.bs-example > .table-responsive > .table {\r\n  background-color: #fff;\r\n}\r\n\r\n/* Buttons */\r\n.bs-example > .btn,\r\n.bs-example > .btn-group {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.bs-example > .btn-toolbar + .btn-toolbar {\r\n  margin-top: 10px;\r\n}\r\n\r\n/* Forms */\r\n.bs-example-control-sizing select,\r\n.bs-example-control-sizing input[type=\"text\"] + input[type=\"text\"] {\r\n  margin-top: 10px;\r\n}\r\n.bs-example-form .input-group {\r\n  margin-bottom: 10px;\r\n}\r\n.bs-example > textarea.form-control {\r\n  resize: vertical;\r\n}\r\n\r\n/* List groups */\r\n.bs-example > .list-group {\r\n  max-width: 400px;\r\n}\r\n\r\n/* Navbars */\r\n.bs-example .navbar:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.bs-navbar-top-example,\r\n.bs-navbar-bottom-example {\r\n  z-index: 1;\r\n  padding: 0;\r\n  overflow: hidden; /* cut the drop shadows off */\r\n}\r\n.bs-navbar-top-example .navbar-header,\r\n.bs-navbar-bottom-example .navbar-header {\r\n  margin-left: 0;\r\n}\r\n.bs-navbar-top-example .navbar-fixed-top,\r\n.bs-navbar-bottom-example .navbar-fixed-bottom {\r\n  position: relative;\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n.bs-navbar-top-example {\r\n  padding-bottom: 45px;\r\n}\r\n.bs-navbar-top-example:after {\r\n  top: auto;\r\n  bottom: 15px;\r\n}\r\n.bs-navbar-top-example .navbar-fixed-top {\r\n  top: -1px;\r\n}\r\n.bs-navbar-bottom-example {\r\n  padding-top: 45px;\r\n}\r\n.bs-navbar-bottom-example .navbar-fixed-bottom {\r\n  bottom: -1px;\r\n}\r\n.bs-navbar-bottom-example .navbar {\r\n  margin-bottom: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  .bs-navbar-top-example .navbar-fixed-top,\r\n  .bs-navbar-bottom-example .navbar-fixed-bottom {\r\n    position: absolute;\r\n  }\r\n}\r\n\r\n/* Pagination */\r\n.bs-example .pagination {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* Pager */\r\n.bs-example > .pager {\r\n  margin-top: 0;\r\n}\r\n\r\n/* Example modals */\r\n.bs-example-modal {\r\n  background-color: #f5f5f5;\r\n}\r\n.bs-example-modal .modal {\r\n  position: relative;\r\n  top: auto;\r\n  right: auto;\r\n  bottom: auto;\r\n  left: auto;\r\n  z-index: 1;\r\n  display: block;\r\n}\r\n.bs-example-modal .modal-dialog {\r\n  left: auto;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.custom-modal {\r\n  width: 90%;\r\n}\r\n\r\n/* Example dropdowns */\r\n.bs-example > .dropdown > .dropdown-toggle {\r\n  float: left;\r\n}\r\n.bs-example > .dropdown > .dropdown-menu {\r\n  position: static;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  clear: left;\r\n}\r\n\r\n/* Example tabbable tabs */\r\n.bs-example-tabs .nav-tabs {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n/* Tooltips */\r\n.bs-example-tooltips {\r\n  text-align: center;\r\n}\r\n.bs-example-tooltips > .btn {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n/* Popovers */\r\n.bs-example-popover {\r\n  padding-bottom: 24px;\r\n  background-color: #f9f9f9;\r\n}\r\n.bs-example-popover .popover {\r\n  position: relative;\r\n  display: block;\r\n  float: left;\r\n  width: 260px;\r\n  margin: 20px;\r\n}\r\n\r\n/* Scrollspy demo on fixed height div */\r\n.scrollspy-example {\r\n  position: relative;\r\n  height: 200px;\r\n  margin-top: 10px;\r\n  overflow: auto;\r\n}\r\n\r\n/* MenuItem */\r\n.bs-example .dropdown-menu.open {\r\n  position: static;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  clear: left;\r\n}\r\n\r\n\r\n/*\r\n * Code snippets\r\n *\r\n * Generated via Pygments and Jekyll, these are snippets of HTML, CSS, and JS.\r\n */\r\n\r\n.highlight {\r\n  padding: 9px 14px;\r\n  margin-bottom: 14px;\r\n  background-color: #f7f7f9;\r\n  border: 1px solid #e1e1e8;\r\n  border-radius: 4px;\r\n}\r\n.highlight pre {\r\n  padding: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  word-break: normal;\r\n  word-wrap: nowrap;\r\n  white-space: nowrap;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.highlight pre code {\r\n  font-size: inherit;\r\n  color: #333; /* Effectively the base text color */\r\n}\r\n.highlight pre code:first-child {\r\n  display: inline-block;\r\n  padding-right: 45px;\r\n}\r\n\r\n\r\n/*\r\n * Responsive tests\r\n *\r\n * Generate a set of tests to show the responsive utilities in action.\r\n */\r\n\r\n/* Responsive (scrollable) doc tables */\r\n.table-responsive .highlight pre {\r\n  white-space: normal;\r\n}\r\n\r\n/* Utility classes table  */\r\n.bs-table th small,\r\n.responsive-utilities th small {\r\n  display: block;\r\n  font-weight: normal;\r\n  color: #999;\r\n}\r\n.responsive-utilities tbody th {\r\n  font-weight: normal;\r\n}\r\n.responsive-utilities td {\r\n  text-align: center;\r\n}\r\n.responsive-utilities td.is-visible {\r\n  color: #468847;\r\n  background-color: #dff0d8 !important;\r\n}\r\n.responsive-utilities td.is-hidden {\r\n  color: #ccc;\r\n  background-color: #f9f9f9 !important;\r\n}\r\n\r\n/* Responsive tests */\r\n.responsive-utilities-test {\r\n  margin-top: 5px;\r\n}\r\n.responsive-utilities-test .col-xs-6 {\r\n  margin-bottom: 10px;\r\n}\r\n.responsive-utilities-test span {\r\n  display: block;\r\n  padding: 15px 10px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  line-height: 1.1;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n}\r\n.visible-on .col-xs-6 .hidden-xs,\r\n.visible-on .col-xs-6 .hidden-sm,\r\n.visible-on .col-xs-6 .hidden-md,\r\n.visible-on .col-xs-6 .hidden-lg,\r\n.hidden-on .col-xs-6 .hidden-xs,\r\n.hidden-on .col-xs-6 .hidden-sm,\r\n.hidden-on .col-xs-6 .hidden-md,\r\n.hidden-on .col-xs-6 .hidden-lg {\r\n  color: #999;\r\n  border: 1px solid #ddd;\r\n}\r\n.visible-on .col-xs-6 .visible-xs-block,\r\n.visible-on .col-xs-6 .visible-sm-block,\r\n.visible-on .col-xs-6 .visible-md-block,\r\n.visible-on .col-xs-6 .visible-lg-block,\r\n.hidden-on .col-xs-6 .visible-xs-block,\r\n.hidden-on .col-xs-6 .visible-sm-block,\r\n.hidden-on .col-xs-6 .visible-md-block,\r\n.hidden-on .col-xs-6 .visible-lg-block {\r\n  color: #468847;\r\n  background-color: #dff0d8;\r\n  border: 1px solid #d6e9c6;\r\n}\r\n\r\n\r\n/*\r\n * Glyphicons\r\n *\r\n * Special styles for displaying the icons and their classes in the docs.\r\n */\r\n\r\n.bs-glyphicons {\r\n  margin: 0 -10px 20px;\r\n  overflow: hidden;\r\n}\r\n.bs-glyphicons-list {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.bs-glyphicons li {\r\n  float: left;\r\n  width: 25%;\r\n  height: 115px;\r\n  padding: 10px;\r\n  font-size: 10px;\r\n  line-height: 1.4;\r\n  text-align: center;\r\n  background-color: #f9f9f9;\r\n  border: 1px solid #fff;\r\n}\r\n.bs-glyphicons .glyphicon {\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 24px;\r\n}\r\n.bs-glyphicons .glyphicon-class {\r\n  display: block;\r\n  text-align: center;\r\n  word-wrap: break-word; /* Help out IE10+ with class names */\r\n}\r\n.bs-glyphicons li:hover {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-glyphicons {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n  .bs-glyphicons li {\r\n    width: 12.5%;\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Customizer\r\n *\r\n * Since this is so form control heavy, we have quite a few styles to customize\r\n * the display of inputs, headings, and more. Also included are all the download\r\n * buttons and actions.\r\n */\r\n\r\n.bs-customizer .toggle {\r\n  float: right;\r\n  margin-top: 25px;\r\n}\r\n\r\n/* Headings and form contrls */\r\n.bs-customizer label {\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n  color: #555;\r\n}\r\n.bs-customizer h2 {\r\n  padding-top: 30px;\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.bs-customizer h3 {\r\n  margin-bottom: 0;\r\n}\r\n.bs-customizer h4 {\r\n  margin-top: 15px;\r\n  margin-bottom: 0;\r\n}\r\n.bs-customizer .bs-callout h4 {\r\n  margin-top: 0; /* lame, but due to specificity we have to duplicate */\r\n  margin-bottom: 5px;\r\n}\r\n.bs-customizer input[type=\"text\"] {\r\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\r\n  background-color: #fafafa;\r\n}\r\n.bs-customizer .help-block {\r\n  margin-bottom: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n/* For the variables, use regular weight */\r\n#less-section label {\r\n  font-weight: normal;\r\n}\r\n\r\n.bs-customizer-input {\r\n  float: left;\r\n  width: 33.333333%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n/* Downloads */\r\n.bs-customize-download .btn-outline {\r\n  padding: 20px;\r\n}\r\n\r\n/* Error handling */\r\n.bs-customizer-alert {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n  padding: 15px 0;\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-bottom: 1px solid #b94441;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\r\n          box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\r\n}\r\n.bs-customizer-alert .close {\r\n  margin-top: -4px;\r\n  font-size: 24px;\r\n}\r\n.bs-customizer-alert p {\r\n  margin-bottom: 0;\r\n}\r\n.bs-customizer-alert .glyphicon {\r\n  margin-right: 5px;\r\n}\r\n.bs-customizer-alert pre {\r\n  margin: 10px 0 0;\r\n  color: #fff;\r\n  background-color: #a83c3a;\r\n  border-color: #973634;\r\n  -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\r\n          box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\r\n}\r\n\r\n\r\n/*\r\n * Brand guidelines\r\n *\r\n * Extra styles for displaying wordmarks, logos, etc.\r\n */\r\n\r\n/* Logo series wrapper */\r\n.bs-brand-logos {\r\n  display: table;\r\n  width: 100%;\r\n  margin-bottom: 15px;\r\n  overflow: hidden;\r\n  color: #563d7c;\r\n  background-color: #f9f9f9;\r\n  border-radius: 4px;\r\n}\r\n\r\n/* Individual items */\r\n.bs-brand-item {\r\n  padding: 60px 0;\r\n  text-align: center;\r\n}\r\n.bs-brand-item + .bs-brand-item {\r\n  border-top: 1px solid #fff;\r\n}\r\n.bs-brand-logos .inverse {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n}\r\n.bs-brand-item .svg {\r\n  width: 144px;\r\n  height: 144px;\r\n}\r\n\r\n/* Heading content within */\r\n.bs-brand-item h1,\r\n.bs-brand-item h3 {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.bs-brand-item .bs-docs-booticon {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n/* Make the icons stand out on what is/isn't okay */\r\n.bs-brand-item .glyphicon {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 10px auto -10px;\r\n  line-height: 30px;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n}\r\n.bs-brand-item .glyphicon-ok {\r\n  background-color: #5cb85c;\r\n}\r\n.bs-brand-item .glyphicon-remove {\r\n  background-color: #d9534f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bs-brand-item {\r\n    display: table-cell;\r\n    width: 1%;\r\n  }\r\n  .bs-brand-item + .bs-brand-item {\r\n    border-top: 0;\r\n    border-left: 1px solid #fff;\r\n  }\r\n  .bs-brand-item h1 {\r\n    font-size: 60px;\r\n  }\r\n}\r\n\r\n\r\n/*\r\n * Miscellaneous\r\n *\r\n * Odds and ends for optimum docs display.\r\n */\r\n\r\n/* Examples gallery: space out content better */\r\n.bs-examples .thumbnail {\r\n  margin-bottom: 10px;\r\n}\r\n.bs-examples h4 {\r\n  margin-bottom: 5px;\r\n}\r\n.bs-examples p {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* Pseudo :focus state for showing how it looks in the docs */\r\n#focusedInput {\r\n  border-color: rgb(204,204,204); /* Restate unfocused value to make CSSLint happy that there's a pre-CSS3 fallback*/\r\n  border-color: rgba(82,168,236,.8);\r\n  outline: 0;\r\n  outline: thin dotted \\9; /* IE6-9 */\r\n  -webkit-box-shadow: 0 0 8px rgba(82,168,236,.6);\r\n          box-shadow: 0 0 8px rgba(82,168,236,.6);\r\n}\r\n\r\n\r\n/*\r\n * ZeroClipboard styles\r\n */\r\n\r\n.zero-clipboard {\r\n  position: relative;\r\n  display: none;\r\n}\r\n.btn-clipboard {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 10;\r\n  display: block;\r\n  padding: 5px 8px;\r\n  font-size: 12px;\r\n  color: #777;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border: 1px solid #e1e1e8;\r\n  border-radius: 0 4px 0 4px;\r\n}\r\n.btn-clipboard-hover {\r\n  color: #fff;\r\n  background-color: #563d7c;\r\n  border-color: #563d7c;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .zero-clipboard {\r\n    display: block;\r\n  }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(294);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(260)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?root=./docs!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?root=./docs!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(86)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n * React-Bootstrap Documentation\r\n * Special styles for presenting react-bootstrap's documentation and code examples.\r\n * Based on the Bootstrap Documentation styles and overridden as necessary.\r\n */\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro', 'helvetica neue', 'Avenir Next', 'Avenir',Arial, sans-serif;\r\n}\r\n\r\n.bs-docs-section h1 {\r\n  font-size: 42px\r\n}\r\n\r\n.bs-docs-nav .navbar-nav > li > a {\r\n  color: #333;\r\n}\r\n.bs-docs-footer {\r\n  padding-top: 20px;\r\n  text-align: left;\r\n}\r\n.bs-docs-nav .navbar-collapse {\r\n  overflow: hidden;\r\n}\r\n.bs-docs-nav {\r\n    box-shadow: 0 3px 3px rgba(0,0,0,0.175);\r\n}\r\n\r\n.bs-docs-header p {\r\n  font-weight: lighter;\r\n}\r\n\r\n\r\n.bs-docs-header a {\r\n  color: white;\r\n  font-weight: normal;\r\n}\r\n.btn-outline-inverse {\r\n  border-color: white;\r\n  transition: color .15s ease;\r\n}\r\n.bs-docs-header a:hover,\r\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active,\r\n.bs-docs-nav .navbar-brand {\r\n  color: #1D976C;\r\n}\r\n\r\n.bs-docs-masthead, .bs-docs-header {\r\n  background:         linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* W3C */\r\n\r\n  filter: none;\r\n  color: #e9e9e9;\r\n}\r\n\r\n.bs-docs-masthead {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.bs-docs-header h1 {\r\n  color: #ffffff;\r\n}\r\n\r\n.bs-docs-header p {\r\n  color: #ffffff;\r\n}\r\n\r\na.back-to-top {\r\n  font-size: 13px;\r\n  margin-top: 0;\r\n}\r\n\r\n.bs-docs-sidebar .nav>li>a {\r\n  color: #767676;\r\n  font-size: 14px;\r\n}\r\n\r\n.bs-docs-sidebar .nav>li>a:hover, .bs-docs-sidebar .nav>li>a:focus {\r\n  color: #42b983;\r\n  border-left: 1px solid #42b983;\r\n}\r\n\r\n.back-to-top:hover {\r\n  color: #42b983;\r\n}\r\n\r\n\r\n.CodeMirror, .CodeMirror-scroll {\r\n  height: auto;\r\n}\r\n\r\n.bs-example .btn-toolbar + .btn-toolbar {\r\n  margin-top: 10px;\r\n}\r\n\r\n.bs-example .static-modal .modal {\r\n  position: relative;\r\n  top: auto;\r\n  right: auto;\r\n  left: auto;\r\n  bottom: auto;\r\n  z-index: 1;\r\n  display: block;\r\n}\r\n\r\n.bs-docs-booticon {\r\n  background-size: contain;\r\n  border: 0;\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n\r\n.bs-example-popover-contained {\r\n  height: 200px;\r\n}\r\n\r\n.bs-example-popover-contained > div {\r\n  position: relative;\r\n}\r\n\r\n.bs-example-popover-scroll {\r\n  overflow: scroll;\r\n  height: 200px;\r\n}\r\n\r\n.bs-example-popover-scroll > div {\r\n  position: relative;\r\n  padding: 100px 0;\r\n}\r\n\r\n.playground {\r\n  margin-bottom: 36px;\r\n}\r\n\r\n.bs-example {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.bs-example + .highlight {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  border-top: none;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.code-toggle {\r\n  float: right;\r\n  display: inline-block;\r\n  position: relative;\r\n  top: -1px;\r\n  background: #fafafa;\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  border: 1px solid #e1e1e8;\r\n  border-top: none;\r\n  padding: 4px 8px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .code-toggle {\r\n    background: #fff;\r\n  }\r\n}\r\n\r\n.code-toggle.open {\r\n  background: #f8f5ec;\r\n}\r\n\r\n/* Minimal CSS Needed for contained modals */\r\n.modal-container {\r\n  position: relative;\r\n}\r\n.modal-container .modal, .modal-container .modal-backdrop {\r\n  position: absolute;\r\n}\r\n\r\n.prop-table {\r\n  background-color: white;\r\n}\r\n\r\n.bs-example.tooltip-static .tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 5px 10px;\r\n\r\n}\r\n\r\n.bs-example .super-colors {\r\n  background: -moz-linear-gradient( top ,\r\n      rgba(255, 0, 0, 1) 0%,\r\n      rgba(255, 255, 0, 1) 15%,\r\n      rgba(0, 255, 0, 1) 30%,\r\n      rgba(0, 255, 255, 1) 50%,\r\n      rgba(0, 0, 255, 1) 65%,\r\n      rgba(255, 0, 255, 1) 80%,\r\n      rgba(255, 0, 0, 1) 100%);\r\n  background: -webkit-gradient(linear,  left top,  left bottom,\r\n      color-stop(0%, rgba(255, 0, 0, 1)),\r\n      color-stop(15%, rgba(255, 255, 0, 1)),\r\n      color-stop(30%, rgba(0, 255, 0, 1)),\r\n      color-stop(50%, rgba(0, 255, 255, 1)),\r\n      color-stop(65%, rgba(0, 0, 255, 1)),\r\n      color-stop(80%, rgba(255, 0, 255, 1)),\r\n      color-stop(100%, rgba(255, 0, 0, 1)));\r\n}\r\n\r\n/*.bs-example .custom-menu > ul > li {\r\n    padding: 0 20px;\r\n}*/\r\n\r\n.anchor,\r\n.anchor:hover,\r\n.anchor:active,\r\n.anchor:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  position: relative;\r\n}\r\n.anchor-icon {\r\n  font-size: 90%;\r\n  padding-top: 0.1em;\r\n  position: absolute;\r\n  left: -0.8em;\r\n  opacity: 0;\r\n}\r\n\r\nh1:hover .anchor-icon,\r\nh1 a:focus .anchor-icon,\r\nh2:hover .anchor-icon,\r\nh2 a:focus .anchor-icon,\r\nh3:hover .anchor-icon,\r\nh3 a:focus .anchor-icon,\r\nh4:hover .anchor-icon,\r\nh4 a:focus .anchor-icon {\r\n  opacity: 0.5;\r\n}\r\n\r\n.prop-desc pre {\r\n  border-radius: 0;\r\n  border-width: 0;\r\n  border-left-width: 3px;\r\n}\r\n\r\n.prop-desc-heading {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.bs-callout {\r\n    padding: 20px;\r\n    margin: 20px 0;\r\n    border: 1px solid #eee;\r\n    border-left-width: 5px;\r\n    border-radius: 3px;\r\n}\r\n.bs-callout h4 {\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n}\r\n.bs-callout p:last-child {\r\n    margin-bottom: 0;\r\n}\r\n.bs-callout code {\r\n    border-radius: 3px;\r\n}\r\n.bs-callout+.bs-callout {\r\n    margin-top: -5px;\r\n}\r\n.bs-callout-default {\r\n    border-left-color: #777;\r\n}\r\n.bs-callout-default h4 {\r\n    color: #777;\r\n}\r\n.bs-callout-primary {\r\n    border-left-color: #428bca;\r\n}\r\n.bs-callout-primary h4 {\r\n    color: #428bca;\r\n}\r\n.bs-callout-success {\r\n    border-left-color: #42b983;\r\n}\r\n.bs-callout-success h4 {\r\n    color: #42b983;\r\n}\r\n.bs-callout-danger {\r\n    border-left-color: #d9534f;\r\n}\r\n.bs-callout-danger h4 {\r\n    color: #d9534f;\r\n}\r\n.bs-callout-warning {\r\n    border-left-color: #f0ad4e;\r\n}\r\n.bs-callout-warning h4 {\r\n    color: #f0ad4e;\r\n}\r\n.bs-callout-info {\r\n    border-left-color: #5bc0de;\r\n}\r\n.bs-callout-info h4 {\r\n    color: #5bc0de;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 295 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/* **********************************************
	     Begin prism-core.js
	********************************************** */
	
	var _self = (typeof window !== 'undefined')
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
	var lang = /\blang(?:uage)?-(\w+)\b/i;
	var uniqueId = 0;
	
	var _ = _self.Prism = {
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
	
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
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
						// Check for existence for IE8
						return o.map && o.map(function(v) { return _.util.clone(v); });
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
			DFS: function(o, callback, type, visited) {
				visited = visited || {};
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
	
						if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, null, visited);
						}
						else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, i, visited);
						}
					}
				}
			}
		},
		plugins: {},
	
		highlightAll: function(async, callback) {
			var env = {
				callback: callback,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};
	
			_.hooks.run("before-highlightall", env);
	
			var elements = env.elements || document.querySelectorAll(env.selector);
	
			for (var i=0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, env.callback);
			}
		},
	
		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;
	
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}
	
			if (parent) {
				language = (parent.className.match(lang) || [,''])[1].toLowerCase();
				grammar = _.languages[language];
			}
	
			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
	
			// Set language on the parent, for styling
			parent = element.parentNode;
	
			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
	
			var code = element.textContent;
	
			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};
	
			_.hooks.run('before-sanity-check', env);
	
			if (!env.code || !env.grammar) {
				_.hooks.run('complete', env);
				return;
			}
	
			_.hooks.run('before-highlight', env);
	
			if (async && _self.Worker) {
				var worker = new Worker(_.filename);
	
				worker.onmessage = function(evt) {
					env.highlightedCode = evt.data;
	
					_.hooks.run('before-insert', env);
	
					env.element.innerHTML = env.highlightedCode;
	
					callback && callback.call(env.element);
					_.hooks.run('after-highlight', env);
					_.hooks.run('complete', env);
				};
	
				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			}
			else {
				env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
	
				_.hooks.run('before-insert', env);
	
				env.element.innerHTML = env.highlightedCode;
	
				callback && callback.call(element);
	
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
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
						greedy = !!pattern.greedy,
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
	
						var match = pattern.exec(str),
						    delNum = 1;
	
						// Greedy patterns can override/remove up to two previously matched tokens
						if (!match && greedy && i != strarr.length - 1) {
							// Reconstruct the original text using the next two tokens
							var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
							    combStr = str + nextToken;
	
							if (i < strarr.length - 2) {
								combStr += strarr[i + 2].matchedStr || strarr[i + 2];
							}
	
							// Try the pattern again on the reconstructed text
							pattern.lastIndex = 0;
							match = pattern.exec(combStr);
							if (!match) {
								continue;
							}
	
							var from = match.index + (lookbehind ? match[1].length : 0);
							// To be a valid candidate, the new match has to start inside of str
							if (from >= str.length) {
								continue;
							}
							var to = match.index + match[0].length,
							    len = str.length + nextToken.length;
	
							// Number of tokens to delete and replace with the new match
							delNum = 3;
	
							if (to <= len) {
								if (strarr[i + 1].greedy) {
									continue;
								}
								delNum = 2;
								combStr = combStr.slice(0, len);
							}
							str = combStr;
						}
	
						if (!match) {
							continue;
						}
	
						if(lookbehind) {
							lookbehindLength = match[1].length;
						}
	
						var from = match.index + lookbehindLength,
						    match = match[0].slice(lookbehindLength),
						    to = from + match.length,
						    before = str.slice(0, from),
						    after = str.slice(to);
	
						var args = [i, delNum];
	
						if (before) {
							args.push(before);
						}
	
						var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);
	
						args.push(wrapped);
	
						if (after) {
							args.push(after);
						}
	
						Array.prototype.splice.apply(strarr, args);
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
	
	var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
		this.type = type;
		this.content = content;
		this.alias = alias;
		// Copy of the full string this token was created from
		this.matchedStr = matchedStr || null;
		this.greedy = !!greedy;
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
			attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
		}
	
		return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
	
	};
	
	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _self.Prism;
		}
	 	// In worker
		_self.addEventListener('message', function(evt) {
			var message = JSON.parse(evt.data),
			    lang = message.language,
			    code = message.code,
			    immediateClose = message.immediateClose;
	
			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	
		return _self.Prism;
	}
	
	//Get current script and highlight
	var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
	
	if (script) {
		_.filename = script.src;
	
		if (document.addEventListener && !script.hasAttribute('data-manual')) {
			if(document.readyState !== "loading") {
				requestAnimationFrame(_.highlightAll, 0);
			}
			else {
				document.addEventListener('DOMContentLoaded', _.highlightAll);
			}
		}
	}
	
	return _self.Prism;
	
	})();
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}
	
	// hack for components to work correctly in node.js
	if (typeof global !== 'undefined') {
		global.Prism = Prism;
	}
	
	
	/* **********************************************
	     Begin prism-markup.js
	********************************************** */
	
	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
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
	
	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;
	
	
	/* **********************************************
	     Begin prism-css.js
	********************************************** */
	
	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};
	
	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
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
		'string': {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'class-name': {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': /[a-z0-9_]+(?=\()/i,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		'punctuation': /[{}[\];(),.:]/
	};
	
	
	/* **********************************************
	     Begin prism-javascript.js
	********************************************** */
	
	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
	});
	
	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true,
			greedy: true
		}
	});
	
	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}
	
	Prism.languages.js = Prism.languages.javascript;
	
	/* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */
	
	(function () {
		if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
			return;
		}
	
		self.Prism.fileHighlight = function() {
	
			var Extensions = {
				'js': 'javascript',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
			};
	
			if(Array.prototype.forEach) { // Check to prevent error in IE8
				Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
					var src = pre.getAttribute('data-src');
	
					var language, parent = pre;
					var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}
	
					if (parent) {
						language = (pre.className.match(lang) || [, ''])[1];
					}
	
					if (!language) {
						var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
						language = Extensions[extension] || extension;
					}
	
					var code = document.createElement('code');
					code.className = 'language-' + language;
	
					pre.textContent = '';
	
					code.textContent = 'Loading…';
	
					pre.appendChild(code);
	
					var xhr = new XMLHttpRequest();
	
					xhr.open('GET', src, true);
	
					xhr.onreadystatechange = function () {
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
			}
	
		};
	
		document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
	
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 296 */
/***/ function(module, exports) {

	"use strict";
	
	(function () {
	
		if (typeof self === 'undefined' || !self.Prism || !self.document) {
			return;
		}
	
		// The languages map is built automatically with gulp
		var Languages = /*languages_placeholder[*/{ "html": "HTML", "css": "CSS", "clike": "C-like", "javascript": "JavaScript", "abap": "ABAP", "actionscript": "ActionScript", "apacheconf": "Apache Configuration", "apl": "APL", "applescript": "AppleScript", "aspnet": "ASP.NET (C#)", "autoit": "AutoIt", "autohotkey": "AutoHotkey", "basic": "BASIC", "csharp": "C#", "cpp": "C++", "coffeescript": "CoffeeScript", "css-extras": "CSS Extras", "fsharp": "F#", "glsl": "GLSL", "http": "HTTP", "inform7": "Inform 7", "latex": "LaTeX", "lolcode": "LOLCODE", "matlab": "MATLAB", "mel": "MEL", "nasm": "NASM", "nginx": "nginx", "nsis": "NSIS", "objectivec": "Objective-C", "ocaml": "OCaml", "php": "PHP", "php-extras": "PHP Extras", "powershell": "PowerShell", "jsx": "React JSX", "rest": "reST (reStructuredText)", "sas": "SAS", "sass": "Sass (Sass)", "scss": "Sass (Scss)", "sql": "SQL", "typescript": "TypeScript", "vhdl": "VHDL", "vim": "vim", "wiki": "Wiki markup", "yaml": "YAML" } /*]*/;
		Prism.hooks.add('before-highlight', function (env) {
			var pre = env.element.parentNode;
			if (!pre || !/pre/i.test(pre.nodeName)) {
				return;
			}
			var language = Languages[env.language] || env.language.substring(0, 1).toUpperCase() + env.language.substring(1);
			pre.setAttribute('data-language', language);
		});
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=build-docs.js.map