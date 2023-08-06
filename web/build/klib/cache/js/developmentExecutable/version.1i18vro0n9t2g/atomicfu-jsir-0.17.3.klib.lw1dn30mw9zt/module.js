(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module '88b0986a7186d029-atomicfu-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to '88b0986a7186d029-atomicfu-js-ir'.");
    }
    root['88b0986a7186d029-atomicfu-js-ir'] = factory(typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined' ? {} : this['88b0986a7186d029-atomicfu-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var fillArrayVal = kotlin_kotlin.$_$.e8;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var protoOf = kotlin_kotlin.$_$.c9;
  var defineProp = kotlin_kotlin.$_$.b8;
  var classMeta = kotlin_kotlin.$_$.z7;
  var VOID = kotlin_kotlin.$_$.ed;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var objectMeta = kotlin_kotlin.$_$.b9;
  var toString = kotlin_kotlin.$_$.h9;
  var toString_0 = kotlin_kotlin.$_$.ad;
  //endregion
  //region block: pre-declaration
  setMetadataFor(atomicfu$AtomicRefArray$ref, 'AtomicArray', classMeta);
  setMetadataFor(atomicfu$TraceBase, 'TraceBase', classMeta);
  setMetadataFor(None, 'None', objectMeta, atomicfu$TraceBase);
  setMetadataFor(atomicfu$TraceFormat, 'TraceFormat', classMeta);
  setMetadataFor(AtomicRef, 'AtomicRef', classMeta);
  setMetadataFor(AtomicBoolean, 'AtomicBoolean', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor(AtomicLong, 'AtomicLong', classMeta);
  setMetadataFor(ReentrantLock, 'ReentrantLock', classMeta);
  //endregion
  function loop(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$());
    }
  }
  function loop_0(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$());
    }
  }
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function atomicfu$AtomicRefArray$ref(size) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = size;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.AtomicArray.array.<anonymous>' call
      tmp$ret$1 = atomic$ref$1(null);
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.array_1 = tmp_2;
  }
  protoOf(atomicfu$AtomicRefArray$ref).get_atomicfu$size_iufoqq_k$ = function () {
    return this.array_1.length;
  };
  protoOf(atomicfu$AtomicRefArray$ref).atomicfu$get = function (index) {
    return this.array_1[index];
  };
  defineProp(protoOf(atomicfu$AtomicRefArray$ref), 'atomicfu$size', protoOf(atomicfu$AtomicRefArray$ref).get_atomicfu$size_iufoqq_k$);
  function atomicfu$AtomicRefArray$ofNulls(size) {
    return new atomicfu$AtomicRefArray$ref(size);
  }
  function update(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return Unit_getInstance();
    }
  }
  function loop_1(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$());
    }
  }
  function updateAndGet(_this__u8e3s4, function_0) {
    while (true) {
      var cur = _this__u8e3s4.get_kotlinx$atomicfu$value_vi2am5_k$();
      var upd = function_0(cur);
      if (_this__u8e3s4.atomicfu$compareAndSet(cur, upd))
        return upd;
    }
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$1 = function (event) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$2 = function (event1, event2) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  protoOf(atomicfu$TraceBase).invoke_pyr0m4_k$ = function (event) {
    this.atomicfu$Trace$append$1(event());
  };
  function atomicfu$TraceFormat() {
  }
  protoOf(atomicfu$TraceFormat).atomicfu$TraceFormat$format = function (index, event) {
    return '' + index + ': ' + toString(event);
  };
  function AtomicRef(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicRef).set_kotlinx$atomicfu$value_koguff_k$ = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicRef).get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicRef).getValue_1h979_k$ = function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicRef).setValue_o0pjfh_k$ = function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicRef).lazySet_9mpar2_k$ = function (value) {
    this.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicRef).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicRef).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicRef).toString = function () {
    return toString_0(this.kotlinx$atomicfu$value);
  };
  function atomic$ref$1(initial) {
    return atomic$ref$(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicBoolean).set_kotlinx$atomicfu$value_rpu4go_k$ = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicBoolean).get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicBoolean).getValue_1h979_k$ = function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicBoolean).setValue_yjn1ii_k$ = function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicBoolean).lazySet_lh19sr_k$ = function (value) {
    this.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicBoolean).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicBoolean).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicBoolean).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$boolean$1(initial) {
    return atomic$boolean$(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicInt).set_kotlinx$atomicfu$value_3lx0f_k$ = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicInt).get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).getValue_1h979_k$ = function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).setValue_3xckvl_k$ = function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicInt).lazySet_emoqzm_k$ = function (value) {
    this.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicInt).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicInt).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicInt).atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1 + 1 | 0;
    return tmp1;
  };
  protoOf(AtomicInt).atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1 - 1 | 0;
    return tmp1;
  };
  protoOf(AtomicInt).atomicfu$getAndAdd = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + delta | 0;
    return oldValue;
  };
  protoOf(AtomicInt).atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + delta | 0;
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value + 1 | 0;
    return tmp0_this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value - 1 | 0;
    return tmp0_this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).plusAssign_mcu86f_k$ = function (delta) {
    this.atomicfu$getAndAdd(delta);
  };
  protoOf(AtomicInt).minusAssign_8s6p5d_k$ = function (delta) {
    this.atomicfu$getAndAdd(-delta | 0);
  };
  protoOf(AtomicInt).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$int$1(initial) {
    return atomic$int$(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicLong).set_kotlinx$atomicfu$value_sbfhx2_k$ = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicLong).get_kotlinx$atomicfu$value_vi2am5_k$ = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).getValue_1h979_k$ = function (thisRef, property) {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).setValue_j9ezy0_k$ = function (thisRef, property, value) {
    this.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicLong).lazySet_42o0gp_k$ = function (value) {
    this.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicLong).atomicfu$compareAndSet = function (expect, update) {
    if (!this.kotlinx$atomicfu$value.equals(expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicLong).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicLong).atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1.inc_28ke_k$();
    return tmp1;
  };
  protoOf(AtomicLong).atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.kotlinx$atomicfu$value;
    tmp0_this.kotlinx$atomicfu$value = tmp1.dec_24n6_k$();
    return tmp1;
  };
  protoOf(AtomicLong).atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.plus_u6jwas_k$(delta);
    return oldValue;
  };
  protoOf(AtomicLong).atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.plus_u6jwas_k$(delta);
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.inc_28ke_k$();
    return tmp0_this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this.kotlinx$atomicfu$value = tmp0_this.kotlinx$atomicfu$value.dec_24n6_k$();
    return tmp0_this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).plusAssign_mcpmgy_k$ = function (delta) {
    this.atomicfu$getAndAdd$long(delta);
  };
  protoOf(AtomicLong).minusAssign_rr4kew_k$ = function (delta) {
    this.atomicfu$getAndAdd$long(delta.unaryMinus_6uz0qp_k$());
  };
  protoOf(AtomicLong).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$long$1(initial) {
    return atomic$long$(initial, None_getInstance());
  }
  function atomic$ref$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicRef(initial);
  }
  function atomic$boolean$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicBoolean(initial);
  }
  function atomic$int$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicInt(initial);
  }
  function atomic$long$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicLong(initial);
  }
  function get_traceFormatDefault() {
    _init_properties_Trace_kt__r970dp();
    return traceFormatDefault;
  }
  var traceFormatDefault;
  var properties_initialized_Trace_kt_s8gvpx;
  function _init_properties_Trace_kt__r970dp() {
    if (properties_initialized_Trace_kt_s8gvpx) {
    } else {
      properties_initialized_Trace_kt_s8gvpx = true;
      traceFormatDefault = new atomicfu$TraceFormat();
    }
  }
  function get_atomicfu$reentrantLock() {
    _init_properties_Synchronized_kt__f4zdjg();
    return Lock;
  }
  var Lock;
  function ReentrantLock() {
  }
  protoOf(ReentrantLock).lock_folzoa_k$ = function () {
  };
  protoOf(ReentrantLock).tryLock_hapj0a_k$ = function () {
    return true;
  };
  protoOf(ReentrantLock).unlock_85cgkz_k$ = function () {
  };
  function synchronized(lock, block) {
    _init_properties_Synchronized_kt__f4zdjg();
    return block();
  }
  var properties_initialized_Synchronized_kt_8bwsba;
  function _init_properties_Synchronized_kt__f4zdjg() {
    if (properties_initialized_Synchronized_kt_8bwsba) {
    } else {
      properties_initialized_Synchronized_kt_8bwsba = true;
      Lock = new ReentrantLock();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomicfu$AtomicRefArray$ofNulls;
  _.$_$.b = atomic$boolean$1;
  _.$_$.c = atomic$long$1;
  _.$_$.d = atomic$ref$1;
  _.$_$.e = atomic$int$1;
  //endregion
  return _;
}));
