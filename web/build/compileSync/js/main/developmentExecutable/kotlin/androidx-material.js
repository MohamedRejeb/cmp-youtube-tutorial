(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-ui.js', './androidx-ui-unit.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-foundation-layout.js', './androidx-animation-core.js', './androidx-ui-graphics.js', './androidx-runtime.js', './androidx-foundation.js', './androidx-ui-text.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-ui.js'), require('./androidx-ui-unit.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-foundation-layout.js'), require('./androidx-animation-core.js'), require('./androidx-ui-graphics.js'), require('./androidx-runtime.js'), require('./androidx-foundation.js'), require('./androidx-ui-text.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'androidx-material'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-material'.");
    }
    root['androidx-material'] = factory(typeof this['androidx-material'] === 'undefined' ? {} : this['androidx-material'], this['androidx-ui'], this['androidx-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-foundation-layout'], this['androidx-animation-core'], this['androidx-ui-graphics'], this['androidx-runtime'], this['androidx-foundation'], this['androidx-ui-text'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var VOID = kotlin_kotlin.$_$.ed;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var fillMaxHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var protoOf = kotlin_kotlin.$_$.c9;
  var classMeta = kotlin_kotlin.$_$.z7;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var Long = kotlin_kotlin.$_$.sb;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var equals = kotlin_kotlin.$_$.d8;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ba;
  var getPropertyCallableRef = kotlin_kotlin.$_$.j8;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var interfaceMeta = kotlin_kotlin.$_$.n8;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var objectMeta = kotlin_kotlin.$_$.b9;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a3;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var Annotation = kotlin_kotlin.$_$.ib;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var SpringSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var hashCode = kotlin_kotlin.$_$.l8;
  var widthIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var defaultMinSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var SkikoKey_KEY_UP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x6;
  var toLong = kotlin_kotlin.$_$.f9;
  var SkikoKey_KEY_DOWN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b4;
  var SkikoKey_KEY_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g5;
  var SkikoKey_KEY_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n6;
  var SkikoKey_KEY_HOME_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var SkikoKey_KEY_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d4;
  var SkikoKey_KEY_PGUP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f6;
  var SkikoKey_KEY_PGDOWN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Colors, 'Colors', classMeta);
  setMetadataFor(ElevationOverlay, 'ElevationOverlay', interfaceMeta);
  setMetadataFor(DefaultElevationOverlay, 'DefaultElevationOverlay', objectMeta, VOID, [ElevationOverlay]);
  setMetadataFor(ExperimentalMaterialApi, 'ExperimentalMaterialApi', classMeta, VOID, [Annotation]);
  setMetadataFor(MaterialTheme, 'MaterialTheme', objectMeta);
  setMetadataFor(ProgressIndicatorDefaults, 'ProgressIndicatorDefaults', objectMeta);
  setMetadataFor(FabPlacement, 'FabPlacement', classMeta);
  setMetadataFor(Shapes, 'Shapes', classMeta);
  setMetadataFor(Typography, 'Typography', classMeta);
  //endregion
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
  function get_TitleBaselineDistanceFromTop() {
    _init_properties_AlertDialog_kt__pwewa6();
    return TitleBaselineDistanceFromTop;
  }
  var TitleBaselineDistanceFromTop;
  function get_TextBaselineDistanceFromTitle() {
    _init_properties_AlertDialog_kt__pwewa6();
    return TextBaselineDistanceFromTitle;
  }
  var TextBaselineDistanceFromTitle;
  function get_TextBaselineDistanceFromTop() {
    _init_properties_AlertDialog_kt__pwewa6();
    return TextBaselineDistanceFromTop;
  }
  var TextBaselineDistanceFromTop;
  var properties_initialized_AlertDialog_kt_toy5h0;
  function _init_properties_AlertDialog_kt__pwewa6() {
    if (properties_initialized_AlertDialog_kt_toy5h0) {
    } else {
      properties_initialized_AlertDialog_kt_toy5h0 = true;
      var tmp = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(24);
      TitlePadding = padding(tmp, tmp_0, VOID, tmp$ret$1);
      var tmp_1 = Companion_getInstance();
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(24);
      var tmp_2 = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(24);
      var tmp_3 = tmp$ret$1_0;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(28);
      TextPadding = padding(tmp_1, tmp_2, VOID, tmp_3, tmp$ret$2);
      TitleBaselineDistanceFromTop = get_sp(40);
      TextBaselineDistanceFromTitle = get_sp(36);
      TextBaselineDistanceFromTop = get_sp(38);
    }
  }
  function get_AppBarHeight() {
    _init_properties_AppBar_kt__51suc2();
    return AppBarHeight;
  }
  var AppBarHeight;
  function get_AppBarHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return AppBarHorizontalPadding;
  }
  var AppBarHorizontalPadding;
  function get_TitleInsetWithoutIcon() {
    _init_properties_AppBar_kt__51suc2();
    return TitleInsetWithoutIcon;
  }
  var TitleInsetWithoutIcon;
  function get_TitleIconModifier() {
    _init_properties_AppBar_kt__51suc2();
    return TitleIconModifier;
  }
  var TitleIconModifier;
  function get_BottomAppBarCutoutOffset() {
    _init_properties_AppBar_kt__51suc2();
    return BottomAppBarCutoutOffset;
  }
  var BottomAppBarCutoutOffset;
  function get_BottomAppBarRoundedEdgeRadius() {
    _init_properties_AppBar_kt__51suc2();
    return BottomAppBarRoundedEdgeRadius;
  }
  var BottomAppBarRoundedEdgeRadius;
  var properties_initialized_AppBar_kt_if00s4;
  function _init_properties_AppBar_kt__51suc2() {
    if (properties_initialized_AppBar_kt_if00s4) {
    } else {
      properties_initialized_AppBar_kt_if00s4 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      AppBarHeight = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(4);
      AppBarHorizontalPadding = tmp$ret$0_0;
      var tmp = Companion_getInstance();
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(16);
      var tmp0_minus = tmp$ret$0_1;
      var tmp1_minus = get_AppBarHorizontalPadding();
      tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
      TitleInsetWithoutIcon = width(tmp, tmp$ret$1);
      var tmp_0 = fillMaxHeight(Companion_getInstance());
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(72);
      var tmp0_minus_0 = tmp$ret$0_2;
      var tmp1_minus_0 = get_AppBarHorizontalPadding();
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus_0) - _Dp___get_value__impl__geb1vb(tmp1_minus_0));
      TitleIconModifier = width(tmp_0, tmp$ret$1_0);
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(8);
      BottomAppBarCutoutOffset = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(4);
      BottomAppBarRoundedEdgeRadius = tmp$ret$0_4;
    }
  }
  function get_AnimationSlideOffset() {
    _init_properties_BackdropScaffold_kt__aebq0k();
    return AnimationSlideOffset;
  }
  var AnimationSlideOffset;
  var properties_initialized_BackdropScaffold_kt_tx6h8y;
  function _init_properties_BackdropScaffold_kt__aebq0k() {
    if (properties_initialized_BackdropScaffold_kt_tx6h8y) {
    } else {
      properties_initialized_BackdropScaffold_kt_tx6h8y = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(20);
      AnimationSlideOffset = tmp$ret$0;
    }
  }
  function get_BadgeRadius() {
    _init_properties_Badge_kt__4ajdxr();
    return BadgeRadius;
  }
  var BadgeRadius;
  function get_BadgeWithContentRadius() {
    _init_properties_Badge_kt__4ajdxr();
    return BadgeWithContentRadius;
  }
  var BadgeWithContentRadius;
  function get_BadgeContentFontSize() {
    _init_properties_Badge_kt__4ajdxr();
    return BadgeContentFontSize;
  }
  var BadgeContentFontSize;
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
  function get_BadgeHorizontalOffset() {
    _init_properties_Badge_kt__4ajdxr();
    return BadgeHorizontalOffset;
  }
  var BadgeHorizontalOffset;
  var properties_initialized_Badge_kt_dqvlbn;
  function _init_properties_Badge_kt__4ajdxr() {
    if (properties_initialized_Badge_kt_dqvlbn) {
    } else {
      properties_initialized_Badge_kt_dqvlbn = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      BadgeRadius = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(8);
      BadgeWithContentRadius = tmp$ret$0_0;
      BadgeContentFontSize = get_sp(10);
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(4);
      BadgeWithContentHorizontalPadding = tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Dp.unaryMinus' call
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(6);
      var tmp0_unaryMinus = tmp$ret$0_2;
      tmp$ret$1 = _Dp___init__impl__ms3zkb(-_Dp___get_value__impl__geb1vb(tmp0_unaryMinus));
      BadgeWithContentHorizontalOffset = tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'androidx.compose.ui.unit.Dp.unaryMinus' call
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(4);
      var tmp0_unaryMinus_0 = tmp$ret$0_3;
      tmp$ret$1_0 = _Dp___init__impl__ms3zkb(-_Dp___get_value__impl__geb1vb(tmp0_unaryMinus_0));
      BadgeHorizontalOffset = tmp$ret$1_0;
    }
  }
  function get_BottomNavigationAnimationSpec() {
    _init_properties_BottomNavigation_kt__nco6o1();
    return BottomNavigationAnimationSpec;
  }
  var BottomNavigationAnimationSpec;
  function get_BottomNavigationHeight() {
    _init_properties_BottomNavigation_kt__nco6o1();
    return BottomNavigationHeight;
  }
  var BottomNavigationHeight;
  function get_BottomNavigationItemHorizontalPadding() {
    _init_properties_BottomNavigation_kt__nco6o1();
    return BottomNavigationItemHorizontalPadding;
  }
  var BottomNavigationItemHorizontalPadding;
  function get_CombinedItemTextBaseline() {
    _init_properties_BottomNavigation_kt__nco6o1();
    return CombinedItemTextBaseline;
  }
  var CombinedItemTextBaseline;
  var properties_initialized_BottomNavigation_kt_6l9ewv;
  function _init_properties_BottomNavigation_kt__nco6o1() {
    if (properties_initialized_BottomNavigation_kt_6l9ewv) {
    } else {
      properties_initialized_BottomNavigation_kt_6l9ewv = true;
      BottomNavigationAnimationSpec = new TweenSpec(300, VOID, get_FastOutSlowInEasing());
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      BottomNavigationHeight = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(12);
      BottomNavigationItemHorizontalPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(12);
      CombinedItemTextBaseline = tmp$ret$0_1;
    }
  }
  function get_FabSpacing() {
    _init_properties_BottomSheetScaffold_kt__pbjbdk();
    return FabSpacing;
  }
  var FabSpacing;
  var properties_initialized_BottomSheetScaffold_kt_d8pd8a;
  function _init_properties_BottomSheetScaffold_kt__pbjbdk() {
    if (properties_initialized_BottomSheetScaffold_kt_d8pd8a) {
    } else {
      properties_initialized_BottomSheetScaffold_kt_d8pd8a = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      FabSpacing = tmp$ret$0;
    }
  }
  function get_CheckboxRippleRadius() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxRippleRadius;
  }
  var CheckboxRippleRadius;
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
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      CheckboxRippleRadius = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(2);
      CheckboxDefaultPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(20);
      CheckboxSize = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(2);
      StrokeWidth = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(2);
      RadiusSize = tmp$ret$0_3;
    }
  }
  function get_HorizontalPadding() {
    _init_properties_Chip_kt__5v35sk();
    return HorizontalPadding;
  }
  var HorizontalPadding;
  function get_LeadingIconStartSpacing() {
    _init_properties_Chip_kt__5v35sk();
    return LeadingIconStartSpacing;
  }
  var LeadingIconStartSpacing;
  function get_LeadingIconEndSpacing() {
    _init_properties_Chip_kt__5v35sk();
    return LeadingIconEndSpacing;
  }
  var LeadingIconEndSpacing;
  function get_TrailingIconSpacing() {
    _init_properties_Chip_kt__5v35sk();
    return TrailingIconSpacing;
  }
  var TrailingIconSpacing;
  function get_SelectedIconContainerSize() {
    _init_properties_Chip_kt__5v35sk();
    return SelectedIconContainerSize;
  }
  var SelectedIconContainerSize;
  var properties_initialized_Chip_kt_fc50mq;
  function _init_properties_Chip_kt__5v35sk() {
    if (properties_initialized_Chip_kt_fc50mq) {
    } else {
      properties_initialized_Chip_kt_fc50mq = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(12);
      HorizontalPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(4);
      LeadingIconStartSpacing = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(8);
      LeadingIconEndSpacing = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(8);
      TrailingIconSpacing = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(24);
      SelectedIconContainerSize = tmp$ret$0_3;
    }
  }
  function get_LocalColors() {
    _init_properties_Colors_kt__dgoqts();
    return LocalColors;
  }
  var LocalColors;
  function get_$stableprop() {
    return 0;
  }
  function Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    this.primary$delegate_1 = mutableStateOf(new Color(primary), structuralEqualityPolicy());
    this.primaryVariant$delegate_1 = mutableStateOf(new Color(primaryVariant), structuralEqualityPolicy());
    this.secondary$delegate_1 = mutableStateOf(new Color(secondary), structuralEqualityPolicy());
    this.secondaryVariant$delegate_1 = mutableStateOf(new Color(secondaryVariant), structuralEqualityPolicy());
    this.background$delegate_1 = mutableStateOf(new Color(background), structuralEqualityPolicy());
    this.surface$delegate_1 = mutableStateOf(new Color(surface), structuralEqualityPolicy());
    this.error$delegate_1 = mutableStateOf(new Color(error), structuralEqualityPolicy());
    this.onPrimary$delegate_1 = mutableStateOf(new Color(onPrimary), structuralEqualityPolicy());
    this.onSecondary$delegate_1 = mutableStateOf(new Color(onSecondary), structuralEqualityPolicy());
    this.onBackground$delegate_1 = mutableStateOf(new Color(onBackground), structuralEqualityPolicy());
    this.onSurface$delegate_1 = mutableStateOf(new Color(onSurface), structuralEqualityPolicy());
    this.onError$delegate_1 = mutableStateOf(new Color(onError), structuralEqualityPolicy());
    this.isLight$delegate_1 = mutableStateOf(isLight, structuralEqualityPolicy());
    this.$stable_1 = 0;
  }
  protoOf(Colors).set_primary_1v4zhe_k$ = function (_set____db54di) {
    var tmp0_setValue = primary$factory();
    return this.primary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_primary_9vvgym_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = primary$factory_0();
    tmp$ret$0 = this.primary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_primaryVariant_4vgd3b_k$ = function (_set____db54di) {
    var tmp0_setValue = primaryVariant$factory();
    return this.primaryVariant$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_primaryVariant_e5ihv3_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = primaryVariant$factory_0();
    tmp$ret$0 = this.primaryVariant$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_secondary_vcikds_k$ = function (_set____db54di) {
    var tmp0_setValue = secondary$factory();
    return this.secondary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_secondary_k1hldc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = secondary$factory_0();
    tmp$ret$0 = this.secondary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_secondaryVariant_tt45mv_k$ = function (_set____db54di) {
    var tmp0_setValue = secondaryVariant$factory();
    return this.secondaryVariant$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_secondaryVariant_2d0yxr_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = secondaryVariant$factory_0();
    tmp$ret$0 = this.secondaryVariant$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_background_kwyuos_k$ = function (_set____db54di) {
    var tmp0_setValue = background$factory();
    return this.background$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_background_ubksc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = background$factory_0();
    tmp$ret$0 = this.background$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_surface_cc9rfb_k$ = function (_set____db54di) {
    var tmp0_setValue = surface$factory();
    return this.surface$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_surface_rbg09j_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = surface$factory_0();
    tmp$ret$0 = this.surface$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_error_inofto_k$ = function (_set____db54di) {
    var tmp0_setValue = error$factory();
    return this.error$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_error_3wds10_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = error$factory_0();
    tmp$ret$0 = this.error$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_onPrimary_oij9nl_k$ = function (_set____db54di) {
    var tmp0_setValue = onPrimary$factory();
    return this.onPrimary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_onPrimary_dkxau7_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onPrimary$factory_0();
    tmp$ret$0 = this.onPrimary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_onSecondary_8ksqoh_k$ = function (_set____db54di) {
    var tmp0_setValue = onSecondary$factory();
    return this.onSecondary$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_onSecondary_jv9s1b_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSecondary$factory_0();
    tmp$ret$0 = this.onSecondary$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_onBackground_98uqo3_k$ = function (_set____db54di) {
    var tmp0_setValue = onBackground$factory();
    return this.onBackground$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_onBackground_671u57_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onBackground$factory_0();
    tmp$ret$0 = this.onBackground$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_onSurface_yzo1li_k$ = function (_set____db54di) {
    var tmp0_setValue = onSurface$factory();
    return this.onSurface$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_onSurface_nme6dy_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onSurface$factory_0();
    tmp$ret$0 = this.onSurface$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_onError_ow1iaj_k$ = function (_set____db54di) {
    var tmp0_setValue = onError$factory();
    return this.onError$delegate_1.set_value_rnwamw_k$(new Color(_set____db54di));
  };
  protoOf(Colors).get_onError_hlsowr_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = onError$factory_0();
    tmp$ret$0 = this.onError$delegate_1.get_value_j01efc_k$().value_1;
    return tmp$ret$0;
  };
  protoOf(Colors).set_isLight_oo2guy_k$ = function (_set____db54di) {
    var tmp0_setValue = isLight$factory();
    return this.isLight$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  protoOf(Colors).get_isLight_zemp0j_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isLight$factory_0();
    tmp$ret$0 = this.isLight$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(Colors).copy_nlygth_k$ = function (primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight);
  };
  protoOf(Colors).copy$default_lykjh1_k$ = function (primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight, $super) {
    primary = primary === VOID ? this.get_primary_9vvgym_k$() : primary;
    primaryVariant = primaryVariant === VOID ? this.get_primaryVariant_e5ihv3_k$() : primaryVariant;
    secondary = secondary === VOID ? this.get_secondary_k1hldc_k$() : secondary;
    secondaryVariant = secondaryVariant === VOID ? this.get_secondaryVariant_2d0yxr_k$() : secondaryVariant;
    background = background === VOID ? this.get_background_ubksc_k$() : background;
    surface = surface === VOID ? this.get_surface_rbg09j_k$() : surface;
    error = error === VOID ? this.get_error_3wds10_k$() : error;
    onPrimary = onPrimary === VOID ? this.get_onPrimary_dkxau7_k$() : onPrimary;
    onSecondary = onSecondary === VOID ? this.get_onSecondary_jv9s1b_k$() : onSecondary;
    onBackground = onBackground === VOID ? this.get_onBackground_671u57_k$() : onBackground;
    onSurface = onSurface === VOID ? this.get_onSurface_nme6dy_k$() : onSurface;
    onError = onError === VOID ? this.get_onError_hlsowr_k$() : onError;
    isLight = isLight === VOID ? this.get_isLight_zemp0j_k$() : isLight;
    return $super === VOID ? this.copy_nlygth_k$(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) : $super.copy_nlygth_k$.call(this, new Color(primary), new Color(primaryVariant), new Color(secondary), new Color(secondaryVariant), new Color(background), new Color(surface), new Color(error), new Color(onPrimary), new Color(onSecondary), new Color(onBackground), new Color(onSurface), new Color(onError), isLight);
  };
  protoOf(Colors).toString = function () {
    return 'Colors(' + ('primary=' + new Color(this.get_primary_9vvgym_k$()) + ', ') + ('primaryVariant=' + new Color(this.get_primaryVariant_e5ihv3_k$()) + ', ') + ('secondary=' + new Color(this.get_secondary_k1hldc_k$()) + ', ') + ('secondaryVariant=' + new Color(this.get_secondaryVariant_2d0yxr_k$()) + ', ') + ('background=' + new Color(this.get_background_ubksc_k$()) + ', ') + ('surface=' + new Color(this.get_surface_rbg09j_k$()) + ', ') + ('error=' + new Color(this.get_error_3wds10_k$()) + ', ') + ('onPrimary=' + new Color(this.get_onPrimary_dkxau7_k$()) + ', ') + ('onSecondary=' + new Color(this.get_onSecondary_jv9s1b_k$()) + ', ') + ('onBackground=' + new Color(this.get_onBackground_671u57_k$()) + ', ') + ('onSurface=' + new Color(this.get_onSurface_nme6dy_k$()) + ', ') + ('onError=' + new Color(this.get_onError_hlsowr_k$()) + ', ') + ('isLight=' + this.get_isLight_zemp0j_k$()) + ')';
  };
  function lightColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError) {
    primary = primary === VOID ? Color_0(new Long(-10354450, 0)) : primary;
    primaryVariant = primaryVariant === VOID ? Color_0(new Long(-13172557, 0)) : primaryVariant;
    secondary = secondary === VOID ? Color_0(new Long(-16524602, 0)) : secondary;
    secondaryVariant = secondaryVariant === VOID ? Color_0(new Long(-16676986, 0)) : secondaryVariant;
    background = background === VOID ? Companion_getInstance_0().get_White_rvz4cb_k$() : background;
    surface = surface === VOID ? Companion_getInstance_0().get_White_rvz4cb_k$() : surface;
    error = error === VOID ? Color_0(new Long(-5242848, 0)) : error;
    onPrimary = onPrimary === VOID ? Companion_getInstance_0().get_White_rvz4cb_k$() : onPrimary;
    onSecondary = onSecondary === VOID ? Companion_getInstance_0().get_Black_wh3yn9_k$() : onSecondary;
    onBackground = onBackground === VOID ? Companion_getInstance_0().get_Black_wh3yn9_k$() : onBackground;
    onSurface = onSurface === VOID ? Companion_getInstance_0().get_Black_wh3yn9_k$() : onSurface;
    onError = onError === VOID ? Companion_getInstance_0().get_White_rvz4cb_k$() : onError;
    _init_properties_Colors_kt__dgoqts();
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, true);
  }
  function contentColorFor$composable(backgroundColor, $composer, $changed) {
    _init_properties_Colors_kt__dgoqts();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -62582793, 'C(contentColorFor$composable)P(0:c#ui.graphics.Color)*296@11462L6,296@11533L7:Colors.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-62582793, $changed, -1, 'androidx.compose.material.contentColorFor$composable (Colors.kt:295)');
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = contentColorFor(MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6), backgroundColor);
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_0().get_Unspecified_9ntdt9_k$()));
    if (tmp$ret$0) {
      tmp = tmp0_takeOrElse;
    } else {
      var tmp$ret$2;
      // Inline function 'androidx.compose.material.contentColorFor$composable.<anonymous>' call
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
  function contentColorFor(_this__u8e3s4, backgroundColor) {
    _init_properties_Colors_kt__dgoqts();
    var tmp0_subject = backgroundColor;
    return equals(tmp0_subject, _this__u8e3s4.get_primary_9vvgym_k$()) ? _this__u8e3s4.get_onPrimary_dkxau7_k$() : equals(tmp0_subject, _this__u8e3s4.get_primaryVariant_e5ihv3_k$()) ? _this__u8e3s4.get_onPrimary_dkxau7_k$() : equals(tmp0_subject, _this__u8e3s4.get_secondary_k1hldc_k$()) ? _this__u8e3s4.get_onSecondary_jv9s1b_k$() : equals(tmp0_subject, _this__u8e3s4.get_secondaryVariant_2d0yxr_k$()) ? _this__u8e3s4.get_onSecondary_jv9s1b_k$() : equals(tmp0_subject, _this__u8e3s4.get_background_ubksc_k$()) ? _this__u8e3s4.get_onBackground_671u57_k$() : equals(tmp0_subject, _this__u8e3s4.get_surface_rbg09j_k$()) ? _this__u8e3s4.get_onSurface_nme6dy_k$() : equals(tmp0_subject, _this__u8e3s4.get_error_3wds10_k$()) ? _this__u8e3s4.get_onError_hlsowr_k$() : Companion_getInstance_0().get_Unspecified_9ntdt9_k$();
  }
  function LocalColors$lambda() {
    _init_properties_Colors_kt__dgoqts();
    return lightColors();
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
  function primaryVariant$factory() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_primaryVariant_e5ihv3_k$());
    }, function (receiver, value) {
      return receiver.set_primaryVariant_4vgd3b_k$(value.value_1);
    });
  }
  function primaryVariant$factory_0() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_primaryVariant_e5ihv3_k$());
    }, function (receiver, value) {
      return receiver.set_primaryVariant_4vgd3b_k$(value.value_1);
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
  function secondaryVariant$factory() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_secondaryVariant_2d0yxr_k$());
    }, function (receiver, value) {
      return receiver.set_secondaryVariant_tt45mv_k$(value.value_1);
    });
  }
  function secondaryVariant$factory_0() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.get_secondaryVariant_2d0yxr_k$());
    }, function (receiver, value) {
      return receiver.set_secondaryVariant_tt45mv_k$(value.value_1);
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
  function isLight$factory() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isLight_zemp0j_k$();
    }, function (receiver, value) {
      return receiver.set_isLight_oo2guy_k$(value);
    });
  }
  function isLight$factory_0() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isLight_zemp0j_k$();
    }, function (receiver, value) {
      return receiver.set_isLight_oo2guy_k$(value);
    });
  }
  var properties_initialized_Colors_kt_23tfjm;
  function _init_properties_Colors_kt__dgoqts() {
    if (properties_initialized_Colors_kt_23tfjm) {
    } else {
      properties_initialized_Colors_kt_23tfjm = true;
      LocalColors = staticCompositionLocalOf(LocalColors$lambda);
    }
  }
  function get_LocalContentAlpha() {
    _init_properties_ContentAlpha_kt__y2n6o5();
    return LocalContentAlpha;
  }
  var LocalContentAlpha;
  function LocalContentAlpha$lambda() {
    _init_properties_ContentAlpha_kt__y2n6o5();
    return 1.0;
  }
  var properties_initialized_ContentAlpha_kt_tnmwxz;
  function _init_properties_ContentAlpha_kt__y2n6o5() {
    if (properties_initialized_ContentAlpha_kt_tnmwxz) {
    } else {
      properties_initialized_ContentAlpha_kt_tnmwxz = true;
      LocalContentAlpha = compositionLocalOf(VOID, LocalContentAlpha$lambda);
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance_0().get_Black_wh3yn9_k$());
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
  function get_EndDrawerPadding() {
    _init_properties_Drawer_kt__150w1b();
    return EndDrawerPadding;
  }
  var EndDrawerPadding;
  function get_DrawerVelocityThreshold() {
    _init_properties_Drawer_kt__150w1b();
    return DrawerVelocityThreshold;
  }
  var DrawerVelocityThreshold;
  function get_AnimationSpec() {
    _init_properties_Drawer_kt__150w1b();
    return AnimationSpec;
  }
  var AnimationSpec;
  var properties_initialized_Drawer_kt_wd436b;
  function _init_properties_Drawer_kt__150w1b() {
    if (properties_initialized_Drawer_kt_wd436b) {
    } else {
      properties_initialized_Drawer_kt_wd436b = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      EndDrawerPadding = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(400);
      DrawerVelocityThreshold = tmp$ret$0_0;
      AnimationSpec = new TweenSpec(256);
    }
  }
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
      DefaultIncomingSpec = new TweenSpec(120, VOID, get_FastOutSlowInEasing());
      DefaultOutgoingSpec = new TweenSpec(150, VOID, new CubicBezierEasing(0.4, 0.0, 0.6, 1.0));
      HoveredOutgoingSpec = new TweenSpec(120, VOID, new CubicBezierEasing(0.4, 0.0, 0.6, 1.0));
    }
  }
  function get_LocalElevationOverlay() {
    _init_properties_ElevationOverlay_kt__499xhv();
    return LocalElevationOverlay;
  }
  var LocalElevationOverlay;
  function get_LocalAbsoluteElevation() {
    _init_properties_ElevationOverlay_kt__499xhv();
    return LocalAbsoluteElevation;
  }
  var LocalAbsoluteElevation;
  function ElevationOverlay() {
  }
  function DefaultElevationOverlay() {
    DefaultElevationOverlay_instance = this;
  }
  protoOf(DefaultElevationOverlay).apply_e856lp_k$ = function (color, elevation) {
    illegalDecoyCallException('apply');
  };
  protoOf(DefaultElevationOverlay).apply$composable_pd3zbm_k$ = function (color, elevation, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1758936578, 'C(apply$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)69@2742L6,71@2841L42:ElevationOverlay.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1758936578, $changed, -1, 'androidx.compose.material.DefaultElevationOverlay.apply$composable (ElevationOverlay.kt:68)');
    }
    var colors = MaterialTheme_getInstance().$get_colors$$composable_pawxfy_k$($composer_0, 6);
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(elevation, tmp$ret$0) > 0) {
      tmp_0 = !colors.get_isLight_zemp0j_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var foregroundColor = calculateForegroundColor$composable(color, elevation, $composer_0, 14 & $changed | 112 & $changed);
      tmp = compositeOver(foregroundColor, color);
    } else {
      tmp = color;
    }
    var tmp1_group = tmp;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var DefaultElevationOverlay_instance;
  function DefaultElevationOverlay_getInstance() {
    if (DefaultElevationOverlay_instance == null)
      new DefaultElevationOverlay();
    return DefaultElevationOverlay_instance;
  }
  function calculateForegroundColor$composable(backgroundColor, elevation, $composer, $changed) {
    _init_properties_ElevationOverlay_kt__499xhv();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1391092752, 'C(calculateForegroundColor$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)88@3446L32:ElevationOverlay.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1391092752, $changed, -1, 'androidx.compose.material.calculateForegroundColor$composable (ElevationOverlay.kt:86)');
    }
    var tmp$ret$0;
    // Inline function 'kotlin.math.ln' call
    var tmp0_ln = _Dp___get_value__impl__geb1vb(elevation) + 1;
    tmp$ret$0 = Math.log(tmp0_ln);
    var alpha = (4.5 * tmp$ret$0 + 2.0) / 100.0;
    var baseForegroundColor = contentColorFor$composable(backgroundColor, $composer_0, 14 & $changed);
    var tmp0 = Color__copy$default_impl_ectz3s(baseForegroundColor, alpha);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function LocalElevationOverlay$lambda() {
    _init_properties_ElevationOverlay_kt__499xhv();
    return DefaultElevationOverlay_getInstance();
  }
  function LocalAbsoluteElevation$lambda() {
    _init_properties_ElevationOverlay_kt__499xhv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  var properties_initialized_ElevationOverlay_kt_xrg85x;
  function _init_properties_ElevationOverlay_kt__499xhv() {
    if (properties_initialized_ElevationOverlay_kt_xrg85x) {
    } else {
      properties_initialized_ElevationOverlay_kt_xrg85x = true;
      LocalElevationOverlay = staticCompositionLocalOf(LocalElevationOverlay$lambda);
      LocalAbsoluteElevation = compositionLocalOf(VOID, LocalAbsoluteElevation$lambda);
    }
  }
  function ExperimentalMaterialApi() {
  }
  protoOf(ExperimentalMaterialApi).equals = function (other) {
    if (!(other instanceof ExperimentalMaterialApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalMaterialApi ? other : THROW_CCE();
    return true;
  };
  protoOf(ExperimentalMaterialApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalMaterialApi).toString = function () {
    return '@androidx.compose.material.ExperimentalMaterialApi()';
  };
  function get_FabSize() {
    _init_properties_FloatingActionButton_kt__r7rs26();
    return FabSize;
  }
  var FabSize;
  function get_ExtendedFabSize() {
    _init_properties_FloatingActionButton_kt__r7rs26();
    return ExtendedFabSize;
  }
  var ExtendedFabSize;
  function get_ExtendedFabIconPadding() {
    _init_properties_FloatingActionButton_kt__r7rs26();
    return ExtendedFabIconPadding;
  }
  var ExtendedFabIconPadding;
  function get_ExtendedFabTextPadding() {
    _init_properties_FloatingActionButton_kt__r7rs26();
    return ExtendedFabTextPadding;
  }
  var ExtendedFabTextPadding;
  var properties_initialized_FloatingActionButton_kt_6gm10w;
  function _init_properties_FloatingActionButton_kt__r7rs26() {
    if (properties_initialized_FloatingActionButton_kt_6gm10w) {
    } else {
      properties_initialized_FloatingActionButton_kt_6gm10w = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      FabSize = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(48);
      ExtendedFabSize = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(12);
      ExtendedFabIconPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(20);
      ExtendedFabTextPadding = tmp$ret$0_2;
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
      var tmp = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      DefaultIconSizeModifier = size(tmp, tmp$ret$0);
    }
  }
  function get_RippleRadius() {
    _init_properties_IconButton_kt__dm2lqt();
    return RippleRadius;
  }
  var RippleRadius;
  var properties_initialized_IconButton_kt_ws0bv7;
  function _init_properties_IconButton_kt__dm2lqt() {
    if (properties_initialized_IconButton_kt_ws0bv7) {
    } else {
      properties_initialized_IconButton_kt_ws0bv7 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      RippleRadius = tmp$ret$0;
    }
  }
  function get_LocalMinimumInteractiveComponentEnforcement() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return LocalMinimumInteractiveComponentEnforcement;
  }
  var LocalMinimumInteractiveComponentEnforcement;
  function get_LocalMinimumTouchTargetEnforcement() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return LocalMinimumTouchTargetEnforcement;
  }
  var LocalMinimumTouchTargetEnforcement;
  function get_minimumInteractiveComponentSize() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return minimumInteractiveComponentSize;
  }
  var minimumInteractiveComponentSize;
  function LocalMinimumInteractiveComponentEnforcement$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return true;
  }
  var properties_initialized_InteractiveComponentSize_kt_3r58bm;
  function _init_properties_InteractiveComponentSize_kt__58cq2s() {
    if (properties_initialized_InteractiveComponentSize_kt_3r58bm) {
    } else {
      properties_initialized_InteractiveComponentSize_kt_3r58bm = true;
      LocalMinimumInteractiveComponentEnforcement = staticCompositionLocalOf(LocalMinimumInteractiveComponentEnforcement$lambda);
      LocalMinimumTouchTargetEnforcement = get_LocalMinimumInteractiveComponentEnforcement();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(48);
      minimumInteractiveComponentSize = DpSize(tmp, tmp$ret$1);
    }
  }
  function get_$stableprop_0() {
    return 0;
  }
  function MaterialTheme() {
    MaterialTheme_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(MaterialTheme).get_colors_c05661_k$ = function () {
    illegalDecoyCallException('<get-colors>');
  };
  protoOf(MaterialTheme).get_typography_tk20co_k$ = function () {
    illegalDecoyCallException('<get-typography>');
  };
  protoOf(MaterialTheme).get_shapes_jgtjwb_k$ = function () {
    illegalDecoyCallException('<get-shapes>');
  };
  protoOf(MaterialTheme).$get_colors$$composable_pawxfy_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 273761861, 'C($get-colors$$composable)102@4462L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(273761861, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-colors$$composable (MaterialTheme.kt:102)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalColors();
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
    sourceInformationMarkerStart($composer_0, 1858445221, 'C($get-typography$$composable)112@4763L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1858445221, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-typography$$composable (MaterialTheme.kt:112)');
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
    sourceInformationMarkerStart($composer_0, 493638021, 'C($get-shapes$$composable)120@4971L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(493638021, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-shapes$$composable (MaterialTheme.kt:120)');
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
  function get_MenuElevation() {
    _init_properties_Menu_kt__roln5r();
    return MenuElevation;
  }
  var MenuElevation;
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
  function get_DropdownMenuItemDefaultMinHeight() {
    _init_properties_Menu_kt__roln5r();
    return DropdownMenuItemDefaultMinHeight;
  }
  var DropdownMenuItemDefaultMinHeight;
  var properties_initialized_Menu_kt_ipl1mn;
  function _init_properties_Menu_kt__roln5r() {
    if (properties_initialized_Menu_kt_ipl1mn) {
    } else {
      properties_initialized_Menu_kt_ipl1mn = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
      MenuElevation = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(48);
      MenuVerticalMargin = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(16);
      DropdownMenuItemHorizontalPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(8);
      DropdownMenuVerticalPadding = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(112);
      DropdownMenuItemDefaultMinWidth = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(280);
      DropdownMenuItemDefaultMaxWidth = tmp$ret$0_4;
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(48);
      DropdownMenuItemDefaultMinHeight = tmp$ret$0_5;
    }
  }
  function get_PositionalThreshold() {
    _init_properties_ModalBottomSheet_kt__k0ddg9();
    return PositionalThreshold;
  }
  var PositionalThreshold;
  function get_VelocityThreshold() {
    _init_properties_ModalBottomSheet_kt__k0ddg9();
    return VelocityThreshold;
  }
  var VelocityThreshold;
  function get_MaxModalBottomSheetWidth() {
    _init_properties_ModalBottomSheet_kt__k0ddg9();
    return MaxModalBottomSheetWidth;
  }
  var MaxModalBottomSheetWidth;
  function PositionalThreshold$lambda($this$null, it) {
    _init_properties_ModalBottomSheet_kt__k0ddg9();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
    return $this$null.toPx_u0ojv5_k$(tmp$ret$0);
  }
  var properties_initialized_ModalBottomSheet_kt_mqjyvr;
  function _init_properties_ModalBottomSheet_kt__k0ddg9() {
    if (properties_initialized_ModalBottomSheet_kt_mqjyvr) {
    } else {
      properties_initialized_ModalBottomSheet_kt_mqjyvr = true;
      PositionalThreshold = PositionalThreshold$lambda;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(125);
      VelocityThreshold = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(640);
      MaxModalBottomSheetWidth = tmp$ret$0_0;
    }
  }
  function get_NavigationRailAnimationSpec() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailAnimationSpec;
  }
  var NavigationRailAnimationSpec;
  function get_NavigationRailItemSize() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailItemSize;
  }
  var NavigationRailItemSize;
  function get_NavigationRailItemCompactSize() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailItemCompactSize;
  }
  var NavigationRailItemCompactSize;
  function get_NavigationRailPadding() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailPadding;
  }
  var NavigationRailPadding;
  function get_HeaderPadding() {
    _init_properties_NavigationRail_kt__le76sm();
    return HeaderPadding;
  }
  var HeaderPadding;
  function get_ItemLabelBaselineBottomOffset() {
    _init_properties_NavigationRail_kt__le76sm();
    return ItemLabelBaselineBottomOffset;
  }
  var ItemLabelBaselineBottomOffset;
  function get_ItemIconTopOffset() {
    _init_properties_NavigationRail_kt__le76sm();
    return ItemIconTopOffset;
  }
  var ItemIconTopOffset;
  var properties_initialized_NavigationRail_kt_2gzc3c;
  function _init_properties_NavigationRail_kt__le76sm() {
    if (properties_initialized_NavigationRail_kt_2gzc3c) {
    } else {
      properties_initialized_NavigationRail_kt_2gzc3c = true;
      NavigationRailAnimationSpec = new TweenSpec(300, VOID, get_FastOutSlowInEasing());
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(72);
      NavigationRailItemSize = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(56);
      NavigationRailItemCompactSize = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(8);
      NavigationRailPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(8);
      HeaderPadding = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(16);
      ItemLabelBaselineBottomOffset = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(14);
      ItemIconTopOffset = tmp$ret$0_4;
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
  function get_LinearIndicatorHeight() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return LinearIndicatorHeight;
  }
  var LinearIndicatorHeight;
  function get_LinearIndicatorWidth() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return LinearIndicatorWidth;
  }
  var LinearIndicatorWidth;
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
  function get_$stableprop_1() {
    return 0;
  }
  function ProgressIndicatorDefaults() {
    ProgressIndicatorDefaults_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
    tmp.StrokeWidth_1 = tmp$ret$0;
    this.IndicatorBackgroundOpacity_1 = 0.24;
    this.ProgressAnimationSpec_1 = new SpringSpec(Spring_getInstance().get_DampingRatioNoBouncy_45ga5r_k$(), Spring_getInstance().get_StiffnessVeryLow_1smo6g_k$(), 1 / 1000.0);
    this.$stable_1 = 0;
  }
  protoOf(ProgressIndicatorDefaults).get_StrokeWidth_ciyx9c_k$ = function () {
    return this.StrokeWidth_1;
  };
  protoOf(ProgressIndicatorDefaults).get_IndicatorBackgroundOpacity_19bkuv_k$ = function () {
    return this.IndicatorBackgroundOpacity_1;
  };
  protoOf(ProgressIndicatorDefaults).get_ProgressAnimationSpec_711rtj_k$ = function () {
    return this.ProgressAnimationSpec_1;
  };
  var ProgressIndicatorDefaults_instance;
  function ProgressIndicatorDefaults_getInstance() {
    if (ProgressIndicatorDefaults_instance == null)
      new ProgressIndicatorDefaults();
    return ProgressIndicatorDefaults_instance;
  }
  var properties_initialized_ProgressIndicator_kt_5iutny;
  function _init_properties_ProgressIndicator_kt__3rbzw0() {
    if (properties_initialized_ProgressIndicator_kt_5iutny) {
    } else {
      properties_initialized_ProgressIndicator_kt_5iutny = true;
      LinearIndicatorHeight = ProgressIndicatorDefaults_getInstance().StrokeWidth_1;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(240);
      LinearIndicatorWidth = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(40);
      CircularIndicatorDiameter = tmp$ret$0_0;
      FirstLineHeadEasing = new CubicBezierEasing(0.2, 0.0, 0.8, 1.0);
      FirstLineTailEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      SecondLineHeadEasing = new CubicBezierEasing(0.0, 0.0, 0.65, 1.0);
      SecondLineTailEasing = new CubicBezierEasing(0.1, 0.0, 0.45, 1.0);
      CircularEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
    }
  }
  function get_RadioButtonRippleRadius() {
    _init_properties_RadioButton_kt__dpeme3();
    return RadioButtonRippleRadius;
  }
  var RadioButtonRippleRadius;
  function get_RadioButtonPadding() {
    _init_properties_RadioButton_kt__dpeme3();
    return RadioButtonPadding;
  }
  var RadioButtonPadding;
  function get_RadioButtonSize() {
    _init_properties_RadioButton_kt__dpeme3();
    return RadioButtonSize;
  }
  var RadioButtonSize;
  function get_RadioRadius() {
    _init_properties_RadioButton_kt__dpeme3();
    return RadioRadius;
  }
  var RadioRadius;
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
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      RadioButtonRippleRadius = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(2);
      RadioButtonPadding = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(20);
      RadioButtonSize = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp0_div = get_RadioButtonSize();
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_div) / 2);
      RadioRadius = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(12);
      RadioButtonDotSize = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(2);
      RadioStrokeWidth = tmp$ret$0_4;
    }
  }
  function get_LocalFabPlacement() {
    _init_properties_Scaffold_kt__o4wwkq();
    return LocalFabPlacement;
  }
  var LocalFabPlacement;
  function get_FabSpacing_0() {
    _init_properties_Scaffold_kt__o4wwkq();
    return FabSpacing_0;
  }
  var FabSpacing_0;
  function FabPlacement(isDocked, left, width, height) {
    this.isDocked_1 = isDocked;
    this.left_1 = left;
    this.width_1 = width;
    this.height_1 = height;
  }
  protoOf(FabPlacement).get_isDocked_sfq085_k$ = function () {
    return this.isDocked_1;
  };
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
      FabSpacing_0 = tmp$ret$0;
    }
  }
  function get_LocalShapes() {
    _init_properties_Shapes_kt__48nj2q();
    return LocalShapes;
  }
  var LocalShapes;
  function get_$stableprop_2() {
    return 0;
  }
  function Shapes(small, medium, large) {
    var tmp;
    if (small === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = RoundedCornerShape(tmp$ret$0);
    } else {
      tmp = small;
    }
    small = tmp;
    var tmp_0;
    if (medium === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(4);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = RoundedCornerShape(tmp$ret$0_1);
    } else {
      tmp_0 = medium;
    }
    medium = tmp_0;
    var tmp_1;
    if (large === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = RoundedCornerShape(tmp$ret$0_2);
    } else {
      tmp_1 = large;
    }
    large = tmp_1;
    this.small_1 = small;
    this.medium_1 = medium;
    this.large_1 = large;
    this.$stable_1 = 0;
  }
  protoOf(Shapes).get_small_iylg4e_k$ = function () {
    return this.small_1;
  };
  protoOf(Shapes).get_medium_gky7we_k$ = function () {
    return this.medium_1;
  };
  protoOf(Shapes).get_large_iujklu_k$ = function () {
    return this.large_1;
  };
  protoOf(Shapes).copy_w6gorw_k$ = function (small, medium, large) {
    return new Shapes(small, medium, large);
  };
  protoOf(Shapes).copy$default_6kq3t0_k$ = function (small, medium, large, $super) {
    small = small === VOID ? this.small_1 : small;
    medium = medium === VOID ? this.medium_1 : medium;
    large = large === VOID ? this.large_1 : large;
    return $super === VOID ? this.copy_w6gorw_k$(small, medium, large) : $super.copy_w6gorw_k$.call(this, small, medium, large);
  };
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.small_1, other.small_1))
      return false;
    if (!equals(this.medium_1, other.medium_1))
      return false;
    if (!equals(this.large_1, other.large_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.small_1);
    result = imul(31, result) + hashCode(this.medium_1) | 0;
    result = imul(31, result) + hashCode(this.large_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(small=' + this.small_1 + ', medium=' + this.medium_1 + ', large=' + this.large_1 + ')';
  };
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
  function get_ThumbRadius() {
    _init_properties_Slider_kt__a50341();
    return ThumbRadius;
  }
  var ThumbRadius;
  function get_ThumbRippleRadius() {
    _init_properties_Slider_kt__a50341();
    return ThumbRippleRadius;
  }
  var ThumbRippleRadius;
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
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(10);
      ThumbRadius = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(24);
      ThumbRippleRadius = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(1);
      ThumbDefaultElevation = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(6);
      ThumbPressedElevation = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(4);
      TrackHeight = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(48);
      SliderHeight = tmp$ret$0_4;
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(144);
      SliderMinWidth = tmp$ret$0_5;
      DefaultSliderConstraints = heightIn(widthIn(Companion_getInstance(), get_SliderMinWidth()), VOID, get_SliderHeight());
      SliderToTickAnimation = new TweenSpec(100);
    }
  }
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
  function get_SnackbarMinHeightOneLine() {
    _init_properties_Snackbar_kt__sxelwb();
    return SnackbarMinHeightOneLine;
  }
  var SnackbarMinHeightOneLine;
  function get_SnackbarMinHeightTwoLines() {
    _init_properties_Snackbar_kt__sxelwb();
    return SnackbarMinHeightTwoLines;
  }
  var SnackbarMinHeightTwoLines;
  var properties_initialized_Snackbar_kt_4x36ah;
  function _init_properties_Snackbar_kt__sxelwb() {
    if (properties_initialized_Snackbar_kt_4x36ah) {
    } else {
      properties_initialized_Snackbar_kt_4x36ah = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(30);
      HeightToFirstLine = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(16);
      HorizontalSpacing = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(8);
      HorizontalSpacingButtonSide = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(2);
      SeparateButtonExtraY = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(6);
      SnackbarVerticalPadding = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(8);
      TextEndExtraSpacing = tmp$ret$0_4;
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(12);
      LongButtonVerticalOffset = tmp$ret$0_5;
      var tmp$ret$0_6;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_6 = _Dp___init__impl__ms3zkb(48);
      SnackbarMinHeightOneLine = tmp$ret$0_6;
      var tmp$ret$0_7;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_7 = _Dp___init__impl__ms3zkb(68);
      SnackbarMinHeightTwoLines = tmp$ret$0_7;
    }
  }
  function get_DISMISS_THRESHOLD() {
    _init_properties_SwipeToDismiss_kt__qpd5jp();
    return DISMISS_THRESHOLD;
  }
  var DISMISS_THRESHOLD;
  var properties_initialized_SwipeToDismiss_kt_n9jaax;
  function _init_properties_SwipeToDismiss_kt__qpd5jp() {
    if (properties_initialized_SwipeToDismiss_kt_n9jaax) {
    } else {
      properties_initialized_SwipeToDismiss_kt_n9jaax = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      DISMISS_THRESHOLD = tmp$ret$0;
    }
  }
  function get_TrackWidth() {
    _init_properties_Switch_kt__dwcqr0();
    return TrackWidth;
  }
  var TrackWidth;
  function get_TrackStrokeWidth() {
    _init_properties_Switch_kt__dwcqr0();
    return TrackStrokeWidth;
  }
  var TrackStrokeWidth;
  function get_ThumbDiameter() {
    _init_properties_Switch_kt__dwcqr0();
    return ThumbDiameter;
  }
  var ThumbDiameter;
  function get_ThumbRippleRadius_0() {
    _init_properties_Switch_kt__dwcqr0();
    return ThumbRippleRadius_0;
  }
  var ThumbRippleRadius_0;
  function get_DefaultSwitchPadding() {
    _init_properties_Switch_kt__dwcqr0();
    return DefaultSwitchPadding;
  }
  var DefaultSwitchPadding;
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
  function get_ThumbDefaultElevation_0() {
    _init_properties_Switch_kt__dwcqr0();
    return ThumbDefaultElevation_0;
  }
  var ThumbDefaultElevation_0;
  function get_ThumbPressedElevation_0() {
    _init_properties_Switch_kt__dwcqr0();
    return ThumbPressedElevation_0;
  }
  var ThumbPressedElevation_0;
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (properties_initialized_Switch_kt_7kkg8m) {
    } else {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(34);
      TrackWidth = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(14);
      TrackStrokeWidth = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(20);
      ThumbDiameter = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(24);
      ThumbRippleRadius_0 = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(2);
      DefaultSwitchPadding = tmp$ret$0_3;
      SwitchWidth = get_TrackWidth();
      SwitchHeight = get_ThumbDiameter();
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var tmp0_minus = get_TrackWidth();
      var tmp1_minus = get_ThumbDiameter();
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
      ThumbPathLength = tmp$ret$0_4;
      AnimationSpec_0 = new TweenSpec(100);
      var tmp$ret$0_5;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_5 = _Dp___init__impl__ms3zkb(1);
      ThumbDefaultElevation_0 = tmp$ret$0_5;
      var tmp$ret$0_6;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_6 = _Dp___init__impl__ms3zkb(6);
      ThumbPressedElevation_0 = tmp$ret$0_6;
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
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
      SmallTabHeight = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(72);
      LargeTabHeight = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(16);
      HorizontalTextPadding = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(14);
      SingleLineTextBaselineWithIcon = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(6);
      DoubleLineTextBaselineWithIcon = tmp$ret$0_3;
      IconDistanceFromBaseline = get_sp(20);
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(8);
      TextDistanceFromLeadingIcon = tmp$ret$0_4;
    }
  }
  function get_ScrollableTabRowMinimumTabWidth() {
    _init_properties_TabRow_kt__gm58f9();
    return ScrollableTabRowMinimumTabWidth;
  }
  var ScrollableTabRowMinimumTabWidth;
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
      ScrollableTabRowScrollSpec = tween(250, VOID, get_FastOutSlowInEasing());
    }
  }
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return Companion_getInstance_1().get_Default_goqax4_k$();
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
      var tmp = Companion_getInstance();
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(48);
      var tmp_0 = tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(48);
      IconDefaultSizeModifier = defaultMinSize(tmp, tmp_0, tmp$ret$1);
    }
  }
  function get_LocalTypography() {
    _init_properties_Typography_kt__rm3fch();
    return LocalTypography;
  }
  var LocalTypography;
  function Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $this) {
    defaultFontFamily = defaultFontFamily === VOID ? Companion_getInstance_2().get_Default_goqax4_k$() : defaultFontFamily;
    var tmp;
    if (h1 === VOID) {
      var tmp0_fontWeight = Companion_getInstance_3().get_Light_id31e5_k$();
      var tmp1_fontSize = get_sp(96);
      var tmp2_letterSpacing = get_sp_0(-1.5);
      tmp = TextStyle_init_$Create$(VOID, tmp1_fontSize, tmp0_fontWeight, VOID, VOID, VOID, VOID, tmp2_letterSpacing);
    } else {
      tmp = h1;
    }
    h1 = tmp;
    var tmp_0;
    if (h2 === VOID) {
      var tmp3_fontWeight = Companion_getInstance_3().get_Light_id31e5_k$();
      var tmp4_fontSize = get_sp(60);
      var tmp5_letterSpacing = get_sp_0(-0.5);
      tmp_0 = TextStyle_init_$Create$(VOID, tmp4_fontSize, tmp3_fontWeight, VOID, VOID, VOID, VOID, tmp5_letterSpacing);
    } else {
      tmp_0 = h2;
    }
    h2 = tmp_0;
    var tmp_1;
    if (h3 === VOID) {
      var tmp6_fontWeight = Companion_getInstance_3().get_Normal_22avww_k$();
      var tmp7_fontSize = get_sp(48);
      var tmp8_letterSpacing = get_sp(0);
      tmp_1 = TextStyle_init_$Create$(VOID, tmp7_fontSize, tmp6_fontWeight, VOID, VOID, VOID, VOID, tmp8_letterSpacing);
    } else {
      tmp_1 = h3;
    }
    h3 = tmp_1;
    var tmp_2;
    if (h4 === VOID) {
      var tmp9_fontWeight = Companion_getInstance_3().get_Normal_22avww_k$();
      var tmp10_fontSize = get_sp(34);
      var tmp11_letterSpacing = get_sp_0(0.25);
      tmp_2 = TextStyle_init_$Create$(VOID, tmp10_fontSize, tmp9_fontWeight, VOID, VOID, VOID, VOID, tmp11_letterSpacing);
    } else {
      tmp_2 = h4;
    }
    h4 = tmp_2;
    var tmp_3;
    if (h5 === VOID) {
      var tmp12_fontWeight = Companion_getInstance_3().get_Normal_22avww_k$();
      var tmp13_fontSize = get_sp(24);
      var tmp14_letterSpacing = get_sp(0);
      tmp_3 = TextStyle_init_$Create$(VOID, tmp13_fontSize, tmp12_fontWeight, VOID, VOID, VOID, VOID, tmp14_letterSpacing);
    } else {
      tmp_3 = h5;
    }
    h5 = tmp_3;
    var tmp_4;
    if (h6 === VOID) {
      var tmp15_fontWeight = Companion_getInstance_3().get_Medium_1fiba6_k$();
      var tmp16_fontSize = get_sp(20);
      var tmp17_letterSpacing = get_sp_0(0.15);
      tmp_4 = TextStyle_init_$Create$(VOID, tmp16_fontSize, tmp15_fontWeight, VOID, VOID, VOID, VOID, tmp17_letterSpacing);
    } else {
      tmp_4 = h6;
    }
    h6 = tmp_4;
    var tmp_5;
    if (subtitle1 === VOID) {
      var tmp18_fontWeight = Companion_getInstance_3().get_Normal_22avww_k$();
      var tmp19_fontSize = get_sp(16);
      var tmp20_letterSpacing = get_sp_0(0.15);
      tmp_5 = TextStyle_init_$Create$(VOID, tmp19_fontSize, tmp18_fontWeight, VOID, VOID, VOID, VOID, tmp20_letterSpacing);
    } else {
      tmp_5 = subtitle1;
    }
    subtitle1 = tmp_5;
    var tmp_6;
    if (subtitle2 === VOID) {
      var tmp21_fontWeight = Companion_getInstance_3().get_Medium_1fiba6_k$();
      var tmp22_fontSize = get_sp(14);
      var tmp23_letterSpacing = get_sp_0(0.1);
      tmp_6 = TextStyle_init_$Create$(VOID, tmp22_fontSize, tmp21_fontWeight, VOID, VOID, VOID, VOID, tmp23_letterSpacing);
    } else {
      tmp_6 = subtitle2;
    }
    subtitle2 = tmp_6;
    var tmp_7;
    if (body1 === VOID) {
      var tmp24_fontWeight = Companion_getInstance_3().get_Normal_22avww_k$();
      var tmp25_fontSize = get_sp(16);
      var tmp26_letterSpacing = get_sp_0(0.5);
      tmp_7 = TextStyle_init_$Create$(VOID, tmp25_fontSize, tmp24_fontWeight, VOID, VOID, VOID, VOID, tmp26_letterSpacing);
    } else {
      tmp_7 = body1;
    }
    body1 = tmp_7;
    var tmp_8;
    if (body2 === VOID) {
      var tmp27_fontWeight = Companion_getInstance_3().get_Normal_22avww_k$();
      var tmp28_fontSize = get_sp(14);
      var tmp29_letterSpacing = get_sp_0(0.25);
      tmp_8 = TextStyle_init_$Create$(VOID, tmp28_fontSize, tmp27_fontWeight, VOID, VOID, VOID, VOID, tmp29_letterSpacing);
    } else {
      tmp_8 = body2;
    }
    body2 = tmp_8;
    var tmp_9;
    if (button === VOID) {
      var tmp30_fontWeight = Companion_getInstance_3().get_Medium_1fiba6_k$();
      var tmp31_fontSize = get_sp(14);
      var tmp32_letterSpacing = get_sp_0(1.25);
      tmp_9 = TextStyle_init_$Create$(VOID, tmp31_fontSize, tmp30_fontWeight, VOID, VOID, VOID, VOID, tmp32_letterSpacing);
    } else {
      tmp_9 = button;
    }
    button = tmp_9;
    var tmp_10;
    if (caption === VOID) {
      var tmp33_fontWeight = Companion_getInstance_3().get_Normal_22avww_k$();
      var tmp34_fontSize = get_sp(12);
      var tmp35_letterSpacing = get_sp_0(0.4);
      tmp_10 = TextStyle_init_$Create$(VOID, tmp34_fontSize, tmp33_fontWeight, VOID, VOID, VOID, VOID, tmp35_letterSpacing);
    } else {
      tmp_10 = caption;
    }
    caption = tmp_10;
    var tmp_11;
    if (overline === VOID) {
      var tmp36_fontWeight = Companion_getInstance_3().get_Normal_22avww_k$();
      var tmp37_fontSize = get_sp(10);
      var tmp38_letterSpacing = get_sp_0(1.5);
      tmp_11 = TextStyle_init_$Create$(VOID, tmp37_fontSize, tmp36_fontWeight, VOID, VOID, VOID, VOID, tmp38_letterSpacing);
    } else {
      tmp_11 = overline;
    }
    overline = tmp_11;
    Typography.call($this, withDefaultFontFamily(h1, defaultFontFamily), withDefaultFontFamily(h2, defaultFontFamily), withDefaultFontFamily(h3, defaultFontFamily), withDefaultFontFamily(h4, defaultFontFamily), withDefaultFontFamily(h5, defaultFontFamily), withDefaultFontFamily(h6, defaultFontFamily), withDefaultFontFamily(subtitle1, defaultFontFamily), withDefaultFontFamily(subtitle2, defaultFontFamily), withDefaultFontFamily(body1, defaultFontFamily), withDefaultFontFamily(body2, defaultFontFamily), withDefaultFontFamily(button, defaultFontFamily), withDefaultFontFamily(caption, defaultFontFamily), withDefaultFontFamily(overline, defaultFontFamily));
    return $this;
  }
  function Typography_init_$Create$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    return Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, objectCreate(protoOf(Typography)));
  }
  function get_$stableprop_3() {
    return 0;
  }
  function Typography(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    this.h1__1 = h1;
    this.h2__1 = h2;
    this.h3__1 = h3;
    this.h4__1 = h4;
    this.h5__1 = h5;
    this.h6__1 = h6;
    this.subtitle1__1 = subtitle1;
    this.subtitle2__1 = subtitle2;
    this.body1__1 = body1;
    this.body2__1 = body2;
    this.button_1 = button;
    this.caption_1 = caption;
    this.overline_1 = overline;
    this.$stable_1 = 0;
  }
  protoOf(Typography).get_h1_kntnzi_k$ = function () {
    return this.h1__1;
  };
  protoOf(Typography).get_h2_kntnzh_k$ = function () {
    return this.h2__1;
  };
  protoOf(Typography).get_h3_kntnzg_k$ = function () {
    return this.h3__1;
  };
  protoOf(Typography).get_h4_kntnzf_k$ = function () {
    return this.h4__1;
  };
  protoOf(Typography).get_h5_kntnze_k$ = function () {
    return this.h5__1;
  };
  protoOf(Typography).get_h6_kntnzd_k$ = function () {
    return this.h6__1;
  };
  protoOf(Typography).get_subtitle1_hlfdyo_k$ = function () {
    return this.subtitle1__1;
  };
  protoOf(Typography).get_subtitle2_hlfdyp_k$ = function () {
    return this.subtitle2__1;
  };
  protoOf(Typography).get_body1_ipaahy_k$ = function () {
    return this.body1__1;
  };
  protoOf(Typography).get_body2_ipaahz_k$ = function () {
    return this.body2__1;
  };
  protoOf(Typography).get_button_bmjiuz_k$ = function () {
    return this.button_1;
  };
  protoOf(Typography).get_caption_aejif1_k$ = function () {
    return this.caption_1;
  };
  protoOf(Typography).get_overline_n1hw8f_k$ = function () {
    return this.overline_1;
  };
  protoOf(Typography).copy_9bikh2_k$ = function (h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    return new Typography(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline);
  };
  protoOf(Typography).copy$default_ncf83z_k$ = function (h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $super) {
    h1 = h1 === VOID ? this.h1__1 : h1;
    h2 = h2 === VOID ? this.h2__1 : h2;
    h3 = h3 === VOID ? this.h3__1 : h3;
    h4 = h4 === VOID ? this.h4__1 : h4;
    h5 = h5 === VOID ? this.h5__1 : h5;
    h6 = h6 === VOID ? this.h6__1 : h6;
    subtitle1 = subtitle1 === VOID ? this.subtitle1__1 : subtitle1;
    subtitle2 = subtitle2 === VOID ? this.subtitle2__1 : subtitle2;
    body1 = body1 === VOID ? this.body1__1 : body1;
    body2 = body2 === VOID ? this.body2__1 : body2;
    button = button === VOID ? this.button_1 : button;
    caption = caption === VOID ? this.caption_1 : caption;
    overline = overline === VOID ? this.overline_1 : overline;
    return $super === VOID ? this.copy_9bikh2_k$(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) : $super.copy_9bikh2_k$.call(this, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline);
  };
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.h1__1.equals(other.h1__1))
      return false;
    if (!this.h2__1.equals(other.h2__1))
      return false;
    if (!this.h3__1.equals(other.h3__1))
      return false;
    if (!this.h4__1.equals(other.h4__1))
      return false;
    if (!this.h5__1.equals(other.h5__1))
      return false;
    if (!this.h6__1.equals(other.h6__1))
      return false;
    if (!this.subtitle1__1.equals(other.subtitle1__1))
      return false;
    if (!this.subtitle2__1.equals(other.subtitle2__1))
      return false;
    if (!this.body1__1.equals(other.body1__1))
      return false;
    if (!this.body2__1.equals(other.body2__1))
      return false;
    if (!this.button_1.equals(other.button_1))
      return false;
    if (!this.caption_1.equals(other.caption_1))
      return false;
    if (!this.overline_1.equals(other.overline_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.h1__1.hashCode();
    result = imul(31, result) + this.h2__1.hashCode() | 0;
    result = imul(31, result) + this.h3__1.hashCode() | 0;
    result = imul(31, result) + this.h4__1.hashCode() | 0;
    result = imul(31, result) + this.h5__1.hashCode() | 0;
    result = imul(31, result) + this.h6__1.hashCode() | 0;
    result = imul(31, result) + this.subtitle1__1.hashCode() | 0;
    result = imul(31, result) + this.subtitle2__1.hashCode() | 0;
    result = imul(31, result) + this.body1__1.hashCode() | 0;
    result = imul(31, result) + this.body2__1.hashCode() | 0;
    result = imul(31, result) + this.button_1.hashCode() | 0;
    result = imul(31, result) + this.caption_1.hashCode() | 0;
    result = imul(31, result) + this.overline_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(h1=' + this.h1__1 + ', h2=' + this.h2__1 + ', h3=' + this.h3__1 + ', h4=' + this.h4__1 + ', h5=' + this.h5__1 + ', h6=' + this.h6__1 + ', ' + ('subtitle1=' + this.subtitle1__1 + ', subtitle2=' + this.subtitle2__1 + ', body1=' + this.body1__1 + ', ') + ('body2=' + this.body2__1 + ', button=' + this.button_1 + ', caption=' + this.caption_1 + ', overline=' + this.overline_1 + ')');
  };
  function withDefaultFontFamily(_this__u8e3s4, default_0) {
    _init_properties_Typography_kt__rm3fch();
    return !(_this__u8e3s4.get_fontFamily_ulphcs_k$() == null) ? _this__u8e3s4 : _this__u8e3s4.copy$default_wrs716_k$(VOID, VOID, VOID, VOID, VOID, default_0);
  }
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return Typography_init_$Create$();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (properties_initialized_Typography_kt_bpd27j) {
    } else {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function get_IndicatorSize() {
    _init_properties_PullRefreshIndicator_kt__miziex();
    return IndicatorSize;
  }
  var IndicatorSize;
  function get_SpinnerShape() {
    _init_properties_PullRefreshIndicator_kt__miziex();
    return SpinnerShape;
  }
  var SpinnerShape;
  function get_ArcRadius() {
    _init_properties_PullRefreshIndicator_kt__miziex();
    return ArcRadius;
  }
  var ArcRadius;
  function get_StrokeWidth_0() {
    _init_properties_PullRefreshIndicator_kt__miziex();
    return StrokeWidth_0;
  }
  var StrokeWidth_0;
  function get_ArrowWidth() {
    _init_properties_PullRefreshIndicator_kt__miziex();
    return ArrowWidth;
  }
  var ArrowWidth;
  function get_ArrowHeight() {
    _init_properties_PullRefreshIndicator_kt__miziex();
    return ArrowHeight;
  }
  var ArrowHeight;
  function get_Elevation() {
    _init_properties_PullRefreshIndicator_kt__miziex();
    return Elevation;
  }
  var Elevation;
  function get_AlphaTween() {
    _init_properties_PullRefreshIndicator_kt__miziex();
    return AlphaTween;
  }
  var AlphaTween;
  var properties_initialized_PullRefreshIndicator_kt_212xq3;
  function _init_properties_PullRefreshIndicator_kt__miziex() {
    if (properties_initialized_PullRefreshIndicator_kt_212xq3) {
    } else {
      properties_initialized_PullRefreshIndicator_kt_212xq3 = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(40);
      IndicatorSize = tmp$ret$0;
      SpinnerShape = get_CircleShape();
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(7.5);
      ArcRadius = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(2.5);
      StrokeWidth_0 = tmp$ret$0_1;
      var tmp$ret$0_2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(10);
      ArrowWidth = tmp$ret$0_2;
      var tmp$ret$0_3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(5);
      ArrowHeight = tmp$ret$0_3;
      var tmp$ret$0_4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_4 = _Dp___init__impl__ms3zkb(6);
      Elevation = tmp$ret$0_4;
      AlphaTween = tween(300, VOID, get_LinearEasing());
    }
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
    }
  }
  return _;
}));

//# sourceMappingURL=androidx-material.js.map
