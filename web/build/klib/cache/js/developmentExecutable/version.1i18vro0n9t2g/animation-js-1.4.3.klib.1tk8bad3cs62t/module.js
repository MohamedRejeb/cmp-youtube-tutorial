(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-animation-core.js', './androidx-ui-graphics.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-unit.js', './androidx-ui.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-animation-core.js'), require('./androidx-ui-graphics.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-ui.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-animation'.");
    }
    root['androidx-animation'] = factory(typeof this['androidx-animation'] === 'undefined' ? {} : this['androidx-animation'], this['androidx-animation-core'], this['androidx-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-unit'], this['androidx-ui'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m2;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i2;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c;
  var coerceIn = kotlin_kotlin.$_$.v9;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var protoOf = kotlin_kotlin.$_$.c9;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var Annotation = kotlin_kotlin.$_$.ib;
  var classMeta = kotlin_kotlin.$_$.z7;
  var VOID = kotlin_kotlin.$_$.ed;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var objectMeta = kotlin_kotlin.$_$.b9;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var equals = kotlin_kotlin.$_$.d8;
  var getNumberHashCode = kotlin_kotlin.$_$.h8;
  var hashCode = kotlin_kotlin.$_$.l8;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.y2;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalAnimationApi, 'ExperimentalAnimationApi', classMeta, VOID, [Annotation]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ExitTransition, 'ExitTransition', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(EnterTransition, 'EnterTransition', classMeta);
  setMetadataFor(TransitionData, 'TransitionData', classMeta);
  setMetadataFor(ExitTransitionImpl, 'ExitTransitionImpl', classMeta, ExitTransition);
  setMetadataFor(Fade, 'Fade', classMeta);
  setMetadataFor(Slide, 'Slide', classMeta);
  setMetadataFor(ChangeSize, 'ChangeSize', classMeta);
  setMetadataFor(Scale, 'Scale', classMeta);
  setMetadataFor(EnterTransitionImpl, 'EnterTransitionImpl', classMeta, EnterTransition);
  //endregion
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_M1() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return M1;
  }
  var M1;
  function get_InverseM1() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return InverseM1;
  }
  var InverseM1;
  function multiplyColumn(column, x, y, z, matrix) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return x * matrix[column] + y * matrix[3 + column | 0] + z * matrix[6 + column | 0];
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var colorXyz = Color__convert_impl_so5m8t(color.value_1, ColorSpaces_getInstance().get_CieXyz_38qfst_k$());
    var x = _Color___get_red__impl__cwrsk6(colorXyz);
    var y = _Color___get_green__impl__bta9rs(colorXyz);
    var z = _Color___get_blue__impl__xwez13(colorXyz);
    var tmp$ret$0;
    // Inline function 'kotlin.math.pow' call
    var tmp0_pow = multiplyColumn(0, x, y, z, get_M1());
    var tmp1_pow = 1.0 / 3.0;
    tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
    var l = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.pow' call
    var tmp2_pow = multiplyColumn(1, x, y, z, get_M1());
    var tmp3_pow = 1.0 / 3.0;
    tmp$ret$1 = Math.pow(tmp2_pow, tmp3_pow);
    var a = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.pow' call
    var tmp4_pow = multiplyColumn(2, x, y, z, get_M1());
    var tmp5_pow = 1.0 / 3.0;
    tmp$ret$2 = Math.pow(tmp4_pow, tmp5_pow);
    var b = tmp$ret$2;
    return new AnimationVector4D(_Color___get_alpha__impl__wcfyv1(color.value_1), l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = it.get_v2_kntnnf_k$();
      tmp$ret$0 = Math.pow(tmp0_pow, 3.0);
      var l = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = it.get_v3_kntnne_k$();
      tmp$ret$1 = Math.pow(tmp1_pow, 3.0);
      var a = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = it.get_v4_kntnnd_k$();
      tmp$ret$2 = Math.pow(tmp2_pow, 3.0);
      var b = tmp$ret$2;
      var x = multiplyColumn(0, l, a, b, get_InverseM1());
      var y = multiplyColumn(1, l, a, b, get_InverseM1());
      var z = multiplyColumn(2, l, a, b, get_InverseM1());
      var tmp0_alpha = coerceIn(it.get_v1_kntnng_k$(), 0.0, 1.0);
      var tmp1_red = coerceIn(x, -2.0, 2.0);
      var tmp2_green = coerceIn(y, -2.0, 2.0);
      var tmp3_blue = coerceIn(z, -2.0, 2.0);
      var tmp4_colorSpace = ColorSpaces_getInstance().get_CieXyz_38qfst_k$();
      var colorXyz = Color(tmp1_red, tmp2_green, tmp3_blue, tmp0_alpha, tmp4_colorSpace);
      return new Color_0(Color__convert_impl_so5m8t(colorXyz, $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (properties_initialized_ColorVectorConverter_kt_jaoojo) {
    } else {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
      var tmp$ret$0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0 = new Float32Array([0.80405736, 0.026893456, 0.04586542, 0.3188387, 0.9319606, 0.26299807, -0.11419419, 0.05105356, 0.83999807]);
      M1 = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0_0 = new Float32Array([1.2485008, -0.032856926, -0.057883114, -0.48331892, 1.1044513, -0.3194066, 0.19910365, -0.07159331, 1.202023]);
      InverseM1 = tmp$ret$0_0;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlpha() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function ExperimentalAnimationApi() {
  }
  protoOf(ExperimentalAnimationApi).equals = function (other) {
    if (!(other instanceof ExperimentalAnimationApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalAnimationApi ? other : THROW_CCE();
    return true;
  };
  protoOf(ExperimentalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalAnimationApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalAnimationApi()';
  };
  function Companion() {
    Companion_instance = this;
    this.None_1 = new ExitTransitionImpl(new TransitionData());
  }
  protoOf(Companion).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop() {
    return 0;
  }
  function ExitTransition() {
    Companion_getInstance_2();
    this.$stable_1 = 0;
  }
  protoOf(ExitTransition).plus_3d7su1_k$ = function (exit) {
    var tmp0_elvis_lhs = this.get_data_wokkxf_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? exit.get_data_wokkxf_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.get_data_wokkxf_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? exit.get_data_wokkxf_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.get_data_wokkxf_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? exit.get_data_wokkxf_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.get_data_wokkxf_k$().scale_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? exit.get_data_wokkxf_k$().scale_1 : tmp3_elvis_lhs));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.get_data_wokkxf_k$().equals(this.get_data_wokkxf_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_2().None_1)) {
      tmp = 'ExitTransition.None';
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      var tmp0_run = this.get_data_wokkxf_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.ExitTransition.toString.<anonymous>' call
      var tmp3_safe_receiver = tmp0_run.fade_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = tmp0_run.slide_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = tmp0_run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = tmp0_run.scale_1;
      tmp$ret$0 = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.get_data_wokkxf_k$().hashCode();
  };
  function shrinkHorizontally(animationSpec, shrinkTowards, clip, targetWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().get_End_18ju7i_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetWidth === VOID) {
      tmp = shrinkHorizontally$lambda;
    } else {
      tmp = targetWidth;
    }
    targetWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkHorizontally$lambda_0(targetWidth));
  }
  function fadeOut(animationSpec, targetAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$()) : animationSpec;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.None_1 = new EnterTransitionImpl(new TransitionData());
  }
  protoOf(Companion_0).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function EnterTransition() {
    Companion_getInstance_3();
    this.$stable_1 = 0;
  }
  protoOf(EnterTransition).plus_9f8al5_k$ = function (enter) {
    var tmp0_elvis_lhs = this.get_data_wokkxf_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? enter.get_data_wokkxf_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.get_data_wokkxf_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? enter.get_data_wokkxf_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.get_data_wokkxf_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? enter.get_data_wokkxf_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.get_data_wokkxf_k$().scale_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? enter.get_data_wokkxf_k$().scale_1 : tmp3_elvis_lhs));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_3().None_1)) {
      tmp = 'EnterTransition.None';
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      var tmp0_run = this.get_data_wokkxf_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.EnterTransition.toString.<anonymous>' call
      var tmp3_safe_receiver = tmp0_run.fade_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = tmp0_run.slide_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = tmp0_run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = tmp0_run.scale_1;
      tmp$ret$0 = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.get_data_wokkxf_k$().equals(this.get_data_wokkxf_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.get_data_wokkxf_k$().hashCode();
  };
  function expandHorizontally(animationSpec, expandFrom, clip, initialWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().get_End_18ju7i_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialWidth === VOID) {
      tmp = expandHorizontally$lambda;
    } else {
      tmp = initialWidth;
    }
    initialWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandHorizontally$lambda_0(initialWidth));
  }
  function fadeIn(animationSpec, initialAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$()) : animationSpec;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function TransitionData(fade, slide, changeSize, scale) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    this.fade_1 = fade;
    this.slide_1 = slide;
    this.changeSize_1 = changeSize;
    this.scale_1 = scale;
  }
  protoOf(TransitionData).get_fade_woluit_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).get_slide_iykyvc_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).get_changeSize_fljy3e_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).component1_7eebsc_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).component2_7eebsb_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).component3_7eebsa_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).component4_7eebs9_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).copy_zgcw61_k$ = function (fade, slide, changeSize, scale) {
    return new TransitionData(fade, slide, changeSize, scale);
  };
  protoOf(TransitionData).copy$default_rtbj4u_k$ = function (fade, slide, changeSize, scale, $super) {
    fade = fade === VOID ? this.fade_1 : fade;
    slide = slide === VOID ? this.slide_1 : slide;
    changeSize = changeSize === VOID ? this.changeSize_1 : changeSize;
    scale = scale === VOID ? this.scale_1 : scale;
    return $super === VOID ? this.copy_zgcw61_k$(fade, slide, changeSize, scale) : $super.copy_zgcw61_k$.call(this, fade, slide, changeSize, scale);
  };
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + this.fade_1 + ', slide=' + this.slide_1 + ', changeSize=' + this.changeSize_1 + ', scale=' + this.scale_1 + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.fade_1 == null ? 0 : this.fade_1.hashCode();
    result = imul(result, 31) + (this.slide_1 == null ? 0 : this.slide_1.hashCode()) | 0;
    result = imul(result, 31) + (this.changeSize_1 == null ? 0 : this.changeSize_1.hashCode()) | 0;
    result = imul(result, 31) + (this.scale_1 == null ? 0 : this.scale_1.hashCode()) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.fade_1, tmp0_other_with_cast.fade_1))
      return false;
    if (!equals(this.slide_1, tmp0_other_with_cast.slide_1))
      return false;
    if (!equals(this.changeSize_1, tmp0_other_with_cast.changeSize_1))
      return false;
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    return true;
  };
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.data_1 = data;
  }
  protoOf(ExitTransitionImpl).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function Fade(alpha, animationSpec) {
    this.alpha_1 = alpha;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Fade).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).component1_7eebsc_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).copy_sae5ax_k$ = function (alpha, animationSpec) {
    return new Fade(alpha, animationSpec);
  };
  protoOf(Fade).copy$default_y9588r_k$ = function (alpha, animationSpec, $super) {
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_sae5ax_k$(alpha, animationSpec) : $super.copy_sae5ax_k$.call(this, alpha, animationSpec);
  };
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.alpha_1 + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.alpha_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function Slide(slideOffset, animationSpec) {
    this.slideOffset_1 = slideOffset;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Slide).get_slideOffset_3j6nyd_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).component1_7eebsc_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).copy_gp3dbw_k$ = function (slideOffset, animationSpec) {
    return new Slide(slideOffset, animationSpec);
  };
  protoOf(Slide).copy$default_40mtxb_k$ = function (slideOffset, animationSpec, $super) {
    slideOffset = slideOffset === VOID ? this.slideOffset_1 : slideOffset;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_gp3dbw_k$(slideOffset, animationSpec) : $super.copy_gp3dbw_k$.call(this, slideOffset, animationSpec);
  };
  protoOf(Slide).toString = function () {
    return 'Slide(slideOffset=' + this.slideOffset_1 + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Slide).hashCode = function () {
    var result = hashCode(this.slideOffset_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Slide).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Slide))
      return false;
    var tmp0_other_with_cast = other instanceof Slide ? other : THROW_CCE();
    if (!equals(this.slideOffset_1, tmp0_other_with_cast.slideOffset_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    return new IntSize(IntSize_0(0, 0));
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.alignment_1 = alignment;
    this.size_1 = size;
    this.animationSpec_1 = animationSpec;
    this.clip_1 = clip;
  }
  protoOf(ChangeSize).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).component1_7eebsc_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).component4_7eebs9_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).copy_c1dznr_k$ = function (alignment, size, animationSpec, clip) {
    return new ChangeSize(alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).copy$default_gegaug_k$ = function (alignment, size, animationSpec, clip, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    size = size === VOID ? this.size_1 : size;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    clip = clip === VOID ? this.clip_1 : clip;
    return $super === VOID ? this.copy_c1dznr_k$(alignment, size, animationSpec, clip) : $super.copy_c1dznr_k$.call(this, alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + this.alignment_1 + ', size=' + this.size_1 + ', animationSpec=' + this.animationSpec_1 + ', clip=' + this.clip_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + hashCode(this.size_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    result = imul(result, 31) + (this.clip_1 | 0) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    var tmp0_other_with_cast = other instanceof ChangeSize ? other : THROW_CCE();
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    if (!(this.clip_1 === tmp0_other_with_cast.clip_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.scale_1 = scale;
    this.transformOrigin_1 = transformOrigin;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Scale).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).get_transformOrigin_q3dmip_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).component1_7eebsc_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).component2_dvu46t_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).copy_x7tq9e_k$ = function (scale, transformOrigin, animationSpec) {
    return new Scale(scale, transformOrigin, animationSpec);
  };
  protoOf(Scale).copy$default_unhhwl_k$ = function (scale, transformOrigin, animationSpec, $super) {
    scale = scale === VOID ? this.scale_1 : scale;
    transformOrigin = transformOrigin === VOID ? this.transformOrigin_1 : transformOrigin;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_x7tq9e_k$(scale, transformOrigin, animationSpec) : $super.copy_x7tq9e_k$.call(this, scale, new TransformOrigin(transformOrigin), animationSpec);
  };
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.scale_1 + ', transformOrigin=' + new TransformOrigin(this.transformOrigin_1) + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.scale_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.transformOrigin_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    if (!equals(this.transformOrigin_1, tmp0_other_with_cast.transformOrigin_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().get_BottomEnd_ayz0tj_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetSize === VOID) {
      tmp = shrinkOut$lambda;
    } else {
      tmp = targetSize;
    }
    targetSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp0_subject = _this__u8e3s4;
    return equals(tmp0_subject, Companion_getInstance_0().get_Start_ih4i6x_k$()) ? Companion_getInstance_0().get_CenterStart_2305fg_k$() : equals(tmp0_subject, Companion_getInstance_0().get_End_18ju7i_k$()) ? Companion_getInstance_0().get_CenterEnd_uti4xp_k$() : Companion_getInstance_0().get_Center_3arb0i_k$();
  }
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.data_1 = data;
  }
  protoOf(EnterTransitionImpl).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().get_BottomEnd_ayz0tj_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialSize === VOID) {
      tmp = expandIn$lambda;
    } else {
      tmp = initialSize;
    }
    initialSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.packedValue_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.packedValue_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin(TransformOrigin_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function shrinkHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkHorizontally$lambda_0($targetWidth) {
    return function (it) {
      return new IntSize(IntSize_0($targetWidth(_IntSize___get_width__impl__d9yl4o(it.packedValue_1)), _IntSize___get_height__impl__prv63b(it.packedValue_1)));
    };
  }
  function expandHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandHorizontally$lambda_0($initialWidth) {
    return function (it) {
      return new IntSize(IntSize_0($initialWidth(_IntSize___get_width__impl__d9yl4o(it.packedValue_1)), _IntSize___get_height__impl__prv63b(it.packedValue_1)));
    };
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (properties_initialized_EnterExitTransition_kt_te1nvp) {
    } else {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlpha = mutableStateOf(1.0);
      DefaultAlphaAndScaleSpring = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$());
      DefaultOffsetAnimationSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold_0(Companion_getInstance_1())));
      DefaultSizeAnimationSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance())));
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (properties_initialized_FlingCalculator_kt_aw7aky) {
    } else {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      var tmp$ret$0;
      // Inline function 'kotlin.math.ln' call
      tmp$ret$0 = Math.log(0.78);
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.ln' call
      tmp$ret$1 = Math.log(0.9);
      DecelerationRate = tmp / tmp$ret$1;
    }
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (properties_initialized_SingleValueAnimation_kt_kqgwkj) {
    } else {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  //region block: init
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = expandHorizontally;
  _.$_$.b = fadeIn;
  _.$_$.c = fadeOut;
  _.$_$.d = shrinkHorizontally;
  //endregion
  return _;
}));
