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
  function jsObject(builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlinext.js.jsObject' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    return this_0;
  }
  function jsObject_0() {
    return {};
  }
  return _;
}));
