(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-ui-graphics.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui.js', './androidx-ui-geometry.js', './androidx-ui-unit.js', './androidx-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-animation-core.js', './androidx-ui-text.js', './androidx-runtime-saveable.js', './androidx-foundation-layout.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-ui-graphics.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui-unit.js'), require('./androidx-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-animation-core.js'), require('./androidx-ui-text.js'), require('./androidx-runtime-saveable.js'), require('./androidx-foundation-layout.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-runtime-saveable' was not found. Please, check whether 'androidx-runtime-saveable' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-foundation'.");
    }
    root['androidx-foundation'] = factory(typeof this['androidx-foundation'] === 'undefined' ? {} : this['androidx-foundation'], this['androidx-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui'], this['androidx-ui-geometry'], this['androidx-ui-unit'], this['androidx-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-animation-core'], this['androidx-ui-text'], this['androidx-runtime-saveable'], this['androidx-foundation-layout'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var VOID = kotlin_kotlin.$_$.ed;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var equals = kotlin_kotlin.$_$.d8;
  var ensureNotNull = kotlin_kotlin.$_$.ic;
  var drawOutline = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var drawOutline_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var InspectorValueInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.a2;
  var protoOf = kotlin_kotlin.$_$.c9;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l2;
  var hashCode = kotlin_kotlin.$_$.l8;
  var getNumberHashCode = kotlin_kotlin.$_$.h8;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var foldOut = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var any = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.m2;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var DrawModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.a;
  var classMeta = kotlin_kotlin.$_$.z7;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var roundToInt = kotlin_kotlin.$_$.m9;
  var objectMeta = kotlin_kotlin.$_$.b9;
  var interfaceMeta = kotlin_kotlin.$_$.n8;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var ImageBitmapConfig = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g3;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j3;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var numberToInt = kotlin_kotlin.$_$.y8;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f3;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qc;
  var Rectangle = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var Rounded = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var Generic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Ref = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isObject = kotlin_kotlin.$_$.t8;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var drawWithCache = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Shape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Annotation = kotlin_kotlin.$_$.ib;
  var InspectableModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a3;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var positionChange = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var CoroutineImpl = kotlin_kotlin.$_$.j7;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var isInterface = kotlin_kotlin.$_$.s8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.t6;
  var changedToUp = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var CancellationException = kotlin_kotlin.$_$.s6;
  var PointerEventPass_Main_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var changedToUpIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var isOutOfBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var PointerEventPass_Final_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var PointerEventTimeoutCancellationException = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var positionChangedIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var SuspendFunction1 = kotlin_kotlin.$_$.l7;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var THROW_ISE = kotlin_kotlin.$_$.zb;
  var Enum = kotlin_kotlin.$_$.ob;
  var get_key = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var get = kotlin_kotlin.$_$.e7;
  var fold = kotlin_kotlin.$_$.d7;
  var minusKey = kotlin_kotlin.$_$.f7;
  var plus = kotlin_kotlin.$_$.i7;
  var MotionDurationScale = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var changedToDownIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var changedToDown = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var get_isPrimaryPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var SuspendFunction2 = kotlin_kotlin.$_$.m7;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.l2;
  var to = kotlin_kotlin.$_$.bd;
  var Velocity__copy$default_impl_eql69u = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var Offset__copy$default_impl_bmwjg8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var Velocity = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var onPreScroll = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var onPreFling = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var NestedScrollConnection = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var emptyList = kotlin_kotlin.$_$.l4;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var roundToPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toSp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var toSp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var toSp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var toDp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var toDpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var emptyFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var get_inspectableElements = kotlin_org_jetbrains_compose_ui_ui.$_$.x1;
  var get_nameFallback = kotlin_org_jetbrains_compose_ui_ui.$_$.y1;
  var InspectableValue = kotlin_org_jetbrains_compose_ui_ui.$_$.z1;
  var toRect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var RoundRect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l1;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var get_LocalFontFamilyResolver = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var rememberSaveable$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.b;
  var AnnotatedString_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.d2;
  var get_LocalViewConfiguration = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var drawBehind = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.j2;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var KProperty0 = kotlin_kotlin.$_$.ca;
  var getLocalDelegateReference = kotlin_kotlin.$_$.g8;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var Pair = kotlin_kotlin.$_$.wb;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var mapOf = kotlin_kotlin.$_$.q5;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var coerceIn = kotlin_kotlin.$_$.w9;
  var positionInWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  var set_text = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var getTextLayoutResult = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var onGloballyPositioned = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.wc;
  var pointerHoverIcon = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ba;
  var getPropertyCallableRef = kotlin_kotlin.$_$.j8;
  var resolveDefaults = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var Companion_getInstance_18 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e1;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var Companion_getInstance_19 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f1;
  var FontSynthesis = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var get_key_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var get_isAltPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.j;
  var get_isShiftPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var get_isCtrlPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.k;
  var KeyEvent = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var KProperty1 = kotlin_kotlin.$_$.da;
  var TextRange = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q;
  var charSequenceGet = kotlin_kotlin.$_$.w7;
  var Char = kotlin_kotlin.$_$.kb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w1;
  var charSequenceLength = kotlin_kotlin.$_$.x7;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var MultiParagraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n;
  var TextPainter_getInstance = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j1;
  var MultiParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m;
  var TextLayoutInput_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var TextLayoutResult = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var keyframes = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var infiniteRepeatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var Paragraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.o;
  var repeat = kotlin_kotlin.$_$.wa;
  var OffsetMapping = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e;
  var Companion_getInstance_20 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h1;
  var coerceAtMost = kotlin_kotlin.$_$.t9;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var Companion_getInstance_21 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Companion_getInstance_22 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k1;
  var _TextRange___get_reversed__impl__emhnbm = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b1;
  var _TextRange___get_start__impl__ww4t90 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var _TextRange___get_end__impl__gcdxpp = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var TextRange_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var get_lastIndex = kotlin_kotlin.$_$.va;
  var _TextRange___get_collapsed__impl__cilesp = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var SemanticsPropertyKey = kotlin_org_jetbrains_compose_ui_ui.$_$.h2;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var get_isSpecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.k2;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var SpringSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var Long = kotlin_kotlin.$_$.sb;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var get_isShiftPressed_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var DummyPointerIcon_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var SkikoKey_KEY_SPACE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s6;
  var toLong = kotlin_kotlin.$_$.f9;
  var Companion_getInstance_23 = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var _Key___get_keyCode__impl__ymzu5v = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var _Key___init__impl__p6mluu = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var get_currentSystemTheme = kotlin_org_jetbrains_skiko_skiko.$_$.j9;
  var SystemTheme_DARK_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e7;
  var Companion_getInstance_24 = kotlin_org_jetbrains_skiko_skiko.$_$.p7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Background, 'Background', classMeta, InspectorValueInfo, [DrawModifier, InspectorValueInfo]);
  setMetadataFor(MarqueeSpacing, 'MarqueeSpacing', interfaceMeta);
  setMetadataFor(sam$androidx_compose_foundation_MarqueeSpacing$0, 'sam$androidx_compose_foundation_MarqueeSpacing$0', classMeta, VOID, [MarqueeSpacing]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BorderCache, 'BorderCache', classMeta);
  setMetadataFor(BorderStroke, 'BorderStroke', classMeta);
  setMetadataFor(HorizontalScrollableClipModifier$1, VOID, classMeta, VOID, [Shape]);
  setMetadataFor(VerticalScrollableClipModifier$1, VOID, classMeta, VOID, [Shape]);
  setMetadataFor(ExperimentalFoundationApi, 'ExperimentalFoundationApi', classMeta, VOID, [Annotation]);
  setMetadataFor(Indication, 'Indication', interfaceMeta);
  setMetadataFor(IndicationInstance, 'IndicationInstance', interfaceMeta);
  setMetadataFor(DefaultDebugIndicationInstance, 'DefaultDebugIndicationInstance', classMeta, VOID, [IndicationInstance]);
  setMetadataFor(DefaultDebugIndication, 'DefaultDebugIndication', objectMeta, VOID, [Indication]);
  setMetadataFor(PointerDirectionConfig, 'PointerDirectionConfig', interfaceMeta);
  setMetadataFor(HorizontalPointerDirectionConfig$1, VOID, classMeta, VOID, [PointerDirectionConfig]);
  setMetadataFor(VerticalPointerDirectionConfig$1, VOID, classMeta, VOID, [PointerDirectionConfig]);
  setMetadataFor(detectDragGesturesAfterLongPress$slambda, 'detectDragGesturesAfterLongPress$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(awaitLongPressOrCancellation$slambda, 'awaitLongPressOrCancellation$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($dragCOROUTINE$0, '$dragCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($awaitLongPressOrCancellationCOROUTINE$1, '$awaitLongPressOrCancellationCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($awaitDragOrCancellationCOROUTINE$2, '$awaitDragOrCancellationCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($awaitDragOrUpCOROUTINE$3, '$awaitDragOrUpCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(awaitEachGesture$slambda, 'awaitEachGesture$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($awaitAllPointersUpCOROUTINE$4, '$awaitAllPointersUpCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(Orientation, 'Orientation', classMeta, Enum);
  setMetadataFor(ScrollScope, 'ScrollScope', interfaceMeta);
  setMetadataFor(NoOpScrollScope$1, VOID, classMeta, VOID, [ScrollScope]);
  setMetadataFor(DefaultScrollMotionDurationScale$1, VOID, classMeta, VOID, [MotionDurationScale]);
  setMetadataFor(PressGestureScope, 'PressGestureScope', interfaceMeta, VOID, [Density], VOID, VOID, [0]);
  setMetadataFor(NoPressGesture$slambda, 'NoPressGesture$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($awaitFirstDownCOROUTINE$5, '$awaitFirstDownCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(Interaction, 'Interaction', interfaceMeta);
  setMetadataFor(DragInteraction, 'DragInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Start, 'Start', classMeta, VOID, [DragInteraction]);
  setMetadataFor(Stop, 'Stop', classMeta, VOID, [DragInteraction]);
  setMetadataFor(Cancel, 'Cancel', classMeta, VOID, [DragInteraction]);
  setMetadataFor(FocusInteraction, 'FocusInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Focus, 'Focus', classMeta, VOID, [FocusInteraction]);
  setMetadataFor(Unfocus, 'Unfocus', classMeta, VOID, [FocusInteraction]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(collectIsFocusedAsState$composable$slambda$slambda, 'collectIsFocusedAsState$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(collectIsFocusedAsState$composable$slambda, 'collectIsFocusedAsState$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(HoverInteraction, 'HoverInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Enter, 'Enter', classMeta, VOID, [HoverInteraction]);
  setMetadataFor(Exit, 'Exit', classMeta, VOID, [HoverInteraction]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(collectIsHoveredAsState$composable$slambda$slambda, 'collectIsHoveredAsState$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(collectIsHoveredAsState$composable$slambda, 'collectIsHoveredAsState$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(InteractionSource, 'InteractionSource', interfaceMeta);
  setMetadataFor(PressInteraction, 'PressInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Press, 'Press', classMeta, VOID, [PressInteraction]);
  setMetadataFor(Release, 'Release', classMeta, VOID, [PressInteraction]);
  setMetadataFor(Cancel_0, 'Cancel', classMeta, VOID, [PressInteraction]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(collectIsPressedAsState$composable$slambda$slambda, 'collectIsPressedAsState$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(collectIsPressedAsState$composable$slambda, 'collectIsPressedAsState$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(LazyListItemInfo, 'LazyListItemInfo', interfaceMeta);
  function get_viewportSize() {
    return Companion_getInstance_11().get_Zero_4ip44w_k$();
  }
  function get_orientation() {
    return Orientation_Vertical_getInstance();
  }
  function get_reverseLayout() {
    return false;
  }
  function get_beforeContentPadding() {
    return 0;
  }
  function get_afterContentPadding() {
    return 0;
  }
  function get_mainAxisItemSpacing() {
    return 0;
  }
  setMetadataFor(LazyListLayoutInfo, 'LazyListLayoutInfo', interfaceMeta);
  setMetadataFor(ConsumeAllFlingOnDirection, 'ConsumeAllFlingOnDirection', classMeta, VOID, [NestedScrollConnection], VOID, VOID, [2, 1]);
  setMetadataFor(EmptyLayoutInfo$1, VOID, classMeta, VOID, [LazyListLayoutInfo]);
  setMetadataFor(UnitDensity$1, VOID, classMeta, VOID, [Density]);
  setMetadataFor(EmptyInteractionSources$1, VOID, classMeta, VOID, [InteractionSource]);
  setMetadataFor(BringIntoViewParent, 'BringIntoViewParent', interfaceMeta, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(CornerBasedShape, 'CornerBasedShape', classMeta, VOID, [Shape]);
  setMetadataFor(CornerSize, 'CornerSize', interfaceMeta);
  setMetadataFor(PercentCornerSize, 'PercentCornerSize', classMeta, VOID, [CornerSize, InspectableValue]);
  setMetadataFor(DpCornerSize, 'DpCornerSize', classMeta, VOID, [CornerSize, InspectableValue]);
  setMetadataFor(ZeroCornerSize$1, VOID, classMeta, VOID, [CornerSize, InspectableValue]);
  setMetadataFor(RoundedCornerShape, 'RoundedCornerShape', classMeta, CornerBasedShape);
  setMetadataFor(TextDragObserver, 'TextDragObserver', interfaceMeta);
  setMetadataFor(TextController$update$1, VOID, classMeta, VOID, [TextDragObserver]);
  setMetadataFor(TextController$update$slambda, 'TextController$update$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(MouseSelectionObserver, 'MouseSelectionObserver', interfaceMeta);
  setMetadataFor(TextController$update$mouseSelectionObserver$1, VOID, classMeta, VOID, [MouseSelectionObserver]);
  setMetadataFor(TextController$update$lambda$slambda, 'TextController$update$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(TextController$measurePolicy$1, VOID, classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(TextController, 'TextController', classMeta, VOID, [RememberObserver]);
  setMetadataFor(TextState, 'TextState', classMeta);
  setMetadataFor(Handle, 'Handle', classMeta, Enum);
  setMetadataFor(InternalFoundationTextApi, 'InternalFoundationTextApi', classMeta, VOID, [Annotation]);
  setMetadataFor(KeyCommand, 'KeyCommand', classMeta, Enum);
  setMetadataFor(KeyMapping, 'KeyMapping', interfaceMeta);
  setMetadataFor(defaultKeyMapping$2$1, VOID, classMeta, VOID, [KeyMapping]);
  setMetadataFor(commonKeyMapping$1, VOID, classMeta, VOID, [KeyMapping]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(TextDelegate, 'TextDelegate', classMeta);
  setMetadataFor(ValidatingOffsetMapping, 'ValidatingOffsetMapping', classMeta, VOID, [OffsetMapping]);
  function updateSelection$default(startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection, $super) {
    isStartHandle = isStartHandle === VOID ? true : isStartHandle;
    previousSelection = previousSelection === VOID ? null : previousSelection;
    var tmp;
    if ($super === VOID) {
      tmp = this.updateSelection_xe1zkm_k$(startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection);
    } else {
      var tmp_0 = $super.updateSelection_xe1zkm_k$;
      var tmp_1 = new Offset_0(startHandlePosition);
      var tmp_2 = new Offset_0(endHandlePosition);
      var tmp_3 = previousHandlePosition;
      tmp = tmp_0.call(this, tmp_1, tmp_2, tmp_3 == null ? null : new Offset_0(tmp_3), isStartHandle, containerLayoutCoordinates, adjustment, previousSelection);
    }
    return tmp;
  }
  function getLineHeight(offset) {
    return 0.0;
  }
  setMetadataFor(Selectable, 'Selectable', interfaceMeta);
  setMetadataFor(MultiWidgetSelectionDelegate, 'MultiWidgetSelectionDelegate', classMeta, VOID, [Selectable]);
  setMetadataFor(AnchorInfo, 'AnchorInfo', classMeta);
  setMetadataFor(Selection, 'Selection', classMeta);
  setMetadataFor(SelectionAdjustment, 'SelectionAdjustment', interfaceMeta);
  setMetadataFor(SelectionAdjustment$Companion$None$1, VOID, classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(SelectionAdjustment$Companion$Character$1, VOID, classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(SelectionAdjustment$Companion$Word$1, VOID, classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(SelectionAdjustment$Companion$Paragraph$1, VOID, classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(SelectionAdjustment$Companion$CharacterWithWordAccelerate$1, VOID, classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(SelectionHandleInfo, 'SelectionHandleInfo', classMeta);
  setMetadataFor(SelectionMode, 'SelectionMode', classMeta, Enum);
  setMetadataFor(SelectionMode$Vertical, 'Vertical', classMeta, SelectionMode);
  setMetadataFor(SelectionMode$Horizontal, 'Horizontal', classMeta, SelectionMode);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(SelectionRegistrar, 'SelectionRegistrar', interfaceMeta);
  setMetadataFor(TextSelectionColors, 'TextSelectionColors', classMeta);
  setMetadataFor(ClicksCounter, 'ClicksCounter', classMeta);
  setMetadataFor(mouseSelectionDetector$slambda, 'mouseSelectionDetector$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($awaitMouseEventDownCOROUTINE$6, '$awaitMouseEventDownCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(ScrollbarStyle, 'ScrollbarStyle', classMeta);
  setMetadataFor(NoOp, 'NoOp', classMeta, VOID, [Annotation]);
  setMetadataFor(MappedKeys, 'MappedKeys', objectMeta);
  //endregion
  function background(_this__u8e3s4, color, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = background$lambda(color, shape);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new Background(color, VOID, VOID, shape, tmp$ret$0));
  }
  function _get_color__iw9cfm($this) {
    return $this.color_1;
  }
  function _get_brush__jbhrft($this) {
    return $this.brush_1;
  }
  function _get_alpha__jvxknh($this) {
    return $this.alpha_1;
  }
  function _get_shape__bfkypc($this) {
    return $this.shape_1;
  }
  function _set_lastSize__m2whs($this, _set____db54di) {
    $this.lastSize_1 = _set____db54di;
  }
  function _get_lastSize__dez7yk($this) {
    return $this.lastSize_1;
  }
  function _set_lastLayoutDirection__cwde6y($this, _set____db54di) {
    $this.lastLayoutDirection_1 = _set____db54di;
  }
  function _get_lastLayoutDirection__ecupe($this) {
    return $this.lastLayoutDirection_1;
  }
  function _set_lastOutline__uahd8n($this, _set____db54di) {
    $this.lastOutline_1 = _set____db54di;
  }
  function _get_lastOutline__36wr($this) {
    return $this.lastOutline_1;
  }
  function drawRect(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = $this.color_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new Color(tmp)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.drawRect$default_agcbs4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = $this.brush_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.drawRect$default_8oolwl_k$(tmp1_safe_receiver, VOID, VOID, $this.alpha_1);
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function drawOutline_1(_this__u8e3s4, $this) {
    var tmp;
    var tmp_0;
    var tmp_1 = new Size(_this__u8e3s4.get_size_x9ctfw_k$());
    var tmp_2 = $this.lastSize_1;
    if (equals(tmp_1, tmp_2 == null ? null : new Size(tmp_2))) {
      tmp_0 = _this__u8e3s4.get_layoutDirection_7e37v0_k$().equals($this.lastLayoutDirection_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = ensureNotNull($this.lastOutline_1);
    } else {
      tmp = $this.shape_1.createOutline_p92zi6_k$(_this__u8e3s4.get_size_x9ctfw_k$(), _this__u8e3s4.get_layoutDirection_7e37v0_k$(), _this__u8e3s4);
    }
    var outline = tmp;
    var tmp0_safe_receiver = $this.color_1;
    var tmp_3 = tmp0_safe_receiver;
    if ((tmp_3 == null ? null : new Color(tmp_3)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      drawOutline(_this__u8e3s4, outline, $this.color_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = $this.brush_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      drawOutline_0(_this__u8e3s4, outline, $this.brush_1, $this.alpha_1);
      tmp$ret$1 = Unit_getInstance();
    }
    $this.lastOutline_1 = outline;
    $this.lastSize_1 = _this__u8e3s4.get_size_x9ctfw_k$();
    $this.lastLayoutDirection_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
  }
  function Background(color, brush, alpha, shape, inspectorInfo) {
    color = color === VOID ? null : color;
    brush = brush === VOID ? null : brush;
    alpha = alpha === VOID ? 1.0 : alpha;
    InspectorValueInfo.call(this, inspectorInfo);
    this.color_1 = color;
    this.brush_1 = brush;
    this.alpha_1 = alpha;
    this.shape_1 = shape;
    this.lastSize_1 = null;
    this.lastLayoutDirection_1 = null;
    this.lastOutline_1 = null;
  }
  protoOf(Background).draw_j25tpb_k$ = function (_this__u8e3s4) {
    if (this.shape_1 === get_RectangleShape()) {
      drawRect(_this__u8e3s4, this);
    } else {
      drawOutline_1(_this__u8e3s4, this);
    }
    _this__u8e3s4.drawContent_m0d3yc_k$();
  };
  protoOf(Background).hashCode = function () {
    var tmp0_safe_receiver = this.color_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new Color(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = Color__hashCode_impl_vjyivj(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.brush_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.alpha_1) | 0;
    result = imul(31, result) + hashCode(this.shape_1) | 0;
    return result;
  };
  protoOf(Background).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Background ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3 = this.color_1;
    var tmp_4 = tmp_3 == null ? null : new Color(tmp_3);
    var tmp_5 = otherModifier.color_1;
    if (equals(tmp_4, tmp_5 == null ? null : new Color(tmp_5))) {
      tmp_2 = equals(this.brush_1, otherModifier.brush_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.alpha_1 === otherModifier.alpha_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.shape_1, otherModifier.shape_1);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(Background).toString = function () {
    var tmp = this.color_1;
    return 'Background(color=' + (tmp == null ? null : new Color(tmp)) + ', brush=' + this.brush_1 + ', alpha = ' + this.alpha_1 + ', shape=' + this.shape_1 + ')';
  };
  function background$lambda($color, $shape) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('background');
      $this$null.set_value_rj6yh0_k$(new Color($color));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('color', new Color($color));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('shape', $shape);
      return Unit_getInstance();
    };
  }
  function get_DefaultMarqueeIterations() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeIterations;
  }
  var DefaultMarqueeIterations;
  function get_DefaultMarqueeDelayMillis() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeDelayMillis;
  }
  var DefaultMarqueeDelayMillis;
  function get_DefaultMarqueeSpacing() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeSpacing;
  }
  var DefaultMarqueeSpacing;
  function get_DefaultMarqueeVelocity() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeVelocity;
  }
  var DefaultMarqueeVelocity;
  function sam$androidx_compose_foundation_MarqueeSpacing$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_MarqueeSpacing$0).calculateSpacing_kalx79_k$ = function (_this__u8e3s4, contentWidth, containerWidth) {
    return this.function_1(_this__u8e3s4, contentWidth, containerWidth);
  };
  function MarqueeSpacing$Companion$fractionOfContainer$lambda($fraction) {
    return function ($this$MarqueeSpacing, _anonymous_parameter_0__qggqh8, width) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = $fraction * width;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      return tmp$ret$0;
    };
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).fractionOfContainer_x5152e_k$ = function (fraction) {
    var tmp = MarqueeSpacing$Companion$fractionOfContainer$lambda(fraction);
    return new sam$androidx_compose_foundation_MarqueeSpacing$0(tmp);
  };
  var Companion_instance;
  function Companion_getInstance_25() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function MarqueeSpacing() {
  }
  var properties_initialized_BasicMarquee_kt_zfhsq2;
  function _init_properties_BasicMarquee_kt__84kax8() {
    if (properties_initialized_BasicMarquee_kt_zfhsq2) {
    } else {
      properties_initialized_BasicMarquee_kt_zfhsq2 = true;
      DefaultMarqueeIterations = 3;
      DefaultMarqueeDelayMillis = 1200;
      DefaultMarqueeSpacing = Companion_getInstance_25().fractionOfContainer_x5152e_k$(1.0 / 3.0);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(30);
      DefaultMarqueeVelocity = tmp$ret$0;
    }
  }
  function border(_this__u8e3s4, border, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    return border_0(_this__u8e3s4, border.get_width_76ubx4_k$(), border.get_brush_ipcjyp_k$(), shape);
  }
  function border_0(_this__u8e3s4, width, brush, shape) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = border$lambda(width, brush, shape);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectorInfo = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp0_inspectorInfo, border$lambda_0(width, shape, brush));
  }
  function _set_imageBitmap__59o72z($this, _set____db54di) {
    $this.imageBitmap_1 = _set____db54di;
  }
  function _get_imageBitmap__zh1ok9($this) {
    return $this.imageBitmap_1;
  }
  function _set_canvas__plaszl($this, _set____db54di) {
    $this.canvas_1 = _set____db54di;
  }
  function _get_canvas__o4k8ct($this) {
    return $this.canvas_1;
  }
  function _set_canvasDrawScope__6hen3n($this, _set____db54di) {
    $this.canvasDrawScope_1 = _set____db54di;
  }
  function _get_canvasDrawScope__3mbkex($this) {
    return $this.canvasDrawScope_1;
  }
  function _set_borderPath__3zk3ay($this, _set____db54di) {
    $this.borderPath_1 = _set____db54di;
  }
  function _get_borderPath__j1sog6($this) {
    return $this.borderPath_1;
  }
  function component1($this) {
    return $this.imageBitmap_1;
  }
  function component2($this) {
    return $this.canvas_1;
  }
  function component3($this) {
    return $this.canvasDrawScope_1;
  }
  function component4($this) {
    return $this.borderPath_1;
  }
  function BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath) {
    imageBitmap = imageBitmap === VOID ? null : imageBitmap;
    canvas = canvas === VOID ? null : canvas;
    canvasDrawScope = canvasDrawScope === VOID ? null : canvasDrawScope;
    borderPath = borderPath === VOID ? null : borderPath;
    this.imageBitmap_1 = imageBitmap;
    this.canvas_1 = canvas;
    this.canvasDrawScope_1 = canvasDrawScope;
    this.borderPath_1 = borderPath;
  }
  protoOf(BorderCache).drawBorderCache_wsnl8j_k$ = function (_this__u8e3s4, borderSize, config, block) {
    var targetImageBitmap = this.imageBitmap_1;
    var targetCanvas = this.canvas_1;
    var tmp;
    var tmp0_safe_receiver = targetImageBitmap;
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_config_df1eav_k$();
    if (equals(tmp_0 == null ? null : new ImageBitmapConfig(tmp_0), new ImageBitmapConfig(Companion_getInstance().get_Argb8888_tpu17z_k$()))) {
      tmp = true;
    } else {
      var tmp_1 = new ImageBitmapConfig(config);
      var tmp1_safe_receiver = targetImageBitmap;
      var tmp_2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_config_df1eav_k$();
      tmp = equals(tmp_1, tmp_2 == null ? null : new ImageBitmapConfig(tmp_2));
    }
    var compatibleConfig = tmp;
    if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_width_j0q4yl_k$()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_height_e7t92o_k$()) ? true : !compatibleConfig) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = ImageBitmap(_IntSize___get_width__impl__d9yl4o(borderSize), _IntSize___get_height__impl__prv63b(borderSize), config);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.imageBitmap_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      targetImageBitmap = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp1_also = Canvas(targetImageBitmap);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.canvas_1 = tmp1_also;
      tmp$ret$1 = tmp1_also;
      targetCanvas = tmp$ret$1;
    }
    var tmp2_elvis_lhs = this.canvasDrawScope_1;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp2_also = new CanvasDrawScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.canvasDrawScope_1 = tmp2_also;
      tmp$ret$2 = tmp2_also;
      tmp_3 = tmp$ret$2;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var targetDrawScope = tmp_3;
    var drawSize = toSize(borderSize);
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var tmp5_draw = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
    var tmp6_draw = targetCanvas;
    var tmp0_container = targetDrawScope.get_drawParams_ncgfpp_k$();
    var prevDensity = tmp0_container.component1_7eebsc_k$();
    var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
    var prevCanvas = tmp0_container.component3_7eebsa_k$();
    var prevSize = tmp0_container.component4_e3pqs9_k$();
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp3_apply = targetDrawScope.get_drawParams_ncgfpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp3_apply.set_density_kzqph6_k$(_this__u8e3s4);
    tmp3_apply.set_layoutDirection_g6d9ui_k$(tmp5_draw);
    tmp3_apply.set_canvas_eyjvr_k$(tmp6_draw);
    tmp3_apply.set_size_xj1bzm_k$(drawSize);
    tmp$ret$3 = tmp3_apply;
    tmp6_draw.save_erlm4_k$();
    // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
    targetDrawScope.drawRect$default_agcbs4_k$(Companion_getInstance_0().get_Black_wh3yn9_k$(), VOID, drawSize, VOID, VOID, VOID, Companion_getInstance_1().get_Clear_9hhqh4_k$());
    block(targetDrawScope);
    tmp6_draw.restore_a2id37_k$();
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp4_apply = targetDrawScope.get_drawParams_ncgfpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp4_apply.set_density_kzqph6_k$(prevDensity);
    tmp4_apply.set_layoutDirection_g6d9ui_k$(prevLayoutDirection);
    tmp4_apply.set_canvas_eyjvr_k$(prevCanvas);
    tmp4_apply.set_size_xj1bzm_k$(prevSize);
    tmp$ret$4 = tmp4_apply;
    targetImageBitmap.prepareToDraw_sbmxaj_k$();
    return targetImageBitmap;
  };
  protoOf(BorderCache).obtainPath_y7q9hy_k$ = function () {
    var tmp0_elvis_lhs = this.borderPath_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.obtainPath.<anonymous>' call
      this.borderPath_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(BorderCache).copy_xq3glk_k$ = function (imageBitmap, canvas, canvasDrawScope, borderPath) {
    return new BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath);
  };
  protoOf(BorderCache).copy$default_8idv0z_k$ = function (imageBitmap, canvas, canvasDrawScope, borderPath, $super) {
    imageBitmap = imageBitmap === VOID ? this.imageBitmap_1 : imageBitmap;
    canvas = canvas === VOID ? this.canvas_1 : canvas;
    canvasDrawScope = canvasDrawScope === VOID ? this.canvasDrawScope_1 : canvasDrawScope;
    borderPath = borderPath === VOID ? this.borderPath_1 : borderPath;
    return $super === VOID ? this.copy_xq3glk_k$(imageBitmap, canvas, canvasDrawScope, borderPath) : $super.copy_xq3glk_k$.call(this, imageBitmap, canvas, canvasDrawScope, borderPath);
  };
  protoOf(BorderCache).toString = function () {
    return 'BorderCache(imageBitmap=' + this.imageBitmap_1 + ', canvas=' + this.canvas_1 + ', canvasDrawScope=' + this.canvasDrawScope_1 + ', borderPath=' + this.borderPath_1 + ')';
  };
  protoOf(BorderCache).hashCode = function () {
    var result = this.imageBitmap_1 == null ? 0 : hashCode(this.imageBitmap_1);
    result = imul(result, 31) + (this.canvas_1 == null ? 0 : hashCode(this.canvas_1)) | 0;
    result = imul(result, 31) + (this.canvasDrawScope_1 == null ? 0 : hashCode(this.canvasDrawScope_1)) | 0;
    result = imul(result, 31) + (this.borderPath_1 == null ? 0 : hashCode(this.borderPath_1)) | 0;
    return result;
  };
  protoOf(BorderCache).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderCache))
      return false;
    var tmp0_other_with_cast = other instanceof BorderCache ? other : THROW_CCE();
    if (!equals(this.imageBitmap_1, tmp0_other_with_cast.imageBitmap_1))
      return false;
    if (!equals(this.canvas_1, tmp0_other_with_cast.canvas_1))
      return false;
    if (!equals(this.canvasDrawScope_1, tmp0_other_with_cast.canvasDrawScope_1))
      return false;
    if (!equals(this.borderPath_1, tmp0_other_with_cast.borderPath_1))
      return false;
    return true;
  };
  function drawContentWithoutBorder(_this__u8e3s4) {
    return _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawContentWithoutBorder$lambda);
  }
  function drawGenericBorder(_this__u8e3s4, borderCacheRef, brush, outline, fillArea, strokeWidth) {
    var tmp;
    if (fillArea) {
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawGenericBorder$lambda(outline, brush));
    } else {
      var config;
      var colorFilter;
      if (brush instanceof SolidColor) {
        config = Companion_getInstance().get_Alpha8_zceb6n_k$();
        colorFilter = Companion_getInstance_2().tint$default_or1h4c_k$(brush.get_value_puk9xv_k$());
      } else {
        config = Companion_getInstance().get_Argb8888_tpu17z_k$();
        colorFilter = null;
      }
      var pathBounds = outline.get_path_wos8ry_k$().getBounds_568lnv_k$();
      var borderCache = obtain(borderCacheRef);
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = borderCache.obtainPath_y7q9hy_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>' call
      tmp0_apply.reset_5tn5dq_k$();
      tmp0_apply.addRect_xu2nic_k$(pathBounds);
      tmp0_apply.op_eh4rey_k$(tmp0_apply, outline.get_path_wos8ry_k$(), Companion_getInstance_3().get_Difference_61syb0_k$());
      tmp$ret$0 = tmp0_apply;
      var maskPath = tmp$ret$0;
      var cacheImageBitmap;
      var tmp$ret$1;
      // Inline function 'kotlin.math.ceil' call
      var tmp1_ceil = pathBounds.get_width_j0q4yl_k$();
      tmp$ret$1 = Math.ceil(tmp1_ceil);
      var tmp_0 = numberToInt(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'kotlin.math.ceil' call
      var tmp2_ceil = pathBounds.get_height_e7t92o_k$();
      tmp$ret$2 = Math.ceil(tmp2_ceil);
      var pathBoundsSize = IntSize(tmp_0, numberToInt(tmp$ret$2));
      var tmp$ret$12;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache' call
      var targetImageBitmap = borderCache.imageBitmap_1;
      var targetCanvas = borderCache.canvas_1;
      var tmp_1;
      var tmp0_safe_receiver = targetImageBitmap;
      var tmp_2 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_config_df1eav_k$();
      if (equals(tmp_2 == null ? null : new ImageBitmapConfig(tmp_2), new ImageBitmapConfig(Companion_getInstance().get_Argb8888_tpu17z_k$()))) {
        tmp_1 = true;
      } else {
        var tmp_3 = new ImageBitmapConfig(config);
        var tmp1_safe_receiver = targetImageBitmap;
        var tmp_4 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_config_df1eav_k$();
        tmp_1 = equals(tmp_3, tmp_4 == null ? null : new ImageBitmapConfig(tmp_4));
      }
      var compatibleConfig = tmp_1;
      if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_width_j0q4yl_k$()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_height_e7t92o_k$()) ? true : !compatibleConfig) {
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        var tmp0_also = ImageBitmap(_IntSize___get_width__impl__d9yl4o(pathBoundsSize), _IntSize___get_height__impl__prv63b(pathBoundsSize), config);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        borderCache.imageBitmap_1 = tmp0_also;
        tmp$ret$3 = tmp0_also;
        targetImageBitmap = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.also' call
        var tmp1_also = Canvas(targetImageBitmap);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        borderCache.canvas_1 = tmp1_also;
        tmp$ret$4 = tmp1_also;
        targetCanvas = tmp$ret$4;
      }
      var tmp2_elvis_lhs = borderCache.canvasDrawScope_1;
      var tmp_5;
      if (tmp2_elvis_lhs == null) {
        var tmp$ret$5;
        // Inline function 'kotlin.also' call
        var tmp2_also = new CanvasDrawScope();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        borderCache.canvasDrawScope_1 = tmp2_also;
        tmp$ret$5 = tmp2_also;
        tmp_5 = tmp$ret$5;
      } else {
        tmp_5 = tmp2_elvis_lhs;
      }
      var targetDrawScope = tmp_5;
      var drawSize = toSize(pathBoundsSize);
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
      var tmp5_draw = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
      var tmp6_draw = targetCanvas;
      var tmp0_container = targetDrawScope.get_drawParams_ncgfpp_k$();
      var prevDensity = tmp0_container.component1_7eebsc_k$();
      var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
      var prevCanvas = tmp0_container.component3_7eebsa_k$();
      var prevSize = tmp0_container.component4_e3pqs9_k$();
      var tmp$ret$6;
      // Inline function 'kotlin.apply' call
      var tmp3_apply = targetDrawScope.get_drawParams_ncgfpp_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      tmp3_apply.set_density_kzqph6_k$(_this__u8e3s4);
      tmp3_apply.set_layoutDirection_g6d9ui_k$(tmp5_draw);
      tmp3_apply.set_canvas_eyjvr_k$(tmp6_draw);
      tmp3_apply.set_size_xj1bzm_k$(drawSize);
      tmp$ret$6 = tmp3_apply;
      tmp6_draw.save_erlm4_k$();
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      targetDrawScope.drawRect$default_agcbs4_k$(Companion_getInstance_0().get_Black_wh3yn9_k$(), VOID, drawSize, VOID, VOID, VOID, Companion_getInstance_1().get_Clear_9hhqh4_k$());
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var tmp0_translate = -pathBounds.get_left_woprgw_k$();
      var tmp1_translate = -pathBounds.get_top_18ivbo_k$();
      targetDrawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(tmp0_translate, tmp1_translate);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>' call
      targetDrawScope.drawPath$default_oxe8h4_k$(outline.get_path_wos8ry_k$(), brush, VOID, new Stroke(strokeWidth * 2));
      var tmp$ret$9;
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
      var tmp2_scale = (_Size___get_width__impl__58y75t(targetDrawScope.get_size_x9ctfw_k$()) + 1) / _Size___get_width__impl__58y75t(targetDrawScope.get_size_x9ctfw_k$());
      var tmp3_scale = (_Size___get_height__impl__a04p02(targetDrawScope.get_size_x9ctfw_k$()) + 1) / _Size___get_height__impl__a04p02(targetDrawScope.get_size_x9ctfw_k$());
      var tmp4_scale = targetDrawScope.get_center_568eeq_k$();
      var tmp$ret$8;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      var tmp$ret$7;
      // Inline function 'kotlin.with' call
      var tmp0_with = targetDrawScope.get_drawContext_ffwztu_k$();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp0_with.get_size_x9ctfw_k$();
      tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_with.get_transform_px941v_k$();
      tmp1__anonymous__uwfjfc.scale_qp5ya8_k$(tmp2_scale, tmp3_scale, tmp4_scale);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      targetDrawScope.drawPath$default_oxe8h4_k$(maskPath, brush, VOID, VOID, VOID, Companion_getInstance_1().get_Clear_9hhqh4_k$());
      tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
      tmp0_with.set_size_xj1bzm_k$(previousSize);
      tmp$ret$7 = Unit_getInstance();
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      targetDrawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(-tmp0_translate, -tmp1_translate);
      tmp6_draw.restore_a2id37_k$();
      var tmp$ret$10;
      // Inline function 'kotlin.apply' call
      var tmp4_apply = targetDrawScope.get_drawParams_ncgfpp_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      tmp4_apply.set_density_kzqph6_k$(prevDensity);
      tmp4_apply.set_layoutDirection_g6d9ui_k$(prevLayoutDirection);
      tmp4_apply.set_canvas_eyjvr_k$(prevCanvas);
      tmp4_apply.set_size_xj1bzm_k$(prevSize);
      tmp$ret$10 = tmp4_apply;
      targetImageBitmap.prepareToDraw_sbmxaj_k$();
      tmp$ret$11 = targetImageBitmap;
      cacheImageBitmap = tmp$ret$11;
      tmp$ret$12 = Unit_getInstance();
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawGenericBorder$lambda_0(pathBounds, cacheImageBitmap, pathBoundsSize, colorFilter));
    }
    return tmp;
  }
  function drawRoundRectBorder(_this__u8e3s4, borderCacheRef, brush, outline, topLeft, borderSize, fillArea, strokeWidth) {
    var tmp;
    if (get_isSimple(outline.get_roundRect_8fhall_k$())) {
      var cornerRadius = outline.get_roundRect_8fhall_k$().get_topLeftCornerRadius_nzteym_k$();
      var halfStroke = strokeWidth / 2;
      var borderStroke = new Stroke(strokeWidth);
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawRoundRectBorder$lambda(fillArea, brush, cornerRadius, halfStroke, strokeWidth, topLeft, borderSize, borderStroke));
    } else {
      var path = obtain(borderCacheRef).obtainPath_y7q9hy_k$();
      var roundedRectPath = createRoundRectPath(path, outline.get_roundRect_8fhall_k$(), strokeWidth, fillArea);
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawRoundRectBorder$lambda_0(roundedRectPath, brush));
    }
    return tmp;
  }
  function drawRectBorder(_this__u8e3s4, brush, topLeft, borderSize, fillArea, strokeWidthPx) {
    var rectTopLeft = fillArea ? Companion_getInstance_4().get_Zero_sctq3f_k$() : topLeft;
    var size = fillArea ? _this__u8e3s4.get_size_x9ctfw_k$() : borderSize;
    var style = fillArea ? Fill_getInstance() : new Stroke(strokeWidthPx);
    return _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawRectBorder$lambda(brush, rectTopLeft, size, style));
  }
  function obtain(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_value_j01efc_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new BorderCache();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.obtain.<anonymous>' call
      _this__u8e3s4.set_value_89wlwl_k$(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function shrink(_this__u8e3s4, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4) - value;
    tmp$ret$0 = Math.max(0.0, tmp0_max);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp1_max = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4) - value;
    tmp$ret$1 = Math.max(0.0, tmp1_max);
    return CornerRadius(tmp, tmp$ret$1);
  }
  function createRoundRectPath(targetPath, roundedRect, strokeWidth, fillArea) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>' call
    targetPath.reset_5tn5dq_k$();
    targetPath.addRoundRect_kr3fpw_k$(roundedRect);
    if (!fillArea) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>.<anonymous>' call
      tmp0_apply.addRoundRect_kr3fpw_k$(createInsetRoundedRect(strokeWidth, roundedRect));
      tmp$ret$0 = tmp0_apply;
      var insetPath = tmp$ret$0;
      targetPath.op_eh4rey_k$(targetPath, insetPath, Companion_getInstance_3().get_Difference_61syb0_k$());
    }
    tmp$ret$1 = targetPath;
    return tmp$ret$1;
  }
  function createInsetRoundedRect(widthPx, roundedRect) {
    var tmp0_right = roundedRect.get_width_j0q4yl_k$() - widthPx;
    var tmp1_bottom = roundedRect.get_height_e7t92o_k$() - widthPx;
    var tmp2_topLeftCornerRadius = shrink(roundedRect.get_topLeftCornerRadius_nzteym_k$(), widthPx);
    var tmp3_topRightCornerRadius = shrink(roundedRect.get_topRightCornerRadius_h21xrz_k$(), widthPx);
    var tmp4_bottomLeftCornerRadius = shrink(roundedRect.get_bottomLeftCornerRadius_na53na_k$(), widthPx);
    var tmp5_bottomRightCornerRadius = shrink(roundedRect.get_bottomRightCornerRadius_vv4dft_k$(), widthPx);
    return new RoundRect(widthPx, widthPx, tmp0_right, tmp1_bottom, tmp2_topLeftCornerRadius, tmp3_topRightCornerRadius, tmp5_bottomRightCornerRadius, tmp4_bottomLeftCornerRadius);
  }
  function border$lambda($width, $brush, $shape) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('border');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('width', new Dp($width));
      if ($brush instanceof SolidColor) {
        $this$null.get_properties_zhllqc_k$().set_y753qn_k$('color', new Color($brush.get_value_puk9xv_k$()));
        $this$null.set_value_rj6yh0_k$(new Color($brush.get_value_puk9xv_k$()));
      } else {
        $this$null.get_properties_zhllqc_k$().set_y753qn_k$('brush', $brush);
      }
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('shape', $shape);
      return Unit_getInstance();
    };
  }
  function border$lambda$lambda($width, $shape, $borderCacheRef, $brush) {
    return function ($this$drawWithCache) {
      var hasValidBorderParams = $this$drawWithCache.toPx_u0ojv5_k$($width) >= 0.0 ? _Size___get_minDimension__impl__4iso0r($this$drawWithCache.get_size_x9ctfw_k$()) > 0.0 : false;
      var tmp;
      if (!hasValidBorderParams) {
        tmp = drawContentWithoutBorder($this$drawWithCache);
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.math.min' call
        var tmp_0;
        if (equals($width, Companion_getInstance_5().get_Hairline_1wtat6_k$())) {
          tmp_0 = 1.0;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.math.ceil' call
          var tmp0_ceil = $this$drawWithCache.toPx_u0ojv5_k$($width);
          tmp$ret$0 = Math.ceil(tmp0_ceil);
          tmp_0 = tmp$ret$0;
        }
        var tmp2_min = tmp_0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.ceil' call
        var tmp1_ceil = _Size___get_minDimension__impl__4iso0r($this$drawWithCache.get_size_x9ctfw_k$()) / 2;
        tmp$ret$1 = Math.ceil(tmp1_ceil);
        var tmp3_min = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp2_min, tmp3_min);
        var strokeWidthPx = tmp$ret$2;
        var halfStroke = strokeWidthPx / 2;
        var topLeft = Offset(halfStroke, halfStroke);
        var borderSize = Size_0(_Size___get_width__impl__58y75t($this$drawWithCache.get_size_x9ctfw_k$()) - strokeWidthPx, _Size___get_height__impl__a04p02($this$drawWithCache.get_size_x9ctfw_k$()) - strokeWidthPx);
        var fillArea = strokeWidthPx * 2 > _Size___get_minDimension__impl__4iso0r($this$drawWithCache.get_size_x9ctfw_k$());
        var outline = $shape.createOutline_p92zi6_k$($this$drawWithCache.get_size_x9ctfw_k$(), $this$drawWithCache.get_layoutDirection_7e37v0_k$(), $this$drawWithCache);
        var tmp_1;
        if (outline instanceof Generic) {
          tmp_1 = drawGenericBorder($this$drawWithCache, $borderCacheRef, $brush, outline, fillArea, strokeWidthPx);
        } else {
          if (outline instanceof Rounded) {
            tmp_1 = drawRoundRectBorder($this$drawWithCache, $borderCacheRef, $brush, outline, topLeft, borderSize, fillArea, strokeWidthPx);
          } else {
            if (outline instanceof Rectangle) {
              tmp_1 = drawRectBorder($this$drawWithCache, $brush, topLeft, borderSize, fillArea, strokeWidthPx);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
        tmp = tmp_1;
      }
      return tmp;
    };
  }
  function border$lambda_0($width, $shape, $brush) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-1498088849);
      sourceInformation($composer_0, 'C97@4024L31,99@4110L2112:Border.kt#71ulvw');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1498088849, $changed, -1, 'androidx.compose.foundation.border.<anonymous> (Border.kt:93)');
        tmp = Unit_getInstance();
      }
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.border.<anonymous>.<anonymous>' call
        tmp$ret$0 = new Ref();
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      var borderCacheRef = tmp$ret$4;
      var tmp_2 = Companion_getInstance_7();
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp6_remember$composable = $composer_0;
      var $composer_2 = tmp6_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-1603429786);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [new Dp($width), $shape, borderCacheRef, $brush];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_2.changed_ga7h3f_k$(key));
      }
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp4_cache = $composer_2;
      var tmp5_cache = invalid;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp3_let = tmp4_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp5_cache ? true : tmp3_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.foundation.border.<anonymous>.<anonymous>' call
        tmp$ret$5 = border$lambda$lambda($width, $shape, borderCacheRef, $brush);
        var value_0 = tmp$ret$5;
        tmp4_cache.updateRememberedValue_l1colo_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp3_let;
      }
      tmp$ret$6 = tmp_3;
      tmp$ret$7 = tmp$ret$6;
      var tmp_4 = tmp$ret$7;
      tmp$ret$8 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      var tmp0_1 = $this$composed.then_5qw5wu_k$(drawWithCache(tmp_2, tmp$ret$9));
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_1;
    };
  }
  function drawContentWithoutBorder$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.drawContent_m0d3yc_k$();
    return Unit_getInstance();
  }
  function drawGenericBorder$lambda($outline, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      $this$onDrawWithContent.drawPath$default_oxe8h4_k$($outline.get_path_wos8ry_k$(), $brush);
      return Unit_getInstance();
    };
  }
  function drawGenericBorder$lambda_0($pathBounds, $cacheImageBitmap, $pathBoundsSize, $colorFilter) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      var tmp0_translate = $pathBounds.get_left_woprgw_k$();
      var tmp1_translate = $pathBounds.get_top_18ivbo_k$();
      $this$onDrawWithContent.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(tmp0_translate, tmp1_translate);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>' call
      $this$onDrawWithContent.drawImage$default_q3yuzr_k$($cacheImageBitmap, VOID, $pathBoundsSize, VOID, VOID, VOID, VOID, $colorFilter);
      $this$onDrawWithContent.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(-tmp0_translate, -tmp1_translate);
      return Unit_getInstance();
    };
  }
  function drawRoundRectBorder$lambda($fillArea, $brush, $cornerRadius, $halfStroke, $strokeWidth, $topLeft, $borderSize, $borderStroke) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      var tmp;
      if ($fillArea) {
        $this$onDrawWithContent.drawRoundRect$default_mlaxib_k$($brush, VOID, VOID, $cornerRadius);
        tmp = Unit_getInstance();
      } else if (_CornerRadius___get_x__impl__1594cn($cornerRadius) < $halfStroke) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var tmp2_clipRect = _Size___get_width__impl__58y75t($this$onDrawWithContent.get_size_x9ctfw_k$()) - $strokeWidth;
        var tmp3_clipRect = _Size___get_height__impl__a04p02($this$onDrawWithContent.get_size_x9ctfw_k$()) - $strokeWidth;
        var tmp4_clipRect = Companion_getInstance_8().get_Difference_tu92bl_k$();
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = $this$onDrawWithContent.get_drawContext_ffwztu_k$();
        // Inline function 'kotlin.contracts.contract' call
        var previousSize = tmp0_with.get_size_x9ctfw_k$();
        tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_with.get_transform_px941v_k$();
        tmp1__anonymous__uwfjfc.clipRect_si0ig1_k$($strokeWidth, $strokeWidth, tmp2_clipRect, tmp3_clipRect, tmp4_clipRect);
        // Inline function 'androidx.compose.foundation.drawRoundRectBorder.<anonymous>.<anonymous>' call
        $this$onDrawWithContent.drawRoundRect$default_mlaxib_k$($brush, VOID, VOID, $cornerRadius);
        tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
        tmp0_with.set_size_xj1bzm_k$(previousSize);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        $this$onDrawWithContent.drawRoundRect$default_mlaxib_k$($brush, $topLeft, $borderSize, shrink($cornerRadius, $halfStroke), VOID, $borderStroke);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function drawRoundRectBorder$lambda_0($roundedRectPath, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      $this$onDrawWithContent.drawPath$default_oxe8h4_k$($roundedRectPath, $brush);
      return Unit_getInstance();
    };
  }
  function drawRectBorder$lambda($brush, $rectTopLeft, $size, $style) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      $this$onDrawWithContent.drawRect$default_8oolwl_k$($brush, $rectTopLeft, $size, VOID, $style);
      return Unit_getInstance();
    };
  }
  function get_$stableprop() {
    return 0;
  }
  function BorderStroke(width, brush) {
    this.width_1 = width;
    this.brush_1 = brush;
    this.$stable_1 = 0;
  }
  protoOf(BorderStroke).get_width_76ubx4_k$ = function () {
    return this.width_1;
  };
  protoOf(BorderStroke).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(BorderStroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderStroke))
      return false;
    if (!equals(this.width_1, other.width_1))
      return false;
    if (!equals(this.brush_1, other.brush_1))
      return false;
    return true;
  };
  protoOf(BorderStroke).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.width_1);
    result = imul(31, result) + hashCode(this.brush_1) | 0;
    return result;
  };
  protoOf(BorderStroke).toString = function () {
    return 'BorderStroke(width=' + new Dp(this.width_1) + ', brush=' + this.brush_1 + ')';
  };
  protoOf(BorderStroke).copy_5wp6h0_k$ = function (width, brush) {
    return new BorderStroke(width, brush);
  };
  protoOf(BorderStroke).copy$default_c4vzc1_k$ = function (width, brush, $super) {
    width = width === VOID ? this.width_1 : width;
    brush = brush === VOID ? this.brush_1 : brush;
    return $super === VOID ? this.copy_5wp6h0_k$(width, brush) : $super.copy_5wp6h0_k$.call(this, new Dp(width), brush);
  };
  function get_MaxSupportedElevation() {
    _init_properties_ClipScrollableContainer_kt__60yb60();
    return MaxSupportedElevation;
  }
  var MaxSupportedElevation;
  function get_HorizontalScrollableClipModifier() {
    _init_properties_ClipScrollableContainer_kt__60yb60();
    return HorizontalScrollableClipModifier;
  }
  var HorizontalScrollableClipModifier;
  function get_VerticalScrollableClipModifier() {
    _init_properties_ClipScrollableContainer_kt__60yb60();
    return VerticalScrollableClipModifier;
  }
  var VerticalScrollableClipModifier;
  function HorizontalScrollableClipModifier$1() {
  }
  protoOf(HorizontalScrollableClipModifier$1).createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.<no name provided>.createOutline.<anonymous>' call
    tmp$ret$0 = density.roundToPx_hl1u8z_k$(get_MaxSupportedElevation());
    tmp$ret$1 = tmp$ret$0;
    var inflateSize = tmp$ret$1;
    return new Rectangle(new Rect(0.0, -inflateSize, _Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size) + inflateSize));
  };
  function VerticalScrollableClipModifier$1() {
  }
  protoOf(VerticalScrollableClipModifier$1).createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.<no name provided>.createOutline.<anonymous>' call
    tmp$ret$0 = density.roundToPx_hl1u8z_k$(get_MaxSupportedElevation());
    tmp$ret$1 = tmp$ret$0;
    var inflateSize = tmp$ret$1;
    return new Rectangle(new Rect(-inflateSize, 0.0, _Size___get_width__impl__58y75t(size) + inflateSize, _Size___get_height__impl__a04p02(size)));
  };
  var properties_initialized_ClipScrollableContainer_kt_l2hne;
  function _init_properties_ClipScrollableContainer_kt__60yb60() {
    if (properties_initialized_ClipScrollableContainer_kt_l2hne) {
    } else {
      properties_initialized_ClipScrollableContainer_kt_l2hne = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(30);
      MaxSupportedElevation = tmp$ret$0;
      var tmp = Companion_getInstance_7();
      HorizontalScrollableClipModifier = clip(tmp, new HorizontalScrollableClipModifier$1());
      var tmp_0 = Companion_getInstance_7();
      VerticalScrollableClipModifier = clip(tmp_0, new VerticalScrollableClipModifier$1());
    }
  }
  function isSystemInDarkTheme$composable($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1894054335, 'C(isSystemInDarkTheme$composable)40@1721L22:DarkTheme.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1894054335, $changed, -1, 'androidx.compose.foundation.isSystemInDarkTheme$composable (DarkTheme.kt:40)');
    }
    var tmp0 = _isSystemInDarkTheme$composable($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function ExperimentalFoundationApi() {
  }
  protoOf(ExperimentalFoundationApi).equals = function (other) {
    if (!(other instanceof ExperimentalFoundationApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalFoundationApi ? other : THROW_CCE();
    return true;
  };
  protoOf(ExperimentalFoundationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalFoundationApi).toString = function () {
    return '@androidx.compose.foundation.ExperimentalFoundationApi()';
  };
  function get_focusGroupInspectorInfo() {
    _init_properties_Focusable_kt__2q5fls();
    return focusGroupInspectorInfo;
  }
  var focusGroupInspectorInfo;
  function focusGroupInspectorInfo$lambda($this$null) {
    _init_properties_Focusable_kt__2q5fls();
    // Inline function 'androidx.compose.foundation.focusGroupInspectorInfo.<anonymous>' call
    $this$null.set_name_1v3553_k$('focusGroup');
    return Unit_getInstance();
  }
  var properties_initialized_Focusable_kt_k4lele;
  function _init_properties_Focusable_kt__2q5fls() {
    if (properties_initialized_Focusable_kt_k4lele) {
    } else {
      properties_initialized_Focusable_kt_k4lele = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
      var tmp;
      if (get_isDebugInspectorInfoEnabled()) {
        tmp = focusGroupInspectorInfo$lambda;
      } else {
        tmp = get_NoInspectorInfo();
      }
      tmp$ret$0 = tmp;
      focusGroupInspectorInfo = new InspectableModifier(tmp$ret$0);
    }
  }
  function get_ModifierLocalFocusedBoundsObserver() {
    _init_properties_FocusedBounds_kt__l9iahm();
    return ModifierLocalFocusedBoundsObserver;
  }
  var ModifierLocalFocusedBoundsObserver;
  function ModifierLocalFocusedBoundsObserver$lambda() {
    _init_properties_FocusedBounds_kt__l9iahm();
    return null;
  }
  var properties_initialized_FocusedBounds_kt_k69nss;
  function _init_properties_FocusedBounds_kt__l9iahm() {
    if (properties_initialized_FocusedBounds_kt_k69nss) {
    } else {
      properties_initialized_FocusedBounds_kt_k69nss = true;
      ModifierLocalFocusedBoundsObserver = modifierLocalOf(ModifierLocalFocusedBoundsObserver$lambda);
    }
  }
  function get_LocalIndication() {
    _init_properties_Indication_kt__w3ndj0();
    return LocalIndication;
  }
  var LocalIndication;
  function Indication() {
  }
  function _get_isPressed__f6cq7t($this) {
    return $this.isPressed_1;
  }
  function _get_isHovered__wio4dc($this) {
    return $this.isHovered_1;
  }
  function _get_isFocused__xvmarg($this) {
    return $this.isFocused_1;
  }
  function DefaultDebugIndicationInstance(isPressed, isHovered, isFocused) {
    this.isPressed_1 = isPressed;
    this.isHovered_1 = isHovered;
    this.isFocused_1 = isFocused;
  }
  protoOf(DefaultDebugIndicationInstance).drawIndication_4sht7n_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.drawContent_m0d3yc_k$();
    if (this.isPressed_1.get_value_j01efc_k$()) {
      _this__u8e3s4.drawRect$default_agcbs4_k$(Color__copy$default_impl_ectz3s(Companion_getInstance_0().get_Black_wh3yn9_k$(), 0.3), VOID, _this__u8e3s4.get_size_x9ctfw_k$());
    } else if (this.isHovered_1.get_value_j01efc_k$() ? true : this.isFocused_1.get_value_j01efc_k$()) {
      _this__u8e3s4.drawRect$default_agcbs4_k$(Color__copy$default_impl_ectz3s(Companion_getInstance_0().get_Black_wh3yn9_k$(), 0.1), VOID, _this__u8e3s4.get_size_x9ctfw_k$());
    }
  };
  function DefaultDebugIndication() {
    DefaultDebugIndication_instance = this;
  }
  protoOf(DefaultDebugIndication).rememberUpdatedInstance_1mtpmt_k$ = function (interactionSource) {
    illegalDecoyCallException('rememberUpdatedInstance');
  };
  protoOf(DefaultDebugIndication).rememberUpdatedInstance$composable_3l23r4_k$ = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(202464790);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance$composable)183@7542L25,184@7610L25,185@7678L25,186@7719L115:Indication.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(202464790, $changed, -1, 'androidx.compose.foundation.DefaultDebugIndication.rememberUpdatedInstance$composable (Indication.kt:182)');
    }
    var isPressed = collectIsPressedAsState$composable(interactionSource, $composer_0, 14 & $changed);
    var isHovered = collectIsHoveredAsState$composable(interactionSource, $composer_0, 14 & $changed);
    var isFocused = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed);
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.changed_ga7h3f_k$(interactionSource);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.DefaultDebugIndication.rememberUpdatedInstance$composable.<anonymous>' call
      tmp$ret$0 = new DefaultDebugIndicationInstance(isPressed, isHovered, isFocused);
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
  };
  var DefaultDebugIndication_instance;
  function DefaultDebugIndication_getInstance() {
    if (DefaultDebugIndication_instance == null)
      new DefaultDebugIndication();
    return DefaultDebugIndication_instance;
  }
  function IndicationInstance() {
  }
  function LocalIndication$lambda() {
    _init_properties_Indication_kt__w3ndj0();
    return DefaultDebugIndication_getInstance();
  }
  var properties_initialized_Indication_kt_w71gpq;
  function _init_properties_Indication_kt__w3ndj0() {
    if (properties_initialized_Indication_kt_w71gpq) {
    } else {
      properties_initialized_Indication_kt_w71gpq = true;
      LocalIndication = staticCompositionLocalOf(LocalIndication$lambda);
    }
  }
  function fastMapIndexedNotNull(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.foundation.fastMapIndexedNotNull.<anonymous>' call
        var tmp0_safe_receiver = transform(index, item);
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          target.add_1j60pz_k$(tmp0_safe_receiver);
          tmp$ret$0 = Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function get_HorizontalPointerDirectionConfig() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return HorizontalPointerDirectionConfig;
  }
  var HorizontalPointerDirectionConfig;
  function get_VerticalPointerDirectionConfig() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return VerticalPointerDirectionConfig;
  }
  var VerticalPointerDirectionConfig;
  function get_mouseSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseSlop;
  }
  var mouseSlop;
  function get_defaultTouchSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  function get_mouseToTouchSlopRatio() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseToTouchSlopRatio;
  }
  var mouseToTouchSlopRatio;
  function PointerDirectionConfig() {
  }
  function detectDragGesturesAfterLongPress(_this__u8e3s4, onDragStart, onDragEnd, onDragCancel, onDrag, $completion) {
    var tmp;
    if (onDragStart === VOID) {
      tmp = detectDragGesturesAfterLongPress$lambda;
    } else {
      tmp = onDragStart;
    }
    onDragStart = tmp;
    var tmp_0;
    if (onDragEnd === VOID) {
      tmp_0 = detectDragGesturesAfterLongPress$lambda_0;
    } else {
      tmp_0 = onDragEnd;
    }
    onDragEnd = tmp_0;
    var tmp_1;
    if (onDragCancel === VOID) {
      tmp_1 = detectDragGesturesAfterLongPress$lambda_1;
    } else {
      tmp_1 = onDragCancel;
    }
    onDragCancel = tmp_1;
    var tmp0 = awaitEachGesture(_this__u8e3s4, detectDragGesturesAfterLongPress$slambda_0(onDragStart, onDragEnd, onDragCancel, onDrag, null), $completion);
    return tmp0;
  }
  function drag(_this__u8e3s4, pointerId, onDrag, $completion) {
    var tmp = new $dragCOROUTINE$0(_this__u8e3s4, pointerId, onDrag, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function awaitLongPressOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitLongPressOrCancellationCOROUTINE$1(_this__u8e3s4, pointerId, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function awaitDragOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitDragOrCancellationCOROUTINE$2(_this__u8e3s4, pointerId, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function isPointerUp(_this__u8e3s4, pointerId) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      var tmp0_fastFirstOrNull = _this__u8e3s4.get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.foundation.gestures.isPointerUp.<anonymous>' call
          tmp$ret$0 = equals(item.get_id_o0558_k$(), pointerId);
          if (tmp$ret$0) {
            tmp$ret$1 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_pressed_3zxk93_k$()) === true);
  }
  function awaitDragOrUp(_this__u8e3s4, pointerId, hasDragged, $completion) {
    var tmp = new $awaitDragOrUpCOROUTINE$3(_this__u8e3s4, pointerId, hasDragged, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function HorizontalPointerDirectionConfig$1() {
  }
  protoOf(HorizontalPointerDirectionConfig$1).mainAxisDelta_r99w23_k$ = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset);
  };
  protoOf(HorizontalPointerDirectionConfig$1).crossAxisDelta_uv6j4e_k$ = function (offset) {
    return _Offset___get_y__impl__8bzhra(offset);
  };
  protoOf(HorizontalPointerDirectionConfig$1).offsetFromChanges_ujoh6i_k$ = function (mainChange, crossChange) {
    return Offset(mainChange, crossChange);
  };
  function VerticalPointerDirectionConfig$1() {
  }
  protoOf(VerticalPointerDirectionConfig$1).mainAxisDelta_r99w23_k$ = function (offset) {
    return _Offset___get_y__impl__8bzhra(offset);
  };
  protoOf(VerticalPointerDirectionConfig$1).crossAxisDelta_uv6j4e_k$ = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset);
  };
  protoOf(VerticalPointerDirectionConfig$1).offsetFromChanges_ujoh6i_k$ = function (mainChange, crossChange) {
    return Offset(crossChange, mainChange);
  };
  function detectDragGesturesAfterLongPress$lambda(it) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return Unit_getInstance();
  }
  function detectDragGesturesAfterLongPress$lambda_0() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return Unit_getInstance();
  }
  function detectDragGesturesAfterLongPress$lambda_1() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return Unit_getInstance();
  }
  function detectDragGesturesAfterLongPress$slambda$lambda($onDrag) {
    return function (it) {
      $onDrag(it, new Offset_0(positionChange(it)));
      it.consume_spbz2t_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPress$slambda($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    this.$onDragStart_1 = $onDragStart;
    this.$onDragEnd_1 = $onDragEnd;
    this.$onDragCancel_1 = $onDragCancel;
    this.$onDrag_1 = $onDrag;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectDragGesturesAfterLongPress$slambda).invoke_6kuihv_k$ = function ($this$awaitEachGesture, $completion) {
    var tmp = this.create_699gxy_k$($this$awaitEachGesture, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(1);
            suspendResult = awaitFirstDown(this.$this$awaitEachGesture_1, false, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.down0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = awaitLongPressOrCancellation(this.$this$awaitEachGesture_1, this.down0__1.get_id_o0558_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.drag1__1 = suspendResult;
            if (!(this.drag1__1 == null)) {
              this.$onDragStart_1(new Offset_0(this.drag1__1.get_position_kw508q_k$()));
              this.set_state_a96kl8_k$(3);
              var tmp_0 = this.drag1__1.get_id_o0558_k$();
              suspendResult = drag(this.$this$awaitEachGesture_1, tmp_0, detectDragGesturesAfterLongPress$slambda$lambda(this.$onDrag_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            break;
          case 3:
            if (suspendResult) {
              var tmp0_fastForEach = this.$this$awaitEachGesture_1.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastForEach.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastForEach.get_fkrdnv_k$(index);
                  if (changedToUp(item)) {
                    item.consume_spbz2t_k$();
                  }
                }
                 while (inductionVariable <= last);
              this.$onDragEnd_1();
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              this.$onDragCancel_1();
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            break;
          case 4:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.set_exceptionState_s9sevl_k$(7);
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 6:
            this.set_exceptionState_s9sevl_k$(7);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof CancellationException) {
              var c = this.get_exception_x0n6w6_k$();
              this.$onDragCancel_1();
              throw c;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 7:
            throw this.get_exception_x0n6w6_k$();
          case 8:
            this.set_exceptionState_s9sevl_k$(7);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).create_699gxy_k$ = function ($this$awaitEachGesture, completion) {
    var i = new detectDragGesturesAfterLongPress$slambda(this.$onDragStart_1, this.$onDragEnd_1, this.$onDragCancel_1, this.$onDrag_1, completion);
    i.$this$awaitEachGesture_1 = $this$awaitEachGesture;
    return i;
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function detectDragGesturesAfterLongPress$slambda_0($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    var i = new detectDragGesturesAfterLongPress$slambda($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.invoke_6kuihv_k$($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation) {
    this.$currentDown_1 = $currentDown;
    this.$longPress_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitLongPressOrCancellation$slambda).invoke_6kuihv_k$ = function ($this$withTimeout, $completion) {
    var tmp = this.create_699gxy_k$($this$withTimeout, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(awaitLongPressOrCancellation$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitLongPressOrCancellation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.finished0__1 = false;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!!this.finished0__1) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$withTimeout_1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event1__1 = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastAll = this.event1__1.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastAll.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAll.get_fkrdnv_k$(index);
                  if (!changedToUpIgnoreConsumed(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (tmp$ret$0) {
              this.finished0__1 = true;
            }

            var tmp$ret$2;
            l$ret$3: do {
              var tmp1_fastAny = this.event1__1.get_changes_dhi2my_k$();
              var inductionVariable_0 = 0;
              var last_0 = tmp1_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp1_fastAny.get_fkrdnv_k$(index_0);
                  if (item_0.get_isConsumed_scj5q3_k$() ? true : isOutOfBounds(item_0, this.$this$withTimeout_1.get_size_yscczt_k$(), this.$this$withTimeout_1.get_extendedTouchPadding_uaqi8a_k$())) {
                    tmp$ret$2 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$2 = false;
            }
             while (false);
            if (tmp$ret$2) {
              this.finished0__1 = true;
            }

            this.set_state_a96kl8_k$(3);
            suspendResult = this.$this$withTimeout_1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp$ret$4;
            l$ret$5: do {
              var tmp2_fastAny = consumeCheck.get_changes_dhi2my_k$();
              var inductionVariable_1 = 0;
              var last_1 = tmp2_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp2_fastAny.get_fkrdnv_k$(index_1);
                  if (item_1.get_isConsumed_scj5q3_k$()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              this.finished0__1 = true;
            }

            if (isPointerUp(this.event1__1, this.$currentDown_1._v.get_id_o0558_k$())) {
              var tmp$ret$6;
              l$ret$7: do {
                var tmp3_fastFirstOrNull = this.event1__1.get_changes_dhi2my_k$();
                var inductionVariable_2 = 0;
                var last_2 = tmp3_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_2 = tmp3_fastFirstOrNull.get_fkrdnv_k$(index_2);
                    if (item_2.get_pressed_3zxk93_k$()) {
                      tmp$ret$6 = item_2;
                      break l$ret$7;
                    }
                  }
                   while (inductionVariable_2 <= last_2);
                tmp$ret$6 = null;
              }
               while (false);
              var newPressed = tmp$ret$6;
              if (!(newPressed == null)) {
                this.$currentDown_1._v = newPressed;
                this.$longPress_1._v = this.$currentDown_1._v;
              } else {
                this.finished0__1 = true;
              }
            } else {
              var tmp$ret$8;
              l$ret$9: do {
                var tmp4_fastFirstOrNull = this.event1__1.get_changes_dhi2my_k$();
                var inductionVariable_3 = 0;
                var last_3 = tmp4_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = tmp4_fastFirstOrNull.get_fkrdnv_k$(index_3);
                    if (equals(item_3.get_id_o0558_k$(), this.$currentDown_1._v.get_id_o0558_k$())) {
                      tmp$ret$8 = item_3;
                      break l$ret$9;
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                tmp$ret$8 = null;
              }
               while (false);
              this.$longPress_1._v = tmp$ret$8;
            }

            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(awaitLongPressOrCancellation$slambda).create_699gxy_k$ = function ($this$withTimeout, completion) {
    var i = new awaitLongPressOrCancellation$slambda(this.$currentDown_1, this.$longPress_1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  protoOf(awaitLongPressOrCancellation$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function awaitLongPressOrCancellation$slambda_0($currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation);
    var l = function ($this$withTimeout, $completion) {
      return i.invoke_6kuihv_k$($this$withTimeout, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $dragCOROUTINE$0(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.onDrag_1 = onDrag;
  }
  protoOf($dragCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.pointer0__1 = this.pointerId_1;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = awaitDragOrCancellation(this._this__u8e3s4__1, this.pointer0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return false;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var change = tmp_0;
            if (changedToUpIgnoreConsumed(change)) {
              return true;
            }

            this.onDrag_1(change);
            this.pointer0__1 = change.get_id_o0558_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $awaitLongPressOrCancellationCOROUTINE$1(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
  }
  protoOf($awaitLongPressOrCancellationCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            if (isPointerUp(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              return null;
            }

            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.get_id_o0558_k$(), this.pointerId_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.initialDown0__1 = tmp_1;
            this.longPress1__1 = {_v: null};
            this.currentDown2__1 = {_v: this.initialDown0__1};
            this.longPressTimeout3__1 = this._this__u8e3s4__1.get_viewConfiguration_qgdaco_k$().get_longPressTimeoutMillis_i28jbr_k$();
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.withTimeout_m08hrs_k$(this.longPressTimeout3__1, awaitLongPressOrCancellation$slambda_0(this.currentDown2__1, this.longPress1__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT4__1 = null;
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof PointerEventTimeoutCancellationException) {
              var _ = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              var tmp1_elvis_lhs = this.longPress1__1._v;
              tmp_3.TRY_RESULT4__1 = tmp1_elvis_lhs == null ? this.initialDown0__1 : tmp1_elvis_lhs;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return this.TRY_RESULT4__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $awaitDragOrCancellationCOROUTINE$2(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
  }
  protoOf($awaitDragOrCancellationCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            if (isPointerUp(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              return null;
            }

            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.pointer1__1 = this.pointerId_1;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (false) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            this.set_state_a96kl8_k$(3);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_btks8g_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = event.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.get_id_o0558_k$(), this.pointer1__1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs == null) {
              this.tmp$ret$20__1 = null;
              this.set_state_a96kl8_k$(9);
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            break;
          case 4:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$4;
              l$ret$5: do {
                var tmp1_fastFirstOrNull = event.get_changes_dhi2my_k$();
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                    if (item_0.get_pressed_3zxk93_k$()) {
                      tmp$ret$4 = item_0;
                      break l$ret$5;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$4 = null;
              }
               while (false);
              var otherDown = tmp$ret$4;
              if (otherDown == null) {
                this.tmp$ret$20__1 = dragEvent;
                this.set_state_a96kl8_k$(9);
                continue $sm;
              } else {
                this.pointer1__1 = otherDown.get_id_o0558_k$();
                this.set_state_a96kl8_k$(5);
                continue $sm;
              }
            } else {
              if (positionChangedIgnoreConsumed(dragEvent)) {
                this.tmp$ret$20__1 = dragEvent;
                this.set_state_a96kl8_k$(9);
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(6);
                continue $sm;
              }
            }

            ;
            break;
          case 5:
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 7:
            throw this.get_exception_x0n6w6_k$();
          case 8:
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(9);
            continue $sm;
          case 9:
            var change = this.tmp$ret$20__1;
            var tmp_0;
            var tmp0_safe_receiver = change;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isConsumed_scj5q3_k$()) === false) {
              tmp_0 = change;
            } else {
              tmp_0 = null;
            }

            return tmp_0;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $awaitDragOrUpCOROUTINE$3(_this__u8e3s4, pointerId, hasDragged, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.hasDragged_1 = hasDragged;
  }
  protoOf($awaitDragOrUpCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.pointer0__1 = this.pointerId_1;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_btks8g_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = event.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.get_id_o0558_k$(), this.pointer0__1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var dragEvent = tmp_0;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$2;
              l$ret$3: do {
                var tmp1_fastFirstOrNull = event.get_changes_dhi2my_k$();
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                    if (item_0.get_pressed_3zxk93_k$()) {
                      tmp$ret$2 = item_0;
                      break l$ret$3;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$2 = null;
              }
               while (false);
              var otherDown = tmp$ret$2;
              if (otherDown == null) {
                return dragEvent;
              } else {
                this.pointer0__1 = otherDown.get_id_o0558_k$();
              }
            } else if (this.hasDragged_1(dragEvent)) {
              return dragEvent;
            }

            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  var properties_initialized_DragGestureDetector_kt_xqxw6j;
  function _init_properties_DragGestureDetector_kt__sw7hnt() {
    if (properties_initialized_DragGestureDetector_kt_xqxw6j) {
    } else {
      properties_initialized_DragGestureDetector_kt_xqxw6j = true;
      HorizontalPointerDirectionConfig = new HorizontalPointerDirectionConfig$1();
      VerticalPointerDirectionConfig = new VerticalPointerDirectionConfig$1();
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
  function awaitEachGesture(_this__u8e3s4, block, $completion) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.get_context_h02k06_k$();
    tmp$ret$1 = tmp$ret$0;
    var currentContext = tmp$ret$1;
    var tmp0 = _this__u8e3s4.awaitPointerEventScope_ldqog2_k$(awaitEachGesture$slambda_0(currentContext, block, null), $completion);
    return tmp0;
  }
  function awaitAllPointersUp(_this__u8e3s4, $completion) {
    var tmp = new $awaitAllPointersUpCOROUTINE$4(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function allPointersUp(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      var tmp0_fastAny = _this__u8e3s4.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.foundation.gestures.allPointersUp.<anonymous>' call
          tmp$ret$0 = item.get_pressed_3zxk93_k$();
          if (tmp$ret$0) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return !tmp$ret$1;
  }
  function awaitEachGesture$slambda($currentContext, $block, resultContinuation) {
    this.$currentContext_1 = $currentContext;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitEachGesture$slambda).invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $completion) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(awaitEachGesture$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitEachGesture$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!get_isActive(this.$currentContext_1)) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$block_1(this.$this$awaitPointerEventScope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            suspendResult = awaitAllPointersUp(this.$this$awaitPointerEventScope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 4:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof CancellationException) {
              this.e0__1 = this.get_exception_x0n6w6_k$();
              if (get_isActive(this.$currentContext_1)) {
                this.set_state_a96kl8_k$(5);
                suspendResult = awaitAllPointersUp(this.$this$awaitPointerEventScope_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                throw this.e0__1;
              }
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 5:
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(awaitEachGesture$slambda).create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitEachGesture$slambda(this.$currentContext_1, this.$block_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  protoOf(awaitEachGesture$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function awaitEachGesture$slambda_0($currentContext, $block, resultContinuation) {
    var i = new awaitEachGesture$slambda($currentContext, $block, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $completion) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitAllPointersUpCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitAllPointersUpCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            if (!allPointersUp(this._this__u8e3s4__1)) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            break;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var events = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastAny = events.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAny.get_fkrdnv_k$(index);
                  if (item.get_pressed_3zxk93_k$()) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  var Orientation_Vertical_instance;
  var Orientation_Horizontal_instance;
  function values() {
    return [Orientation_Vertical_getInstance(), Orientation_Horizontal_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Vertical':
        return Orientation_Vertical_getInstance();
      case 'Horizontal':
        return Orientation_Horizontal_getInstance();
      default:
        Orientation_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Orientation_entriesInitialized;
  function Orientation_initEntries() {
    if (Orientation_entriesInitialized)
      return Unit_getInstance();
    Orientation_entriesInitialized = true;
    Orientation_Vertical_instance = new Orientation('Vertical', 0);
    Orientation_Horizontal_instance = new Orientation('Horizontal', 1);
  }
  function Orientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Orientation_Vertical_getInstance() {
    Orientation_initEntries();
    return Orientation_Vertical_instance;
  }
  function Orientation_Horizontal_getInstance() {
    Orientation_initEntries();
    return Orientation_Horizontal_instance;
  }
  function get_NoOpScrollScope() {
    _init_properties_Scrollable_kt__k2543d();
    return NoOpScrollScope;
  }
  var NoOpScrollScope;
  function get_ModifierLocalScrollableContainer() {
    _init_properties_Scrollable_kt__k2543d();
    return ModifierLocalScrollableContainer;
  }
  var ModifierLocalScrollableContainer;
  function get_DefaultScrollMotionDurationScale() {
    _init_properties_Scrollable_kt__k2543d();
    return DefaultScrollMotionDurationScale;
  }
  var DefaultScrollMotionDurationScale;
  function get_DefaultScrollMotionDurationScaleFactor() {
    return DefaultScrollMotionDurationScaleFactor;
  }
  var DefaultScrollMotionDurationScaleFactor;
  function NoOpScrollScope$1() {
  }
  protoOf(NoOpScrollScope$1).scrollBy_p9cup6_k$ = function (pixels) {
    return pixels;
  };
  function ModifierLocalScrollableContainer$lambda() {
    _init_properties_Scrollable_kt__k2543d();
    return false;
  }
  function DefaultScrollMotionDurationScale$1() {
  }
  protoOf(DefaultScrollMotionDurationScale$1).get_scaleFactor_64aucw_k$ = function () {
    return 1.0;
  };
  var properties_initialized_Scrollable_kt_7d5rzr;
  function _init_properties_Scrollable_kt__k2543d() {
    if (properties_initialized_Scrollable_kt_7d5rzr) {
    } else {
      properties_initialized_Scrollable_kt_7d5rzr = true;
      NoOpScrollScope = new NoOpScrollScope$1();
      ModifierLocalScrollableContainer = modifierLocalOf(ModifierLocalScrollableContainer$lambda);
      DefaultScrollMotionDurationScale = new DefaultScrollMotionDurationScale$1();
    }
  }
  function ScrollScope() {
  }
  function get_NoPressGesture() {
    _init_properties_TapGestureDetector_kt__k4yygc();
    return NoPressGesture;
  }
  var NoPressGesture;
  function PressGestureScope() {
  }
  function awaitFirstDown(_this__u8e3s4, requireUnconsumed, pass, $completion) {
    requireUnconsumed = requireUnconsumed === VOID ? true : requireUnconsumed;
    pass = pass === VOID ? PointerEventPass_Main_getInstance() : pass;
    var tmp = new $awaitFirstDownCOROUTINE$5(_this__u8e3s4, requireUnconsumed, pass, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function isPrimaryChangedDown(_this__u8e3s4, requireUnconsumed) {
    _init_properties_TapGestureDetector_kt__k4yygc();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      var tmp0_fastAll = _this__u8e3s4.get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAll.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAll.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.foundation.gestures.isPrimaryChangedDown.<anonymous>' call
          tmp$ret$0 = item.get_type_zeflrq_k$() === Companion_getInstance_9().get_Mouse_a0dpcz_k$();
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    var primaryButtonCausesDown = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      var tmp1_fastAll = _this__u8e3s4.get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp1_fastAll.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp1_fastAll.get_fkrdnv_k$(index_0);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.foundation.gestures.isPrimaryChangedDown.<anonymous>' call
          tmp$ret$2 = requireUnconsumed ? changedToDown(item_0) : changedToDownIgnoreConsumed(item_0);
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block_0;
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$3 = true;
    }
    var changedToDown_0 = tmp$ret$3;
    return changedToDown_0 ? get_isPrimaryPressed(_this__u8e3s4.get_buttons_mb0klg_k$()) ? true : !primaryButtonCausesDown : false;
  }
  function NoPressGesture$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NoPressGesture$slambda).invoke_56pugh_k$ = function ($this$null, it, $completion) {
    var tmp = this.create_rju3ym_k$($this$null, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NoPressGesture$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.invoke_56pugh_k$(tmp, p2 instanceof Offset_0 ? p2.packedValue_1 : THROW_CCE(), $completion);
  };
  protoOf(NoPressGesture$slambda).doResume_5yljmg_k$ = function () {
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
  protoOf(NoPressGesture$slambda).create_rju3ym_k$ = function ($this$null, it, completion) {
    var i = new NoPressGesture$slambda(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  function NoPressGesture$slambda_0(resultContinuation) {
    var i = new NoPressGesture$slambda(resultContinuation);
    var l = function ($this$null, it, $completion) {
      return i.invoke_56pugh_k$($this$null, it.packedValue_1, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $awaitFirstDownCOROUTINE$5(_this__u8e3s4, requireUnconsumed, pass, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.requireUnconsumed_1 = requireUnconsumed;
    this.pass_1 = pass;
  }
  protoOf($awaitFirstDownCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(this.pass_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event0__1 = suspendResult;
            if (!isPrimaryChangedDown(this.event0__1, this.requireUnconsumed_1)) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return this.event0__1.get_changes_dhi2my_k$().get_fkrdnv_k$(0);
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  var properties_initialized_TapGestureDetector_kt_lhe8oi;
  function _init_properties_TapGestureDetector_kt__k4yygc() {
    if (properties_initialized_TapGestureDetector_kt_lhe8oi) {
    } else {
      properties_initialized_TapGestureDetector_kt_lhe8oi = true;
      NoPressGesture = NoPressGesture$slambda_0(null);
    }
  }
  function get_MinFlingVelocityDp() {
    _init_properties_SnapFlingBehavior_kt__1y2evi();
    return MinFlingVelocityDp;
  }
  var MinFlingVelocityDp;
  var properties_initialized_SnapFlingBehavior_kt_r96zw;
  function _init_properties_SnapFlingBehavior_kt__1y2evi() {
    if (properties_initialized_SnapFlingBehavior_kt_r96zw) {
    } else {
      properties_initialized_SnapFlingBehavior_kt_r96zw = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(400);
      MinFlingVelocityDp = tmp$ret$0;
    }
  }
  function get_$stableprop_0() {
    return 0;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function Start() {
    this.$stable_1 = 0;
  }
  function Stop(start) {
    this.start_1 = start;
    this.$stable_1 = 0;
  }
  protoOf(Stop).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  function Cancel(start) {
    this.start_1 = start;
    this.$stable_1 = 0;
  }
  protoOf(Cancel).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  function DragInteraction() {
  }
  function collectIsFocusedAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1452413326);
    sourceInformation($composer_0, 'C(collectIsFocusedAsState$composable)65@2219L34,66@2279L414,66@2258L435:FocusInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1452413326, $changed, -1, 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable (FocusInteraction.kt:64)');
    }
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
    if (false ? true : tmp0_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(false);
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
    var isFocused = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp6_remember$composable = $composer_0;
    var tmp7_remember$composable = 14 & $changed;
    var $composer_2 = tmp6_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp4_cache = $composer_2;
    var tmp5_cache = !!($composer_2.changed_ga7h3f_k$(_this__u8e3s4) | $composer_2.changed_ga7h3f_k$(isFocused));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp3_let = tmp4_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp5_cache ? true : tmp3_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable.<anonymous>' call
      tmp$ret$5 = collectIsFocusedAsState$composable$slambda_0(_this__u8e3s4, isFocused, null);
      var value_0 = tmp$ret$5;
      tmp4_cache.updateRememberedValue_l1colo_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp3_let;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$9 = tmp0_0;
    LaunchedEffect$composable(_this__u8e3s4, tmp$ret$9, $composer_0, 14 & $changed);
    var tmp0_1 = isFocused;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function Focus() {
    this.$stable_1 = 0;
  }
  function Unfocus(focus) {
    this.focus_1 = focus;
    this.$stable_1 = 0;
  }
  protoOf(Unfocus).get_focus_irhg33_k$ = function () {
    return this.focus_1;
  };
  function FocusInteraction() {
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = this.function_1(value, $completion);
    return tmp0;
  };
  function collectIsFocusedAsState$composable$slambda$slambda($focusInteractions, $isFocused, resultContinuation) {
    this.$focusInteractions_1 = $focusInteractions;
    this.$isFocused_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsFocusedAsState$composable$slambda$slambda).invoke_ry6yte_k$ = function (interaction, $completion) {
    var tmp = this.create_xj5a0d_k$(interaction, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsFocusedAsState$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsFocusedAsState$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Focus) {
            this.$focusInteractions_1.add_1j60pz_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Unfocus) {
              this.$focusInteractions_1.remove_8hbkc6_k$(this.interaction_1.focus_1);
            }
          }
          this.$isFocused_1.set_value_rnwamw_k$(!this.$focusInteractions_1.isEmpty_y1axqb_k$());
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
  protoOf(collectIsFocusedAsState$composable$slambda$slambda).create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsFocusedAsState$composable$slambda$slambda(this.$focusInteractions_1, this.$isFocused_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(collectIsFocusedAsState$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsFocusedAsState$composable$slambda$slambda_0($focusInteractions, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$composable$slambda$slambda($focusInteractions, $isFocused, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_ry6yte_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsFocusedAsState$composable$slambda($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation) {
    this.$this_collectIsFocusedAsState$composable_1 = $this_collectIsFocusedAsState$composable;
    this.$isFocused_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsFocusedAsState$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsFocusedAsState$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsFocusedAsState$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.focusInteractions0__1 = ArrayList_init_$Create$_0();
            this.set_state_a96kl8_k$(1);
            var tmp_1 = this.$this_collectIsFocusedAsState$composable_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsFocusedAsState$composable$slambda$slambda_0(this.focusInteractions0__1, this.$isFocused_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(collectIsFocusedAsState$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsFocusedAsState$composable$slambda(this.$this_collectIsFocusedAsState$composable_1, this.$isFocused_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(collectIsFocusedAsState$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsFocusedAsState$composable$slambda_0($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$composable$slambda($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1621024626);
    sourceInformation($composer_0, 'C(collectIsHoveredAsState$composable)65@2151L34,66@2211L411,66@2190L432:HoverInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1621024626, $changed, -1, 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable (HoverInteraction.kt:64)');
    }
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
    if (false ? true : tmp0_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(false);
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
    var isHovered = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp6_remember$composable = $composer_0;
    var tmp7_remember$composable = 14 & $changed;
    var $composer_2 = tmp6_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp4_cache = $composer_2;
    var tmp5_cache = !!($composer_2.changed_ga7h3f_k$(_this__u8e3s4) | $composer_2.changed_ga7h3f_k$(isHovered));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp3_let = tmp4_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp5_cache ? true : tmp3_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable.<anonymous>' call
      tmp$ret$5 = collectIsHoveredAsState$composable$slambda_0(_this__u8e3s4, isHovered, null);
      var value_0 = tmp$ret$5;
      tmp4_cache.updateRememberedValue_l1colo_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp3_let;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$9 = tmp0_0;
    LaunchedEffect$composable(_this__u8e3s4, tmp$ret$9, $composer_0, 14 & $changed);
    var tmp0_1 = isHovered;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function get_$stableprop_5() {
    return 0;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function Enter() {
    this.$stable_1 = 0;
  }
  function Exit(enter) {
    this.enter_1 = enter;
    this.$stable_1 = 0;
  }
  protoOf(Exit).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  function HoverInteraction() {
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = this.function_1(value, $completion);
    return tmp0;
  };
  function collectIsHoveredAsState$composable$slambda$slambda($hoverInteractions, $isHovered, resultContinuation) {
    this.$hoverInteractions_1 = $hoverInteractions;
    this.$isHovered_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsHoveredAsState$composable$slambda$slambda).invoke_ry6yte_k$ = function (interaction, $completion) {
    var tmp = this.create_xj5a0d_k$(interaction, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsHoveredAsState$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsHoveredAsState$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Enter) {
            this.$hoverInteractions_1.add_1j60pz_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.$hoverInteractions_1.remove_8hbkc6_k$(this.interaction_1.enter_1);
            }
          }
          this.$isHovered_1.set_value_rnwamw_k$(!this.$hoverInteractions_1.isEmpty_y1axqb_k$());
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
  protoOf(collectIsHoveredAsState$composable$slambda$slambda).create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsHoveredAsState$composable$slambda$slambda(this.$hoverInteractions_1, this.$isHovered_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(collectIsHoveredAsState$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsHoveredAsState$composable$slambda$slambda_0($hoverInteractions, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$composable$slambda$slambda($hoverInteractions, $isHovered, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_ry6yte_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$composable$slambda($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation) {
    this.$this_collectIsHoveredAsState$composable_1 = $this_collectIsHoveredAsState$composable;
    this.$isHovered_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsHoveredAsState$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsHoveredAsState$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsHoveredAsState$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.hoverInteractions0__1 = ArrayList_init_$Create$_0();
            this.set_state_a96kl8_k$(1);
            var tmp_1 = this.$this_collectIsHoveredAsState$composable_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsHoveredAsState$composable$slambda$slambda_0(this.hoverInteractions0__1, this.$isHovered_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(collectIsHoveredAsState$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsHoveredAsState$composable$slambda(this.$this_collectIsHoveredAsState$composable_1, this.$isHovered_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(collectIsHoveredAsState$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsHoveredAsState$composable$slambda_0($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$composable$slambda($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Interaction() {
  }
  function InteractionSource() {
  }
  function collectIsPressedAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1873825817);
    sourceInformation($composer_0, 'C(collectIsPressedAsState$composable)84@3016L34,85@3076L504,85@3055L525:PressInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1873825817, $changed, -1, 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable (PressInteraction.kt:83)');
    }
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
    if (false ? true : tmp0_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(false);
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
    var isPressed = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp6_remember$composable = $composer_0;
    var tmp7_remember$composable = 14 & $changed;
    var $composer_2 = tmp6_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp4_cache = $composer_2;
    var tmp5_cache = !!($composer_2.changed_ga7h3f_k$(_this__u8e3s4) | $composer_2.changed_ga7h3f_k$(isPressed));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp3_let = tmp4_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp5_cache ? true : tmp3_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable.<anonymous>' call
      tmp$ret$5 = collectIsPressedAsState$composable$slambda_0(_this__u8e3s4, isPressed, null);
      var value_0 = tmp$ret$5;
      tmp4_cache.updateRememberedValue_l1colo_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp3_let;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$9 = tmp0_0;
    LaunchedEffect$composable(_this__u8e3s4, tmp$ret$9, $composer_0, 14 & $changed);
    var tmp0_1 = isPressed;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function Press(pressPosition) {
    this.pressPosition_1 = pressPosition;
    this.$stable_1 = 0;
  }
  protoOf(Press).get_pressPosition_jdrfg7_k$ = function () {
    return this.pressPosition_1;
  };
  function Release(press) {
    this.press_1 = press;
    this.$stable_1 = 0;
  }
  protoOf(Release).get_press_ix1cey_k$ = function () {
    return this.press_1;
  };
  function Cancel_0(press) {
    this.press_1 = press;
    this.$stable_1 = 0;
  }
  protoOf(Cancel_0).get_press_ix1cey_k$ = function () {
    return this.press_1;
  };
  function PressInteraction() {
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp0 = this.function_1(value, $completion);
    return tmp0;
  };
  function collectIsPressedAsState$composable$slambda$slambda($pressInteractions, $isPressed, resultContinuation) {
    this.$pressInteractions_1 = $pressInteractions;
    this.$isPressed_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsPressedAsState$composable$slambda$slambda).invoke_ry6yte_k$ = function (interaction, $completion) {
    var tmp = this.create_xj5a0d_k$(interaction, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsPressedAsState$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsPressedAsState$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Press) {
            this.$pressInteractions_1.add_1j60pz_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.$pressInteractions_1.remove_8hbkc6_k$(this.interaction_1.press_1);
            } else {
              if (tmp0_subject instanceof Cancel_0) {
                this.$pressInteractions_1.remove_8hbkc6_k$(this.interaction_1.press_1);
              }
            }
          }
          this.$isPressed_1.set_value_rnwamw_k$(!this.$pressInteractions_1.isEmpty_y1axqb_k$());
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
  protoOf(collectIsPressedAsState$composable$slambda$slambda).create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsPressedAsState$composable$slambda$slambda(this.$pressInteractions_1, this.$isPressed_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(collectIsPressedAsState$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsPressedAsState$composable$slambda$slambda_0($pressInteractions, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$composable$slambda$slambda($pressInteractions, $isPressed, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_ry6yte_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsPressedAsState$composable$slambda($this_collectIsPressedAsState$composable, $isPressed, resultContinuation) {
    this.$this_collectIsPressedAsState$composable_1 = $this_collectIsPressedAsState$composable;
    this.$isPressed_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsPressedAsState$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsPressedAsState$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsPressedAsState$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.pressInteractions0__1 = ArrayList_init_$Create$_0();
            this.set_state_a96kl8_k$(1);
            var tmp_1 = this.$this_collectIsPressedAsState$composable_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsPressedAsState$composable$slambda$slambda_0(this.pressInteractions0__1, this.$isPressed_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(collectIsPressedAsState$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsPressedAsState$composable$slambda(this.$this_collectIsPressedAsState$composable_1, this.$isPressed_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(collectIsPressedAsState$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsPressedAsState$composable$slambda_0($this_collectIsPressedAsState$composable, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$composable$slambda($this_collectIsPressedAsState$composable, $isPressed, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LazyListItemInfo() {
  }
  function get_InterruptionSpec() {
    _init_properties_LazyListItemPlacementAnimator_kt__r3639x();
    return InterruptionSpec;
  }
  var InterruptionSpec;
  var properties_initialized_LazyListItemPlacementAnimator_kt_g0i5bd;
  function _init_properties_LazyListItemPlacementAnimator_kt__r3639x() {
    if (properties_initialized_LazyListItemPlacementAnimator_kt_g0i5bd) {
    } else {
      properties_initialized_LazyListItemPlacementAnimator_kt_g0i5bd = true;
      InterruptionSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold(Companion_getInstance_10())));
    }
  }
  function LazyListLayoutInfo() {
  }
  function get_EmptyRange() {
    _init_properties_LazyListMeasure_kt__g8ct5m();
    return EmptyRange;
  }
  var EmptyRange;
  var properties_initialized_LazyListMeasure_kt_6430sc;
  function _init_properties_LazyListMeasure_kt__g8ct5m() {
    if (properties_initialized_LazyListMeasure_kt_6430sc) {
    } else {
      properties_initialized_LazyListMeasure_kt_6430sc = true;
      EmptyRange = to(IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$(), IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$());
    }
  }
  function get_InterruptionSpec_0() {
    _init_properties_LazyGridItemPlacementAnimator_kt__mafnv7();
    return InterruptionSpec_0;
  }
  var InterruptionSpec_0;
  var properties_initialized_LazyGridItemPlacementAnimator_kt_ef5tzl;
  function _init_properties_LazyGridItemPlacementAnimator_kt__mafnv7() {
    if (properties_initialized_LazyGridItemPlacementAnimator_kt_ef5tzl) {
    } else {
      properties_initialized_LazyGridItemPlacementAnimator_kt_ef5tzl = true;
      InterruptionSpec_0 = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold(Companion_getInstance_10())));
    }
  }
  function get_TargetDistance() {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    return TargetDistance;
  }
  var TargetDistance;
  function get_BoundDistance() {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    return BoundDistance;
  }
  var BoundDistance;
  function get_MinimumDistance() {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    return MinimumDistance;
  }
  var MinimumDistance;
  var properties_initialized_LazyAnimateScroll_kt_ru8vti;
  function _init_properties_LazyAnimateScroll_kt__eqop2w() {
    if (properties_initialized_LazyAnimateScroll_kt_ru8vti) {
    } else {
      properties_initialized_LazyAnimateScroll_kt_ru8vti = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(2500);
      TargetDistance = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(1500);
      BoundDistance = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(50);
      MinimumDistance = tmp$ret$0_1;
    }
  }
  function get_ConsumeHorizontalFlingNestedScrollConnection() {
    _init_properties_Pager_kt__ocahin();
    return ConsumeHorizontalFlingNestedScrollConnection;
  }
  var ConsumeHorizontalFlingNestedScrollConnection;
  function get_ConsumeVerticalFlingNestedScrollConnection() {
    _init_properties_Pager_kt__ocahin();
    return ConsumeVerticalFlingNestedScrollConnection;
  }
  var ConsumeVerticalFlingNestedScrollConnection;
  function ConsumeAllFlingOnDirection(orientation) {
    this.orientation_1 = orientation;
  }
  protoOf(ConsumeAllFlingOnDirection).get_orientation_9wu93t_k$ = function () {
    return this.orientation_1;
  };
  protoOf(ConsumeAllFlingOnDirection).consumeOnOrientation_jz3z5t_k$ = function (_this__u8e3s4, orientation) {
    var tmp;
    if (orientation.equals(Orientation_Vertical_getInstance())) {
      tmp = Velocity__copy$default_impl_eql69u(_this__u8e3s4, 0.0);
    } else {
      tmp = Velocity__copy$default_impl_eql69u(_this__u8e3s4, VOID, 0.0);
    }
    return tmp;
  };
  protoOf(ConsumeAllFlingOnDirection).consumeOnOrientation_x0gk5b_k$ = function (_this__u8e3s4, orientation) {
    var tmp;
    if (orientation.equals(Orientation_Vertical_getInstance())) {
      tmp = Offset__copy$default_impl_bmwjg8(_this__u8e3s4, 0.0);
    } else {
      tmp = Offset__copy$default_impl_bmwjg8(_this__u8e3s4, VOID, 0.0);
    }
    return tmp;
  };
  protoOf(ConsumeAllFlingOnDirection).onPostScroll_h2864l_k$ = function (consumed, available, source) {
    var tmp0_subject = source;
    return tmp0_subject === Companion_getInstance_12().get_Fling_te9v25_k$() ? this.consumeOnOrientation_x0gk5b_k$(available, this.orientation_1) : Companion_getInstance_4().get_Zero_sctq3f_k$();
  };
  protoOf(ConsumeAllFlingOnDirection).onPostFling_9ubv_k$ = function (consumed, available, $completion) {
    return new Velocity(this.consumeOnOrientation_jz3z5t_k$(available, this.orientation_1));
  };
  var properties_initialized_Pager_kt_z0jphv;
  function _init_properties_Pager_kt__ocahin() {
    if (properties_initialized_Pager_kt_z0jphv) {
    } else {
      properties_initialized_Pager_kt_z0jphv = true;
      ConsumeHorizontalFlingNestedScrollConnection = new ConsumeAllFlingOnDirection(Orientation_Horizontal_getInstance());
      ConsumeVerticalFlingNestedScrollConnection = new ConsumeAllFlingOnDirection(Orientation_Vertical_getInstance());
    }
  }
  function get_SnapAlignmentStartToStart() {
    _init_properties_PagerState_kt__9pfij6();
    return SnapAlignmentStartToStart;
  }
  var SnapAlignmentStartToStart;
  function get_DefaultPositionThreshold() {
    _init_properties_PagerState_kt__9pfij6();
    return DefaultPositionThreshold;
  }
  var DefaultPositionThreshold;
  function get_EmptyLayoutInfo() {
    _init_properties_PagerState_kt__9pfij6();
    return EmptyLayoutInfo;
  }
  var EmptyLayoutInfo;
  function get_UnitDensity() {
    _init_properties_PagerState_kt__9pfij6();
    return UnitDensity;
  }
  var UnitDensity;
  function get_EmptyInteractionSources() {
    _init_properties_PagerState_kt__9pfij6();
    return EmptyInteractionSources;
  }
  var EmptyInteractionSources;
  function SnapAlignmentStartToStart$lambda($this$null, _anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    _init_properties_PagerState_kt__9pfij6();
    return 0.0;
  }
  function EmptyLayoutInfo$1() {
    this.visibleItemsInfo_1 = emptyList();
    this.viewportStartOffset_1 = 0;
    this.viewportEndOffset_1 = 0;
    this.totalItemsCount_1 = 0;
    this.mainAxisItemSpacing_1 = 0;
  }
  protoOf(EmptyLayoutInfo$1).get_visibleItemsInfo_uew4qj_k$ = function () {
    return this.visibleItemsInfo_1;
  };
  protoOf(EmptyLayoutInfo$1).get_viewportStartOffset_v4b1ay_k$ = function () {
    return this.viewportStartOffset_1;
  };
  protoOf(EmptyLayoutInfo$1).get_viewportEndOffset_gapdi7_k$ = function () {
    return this.viewportEndOffset_1;
  };
  protoOf(EmptyLayoutInfo$1).get_totalItemsCount_aiolgq_k$ = function () {
    return this.totalItemsCount_1;
  };
  protoOf(EmptyLayoutInfo$1).get_mainAxisItemSpacing_tq19t9_k$ = function () {
    return this.mainAxisItemSpacing_1;
  };
  function UnitDensity$1() {
    this.density_1 = 1.0;
    this.fontScale_1 = 1.0;
  }
  protoOf(UnitDensity$1).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(UnitDensity$1).get_fontScale_h56n3i_k$ = function () {
    return this.fontScale_1;
  };
  function EmptyInteractionSources$1() {
  }
  protoOf(EmptyInteractionSources$1).get_interactions_ql02qy_k$ = function () {
    return emptyFlow();
  };
  var properties_initialized_PagerState_kt_v93qz4;
  function _init_properties_PagerState_kt__9pfij6() {
    if (properties_initialized_PagerState_kt_v93qz4) {
    } else {
      properties_initialized_PagerState_kt_v93qz4 = true;
      SnapAlignmentStartToStart = SnapAlignmentStartToStart$lambda;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(56);
      DefaultPositionThreshold = tmp$ret$0;
      EmptyLayoutInfo = new EmptyLayoutInfo$1();
      UnitDensity = new UnitDensity$1();
      EmptyInteractionSources = new EmptyInteractionSources$1();
    }
  }
  function get_ModifierLocalBringIntoViewParent() {
    _init_properties_BringIntoView_kt__yi7ifv();
    return ModifierLocalBringIntoViewParent;
  }
  var ModifierLocalBringIntoViewParent;
  function BringIntoViewParent() {
  }
  function ModifierLocalBringIntoViewParent$lambda() {
    _init_properties_BringIntoView_kt__yi7ifv();
    return null;
  }
  var properties_initialized_BringIntoView_kt_uq6g7t;
  function _init_properties_BringIntoView_kt__yi7ifv() {
    if (properties_initialized_BringIntoView_kt_uq6g7t) {
    } else {
      properties_initialized_BringIntoView_kt_uq6g7t = true;
      ModifierLocalBringIntoViewParent = modifierLocalOf(ModifierLocalBringIntoViewParent$lambda);
    }
  }
  function get_$stableprop_10() {
    return 0;
  }
  function CornerBasedShape(topStart, topEnd, bottomEnd, bottomStart) {
    this.topStart_1 = topStart;
    this.topEnd_1 = topEnd;
    this.bottomEnd_1 = bottomEnd;
    this.bottomStart_1 = bottomStart;
    this.$stable_1 = 0;
  }
  protoOf(CornerBasedShape).get_topStart_n2fniu_k$ = function () {
    return this.topStart_1;
  };
  protoOf(CornerBasedShape).get_topEnd_k1yfkf_k$ = function () {
    return this.topEnd_1;
  };
  protoOf(CornerBasedShape).get_bottomEnd_m64yrd_k$ = function () {
    return this.bottomEnd_1;
  };
  protoOf(CornerBasedShape).get_bottomStart_3n1j0u_k$ = function () {
    return this.bottomStart_1;
  };
  protoOf(CornerBasedShape).createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    var topStart = this.topStart_1.toPx_m7y0r2_k$(size, density);
    var topEnd = this.topEnd_1.toPx_m7y0r2_k$(size, density);
    var bottomEnd = this.bottomEnd_1.toPx_m7y0r2_k$(size, density);
    var bottomStart = this.bottomStart_1.toPx_m7y0r2_k$(size, density);
    var minDimension = _Size___get_minDimension__impl__4iso0r(size);
    if (topStart + bottomStart > minDimension) {
      var scale = minDimension / (topStart + bottomStart);
      topStart = topStart * scale;
      bottomStart = bottomStart * scale;
    }
    if (topEnd + bottomEnd > minDimension) {
      var scale_0 = minDimension / (topEnd + bottomEnd);
      topEnd = topEnd * scale_0;
      bottomEnd = bottomEnd * scale_0;
    }
    // Inline function 'kotlin.require' call
    var tmp0_require = ((topStart >= 0.0 ? topEnd >= 0.0 : false) ? bottomEnd >= 0.0 : false) ? bottomStart >= 0.0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.shape.CornerBasedShape.createOutline.<anonymous>' call
      tmp$ret$0 = "Corner size in Px can't be negative(topStart = " + topStart + ', topEnd = ' + topEnd + ', ' + ('bottomEnd = ' + bottomEnd + ', bottomStart = ' + bottomStart + ')!');
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.createOutline_awgnns_k$(size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection);
  };
  protoOf(CornerBasedShape).copy$default_rthtx0_k$ = function (topStart, topEnd, bottomEnd, bottomStart, $super) {
    topStart = topStart === VOID ? this.topStart_1 : topStart;
    topEnd = topEnd === VOID ? this.topEnd_1 : topEnd;
    bottomEnd = bottomEnd === VOID ? this.bottomEnd_1 : bottomEnd;
    bottomStart = bottomStart === VOID ? this.bottomStart_1 : bottomStart;
    return $super === VOID ? this.copy_4mzu9h_k$(topStart, topEnd, bottomEnd, bottomStart) : $super.copy_4mzu9h_k$.call(this, topStart, topEnd, bottomEnd, bottomStart);
  };
  protoOf(CornerBasedShape).copy_ymfmd5_k$ = function (all) {
    return this.copy_4mzu9h_k$(all, all, all, all);
  };
  function get_ZeroCornerSize() {
    _init_properties_CornerSize_kt__adzyne();
    return ZeroCornerSize;
  }
  var ZeroCornerSize;
  function CornerSize() {
  }
  function CornerSize_0(percent) {
    _init_properties_CornerSize_kt__adzyne();
    return new PercentCornerSize(percent);
  }
  function _get_percent__ssgsk4($this) {
    return $this.percent_1;
  }
  function component1_0($this) {
    return $this.percent_1;
  }
  function PercentCornerSize(percent) {
    this.percent_1 = percent;
    if (this.percent_1 < 0 ? true : this.percent_1 > 100) {
      throw IllegalArgumentException_init_$Create$('The percent should be in the range of [0, 100]');
    }
  }
  protoOf(PercentCornerSize).toPx_m7y0r2_k$ = function (shapeSize, density) {
    return _Size___get_minDimension__impl__4iso0r(shapeSize) * (this.percent_1 / 100.0);
  };
  protoOf(PercentCornerSize).toString = function () {
    return 'CornerSize(size = ' + this.percent_1 + '%)';
  };
  protoOf(PercentCornerSize).get_valueOverride_4rn9vw_k$ = function () {
    return '' + this.percent_1 + '%';
  };
  protoOf(PercentCornerSize).copy_i912ft_k$ = function (percent) {
    return new PercentCornerSize(percent);
  };
  protoOf(PercentCornerSize).copy$default_7wgr89_k$ = function (percent, $super) {
    percent = percent === VOID ? this.percent_1 : percent;
    return $super === VOID ? this.copy_i912ft_k$(percent) : $super.copy_i912ft_k$.call(this, percent);
  };
  protoOf(PercentCornerSize).hashCode = function () {
    return getNumberHashCode(this.percent_1);
  };
  protoOf(PercentCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PercentCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof PercentCornerSize ? other : THROW_CCE();
    if (!equals(this.percent_1, tmp0_other_with_cast.percent_1))
      return false;
    return true;
  };
  function CornerSize_1(size) {
    _init_properties_CornerSize_kt__adzyne();
    return new DpCornerSize(size);
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function component1_1($this) {
    return $this.size_1;
  }
  function DpCornerSize(size) {
    this.size_1 = size;
  }
  protoOf(DpCornerSize).toPx_m7y0r2_k$ = function (shapeSize, density) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.shape.DpCornerSize.toPx.<anonymous>' call
    tmp$ret$0 = density.toPx_u0ojv5_k$(this.size_1);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(DpCornerSize).toString = function () {
    return 'CornerSize(size = ' + _Dp___get_value__impl__geb1vb(this.size_1) + '.dp)';
  };
  protoOf(DpCornerSize).get_valueOverride_meim4x_k$ = function () {
    return this.size_1;
  };
  protoOf(DpCornerSize).get_valueOverride_4rn9vw_k$ = function () {
    return new Dp(this.get_valueOverride_meim4x_k$());
  };
  protoOf(DpCornerSize).copy_ptxaur_k$ = function (size) {
    return new DpCornerSize(size);
  };
  protoOf(DpCornerSize).copy$default_6x1xei_k$ = function (size, $super) {
    size = size === VOID ? this.size_1 : size;
    return $super === VOID ? this.copy_ptxaur_k$(size) : $super.copy_ptxaur_k$.call(this, new Dp(size));
  };
  protoOf(DpCornerSize).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.size_1);
  };
  protoOf(DpCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof DpCornerSize ? other : THROW_CCE();
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  function ZeroCornerSize$1() {
  }
  protoOf(ZeroCornerSize$1).toPx_m7y0r2_k$ = function (shapeSize, density) {
    return 0.0;
  };
  protoOf(ZeroCornerSize$1).toString = function () {
    return 'ZeroCornerSize';
  };
  protoOf(ZeroCornerSize$1).get_valueOverride_4rn9vw_k$ = function () {
    return 'ZeroCornerSize';
  };
  var properties_initialized_CornerSize_kt_9yvmfc;
  function _init_properties_CornerSize_kt__adzyne() {
    if (properties_initialized_CornerSize_kt_9yvmfc) {
    } else {
      properties_initialized_CornerSize_kt_9yvmfc = true;
      ZeroCornerSize = new ZeroCornerSize$1();
    }
  }
  function get_CircleShape() {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return CircleShape;
  }
  var CircleShape;
  function get_$stableprop_11() {
    return 0;
  }
  function RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart) {
    CornerBasedShape.call(this, topStart, topEnd, bottomEnd, bottomStart);
    this.$stable_2 = 0;
  }
  protoOf(RoundedCornerShape).createOutline_awgnns_k$ = function (size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection) {
    var tmp;
    if (topStart + topEnd + bottomEnd + bottomStart === 0.0) {
      tmp = new Rectangle(toRect_0(size));
    } else {
      tmp = new Rounded(RoundRect_0(toRect_0(size), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topStart : topEnd), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topEnd : topStart), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomEnd : bottomStart), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomStart : bottomEnd)));
    }
    return tmp;
  };
  protoOf(RoundedCornerShape).copy_4mzu9h_k$ = function (topStart, topEnd, bottomEnd, bottomStart) {
    return new RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart);
  };
  protoOf(RoundedCornerShape).toString = function () {
    return 'RoundedCornerShape(topStart = ' + this.get_topStart_n2fniu_k$() + ', topEnd = ' + this.get_topEnd_k1yfkf_k$() + ', bottomEnd = ' + ('' + this.get_bottomEnd_m64yrd_k$() + ', bottomStart = ' + this.get_bottomStart_3n1j0u_k$() + ')');
  };
  protoOf(RoundedCornerShape).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundedCornerShape))
      return false;
    if (!equals(this.get_topStart_n2fniu_k$(), other.get_topStart_n2fniu_k$()))
      return false;
    if (!equals(this.get_topEnd_k1yfkf_k$(), other.get_topEnd_k1yfkf_k$()))
      return false;
    if (!equals(this.get_bottomEnd_m64yrd_k$(), other.get_bottomEnd_m64yrd_k$()))
      return false;
    if (!equals(this.get_bottomStart_3n1j0u_k$(), other.get_bottomStart_3n1j0u_k$()))
      return false;
    return true;
  };
  protoOf(RoundedCornerShape).hashCode = function () {
    var result = hashCode(this.get_topStart_n2fniu_k$());
    result = imul(31, result) + hashCode(this.get_topEnd_k1yfkf_k$()) | 0;
    result = imul(31, result) + hashCode(this.get_bottomEnd_m64yrd_k$()) | 0;
    result = imul(31, result) + hashCode(this.get_bottomStart_3n1j0u_k$()) | 0;
    return result;
  };
  function RoundedCornerShape_0(percent) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_1(CornerSize_0(percent));
  }
  function RoundedCornerShape_1(corner) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(corner, corner, corner, corner);
  }
  function RoundedCornerShape_2(size) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_1(CornerSize_1(size));
  }
  function RoundedCornerShape_3(topStart, topEnd, bottomEnd, bottomStart) {
    var tmp;
    if (topStart === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = topStart;
    }
    topStart = tmp;
    var tmp_0;
    if (topEnd === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = topEnd;
    }
    topEnd = tmp_0;
    var tmp_1;
    if (bottomEnd === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = bottomEnd;
    }
    bottomEnd = tmp_1;
    var tmp_2;
    if (bottomStart === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = bottomStart;
    }
    bottomStart = tmp_2;
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(CornerSize_1(topStart), CornerSize_1(topEnd), CornerSize_1(bottomEnd), CornerSize_1(bottomStart));
  }
  var properties_initialized_RoundedCornerShape_kt_5mose9;
  function _init_properties_RoundedCornerShape_kt__vzposf() {
    if (properties_initialized_RoundedCornerShape_kt_5mose9) {
    } else {
      properties_initialized_RoundedCornerShape_kt_5mose9 = true;
      CircleShape = RoundedCornerShape_0(50);
    }
  }
  function BasicText$composable(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, minLines, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var style_0 = {_v: style};
    var onTextLayout_0 = {_v: onTextLayout};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1656413145);
    sourceInformation($composer_0, 'C(BasicText$composable)P(7,2,6,3,4:c#ui.text.style.TextOverflow,5)64@3304L2,80@4041L7,81@4080L7,82@4141L7,102@5126L514,141@6375L96:BasicText.kt#423gt5');
    var $dirty = $changed;
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
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(style_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changedInstance_s1wkiy_k$(onTextLayout_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.value_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(softWrap_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(maxLines_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(minLines_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance_7();
        }
        if (!(($default & 4) === 0)) {
          style_0._v = Companion_getInstance_13().get_Default_goqax4_k$();
        }
        if (!(($default & 8) === 0)) {
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
          if (false ? true : tmp0_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.foundation.text.BasicText$composable.<anonymous>' call
            tmp$ret$0 = BasicText$composable$lambda;
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
          onTextLayout_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_14().get_Clip_a6y3d7_k$());
        }
        if (!(($default & 32) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 64) === 0)) {
          maxLines_0._v = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
        }
        if (!(($default & 128) === 0)) {
          minLines_0._v = 1;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(1656413145, $changed, -1, 'androidx.compose.foundation.text.BasicText$composable (BasicText.kt:60)');
      }
      validateMinMaxLines(minLines_0._v, maxLines_0._v);
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp3_$get_current$$composable_fm67ua = get_LocalSelectionRegistrar();
      var tmp4_$get_current$$composable_f3pcsz = $composer_0;
      var $composer_2 = tmp4_$get_current$$composable_f3pcsz;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.consume_11nid3_k$(tmp3_$get_current$$composable_fm67ua);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$5 = tmp0_0;
      var selectionRegistrar = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp5_$get_current$$composable_el8hro = get_LocalDensity();
      var tmp6_$get_current$$composable_e2rmqd = $composer_0;
      var $composer_3 = tmp6_$get_current$$composable_e2rmqd;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.consume_11nid3_k$(tmp5_$get_current$$composable_el8hro);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$6 = tmp0_1;
      var density = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp7_$get_current$$composable_dkarp2 = get_LocalFontFamilyResolver();
      var tmp8_$get_current$$composable_d1twnr = $composer_0;
      var $composer_4 = tmp8_$get_current$$composable_d1twnr;
      sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_4.consume_11nid3_k$(tmp7_$get_current$$composable_dkarp2);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$7 = tmp0_2;
      var fontFamilyResolver = tmp$ret$7;
      $composer_0.startReplaceableGroup_rp6air_k$(1388300848);
      sourceInformation($composer_0, '97@4947L150');
      var tmp_1;
      if (selectionRegistrar == null) {
        tmp_1 = Companion_getInstance_28().get_InvalidSelectableId_nbfra9_k$();
      } else {
        var tmp_2 = selectionIdSaver(selectionRegistrar);
        tmp_1 = rememberSaveable$composable([text, selectionRegistrar], tmp_2, null, BasicText$composable$lambda_0(selectionRegistrar), $composer_0, 0, 4);
      }
      var tmp0_group = tmp_1;
      $composer_0.endReplaceableGroup_er37p7_k$();
      var selectableId = tmp0_group;
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp11_remember$composable = $composer_0;
      var $composer_5 = tmp11_remember$composable;
      $composer_5.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_5, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp10_cache = $composer_5;
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      var tmp9_let = tmp10_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp9_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
        var tmp$ret$8;
        // Inline function 'androidx.compose.foundation.text.BasicText$composable.<anonymous>' call
        var tmp0_text = AnnotatedString_init_$Create$(text);
        tmp$ret$8 = new TextController(new TextState(new TextDelegate(tmp0_text, style_0._v, maxLines_0._v, minLines_0._v, softWrap_0._v, overflow_0._v.value_1, density, fontFamilyResolver), selectableId));
        var value_0 = tmp$ret$8;
        tmp10_cache.updateRememberedValue_l1colo_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp9_let;
      }
      tmp$ret$9 = tmp_3;
      tmp$ret$10 = tmp$ret$9;
      var tmp_4 = tmp$ret$10;
      tmp$ret$11 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_3 = tmp$ret$11;
      $composer_5.endReplaceableGroup_er37p7_k$();
      tmp$ret$12 = tmp0_3;
      var controller = tmp$ret$12;
      var state = controller.get_state_iypx7s_k$();
      if (!$composer_0.get_inserting_25mlsw_k$()) {
        var tmp0_current = state.get_textDelegate_dno657_k$();
        controller.setTextDelegate_gbukbh_k$(updateTextDelegate(tmp0_current, text, style_0._v, density, fontFamilyResolver, softWrap_0._v, overflow_0._v.value_1, maxLines_0._v, minLines_0._v));
      }
      state.set_onTextLayout_oewkcw_k$(onTextLayout_0._v);
      controller.update_mq7n96_k$(selectionRegistrar);
      $composer_0.startReplaceableGroup_rp6air_k$(1388302243);
      sourceInformation($composer_0, '138@6340L7');
      if (!(selectionRegistrar == null)) {
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp12_$get_current$$composable_nqrkmm = get_LocalTextSelectionColors();
        var tmp13_$get_current$$composable_n8aplb = $composer_0;
        var $composer_6 = tmp13_$get_current$$composable_n8aplb;
        sourceInformationMarkerStart($composer_6, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_4 = $composer_6.consume_11nid3_k$(tmp12_$get_current$$composable_nqrkmm);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$13 = tmp0_4;
        state.set_selectionBackgroundColor_u9adkx_k$(tmp$ret$13.get_backgroundColor_5dhxap_k$());
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp23_Layout$composable = modifier_0._v.then_5qw5wu_k$(controller.get_modifiers_mxb6zx_k$());
      var tmp24_Layout$composable = controller.get_measurePolicy_ckysxz_k$();
      var tmp25_Layout$composable = $composer_0;
      var modifier_1 = tmp23_Layout$composable;
      var $composer_7 = tmp25_Layout$composable;
      $composer_7.startReplaceableGroup_rp6air_k$(310513410);
      sourceInformation($composer_7, 'CC(Layout$composable)P(1)119@4537L7,120@4592L7,121@4651L7,123@4724L439:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_7();
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp14_$get_current$$composable_mptuk0 = get_LocalDensity();
      var tmp15_$get_current$$composable_m7czip = $composer_7;
      var $composer_8 = tmp15_$get_current$$composable_m7czip;
      sourceInformationMarkerStart($composer_8, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_5 = $composer_8.consume_11nid3_k$(tmp14_$get_current$$composable_mptuk0);
      sourceInformationMarkerEnd($composer_8);
      tmp$ret$14 = tmp0_5;
      var density_0 = tmp$ret$14;
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp16_$get_current$$composable_low4he = get_LocalLayoutDirection();
      var tmp17_$get_current$$composable_l6f9g3 = $composer_7;
      var $composer_9 = tmp17_$get_current$$composable_l6f9g3;
      sourceInformationMarkerStart($composer_9, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_6 = $composer_9.consume_11nid3_k$(tmp16_$get_current$$composable_low4he);
      sourceInformationMarkerEnd($composer_9);
      tmp$ret$15 = tmp0_6;
      var layoutDirection = tmp$ret$15;
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp18_$get_current$$composable_knyees = get_LocalViewConfiguration();
      var tmp19_$get_current$$composable_k5hjdh = $composer_7;
      var $composer_10 = tmp19_$get_current$$composable_k5hjdh;
      sourceInformationMarkerStart($composer_10, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_7 = $composer_10.consume_11nid3_k$(tmp18_$get_current$$composable_knyees);
      sourceInformationMarkerEnd($composer_10);
      tmp$ret$16 = tmp0_7;
      var viewConfiguration = tmp$ret$16;
      var materialized = materialize($composer_7, modifier_1);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp20_ReusableComposeNode$composable = Companion_getInstance_15().get_Constructor_f7ieep_k$();
      var tmp21_ReusableComposeNode$composable = $composer_7;
      var $composer_11 = tmp21_ReusableComposeNode$composable;
      $composer_11.startReplaceableGroup_rp6air_k$(-1096955905);
      sourceInformation($composer_11, 'CC(ReusableComposeNode$composable):Composables.kt#9igjgp');
      var tmp_5 = $composer_11.get_applier_bupu8u_k$();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_11.startReusableNode_jk07k2_k$();
      if ($composer_11.get_inserting_25mlsw_k$()) {
        var tmp_6 = $composer_11;
        tmp_6.createNode_p4ouwd_k$(BasicText$composable$lambda_1(tmp20_ReusableComposeNode$composable));
      } else {
        $composer_11.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp22__anonymous__gd5t6t = _Updater___init__impl__rbfxm8($composer_11);
      Updater__set_impl_v7kwss(tmp22__anonymous__gd5t6t, tmp24_Layout$composable, Companion_getInstance_15().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss(tmp22__anonymous__gd5t6t, density_0, Companion_getInstance_15().get_SetDensity_gmdtxr_k$());
      Updater__set_impl_v7kwss(tmp22__anonymous__gd5t6t, layoutDirection, Companion_getInstance_15().get_SetLayoutDirection_w7ypuk_k$());
      Updater__set_impl_v7kwss(tmp22__anonymous__gd5t6t, viewConfiguration, Companion_getInstance_15().get_SetViewConfiguration_lke0s8_k$());
      Updater__set_impl_v7kwss(tmp22__anonymous__gd5t6t, materialized, Companion_getInstance_15().get_SetModifier_6tz580_k$());
      $composer_11.endNode_3mkr10_k$();
      $composer_11.endReplaceableGroup_er37p7_k$();
      $composer_7.endReplaceableGroup_er37p7_k$();
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
      tmp1_safe_receiver.updateScope_xhrf9y_k$(BasicText$composable$lambda_2(text, modifier_0, style_0, onTextLayout_0, overflow_0, softWrap_0, maxLines_0, minLines_0, $changed, $default));
    }
  }
  function selectionIdSaver(selectionRegistrar) {
    var tmp = selectionIdSaver$lambda(selectionRegistrar);
    return Saver(tmp, selectionIdSaver$lambda_0);
  }
  function BasicText$composable$lambda(it) {
    return Unit_getInstance();
  }
  function BasicText$composable$lambda_0($selectionRegistrar) {
    return function () {
      return $selectionRegistrar.nextSelectableId_50rfx8_k$();
    };
  }
  function BasicText$composable$lambda_1($tmp20_ReusableComposeNode$composable) {
    return function () {
      return $tmp20_ReusableComposeNode$composable();
    };
  }
  function BasicText$composable$lambda_2($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $minLines, $$changed, $$default) {
    return function ($composer, $force) {
      BasicText$composable($text, $modifier._v, $style._v, $onTextLayout._v, $overflow._v.value_1, $softWrap._v, $maxLines._v, $minLines._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function selectionIdSaver$lambda($selectionRegistrar) {
    return function ($this$Saver, it) {
      return hasSelection($selectionRegistrar, it) ? it : null;
    };
  }
  function selectionIdSaver$lambda_0(it) {
    return it;
  }
  function get_EmptyInlineContent() {
    _init_properties_CoreText_kt__ygwl10();
    return EmptyInlineContent;
  }
  var EmptyInlineContent;
  function TextController$measurePolicy$o$measure$lambda($placeables) {
    return function ($this$layout) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $placeables.get_size_woubt6_k$() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $placeables.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.foundation.text.<no name provided>.measure.<anonymous>.<anonymous>' call
          var placeable = item.component1_7eebsc_k$();
          var position = item.component2_7eebsb_k$().packedValue_1;
          $this$layout.place$default_b921p1_k$(placeable, position);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _set_selectionRegistrar__8o1rli($this, _set____db54di) {
    $this.selectionRegistrar_1 = _set____db54di;
  }
  function _get_selectionRegistrar__p9tjiu($this) {
    return $this.selectionRegistrar_1;
  }
  function outOfBoundary($this, start, end) {
    var tmp0_safe_receiver = $this.state_1.layoutResult_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var lastOffset = tmp0_safe_receiver.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_text_wouvsm_k$().length;
      var rawStartOffset = tmp0_safe_receiver.getOffsetForPosition_f04xcw_k$(start);
      var rawEndOffset = tmp0_safe_receiver.getOffsetForPosition_f04xcw_k$(end);
      return (rawStartOffset >= (lastOffset - 1 | 0) ? rawEndOffset >= (lastOffset - 1 | 0) : false) ? true : rawStartOffset < 0 ? rawEndOffset < 0 : false;
    }
    return false;
  }
  function drawTextAndSelectionBehind(_this__u8e3s4, $this) {
    var tmp = graphicsLayer(_this__u8e3s4);
    return drawBehind(tmp, TextController$drawTextAndSelectionBehind$lambda($this));
  }
  function _get_coreModifiers__ebdw6k($this) {
    return $this.coreModifiers_1;
  }
  function _set_semanticsModifier__i9084f($this, _set____db54di) {
    $this.semanticsModifier_1 = _set____db54di;
  }
  function createSemanticsModifierFor($this, text) {
    var tmp = Companion_getInstance_7();
    return semantics(tmp, VOID, TextController$createSemanticsModifierFor$lambda(text, $this));
  }
  function _set_selectionModifiers__bn8ji1($this, _set____db54di) {
    $this.selectionModifiers_1 = _set____db54di;
  }
  function _get_selectionModifiers__pg07cr($this) {
    return $this.selectionModifiers_1;
  }
  function TextController$update$1(this$0, $selectionRegistrar) {
    this.this$0__1 = this$0;
    this.$selectionRegistrar_1 = $selectionRegistrar;
    this.lastPosition_1 = Companion_getInstance_4().get_Zero_sctq3f_k$();
    this.dragTotalDistance_1 = Companion_getInstance_4().get_Zero_sctq3f_k$();
  }
  protoOf(TextController$update$1).set_lastPosition_c0m3m_k$ = function (_set____db54di) {
    this.lastPosition_1 = _set____db54di;
  };
  protoOf(TextController$update$1).get_lastPosition_qh55to_k$ = function () {
    return this.lastPosition_1;
  };
  protoOf(TextController$update$1).set_dragTotalDistance_9d9fe6_k$ = function (_set____db54di) {
    this.dragTotalDistance_1 = _set____db54di;
  };
  protoOf(TextController$update$1).get_dragTotalDistance_e4qjdc_k$ = function () {
    return this.dragTotalDistance_1;
  };
  protoOf(TextController$update$1).onDown_ofe487_k$ = function (point) {
  };
  protoOf(TextController$update$1).onUp_30x6d3_k$ = function () {
  };
  protoOf(TextController$update$1).onStart_b65n5j_k$ = function (startPoint) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return Unit_getInstance();
      if (outOfBoundary(this.this$0__1, startPoint, startPoint)) {
        this.$selectionRegistrar_1.notifySelectionUpdateSelectAll_uyvpea_k$(this.this$0__1.state_1.selectableId_1);
      } else {
        this.$selectionRegistrar_1.notifySelectionUpdateStart_2s99iw_k$(tmp0_safe_receiver, startPoint, Companion_getInstance_27().get_Word_wockfn_k$());
      }
      this.lastPosition_1 = startPoint;
      tmp$ret$0 = Unit_getInstance();
    }
    if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
      return Unit_getInstance();
    this.dragTotalDistance_1 = Companion_getInstance_4().get_Zero_sctq3f_k$();
  };
  protoOf(TextController$update$1).onDrag_jolxfr_k$ = function (delta) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return Unit_getInstance();
      if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
        return Unit_getInstance();
      var tmp0_this = this;
      tmp0_this.dragTotalDistance_1 = Offset__plus_impl_c78cg0(tmp0_this.dragTotalDistance_1, delta);
      var newPosition = Offset__plus_impl_c78cg0(this.lastPosition_1, this.dragTotalDistance_1);
      var tmp;
      if (!outOfBoundary(this.this$0__1, this.lastPosition_1, newPosition)) {
        var tmp1_$this = this.$selectionRegistrar_1;
        var tmp2_previousPosition = this.lastPosition_1;
        var tmp3_adjustment = Companion_getInstance_27().get_CharacterWithWordAccelerate_b1h3l9_k$();
        var consumed = tmp1_$this.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, newPosition, tmp2_previousPosition, false, tmp3_adjustment);
        var tmp_0;
        if (consumed === true) {
          this.lastPosition_1 = newPosition;
          this.dragTotalDistance_1 = Companion_getInstance_4().get_Zero_sctq3f_k$();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      tmp$ret$0 = tmp;
    }
  };
  protoOf(TextController$update$1).onStop_aip7ow_k$ = function () {
    if (hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1)) {
      this.$selectionRegistrar_1.notifySelectionUpdateEnd_v1kl4u_k$();
    }
  };
  protoOf(TextController$update$1).onCancel_q8fje0_k$ = function () {
    if (hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1)) {
      this.$selectionRegistrar_1.notifySelectionUpdateEnd_v1kl4u_k$();
    }
  };
  function TextController$update$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TextController$update$slambda).invoke_dycxzz_k$ = function ($this$pointerInput, $completion) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(TextController$update$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(TextController$update$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = detectDragGesturesAfterLongPressWithObserver(this.$this$pointerInput_1, this.this$0__1.get_longPressDragObserver_iwhgs8_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(TextController$update$slambda).create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new TextController$update$slambda(this.this$0__1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  protoOf(TextController$update$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  function TextController$update$slambda_0(this$0, resultContinuation) {
    var i = new TextController$update$slambda(this$0, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.invoke_dycxzz_k$($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function TextController$update$mouseSelectionObserver$1(this$0, $selectionRegistrar) {
    this.this$0__1 = this$0;
    this.$selectionRegistrar_1 = $selectionRegistrar;
    this.lastPosition_1 = Companion_getInstance_4().get_Zero_sctq3f_k$();
  }
  protoOf(TextController$update$mouseSelectionObserver$1).set_lastPosition_c0m3m_k$ = function (_set____db54di) {
    this.lastPosition_1 = _set____db54di;
  };
  protoOf(TextController$update$mouseSelectionObserver$1).get_lastPosition_qh55to_k$ = function () {
    return this.lastPosition_1;
  };
  protoOf(TextController$update$mouseSelectionObserver$1).onExtend_dx8a28_k$ = function (downPosition) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var consumed = this.$selectionRegistrar_1.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, downPosition, this.lastPosition_1, false, Companion_getInstance_27().get_None_wo6tgh_k$());
      var tmp;
      if (consumed) {
        this.lastPosition_1 = downPosition;
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      return hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1);
    }
    return false;
  };
  protoOf(TextController$update$mouseSelectionObserver$1).onExtendDrag_m0cr7o_k$ = function (dragPosition) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
        return false;
      var consumed = this.$selectionRegistrar_1.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, dragPosition, this.lastPosition_1, false, Companion_getInstance_27().get_None_wo6tgh_k$());
      var tmp;
      if (consumed) {
        this.lastPosition_1 = dragPosition;
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
    }
    return true;
  };
  protoOf(TextController$update$mouseSelectionObserver$1).onStart_i02yuj_k$ = function (downPosition, adjustment) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      this.$selectionRegistrar_1.notifySelectionUpdateStart_2s99iw_k$(tmp0_safe_receiver, downPosition, adjustment);
      this.lastPosition_1 = downPosition;
      return hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1);
    }
    return false;
  };
  protoOf(TextController$update$mouseSelectionObserver$1).onDrag_4lf411_k$ = function (dragPosition, adjustment) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
        return false;
      var tmp0_$this = this.$selectionRegistrar_1;
      var tmp1_previousPosition = this.lastPosition_1;
      var consumed = tmp0_$this.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, dragPosition, tmp1_previousPosition, false, adjustment);
      var tmp;
      if (consumed === true) {
        this.lastPosition_1 = dragPosition;
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
    }
    return true;
  };
  function invoke$lambda($currentMouseSelectionObserver$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('currentMouseSelectionObserver', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $currentMouseSelectionObserver$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function TextController$update$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation) {
    this.$currentMouseSelectionObserver$delegate_1 = $currentMouseSelectionObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TextController$update$lambda$slambda).invoke_dycxzz_k$ = function ($this$pointerInput, $completion) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(TextController$update$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(TextController$update$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = mouseSelectionDetector(this.$this$pointerInput_1, invoke$lambda(this.$currentMouseSelectionObserver$delegate_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(TextController$update$lambda$slambda).create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new TextController$update$lambda$slambda(this.$currentMouseSelectionObserver$delegate_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  protoOf(TextController$update$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  function TextController$update$lambda$slambda_0($currentMouseSelectionObserver$delegate, resultContinuation) {
    var i = new TextController$update$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.invoke_dycxzz_k$($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function TextController$update$lambda($mouseSelectionObserver) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-1008655751);
      sourceInformation($composer_0, 'C285@13312L44,286@13396L101:CoreText.kt#423gt5');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1008655751, $changed, -1, 'androidx.compose.foundation.text.TextController.update.<anonymous> (CoreText.kt:284)');
        tmp = Unit_getInstance();
      }
      var currentMouseSelectionObserver$delegate = rememberUpdatedState$composable($mouseSelectionObserver, $composer_0, 8);
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(currentMouseSelectionObserver$delegate);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.text.TextController.update.<anonymous>.<anonymous>' call
        tmp$ret$0 = TextController$update$lambda$slambda_0(currentMouseSelectionObserver$delegate, null);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      var tmp0_0 = pointerInput($this$composed, Unit_getInstance(), tmp$ret$4);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_0;
    };
  }
  function TextController$measurePolicy$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(TextController$measurePolicy$1).measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    this.this$0__1.state_1.get_layoutInvalidation_eyt2xs_k$();
    var prevLayout = this.this$0__1.state_1.layoutResult_1;
    var layoutResult = this.this$0__1.state_1.textDelegate_1.layout_k0cayh_k$(constraints, _this__u8e3s4.get_layoutDirection_7e37v0_k$(), prevLayout);
    if (!equals(prevLayout, layoutResult)) {
      this.this$0__1.state_1.onTextLayout_1(layoutResult);
      var tmp0_safe_receiver = prevLayout;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp;
        if (!tmp0_safe_receiver.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().equals(layoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$())) {
          var tmp0_safe_receiver_0 = this.this$0__1.selectionRegistrar_1;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            tmp0_safe_receiver_0.notifySelectableChange_sw1lw8_k$(this.this$0__1.state_1.selectableId_1);
          }
          tmp = Unit_getInstance();
        }
        tmp$ret$0 = tmp;
      }
    }
    this.this$0__1.state_1.set_layoutResult_w8faq5_k$(layoutResult);
    // Inline function 'kotlin.check' call
    var tmp0_check = measurables.get_size_woubt6_k$() >= layoutResult.get_placeholderRects_1ky2fv_k$().get_size_woubt6_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$10;
    // Inline function 'androidx.compose.foundation.fastMapIndexedNotNull' call
    var tmp1_fastMapIndexedNotNull = layoutResult.get_placeholderRects_1ky2fv_k$();
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(tmp1_fastMapIndexedNotNull.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp1_fastMapIndexedNotNull.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp1_fastMapIndexedNotNull.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.foundation.fastMapIndexedNotNull.<anonymous>' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.foundation.text.<no name provided>.measure.<anonymous>' call
        var tmp0_safe_receiver_1 = item;
        var tmp_0;
        if (tmp0_safe_receiver_1 == null) {
          tmp_0 = null;
        } else {
          var tmp$ret$7;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$6;
          // Inline function 'androidx.compose.foundation.text.<no name provided>.measure.<anonymous>.<anonymous>' call
          var tmp_1 = measurables.get_fkrdnv_k$(index);
          var tmp$ret$2;
          // Inline function 'kotlin.math.floor' call
          var tmp0_floor = tmp0_safe_receiver_1.get_width_j0q4yl_k$();
          tmp$ret$2 = Math.floor(tmp0_floor);
          var tmp_2 = numberToInt(tmp$ret$2);
          var tmp$ret$3;
          // Inline function 'kotlin.math.floor' call
          var tmp1_floor = tmp0_safe_receiver_1.get_height_e7t92o_k$();
          tmp$ret$3 = Math.floor(tmp1_floor);
          var tmp_3 = tmp_1.measure_ikak0q_k$(Constraints(VOID, tmp_2, VOID, numberToInt(tmp$ret$3)));
          var tmp$ret$4;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp2_roundToInt = tmp0_safe_receiver_1.get_left_woprgw_k$();
          tmp$ret$4 = roundToInt(tmp2_roundToInt);
          var tmp_4 = tmp$ret$4;
          var tmp$ret$5;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp3_roundToInt = tmp0_safe_receiver_1.get_top_18ivbo_k$();
          tmp$ret$5 = roundToInt(tmp3_roundToInt);
          tmp$ret$6 = new Pair(tmp_3, new IntOffset(IntOffset_0(tmp_4, tmp$ret$5)));
          tmp$ret$7 = tmp$ret$6;
          tmp_0 = tmp$ret$7;
        }
        tmp$ret$8 = tmp_0;
        var tmp0_safe_receiver_2 = tmp$ret$8;
        if (tmp0_safe_receiver_2 == null)
          null;
        else {
          var tmp$ret$9;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          target.add_1j60pz_k$(tmp0_safe_receiver_2);
          tmp$ret$9 = Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
    tmp$ret$10 = target;
    var placeables = tmp$ret$10;
    var tmp_5 = _IntSize___get_width__impl__d9yl4o(layoutResult.get_size_yscczt_k$());
    var tmp_6 = _IntSize___get_height__impl__prv63b(layoutResult.get_size_yscczt_k$());
    var tmp_7 = get_FirstBaseline();
    var tmp$ret$11;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp2_roundToInt_0 = layoutResult.get_firstBaseline_s5430_k$();
    tmp$ret$11 = roundToInt(tmp2_roundToInt_0);
    var tmp_8 = to(tmp_7, tmp$ret$11);
    var tmp_9 = get_LastBaseline();
    var tmp$ret$12;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp3_roundToInt_0 = layoutResult.get_lastBaseline_inuptw_k$();
    tmp$ret$12 = roundToInt(tmp3_roundToInt_0);
    var tmp_10 = mapOf([tmp_8, to(tmp_9, tmp$ret$12)]);
    return _this__u8e3s4.layout_na8ejh_k$(tmp_5, tmp_6, tmp_10, TextController$measurePolicy$o$measure$lambda(placeables));
  };
  protoOf(TextController$measurePolicy$1).minIntrinsicWidth_h4fdo9_k$ = function (_this__u8e3s4, measurables, height) {
    this.this$0__1.state_1.textDelegate_1.layoutIntrinsics_4irjyy_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    return this.this$0__1.state_1.textDelegate_1.get_minIntrinsicWidth_lmc1rq_k$();
  };
  protoOf(TextController$measurePolicy$1).minIntrinsicHeight_n7gxym_k$ = function (_this__u8e3s4, measurables, width) {
    return _IntSize___get_height__impl__prv63b(this.this$0__1.state_1.textDelegate_1.layout$default_xpwrr2_k$(Constraints(0, width, 0, Companion_getInstance_16().get_Infinity_rvchkf_k$()), _this__u8e3s4.get_layoutDirection_7e37v0_k$()).get_size_yscczt_k$());
  };
  protoOf(TextController$measurePolicy$1).maxIntrinsicWidth_4tn57d_k$ = function (_this__u8e3s4, measurables, height) {
    this.this$0__1.state_1.textDelegate_1.layoutIntrinsics_4irjyy_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    return this.this$0__1.state_1.textDelegate_1.get_maxIntrinsicWidth_b4gk2k_k$();
  };
  protoOf(TextController$measurePolicy$1).maxIntrinsicHeight_6rhckk_k$ = function (_this__u8e3s4, measurables, width) {
    return _IntSize___get_height__impl__prv63b(this.this$0__1.state_1.textDelegate_1.layout$default_xpwrr2_k$(Constraints(0, width, 0, Companion_getInstance_16().get_Infinity_rvchkf_k$()), _this__u8e3s4.get_layoutDirection_7e37v0_k$()).get_size_yscczt_k$());
  };
  function TextController$drawTextAndSelectionBehind$lambda(this$0) {
    return function ($this$drawBehind) {
      var tmp0_safe_receiver = this$0.state_1.layoutResult_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.state_1.get_drawScopeInvalidation_eg7rzo_k$();
        var tmp0_safe_receiver_0 = this$0.selectionRegistrar_1;
        var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_subselections_i6sdj2_k$();
        var selection = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_1mhr4y_k$(this$0.state_1.selectableId_1);
        var tmp2_safe_receiver = this$0.state_1.selectable_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.getLastVisibleOffset_71yps7_k$();
        var lastVisibleOffset = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
        if (!(selection == null)) {
          var tmp;
          if (!selection.get_handlesCrossed_5utwpv_k$()) {
            tmp = selection.get_start_iypx6h_k$().get_offset_hjmqak_k$();
          } else {
            tmp = selection.get_end_18j6ha_k$().get_offset_hjmqak_k$();
          }
          var start = coerceIn(tmp, 0, lastVisibleOffset);
          var tmp_0;
          if (!selection.get_handlesCrossed_5utwpv_k$()) {
            tmp_0 = selection.get_end_18j6ha_k$().get_offset_hjmqak_k$();
          } else {
            tmp_0 = selection.get_start_iypx6h_k$().get_offset_hjmqak_k$();
          }
          var end = coerceIn(tmp_0, 0, lastVisibleOffset);
          if (!(start === end)) {
            var selectionPath = tmp0_safe_receiver.get_multiParagraph_xte3we_k$().getPathForRange_i163f3_k$(start, end);
            if (tmp0_safe_receiver.get_layoutInput_o7gjah_k$().get_overflow_rjdkkj_k$() === Companion_getInstance_14().get_Visible_2hbc1x_k$()) {
              $this$drawBehind.drawPath$default_2kcp9b_k$(selectionPath, this$0.state_1.selectionBackgroundColor_1);
            } else {
              var tmp$ret$2;
              // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
              var tmp2_clipRect = _Size___get_width__impl__58y75t($this$drawBehind.get_size_x9ctfw_k$());
              var tmp3_clipRect = _Size___get_height__impl__a04p02($this$drawBehind.get_size_x9ctfw_k$());
              var tmp4_clipRect = Companion_getInstance_8().get_Intersect_ow3v69_k$();
              var tmp$ret$1;
              // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
              var tmp$ret$0;
              // Inline function 'kotlin.with' call
              var tmp0_with = $this$drawBehind.get_drawContext_ffwztu_k$();
              // Inline function 'kotlin.contracts.contract' call
              var previousSize = tmp0_with.get_size_x9ctfw_k$();
              tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
              // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
              var tmp1__anonymous__uwfjfc = tmp0_with.get_transform_px941v_k$();
              tmp1__anonymous__uwfjfc.clipRect_si0ig1_k$(0.0, 0.0, tmp2_clipRect, tmp3_clipRect, tmp4_clipRect);
              // Inline function 'androidx.compose.foundation.text.TextController.drawTextAndSelectionBehind.<anonymous>.<anonymous>.<anonymous>' call
              $this$drawBehind.drawPath$default_2kcp9b_k$(selectionPath, this$0.state_1.selectionBackgroundColor_1);
              tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
              tmp0_with.set_size_xj1bzm_k$(previousSize);
              tmp$ret$0 = Unit_getInstance();
              tmp$ret$1 = tmp$ret$0;
              tmp$ret$2 = tmp$ret$1;
            }
          }
        }
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
        var tmp5__anonymous__kpxxpo = $this$drawBehind.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
        Companion_getInstance_26().paint_ct2xtf_k$(tmp5__anonymous__kpxxpo, tmp0_safe_receiver);
        tmp$ret$3 = Unit_getInstance();
        tmp$ret$4 = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function TextController$coreModifiers$lambda(this$0) {
    return function (it) {
      this$0.state_1.layoutCoordinates_1 = it;
      var tmp;
      if (hasSelection(this$0.selectionRegistrar_1, this$0.state_1.selectableId_1)) {
        var newGlobalPosition = positionInWindow(it);
        if (!equals(newGlobalPosition, this$0.state_1.previousGlobalPosition_1)) {
          var tmp0_safe_receiver = this$0.selectionRegistrar_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.notifyPositionChange_v9it6j_k$(this$0.state_1.selectableId_1);
          }
        }
        this$0.state_1.previousGlobalPosition_1 = newGlobalPosition;
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TextController$createSemanticsModifierFor$lambda$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(this$0.state_1.layoutResult_1 == null)) {
        it.add_1j60pz_k$(ensureNotNull(this$0.state_1.layoutResult_1));
        tmp = true;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function TextController$createSemanticsModifierFor$lambda($text, this$0) {
    return function ($this$semantics) {
      set_text($this$semantics, $text);
      getTextLayoutResult($this$semantics, VOID, TextController$createSemanticsModifierFor$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function TextController$onRemembered$lambda(this$0) {
    return function () {
      return this$0.state_1.layoutCoordinates_1;
    };
  }
  function TextController$onRemembered$lambda_0(this$0) {
    return function () {
      return this$0.state_1.layoutResult_1;
    };
  }
  function TextController(state) {
    this.state_1 = state;
    this.selectionRegistrar_1 = null;
    var tmp = this;
    tmp.measurePolicy_1 = new TextController$measurePolicy$1(this);
    var tmp_0 = this;
    var tmp_1 = drawTextAndSelectionBehind(Companion_getInstance_7(), this);
    tmp_0.coreModifiers_1 = onGloballyPositioned(tmp_1, TextController$coreModifiers$lambda(this));
    this.semanticsModifier_1 = createSemanticsModifierFor(this, this.state_1.textDelegate_1.get_text_wouvsm_k$());
    this.selectionModifiers_1 = Companion_getInstance_7();
  }
  protoOf(TextController).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(TextController).set_longPressDragObserver_6j2j9a_k$ = function (_set____db54di) {
    this.longPressDragObserver_1 = _set____db54di;
  };
  protoOf(TextController).get_longPressDragObserver_iwhgs8_k$ = function () {
    var tmp = this.longPressDragObserver_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('longPressDragObserver');
    }
  };
  protoOf(TextController).update_mq7n96_k$ = function (selectionRegistrar) {
    this.selectionRegistrar_1 = selectionRegistrar;
    var tmp = this;
    var tmp_0;
    if (!(selectionRegistrar == null)) {
      var tmp_1;
      if (get_isInTouchMode()) {
        var tmp_2 = this;
        tmp_2.longPressDragObserver_1 = new TextController$update$1(this, selectionRegistrar);
        var tmp_3 = Companion_getInstance_7();
        var tmp_4 = this.get_longPressDragObserver_iwhgs8_k$();
        tmp_1 = pointerInput(tmp_3, tmp_4, TextController$update$slambda_0(this, null));
      } else {
        var mouseSelectionObserver = new TextController$update$mouseSelectionObserver$1(this, selectionRegistrar);
        var tmp_5 = Companion_getInstance_7();
        tmp_1 = composed$composable(tmp_5, VOID, TextController$update$lambda(mouseSelectionObserver));
      }
      tmp_0 = pointerHoverIcon(tmp_1, get_textPointerIcon());
    } else {
      tmp_0 = Companion_getInstance_7();
    }
    tmp.selectionModifiers_1 = tmp_0;
  };
  protoOf(TextController).setTextDelegate_gbukbh_k$ = function (textDelegate) {
    if (this.state_1.textDelegate_1 === textDelegate) {
      return Unit_getInstance();
    }
    this.state_1.set_textDelegate_pcem3c_k$(textDelegate);
    this.semanticsModifier_1 = createSemanticsModifierFor(this, this.state_1.textDelegate_1.get_text_wouvsm_k$());
  };
  protoOf(TextController).get_measurePolicy_ckysxz_k$ = function () {
    return this.measurePolicy_1;
  };
  protoOf(TextController).get_semanticsModifier_opfznp_k$ = function () {
    return this.semanticsModifier_1;
  };
  protoOf(TextController).get_modifiers_mxb6zx_k$ = function () {
    return heightInLines(this.coreModifiers_1, this.state_1.textDelegate_1.get_style_iyqetk_k$(), this.state_1.textDelegate_1.get_minLines_gb0a6u_k$()).then_5qw5wu_k$(this.semanticsModifier_1).then_5qw5wu_k$(this.selectionModifiers_1);
  };
  protoOf(TextController).onRemembered_6899sq_k$ = function () {
    var tmp0_safe_receiver = this.selectionRegistrar_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp = this.state_1;
      var tmp_0 = TextController$onRemembered$lambda(this);
      tmp.selectable_1 = tmp0_safe_receiver.subscribe_dtjpsa_k$(new MultiWidgetSelectionDelegate(this.state_1.selectableId_1, tmp_0, TextController$onRemembered$lambda_0(this)));
      tmp$ret$0 = Unit_getInstance();
    }
  };
  protoOf(TextController).onForgotten_pcab12_k$ = function () {
    var tmp0_safe_receiver = this.state_1.selectable_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.TextController.onForgotten.<anonymous>' call
      var tmp0_safe_receiver_0 = this.selectionRegistrar_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver_0.unsubscribe_h2q9j4_k$(tmp0_safe_receiver);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
    }
  };
  protoOf(TextController).onAbandoned_1hgzvg_k$ = function () {
    var tmp0_safe_receiver = this.state_1.selectable_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.TextController.onAbandoned.<anonymous>' call
      var tmp0_safe_receiver_0 = this.selectionRegistrar_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver_0.unsubscribe_h2q9j4_k$(tmp0_safe_receiver);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
    }
  };
  function _set_drawScopeInvalidation__nu6luf($this, _set____db54di) {
    var tmp0_setValue = drawScopeInvalidation$factory();
    return $this.drawScopeInvalidation$delegate_1.set_value_rnwamw_k$(Unit_getInstance());
  }
  function _set_layoutInvalidation__ymxm27($this, _set____db54di) {
    var tmp0_setValue = layoutInvalidation$factory();
    return $this.layoutInvalidation$delegate_1.set_value_rnwamw_k$(Unit_getInstance());
  }
  function TextState$onTextLayout$lambda(it) {
    return Unit_getInstance();
  }
  function TextState(textDelegate, selectableId) {
    this.selectableId_1 = selectableId;
    var tmp = this;
    tmp.onTextLayout_1 = TextState$onTextLayout$lambda;
    this.selectable_1 = null;
    this.layoutCoordinates_1 = null;
    this.textDelegate_1 = textDelegate;
    this.layoutResult_1 = null;
    this.previousGlobalPosition_1 = Companion_getInstance_4().get_Zero_sctq3f_k$();
    this.selectionBackgroundColor_1 = Companion_getInstance_0().get_Unspecified_9ntdt9_k$();
    this.drawScopeInvalidation$delegate_1 = mutableStateOf(Unit_getInstance(), neverEqualPolicy());
    this.layoutInvalidation$delegate_1 = mutableStateOf(Unit_getInstance(), neverEqualPolicy());
  }
  protoOf(TextState).get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(TextState).set_onTextLayout_oewkcw_k$ = function (_set____db54di) {
    this.onTextLayout_1 = _set____db54di;
  };
  protoOf(TextState).get_onTextLayout_fs9rnj_k$ = function () {
    return this.onTextLayout_1;
  };
  protoOf(TextState).set_selectable_i9p2dh_k$ = function (_set____db54di) {
    this.selectable_1 = _set____db54di;
  };
  protoOf(TextState).get_selectable_nh695r_k$ = function () {
    return this.selectable_1;
  };
  protoOf(TextState).set_layoutCoordinates_kms66b_k$ = function (_set____db54di) {
    this.layoutCoordinates_1 = _set____db54di;
  };
  protoOf(TextState).get_layoutCoordinates_d2f0vs_k$ = function () {
    return this.layoutCoordinates_1;
  };
  protoOf(TextState).set_textDelegate_pcem3c_k$ = function (value) {
    _set_layoutInvalidation__ymxm27(this, Unit_getInstance());
    this.textDelegate_1 = value;
  };
  protoOf(TextState).get_textDelegate_dno657_k$ = function () {
    return this.textDelegate_1;
  };
  protoOf(TextState).set_layoutResult_w8faq5_k$ = function (value) {
    _set_drawScopeInvalidation__nu6luf(this, Unit_getInstance());
    this.layoutResult_1 = value;
  };
  protoOf(TextState).get_layoutResult_z1ics0_k$ = function () {
    return this.layoutResult_1;
  };
  protoOf(TextState).set_previousGlobalPosition_nfalq2_k$ = function (_set____db54di) {
    this.previousGlobalPosition_1 = _set____db54di;
  };
  protoOf(TextState).get_previousGlobalPosition_f2hyzk_k$ = function () {
    return this.previousGlobalPosition_1;
  };
  protoOf(TextState).set_selectionBackgroundColor_u9adkx_k$ = function (_set____db54di) {
    this.selectionBackgroundColor_1 = _set____db54di;
  };
  protoOf(TextState).get_selectionBackgroundColor_ppt05z_k$ = function () {
    return this.selectionBackgroundColor_1;
  };
  protoOf(TextState).get_drawScopeInvalidation_eg7rzo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = drawScopeInvalidation$factory_0();
    tmp$ret$0 = this.drawScopeInvalidation$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  protoOf(TextState).get_layoutInvalidation_eyt2xs_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = layoutInvalidation$factory_0();
    tmp$ret$0 = this.layoutInvalidation$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  function updateTextDelegate(current, text, style, density, fontFamilyResolver, softWrap, overflow, maxLines, minLines) {
    softWrap = softWrap === VOID ? true : softWrap;
    overflow = overflow === VOID ? Companion_getInstance_14().get_Clip_a6y3d7_k$() : overflow;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    _init_properties_CoreText_kt__ygwl10();
    var tmp;
    if (((((((!(current.get_text_wouvsm_k$().get_text_wouvsm_k$() === text) ? true : !current.get_style_iyqetk_k$().equals(style)) ? true : !(current.get_softWrap_a000bn_k$() === softWrap)) ? true : !(current.get_overflow_rjdkkj_k$() === overflow)) ? true : !(current.get_maxLines_pclpoc_k$() === maxLines)) ? true : !(current.get_minLines_gb0a6u_k$() === minLines)) ? true : !equals(current.get_density_qy0267_k$(), density)) ? true : !(current.get_fontFamilyResolver_9o0fjy_k$() === fontFamilyResolver)) {
      var tmp0_text = AnnotatedString_init_$Create$(text);
      tmp = new TextDelegate(tmp0_text, style, maxLines, minLines, softWrap, overflow, density, fontFamilyResolver);
    } else {
      tmp = current;
    }
    return tmp;
  }
  function drawScopeInvalidation$factory() {
    return getPropertyCallableRef('drawScopeInvalidation', 1, KMutableProperty1, function (receiver) {
      receiver.get_drawScopeInvalidation_eg7rzo_k$();
      return Unit_getInstance();
    }, function (receiver, value) {
      return _set_drawScopeInvalidation__nu6luf(receiver, value);
    });
  }
  function drawScopeInvalidation$factory_0() {
    return getPropertyCallableRef('drawScopeInvalidation', 1, KMutableProperty1, function (receiver) {
      receiver.get_drawScopeInvalidation_eg7rzo_k$();
      return Unit_getInstance();
    }, function (receiver, value) {
      return _set_drawScopeInvalidation__nu6luf(receiver, value);
    });
  }
  function layoutInvalidation$factory() {
    return getPropertyCallableRef('layoutInvalidation', 1, KMutableProperty1, function (receiver) {
      receiver.get_layoutInvalidation_eyt2xs_k$();
      return Unit_getInstance();
    }, function (receiver, value) {
      return _set_layoutInvalidation__ymxm27(receiver, value);
    });
  }
  function layoutInvalidation$factory_0() {
    return getPropertyCallableRef('layoutInvalidation', 1, KMutableProperty1, function (receiver) {
      receiver.get_layoutInvalidation_eyt2xs_k$();
      return Unit_getInstance();
    }, function (receiver, value) {
      return _set_layoutInvalidation__ymxm27(receiver, value);
    });
  }
  var properties_initialized_CoreText_kt_p1onji;
  function _init_properties_CoreText_kt__ygwl10() {
    if (properties_initialized_CoreText_kt_p1onji) {
    } else {
      properties_initialized_CoreText_kt_p1onji = true;
      EmptyInlineContent = new Pair(emptyList(), emptyList());
    }
  }
  var Handle_Cursor_instance;
  var Handle_SelectionStart_instance;
  var Handle_SelectionEnd_instance;
  function values_0() {
    return [Handle_Cursor_getInstance(), Handle_SelectionStart_getInstance(), Handle_SelectionEnd_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Cursor':
        return Handle_Cursor_getInstance();
      case 'SelectionStart':
        return Handle_SelectionStart_getInstance();
      case 'SelectionEnd':
        return Handle_SelectionEnd_getInstance();
      default:
        Handle_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Handle_entriesInitialized;
  function Handle_initEntries() {
    if (Handle_entriesInitialized)
      return Unit_getInstance();
    Handle_entriesInitialized = true;
    Handle_Cursor_instance = new Handle('Cursor', 0);
    Handle_SelectionStart_instance = new Handle('SelectionStart', 1);
    Handle_SelectionEnd_instance = new Handle('SelectionEnd', 2);
  }
  function Handle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Handle_Cursor_getInstance() {
    Handle_initEntries();
    return Handle_Cursor_instance;
  }
  function Handle_SelectionStart_getInstance() {
    Handle_initEntries();
    return Handle_SelectionStart_instance;
  }
  function Handle_SelectionEnd_getInstance() {
    Handle_initEntries();
    return Handle_SelectionEnd_instance;
  }
  function validateMinMaxLines(minLines, maxLines) {
    // Inline function 'kotlin.require' call
    var tmp0_require = minLines > 0 ? maxLines > 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.validateMinMaxLines.<anonymous>' call
      tmp$ret$0 = 'both minLines ' + minLines + ' and maxLines ' + maxLines + ' must be greater than zero';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = minLines <= maxLines;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.foundation.text.validateMinMaxLines.<anonymous>' call
      tmp$ret$1 = 'minLines ' + minLines + ' must be less than or equal to maxLines ' + maxLines;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function heightInLines(_this__u8e3s4, textStyle, minLines, maxLines) {
    minLines = minLines === VOID ? 1 : minLines;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightInLines$lambda(minLines, maxLines, textStyle);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp_0 = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp_0, heightInLines$lambda_0(minLines, maxLines, textStyle));
  }
  function get_DefaultMinLines() {
    return DefaultMinLines;
  }
  var DefaultMinLines;
  function heightInLines$lambda($minLines, $maxLines, $textStyle) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('heightInLines');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('minLines', $minLines);
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('maxLines', $maxLines);
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('textStyle', $textStyle);
      return Unit_getInstance();
    };
  }
  function invoke$lambda_0($typeface$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('typeface', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $typeface$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function heightInLines$lambda_0($minLines, $maxLines, $textStyle) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(408240218);
      sourceInformation($composer_0, 'C62@2391L7,63@2452L7,64@2507L7,68@2678L96,71@2795L312,80@3135L366,96@3533L428:HeightInLinesModifier.kt#423gt5');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(408240218, $changed, -1, 'androidx.compose.foundation.text.heightInLines.<anonymous> (HeightInLinesModifier.kt:58)');
        tmp = Unit_getInstance();
      }
      validateMinMaxLines($minLines, $maxLines);
      var tmp_0;
      if ($minLines === 1 ? $maxLines === IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : false) {
        var tmp1_return = Companion_getInstance_7();
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_0.endReplaceableGroup_er37p7_k$();
        return tmp1_return;
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var density = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalFontFamilyResolver();
      var tmp3_$get_current$$composable_fm67ua = $composer_0;
      var $composer_2 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.consume_11nid3_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$1 = tmp0_0;
      var fontFamilyResolver = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalLayoutDirection();
      var tmp5_$get_current$$composable_el8hro = $composer_0;
      var $composer_3 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.consume_11nid3_k$(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$2 = tmp0_1;
      var layoutDirection = tmp$ret$2;
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp9_remember$composable = $composer_0;
      var $composer_4 = tmp9_remember$composable;
      $composer_4.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_4, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp7_cache = $composer_4;
      var tmp8_cache = !!($composer_4.changed_ga7h3f_k$($textStyle) | $composer_4.changed_ga7h3f_k$(layoutDirection));
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp6_let = tmp7_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp8_cache ? true : tmp6_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
        var tmp$ret$3;
        // Inline function 'androidx.compose.foundation.text.heightInLines.<anonymous>.<anonymous>' call
        tmp$ret$3 = resolveDefaults($textStyle, layoutDirection);
        var value = tmp$ret$3;
        tmp7_cache.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp6_let;
      }
      tmp$ret$4 = tmp_1;
      tmp$ret$5 = tmp$ret$4;
      var tmp_2 = tmp$ret$5;
      tmp$ret$6 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_2 = tmp$ret$6;
      $composer_4.endReplaceableGroup_er37p7_k$();
      tmp$ret$7 = tmp0_2;
      var resolvedStyle = tmp$ret$7;
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp13_remember$composable = $composer_0;
      var $composer_5 = tmp13_remember$composable;
      $composer_5.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_5, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp11_cache = $composer_5;
      var tmp12_cache = !!($composer_5.changed_ga7h3f_k$(fontFamilyResolver) | $composer_5.changed_ga7h3f_k$(resolvedStyle));
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      var tmp10_let = tmp11_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp12_cache ? true : tmp10_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
        var tmp$ret$8;
        // Inline function 'androidx.compose.foundation.text.heightInLines.<anonymous>.<anonymous>' call
        var tmp_4 = resolvedStyle.get_fontFamily_ulphcs_k$();
        var tmp0_elvis_lhs = resolvedStyle.get_fontWeight_wbif2o_k$();
        var tmp_5 = tmp0_elvis_lhs == null ? Companion_getInstance_17().get_Normal_22avww_k$() : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = resolvedStyle.get_fontStyle_fze7ml_k$();
        var tmp_6;
        var tmp_7 = tmp1_elvis_lhs;
        if ((tmp_7 == null ? null : new FontStyle(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_18().get_Normal_b4ik9_k$();
        } else {
          tmp_6 = tmp1_elvis_lhs;
        }
        var tmp_8 = tmp_6;
        var tmp2_elvis_lhs = resolvedStyle.get_fontSynthesis_t08ei1_k$();
        var tmp_9;
        var tmp_10 = tmp2_elvis_lhs;
        if ((tmp_10 == null ? null : new FontSynthesis(tmp_10)) == null) {
          tmp_9 = Companion_getInstance_19().get_All_wqntwc_k$();
        } else {
          tmp_9 = tmp2_elvis_lhs;
        }
        tmp$ret$8 = fontFamilyResolver.resolve_3z78ru_k$(tmp_4, tmp_5, tmp_8, tmp_9);
        var value_0 = tmp$ret$8;
        tmp11_cache.updateRememberedValue_l1colo_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp10_let;
      }
      tmp$ret$9 = tmp_3;
      tmp$ret$10 = tmp$ret$9;
      var tmp_11 = tmp$ret$10;
      tmp$ret$11 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
      var tmp0_3 = tmp$ret$11;
      $composer_5.endReplaceableGroup_er37p7_k$();
      tmp$ret$12 = tmp0_3;
      var typeface$delegate = tmp$ret$12;
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp17_remember$composable = [density, fontFamilyResolver, $textStyle, layoutDirection, invoke$lambda_0(typeface$delegate)];
      var tmp18_remember$composable = $composer_0;
      var $composer_6 = tmp18_remember$composable;
      $composer_6.startReplaceableGroup_rp6air_k$(-1603429786);
      sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = tmp17_remember$composable;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_6.changed_ga7h3f_k$(key));
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp15_cache = $composer_6;
      var tmp16_cache = invalid;
      var tmp$ret$15;
      // Inline function 'kotlin.let' call
      var tmp14_let = tmp15_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_12;
      if (tmp16_cache ? true : tmp14_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
        var tmp$ret$13;
        // Inline function 'androidx.compose.foundation.text.heightInLines.<anonymous>.<anonymous>' call
        tmp$ret$13 = _IntSize___get_height__impl__prv63b(computeSizeForDefaultText(resolvedStyle, density, fontFamilyResolver, get_EmptyTextReplacement(), 1));
        var value_1 = tmp$ret$13;
        tmp15_cache.updateRememberedValue_l1colo_k$(value_1);
        tmp_12 = value_1;
      } else {
        tmp_12 = tmp14_let;
      }
      tmp$ret$14 = tmp_12;
      tmp$ret$15 = tmp$ret$14;
      var tmp_13 = tmp$ret$15;
      tmp$ret$16 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
      var tmp0_4 = tmp$ret$16;
      $composer_6.endReplaceableGroup_er37p7_k$();
      tmp$ret$17 = tmp0_4;
      var firstLineHeight = tmp$ret$17;
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp22_remember$composable = [density, fontFamilyResolver, $textStyle, layoutDirection, invoke$lambda_0(typeface$delegate)];
      var tmp23_remember$composable = $composer_0;
      var $composer_7 = tmp23_remember$composable;
      $composer_7.startReplaceableGroup_rp6air_k$(-1603429786);
      sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid_0 = false;
      var indexedObject_0 = tmp22_remember$composable;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var key_0 = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        invalid_0 = !!(invalid_0 | $composer_7.changed_ga7h3f_k$(key_0));
      }
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp20_cache = $composer_7;
      var tmp21_cache = invalid_0;
      var tmp$ret$20;
      // Inline function 'kotlin.let' call
      var tmp19_let = tmp20_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_14;
      if (tmp21_cache ? true : tmp19_let === Companion_getInstance_6().get_Empty_i9b85g_k$()) {
        var tmp$ret$18;
        // Inline function 'androidx.compose.foundation.text.heightInLines.<anonymous>.<anonymous>' call
        var twoLines = get_EmptyTextReplacement() + '\n' + get_EmptyTextReplacement();
        tmp$ret$18 = _IntSize___get_height__impl__prv63b(computeSizeForDefaultText(resolvedStyle, density, fontFamilyResolver, twoLines, 2));
        var value_2 = tmp$ret$18;
        tmp20_cache.updateRememberedValue_l1colo_k$(value_2);
        tmp_14 = value_2;
      } else {
        tmp_14 = tmp19_let;
      }
      tmp$ret$19 = tmp_14;
      tmp$ret$20 = tmp$ret$19;
      var tmp_15 = tmp$ret$20;
      tmp$ret$21 = (tmp_15 == null ? true : isObject(tmp_15)) ? tmp_15 : THROW_CCE();
      var tmp0_5 = tmp$ret$21;
      $composer_7.endReplaceableGroup_er37p7_k$();
      tmp$ret$22 = tmp0_5;
      var firstTwoLinesHeight = tmp$ret$22;
      var lineHeight = firstTwoLinesHeight - firstLineHeight | 0;
      var precomputedMinLinesHeight = $minLines === 1 ? null : firstLineHeight + imul(lineHeight, $minLines - 1 | 0) | 0;
      var precomputedMaxLinesHeight = $maxLines === IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() ? null : firstLineHeight + imul(lineHeight, $maxLines - 1 | 0) | 0;
      var tmp$ret$24;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$23;
      // Inline function 'androidx.compose.foundation.text.heightInLines.<anonymous>.<anonymous>' call
      var tmp_16 = Companion_getInstance_7();
      var tmp0_safe_receiver = precomputedMinLinesHeight;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver == null ? null : density.toDp_2eugbd_k$(tmp0_safe_receiver);
      var tmp_17;
      var tmp_18 = tmp1_elvis_lhs_0;
      if ((tmp_18 == null ? null : new Dp(tmp_18)) == null) {
        tmp_17 = Companion_getInstance_5().get_Unspecified_o6a50p_k$();
      } else {
        tmp_17 = tmp1_elvis_lhs_0;
      }
      var tmp_19 = tmp_17;
      var tmp2_safe_receiver = precomputedMaxLinesHeight;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : density.toDp_2eugbd_k$(tmp2_safe_receiver);
      var tmp_20;
      var tmp_21 = tmp3_elvis_lhs;
      if ((tmp_21 == null ? null : new Dp(tmp_21)) == null) {
        tmp_20 = Companion_getInstance_5().get_Unspecified_o6a50p_k$();
      } else {
        tmp_20 = tmp3_elvis_lhs;
      }
      var tmp0_return = heightIn(tmp_16, tmp_19, tmp_20);
      tmp$ret$23 = tmp0_return;
      tmp$ret$24 = tmp$ret$23;
      var tmp0_6 = tmp$ret$24;
      var tmp_22;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_22 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_6;
    };
  }
  function InternalFoundationTextApi() {
  }
  protoOf(InternalFoundationTextApi).equals = function (other) {
    if (!(other instanceof InternalFoundationTextApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalFoundationTextApi ? other : THROW_CCE();
    return true;
  };
  protoOf(InternalFoundationTextApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalFoundationTextApi).toString = function () {
    return '@androidx.compose.foundation.text.InternalFoundationTextApi()';
  };
  var KeyCommand_LEFT_CHAR_instance;
  var KeyCommand_RIGHT_CHAR_instance;
  var KeyCommand_RIGHT_WORD_instance;
  var KeyCommand_LEFT_WORD_instance;
  var KeyCommand_NEXT_PARAGRAPH_instance;
  var KeyCommand_PREV_PARAGRAPH_instance;
  var KeyCommand_LINE_START_instance;
  var KeyCommand_LINE_END_instance;
  var KeyCommand_LINE_LEFT_instance;
  var KeyCommand_LINE_RIGHT_instance;
  var KeyCommand_UP_instance;
  var KeyCommand_DOWN_instance;
  var KeyCommand_PAGE_UP_instance;
  var KeyCommand_PAGE_DOWN_instance;
  var KeyCommand_HOME_instance;
  var KeyCommand_END_instance;
  var KeyCommand_COPY_instance;
  var KeyCommand_PASTE_instance;
  var KeyCommand_CUT_instance;
  var KeyCommand_DELETE_PREV_CHAR_instance;
  var KeyCommand_DELETE_NEXT_CHAR_instance;
  var KeyCommand_DELETE_PREV_WORD_instance;
  var KeyCommand_DELETE_NEXT_WORD_instance;
  var KeyCommand_DELETE_FROM_LINE_START_instance;
  var KeyCommand_DELETE_TO_LINE_END_instance;
  var KeyCommand_SELECT_ALL_instance;
  var KeyCommand_SELECT_LEFT_CHAR_instance;
  var KeyCommand_SELECT_RIGHT_CHAR_instance;
  var KeyCommand_SELECT_UP_instance;
  var KeyCommand_SELECT_DOWN_instance;
  var KeyCommand_SELECT_PAGE_UP_instance;
  var KeyCommand_SELECT_PAGE_DOWN_instance;
  var KeyCommand_SELECT_HOME_instance;
  var KeyCommand_SELECT_END_instance;
  var KeyCommand_SELECT_LEFT_WORD_instance;
  var KeyCommand_SELECT_RIGHT_WORD_instance;
  var KeyCommand_SELECT_NEXT_PARAGRAPH_instance;
  var KeyCommand_SELECT_PREV_PARAGRAPH_instance;
  var KeyCommand_SELECT_LINE_START_instance;
  var KeyCommand_SELECT_LINE_END_instance;
  var KeyCommand_SELECT_LINE_LEFT_instance;
  var KeyCommand_SELECT_LINE_RIGHT_instance;
  var KeyCommand_DESELECT_instance;
  var KeyCommand_NEW_LINE_instance;
  var KeyCommand_TAB_instance;
  var KeyCommand_UNDO_instance;
  var KeyCommand_REDO_instance;
  var KeyCommand_CHARACTER_PALETTE_instance;
  function values_1() {
    return [KeyCommand_LEFT_CHAR_getInstance(), KeyCommand_RIGHT_CHAR_getInstance(), KeyCommand_RIGHT_WORD_getInstance(), KeyCommand_LEFT_WORD_getInstance(), KeyCommand_NEXT_PARAGRAPH_getInstance(), KeyCommand_PREV_PARAGRAPH_getInstance(), KeyCommand_LINE_START_getInstance(), KeyCommand_LINE_END_getInstance(), KeyCommand_LINE_LEFT_getInstance(), KeyCommand_LINE_RIGHT_getInstance(), KeyCommand_UP_getInstance(), KeyCommand_DOWN_getInstance(), KeyCommand_PAGE_UP_getInstance(), KeyCommand_PAGE_DOWN_getInstance(), KeyCommand_HOME_getInstance(), KeyCommand_END_getInstance(), KeyCommand_COPY_getInstance(), KeyCommand_PASTE_getInstance(), KeyCommand_CUT_getInstance(), KeyCommand_DELETE_PREV_CHAR_getInstance(), KeyCommand_DELETE_NEXT_CHAR_getInstance(), KeyCommand_DELETE_PREV_WORD_getInstance(), KeyCommand_DELETE_NEXT_WORD_getInstance(), KeyCommand_DELETE_FROM_LINE_START_getInstance(), KeyCommand_DELETE_TO_LINE_END_getInstance(), KeyCommand_SELECT_ALL_getInstance(), KeyCommand_SELECT_LEFT_CHAR_getInstance(), KeyCommand_SELECT_RIGHT_CHAR_getInstance(), KeyCommand_SELECT_UP_getInstance(), KeyCommand_SELECT_DOWN_getInstance(), KeyCommand_SELECT_PAGE_UP_getInstance(), KeyCommand_SELECT_PAGE_DOWN_getInstance(), KeyCommand_SELECT_HOME_getInstance(), KeyCommand_SELECT_END_getInstance(), KeyCommand_SELECT_LEFT_WORD_getInstance(), KeyCommand_SELECT_RIGHT_WORD_getInstance(), KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance(), KeyCommand_SELECT_PREV_PARAGRAPH_getInstance(), KeyCommand_SELECT_LINE_START_getInstance(), KeyCommand_SELECT_LINE_END_getInstance(), KeyCommand_SELECT_LINE_LEFT_getInstance(), KeyCommand_SELECT_LINE_RIGHT_getInstance(), KeyCommand_DESELECT_getInstance(), KeyCommand_NEW_LINE_getInstance(), KeyCommand_TAB_getInstance(), KeyCommand_UNDO_getInstance(), KeyCommand_REDO_getInstance(), KeyCommand_CHARACTER_PALETTE_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'LEFT_CHAR':
        return KeyCommand_LEFT_CHAR_getInstance();
      case 'RIGHT_CHAR':
        return KeyCommand_RIGHT_CHAR_getInstance();
      case 'RIGHT_WORD':
        return KeyCommand_RIGHT_WORD_getInstance();
      case 'LEFT_WORD':
        return KeyCommand_LEFT_WORD_getInstance();
      case 'NEXT_PARAGRAPH':
        return KeyCommand_NEXT_PARAGRAPH_getInstance();
      case 'PREV_PARAGRAPH':
        return KeyCommand_PREV_PARAGRAPH_getInstance();
      case 'LINE_START':
        return KeyCommand_LINE_START_getInstance();
      case 'LINE_END':
        return KeyCommand_LINE_END_getInstance();
      case 'LINE_LEFT':
        return KeyCommand_LINE_LEFT_getInstance();
      case 'LINE_RIGHT':
        return KeyCommand_LINE_RIGHT_getInstance();
      case 'UP':
        return KeyCommand_UP_getInstance();
      case 'DOWN':
        return KeyCommand_DOWN_getInstance();
      case 'PAGE_UP':
        return KeyCommand_PAGE_UP_getInstance();
      case 'PAGE_DOWN':
        return KeyCommand_PAGE_DOWN_getInstance();
      case 'HOME':
        return KeyCommand_HOME_getInstance();
      case 'END':
        return KeyCommand_END_getInstance();
      case 'COPY':
        return KeyCommand_COPY_getInstance();
      case 'PASTE':
        return KeyCommand_PASTE_getInstance();
      case 'CUT':
        return KeyCommand_CUT_getInstance();
      case 'DELETE_PREV_CHAR':
        return KeyCommand_DELETE_PREV_CHAR_getInstance();
      case 'DELETE_NEXT_CHAR':
        return KeyCommand_DELETE_NEXT_CHAR_getInstance();
      case 'DELETE_PREV_WORD':
        return KeyCommand_DELETE_PREV_WORD_getInstance();
      case 'DELETE_NEXT_WORD':
        return KeyCommand_DELETE_NEXT_WORD_getInstance();
      case 'DELETE_FROM_LINE_START':
        return KeyCommand_DELETE_FROM_LINE_START_getInstance();
      case 'DELETE_TO_LINE_END':
        return KeyCommand_DELETE_TO_LINE_END_getInstance();
      case 'SELECT_ALL':
        return KeyCommand_SELECT_ALL_getInstance();
      case 'SELECT_LEFT_CHAR':
        return KeyCommand_SELECT_LEFT_CHAR_getInstance();
      case 'SELECT_RIGHT_CHAR':
        return KeyCommand_SELECT_RIGHT_CHAR_getInstance();
      case 'SELECT_UP':
        return KeyCommand_SELECT_UP_getInstance();
      case 'SELECT_DOWN':
        return KeyCommand_SELECT_DOWN_getInstance();
      case 'SELECT_PAGE_UP':
        return KeyCommand_SELECT_PAGE_UP_getInstance();
      case 'SELECT_PAGE_DOWN':
        return KeyCommand_SELECT_PAGE_DOWN_getInstance();
      case 'SELECT_HOME':
        return KeyCommand_SELECT_HOME_getInstance();
      case 'SELECT_END':
        return KeyCommand_SELECT_END_getInstance();
      case 'SELECT_LEFT_WORD':
        return KeyCommand_SELECT_LEFT_WORD_getInstance();
      case 'SELECT_RIGHT_WORD':
        return KeyCommand_SELECT_RIGHT_WORD_getInstance();
      case 'SELECT_NEXT_PARAGRAPH':
        return KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance();
      case 'SELECT_PREV_PARAGRAPH':
        return KeyCommand_SELECT_PREV_PARAGRAPH_getInstance();
      case 'SELECT_LINE_START':
        return KeyCommand_SELECT_LINE_START_getInstance();
      case 'SELECT_LINE_END':
        return KeyCommand_SELECT_LINE_END_getInstance();
      case 'SELECT_LINE_LEFT':
        return KeyCommand_SELECT_LINE_LEFT_getInstance();
      case 'SELECT_LINE_RIGHT':
        return KeyCommand_SELECT_LINE_RIGHT_getInstance();
      case 'DESELECT':
        return KeyCommand_DESELECT_getInstance();
      case 'NEW_LINE':
        return KeyCommand_NEW_LINE_getInstance();
      case 'TAB':
        return KeyCommand_TAB_getInstance();
      case 'UNDO':
        return KeyCommand_UNDO_getInstance();
      case 'REDO':
        return KeyCommand_REDO_getInstance();
      case 'CHARACTER_PALETTE':
        return KeyCommand_CHARACTER_PALETTE_getInstance();
      default:
        KeyCommand_initEntries();
        THROW_ISE();
        break;
    }
  }
  var KeyCommand_entriesInitialized;
  function KeyCommand_initEntries() {
    if (KeyCommand_entriesInitialized)
      return Unit_getInstance();
    KeyCommand_entriesInitialized = true;
    KeyCommand_LEFT_CHAR_instance = new KeyCommand('LEFT_CHAR', 0, false);
    KeyCommand_RIGHT_CHAR_instance = new KeyCommand('RIGHT_CHAR', 1, false);
    KeyCommand_RIGHT_WORD_instance = new KeyCommand('RIGHT_WORD', 2, false);
    KeyCommand_LEFT_WORD_instance = new KeyCommand('LEFT_WORD', 3, false);
    KeyCommand_NEXT_PARAGRAPH_instance = new KeyCommand('NEXT_PARAGRAPH', 4, false);
    KeyCommand_PREV_PARAGRAPH_instance = new KeyCommand('PREV_PARAGRAPH', 5, false);
    KeyCommand_LINE_START_instance = new KeyCommand('LINE_START', 6, false);
    KeyCommand_LINE_END_instance = new KeyCommand('LINE_END', 7, false);
    KeyCommand_LINE_LEFT_instance = new KeyCommand('LINE_LEFT', 8, false);
    KeyCommand_LINE_RIGHT_instance = new KeyCommand('LINE_RIGHT', 9, false);
    KeyCommand_UP_instance = new KeyCommand('UP', 10, false);
    KeyCommand_DOWN_instance = new KeyCommand('DOWN', 11, false);
    KeyCommand_PAGE_UP_instance = new KeyCommand('PAGE_UP', 12, false);
    KeyCommand_PAGE_DOWN_instance = new KeyCommand('PAGE_DOWN', 13, false);
    KeyCommand_HOME_instance = new KeyCommand('HOME', 14, false);
    KeyCommand_END_instance = new KeyCommand('END', 15, false);
    KeyCommand_COPY_instance = new KeyCommand('COPY', 16, false);
    KeyCommand_PASTE_instance = new KeyCommand('PASTE', 17, true);
    KeyCommand_CUT_instance = new KeyCommand('CUT', 18, true);
    KeyCommand_DELETE_PREV_CHAR_instance = new KeyCommand('DELETE_PREV_CHAR', 19, true);
    KeyCommand_DELETE_NEXT_CHAR_instance = new KeyCommand('DELETE_NEXT_CHAR', 20, true);
    KeyCommand_DELETE_PREV_WORD_instance = new KeyCommand('DELETE_PREV_WORD', 21, true);
    KeyCommand_DELETE_NEXT_WORD_instance = new KeyCommand('DELETE_NEXT_WORD', 22, true);
    KeyCommand_DELETE_FROM_LINE_START_instance = new KeyCommand('DELETE_FROM_LINE_START', 23, true);
    KeyCommand_DELETE_TO_LINE_END_instance = new KeyCommand('DELETE_TO_LINE_END', 24, true);
    KeyCommand_SELECT_ALL_instance = new KeyCommand('SELECT_ALL', 25, false);
    KeyCommand_SELECT_LEFT_CHAR_instance = new KeyCommand('SELECT_LEFT_CHAR', 26, false);
    KeyCommand_SELECT_RIGHT_CHAR_instance = new KeyCommand('SELECT_RIGHT_CHAR', 27, false);
    KeyCommand_SELECT_UP_instance = new KeyCommand('SELECT_UP', 28, false);
    KeyCommand_SELECT_DOWN_instance = new KeyCommand('SELECT_DOWN', 29, false);
    KeyCommand_SELECT_PAGE_UP_instance = new KeyCommand('SELECT_PAGE_UP', 30, false);
    KeyCommand_SELECT_PAGE_DOWN_instance = new KeyCommand('SELECT_PAGE_DOWN', 31, false);
    KeyCommand_SELECT_HOME_instance = new KeyCommand('SELECT_HOME', 32, false);
    KeyCommand_SELECT_END_instance = new KeyCommand('SELECT_END', 33, false);
    KeyCommand_SELECT_LEFT_WORD_instance = new KeyCommand('SELECT_LEFT_WORD', 34, false);
    KeyCommand_SELECT_RIGHT_WORD_instance = new KeyCommand('SELECT_RIGHT_WORD', 35, false);
    KeyCommand_SELECT_NEXT_PARAGRAPH_instance = new KeyCommand('SELECT_NEXT_PARAGRAPH', 36, false);
    KeyCommand_SELECT_PREV_PARAGRAPH_instance = new KeyCommand('SELECT_PREV_PARAGRAPH', 37, false);
    KeyCommand_SELECT_LINE_START_instance = new KeyCommand('SELECT_LINE_START', 38, false);
    KeyCommand_SELECT_LINE_END_instance = new KeyCommand('SELECT_LINE_END', 39, false);
    KeyCommand_SELECT_LINE_LEFT_instance = new KeyCommand('SELECT_LINE_LEFT', 40, false);
    KeyCommand_SELECT_LINE_RIGHT_instance = new KeyCommand('SELECT_LINE_RIGHT', 41, false);
    KeyCommand_DESELECT_instance = new KeyCommand('DESELECT', 42, false);
    KeyCommand_NEW_LINE_instance = new KeyCommand('NEW_LINE', 43, true);
    KeyCommand_TAB_instance = new KeyCommand('TAB', 44, true);
    KeyCommand_UNDO_instance = new KeyCommand('UNDO', 45, true);
    KeyCommand_REDO_instance = new KeyCommand('REDO', 46, true);
    KeyCommand_CHARACTER_PALETTE_instance = new KeyCommand('CHARACTER_PALETTE', 47, true);
  }
  function KeyCommand(name, ordinal, editsText) {
    Enum.call(this, name, ordinal);
    this.editsText_1 = editsText;
  }
  protoOf(KeyCommand).get_editsText_m211rn_k$ = function () {
    return this.editsText_1;
  };
  function KeyCommand_LEFT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LEFT_CHAR_instance;
  }
  function KeyCommand_RIGHT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_RIGHT_CHAR_instance;
  }
  function KeyCommand_RIGHT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_RIGHT_WORD_instance;
  }
  function KeyCommand_LEFT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LEFT_WORD_instance;
  }
  function KeyCommand_NEXT_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_NEXT_PARAGRAPH_instance;
  }
  function KeyCommand_PREV_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PREV_PARAGRAPH_instance;
  }
  function KeyCommand_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_START_instance;
  }
  function KeyCommand_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_END_instance;
  }
  function KeyCommand_LINE_LEFT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_LEFT_instance;
  }
  function KeyCommand_LINE_RIGHT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_RIGHT_instance;
  }
  function KeyCommand_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_UP_instance;
  }
  function KeyCommand_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DOWN_instance;
  }
  function KeyCommand_PAGE_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PAGE_UP_instance;
  }
  function KeyCommand_PAGE_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PAGE_DOWN_instance;
  }
  function KeyCommand_HOME_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_HOME_instance;
  }
  function KeyCommand_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_END_instance;
  }
  function KeyCommand_COPY_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_COPY_instance;
  }
  function KeyCommand_PASTE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PASTE_instance;
  }
  function KeyCommand_CUT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_CUT_instance;
  }
  function KeyCommand_DELETE_PREV_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_PREV_CHAR_instance;
  }
  function KeyCommand_DELETE_NEXT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_NEXT_CHAR_instance;
  }
  function KeyCommand_DELETE_PREV_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_PREV_WORD_instance;
  }
  function KeyCommand_DELETE_NEXT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_NEXT_WORD_instance;
  }
  function KeyCommand_DELETE_FROM_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_FROM_LINE_START_instance;
  }
  function KeyCommand_DELETE_TO_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_TO_LINE_END_instance;
  }
  function KeyCommand_SELECT_ALL_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_ALL_instance;
  }
  function KeyCommand_SELECT_LEFT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LEFT_CHAR_instance;
  }
  function KeyCommand_SELECT_RIGHT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_RIGHT_CHAR_instance;
  }
  function KeyCommand_SELECT_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_UP_instance;
  }
  function KeyCommand_SELECT_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_DOWN_instance;
  }
  function KeyCommand_SELECT_PAGE_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PAGE_UP_instance;
  }
  function KeyCommand_SELECT_PAGE_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PAGE_DOWN_instance;
  }
  function KeyCommand_SELECT_HOME_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_HOME_instance;
  }
  function KeyCommand_SELECT_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_END_instance;
  }
  function KeyCommand_SELECT_LEFT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LEFT_WORD_instance;
  }
  function KeyCommand_SELECT_RIGHT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_RIGHT_WORD_instance;
  }
  function KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_NEXT_PARAGRAPH_instance;
  }
  function KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PREV_PARAGRAPH_instance;
  }
  function KeyCommand_SELECT_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_START_instance;
  }
  function KeyCommand_SELECT_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_END_instance;
  }
  function KeyCommand_SELECT_LINE_LEFT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_LEFT_instance;
  }
  function KeyCommand_SELECT_LINE_RIGHT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_RIGHT_instance;
  }
  function KeyCommand_DESELECT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DESELECT_instance;
  }
  function KeyCommand_NEW_LINE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_NEW_LINE_instance;
  }
  function KeyCommand_TAB_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_TAB_instance;
  }
  function KeyCommand_UNDO_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_UNDO_instance;
  }
  function KeyCommand_REDO_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_REDO_instance;
  }
  function KeyCommand_CHARACTER_PALETTE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_CHARACTER_PALETTE_instance;
  }
  function get_defaultKeyMapping() {
    _init_properties_KeyMapping_kt__n34hqn();
    return defaultKeyMapping;
  }
  var defaultKeyMapping;
  function KeyMapping() {
  }
  function commonKeyMapping(shortcutModifier) {
    _init_properties_KeyMapping_kt__n34hqn();
    return new commonKeyMapping$1(shortcutModifier);
  }
  function defaultKeyMapping$2$1($common) {
    this.$common_1 = $common;
  }
  protoOf(defaultKeyMapping$2$1).map_qbm95i_k$ = function (event) {
    var tmp;
    if (get_isShiftPressed(event) ? get_isCtrlPressed(event) : false) {
      var tmp0_subject = get_key_0(event);
      tmp = equals(tmp0_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_SELECT_LEFT_WORD_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_SELECT_RIGHT_WORD_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() : null;
    } else if (get_isCtrlPressed(event)) {
      var tmp1_subject = get_key_0(event);
      tmp = equals(tmp1_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_LEFT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_RIGHT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_PREV_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_NEXT_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_H_uhjlao_k$()) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Delete_mdp9fp_k$()) ? KeyCommand_DELETE_NEXT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Backspace_g19x21_k$()) ? KeyCommand_DELETE_PREV_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Backslash_wlrcta_k$()) ? KeyCommand_DESELECT_getInstance() : null;
    } else if (get_isShiftPressed(event)) {
      var tmp2_subject = get_key_0(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance().get_MoveHome_6w70dm_k$()) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_MoveEnd_bx0ymm_k$()) ? KeyCommand_SELECT_LINE_END_getInstance() : null;
    } else if (get_isAltPressed(event)) {
      var tmp3_subject = get_key_0(event);
      tmp = equals(tmp3_subject, MappedKeys_getInstance().get_Backspace_g19x21_k$()) ? KeyCommand_DELETE_FROM_LINE_START_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Delete_mdp9fp_k$()) ? KeyCommand_DELETE_TO_LINE_END_getInstance() : null;
    } else {
      tmp = null;
    }
    var tmp4_elvis_lhs = tmp;
    return tmp4_elvis_lhs == null ? this.$common_1.map_qbm95i_k$(event) : tmp4_elvis_lhs;
  };
  function commonKeyMapping$1($shortcutModifier) {
    this.$shortcutModifier_1 = $shortcutModifier;
  }
  protoOf(commonKeyMapping$1).map_qbm95i_k$ = function (event) {
    var tmp;
    if (this.$shortcutModifier_1(new KeyEvent(event)) ? get_isShiftPressed(event) : false) {
      var tmp0_subject = get_key_0(event);
      tmp = equals(tmp0_subject, MappedKeys_getInstance().get_Z_v39uji_k$()) ? KeyCommand_REDO_getInstance() : null;
    } else if (this.$shortcutModifier_1(new KeyEvent(event))) {
      var tmp1_subject = get_key_0(event);
      tmp = (equals(tmp1_subject, MappedKeys_getInstance().get_C_z9yylx_k$()) ? true : equals(tmp1_subject, MappedKeys_getInstance().get_Insert_y6atub_k$())) ? KeyCommand_COPY_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_V_ty3eam_k$()) ? KeyCommand_PASTE_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_X_kl84g_k$()) ? KeyCommand_CUT_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_A_4rac6v_k$()) ? KeyCommand_SELECT_ALL_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Y_ftxjbz_k$()) ? KeyCommand_REDO_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Z_v39uji_k$()) ? KeyCommand_UNDO_getInstance() : null;
    } else if (get_isCtrlPressed(event)) {
      tmp = null;
    } else if (get_isShiftPressed(event)) {
      var tmp2_subject = get_key_0(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_SELECT_LEFT_CHAR_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_SELECT_RIGHT_CHAR_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_SELECT_UP_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_SELECT_DOWN_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_PageUp_d9v330_k$()) ? KeyCommand_SELECT_PAGE_UP_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_PageDown_hz00wl_k$()) ? KeyCommand_SELECT_PAGE_DOWN_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_MoveHome_6w70dm_k$()) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_MoveEnd_bx0ymm_k$()) ? KeyCommand_SELECT_LINE_END_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_Insert_y6atub_k$()) ? KeyCommand_PASTE_getInstance() : null;
    } else {
      var tmp3_subject = get_key_0(event);
      tmp = equals(tmp3_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_LEFT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_RIGHT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_UP_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_DOWN_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_PageUp_d9v330_k$()) ? KeyCommand_PAGE_UP_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_PageDown_hz00wl_k$()) ? KeyCommand_PAGE_DOWN_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_MoveHome_6w70dm_k$()) ? KeyCommand_LINE_START_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_MoveEnd_bx0ymm_k$()) ? KeyCommand_LINE_END_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Enter_72nuyo_k$()) ? KeyCommand_NEW_LINE_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Backspace_g19x21_k$()) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Delete_mdp9fp_k$()) ? KeyCommand_DELETE_NEXT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Paste_5hb4sl_k$()) ? KeyCommand_PASTE_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Cut_9e92qy_k$()) ? KeyCommand_CUT_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Copy_i0eaup_k$()) ? KeyCommand_COPY_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Tab_x9q08z_k$()) ? KeyCommand_TAB_getInstance() : null;
    }
    return tmp;
  };
  function isCtrlPressed$factory() {
    return getPropertyCallableRef('isCtrlPressed', 1, KProperty1, function (receiver) {
      return get_isCtrlPressed(receiver.nativeKeyEvent_1);
    }, null);
  }
  var properties_initialized_KeyMapping_kt_iql13l;
  function _init_properties_KeyMapping_kt__n34hqn() {
    if (properties_initialized_KeyMapping_kt_iql13l) {
    } else {
      properties_initialized_KeyMapping_kt_iql13l = true;
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = commonKeyMapping(isCtrlPressed$factory());
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.defaultKeyMapping.<anonymous>' call
      tmp$ret$0 = new defaultKeyMapping$2$1(tmp0_let);
      tmp$ret$1 = tmp$ret$0;
      defaultKeyMapping = tmp$ret$1;
    }
  }
  function TextDragObserver() {
  }
  function detectDragGesturesAfterLongPressWithObserver(_this__u8e3s4, observer, $completion) {
    var tmp = detectDragGesturesAfterLongPressWithObserver$lambda(observer);
    var tmp_0 = detectDragGesturesAfterLongPressWithObserver$lambda_0(observer);
    var tmp_1 = detectDragGesturesAfterLongPressWithObserver$lambda_1(observer);
    var tmp0 = detectDragGesturesAfterLongPress(_this__u8e3s4, tmp, tmp_0, tmp_1, detectDragGesturesAfterLongPressWithObserver$lambda_2(observer), $completion);
    return tmp0;
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda($observer) {
    return function (it) {
      $observer.onStart_b65n5j_k$(it.packedValue_1);
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_0($observer) {
    return function () {
      $observer.onStop_aip7ow_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_1($observer) {
    return function () {
      $observer.onCancel_q8fje0_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_2($observer) {
    return function (_anonymous_parameter_0__qggqh8, offset) {
      $observer.onDrag_jolxfr_k$(offset.packedValue_1);
      return Unit_getInstance();
    };
  }
  function getParagraphBoundary(_this__u8e3s4, index) {
    return TextRange(findParagraphStart(_this__u8e3s4, index), findParagraphEnd(_this__u8e3s4, index));
  }
  function findParagraphStart(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex - 1 | 0;
    if (1 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (equals(new Char(charSequenceGet(_this__u8e3s4, index - 1 | 0)), new Char(_Char___init__impl__6a9atx(10)))) {
          return index;
        }
      }
       while (1 <= inductionVariable);
    return 0;
  }
  function findParagraphEnd(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex + 1 | 0;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(_this__u8e3s4, index)), new Char(_Char___init__impl__6a9atx(10)))) {
          return index;
        }
      }
       while (inductionVariable < last);
    return charSequenceLength(_this__u8e3s4);
  }
  function _get_nonNullIntrinsics__hf0xox($this) {
    var tmp0_elvis_lhs = $this.paragraphIntrinsics_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('layoutIntrinsics must be called first');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function layoutText($this, constraints, layoutDirection) {
    $this.layoutIntrinsics_4irjyy_k$(layoutDirection);
    var minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var widthMatters = $this.softWrap_1 ? true : $this.overflow_1 === Companion_getInstance_14().get_Ellipsis_xgxit0_k$();
    var tmp;
    if (widthMatters ? _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) : false) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = Companion_getInstance_16().get_Infinity_rvchkf_k$();
    }
    var maxWidth = tmp;
    var overwriteMaxLines = !$this.softWrap_1 ? $this.overflow_1 === Companion_getInstance_14().get_Ellipsis_xgxit0_k$() : false;
    var finalMaxLines = overwriteMaxLines ? 1 : $this.maxLines_1;
    var tmp_0;
    if (minWidth === maxWidth) {
      tmp_0 = maxWidth;
    } else {
      tmp_0 = coerceIn($this.get_maxIntrinsicWidth_b4gk2k_k$(), minWidth, maxWidth);
    }
    var width = tmp_0;
    return new MultiParagraph(_get_nonNullIntrinsics__hf0xox($this), Constraints(VOID, width, VOID, _Constraints___get_maxHeight__impl__dt3e8z(constraints)), finalMaxLines, $this.overflow_1 === Companion_getInstance_14().get_Ellipsis_xgxit0_k$());
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).paint_ct2xtf_k$ = function (canvas, textLayoutResult) {
    TextPainter_getInstance().paint_ct2xtf_k$(canvas, textLayoutResult);
  };
  var Companion_instance_0;
  function Companion_getInstance_26() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_12() {
    return 0;
  }
  function TextDelegate(text, style, maxLines, minLines, softWrap, overflow, density, fontFamilyResolver, placeholders) {
    Companion_getInstance_26();
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    softWrap = softWrap === VOID ? true : softWrap;
    overflow = overflow === VOID ? Companion_getInstance_14().get_Clip_a6y3d7_k$() : overflow;
    placeholders = placeholders === VOID ? emptyList() : placeholders;
    this.text_1 = text;
    this.style_1 = style;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.softWrap_1 = softWrap;
    this.overflow_1 = overflow;
    this.density_1 = density;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.placeholders_1 = placeholders;
    this.paragraphIntrinsics_1 = null;
    this.intrinsicsLayoutDirection_1 = null;
    // Inline function 'kotlin.check' call
    var tmp0_check = this.maxLines_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = this.minLines_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = this.minLines_1 <= this.maxLines_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$2;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$2 = 'Check failed.';
      var message_1 = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    this.$stable_1 = 0;
  }
  protoOf(TextDelegate).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TextDelegate).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(TextDelegate).get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  protoOf(TextDelegate).get_minLines_gb0a6u_k$ = function () {
    return this.minLines_1;
  };
  protoOf(TextDelegate).get_softWrap_a000bn_k$ = function () {
    return this.softWrap_1;
  };
  protoOf(TextDelegate).get_overflow_rjdkkj_k$ = function () {
    return this.overflow_1;
  };
  protoOf(TextDelegate).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(TextDelegate).get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  protoOf(TextDelegate).get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  protoOf(TextDelegate).set_paragraphIntrinsics_oap2f7_k$ = function (_set____db54di) {
    this.paragraphIntrinsics_1 = _set____db54di;
  };
  protoOf(TextDelegate).get_paragraphIntrinsics_8qg2b7_k$ = function () {
    return this.paragraphIntrinsics_1;
  };
  protoOf(TextDelegate).set_intrinsicsLayoutDirection_4auhth_k$ = function (_set____db54di) {
    this.intrinsicsLayoutDirection_1 = _set____db54di;
  };
  protoOf(TextDelegate).get_intrinsicsLayoutDirection_9vwh7m_k$ = function () {
    return this.intrinsicsLayoutDirection_1;
  };
  protoOf(TextDelegate).get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return ceilToIntPx(_get_nonNullIntrinsics__hf0xox(this).get_minIntrinsicWidth_lmc1rq_k$());
  };
  protoOf(TextDelegate).get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return ceilToIntPx(_get_nonNullIntrinsics__hf0xox(this).get_maxIntrinsicWidth_b4gk2k_k$());
  };
  protoOf(TextDelegate).layoutIntrinsics_4irjyy_k$ = function (layoutDirection) {
    var localIntrinsics = this.paragraphIntrinsics_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals(this.intrinsicsLayoutDirection_1)) ? true : localIntrinsics.get_hasStaleResolvedFonts_tun9ic_k$()) {
      this.intrinsicsLayoutDirection_1 = layoutDirection;
      var tmp0_annotatedString = this.text_1;
      var tmp1_style = resolveDefaults(this.style_1, layoutDirection);
      var tmp2_density = this.density_1;
      var tmp3_fontFamilyResolver = this.fontFamilyResolver_1;
      var tmp4_placeholders = this.placeholders_1;
      tmp = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    this.paragraphIntrinsics_1 = intrinsics;
  };
  protoOf(TextDelegate).layout_k0cayh_k$ = function (constraints, layoutDirection, prevResult) {
    if (!(prevResult == null) ? canReuse(prevResult, this.text_1, this.style_1, this.placeholders_1, this.maxLines_1, this.softWrap_1, this.overflow_1, this.density_1, layoutDirection, this.fontFamilyResolver_1, constraints) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.TextDelegate.layout.<anonymous>' call
      tmp$ret$0 = prevResult.copy_wbg4xj_k$(TextLayoutInput_init_$Create$(prevResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$(), this.style_1, prevResult.get_layoutInput_o7gjah_k$().get_placeholders_r4ppyh_k$(), prevResult.get_layoutInput_o7gjah_k$().get_maxLines_pclpoc_k$(), prevResult.get_layoutInput_o7gjah_k$().get_softWrap_a000bn_k$(), prevResult.get_layoutInput_o7gjah_k$().get_overflow_rjdkkj_k$(), prevResult.get_layoutInput_o7gjah_k$().get_density_qy0267_k$(), prevResult.get_layoutInput_o7gjah_k$().get_layoutDirection_7e37v0_k$(), prevResult.get_layoutInput_o7gjah_k$().get_fontFamilyResolver_9o0fjy_k$(), constraints), constrain(constraints, IntSize(ceilToIntPx(prevResult.get_multiParagraph_xte3we_k$().get_width_j0q4yl_k$()), ceilToIntPx(prevResult.get_multiParagraph_xte3we_k$().get_height_e7t92o_k$()))));
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    }
    var multiParagraph = layoutText(this, constraints, layoutDirection);
    var size = constrain(constraints, IntSize(ceilToIntPx(multiParagraph.get_width_j0q4yl_k$()), ceilToIntPx(multiParagraph.get_height_e7t92o_k$())));
    return new TextLayoutResult(TextLayoutInput_init_$Create$(this.text_1, this.style_1, this.placeholders_1, this.maxLines_1, this.softWrap_1, this.overflow_1, this.density_1, layoutDirection, this.fontFamilyResolver_1, constraints), multiParagraph, size);
  };
  protoOf(TextDelegate).layout$default_xpwrr2_k$ = function (constraints, layoutDirection, prevResult, $super) {
    prevResult = prevResult === VOID ? null : prevResult;
    return $super === VOID ? this.layout_k0cayh_k$(constraints, layoutDirection, prevResult) : $super.layout_k0cayh_k$.call(this, new Constraints_0(constraints), layoutDirection, prevResult);
  };
  function ceilToIntPx(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    tmp$ret$0 = Math.ceil(_this__u8e3s4);
    var tmp0_roundToInt = tmp$ret$0;
    tmp$ret$1 = roundToInt(tmp0_roundToInt);
    return tmp$ret$1;
  }
  function get_cursorAnimationSpec() {
    _init_properties_TextFieldCursor_kt__1co4rz();
    return cursorAnimationSpec;
  }
  var cursorAnimationSpec;
  function cursorAnimationSpec$lambda($this$keyframes) {
    _init_properties_TextFieldCursor_kt__1co4rz();
    $this$keyframes.set_durationMillis_cr89wn_k$(1000);
    $this$keyframes.at_xtu82d_k$(1.0, 0);
    $this$keyframes.at_xtu82d_k$(1.0, 499);
    $this$keyframes.at_xtu82d_k$(0.0, 500);
    $this$keyframes.at_xtu82d_k$(0.0, 999);
    return Unit_getInstance();
  }
  var properties_initialized_TextFieldCursor_kt_tldnf7;
  function _init_properties_TextFieldCursor_kt__1co4rz() {
    if (properties_initialized_TextFieldCursor_kt_tldnf7) {
    } else {
      properties_initialized_TextFieldCursor_kt_tldnf7 = true;
      cursorAnimationSpec = infiniteRepeatable(keyframes(cursorAnimationSpec$lambda));
    }
  }
  function get_EmptyTextReplacement() {
    _init_properties_TextFieldDelegate_kt__lo6v7k();
    return EmptyTextReplacement;
  }
  var EmptyTextReplacement;
  function get_DefaultWidthCharCount() {
    return DefaultWidthCharCount;
  }
  var DefaultWidthCharCount;
  function computeSizeForDefaultText(style, density, fontFamilyResolver, text, maxLines) {
    text = text === VOID ? get_EmptyTextReplacement() : text;
    maxLines = maxLines === VOID ? 1 : maxLines;
    _init_properties_TextFieldDelegate_kt__lo6v7k();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    var tmp0_spanStyles = tmp$ret$0;
    var tmp1_constraints = Constraints();
    var paragraph = Paragraph(text, style, tmp1_constraints, density, fontFamilyResolver, tmp0_spanStyles, VOID, maxLines, false);
    return IntSize(ceilToIntPx(paragraph.get_minIntrinsicWidth_lmc1rq_k$()), ceilToIntPx(paragraph.get_height_e7t92o_k$()));
  }
  var properties_initialized_TextFieldDelegate_kt_1iol9a;
  function _init_properties_TextFieldDelegate_kt__lo6v7k() {
    if (properties_initialized_TextFieldDelegate_kt_1iol9a) {
    } else {
      properties_initialized_TextFieldDelegate_kt_1iol9a = true;
      EmptyTextReplacement = repeat('H', 10);
    }
  }
  function canReuse(_this__u8e3s4, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    var layoutInput = _this__u8e3s4.get_layoutInput_o7gjah_k$();
    if (_this__u8e3s4.get_multiParagraph_xte3we_k$().get_intrinsics_1zqd0p_k$().get_hasStaleResolvedFonts_tun9ic_k$()) {
      return false;
    }
    if (!((((((((layoutInput.get_text_wouvsm_k$().equals(text) ? layoutInput.get_style_iyqetk_k$().hasSameLayoutAffectingAttributes_nmoc4f_k$(style) : false) ? equals(layoutInput.get_placeholders_r4ppyh_k$(), placeholders) : false) ? layoutInput.get_maxLines_pclpoc_k$() === maxLines : false) ? layoutInput.get_softWrap_a000bn_k$() === softWrap : false) ? layoutInput.get_overflow_rjdkkj_k$() === overflow : false) ? equals(layoutInput.get_density_qy0267_k$(), density) : false) ? layoutInput.get_layoutDirection_7e37v0_k$().equals(layoutDirection) : false) ? equals(layoutInput.get_fontFamilyResolver_9o0fjy_k$(), fontFamilyResolver) : false)) {
      return false;
    }
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === _Constraints___get_minWidth__impl__hi9lfi(layoutInput.get_constraints_khg0u2_k$())))
      return false;
    if (!(softWrap ? true : overflow === Companion_getInstance_14().get_Ellipsis_xgxit0_k$())) {
      return true;
    }
    return _Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc(layoutInput.get_constraints_khg0u2_k$()) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) === _Constraints___get_maxHeight__impl__dt3e8z(layoutInput.get_constraints_khg0u2_k$()) : false;
  }
  function get_SNAPSHOTS_INTERVAL_MILLIS() {
    return SNAPSHOTS_INTERVAL_MILLIS;
  }
  var SNAPSHOTS_INTERVAL_MILLIS;
  function get_ValidatingEmptyOffsetMappingIdentity() {
    _init_properties_ValidatingOffsetMapping_kt__fcd8ty();
    return ValidatingEmptyOffsetMappingIdentity;
  }
  var ValidatingEmptyOffsetMappingIdentity;
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function _get_originalLength__ld60x8($this) {
    return $this.originalLength_1;
  }
  function _get_transformedLength__kli3z4($this) {
    return $this.transformedLength_1;
  }
  function ValidatingOffsetMapping(delegate, originalLength, transformedLength) {
    this.delegate_1 = delegate;
    this.originalLength_1 = originalLength;
    this.transformedLength_1 = transformedLength;
  }
  protoOf(ValidatingOffsetMapping).originalToTransformed_c5d2si_k$ = function (offset) {
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.delegate_1.originalToTransformed_c5d2si_k$(offset);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.originalToTransformed.<anonymous>' call
    // Inline function 'kotlin.check' call
    var tmp0_check = 0 <= tmp0_also ? tmp0_also <= this.transformedLength_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.originalToTransformed.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'OffsetMapping.originalToTransformed returned invalid mapping: ' + ('' + offset + ' -> ' + tmp0_also + ' is not in range of transformed text ') + ('[0, ' + this.transformedLength_1 + ']');
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  };
  protoOf(ValidatingOffsetMapping).transformedToOriginal_xp4com_k$ = function (offset) {
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.delegate_1.transformedToOriginal_xp4com_k$(offset);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.transformedToOriginal.<anonymous>' call
    // Inline function 'kotlin.check' call
    var tmp0_check = 0 <= tmp0_also ? tmp0_also <= this.originalLength_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.transformedToOriginal.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'OffsetMapping.transformedToOriginal returned invalid mapping: ' + ('' + offset + ' -> ' + tmp0_also + ' is not in range of original text ') + ('[0, ' + this.originalLength_1 + ']');
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  };
  var properties_initialized_ValidatingOffsetMapping_kt_rllilk;
  function _init_properties_ValidatingOffsetMapping_kt__fcd8ty() {
    if (properties_initialized_ValidatingOffsetMapping_kt_rllilk) {
    } else {
      properties_initialized_ValidatingOffsetMapping_kt_rllilk = true;
      ValidatingEmptyOffsetMappingIdentity = new ValidatingOffsetMapping(Companion_getInstance_20().get_Identity_wza1cp_k$(), 0, 0);
    }
  }
  function _get_coordinatesCallback__lpbrxt($this) {
    return $this.coordinatesCallback_1;
  }
  function _get_layoutResultCallback__dmyr9b($this) {
    return $this.layoutResultCallback_1;
  }
  function _set__previousTextLayoutResult__2v9job($this, _set____db54di) {
    $this._previousTextLayoutResult_1 = _set____db54di;
  }
  function _get__previousTextLayoutResult__mf0pz($this) {
    return $this._previousTextLayoutResult_1;
  }
  function _set__previousLastVisibleOffset__pix48u($this, _set____db54di) {
    $this._previousLastVisibleOffset_1 = _set____db54di;
  }
  function _get__previousLastVisibleOffset__qxqunm($this) {
    return $this._previousLastVisibleOffset_1;
  }
  function _get_lastVisibleOffset__v7xite(_this__u8e3s4, $this) {
    if (!($this._previousTextLayoutResult_1 === _this__u8e3s4)) {
      var tmp;
      if (!_this__u8e3s4.get_didOverflowHeight_k18vi9_k$() ? true : _this__u8e3s4.get_multiParagraph_xte3we_k$().get_didExceedMaxLines_xyxo57_k$()) {
        tmp = _this__u8e3s4.get_lineCount_lmaazy_k$() - 1 | 0;
      } else {
        var finalVisibleLine = coerceAtMost(_this__u8e3s4.getLineForVerticalPosition_c1p2r4_k$(_IntSize___get_height__impl__prv63b(_this__u8e3s4.get_size_yscczt_k$())), _this__u8e3s4.get_lineCount_lmaazy_k$() - 1 | 0);
        while (_this__u8e3s4.getLineTop_8a2w7q_k$(finalVisibleLine) >= _IntSize___get_height__impl__prv63b(_this__u8e3s4.get_size_yscczt_k$())) {
          var tmp0 = finalVisibleLine;
          finalVisibleLine = tmp0 - 1 | 0;
        }
        tmp = finalVisibleLine;
      }
      var lastVisibleLine = tmp;
      $this._previousLastVisibleOffset_1 = _this__u8e3s4.getLineEnd_7kqxuy_k$(lastVisibleLine, true);
      $this._previousTextLayoutResult_1 = _this__u8e3s4;
    }
    return $this._previousLastVisibleOffset_1;
  }
  function MultiWidgetSelectionDelegate(selectableId, coordinatesCallback, layoutResultCallback) {
    this.selectableId_1 = selectableId;
    this.coordinatesCallback_1 = coordinatesCallback;
    this.layoutResultCallback_1 = layoutResultCallback;
    this._previousTextLayoutResult_1 = null;
    this._previousLastVisibleOffset_1 = -1;
  }
  protoOf(MultiWidgetSelectionDelegate).get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(MultiWidgetSelectionDelegate).updateSelection_xe1zkm_k$ = function (startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection) {
    // Inline function 'kotlin.require' call
    var tmp0_require = previousSelection == null ? true : this.selectableId_1.equals(previousSelection.get_start_iypx6h_k$().get_selectableId_qduvty_k$()) ? this.selectableId_1.equals(previousSelection.get_end_18j6ha_k$().get_selectableId_qduvty_k$()) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.selection.MultiWidgetSelectionDelegate.updateSelection.<anonymous>' call
      tmp$ret$0 = "The given previousSelection doesn't belong to this selectable.";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = this.getLayoutCoordinates_w2x35x_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new Pair(null, false);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var layoutCoordinates = tmp;
    var tmp1_elvis_lhs = this.layoutResultCallback_1();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return new Pair(null, false);
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var textLayoutResult = tmp_0;
    var relativePosition = containerLayoutCoordinates.localPositionOf_l2k1s5_k$(layoutCoordinates, Companion_getInstance_4().get_Zero_sctq3f_k$());
    var localStartPosition = Offset__minus_impl_hoj2c0(startHandlePosition, relativePosition);
    var localEndPosition = Offset__minus_impl_hoj2c0(endHandlePosition, relativePosition);
    var tmp2_safe_receiver = previousHandlePosition;
    var tmp_1;
    var tmp_2 = tmp2_safe_receiver;
    if ((tmp_2 == null ? null : new Offset_0(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.foundation.text.selection.MultiWidgetSelectionDelegate.updateSelection.<anonymous>' call
      tmp$ret$1 = Offset__minus_impl_hoj2c0(tmp2_safe_receiver, relativePosition);
      tmp$ret$2 = tmp$ret$1;
      tmp_1 = tmp$ret$2;
    }
    var localPreviousHandlePosition = tmp_1;
    return getTextSelectionInfo(textLayoutResult, localStartPosition, localEndPosition, localPreviousHandlePosition, this.selectableId_1, adjustment, previousSelection, isStartHandle);
  };
  protoOf(MultiWidgetSelectionDelegate).getSelectAllSelection_9ejth9_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var newSelectionRange = TextRange(0, textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$());
    return getAssembledSelectionInfo(newSelectionRange, false, this.selectableId_1, textLayoutResult);
  };
  protoOf(MultiWidgetSelectionDelegate).getHandlePosition_nbszf7_k$ = function (selection, isStartHandle) {
    if ((isStartHandle ? !selection.get_start_iypx6h_k$().get_selectableId_qduvty_k$().equals(this.selectableId_1) : false) ? true : !isStartHandle ? !selection.get_end_18j6ha_k$().get_selectableId_qduvty_k$().equals(this.selectableId_1) : false) {
      return Companion_getInstance_4().get_Zero_sctq3f_k$();
    }
    if (this.getLayoutCoordinates_w2x35x_k$() == null)
      return Companion_getInstance_4().get_Zero_sctq3f_k$();
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_4().get_Zero_sctq3f_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var offset = isStartHandle ? selection.get_start_iypx6h_k$().get_offset_hjmqak_k$() : selection.get_end_18j6ha_k$().get_offset_hjmqak_k$();
    var coercedOffset = coerceIn(offset, 0, _get_lastVisibleOffset__v7xite(textLayoutResult, this));
    return getSelectionHandleCoordinates(textLayoutResult, coercedOffset, isStartHandle, selection.get_handlesCrossed_5utwpv_k$());
  };
  protoOf(MultiWidgetSelectionDelegate).getLayoutCoordinates_w2x35x_k$ = function () {
    var layoutCoordinates = this.coordinatesCallback_1();
    if (layoutCoordinates == null ? true : !layoutCoordinates.get_isAttached_odsl1l_k$())
      return null;
    return layoutCoordinates;
  };
  protoOf(MultiWidgetSelectionDelegate).getText_18q731_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return AnnotatedString_init_$Create$('');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$();
  };
  protoOf(MultiWidgetSelectionDelegate).getBoundingBox_urudbk_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_21().get_Zero_woe9zl_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$();
    if (textLength < 1)
      return Companion_getInstance_21().get_Zero_woe9zl_k$();
    return textLayoutResult.getBoundingBox_urudbk_k$(coerceIn(offset, 0, textLength - 1 | 0));
  };
  protoOf(MultiWidgetSelectionDelegate).getRangeOfLineContaining_v74j7b_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_22().get_Zero_e8si87_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var visibleTextLength = _get_lastVisibleOffset__v7xite(textLayoutResult, this);
    if (visibleTextLength < 1)
      return Companion_getInstance_22().get_Zero_e8si87_k$();
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(coerceIn(offset, 0, visibleTextLength - 1 | 0));
    return TextRange(textLayoutResult.getLineStart_504snr_k$(line), textLayoutResult.getLineEnd_7kqxuy_k$(line, true));
  };
  protoOf(MultiWidgetSelectionDelegate).getLastVisibleOffset_71yps7_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return _get_lastVisibleOffset__v7xite(textLayoutResult, this);
  };
  protoOf(MultiWidgetSelectionDelegate).getLineHeight_ba5d5c_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0.0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$();
    if (textLength < 1)
      return 0.0;
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(coerceIn(offset, 0, textLength - 1 | 0));
    return textLayoutResult.get_multiParagraph_xte3we_k$().getLineHeight_ba5d5c_k$(line);
  };
  function getTextSelectionInfo(textLayoutResult, startHandlePosition, endHandlePosition, previousHandlePosition, selectableId, adjustment, previousSelection, isStartHandle) {
    previousSelection = previousSelection === VOID ? null : previousSelection;
    isStartHandle = isStartHandle === VOID ? true : isStartHandle;
    var bounds = new Rect(0.0, 0.0, textLayoutResult.get_multiParagraph_xte3we_k$().get_width_j0q4yl_k$(), textLayoutResult.get_multiParagraph_xte3we_k$().get_height_e7t92o_k$());
    var isSelected = SelectionMode_Vertical_getInstance().isSelected_edatdn_k$(bounds, startHandlePosition, endHandlePosition);
    if (!isSelected) {
      return new Pair(null, false);
    }
    var rawStartHandleOffset = getOffsetForPosition(textLayoutResult, bounds, startHandlePosition);
    var rawEndHandleOffset = getOffsetForPosition(textLayoutResult, bounds, endHandlePosition);
    var tmp0_safe_receiver = previousHandlePosition;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new Offset_0(tmp_0)) == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.selection.getTextSelectionInfo.<anonymous>' call
      tmp$ret$0 = getOffsetForPosition(textLayoutResult, bounds, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var rawPreviousHandleOffset = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    var tmp_1 = TextRange(rawStartHandleOffset, rawEndHandleOffset);
    var tmp2_safe_receiver = previousSelection;
    var adjustedTextRange = adjustment.adjust_xh53z6_k$(textLayoutResult, tmp_1, rawPreviousHandleOffset, isStartHandle, tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toTextRange_6wofw5_k$());
    var newSelection = getAssembledSelectionInfo(adjustedTextRange, _TextRange___get_reversed__impl__emhnbm(adjustedTextRange), selectableId, textLayoutResult);
    var selectionUpdated = !newSelection.equals(previousSelection);
    var tmp_2;
    if (isStartHandle) {
      tmp_2 = !(rawStartHandleOffset === rawPreviousHandleOffset);
    } else {
      tmp_2 = !(rawEndHandleOffset === rawPreviousHandleOffset);
    }
    var handleUpdated = tmp_2;
    var consumed = handleUpdated ? true : selectionUpdated;
    return new Pair(newSelection, consumed);
  }
  function getAssembledSelectionInfo(newSelectionRange, handlesCrossed, selectableId, textLayoutResult) {
    var tmp = new AnchorInfo(textLayoutResult.getBidiRunDirection_dqdnqj_k$(_TextRange___get_start__impl__ww4t90(newSelectionRange)), _TextRange___get_start__impl__ww4t90(newSelectionRange), selectableId);
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _TextRange___get_end__impl__gcdxpp(newSelectionRange) - 1 | 0;
    tmp$ret$0 = Math.max(tmp0_max, 0);
    return new Selection(tmp, new AnchorInfo(textLayoutResult.getBidiRunDirection_dqdnqj_k$(tmp$ret$0), _TextRange___get_end__impl__gcdxpp(newSelectionRange), selectableId), handlesCrossed);
  }
  function getOffsetForPosition(textLayoutResult, bounds, position) {
    var length = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$();
    var tmp;
    if (bounds.contains_ggguyy_k$(position)) {
      tmp = coerceIn(textLayoutResult.getOffsetForPosition_f04xcw_k$(position), 0, length);
    } else {
      var value = SelectionMode_Vertical_getInstance().compare_blje1w_k$(position, bounds);
      tmp = value < 0 ? 0 : length;
    }
    return tmp;
  }
  function Selectable() {
  }
  function AnchorInfo(direction, offset, selectableId) {
    this.direction_1 = direction;
    this.offset_1 = offset;
    this.selectableId_1 = selectableId;
  }
  protoOf(AnchorInfo).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(AnchorInfo).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(AnchorInfo).get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(AnchorInfo).component1_7eebsc_k$ = function () {
    return this.direction_1;
  };
  protoOf(AnchorInfo).component2_7eebsb_k$ = function () {
    return this.offset_1;
  };
  protoOf(AnchorInfo).component3_7eebsa_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(AnchorInfo).copy_b5d964_k$ = function (direction, offset, selectableId) {
    return new AnchorInfo(direction, offset, selectableId);
  };
  protoOf(AnchorInfo).copy$default_j716ns_k$ = function (direction, offset, selectableId, $super) {
    direction = direction === VOID ? this.direction_1 : direction;
    offset = offset === VOID ? this.offset_1 : offset;
    selectableId = selectableId === VOID ? this.selectableId_1 : selectableId;
    return $super === VOID ? this.copy_b5d964_k$(direction, offset, selectableId) : $super.copy_b5d964_k$.call(this, direction, offset, selectableId);
  };
  protoOf(AnchorInfo).toString = function () {
    return 'AnchorInfo(direction=' + this.direction_1 + ', offset=' + this.offset_1 + ', selectableId=' + toString(this.selectableId_1) + ')';
  };
  protoOf(AnchorInfo).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(result, 31) + this.offset_1 | 0;
    result = imul(result, 31) + this.selectableId_1.hashCode() | 0;
    return result;
  };
  protoOf(AnchorInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnchorInfo))
      return false;
    var tmp0_other_with_cast = other instanceof AnchorInfo ? other : THROW_CCE();
    if (!this.direction_1.equals(tmp0_other_with_cast.direction_1))
      return false;
    if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
      return false;
    if (!this.selectableId_1.equals(tmp0_other_with_cast.selectableId_1))
      return false;
    return true;
  };
  function Selection(start, end, handlesCrossed) {
    handlesCrossed = handlesCrossed === VOID ? false : handlesCrossed;
    this.start_1 = start;
    this.end_1 = end;
    this.handlesCrossed_1 = handlesCrossed;
  }
  protoOf(Selection).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Selection).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(Selection).get_handlesCrossed_5utwpv_k$ = function () {
    return this.handlesCrossed_1;
  };
  protoOf(Selection).merge_ev98bv_k$ = function (other) {
    if (other == null)
      return this;
    if (!this.handlesCrossed_1 ? other.handlesCrossed_1 : false)
      return other.copy$default_qascp8_k$(VOID, this.start_1);
    var handlesCrossed = this.start_1.equals(this.end_1) ? other.handlesCrossed_1 : this.handlesCrossed_1;
    var selection = this;
    var tmp;
    if (handlesCrossed) {
      tmp = selection.copy$default_qascp8_k$(other.start_1);
    } else {
      tmp = selection.copy$default_qascp8_k$(VOID, other.end_1);
    }
    selection = tmp;
    return selection;
  };
  protoOf(Selection).toTextRange_6wofw5_k$ = function () {
    return TextRange(this.start_1.offset_1, this.end_1.offset_1);
  };
  protoOf(Selection).component1_7eebsc_k$ = function () {
    return this.start_1;
  };
  protoOf(Selection).component2_7eebsb_k$ = function () {
    return this.end_1;
  };
  protoOf(Selection).component3_7eebsa_k$ = function () {
    return this.handlesCrossed_1;
  };
  protoOf(Selection).copy_fksu9h_k$ = function (start, end, handlesCrossed) {
    return new Selection(start, end, handlesCrossed);
  };
  protoOf(Selection).copy$default_qascp8_k$ = function (start, end, handlesCrossed, $super) {
    start = start === VOID ? this.start_1 : start;
    end = end === VOID ? this.end_1 : end;
    handlesCrossed = handlesCrossed === VOID ? this.handlesCrossed_1 : handlesCrossed;
    return $super === VOID ? this.copy_fksu9h_k$(start, end, handlesCrossed) : $super.copy_fksu9h_k$.call(this, start, end, handlesCrossed);
  };
  protoOf(Selection).toString = function () {
    return 'Selection(start=' + this.start_1 + ', end=' + this.end_1 + ', handlesCrossed=' + this.handlesCrossed_1 + ')';
  };
  protoOf(Selection).hashCode = function () {
    var result = this.start_1.hashCode();
    result = imul(result, 31) + this.end_1.hashCode() | 0;
    result = imul(result, 31) + (this.handlesCrossed_1 | 0) | 0;
    return result;
  };
  protoOf(Selection).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Selection))
      return false;
    var tmp0_other_with_cast = other instanceof Selection ? other : THROW_CCE();
    if (!this.start_1.equals(tmp0_other_with_cast.start_1))
      return false;
    if (!this.end_1.equals(tmp0_other_with_cast.end_1))
      return false;
    if (!(this.handlesCrossed_1 === tmp0_other_with_cast.handlesCrossed_1))
      return false;
    return true;
  };
  function TextLayoutResult$getWordBoundary$ref($boundThis) {
    var l = function (p0) {
      return new TextRange_0($boundThis.getWordBoundary_qx0177_k$(p0));
    };
    l.callableName = 'getWordBoundary';
    return l;
  }
  function getParagraphBoundary$ref($boundThis) {
    var l = function (p0) {
      return new TextRange_0(getParagraphBoundary($boundThis, p0));
    };
    l.callableName = 'getParagraphBoundary';
    return l;
  }
  function updateSelectionBoundary($this, textLayoutResult, newRawOffset, previousRawOffset, previousAdjustedOffset, otherBoundaryOffset, isStart, isReversed) {
    if (newRawOffset === previousRawOffset) {
      return previousAdjustedOffset;
    }
    var currentLine = textLayoutResult.getLineForOffset_9a3vwv_k$(newRawOffset);
    var previousLine = textLayoutResult.getLineForOffset_9a3vwv_k$(previousAdjustedOffset);
    if (!(currentLine === previousLine)) {
      return snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed);
    }
    var isExpanding_0 = isExpanding($this, newRawOffset, previousRawOffset, isStart, isReversed);
    if (!isExpanding_0) {
      return newRawOffset;
    }
    if (!isAtWordBoundary(textLayoutResult, $this, previousAdjustedOffset)) {
      return newRawOffset;
    }
    return snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed);
  }
  function snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed) {
    var wordBoundary = textLayoutResult.getWordBoundary_qx0177_k$(newRawOffset);
    var wordStartLine = textLayoutResult.getLineForOffset_9a3vwv_k$(_TextRange___get_start__impl__ww4t90(wordBoundary));
    var tmp;
    if (wordStartLine === currentLine) {
      tmp = _TextRange___get_start__impl__ww4t90(wordBoundary);
    } else {
      tmp = textLayoutResult.getLineStart_504snr_k$(currentLine);
    }
    var start = tmp;
    var wordEndLine = textLayoutResult.getLineForOffset_9a3vwv_k$(_TextRange___get_end__impl__gcdxpp(wordBoundary));
    var tmp_0;
    if (wordEndLine === currentLine) {
      tmp_0 = _TextRange___get_end__impl__gcdxpp(wordBoundary);
    } else {
      tmp_0 = textLayoutResult.getLineEnd$default_d4a36y_k$(currentLine);
    }
    var end = tmp_0;
    if (start === otherBoundaryOffset) {
      return end;
    }
    if (end === otherBoundaryOffset) {
      return start;
    }
    var threshold = (start + end | 0) / 2 | 0;
    var tmp_1;
    if (!!(isStart ^ isReversed)) {
      var tmp_2;
      if (newRawOffset <= threshold) {
        tmp_2 = start;
      } else {
        tmp_2 = end;
      }
      tmp_1 = tmp_2;
    } else {
      var tmp_3;
      if (newRawOffset >= threshold) {
        tmp_3 = end;
      } else {
        tmp_3 = start;
      }
      tmp_1 = tmp_3;
    }
    return tmp_1;
  }
  function isAtWordBoundary(_this__u8e3s4, $this, offset) {
    var wordBoundary = _this__u8e3s4.getWordBoundary_qx0177_k$(offset);
    return offset === _TextRange___get_start__impl__ww4t90(wordBoundary) ? true : offset === _TextRange___get_end__impl__gcdxpp(wordBoundary);
  }
  function isExpanding($this, newRawOffset, previousRawOffset, isStart, previousReversed) {
    if (previousRawOffset === -1) {
      return true;
    }
    if (newRawOffset === previousRawOffset) {
      return false;
    }
    var tmp;
    if (!!(isStart ^ previousReversed)) {
      tmp = newRawOffset < previousRawOffset;
    } else {
      tmp = newRawOffset > previousRawOffset;
    }
    return tmp;
  }
  function adjustByBoundary($this, textLayoutResult, newRawSelection, boundaryFun) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$();
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      return Companion_getInstance_22().get_Zero_e8si87_k$();
    }
    var maxOffset = get_lastIndex(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$());
    var startBoundary = boundaryFun(coerceIn(_TextRange___get_start__impl__ww4t90(newRawSelection), 0, maxOffset)).packedValue_1;
    var endBoundary = boundaryFun(coerceIn(_TextRange___get_end__impl__gcdxpp(newRawSelection), 0, maxOffset)).packedValue_1;
    var start = _TextRange___get_reversed__impl__emhnbm(newRawSelection) ? _TextRange___get_end__impl__gcdxpp(startBoundary) : _TextRange___get_start__impl__ww4t90(startBoundary);
    var end = _TextRange___get_reversed__impl__emhnbm(newRawSelection) ? _TextRange___get_start__impl__ww4t90(endBoundary) : _TextRange___get_end__impl__gcdxpp(endBoundary);
    return TextRange(start, end);
  }
  function SelectionAdjustment$Companion$None$1() {
  }
  protoOf(SelectionAdjustment$Companion$None$1).adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    return newRawSelectionRange;
  };
  function SelectionAdjustment$Companion$Character$1() {
  }
  protoOf(SelectionAdjustment$Companion$Character$1).adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp;
    if (_TextRange___get_collapsed__impl__cilesp(newRawSelectionRange)) {
      var tmp0_safe_receiver = previousSelectionRange;
      var tmp_0;
      var tmp_1 = tmp0_safe_receiver;
      if ((tmp_1 == null ? null : new TextRange_0(tmp_1)) == null) {
        tmp_0 = null;
      } else {
        tmp_0 = _TextRange___get_reversed__impl__emhnbm(tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp_0;
      var previousHandlesCrossed = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
      tmp = ensureAtLeastOneChar(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_text_wouvsm_k$(), _TextRange___get_start__impl__ww4t90(newRawSelectionRange), get_lastIndex(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$()), isStartHandle, previousHandlesCrossed);
    } else {
      tmp = newRawSelectionRange;
    }
    return tmp;
  };
  function SelectionAdjustment$Companion$Word$1() {
  }
  protoOf(SelectionAdjustment$Companion$Word$1).adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp = Companion_getInstance_27();
    return adjustByBoundary(tmp, textLayoutResult, newRawSelectionRange, TextLayoutResult$getWordBoundary$ref(textLayoutResult));
  };
  function SelectionAdjustment$Companion$Paragraph$1() {
  }
  protoOf(SelectionAdjustment$Companion$Paragraph$1).adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var boundaryFun = getParagraphBoundary$ref(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$());
    return adjustByBoundary(Companion_getInstance_27(), textLayoutResult, newRawSelectionRange, boundaryFun);
  };
  function SelectionAdjustment$Companion$CharacterWithWordAccelerate$1() {
  }
  protoOf(SelectionAdjustment$Companion$CharacterWithWordAccelerate$1).adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp = previousSelectionRange;
    if ((tmp == null ? null : new TextRange_0(tmp)) == null) {
      return Companion_getInstance_27().Word_1.adjust_xh53z6_k$(textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange);
    }
    if (_TextRange___get_collapsed__impl__cilesp(newRawSelectionRange)) {
      return ensureAtLeastOneChar(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_text_wouvsm_k$(), _TextRange___get_start__impl__ww4t90(newRawSelectionRange), get_lastIndex(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$()), isStartHandle, _TextRange___get_reversed__impl__emhnbm(previousSelectionRange));
    }
    var start;
    var end;
    if (isStartHandle) {
      start = updateSelectionBoundary(this, textLayoutResult, _TextRange___get_start__impl__ww4t90(newRawSelectionRange), previousHandleOffset, _TextRange___get_start__impl__ww4t90(previousSelectionRange), _TextRange___get_end__impl__gcdxpp(newRawSelectionRange), true, _TextRange___get_reversed__impl__emhnbm(newRawSelectionRange));
      end = _TextRange___get_end__impl__gcdxpp(newRawSelectionRange);
    } else {
      start = _TextRange___get_start__impl__ww4t90(newRawSelectionRange);
      end = updateSelectionBoundary(this, textLayoutResult, _TextRange___get_end__impl__gcdxpp(newRawSelectionRange), previousHandleOffset, _TextRange___get_end__impl__gcdxpp(previousSelectionRange), _TextRange___get_start__impl__ww4t90(newRawSelectionRange), false, _TextRange___get_reversed__impl__emhnbm(newRawSelectionRange));
    }
    return TextRange(start, end);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.None_1 = new SelectionAdjustment$Companion$None$1();
    var tmp_0 = this;
    tmp_0.Character_1 = new SelectionAdjustment$Companion$Character$1();
    var tmp_1 = this;
    tmp_1.Word_1 = new SelectionAdjustment$Companion$Word$1();
    var tmp_2 = this;
    tmp_2.Paragraph_1 = new SelectionAdjustment$Companion$Paragraph$1();
    var tmp_3 = this;
    tmp_3.CharacterWithWordAccelerate_1 = new SelectionAdjustment$Companion$CharacterWithWordAccelerate$1();
  }
  protoOf(Companion_1).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_1).get_Character_3i744g_k$ = function () {
    return this.Character_1;
  };
  protoOf(Companion_1).get_Word_wockfn_k$ = function () {
    return this.Word_1;
  };
  protoOf(Companion_1).get_Paragraph_2v2rol_k$ = function () {
    return this.Paragraph_1;
  };
  protoOf(Companion_1).get_CharacterWithWordAccelerate_b1h3l9_k$ = function () {
    return this.CharacterWithWordAccelerate_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_27() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function SelectionAdjustment() {
  }
  function ensureAtLeastOneChar(text, offset, lastOffset, isStartHandle, previousHandlesCrossed) {
    if (lastOffset === 0)
      return TextRange(offset, offset);
    if (offset === 0) {
      var tmp;
      if (isStartHandle) {
        tmp = TextRange(findFollowingBreak(text, 0), 0);
      } else {
        tmp = TextRange(0, findFollowingBreak(text, 0));
      }
      return tmp;
    }
    if (offset === lastOffset) {
      var tmp_0;
      if (isStartHandle) {
        tmp_0 = TextRange(findPrecedingBreak(text, lastOffset), lastOffset);
      } else {
        tmp_0 = TextRange(lastOffset, findPrecedingBreak(text, lastOffset));
      }
      return tmp_0;
    }
    var tmp_1;
    if (isStartHandle) {
      var tmp_2;
      if (!previousHandlesCrossed) {
        tmp_2 = TextRange(findPrecedingBreak(text, offset), offset);
      } else {
        tmp_2 = TextRange(findFollowingBreak(text, offset), offset);
      }
      tmp_1 = tmp_2;
    } else {
      var tmp_3;
      if (!previousHandlesCrossed) {
        tmp_3 = TextRange(offset, findFollowingBreak(text, offset));
      } else {
        tmp_3 = TextRange(offset, findPrecedingBreak(text, offset));
      }
      tmp_1 = tmp_3;
    }
    return tmp_1;
  }
  function get_HandleWidth() {
    _init_properties_SelectionHandles_kt__nhzem7();
    return HandleWidth;
  }
  var HandleWidth;
  function get_HandleHeight() {
    _init_properties_SelectionHandles_kt__nhzem7();
    return HandleHeight;
  }
  var HandleHeight;
  function get_SelectionHandleInfoKey() {
    _init_properties_SelectionHandles_kt__nhzem7();
    return SelectionHandleInfoKey;
  }
  var SelectionHandleInfoKey;
  function SelectionHandleInfo(handle, position) {
    this.handle_1 = handle;
    this.position_1 = position;
  }
  protoOf(SelectionHandleInfo).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(SelectionHandleInfo).get_position_kw508q_k$ = function () {
    return this.position_1;
  };
  protoOf(SelectionHandleInfo).component1_7eebsc_k$ = function () {
    return this.handle_1;
  };
  protoOf(SelectionHandleInfo).component2_mooz9z_k$ = function () {
    return this.position_1;
  };
  protoOf(SelectionHandleInfo).copy_s35jy4_k$ = function (handle, position) {
    return new SelectionHandleInfo(handle, position);
  };
  protoOf(SelectionHandleInfo).copy$default_gjgy6_k$ = function (handle, position, $super) {
    handle = handle === VOID ? this.handle_1 : handle;
    position = position === VOID ? this.position_1 : position;
    return $super === VOID ? this.copy_s35jy4_k$(handle, position) : $super.copy_s35jy4_k$.call(this, handle, new Offset_0(position));
  };
  protoOf(SelectionHandleInfo).toString = function () {
    return 'SelectionHandleInfo(handle=' + this.handle_1 + ', position=' + new Offset_0(this.position_1) + ')';
  };
  protoOf(SelectionHandleInfo).hashCode = function () {
    var result = this.handle_1.hashCode();
    result = imul(result, 31) + Offset__hashCode_impl_hbql41(this.position_1) | 0;
    return result;
  };
  protoOf(SelectionHandleInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectionHandleInfo))
      return false;
    var tmp0_other_with_cast = other instanceof SelectionHandleInfo ? other : THROW_CCE();
    if (!this.handle_1.equals(tmp0_other_with_cast.handle_1))
      return false;
    if (!equals(this.position_1, tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  var properties_initialized_SelectionHandles_kt_h9mb7j;
  function _init_properties_SelectionHandles_kt__nhzem7() {
    if (properties_initialized_SelectionHandles_kt_h9mb7j) {
    } else {
      properties_initialized_SelectionHandles_kt_h9mb7j = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(25);
      HandleWidth = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(25);
      HandleHeight = tmp$ret$0_0;
      SelectionHandleInfoKey = new SemanticsPropertyKey('SelectionHandleInfo');
    }
  }
  function get_UnspecifiedAnimationVector2D() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return UnspecifiedAnimationVector2D;
  }
  var UnspecifiedAnimationVector2D;
  function get_UnspecifiedSafeOffsetVectorConverter() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return UnspecifiedSafeOffsetVectorConverter;
  }
  var UnspecifiedSafeOffsetVectorConverter;
  function get_OffsetDisplacementThreshold() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return OffsetDisplacementThreshold;
  }
  var OffsetDisplacementThreshold;
  function get_MagnifierSpringSpec() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return MagnifierSpringSpec;
  }
  var MagnifierSpringSpec;
  function UnspecifiedSafeOffsetVectorConverter$lambda(it) {
    _init_properties_SelectionMagnifier_kt__29sucy();
    var tmp;
    if (get_isSpecified(it.packedValue_1)) {
      tmp = new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.packedValue_1), _Offset___get_y__impl__8bzhra(it.packedValue_1));
    } else {
      tmp = get_UnspecifiedAnimationVector2D();
    }
    return tmp;
  }
  function UnspecifiedSafeOffsetVectorConverter$lambda_0(it) {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return new Offset_0(Offset(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  var properties_initialized_SelectionMagnifier_kt_dgnx1w;
  function _init_properties_SelectionMagnifier_kt__29sucy() {
    if (properties_initialized_SelectionMagnifier_kt_dgnx1w) {
    } else {
      properties_initialized_SelectionMagnifier_kt_dgnx1w = true;
      UnspecifiedAnimationVector2D = new AnimationVector2D(FloatCompanionObject_getInstance().get_NaN_18jnv2_k$(), FloatCompanionObject_getInstance().get_NaN_18jnv2_k$());
      var tmp = UnspecifiedSafeOffsetVectorConverter$lambda;
      UnspecifiedSafeOffsetVectorConverter = TwoWayConverter(tmp, UnspecifiedSafeOffsetVectorConverter$lambda_0);
      OffsetDisplacementThreshold = Offset(Spring_getInstance().get_DefaultDisplacementThreshold_1c58p0_k$(), Spring_getInstance().get_DefaultDisplacementThreshold_1c58p0_k$());
      MagnifierSpringSpec = new SpringSpec(VOID, VOID, new Offset_0(get_OffsetDisplacementThreshold()));
    }
  }
  function SelectionMode$Vertical() {
    SelectionMode.call(this, 'Vertical', 0);
    SelectionMode_Vertical_instance = this;
  }
  protoOf(SelectionMode$Vertical).compare_blje1w_k$ = function (position, bounds) {
    if (bounds.contains_ggguyy_k$(position))
      return 0;
    if (_Offset___get_y__impl__8bzhra(position) < bounds.get_top_18ivbo_k$())
      return -1;
    if (_Offset___get_x__impl__xvi35n(position) < bounds.get_left_woprgw_k$() ? _Offset___get_y__impl__8bzhra(position) < bounds.get_bottom_bj8ras_k$() : false)
      return -1;
    return 1;
  };
  var SelectionMode_Vertical_instance;
  function SelectionMode$Horizontal() {
    SelectionMode.call(this, 'Horizontal', 1);
    SelectionMode_Horizontal_instance = this;
  }
  protoOf(SelectionMode$Horizontal).compare_blje1w_k$ = function (position, bounds) {
    if (bounds.contains_ggguyy_k$(position))
      return 0;
    if (_Offset___get_x__impl__xvi35n(position) < bounds.get_left_woprgw_k$())
      return -1;
    if (_Offset___get_y__impl__8bzhra(position) < bounds.get_top_18ivbo_k$() ? _Offset___get_x__impl__xvi35n(position) < bounds.get_right_ixz7xv_k$() : false)
      return -1;
    return 1;
  };
  var SelectionMode_Horizontal_instance;
  function values_2() {
    return [SelectionMode_Vertical_getInstance(), SelectionMode_Horizontal_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Vertical':
        return SelectionMode_Vertical_getInstance();
      case 'Horizontal':
        return SelectionMode_Horizontal_getInstance();
      default:
        SelectionMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SelectionMode_entriesInitialized;
  function SelectionMode_initEntries() {
    if (SelectionMode_entriesInitialized)
      return Unit_getInstance();
    SelectionMode_entriesInitialized = true;
    SelectionMode_Vertical_instance = new SelectionMode$Vertical();
    SelectionMode_Horizontal_instance = new SelectionMode$Horizontal();
  }
  function SelectionMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SelectionMode).isSelected_edatdn_k$ = function (bounds, start, end) {
    if (bounds.contains_ggguyy_k$(start) ? true : bounds.contains_ggguyy_k$(end)) {
      return true;
    }
    var compareStart = this.compare_blje1w_k$(start, bounds);
    var compareEnd = this.compare_blje1w_k$(end, bounds);
    return !!(compareStart > 0 ^ compareEnd > 0);
  };
  function SelectionMode_Vertical_getInstance() {
    SelectionMode_initEntries();
    return SelectionMode_Vertical_instance;
  }
  function SelectionMode_Horizontal_getInstance() {
    SelectionMode_initEntries();
    return SelectionMode_Horizontal_instance;
  }
  function get_LocalSelectionRegistrar() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return LocalSelectionRegistrar;
  }
  var LocalSelectionRegistrar;
  function Companion_2() {
    Companion_instance_2 = this;
    this.InvalidSelectableId_1 = new Long(0, 0);
  }
  protoOf(Companion_2).get_InvalidSelectableId_nbfra9_k$ = function () {
    return this.InvalidSelectableId_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_28() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function SelectionRegistrar() {
  }
  function hasSelection(_this__u8e3s4, selectableId) {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_subselections_i6sdj2_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.containsKey_wgk31w_k$(selectableId);
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  function LocalSelectionRegistrar$lambda() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return null;
  }
  var properties_initialized_SelectionRegistrar_kt_shxs4d;
  function _init_properties_SelectionRegistrar_kt__oigj6p() {
    if (properties_initialized_SelectionRegistrar_kt_shxs4d) {
    } else {
      properties_initialized_SelectionRegistrar_kt_shxs4d = true;
      LocalSelectionRegistrar = compositionLocalOf(VOID, LocalSelectionRegistrar$lambda);
    }
  }
  function get_LocalTextSelectionColors() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return LocalTextSelectionColors;
  }
  var LocalTextSelectionColors;
  function get_$stableprop_13() {
    return 0;
  }
  function TextSelectionColors(handleColor, backgroundColor) {
    this.handleColor_1 = handleColor;
    this.backgroundColor_1 = backgroundColor;
    this.$stable_1 = 0;
  }
  protoOf(TextSelectionColors).get_handleColor_euxoyx_k$ = function () {
    return this.handleColor_1;
  };
  protoOf(TextSelectionColors).get_backgroundColor_5dhxap_k$ = function () {
    return this.backgroundColor_1;
  };
  protoOf(TextSelectionColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSelectionColors))
      return false;
    if (!equals(this.handleColor_1, other.handleColor_1))
      return false;
    if (!equals(this.backgroundColor_1, other.backgroundColor_1))
      return false;
    return true;
  };
  protoOf(TextSelectionColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.handleColor_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.backgroundColor_1) | 0;
    return result;
  };
  protoOf(TextSelectionColors).toString = function () {
    return 'SelectionColors(selectionHandleColor=' + new Color(this.handleColor_1) + ', ' + ('selectionBackgroundColor=' + new Color(this.backgroundColor_1) + ')');
  };
  function LocalTextSelectionColors$lambda() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return get_DefaultTextSelectionColors();
  }
  var properties_initialized_TextSelectionColors_kt_x2xmyn;
  function _init_properties_TextSelectionColors_kt__lgomir() {
    if (properties_initialized_TextSelectionColors_kt_x2xmyn) {
    } else {
      properties_initialized_TextSelectionColors_kt_x2xmyn = true;
      LocalTextSelectionColors = compositionLocalOf(VOID, LocalTextSelectionColors$lambda);
    }
  }
  function getSelectionHandleCoordinates(textLayoutResult, offset, isStart, areHandlesCrossed) {
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(offset);
    var x = getHorizontalPosition(textLayoutResult, offset, isStart, areHandlesCrossed);
    var y = textLayoutResult.getLineBottom_spjtf0_k$(line);
    return Offset(x, y);
  }
  function getHorizontalPosition(_this__u8e3s4, offset, isStart, areHandlesCrossed) {
    var tmp;
    if ((isStart ? !areHandlesCrossed : false) ? true : !isStart ? areHandlesCrossed : false) {
      tmp = offset;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = offset - 1 | 0;
      tmp$ret$0 = Math.max(tmp0_max, 0);
      tmp = tmp$ret$0;
    }
    var offsetToCheck = tmp;
    var bidiRunDirection = _this__u8e3s4.getBidiRunDirection_dqdnqj_k$(offsetToCheck);
    var paragraphDirection = _this__u8e3s4.getParagraphDirection_x8sft2_k$(offset);
    return _this__u8e3s4.getHorizontalPosition_b8vvic_k$(offset, bidiRunDirection.equals(paragraphDirection));
  }
  function MouseSelectionObserver() {
  }
  function mouseSelectionDetector(_this__u8e3s4, observer, $completion) {
    var tmp0 = awaitEachGesture(_this__u8e3s4, mouseSelectionDetector$slambda_0(observer, null), $completion);
    return tmp0;
  }
  function _get_viewConfiguration__gn2pk0($this) {
    return $this.viewConfiguration_1;
  }
  function ClicksCounter(viewConfiguration) {
    this.viewConfiguration_1 = viewConfiguration;
    this.clicks_1 = 0;
    this.prevClick_1 = null;
  }
  protoOf(ClicksCounter).set_clicks_ln1cqg_k$ = function (_set____db54di) {
    this.clicks_1 = _set____db54di;
  };
  protoOf(ClicksCounter).get_clicks_byfmd0_k$ = function () {
    return this.clicks_1;
  };
  protoOf(ClicksCounter).set_prevClick_hntiho_k$ = function (_set____db54di) {
    this.prevClick_1 = _set____db54di;
  };
  protoOf(ClicksCounter).get_prevClick_5tza1g_k$ = function () {
    return this.prevClick_1;
  };
  protoOf(ClicksCounter).update_4lz0mo_k$ = function (event) {
    var currentPrevClick = this.prevClick_1;
    var newClick = event.get_changes_dhi2my_k$().get_fkrdnv_k$(0);
    if ((!(currentPrevClick == null) ? this.timeIsTolerable_kkfmyn_k$(currentPrevClick, newClick) : false) ? this.positionIsTolerable_1cydwb_k$(currentPrevClick, newClick) : false) {
      var tmp0_this = this;
      tmp0_this.clicks_1 = tmp0_this.clicks_1 + 1 | 0;
    } else {
      this.clicks_1 = 1;
    }
    this.prevClick_1 = newClick;
  };
  protoOf(ClicksCounter).timeIsTolerable_kkfmyn_k$ = function (prevClick, newClick) {
    var diff = newClick.get_uptimeMillis_9p467d_k$().minus_llf5ei_k$(prevClick.get_uptimeMillis_9p467d_k$());
    return diff.compareTo_n4fqi2_k$(this.viewConfiguration_1.get_doubleTapTimeoutMillis_mlgmxq_k$()) < 0;
  };
  protoOf(ClicksCounter).positionIsTolerable_1cydwb_k$ = function (prevClick, newClick) {
    var diff = Offset__minus_impl_hoj2c0(newClick.get_position_kw508q_k$(), prevClick.get_position_kw508q_k$());
    return Offset__getDistance_impl_pclvxn(diff) < 100.0;
  };
  function awaitMouseEventDown(_this__u8e3s4, $completion) {
    var tmp = new $awaitMouseEventDownCOROUTINE$6(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_ClicksSlop() {
    return ClicksSlop;
  }
  var ClicksSlop;
  function mouseSelectionDetector$slambda$lambda($observer) {
    return function (it) {
      var tmp;
      if ($observer.onExtendDrag_m0cr7o_k$(it.get_position_kw508q_k$())) {
        it.consume_spbz2t_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda$lambda_0($observer, $selectionMode) {
    return function (it) {
      var tmp;
      if ($observer.onDrag_4lf411_k$(it.get_position_kw508q_k$(), $selectionMode)) {
        it.consume_spbz2t_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda($observer, resultContinuation) {
    this.$observer_1 = $observer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mouseSelectionDetector$slambda).invoke_6kuihv_k$ = function ($this$awaitEachGesture, $completion) {
    var tmp = this.create_699gxy_k$($this$awaitEachGesture, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(mouseSelectionDetector$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(mouseSelectionDetector$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(8);
            this.clicksCounter0__1 = new ClicksCounter(this.$this$awaitEachGesture_1.get_viewConfiguration_qgdaco_k$());
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(9);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = awaitMouseEventDown(this.$this$awaitEachGesture_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.down1__1 = suspendResult;
            this.clicksCounter0__1.update_4lz0mo_k$(this.down1__1);
            this.downChange2__1 = this.down1__1.get_changes_dhi2my_k$().get_fkrdnv_k$(0);
            if (get_isShiftPressed_0(this.down1__1.get_keyboardModifiers_d2h458_k$())) {
              this.started3__1 = this.$observer_1.onExtend_dx8a28_k$(this.downChange2__1.get_position_kw508q_k$());
              if (this.started3__1) {
                this.downChange2__1.consume_spbz2t_k$();
                this.set_state_a96kl8_k$(5);
                var tmp_0 = this.downChange2__1.get_id_o0558_k$();
                suspendResult = drag(this.$this$awaitEachGesture_1, tmp_0, mouseSelectionDetector$slambda$lambda(this.$observer_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(6);
                continue $sm;
              }
            } else {
              var tmp_1 = this;
              var tmp0_subject = this.clicksCounter0__1.clicks_1;
              switch (tmp0_subject) {
                case 1:
                  tmp_1.selectionMode4__1 = Companion_getInstance_27().get_None_wo6tgh_k$();
                  break;
                case 2:
                  tmp_1.selectionMode4__1 = Companion_getInstance_27().get_Word_wockfn_k$();
                  break;
                default:
                  tmp_1.selectionMode4__1 = Companion_getInstance_27().get_Paragraph_2v2rol_k$();
                  break;
              }
              this.started5__1 = this.$observer_1.onStart_i02yuj_k$(this.downChange2__1.get_position_kw508q_k$(), this.selectionMode4__1);
              if (this.started5__1) {
                this.downChange2__1.consume_spbz2t_k$();
                this.set_state_a96kl8_k$(3);
                var tmp_2 = this.downChange2__1.get_id_o0558_k$();
                suspendResult = drag(this.$this$awaitEachGesture_1, tmp_2, mouseSelectionDetector$slambda$lambda_0(this.$observer_1, this.selectionMode4__1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(4);
                continue $sm;
              }
            }

            break;
          case 3:
            ;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 5:
            ;
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 8:
            throw this.get_exception_x0n6w6_k$();
          case 9:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(mouseSelectionDetector$slambda).create_699gxy_k$ = function ($this$awaitEachGesture, completion) {
    var i = new mouseSelectionDetector$slambda(this.$observer_1, completion);
    i.$this$awaitEachGesture_1 = $this$awaitEachGesture;
    return i;
  };
  protoOf(mouseSelectionDetector$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function mouseSelectionDetector$slambda_0($observer, resultContinuation) {
    var i = new mouseSelectionDetector$slambda($observer, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.invoke_6kuihv_k$($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitMouseEventDownCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitMouseEventDownCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event0__1 = suspendResult;
            var tmp_0;
            if (get_isPrimaryPressed(this.event0__1.get_buttons_mb0klg_k$())) {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_fastAll = this.event0__1.get_changes_dhi2my_k$();
                var inductionVariable = 0;
                var last = tmp0_fastAll.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable <= last)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var item = tmp0_fastAll.get_fkrdnv_k$(index);
                    if (!(item.get_type_zeflrq_k$() === Companion_getInstance_9().get_Mouse_a0dpcz_k$() ? changedToDown(item) : false)) {
                      tmp$ret$0 = false;
                      break l$ret$1;
                    }
                  }
                   while (inductionVariable <= last);
                tmp$ret$0 = true;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            } else {
              tmp_0 = false;
            }

            if (!tmp_0) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return this.event0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function get_LocalScrollbarStyle() {
    _init_properties_Scrollbar_js_kt__w9ycz5();
    return LocalScrollbarStyle;
  }
  var LocalScrollbarStyle;
  function get_$stableprop_14() {
    return 0;
  }
  function ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    this.minimalHeight_1 = minimalHeight;
    this.thickness_1 = thickness;
    this.shape_1 = shape;
    this.hoverDurationMillis_1 = hoverDurationMillis;
    this.unhoverColor_1 = unhoverColor;
    this.hoverColor_1 = hoverColor;
    this.$stable_1 = 0;
  }
  protoOf(ScrollbarStyle).get_minimalHeight_9dvsue_k$ = function () {
    return this.minimalHeight_1;
  };
  protoOf(ScrollbarStyle).get_thickness_djs6pm_k$ = function () {
    return this.thickness_1;
  };
  protoOf(ScrollbarStyle).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(ScrollbarStyle).get_hoverDurationMillis_fsut4d_k$ = function () {
    return this.hoverDurationMillis_1;
  };
  protoOf(ScrollbarStyle).get_unhoverColor_96j3qm_k$ = function () {
    return this.unhoverColor_1;
  };
  protoOf(ScrollbarStyle).get_hoverColor_tw7xxn_k$ = function () {
    return this.hoverColor_1;
  };
  protoOf(ScrollbarStyle).component1_z2a8sv_k$ = function () {
    return this.minimalHeight_1;
  };
  protoOf(ScrollbarStyle).component2_11tj3k_k$ = function () {
    return this.thickness_1;
  };
  protoOf(ScrollbarStyle).component3_7eebsa_k$ = function () {
    return this.shape_1;
  };
  protoOf(ScrollbarStyle).component4_7eebs9_k$ = function () {
    return this.hoverDurationMillis_1;
  };
  protoOf(ScrollbarStyle).component5_6mmcoz_k$ = function () {
    return this.unhoverColor_1;
  };
  protoOf(ScrollbarStyle).component6_ust31e_k$ = function () {
    return this.hoverColor_1;
  };
  protoOf(ScrollbarStyle).copy_n0gxs4_k$ = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    return new ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor);
  };
  protoOf(ScrollbarStyle).copy$default_52qtxe_k$ = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor, $super) {
    minimalHeight = minimalHeight === VOID ? this.minimalHeight_1 : minimalHeight;
    thickness = thickness === VOID ? this.thickness_1 : thickness;
    shape = shape === VOID ? this.shape_1 : shape;
    hoverDurationMillis = hoverDurationMillis === VOID ? this.hoverDurationMillis_1 : hoverDurationMillis;
    unhoverColor = unhoverColor === VOID ? this.unhoverColor_1 : unhoverColor;
    hoverColor = hoverColor === VOID ? this.hoverColor_1 : hoverColor;
    return $super === VOID ? this.copy_n0gxs4_k$(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) : $super.copy_n0gxs4_k$.call(this, new Dp(minimalHeight), new Dp(thickness), shape, hoverDurationMillis, new Color(unhoverColor), new Color(hoverColor));
  };
  protoOf(ScrollbarStyle).toString = function () {
    return 'ScrollbarStyle(minimalHeight=' + new Dp(this.minimalHeight_1) + ', thickness=' + new Dp(this.thickness_1) + ', shape=' + this.shape_1 + ', hoverDurationMillis=' + this.hoverDurationMillis_1 + ', unhoverColor=' + new Color(this.unhoverColor_1) + ', hoverColor=' + new Color(this.hoverColor_1) + ')';
  };
  protoOf(ScrollbarStyle).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.minimalHeight_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.thickness_1) | 0;
    result = imul(result, 31) + hashCode(this.shape_1) | 0;
    result = imul(result, 31) + this.hoverDurationMillis_1 | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.unhoverColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.hoverColor_1) | 0;
    return result;
  };
  protoOf(ScrollbarStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScrollbarStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ScrollbarStyle ? other : THROW_CCE();
    if (!equals(this.minimalHeight_1, tmp0_other_with_cast.minimalHeight_1))
      return false;
    if (!equals(this.thickness_1, tmp0_other_with_cast.thickness_1))
      return false;
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!(this.hoverDurationMillis_1 === tmp0_other_with_cast.hoverDurationMillis_1))
      return false;
    if (!equals(this.unhoverColor_1, tmp0_other_with_cast.unhoverColor_1))
      return false;
    if (!equals(this.hoverColor_1, tmp0_other_with_cast.hoverColor_1))
      return false;
    return true;
  };
  function defaultScrollbarStyle() {
    _init_properties_Scrollbar_js_kt__w9ycz5();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(4);
    return new ScrollbarStyle(tmp, tmp_0, RoundedCornerShape_2(tmp$ret$2), 300, Color__copy$default_impl_ectz3s(Companion_getInstance_0().get_Black_wh3yn9_k$(), 0.12), Color__copy$default_impl_ectz3s(Companion_getInstance_0().get_Black_wh3yn9_k$(), 0.5));
  }
  function LocalScrollbarStyle$lambda() {
    _init_properties_Scrollbar_js_kt__w9ycz5();
    return defaultScrollbarStyle();
  }
  var properties_initialized_Scrollbar_js_kt_kjru5v;
  function _init_properties_Scrollbar_js_kt__w9ycz5() {
    if (properties_initialized_Scrollbar_js_kt_kjru5v) {
    } else {
      properties_initialized_Scrollbar_js_kt_kjru5v = true;
      LocalScrollbarStyle = staticCompositionLocalOf(LocalScrollbarStyle$lambda);
    }
  }
  function get_platformDefaultKeyMapping() {
    _init_properties_KeyMapping_jsMain_kt__uqr90x();
    return platformDefaultKeyMapping;
  }
  var platformDefaultKeyMapping;
  var properties_initialized_KeyMapping_jsMain_kt_bmmgcx;
  function _init_properties_KeyMapping_jsMain_kt__uqr90x() {
    if (properties_initialized_KeyMapping_jsMain_kt_bmmgcx) {
    } else {
      properties_initialized_KeyMapping_jsMain_kt_bmmgcx = true;
      platformDefaultKeyMapping = get_defaultKeyMapping();
    }
  }
  function get_DefaultCursorThickness() {
    _init_properties_TextFieldCursor_js_kt__21fcek();
    return DefaultCursorThickness;
  }
  var DefaultCursorThickness;
  var properties_initialized_TextFieldCursor_js_kt_4q87vu;
  function _init_properties_TextFieldCursor_js_kt__21fcek() {
    if (properties_initialized_TextFieldCursor_js_kt_4q87vu) {
    } else {
      properties_initialized_TextFieldCursor_js_kt_4q87vu = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      DefaultCursorThickness = tmp$ret$0;
    }
  }
  function get_textPointerIcon() {
    _init_properties_TextPointerIcon_js_kt__ixjsfm();
    return textPointerIcon;
  }
  var textPointerIcon;
  var properties_initialized_TextPointerIcon_js_kt_plq52o;
  function _init_properties_TextPointerIcon_js_kt__ixjsfm() {
    if (properties_initialized_TextPointerIcon_js_kt_plq52o) {
    } else {
      properties_initialized_TextPointerIcon_js_kt_plq52o = true;
      textPointerIcon = DummyPointerIcon_getInstance();
    }
  }
  function get_isInTouchMode() {
    return isInTouchMode;
  }
  var isInTouchMode;
  function get_DefaultSelectionColor() {
    _init_properties_DefaultTextSelectionColors_js_kt__ohmec7();
    return DefaultSelectionColor;
  }
  var DefaultSelectionColor;
  function get_DefaultTextSelectionColors() {
    _init_properties_DefaultTextSelectionColors_js_kt__ohmec7();
    return DefaultTextSelectionColors;
  }
  var DefaultTextSelectionColors;
  var properties_initialized_DefaultTextSelectionColors_js_kt_i7z293;
  function _init_properties_DefaultTextSelectionColors_js_kt__ohmec7() {
    if (properties_initialized_DefaultTextSelectionColors_js_kt_i7z293) {
    } else {
      properties_initialized_DefaultTextSelectionColors_js_kt_i7z293 = true;
      DefaultSelectionColor = Color_0(new Long(-12417292, 0));
      DefaultTextSelectionColors = new TextSelectionColors(get_DefaultSelectionColor(), Color__copy$default_impl_ectz3s(get_DefaultSelectionColor(), 0.4));
    }
  }
  function get_TapIndicationDelay() {
    return TapIndicationDelay;
  }
  var TapIndicationDelay;
  function NoOp() {
  }
  protoOf(NoOp).equals = function (other) {
    if (!(other instanceof NoOp))
      return false;
    var tmp0_other_with_cast = other instanceof NoOp ? other : THROW_CCE();
    return true;
  };
  protoOf(NoOp).hashCode = function () {
    return 0;
  };
  protoOf(NoOp).toString = function () {
    return '@androidx.compose.foundation.internal.NoOp()';
  };
  function get_SPACE_KEY_CODE() {
    _init_properties_Toggleable_jsNative_kt__wo698u();
    return SPACE_KEY_CODE;
  }
  var SPACE_KEY_CODE;
  var properties_initialized_Toggleable_jsNative_kt_qr95c;
  function _init_properties_Toggleable_jsNative_kt__wo698u() {
    if (properties_initialized_Toggleable_jsNative_kt_qr95c) {
    } else {
      properties_initialized_Toggleable_jsNative_kt_qr95c = true;
      SPACE_KEY_CODE = toLong(SkikoKey_KEY_SPACE_getInstance().get_platformKeyCode_k11s6o_k$());
    }
  }
  function MappedKeys() {
    MappedKeys_instance = this;
    this.A_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_A_4rac6v_k$()));
    this.C_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_C_z9yylx_k$()));
    this.H_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_H_uhjlao_k$()));
    this.V_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_V_ty3eam_k$()));
    this.X_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_X_kl84g_k$()));
    this.Y_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Y_ftxjbz_k$()));
    this.Z_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Z_v39uji_k$()));
    this.Backslash_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Backslash_wlrcta_k$()));
    this.DirectionLeft_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_DirectionLeft_nnkkvm_k$()));
    this.DirectionRight_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_DirectionRight_k294n_k$()));
    this.DirectionUp_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_DirectionUp_s9cb6m_k$()));
    this.DirectionDown_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_DirectionDown_81vop_k$()));
    this.PageUp_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_PageUp_d9v330_k$()));
    this.PageDown_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_PageDown_hz00wl_k$()));
    this.MoveHome_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_MoveHome_6w70dm_k$()));
    this.MoveEnd_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_MoveEnd_bx0ymm_k$()));
    this.Insert_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Insert_y6atub_k$()));
    this.Enter_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Enter_72nuyo_k$()));
    this.Backspace_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Backspace_g19x21_k$()));
    this.Delete_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Delete_mdp9fp_k$()));
    this.Paste_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Paste_5hb4sl_k$()));
    this.Cut_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Cut_9e92qy_k$()));
    this.Tab_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Tab_x9q08z_k$()));
    this.Copy_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Copy_i0eaup_k$()));
  }
  protoOf(MappedKeys).get_A_4rac6v_k$ = function () {
    return this.A_1;
  };
  protoOf(MappedKeys).get_C_z9yylx_k$ = function () {
    return this.C_1;
  };
  protoOf(MappedKeys).get_H_uhjlao_k$ = function () {
    return this.H_1;
  };
  protoOf(MappedKeys).get_V_ty3eam_k$ = function () {
    return this.V_1;
  };
  protoOf(MappedKeys).get_X_kl84g_k$ = function () {
    return this.X_1;
  };
  protoOf(MappedKeys).get_Y_ftxjbz_k$ = function () {
    return this.Y_1;
  };
  protoOf(MappedKeys).get_Z_v39uji_k$ = function () {
    return this.Z_1;
  };
  protoOf(MappedKeys).get_Backslash_wlrcta_k$ = function () {
    return this.Backslash_1;
  };
  protoOf(MappedKeys).get_DirectionLeft_nnkkvm_k$ = function () {
    return this.DirectionLeft_1;
  };
  protoOf(MappedKeys).get_DirectionRight_k294n_k$ = function () {
    return this.DirectionRight_1;
  };
  protoOf(MappedKeys).get_DirectionUp_s9cb6m_k$ = function () {
    return this.DirectionUp_1;
  };
  protoOf(MappedKeys).get_DirectionDown_81vop_k$ = function () {
    return this.DirectionDown_1;
  };
  protoOf(MappedKeys).get_PageUp_d9v330_k$ = function () {
    return this.PageUp_1;
  };
  protoOf(MappedKeys).get_PageDown_hz00wl_k$ = function () {
    return this.PageDown_1;
  };
  protoOf(MappedKeys).get_MoveHome_6w70dm_k$ = function () {
    return this.MoveHome_1;
  };
  protoOf(MappedKeys).get_MoveEnd_bx0ymm_k$ = function () {
    return this.MoveEnd_1;
  };
  protoOf(MappedKeys).get_Insert_y6atub_k$ = function () {
    return this.Insert_1;
  };
  protoOf(MappedKeys).get_Enter_72nuyo_k$ = function () {
    return this.Enter_1;
  };
  protoOf(MappedKeys).get_Backspace_g19x21_k$ = function () {
    return this.Backspace_1;
  };
  protoOf(MappedKeys).get_Delete_mdp9fp_k$ = function () {
    return this.Delete_1;
  };
  protoOf(MappedKeys).get_Paste_5hb4sl_k$ = function () {
    return this.Paste_1;
  };
  protoOf(MappedKeys).get_Cut_9e92qy_k$ = function () {
    return this.Cut_1;
  };
  protoOf(MappedKeys).get_Tab_x9q08z_k$ = function () {
    return this.Tab_1;
  };
  protoOf(MappedKeys).get_Copy_i0eaup_k$ = function () {
    return this.Copy_1;
  };
  var MappedKeys_instance;
  function MappedKeys_getInstance() {
    if (MappedKeys_instance == null)
      new MappedKeys();
    return MappedKeys_instance;
  }
  function _isSystemInDarkTheme$composable($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -700866316, 'C(_isSystemInDarkTheme$composable):DarkTheme.skiko.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(-700866316, $changed, -1, 'androidx.compose.foundation._isSystemInDarkTheme$composable (DarkTheme.skiko.kt:46)');
    }
    var tmp0 = get_currentSystemTheme().equals(SystemTheme_DARK_getInstance());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function findFollowingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_24().makeCharacterInstance$default_lxnpdw_k$();
    it.setText_nscvi8_k$(_this__u8e3s4);
    return it.following_1lapf4_k$(index);
  }
  function findPrecedingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_24().makeCharacterInstance$default_lxnpdw_k$();
    it.setText_nscvi8_k$(_this__u8e3s4);
    return it.preceding_i4vixu_k$(index);
  }
  //region block: post-declaration
  protoOf(Background).foldIn_u08fre_k$ = foldIn;
  protoOf(Background).foldOut_4ty55p_k$ = foldOut;
  protoOf(Background).any_hrontp_k$ = any;
  protoOf(Background).all_ctzlrs_k$ = all;
  protoOf(Background).then_5qw5wu_k$ = then;
  protoOf(DefaultScrollMotionDurationScale$1).get_key_18j28a_k$ = get_key;
  protoOf(DefaultScrollMotionDurationScale$1).get_j1ktw6_k$ = get;
  protoOf(DefaultScrollMotionDurationScale$1).fold_iindx8_k$ = fold;
  protoOf(DefaultScrollMotionDurationScale$1).minusKey_y21q55_k$ = minusKey;
  protoOf(DefaultScrollMotionDurationScale$1).plus_rgw9wi_k$ = plus;
  protoOf(ConsumeAllFlingOnDirection).onPreScroll_lxl9op_k$ = onPreScroll;
  protoOf(ConsumeAllFlingOnDirection).onPreFling_xhlpmx_k$ = onPreFling;
  protoOf(EmptyLayoutInfo$1).get_viewportSize_38c6y9_k$ = get_viewportSize;
  protoOf(EmptyLayoutInfo$1).get_orientation_9wu93t_k$ = get_orientation;
  protoOf(EmptyLayoutInfo$1).get_reverseLayout_nclvnn_k$ = get_reverseLayout;
  protoOf(EmptyLayoutInfo$1).get_beforeContentPadding_2dperk_k$ = get_beforeContentPadding;
  protoOf(EmptyLayoutInfo$1).get_afterContentPadding_49ooob_k$ = get_afterContentPadding;
  protoOf(UnitDensity$1).toPx_u0ojv5_k$ = toPx;
  protoOf(UnitDensity$1).toPx_x7oik4_k$ = toPx_0;
  protoOf(UnitDensity$1).roundToPx_hl1u8z_k$ = roundToPx;
  protoOf(UnitDensity$1).roundToPx_bdej4u_k$ = roundToPx_0;
  protoOf(UnitDensity$1).toSp_ul0xj8_k$ = toSp;
  protoOf(UnitDensity$1).toSp_8a8emd_k$ = toSp_0;
  protoOf(UnitDensity$1).toSp_j4kre0_k$ = toSp_1;
  protoOf(UnitDensity$1).toDp_amhzyl_k$ = toDp;
  protoOf(UnitDensity$1).toDp_2eugbd_k$ = toDp_0;
  protoOf(UnitDensity$1).toDp_2y47ho_k$ = toDp_1;
  protoOf(UnitDensity$1).toRect_l767f3_k$ = toRect;
  protoOf(UnitDensity$1).toSize_z60fpn_k$ = toSize_0;
  protoOf(UnitDensity$1).toDpSize_ncjzav_k$ = toDpSize;
  protoOf(PercentCornerSize).get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  protoOf(PercentCornerSize).get_nameFallback_yn6bx2_k$ = get_nameFallback;
  protoOf(DpCornerSize).get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  protoOf(DpCornerSize).get_nameFallback_yn6bx2_k$ = get_nameFallback;
  protoOf(ZeroCornerSize$1).get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  protoOf(ZeroCornerSize$1).get_nameFallback_yn6bx2_k$ = get_nameFallback;
  protoOf(MultiWidgetSelectionDelegate).updateSelection$default_rv37dy_k$ = updateSelection$default;
  //endregion
  //region block: init
  DefaultScrollMotionDurationScaleFactor = 1.0;
  DefaultMinLines = 1;
  DefaultWidthCharCount = 10;
  SNAPSHOTS_INTERVAL_MILLIS = 5000;
  ClicksSlop = 100.0;
  isInTouchMode = false;
  TapIndicationDelay = new Long(0, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Cancel;
  _.$_$.b = Start;
  _.$_$.c = Stop;
  _.$_$.d = Focus;
  _.$_$.e = Unfocus;
  _.$_$.f = Enter;
  _.$_$.g = Exit;
  _.$_$.h = Interaction;
  _.$_$.i = Cancel_0;
  _.$_$.j = Press;
  _.$_$.k = Release;
  _.$_$.l = get_CircleShape;
  _.$_$.m = RoundedCornerShape_2;
  _.$_$.n = RoundedCornerShape_3;
  _.$_$.o = get_LocalTextSelectionColors;
  _.$_$.p = TextSelectionColors;
  _.$_$.q = BasicText$composable;
  _.$_$.r = IndicationInstance;
  _.$_$.s = Indication;
  _.$_$.t = get_LocalIndication;
  _.$_$.u = background;
  _.$_$.v = border;
  _.$_$.w = isSystemInDarkTheme$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-foundation.js.map
