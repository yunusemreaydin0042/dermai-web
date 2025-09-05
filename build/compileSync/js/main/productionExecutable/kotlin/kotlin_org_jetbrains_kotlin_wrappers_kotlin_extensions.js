(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_org_jetbrains_kotlin_wrappers_kotlin_extensions = factory(typeof kotlin_org_jetbrains_kotlin_wrappers_kotlin_extensions === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_wrappers_kotlin_extensions);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_wrappers_kotlin_extensions.js.map
