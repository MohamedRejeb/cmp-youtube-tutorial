(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './androidx-ui.js', './androidx-foundation-layout.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-material3.js', './androidx-ui-graphics.js', './androidx-ui-unit.js', './androidx-ui-text.js', './androidx-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./androidx-ui.js'), require('./androidx-foundation-layout.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-material3.js'), require('./androidx-ui-graphics.js'), require('./androidx-ui-unit.js'), require('./androidx-ui-text.js'), require('./androidx-foundation.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-common'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'MyKmpApp-common'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-common'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'MyKmpApp-common'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-common'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'MyKmpApp-common'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-common'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'MyKmpApp-common'.");
    }
    if (typeof this['androidx-material3'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-common'. Its dependency 'androidx-material3' was not found. Please, check whether 'androidx-material3' is loaded prior to 'MyKmpApp-common'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-common'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'MyKmpApp-common'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-common'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'MyKmpApp-common'.");
    }
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-common'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'MyKmpApp-common'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-common'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'MyKmpApp-common'.");
    }
    root['MyKmpApp-common'] = factory(typeof this['MyKmpApp-common'] === 'undefined' ? {} : this['MyKmpApp-common'], this['androidx-runtime'], this['androidx-ui'], this['androidx-foundation-layout'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-material3'], this['androidx-ui-graphics'], this['androidx-ui-unit'], this['androidx-ui-text'], this['androidx-foundation']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_kotlin, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.d2;
  var get_LocalViewConfiguration = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var isInterface = kotlin_kotlin.$_$.s8;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var Long = kotlin_kotlin.$_$.sb;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Surface$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var protoOf = kotlin_kotlin.$_$.c9;
  var objectMeta = kotlin_kotlin.$_$.b9;
  var VOID = kotlin_kotlin.$_$.ed;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x;
  var Text$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var isSystemInDarkTheme$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w;
  var MaterialTheme$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var Typography = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt', objectMeta);
  //endregion
  function App$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(212763401);
    sourceInformation($composer_0, 'C(App$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(212763401, $changed, -1, 'com.mohamedrejeb.kmp.app.common.App$composable (App.kt:13)');
      }
      MyKmpAppTheme$composable(false, ComposableSingletons$AppKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(App$composable$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(906965369, $changed, -1, 'com.mohamedrejeb.kmp.app.common.ComposableSingletons$AppKt.lambda-1.<anonymous> (App.kt:19)');
      }
      var tmp0_contentAlignment = Companion_getInstance().get_Center_3arb0i_k$();
      var tmp1_modifier = fillMaxSize(Companion_getInstance_0());
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp16_Box$composable = false;
      var tmp17_Box$composable = $composer_0;
      var modifier = tmp1_modifier;
      var contentAlignment = tmp0_contentAlignment;
      var propagateMinConstraints = tmp16_Box$composable;
      var $composer_1 = tmp17_Box$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance_0();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance().get_TopStart_o4x792_k$();
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier;
      var tmp12_Layout$composable = $composer_1;
      var tmp13_Layout$composable = 48;
      var modifier_0 = tmp11_Layout$composable;
      var $composer_2 = tmp12_Layout$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_0();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_2;
      var $composer_3 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_3.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$0 = tmp0;
      var density = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua = $composer_2;
      var $composer_4 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_4.consume_11nid3_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$1 = tmp0_0;
      var layoutDirection = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro = $composer_2;
      var $composer_5 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_5.consume_11nid3_k$(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_5);
      tmp$ret$2 = tmp0_1;
      var viewConfiguration = tmp$ret$2;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
      var tmp7_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp8_ReusableComposeNode$composable = $composer_2;
      var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
      var $composer_6 = tmp8_ReusableComposeNode$composable;
      var tmp = $composer_6.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_6.startReusableNode_jk07k2_k$();
      if ($composer_6.get_inserting_25mlsw_k$()) {
        $composer_6.createNode_p4ouwd_k$(tmp6_ReusableComposeNode$composable);
      } else {
        $composer_6.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().get_SetDensity_gmdtxr_k$());
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().get_SetLayoutDirection_w7ypuk_k$());
      Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().get_SetViewConfiguration_lke0s8_k$());
      tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp9_ReusableComposeNode$composable >> 3);
      $composer_6.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp14__anonymous__f0seaw = $composer_6;
      var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
      var $composer_7 = tmp14__anonymous__f0seaw;
      sourceInformationMarkerStart($composer_7, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
      // Inline function 'com.mohamedrejeb.kmp.app.common.ComposableSingletons$AppKt.lambda-1.<anonymous>.<anonymous>' call
      var tmp18__anonymous__4dy6j8 = BoxScopeInstance_getInstance();
      var tmp19__anonymous__98mtqr = $composer_7;
      var tmp20__anonymous__q2j3lv = 6;
      var $composer_8 = tmp19__anonymous__98mtqr;
      var tmp_0 = getPlatformName();
      Greeting$composable(tmp_0, null, $composer_8, 0, 2);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.endReplaceableGroup_er37p7_k$();
      $composer_6.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(254017140, $changed, -1, 'com.mohamedrejeb.kmp.app.common.ComposableSingletons$AppKt.lambda-2.<anonymous> (App.kt:14)');
      }
      var tmp = fillMaxSize(Companion_getInstance_0());
      var tmp_0 = MaterialTheme_getInstance().$get_colorScheme$$composable_cyyz8_k$($composer_0, 6).get_background_ubksc_k$();
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      Surface$composable(tmp, null, tmp_0, tmp_1, tmp_2, tmp_3, null, ComposableSingletons$AppKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 12582918, 122);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(906965369, false, ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(254017140, false, ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy));
  }
  protoOf(ComposableSingletons$AppKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function Greeting$composable(name, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2090072296);
    sourceInformation($composer_0, 'C(Greeting$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(2090072296, $dirty, -1, 'com.mohamedrejeb.kmp.app.common.Greeting$composable (App.kt:32)');
      }
      var tmp = 'Hello ' + name + '!';
      var tmp_0 = modifier_0._v;
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(tmp, tmp_0, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, null, null, $composer_0, 112 & $dirty, 0, 65532);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Greeting$composable$lambda(name, modifier_0, $changed, $default));
    }
  }
  function App$composable$lambda($$changed) {
    return function ($composer, $force) {
      App$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Greeting$composable$lambda($name, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      Greeting$composable($name, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_Purple80() {
    _init_properties_Color_kt__6h0l1r();
    return Purple80;
  }
  var Purple80;
  function get_PurpleGrey80() {
    _init_properties_Color_kt__6h0l1r();
    return PurpleGrey80;
  }
  var PurpleGrey80;
  function get_Pink80() {
    _init_properties_Color_kt__6h0l1r();
    return Pink80;
  }
  var Pink80;
  function get_Purple40() {
    _init_properties_Color_kt__6h0l1r();
    return Purple40;
  }
  var Purple40;
  function get_PurpleGrey40() {
    _init_properties_Color_kt__6h0l1r();
    return PurpleGrey40;
  }
  var PurpleGrey40;
  function get_Pink40() {
    _init_properties_Color_kt__6h0l1r();
    return Pink40;
  }
  var Pink40;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (properties_initialized_Color_kt_bdybnx) {
    } else {
      properties_initialized_Color_kt_bdybnx = true;
      Purple80 = Color(new Long(-3097345, 0));
      PurpleGrey80 = Color(new Long(-3357988, 0));
      Pink80 = Color(new Long(-1066808, 0));
      Purple40 = Color(new Long(-10071900, 0));
      PurpleGrey40 = Color(new Long(-10331279, 0));
      Pink40 = Color(new Long(-8564128, 0));
    }
  }
  function get_DarkColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return DarkColorScheme;
  }
  var DarkColorScheme;
  function get_LightColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return LightColorScheme;
  }
  var LightColorScheme;
  function MyKmpAppTheme$composable(darkTheme, content, $composer, $changed, $default) {
    _init_properties_Theme_kt__w31tqv();
    var darkTheme_0 = {_v: darkTheme};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1393365013);
    sourceInformation($composer_0, 'C(MyKmpAppTheme$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.changed_i0nym2_k$(darkTheme_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          darkTheme_0._v = isSystemInDarkTheme$composable($composer_0, 0);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(1393365013, $dirty, -1, 'com.mohamedrejeb.kmp.app.common.ui.theme.MyKmpAppTheme$composable (Theme.kt:31)');
      }
      var colorScheme = darkTheme_0._v ? get_DarkColorScheme() : get_LightColorScheme();
      MaterialTheme$composable(colorScheme, null, get_Typography(), content, $composer_0, 384 | 7168 & $dirty << 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MyKmpAppTheme$composable$lambda(darkTheme_0, content, $changed, $default));
    }
  }
  function MyKmpAppTheme$composable$lambda($darkTheme, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MyKmpAppTheme$composable($darkTheme._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (properties_initialized_Theme_kt_uwj6hl) {
    } else {
      properties_initialized_Theme_kt_uwj6hl = true;
      DarkColorScheme = darkColorScheme(get_Purple80(), VOID, VOID, VOID, VOID, get_PurpleGrey80(), VOID, VOID, VOID, get_Pink80());
      LightColorScheme = lightColorScheme(get_Purple40(), VOID, VOID, VOID, VOID, get_PurpleGrey40(), VOID, VOID, VOID, get_Pink40());
    }
  }
  function get_Typography() {
    _init_properties_Type_kt__qhesii();
    return Typography_0;
  }
  var Typography_0;
  var properties_initialized_Type_kt_b459h8;
  function _init_properties_Type_kt__qhesii() {
    if (properties_initialized_Type_kt_b459h8) {
    } else {
      properties_initialized_Type_kt_b459h8 = true;
      var tmp0_fontFamily = Companion_getInstance_2().get_Default_goqax4_k$();
      var tmp1_fontWeight = Companion_getInstance_3().get_Normal_22avww_k$();
      var tmp2_fontSize = get_sp(16);
      var tmp3_lineHeight = get_sp(24);
      var tmp4_letterSpacing = get_sp_0(0.5);
      Typography_0 = new Typography(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, TextStyle_init_$Create$(VOID, tmp2_fontSize, tmp1_fontWeight, VOID, VOID, tmp0_fontFamily, VOID, tmp4_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight));
    }
  }
  function getPlatformName() {
    return 'Web';
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = App$composable;
  //endregion
  return _;
}));
