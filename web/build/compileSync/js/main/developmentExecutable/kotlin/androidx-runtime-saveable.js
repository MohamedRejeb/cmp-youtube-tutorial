(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime-saveable'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-runtime-saveable'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-runtime-saveable'.");
    }
    root['androidx-runtime-saveable'] = factory(typeof this['androidx-runtime-saveable'] === 'undefined' ? {} : this['androidx-runtime-saveable'], this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var charSequenceLength = kotlin_kotlin.$_$.x7;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var toString = kotlin_kotlin.$_$.db;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var isInterface = kotlin_kotlin.$_$.s8;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isObject = kotlin_kotlin.$_$.t8;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var toString_0 = kotlin_kotlin.$_$.ad;
  var referentialEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var SnapshotMutableState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var protoOf = kotlin_kotlin.$_$.c9;
  var classMeta = kotlin_kotlin.$_$.z7;
  var VOID = kotlin_kotlin.$_$.ed;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var interfaceMeta = kotlin_kotlin.$_$.n8;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SaverScope, 'SaverScope', interfaceMeta);
  setMetadataFor(sam$androidx_compose_runtime_saveable_SaverScope$0, 'sam$androidx_compose_runtime_saveable_SaverScope$0', classMeta, VOID, [SaverScope]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(Entry, 'Entry', interfaceMeta);
  setMetadataFor(SaveableStateRegistry, 'SaveableStateRegistry', interfaceMeta);
  setMetadataFor(Saver, 'Saver', interfaceMeta);
  setMetadataFor(Saver$1, VOID, classMeta, VOID, [Saver]);
  //endregion
  function get_MaxSupportedRadix() {
    return MaxSupportedRadix;
  }
  var MaxSupportedRadix;
  function rememberSaveable$composable(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1490773347);
    sourceInformation($composer_0, 'C(rememberSaveable$composable)P(1,3,2)80@3500L7,82@3597L244,95@4209L27,96@4262L27,98@4299L441:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1490773347, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable$composable (RememberSaveable.kt:65)');
    }
    $composer_0.startReplaceableGroup_rp6air_k$(1790924732);
    sourceInformation($composer_0, '75@3334L23');
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = key_0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0;
    if (!tmp$ret$0) {
      tmp = key_0;
    } else {
      tmp = toString($get_currentCompositeKeyHash$$composable_u3vbzj($composer_0, 0), MaxSupportedRadix);
    }
    var tmp1_group = tmp;
    $composer_0.endReplaceableGroup_er37p7_k$();
    var finalKey = tmp1_group;
    var tmp_0 = saver_0._v;
    if (!(tmp_0 == null) ? isInterface(tmp_0, Saver) : false)
      tmp_0;
    else
      THROW_CCE();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp1_$get_current$$composable_gn3xww = get_LocalSaveableStateRegistry();
    var tmp2_$get_current$$composable_g4n2vl = $composer_0;
    var $composer_1 = tmp2_$get_current$$composable_g4n2vl;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp1_$get_current$$composable_gn3xww);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$1 = tmp0;
    var registry = tmp$ret$1;
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp6_remember$composable = inputs.slice();
    var tmp7_remember$composable = $composer_0;
    var $composer_2 = tmp7_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1603429786);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = tmp6_remember$composable;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key_1 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_2.changed_ga7h3f_k$(key_1));
    }
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp4_cache = $composer_2;
    var tmp5_cache = invalid;
    var tmp$ret$6;
    // Inline function 'kotlin.let' call
    var tmp3_let = tmp4_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp5_cache ? true : tmp3_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>' call
      var tmp0_safe_receiver = registry;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.consumeRestored_kptfch_k$(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
        tmp$ret$2 = saver_0._v.restore_uzeo8_k$(tmp1_safe_receiver);
        tmp$ret$3 = tmp$ret$2;
        tmp_2 = tmp$ret$3;
      }
      var restored = tmp_2;
      var tmp2_elvis_lhs = restored;
      tmp$ret$4 = tmp2_elvis_lhs == null ? init() : tmp2_elvis_lhs;
      var value = tmp$ret$4;
      tmp4_cache.updateRememberedValue_l1colo_k$(value);
      tmp_1 = value;
    } else {
      tmp_1 = tmp3_let;
    }
    tmp$ret$5 = tmp_1;
    tmp$ret$6 = tmp$ret$5;
    var tmp_3 = tmp$ret$6;
    tmp$ret$7 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    var tmp0_0 = tmp$ret$7;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$8 = tmp0_0;
    var value_0 = tmp$ret$8;
    if (!(registry == null)) {
      var saverState = rememberUpdatedState$composable(saver_0._v, $composer_0, 0);
      var valueState = rememberUpdatedState$composable(value_0, $composer_0, 0);
      DisposableEffect$composable(registry, finalKey, rememberSaveable$composable$lambda(registry, finalKey, saverState, valueState), $composer_0, 0);
    }
    var tmp0_1 = value_0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) ? !_this__u8e3s4.canBeSaved_nnajrq_k$(value) : false) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if ((!(value.get_policy_i5q4hn_k$() === neverEqualPolicy()) ? !(value.get_policy_i5q4hn_k$() === structuralEqualityPolicy()) : false) ? !(value.get_policy_i5q4hn_k$() === referentialEqualityPolicy()) : false) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_0(value.get_value_j01efc_k$()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = toString_0(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function sam$androidx_compose_runtime_saveable_SaverScope$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_saveable_SaverScope$0).canBeSaved_nnajrq_k$ = function (value) {
    return this.function_1(value);
  };
  function rememberSaveable$composable$lambda$lambda$lambda($registry) {
    return function (it) {
      return $registry.canBeSaved_nnajrq_k$(it);
    };
  }
  function rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry) {
    return function () {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = $saverState.get_value_j01efc_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = rememberSaveable$composable$lambda$lambda$lambda($registry);
      tmp$ret$0 = tmp0_with.save_ef702r_k$(new sam$androidx_compose_runtime_saveable_SaverScope$0(tmp), $valueState.get_value_j01efc_k$());
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    };
  }
  function _no_name_provided__qut3iv($entry) {
    this.$entry_1 = $entry;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3n44we_k$ = function () {
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
    this.$entry_1.unregister_ibszrp_k$();
  };
  function rememberSaveable$composable$lambda($registry, $finalKey, $saverState, $valueState) {
    return function ($this$DisposableEffect) {
      var valueProvider = rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry);
      requireCanBeSaved($registry, valueProvider());
      var entry = $registry.registerProvider_h94pml_k$($finalKey, valueProvider);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv(entry);
      return tmp$ret$0;
    };
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function Entry() {
  }
  function SaveableStateRegistry() {
  }
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
    } else {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function SaverScope() {
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.$save_1 = $save;
    this.$restore_1 = $restore;
  }
  protoOf(Saver$1).save_ef702r_k$ = function (_this__u8e3s4, value) {
    return this.$save_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).restore_uzeo8_k$ = function (value) {
    return this.$restore_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (properties_initialized_Saver_kt_ch40dh) {
    } else {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Saver_0;
  _.$_$.b = rememberSaveable$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-runtime-saveable.js.map
