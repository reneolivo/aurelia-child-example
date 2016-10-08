define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);
  };
});
define('child',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var child = exports.child = function child() {
    _classCallCheck(this, child);
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('parent',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Parent = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _dec4, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var Parent = exports.Parent = (_dec = (0, _aureliaFramework.child)('h1'), _dec2 = (0, _aureliaFramework.child)('child'), _dec3 = (0, _aureliaFramework.children)('slotted-child'), _dec4 = (0, _aureliaFramework.children)('h2'), (_class = function () {
    function Parent() {
      _classCallCheck(this, Parent);

      _initDefineProp(this, 'directChildHTML', _descriptor, this);

      _initDefineProp(this, 'directChildComponent', _descriptor2, this);

      _initDefineProp(this, 'slottedChildren', _descriptor3, this);

      _initDefineProp(this, 'slottedChildrenHTML', _descriptor4, this);
    }

    Parent.prototype.attached = function attached() {
      console.log('direct html element:', this.directChildHTML);
      console.log('direct child component:', this.directChildComponent);
      console.log('slotted child components:', this.slottedChildren);
      console.log('slotted child html elements:', this.slottedChildrenHTML);
    };

    return Parent;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'directChildHTML', [_dec], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'directChildComponent', [_dec2], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'slottedChildren', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'slottedChildrenHTML', [_dec4], {
    enumerable: true,
    initializer: null
  })), _class));
});
define('slotted-child',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SlottedChild = exports.SlottedChild = function SlottedChild() {
    _classCallCheck(this, SlottedChild);
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./parent\"></require>\n  <require from=\"./slotted-child\"></require>\n\n  <parent>\n    <slotted-child slot=\"slotted-child\"></slotted-child>\n    <h2 slot=\"slotted-child\">Slotted Child HTML</h2>\n  </parent>\n</template>\n"; });
define('text!child.html', ['module'], function(module) { module.exports = "<template>\n  <small>Child</small>\n</template>\n"; });
define('text!parent.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./child\"></require>\n\n  <h1>Parent Container</h1>\n\n  <child></child>\n\n  <div>\n    <slot name=\"slotted-child\"></slot>\n  </div>\n</template>\n"; });
define('text!slotted-child.html', ['module'], function(module) { module.exports = "<template>\n  <small>Slotted Child</small>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map