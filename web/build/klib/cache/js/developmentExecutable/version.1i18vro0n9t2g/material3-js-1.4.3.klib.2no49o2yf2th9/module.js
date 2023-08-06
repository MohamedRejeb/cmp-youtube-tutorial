(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-ui-unit.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-foundation-layout.js', './androidx-animation-core.js', './androidx-ui-graphics.js', './androidx-runtime.js', './androidx-animation.js', './androidx-ui.js', './androidx-material-ripple.js', './androidx-foundation.js', './androidx-ui-text.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-ui-unit.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-foundation-layout.js'), require('./androidx-animation-core.js'), require('./androidx-ui-graphics.js'), require('./androidx-runtime.js'), require('./androidx-animation.js'), require('./androidx-ui.js'), require('./androidx-material-ripple.js'), require('./androidx-foundation.js'), require('./androidx-ui-text.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['androidx-animation'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'androidx-animation' was not found. Please, check whether 'androidx-animation' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['androidx-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'androidx-material-ripple' was not found. Please, check whether 'androidx-material-ripple' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'androidx-material3'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material3'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-material3'.");
    }
    root['androidx-material3'] = factory(typeof this['androidx-material3'] === 'undefined' ? {} : this['androidx-material3'], this['androidx-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-foundation-layout'], this['androidx-animation-core'], this['androidx-ui-graphics'], this['androidx-runtime'], this['androidx-animation'], this['androidx-ui'], this['androidx-material-ripple'], this['androidx-foundation'], this['androidx-ui-text'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_material_material_ripple, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var VOID = kotlin_kotlin.$_$.ed;
  var PaddingValues_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var PaddingValues_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var protoOf = kotlin_kotlin.$_$.c9;
  var classMeta = kotlin_kotlin.$_$.z7;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var equals = kotlin_kotlin.$_$.d8;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a3;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ba;
  var getPropertyCallableRef = kotlin_kotlin.$_$.j8;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var Annotation = kotlin_kotlin.$_$.ib;
  var numberToInt = kotlin_kotlin.$_$.y8;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var fadeOut = kotlin_org_jetbrains_compose_animation_animation.$_$.c;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var shrinkHorizontally = kotlin_org_jetbrains_compose_animation_animation.$_$.d;
  var fadeIn = kotlin_org_jetbrains_compose_animation_animation.$_$.b;
  var expandHorizontally = kotlin_org_jetbrains_compose_animation_animation.$_$.a;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.b9;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isObject = kotlin_kotlin.$_$.t8;
  var Long = kotlin_kotlin.$_$.sb;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var rememberRipple$composable = kotlin_org_jetbrains_compose_material_material_ripple.$_$.d;
  var get_LocalIndication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var get_LocalRippleTheme = kotlin_org_jetbrains_compose_material_material_ripple.$_$.a;
  var get_LocalTextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var TextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var RippleTheme = kotlin_org_jetbrains_compose_material_material_ripple.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var RippleAlpha = kotlin_org_jetbrains_compose_material_material_ripple.$_$.b;
  var hashCode = kotlin_kotlin.$_$.l8;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var widthIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.j7;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var isInterface = kotlin_kotlin.$_$.s8;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.j2;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.d2;
  var get_LocalViewConfiguration = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var SuspendFunction1 = kotlin_kotlin.$_$.l7;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f2;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.l2;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var BasicText$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var defaultMinSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var THROW_ISE = kotlin_kotlin.$_$.zb;
  var Enum = kotlin_kotlin.$_$.ob;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var SkikoKey_KEY_UP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x6;
  var toLong = kotlin_kotlin.$_$.f9;
  var SkikoKey_KEY_DOWN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b4;
  var SkikoKey_KEY_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g5;
  var SkikoKey_KEY_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n6;
  var SkikoKey_KEY_HOME_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var SkikoKey_KEY_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d4;
  var SkikoKey_KEY_PGUP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f6;
  var SkikoKey_KEY_PGDOWN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e6;
  var SkikoKey_KEY_ESCAPE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g4;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ColorScheme, 'ColorScheme', classMeta);
  setMetadataFor(ExperimentalMaterial3Api, 'ExperimentalMaterial3Api', classMeta, VOID, [Annotation]);
  setMetadataFor(MaterialTheme, 'MaterialTheme', objectMeta);
  setMetadataFor(MaterialRippleTheme, 'MaterialRippleTheme', objectMeta, VOID, [RippleTheme]);
  setMetadataFor(FabPlacement, 'FabPlacement', classMeta);
  setMetadataFor(Shapes, 'Shapes', classMeta);
  setMetadataFor(ShapeDefaults, 'ShapeDefaults', objectMeta);
  setMetadataFor(Surface$composable$lambda$slambda, 'Surface$composable$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(TonalPalette, 'TonalPalette', classMeta);
  setMetadataFor(Typography, 'Typography', classMeta);
  setMetadataFor(CircularProgressIndicatorTokens, 'CircularProgressIndicatorTokens', objectMeta);
  setMetadataFor(ColorDarkTokens, 'ColorDarkTokens', objectMeta);
  setMetadataFor(ColorLightTokens, 'ColorLightTokens', objectMeta);
  setMetadataFor(ColorSchemeKeyTokens, 'ColorSchemeKeyTokens', classMeta, Enum);
  setMetadataFor(ElevationTokens, 'ElevationTokens', objectMeta);
  setMetadataFor(IconButtonTokens, 'IconButtonTokens', objectMeta);
  setMetadataFor(LinearProgressIndicatorTokens, 'LinearProgressIndicatorTokens', objectMeta);
  setMetadataFor(MotionTokens, 'MotionTokens', objectMeta);
  setMetadataFor(NavigationBarTokens, 'NavigationBarTokens', objectMeta);
  setMetadataFor(NavigationRailTokens, 'NavigationRailTokens', objectMeta);
  setMetadataFor(PaletteTokens, 'PaletteTokens', objectMeta);
  setMetadataFor(PrimaryNavigationTabTokens, 'PrimaryNavigationTabTokens', objectMeta);
  setMetadataFor(ShapeKeyTokens, 'ShapeKeyTokens', classMeta, Enum);
  setMetadataFor(ShapeTokens, 'ShapeTokens', objectMeta);
  setMetadataFor(SliderTokens, 'SliderTokens', objectMeta);
  setMetadataFor(StateTokens, 'StateTokens', objectMeta);
  setMetadataFor(SwitchTokens, 'SwitchTokens', objectMeta);
  setMetadataFor(TypeScaleTokens, 'TypeScaleTokens', objectMeta);
  setMetadataFor(TypefaceTokens, 'TypefaceTokens', objectMeta);
  setMetadataFor(TypographyKeyTokens, 'TypographyKeyTokens', classMeta, Enum);
  setMetadataFor(TypographyTokens, 'TypographyTokens', objectMeta);
  //endregion
  function get_DialogPadding() {
    _init_properties_AlertDialog_kt__pwewa6();
    return DialogPadding;
  }
  var DialogPadding;
  function get_IconPadding() {
    _init_properties_AlertDialog_kt__pwewa6();
    return IconPadding;
  }
  var IconPadding;
  function get_TitlePadding() {
    _init_properties_AlertDialog_kt__pwewa6();
    return TitlePadding;
  }
  var TitlePadding;
  function get_TextPadding() {
    _init_properties_AlertDialog_kt__pwewa6();
    return TextPadding;
  }
  var TextPadding;
  function get_MinWidth() {
    _init_properties_AlertDialog_kt__pwewa6();
    return MinWidth;
  }
  var MinWidth;
  function get_MaxWidth() {
    _init_properties_AlertDialog_kt__pwewa6();
    return MaxWidth;
  }
  var MaxWidth;
  var properties_initialized_AlertDialog_kt_toy5h0;
  function _init_properties_AlertDialog_kt__pwewa6() {
    if (properties_initialized_AlertDialog_kt_toy5h0) {
    } else {
      properties_initialized_AlertDialog_kt_toy5h0 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      DialogPadding = PaddingValues(tmp$ret$0);
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(16);
      IconPadding = PaddingValues_0(VOID, VOID, VOID, tmp$ret$0_0);
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(16);
      TitlePadding = PaddingValues_0(VOID, VOID, VOID, tmp$ret$0_1);
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(24);
      TextPadding = PaddingValues_0(VOID, VOID, VOID, tmp$ret$0_2);
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(280);
      MinWidth = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(560);
      MaxWidth = tmp$ret$0_4;
    }
  }
  function get_BottomAppBarHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return BottomAppBarHorizontalPadding;
  }
  var BottomAppBarHorizontalPadding;
  function get_BottomAppBarVerticalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return BottomAppBarVerticalPadding;
  }
  var BottomAppBarVerticalPadding;
  function get_FABHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return FABHorizontalPadding;
  }
  var FABHorizontalPadding;
  function get_FABVerticalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return FABVerticalPadding;
  }
  var FABVerticalPadding;
  function get_TopTitleAlphaEasing() {
    _init_properties_AppBar_kt__51suc2();
    return TopTitleAlphaEasing;
  }
  var TopTitleAlphaEasing;
  function get_MediumTitleBottomPadding() {
    _init_properties_AppBar_kt__51suc2();
    return MediumTitleBottomPadding;
  }
  var MediumTitleBottomPadding;
  function get_LargeTitleBottomPadding() {
    _init_properties_AppBar_kt__51suc2();
    return LargeTitleBottomPadding;
  }
  var LargeTitleBottomPadding;
  function get_TopAppBarHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return TopAppBarHorizontalPadding;
  }
  var TopAppBarHorizontalPadding;
  function get_TopAppBarTitleInset() {
    _init_properties_AppBar_kt__51suc2();
    return TopAppBarTitleInset;
  }
  var TopAppBarTitleInset;
  var properties_initialized_AppBar_kt_if00s4;
  function _init_properties_AppBar_kt__51suc2() {
    if (properties_initialized_AppBar_kt_if00s4) {
    } else {
      properties_initialized_AppBar_kt_if00s4 = true;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      var tmp0_minus = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(12);
      var tmp1_minus = tmp$ret$1;
      tmp$ret$2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
      BottomAppBarHorizontalPadding = tmp$ret$2;
      var tmp$ret$2_0;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(16);
      var tmp0_minus_0 = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(12);
      var tmp1_minus_0 = tmp$ret$1_0;
      tmp$ret$2_0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_0) - _Dp___get_value__impl__geb1vb(tmp1_minus_0));
      BottomAppBarVerticalPadding = tmp$ret$2_0;
      var tmp$ret$1_1;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(16);
      var tmp0_minus_1 = tmp$ret$0_1;
      var tmp1_minus_1 = get_BottomAppBarHorizontalPadding();
      tmp$ret$1_1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_1) - _Dp___get_value__impl__geb1vb(tmp1_minus_1));
      FABHorizontalPadding = tmp$ret$1_1;
      var tmp$ret$1_2;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(12);
      var tmp0_minus_2 = tmp$ret$0_2;
      var tmp1_minus_2 = get_BottomAppBarVerticalPadding();
      tmp$ret$1_2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_2) - _Dp___get_value__impl__geb1vb(tmp1_minus_2));
      FABVerticalPadding = tmp$ret$1_2;
      TopTitleAlphaEasing = new CubicBezierEasing(0.8, 0.0, 0.8, 0.15);
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(24);
      MediumTitleBottomPadding = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(28);
      LargeTitleBottomPadding = tmp$ret$0_4;
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(4);
      TopAppBarHorizontalPadding = tmp$ret$0_5;
      var tmp$ret$1_3;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_6;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_6 = _Dp___init__impl__ms3zkb(16);
      var tmp0_minus_3 = tmp$ret$0_6;
      var tmp1_minus_3 = get_TopAppBarHorizontalPadding();
      tmp$ret$1_3 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_3) - _Dp___get_value__impl__geb1vb(tmp1_minus_3));
      TopAppBarTitleInset = tmp$ret$1_3;
    }
  }
  function get_BadgeWithContentHorizontalPadding() {
    _init_properties_Badge_kt__4ajdxr();
    return BadgeWithContentHorizontalPadding;
  }
  var BadgeWithContentHorizontalPadding;
  function get_BadgeWithContentHorizontalOffset() {
    _init_properties_Badge_kt__4ajdxr();
    return BadgeWithContentHorizontalOffset;
  }
  var BadgeWithContentHorizontalOffset;
  function get_BadgeWithContentVerticalOffset() {
    _init_properties_Badge_kt__4ajdxr();
    return BadgeWithContentVerticalOffset;
  }
  var BadgeWithContentVerticalOffset;
  function get_BadgeOffset() {
    _init_properties_Badge_kt__4ajdxr();
    return BadgeOffset;
  }
  var BadgeOffset;
  var properties_initialized_Badge_kt_dqvlbn;
  function _init_properties_Badge_kt__4ajdxr() {
    if (properties_initialized_Badge_kt_dqvlbn) {
    } else {
      properties_initialized_Badge_kt_dqvlbn = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      BadgeWithContentHorizontalPadding = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Dp.unaryMinus' call
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(4);
      var tmp0_unaryMinus = tmp$ret$0_0;
      tmp$ret$1 = _Dp___init__impl__ms3zkb(-_Dp___get_value__impl__geb1vb(tmp0_unaryMinus));
      BadgeWithContentHorizontalOffset = tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.Dp.unaryMinus' call
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(4);
      var tmp0_unaryMinus_0 = tmp$ret$0_1;
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(-_Dp___get_value__impl__geb1vb(tmp0_unaryMinus_0));
      BadgeWithContentVerticalOffset = tmp$ret$1_0;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      BadgeOffset = tmp$ret$0_2;
    }
  }
  function get_CheckboxDefaultPadding() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxDefaultPadding;
  }
  var CheckboxDefaultPadding;
  function get_CheckboxSize() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxSize;
  }
  var CheckboxSize;
  function get_StrokeWidth() {
    _init_properties_Checkbox_kt__x46qhp();
    return StrokeWidth;
  }
  var StrokeWidth;
  function get_RadiusSize() {
    _init_properties_Checkbox_kt__x46qhp();
    return RadiusSize;
  }
  var RadiusSize;
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (properties_initialized_Checkbox_kt_pem0wr) {
    } else {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      CheckboxDefaultPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(20);
      CheckboxSize = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(2);
      StrokeWidth = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(2);
      RadiusSize = tmp$ret$0_2;
    }
  }
  function get_HorizontalElementsPadding() {
    _init_properties_Chip_kt__5v35sk();
    return HorizontalElementsPadding;
  }
  var HorizontalElementsPadding;
  function get_AssistChipPadding() {
    _init_properties_Chip_kt__5v35sk();
    return AssistChipPadding;
  }
  var AssistChipPadding;
  function get_FilterChipPadding() {
    _init_properties_Chip_kt__5v35sk();
    return FilterChipPadding;
  }
  var FilterChipPadding;
  function get_SuggestionChipPadding() {
    _init_properties_Chip_kt__5v35sk();
    return SuggestionChipPadding;
  }
  var SuggestionChipPadding;
  var properties_initialized_Chip_kt_fc50mq;
  function _init_properties_Chip_kt__5v35sk() {
    if (properties_initialized_Chip_kt_fc50mq) {
    } else {
      properties_initialized_Chip_kt_fc50mq = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
      HorizontalElementsPadding = tmp$ret$0;
      AssistChipPadding = PaddingValues_1(get_HorizontalElementsPadding());
      FilterChipPadding = PaddingValues_1(get_HorizontalElementsPadding());
      SuggestionChipPadding = PaddingValues_1(get_HorizontalElementsPadding());
    }
  }
  function get_LocalColorScheme() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalColorScheme;
  }
  var LocalColorScheme;
  function get_$stableprop() {
    return 0;
  }
  function ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    this.primary$delegate_1 = mutableStateOf(new Color(primary), structuralEqualityPolicy());
    this.onPrimary$delegate_1 = mutableStateOf(new Color(onPrimary), structuralEqualityPolicy());
    this.primaryContainer$delegate_1 = mutableStateOf(new Color(primaryContainer), structuralEqualityPolicy());
    this.onPrimaryContainer$delegate_1 = mutableStateOf(new Color(onPrimaryContainer), structuralEqualityPolicy());
    this.inversePrimary$delegate_1 = mutableStateOf(new Color(inversePrimary), structuralEqualityPolicy());
    this.secondary$delegate_1 = mutableStateOf(new Color(secondary), structuralEqualityPolicy());
    this.onSecondary$delegate_1 = mutableStateOf(new Color(onSecondary), structuralEqualityPolicy());
    this.secondaryContainer$delegate_1 = mutableStateOf(new Color(secondaryContainer), structuralEqualityPolicy());
    this.onSecondaryContainer$delegate_1 = mutableStateOf(new Color(onSecondaryContainer), structuralEqualityPolicy());
    this.tertiary$delegate_1 = mutableStateOf(new Color(tertiary), structuralEqualityPolicy());
    this.onTertiary$delegate_1 = mutableStateOf(new Color(onTertiary), structuralEqualityPolicy());
    this.tertiaryContainer$delegate_1 = mutableStateOf(new Color(tertiaryContainer), structuralEqualityPolicy());
    this.onTertiaryContainer$delegate_1 = mutableStateOf(new Color(onTertiaryContainer), structuralEqualityPolicy());
    this.background$delegate_1 = mutableStateOf(new Color(background), structuralEqualityPolicy());
    this.onBackground$delegate_1 = mutableStateOf(new Color(onBackground), structuralEqualityPolicy());
    this.surface$delegate_1 = mutableStateOf(new Color(surface), structuralEqualityPolicy());
    this.onSurface$delegate_1 = mutableStateOf(new Color(onSurface), structuralEqualityPolicy());
    this.surfaceVariant$delegate_1 = mutableStateOf(new Color(surfaceVariant), structuralEqualityPolicy());
    this.onSurfaceVariant$delegate_1 = mutableStateOf(new Color(onSurfaceVariant), structuralEqualityPolicy());
    this.surfaceTint$delegate_1 = mutableStateOf(new Color(surfaceTint), structuralEqualityPolicy());
    this.inverseSurface$delegate_1 = mutableStateOf(new Color(inverseSurface), structuralEqualityPolicy());
    this.inverseOnSurface$delegate_1 = mutableStateOf(new Color(inverseOnSurface), structuralEqualityPolicy());
    this.error$delegate_1 = mutableStateOf(new Color(error), structuralEqualityPolicy());
    this.onError$delegate_1 = mutableStateOf(new Color(onError), structuralEqualityPolicy());
    this.errorContainer$delegate_1 = mutableStateOf(new Color(errorContainer), structuralEqualityPolicy());
    this.onErrorContainer$delegate_1 = mutableStateOf(new Color(onErrorContainer), structuralEqualityPolicy());
    this.outline$delegate_1 = mutableStateOf(new Color(outline), structuralEqualityPolicy());
    this.outlineVariant$delegate_1 = mutableStateOf(new Color(outlineVariant), structuralEqualityPolicy());
    this.scrim$delegate_1 = mutableStateOf(new Color(scrim), structuralEqualityPolicy());
    this.$stable_1 = 0;
  }
  protoOf(ColorScheme).set_primary_1v4zhe_k$ = function (_set____db54di) {
    var tmp0_setValue = primary$factory();
    return this.primary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_primary_9vvgym_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = primary$factory_0();
    tmp$ret$0 = this.primary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onPrimary_oij9nl_k$ = function (_set____db54di) {
    var tmp0_setValue = onPrimary$factory();
    return this.onPrimary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onPrimary_dkxau7_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onPrimary$factory_0();
    tmp$ret$0 = this.onPrimary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_primaryContainer_r6fiid_k$ = function (_set____db54di) {
    var tmp0_setValue = primaryContainer$factory();
    return this.primaryContainer$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_primaryContainer_1tl5u5_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = primaryContainer$factory_0();
    tmp$ret$0 = this.primaryContainer$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onPrimaryContainer_1th2ms_k$ = function (_set____db54di) {
    var tmp0_setValue = onPrimaryContainer$factory();
    return this.onPrimaryContainer$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onPrimaryContainer_60kxp0_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onPrimaryContainer$factory_0();
    tmp$ret$0 = this.onPrimaryContainer$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_inversePrimary_l73z54_k$ = function (_set____db54di) {
    var tmp0_setValue = inversePrimary$factory();
    return this.inversePrimary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_inversePrimary_4o7slc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = inversePrimary$factory_0();
    tmp$ret$0 = this.inversePrimary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_secondary_vcikds_k$ = function (_set____db54di) {
    var tmp0_setValue = secondary$factory();
    return this.secondary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_secondary_k1hldc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = secondary$factory_0();
    tmp$ret$0 = this.secondary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onSecondary_8ksqoh_k$ = function (_set____db54di) {
    var tmp0_setValue = onSecondary$factory();
    return this.onSecondary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onSecondary_jv9s1b_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSecondary$factory_0();
    tmp$ret$0 = this.onSecondary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_secondaryContainer_rgqddp_k$ = function (_set____db54di) {
    var tmp0_setValue = secondaryContainer$factory();
    return this.secondaryContainer$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_secondaryContainer_wv4f17_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = secondaryContainer$factory_0();
    tmp$ret$0 = this.secondaryContainer$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onSecondaryContainer_yqhdy6_k$ = function (_set____db54di) {
    var tmp0_setValue = onSecondaryContainer$factory();
    return this.onSecondaryContainer$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onSecondaryContainer_ts9yii_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSecondaryContainer$factory_0();
    tmp$ret$0 = this.onSecondaryContainer$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_tertiary_yfltdk_k$ = function (_set____db54di) {
    var tmp0_setValue = tertiary$factory();
    return this.tertiary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_tertiary_b8r4yo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = tertiary$factory_0();
    tmp$ret$0 = this.tertiary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onTertiary_q9s0yh_k$ = function (_set____db54di) {
    var tmp0_setValue = onTertiary$factory();
    return this.onTertiary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onTertiary_g8w8sh_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onTertiary$factory_0();
    tmp$ret$0 = this.onTertiary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_tertiaryContainer_14vo51_k$ = function (_set____db54di) {
    var tmp0_setValue = tertiaryContainer$factory();
    return this.tertiaryContainer$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_tertiaryContainer_849a2d_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = tertiaryContainer$factory_0();
    tmp$ret$0 = this.tertiaryContainer$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onTertiaryContainer_5yaqlw_k$ = function (_set____db54di) {
    var tmp0_setValue = onTertiaryContainer$factory();
    return this.onTertiaryContainer$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onTertiaryContainer_x0xwcs_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onTertiaryContainer$factory_0();
    tmp$ret$0 = this.onTertiaryContainer$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_background_kwyuos_k$ = function (_set____db54di) {
    var tmp0_setValue = background$factory();
    return this.background$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_background_ubksc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = background$factory_0();
    tmp$ret$0 = this.background$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onBackground_98uqo3_k$ = function (_set____db54di) {
    var tmp0_setValue = onBackground$factory();
    return this.onBackground$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onBackground_671u57_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onBackground$factory_0();
    tmp$ret$0 = this.onBackground$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_surface_cc9rfb_k$ = function (_set____db54di) {
    var tmp0_setValue = surface$factory();
    return this.surface$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_surface_rbg09j_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = surface$factory_0();
    tmp$ret$0 = this.surface$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onSurface_yzo1li_k$ = function (_set____db54di) {
    var tmp0_setValue = onSurface$factory();
    return this.onSurface$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onSurface_nme6dy_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSurface$factory_0();
    tmp$ret$0 = this.onSurface$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_surfaceVariant_m5oqb6_k$ = function (_set____db54di) {
    var tmp0_setValue = surfaceVariant$factory();
    return this.surfaceVariant$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_surfaceVariant_su47fq_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = surfaceVariant$factory_0();
    tmp$ret$0 = this.surfaceVariant$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onSurfaceVariant_khfpsj_k$ = function (_set____db54di) {
    var tmp0_setValue = onSurfaceVariant$factory();
    return this.onSurfaceVariant$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onSurfaceVariant_9jbxtx_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSurfaceVariant$factory_0();
    tmp$ret$0 = this.onSurfaceVariant$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_surfaceTint_m8yjoc_k$ = function (_set____db54di) {
    var tmp0_setValue = surfaceTint$factory();
    return this.surfaceTint$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_surfaceTint_39gkkk_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = surfaceTint$factory_0();
    tmp$ret$0 = this.surfaceTint$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_inverseSurface_apz777_k$ = function (_set____db54di) {
    var tmp0_setValue = inverseSurface$factory();
    return this.inverseSurface$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_inverseSurface_t5ks5n_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = inverseSurface$factory_0();
    tmp$ret$0 = this.inverseSurface$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_inverseOnSurface_xlkv9o_k$ = function (_set____db54di) {
    var tmp0_setValue = inverseOnSurface$factory();
    return this.inverseOnSurface$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_inverseOnSurface_kudeno_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = inverseOnSurface$factory_0();
    tmp$ret$0 = this.inverseOnSurface$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_error_inofto_k$ = function (_set____db54di) {
    var tmp0_setValue = error$factory();
    return this.error$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_error_3wds10_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = error$factory_0();
    tmp$ret$0 = this.error$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onError_ow1iaj_k$ = function (_set____db54di) {
    var tmp0_setValue = onError$factory();
    return this.onError$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onError_hlsowr_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onError$factory_0();
    tmp$ret$0 = this.onError$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_errorContainer_8o8mn_k$ = function (_set____db54di) {
    var tmp0_setValue = errorContainer$factory();
    return this.errorContainer$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_errorContainer_brp79j_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = errorContainer$factory_0();
    tmp$ret$0 = this.errorContainer$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_onErrorContainer_1wx95a_k$ = function (_set____db54di) {
    var tmp0_setValue = onErrorContainer$factory();
    return this.onErrorContainer$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_onErrorContainer_7j32ca_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onErrorContainer$factory_0();
    tmp$ret$0 = this.onErrorContainer$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_outline_brz066_k$ = function (_set____db54di) {
    var tmp0_setValue = outline$factory();
    return this.outline$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_outline_oevljy_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = outline$factory_0();
    tmp$ret$0 = this.outline$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_outlineVariant_v9tncp_k$ = function (_set____db54di) {
    var tmp0_setValue = outlineVariant$factory();
    return this.outlineVariant$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_outlineVariant_3e3n73_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = outlineVariant$factory_0();
    tmp$ret$0 = this.outlineVariant$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).set_scrim_l6gvoi_k$ = function (_set____db54di) {
    var tmp0_setValue = scrim$factory();
    return this.scrim$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(ColorScheme).get_scrim_ceik4e_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = scrim$factory_0();
    tmp$ret$0 = this.scrim$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(ColorScheme).copy_pxpder_k$ = function (primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim);
  };
  protoOf(ColorScheme).copy$default_fpnc88_k$ = function (primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, $super) {
    primary = primary === VOID ? this.get_primary_9vvgym_k$() : primary;
    onPrimary = onPrimary === VOID ? this.get_onPrimary_dkxau7_k$() : onPrimary;
    primaryContainer = primaryContainer === VOID ? this.get_primaryContainer_1tl5u5_k$() : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? this.get_onPrimaryContainer_60kxp0_k$() : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? this.get_inversePrimary_4o7slc_k$() : inversePrimary;
    secondary = secondary === VOID ? this.get_secondary_k1hldc_k$() : secondary;
    onSecondary = onSecondary === VOID ? this.get_onSecondary_jv9s1b_k$() : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? this.get_secondaryContainer_wv4f17_k$() : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? this.get_onSecondaryContainer_ts9yii_k$() : onSecondaryContainer;
    tertiary = tertiary === VOID ? this.get_tertiary_b8r4yo_k$() : tertiary;
    onTertiary = onTertiary === VOID ? this.get_onTertiary_g8w8sh_k$() : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? this.get_tertiaryContainer_849a2d_k$() : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? this.get_onTertiaryContainer_x0xwcs_k$() : onTertiaryContainer;
    background = background === VOID ? this.get_background_ubksc_k$() : background;
    onBackground = onBackground === VOID ? this.get_onBackground_671u57_k$() : onBackground;
    surface = surface === VOID ? this.get_surface_rbg09j_k$() : surface;
    onSurface = onSurface === VOID ? this.get_onSurface_nme6dy_k$() : onSurface;
    surfaceVariant = surfaceVariant === VOID ? this.get_surfaceVariant_su47fq_k$() : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? this.get_onSurfaceVariant_9jbxtx_k$() : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? this.get_surfaceTint_39gkkk_k$() : surfaceTint;
    inverseSurface = inverseSurface === VOID ? this.get_inverseSurface_t5ks5n_k$() : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? this.get_inverseOnSurface_kudeno_k$() : inverseOnSurface;
    error = error === VOID ? this.get_error_3wds10_k$() : error;
    onError = onError === VOID ? this.get_onError_hlsowr_k$() : onError;
    errorContainer = errorContainer === VOID ? this.get_errorContainer_brp79j_k$() : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? this.get_onErrorContainer_7j32ca_k$() : onErrorContainer;
    outline = outline === VOID ? this.get_outline_oevljy_k$() : outline;
    outlineVariant = outlineVariant === VOID ? this.get_outlineVariant_3e3n73_k$() : outlineVariant;
    scrim = scrim === VOID ? this.get_scrim_ceik4e_k$() : scrim;
    return $super === VOID ? this.copy_pxpder_k$(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) : $super.copy_pxpder_k$.call(this, new Color(primary), new Color(onPrimary), new Color(primaryContainer), new Color(onPrimaryContainer), new Color(inversePrimary), new Color(secondary), new Color(onSecondary), new Color(secondaryContainer), new Color(onSecondaryContainer), new Color(tertiary), new Color(onTertiary), new Color(tertiaryContainer), new Color(onTertiaryContainer), new Color(background), new Color(onBackground), new Color(surface), new Color(onSurface), new Color(surfaceVariant), new Color(onSurfaceVariant), new Color(surfaceTint), new Color(inverseSurface), new Color(inverseOnSurface), new Color(error), new Color(onError), new Color(errorContainer), new Color(onErrorContainer), new Color(outline), new Color(outlineVariant), new Color(scrim));
  };
  protoOf(ColorScheme).toString = function () {
    return 'ColorScheme(' + ('primary=' + new Color(this.get_primary_9vvgym_k$())) + ('onPrimary=' + new Color(this.get_onPrimary_dkxau7_k$())) + ('primaryContainer=' + new Color(this.get_primaryContainer_1tl5u5_k$())) + ('onPrimaryContainer=' + new Color(this.get_onPrimaryContainer_60kxp0_k$())) + ('inversePrimary=' + new Color(this.get_inversePrimary_4o7slc_k$())) + ('secondary=' + new Color(this.get_secondary_k1hldc_k$())) + ('onSecondary=' + new Color(this.get_onSecondary_jv9s1b_k$())) + ('secondaryContainer=' + new Color(this.get_secondaryContainer_wv4f17_k$())) + ('onSecondaryContainer=' + new Color(this.get_onSecondaryContainer_ts9yii_k$())) + ('tertiary=' + new Color(this.get_tertiary_b8r4yo_k$())) + ('onTertiary=' + new Color(this.get_onTertiary_g8w8sh_k$())) + ('tertiaryContainer=' + new Color(this.get_tertiaryContainer_849a2d_k$())) + ('onTertiaryContainer=' + new Color(this.get_onTertiaryContainer_x0xwcs_k$())) + ('background=' + new Color(this.get_background_ubksc_k$())) + ('onBackground=' + new Color(this.get_onBackground_671u57_k$())) + ('surface=' + new Color(this.get_surface_rbg09j_k$())) + ('onSurface=' + new Color(this.get_onSurface_nme6dy_k$())) + ('surfaceVariant=' + new Color(this.get_surfaceVariant_su47fq_k$())) + ('onSurfaceVariant=' + new Color(this.get_onSurfaceVariant_9jbxtx_k$())) + ('surfaceTint=' + new Color(this.get_surfaceTint_39gkkk_k$())) + ('inverseSurface=' + new Color(this.get_inverseSurface_t5ks5n_k$())) + ('inverseOnSurface=' + new Color(this.get_inverseOnSurface_kudeno_k$())) + ('error=' + new Color(this.get_error_3wds10_k$())) + ('onError=' + new Color(this.get_onError_hlsowr_k$())) + ('errorContainer=' + new Color(this.get_errorContainer_brp79j_k$())) + ('onErrorContainer=' + new Color(this.get_onErrorContainer_7j32ca_k$())) + ('outline=' + new Color(this.get_outline_oevljy_k$())) + ('outlineVariant=' + new Color(this.get_outlineVariant_3e3n73_k$())) + ('scrim=' + new Color(this.get_scrim_ceik4e_k$())) + ')';
  };
  function lightColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    primary = primary === VOID ? ColorLightTokens_getInstance().get_Primary_mwsaym_k$() : primary;
    onPrimary = onPrimary === VOID ? ColorLightTokens_getInstance().get_OnPrimary_thkh6n_k$() : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorLightTokens_getInstance().get_PrimaryContainer_dmivhp_k$() : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorLightTokens_getInstance().get_OnPrimaryContainer_rinvxw_k$() : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorLightTokens_getInstance().get_InversePrimary_t9ulb4_k$() : inversePrimary;
    secondary = secondary === VOID ? ColorLightTokens_getInstance().get_Secondary_44uf0w_k$() : secondary;
    onSecondary = onSecondary === VOID ? ColorLightTokens_getInstance().get_OnSecondary_53t6j3_k$() : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorLightTokens_getInstance().get_SecondaryContainer_bd1gsb_k$() : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorLightTokens_getInstance().get_OnSecondaryContainer_yxubxi_k$() : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorLightTokens_getInstance().get_Tertiary_b5ncw0_k$() : tertiary;
    onTertiary = onTertiary === VOID ? ColorLightTokens_getInstance().get_OnTertiary_kcq5wh_k$() : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorLightTokens_getInstance().get_TertiaryContainer_2n7jcb_k$() : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorLightTokens_getInstance().get_OnTertiaryContainer_5qewh8_k$() : onTertiaryContainer;
    background = background === VOID ? ColorLightTokens_getInstance().get_Background_39icbo_k$() : background;
    onBackground = onBackground === VOID ? ColorLightTokens_getInstance().get_OnBackground_xdg0zp_k$() : onBackground;
    surface = surface === VOID ? ColorLightTokens_getInstance().get_Surface_eaj69j_k$() : surface;
    onSurface = onSurface === VOID ? ColorLightTokens_getInstance().get_OnSurface_7pr01i_k$() : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorLightTokens_getInstance().get_SurfaceVariant_48hepy_k$() : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorLightTokens_getInstance().get_OnSurfaceVariant_lc9nhh_k$() : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorLightTokens_getInstance().get_InverseSurface_4jxzfv_k$() : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorLightTokens_getInstance().get_InverseOnSurface_91fp04_k$() : inverseOnSurface;
    error = error === VOID ? ColorLightTokens_getInstance().get_Error_tuubd0_k$() : error;
    onError = onError === VOID ? ColorLightTokens_getInstance().get_OnError_4kvuwr_k$() : onError;
    errorContainer = errorContainer === VOID ? ColorLightTokens_getInstance().get_ErrorContainer_ctxlg9_k$() : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorLightTokens_getInstance().get_OnErrorContainer_49unba_k$() : onErrorContainer;
    outline = outline === VOID ? ColorLightTokens_getInstance().get_Outline_xlbmf6_k$() : outline;
    outlineVariant = outlineVariant === VOID ? ColorLightTokens_getInstance().get_OutlineVariant_rzqfwv_k$() : outlineVariant;
    scrim = scrim === VOID ? ColorLightTokens_getInstance().get_Scrim_djxz7m_k$() : scrim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim);
  }
  function darkColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    primary = primary === VOID ? ColorDarkTokens_getInstance().get_Primary_mwsaym_k$() : primary;
    onPrimary = onPrimary === VOID ? ColorDarkTokens_getInstance().get_OnPrimary_thkh6n_k$() : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorDarkTokens_getInstance().get_PrimaryContainer_dmivhp_k$() : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorDarkTokens_getInstance().get_OnPrimaryContainer_rinvxw_k$() : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorDarkTokens_getInstance().get_InversePrimary_t9ulb4_k$() : inversePrimary;
    secondary = secondary === VOID ? ColorDarkTokens_getInstance().get_Secondary_44uf0w_k$() : secondary;
    onSecondary = onSecondary === VOID ? ColorDarkTokens_getInstance().get_OnSecondary_53t6j3_k$() : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorDarkTokens_getInstance().get_SecondaryContainer_bd1gsb_k$() : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorDarkTokens_getInstance().get_OnSecondaryContainer_yxubxi_k$() : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorDarkTokens_getInstance().get_Tertiary_b5ncw0_k$() : tertiary;
    onTertiary = onTertiary === VOID ? ColorDarkTokens_getInstance().get_OnTertiary_kcq5wh_k$() : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorDarkTokens_getInstance().get_TertiaryContainer_2n7jcb_k$() : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorDarkTokens_getInstance().get_OnTertiaryContainer_5qewh8_k$() : onTertiaryContainer;
    background = background === VOID ? ColorDarkTokens_getInstance().get_Background_39icbo_k$() : background;
    onBackground = onBackground === VOID ? ColorDarkTokens_getInstance().get_OnBackground_xdg0zp_k$() : onBackground;
    surface = surface === VOID ? ColorDarkTokens_getInstance().get_Surface_eaj69j_k$() : surface;
    onSurface = onSurface === VOID ? ColorDarkTokens_getInstance().get_OnSurface_7pr01i_k$() : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorDarkTokens_getInstance().get_SurfaceVariant_48hepy_k$() : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorDarkTokens_getInstance().get_OnSurfaceVariant_lc9nhh_k$() : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorDarkTokens_getInstance().get_InverseSurface_4jxzfv_k$() : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorDarkTokens_getInstance().get_InverseOnSurface_91fp04_k$() : inverseOnSurface;
    error = error === VOID ? ColorDarkTokens_getInstance().get_Error_tuubd0_k$() : error;
    onError = onError === VOID ? ColorDarkTokens_getInstance().get_OnError_4kvuwr_k$() : onError;
    errorContainer = errorContainer === VOID ? ColorDarkTokens_getInstance().get_ErrorContainer_ctxlg9_k$() : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorDarkTokens_getInstance().get_OnErrorContainer_49unba_k$() : onErrorContainer;
    outline = outline === VOID ? ColorDarkTokens_getInstance().get_Outline_xlbmf6_k$() : outline;
    outlineVariant = outlineVariant === VOID ? ColorDarkTokens_getInstance().get_OutlineVariant_rzqfwv_k$() : outlineVariant;
    scrim = scrim === VOID ? ColorDarkTokens_getInstance().get_Scrim_djxz7m_k$() : scrim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim);
  }
  function contentColorFor$composable(backgroundColor, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1618819404, 'C(contentColorFor$composable)P(0:c#ui.graphics.Color)*474@21497L11,475@21581L7:ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1618819404, $changed, -1, 'androidx.compose.material3.contentColorFor$composable (ColorScheme.kt:473)');
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = contentColorFor(MaterialTheme_getInstance().$get_colorScheme$$composable_cyyz8_k$($composer_0, 6), backgroundColor);
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_9ntdt9_k$()));
    if (tmp$ret$0) {
      tmp = tmp0_takeOrElse;
    } else {
      var tmp$ret$2;
      // Inline function 'androidx.compose.material3.contentColorFor$composable.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$1 = tmp0.value_1;
      var tmp0_return = tmp$ret$1;
      tmp$ret$2 = tmp0_return;
      tmp = tmp$ret$2;
    }
    tmp$ret$3 = tmp;
    var tmp1_group = tmp$ret$3;
    var tmp0_0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function surfaceColorAtElevation(_this__u8e3s4, elevation) {
    _init_properties_ColorScheme_kt__xhtsty();
    var tmp = new Dp(elevation);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (equals(tmp, new Dp(tmp$ret$0)))
      return _this__u8e3s4.get_surface_rbg09j_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp0_ln = _Dp___get_value__impl__geb1vb(elevation) + 1;
    tmp$ret$1 = Math.log(tmp0_ln);
    var alpha = (4.5 * tmp$ret$1 + 2.0) / 100.0;
    return compositeOver(Color__copy$default_impl_ectz3s(_this__u8e3s4.get_surfaceTint_39gkkk_k$(), alpha), _this__u8e3s4.get_surface_rbg09j_k$());
  }
  function contentColorFor(_this__u8e3s4, backgroundColor) {
    _init_properties_ColorScheme_kt__xhtsty();
    var tmp0_subject = backgroundColor;
    return equals(tmp0_subject, _this__u8e3s4.get_primary_9vvgym_k$()) ? _this__u8e3s4.get_onPrimary_dkxau7_k$() : equals(tmp0_subject, _this__u8e3s4.get_secondary_k1hldc_k$()) ? _this__u8e3s4.get_onSecondary_jv9s1b_k$() : equals(tmp0_subject, _this__u8e3s4.get_tertiary_b8r4yo_k$()) ? _this__u8e3s4.get_onTertiary_g8w8sh_k$() : equals(tmp0_subject, _this__u8e3s4.get_background_ubksc_k$()) ? _this__u8e3s4.get_onBackground_671u57_k$() : equals(tmp0_subject, _this__u8e3s4.get_error_3wds10_k$()) ? _this__u8e3s4.get_onError_hlsowr_k$() : equals(tmp0_subject, _this__u8e3s4.get_surface_rbg09j_k$()) ? _this__u8e3s4.get_onSurface_nme6dy_k$() : equals(tmp0_subject, _this__u8e3s4.get_surfaceVariant_su47fq_k$()) ? _this__u8e3s4.get_onSurfaceVariant_9jbxtx_k$() : equals(tmp0_subject, _this__u8e3s4.get_primaryContainer_1tl5u5_k$()) ? _this__u8e3s4.get_onPrimaryContainer_60kxp0_k$() : equals(tmp0_subject, _this__u8e3s4.get_secondaryContainer_wv4f17_k$()) ? _this__u8e3s4.get_onSecondaryContainer_ts9yii_k$() : equals(tmp0_subject, _this__u8e3s4.get_tertiaryContainer_849a2d_k$()) ? _this__u8e3s4.get_onTertiaryContainer_x0xwcs_k$() : equals(tmp0_subject, _this__u8e3s4.get_errorContainer_brp79j_k$()) ? _this__u8e3s4.get_onErrorContainer_7j32ca_k$() : equals(tmp0_subject, _this__u8e3s4.get_inverseSurface_t5ks5n_k$()) ? _this__u8e3s4.get_inverseOnSurface_kudeno_k$() : Companion_getInstance().get_Unspecified_9ntdt9_k$();
  }
  function updateColorSchemeFrom(_this__u8e3s4, other) {
    _init_properties_ColorScheme_kt__xhtsty();
    _this__u8e3s4.set_primary_1v4zhe_k$(other.get_primary_9vvgym_k$());
    _this__u8e3s4.set_onPrimary_oij9nl_k$(other.get_onPrimary_dkxau7_k$());
    _this__u8e3s4.set_primaryContainer_r6fiid_k$(other.get_primaryContainer_1tl5u5_k$());
    _this__u8e3s4.set_onPrimaryContainer_1th2ms_k$(other.get_onPrimaryContainer_60kxp0_k$());
    _this__u8e3s4.set_inversePrimary_l73z54_k$(other.get_inversePrimary_4o7slc_k$());
    _this__u8e3s4.set_secondary_vcikds_k$(other.get_secondary_k1hldc_k$());
    _this__u8e3s4.set_onSecondary_8ksqoh_k$(other.get_onSecondary_jv9s1b_k$());
    _this__u8e3s4.set_secondaryContainer_rgqddp_k$(other.get_secondaryContainer_wv4f17_k$());
    _this__u8e3s4.set_onSecondaryContainer_yqhdy6_k$(other.get_onSecondaryContainer_ts9yii_k$());
    _this__u8e3s4.set_tertiary_yfltdk_k$(other.get_tertiary_b8r4yo_k$());
    _this__u8e3s4.set_onTertiary_q9s0yh_k$(other.get_onTertiary_g8w8sh_k$());
    _this__u8e3s4.set_tertiaryContainer_14vo51_k$(other.get_tertiaryContainer_849a2d_k$());
    _this__u8e3s4.set_onTertiaryContainer_5yaqlw_k$(other.get_onTertiaryContainer_x0xwcs_k$());
    _this__u8e3s4.set_background_kwyuos_k$(other.get_background_ubksc_k$());
    _this__u8e3s4.set_onBackground_98uqo3_k$(other.get_onBackground_671u57_k$());
    _this__u8e3s4.set_surface_cc9rfb_k$(other.get_surface_rbg09j_k$());
    _this__u8e3s4.set_onSurface_yzo1li_k$(other.get_onSurface_nme6dy_k$());
    _this__u8e3s4.set_surfaceVariant_m5oqb6_k$(other.get_surfaceVariant_su47fq_k$());
    _this__u8e3s4.set_onSurfaceVariant_khfpsj_k$(other.get_onSurfaceVariant_9jbxtx_k$());
    _this__u8e3s4.set_surfaceTint_m8yjoc_k$(other.get_surfaceTint_39gkkk_k$());
    _this__u8e3s4.set_inverseSurface_apz777_k$(other.get_inverseSurface_t5ks5n_k$());
    _this__u8e3s4.set_inverseOnSurface_xlkv9o_k$(other.get_inverseOnSurface_kudeno_k$());
    _this__u8e3s4.set_error_inofto_k$(other.get_error_3wds10_k$());
    _this__u8e3s4.set_onError_ow1iaj_k$(other.get_onError_hlsowr_k$());
    _this__u8e3s4.set_errorContainer_8o8mn_k$(other.get_errorContainer_brp79j_k$());
    _this__u8e3s4.set_onErrorContainer_1wx95a_k$(other.get_onErrorContainer_7j32ca_k$());
    _this__u8e3s4.set_outline_brz066_k$(other.get_outline_oevljy_k$());
    _this__u8e3s4.set_outlineVariant_v9tncp_k$(other.get_outlineVariant_3e3n73_k$());
    _this__u8e3s4.set_scrim_l6gvoi_k$(other.get_scrim_ceik4e_k$());
  }
  function LocalColorScheme$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return lightColorScheme();
  }
  function primary$factory() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_primary_9vvgym_k$());
    }, function (receiver, value) {
      return receiver.set_primary_1v4zhe_k$(value.value_1);
    });
  }
  function primary$factory_0() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_primary_9vvgym_k$());
    }, function (receiver, value) {
      return receiver.set_primary_1v4zhe_k$(value.value_1);
    });
  }
  function onPrimary$factory() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onPrimary_dkxau7_k$());
    }, function (receiver, value) {
      return receiver.set_onPrimary_oij9nl_k$(value.value_1);
    });
  }
  function onPrimary$factory_0() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onPrimary_dkxau7_k$());
    }, function (receiver, value) {
      return receiver.set_onPrimary_oij9nl_k$(value.value_1);
    });
  }
  function primaryContainer$factory() {
    return getPropertyCallableRef('primaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_primaryContainer_1tl5u5_k$());
    }, function (receiver, value) {
      return receiver.set_primaryContainer_r6fiid_k$(value.value_1);
    });
  }
  function primaryContainer$factory_0() {
    return getPropertyCallableRef('primaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_primaryContainer_1tl5u5_k$());
    }, function (receiver, value) {
      return receiver.set_primaryContainer_r6fiid_k$(value.value_1);
    });
  }
  function onPrimaryContainer$factory() {
    return getPropertyCallableRef('onPrimaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onPrimaryContainer_60kxp0_k$());
    }, function (receiver, value) {
      return receiver.set_onPrimaryContainer_1th2ms_k$(value.value_1);
    });
  }
  function onPrimaryContainer$factory_0() {
    return getPropertyCallableRef('onPrimaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onPrimaryContainer_60kxp0_k$());
    }, function (receiver, value) {
      return receiver.set_onPrimaryContainer_1th2ms_k$(value.value_1);
    });
  }
  function inversePrimary$factory() {
    return getPropertyCallableRef('inversePrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_inversePrimary_4o7slc_k$());
    }, function (receiver, value) {
      return receiver.set_inversePrimary_l73z54_k$(value.value_1);
    });
  }
  function inversePrimary$factory_0() {
    return getPropertyCallableRef('inversePrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_inversePrimary_4o7slc_k$());
    }, function (receiver, value) {
      return receiver.set_inversePrimary_l73z54_k$(value.value_1);
    });
  }
  function secondary$factory() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_secondary_k1hldc_k$());
    }, function (receiver, value) {
      return receiver.set_secondary_vcikds_k$(value.value_1);
    });
  }
  function secondary$factory_0() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_secondary_k1hldc_k$());
    }, function (receiver, value) {
      return receiver.set_secondary_vcikds_k$(value.value_1);
    });
  }
  function onSecondary$factory() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSecondary_jv9s1b_k$());
    }, function (receiver, value) {
      return receiver.set_onSecondary_8ksqoh_k$(value.value_1);
    });
  }
  function onSecondary$factory_0() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSecondary_jv9s1b_k$());
    }, function (receiver, value) {
      return receiver.set_onSecondary_8ksqoh_k$(value.value_1);
    });
  }
  function secondaryContainer$factory() {
    return getPropertyCallableRef('secondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_secondaryContainer_wv4f17_k$());
    }, function (receiver, value) {
      return receiver.set_secondaryContainer_rgqddp_k$(value.value_1);
    });
  }
  function secondaryContainer$factory_0() {
    return getPropertyCallableRef('secondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_secondaryContainer_wv4f17_k$());
    }, function (receiver, value) {
      return receiver.set_secondaryContainer_rgqddp_k$(value.value_1);
    });
  }
  function onSecondaryContainer$factory() {
    return getPropertyCallableRef('onSecondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSecondaryContainer_ts9yii_k$());
    }, function (receiver, value) {
      return receiver.set_onSecondaryContainer_yqhdy6_k$(value.value_1);
    });
  }
  function onSecondaryContainer$factory_0() {
    return getPropertyCallableRef('onSecondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSecondaryContainer_ts9yii_k$());
    }, function (receiver, value) {
      return receiver.set_onSecondaryContainer_yqhdy6_k$(value.value_1);
    });
  }
  function tertiary$factory() {
    return getPropertyCallableRef('tertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_tertiary_b8r4yo_k$());
    }, function (receiver, value) {
      return receiver.set_tertiary_yfltdk_k$(value.value_1);
    });
  }
  function tertiary$factory_0() {
    return getPropertyCallableRef('tertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_tertiary_b8r4yo_k$());
    }, function (receiver, value) {
      return receiver.set_tertiary_yfltdk_k$(value.value_1);
    });
  }
  function onTertiary$factory() {
    return getPropertyCallableRef('onTertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onTertiary_g8w8sh_k$());
    }, function (receiver, value) {
      return receiver.set_onTertiary_q9s0yh_k$(value.value_1);
    });
  }
  function onTertiary$factory_0() {
    return getPropertyCallableRef('onTertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onTertiary_g8w8sh_k$());
    }, function (receiver, value) {
      return receiver.set_onTertiary_q9s0yh_k$(value.value_1);
    });
  }
  function tertiaryContainer$factory() {
    return getPropertyCallableRef('tertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_tertiaryContainer_849a2d_k$());
    }, function (receiver, value) {
      return receiver.set_tertiaryContainer_14vo51_k$(value.value_1);
    });
  }
  function tertiaryContainer$factory_0() {
    return getPropertyCallableRef('tertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_tertiaryContainer_849a2d_k$());
    }, function (receiver, value) {
      return receiver.set_tertiaryContainer_14vo51_k$(value.value_1);
    });
  }
  function onTertiaryContainer$factory() {
    return getPropertyCallableRef('onTertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onTertiaryContainer_x0xwcs_k$());
    }, function (receiver, value) {
      return receiver.set_onTertiaryContainer_5yaqlw_k$(value.value_1);
    });
  }
  function onTertiaryContainer$factory_0() {
    return getPropertyCallableRef('onTertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onTertiaryContainer_x0xwcs_k$());
    }, function (receiver, value) {
      return receiver.set_onTertiaryContainer_5yaqlw_k$(value.value_1);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_background_ubksc_k$());
    }, function (receiver, value) {
      return receiver.set_background_kwyuos_k$(value.value_1);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_background_ubksc_k$());
    }, function (receiver, value) {
      return receiver.set_background_kwyuos_k$(value.value_1);
    });
  }
  function onBackground$factory() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onBackground_671u57_k$());
    }, function (receiver, value) {
      return receiver.set_onBackground_98uqo3_k$(value.value_1);
    });
  }
  function onBackground$factory_0() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onBackground_671u57_k$());
    }, function (receiver, value) {
      return receiver.set_onBackground_98uqo3_k$(value.value_1);
    });
  }
  function surface$factory() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_surface_rbg09j_k$());
    }, function (receiver, value) {
      return receiver.set_surface_cc9rfb_k$(value.value_1);
    });
  }
  function surface$factory_0() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_surface_rbg09j_k$());
    }, function (receiver, value) {
      return receiver.set_surface_cc9rfb_k$(value.value_1);
    });
  }
  function onSurface$factory() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSurface_nme6dy_k$());
    }, function (receiver, value) {
      return receiver.set_onSurface_yzo1li_k$(value.value_1);
    });
  }
  function onSurface$factory_0() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSurface_nme6dy_k$());
    }, function (receiver, value) {
      return receiver.set_onSurface_yzo1li_k$(value.value_1);
    });
  }
  function surfaceVariant$factory() {
    return getPropertyCallableRef('surfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_surfaceVariant_su47fq_k$());
    }, function (receiver, value) {
      return receiver.set_surfaceVariant_m5oqb6_k$(value.value_1);
    });
  }
  function surfaceVariant$factory_0() {
    return getPropertyCallableRef('surfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_surfaceVariant_su47fq_k$());
    }, function (receiver, value) {
      return receiver.set_surfaceVariant_m5oqb6_k$(value.value_1);
    });
  }
  function onSurfaceVariant$factory() {
    return getPropertyCallableRef('onSurfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSurfaceVariant_9jbxtx_k$());
    }, function (receiver, value) {
      return receiver.set_onSurfaceVariant_khfpsj_k$(value.value_1);
    });
  }
  function onSurfaceVariant$factory_0() {
    return getPropertyCallableRef('onSurfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onSurfaceVariant_9jbxtx_k$());
    }, function (receiver, value) {
      return receiver.set_onSurfaceVariant_khfpsj_k$(value.value_1);
    });
  }
  function surfaceTint$factory() {
    return getPropertyCallableRef('surfaceTint', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_surfaceTint_39gkkk_k$());
    }, function (receiver, value) {
      return receiver.set_surfaceTint_m8yjoc_k$(value.value_1);
    });
  }
  function surfaceTint$factory_0() {
    return getPropertyCallableRef('surfaceTint', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_surfaceTint_39gkkk_k$());
    }, function (receiver, value) {
      return receiver.set_surfaceTint_m8yjoc_k$(value.value_1);
    });
  }
  function inverseSurface$factory() {
    return getPropertyCallableRef('inverseSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_inverseSurface_t5ks5n_k$());
    }, function (receiver, value) {
      return receiver.set_inverseSurface_apz777_k$(value.value_1);
    });
  }
  function inverseSurface$factory_0() {
    return getPropertyCallableRef('inverseSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_inverseSurface_t5ks5n_k$());
    }, function (receiver, value) {
      return receiver.set_inverseSurface_apz777_k$(value.value_1);
    });
  }
  function inverseOnSurface$factory() {
    return getPropertyCallableRef('inverseOnSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_inverseOnSurface_kudeno_k$());
    }, function (receiver, value) {
      return receiver.set_inverseOnSurface_xlkv9o_k$(value.value_1);
    });
  }
  function inverseOnSurface$factory_0() {
    return getPropertyCallableRef('inverseOnSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_inverseOnSurface_kudeno_k$());
    }, function (receiver, value) {
      return receiver.set_inverseOnSurface_xlkv9o_k$(value.value_1);
    });
  }
  function error$factory() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_error_3wds10_k$());
    }, function (receiver, value) {
      return receiver.set_error_inofto_k$(value.value_1);
    });
  }
  function error$factory_0() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_error_3wds10_k$());
    }, function (receiver, value) {
      return receiver.set_error_inofto_k$(value.value_1);
    });
  }
  function onError$factory() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onError_hlsowr_k$());
    }, function (receiver, value) {
      return receiver.set_onError_ow1iaj_k$(value.value_1);
    });
  }
  function onError$factory_0() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onError_hlsowr_k$());
    }, function (receiver, value) {
      return receiver.set_onError_ow1iaj_k$(value.value_1);
    });
  }
  function errorContainer$factory() {
    return getPropertyCallableRef('errorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_errorContainer_brp79j_k$());
    }, function (receiver, value) {
      return receiver.set_errorContainer_8o8mn_k$(value.value_1);
    });
  }
  function errorContainer$factory_0() {
    return getPropertyCallableRef('errorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_errorContainer_brp79j_k$());
    }, function (receiver, value) {
      return receiver.set_errorContainer_8o8mn_k$(value.value_1);
    });
  }
  function onErrorContainer$factory() {
    return getPropertyCallableRef('onErrorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onErrorContainer_7j32ca_k$());
    }, function (receiver, value) {
      return receiver.set_onErrorContainer_1wx95a_k$(value.value_1);
    });
  }
  function onErrorContainer$factory_0() {
    return getPropertyCallableRef('onErrorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_onErrorContainer_7j32ca_k$());
    }, function (receiver, value) {
      return receiver.set_onErrorContainer_1wx95a_k$(value.value_1);
    });
  }
  function outline$factory() {
    return getPropertyCallableRef('outline', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_outline_oevljy_k$());
    }, function (receiver, value) {
      return receiver.set_outline_brz066_k$(value.value_1);
    });
  }
  function outline$factory_0() {
    return getPropertyCallableRef('outline', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_outline_oevljy_k$());
    }, function (receiver, value) {
      return receiver.set_outline_brz066_k$(value.value_1);
    });
  }
  function outlineVariant$factory() {
    return getPropertyCallableRef('outlineVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_outlineVariant_3e3n73_k$());
    }, function (receiver, value) {
      return receiver.set_outlineVariant_v9tncp_k$(value.value_1);
    });
  }
  function outlineVariant$factory_0() {
    return getPropertyCallableRef('outlineVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_outlineVariant_3e3n73_k$());
    }, function (receiver, value) {
      return receiver.set_outlineVariant_v9tncp_k$(value.value_1);
    });
  }
  function scrim$factory() {
    return getPropertyCallableRef('scrim', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_scrim_ceik4e_k$());
    }, function (receiver, value) {
      return receiver.set_scrim_l6gvoi_k$(value.value_1);
    });
  }
  function scrim$factory_0() {
    return getPropertyCallableRef('scrim', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_scrim_ceik4e_k$());
    }, function (receiver, value) {
      return receiver.set_scrim_l6gvoi_k$(value.value_1);
    });
  }
  var properties_initialized_ColorScheme_kt_ox8mco;
  function _init_properties_ColorScheme_kt__xhtsty() {
    if (properties_initialized_ColorScheme_kt_ox8mco) {
    } else {
      properties_initialized_ColorScheme_kt_ox8mco = true;
      LocalColorScheme = staticCompositionLocalOf(LocalColorScheme$lambda);
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance().get_Black_wh3yn9_k$());
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (properties_initialized_ContentColor_kt_sc8rw) {
    } else {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  function get_mouseSlop() {
    _init_properties_DragGestureDetectorCopy_kt__xx601u();
    return mouseSlop;
  }
  var mouseSlop;
  function get_defaultTouchSlop() {
    _init_properties_DragGestureDetectorCopy_kt__xx601u();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  function get_mouseToTouchSlopRatio() {
    _init_properties_DragGestureDetectorCopy_kt__xx601u();
    return mouseToTouchSlopRatio;
  }
  var mouseToTouchSlopRatio;
  var properties_initialized_DragGestureDetectorCopy_kt_anevhc;
  function _init_properties_DragGestureDetectorCopy_kt__xx601u() {
    if (properties_initialized_DragGestureDetectorCopy_kt_anevhc) {
    } else {
      properties_initialized_DragGestureDetectorCopy_kt_anevhc = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0.125);
      mouseSlop = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(18);
      defaultTouchSlop = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp0_div = get_mouseSlop();
      var tmp1_div = get_defaultTouchSlop();
      tmp$ret$0_1 = _Dp___get_value__impl__geb1vb(tmp0_div) / _Dp___get_value__impl__geb1vb(tmp1_div);
      mouseToTouchSlopRatio = tmp$ret$0_1;
    }
  }
  function get_OutgoingSpecEasing() {
    _init_properties_Elevation_kt__80i8t1();
    return OutgoingSpecEasing;
  }
  var OutgoingSpecEasing;
  function get_DefaultIncomingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultIncomingSpec;
  }
  var DefaultIncomingSpec;
  function get_DefaultOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultOutgoingSpec;
  }
  var DefaultOutgoingSpec;
  function get_HoveredOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return HoveredOutgoingSpec;
  }
  var HoveredOutgoingSpec;
  var properties_initialized_Elevation_kt_70s6ab;
  function _init_properties_Elevation_kt__80i8t1() {
    if (properties_initialized_Elevation_kt_70s6ab) {
    } else {
      properties_initialized_Elevation_kt_70s6ab = true;
      OutgoingSpecEasing = new CubicBezierEasing(0.4, 0.0, 0.6, 1.0);
      DefaultIncomingSpec = new TweenSpec(120, VOID, get_FastOutSlowInEasing());
      DefaultOutgoingSpec = new TweenSpec(150, VOID, get_OutgoingSpecEasing());
      HoveredOutgoingSpec = new TweenSpec(120, VOID, get_OutgoingSpecEasing());
    }
  }
  function ExperimentalMaterial3Api() {
  }
  protoOf(ExperimentalMaterial3Api).equals = function (other) {
    if (!(other instanceof ExperimentalMaterial3Api))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalMaterial3Api ? other : THROW_CCE();
    return true;
  };
  protoOf(ExperimentalMaterial3Api).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalMaterial3Api).toString = function () {
    return '@androidx.compose.material3.ExperimentalMaterial3Api()';
  };
  function get_ExtendedFabStartIconPadding() {
    _init_properties_FloatingActionButton_kt__r7rs26();
    return ExtendedFabStartIconPadding;
  }
  var ExtendedFabStartIconPadding;
  function get_ExtendedFabEndIconPadding() {
    _init_properties_FloatingActionButton_kt__r7rs26();
    return ExtendedFabEndIconPadding;
  }
  var ExtendedFabEndIconPadding;
  function get_ExtendedFabTextPadding() {
    _init_properties_FloatingActionButton_kt__r7rs26();
    return ExtendedFabTextPadding;
  }
  var ExtendedFabTextPadding;
  function get_ExtendedFabMinimumWidth() {
    _init_properties_FloatingActionButton_kt__r7rs26();
    return ExtendedFabMinimumWidth;
  }
  var ExtendedFabMinimumWidth;
  function get_ExtendedFabCollapseAnimation() {
    _init_properties_FloatingActionButton_kt__r7rs26();
    return ExtendedFabCollapseAnimation;
  }
  var ExtendedFabCollapseAnimation;
  function get_ExtendedFabExpandAnimation() {
    _init_properties_FloatingActionButton_kt__r7rs26();
    return ExtendedFabExpandAnimation;
  }
  var ExtendedFabExpandAnimation;
  var properties_initialized_FloatingActionButton_kt_6gm10w;
  function _init_properties_FloatingActionButton_kt__r7rs26() {
    if (properties_initialized_FloatingActionButton_kt_6gm10w) {
    } else {
      properties_initialized_FloatingActionButton_kt_6gm10w = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      ExtendedFabStartIconPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(12);
      ExtendedFabEndIconPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(20);
      ExtendedFabTextPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(80);
      ExtendedFabMinimumWidth = tmp$ret$0_2;
      ExtendedFabCollapseAnimation = fadeOut(tween(numberToInt(MotionTokens_getInstance().get_DurationShort2_c04snn_k$()), VOID, MotionTokens_getInstance().get_EasingLinearCubicBezier_dc4v3k_k$())).plus_3d7su1_k$(shrinkHorizontally(tween(numberToInt(MotionTokens_getInstance().get_DurationLong2_e150hl_k$()), VOID, MotionTokens_getInstance().get_EasingEmphasizedCubicBezier_6bhect_k$()), Companion_getInstance_0().get_Start_ih4i6x_k$()));
      ExtendedFabExpandAnimation = fadeIn(tween(numberToInt(MotionTokens_getInstance().get_DurationShort4_c04snp_k$()), numberToInt(MotionTokens_getInstance().get_DurationShort2_c04snn_k$()), MotionTokens_getInstance().get_EasingLinearCubicBezier_dc4v3k_k$())).plus_9f8al5_k$(expandHorizontally(tween(numberToInt(MotionTokens_getInstance().get_DurationLong2_e150hl_k$()), VOID, MotionTokens_getInstance().get_EasingEmphasizedCubicBezier_6bhect_k$()), Companion_getInstance_0().get_Start_ih4i6x_k$()));
    }
  }
  function get_DefaultIconSizeModifier() {
    _init_properties_Icon_kt__pgqcnt();
    return DefaultIconSizeModifier;
  }
  var DefaultIconSizeModifier;
  var properties_initialized_Icon_kt_u3g1lx;
  function _init_properties_Icon_kt__pgqcnt() {
    if (properties_initialized_Icon_kt_u3g1lx) {
    } else {
      properties_initialized_Icon_kt_u3g1lx = true;
      DefaultIconSizeModifier = size(Companion_getInstance_1(), IconButtonTokens_getInstance().get_IconSize_u57ada_k$());
    }
  }
  function get_TwoLineListItemContainerHeight() {
    _init_properties_ListItem_kt__vmar8x();
    return TwoLineListItemContainerHeight;
  }
  var TwoLineListItemContainerHeight;
  function get_ThreeLineListItemContainerHeight() {
    _init_properties_ListItem_kt__vmar8x();
    return ThreeLineListItemContainerHeight;
  }
  var ThreeLineListItemContainerHeight;
  function get_ListItemVerticalPadding() {
    _init_properties_ListItem_kt__vmar8x();
    return ListItemVerticalPadding;
  }
  var ListItemVerticalPadding;
  function get_ListItemThreeLineVerticalPadding() {
    _init_properties_ListItem_kt__vmar8x();
    return ListItemThreeLineVerticalPadding;
  }
  var ListItemThreeLineVerticalPadding;
  function get_ListItemHorizontalPadding() {
    _init_properties_ListItem_kt__vmar8x();
    return ListItemHorizontalPadding;
  }
  var ListItemHorizontalPadding;
  function get_LeadingContentEndPadding() {
    _init_properties_ListItem_kt__vmar8x();
    return LeadingContentEndPadding;
  }
  var LeadingContentEndPadding;
  function get_ContentEndPadding() {
    _init_properties_ListItem_kt__vmar8x();
    return ContentEndPadding;
  }
  var ContentEndPadding;
  function get_TrailingHorizontalPadding() {
    _init_properties_ListItem_kt__vmar8x();
    return TrailingHorizontalPadding;
  }
  var TrailingHorizontalPadding;
  var properties_initialized_ListItem_kt_p7f99v;
  function _init_properties_ListItem_kt__vmar8x() {
    if (properties_initialized_ListItem_kt_p7f99v) {
    } else {
      properties_initialized_ListItem_kt_p7f99v = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(72);
      TwoLineListItemContainerHeight = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(88);
      ThreeLineListItemContainerHeight = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(8);
      ListItemVerticalPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(16);
      ListItemThreeLineVerticalPadding = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(16);
      ListItemHorizontalPadding = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(16);
      LeadingContentEndPadding = tmp$ret$0_4;
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(8);
      ContentEndPadding = tmp$ret$0_5;
      var tmp$ret$0_6;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_6 = _Dp___init__impl__ms3zkb(8);
      TrailingHorizontalPadding = tmp$ret$0_6;
    }
  }
  function get_DefaultRippleAlpha() {
    _init_properties_MaterialTheme_kt__ccmets();
    return DefaultRippleAlpha;
  }
  var DefaultRippleAlpha;
  function get_$stableprop_0() {
    return 0;
  }
  function MaterialTheme() {
    MaterialTheme_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(MaterialTheme).get_colorScheme_tvg6f3_k$ = function () {
    illegalDecoyCallException('<get-colorScheme>');
  };
  protoOf(MaterialTheme).get_typography_tk20co_k$ = function () {
    illegalDecoyCallException('<get-typography>');
  };
  protoOf(MaterialTheme).get_shapes_jgtjwb_k$ = function () {
    illegalDecoyCallException('<get-shapes>');
  };
  protoOf(MaterialTheme).$get_colorScheme$$composable_cyyz8_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1686668101, 'C($get-colorScheme$$composable)95@4170L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1686668101, $changed, -1, 'androidx.compose.material3.MaterialTheme.$get-colorScheme$$composable (MaterialTheme.kt:95)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalColorScheme();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  protoOf(MaterialTheme).$get_typography$$composable_fm42xb_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 800335301, 'C($get-typography$$composable)103@4394L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(800335301, $changed, -1, 'androidx.compose.material3.MaterialTheme.$get-typography$$composable (MaterialTheme.kt:103)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalTypography();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  protoOf(MaterialTheme).$get_shapes$$composable_4kixjg_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -394650369, 'C($get-shapes$$composable)111@4602L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-394650369, $changed, -1, 'androidx.compose.material3.MaterialTheme.$get-shapes$$composable (MaterialTheme.kt:111)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalShapes();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    if (MaterialTheme_instance == null)
      new MaterialTheme();
    return MaterialTheme_instance;
  }
  function MaterialTheme$composable(colorScheme, shapes, typography, content, $composer, $changed, $default) {
    _init_properties_MaterialTheme_kt__ccmets();
    var colorScheme_0 = {_v: colorScheme};
    var shapes_0 = {_v: shapes};
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1389881873);
    sourceInformation($composer_0, 'C(MaterialTheme$composable)P(!1,2,3)58@2824L11,59@2872L6,60@2923L10,*63@3007L194,70@3286L16,71@3329L50,72@3384L417:MaterialTheme.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.changed_ga7h3f_k$(colorScheme_0._v) : false) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(shapes_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changed_ga7h3f_k$(typography_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          colorScheme_0._v = MaterialTheme_getInstance().$get_colorScheme$$composable_cyyz8_k$($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          shapes_0._v = MaterialTheme_getInstance().$get_shapes$$composable_4kixjg_k$($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          typography_0._v = MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1389881873, $dirty, -1, 'androidx.compose.material3.MaterialTheme$composable (MaterialTheme.kt:57)');
      }
      var tmp$ret$5;
      // Inline function 'kotlin.apply' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>' call
        tmp$ret$0 = colorScheme_0._v.copy$default_fpnc88_k$();
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      var tmp3_apply = tmp$ret$4;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>' call
      updateColorSchemeFrom(tmp3_apply, colorScheme_0._v);
      tmp$ret$5 = tmp3_apply;
      var rememberedColorScheme = tmp$ret$5;
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var rippleIndication = rememberRipple$composable(false, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7);
      var selectionColors = rememberTextSelectionColors$composable(rememberedColorScheme, $composer_0, 0);
      var tmp_2 = [get_LocalColorScheme().provides_3e53yf_k$(rememberedColorScheme), get_LocalIndication().provides_3e53yf_k$(rippleIndication), get_LocalRippleTheme().provides_3e53yf_k$(MaterialRippleTheme_getInstance()), get_LocalShapes().provides_3e53yf_k$(shapes_0._v), get_LocalTextSelectionColors().provides_3e53yf_k$(selectionColors), get_LocalTypography().provides_3e53yf_k$(typography_0._v)];
      var tmp$ret$12;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1066563262, true, MaterialTheme$composable$lambda(typography_0, content, $dirty));
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_2 = tmp3_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>.<anonymous>' call
        tmp$ret$6 = ComposableLambda$invoke$ref(dispatchReceiver);
        var value_0 = tmp$ret$6;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_4;
      tmp$ret$8 = tmp$ret$7;
      var tmp_5 = tmp$ret$8;
      tmp$ret$9 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$10 = tmp0_0;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      CompositionLocalProvider$composable(tmp_2, tmp$ret$12, $composer_0, 48);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MaterialTheme$composable$lambda_0(colorScheme_0, shapes_0, typography_0, content, $changed, $default));
    }
  }
  function rememberTextSelectionColors$composable(colorScheme, $composer, $changed) {
    _init_properties_MaterialTheme_kt__ccmets();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(339352566);
    sourceInformation($composer_0, 'C(rememberTextSelectionColors$composable)134@5274L198:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(339352566, $changed, -1, 'androidx.compose.material3.rememberTextSelectionColors$composable (MaterialTheme.kt:132)');
    }
    var primaryColor = colorScheme.get_primary_9vvgym_k$();
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.changed_ga7h3f_k$(new Color(primaryColor));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material3.rememberTextSelectionColors$composable.<anonymous>' call
      tmp$ret$0 = new TextSelectionColors(primaryColor, Color__copy$default_impl_ectz3s(primaryColor, 0.4));
      var value = tmp$ret$0;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$4 = tmp0;
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function MaterialRippleTheme() {
    MaterialRippleTheme_instance = this;
  }
  protoOf(MaterialRippleTheme).defaultColor_r8g18n_k$ = function () {
    illegalDecoyCallException('defaultColor');
  };
  protoOf(MaterialRippleTheme).rippleAlpha_cuqqk2_k$ = function () {
    illegalDecoyCallException('rippleAlpha');
  };
  protoOf(MaterialRippleTheme).defaultColor$composable_3q39e6_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1841182731);
    sourceInformation($composer_0, 'C(defaultColor$composable)117@4743L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1841182731, $changed, -1, 'androidx.compose.material3.MaterialRippleTheme.defaultColor$composable (MaterialTheme.kt:117)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0.value_1;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  };
  protoOf(MaterialRippleTheme).rippleAlpha$composable_ezucwt_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1881832318);
    sourceInformation($composer_0, 'C(rippleAlpha$composable):MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1881832318, $changed, -1, 'androidx.compose.material3.MaterialRippleTheme.rippleAlpha$composable (MaterialTheme.kt:120)');
    }
    var tmp0 = get_DefaultRippleAlpha();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  var MaterialRippleTheme_instance;
  function MaterialRippleTheme_getInstance() {
    if (MaterialRippleTheme_instance == null)
      new MaterialRippleTheme();
    return MaterialRippleTheme_instance;
  }
  function get_TextSelectionBackgroundOpacity() {
    return TextSelectionBackgroundOpacity;
  }
  var TextSelectionBackgroundOpacity;
  function MaterialTheme$composable$lambda($typography, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C80@3730L65:MaterialTheme.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1066563262, $changed, -1, 'androidx.compose.material3.MaterialTheme$composable.<anonymous> (MaterialTheme.kt:79)');
        }
        ProvideTextStyle$composable($typography._v.get_bodyLarge_sxra4w_k$(), $content, $composer_0, 112 & $$dirty >> 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function MaterialTheme$composable$lambda_0($colorScheme, $shapes, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme$composable($colorScheme._v, $shapes._v, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_MaterialTheme_kt_8j16em;
  function _init_properties_MaterialTheme_kt__ccmets() {
    if (properties_initialized_MaterialTheme_kt_8j16em) {
    } else {
      properties_initialized_MaterialTheme_kt_8j16em = true;
      var tmp0_pressedAlpha = StateTokens_getInstance().get_PressedStateLayerOpacity_gdafla_k$();
      var tmp1_focusedAlpha = StateTokens_getInstance().get_FocusStateLayerOpacity_rqckro_k$();
      var tmp2_draggedAlpha = StateTokens_getInstance().get_DraggedStateLayerOpacity_svon4y_k$();
      var tmp3_hoveredAlpha = StateTokens_getInstance().get_HoverStateLayerOpacity_gc8e7s_k$();
      DefaultRippleAlpha = new RippleAlpha(tmp2_draggedAlpha, tmp1_focusedAlpha, tmp3_hoveredAlpha, tmp0_pressedAlpha);
    }
  }
  function get_MenuVerticalMargin() {
    _init_properties_Menu_kt__roln5r();
    return MenuVerticalMargin;
  }
  var MenuVerticalMargin;
  function get_DropdownMenuItemHorizontalPadding() {
    _init_properties_Menu_kt__roln5r();
    return DropdownMenuItemHorizontalPadding;
  }
  var DropdownMenuItemHorizontalPadding;
  function get_DropdownMenuVerticalPadding() {
    _init_properties_Menu_kt__roln5r();
    return DropdownMenuVerticalPadding;
  }
  var DropdownMenuVerticalPadding;
  function get_DropdownMenuItemDefaultMinWidth() {
    _init_properties_Menu_kt__roln5r();
    return DropdownMenuItemDefaultMinWidth;
  }
  var DropdownMenuItemDefaultMinWidth;
  function get_DropdownMenuItemDefaultMaxWidth() {
    _init_properties_Menu_kt__roln5r();
    return DropdownMenuItemDefaultMaxWidth;
  }
  var DropdownMenuItemDefaultMaxWidth;
  var properties_initialized_Menu_kt_ipl1mn;
  function _init_properties_Menu_kt__roln5r() {
    if (properties_initialized_Menu_kt_ipl1mn) {
    } else {
      properties_initialized_Menu_kt_ipl1mn = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
      MenuVerticalMargin = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(12);
      DropdownMenuItemHorizontalPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(8);
      DropdownMenuVerticalPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(112);
      DropdownMenuItemDefaultMinWidth = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(280);
      DropdownMenuItemDefaultMaxWidth = tmp$ret$0_3;
    }
  }
  function get_NavigationBarHeight() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return NavigationBarHeight;
  }
  var NavigationBarHeight;
  function get_NavigationBarItemHorizontalPadding() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return NavigationBarItemHorizontalPadding;
  }
  var NavigationBarItemHorizontalPadding;
  function get_NavigationBarItemVerticalPadding() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return NavigationBarItemVerticalPadding;
  }
  var NavigationBarItemVerticalPadding;
  function get_IndicatorHorizontalPadding() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return IndicatorHorizontalPadding;
  }
  var IndicatorHorizontalPadding;
  function get_IndicatorVerticalPadding() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return IndicatorVerticalPadding;
  }
  var IndicatorVerticalPadding;
  function get_IndicatorVerticalOffset() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return IndicatorVerticalOffset;
  }
  var IndicatorVerticalOffset;
  var properties_initialized_NavigationBar_kt_9s7nqn;
  function _init_properties_NavigationBar_kt__bsbxjn() {
    if (properties_initialized_NavigationBar_kt_9s7nqn) {
    } else {
      properties_initialized_NavigationBar_kt_9s7nqn = true;
      NavigationBarHeight = NavigationBarTokens_getInstance().get_ContainerHeight_59nwai_k$();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
      NavigationBarItemHorizontalPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(16);
      NavigationBarItemVerticalPadding = tmp$ret$0_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp0_minus = NavigationBarTokens_getInstance().get_ActiveIndicatorWidth_elh9vl_k$();
      var tmp1_minus = NavigationBarTokens_getInstance().get_IconSize_u57ada_k$();
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
      var tmp2_div = tmp$ret$0_1;
      tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_div) / 2);
      IndicatorHorizontalPadding = tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp0_minus_0 = NavigationBarTokens_getInstance().get_ActiveIndicatorHeight_7g1deq_k$();
      var tmp1_minus_0 = NavigationBarTokens_getInstance().get_IconSize_u57ada_k$();
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_0) - _Dp___get_value__impl__geb1vb(tmp1_minus_0));
      var tmp2_div_0 = tmp$ret$0_2;
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_div_0) / 2);
      IndicatorVerticalPadding = tmp$ret$1_0;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(12);
      IndicatorVerticalOffset = tmp$ret$0_3;
    }
  }
  function get_DrawerVelocityThreshold() {
    _init_properties_NavigationDrawer_kt__nnphad();
    return DrawerVelocityThreshold;
  }
  var DrawerVelocityThreshold;
  function get_MinimumDrawerWidth() {
    _init_properties_NavigationDrawer_kt__nnphad();
    return MinimumDrawerWidth;
  }
  var MinimumDrawerWidth;
  function get_AnimationSpec() {
    _init_properties_NavigationDrawer_kt__nnphad();
    return AnimationSpec;
  }
  var AnimationSpec;
  var properties_initialized_NavigationDrawer_kt_nyyxzb;
  function _init_properties_NavigationDrawer_kt__nnphad() {
    if (properties_initialized_NavigationDrawer_kt_nyyxzb) {
    } else {
      properties_initialized_NavigationDrawer_kt_nyyxzb = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(400);
      DrawerVelocityThreshold = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(240);
      MinimumDrawerWidth = tmp$ret$0_0;
      AnimationSpec = new TweenSpec(256);
    }
  }
  function get_NavigationRailVerticalPadding() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailVerticalPadding;
  }
  var NavigationRailVerticalPadding;
  function get_NavigationRailHeaderPadding() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailHeaderPadding;
  }
  var NavigationRailHeaderPadding;
  function get_NavigationRailItemWidth() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailItemWidth;
  }
  var NavigationRailItemWidth;
  function get_NavigationRailItemHeight() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailItemHeight;
  }
  var NavigationRailItemHeight;
  function get_NavigationRailItemVerticalPadding() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailItemVerticalPadding;
  }
  var NavigationRailItemVerticalPadding;
  function get_IndicatorHorizontalPadding_0() {
    _init_properties_NavigationRail_kt__le76sm();
    return IndicatorHorizontalPadding_0;
  }
  var IndicatorHorizontalPadding_0;
  function get_IndicatorVerticalPaddingWithLabel() {
    _init_properties_NavigationRail_kt__le76sm();
    return IndicatorVerticalPaddingWithLabel;
  }
  var IndicatorVerticalPaddingWithLabel;
  function get_IndicatorVerticalPaddingNoLabel() {
    _init_properties_NavigationRail_kt__le76sm();
    return IndicatorVerticalPaddingNoLabel;
  }
  var IndicatorVerticalPaddingNoLabel;
  var properties_initialized_NavigationRail_kt_2gzc3c;
  function _init_properties_NavigationRail_kt__le76sm() {
    if (properties_initialized_NavigationRail_kt_2gzc3c) {
    } else {
      properties_initialized_NavigationRail_kt_2gzc3c = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      NavigationRailVerticalPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(8);
      NavigationRailHeaderPadding = tmp$ret$0_0;
      NavigationRailItemWidth = NavigationRailTokens_getInstance().get_ContainerWidth_7nhlwp_k$();
      NavigationRailItemHeight = NavigationRailTokens_getInstance().get_NoLabelActiveIndicatorHeight_nwitpd_k$();
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(4);
      NavigationRailItemVerticalPadding = tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp0_minus = NavigationRailTokens_getInstance().get_ActiveIndicatorWidth_elh9vl_k$();
      var tmp1_minus = NavigationRailTokens_getInstance().get_IconSize_u57ada_k$();
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
      var tmp2_div = tmp$ret$0_2;
      tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_div) / 2);
      IndicatorHorizontalPadding_0 = tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp0_minus_0 = NavigationRailTokens_getInstance().get_ActiveIndicatorHeight_7g1deq_k$();
      var tmp1_minus_0 = NavigationRailTokens_getInstance().get_IconSize_u57ada_k$();
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_0) - _Dp___get_value__impl__geb1vb(tmp1_minus_0));
      var tmp2_div_0 = tmp$ret$0_3;
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_div_0) / 2);
      IndicatorVerticalPaddingWithLabel = tmp$ret$1_0;
      var tmp$ret$1_1;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp0_minus_1 = NavigationRailTokens_getInstance().get_NoLabelActiveIndicatorHeight_nwitpd_k$();
      var tmp1_minus_1 = NavigationRailTokens_getInstance().get_IconSize_u57ada_k$();
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_1) - _Dp___get_value__impl__geb1vb(tmp1_minus_1));
      var tmp2_div_1 = tmp$ret$0_4;
      tmp$ret$1_1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_div_1) / 2);
      IndicatorVerticalPaddingNoLabel = tmp$ret$1_1;
    }
  }
  function get_OutlinedTextFieldInnerPadding() {
    _init_properties_OutlinedTextField_kt__36w0dj();
    return OutlinedTextFieldInnerPadding;
  }
  var OutlinedTextFieldInnerPadding;
  function get_OutlinedTextFieldTopPadding() {
    _init_properties_OutlinedTextField_kt__36w0dj();
    return OutlinedTextFieldTopPadding;
  }
  var OutlinedTextFieldTopPadding;
  var properties_initialized_OutlinedTextField_kt_gr7zs5;
  function _init_properties_OutlinedTextField_kt__36w0dj() {
    if (properties_initialized_OutlinedTextField_kt_gr7zs5) {
    } else {
      properties_initialized_OutlinedTextField_kt_gr7zs5 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      OutlinedTextFieldInnerPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(8);
      OutlinedTextFieldTopPadding = tmp$ret$0_0;
    }
  }
  function get_LinearIndicatorWidth() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return LinearIndicatorWidth;
  }
  var LinearIndicatorWidth;
  function get_LinearIndicatorHeight() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return LinearIndicatorHeight;
  }
  var LinearIndicatorHeight;
  function get_CircularIndicatorDiameter() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return CircularIndicatorDiameter;
  }
  var CircularIndicatorDiameter;
  function get_FirstLineHeadEasing() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return FirstLineHeadEasing;
  }
  var FirstLineHeadEasing;
  function get_FirstLineTailEasing() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return FirstLineTailEasing;
  }
  var FirstLineTailEasing;
  function get_SecondLineHeadEasing() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return SecondLineHeadEasing;
  }
  var SecondLineHeadEasing;
  function get_SecondLineTailEasing() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return SecondLineTailEasing;
  }
  var SecondLineTailEasing;
  function get_CircularEasing() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return CircularEasing;
  }
  var CircularEasing;
  var properties_initialized_ProgressIndicator_kt_5iutny;
  function _init_properties_ProgressIndicator_kt__3rbzw0() {
    if (properties_initialized_ProgressIndicator_kt_5iutny) {
    } else {
      properties_initialized_ProgressIndicator_kt_5iutny = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(240);
      LinearIndicatorWidth = tmp$ret$0;
      LinearIndicatorHeight = LinearProgressIndicatorTokens_getInstance().get_TrackHeight_xi16v0_k$();
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp1_minus = CircularProgressIndicatorTokens_getInstance().get_Size_wjlhej_k$();
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp0_times = CircularProgressIndicatorTokens_getInstance().get_ActiveIndicatorWidth_elh9vl_k$();
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_times) * 2);
      var tmp2_minus = tmp$ret$0_0;
      tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp1_minus) - _Dp___get_value__impl__geb1vb(tmp2_minus));
      CircularIndicatorDiameter = tmp$ret$1;
      FirstLineHeadEasing = new CubicBezierEasing(0.2, 0.0, 0.8, 1.0);
      FirstLineTailEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      SecondLineHeadEasing = new CubicBezierEasing(0.0, 0.0, 0.65, 1.0);
      SecondLineTailEasing = new CubicBezierEasing(0.1, 0.0, 0.45, 1.0);
      CircularEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
    }
  }
  function get_RadioButtonPadding() {
    _init_properties_RadioButton_kt__dpeme3();
    return RadioButtonPadding;
  }
  var RadioButtonPadding;
  function get_RadioButtonDotSize() {
    _init_properties_RadioButton_kt__dpeme3();
    return RadioButtonDotSize;
  }
  var RadioButtonDotSize;
  function get_RadioStrokeWidth() {
    _init_properties_RadioButton_kt__dpeme3();
    return RadioStrokeWidth;
  }
  var RadioStrokeWidth;
  var properties_initialized_RadioButton_kt_x3rbx;
  function _init_properties_RadioButton_kt__dpeme3() {
    if (properties_initialized_RadioButton_kt_x3rbx) {
    } else {
      properties_initialized_RadioButton_kt_x3rbx = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      RadioButtonPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(12);
      RadioButtonDotSize = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(2);
      RadioStrokeWidth = tmp$ret$0_1;
    }
  }
  function get_LocalFabPlacement() {
    _init_properties_Scaffold_kt__o4wwkq();
    return LocalFabPlacement;
  }
  var LocalFabPlacement;
  function get_FabSpacing() {
    _init_properties_Scaffold_kt__o4wwkq();
    return FabSpacing;
  }
  var FabSpacing;
  function FabPlacement(left, width, height) {
    this.left_1 = left;
    this.width_1 = width;
    this.height_1 = height;
  }
  protoOf(FabPlacement).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(FabPlacement).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(FabPlacement).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  function LocalFabPlacement$lambda() {
    _init_properties_Scaffold_kt__o4wwkq();
    return null;
  }
  var properties_initialized_Scaffold_kt_ayrd2w;
  function _init_properties_Scaffold_kt__o4wwkq() {
    if (properties_initialized_Scaffold_kt_ayrd2w) {
    } else {
      properties_initialized_Scaffold_kt_ayrd2w = true;
      LocalFabPlacement = staticCompositionLocalOf(LocalFabPlacement$lambda);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      FabSpacing = tmp$ret$0;
    }
  }
  function get_LocalShapes() {
    _init_properties_Shapes_kt__48nj2q();
    return LocalShapes;
  }
  var LocalShapes;
  function get_$stableprop_1() {
    return 0;
  }
  function Shapes(extraSmall, small, medium, large, extraLarge) {
    extraSmall = extraSmall === VOID ? ShapeDefaults_getInstance().ExtraSmall_1 : extraSmall;
    small = small === VOID ? ShapeDefaults_getInstance().Small_1 : small;
    medium = medium === VOID ? ShapeDefaults_getInstance().Medium_1 : medium;
    large = large === VOID ? ShapeDefaults_getInstance().Large_1 : large;
    extraLarge = extraLarge === VOID ? ShapeDefaults_getInstance().ExtraLarge_1 : extraLarge;
    this.extraSmall_1 = extraSmall;
    this.small_1 = small;
    this.medium_1 = medium;
    this.large_1 = large;
    this.extraLarge_1 = extraLarge;
    this.$stable_1 = 0;
  }
  protoOf(Shapes).get_extraSmall_7zpwo0_k$ = function () {
    return this.extraSmall_1;
  };
  protoOf(Shapes).get_small_iylg4e_k$ = function () {
    return this.small_1;
  };
  protoOf(Shapes).get_medium_gky7we_k$ = function () {
    return this.medium_1;
  };
  protoOf(Shapes).get_large_iujklu_k$ = function () {
    return this.large_1;
  };
  protoOf(Shapes).get_extraLarge_83rs6k_k$ = function () {
    return this.extraLarge_1;
  };
  protoOf(Shapes).copy_vf33t8_k$ = function (extraSmall, small, medium, large, extraLarge) {
    return new Shapes(extraSmall, small, medium, large, extraLarge);
  };
  protoOf(Shapes).copy$default_j5sdl_k$ = function (extraSmall, small, medium, large, extraLarge, $super) {
    extraSmall = extraSmall === VOID ? this.extraSmall_1 : extraSmall;
    small = small === VOID ? this.small_1 : small;
    medium = medium === VOID ? this.medium_1 : medium;
    large = large === VOID ? this.large_1 : large;
    extraLarge = extraLarge === VOID ? this.extraLarge_1 : extraLarge;
    return $super === VOID ? this.copy_vf33t8_k$(extraSmall, small, medium, large, extraLarge) : $super.copy_vf33t8_k$.call(this, extraSmall, small, medium, large, extraLarge);
  };
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.extraSmall_1, other.extraSmall_1))
      return false;
    if (!equals(this.small_1, other.small_1))
      return false;
    if (!equals(this.medium_1, other.medium_1))
      return false;
    if (!equals(this.large_1, other.large_1))
      return false;
    if (!equals(this.extraLarge_1, other.extraLarge_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.extraSmall_1);
    result = imul(31, result) + hashCode(this.small_1) | 0;
    result = imul(31, result) + hashCode(this.medium_1) | 0;
    result = imul(31, result) + hashCode(this.large_1) | 0;
    result = imul(31, result) + hashCode(this.extraLarge_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(' + ('extraSmall=' + this.extraSmall_1 + ', ') + ('small=' + this.small_1 + ', ') + ('medium=' + this.medium_1 + ', ') + ('large=' + this.large_1 + ', ') + ('extraLarge=' + this.extraLarge_1 + ')');
  };
  function get_$stableprop_2() {
    return 0;
  }
  function ShapeDefaults() {
    ShapeDefaults_instance = this;
    this.ExtraSmall_1 = ShapeTokens_getInstance().get_CornerExtraSmall_r1y31x_k$();
    this.Small_1 = ShapeTokens_getInstance().get_CornerSmall_s291yh_k$();
    this.Medium_1 = ShapeTokens_getInstance().get_CornerMedium_eltswj_k$();
    this.Large_1 = ShapeTokens_getInstance().get_CornerLarge_ry76fx_k$();
    this.ExtraLarge_1 = ShapeTokens_getInstance().get_CornerExtraLarge_qxw7jd_k$();
    this.$stable_1 = 0;
  }
  protoOf(ShapeDefaults).get_ExtraSmall_oz4yo0_k$ = function () {
    return this.ExtraSmall_1;
  };
  protoOf(ShapeDefaults).get_Small_ih014u_k$ = function () {
    return this.Small_1;
  };
  protoOf(ShapeDefaults).get_Medium_1fiba6_k$ = function () {
    return this.Medium_1;
  };
  protoOf(ShapeDefaults).get_Large_icy5ma_k$ = function () {
    return this.Large_1;
  };
  protoOf(ShapeDefaults).get_ExtraLarge_ov335g_k$ = function () {
    return this.ExtraLarge_1;
  };
  var ShapeDefaults_instance;
  function ShapeDefaults_getInstance() {
    if (ShapeDefaults_instance == null)
      new ShapeDefaults();
    return ShapeDefaults_instance;
  }
  function LocalShapes$lambda() {
    _init_properties_Shapes_kt__48nj2q();
    return new Shapes();
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function _init_properties_Shapes_kt__48nj2q() {
    if (properties_initialized_Shapes_kt_91wqbw) {
    } else {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
    }
  }
  function get_ThumbWidth() {
    _init_properties_Slider_kt__a50341();
    return ThumbWidth;
  }
  var ThumbWidth;
  function get_ThumbHeight() {
    _init_properties_Slider_kt__a50341();
    return ThumbHeight;
  }
  var ThumbHeight;
  function get_ThumbSize() {
    _init_properties_Slider_kt__a50341();
    return ThumbSize;
  }
  var ThumbSize;
  function get_ThumbDefaultElevation() {
    _init_properties_Slider_kt__a50341();
    return ThumbDefaultElevation;
  }
  var ThumbDefaultElevation;
  function get_ThumbPressedElevation() {
    _init_properties_Slider_kt__a50341();
    return ThumbPressedElevation;
  }
  var ThumbPressedElevation;
  function get_TickSize() {
    _init_properties_Slider_kt__a50341();
    return TickSize;
  }
  var TickSize;
  function get_TrackHeight() {
    _init_properties_Slider_kt__a50341();
    return TrackHeight;
  }
  var TrackHeight;
  function get_SliderHeight() {
    _init_properties_Slider_kt__a50341();
    return SliderHeight;
  }
  var SliderHeight;
  function get_SliderMinWidth() {
    _init_properties_Slider_kt__a50341();
    return SliderMinWidth;
  }
  var SliderMinWidth;
  function get_DefaultSliderConstraints() {
    _init_properties_Slider_kt__a50341();
    return DefaultSliderConstraints;
  }
  var DefaultSliderConstraints;
  function get_SliderToTickAnimation() {
    _init_properties_Slider_kt__a50341();
    return SliderToTickAnimation;
  }
  var SliderToTickAnimation;
  var properties_initialized_Slider_kt_mzompp;
  function _init_properties_Slider_kt__a50341() {
    if (properties_initialized_Slider_kt_mzompp) {
    } else {
      properties_initialized_Slider_kt_mzompp = true;
      ThumbWidth = SliderTokens_getInstance().get_HandleWidth_j2nsq8_k$();
      ThumbHeight = SliderTokens_getInstance().get_HandleHeight_46fhub_k$();
      ThumbSize = DpSize(get_ThumbWidth(), get_ThumbHeight());
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      ThumbDefaultElevation = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(6);
      ThumbPressedElevation = tmp$ret$0_0;
      TickSize = SliderTokens_getInstance().get_TickMarksContainerSize_kw2a3n_k$();
      TrackHeight = SliderTokens_getInstance().get_InactiveTrackHeight_qwdtw9_k$();
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(48);
      SliderHeight = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(144);
      SliderMinWidth = tmp$ret$0_2;
      DefaultSliderConstraints = heightIn(widthIn(Companion_getInstance_1(), get_SliderMinWidth()), VOID, get_SliderHeight());
      SliderToTickAnimation = new TweenSpec(100);
    }
  }
  function get_ContainerMaxWidth() {
    _init_properties_Snackbar_kt__sxelwb();
    return ContainerMaxWidth;
  }
  var ContainerMaxWidth;
  function get_HeightToFirstLine() {
    _init_properties_Snackbar_kt__sxelwb();
    return HeightToFirstLine;
  }
  var HeightToFirstLine;
  function get_HorizontalSpacing() {
    _init_properties_Snackbar_kt__sxelwb();
    return HorizontalSpacing;
  }
  var HorizontalSpacing;
  function get_HorizontalSpacingButtonSide() {
    _init_properties_Snackbar_kt__sxelwb();
    return HorizontalSpacingButtonSide;
  }
  var HorizontalSpacingButtonSide;
  function get_SeparateButtonExtraY() {
    _init_properties_Snackbar_kt__sxelwb();
    return SeparateButtonExtraY;
  }
  var SeparateButtonExtraY;
  function get_SnackbarVerticalPadding() {
    _init_properties_Snackbar_kt__sxelwb();
    return SnackbarVerticalPadding;
  }
  var SnackbarVerticalPadding;
  function get_TextEndExtraSpacing() {
    _init_properties_Snackbar_kt__sxelwb();
    return TextEndExtraSpacing;
  }
  var TextEndExtraSpacing;
  function get_LongButtonVerticalOffset() {
    _init_properties_Snackbar_kt__sxelwb();
    return LongButtonVerticalOffset;
  }
  var LongButtonVerticalOffset;
  var properties_initialized_Snackbar_kt_4x36ah;
  function _init_properties_Snackbar_kt__sxelwb() {
    if (properties_initialized_Snackbar_kt_4x36ah) {
    } else {
      properties_initialized_Snackbar_kt_4x36ah = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(600);
      ContainerMaxWidth = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(30);
      HeightToFirstLine = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(16);
      HorizontalSpacing = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(8);
      HorizontalSpacingButtonSide = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(2);
      SeparateButtonExtraY = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(6);
      SnackbarVerticalPadding = tmp$ret$0_4;
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(8);
      TextEndExtraSpacing = tmp$ret$0_5;
      var tmp$ret$0_6;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_6 = _Dp___init__impl__ms3zkb(12);
      LongButtonVerticalOffset = tmp$ret$0_6;
    }
  }
  function get_LocalAbsoluteTonalElevation() {
    _init_properties_Surface_kt__8o7unv();
    return LocalAbsoluteTonalElevation;
  }
  var LocalAbsoluteTonalElevation;
  function Surface$composable(modifier, shape, color, contentColor, tonalElevation, shadowElevation, border, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-976280440);
    sourceInformation($composer_0, 'C(Surface$composable)P(4,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color,7:c#ui.unit.Dp,5:c#ui.unit.Dp)101@5053L11,102@5100L22,*108@5317L7,109@5346L728:Surface.kt#uh7d8r');
    if (!(($default & 1) === 0)) {
      modifier_0._v = Companion_getInstance_1();
    }
    if (!(($default & 2) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 4) === 0)) {
      color_0._v = new Color(MaterialTheme_getInstance().$get_colorScheme$$composable_cyyz8_k$($composer_0, 6).get_surface_rbg09j_k$());
    }
    if (!(($default & 8) === 0))
      contentColor_0 = contentColorFor$composable(color_0._v.value_1, $composer_0, 14 & $changed >> 6);
    if (!(($default & 16) === 0)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tonalElevation_0 = tmp$ret$0;
    }
    if (!(($default & 32) === 0)) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 64) === 0)) {
      border_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-976280440, $changed, -1, 'androidx.compose.material3.Surface$composable (Surface.kt:98)');
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalAbsoluteTonalElevation();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$2 = tmp0.value_1;
    var tmp2_plus = tmp$ret$2;
    var tmp3_plus = tonalElevation_0;
    tmp$ret$3 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_plus) + _Dp___get_value__impl__geb1vb(tmp3_plus));
    var absoluteElevation = tmp$ret$3;
    var tmp = [get_LocalContentColor().provides_3e53yf_k$(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().provides_3e53yf_k$(new Dp(absoluteElevation))];
    var tmp$ret$10;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$9;
    // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>' call
    var tmp_0 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_0, -70914509, true, Surface$composable$lambda(modifier_0, shape_0, color_0, absoluteElevation, $changed, border_0, shadowElevation_0, content));
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var $composer_2 = tmp3_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_2;
    var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
    var tmp$ret$6;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>' call
      tmp$ret$4 = ComposableLambda$invoke$ref_0(dispatchReceiver);
      var value = tmp$ret$4;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp_1 = value;
    } else {
      tmp_1 = tmp0_let;
    }
    tmp$ret$5 = tmp_1;
    tmp$ret$6 = tmp$ret$5;
    var tmp_2 = tmp$ret$6;
    tmp$ret$7 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$7;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$8 = tmp0_0;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    CompositionLocalProvider$composable(tmp, tmp$ret$10, $composer_0, 48);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, shadowElevation) {
    _init_properties_Surface_kt__8o7unv();
    return clip(background(shadow(_this__u8e3s4, shadowElevation, shape, false).then_5qw5wu_k$(!(border_0 == null) ? border(Companion_getInstance_1(), border_0, shape) : Companion_getInstance_1()), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation$composable(color, elevation, $composer, $changed) {
    _init_properties_Surface_kt__8o7unv();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(369008065);
    sourceInformation($composer_0, 'C(surfaceColorAtElevation$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)482@23697L11,483@23742L11:Surface.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(369008065, $changed, -1, 'androidx.compose.material3.surfaceColorAtElevation$composable (Surface.kt:481)');
    }
    var tmp;
    if (equals(color, MaterialTheme_getInstance().$get_colorScheme$$composable_cyyz8_k$($composer_0, 6).get_surface_rbg09j_k$())) {
      tmp = surfaceColorAtElevation(MaterialTheme_getInstance().$get_colorScheme$$composable_cyyz8_k$($composer_0, 6), elevation);
    } else {
      tmp = color;
    }
    var tmp1_group = tmp;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function LocalAbsoluteTonalElevation$lambda() {
    _init_properties_Surface_kt__8o7unv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  function Surface$composable$lambda$lambda($this$semantics) {
    _init_properties_Surface_kt__8o7unv();
    return Unit_getInstance();
  }
  function Surface$composable$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$composable$lambda$slambda).invoke_dycxzz_k$ = function ($this$pointerInput, $completion) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Surface$composable$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$composable$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$composable$lambda$slambda).create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new Surface$composable$lambda$slambda(completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  protoOf(Surface$composable$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  function Surface$composable$lambda$slambda_0(resultContinuation) {
    var i = new Surface$composable$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.invoke_dycxzz_k$($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$composable$lambda($modifier, $shape, $color, $absoluteElevation, $$changed, $border, $shadowElevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C117@5636L139,124@5939L2,125@5978L2,113@5500L568:Surface.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-70914509, $changed, -1, 'androidx.compose.material3.Surface$composable.<anonymous> (Surface.kt:112)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = surface($modifier._v, $shape._v, surfaceColorAtElevation$composable($color._v.value_1, $absoluteElevation, $composer_0, 14 & $$changed >> 6), $border._v, $shadowElevation._v.value_1);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_1 = tmp2_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (false ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = Surface$composable$lambda$lambda;
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var tmp_3 = semantics(tmp_0, false, tmp$ret$4);
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp5_remember$composable = $composer_0;
        var $composer_2 = tmp5_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp4_cache = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp3_let = tmp4_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (false ? true : tmp3_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = Surface$composable$lambda$slambda_0(null);
          var value_0 = tmp$ret$5;
          tmp4_cache.updateRememberedValue_l1colo_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = tmp3_let;
        }
        tmp$ret$6 = tmp_4;
        tmp$ret$7 = tmp$ret$6;
        var tmp_5 = tmp$ret$7;
        tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$9 = tmp0_0;
        var tmp22_Box$composable = pointerInput(tmp_3, Unit_getInstance(), tmp$ret$9);
        var tmp23_Box$composable = null;
        var tmp24_Box$composable = $composer_0;
        var modifier = tmp22_Box$composable;
        var contentAlignment = tmp23_Box$composable;
        var propagateMinConstraints = true;
        var $composer_3 = tmp24_Box$composable;
        $composer_3.startReplaceableGroup_rp6air_k$(1330882304);
        sourceInformation($composer_3, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance_1();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_0().get_TopStart_o4x792_k$();
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_3, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp17_Layout$composable = modifier;
        var tmp18_Layout$composable = $composer_3;
        var tmp19_Layout$composable = 0;
        var modifier_0 = tmp17_Layout$composable;
        var $composer_4 = tmp18_Layout$composable;
        $composer_4.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_4, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance_1();
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp6_$get_current$$composable_e2rmqd = get_LocalDensity();
        var tmp7_$get_current$$composable_dkarp2 = $composer_4;
        var $composer_5 = tmp7_$get_current$$composable_dkarp2;
        sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_5.consume_11nid3_k$(tmp6_$get_current$$composable_e2rmqd);
        sourceInformationMarkerEnd($composer_5);
        tmp$ret$10 = tmp0_1;
        var density = tmp$ret$10;
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp8_$get_current$$composable_d1twnr = get_LocalLayoutDirection();
        var tmp9_$get_current$$composable_cjd1mg = $composer_4;
        var $composer_6 = tmp9_$get_current$$composable_cjd1mg;
        sourceInformationMarkerStart($composer_6, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_6.consume_11nid3_k$(tmp8_$get_current$$composable_d1twnr);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$11 = tmp0_2;
        var layoutDirection = tmp$ret$11;
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp10_$get_current$$composable_orpap8 = get_LocalViewConfiguration();
        var tmp11_$get_current$$composable_o98fnx = $composer_4;
        var $composer_7 = tmp11_$get_current$$composable_o98fnx;
        sourceInformationMarkerStart($composer_7, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_3 = $composer_7.consume_11nid3_k$(tmp10_$get_current$$composable_orpap8);
        sourceInformationMarkerEnd($composer_7);
        tmp$ret$12 = tmp0_3;
        var viewConfiguration = tmp$ret$12;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp12_ReusableComposeNode$composable = Companion_getInstance_3().get_Constructor_f7ieep_k$();
        var tmp13_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp14_ReusableComposeNode$composable = $composer_4;
        var tmp15_ReusableComposeNode$composable = 6 | 7168 & tmp19_Layout$composable << 9;
        var $composer_8 = tmp14_ReusableComposeNode$composable;
        var tmp_6 = $composer_8.get_applier_bupu8u_k$();
        if (!isInterface(tmp_6, Applier)) {
          invalidApplier();
        }
        $composer_8.startReusableNode_jk07k2_k$();
        if ($composer_8.get_inserting_25mlsw_k$()) {
          $composer_8.createNode_p4ouwd_k$(tmp12_ReusableComposeNode$composable);
        } else {
          $composer_8.useNode_inlzo8_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp16__anonymous__5bf3vu = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss(tmp16__anonymous__5bf3vu, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss(tmp16__anonymous__5bf3vu, density, Companion_getInstance_3().get_SetDensity_gmdtxr_k$());
        Updater__set_impl_v7kwss(tmp16__anonymous__5bf3vu, layoutDirection, Companion_getInstance_3().get_SetLayoutDirection_w7ypuk_k$());
        Updater__set_impl_v7kwss(tmp16__anonymous__5bf3vu, viewConfiguration, Companion_getInstance_3().get_SetViewConfiguration_lke0s8_k$());
        tmp13_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & tmp15_ReusableComposeNode$composable >> 3);
        $composer_8.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp20__anonymous__q2j3lv = $composer_8;
        var tmp21__anonymous__l7ugec = 14 & tmp15_ReusableComposeNode$composable >> 9;
        var $composer_9 = tmp20__anonymous__q2j3lv;
        sourceInformationMarkerStart($composer_9, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp25__anonymous__1t3vk8 = BoxScopeInstance_getInstance();
        var tmp26__anonymous__31krnb = $composer_9;
        var tmp27__anonymous__7w9euu = 6;
        var $composer_10 = tmp26__anonymous__31krnb;
        sourceInformationMarkerStart($composer_10, 675025852, 'C128@6049L9:Surface.kt#uh7d8r');
        $content($composer_10, 14 & $$changed >> 21);
        sourceInformationMarkerEnd($composer_10);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.endReplaceableGroup_er37p7_k$();
        $composer_8.endNode_3mkr10_k$();
        $composer_4.endReplaceableGroup_er37p7_k$();
        $composer_3.endReplaceableGroup_er37p7_k$();
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (properties_initialized_Surface_kt_k203pf) {
    } else {
      properties_initialized_Surface_kt_k203pf = true;
      LocalAbsoluteTonalElevation = compositionLocalOf(VOID, LocalAbsoluteTonalElevation$lambda);
    }
  }
  function get_ThumbDiameter() {
    _init_properties_Switch_kt__dwcqr0();
    return ThumbDiameter;
  }
  var ThumbDiameter;
  function get_UncheckedThumbDiameter() {
    _init_properties_Switch_kt__dwcqr0();
    return UncheckedThumbDiameter;
  }
  var UncheckedThumbDiameter;
  function get_SwitchWidth() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchWidth;
  }
  var SwitchWidth;
  function get_SwitchHeight() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchHeight;
  }
  var SwitchHeight;
  function get_ThumbPadding() {
    _init_properties_Switch_kt__dwcqr0();
    return ThumbPadding;
  }
  var ThumbPadding;
  function get_ThumbPathLength() {
    _init_properties_Switch_kt__dwcqr0();
    return ThumbPathLength;
  }
  var ThumbPathLength;
  function get_AnimationSpec_0() {
    _init_properties_Switch_kt__dwcqr0();
    return AnimationSpec_0;
  }
  var AnimationSpec_0;
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (properties_initialized_Switch_kt_7kkg8m) {
    } else {
      properties_initialized_Switch_kt_7kkg8m = true;
      ThumbDiameter = SwitchTokens_getInstance().get_SelectedHandleWidth_bza4q3_k$();
      UncheckedThumbDiameter = SwitchTokens_getInstance().get_UnselectedHandleWidth_41jujo_k$();
      SwitchWidth = SwitchTokens_getInstance().get_TrackWidth_gzun5_k$();
      SwitchHeight = SwitchTokens_getInstance().get_TrackHeight_xi16v0_k$();
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp0_minus = get_SwitchHeight();
      var tmp1_minus = get_ThumbDiameter();
      tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
      var tmp2_div = tmp$ret$0;
      tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_div) / 2);
      ThumbPadding = tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp0_minus_0 = get_SwitchWidth();
      var tmp1_minus_0 = get_ThumbDiameter();
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_0) - _Dp___get_value__impl__geb1vb(tmp1_minus_0));
      var tmp2_minus = tmp$ret$0_0;
      var tmp3_minus = get_ThumbPadding();
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_minus) - _Dp___get_value__impl__geb1vb(tmp3_minus));
      ThumbPathLength = tmp$ret$1_0;
      AnimationSpec_0 = new TweenSpec(100);
    }
  }
  function get_SmallTabHeight() {
    _init_properties_Tab_kt__2zykwz();
    return SmallTabHeight;
  }
  var SmallTabHeight;
  function get_LargeTabHeight() {
    _init_properties_Tab_kt__2zykwz();
    return LargeTabHeight;
  }
  var LargeTabHeight;
  function get_HorizontalTextPadding() {
    _init_properties_Tab_kt__2zykwz();
    return HorizontalTextPadding;
  }
  var HorizontalTextPadding;
  function get_SingleLineTextBaselineWithIcon() {
    _init_properties_Tab_kt__2zykwz();
    return SingleLineTextBaselineWithIcon;
  }
  var SingleLineTextBaselineWithIcon;
  function get_DoubleLineTextBaselineWithIcon() {
    _init_properties_Tab_kt__2zykwz();
    return DoubleLineTextBaselineWithIcon;
  }
  var DoubleLineTextBaselineWithIcon;
  function get_IconDistanceFromBaseline() {
    _init_properties_Tab_kt__2zykwz();
    return IconDistanceFromBaseline;
  }
  var IconDistanceFromBaseline;
  function get_TextDistanceFromLeadingIcon() {
    _init_properties_Tab_kt__2zykwz();
    return TextDistanceFromLeadingIcon;
  }
  var TextDistanceFromLeadingIcon;
  var properties_initialized_Tab_kt_t1ydej;
  function _init_properties_Tab_kt__2zykwz() {
    if (properties_initialized_Tab_kt_t1ydej) {
    } else {
      properties_initialized_Tab_kt_t1ydej = true;
      SmallTabHeight = PrimaryNavigationTabTokens_getInstance().get_ContainerHeight_59nwai_k$();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(72);
      LargeTabHeight = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(16);
      HorizontalTextPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(14);
      SingleLineTextBaselineWithIcon = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(6);
      DoubleLineTextBaselineWithIcon = tmp$ret$0_2;
      IconDistanceFromBaseline = get_sp(20);
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(8);
      TextDistanceFromLeadingIcon = tmp$ret$0_3;
    }
  }
  function get_ScrollableTabRowMinimumTabWidth() {
    _init_properties_TabRow_kt__gm58f9();
    return ScrollableTabRowMinimumTabWidth;
  }
  var ScrollableTabRowMinimumTabWidth;
  function get_ScrollableTabRowPadding() {
    _init_properties_TabRow_kt__gm58f9();
    return ScrollableTabRowPadding;
  }
  var ScrollableTabRowPadding;
  function get_ScrollableTabRowScrollSpec() {
    _init_properties_TabRow_kt__gm58f9();
    return ScrollableTabRowScrollSpec;
  }
  var ScrollableTabRowScrollSpec;
  var properties_initialized_TabRow_kt_8vmbon;
  function _init_properties_TabRow_kt__gm58f9() {
    if (properties_initialized_TabRow_kt_8vmbon) {
    } else {
      properties_initialized_TabRow_kt_8vmbon = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(90);
      ScrollableTabRowMinimumTabWidth = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(52);
      ScrollableTabRowPadding = tmp$ret$0_0;
      ScrollableTabRowScrollSpec = tween(250, VOID, get_FastOutSlowInEasing());
    }
  }
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function Text$composable(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1575368789);
    sourceInformation($composer_0, 'C(Text$composable)P(13,8,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,15,14:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,10:c#ui.text.style.TextOverflow,11)103@5326L2,104@5368L7,127@6086L145:Text.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga0fqa_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.value_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga0fqa_k$(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.packedValue_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_ga0fqa_k$(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.packedValue_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga0fqa_k$(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.packedValue_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_s0r703_k$(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.value_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_i0nym2_k$(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_s0r703_k$(maxLines_0._v) ? 2048 : 1024);
    if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ((($default & 16384) === 0 ? $composer_0.changedInstance_s1wkiy_k$(onTextLayout_0._v) : false) ? 16384 : 8192);
    if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ((($default & 32768) === 0 ? $composer_0.changed_ga7h3f_k$(style_0._v) : false) ? 131072 : 65536);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 374491) === 74898)) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance_1();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance().get_Unspecified_9ntdt9_k$());
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_4().get_Unspecified_n7zca6_k$());
        }
        if (!(($default & 16) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_4().get_Unspecified_n7zca6_k$());
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_4().get_Unspecified_n7zca6_k$());
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_5().get_Clip_a6y3d7_k$());
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
        }
        if (!(($default & 16384) === 0)) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp2_remember$composable = $composer_0;
          var $composer_1 = tmp2_remember$composable;
          $composer_1.startReplaceableGroup_rp6air_k$(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_1;
          if (false ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material3.Text$composable.<anonymous>' call
            tmp$ret$0 = Text$composable$lambda;
            var value = tmp$ret$0;
            tmp1_cache.updateRememberedValue_l1colo_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = tmp0_let;
          }
          tmp$ret$1 = tmp_1;
          tmp$ret$2 = tmp$ret$1;
          var tmp_2 = tmp$ret$2;
          tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.endReplaceableGroup_er37p7_k$();
          tmp$ret$4 = tmp0;
          onTextLayout_0._v = tmp$ret$4;
          $dirty1 = $dirty1 & -57345;
        }
        if (!(($default & 32768) === 0)) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp3_$get_current$$composable_fm67ua = get_LocalTextStyle();
          var tmp4_$get_current$$composable_f3pcsz = $composer_0;
          var $composer_2 = tmp4_$get_current$$composable_f3pcsz;
          sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.consume_11nid3_k$(tmp3_$get_current$$composable_fm67ua);
          sourceInformationMarkerEnd($composer_2);
          tmp$ret$5 = tmp0_0;
          style_0._v = tmp$ret$5;
          $dirty1 = $dirty1 & -458753;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 16384) === 0))
          $dirty1 = $dirty1 & -57345;
        if (!(($default & 32768) === 0))
          $dirty1 = $dirty1 & -458753;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1575368789, $dirty, $dirty1, 'androidx.compose.material3.Text$composable (Text.kt:88)');
      }
      $composer_0.startReplaceableGroup_rp6air_k$(-502032226);
      sourceInformation($composer_0, '*109@5483L7');
      var tmp$ret$12;
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var tmp5_takeOrElse = color_0._v.value_1;
      var tmp_3;
      var tmp$ret$6;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      tmp$ret$6 = !equals(_Color___get_value__impl__1pls5m(tmp5_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_9ntdt9_k$()));
      if (tmp$ret$6) {
        tmp_3 = tmp5_takeOrElse;
      } else {
        var tmp$ret$11;
        // Inline function 'androidx.compose.material3.Text$composable.<anonymous>' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var tmp0_takeOrElse = style_0._v.get_color_v34vrz_k$();
        var tmp_4;
        var tmp$ret$7;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp$ret$7 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_9ntdt9_k$()));
        if (tmp$ret$7) {
          tmp_4 = tmp0_takeOrElse;
        } else {
          var tmp$ret$9;
          // Inline function 'androidx.compose.material3.Text$composable.<anonymous>.<anonymous>' call
          var tmp$ret$8;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
          var tmp1_$get_current$$composable_gn3xww = $composer_0;
          var $composer_3 = tmp1_$get_current$$composable_gn3xww;
          sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_1 = $composer_3.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
          sourceInformationMarkerEnd($composer_3);
          tmp$ret$8 = tmp0_1.value_1;
          var tmp0_return = tmp$ret$8;
          tmp$ret$9 = tmp0_return;
          tmp_4 = tmp$ret$9;
        }
        tmp$ret$10 = tmp_4;
        var tmp0_group = tmp$ret$10;
        var tmp1_return = tmp0_group;
        tmp$ret$11 = tmp1_return;
        tmp_3 = tmp$ret$11;
      }
      tmp$ret$12 = tmp_3;
      var tmp0_group_0 = tmp$ret$12;
      $composer_0.endReplaceableGroup_er37p7_k$();
      var textColor = tmp0_group_0;
      var tmp_5 = style_0._v;
      var tmp_6 = fontSize_0._v.packedValue_1;
      var tmp_7 = fontWeight_0._v;
      var tmp_8 = fontStyle_0._v;
      var tmp_9 = tmp_8 == null ? null : tmp_8.value_1;
      var tmp_10 = fontFamily_0._v;
      var tmp_11 = letterSpacing_0._v.packedValue_1;
      var tmp_12 = textDecoration_0._v;
      var tmp_13 = textAlign_0._v;
      var mergedStyle = tmp_5.merge_axh15w_k$(TextStyle_init_$Create$(textColor, tmp_6, tmp_7, tmp_9, VOID, tmp_10, VOID, tmp_11, VOID, VOID, VOID, VOID, tmp_12, VOID, tmp_13 == null ? null : tmp_13.value_1, VOID, lineHeight_0._v.packedValue_1));
      var tmp_14 = modifier_0._v;
      var tmp_15 = onTextLayout_0._v;
      var tmp_16 = overflow_0._v.value_1;
      var tmp_17 = softWrap_0._v;
      var tmp_18 = maxLines_0._v;
      BasicText$composable(text, tmp_14, mergedStyle, tmp_15, tmp_16, tmp_17, tmp_18, 0, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 3 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9, 128);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Text$composable$lambda_0(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function ProvideTextStyle$composable(value, content, $composer, $changed) {
    _init_properties_Text_kt__l2j80d();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(915084672);
    sourceInformation($composer_0, 'C(ProvideTextStyle$composable)P(1)259@12083L7,260@12108L80:Text.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(915084672, $dirty, -1, 'androidx.compose.material3.ProvideTextStyle$composable (Text.kt:258)');
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalTextStyle();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var mergedStyle = tmp$ret$0.merge_axh15w_k$(value);
      CompositionLocalProvider$composable([get_LocalTextStyle().provides_3e53yf_k$(mergedStyle)], content, $composer_0, 112 & $dirty);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(ProvideTextStyle$composable$lambda(value, content, $changed));
    }
  }
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return Companion_getInstance_6().get_Default_goqax4_k$();
  }
  function Text$composable$lambda(it) {
    _init_properties_Text_kt__l2j80d();
    return Unit_getInstance();
  }
  function Text$composable$lambda_0($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v.value_1;
      var tmp_1 = $fontSize._v.packedValue_1;
      var tmp_2 = $fontStyle._v;
      var tmp_3 = tmp_2 == null ? null : tmp_2.value_1;
      var tmp_4 = $fontWeight._v;
      var tmp_5 = $fontFamily._v;
      var tmp_6 = $letterSpacing._v.packedValue_1;
      var tmp_7 = $textDecoration._v;
      var tmp_8 = $textAlign._v;
      Text$composable($text, tmp, tmp_0, tmp_1, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8 == null ? null : tmp_8.value_1, $lineHeight._v.packedValue_1, $overflow._v.value_1, $softWrap._v, $maxLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function ProvideTextStyle$composable$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      ProvideTextStyle$composable($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (properties_initialized_Text_kt_kgdrtb) {
    } else {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  function get_FirstBaselineOffset() {
    _init_properties_TextField_kt__b1se5h();
    return FirstBaselineOffset;
  }
  var FirstBaselineOffset;
  function get_TextFieldBottomPadding() {
    _init_properties_TextField_kt__b1se5h();
    return TextFieldBottomPadding;
  }
  var TextFieldBottomPadding;
  function get_TextFieldTopPadding() {
    _init_properties_TextField_kt__b1se5h();
    return TextFieldTopPadding;
  }
  var TextFieldTopPadding;
  var properties_initialized_TextField_kt_dspx0j;
  function _init_properties_TextField_kt__b1se5h() {
    if (properties_initialized_TextField_kt_dspx0j) {
    } else {
      properties_initialized_TextField_kt_dspx0j = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(20);
      FirstBaselineOffset = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(10);
      TextFieldBottomPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(4);
      TextFieldTopPadding = tmp$ret$0_1;
    }
  }
  function get_ZeroConstraints() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return ZeroConstraints;
  }
  var ZeroConstraints;
  function get_TextFieldPadding() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return TextFieldPadding;
  }
  var TextFieldPadding;
  function get_HorizontalIconPadding() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return HorizontalIconPadding;
  }
  var HorizontalIconPadding;
  function get_SupportingTopPadding() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return SupportingTopPadding;
  }
  var SupportingTopPadding;
  function get_IconDefaultSizeModifier() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return IconDefaultSizeModifier;
  }
  var IconDefaultSizeModifier;
  var properties_initialized_TextFieldImpl_kt_by5wbh;
  function _init_properties_TextFieldImpl_kt__7vp9id() {
    if (properties_initialized_TextFieldImpl_kt_by5wbh) {
    } else {
      properties_initialized_TextFieldImpl_kt_by5wbh = true;
      ZeroConstraints = Constraints(0, 0, 0, 0);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      TextFieldPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(12);
      HorizontalIconPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(4);
      SupportingTopPadding = tmp$ret$0_1;
      var tmp = Companion_getInstance_1();
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(48);
      var tmp_0 = tmp$ret$0_2;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(48);
      IconDefaultSizeModifier = defaultMinSize(tmp, tmp_0, tmp$ret$1);
    }
  }
  function get_BaselineTonalPalette() {
    _init_properties_TonalPalette_kt__piztod();
    return BaselineTonalPalette;
  }
  var BaselineTonalPalette;
  function TonalPalette(neutral100, neutral99, neutral95, neutral90, neutral80, neutral70, neutral60, neutral50, neutral40, neutral30, neutral20, neutral10, neutral0, neutralVariant100, neutralVariant99, neutralVariant95, neutralVariant90, neutralVariant80, neutralVariant70, neutralVariant60, neutralVariant50, neutralVariant40, neutralVariant30, neutralVariant20, neutralVariant10, neutralVariant0, primary100, primary99, primary95, primary90, primary80, primary70, primary60, primary50, primary40, primary30, primary20, primary10, primary0, secondary100, secondary99, secondary95, secondary90, secondary80, secondary70, secondary60, secondary50, secondary40, secondary30, secondary20, secondary10, secondary0, tertiary100, tertiary99, tertiary95, tertiary90, tertiary80, tertiary70, tertiary60, tertiary50, tertiary40, tertiary30, tertiary20, tertiary10, tertiary0) {
    this.neutral100__1 = neutral100;
    this.neutral99__1 = neutral99;
    this.neutral95__1 = neutral95;
    this.neutral90__1 = neutral90;
    this.neutral80__1 = neutral80;
    this.neutral70__1 = neutral70;
    this.neutral60__1 = neutral60;
    this.neutral50__1 = neutral50;
    this.neutral40__1 = neutral40;
    this.neutral30__1 = neutral30;
    this.neutral20__1 = neutral20;
    this.neutral10__1 = neutral10;
    this.neutral0__1 = neutral0;
    this.neutralVariant100__1 = neutralVariant100;
    this.neutralVariant99__1 = neutralVariant99;
    this.neutralVariant95__1 = neutralVariant95;
    this.neutralVariant90__1 = neutralVariant90;
    this.neutralVariant80__1 = neutralVariant80;
    this.neutralVariant70__1 = neutralVariant70;
    this.neutralVariant60__1 = neutralVariant60;
    this.neutralVariant50__1 = neutralVariant50;
    this.neutralVariant40__1 = neutralVariant40;
    this.neutralVariant30__1 = neutralVariant30;
    this.neutralVariant20__1 = neutralVariant20;
    this.neutralVariant10__1 = neutralVariant10;
    this.neutralVariant0__1 = neutralVariant0;
    this.primary100__1 = primary100;
    this.primary99__1 = primary99;
    this.primary95__1 = primary95;
    this.primary90__1 = primary90;
    this.primary80__1 = primary80;
    this.primary70__1 = primary70;
    this.primary60__1 = primary60;
    this.primary50__1 = primary50;
    this.primary40__1 = primary40;
    this.primary30__1 = primary30;
    this.primary20__1 = primary20;
    this.primary10__1 = primary10;
    this.primary0__1 = primary0;
    this.secondary100__1 = secondary100;
    this.secondary99__1 = secondary99;
    this.secondary95__1 = secondary95;
    this.secondary90__1 = secondary90;
    this.secondary80__1 = secondary80;
    this.secondary70__1 = secondary70;
    this.secondary60__1 = secondary60;
    this.secondary50__1 = secondary50;
    this.secondary40__1 = secondary40;
    this.secondary30__1 = secondary30;
    this.secondary20__1 = secondary20;
    this.secondary10__1 = secondary10;
    this.secondary0__1 = secondary0;
    this.tertiary100__1 = tertiary100;
    this.tertiary99__1 = tertiary99;
    this.tertiary95__1 = tertiary95;
    this.tertiary90__1 = tertiary90;
    this.tertiary80__1 = tertiary80;
    this.tertiary70__1 = tertiary70;
    this.tertiary60__1 = tertiary60;
    this.tertiary50__1 = tertiary50;
    this.tertiary40__1 = tertiary40;
    this.tertiary30__1 = tertiary30;
    this.tertiary20__1 = tertiary20;
    this.tertiary10__1 = tertiary10;
    this.tertiary0__1 = tertiary0;
  }
  protoOf(TonalPalette).get_neutral100_3v9d08_k$ = function () {
    return this.neutral100__1;
  };
  protoOf(TonalPalette).get_neutral99_e5ye8z_k$ = function () {
    return this.neutral99__1;
  };
  protoOf(TonalPalette).get_neutral95_v7isbl_k$ = function () {
    return this.neutral95__1;
  };
  protoOf(TonalPalette).get_neutral90_imatfe_k$ = function () {
    return this.neutral90__1;
  };
  protoOf(TonalPalette).get_neutral80_de53lx_k$ = function () {
    return this.neutral80__1;
  };
  protoOf(TonalPalette).get_neutral70_pmj1bw_k$ = function () {
    return this.neutral70__1;
  };
  protoOf(TonalPalette).get_neutral60_6dwvpf_k$ = function () {
    return this.neutral60__1;
  };
  protoOf(TonalPalette).get_neutral50_wmr98e_k$ = function () {
    return this.neutral50__1;
  };
  protoOf(TonalPalette).get_neutral40_mbc73_k$ = function () {
    return this.neutral40__1;
  };
  protoOf(TonalPalette).get_neutral30_ve4ku8_k$ = function () {
    return this.neutral30__1;
  };
  protoOf(TonalPalette).get_neutral20_7mjk3l_k$ = function () {
    return this.neutral20__1;
  };
  protoOf(TonalPalette).get_neutral10_odwcxq_k$ = function () {
    return this.neutral10__1;
  };
  protoOf(TonalPalette).get_neutral0_cmegfr_k$ = function () {
    return this.neutral0__1;
  };
  protoOf(TonalPalette).get_neutralVariant100_9gy1rj_k$ = function () {
    return this.neutralVariant100__1;
  };
  protoOf(TonalPalette).get_neutralVariant99_9rhiek_k$ = function () {
    return this.neutralVariant99__1;
  };
  protoOf(TonalPalette).get_neutralVariant95_zf4dt4_k$ = function () {
    return this.neutralVariant95__1;
  };
  protoOf(TonalPalette).get_neutralVariant90_e7txkz_k$ = function () {
    return this.neutralVariant90__1;
  };
  protoOf(TonalPalette).get_neutralVariant80_hslzgc_k$ = function () {
    return this.neutralVariant80__1;
  };
  protoOf(TonalPalette).get_neutralVariant70_l825hh_k$ = function () {
    return this.neutralVariant70__1;
  };
  protoOf(TonalPalette).get_neutralVariant60_asdrju_k$ = function () {
    return this.neutralVariant60__1;
  };
  protoOf(TonalPalette).get_neutralVariant50_s8addz_k$ = function () {
    return this.neutralVariant50__1;
  };
  protoOf(TonalPalette).get_neutralVariant40_3s5jnc_k$ = function () {
    return this.neutralVariant40__1;
  };
  protoOf(TonalPalette).get_neutralVariant30_z8ilah_k$ = function () {
    return this.neutralVariant30__1;
  };
  protoOf(TonalPalette).get_neutralVariant20_382o96_k$ = function () {
    return this.neutralVariant20__1;
  };
  protoOf(TonalPalette).get_neutralVariant10_ssd8s5_k$ = function () {
    return this.neutralVariant10__1;
  };
  protoOf(TonalPalette).get_neutralVariant0_hb1q2a_k$ = function () {
    return this.neutralVariant0__1;
  };
  protoOf(TonalPalette).get_primary100_r9557h_k$ = function () {
    return this.primary100__1;
  };
  protoOf(TonalPalette).get_primary99_3gobcu_k$ = function () {
    return this.primary99__1;
  };
  protoOf(TonalPalette).get_primary95_t4b6re_k$ = function () {
    return this.primary95__1;
  };
  protoOf(TonalPalette).get_primary90_7x0qj9_k$ = function () {
    return this.primary90__1;
  };
  protoOf(TonalPalette).get_primary80_o3f6i2_k$ = function () {
    return this.primary80__1;
  };
  protoOf(TonalPalette).get_primary70_ex8yfr_k$ = function () {
    return this.primary70__1;
  };
  protoOf(TonalPalette).get_primary60_h36ylk_k$ = function () {
    return this.primary60__1;
  };
  protoOf(TonalPalette).get_primary50_lxh6c9_k$ = function () {
    return this.primary50__1;
  };
  protoOf(TonalPalette).get_primary40_a2yqp2_k$ = function () {
    return this.primary40__1;
  };
  protoOf(TonalPalette).get_primary30_sxpe8r_k$ = function () {
    return this.primary30__1;
  };
  protoOf(TonalPalette).get_primary20_32qisk_k$ = function () {
    return this.primary20__1;
  };
  protoOf(TonalPalette).get_primary10_z36ftv_k$ = function () {
    return this.primary10__1;
  };
  protoOf(TonalPalette).get_primary0_tja7w_k$ = function () {
    return this.primary0__1;
  };
  protoOf(TonalPalette).get_secondary100_bkmt1x_k$ = function () {
    return this.secondary100__1;
  };
  protoOf(TonalPalette).get_secondary99_bdjai8_k$ = function () {
    return this.secondary99__1;
  };
  protoOf(TonalPalette).get_secondary95_xzxw2c_k$ = function () {
    return this.secondary95__1;
  };
  protoOf(TonalPalette).get_secondary90_ftvpon_k$ = function () {
    return this.secondary90__1;
  };
  protoOf(TonalPalette).get_secondary80_g6k7co_k$ = function () {
    return this.secondary80__1;
  };
  protoOf(TonalPalette).get_secondary70_mu3xl5_k$ = function () {
    return this.secondary70__1;
  };
  protoOf(TonalPalette).get_secondary60_96bzg6_k$ = function () {
    return this.secondary60__1;
  };
  protoOf(TonalPalette).get_secondary50_tuc5hn_k$ = function () {
    return this.secondary50__1;
  };
  protoOf(TonalPalette).get_secondary40_263rjo_k$ = function () {
    return this.secondary40__1;
  };
  protoOf(TonalPalette).get_secondary30_y6jokz_k$ = function () {
    return this.secondary30__1;
  };
  protoOf(TonalPalette).get_secondary20_4u4gcu_k$ = function () {
    return this.secondary20__1;
  };
  protoOf(TonalPalette).get_secondary10_r6bgoh_k$ = function () {
    return this.secondary10__1;
  };
  protoOf(TonalPalette).get_secondary0_3i90dy_k$ = function () {
    return this.secondary0__1;
  };
  protoOf(TonalPalette).get_tertiary100_b3z6qt_k$ = function () {
    return this.tertiary100__1;
  };
  protoOf(TonalPalette).get_tertiary99_tpz1a8_k$ = function () {
    return this.tertiary99__1;
  };
  protoOf(TonalPalette).get_tertiary95_fni5ac_k$ = function () {
    return this.tertiary95__1;
  };
  protoOf(TonalPalette).get_tertiary90_y6bggn_k$ = function () {
    return this.tertiary90__1;
  };
  protoOf(TonalPalette).get_tertiary80_25vjfc_k$ = function () {
    return this.tertiary80__1;
  };
  protoOf(TonalPalette).get_tertiary70_tukdlz_k$ = function () {
    return this.tertiary70__1;
  };
  protoOf(TonalPalette).get_tertiary60_963rbu_k$ = function () {
    return this.tertiary60__1;
  };
  protoOf(TonalPalette).get_tertiary50_muc5ph_k$ = function () {
    return this.tertiary50__1;
  };
  protoOf(TonalPalette).get_tertiary40_g6bz8c_k$ = function () {
    return this.tertiary40__1;
  };
  protoOf(TonalPalette).get_tertiary30_fu3xsz_k$ = function () {
    return this.tertiary30__1;
  };
  protoOf(TonalPalette).get_tertiary20_n6k74u_k$ = function () {
    return this.tertiary20__1;
  };
  protoOf(TonalPalette).get_tertiary10_8tvpwh_k$ = function () {
    return this.tertiary10__1;
  };
  protoOf(TonalPalette).get_tertiary0_s4b3pi_k$ = function () {
    return this.tertiary0__1;
  };
  var properties_initialized_TonalPalette_kt_vxlo3l;
  function _init_properties_TonalPalette_kt__piztod() {
    if (properties_initialized_TonalPalette_kt_vxlo3l) {
    } else {
      properties_initialized_TonalPalette_kt_vxlo3l = true;
      BaselineTonalPalette = new TonalPalette(PaletteTokens_getInstance().get_Neutral100_8kk3s_k$(), PaletteTokens_getInstance().get_Neutral99_u2lklf_k$(), PaletteTokens_getInstance().get_Neutral95_favlz5_k$(), PaletteTokens_getInstance().get_Neutral90_yixzru_k$(), PaletteTokens_getInstance().get_Neutral80_2ii2qj_k$(), PaletteTokens_getInstance().get_Neutral70_thxuas_k$(), PaletteTokens_getInstance().get_Neutral60_9iqan1_k$(), PaletteTokens_getInstance().get_Neutral50_mhpmea_k$(), PaletteTokens_getInstance().get_Neutral40_giyijj_k$(), PaletteTokens_getInstance().get_Neutral30_fhhehs_k$(), PaletteTokens_getInstance().get_Neutral20_nj6qg1_k$(), PaletteTokens_getInstance().get_Neutral10_8h96la_k$(), PaletteTokens_getInstance().get_Neutral0_9s01ex_k$(), PaletteTokens_getInstance().get_NeutralVariant100_k8ev67_k$(), PaletteTokens_getInstance().get_NeutralVariant99_lkf824_k$(), PaletteTokens_getInstance().get_NeutralVariant95_nt1yig_k$(), PaletteTokens_getInstance().get_NeutralVariant90_q0rn8j_k$(), PaletteTokens_getInstance().get_NeutralVariant80_5zo9ss_k$(), PaletteTokens_getInstance().get_NeutralVariant70_x0zv51_k$(), PaletteTokens_getInstance().get_NeutralVariant60_10jy3q_k$(), PaletteTokens_getInstance().get_NeutralVariant50_uzvyxl_k$(), PaletteTokens_getInstance().get_NeutralVariant40_80s608_k$(), PaletteTokens_getInstance().get_NeutralVariant30_nznr13_k$(), PaletteTokens_getInstance().get_NeutralVariant20_f10dwq_k$(), PaletteTokens_getInstance().get_NeutralVariant10_gzfj4l_k$(), PaletteTokens_getInstance().get_NeutralVariant0_1ek5gu_k$(), PaletteTokens_getInstance().get_Primary100_n5b83h_k$(), PaletteTokens_getInstance().get_Primary99_jdbhpa_k$(), PaletteTokens_getInstance().get_Primary95_q05ova_k$(), PaletteTokens_getInstance().get_Primary90_ntnwvp_k$(), PaletteTokens_getInstance().get_Primary80_86s05m_k$(), PaletteTokens_getInstance().get_Primary70_utw4s7_k$(), PaletteTokens_getInstance().get_Primary60_16js94_k$(), PaletteTokens_getInstance().get_Primary50_x6zpaf_k$(), PaletteTokens_getInstance().get_Primary40_5tofne_k$(), PaletteTokens_getInstance().get_Primary30_q6rhdx_k$(), PaletteTokens_getInstance().get_Primary20_ctwnjw_k$(), PaletteTokens_getInstance().get_Primary10_j6j9hf_k$(), PaletteTokens_getInstance().get_Primary0_lkv7ms_k$(), PaletteTokens_getInstance().get_Secondary100_jvzdsb_k$(), PaletteTokens_getInstance().get_Secondary99_q4zw0g_k$(), PaletteTokens_getInstance().get_Secondary95_j8hak4_k$(), PaletteTokens_getInstance().get_Secondary90_ulcb6v_k$(), PaletteTokens_getInstance().get_Secondary80_1f3lug_k$(), PaletteTokens_getInstance().get_Secondary70_xfjivr_k$(), PaletteTokens_getInstance().get_Secondary60_5l4m22_k$(), PaletteTokens_getInstance().get_Secondary50_qfbaz9_k$(), PaletteTokens_getInstance().get_Secondary40_clctyk_k$(), PaletteTokens_getInstance().get_Secondary30_jf332r_k$(), PaletteTokens_getInstance().get_Secondary20_jll1v2_k$(), PaletteTokens_getInstance().get_Secondary10_ceuv69_k$(), PaletteTokens_getInstance().get_Secondary0_7m2xhy_k$(), PaletteTokens_getInstance().get_Tertiary100_3nherf_k$(), PaletteTokens_getInstance().get_Tertiary99_pm5468_k$(), PaletteTokens_getInstance().get_Tertiary95_jrc2ec_k$(), PaletteTokens_getInstance().get_Tertiary90_u2hjcn_k$(), PaletteTokens_getInstance().get_Tertiary80_1xydoo_k$(), PaletteTokens_getInstance().get_Tertiary70_xyeapz_k$(), PaletteTokens_getInstance().get_Tertiary60_529u7u_k$(), PaletteTokens_getInstance().get_Tertiary50_qy62th_k$(), PaletteTokens_getInstance().get_Tertiary40_c2i24c_k$(), PaletteTokens_getInstance().get_Tertiary30_jxxuwz_k$(), PaletteTokens_getInstance().get_Tertiary20_j2qa0u_k$(), PaletteTokens_getInstance().get_Tertiary10_cxpn0h_k$(), PaletteTokens_getInstance().get_Tertiary0_c7nxd2_k$());
    }
  }
  function get_LocalMinimumTouchTargetEnforcement() {
    _init_properties_TouchTarget_kt__9o1lvm();
    return LocalMinimumTouchTargetEnforcement;
  }
  var LocalMinimumTouchTargetEnforcement;
  function LocalMinimumTouchTargetEnforcement$lambda() {
    _init_properties_TouchTarget_kt__9o1lvm();
    return true;
  }
  var properties_initialized_TouchTarget_kt_3yqh7k;
  function _init_properties_TouchTarget_kt__9o1lvm() {
    if (properties_initialized_TouchTarget_kt_3yqh7k) {
    } else {
      properties_initialized_TouchTarget_kt_3yqh7k = true;
      LocalMinimumTouchTargetEnforcement = staticCompositionLocalOf(LocalMinimumTouchTargetEnforcement$lambda);
    }
  }
  function get_LocalTypography() {
    _init_properties_Typography_kt__rm3fch();
    return LocalTypography;
  }
  var LocalTypography;
  function get_$stableprop_3() {
    return 0;
  }
  function Typography(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) {
    displayLarge = displayLarge === VOID ? TypographyTokens_getInstance().get_DisplayLarge_xob476_k$() : displayLarge;
    displayMedium = displayMedium === VOID ? TypographyTokens_getInstance().get_DisplayMedium_l04ak2_k$() : displayMedium;
    displaySmall = displaySmall === VOID ? TypographyTokens_getInstance().get_DisplaySmall_xsczpq_k$() : displaySmall;
    headlineLarge = headlineLarge === VOID ? TypographyTokens_getInstance().get_HeadlineLarge_y6x9c2_k$() : headlineLarge;
    headlineMedium = headlineMedium === VOID ? TypographyTokens_getInstance().get_HeadlineMedium_611p5e_k$() : headlineMedium;
    headlineSmall = headlineSmall === VOID ? TypographyTokens_getInstance().get_HeadlineSmall_y2vdti_k$() : headlineSmall;
    titleLarge = titleLarge === VOID ? TypographyTokens_getInstance().get_TitleLarge_gtzkic_k$() : titleLarge;
    titleMedium = titleMedium === VOID ? TypographyTokens_getInstance().get_TitleMedium_o2ud24_k$() : titleMedium;
    titleSmall = titleSmall === VOID ? TypographyTokens_getInstance().get_TitleSmall_gpxozs_k$() : titleSmall;
    bodyLarge = bodyLarge === VOID ? TypographyTokens_getInstance().get_BodyLarge_8y8s9c_k$() : bodyLarge;
    bodyMedium = bodyMedium === VOID ? TypographyTokens_getInstance().get_BodyMedium_75vsrk_k$() : bodyMedium;
    bodySmall = bodySmall === VOID ? TypographyTokens_getInstance().get_BodySmall_8u6wqs_k$() : bodySmall;
    labelLarge = labelLarge === VOID ? TypographyTokens_getInstance().get_LabelLarge_es8jw0_k$() : labelLarge;
    labelMedium = labelMedium === VOID ? TypographyTokens_getInstance().get_LabelMedium_vlovsw_k$() : labelMedium;
    labelSmall = labelSmall === VOID ? TypographyTokens_getInstance().get_LabelSmall_eo6odg_k$() : labelSmall;
    this.displayLarge_1 = displayLarge;
    this.displayMedium_1 = displayMedium;
    this.displaySmall_1 = displaySmall;
    this.headlineLarge_1 = headlineLarge;
    this.headlineMedium_1 = headlineMedium;
    this.headlineSmall_1 = headlineSmall;
    this.titleLarge_1 = titleLarge;
    this.titleMedium_1 = titleMedium;
    this.titleSmall_1 = titleSmall;
    this.bodyLarge_1 = bodyLarge;
    this.bodyMedium_1 = bodyMedium;
    this.bodySmall_1 = bodySmall;
    this.labelLarge_1 = labelLarge;
    this.labelMedium_1 = labelMedium;
    this.labelSmall_1 = labelSmall;
    this.$stable_1 = 0;
  }
  protoOf(Typography).get_displayLarge_uyh5uq_k$ = function () {
    return this.displayLarge_1;
  };
  protoOf(Typography).get_displayMedium_y7staq_k$ = function () {
    return this.displayMedium_1;
  };
  protoOf(Typography).get_displaySmall_v2j1da_k$ = function () {
    return this.displaySmall_1;
  };
  protoOf(Typography).get_headlineLarge_nmi9we_k$ = function () {
    return this.headlineLarge_1;
  };
  protoOf(Typography).get_headlineMedium_mllw1e_k$ = function () {
    return this.headlineMedium_1;
  };
  protoOf(Typography).get_headlineSmall_nqk5ey_k$ = function () {
    return this.headlineSmall_1;
  };
  protoOf(Typography).get_titleLarge_l89m4s_k$ = function () {
    return this.titleLarge_1;
  };
  protoOf(Typography).get_titleMedium_jd9h8k_k$ = function () {
    return this.titleMedium_1;
  };
  protoOf(Typography).get_titleSmall_lcbhnc_k$ = function () {
    return this.titleSmall_1;
  };
  protoOf(Typography).get_bodyLarge_sxra4w_k$ = function () {
    return this.bodyLarge_1;
  };
  protoOf(Typography).get_bodyMedium_psz2kg_k$ = function () {
    return this.bodyMedium_1;
  };
  protoOf(Typography).get_bodySmall_t1t5ng_k$ = function () {
    return this.bodySmall_1;
  };
  protoOf(Typography).get_labelLarge_na0mr4_k$ = function () {
    return this.labelLarge_1;
  };
  protoOf(Typography).get_labelMedium_bueyhs_k$ = function () {
    return this.labelMedium_1;
  };
  protoOf(Typography).get_labelSmall_ne2i9o_k$ = function () {
    return this.labelSmall_1;
  };
  protoOf(Typography).copy_3p3ynu_k$ = function (displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) {
    return new Typography(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall);
  };
  protoOf(Typography).copy$default_mcgwri_k$ = function (displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall, $super) {
    displayLarge = displayLarge === VOID ? this.displayLarge_1 : displayLarge;
    displayMedium = displayMedium === VOID ? this.displayMedium_1 : displayMedium;
    displaySmall = displaySmall === VOID ? this.displaySmall_1 : displaySmall;
    headlineLarge = headlineLarge === VOID ? this.headlineLarge_1 : headlineLarge;
    headlineMedium = headlineMedium === VOID ? this.headlineMedium_1 : headlineMedium;
    headlineSmall = headlineSmall === VOID ? this.headlineSmall_1 : headlineSmall;
    titleLarge = titleLarge === VOID ? this.titleLarge_1 : titleLarge;
    titleMedium = titleMedium === VOID ? this.titleMedium_1 : titleMedium;
    titleSmall = titleSmall === VOID ? this.titleSmall_1 : titleSmall;
    bodyLarge = bodyLarge === VOID ? this.bodyLarge_1 : bodyLarge;
    bodyMedium = bodyMedium === VOID ? this.bodyMedium_1 : bodyMedium;
    bodySmall = bodySmall === VOID ? this.bodySmall_1 : bodySmall;
    labelLarge = labelLarge === VOID ? this.labelLarge_1 : labelLarge;
    labelMedium = labelMedium === VOID ? this.labelMedium_1 : labelMedium;
    labelSmall = labelSmall === VOID ? this.labelSmall_1 : labelSmall;
    return $super === VOID ? this.copy_3p3ynu_k$(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) : $super.copy_3p3ynu_k$.call(this, displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall);
  };
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.displayLarge_1.equals(other.displayLarge_1))
      return false;
    if (!this.displayMedium_1.equals(other.displayMedium_1))
      return false;
    if (!this.displaySmall_1.equals(other.displaySmall_1))
      return false;
    if (!this.headlineLarge_1.equals(other.headlineLarge_1))
      return false;
    if (!this.headlineMedium_1.equals(other.headlineMedium_1))
      return false;
    if (!this.headlineSmall_1.equals(other.headlineSmall_1))
      return false;
    if (!this.titleLarge_1.equals(other.titleLarge_1))
      return false;
    if (!this.titleMedium_1.equals(other.titleMedium_1))
      return false;
    if (!this.titleSmall_1.equals(other.titleSmall_1))
      return false;
    if (!this.bodyLarge_1.equals(other.bodyLarge_1))
      return false;
    if (!this.bodyMedium_1.equals(other.bodyMedium_1))
      return false;
    if (!this.bodySmall_1.equals(other.bodySmall_1))
      return false;
    if (!this.labelLarge_1.equals(other.labelLarge_1))
      return false;
    if (!this.labelMedium_1.equals(other.labelMedium_1))
      return false;
    if (!this.labelSmall_1.equals(other.labelSmall_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.displayLarge_1.hashCode();
    result = imul(31, result) + this.displayMedium_1.hashCode() | 0;
    result = imul(31, result) + this.displaySmall_1.hashCode() | 0;
    result = imul(31, result) + this.headlineLarge_1.hashCode() | 0;
    result = imul(31, result) + this.headlineMedium_1.hashCode() | 0;
    result = imul(31, result) + this.headlineSmall_1.hashCode() | 0;
    result = imul(31, result) + this.titleLarge_1.hashCode() | 0;
    result = imul(31, result) + this.titleMedium_1.hashCode() | 0;
    result = imul(31, result) + this.titleSmall_1.hashCode() | 0;
    result = imul(31, result) + this.bodyLarge_1.hashCode() | 0;
    result = imul(31, result) + this.bodyMedium_1.hashCode() | 0;
    result = imul(31, result) + this.bodySmall_1.hashCode() | 0;
    result = imul(31, result) + this.labelLarge_1.hashCode() | 0;
    result = imul(31, result) + this.labelMedium_1.hashCode() | 0;
    result = imul(31, result) + this.labelSmall_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(displayLarge=' + this.displayLarge_1 + ', displayMedium=' + this.displayMedium_1 + ',' + ('displaySmall=' + this.displaySmall_1 + ', ') + ('headlineLarge=' + this.headlineLarge_1 + ', headlineMedium=' + this.headlineMedium_1 + ',') + (' headlineSmall=' + this.headlineSmall_1 + ', ') + ('titleLarge=' + this.titleLarge_1 + ', titleMedium=' + this.titleMedium_1 + ', titleSmall=' + this.titleSmall_1 + ', ') + ('bodyLarge=' + this.bodyLarge_1 + ', bodyMedium=' + this.bodyMedium_1 + ', bodySmall=' + this.bodySmall_1 + ', ') + ('labelLarge=' + this.labelLarge_1 + ', labelMedium=' + this.labelMedium_1 + ', labelSmall=' + this.labelSmall_1 + ')');
  };
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return new Typography();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (properties_initialized_Typography_kt_bpd27j) {
    } else {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function CircularProgressIndicatorTokens() {
    CircularProgressIndicatorTokens_instance = this;
    this.ActiveIndicatorColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ActiveShape_1 = ShapeKeyTokens_CornerNone_getInstance();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(4.0);
    tmp.ActiveIndicatorWidth_1 = tmp$ret$0;
    this.FourColorActiveIndicatorFourColor_1 = ColorSchemeKeyTokens_TertiaryContainer_getInstance();
    this.FourColorActiveIndicatorOneColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.FourColorActiveIndicatorThreeColor_1 = ColorSchemeKeyTokens_Tertiary_getInstance();
    this.FourColorActiveIndicatorTwoColor_1 = ColorSchemeKeyTokens_PrimaryContainer_getInstance();
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(48.0);
    tmp_0.Size_1 = tmp$ret$1;
  }
  protoOf(CircularProgressIndicatorTokens).get_ActiveIndicatorColor_qs91el_k$ = function () {
    return this.ActiveIndicatorColor_1;
  };
  protoOf(CircularProgressIndicatorTokens).get_ActiveShape_nwghiq_k$ = function () {
    return this.ActiveShape_1;
  };
  protoOf(CircularProgressIndicatorTokens).get_ActiveIndicatorWidth_elh9vl_k$ = function () {
    return this.ActiveIndicatorWidth_1;
  };
  protoOf(CircularProgressIndicatorTokens).get_FourColorActiveIndicatorFourColor_57qe8o_k$ = function () {
    return this.FourColorActiveIndicatorFourColor_1;
  };
  protoOf(CircularProgressIndicatorTokens).get_FourColorActiveIndicatorOneColor_ti63im_k$ = function () {
    return this.FourColorActiveIndicatorOneColor_1;
  };
  protoOf(CircularProgressIndicatorTokens).get_FourColorActiveIndicatorThreeColor_ocviuy_k$ = function () {
    return this.FourColorActiveIndicatorThreeColor_1;
  };
  protoOf(CircularProgressIndicatorTokens).get_FourColorActiveIndicatorTwoColor_woh65w_k$ = function () {
    return this.FourColorActiveIndicatorTwoColor_1;
  };
  protoOf(CircularProgressIndicatorTokens).get_Size_wjlhej_k$ = function () {
    return this.Size_1;
  };
  var CircularProgressIndicatorTokens_instance;
  function CircularProgressIndicatorTokens_getInstance() {
    if (CircularProgressIndicatorTokens_instance == null)
      new CircularProgressIndicatorTokens();
    return CircularProgressIndicatorTokens_instance;
  }
  function ColorDarkTokens() {
    ColorDarkTokens_instance = this;
    this.Background_1 = PaletteTokens_getInstance().get_Neutral10_8h96la_k$();
    this.Error_1 = PaletteTokens_getInstance().get_Error80_9zohqc_k$();
    this.ErrorContainer_1 = PaletteTokens_getInstance().get_Error30_rznyyn_k$();
    this.InverseOnSurface_1 = PaletteTokens_getInstance().get_Neutral20_nj6qg1_k$();
    this.InversePrimary_1 = PaletteTokens_getInstance().get_Primary40_5tofne_k$();
    this.InverseSurface_1 = PaletteTokens_getInstance().get_Neutral90_yixzru_k$();
    this.OnBackground_1 = PaletteTokens_getInstance().get_Neutral90_yixzru_k$();
    this.OnError_1 = PaletteTokens_getInstance().get_Error20_b105z6_k$();
    this.OnErrorContainer_1 = PaletteTokens_getInstance().get_Error90_m0rfaz_k$();
    this.OnPrimary_1 = PaletteTokens_getInstance().get_Primary20_ctwnjw_k$();
    this.OnPrimaryContainer_1 = PaletteTokens_getInstance().get_Primary90_ntnwvp_k$();
    this.OnSecondary_1 = PaletteTokens_getInstance().get_Secondary20_jll1v2_k$();
    this.OnSecondaryContainer_1 = PaletteTokens_getInstance().get_Secondary90_ulcb6v_k$();
    this.OnSurface_1 = PaletteTokens_getInstance().get_Neutral90_yixzru_k$();
    this.OnSurfaceVariant_1 = PaletteTokens_getInstance().get_NeutralVariant80_5zo9ss_k$();
    this.OnTertiary_1 = PaletteTokens_getInstance().get_Tertiary20_j2qa0u_k$();
    this.OnTertiaryContainer_1 = PaletteTokens_getInstance().get_Tertiary90_u2hjcn_k$();
    this.Outline_1 = PaletteTokens_getInstance().get_NeutralVariant60_10jy3q_k$();
    this.OutlineVariant_1 = PaletteTokens_getInstance().get_NeutralVariant30_nznr13_k$();
    this.Primary_1 = PaletteTokens_getInstance().get_Primary80_86s05m_k$();
    this.PrimaryContainer_1 = PaletteTokens_getInstance().get_Primary30_q6rhdx_k$();
    this.Scrim_1 = PaletteTokens_getInstance().get_Neutral0_9s01ex_k$();
    this.Secondary_1 = PaletteTokens_getInstance().get_Secondary80_1f3lug_k$();
    this.SecondaryContainer_1 = PaletteTokens_getInstance().get_Secondary30_jf332r_k$();
    this.Surface_1 = PaletteTokens_getInstance().get_Neutral10_8h96la_k$();
    this.SurfaceTint_1 = this.Primary_1;
    this.SurfaceVariant_1 = PaletteTokens_getInstance().get_NeutralVariant30_nznr13_k$();
    this.Tertiary_1 = PaletteTokens_getInstance().get_Tertiary80_1xydoo_k$();
    this.TertiaryContainer_1 = PaletteTokens_getInstance().get_Tertiary30_jxxuwz_k$();
  }
  protoOf(ColorDarkTokens).get_Background_39icbo_k$ = function () {
    return this.Background_1;
  };
  protoOf(ColorDarkTokens).get_Error_tuubd0_k$ = function () {
    return this.Error_1;
  };
  protoOf(ColorDarkTokens).get_ErrorContainer_ctxlg9_k$ = function () {
    return this.ErrorContainer_1;
  };
  protoOf(ColorDarkTokens).get_InverseOnSurface_91fp04_k$ = function () {
    return this.InverseOnSurface_1;
  };
  protoOf(ColorDarkTokens).get_InversePrimary_t9ulb4_k$ = function () {
    return this.InversePrimary_1;
  };
  protoOf(ColorDarkTokens).get_InverseSurface_4jxzfv_k$ = function () {
    return this.InverseSurface_1;
  };
  protoOf(ColorDarkTokens).get_OnBackground_xdg0zp_k$ = function () {
    return this.OnBackground_1;
  };
  protoOf(ColorDarkTokens).get_OnError_4kvuwr_k$ = function () {
    return this.OnError_1;
  };
  protoOf(ColorDarkTokens).get_OnErrorContainer_49unba_k$ = function () {
    return this.OnErrorContainer_1;
  };
  protoOf(ColorDarkTokens).get_OnPrimary_thkh6n_k$ = function () {
    return this.OnPrimary_1;
  };
  protoOf(ColorDarkTokens).get_OnPrimaryContainer_rinvxw_k$ = function () {
    return this.OnPrimaryContainer_1;
  };
  protoOf(ColorDarkTokens).get_OnSecondary_53t6j3_k$ = function () {
    return this.OnSecondary_1;
  };
  protoOf(ColorDarkTokens).get_OnSecondaryContainer_yxubxi_k$ = function () {
    return this.OnSecondaryContainer_1;
  };
  protoOf(ColorDarkTokens).get_OnSurface_7pr01i_k$ = function () {
    return this.OnSurface_1;
  };
  protoOf(ColorDarkTokens).get_OnSurfaceVariant_lc9nhh_k$ = function () {
    return this.OnSurfaceVariant_1;
  };
  protoOf(ColorDarkTokens).get_OnTertiary_kcq5wh_k$ = function () {
    return this.OnTertiary_1;
  };
  protoOf(ColorDarkTokens).get_OnTertiaryContainer_5qewh8_k$ = function () {
    return this.OnTertiaryContainer_1;
  };
  protoOf(ColorDarkTokens).get_Outline_xlbmf6_k$ = function () {
    return this.Outline_1;
  };
  protoOf(ColorDarkTokens).get_OutlineVariant_rzqfwv_k$ = function () {
    return this.OutlineVariant_1;
  };
  protoOf(ColorDarkTokens).get_Primary_mwsaym_k$ = function () {
    return this.Primary_1;
  };
  protoOf(ColorDarkTokens).get_PrimaryContainer_dmivhp_k$ = function () {
    return this.PrimaryContainer_1;
  };
  protoOf(ColorDarkTokens).get_Scrim_djxz7m_k$ = function () {
    return this.Scrim_1;
  };
  protoOf(ColorDarkTokens).get_Secondary_44uf0w_k$ = function () {
    return this.Secondary_1;
  };
  protoOf(ColorDarkTokens).get_SecondaryContainer_bd1gsb_k$ = function () {
    return this.SecondaryContainer_1;
  };
  protoOf(ColorDarkTokens).get_Surface_eaj69j_k$ = function () {
    return this.Surface_1;
  };
  protoOf(ColorDarkTokens).get_SurfaceTint_i0x62s_k$ = function () {
    return this.SurfaceTint_1;
  };
  protoOf(ColorDarkTokens).get_SurfaceVariant_48hepy_k$ = function () {
    return this.SurfaceVariant_1;
  };
  protoOf(ColorDarkTokens).get_Tertiary_b5ncw0_k$ = function () {
    return this.Tertiary_1;
  };
  protoOf(ColorDarkTokens).get_TertiaryContainer_2n7jcb_k$ = function () {
    return this.TertiaryContainer_1;
  };
  var ColorDarkTokens_instance;
  function ColorDarkTokens_getInstance() {
    if (ColorDarkTokens_instance == null)
      new ColorDarkTokens();
    return ColorDarkTokens_instance;
  }
  function ColorLightTokens() {
    ColorLightTokens_instance = this;
    this.Background_1 = PaletteTokens_getInstance().get_Neutral99_u2lklf_k$();
    this.Error_1 = PaletteTokens_getInstance().get_Error40_40ry2o_k$();
    this.ErrorContainer_1 = PaletteTokens_getInstance().get_Error90_m0rfaz_k$();
    this.InverseOnSurface_1 = PaletteTokens_getInstance().get_Neutral95_favlz5_k$();
    this.InversePrimary_1 = PaletteTokens_getInstance().get_Primary80_86s05m_k$();
    this.InverseSurface_1 = PaletteTokens_getInstance().get_Neutral20_nj6qg1_k$();
    this.OnBackground_1 = PaletteTokens_getInstance().get_Neutral10_8h96la_k$();
    this.OnError_1 = PaletteTokens_getInstance().get_Error100_wqnwqx_k$();
    this.OnErrorContainer_1 = PaletteTokens_getInstance().get_Error10_kzfr25_k$();
    this.OnPrimary_1 = PaletteTokens_getInstance().get_Primary100_n5b83h_k$();
    this.OnPrimaryContainer_1 = PaletteTokens_getInstance().get_Primary10_j6j9hf_k$();
    this.OnSecondary_1 = PaletteTokens_getInstance().get_Secondary100_jvzdsb_k$();
    this.OnSecondaryContainer_1 = PaletteTokens_getInstance().get_Secondary10_ceuv69_k$();
    this.OnSurface_1 = PaletteTokens_getInstance().get_Neutral10_8h96la_k$();
    this.OnSurfaceVariant_1 = PaletteTokens_getInstance().get_NeutralVariant30_nznr13_k$();
    this.OnTertiary_1 = PaletteTokens_getInstance().get_Tertiary100_3nherf_k$();
    this.OnTertiaryContainer_1 = PaletteTokens_getInstance().get_Tertiary10_cxpn0h_k$();
    this.Outline_1 = PaletteTokens_getInstance().get_NeutralVariant50_uzvyxl_k$();
    this.OutlineVariant_1 = PaletteTokens_getInstance().get_NeutralVariant80_5zo9ss_k$();
    this.Primary_1 = PaletteTokens_getInstance().get_Primary40_5tofne_k$();
    this.PrimaryContainer_1 = PaletteTokens_getInstance().get_Primary90_ntnwvp_k$();
    this.Scrim_1 = PaletteTokens_getInstance().get_Neutral0_9s01ex_k$();
    this.Secondary_1 = PaletteTokens_getInstance().get_Secondary40_clctyk_k$();
    this.SecondaryContainer_1 = PaletteTokens_getInstance().get_Secondary90_ulcb6v_k$();
    this.Surface_1 = PaletteTokens_getInstance().get_Neutral99_u2lklf_k$();
    this.SurfaceTint_1 = this.Primary_1;
    this.SurfaceVariant_1 = PaletteTokens_getInstance().get_NeutralVariant90_q0rn8j_k$();
    this.Tertiary_1 = PaletteTokens_getInstance().get_Tertiary40_c2i24c_k$();
    this.TertiaryContainer_1 = PaletteTokens_getInstance().get_Tertiary90_u2hjcn_k$();
  }
  protoOf(ColorLightTokens).get_Background_39icbo_k$ = function () {
    return this.Background_1;
  };
  protoOf(ColorLightTokens).get_Error_tuubd0_k$ = function () {
    return this.Error_1;
  };
  protoOf(ColorLightTokens).get_ErrorContainer_ctxlg9_k$ = function () {
    return this.ErrorContainer_1;
  };
  protoOf(ColorLightTokens).get_InverseOnSurface_91fp04_k$ = function () {
    return this.InverseOnSurface_1;
  };
  protoOf(ColorLightTokens).get_InversePrimary_t9ulb4_k$ = function () {
    return this.InversePrimary_1;
  };
  protoOf(ColorLightTokens).get_InverseSurface_4jxzfv_k$ = function () {
    return this.InverseSurface_1;
  };
  protoOf(ColorLightTokens).get_OnBackground_xdg0zp_k$ = function () {
    return this.OnBackground_1;
  };
  protoOf(ColorLightTokens).get_OnError_4kvuwr_k$ = function () {
    return this.OnError_1;
  };
  protoOf(ColorLightTokens).get_OnErrorContainer_49unba_k$ = function () {
    return this.OnErrorContainer_1;
  };
  protoOf(ColorLightTokens).get_OnPrimary_thkh6n_k$ = function () {
    return this.OnPrimary_1;
  };
  protoOf(ColorLightTokens).get_OnPrimaryContainer_rinvxw_k$ = function () {
    return this.OnPrimaryContainer_1;
  };
  protoOf(ColorLightTokens).get_OnSecondary_53t6j3_k$ = function () {
    return this.OnSecondary_1;
  };
  protoOf(ColorLightTokens).get_OnSecondaryContainer_yxubxi_k$ = function () {
    return this.OnSecondaryContainer_1;
  };
  protoOf(ColorLightTokens).get_OnSurface_7pr01i_k$ = function () {
    return this.OnSurface_1;
  };
  protoOf(ColorLightTokens).get_OnSurfaceVariant_lc9nhh_k$ = function () {
    return this.OnSurfaceVariant_1;
  };
  protoOf(ColorLightTokens).get_OnTertiary_kcq5wh_k$ = function () {
    return this.OnTertiary_1;
  };
  protoOf(ColorLightTokens).get_OnTertiaryContainer_5qewh8_k$ = function () {
    return this.OnTertiaryContainer_1;
  };
  protoOf(ColorLightTokens).get_Outline_xlbmf6_k$ = function () {
    return this.Outline_1;
  };
  protoOf(ColorLightTokens).get_OutlineVariant_rzqfwv_k$ = function () {
    return this.OutlineVariant_1;
  };
  protoOf(ColorLightTokens).get_Primary_mwsaym_k$ = function () {
    return this.Primary_1;
  };
  protoOf(ColorLightTokens).get_PrimaryContainer_dmivhp_k$ = function () {
    return this.PrimaryContainer_1;
  };
  protoOf(ColorLightTokens).get_Scrim_djxz7m_k$ = function () {
    return this.Scrim_1;
  };
  protoOf(ColorLightTokens).get_Secondary_44uf0w_k$ = function () {
    return this.Secondary_1;
  };
  protoOf(ColorLightTokens).get_SecondaryContainer_bd1gsb_k$ = function () {
    return this.SecondaryContainer_1;
  };
  protoOf(ColorLightTokens).get_Surface_eaj69j_k$ = function () {
    return this.Surface_1;
  };
  protoOf(ColorLightTokens).get_SurfaceTint_i0x62s_k$ = function () {
    return this.SurfaceTint_1;
  };
  protoOf(ColorLightTokens).get_SurfaceVariant_48hepy_k$ = function () {
    return this.SurfaceVariant_1;
  };
  protoOf(ColorLightTokens).get_Tertiary_b5ncw0_k$ = function () {
    return this.Tertiary_1;
  };
  protoOf(ColorLightTokens).get_TertiaryContainer_2n7jcb_k$ = function () {
    return this.TertiaryContainer_1;
  };
  var ColorLightTokens_instance;
  function ColorLightTokens_getInstance() {
    if (ColorLightTokens_instance == null)
      new ColorLightTokens();
    return ColorLightTokens_instance;
  }
  var ColorSchemeKeyTokens_Background_instance;
  var ColorSchemeKeyTokens_Error_instance;
  var ColorSchemeKeyTokens_ErrorContainer_instance;
  var ColorSchemeKeyTokens_InverseOnSurface_instance;
  var ColorSchemeKeyTokens_InversePrimary_instance;
  var ColorSchemeKeyTokens_InverseSurface_instance;
  var ColorSchemeKeyTokens_OnBackground_instance;
  var ColorSchemeKeyTokens_OnError_instance;
  var ColorSchemeKeyTokens_OnErrorContainer_instance;
  var ColorSchemeKeyTokens_OnPrimary_instance;
  var ColorSchemeKeyTokens_OnPrimaryContainer_instance;
  var ColorSchemeKeyTokens_OnSecondary_instance;
  var ColorSchemeKeyTokens_OnSecondaryContainer_instance;
  var ColorSchemeKeyTokens_OnSurface_instance;
  var ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  var ColorSchemeKeyTokens_OnTertiary_instance;
  var ColorSchemeKeyTokens_OnTertiaryContainer_instance;
  var ColorSchemeKeyTokens_Outline_instance;
  var ColorSchemeKeyTokens_OutlineVariant_instance;
  var ColorSchemeKeyTokens_Primary_instance;
  var ColorSchemeKeyTokens_PrimaryContainer_instance;
  var ColorSchemeKeyTokens_Scrim_instance;
  var ColorSchemeKeyTokens_Secondary_instance;
  var ColorSchemeKeyTokens_SecondaryContainer_instance;
  var ColorSchemeKeyTokens_Surface_instance;
  var ColorSchemeKeyTokens_SurfaceTint_instance;
  var ColorSchemeKeyTokens_SurfaceVariant_instance;
  var ColorSchemeKeyTokens_Tertiary_instance;
  var ColorSchemeKeyTokens_TertiaryContainer_instance;
  function values() {
    return [ColorSchemeKeyTokens_Background_getInstance(), ColorSchemeKeyTokens_Error_getInstance(), ColorSchemeKeyTokens_ErrorContainer_getInstance(), ColorSchemeKeyTokens_InverseOnSurface_getInstance(), ColorSchemeKeyTokens_InversePrimary_getInstance(), ColorSchemeKeyTokens_InverseSurface_getInstance(), ColorSchemeKeyTokens_OnBackground_getInstance(), ColorSchemeKeyTokens_OnError_getInstance(), ColorSchemeKeyTokens_OnErrorContainer_getInstance(), ColorSchemeKeyTokens_OnPrimary_getInstance(), ColorSchemeKeyTokens_OnPrimaryContainer_getInstance(), ColorSchemeKeyTokens_OnSecondary_getInstance(), ColorSchemeKeyTokens_OnSecondaryContainer_getInstance(), ColorSchemeKeyTokens_OnSurface_getInstance(), ColorSchemeKeyTokens_OnSurfaceVariant_getInstance(), ColorSchemeKeyTokens_OnTertiary_getInstance(), ColorSchemeKeyTokens_OnTertiaryContainer_getInstance(), ColorSchemeKeyTokens_Outline_getInstance(), ColorSchemeKeyTokens_OutlineVariant_getInstance(), ColorSchemeKeyTokens_Primary_getInstance(), ColorSchemeKeyTokens_PrimaryContainer_getInstance(), ColorSchemeKeyTokens_Scrim_getInstance(), ColorSchemeKeyTokens_Secondary_getInstance(), ColorSchemeKeyTokens_SecondaryContainer_getInstance(), ColorSchemeKeyTokens_Surface_getInstance(), ColorSchemeKeyTokens_SurfaceTint_getInstance(), ColorSchemeKeyTokens_SurfaceVariant_getInstance(), ColorSchemeKeyTokens_Tertiary_getInstance(), ColorSchemeKeyTokens_TertiaryContainer_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Background':
        return ColorSchemeKeyTokens_Background_getInstance();
      case 'Error':
        return ColorSchemeKeyTokens_Error_getInstance();
      case 'ErrorContainer':
        return ColorSchemeKeyTokens_ErrorContainer_getInstance();
      case 'InverseOnSurface':
        return ColorSchemeKeyTokens_InverseOnSurface_getInstance();
      case 'InversePrimary':
        return ColorSchemeKeyTokens_InversePrimary_getInstance();
      case 'InverseSurface':
        return ColorSchemeKeyTokens_InverseSurface_getInstance();
      case 'OnBackground':
        return ColorSchemeKeyTokens_OnBackground_getInstance();
      case 'OnError':
        return ColorSchemeKeyTokens_OnError_getInstance();
      case 'OnErrorContainer':
        return ColorSchemeKeyTokens_OnErrorContainer_getInstance();
      case 'OnPrimary':
        return ColorSchemeKeyTokens_OnPrimary_getInstance();
      case 'OnPrimaryContainer':
        return ColorSchemeKeyTokens_OnPrimaryContainer_getInstance();
      case 'OnSecondary':
        return ColorSchemeKeyTokens_OnSecondary_getInstance();
      case 'OnSecondaryContainer':
        return ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
      case 'OnSurface':
        return ColorSchemeKeyTokens_OnSurface_getInstance();
      case 'OnSurfaceVariant':
        return ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
      case 'OnTertiary':
        return ColorSchemeKeyTokens_OnTertiary_getInstance();
      case 'OnTertiaryContainer':
        return ColorSchemeKeyTokens_OnTertiaryContainer_getInstance();
      case 'Outline':
        return ColorSchemeKeyTokens_Outline_getInstance();
      case 'OutlineVariant':
        return ColorSchemeKeyTokens_OutlineVariant_getInstance();
      case 'Primary':
        return ColorSchemeKeyTokens_Primary_getInstance();
      case 'PrimaryContainer':
        return ColorSchemeKeyTokens_PrimaryContainer_getInstance();
      case 'Scrim':
        return ColorSchemeKeyTokens_Scrim_getInstance();
      case 'Secondary':
        return ColorSchemeKeyTokens_Secondary_getInstance();
      case 'SecondaryContainer':
        return ColorSchemeKeyTokens_SecondaryContainer_getInstance();
      case 'Surface':
        return ColorSchemeKeyTokens_Surface_getInstance();
      case 'SurfaceTint':
        return ColorSchemeKeyTokens_SurfaceTint_getInstance();
      case 'SurfaceVariant':
        return ColorSchemeKeyTokens_SurfaceVariant_getInstance();
      case 'Tertiary':
        return ColorSchemeKeyTokens_Tertiary_getInstance();
      case 'TertiaryContainer':
        return ColorSchemeKeyTokens_TertiaryContainer_getInstance();
      default:
        ColorSchemeKeyTokens_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ColorSchemeKeyTokens_entriesInitialized;
  function ColorSchemeKeyTokens_initEntries() {
    if (ColorSchemeKeyTokens_entriesInitialized)
      return Unit_getInstance();
    ColorSchemeKeyTokens_entriesInitialized = true;
    ColorSchemeKeyTokens_Background_instance = new ColorSchemeKeyTokens('Background', 0);
    ColorSchemeKeyTokens_Error_instance = new ColorSchemeKeyTokens('Error', 1);
    ColorSchemeKeyTokens_ErrorContainer_instance = new ColorSchemeKeyTokens('ErrorContainer', 2);
    ColorSchemeKeyTokens_InverseOnSurface_instance = new ColorSchemeKeyTokens('InverseOnSurface', 3);
    ColorSchemeKeyTokens_InversePrimary_instance = new ColorSchemeKeyTokens('InversePrimary', 4);
    ColorSchemeKeyTokens_InverseSurface_instance = new ColorSchemeKeyTokens('InverseSurface', 5);
    ColorSchemeKeyTokens_OnBackground_instance = new ColorSchemeKeyTokens('OnBackground', 6);
    ColorSchemeKeyTokens_OnError_instance = new ColorSchemeKeyTokens('OnError', 7);
    ColorSchemeKeyTokens_OnErrorContainer_instance = new ColorSchemeKeyTokens('OnErrorContainer', 8);
    ColorSchemeKeyTokens_OnPrimary_instance = new ColorSchemeKeyTokens('OnPrimary', 9);
    ColorSchemeKeyTokens_OnPrimaryContainer_instance = new ColorSchemeKeyTokens('OnPrimaryContainer', 10);
    ColorSchemeKeyTokens_OnSecondary_instance = new ColorSchemeKeyTokens('OnSecondary', 11);
    ColorSchemeKeyTokens_OnSecondaryContainer_instance = new ColorSchemeKeyTokens('OnSecondaryContainer', 12);
    ColorSchemeKeyTokens_OnSurface_instance = new ColorSchemeKeyTokens('OnSurface', 13);
    ColorSchemeKeyTokens_OnSurfaceVariant_instance = new ColorSchemeKeyTokens('OnSurfaceVariant', 14);
    ColorSchemeKeyTokens_OnTertiary_instance = new ColorSchemeKeyTokens('OnTertiary', 15);
    ColorSchemeKeyTokens_OnTertiaryContainer_instance = new ColorSchemeKeyTokens('OnTertiaryContainer', 16);
    ColorSchemeKeyTokens_Outline_instance = new ColorSchemeKeyTokens('Outline', 17);
    ColorSchemeKeyTokens_OutlineVariant_instance = new ColorSchemeKeyTokens('OutlineVariant', 18);
    ColorSchemeKeyTokens_Primary_instance = new ColorSchemeKeyTokens('Primary', 19);
    ColorSchemeKeyTokens_PrimaryContainer_instance = new ColorSchemeKeyTokens('PrimaryContainer', 20);
    ColorSchemeKeyTokens_Scrim_instance = new ColorSchemeKeyTokens('Scrim', 21);
    ColorSchemeKeyTokens_Secondary_instance = new ColorSchemeKeyTokens('Secondary', 22);
    ColorSchemeKeyTokens_SecondaryContainer_instance = new ColorSchemeKeyTokens('SecondaryContainer', 23);
    ColorSchemeKeyTokens_Surface_instance = new ColorSchemeKeyTokens('Surface', 24);
    ColorSchemeKeyTokens_SurfaceTint_instance = new ColorSchemeKeyTokens('SurfaceTint', 25);
    ColorSchemeKeyTokens_SurfaceVariant_instance = new ColorSchemeKeyTokens('SurfaceVariant', 26);
    ColorSchemeKeyTokens_Tertiary_instance = new ColorSchemeKeyTokens('Tertiary', 27);
    ColorSchemeKeyTokens_TertiaryContainer_instance = new ColorSchemeKeyTokens('TertiaryContainer', 28);
  }
  function ColorSchemeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorSchemeKeyTokens_Background_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Background_instance;
  }
  function ColorSchemeKeyTokens_Error_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Error_instance;
  }
  function ColorSchemeKeyTokens_ErrorContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_ErrorContainer_instance;
  }
  function ColorSchemeKeyTokens_InverseOnSurface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_InverseOnSurface_instance;
  }
  function ColorSchemeKeyTokens_InversePrimary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_InversePrimary_instance;
  }
  function ColorSchemeKeyTokens_InverseSurface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_InverseSurface_instance;
  }
  function ColorSchemeKeyTokens_OnBackground_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnBackground_instance;
  }
  function ColorSchemeKeyTokens_OnError_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnError_instance;
  }
  function ColorSchemeKeyTokens_OnErrorContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnErrorContainer_instance;
  }
  function ColorSchemeKeyTokens_OnPrimary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnPrimary_instance;
  }
  function ColorSchemeKeyTokens_OnPrimaryContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnPrimaryContainer_instance;
  }
  function ColorSchemeKeyTokens_OnSecondary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSecondary_instance;
  }
  function ColorSchemeKeyTokens_OnSecondaryContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSecondaryContainer_instance;
  }
  function ColorSchemeKeyTokens_OnSurface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurface_instance;
  }
  function ColorSchemeKeyTokens_OnSurfaceVariant_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  }
  function ColorSchemeKeyTokens_OnTertiary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnTertiary_instance;
  }
  function ColorSchemeKeyTokens_OnTertiaryContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnTertiaryContainer_instance;
  }
  function ColorSchemeKeyTokens_Outline_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Outline_instance;
  }
  function ColorSchemeKeyTokens_OutlineVariant_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OutlineVariant_instance;
  }
  function ColorSchemeKeyTokens_Primary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Primary_instance;
  }
  function ColorSchemeKeyTokens_PrimaryContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_PrimaryContainer_instance;
  }
  function ColorSchemeKeyTokens_Scrim_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Scrim_instance;
  }
  function ColorSchemeKeyTokens_Secondary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Secondary_instance;
  }
  function ColorSchemeKeyTokens_SecondaryContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SecondaryContainer_instance;
  }
  function ColorSchemeKeyTokens_Surface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Surface_instance;
  }
  function ColorSchemeKeyTokens_SurfaceTint_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceTint_instance;
  }
  function ColorSchemeKeyTokens_SurfaceVariant_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceVariant_instance;
  }
  function ColorSchemeKeyTokens_Tertiary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Tertiary_instance;
  }
  function ColorSchemeKeyTokens_TertiaryContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_TertiaryContainer_instance;
  }
  function ElevationTokens() {
    ElevationTokens_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0.0);
    tmp.Level0__1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(1.0);
    tmp_0.Level1__1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(3.0);
    tmp_1.Level2__1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(6.0);
    tmp_2.Level3__1 = tmp$ret$3;
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(8.0);
    tmp_3.Level4__1 = tmp$ret$4;
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$5 = _Dp___init__impl__ms3zkb(12.0);
    tmp_4.Level5__1 = tmp$ret$5;
  }
  protoOf(ElevationTokens).get_Level0_a9lkds_k$ = function () {
    return this.Level0__1;
  };
  protoOf(ElevationTokens).get_Level1_onepox_k$ = function () {
    return this.Level1__1;
  };
  protoOf(ElevationTokens).get_Level2_bgp27i_k$ = function () {
    return this.Level2__1;
  };
  protoOf(ElevationTokens).get_Level3_ngb7v7_k$ = function () {
    return this.Level3__1;
  };
  protoOf(ElevationTokens).get_Level4_cnsk18_k$ = function () {
    return this.Level4__1;
  };
  protoOf(ElevationTokens).get_Level5_m97q1h_k$ = function () {
    return this.Level5__1;
  };
  var ElevationTokens_instance;
  function ElevationTokens_getInstance() {
    if (ElevationTokens_instance == null)
      new ElevationTokens();
    return ElevationTokens_instance;
  }
  function IconButtonTokens() {
    IconButtonTokens_instance = this;
    this.DisabledIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.DisabledIconOpacity_1 = 0.38;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(24.0);
    tmp.IconSize_1 = tmp$ret$0;
    this.SelectedFocusIconColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.SelectedHoverIconColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.SelectedIconColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.SelectedPressedIconColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.StateLayerShape_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(40.0);
    tmp_0.StateLayerSize_1 = tmp$ret$1;
    this.UnselectedFocusIconColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.UnselectedHoverIconColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.UnselectedIconColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.UnselectedPressedIconColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
  }
  protoOf(IconButtonTokens).get_DisabledIconColor_o88rr9_k$ = function () {
    return this.DisabledIconColor_1;
  };
  protoOf(IconButtonTokens).get_DisabledIconOpacity_kaidgt_k$ = function () {
    return this.DisabledIconOpacity_1;
  };
  protoOf(IconButtonTokens).get_IconSize_u57ada_k$ = function () {
    return this.IconSize_1;
  };
  protoOf(IconButtonTokens).get_SelectedFocusIconColor_du0oa2_k$ = function () {
    return this.SelectedFocusIconColor_1;
  };
  protoOf(IconButtonTokens).get_SelectedHoverIconColor_8gv9am_k$ = function () {
    return this.SelectedHoverIconColor_1;
  };
  protoOf(IconButtonTokens).get_SelectedIconColor_f44k3e_k$ = function () {
    return this.SelectedIconColor_1;
  };
  protoOf(IconButtonTokens).get_SelectedPressedIconColor_vqtuks_k$ = function () {
    return this.SelectedPressedIconColor_1;
  };
  protoOf(IconButtonTokens).get_StateLayerShape_6is8qg_k$ = function () {
    return this.StateLayerShape_1;
  };
  protoOf(IconButtonTokens).get_StateLayerSize_rxvhz9_k$ = function () {
    return this.StateLayerSize_1;
  };
  protoOf(IconButtonTokens).get_UnselectedFocusIconColor_3g7zv5_k$ = function () {
    return this.UnselectedFocusIconColor_1;
  };
  protoOf(IconButtonTokens).get_UnselectedHoverIconColor_1wxf4b_k$ = function () {
    return this.UnselectedHoverIconColor_1;
  };
  protoOf(IconButtonTokens).get_UnselectedIconColor_r38u7n_k$ = function () {
    return this.UnselectedIconColor_1;
  };
  protoOf(IconButtonTokens).get_UnselectedPressedIconColor_5bi5qz_k$ = function () {
    return this.UnselectedPressedIconColor_1;
  };
  var IconButtonTokens_instance;
  function IconButtonTokens_getInstance() {
    if (IconButtonTokens_instance == null)
      new IconButtonTokens();
    return IconButtonTokens_instance;
  }
  function LinearProgressIndicatorTokens() {
    LinearProgressIndicatorTokens_instance = this;
    this.ActiveIndicatorColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(4.0);
    tmp.ActiveIndicatorHeight_1 = tmp$ret$0;
    this.ActiveShape_1 = ShapeKeyTokens_CornerNone_getInstance();
    this.FourColorActiveIndicatorFourColor_1 = ColorSchemeKeyTokens_TertiaryContainer_getInstance();
    this.FourColorActiveIndicatorOneColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.FourColorActiveIndicatorThreeColor_1 = ColorSchemeKeyTokens_Tertiary_getInstance();
    this.FourColorActiveIndicatorTwoColor_1 = ColorSchemeKeyTokens_PrimaryContainer_getInstance();
    this.TrackColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(4.0);
    tmp_0.TrackHeight_1 = tmp$ret$1;
    this.TrackShape_1 = ShapeKeyTokens_CornerNone_getInstance();
  }
  protoOf(LinearProgressIndicatorTokens).get_ActiveIndicatorColor_qs91el_k$ = function () {
    return this.ActiveIndicatorColor_1;
  };
  protoOf(LinearProgressIndicatorTokens).get_ActiveIndicatorHeight_7g1deq_k$ = function () {
    return this.ActiveIndicatorHeight_1;
  };
  protoOf(LinearProgressIndicatorTokens).get_ActiveShape_nwghiq_k$ = function () {
    return this.ActiveShape_1;
  };
  protoOf(LinearProgressIndicatorTokens).get_FourColorActiveIndicatorFourColor_57qe8o_k$ = function () {
    return this.FourColorActiveIndicatorFourColor_1;
  };
  protoOf(LinearProgressIndicatorTokens).get_FourColorActiveIndicatorOneColor_ti63im_k$ = function () {
    return this.FourColorActiveIndicatorOneColor_1;
  };
  protoOf(LinearProgressIndicatorTokens).get_FourColorActiveIndicatorThreeColor_ocviuy_k$ = function () {
    return this.FourColorActiveIndicatorThreeColor_1;
  };
  protoOf(LinearProgressIndicatorTokens).get_FourColorActiveIndicatorTwoColor_woh65w_k$ = function () {
    return this.FourColorActiveIndicatorTwoColor_1;
  };
  protoOf(LinearProgressIndicatorTokens).get_TrackColor_vjpugx_k$ = function () {
    return this.TrackColor_1;
  };
  protoOf(LinearProgressIndicatorTokens).get_TrackHeight_xi16v0_k$ = function () {
    return this.TrackHeight_1;
  };
  protoOf(LinearProgressIndicatorTokens).get_TrackShape_vsduwv_k$ = function () {
    return this.TrackShape_1;
  };
  var LinearProgressIndicatorTokens_instance;
  function LinearProgressIndicatorTokens_getInstance() {
    if (LinearProgressIndicatorTokens_instance == null)
      new LinearProgressIndicatorTokens();
    return LinearProgressIndicatorTokens_instance;
  }
  function MotionTokens() {
    MotionTokens_instance = this;
    this.DurationExtraLong1__1 = 700.0;
    this.DurationExtraLong2__1 = 800.0;
    this.DurationExtraLong3__1 = 900.0;
    this.DurationExtraLong4__1 = 1000.0;
    this.DurationLong1__1 = 450.0;
    this.DurationLong2__1 = 500.0;
    this.DurationLong3__1 = 550.0;
    this.DurationLong4__1 = 600.0;
    this.DurationMedium1__1 = 250.0;
    this.DurationMedium2__1 = 300.0;
    this.DurationMedium3__1 = 350.0;
    this.DurationMedium4__1 = 400.0;
    this.DurationShort1__1 = 50.0;
    this.DurationShort2__1 = 100.0;
    this.DurationShort3__1 = 150.0;
    this.DurationShort4__1 = 200.0;
    this.EasingEmphasizedCubicBezier_1 = new CubicBezierEasing(0.2, 0.0, 0.0, 1.0);
    this.EasingEmphasizedAccelerateCubicBezier_1 = new CubicBezierEasing(0.3, 0.0, 0.8, 0.15);
    this.EasingEmphasizedDecelerateCubicBezier_1 = new CubicBezierEasing(0.05, 0.7, 0.1, 1.0);
    this.EasingLegacyCubicBezier_1 = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
    this.EasingLegacyAccelerateCubicBezier_1 = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
    this.EasingLegacyDecelerateCubicBezier_1 = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
    this.EasingLinearCubicBezier_1 = new CubicBezierEasing(0.0, 0.0, 1.0, 1.0);
    this.EasingStandardCubicBezier_1 = new CubicBezierEasing(0.2, 0.0, 0.0, 1.0);
    this.EasingStandardAccelerateCubicBezier_1 = new CubicBezierEasing(0.3, 0.0, 1.0, 1.0);
    this.EasingStandardDecelerateCubicBezier_1 = new CubicBezierEasing(0.0, 0.0, 0.0, 1.0);
  }
  protoOf(MotionTokens).get_DurationExtraLong1_50gfoi_k$ = function () {
    return this.DurationExtraLong1__1;
  };
  protoOf(MotionTokens).get_DurationExtraLong2_50gfoj_k$ = function () {
    return this.DurationExtraLong2__1;
  };
  protoOf(MotionTokens).get_DurationExtraLong3_50gfok_k$ = function () {
    return this.DurationExtraLong3__1;
  };
  protoOf(MotionTokens).get_DurationExtraLong4_50gfol_k$ = function () {
    return this.DurationExtraLong4__1;
  };
  protoOf(MotionTokens).get_DurationLong1_e150hk_k$ = function () {
    return this.DurationLong1__1;
  };
  protoOf(MotionTokens).get_DurationLong2_e150hl_k$ = function () {
    return this.DurationLong2__1;
  };
  protoOf(MotionTokens).get_DurationLong3_e150hm_k$ = function () {
    return this.DurationLong3__1;
  };
  protoOf(MotionTokens).get_DurationLong4_e150hn_k$ = function () {
    return this.DurationLong4__1;
  };
  protoOf(MotionTokens).get_DurationMedium1_1o1ja9_k$ = function () {
    return this.DurationMedium1__1;
  };
  protoOf(MotionTokens).get_DurationMedium2_1o1ja8_k$ = function () {
    return this.DurationMedium2__1;
  };
  protoOf(MotionTokens).get_DurationMedium3_1o1ja7_k$ = function () {
    return this.DurationMedium3__1;
  };
  protoOf(MotionTokens).get_DurationMedium4_1o1ja6_k$ = function () {
    return this.DurationMedium4__1;
  };
  protoOf(MotionTokens).get_DurationShort1_c04snm_k$ = function () {
    return this.DurationShort1__1;
  };
  protoOf(MotionTokens).get_DurationShort2_c04snn_k$ = function () {
    return this.DurationShort2__1;
  };
  protoOf(MotionTokens).get_DurationShort3_c04sno_k$ = function () {
    return this.DurationShort3__1;
  };
  protoOf(MotionTokens).get_DurationShort4_c04snp_k$ = function () {
    return this.DurationShort4__1;
  };
  protoOf(MotionTokens).get_EasingEmphasizedCubicBezier_6bhect_k$ = function () {
    return this.EasingEmphasizedCubicBezier_1;
  };
  protoOf(MotionTokens).get_EasingEmphasizedAccelerateCubicBezier_px5aiy_k$ = function () {
    return this.EasingEmphasizedAccelerateCubicBezier_1;
  };
  protoOf(MotionTokens).get_EasingEmphasizedDecelerateCubicBezier_sygdvt_k$ = function () {
    return this.EasingEmphasizedDecelerateCubicBezier_1;
  };
  protoOf(MotionTokens).get_EasingLegacyCubicBezier_hp8fck_k$ = function () {
    return this.EasingLegacyCubicBezier_1;
  };
  protoOf(MotionTokens).get_EasingLegacyAccelerateCubicBezier_5g60kv_k$ = function () {
    return this.EasingLegacyAccelerateCubicBezier_1;
  };
  protoOf(MotionTokens).get_EasingLegacyDecelerateCubicBezier_2eux80_k$ = function () {
    return this.EasingLegacyDecelerateCubicBezier_1;
  };
  protoOf(MotionTokens).get_EasingLinearCubicBezier_dc4v3k_k$ = function () {
    return this.EasingLinearCubicBezier_1;
  };
  protoOf(MotionTokens).get_EasingStandardCubicBezier_ve50dk_k$ = function () {
    return this.EasingStandardCubicBezier_1;
  };
  protoOf(MotionTokens).get_EasingStandardAccelerateCubicBezier_537i7v_k$ = function () {
    return this.EasingStandardAccelerateCubicBezier_1;
  };
  protoOf(MotionTokens).get_EasingStandardDecelerateCubicBezier_21wev0_k$ = function () {
    return this.EasingStandardDecelerateCubicBezier_1;
  };
  var MotionTokens_instance;
  function MotionTokens_getInstance() {
    if (MotionTokens_instance == null)
      new MotionTokens();
    return MotionTokens_instance;
  }
  function NavigationBarTokens() {
    NavigationBarTokens_instance = this;
    this.ActiveFocusIconColor_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.ActiveFocusLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ActiveHoverIconColor_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.ActiveHoverLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ActiveIconColor_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.ActiveIndicatorColor_1 = ColorSchemeKeyTokens_SecondaryContainer_getInstance();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(32.0);
    tmp.ActiveIndicatorHeight_1 = tmp$ret$0;
    this.ActiveIndicatorShape_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(64.0);
    tmp_0.ActiveIndicatorWidth_1 = tmp$ret$1;
    this.ActiveLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ActivePressedIconColor_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.ActivePressedLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ContainerColor_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.ContainerElevation_1 = ElevationTokens_getInstance().get_Level2_bgp27i_k$();
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(80.0);
    tmp_1.ContainerHeight_1 = tmp$ret$2;
    this.ContainerShape_1 = ShapeKeyTokens_CornerNone_getInstance();
    this.ContainerSurfaceTintLayerColor_1 = ColorSchemeKeyTokens_SurfaceTint_getInstance();
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(24.0);
    tmp_2.IconSize_1 = tmp$ret$3;
    this.InactiveFocusIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveFocusLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveHoverIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveHoverLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveIconColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.InactiveLabelTextColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.InactivePressedIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactivePressedLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.LabelTextFont_1 = TypographyKeyTokens_LabelMedium_getInstance();
  }
  protoOf(NavigationBarTokens).get_ActiveFocusIconColor_lb537l_k$ = function () {
    return this.ActiveFocusIconColor_1;
  };
  protoOf(NavigationBarTokens).get_ActiveFocusLabelTextColor_dktzbp_k$ = function () {
    return this.ActiveFocusLabelTextColor_1;
  };
  protoOf(NavigationBarTokens).get_ActiveHoverIconColor_qoai71_k$ = function () {
    return this.ActiveHoverIconColor_1;
  };
  protoOf(NavigationBarTokens).get_ActiveHoverLabelTextColor_3blpdd_k$ = function () {
    return this.ActiveHoverLabelTextColor_1;
  };
  protoOf(NavigationBarTokens).get_ActiveIconColor_711la3_k$ = function () {
    return this.ActiveIconColor_1;
  };
  protoOf(NavigationBarTokens).get_ActiveIndicatorColor_qs91el_k$ = function () {
    return this.ActiveIndicatorColor_1;
  };
  protoOf(NavigationBarTokens).get_ActiveIndicatorHeight_7g1deq_k$ = function () {
    return this.ActiveIndicatorHeight_1;
  };
  protoOf(NavigationBarTokens).get_ActiveIndicatorShape_qjl0yn_k$ = function () {
    return this.ActiveIndicatorShape_1;
  };
  protoOf(NavigationBarTokens).get_ActiveIndicatorWidth_elh9vl_k$ = function () {
    return this.ActiveIndicatorWidth_1;
  };
  protoOf(NavigationBarTokens).get_ActiveLabelTextColor_r86xqn_k$ = function () {
    return this.ActiveLabelTextColor_1;
  };
  protoOf(NavigationBarTokens).get_ActivePressedIconColor_67xft5_k$ = function () {
    return this.ActivePressedIconColor_1;
  };
  protoOf(NavigationBarTokens).get_ActivePressedLabelTextColor_cyqlqj_k$ = function () {
    return this.ActivePressedLabelTextColor_1;
  };
  protoOf(NavigationBarTokens).get_ContainerColor_uid763_k$ = function () {
    return this.ContainerColor_1;
  };
  protoOf(NavigationBarTokens).get_ContainerElevation_ez1i2o_k$ = function () {
    return this.ContainerElevation_1;
  };
  protoOf(NavigationBarTokens).get_ContainerHeight_59nwai_k$ = function () {
    return this.ContainerHeight_1;
  };
  protoOf(NavigationBarTokens).get_ContainerShape_ur17m1_k$ = function () {
    return this.ContainerShape_1;
  };
  protoOf(NavigationBarTokens).get_ContainerSurfaceTintLayerColor_7z24ta_k$ = function () {
    return this.ContainerSurfaceTintLayerColor_1;
  };
  protoOf(NavigationBarTokens).get_IconSize_u57ada_k$ = function () {
    return this.IconSize_1;
  };
  protoOf(NavigationBarTokens).get_InactiveFocusIconColor_oyetwm_k$ = function () {
    return this.InactiveFocusIconColor_1;
  };
  protoOf(NavigationBarTokens).get_InactiveFocusLabelTextColor_3u9xei_k$ = function () {
    return this.InactiveFocusLabelTextColor_1;
  };
  protoOf(NavigationBarTokens).get_InactiveHoverIconColor_ubk8w2_k$ = function () {
    return this.InactiveHoverIconColor_1;
  };
  protoOf(NavigationBarTokens).get_InactiveHoverLabelTextColor_6eycju_k$ = function () {
    return this.InactiveHoverLabelTextColor_1;
  };
  protoOf(NavigationBarTokens).get_InactiveIconColor_kn5l6e_k$ = function () {
    return this.InactiveIconColor_1;
  };
  protoOf(NavigationBarTokens).get_InactiveLabelTextColor_nkx71m_k$ = function () {
    return this.InactiveLabelTextColor_1;
  };
  protoOf(NavigationBarTokens).get_InactivePressedIconColor_hglhi4_k$ = function () {
    return this.InactivePressedIconColor_1;
  };
  protoOf(NavigationBarTokens).get_InactivePressedLabelTextColor_v4ajdc_k$ = function () {
    return this.InactivePressedLabelTextColor_1;
  };
  protoOf(NavigationBarTokens).get_LabelTextFont_th3yzr_k$ = function () {
    return this.LabelTextFont_1;
  };
  var NavigationBarTokens_instance;
  function NavigationBarTokens_getInstance() {
    if (NavigationBarTokens_instance == null)
      new NavigationBarTokens();
    return NavigationBarTokens_instance;
  }
  function NavigationRailTokens() {
    NavigationRailTokens_instance = this;
    this.ActiveFocusIconColor_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.ActiveFocusLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ActiveHoverIconColor_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.ActiveHoverLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ActiveIconColor_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.ActiveIndicatorColor_1 = ColorSchemeKeyTokens_SecondaryContainer_getInstance();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(32.0);
    tmp.ActiveIndicatorHeight_1 = tmp$ret$0;
    this.ActiveIndicatorShape_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(56.0);
    tmp_0.ActiveIndicatorWidth_1 = tmp$ret$1;
    this.ActiveLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ActivePressedIconColor_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.ActivePressedLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ContainerColor_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.ContainerElevation_1 = ElevationTokens_getInstance().get_Level0_a9lkds_k$();
    this.ContainerShape_1 = ShapeKeyTokens_CornerNone_getInstance();
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(80.0);
    tmp_1.ContainerWidth_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(24.0);
    tmp_2.IconSize_1 = tmp$ret$3;
    this.InactiveFocusIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveFocusLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveHoverIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveHoverLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveIconColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.InactiveLabelTextColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.InactivePressedIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactivePressedLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.LabelTextFont_1 = TypographyKeyTokens_LabelMedium_getInstance();
    this.MenuFocusIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.MenuHoverIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.MenuIconColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(24.0);
    tmp_3.MenuIconSize_1 = tmp$ret$4;
    this.MenuPressedIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$5 = _Dp___init__impl__ms3zkb(56.0);
    tmp_4.NoLabelActiveIndicatorHeight_1 = tmp$ret$5;
    this.NoLabelActiveIndicatorShape_1 = ShapeKeyTokens_CornerFull_getInstance();
  }
  protoOf(NavigationRailTokens).get_ActiveFocusIconColor_lb537l_k$ = function () {
    return this.ActiveFocusIconColor_1;
  };
  protoOf(NavigationRailTokens).get_ActiveFocusLabelTextColor_dktzbp_k$ = function () {
    return this.ActiveFocusLabelTextColor_1;
  };
  protoOf(NavigationRailTokens).get_ActiveHoverIconColor_qoai71_k$ = function () {
    return this.ActiveHoverIconColor_1;
  };
  protoOf(NavigationRailTokens).get_ActiveHoverLabelTextColor_3blpdd_k$ = function () {
    return this.ActiveHoverLabelTextColor_1;
  };
  protoOf(NavigationRailTokens).get_ActiveIconColor_711la3_k$ = function () {
    return this.ActiveIconColor_1;
  };
  protoOf(NavigationRailTokens).get_ActiveIndicatorColor_qs91el_k$ = function () {
    return this.ActiveIndicatorColor_1;
  };
  protoOf(NavigationRailTokens).get_ActiveIndicatorHeight_7g1deq_k$ = function () {
    return this.ActiveIndicatorHeight_1;
  };
  protoOf(NavigationRailTokens).get_ActiveIndicatorShape_qjl0yn_k$ = function () {
    return this.ActiveIndicatorShape_1;
  };
  protoOf(NavigationRailTokens).get_ActiveIndicatorWidth_elh9vl_k$ = function () {
    return this.ActiveIndicatorWidth_1;
  };
  protoOf(NavigationRailTokens).get_ActiveLabelTextColor_r86xqn_k$ = function () {
    return this.ActiveLabelTextColor_1;
  };
  protoOf(NavigationRailTokens).get_ActivePressedIconColor_67xft5_k$ = function () {
    return this.ActivePressedIconColor_1;
  };
  protoOf(NavigationRailTokens).get_ActivePressedLabelTextColor_cyqlqj_k$ = function () {
    return this.ActivePressedLabelTextColor_1;
  };
  protoOf(NavigationRailTokens).get_ContainerColor_uid763_k$ = function () {
    return this.ContainerColor_1;
  };
  protoOf(NavigationRailTokens).get_ContainerElevation_ez1i2o_k$ = function () {
    return this.ContainerElevation_1;
  };
  protoOf(NavigationRailTokens).get_ContainerShape_ur17m1_k$ = function () {
    return this.ContainerShape_1;
  };
  protoOf(NavigationRailTokens).get_ContainerWidth_7nhlwp_k$ = function () {
    return this.ContainerWidth_1;
  };
  protoOf(NavigationRailTokens).get_IconSize_u57ada_k$ = function () {
    return this.IconSize_1;
  };
  protoOf(NavigationRailTokens).get_InactiveFocusIconColor_oyetwm_k$ = function () {
    return this.InactiveFocusIconColor_1;
  };
  protoOf(NavigationRailTokens).get_InactiveFocusLabelTextColor_3u9xei_k$ = function () {
    return this.InactiveFocusLabelTextColor_1;
  };
  protoOf(NavigationRailTokens).get_InactiveHoverIconColor_ubk8w2_k$ = function () {
    return this.InactiveHoverIconColor_1;
  };
  protoOf(NavigationRailTokens).get_InactiveHoverLabelTextColor_6eycju_k$ = function () {
    return this.InactiveHoverLabelTextColor_1;
  };
  protoOf(NavigationRailTokens).get_InactiveIconColor_kn5l6e_k$ = function () {
    return this.InactiveIconColor_1;
  };
  protoOf(NavigationRailTokens).get_InactiveLabelTextColor_nkx71m_k$ = function () {
    return this.InactiveLabelTextColor_1;
  };
  protoOf(NavigationRailTokens).get_InactivePressedIconColor_hglhi4_k$ = function () {
    return this.InactivePressedIconColor_1;
  };
  protoOf(NavigationRailTokens).get_InactivePressedLabelTextColor_v4ajdc_k$ = function () {
    return this.InactivePressedLabelTextColor_1;
  };
  protoOf(NavigationRailTokens).get_LabelTextFont_th3yzr_k$ = function () {
    return this.LabelTextFont_1;
  };
  protoOf(NavigationRailTokens).get_MenuFocusIconColor_rtf42i_k$ = function () {
    return this.MenuFocusIconColor_1;
  };
  protoOf(NavigationRailTokens).get_MenuHoverIconColor_x6kj1y_k$ = function () {
    return this.MenuHoverIconColor_1;
  };
  protoOf(NavigationRailTokens).get_MenuIconColor_y4wigu_k$ = function () {
    return this.MenuIconColor_1;
  };
  protoOf(NavigationRailTokens).get_MenuIconSize_v6zt8j_k$ = function () {
    return this.MenuIconSize_1;
  };
  protoOf(NavigationRailTokens).get_MenuPressedIconColor_309cc0_k$ = function () {
    return this.MenuPressedIconColor_1;
  };
  protoOf(NavigationRailTokens).get_NoLabelActiveIndicatorHeight_nwitpd_k$ = function () {
    return this.NoLabelActiveIndicatorHeight_1;
  };
  protoOf(NavigationRailTokens).get_NoLabelActiveIndicatorShape_8gybpa_k$ = function () {
    return this.NoLabelActiveIndicatorShape_1;
  };
  var NavigationRailTokens_instance;
  function NavigationRailTokens_getInstance() {
    if (NavigationRailTokens_instance == null)
      new NavigationRailTokens();
    return NavigationRailTokens_instance;
  }
  function PaletteTokens() {
    PaletteTokens_instance = this;
    this.Black_1 = Color_0(0, 0, 0);
    this.Error0__1 = Color_0(0, 0, 0);
    this.Error10__1 = Color_0(65, 14, 11);
    this.Error100__1 = Color_0(255, 255, 255);
    this.Error20__1 = Color_0(96, 20, 16);
    this.Error30__1 = Color_0(140, 29, 24);
    this.Error40__1 = Color_0(179, 38, 30);
    this.Error50__1 = Color_0(220, 54, 46);
    this.Error60__1 = Color_0(228, 105, 98);
    this.Error70__1 = Color_0(236, 146, 142);
    this.Error80__1 = Color_0(242, 184, 181);
    this.Error90__1 = Color_0(249, 222, 220);
    this.Error95__1 = Color_0(252, 238, 238);
    this.Error99__1 = Color_0(255, 251, 249);
    this.Neutral0__1 = Color_0(0, 0, 0);
    this.Neutral10__1 = Color_0(28, 27, 31);
    this.Neutral100__1 = Color_0(255, 255, 255);
    this.Neutral20__1 = Color_0(49, 48, 51);
    this.Neutral30__1 = Color_0(72, 70, 73);
    this.Neutral40__1 = Color_0(96, 93, 98);
    this.Neutral50__1 = Color_0(120, 117, 121);
    this.Neutral60__1 = Color_0(147, 144, 148);
    this.Neutral70__1 = Color_0(174, 170, 174);
    this.Neutral80__1 = Color_0(201, 197, 202);
    this.Neutral90__1 = Color_0(230, 225, 229);
    this.Neutral95__1 = Color_0(244, 239, 244);
    this.Neutral99__1 = Color_0(255, 251, 254);
    this.NeutralVariant0__1 = Color_0(0, 0, 0);
    this.NeutralVariant10__1 = Color_0(29, 26, 34);
    this.NeutralVariant100__1 = Color_0(255, 255, 255);
    this.NeutralVariant20__1 = Color_0(50, 47, 55);
    this.NeutralVariant30__1 = Color_0(73, 69, 79);
    this.NeutralVariant40__1 = Color_0(96, 93, 102);
    this.NeutralVariant50__1 = Color_0(121, 116, 126);
    this.NeutralVariant60__1 = Color_0(147, 143, 153);
    this.NeutralVariant70__1 = Color_0(174, 169, 180);
    this.NeutralVariant80__1 = Color_0(202, 196, 208);
    this.NeutralVariant90__1 = Color_0(231, 224, 236);
    this.NeutralVariant95__1 = Color_0(245, 238, 250);
    this.NeutralVariant99__1 = Color_0(255, 251, 254);
    this.Primary0__1 = Color_0(0, 0, 0);
    this.Primary10__1 = Color_0(33, 0, 93);
    this.Primary100__1 = Color_0(255, 255, 255);
    this.Primary20__1 = Color_0(56, 30, 114);
    this.Primary30__1 = Color_0(79, 55, 139);
    this.Primary40__1 = Color_0(103, 80, 164);
    this.Primary50__1 = Color_0(127, 103, 190);
    this.Primary60__1 = Color_0(154, 130, 219);
    this.Primary70__1 = Color_0(182, 157, 248);
    this.Primary80__1 = Color_0(208, 188, 255);
    this.Primary90__1 = Color_0(234, 221, 255);
    this.Primary95__1 = Color_0(246, 237, 255);
    this.Primary99__1 = Color_0(255, 251, 254);
    this.Secondary0__1 = Color_0(0, 0, 0);
    this.Secondary10__1 = Color_0(29, 25, 43);
    this.Secondary100__1 = Color_0(255, 255, 255);
    this.Secondary20__1 = Color_0(51, 45, 65);
    this.Secondary30__1 = Color_0(74, 68, 88);
    this.Secondary40__1 = Color_0(98, 91, 113);
    this.Secondary50__1 = Color_0(122, 114, 137);
    this.Secondary60__1 = Color_0(149, 141, 165);
    this.Secondary70__1 = Color_0(176, 167, 192);
    this.Secondary80__1 = Color_0(204, 194, 220);
    this.Secondary90__1 = Color_0(232, 222, 248);
    this.Secondary95__1 = Color_0(246, 237, 255);
    this.Secondary99__1 = Color_0(255, 251, 254);
    this.Tertiary0__1 = Color_0(0, 0, 0);
    this.Tertiary10__1 = Color_0(49, 17, 29);
    this.Tertiary100__1 = Color_0(255, 255, 255);
    this.Tertiary20__1 = Color_0(73, 37, 50);
    this.Tertiary30__1 = Color_0(99, 59, 72);
    this.Tertiary40__1 = Color_0(125, 82, 96);
    this.Tertiary50__1 = Color_0(152, 105, 119);
    this.Tertiary60__1 = Color_0(181, 131, 146);
    this.Tertiary70__1 = Color_0(210, 157, 172);
    this.Tertiary80__1 = Color_0(239, 184, 200);
    this.Tertiary90__1 = Color_0(255, 216, 228);
    this.Tertiary95__1 = Color_0(255, 236, 241);
    this.Tertiary99__1 = Color_0(255, 251, 250);
    this.White_1 = Color_0(255, 255, 255);
  }
  protoOf(PaletteTokens).get_Black_wh3yn9_k$ = function () {
    return this.Black_1;
  };
  protoOf(PaletteTokens).get_Error0_jch162_k$ = function () {
    return this.Error0__1;
  };
  protoOf(PaletteTokens).get_Error10_kzfr25_k$ = function () {
    return this.Error10__1;
  };
  protoOf(PaletteTokens).get_Error100_wqnwqx_k$ = function () {
    return this.Error100__1;
  };
  protoOf(PaletteTokens).get_Error20_b105z6_k$ = function () {
    return this.Error20__1;
  };
  protoOf(PaletteTokens).get_Error30_rznyyn_k$ = function () {
    return this.Error30__1;
  };
  protoOf(PaletteTokens).get_Error40_40ry2o_k$ = function () {
    return this.Error40__1;
  };
  protoOf(PaletteTokens).get_Error50_yzw6v5_k$ = function () {
    return this.Error50__1;
  };
  protoOf(PaletteTokens).get_Error60_2zg9tu_k$ = function () {
    return this.Error60__1;
  };
  protoOf(PaletteTokens).get_Error70_t0zn7h_k$ = function () {
    return this.Error70__1;
  };
  protoOf(PaletteTokens).get_Error80_9zohqc_k$ = function () {
    return this.Error80__1;
  };
  protoOf(PaletteTokens).get_Error90_m0rfaz_k$ = function () {
    return this.Error90__1;
  };
  protoOf(PaletteTokens).get_Error95_rt26g0_k$ = function () {
    return this.Error95__1;
  };
  protoOf(PaletteTokens).get_Error99_hkf04k_k$ = function () {
    return this.Error99__1;
  };
  protoOf(PaletteTokens).get_Neutral0_9s01ex_k$ = function () {
    return this.Neutral0__1;
  };
  protoOf(PaletteTokens).get_Neutral10_8h96la_k$ = function () {
    return this.Neutral10__1;
  };
  protoOf(PaletteTokens).get_Neutral100_8kk3s_k$ = function () {
    return this.Neutral100__1;
  };
  protoOf(PaletteTokens).get_Neutral20_nj6qg1_k$ = function () {
    return this.Neutral20__1;
  };
  protoOf(PaletteTokens).get_Neutral30_fhhehs_k$ = function () {
    return this.Neutral30__1;
  };
  protoOf(PaletteTokens).get_Neutral40_giyijj_k$ = function () {
    return this.Neutral40__1;
  };
  protoOf(PaletteTokens).get_Neutral50_mhpmea_k$ = function () {
    return this.Neutral50__1;
  };
  protoOf(PaletteTokens).get_Neutral60_9iqan1_k$ = function () {
    return this.Neutral60__1;
  };
  protoOf(PaletteTokens).get_Neutral70_thxuas_k$ = function () {
    return this.Neutral70__1;
  };
  protoOf(PaletteTokens).get_Neutral80_2ii2qj_k$ = function () {
    return this.Neutral80__1;
  };
  protoOf(PaletteTokens).get_Neutral90_yixzru_k$ = function () {
    return this.Neutral90__1;
  };
  protoOf(PaletteTokens).get_Neutral95_favlz5_k$ = function () {
    return this.Neutral95__1;
  };
  protoOf(PaletteTokens).get_Neutral99_u2lklf_k$ = function () {
    return this.Neutral99__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant0_1ek5gu_k$ = function () {
    return this.NeutralVariant0__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant10_gzfj4l_k$ = function () {
    return this.NeutralVariant10__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant100_k8ev67_k$ = function () {
    return this.NeutralVariant100__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant20_f10dwq_k$ = function () {
    return this.NeutralVariant20__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant30_nznr13_k$ = function () {
    return this.NeutralVariant30__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant40_80s608_k$ = function () {
    return this.NeutralVariant40__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant50_uzvyxl_k$ = function () {
    return this.NeutralVariant50__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant60_10jy3q_k$ = function () {
    return this.NeutralVariant60__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant70_x0zv51_k$ = function () {
    return this.NeutralVariant70__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant80_5zo9ss_k$ = function () {
    return this.NeutralVariant80__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant90_q0rn8j_k$ = function () {
    return this.NeutralVariant90__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant95_nt1yig_k$ = function () {
    return this.NeutralVariant95__1;
  };
  protoOf(PaletteTokens).get_NeutralVariant99_lkf824_k$ = function () {
    return this.NeutralVariant99__1;
  };
  protoOf(PaletteTokens).get_Primary0_lkv7ms_k$ = function () {
    return this.Primary0__1;
  };
  protoOf(PaletteTokens).get_Primary10_j6j9hf_k$ = function () {
    return this.Primary10__1;
  };
  protoOf(PaletteTokens).get_Primary100_n5b83h_k$ = function () {
    return this.Primary100__1;
  };
  protoOf(PaletteTokens).get_Primary20_ctwnjw_k$ = function () {
    return this.Primary20__1;
  };
  protoOf(PaletteTokens).get_Primary30_q6rhdx_k$ = function () {
    return this.Primary30__1;
  };
  protoOf(PaletteTokens).get_Primary40_5tofne_k$ = function () {
    return this.Primary40__1;
  };
  protoOf(PaletteTokens).get_Primary50_x6zpaf_k$ = function () {
    return this.Primary50__1;
  };
  protoOf(PaletteTokens).get_Primary60_16js94_k$ = function () {
    return this.Primary60__1;
  };
  protoOf(PaletteTokens).get_Primary70_utw4s7_k$ = function () {
    return this.Primary70__1;
  };
  protoOf(PaletteTokens).get_Primary80_86s05m_k$ = function () {
    return this.Primary80__1;
  };
  protoOf(PaletteTokens).get_Primary90_ntnwvp_k$ = function () {
    return this.Primary90__1;
  };
  protoOf(PaletteTokens).get_Primary95_q05ova_k$ = function () {
    return this.Primary95__1;
  };
  protoOf(PaletteTokens).get_Primary99_jdbhpa_k$ = function () {
    return this.Primary99__1;
  };
  protoOf(PaletteTokens).get_Secondary0_7m2xhy_k$ = function () {
    return this.Secondary0__1;
  };
  protoOf(PaletteTokens).get_Secondary10_ceuv69_k$ = function () {
    return this.Secondary10__1;
  };
  protoOf(PaletteTokens).get_Secondary100_jvzdsb_k$ = function () {
    return this.Secondary100__1;
  };
  protoOf(PaletteTokens).get_Secondary20_jll1v2_k$ = function () {
    return this.Secondary20__1;
  };
  protoOf(PaletteTokens).get_Secondary30_jf332r_k$ = function () {
    return this.Secondary30__1;
  };
  protoOf(PaletteTokens).get_Secondary40_clctyk_k$ = function () {
    return this.Secondary40__1;
  };
  protoOf(PaletteTokens).get_Secondary50_qfbaz9_k$ = function () {
    return this.Secondary50__1;
  };
  protoOf(PaletteTokens).get_Secondary60_5l4m22_k$ = function () {
    return this.Secondary60__1;
  };
  protoOf(PaletteTokens).get_Secondary70_xfjivr_k$ = function () {
    return this.Secondary70__1;
  };
  protoOf(PaletteTokens).get_Secondary80_1f3lug_k$ = function () {
    return this.Secondary80__1;
  };
  protoOf(PaletteTokens).get_Secondary90_ulcb6v_k$ = function () {
    return this.Secondary90__1;
  };
  protoOf(PaletteTokens).get_Secondary95_j8hak4_k$ = function () {
    return this.Secondary95__1;
  };
  protoOf(PaletteTokens).get_Secondary99_q4zw0g_k$ = function () {
    return this.Secondary99__1;
  };
  protoOf(PaletteTokens).get_Tertiary0_c7nxd2_k$ = function () {
    return this.Tertiary0__1;
  };
  protoOf(PaletteTokens).get_Tertiary10_cxpn0h_k$ = function () {
    return this.Tertiary10__1;
  };
  protoOf(PaletteTokens).get_Tertiary100_3nherf_k$ = function () {
    return this.Tertiary100__1;
  };
  protoOf(PaletteTokens).get_Tertiary20_j2qa0u_k$ = function () {
    return this.Tertiary20__1;
  };
  protoOf(PaletteTokens).get_Tertiary30_jxxuwz_k$ = function () {
    return this.Tertiary30__1;
  };
  protoOf(PaletteTokens).get_Tertiary40_c2i24c_k$ = function () {
    return this.Tertiary40__1;
  };
  protoOf(PaletteTokens).get_Tertiary50_qy62th_k$ = function () {
    return this.Tertiary50__1;
  };
  protoOf(PaletteTokens).get_Tertiary60_529u7u_k$ = function () {
    return this.Tertiary60__1;
  };
  protoOf(PaletteTokens).get_Tertiary70_xyeapz_k$ = function () {
    return this.Tertiary70__1;
  };
  protoOf(PaletteTokens).get_Tertiary80_1xydoo_k$ = function () {
    return this.Tertiary80__1;
  };
  protoOf(PaletteTokens).get_Tertiary90_u2hjcn_k$ = function () {
    return this.Tertiary90__1;
  };
  protoOf(PaletteTokens).get_Tertiary95_jrc2ec_k$ = function () {
    return this.Tertiary95__1;
  };
  protoOf(PaletteTokens).get_Tertiary99_pm5468_k$ = function () {
    return this.Tertiary99__1;
  };
  protoOf(PaletteTokens).get_White_rvz4cb_k$ = function () {
    return this.White_1;
  };
  var PaletteTokens_instance;
  function PaletteTokens_getInstance() {
    if (PaletteTokens_instance == null)
      new PaletteTokens();
    return PaletteTokens_instance;
  }
  function PrimaryNavigationTabTokens() {
    PrimaryNavigationTabTokens_instance = this;
    this.ActiveIndicatorColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(3.0);
    tmp.ActiveIndicatorHeight_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(3.0);
    tmp_0.ActiveIndicatorShape_1 = RoundedCornerShape(tmp$ret$1);
    this.ContainerColor_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.ContainerElevation_1 = ElevationTokens_getInstance().get_Level0_a9lkds_k$();
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(48.0);
    tmp_1.ContainerHeight_1 = tmp$ret$2;
    this.ContainerShape_1 = ShapeKeyTokens_CornerNone_getInstance();
    this.DividerColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(1.0);
    tmp_2.DividerHeight_1 = tmp$ret$3;
    this.ActiveFocusIconColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ActiveHoverIconColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ActiveIconColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ActivePressedIconColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(64.0);
    tmp_3.IconAndLabelTextContainerHeight_1 = tmp$ret$4;
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$5 = _Dp___init__impl__ms3zkb(24.0);
    tmp_4.IconSize_1 = tmp$ret$5;
    this.InactiveFocusIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveHoverIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveIconColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.InactivePressedIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ActiveFocusLabelTextColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ActiveHoverLabelTextColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ActiveLabelTextColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ActivePressedLabelTextColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.InactiveFocusLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveHoverLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.InactiveLabelTextColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.InactivePressedLabelTextColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.LabelTextFont_1 = TypographyKeyTokens_TitleSmall_getInstance();
  }
  protoOf(PrimaryNavigationTabTokens).get_ActiveIndicatorColor_qs91el_k$ = function () {
    return this.ActiveIndicatorColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ActiveIndicatorHeight_7g1deq_k$ = function () {
    return this.ActiveIndicatorHeight_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ActiveIndicatorShape_qjl0yn_k$ = function () {
    return this.ActiveIndicatorShape_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ContainerColor_uid763_k$ = function () {
    return this.ContainerColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ContainerElevation_ez1i2o_k$ = function () {
    return this.ContainerElevation_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ContainerHeight_59nwai_k$ = function () {
    return this.ContainerHeight_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ContainerShape_ur17m1_k$ = function () {
    return this.ContainerShape_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_DividerColor_d6g0r1_k$ = function () {
    return this.DividerColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_DividerHeight_s462ky_k$ = function () {
    return this.DividerHeight_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ActiveFocusIconColor_lb537l_k$ = function () {
    return this.ActiveFocusIconColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ActiveHoverIconColor_qoai71_k$ = function () {
    return this.ActiveHoverIconColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ActiveIconColor_711la3_k$ = function () {
    return this.ActiveIconColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ActivePressedIconColor_67xft5_k$ = function () {
    return this.ActivePressedIconColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_IconAndLabelTextContainerHeight_4z3pl_k$ = function () {
    return this.IconAndLabelTextContainerHeight_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_IconSize_u57ada_k$ = function () {
    return this.IconSize_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_InactiveFocusIconColor_oyetwm_k$ = function () {
    return this.InactiveFocusIconColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_InactiveHoverIconColor_ubk8w2_k$ = function () {
    return this.InactiveHoverIconColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_InactiveIconColor_kn5l6e_k$ = function () {
    return this.InactiveIconColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_InactivePressedIconColor_hglhi4_k$ = function () {
    return this.InactivePressedIconColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ActiveFocusLabelTextColor_dktzbp_k$ = function () {
    return this.ActiveFocusLabelTextColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ActiveHoverLabelTextColor_3blpdd_k$ = function () {
    return this.ActiveHoverLabelTextColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ActiveLabelTextColor_r86xqn_k$ = function () {
    return this.ActiveLabelTextColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_ActivePressedLabelTextColor_cyqlqj_k$ = function () {
    return this.ActivePressedLabelTextColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_InactiveFocusLabelTextColor_3u9xei_k$ = function () {
    return this.InactiveFocusLabelTextColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_InactiveHoverLabelTextColor_6eycju_k$ = function () {
    return this.InactiveHoverLabelTextColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_InactiveLabelTextColor_nkx71m_k$ = function () {
    return this.InactiveLabelTextColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_InactivePressedLabelTextColor_v4ajdc_k$ = function () {
    return this.InactivePressedLabelTextColor_1;
  };
  protoOf(PrimaryNavigationTabTokens).get_LabelTextFont_th3yzr_k$ = function () {
    return this.LabelTextFont_1;
  };
  var PrimaryNavigationTabTokens_instance;
  function PrimaryNavigationTabTokens_getInstance() {
    if (PrimaryNavigationTabTokens_instance == null)
      new PrimaryNavigationTabTokens();
    return PrimaryNavigationTabTokens_instance;
  }
  var ShapeKeyTokens_CornerExtraLarge_instance;
  var ShapeKeyTokens_CornerExtraLargeTop_instance;
  var ShapeKeyTokens_CornerExtraSmall_instance;
  var ShapeKeyTokens_CornerExtraSmallTop_instance;
  var ShapeKeyTokens_CornerFull_instance;
  var ShapeKeyTokens_CornerLarge_instance;
  var ShapeKeyTokens_CornerLargeEnd_instance;
  var ShapeKeyTokens_CornerLargeTop_instance;
  var ShapeKeyTokens_CornerMedium_instance;
  var ShapeKeyTokens_CornerNone_instance;
  var ShapeKeyTokens_CornerSmall_instance;
  function values_0() {
    return [ShapeKeyTokens_CornerExtraLarge_getInstance(), ShapeKeyTokens_CornerExtraLargeTop_getInstance(), ShapeKeyTokens_CornerExtraSmall_getInstance(), ShapeKeyTokens_CornerExtraSmallTop_getInstance(), ShapeKeyTokens_CornerFull_getInstance(), ShapeKeyTokens_CornerLarge_getInstance(), ShapeKeyTokens_CornerLargeEnd_getInstance(), ShapeKeyTokens_CornerLargeTop_getInstance(), ShapeKeyTokens_CornerMedium_getInstance(), ShapeKeyTokens_CornerNone_getInstance(), ShapeKeyTokens_CornerSmall_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'CornerExtraLarge':
        return ShapeKeyTokens_CornerExtraLarge_getInstance();
      case 'CornerExtraLargeTop':
        return ShapeKeyTokens_CornerExtraLargeTop_getInstance();
      case 'CornerExtraSmall':
        return ShapeKeyTokens_CornerExtraSmall_getInstance();
      case 'CornerExtraSmallTop':
        return ShapeKeyTokens_CornerExtraSmallTop_getInstance();
      case 'CornerFull':
        return ShapeKeyTokens_CornerFull_getInstance();
      case 'CornerLarge':
        return ShapeKeyTokens_CornerLarge_getInstance();
      case 'CornerLargeEnd':
        return ShapeKeyTokens_CornerLargeEnd_getInstance();
      case 'CornerLargeTop':
        return ShapeKeyTokens_CornerLargeTop_getInstance();
      case 'CornerMedium':
        return ShapeKeyTokens_CornerMedium_getInstance();
      case 'CornerNone':
        return ShapeKeyTokens_CornerNone_getInstance();
      case 'CornerSmall':
        return ShapeKeyTokens_CornerSmall_getInstance();
      default:
        ShapeKeyTokens_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ShapeKeyTokens_entriesInitialized;
  function ShapeKeyTokens_initEntries() {
    if (ShapeKeyTokens_entriesInitialized)
      return Unit_getInstance();
    ShapeKeyTokens_entriesInitialized = true;
    ShapeKeyTokens_CornerExtraLarge_instance = new ShapeKeyTokens('CornerExtraLarge', 0);
    ShapeKeyTokens_CornerExtraLargeTop_instance = new ShapeKeyTokens('CornerExtraLargeTop', 1);
    ShapeKeyTokens_CornerExtraSmall_instance = new ShapeKeyTokens('CornerExtraSmall', 2);
    ShapeKeyTokens_CornerExtraSmallTop_instance = new ShapeKeyTokens('CornerExtraSmallTop', 3);
    ShapeKeyTokens_CornerFull_instance = new ShapeKeyTokens('CornerFull', 4);
    ShapeKeyTokens_CornerLarge_instance = new ShapeKeyTokens('CornerLarge', 5);
    ShapeKeyTokens_CornerLargeEnd_instance = new ShapeKeyTokens('CornerLargeEnd', 6);
    ShapeKeyTokens_CornerLargeTop_instance = new ShapeKeyTokens('CornerLargeTop', 7);
    ShapeKeyTokens_CornerMedium_instance = new ShapeKeyTokens('CornerMedium', 8);
    ShapeKeyTokens_CornerNone_instance = new ShapeKeyTokens('CornerNone', 9);
    ShapeKeyTokens_CornerSmall_instance = new ShapeKeyTokens('CornerSmall', 10);
  }
  function ShapeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ShapeKeyTokens_CornerExtraLarge_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerExtraLarge_instance;
  }
  function ShapeKeyTokens_CornerExtraLargeTop_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerExtraLargeTop_instance;
  }
  function ShapeKeyTokens_CornerExtraSmall_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerExtraSmall_instance;
  }
  function ShapeKeyTokens_CornerExtraSmallTop_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerExtraSmallTop_instance;
  }
  function ShapeKeyTokens_CornerFull_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerFull_instance;
  }
  function ShapeKeyTokens_CornerLarge_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerLarge_instance;
  }
  function ShapeKeyTokens_CornerLargeEnd_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerLargeEnd_instance;
  }
  function ShapeKeyTokens_CornerLargeTop_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerLargeTop_instance;
  }
  function ShapeKeyTokens_CornerMedium_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerMedium_instance;
  }
  function ShapeKeyTokens_CornerNone_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerNone_instance;
  }
  function ShapeKeyTokens_CornerSmall_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerSmall_instance;
  }
  function ShapeTokens() {
    ShapeTokens_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(28.0);
    tmp.CornerExtraLarge_1 = RoundedCornerShape(tmp$ret$0);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(28.0);
    var tmp_1 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(28.0);
    var tmp_2 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_3 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(0.0);
    tmp_0.CornerExtraLargeTop_1 = RoundedCornerShape_0(tmp_1, tmp_2, tmp_3, tmp$ret$4);
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$5 = _Dp___init__impl__ms3zkb(4.0);
    tmp_4.CornerExtraSmall_1 = RoundedCornerShape(tmp$ret$5);
    var tmp_5 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$6 = _Dp___init__impl__ms3zkb(4.0);
    var tmp_6 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$7 = _Dp___init__impl__ms3zkb(4.0);
    var tmp_7 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$8 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_8 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$9 = _Dp___init__impl__ms3zkb(0.0);
    tmp_5.CornerExtraSmallTop_1 = RoundedCornerShape_0(tmp_6, tmp_7, tmp_8, tmp$ret$9);
    this.CornerFull_1 = get_CircleShape();
    var tmp_9 = this;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$10 = _Dp___init__impl__ms3zkb(16.0);
    tmp_9.CornerLarge_1 = RoundedCornerShape(tmp$ret$10);
    var tmp_10 = this;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$11 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_11 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$12 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_12 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$13 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_13 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$14 = _Dp___init__impl__ms3zkb(0.0);
    tmp_10.CornerLargeEnd_1 = RoundedCornerShape_0(tmp_11, tmp_12, tmp_13, tmp$ret$14);
    var tmp_14 = this;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$15 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_15 = tmp$ret$15;
    var tmp$ret$16;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$16 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_16 = tmp$ret$16;
    var tmp$ret$17;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$17 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_17 = tmp$ret$17;
    var tmp$ret$18;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$18 = _Dp___init__impl__ms3zkb(0.0);
    tmp_14.CornerLargeTop_1 = RoundedCornerShape_0(tmp_15, tmp_16, tmp_17, tmp$ret$18);
    var tmp_18 = this;
    var tmp$ret$19;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$19 = _Dp___init__impl__ms3zkb(12.0);
    tmp_18.CornerMedium_1 = RoundedCornerShape(tmp$ret$19);
    this.CornerNone_1 = get_RectangleShape();
    var tmp_19 = this;
    var tmp$ret$20;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$20 = _Dp___init__impl__ms3zkb(8.0);
    tmp_19.CornerSmall_1 = RoundedCornerShape(tmp$ret$20);
  }
  protoOf(ShapeTokens).get_CornerExtraLarge_qxw7jd_k$ = function () {
    return this.CornerExtraLarge_1;
  };
  protoOf(ShapeTokens).get_CornerExtraLargeTop_yfkh3o_k$ = function () {
    return this.CornerExtraLargeTop_1;
  };
  protoOf(ShapeTokens).get_CornerExtraSmall_r1y31x_k$ = function () {
    return this.CornerExtraSmall_1;
  };
  protoOf(ShapeTokens).get_CornerExtraSmallTop_jnw5pc_k$ = function () {
    return this.CornerExtraSmallTop_1;
  };
  protoOf(ShapeTokens).get_CornerFull_qlhj9v_k$ = function () {
    return this.CornerFull_1;
  };
  protoOf(ShapeTokens).get_CornerLarge_ry76fx_k$ = function () {
    return this.CornerLarge_1;
  };
  protoOf(ShapeTokens).get_CornerLargeEnd_xoicse_k$ = function () {
    return this.CornerLargeEnd_1;
  };
  protoOf(ShapeTokens).get_CornerLargeTop_xoiny0_k$ = function () {
    return this.CornerLargeTop_1;
  };
  protoOf(ShapeTokens).get_CornerMedium_eltswj_k$ = function () {
    return this.CornerMedium_1;
  };
  protoOf(ShapeTokens).get_CornerNone_qlcjsa_k$ = function () {
    return this.CornerNone_1;
  };
  protoOf(ShapeTokens).get_CornerSmall_s291yh_k$ = function () {
    return this.CornerSmall_1;
  };
  var ShapeTokens_instance;
  function ShapeTokens_getInstance() {
    if (ShapeTokens_instance == null)
      new ShapeTokens();
    return ShapeTokens_instance;
  }
  function SliderTokens() {
    SliderTokens_instance = this;
    this.ActiveTrackColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(4.0);
    tmp.ActiveTrackHeight_1 = tmp$ret$0;
    this.ActiveTrackShape_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.DisabledActiveTrackColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.DisabledActiveTrackOpacity_1 = 0.38;
    this.DisabledHandleColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.DisabledHandleElevation_1 = ElevationTokens_getInstance().get_Level0_a9lkds_k$();
    this.DisabledHandleOpacity_1 = 0.38;
    this.DisabledInactiveTrackColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.DisabledInactiveTrackOpacity_1 = 0.12;
    this.FocusHandleColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.HandleColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.HandleElevation_1 = ElevationTokens_getInstance().get_Level1_onepox_k$();
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(20.0);
    tmp_0.HandleHeight_1 = tmp$ret$1;
    this.HandleShape_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(20.0);
    tmp_1.HandleWidth_1 = tmp$ret$2;
    this.HoverHandleColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.InactiveTrackColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(4.0);
    tmp_2.InactiveTrackHeight_1 = tmp$ret$3;
    this.InactiveTrackShape_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.LabelContainerColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.LabelContainerElevation_1 = ElevationTokens_getInstance().get_Level0_a9lkds_k$();
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(28.0);
    tmp_3.LabelContainerHeight_1 = tmp$ret$4;
    this.LabelTextColor_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.LabelTextFont_1 = TypographyKeyTokens_LabelMedium_getInstance();
    this.PressedHandleColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$5 = _Dp___init__impl__ms3zkb(40.0);
    tmp_4.StateLayerSize_1 = tmp$ret$5;
    this.TrackElevation_1 = ElevationTokens_getInstance().get_Level0_a9lkds_k$();
    this.OverlapHandleOutlineColor_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    var tmp_5 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$6 = _Dp___init__impl__ms3zkb(1.0);
    tmp_5.OverlapHandleOutlineWidth_1 = tmp$ret$6;
    this.TickMarksActiveContainerColor_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.TickMarksActiveContainerOpacity_1 = 0.38;
    this.TickMarksContainerShape_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_6 = this;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$7 = _Dp___init__impl__ms3zkb(2.0);
    tmp_6.TickMarksContainerSize_1 = tmp$ret$7;
    this.TickMarksDisabledContainerColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.TickMarksDisabledContainerOpacity_1 = 0.38;
    this.TickMarksInactiveContainerColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.TickMarksInactiveContainerOpacity_1 = 0.38;
  }
  protoOf(SliderTokens).get_ActiveTrackColor_vli00p_k$ = function () {
    return this.ActiveTrackColor_1;
  };
  protoOf(SliderTokens).get_ActiveTrackHeight_spwsv6_k$ = function () {
    return this.ActiveTrackHeight_1;
  };
  protoOf(SliderTokens).get_ActiveTrackShape_vctzkr_k$ = function () {
    return this.ActiveTrackShape_1;
  };
  protoOf(SliderTokens).get_DisabledActiveTrackColor_mkh2pp_k$ = function () {
    return this.DisabledActiveTrackColor_1;
  };
  protoOf(SliderTokens).get_DisabledActiveTrackOpacity_a8upij_k$ = function () {
    return this.DisabledActiveTrackOpacity_1;
  };
  protoOf(SliderTokens).get_DisabledHandleColor_52mm46_k$ = function () {
    return this.DisabledHandleColor_1;
  };
  protoOf(SliderTokens).get_DisabledHandleElevation_8okb11_k$ = function () {
    return this.DisabledHandleElevation_1;
  };
  protoOf(SliderTokens).get_DisabledHandleOpacity_8e7zvi_k$ = function () {
    return this.DisabledHandleOpacity_1;
  };
  protoOf(SliderTokens).get_DisabledInactiveTrackColor_p4s1eg_k$ = function () {
    return this.DisabledInactiveTrackColor_1;
  };
  protoOf(SliderTokens).get_DisabledInactiveTrackOpacity_wb4nyo_k$ = function () {
    return this.DisabledInactiveTrackOpacity_1;
  };
  protoOf(SliderTokens).get_FocusHandleColor_xw9vjo_k$ = function () {
    return this.FocusHandleColor_1;
  };
  protoOf(SliderTokens).get_HandleColor_5a6s1a_k$ = function () {
    return this.HandleColor_1;
  };
  protoOf(SliderTokens).get_HandleElevation_9e4xfr_k$ = function () {
    return this.HandleElevation_1;
  };
  protoOf(SliderTokens).get_HandleHeight_46fhub_k$ = function () {
    return this.HandleHeight_1;
  };
  protoOf(SliderTokens).get_HandleShape_51irlc_k$ = function () {
    return this.HandleShape_1;
  };
  protoOf(SliderTokens).get_HandleWidth_j2nsq8_k$ = function () {
    return this.HandleWidth_1;
  };
  protoOf(SliderTokens).get_HoverHandleColor_7x76eg_k$ = function () {
    return this.HoverHandleColor_1;
  };
  protoOf(SliderTokens).get_InactiveTrackColor_zadmx8_k$ = function () {
    return this.InactiveTrackColor_1;
  };
  protoOf(SliderTokens).get_InactiveTrackHeight_qwdtw9_k$ = function () {
    return this.InactiveTrackHeight_1;
  };
  protoOf(SliderTokens).get_InactiveTrackShape_zi2ely_k$ = function () {
    return this.InactiveTrackShape_1;
  };
  protoOf(SliderTokens).get_LabelContainerColor_97ioer_k$ = function () {
    return this.LabelContainerColor_1;
  };
  protoOf(SliderTokens).get_LabelContainerElevation_h7nb32_k$ = function () {
    return this.LabelContainerElevation_1;
  };
  protoOf(SliderTokens).get_LabelContainerHeight_irmfiw_k$ = function () {
    return this.LabelContainerHeight_1;
  };
  protoOf(SliderTokens).get_LabelTextColor_9pp06t_k$ = function () {
    return this.LabelTextColor_1;
  };
  protoOf(SliderTokens).get_LabelTextFont_th3yzr_k$ = function () {
    return this.LabelTextFont_1;
  };
  protoOf(SliderTokens).get_PressedHandleColor_r3hxs2_k$ = function () {
    return this.PressedHandleColor_1;
  };
  protoOf(SliderTokens).get_StateLayerSize_rxvhz9_k$ = function () {
    return this.StateLayerSize_1;
  };
  protoOf(SliderTokens).get_TrackElevation_f6bt6_k$ = function () {
    return this.TrackElevation_1;
  };
  protoOf(SliderTokens).get_OverlapHandleOutlineColor_ukm7hj_k$ = function () {
    return this.OverlapHandleOutlineColor_1;
  };
  protoOf(SliderTokens).get_OverlapHandleOutlineWidth_fh67et_k$ = function () {
    return this.OverlapHandleOutlineWidth_1;
  };
  protoOf(SliderTokens).get_TickMarksActiveContainerColor_tb1n2g_k$ = function () {
    return this.TickMarksActiveContainerColor_1;
  };
  protoOf(SliderTokens).get_TickMarksActiveContainerOpacity_11ll00_k$ = function () {
    return this.TickMarksActiveContainerOpacity_1;
  };
  protoOf(SliderTokens).get_TickMarksContainerShape_k9k2ao_k$ = function () {
    return this.TickMarksContainerShape_1;
  };
  protoOf(SliderTokens).get_TickMarksContainerSize_kw2a3n_k$ = function () {
    return this.TickMarksContainerSize_1;
  };
  protoOf(SliderTokens).get_TickMarksDisabledContainerColor_z82pdu_k$ = function () {
    return this.TickMarksDisabledContainerColor_1;
  };
  protoOf(SliderTokens).get_TickMarksDisabledContainerOpacity_5ha32y_k$ = function () {
    return this.TickMarksDisabledContainerOpacity_1;
  };
  protoOf(SliderTokens).get_TickMarksInactiveContainerColor_6tm2xf_k$ = function () {
    return this.TickMarksInactiveContainerColor_1;
  };
  protoOf(SliderTokens).get_TickMarksInactiveContainerOpacity_cp8amt_k$ = function () {
    return this.TickMarksInactiveContainerOpacity_1;
  };
  var SliderTokens_instance;
  function SliderTokens_getInstance() {
    if (SliderTokens_instance == null)
      new SliderTokens();
    return SliderTokens_instance;
  }
  function StateTokens() {
    StateTokens_instance = this;
    this.DraggedStateLayerOpacity_1 = 0.16;
    this.FocusStateLayerOpacity_1 = 0.12;
    this.HoverStateLayerOpacity_1 = 0.08;
    this.PressedStateLayerOpacity_1 = 0.12;
  }
  protoOf(StateTokens).get_DraggedStateLayerOpacity_svon4y_k$ = function () {
    return this.DraggedStateLayerOpacity_1;
  };
  protoOf(StateTokens).get_FocusStateLayerOpacity_rqckro_k$ = function () {
    return this.FocusStateLayerOpacity_1;
  };
  protoOf(StateTokens).get_HoverStateLayerOpacity_gc8e7s_k$ = function () {
    return this.HoverStateLayerOpacity_1;
  };
  protoOf(StateTokens).get_PressedStateLayerOpacity_gdafla_k$ = function () {
    return this.PressedStateLayerOpacity_1;
  };
  var StateTokens_instance;
  function StateTokens_getInstance() {
    if (StateTokens_instance == null)
      new StateTokens();
    return StateTokens_instance;
  }
  function SwitchTokens() {
    SwitchTokens_instance = this;
    this.DisabledSelectedHandleColor_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.DisabledSelectedHandleOpacity_1 = 1.0;
    this.DisabledSelectedIconColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.DisabledSelectedIconOpacity_1 = 0.38;
    this.DisabledSelectedTrackColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.DisabledTrackOpacity_1 = 0.12;
    this.DisabledUnselectedHandleColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.DisabledUnselectedHandleOpacity_1 = 0.38;
    this.DisabledUnselectedIconColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.DisabledUnselectedIconOpacity_1 = 0.38;
    this.DisabledUnselectedTrackColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.DisabledUnselectedTrackOutlineColor_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.HandleShape_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(28.0);
    tmp.PressedHandleHeight_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(28.0);
    tmp_0.PressedHandleWidth_1 = tmp$ret$1;
    this.SelectedFocusHandleColor_1 = ColorSchemeKeyTokens_PrimaryContainer_getInstance();
    this.SelectedFocusIconColor_1 = ColorSchemeKeyTokens_OnPrimaryContainer_getInstance();
    this.SelectedFocusTrackColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.SelectedHandleColor_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(24.0);
    tmp_1.SelectedHandleHeight_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$3 = _Dp___init__impl__ms3zkb(24.0);
    tmp_2.SelectedHandleWidth_1 = tmp$ret$3;
    this.SelectedHoverHandleColor_1 = ColorSchemeKeyTokens_PrimaryContainer_getInstance();
    this.SelectedHoverIconColor_1 = ColorSchemeKeyTokens_OnPrimaryContainer_getInstance();
    this.SelectedHoverTrackColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.SelectedIconColor_1 = ColorSchemeKeyTokens_OnPrimaryContainer_getInstance();
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(16.0);
    tmp_3.SelectedIconSize_1 = tmp$ret$4;
    this.SelectedPressedHandleColor_1 = ColorSchemeKeyTokens_PrimaryContainer_getInstance();
    this.SelectedPressedIconColor_1 = ColorSchemeKeyTokens_OnPrimaryContainer_getInstance();
    this.SelectedPressedTrackColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.SelectedTrackColor_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.StateLayerShape_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$5 = _Dp___init__impl__ms3zkb(40.0);
    tmp_4.StateLayerSize_1 = tmp$ret$5;
    var tmp_5 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$6 = _Dp___init__impl__ms3zkb(32.0);
    tmp_5.TrackHeight_1 = tmp$ret$6;
    var tmp_6 = this;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$7 = _Dp___init__impl__ms3zkb(2.0);
    tmp_6.TrackOutlineWidth_1 = tmp$ret$7;
    this.TrackShape_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_7 = this;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$8 = _Dp___init__impl__ms3zkb(52.0);
    tmp_7.TrackWidth_1 = tmp$ret$8;
    this.UnselectedFocusHandleColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.UnselectedFocusIconColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.UnselectedFocusTrackColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.UnselectedFocusTrackOutlineColor_1 = ColorSchemeKeyTokens_Outline_getInstance();
    this.UnselectedHandleColor_1 = ColorSchemeKeyTokens_Outline_getInstance();
    var tmp_8 = this;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$9 = _Dp___init__impl__ms3zkb(16.0);
    tmp_8.UnselectedHandleHeight_1 = tmp$ret$9;
    var tmp_9 = this;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$10 = _Dp___init__impl__ms3zkb(16.0);
    tmp_9.UnselectedHandleWidth_1 = tmp$ret$10;
    this.UnselectedHoverHandleColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.UnselectedHoverIconColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.UnselectedHoverTrackColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.UnselectedHoverTrackOutlineColor_1 = ColorSchemeKeyTokens_Outline_getInstance();
    this.UnselectedIconColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    var tmp_10 = this;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$11 = _Dp___init__impl__ms3zkb(16.0);
    tmp_10.UnselectedIconSize_1 = tmp$ret$11;
    this.UnselectedPressedHandleColor_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.UnselectedPressedIconColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.UnselectedPressedTrackColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.UnselectedPressedTrackOutlineColor_1 = ColorSchemeKeyTokens_Outline_getInstance();
    this.UnselectedTrackColor_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.UnselectedTrackOutlineColor_1 = ColorSchemeKeyTokens_Outline_getInstance();
    var tmp_11 = this;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$12 = _Dp___init__impl__ms3zkb(24.0);
    tmp_11.IconHandleHeight_1 = tmp$ret$12;
    var tmp_12 = this;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$13 = _Dp___init__impl__ms3zkb(24.0);
    tmp_12.IconHandleWidth_1 = tmp$ret$13;
  }
  protoOf(SwitchTokens).get_DisabledSelectedHandleColor_t2vzdn_k$ = function () {
    return this.DisabledSelectedHandleColor_1;
  };
  protoOf(SwitchTokens).get_DisabledSelectedHandleOpacity_5pas8t_k$ = function () {
    return this.DisabledSelectedHandleOpacity_1;
  };
  protoOf(SwitchTokens).get_DisabledSelectedIconColor_jcs3iu_k$ = function () {
    return this.DisabledSelectedIconColor_1;
  };
  protoOf(SwitchTokens).get_DisabledSelectedIconOpacity_qqcb8u_k$ = function () {
    return this.DisabledSelectedIconOpacity_1;
  };
  protoOf(SwitchTokens).get_DisabledSelectedTrackColor_2vaas8_k$ = function () {
    return this.DisabledSelectedTrackColor_1;
  };
  protoOf(SwitchTokens).get_DisabledTrackOpacity_cl2q4b_k$ = function () {
    return this.DisabledTrackOpacity_1;
  };
  protoOf(SwitchTokens).get_DisabledUnselectedHandleColor_qcs5jy_k$ = function () {
    return this.DisabledUnselectedHandleColor_1;
  };
  protoOf(SwitchTokens).get_DisabledUnselectedHandleOpacity_5u5b92_k$ = function () {
    return this.DisabledUnselectedHandleOpacity_1;
  };
  protoOf(SwitchTokens).get_DisabledUnselectedIconColor_howp2p_k$ = function () {
    return this.DisabledUnselectedIconColor_1;
  };
  protoOf(SwitchTokens).get_DisabledUnselectedIconOpacity_b4we7b_k$ = function () {
    return this.DisabledUnselectedIconOpacity_1;
  };
  protoOf(SwitchTokens).get_DisabledUnselectedTrackColor_etu1pt_k$ = function () {
    return this.DisabledUnselectedTrackColor_1;
  };
  protoOf(SwitchTokens).get_DisabledUnselectedTrackOutlineColor_3o0hn1_k$ = function () {
    return this.DisabledUnselectedTrackOutlineColor_1;
  };
  protoOf(SwitchTokens).get_HandleShape_51irlc_k$ = function () {
    return this.HandleShape_1;
  };
  protoOf(SwitchTokens).get_PressedHandleHeight_cn4mfx_k$ = function () {
    return this.PressedHandleHeight_1;
  };
  protoOf(SwitchTokens).get_PressedHandleWidth_b97l0g_k$ = function () {
    return this.PressedHandleWidth_1;
  };
  protoOf(SwitchTokens).get_SelectedFocusHandleColor_7lhsjr_k$ = function () {
    return this.SelectedFocusHandleColor_1;
  };
  protoOf(SwitchTokens).get_SelectedFocusIconColor_du0oa2_k$ = function () {
    return this.SelectedFocusIconColor_1;
  };
  protoOf(SwitchTokens).get_SelectedFocusTrackColor_vyobe4_k$ = function () {
    return this.SelectedFocusTrackColor_1;
  };
  protoOf(SwitchTokens).get_SelectedHandleColor_fp9jwp_k$ = function () {
    return this.SelectedHandleColor_1;
  };
  protoOf(SwitchTokens).get_SelectedHandleHeight_z3bliq_k$ = function () {
    return this.SelectedHandleHeight_1;
  };
  protoOf(SwitchTokens).get_SelectedHandleWidth_bza4q3_k$ = function () {
    return this.SelectedHandleWidth_1;
  };
  protoOf(SwitchTokens).get_SelectedHoverHandleColor_lm57h9_k$ = function () {
    return this.SelectedHoverHandleColor_1;
  };
  protoOf(SwitchTokens).get_SelectedHoverIconColor_8gv9am_k$ = function () {
    return this.SelectedHoverIconColor_1;
  };
  protoOf(SwitchTokens).get_SelectedHoverTrackColor_eszy0g_k$ = function () {
    return this.SelectedHoverTrackColor_1;
  };
  protoOf(SwitchTokens).get_SelectedIconColor_f44k3e_k$ = function () {
    return this.SelectedIconColor_1;
  };
  protoOf(SwitchTokens).get_SelectedIconSize_84nqx3_k$ = function () {
    return this.SelectedIconSize_1;
  };
  protoOf(SwitchTokens).get_SelectedPressedHandleColor_gy6p4z_k$ = function () {
    return this.SelectedPressedHandleColor_1;
  };
  protoOf(SwitchTokens).get_SelectedPressedIconColor_vqtuks_k$ = function () {
    return this.SelectedPressedIconColor_1;
  };
  protoOf(SwitchTokens).get_SelectedPressedTrackColor_oapgfq_k$ = function () {
    return this.SelectedPressedTrackColor_1;
  };
  protoOf(SwitchTokens).get_SelectedTrackColor_7qo2v8_k$ = function () {
    return this.SelectedTrackColor_1;
  };
  protoOf(SwitchTokens).get_StateLayerShape_6is8qg_k$ = function () {
    return this.StateLayerShape_1;
  };
  protoOf(SwitchTokens).get_StateLayerSize_rxvhz9_k$ = function () {
    return this.StateLayerSize_1;
  };
  protoOf(SwitchTokens).get_TrackHeight_xi16v0_k$ = function () {
    return this.TrackHeight_1;
  };
  protoOf(SwitchTokens).get_TrackOutlineWidth_hkim81_k$ = function () {
    return this.TrackOutlineWidth_1;
  };
  protoOf(SwitchTokens).get_TrackShape_vsduwv_k$ = function () {
    return this.TrackShape_1;
  };
  protoOf(SwitchTokens).get_TrackWidth_gzun5_k$ = function () {
    return this.TrackWidth_1;
  };
  protoOf(SwitchTokens).get_UnselectedFocusHandleColor_tgu7s0_k$ = function () {
    return this.UnselectedFocusHandleColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedFocusIconColor_3g7zv5_k$ = function () {
    return this.UnselectedFocusIconColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedFocusTrackColor_1b6xn1_k$ = function () {
    return this.UnselectedFocusTrackColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedFocusTrackOutlineColor_t60sr3_k$ = function () {
    return this.UnselectedFocusTrackOutlineColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedHandleColor_h6arcy_k$ = function () {
    return this.UnselectedHandleColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedHandleHeight_250zx5_k$ = function () {
    return this.UnselectedHandleHeight_1;
  };
  protoOf(SwitchTokens).get_UnselectedHandleWidth_41jujo_k$ = function () {
    return this.UnselectedHandleWidth_1;
  };
  protoOf(SwitchTokens).get_UnselectedHoverHandleColor_ccmu64_k$ = function () {
    return this.UnselectedHoverHandleColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedHoverIconColor_1wxf4b_k$ = function () {
    return this.UnselectedHoverIconColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedHoverTrackColor_my8uxj_k$ = function () {
    return this.UnselectedHoverTrackColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedHoverTrackOutlineColor_ewk68d_k$ = function () {
    return this.UnselectedHoverTrackOutlineColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedIconColor_r38u7n_k$ = function () {
    return this.UnselectedIconColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedIconSize_f4bgry_k$ = function () {
    return this.UnselectedIconSize_1;
  };
  protoOf(SwitchTokens).get_UnselectedPressedHandleColor_l9s4t2_k$ = function () {
    return this.UnselectedPressedHandleColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedPressedIconColor_5bi5qz_k$ = function () {
    return this.UnselectedPressedIconColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedPressedTrackColor_bs61x9_k$ = function () {
    return this.UnselectedPressedTrackColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedPressedTrackOutlineColor_enp7fd_k$ = function () {
    return this.UnselectedPressedTrackOutlineColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedTrackColor_ntsinf_k$ = function () {
    return this.UnselectedTrackColor_1;
  };
  protoOf(SwitchTokens).get_UnselectedTrackOutlineColor_fil80f_k$ = function () {
    return this.UnselectedTrackOutlineColor_1;
  };
  protoOf(SwitchTokens).get_IconHandleHeight_ghgxws_k$ = function () {
    return this.IconHandleHeight_1;
  };
  protoOf(SwitchTokens).get_IconHandleWidth_evz71z_k$ = function () {
    return this.IconHandleWidth_1;
  };
  var SwitchTokens_instance;
  function SwitchTokens_getInstance() {
    if (SwitchTokens_instance == null)
      new SwitchTokens();
    return SwitchTokens_instance;
  }
  function TypeScaleTokens() {
    TypeScaleTokens_instance = this;
    this.BodyLargeFont_1 = TypefaceTokens_getInstance().get_Plain_ifc0ap_k$();
    this.BodyLargeLineHeight_1 = get_sp_0(24.0);
    this.BodyLargeSize_1 = get_sp(16);
    this.BodyLargeTracking_1 = get_sp_0(0.5);
    this.BodyLargeWeight_1 = TypefaceTokens_getInstance().get_WeightRegular_qqwngb_k$();
    this.BodyMediumFont_1 = TypefaceTokens_getInstance().get_Plain_ifc0ap_k$();
    this.BodyMediumLineHeight_1 = get_sp_0(20.0);
    this.BodyMediumSize_1 = get_sp(14);
    this.BodyMediumTracking_1 = get_sp_0(0.2);
    this.BodyMediumWeight_1 = TypefaceTokens_getInstance().get_WeightRegular_qqwngb_k$();
    this.BodySmallFont_1 = TypefaceTokens_getInstance().get_Plain_ifc0ap_k$();
    this.BodySmallLineHeight_1 = get_sp_0(16.0);
    this.BodySmallSize_1 = get_sp(12);
    this.BodySmallTracking_1 = get_sp_0(0.4);
    this.BodySmallWeight_1 = TypefaceTokens_getInstance().get_WeightRegular_qqwngb_k$();
    this.DisplayLargeFont_1 = TypefaceTokens_getInstance().get_Brand_i7qq0u_k$();
    this.DisplayLargeLineHeight_1 = get_sp_0(64.0);
    this.DisplayLargeSize_1 = get_sp(57);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.TextUnit.unaryMinus' call
    var tmp0_unaryMinus = get_sp_0(0.2);
    checkArithmetic(tmp0_unaryMinus);
    tmp$ret$0 = pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0_unaryMinus), -_TextUnit___get_value__impl__hpbx0k(tmp0_unaryMinus));
    tmp.DisplayLargeTracking_1 = tmp$ret$0;
    this.DisplayLargeWeight_1 = TypefaceTokens_getInstance().get_WeightRegular_qqwngb_k$();
    this.DisplayMediumFont_1 = TypefaceTokens_getInstance().get_Brand_i7qq0u_k$();
    this.DisplayMediumLineHeight_1 = get_sp_0(52.0);
    this.DisplayMediumSize_1 = get_sp(45);
    this.DisplayMediumTracking_1 = get_sp_0(0.0);
    this.DisplayMediumWeight_1 = TypefaceTokens_getInstance().get_WeightRegular_qqwngb_k$();
    this.DisplaySmallFont_1 = TypefaceTokens_getInstance().get_Brand_i7qq0u_k$();
    this.DisplaySmallLineHeight_1 = get_sp_0(44.0);
    this.DisplaySmallSize_1 = get_sp(36);
    this.DisplaySmallTracking_1 = get_sp_0(0.0);
    this.DisplaySmallWeight_1 = TypefaceTokens_getInstance().get_WeightRegular_qqwngb_k$();
    this.HeadlineLargeFont_1 = TypefaceTokens_getInstance().get_Brand_i7qq0u_k$();
    this.HeadlineLargeLineHeight_1 = get_sp_0(40.0);
    this.HeadlineLargeSize_1 = get_sp(32);
    this.HeadlineLargeTracking_1 = get_sp_0(0.0);
    this.HeadlineLargeWeight_1 = TypefaceTokens_getInstance().get_WeightRegular_qqwngb_k$();
    this.HeadlineMediumFont_1 = TypefaceTokens_getInstance().get_Brand_i7qq0u_k$();
    this.HeadlineMediumLineHeight_1 = get_sp_0(36.0);
    this.HeadlineMediumSize_1 = get_sp(28);
    this.HeadlineMediumTracking_1 = get_sp_0(0.0);
    this.HeadlineMediumWeight_1 = TypefaceTokens_getInstance().get_WeightRegular_qqwngb_k$();
    this.HeadlineSmallFont_1 = TypefaceTokens_getInstance().get_Brand_i7qq0u_k$();
    this.HeadlineSmallLineHeight_1 = get_sp_0(32.0);
    this.HeadlineSmallSize_1 = get_sp(24);
    this.HeadlineSmallTracking_1 = get_sp_0(0.0);
    this.HeadlineSmallWeight_1 = TypefaceTokens_getInstance().get_WeightRegular_qqwngb_k$();
    this.LabelLargeFont_1 = TypefaceTokens_getInstance().get_Plain_ifc0ap_k$();
    this.LabelLargeLineHeight_1 = get_sp_0(20.0);
    this.LabelLargeSize_1 = get_sp(14);
    this.LabelLargeTracking_1 = get_sp_0(0.1);
    this.LabelLargeWeight_1 = TypefaceTokens_getInstance().get_WeightMedium_1i81vu_k$();
    this.LabelMediumFont_1 = TypefaceTokens_getInstance().get_Plain_ifc0ap_k$();
    this.LabelMediumLineHeight_1 = get_sp_0(16.0);
    this.LabelMediumSize_1 = get_sp(12);
    this.LabelMediumTracking_1 = get_sp_0(0.5);
    this.LabelMediumWeight_1 = TypefaceTokens_getInstance().get_WeightMedium_1i81vu_k$();
    this.LabelSmallFont_1 = TypefaceTokens_getInstance().get_Plain_ifc0ap_k$();
    this.LabelSmallLineHeight_1 = get_sp_0(16.0);
    this.LabelSmallSize_1 = get_sp(11);
    this.LabelSmallTracking_1 = get_sp_0(0.5);
    this.LabelSmallWeight_1 = TypefaceTokens_getInstance().get_WeightMedium_1i81vu_k$();
    this.TitleLargeFont_1 = TypefaceTokens_getInstance().get_Brand_i7qq0u_k$();
    this.TitleLargeLineHeight_1 = get_sp_0(28.0);
    this.TitleLargeSize_1 = get_sp(22);
    this.TitleLargeTracking_1 = get_sp_0(0.0);
    this.TitleLargeWeight_1 = TypefaceTokens_getInstance().get_WeightRegular_qqwngb_k$();
    this.TitleMediumFont_1 = TypefaceTokens_getInstance().get_Plain_ifc0ap_k$();
    this.TitleMediumLineHeight_1 = get_sp_0(24.0);
    this.TitleMediumSize_1 = get_sp(16);
    this.TitleMediumTracking_1 = get_sp_0(0.2);
    this.TitleMediumWeight_1 = TypefaceTokens_getInstance().get_WeightMedium_1i81vu_k$();
    this.TitleSmallFont_1 = TypefaceTokens_getInstance().get_Plain_ifc0ap_k$();
    this.TitleSmallLineHeight_1 = get_sp_0(20.0);
    this.TitleSmallSize_1 = get_sp(14);
    this.TitleSmallTracking_1 = get_sp_0(0.1);
    this.TitleSmallWeight_1 = TypefaceTokens_getInstance().get_WeightMedium_1i81vu_k$();
  }
  protoOf(TypeScaleTokens).get_BodyLargeFont_5knv4v_k$ = function () {
    return this.BodyLargeFont_1;
  };
  protoOf(TypeScaleTokens).get_BodyLargeLineHeight_rmcdl7_k$ = function () {
    return this.BodyLargeLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_BodyLargeSize_ohjn5b_k$ = function () {
    return this.BodyLargeSize_1;
  };
  protoOf(TypeScaleTokens).get_BodyLargeTracking_woi7jt_k$ = function () {
    return this.BodyLargeTracking_1;
  };
  protoOf(TypeScaleTokens).get_BodyLargeWeight_xvbsl4_k$ = function () {
    return this.BodyLargeWeight_1;
  };
  protoOf(TypeScaleTokens).get_BodyMediumFont_vwybld_k$ = function () {
    return this.BodyMediumFont_1;
  };
  protoOf(TypeScaleTokens).get_BodyMediumLineHeight_eprm0r_k$ = function () {
    return this.BodyMediumLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_BodyMediumSize_8qfqm9_k$ = function () {
    return this.BodyMediumSize_1;
  };
  protoOf(TypeScaleTokens).get_BodyMediumTracking_m5wsp_k$ = function () {
    return this.BodyMediumTracking_1;
  };
  protoOf(TypeScaleTokens).get_BodyMediumWeight_mkmgvs_k$ = function () {
    return this.BodyMediumWeight_1;
  };
  protoOf(TypeScaleTokens).get_BodySmallFont_xt6pcl_k$ = function () {
    return this.BodySmallFont_1;
  };
  protoOf(TypeScaleTokens).get_BodySmallLineHeight_qvhbop_k$ = function () {
    return this.BodySmallLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_BodySmallSize_q759el_k$ = function () {
    return this.BodySmallSize_1;
  };
  protoOf(TypeScaleTokens).get_BodySmallTracking_652uxf_k$ = function () {
    return this.BodySmallTracking_1;
  };
  protoOf(TypeScaleTokens).get_BodySmallWeight_n3bdf0_k$ = function () {
    return this.BodySmallWeight_1;
  };
  protoOf(TypeScaleTokens).get_DisplayLargeFont_lm5g27_k$ = function () {
    return this.DisplayLargeFont_1;
  };
  protoOf(TypeScaleTokens).get_DisplayLargeLineHeight_vmuvvh_k$ = function () {
    return this.DisplayLargeLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_DisplayLargeSize_79yct9_k$ = function () {
    return this.DisplayLargeSize_1;
  };
  protoOf(TypeScaleTokens).get_DisplayLargeTracking_j2r2uf_k$ = function () {
    return this.DisplayLargeTracking_1;
  };
  protoOf(TypeScaleTokens).get_DisplayLargeWeight_nebh0m_k$ = function () {
    return this.DisplayLargeWeight_1;
  };
  protoOf(TypeScaleTokens).get_DisplayMediumFont_meuayr_k$ = function () {
    return this.DisplayMediumFont_1;
  };
  protoOf(TypeScaleTokens).get_DisplayMediumLineHeight_2wir2v_k$ = function () {
    return this.DisplayMediumLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_DisplayMediumSize_pz4ssx_k$ = function () {
    return this.DisplayMediumSize_1;
  };
  protoOf(TypeScaleTokens).get_DisplayMediumTracking_52h6sb_k$ = function () {
    return this.DisplayMediumTracking_1;
  };
  protoOf(TypeScaleTokens).get_DisplayMediumWeight_7xnuca_k$ = function () {
    return this.DisplayMediumWeight_1;
  };
  protoOf(TypeScaleTokens).get_DisplaySmallFont_a141fh_k$ = function () {
    return this.DisplaySmallFont_1;
  };
  protoOf(TypeScaleTokens).get_DisplaySmallLineHeight_muytef_k$ = function () {
    return this.DisplaySmallLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_DisplaySmallSize_rmdi8h_k$ = function () {
    return this.DisplaySmallSize_1;
  };
  protoOf(TypeScaleTokens).get_DisplaySmallTracking_jqtzmt_k$ = function () {
    return this.DisplaySmallTracking_1;
  };
  protoOf(TypeScaleTokens).get_DisplaySmallWeight_cmb1ui_k$ = function () {
    return this.DisplaySmallWeight_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineLargeFont_n9buul_k$ = function () {
    return this.HeadlineLargeFont_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineLargeLineHeight_vvkpt3_k$ = function () {
    return this.HeadlineLargeLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineLargeSize_hu1iox_k$ = function () {
    return this.HeadlineLargeSize_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineLargeTracking_451qad_k$ = function () {
    return this.HeadlineLargeTracking_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineLargeWeight_essj1m_k$ = function () {
    return this.HeadlineLargeWeight_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineMediumFont_j3x1q9_k$ = function () {
    return this.HeadlineMediumFont_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineMediumLineHeight_h37431_k$ = function () {
    return this.HeadlineMediumLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineMediumSize_1vpesz_k$ = function () {
    return this.HeadlineMediumSize_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineMediumTracking_4c7ckp_k$ = function () {
    return this.HeadlineMediumTracking_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineMediumWeight_pist3q_k$ = function () {
    return this.HeadlineMediumWeight_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineSmallFont_g4ipmv_k$ = function () {
    return this.HeadlineSmallFont_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineSmallLineHeight_fcad3v_k$ = function () {
    return this.HeadlineSmallLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineSmallSize_wunduz_k$ = function () {
    return this.HeadlineSmallSize_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineSmallTracking_s2h97j_k$ = function () {
    return this.HeadlineSmallTracking_1;
  };
  protoOf(TypeScaleTokens).get_HeadlineSmallWeight_40s3vi_k$ = function () {
    return this.HeadlineSmallWeight_1;
  };
  protoOf(TypeScaleTokens).get_LabelLargeFont_kepdbz_k$ = function () {
    return this.LabelLargeFont_1;
  };
  protoOf(TypeScaleTokens).get_LabelLargeLineHeight_u4e4h7_k$ = function () {
    return this.LabelLargeLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_LabelLargeSize_nmgv3l_k$ = function () {
    return this.LabelLargeSize_1;
  };
  protoOf(TypeScaleTokens).get_LabelLargeTracking_d0m6hl_k$ = function () {
    return this.LabelLargeTracking_1;
  };
  protoOf(TypeScaleTokens).get_LabelLargeWeight_fwc06g_k$ = function () {
    return this.LabelLargeWeight_1;
  };
  protoOf(TypeScaleTokens).get_LabelMediumFont_1ro0of_k$ = function () {
    return this.LabelMediumFont_1;
  };
  protoOf(TypeScaleTokens).get_LabelMediumLineHeight_l85pln_k$ = function () {
    return this.LabelMediumLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_LabelMediumSize_8jiash_k$ = function () {
    return this.LabelMediumSize_1;
  };
  protoOf(TypeScaleTokens).get_LabelMediumTracking_ublhnt_k$ = function () {
    return this.LabelMediumTracking_1;
  };
  protoOf(TypeScaleTokens).get_LabelMediumWeight_2pn15k_k$ = function () {
    return this.LabelMediumWeight_1;
  };
  protoOf(TypeScaleTokens).get_LabelSmallFont_iz575h_k$ = function () {
    return this.LabelSmallFont_1;
  };
  protoOf(TypeScaleTokens).get_LabelSmallLineHeight_odfksp_k$ = function () {
    return this.LabelSmallLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_LabelSmallSize_3a1pod_k$ = function () {
    return this.LabelSmallSize_1;
  };
  protoOf(TypeScaleTokens).get_LabelSmallTracking_psyvzn_k$ = function () {
    return this.LabelSmallTracking_1;
  };
  protoOf(TypeScaleTokens).get_LabelSmallWeight_qocfck_k$ = function () {
    return this.LabelSmallWeight_1;
  };
  protoOf(TypeScaleTokens).get_TitleLargeFont_j22rdx_k$ = function () {
    return this.TitleLargeFont_1;
  };
  protoOf(TypeScaleTokens).get_TitleLargeLineHeight_z8uzeh_k$ = function () {
    return this.TitleLargeLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_TitleLargeSize_jjas25_k$ = function () {
    return this.TitleLargeSize_1;
  };
  protoOf(TypeScaleTokens).get_TitleLargeTracking_t4h6pp_k$ = function () {
    return this.TitleLargeTracking_1;
  };
  protoOf(TypeScaleTokens).get_TitleLargeWeight_jfjbwk_k$ = function () {
    return this.TitleLargeWeight_1;
  };
  protoOf(TypeScaleTokens).get_TitleMediumFont_e5n419_k$ = function () {
    return this.TitleMediumFont_1;
  };
  protoOf(TypeScaleTokens).get_TitleMediumLineHeight_gbj3cx_k$ = function () {
    return this.TitleMediumLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_TitleMediumSize_nvhshx_k$ = function () {
    return this.TitleMediumSize_1;
  };
  protoOf(TypeScaleTokens).get_TitleMediumTracking_wfiath_k$ = function () {
    return this.TitleMediumTracking_1;
  };
  protoOf(TypeScaleTokens).get_TitleMediumWeight_tt9zb8_k$ = function () {
    return this.TitleMediumWeight_1;
  };
  protoOf(TypeScaleTokens).get_TitleSmallFont_cl6q3r_k$ = function () {
    return this.TitleSmallFont_1;
  };
  protoOf(TypeScaleTokens).get_TitleSmallLineHeight_ipkmp9_k$ = function () {
    return this.TitleSmallLineHeight_1;
  };
  protoOf(TypeScaleTokens).get_TitleSmallSize_t4dd3_k$ = function () {
    return this.TitleSmallSize_1;
  };
  protoOf(TypeScaleTokens).get_TitleSmallTracking_9p3vrj_k$ = function () {
    return this.TitleSmallTracking_1;
  };
  protoOf(TypeScaleTokens).get_TitleSmallWeight_u7jr2o_k$ = function () {
    return this.TitleSmallWeight_1;
  };
  var TypeScaleTokens_instance;
  function TypeScaleTokens_getInstance() {
    if (TypeScaleTokens_instance == null)
      new TypeScaleTokens();
    return TypeScaleTokens_instance;
  }
  function TypefaceTokens() {
    TypefaceTokens_instance = this;
    this.Brand_1 = Companion_getInstance_7().get_SansSerif_4qz17l_k$();
    this.Plain_1 = Companion_getInstance_7().get_SansSerif_4qz17l_k$();
    this.WeightBold_1 = Companion_getInstance_8().get_Bold_wnz5ke_k$();
    this.WeightMedium_1 = Companion_getInstance_8().get_Medium_1fiba6_k$();
    this.WeightRegular_1 = Companion_getInstance_8().get_Normal_22avww_k$();
  }
  protoOf(TypefaceTokens).get_Brand_i7qq0u_k$ = function () {
    return this.Brand_1;
  };
  protoOf(TypefaceTokens).get_Plain_ifc0ap_k$ = function () {
    return this.Plain_1;
  };
  protoOf(TypefaceTokens).get_WeightBold_bbd0e2_k$ = function () {
    return this.WeightBold_1;
  };
  protoOf(TypefaceTokens).get_WeightMedium_1i81vu_k$ = function () {
    return this.WeightMedium_1;
  };
  protoOf(TypefaceTokens).get_WeightRegular_qqwngb_k$ = function () {
    return this.WeightRegular_1;
  };
  var TypefaceTokens_instance;
  function TypefaceTokens_getInstance() {
    if (TypefaceTokens_instance == null)
      new TypefaceTokens();
    return TypefaceTokens_instance;
  }
  var TypographyKeyTokens_BodyLarge_instance;
  var TypographyKeyTokens_BodyMedium_instance;
  var TypographyKeyTokens_BodySmall_instance;
  var TypographyKeyTokens_DisplayLarge_instance;
  var TypographyKeyTokens_DisplayMedium_instance;
  var TypographyKeyTokens_DisplaySmall_instance;
  var TypographyKeyTokens_HeadlineLarge_instance;
  var TypographyKeyTokens_HeadlineMedium_instance;
  var TypographyKeyTokens_HeadlineSmall_instance;
  var TypographyKeyTokens_LabelLarge_instance;
  var TypographyKeyTokens_LabelMedium_instance;
  var TypographyKeyTokens_LabelSmall_instance;
  var TypographyKeyTokens_TitleLarge_instance;
  var TypographyKeyTokens_TitleMedium_instance;
  var TypographyKeyTokens_TitleSmall_instance;
  function values_1() {
    return [TypographyKeyTokens_BodyLarge_getInstance(), TypographyKeyTokens_BodyMedium_getInstance(), TypographyKeyTokens_BodySmall_getInstance(), TypographyKeyTokens_DisplayLarge_getInstance(), TypographyKeyTokens_DisplayMedium_getInstance(), TypographyKeyTokens_DisplaySmall_getInstance(), TypographyKeyTokens_HeadlineLarge_getInstance(), TypographyKeyTokens_HeadlineMedium_getInstance(), TypographyKeyTokens_HeadlineSmall_getInstance(), TypographyKeyTokens_LabelLarge_getInstance(), TypographyKeyTokens_LabelMedium_getInstance(), TypographyKeyTokens_LabelSmall_getInstance(), TypographyKeyTokens_TitleLarge_getInstance(), TypographyKeyTokens_TitleMedium_getInstance(), TypographyKeyTokens_TitleSmall_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'BodyLarge':
        return TypographyKeyTokens_BodyLarge_getInstance();
      case 'BodyMedium':
        return TypographyKeyTokens_BodyMedium_getInstance();
      case 'BodySmall':
        return TypographyKeyTokens_BodySmall_getInstance();
      case 'DisplayLarge':
        return TypographyKeyTokens_DisplayLarge_getInstance();
      case 'DisplayMedium':
        return TypographyKeyTokens_DisplayMedium_getInstance();
      case 'DisplaySmall':
        return TypographyKeyTokens_DisplaySmall_getInstance();
      case 'HeadlineLarge':
        return TypographyKeyTokens_HeadlineLarge_getInstance();
      case 'HeadlineMedium':
        return TypographyKeyTokens_HeadlineMedium_getInstance();
      case 'HeadlineSmall':
        return TypographyKeyTokens_HeadlineSmall_getInstance();
      case 'LabelLarge':
        return TypographyKeyTokens_LabelLarge_getInstance();
      case 'LabelMedium':
        return TypographyKeyTokens_LabelMedium_getInstance();
      case 'LabelSmall':
        return TypographyKeyTokens_LabelSmall_getInstance();
      case 'TitleLarge':
        return TypographyKeyTokens_TitleLarge_getInstance();
      case 'TitleMedium':
        return TypographyKeyTokens_TitleMedium_getInstance();
      case 'TitleSmall':
        return TypographyKeyTokens_TitleSmall_getInstance();
      default:
        TypographyKeyTokens_initEntries();
        THROW_ISE();
        break;
    }
  }
  var TypographyKeyTokens_entriesInitialized;
  function TypographyKeyTokens_initEntries() {
    if (TypographyKeyTokens_entriesInitialized)
      return Unit_getInstance();
    TypographyKeyTokens_entriesInitialized = true;
    TypographyKeyTokens_BodyLarge_instance = new TypographyKeyTokens('BodyLarge', 0);
    TypographyKeyTokens_BodyMedium_instance = new TypographyKeyTokens('BodyMedium', 1);
    TypographyKeyTokens_BodySmall_instance = new TypographyKeyTokens('BodySmall', 2);
    TypographyKeyTokens_DisplayLarge_instance = new TypographyKeyTokens('DisplayLarge', 3);
    TypographyKeyTokens_DisplayMedium_instance = new TypographyKeyTokens('DisplayMedium', 4);
    TypographyKeyTokens_DisplaySmall_instance = new TypographyKeyTokens('DisplaySmall', 5);
    TypographyKeyTokens_HeadlineLarge_instance = new TypographyKeyTokens('HeadlineLarge', 6);
    TypographyKeyTokens_HeadlineMedium_instance = new TypographyKeyTokens('HeadlineMedium', 7);
    TypographyKeyTokens_HeadlineSmall_instance = new TypographyKeyTokens('HeadlineSmall', 8);
    TypographyKeyTokens_LabelLarge_instance = new TypographyKeyTokens('LabelLarge', 9);
    TypographyKeyTokens_LabelMedium_instance = new TypographyKeyTokens('LabelMedium', 10);
    TypographyKeyTokens_LabelSmall_instance = new TypographyKeyTokens('LabelSmall', 11);
    TypographyKeyTokens_TitleLarge_instance = new TypographyKeyTokens('TitleLarge', 12);
    TypographyKeyTokens_TitleMedium_instance = new TypographyKeyTokens('TitleMedium', 13);
    TypographyKeyTokens_TitleSmall_instance = new TypographyKeyTokens('TitleSmall', 14);
  }
  function TypographyKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TypographyKeyTokens_BodyLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_BodyLarge_instance;
  }
  function TypographyKeyTokens_BodyMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_BodyMedium_instance;
  }
  function TypographyKeyTokens_BodySmall_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_BodySmall_instance;
  }
  function TypographyKeyTokens_DisplayLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_DisplayLarge_instance;
  }
  function TypographyKeyTokens_DisplayMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_DisplayMedium_instance;
  }
  function TypographyKeyTokens_DisplaySmall_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_DisplaySmall_instance;
  }
  function TypographyKeyTokens_HeadlineLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_HeadlineLarge_instance;
  }
  function TypographyKeyTokens_HeadlineMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_HeadlineMedium_instance;
  }
  function TypographyKeyTokens_HeadlineSmall_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_HeadlineSmall_instance;
  }
  function TypographyKeyTokens_LabelLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_LabelLarge_instance;
  }
  function TypographyKeyTokens_LabelMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_LabelMedium_instance;
  }
  function TypographyKeyTokens_LabelSmall_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_LabelSmall_instance;
  }
  function TypographyKeyTokens_TitleLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_TitleLarge_instance;
  }
  function TypographyKeyTokens_TitleMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_TitleMedium_instance;
  }
  function TypographyKeyTokens_TitleSmall_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_TitleSmall_instance;
  }
  function TypographyTokens() {
    TypographyTokens_instance = this;
    var tmp = this;
    var tmp0_fontFamily = TypeScaleTokens_getInstance().get_BodyLargeFont_5knv4v_k$();
    var tmp1_fontWeight = TypeScaleTokens_getInstance().get_BodyLargeWeight_xvbsl4_k$();
    var tmp2_fontSize = TypeScaleTokens_getInstance().get_BodyLargeSize_ohjn5b_k$();
    var tmp3_lineHeight = TypeScaleTokens_getInstance().get_BodyLargeLineHeight_rmcdl7_k$();
    var tmp4_letterSpacing = TypeScaleTokens_getInstance().get_BodyLargeTracking_woi7jt_k$();
    tmp.BodyLarge_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize, tmp1_fontWeight, VOID, VOID, tmp0_fontFamily, VOID, tmp4_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight);
    var tmp_0 = this;
    var tmp0_fontFamily_0 = TypeScaleTokens_getInstance().get_BodyMediumFont_vwybld_k$();
    var tmp1_fontWeight_0 = TypeScaleTokens_getInstance().get_BodyMediumWeight_mkmgvs_k$();
    var tmp2_fontSize_0 = TypeScaleTokens_getInstance().get_BodyMediumSize_8qfqm9_k$();
    var tmp3_lineHeight_0 = TypeScaleTokens_getInstance().get_BodyMediumLineHeight_eprm0r_k$();
    var tmp4_letterSpacing_0 = TypeScaleTokens_getInstance().get_BodyMediumTracking_m5wsp_k$();
    tmp_0.BodyMedium_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_0, tmp1_fontWeight_0, VOID, VOID, tmp0_fontFamily_0, VOID, tmp4_letterSpacing_0, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_0);
    var tmp_1 = this;
    var tmp0_fontFamily_1 = TypeScaleTokens_getInstance().get_BodySmallFont_xt6pcl_k$();
    var tmp1_fontWeight_1 = TypeScaleTokens_getInstance().get_BodySmallWeight_n3bdf0_k$();
    var tmp2_fontSize_1 = TypeScaleTokens_getInstance().get_BodySmallSize_q759el_k$();
    var tmp3_lineHeight_1 = TypeScaleTokens_getInstance().get_BodySmallLineHeight_qvhbop_k$();
    var tmp4_letterSpacing_1 = TypeScaleTokens_getInstance().get_BodySmallTracking_652uxf_k$();
    tmp_1.BodySmall_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_1, tmp1_fontWeight_1, VOID, VOID, tmp0_fontFamily_1, VOID, tmp4_letterSpacing_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_1);
    var tmp_2 = this;
    var tmp0_fontFamily_2 = TypeScaleTokens_getInstance().get_DisplayLargeFont_lm5g27_k$();
    var tmp1_fontWeight_2 = TypeScaleTokens_getInstance().get_DisplayLargeWeight_nebh0m_k$();
    var tmp2_fontSize_2 = TypeScaleTokens_getInstance().get_DisplayLargeSize_79yct9_k$();
    var tmp3_lineHeight_2 = TypeScaleTokens_getInstance().get_DisplayLargeLineHeight_vmuvvh_k$();
    var tmp4_letterSpacing_2 = TypeScaleTokens_getInstance().get_DisplayLargeTracking_j2r2uf_k$();
    tmp_2.DisplayLarge_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_2, tmp1_fontWeight_2, VOID, VOID, tmp0_fontFamily_2, VOID, tmp4_letterSpacing_2, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_2);
    var tmp_3 = this;
    var tmp0_fontFamily_3 = TypeScaleTokens_getInstance().get_DisplayMediumFont_meuayr_k$();
    var tmp1_fontWeight_3 = TypeScaleTokens_getInstance().get_DisplayMediumWeight_7xnuca_k$();
    var tmp2_fontSize_3 = TypeScaleTokens_getInstance().get_DisplayMediumSize_pz4ssx_k$();
    var tmp3_lineHeight_3 = TypeScaleTokens_getInstance().get_DisplayMediumLineHeight_2wir2v_k$();
    var tmp4_letterSpacing_3 = TypeScaleTokens_getInstance().get_DisplayMediumTracking_52h6sb_k$();
    tmp_3.DisplayMedium_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_3, tmp1_fontWeight_3, VOID, VOID, tmp0_fontFamily_3, VOID, tmp4_letterSpacing_3, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_3);
    var tmp_4 = this;
    var tmp0_fontFamily_4 = TypeScaleTokens_getInstance().get_DisplaySmallFont_a141fh_k$();
    var tmp1_fontWeight_4 = TypeScaleTokens_getInstance().get_DisplaySmallWeight_cmb1ui_k$();
    var tmp2_fontSize_4 = TypeScaleTokens_getInstance().get_DisplaySmallSize_rmdi8h_k$();
    var tmp3_lineHeight_4 = TypeScaleTokens_getInstance().get_DisplaySmallLineHeight_muytef_k$();
    var tmp4_letterSpacing_4 = TypeScaleTokens_getInstance().get_DisplaySmallTracking_jqtzmt_k$();
    tmp_4.DisplaySmall_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_4, tmp1_fontWeight_4, VOID, VOID, tmp0_fontFamily_4, VOID, tmp4_letterSpacing_4, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_4);
    var tmp_5 = this;
    var tmp0_fontFamily_5 = TypeScaleTokens_getInstance().get_HeadlineLargeFont_n9buul_k$();
    var tmp1_fontWeight_5 = TypeScaleTokens_getInstance().get_HeadlineLargeWeight_essj1m_k$();
    var tmp2_fontSize_5 = TypeScaleTokens_getInstance().get_HeadlineLargeSize_hu1iox_k$();
    var tmp3_lineHeight_5 = TypeScaleTokens_getInstance().get_HeadlineLargeLineHeight_vvkpt3_k$();
    var tmp4_letterSpacing_5 = TypeScaleTokens_getInstance().get_HeadlineLargeTracking_451qad_k$();
    tmp_5.HeadlineLarge_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_5, tmp1_fontWeight_5, VOID, VOID, tmp0_fontFamily_5, VOID, tmp4_letterSpacing_5, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_5);
    var tmp_6 = this;
    var tmp0_fontFamily_6 = TypeScaleTokens_getInstance().get_HeadlineMediumFont_j3x1q9_k$();
    var tmp1_fontWeight_6 = TypeScaleTokens_getInstance().get_HeadlineMediumWeight_pist3q_k$();
    var tmp2_fontSize_6 = TypeScaleTokens_getInstance().get_HeadlineMediumSize_1vpesz_k$();
    var tmp3_lineHeight_6 = TypeScaleTokens_getInstance().get_HeadlineMediumLineHeight_h37431_k$();
    var tmp4_letterSpacing_6 = TypeScaleTokens_getInstance().get_HeadlineMediumTracking_4c7ckp_k$();
    tmp_6.HeadlineMedium_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_6, tmp1_fontWeight_6, VOID, VOID, tmp0_fontFamily_6, VOID, tmp4_letterSpacing_6, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_6);
    var tmp_7 = this;
    var tmp0_fontFamily_7 = TypeScaleTokens_getInstance().get_HeadlineSmallFont_g4ipmv_k$();
    var tmp1_fontWeight_7 = TypeScaleTokens_getInstance().get_HeadlineSmallWeight_40s3vi_k$();
    var tmp2_fontSize_7 = TypeScaleTokens_getInstance().get_HeadlineSmallSize_wunduz_k$();
    var tmp3_lineHeight_7 = TypeScaleTokens_getInstance().get_HeadlineSmallLineHeight_fcad3v_k$();
    var tmp4_letterSpacing_7 = TypeScaleTokens_getInstance().get_HeadlineSmallTracking_s2h97j_k$();
    tmp_7.HeadlineSmall_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_7, tmp1_fontWeight_7, VOID, VOID, tmp0_fontFamily_7, VOID, tmp4_letterSpacing_7, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_7);
    var tmp_8 = this;
    var tmp0_fontFamily_8 = TypeScaleTokens_getInstance().get_LabelLargeFont_kepdbz_k$();
    var tmp1_fontWeight_8 = TypeScaleTokens_getInstance().get_LabelLargeWeight_fwc06g_k$();
    var tmp2_fontSize_8 = TypeScaleTokens_getInstance().get_LabelLargeSize_nmgv3l_k$();
    var tmp3_lineHeight_8 = TypeScaleTokens_getInstance().get_LabelLargeLineHeight_u4e4h7_k$();
    var tmp4_letterSpacing_8 = TypeScaleTokens_getInstance().get_LabelLargeTracking_d0m6hl_k$();
    tmp_8.LabelLarge_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_8, tmp1_fontWeight_8, VOID, VOID, tmp0_fontFamily_8, VOID, tmp4_letterSpacing_8, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_8);
    var tmp_9 = this;
    var tmp0_fontFamily_9 = TypeScaleTokens_getInstance().get_LabelMediumFont_1ro0of_k$();
    var tmp1_fontWeight_9 = TypeScaleTokens_getInstance().get_LabelMediumWeight_2pn15k_k$();
    var tmp2_fontSize_9 = TypeScaleTokens_getInstance().get_LabelMediumSize_8jiash_k$();
    var tmp3_lineHeight_9 = TypeScaleTokens_getInstance().get_LabelMediumLineHeight_l85pln_k$();
    var tmp4_letterSpacing_9 = TypeScaleTokens_getInstance().get_LabelMediumTracking_ublhnt_k$();
    tmp_9.LabelMedium_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_9, tmp1_fontWeight_9, VOID, VOID, tmp0_fontFamily_9, VOID, tmp4_letterSpacing_9, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_9);
    var tmp_10 = this;
    var tmp0_fontFamily_10 = TypeScaleTokens_getInstance().get_LabelSmallFont_iz575h_k$();
    var tmp1_fontWeight_10 = TypeScaleTokens_getInstance().get_LabelSmallWeight_qocfck_k$();
    var tmp2_fontSize_10 = TypeScaleTokens_getInstance().get_LabelSmallSize_3a1pod_k$();
    var tmp3_lineHeight_10 = TypeScaleTokens_getInstance().get_LabelSmallLineHeight_odfksp_k$();
    var tmp4_letterSpacing_10 = TypeScaleTokens_getInstance().get_LabelSmallTracking_psyvzn_k$();
    tmp_10.LabelSmall_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_10, tmp1_fontWeight_10, VOID, VOID, tmp0_fontFamily_10, VOID, tmp4_letterSpacing_10, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_10);
    var tmp_11 = this;
    var tmp0_fontFamily_11 = TypeScaleTokens_getInstance().get_TitleLargeFont_j22rdx_k$();
    var tmp1_fontWeight_11 = TypeScaleTokens_getInstance().get_TitleLargeWeight_jfjbwk_k$();
    var tmp2_fontSize_11 = TypeScaleTokens_getInstance().get_TitleLargeSize_jjas25_k$();
    var tmp3_lineHeight_11 = TypeScaleTokens_getInstance().get_TitleLargeLineHeight_z8uzeh_k$();
    var tmp4_letterSpacing_11 = TypeScaleTokens_getInstance().get_TitleLargeTracking_t4h6pp_k$();
    tmp_11.TitleLarge_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_11, tmp1_fontWeight_11, VOID, VOID, tmp0_fontFamily_11, VOID, tmp4_letterSpacing_11, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_11);
    var tmp_12 = this;
    var tmp0_fontFamily_12 = TypeScaleTokens_getInstance().get_TitleMediumFont_e5n419_k$();
    var tmp1_fontWeight_12 = TypeScaleTokens_getInstance().get_TitleMediumWeight_tt9zb8_k$();
    var tmp2_fontSize_12 = TypeScaleTokens_getInstance().get_TitleMediumSize_nvhshx_k$();
    var tmp3_lineHeight_12 = TypeScaleTokens_getInstance().get_TitleMediumLineHeight_gbj3cx_k$();
    var tmp4_letterSpacing_12 = TypeScaleTokens_getInstance().get_TitleMediumTracking_wfiath_k$();
    tmp_12.TitleMedium_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_12, tmp1_fontWeight_12, VOID, VOID, tmp0_fontFamily_12, VOID, tmp4_letterSpacing_12, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_12);
    var tmp_13 = this;
    var tmp0_fontFamily_13 = TypeScaleTokens_getInstance().get_TitleSmallFont_cl6q3r_k$();
    var tmp1_fontWeight_13 = TypeScaleTokens_getInstance().get_TitleSmallWeight_u7jr2o_k$();
    var tmp2_fontSize_13 = TypeScaleTokens_getInstance().get_TitleSmallSize_t4dd3_k$();
    var tmp3_lineHeight_13 = TypeScaleTokens_getInstance().get_TitleSmallLineHeight_ipkmp9_k$();
    var tmp4_letterSpacing_13 = TypeScaleTokens_getInstance().get_TitleSmallTracking_9p3vrj_k$();
    tmp_13.TitleSmall_1 = TextStyle_init_$Create$(VOID, tmp2_fontSize_13, tmp1_fontWeight_13, VOID, VOID, tmp0_fontFamily_13, VOID, tmp4_letterSpacing_13, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight_13);
  }
  protoOf(TypographyTokens).get_BodyLarge_8y8s9c_k$ = function () {
    return this.BodyLarge_1;
  };
  protoOf(TypographyTokens).get_BodyMedium_75vsrk_k$ = function () {
    return this.BodyMedium_1;
  };
  protoOf(TypographyTokens).get_BodySmall_8u6wqs_k$ = function () {
    return this.BodySmall_1;
  };
  protoOf(TypographyTokens).get_DisplayLarge_xob476_k$ = function () {
    return this.DisplayLarge_1;
  };
  protoOf(TypographyTokens).get_DisplayMedium_l04ak2_k$ = function () {
    return this.DisplayMedium_1;
  };
  protoOf(TypographyTokens).get_DisplaySmall_xsczpq_k$ = function () {
    return this.DisplaySmall_1;
  };
  protoOf(TypographyTokens).get_HeadlineLarge_y6x9c2_k$ = function () {
    return this.HeadlineLarge_1;
  };
  protoOf(TypographyTokens).get_HeadlineMedium_611p5e_k$ = function () {
    return this.HeadlineMedium_1;
  };
  protoOf(TypographyTokens).get_HeadlineSmall_y2vdti_k$ = function () {
    return this.HeadlineSmall_1;
  };
  protoOf(TypographyTokens).get_LabelLarge_es8jw0_k$ = function () {
    return this.LabelLarge_1;
  };
  protoOf(TypographyTokens).get_LabelMedium_vlovsw_k$ = function () {
    return this.LabelMedium_1;
  };
  protoOf(TypographyTokens).get_LabelSmall_eo6odg_k$ = function () {
    return this.LabelSmall_1;
  };
  protoOf(TypographyTokens).get_TitleLarge_gtzkic_k$ = function () {
    return this.TitleLarge_1;
  };
  protoOf(TypographyTokens).get_TitleMedium_o2ud24_k$ = function () {
    return this.TitleMedium_1;
  };
  protoOf(TypographyTokens).get_TitleSmall_gpxozs_k$ = function () {
    return this.TitleSmall_1;
  };
  var TypographyTokens_instance;
  function TypographyTokens_getInstance() {
    if (TypographyTokens_instance == null)
      new TypographyTokens();
    return TypographyTokens_instance;
  }
  function get_DIRECTION_UP_KEY_CODE() {
    _init_properties_NavigationKeyEvents_jsNative_kt__mnwgwm();
    return DIRECTION_UP_KEY_CODE;
  }
  var DIRECTION_UP_KEY_CODE;
  function get_DIRECTION_DOWN_KEY_CODE() {
    _init_properties_NavigationKeyEvents_jsNative_kt__mnwgwm();
    return DIRECTION_DOWN_KEY_CODE;
  }
  var DIRECTION_DOWN_KEY_CODE;
  function get_DIRECTION_LEFT_KEY_CODE() {
    _init_properties_NavigationKeyEvents_jsNative_kt__mnwgwm();
    return DIRECTION_LEFT_KEY_CODE;
  }
  var DIRECTION_LEFT_KEY_CODE;
  function get_DIRECTION_RIGHT_KEY_CODE() {
    _init_properties_NavigationKeyEvents_jsNative_kt__mnwgwm();
    return DIRECTION_RIGHT_KEY_CODE;
  }
  var DIRECTION_RIGHT_KEY_CODE;
  function get_HOME_KEY_CODE() {
    _init_properties_NavigationKeyEvents_jsNative_kt__mnwgwm();
    return HOME_KEY_CODE;
  }
  var HOME_KEY_CODE;
  function get_END_KEY_CODE() {
    _init_properties_NavigationKeyEvents_jsNative_kt__mnwgwm();
    return END_KEY_CODE;
  }
  var END_KEY_CODE;
  function get_PG_UP_KEY_CODE() {
    _init_properties_NavigationKeyEvents_jsNative_kt__mnwgwm();
    return PG_UP_KEY_CODE;
  }
  var PG_UP_KEY_CODE;
  function get_PG_DN_KEY_CODE() {
    _init_properties_NavigationKeyEvents_jsNative_kt__mnwgwm();
    return PG_DN_KEY_CODE;
  }
  var PG_DN_KEY_CODE;
  function get_ESC_KEY_CODE() {
    _init_properties_NavigationKeyEvents_jsNative_kt__mnwgwm();
    return ESC_KEY_CODE;
  }
  var ESC_KEY_CODE;
  var properties_initialized_NavigationKeyEvents_jsNative_kt_dq64vo;
  function _init_properties_NavigationKeyEvents_jsNative_kt__mnwgwm() {
    if (properties_initialized_NavigationKeyEvents_jsNative_kt_dq64vo) {
    } else {
      properties_initialized_NavigationKeyEvents_jsNative_kt_dq64vo = true;
      DIRECTION_UP_KEY_CODE = toLong(SkikoKey_KEY_UP_getInstance().get_platformKeyCode_k11s6o_k$());
      DIRECTION_DOWN_KEY_CODE = toLong(SkikoKey_KEY_DOWN_getInstance().get_platformKeyCode_k11s6o_k$());
      DIRECTION_LEFT_KEY_CODE = toLong(SkikoKey_KEY_LEFT_getInstance().get_platformKeyCode_k11s6o_k$());
      DIRECTION_RIGHT_KEY_CODE = toLong(SkikoKey_KEY_RIGHT_getInstance().get_platformKeyCode_k11s6o_k$());
      HOME_KEY_CODE = toLong(SkikoKey_KEY_HOME_getInstance().get_platformKeyCode_k11s6o_k$());
      END_KEY_CODE = toLong(SkikoKey_KEY_END_getInstance().get_platformKeyCode_k11s6o_k$());
      PG_UP_KEY_CODE = toLong(SkikoKey_KEY_PGUP_getInstance().get_platformKeyCode_k11s6o_k$());
      PG_DN_KEY_CODE = toLong(SkikoKey_KEY_PGDOWN_getInstance().get_platformKeyCode_k11s6o_k$());
      ESC_KEY_CODE = toLong(SkikoKey_KEY_ESCAPE_getInstance().get_platformKeyCode_k11s6o_k$());
    }
  }
  //region block: init
  TextSelectionBackgroundOpacity = 0.4;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MaterialTheme$composable;
  _.$_$.b = Surface$composable;
  _.$_$.c = Text$composable;
  _.$_$.d = Typography;
  _.$_$.e = darkColorScheme;
  _.$_$.f = lightColorScheme;
  _.$_$.g = MaterialTheme_getInstance;
  //endregion
  return _;
}));
