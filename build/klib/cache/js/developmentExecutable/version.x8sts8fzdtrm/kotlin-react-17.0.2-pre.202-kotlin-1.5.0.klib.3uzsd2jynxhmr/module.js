(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_org_jetbrains_kotlin_wrappers_kotlin_react = factory(typeof kotlin_org_jetbrains_kotlin_wrappers_kotlin_react === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_wrappers_kotlin_react);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
