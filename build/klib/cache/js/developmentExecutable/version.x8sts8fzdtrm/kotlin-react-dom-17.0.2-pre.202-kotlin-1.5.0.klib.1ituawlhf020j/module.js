(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom'.");
    }
    root.kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom = factory(typeof kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom, this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.c4;
  var objectMeta = kotlin_kotlin.$_$.b4;
  var setMetadataFor = kotlin_kotlin.$_$.d4;
  var KMutableProperty1 = kotlin_kotlin.$_$.j4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.r3;
  var listOf = kotlin_kotlin.$_$.d2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var to = kotlin_kotlin.$_$.n5;
  var toMap = kotlin_kotlin.$_$.j2;
  var toMutableMap = kotlin_kotlin.$_$.k2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(StringAttr, 'StringAttr', objectMeta);
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
    return key$delegate.setValue_cpad0p_k$(_this__u8e3s4, key$factory(), _set____db54di);
  }
  function get_key(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return key$delegate.getValue_7h522n_k$(_this__u8e3s4, key$factory_0());
  }
  var key$delegate;
  function set_defaultValue(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return defaultValue$delegate.setValue_cpad0p_k$(_this__u8e3s4, defaultValue$factory(), _set____db54di);
  }
  function get_defaultValue(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return defaultValue$delegate.getValue_7h522n_k$(_this__u8e3s4, defaultValue$factory_0());
  }
  var defaultValue$delegate;
  function set_defaultValue_0(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return defaultValue$delegate_0.setValue_cpad0p_k$(_this__u8e3s4, defaultValue$factory_1(), _set____db54di);
  }
  function get_defaultValue_0(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return defaultValue$delegate_0.getValue_7h522n_k$(_this__u8e3s4, defaultValue$factory_2());
  }
  var defaultValue$delegate_0;
  function set_value(_this__u8e3s4, _set____db54di) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return value$delegate.setValue_cpad0p_k$(_this__u8e3s4, value$factory(), _set____db54di);
  }
  function get_value(_this__u8e3s4) {
    _init_properties_ReactDOMAttributes_kt__bydi3e();
    return value$delegate.getValue_7h522n_k$(_this__u8e3s4, value$factory_0());
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
    // Inline function 'kotlin.collections.set' call
    var this_0 = thisRef.get_attributes_dgqof4_k$();
    var key = property.callableName;
    this_0.put_4fpzoq_k$(key, value);
  };
  var StringAttr_instance;
  function StringAttr_getInstance() {
    if (StringAttr_instance == null)
      new StringAttr();
    return StringAttr_instance;
  }
  function key$factory() {
    return getPropertyCallableRef('key', 1, KMutableProperty1, function (receiver) {
      return get_key(receiver);
    }, function (receiver, value) {
      return set_key(receiver, value);
    });
  }
  function key$factory_0() {
    return getPropertyCallableRef('key', 1, KMutableProperty1, function (receiver) {
      return get_key(receiver);
    }, function (receiver, value) {
      return set_key(receiver, value);
    });
  }
  function defaultValue$factory() {
    return getPropertyCallableRef('defaultValue', 1, KMutableProperty1, function (receiver) {
      return get_defaultValue(receiver);
    }, function (receiver, value) {
      return set_defaultValue(receiver, value);
    });
  }
  function defaultValue$factory_0() {
    return getPropertyCallableRef('defaultValue', 1, KMutableProperty1, function (receiver) {
      return get_defaultValue(receiver);
    }, function (receiver, value) {
      return set_defaultValue(receiver, value);
    });
  }
  function defaultValue$factory_1() {
    return getPropertyCallableRef('defaultValue', 1, KMutableProperty1, function (receiver) {
      return get_defaultValue_0(receiver);
    }, function (receiver, value) {
      return set_defaultValue_0(receiver, value);
    });
  }
  function defaultValue$factory_2() {
    return getPropertyCallableRef('defaultValue', 1, KMutableProperty1, function (receiver) {
      return get_defaultValue_0(receiver);
    }, function (receiver, value) {
      return set_defaultValue_0(receiver, value);
    });
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return get_value(receiver);
    }, function (receiver, value) {
      return set_value(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return get_value(receiver);
    }, function (receiver, value) {
      return set_value(receiver, value);
    });
  }
  var properties_initialized_ReactDOMAttributes_kt_vhbiv0;
  function _init_properties_ReactDOMAttributes_kt__bydi3e() {
    if (!properties_initialized_ReactDOMAttributes_kt_vhbiv0) {
      properties_initialized_ReactDOMAttributes_kt_vhbiv0 = true;
      events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_events();
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'react.dom.attrsMap.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = item.toLowerCase();
        var tmp$ret$2 = to(tmp$ret$1, item);
        destination.add_utx5q5_k$(tmp$ret$2);
      }
      var this_1 = toMutableMap(toMap(destination));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'react.dom.attrsMap.<anonymous>' call
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
