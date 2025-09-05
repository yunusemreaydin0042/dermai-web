(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom'.");
    }
    globalThis.kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom = factory(typeof kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var KMutableProperty1 = kotlin_kotlin.$_$.o4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t3;
  var protoOf = kotlin_kotlin.$_$.i4;
  var Unit_getInstance = kotlin_kotlin.$_$.k1;
  var initMetadataForObject = kotlin_kotlin.$_$.b4;
  var listOf = kotlin_kotlin.$_$.f2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var to = kotlin_kotlin.$_$.t5;
  var toMap = kotlin_kotlin.$_$.l2;
  var toMutableMap = kotlin_kotlin.$_$.m2;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(StringAttr, 'StringAttr');
  //endregion
  function get_events() {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return events;
  }
  var events;
  function get_attrsMap() {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return attrsMap;
  }
  var attrsMap;
  function set_key(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    var tmp = KMutableProperty1;
    var tmp_0 = _get_key_$ref_s4jim7_0();
    return key$delegate.setValue_cpad0p_k$(_this__u8e3s4, getPropertyCallableRef('key', 1, tmp, tmp_0, _set_key_$ref_2ib897_0()), _set____db54di);
  }
  function get_key(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    var tmp = KMutableProperty1;
    var tmp_0 = _get_key_$ref_s4jim7();
    return key$delegate.getValue_7h522n_k$(_this__u8e3s4, getPropertyCallableRef('key', 1, tmp, tmp_0, _set_key_$ref_2ib897()));
  }
  var key$delegate;
  function set_defaultValue(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    var tmp = KMutableProperty1;
    var tmp_0 = _get_defaultValue_$ref_j5rw22_0();
    return defaultValue$delegate.setValue_cpad0p_k$(_this__u8e3s4, getPropertyCallableRef('defaultValue', 1, tmp, tmp_0, _set_defaultValue_$ref_9xcd0q_0()), _set____db54di);
  }
  function get_defaultValue(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    var tmp = KMutableProperty1;
    var tmp_0 = _get_defaultValue_$ref_j5rw22();
    return defaultValue$delegate.getValue_7h522n_k$(_this__u8e3s4, getPropertyCallableRef('defaultValue', 1, tmp, tmp_0, _set_defaultValue_$ref_9xcd0q()));
  }
  var defaultValue$delegate;
  function set_defaultValue_0(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    var tmp = KMutableProperty1;
    var tmp_0 = _get_defaultValue_$ref_j5rw22_2();
    return defaultValue$delegate_0.setValue_cpad0p_k$(_this__u8e3s4, getPropertyCallableRef('defaultValue', 1, tmp, tmp_0, _set_defaultValue_$ref_9xcd0q_2()), _set____db54di);
  }
  function get_defaultValue_0(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    var tmp = KMutableProperty1;
    var tmp_0 = _get_defaultValue_$ref_j5rw22_1();
    return defaultValue$delegate_0.getValue_7h522n_k$(_this__u8e3s4, getPropertyCallableRef('defaultValue', 1, tmp, tmp_0, _set_defaultValue_$ref_9xcd0q_1()));
  }
  var defaultValue$delegate_0;
  function set_value(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    var tmp = KMutableProperty1;
    var tmp_0 = _get_value_$ref_bmdd9r_0();
    return value$delegate.setValue_cpad0p_k$(_this__u8e3s4, getPropertyCallableRef('value', 1, tmp, tmp_0, _set_value_$ref_hoh34t_0()), _set____db54di);
  }
  function get_value(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    var tmp = KMutableProperty1;
    var tmp_0 = _get_value_$ref_bmdd9r();
    return value$delegate.getValue_7h522n_k$(_this__u8e3s4, getPropertyCallableRef('value', 1, tmp, tmp_0, _set_value_$ref_hoh34t()));
  }
  var value$delegate;
  function StringAttr() {
    StringAttr_instance = this;
  }
  protoOf(StringAttr).getValue_7h522n_k$ = function (thisRef, property) {
    var tmp0_elvis_lhs = thisRef.get_attributes_dgqof4_k$().get_wei43m_k$(property.callableName);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(StringAttr).setValue_cpad0p_k$ = function (thisRef, property, value) {
    var tmp0 = thisRef.get_attributes_dgqof4_k$();
    // Inline function 'kotlin.collections.set' call
    var key = property.callableName;
    tmp0.put_4fpzoq_k$(key, value);
  };
  var StringAttr_instance;
  function StringAttr_getInstance() {
    if (StringAttr_instance == null)
      new StringAttr();
    return StringAttr_instance;
  }
  function _get_key_$ref_s4jim7() {
    return function (p0) {
      return get_key(p0);
    };
  }
  function _set_key_$ref_2ib897() {
    return function (p0, p1) {
      set_key(p0, p1);
      return Unit_getInstance();
    };
  }
  function _get_key_$ref_s4jim7_0() {
    return function (p0) {
      return get_key(p0);
    };
  }
  function _set_key_$ref_2ib897_0() {
    return function (p0, p1) {
      set_key(p0, p1);
      return Unit_getInstance();
    };
  }
  function _get_defaultValue_$ref_j5rw22() {
    return function (p0) {
      return get_defaultValue(p0);
    };
  }
  function _set_defaultValue_$ref_9xcd0q() {
    return function (p0, p1) {
      set_defaultValue(p0, p1);
      return Unit_getInstance();
    };
  }
  function _get_defaultValue_$ref_j5rw22_0() {
    return function (p0) {
      return get_defaultValue(p0);
    };
  }
  function _set_defaultValue_$ref_9xcd0q_0() {
    return function (p0, p1) {
      set_defaultValue(p0, p1);
      return Unit_getInstance();
    };
  }
  function _get_defaultValue_$ref_j5rw22_1() {
    return function (p0) {
      return get_defaultValue_0(p0);
    };
  }
  function _set_defaultValue_$ref_9xcd0q_1() {
    return function (p0, p1) {
      set_defaultValue_0(p0, p1);
      return Unit_getInstance();
    };
  }
  function _get_defaultValue_$ref_j5rw22_2() {
    return function (p0) {
      return get_defaultValue_0(p0);
    };
  }
  function _set_defaultValue_$ref_9xcd0q_2() {
    return function (p0, p1) {
      set_defaultValue_0(p0, p1);
      return Unit_getInstance();
    };
  }
  function _get_value_$ref_bmdd9r() {
    return function (p0) {
      return get_value(p0);
    };
  }
  function _set_value_$ref_hoh34t() {
    return function (p0, p1) {
      set_value(p0, p1);
      return Unit_getInstance();
    };
  }
  function _get_value_$ref_bmdd9r_0() {
    return function (p0) {
      return get_value(p0);
    };
  }
  function _set_value_$ref_hoh34t_0() {
    return function (p0, p1) {
      set_value(p0, p1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_ReactDOMAttributes_kt_vhbiv0;
  function _init_properties_ReactDOMAttributes_kt__bydi3e() {
    if (!properties_initialized_ReactDOMAttributes_kt_vhbiv0) {
      properties_initialized_ReactDOMAttributes_kt_vhbiv0 = true;
      events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_events();
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = item.toLowerCase();
        var tmp$ret$2 = to(tmp$ret$1, item);
        destination.add_utx5q5_k$(tmp$ret$2);
      }
      // Inline function 'kotlin.apply' call
      var this_1 = toMutableMap(toMap(destination));
      this_1.put_4fpzoq_k$('class', 'className');
      this_1.put_4fpzoq_k$('ondblclick', 'onDoubleClick');
      attrsMap = this_1;
      key$delegate = StringAttr_getInstance();
      defaultValue$delegate = StringAttr_getInstance();
      defaultValue$delegate_0 = StringAttr_getInstance();
      value$delegate = StringAttr_getInstance();
    }
  }
  return _;
}));
