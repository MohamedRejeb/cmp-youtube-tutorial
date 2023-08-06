(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-geometry.js', './androidx-ui-unit.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui-unit.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-graphics'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-ui-graphics'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-ui-graphics'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-ui-graphics'.");
    }
    root['androidx-ui-graphics'] = factory(typeof this['androidx-ui-graphics'] === 'undefined' ? {} : this['androidx-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-geometry'], this['androidx-ui-unit'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var protoOf = kotlin_kotlin.$_$.c9;
  var objectMeta = kotlin_kotlin.$_$.b9;
  var VOID = kotlin_kotlin.$_$.ed;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var classMeta = kotlin_kotlin.$_$.z7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.k2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var equals = kotlin_kotlin.$_$.d8;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var isFinite = kotlin_kotlin.$_$.kc;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var hashCode = kotlin_kotlin.$_$.l8;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var get_isFinite = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var getNumberHashCode = kotlin_kotlin.$_$.h8;
  var get_isSpecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var interfaceMeta = kotlin_kotlin.$_$.n8;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f2;
  var Long = kotlin_kotlin.$_$.sb;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e2;
  var ulongToDouble = kotlin_kotlin.$_$.dd;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.g2;
  var numberToInt = kotlin_kotlin.$_$.y8;
  var toLong = kotlin_kotlin.$_$.f9;
  var fill = kotlin_kotlin.$_$.p4;
  var arrayCopy = kotlin_kotlin.$_$.o3;
  var get_PI = kotlin_kotlin.$_$.i9;
  var toRawBits = kotlin_kotlin.$_$.zc;
  var toShort = kotlin_kotlin.$_$.g9;
  var toByte = kotlin_kotlin.$_$.e9;
  var numberToLong = kotlin_kotlin.$_$.z8;
  var floatFromBits = kotlin_kotlin.$_$.f8;
  var compareTo = kotlin_kotlin.$_$.a8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w1;
  var toString_0 = kotlin_kotlin.$_$.db;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.v;
  var Comparable = kotlin_kotlin.$_$.mb;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var trimIndent = kotlin_kotlin.$_$.fb;
  var get_boundingRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qc;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var charSequenceLength = kotlin_kotlin.$_$.x7;
  var toBits = kotlin_kotlin.$_$.xc;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getStringHashCode = kotlin_kotlin.$_$.k8;
  var withSign = kotlin_kotlin.$_$.p9;
  var coerceIn = kotlin_kotlin.$_$.v9;
  var coerceIn_0 = kotlin_kotlin.$_$.u9;
  var contentEquals = kotlin_kotlin.$_$.b4;
  var contentHashCode = kotlin_kotlin.$_$.e4;
  var isNaN_0 = kotlin_kotlin.$_$.nc;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
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
  var toRect_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var toDpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var CornerRadius_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Annotation = kotlin_kotlin.$_$.ib;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var toTypedArray = kotlin_kotlin.$_$.o6;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.x8;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.d8;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.c8;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.x7;
  var until = kotlin_kotlin.$_$.aa;
  var step = kotlin_kotlin.$_$.z9;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.y8;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.u8;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.t8;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.j7;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.l7;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d3;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b3;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a3;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z2;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.m7;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.z7;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.a8;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.u1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.b8;
  var Style_TRANSLATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var Style_ROTATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var Style_MORPH_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.y7;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.q7;
  var ColorMatrix = kotlin_org_jetbrains_skiko_skiko.$_$.s8;
  var abs = kotlin_kotlin.$_$.j9;
  var ColorType_BGRA_8888_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var ColorAlphaType_UNPREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.r7;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.r8;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.w8;
  var ensureNotNull = kotlin_kotlin.$_$.ic;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.s7;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.i7;
  var Companion_getInstance_13 = kotlin_org_jetbrains_skiko_skiko.$_$.e8;
  var toFloatArray = kotlin_kotlin.$_$.e6;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.v8;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var VertexMode_TRIANGLES_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e3;
  var VertexMode_TRIANGLE_FAN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f3;
  var VertexMode_TRIANGLE_STRIP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BlendMode, 'BlendMode', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Brush, 'Brush', classMeta);
  setMetadataFor(ShaderBrush, 'ShaderBrush', classMeta, Brush);
  setMetadataFor(SolidColor, 'SolidColor', classMeta, Brush);
  setMetadataFor(LinearGradient, 'LinearGradient', classMeta, ShaderBrush);
  setMetadataFor(RadialGradient, 'RadialGradient', classMeta, ShaderBrush);
  setMetadataFor(SweepGradient, 'SweepGradient', classMeta, ShaderBrush);
  function scale$default(sx, sy, $super) {
    sy = sy === VOID ? sx : sy;
    var tmp;
    if ($super === VOID) {
      this.scale_sphyvb_k$(sx, sy);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.scale_sphyvb_k$.call(this, sx, sy);
    }
    return tmp;
  }
  function skewRad(sxRad, syRad) {
    this.skew_hcshkp_k$(degrees(sxRad), degrees(syRad));
  }
  function clipRect(rect, clipOp) {
    return this.clipRect_si0ig1_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_16().get_Intersect_ow3v69_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipRect_5p7fgn_k$(rect, clipOp);
      tmp = Unit_getInstance();
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function clipRect$default_0(left, top, right, bottom, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_16().get_Intersect_ow3v69_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipRect_si0ig1_k$.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_16().get_Intersect_ow3v69_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipPath_kn87dc_k$(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipPath_kn87dc_k$.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.drawRect_iwqaze_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), paint);
  }
  function drawOval(rect, paint) {
    return this.drawOval_wmf8q4_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), paint);
  }
  function drawArc(rect, startAngle, sweepAngle, useCenter, paint) {
    return this.drawArc_xj6sd2_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), startAngle, sweepAngle, useCenter, paint);
  }
  function drawArcRad(rect, startAngleRad, sweepAngleRad, useCenter, paint) {
    this.drawArc_wasmwu_k$(rect, degrees(startAngleRad), degrees(sweepAngleRad), useCenter, paint);
  }
  function drawImageRect$default(image, srcOffset, srcSize, dstOffset, dstSize, paint, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().get_Zero_c6qc7y_k$() : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().get_Zero_c6qc7y_k$() : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    var tmp;
    if ($super === VOID) {
      this.drawImageRect_pn8joi_k$(image, srcOffset, srcSize, dstOffset, dstSize, paint);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawImageRect_pn8joi_k$.call(this, image, new IntOffset(srcOffset), new IntSize_0(srcSize), new IntOffset(dstOffset), new IntSize_0(dstSize), paint);
    }
    return tmp;
  }
  setMetadataFor(Canvas, 'Canvas', interfaceMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ClipOp, 'ClipOp', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Color, 'Color', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(ColorFilter, 'ColorFilter', classMeta);
  setMetadataFor(ColorMatrix_0, 'ColorMatrix', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FilterQuality, 'FilterQuality', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Float16, 'Float16', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  function readPixels$default(buffer, startX, startY, width, height, bufferOffset, stride, $super) {
    startX = startX === VOID ? 0 : startX;
    startY = startY === VOID ? 0 : startY;
    width = width === VOID ? this.get_width_j0q4yl_k$() : width;
    height = height === VOID ? this.get_height_e7t92o_k$() : height;
    bufferOffset = bufferOffset === VOID ? 0 : bufferOffset;
    stride = stride === VOID ? width : stride;
    var tmp;
    if ($super === VOID) {
      this.readPixels_foa4om_k$(buffer, startX, startY, width, height, bufferOffset, stride);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.readPixels_foa4om_k$.call(this, buffer, startX, startY, width, height, bufferOffset, stride);
    }
    return tmp;
  }
  setMetadataFor(ImageBitmap, 'ImageBitmap', interfaceMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(ImageBitmapConfig, 'ImageBitmapConfig', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Matrix, 'Matrix', classMeta);
  setMetadataFor(Outline, 'Outline', classMeta);
  setMetadataFor(Rectangle, 'Rectangle', classMeta, Outline);
  setMetadataFor(Rounded, 'Rounded', classMeta, Outline);
  setMetadataFor(Generic, 'Generic', classMeta, Outline);
  setMetadataFor(Paint, 'Paint', interfaceMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PaintingStyle, 'PaintingStyle', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  function arcToRad(rect, startAngleRadians, sweepAngleRadians, forceMoveTo) {
    this.arcTo_948klo_k$(rect, degrees(startAngleRadians), degrees(sweepAngleRadians), forceMoveTo);
  }
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : offset;
    var tmp;
    if ($super === VOID) {
      this.addPath_9947vg_k$(path, offset);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addPath_9947vg_k$.call(this, path, new Offset(offset));
    }
    return tmp;
  }
  setMetadataFor(Path, 'Path', interfaceMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(PathEffect, 'PathEffect', interfaceMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(StampedPathEffectStyle, 'StampedPathEffectStyle', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(PathFillType, 'PathFillType', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(PathOperation, 'PathOperation', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(PointMode, 'PointMode', classMeta);
  setMetadataFor(Shape, 'Shape', interfaceMeta);
  setMetadataFor(RectangleShape$1, VOID, classMeta, VOID, [Shape]);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(StrokeCap, 'StrokeCap', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(StrokeJoin, 'StrokeJoin', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(TileMode, 'TileMode', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(VertexMode, 'VertexMode', classMeta);
  setMetadataFor(Vertices, 'Vertices', classMeta);
  setMetadataFor(Adaptation, 'Adaptation', classMeta);
  setMetadataFor(Adaptation$Companion$Bradford$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$VonKries$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$Ciecat02$1, VOID, classMeta, Adaptation);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(ColorModel, 'ColorModel', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta);
  setMetadataFor(DoubleFunction, 'DoubleFunction', interfaceMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(ColorSpaces, 'ColorSpaces', objectMeta);
  setMetadataFor(Connector, 'Connector', classMeta);
  setMetadataFor(Connector$Companion$identity$1, VOID, classMeta, Connector);
  setMetadataFor(RgbConnector, 'RgbConnector', classMeta, Connector);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(Illuminant, 'Illuminant', objectMeta);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(Lab, 'Lab', classMeta, ColorSpace);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(Oklab, 'Oklab', classMeta, ColorSpace);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(RenderIntent, 'RenderIntent', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(Rgb, 'Rgb', classMeta, ColorSpace);
  setMetadataFor(TransferParameters, 'TransferParameters', classMeta);
  setMetadataFor(WhitePoint, 'WhitePoint', classMeta);
  setMetadataFor(Xyz, 'Xyz', classMeta, ColorSpace);
  setMetadataFor(DrawParams, 'DrawParams', classMeta);
  setMetadataFor(DrawContext, 'DrawContext', interfaceMeta);
  setMetadataFor(CanvasDrawScope$drawContext$1, VOID, classMeta, VOID, [DrawContext]);
  function get_center_0() {
    return get_center(this.get_drawContext_ffwztu_k$().get_size_x9ctfw_k$());
  }
  function get_size() {
    return this.get_drawContext_ffwztu_k$().get_size_x9ctfw_k$();
  }
  function drawLine$default(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    var tmp;
    if (strokeWidth === VOID) {
      Companion_getInstance_45();
      tmp = 0.0;
    } else {
      tmp = strokeWidth;
    }
    strokeWidth = tmp;
    cap = cap === VOID ? Companion_getInstance_45().DefaultCap_1 : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.drawLine_94tzv7_k$(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.drawLine_94tzv7_k$.call(this, brush, new Offset(start), new Offset(end), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  function drawLine$default_0(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    var tmp;
    if (strokeWidth === VOID) {
      Companion_getInstance_45();
      tmp = 0.0;
    } else {
      tmp = strokeWidth;
    }
    strokeWidth = tmp;
    cap = cap === VOID ? Companion_getInstance_45().DefaultCap_1 : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.drawLine_qcvbii_k$(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.drawLine_qcvbii_k$.call(this, new Color(color), new Offset(start), new Offset(end), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_x9ctfw_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRect_4jm64w_k$(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRect_4jm64w_k$.call(this, brush, new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_x9ctfw_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRect_srg7q1_k$(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRect_srg7q1_k$.call(this, new Color(color), new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage$default(image, topLeft, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : topLeft;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawImage_bk8e6s_k$(image, topLeft, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawImage_bk8e6s_k$.call(this, image, new Offset(topLeft), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage$default_0(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().get_Zero_c6qc7y_k$() : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().get_Zero_c6qc7y_k$() : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawImage_td6jz_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawImage_td6jz_k$.call(this, image, new IntOffset(srcOffset), new IntSize_0(srcSize), new IntOffset(dstOffset), new IntSize_0(dstSize), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.drawImage$default_q3yuzr_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default_1(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().get_Zero_c6qc7y_k$() : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().get_Zero_c6qc7y_k$() : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_44().DefaultFilterQuality_1 : filterQuality;
    var tmp;
    if ($super === VOID) {
      this.drawImage_riofdh_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_x9ctfw_k$(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().get_Zero_5wbciv_k$() : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRoundRect_nkvmol_k$(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRoundRect_nkvmol_k$.call(this, brush, new Offset(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRoundRect$default_0(color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_x9ctfw_k$(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().get_Zero_5wbciv_k$() : cornerRadius;
    style = style === VOID ? Fill_getInstance() : style;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRoundRect_q7amlu_k$(color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRoundRect_q7amlu_k$.call(this, new Color(color), new Offset(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), style, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(brush, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.get_size_x9ctfw_k$()) / 2.0 : radius;
    center = center === VOID ? this.get_center_568eeq_k$() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawCircle_sp46sp_k$(brush, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawCircle_sp46sp_k$.call(this, brush, radius, new Offset(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default_0(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.get_size_x9ctfw_k$()) / 2.0 : radius;
    center = center === VOID ? this.get_center_568eeq_k$() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawCircle_n7txn6_k$(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawCircle_n7txn6_k$.call(this, new Color(color), radius, new Offset(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawOval$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_x9ctfw_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawOval_poyb4u_k$(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawOval_poyb4u_k$.call(this, brush, new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawOval$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_x9ctfw_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawOval_1h49jp_k$(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawOval_1h49jp_k$.call(this, new Color(color), new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawArc$default(brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_x9ctfw_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawArc_vjjneq_k$(brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawArc_vjjneq_k$.call(this, brush, startAngle, sweepAngle, useCenter, new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawArc$default_0(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_x9ctfw_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawArc_y7e861_k$(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawArc_y7e861_k$.call(this, new Color(color), startAngle, sweepAngle, useCenter, new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawPath_vpl0ok_k$(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawPath_vpl0ok_k$.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawPath_vsb9f_k$(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawPath_vsb9f_k$.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPoints$default(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    var tmp;
    if (strokeWidth === VOID) {
      Companion_getInstance_45();
      tmp = 0.0;
    } else {
      tmp = strokeWidth;
    }
    strokeWidth = tmp;
    cap = cap === VOID ? Companion_getInstance_32().get_Butt_vf89me_k$() : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.drawPoints_tvcs0g_k$(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.drawPoints_tvcs0g_k$.call(this, points, new PointMode(pointMode), new Color(color), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  function drawPoints$default_0(points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    var tmp;
    if (strokeWidth === VOID) {
      Companion_getInstance_45();
      tmp = 0.0;
    } else {
      tmp = strokeWidth;
    }
    strokeWidth = tmp;
    cap = cap === VOID ? Companion_getInstance_32().get_Butt_vf89me_k$() : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().DefaultBlendMode_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.drawPoints_yexgjr_k$(points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.drawPoints_yexgjr_k$.call(this, points, new PointMode(pointMode), brush, strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  setMetadataFor(DrawScope, 'DrawScope', interfaceMeta, VOID, [Density_0]);
  setMetadataFor(CanvasDrawScope, 'CanvasDrawScope', classMeta, VOID, [DrawScope]);
  function get_center_1() {
    return Offset_0(_Size___get_width__impl__58y75t(this.get_size_x9ctfw_k$()) / 2, _Size___get_height__impl__a04p02(this.get_size_x9ctfw_k$()) / 2);
  }
  function clipRect$default_1(left, top, right, bottom, clipOp, $super) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    right = right === VOID ? _Size___get_width__impl__58y75t(this.get_size_x9ctfw_k$()) : right;
    bottom = bottom === VOID ? _Size___get_height__impl__a04p02(this.get_size_x9ctfw_k$()) : bottom;
    clipOp = clipOp === VOID ? Companion_getInstance_16().get_Intersect_ow3v69_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipRect_si0ig1_k$.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp;
  }
  function clipPath$default_0(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_16().get_Intersect_ow3v69_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipPath_kn87dc_k$(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipPath_kn87dc_k$.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function translate$default(left, top, $super) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    var tmp;
    if ($super === VOID) {
      this.translate_62wf99_k$(left, top);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.translate_62wf99_k$.call(this, left, top);
    }
    return tmp;
  }
  function rotate$default(degrees, pivot, $super) {
    pivot = pivot === VOID ? this.get_center_568eeq_k$() : pivot;
    var tmp;
    if ($super === VOID) {
      this.rotate_qski4n_k$(degrees, pivot);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.rotate_qski4n_k$.call(this, degrees, new Offset(pivot));
    }
    return tmp;
  }
  function scale$default_0(scaleX, scaleY, pivot, $super) {
    pivot = pivot === VOID ? this.get_center_568eeq_k$() : pivot;
    var tmp;
    if ($super === VOID) {
      this.scale_qp5ya8_k$(scaleX, scaleY, pivot);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.scale_qp5ya8_k$.call(this, scaleX, scaleY, new Offset(pivot));
    }
    return tmp;
  }
  setMetadataFor(DrawTransform, 'DrawTransform', interfaceMeta);
  setMetadataFor(asDrawTransform$1, VOID, classMeta, VOID, [DrawTransform]);
  setMetadataFor(ContentDrawScope, 'ContentDrawScope', interfaceMeta, VOID, [DrawScope]);
  setMetadataFor(DrawStyle, 'DrawStyle', classMeta);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(Fill, 'Fill', objectMeta, DrawStyle);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(Stroke, 'Stroke', classMeta, DrawStyle);
  setMetadataFor(DrawScopeMarker, 'DrawScopeMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(EmptyCanvas, 'EmptyCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(PathNode, 'PathNode', classMeta);
  setMetadataFor(Close, 'Close', objectMeta, PathNode);
  setMetadataFor(RelativeMoveTo, 'RelativeMoveTo', classMeta, PathNode);
  setMetadataFor(MoveTo, 'MoveTo', classMeta, PathNode);
  setMetadataFor(RelativeLineTo, 'RelativeLineTo', classMeta, PathNode);
  setMetadataFor(LineTo, 'LineTo', classMeta, PathNode);
  setMetadataFor(RelativeHorizontalTo, 'RelativeHorizontalTo', classMeta, PathNode);
  setMetadataFor(HorizontalTo, 'HorizontalTo', classMeta, PathNode);
  setMetadataFor(RelativeVerticalTo, 'RelativeVerticalTo', classMeta, PathNode);
  setMetadataFor(VerticalTo, 'VerticalTo', classMeta, PathNode);
  setMetadataFor(RelativeCurveTo, 'RelativeCurveTo', classMeta, PathNode);
  setMetadataFor(CurveTo, 'CurveTo', classMeta, PathNode);
  setMetadataFor(RelativeReflectiveCurveTo, 'RelativeReflectiveCurveTo', classMeta, PathNode);
  setMetadataFor(ReflectiveCurveTo, 'ReflectiveCurveTo', classMeta, PathNode);
  setMetadataFor(RelativeQuadTo, 'RelativeQuadTo', classMeta, PathNode);
  setMetadataFor(QuadTo, 'QuadTo', classMeta, PathNode);
  setMetadataFor(RelativeReflectiveQuadTo, 'RelativeReflectiveQuadTo', classMeta, PathNode);
  setMetadataFor(ReflectiveQuadTo, 'ReflectiveQuadTo', classMeta, PathNode);
  setMetadataFor(RelativeArcTo, 'RelativeArcTo', classMeta, PathNode);
  setMetadataFor(ArcTo, 'ArcTo', classMeta, PathNode);
  setMetadataFor(NoOp, 'NoOp', classMeta, VOID, [Annotation]);
  setMetadataFor(SkiaBackedCanvas, 'SkiaBackedCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(SkiaBackedPaint, 'SkiaBackedPaint', classMeta, VOID, [Paint]);
  setMetadataFor(SkiaBackedPath, 'SkiaBackedPath', classMeta, VOID, [Path]);
  setMetadataFor(SkiaBackedPathEffect, 'SkiaBackedPathEffect', classMeta, VOID, [PathEffect]);
  setMetadataFor(RenderEffect, 'RenderEffect', classMeta);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(BlurEffect, 'BlurEffect', classMeta, RenderEffect);
  setMetadataFor(OffsetEffect, 'OffsetEffect', classMeta, RenderEffect);
  setMetadataFor(SkiaBackedRenderEffect, 'SkiaBackedRenderEffect', classMeta, RenderEffect);
  setMetadataFor(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap', classMeta, VOID, [ImageBitmap]);
  //endregion
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.Clear_1 = _BlendMode___init__impl__q6jalh(0);
    this.Src_1 = _BlendMode___init__impl__q6jalh(1);
    this.Dst_1 = _BlendMode___init__impl__q6jalh(2);
    this.SrcOver_1 = _BlendMode___init__impl__q6jalh(3);
    this.DstOver_1 = _BlendMode___init__impl__q6jalh(4);
    this.SrcIn_1 = _BlendMode___init__impl__q6jalh(5);
    this.DstIn_1 = _BlendMode___init__impl__q6jalh(6);
    this.SrcOut_1 = _BlendMode___init__impl__q6jalh(7);
    this.DstOut_1 = _BlendMode___init__impl__q6jalh(8);
    this.SrcAtop_1 = _BlendMode___init__impl__q6jalh(9);
    this.DstAtop_1 = _BlendMode___init__impl__q6jalh(10);
    this.Xor_1 = _BlendMode___init__impl__q6jalh(11);
    this.Plus_1 = _BlendMode___init__impl__q6jalh(12);
    this.Modulate_1 = _BlendMode___init__impl__q6jalh(13);
    this.Screen_1 = _BlendMode___init__impl__q6jalh(14);
    this.Overlay_1 = _BlendMode___init__impl__q6jalh(15);
    this.Darken_1 = _BlendMode___init__impl__q6jalh(16);
    this.Lighten_1 = _BlendMode___init__impl__q6jalh(17);
    this.ColorDodge_1 = _BlendMode___init__impl__q6jalh(18);
    this.ColorBurn_1 = _BlendMode___init__impl__q6jalh(19);
    this.Hardlight_1 = _BlendMode___init__impl__q6jalh(20);
    this.Softlight_1 = _BlendMode___init__impl__q6jalh(21);
    this.Difference_1 = _BlendMode___init__impl__q6jalh(22);
    this.Exclusion_1 = _BlendMode___init__impl__q6jalh(23);
    this.Multiply_1 = _BlendMode___init__impl__q6jalh(24);
    this.Hue_1 = _BlendMode___init__impl__q6jalh(25);
    this.Saturation_1 = _BlendMode___init__impl__q6jalh(26);
    this.Color_1 = _BlendMode___init__impl__q6jalh(27);
    this.Luminosity_1 = _BlendMode___init__impl__q6jalh(28);
  }
  protoOf(Companion).get_Clear_9hhqh4_k$ = function () {
    return this.Clear_1;
  };
  protoOf(Companion).get_Src_o7e167_k$ = function () {
    return this.Src_1;
  };
  protoOf(Companion).get_Dst_o5v574_k$ = function () {
    return this.Dst_1;
  };
  protoOf(Companion).get_SrcOver_uyf80z_k$ = function () {
    return this.SrcOver_1;
  };
  protoOf(Companion).get_DstOver_h25nrw_k$ = function () {
    return this.DstOver_1;
  };
  protoOf(Companion).get_SrcIn_yyf2fo_k$ = function () {
    return this.SrcIn_1;
  };
  protoOf(Companion).get_DstIn_7c3x3p_k$ = function () {
    return this.DstIn_1;
  };
  protoOf(Companion).get_SrcOut_78cqo7_k$ = function () {
    return this.SrcOut_1;
  };
  protoOf(Companion).get_DstOut_3e3t2e_k$ = function () {
    return this.DstOut_1;
  };
  protoOf(Companion).get_SrcAtop_erwkkd_k$ = function () {
    return this.SrcAtop_1;
  };
  protoOf(Companion).get_DstAtop_88mllw_k$ = function () {
    return this.DstAtop_1;
  };
  protoOf(Companion).get_Xor_7r0wg6_k$ = function () {
    return this.Xor_1;
  };
  protoOf(Companion).get_Plus_sl45pl_k$ = function () {
    return this.Plus_1;
  };
  protoOf(Companion).get_Modulate_xd1sfq_k$ = function () {
    return this.Modulate_1;
  };
  protoOf(Companion).get_Screen_76rbx3_k$ = function () {
    return this.Screen_1;
  };
  protoOf(Companion).get_Overlay_2mxasb_k$ = function () {
    return this.Overlay_1;
  };
  protoOf(Companion).get_Darken_1ojojo_k$ = function () {
    return this.Darken_1;
  };
  protoOf(Companion).get_Lighten_afcpbe_k$ = function () {
    return this.Lighten_1;
  };
  protoOf(Companion).get_ColorDodge_gwt0pb_k$ = function () {
    return this.ColorDodge_1;
  };
  protoOf(Companion).get_ColorBurn_55chr1_k$ = function () {
    return this.ColorBurn_1;
  };
  protoOf(Companion).get_Hardlight_ie4bsm_k$ = function () {
    return this.Hardlight_1;
  };
  protoOf(Companion).get_Softlight_3emetl_k$ = function () {
    return this.Softlight_1;
  };
  protoOf(Companion).get_Difference_k61r8m_k$ = function () {
    return this.Difference_1;
  };
  protoOf(Companion).get_Exclusion_cabql5_k$ = function () {
    return this.Exclusion_1;
  };
  protoOf(Companion).get_Multiply_bawk0x_k$ = function () {
    return this.Multiply_1;
  };
  protoOf(Companion).get_Hue_1rhqm5_k$ = function () {
    return this.Hue_1;
  };
  protoOf(Companion).get_Saturation_y5o6lt_k$ = function () {
    return this.Saturation_1;
  };
  protoOf(Companion).get_Color_2ootbm_k$ = function () {
    return this.Color_1;
  };
  protoOf(Companion).get_Luminosity_99tf6q_k$ = function () {
    return this.Luminosity_1;
  };
  var Companion_instance;
  function Companion_getInstance_14() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_14().Clear_1 ? 'Clear' : tmp0_subject === Companion_getInstance_14().Src_1 ? 'Src' : tmp0_subject === Companion_getInstance_14().Dst_1 ? 'Dst' : tmp0_subject === Companion_getInstance_14().SrcOver_1 ? 'SrcOver' : tmp0_subject === Companion_getInstance_14().DstOver_1 ? 'DstOver' : tmp0_subject === Companion_getInstance_14().SrcIn_1 ? 'SrcIn' : tmp0_subject === Companion_getInstance_14().DstIn_1 ? 'DstIn' : tmp0_subject === Companion_getInstance_14().SrcOut_1 ? 'SrcOut' : tmp0_subject === Companion_getInstance_14().DstOut_1 ? 'DstOut' : tmp0_subject === Companion_getInstance_14().SrcAtop_1 ? 'SrcAtop' : tmp0_subject === Companion_getInstance_14().DstAtop_1 ? 'DstAtop' : tmp0_subject === Companion_getInstance_14().Xor_1 ? 'Xor' : tmp0_subject === Companion_getInstance_14().Plus_1 ? 'Plus' : tmp0_subject === Companion_getInstance_14().Modulate_1 ? 'Modulate' : tmp0_subject === Companion_getInstance_14().Screen_1 ? 'Screen' : tmp0_subject === Companion_getInstance_14().Overlay_1 ? 'Overlay' : tmp0_subject === Companion_getInstance_14().Darken_1 ? 'Darken' : tmp0_subject === Companion_getInstance_14().Lighten_1 ? 'Lighten' : tmp0_subject === Companion_getInstance_14().ColorDodge_1 ? 'ColorDodge' : tmp0_subject === Companion_getInstance_14().ColorBurn_1 ? 'ColorBurn' : tmp0_subject === Companion_getInstance_14().Hardlight_1 ? 'HardLight' : tmp0_subject === Companion_getInstance_14().Softlight_1 ? 'Softlight' : tmp0_subject === Companion_getInstance_14().Difference_1 ? 'Difference' : tmp0_subject === Companion_getInstance_14().Exclusion_1 ? 'Exclusion' : tmp0_subject === Companion_getInstance_14().Multiply_1 ? 'Multiply' : tmp0_subject === Companion_getInstance_14().Hue_1 ? 'Hue' : tmp0_subject === Companion_getInstance_14().Saturation_1 ? 'Saturation' : tmp0_subject === Companion_getInstance_14().Color_1 ? 'Color' : tmp0_subject === Companion_getInstance_14().Luminosity_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    var tmp0_other_with_cast = other instanceof BlendMode ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_14();
    this.value_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.value_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.value_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.value_1, other);
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).linearGradient_hzla25_k$ = function (colorStops, start, end, tileMode) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.List' call
    var tmp0_List = colorStops.length;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(tmp0_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_List)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        tmp$ret$0 = colorStops[index].get_second_jf7fjx_k$().value_1;
        list.add_1j60pz_k$(new Color(tmp$ret$0));
      }
       while (inductionVariable < tmp0_List);
    tmp$ret$1 = list;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.List' call
    var tmp1_List = colorStops.length;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(tmp1_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_List)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        tmp$ret$3 = colorStops[index_0].get_first_irdx8n_k$();
        list_0.add_1j60pz_k$(tmp$ret$3);
      }
       while (inductionVariable_0 < tmp1_List);
    tmp$ret$4 = list_0;
    tmp$ret$5 = tmp$ret$4;
    return new LinearGradient(tmp, tmp$ret$5, start, end, tileMode);
  };
  protoOf(Companion_0).linearGradient$default_n2weej_k$ = function (colorStops, start, end, tileMode, $super) {
    start = start === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : start;
    end = end === VOID ? Companion_getInstance().get_Infinite_oe4l7z_k$() : end;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    return $super === VOID ? this.linearGradient_hzla25_k$(colorStops, start, end, tileMode) : $super.linearGradient_hzla25_k$.call(this, colorStops, new Offset(start), new Offset(end), new TileMode(tileMode));
  };
  protoOf(Companion_0).linearGradient_shb1il_k$ = function (colors, start, end, tileMode) {
    return new LinearGradient(colors, null, start, end, tileMode);
  };
  protoOf(Companion_0).linearGradient$default_idz3kv_k$ = function (colors, start, end, tileMode, $super) {
    start = start === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : start;
    end = end === VOID ? Companion_getInstance().get_Infinite_oe4l7z_k$() : end;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    return $super === VOID ? this.linearGradient_shb1il_k$(colors, start, end, tileMode) : $super.linearGradient_shb1il_k$.call(this, colors, new Offset(start), new Offset(end), new TileMode(tileMode));
  };
  protoOf(Companion_0).horizontalGradient_tfs9xe_k$ = function (colors, startX, endX, tileMode) {
    return this.linearGradient_shb1il_k$(colors, Offset_0(startX, 0.0), Offset_0(endX, 0.0), tileMode);
  };
  protoOf(Companion_0).horizontalGradient$default_d80ehs_k$ = function (colors, startX, endX, tileMode, $super) {
    startX = startX === VOID ? 0.0 : startX;
    endX = endX === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : endX;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    return $super === VOID ? this.horizontalGradient_tfs9xe_k$(colors, startX, endX, tileMode) : $super.horizontalGradient_tfs9xe_k$.call(this, colors, startX, endX, new TileMode(tileMode));
  };
  protoOf(Companion_0).horizontalGradient_i469mu_k$ = function (colorStops, startX, endX, tileMode) {
    return this.linearGradient_hzla25_k$(colorStops.slice(), Offset_0(startX, 0.0), Offset_0(endX, 0.0), tileMode);
  };
  protoOf(Companion_0).horizontalGradient$default_mfit2q_k$ = function (colorStops, startX, endX, tileMode, $super) {
    startX = startX === VOID ? 0.0 : startX;
    endX = endX === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : endX;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    return $super === VOID ? this.horizontalGradient_i469mu_k$(colorStops, startX, endX, tileMode) : $super.horizontalGradient_i469mu_k$.call(this, colorStops, startX, endX, new TileMode(tileMode));
  };
  protoOf(Companion_0).verticalGradient_d79o9c_k$ = function (colors, startY, endY, tileMode) {
    return this.linearGradient_shb1il_k$(colors, Offset_0(0.0, startY), Offset_0(0.0, endY), tileMode);
  };
  protoOf(Companion_0).verticalGradient$default_ic5ss2_k$ = function (colors, startY, endY, tileMode, $super) {
    startY = startY === VOID ? 0.0 : startY;
    endY = endY === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : endY;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    return $super === VOID ? this.verticalGradient_d79o9c_k$(colors, startY, endY, tileMode) : $super.verticalGradient_d79o9c_k$.call(this, colors, startY, endY, new TileMode(tileMode));
  };
  protoOf(Companion_0).verticalGradient_inf80c_k$ = function (colorStops, startY, endY, tileMode) {
    return this.linearGradient_hzla25_k$(colorStops.slice(), Offset_0(0.0, startY), Offset_0(0.0, endY), tileMode);
  };
  protoOf(Companion_0).verticalGradient$default_cxjvk4_k$ = function (colorStops, startY, endY, tileMode, $super) {
    startY = startY === VOID ? 0.0 : startY;
    endY = endY === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : endY;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    return $super === VOID ? this.verticalGradient_inf80c_k$(colorStops, startY, endY, tileMode) : $super.verticalGradient_inf80c_k$.call(this, colorStops, startY, endY, new TileMode(tileMode));
  };
  protoOf(Companion_0).radialGradient_ge8bks_k$ = function (colorStops, center, radius, tileMode) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.List' call
    var tmp0_List = colorStops.length;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(tmp0_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_List)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        tmp$ret$0 = colorStops[index].get_second_jf7fjx_k$().value_1;
        list.add_1j60pz_k$(new Color(tmp$ret$0));
      }
       while (inductionVariable < tmp0_List);
    tmp$ret$1 = list;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.List' call
    var tmp1_List = colorStops.length;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(tmp1_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_List)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        tmp$ret$3 = colorStops[index_0].get_first_irdx8n_k$();
        list_0.add_1j60pz_k$(tmp$ret$3);
      }
       while (inductionVariable_0 < tmp1_List);
    tmp$ret$4 = list_0;
    tmp$ret$5 = tmp$ret$4;
    return new RadialGradient(tmp, tmp$ret$5, center, radius, tileMode);
  };
  protoOf(Companion_0).radialGradient$default_qhhcp2_k$ = function (colorStops, center, radius, tileMode, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_ooyrpa_k$() : center;
    radius = radius === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : radius;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    return $super === VOID ? this.radialGradient_ge8bks_k$(colorStops, center, radius, tileMode) : $super.radialGradient_ge8bks_k$.call(this, colorStops, new Offset(center), radius, new TileMode(tileMode));
  };
  protoOf(Companion_0).radialGradient_x8fw6i_k$ = function (colors, center, radius, tileMode) {
    return new RadialGradient(colors, null, center, radius, tileMode);
  };
  protoOf(Companion_0).radialGradient$default_sd2nry_k$ = function (colors, center, radius, tileMode, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_ooyrpa_k$() : center;
    radius = radius === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : radius;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    return $super === VOID ? this.radialGradient_x8fw6i_k$(colors, center, radius, tileMode) : $super.radialGradient_x8fw6i_k$.call(this, colors, new Offset(center), radius, new TileMode(tileMode));
  };
  protoOf(Companion_0).sweepGradient_nrx7hj_k$ = function (colorStops, center) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.List' call
    var tmp0_List = colorStops.length;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(tmp0_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_List)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        tmp$ret$0 = colorStops[index].get_second_jf7fjx_k$().value_1;
        list.add_1j60pz_k$(new Color(tmp$ret$0));
      }
       while (inductionVariable < tmp0_List);
    tmp$ret$1 = list;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_colors = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.List' call
    var tmp1_List = colorStops.length;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(tmp1_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_List)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        tmp$ret$3 = colorStops[index_0].get_first_irdx8n_k$();
        list_0.add_1j60pz_k$(tmp$ret$3);
      }
       while (inductionVariable_0 < tmp1_List);
    tmp$ret$4 = list_0;
    tmp$ret$5 = tmp$ret$4;
    var tmp1_stops = tmp$ret$5;
    return new SweepGradient(center, tmp0_colors, tmp1_stops);
  };
  protoOf(Companion_0).sweepGradient$default_7o0bdt_k$ = function (colorStops, center, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_ooyrpa_k$() : center;
    return $super === VOID ? this.sweepGradient_nrx7hj_k$(colorStops, center) : $super.sweepGradient_nrx7hj_k$.call(this, colorStops, new Offset(center));
  };
  protoOf(Companion_0).sweepGradient_uggmap_k$ = function (colors, center) {
    return new SweepGradient(center, colors, null);
  };
  protoOf(Companion_0).sweepGradient$default_ccaoht_k$ = function (colors, center, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_ooyrpa_k$() : center;
    return $super === VOID ? this.sweepGradient_uggmap_k$(colors, center) : $super.sweepGradient_uggmap_k$.call(this, colors, new Offset(center));
  };
  var Companion_instance_0;
  function Companion_getInstance_15() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Brush() {
    Companion_getInstance_15();
    this.intrinsicSize_1 = Companion_getInstance_0().get_Unspecified_o59ai8_k$();
  }
  protoOf(Brush).get_intrinsicSize_x61on3_k$ = function () {
    return this.intrinsicSize_1;
  };
  function _set_internalShader__t1be7f($this, _set____db54di) {
    $this.internalShader_1 = _set____db54di;
  }
  function _get_internalShader__3i7y5z($this) {
    return $this.internalShader_1;
  }
  function _set_createdSize__u0arks($this, _set____db54di) {
    $this.createdSize_1 = _set____db54di;
  }
  function _get_createdSize__aqf42g($this) {
    return $this.createdSize_1;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.internalShader_1 = null;
    this.createdSize_1 = Companion_getInstance_0().get_Unspecified_o59ai8_k$();
  }
  protoOf(ShaderBrush).applyTo_w34vc_k$ = function (size, p, alpha) {
    var shader = this.internalShader_1;
    if (shader == null ? true : !equals(this.createdSize_1, size)) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.createShader_myfnlm_k$(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.ShaderBrush.applyTo.<anonymous>' call
      this.internalShader_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      shader = tmp$ret$0;
      this.createdSize_1 = size;
    }
    if (!equals(p.get_color_v34vrz_k$(), Companion_getInstance_17().get_Black_wh3yn9_k$())) {
      p.set_color_b5evhd_k$(Companion_getInstance_17().get_Black_wh3yn9_k$());
    }
    if (!equals(p.get_shader_jgtazy_k$(), shader)) {
      p.set_shader_bd5o0m_k$(shader);
    }
    if (!(p.get_alpha_iooth1_k$() === alpha)) {
      p.set_alpha_k1tx50_k$(alpha);
    }
  };
  function SolidColor(value) {
    Brush.call(this);
    this.value_1 = value;
  }
  protoOf(SolidColor).get_value_puk9xv_k$ = function () {
    return this.value_1;
  };
  protoOf(SolidColor).applyTo_w34vc_k$ = function (size, p, alpha) {
    p.set_alpha_k1tx50_k$(get_DefaultAlpha());
    var tmp;
    if (!(alpha === get_DefaultAlpha())) {
      tmp = Color__copy$default_impl_ectz3s(this.value_1, _Color___get_alpha__impl__wcfyv1(this.value_1) * alpha);
    } else {
      tmp = this.value_1;
    }
    p.set_color_b5evhd_k$(tmp);
    if (!(p.get_shader_jgtazy_k$() == null)) {
      p.set_shader_bd5o0m_k$(null);
    }
  };
  protoOf(SolidColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.value_1, other.value_1))
      return false;
    return true;
  };
  protoOf(SolidColor).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  protoOf(SolidColor).toString = function () {
    return 'SolidColor(value=' + new Color(this.value_1) + ')';
  };
  function _get_colors__hj58bp($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk($this) {
    return $this.stops_1;
  }
  function _get_start__b8zdqp($this) {
    return $this.start_1;
  }
  function _get_end__e67thy($this) {
    return $this.end_1;
  }
  function _get_tileMode__a5osqi($this) {
    return $this.tileMode_1;
  }
  function LinearGradient(colors, stops, start, end, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    ShaderBrush.call(this);
    this.colors_1 = colors;
    this.stops_1 = stops;
    this.start_1 = start;
    this.end_1 = end;
    this.tileMode_1 = tileMode;
  }
  protoOf(LinearGradient).get_intrinsicSize_x61on3_k$ = function () {
    var tmp;
    if (isFinite(_Offset___get_x__impl__xvi35n(this.start_1)) ? isFinite(_Offset___get_x__impl__xvi35n(this.end_1)) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = _Offset___get_x__impl__xvi35n(this.start_1) - _Offset___get_x__impl__xvi35n(this.end_1);
      tmp$ret$0 = Math.abs(tmp0_abs);
      tmp = tmp$ret$0;
    } else {
      tmp = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (isFinite(_Offset___get_y__impl__8bzhra(this.start_1)) ? isFinite(_Offset___get_y__impl__8bzhra(this.end_1)) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = _Offset___get_y__impl__8bzhra(this.start_1) - _Offset___get_y__impl__8bzhra(this.end_1);
      tmp$ret$1 = Math.abs(tmp1_abs);
      tmp_1 = tmp$ret$1;
    } else {
      tmp_1 = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
    }
    return Size(tmp_0, tmp_1);
  };
  protoOf(LinearGradient).createShader_myfnlm_k$ = function (size) {
    var startX = _Offset___get_x__impl__xvi35n(this.start_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_width__impl__58y75t(size) : _Offset___get_x__impl__xvi35n(this.start_1);
    var startY = _Offset___get_y__impl__8bzhra(this.start_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_height__impl__a04p02(size) : _Offset___get_y__impl__8bzhra(this.start_1);
    var endX = _Offset___get_x__impl__xvi35n(this.end_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_width__impl__58y75t(size) : _Offset___get_x__impl__xvi35n(this.end_1);
    var endY = _Offset___get_y__impl__8bzhra(this.end_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_height__impl__a04p02(size) : _Offset___get_y__impl__8bzhra(this.end_1);
    var tmp0_colors = this.colors_1;
    var tmp1_colorStops = this.stops_1;
    var tmp2_from = Offset_0(startX, startY);
    var tmp3_to = Offset_0(endX, endY);
    var tmp4_tileMode = this.tileMode_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    if (!equals(this.start_1, other.start_1))
      return false;
    if (!equals(this.end_1, other.end_1))
      return false;
    if (!(this.tileMode_1 === other.tileMode_1))
      return false;
    return true;
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.colors_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.start_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.end_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.tileMode_1) | 0;
    return result;
  };
  protoOf(LinearGradient).toString = function () {
    var startValue = get_isFinite(this.start_1) ? 'start=' + new Offset(this.start_1) + ', ' : '';
    var endValue = get_isFinite(this.end_1) ? 'end=' + new Offset(this.end_1) + ', ' : '';
    return 'LinearGradient(colors=' + this.colors_1 + ', ' + ('stops=' + this.stops_1 + ', ') + startValue + endValue + ('tileMode=' + new TileMode(this.tileMode_1) + ')');
  };
  function _get_colors__hj58bp_0($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk_0($this) {
    return $this.stops_1;
  }
  function _get_center__m8ext6($this) {
    return $this.center_1;
  }
  function _get_radius__h7nyvb($this) {
    return $this.radius_1;
  }
  function _get_tileMode__a5osqi_0($this) {
    return $this.tileMode_1;
  }
  function RadialGradient(colors, stops, center, radius, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    ShaderBrush.call(this);
    this.colors_1 = colors;
    this.stops_1 = stops;
    this.center_1 = center;
    this.radius_1 = radius;
    this.tileMode_1 = tileMode;
  }
  protoOf(RadialGradient).get_intrinsicSize_x61on3_k$ = function () {
    return isFinite(this.radius_1) ? Size(this.radius_1 * 2, this.radius_1 * 2) : Companion_getInstance_0().get_Unspecified_o59ai8_k$();
  };
  protoOf(RadialGradient).createShader_myfnlm_k$ = function (size) {
    var centerX;
    var centerY;
    if (get_isUnspecified(this.center_1)) {
      var drawCenter = get_center(size);
      centerX = _Offset___get_x__impl__xvi35n(drawCenter);
      centerY = _Offset___get_y__impl__8bzhra(drawCenter);
    } else {
      centerX = _Offset___get_x__impl__xvi35n(this.center_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_width__impl__58y75t(size) : _Offset___get_x__impl__xvi35n(this.center_1);
      centerY = _Offset___get_y__impl__8bzhra(this.center_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_height__impl__a04p02(size) : _Offset___get_y__impl__8bzhra(this.center_1);
    }
    var tmp0_colors = this.colors_1;
    var tmp1_colorStops = this.stops_1;
    var tmp2_center = Offset_0(centerX, centerY);
    var tmp3_radius = this.radius_1 === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_minDimension__impl__4iso0r(size) / 2 : this.radius_1;
    var tmp4_tileMode = this.tileMode_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(RadialGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    if (!equals(this.center_1, other.center_1))
      return false;
    if (!(this.radius_1 === other.radius_1))
      return false;
    if (!(this.tileMode_1 === other.tileMode_1))
      return false;
    return true;
  };
  protoOf(RadialGradient).hashCode = function () {
    var result = hashCode(this.colors_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.center_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.radius_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.tileMode_1) | 0;
    return result;
  };
  protoOf(RadialGradient).toString = function () {
    var centerValue = get_isSpecified(this.center_1) ? 'center=' + new Offset(this.center_1) + ', ' : '';
    var radiusValue = isFinite(this.radius_1) ? 'radius=' + this.radius_1 + ', ' : '';
    return 'RadialGradient(' + ('colors=' + this.colors_1 + ', ') + ('stops=' + this.stops_1 + ', ') + centerValue + radiusValue + ('tileMode=' + new TileMode(this.tileMode_1) + ')');
  };
  function _get_center__m8ext6_0($this) {
    return $this.center_1;
  }
  function _get_colors__hj58bp_1($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk_1($this) {
    return $this.stops_1;
  }
  function SweepGradient(center, colors, stops) {
    stops = stops === VOID ? null : stops;
    ShaderBrush.call(this);
    this.center_1 = center;
    this.colors_1 = colors;
    this.stops_1 = stops;
  }
  protoOf(SweepGradient).createShader_myfnlm_k$ = function (size) {
    var tmp;
    if (get_isUnspecified(this.center_1)) {
      tmp = get_center(size);
    } else {
      tmp = Offset_0(_Offset___get_x__impl__xvi35n(this.center_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_width__impl__58y75t(size) : _Offset___get_x__impl__xvi35n(this.center_1), _Offset___get_y__impl__8bzhra(this.center_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_height__impl__a04p02(size) : _Offset___get_y__impl__8bzhra(this.center_1));
    }
    return SweepGradientShader(tmp, this.colors_1, this.stops_1);
  };
  protoOf(SweepGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    if (!equals(this.center_1, other.center_1))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    return true;
  };
  protoOf(SweepGradient).hashCode = function () {
    var result = Offset__hashCode_impl_hbql41(this.center_1);
    result = imul(31, result) + hashCode(this.colors_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(SweepGradient).toString = function () {
    var centerValue = get_isSpecified(this.center_1) ? 'center=' + new Offset(this.center_1) + ', ' : '';
    return 'SweepGradient(' + centerValue + ('colors=' + this.colors_1 + ', stops=' + this.stops_1 + ')');
  };
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Difference_1 = _ClipOp___init__impl__pqwwy8(0);
    this.Intersect_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  protoOf(Companion_1).get_Difference_tu92bl_k$ = function () {
    return this.Difference_1;
  };
  protoOf(Companion_1).get_Intersect_ow3v69_k$ = function () {
    return this.Intersect_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_16() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_16().Difference_1 ? 'Difference' : tmp0_subject === Companion_getInstance_16().Intersect_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    var tmp0_other_with_cast = other instanceof ClipOp ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_16();
    this.value_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.value_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.value_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.value_1, other);
  };
  function hsvToRgbComponent($this, n, h, s, v) {
    var k = (n + h / 60.0) % 6.0;
    var tmp = v * s;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = 4 - k;
    tmp$ret$0 = Math.min(k, tmp0_minOf, 1.0);
    var tmp1_max = tmp$ret$0;
    tmp$ret$1 = Math.max(0.0, tmp1_max);
    return v - tmp * tmp$ret$1;
  }
  function hslToRgbComponent($this, n, h, s, l) {
    var k = (n + h / 30.0) % 12.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = 1.0 - l;
    tmp$ret$0 = Math.min(l, tmp0_min);
    var a = s * tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp1_minOf = k - 3;
    var tmp2_minOf = 9 - k;
    tmp$ret$1 = Math.min(tmp1_minOf, tmp2_minOf, 1.0);
    var tmp3_max = tmp$ret$1;
    tmp$ret$2 = Math.max(-1.0, tmp3_max);
    return l - a * tmp$ret$2;
  }
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var tmp2_getColorSpace = ColorSpaces_getInstance();
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.toInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    var tmp1_toInt = tmp$ret$0;
    tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toInt).toInt_1tsl84_k$();
    var tmp3_getColorSpace = tmp$ret$1;
    tmp$ret$2 = tmp2_getColorSpace.get_ColorSpacesArray_qsodou_k$()[tmp3_getColorSpace];
    return tmp$ret$2;
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var thisColorSpace = _Color___get_colorSpace__impl__jqqozk($this);
    if (colorSpace.equals(thisColorSpace)) {
      return $this;
    }
    var connector = connect(thisColorSpace, colorSpace);
    return connector.transformToColor_9he873_k$(_Color___get_red__impl__cwrsk6($this), _Color___get_green__impl__bta9rs($this), _Color___get_blue__impl__xwez13($this), _Color___get_alpha__impl__wcfyv1($this));
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(48));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(48));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).toShort_ja8oqn_k$();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(40));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(32));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).toShort_ja8oqn_k$();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(32));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(16));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      var tmp6_toShort = tmp$ret$6;
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).toShort_ja8oqn_k$();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      var tmp$ret$4;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).ushr_rr8rvr_k$(56));
      var tmp2_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      var tmp3_toFloat = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$3 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat));
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4 / 255.0;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlin.ULong.toFloat' call
      var tmp$ret$6;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$5;
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).ushr_rr8rvr_k$(6));
      var tmp5_and = tmp$ret$5;
      tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
      var tmp6_toFloat = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toDouble' call
      tmp$ret$7 = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp6_toFloat));
      tmp$ret$8 = tmp$ret$7;
      tmp = tmp$ret$8 / 1023.0;
    }
    return tmp;
  }
  function Color__component1_impl_lz80qe($this) {
    return _Color___get_red__impl__cwrsk6($this);
  }
  function Color__component2_impl_mg9n4l($this) {
    return _Color___get_green__impl__bta9rs($this);
  }
  function Color__component3_impl_mxb9is($this) {
    return _Color___get_blue__impl__xwez13($this);
  }
  function Color__component4_impl_necvwz($this) {
    return _Color___get_alpha__impl__wcfyv1($this);
  }
  function Color__component5_impl_nveib6($this) {
    return _Color___get_colorSpace__impl__jqqozk($this);
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = new Color($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Color(tmp_1)).copy_bz6bui_k$.call(tmp_0, alpha, red, green, blue).value_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).get_name_woqyms_k$() + ')';
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Black_1 = Color_1(new Long(-16777216, 0));
    this.DarkGray_1 = Color_1(new Long(-12303292, 0));
    this.Gray_1 = Color_1(new Long(-7829368, 0));
    this.LightGray_1 = Color_1(new Long(-3355444, 0));
    this.White_1 = Color_1(new Long(-1, 0));
    this.Red_1 = Color_1(new Long(-65536, 0));
    this.Green_1 = Color_1(new Long(-16711936, 0));
    this.Blue_1 = Color_1(new Long(-16776961, 0));
    this.Yellow_1 = Color_1(new Long(-256, 0));
    this.Cyan_1 = Color_1(new Long(-16711681, 0));
    this.Magenta_1 = Color_1(new Long(-65281, 0));
    this.Transparent_1 = Color_3(0);
    this.Unspecified_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().get_Unspecified_el0w4u_k$());
  }
  protoOf(Companion_2).get_Black_wh3yn9_k$ = function () {
    return this.Black_1;
  };
  protoOf(Companion_2).get_DarkGray_gff893_k$ = function () {
    return this.DarkGray_1;
  };
  protoOf(Companion_2).get_Gray_32p7wv_k$ = function () {
    return this.Gray_1;
  };
  protoOf(Companion_2).get_LightGray_ivooxh_k$ = function () {
    return this.LightGray_1;
  };
  protoOf(Companion_2).get_White_rvz4cb_k$ = function () {
    return this.White_1;
  };
  protoOf(Companion_2).get_Red_fzly7h_k$ = function () {
    return this.Red_1;
  };
  protoOf(Companion_2).get_Green_91utzz_k$ = function () {
    return this.Green_1;
  };
  protoOf(Companion_2).get_Blue_ucp8js_k$ = function () {
    return this.Blue_1;
  };
  protoOf(Companion_2).get_Yellow_yypdia_k$ = function () {
    return this.Yellow_1;
  };
  protoOf(Companion_2).get_Cyan_5ocx2p_k$ = function () {
    return this.Cyan_1;
  };
  protoOf(Companion_2).get_Magenta_a957np_k$ = function () {
    return this.Magenta_1;
  };
  protoOf(Companion_2).get_Transparent_8zprqq_k$ = function () {
    return this.Transparent_1;
  };
  protoOf(Companion_2).get_Unspecified_9ntdt9_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(Companion_2).hsv_eajx0j_k$ = function (hue, saturation, value, alpha, colorSpace) {
    // Inline function 'kotlin.require' call
    var tmp0_require = ((0.0 <= hue ? hue <= 360.0 : false) ? 0.0 <= saturation ? saturation <= 1.0 : false : false) ? 0.0 <= value ? value <= 1.0 : false : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Companion.hsv.<anonymous>' call
      tmp$ret$0 = 'HSV (' + hue + ', ' + saturation + ', ' + value + ') must be in range (0..360, 0..1, 0..1)';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var red = hsvToRgbComponent(this, 5, hue, saturation, value);
    var green = hsvToRgbComponent(this, 3, hue, saturation, value);
    var blue = hsvToRgbComponent(this, 1, hue, saturation, value);
    return Color_0(red, green, blue, alpha, colorSpace);
  };
  protoOf(Companion_2).hsv$default_scpuym_k$ = function (hue, saturation, value, alpha, colorSpace, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    return $super === VOID ? this.hsv_eajx0j_k$(hue, saturation, value, alpha, colorSpace) : $super.hsv_eajx0j_k$.call(this, hue, saturation, value, alpha, colorSpace).value_1;
  };
  protoOf(Companion_2).hsl_k9g3wz_k$ = function (hue, saturation, lightness, alpha, colorSpace) {
    // Inline function 'kotlin.require' call
    var tmp0_require = ((0.0 <= hue ? hue <= 360.0 : false) ? 0.0 <= saturation ? saturation <= 1.0 : false : false) ? 0.0 <= lightness ? lightness <= 1.0 : false : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Companion.hsl.<anonymous>' call
      tmp$ret$0 = 'HSL (' + hue + ', ' + saturation + ', ' + lightness + ') must be in range (0..360, 0..1, 0..1)';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var red = hslToRgbComponent(this, 0, hue, saturation, lightness);
    var green = hslToRgbComponent(this, 8, hue, saturation, lightness);
    var blue = hslToRgbComponent(this, 4, hue, saturation, lightness);
    return Color_0(red, green, blue, alpha, colorSpace);
  };
  protoOf(Companion_2).hsl$default_7ujrjo_k$ = function (hue, saturation, lightness, alpha, colorSpace, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    return $super === VOID ? this.hsl_k9g3wz_k$(hue, saturation, lightness, alpha, colorSpace) : $super.hsl_k9g3wz_k$.call(this, hue, saturation, lightness, alpha, colorSpace).value_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_17() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_17();
    this.value_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.value_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.value_1, other);
  };
  function takeOrElse(_this__u8e3s4, block) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    tmp$ret$0 = !equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _Color___get_value__impl__1pls5m(Companion_getInstance_17().Unspecified_1));
    if (tmp$ret$0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = block().value_1;
    }
    return tmp;
  }
  function get_isSpecified_0(_this__u8e3s4) {
    return !equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _Color___get_value__impl__1pls5m(Companion_getInstance_17().Unspecified_1));
  }
  function toArgb(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.toInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.shr' call
    var tmp0_shr = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().get_Srgb_woa2g3_k$()));
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).ushr_rr8rvr_k$(32));
    var tmp1_toInt = tmp$ret$0;
    tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toInt).toInt_1tsl84_k$();
    return tmp$ret$1;
  }
  function Color_0(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var containsLower = colorSpace.getMinValue_7r60q4_k$(0);
    if (red <= colorSpace.getMaxValue_8bwqwu_k$(0) ? containsLower <= red : false) {
      var containsLower_0 = colorSpace.getMinValue_7r60q4_k$(1);
      tmp_1 = green <= colorSpace.getMaxValue_8bwqwu_k$(1) ? containsLower_0 <= green : false;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var containsLower_1 = colorSpace.getMinValue_7r60q4_k$(2);
      tmp_0 = blue <= colorSpace.getMaxValue_8bwqwu_k$(2) ? containsLower_1 <= blue : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = 0.0 <= alpha ? alpha <= 1.0 : false;
    } else {
      tmp = false;
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      tmp$ret$0 = 'red = ' + red + ', green = ' + green + ', blue = ' + blue + ', alpha = ' + alpha + ' outside the range for ' + colorSpace;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (colorSpace.get_isSrgb_ew666l_k$()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.shl' call
      var tmp$ret$2;
      // Inline function 'kotlin.ULong.and' call
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp1_and = tmp$ret$1;
      tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
      var tmp2_shl = tmp$ret$2;
      tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shl).shl_po5ip6_k$(32));
      return _Color___init__impl__r6cqi2(tmp$ret$3);
    }
    // Inline function 'kotlin.require' call
    var tmp3_require = colorSpace.get_componentCount_ffrht1_k$() === 3;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_require) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      tmp$ret$4 = 'Color only works with ColorSpaces with 3 components';
      var message_0 = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var id = colorSpace.get_id_kntnx8_k$();
    // Inline function 'kotlin.require' call
    var tmp4_require = !(id === Companion_getInstance_38().get_MinId_idmyf8_k$());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_require) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      tmp$ret$5 = 'Unknown color space, please use a color space in ColorSpaces';
      var message_1 = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var r = _Float16___init__impl__fckrew_0(red);
    var g = _Float16___init__impl__fckrew_0(green);
    var b = _Float16___init__impl__fckrew_0(blue);
    var tmp$ret$7;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$6;
    // Inline function 'kotlin.math.min' call
    tmp$ret$6 = Math.min(alpha, 1.0);
    var tmp5_max = tmp$ret$6;
    tmp$ret$7 = Math.max(0.0, tmp5_max);
    var a = numberToInt(tmp$ret$7 * 1023.0 + 0.5);
    var tmp$ret$25;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$22;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$18;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$14;
    // Inline function 'kotlin.ULong.or' call
    var tmp$ret$10;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$9;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$8;
    // Inline function 'kotlin.toULong' call
    var tmp6_toULong = _Float16___get_halfValue__impl__89tmwx(r);
    tmp$ret$8 = _ULong___init__impl__c78o9k(toLong(tmp6_toULong));
    var tmp7_and = tmp$ret$8;
    tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp8_shl = tmp$ret$9;
    tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_shl).shl_po5ip6_k$(48));
    var tmp12_or = tmp$ret$10;
    var tmp$ret$13;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$12;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$11;
    // Inline function 'kotlin.toULong' call
    var tmp9_toULong = _Float16___get_halfValue__impl__89tmwx(g);
    tmp$ret$11 = _ULong___init__impl__c78o9k(toLong(tmp9_toULong));
    var tmp10_and = tmp$ret$11;
    tmp$ret$12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp11_shl = tmp$ret$12;
    tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_shl).shl_po5ip6_k$(32));
    var tmp13_or = tmp$ret$13;
    tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp13_or)));
    var tmp17_or = tmp$ret$14;
    var tmp$ret$17;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$16;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$15;
    // Inline function 'kotlin.toULong' call
    var tmp14_toULong = _Float16___get_halfValue__impl__89tmwx(b);
    tmp$ret$15 = _ULong___init__impl__c78o9k(toLong(tmp14_toULong));
    var tmp15_and = tmp$ret$15;
    tmp$ret$16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp15_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp16_shl = tmp$ret$16;
    tmp$ret$17 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_shl).shl_po5ip6_k$(16));
    var tmp18_or = tmp$ret$17;
    tmp$ret$18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp17_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp18_or)));
    var tmp21_or = tmp$ret$18;
    var tmp$ret$21;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$20;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$19;
    // Inline function 'kotlin.toULong' call
    tmp$ret$19 = _ULong___init__impl__c78o9k(toLong(a));
    var tmp19_and = tmp$ret$19;
    tmp$ret$20 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp19_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
    var tmp20_shl = tmp$ret$20;
    tmp$ret$21 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp20_shl).shl_po5ip6_k$(6));
    var tmp22_or = tmp$ret$21;
    tmp$ret$22 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp21_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp22_or)));
    var tmp24_or = tmp$ret$22;
    var tmp$ret$24;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$23;
    // Inline function 'kotlin.toULong' call
    tmp$ret$23 = _ULong___init__impl__c78o9k(toLong(id));
    var tmp23_and = tmp$ret$23;
    tmp$ret$24 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp23_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    var tmp25_or = tmp$ret$24;
    tmp$ret$25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp24_or).or_s401rn_k$(_ULong___get_data__impl__fggpzb(tmp25_or)));
    return _Color___init__impl__r6cqi2(tmp$ret$25);
  }
  function Color_1(color) {
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.and' call
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(color);
    var tmp0_and = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).and_jhajnj_k$(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
    var tmp1_shl = tmp$ret$1;
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shl).shl_po5ip6_k$(32));
    return _Color___init__impl__r6cqi2(tmp$ret$2);
  }
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'kotlin.require' call
    var tmp0_require = equals(colorSpace.get_model_rk6821_k$(), Companion_getInstance_37().get_Rgb_hxm2yj_k$());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.luminance.<anonymous>' call
      tmp$ret$0 = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + new ColorModel(colorSpace.get_model_rk6821_k$()));
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).get_eotfFunc_j2khmx_k$();
    var r = eotf.invoke_z1dtyv_k$(_Color___get_red__impl__cwrsk6(_this__u8e3s4));
    var g = eotf.invoke_z1dtyv_k$(_Color___get_green__impl__bta9rs(_this__u8e3s4));
    var b = eotf.invoke_z1dtyv_k$(_Color___get_blue__impl__xwez13(_this__u8e3s4));
    return saturate(0.2126 * r + 0.7152 * g + 0.0722 * b);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp0_compositeComponent = _Color___get_red__impl__cwrsk6(fg);
    var tmp1_compositeComponent = _Color___get_red__impl__cwrsk6(background);
    tmp$ret$0 = a === 0.0 ? 0.0 : (tmp0_compositeComponent * fgA + tmp1_compositeComponent * bgA * (1.0 - fgA)) / a;
    var r = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp2_compositeComponent = _Color___get_green__impl__bta9rs(fg);
    var tmp3_compositeComponent = _Color___get_green__impl__bta9rs(background);
    tmp$ret$1 = a === 0.0 ? 0.0 : (tmp2_compositeComponent * fgA + tmp3_compositeComponent * bgA * (1.0 - fgA)) / a;
    var g = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp4_compositeComponent = _Color___get_blue__impl__xwez13(fg);
    var tmp5_compositeComponent = _Color___get_blue__impl__xwez13(background);
    tmp$ret$2 = a === 0.0 ? 0.0 : (tmp4_compositeComponent * fgA + tmp5_compositeComponent * bgA * (1.0 - fgA)) / a;
    var b = tmp$ret$2;
    return Color_0(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Color_2(red, green, blue, alpha) {
    alpha = alpha === VOID ? 255 : alpha;
    var color = (alpha & 255) << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255;
    return Color_3(color);
  }
  function Color_3(color) {
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.shl' call
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(color));
    var tmp0_shl = tmp$ret$0;
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shl).shl_po5ip6_k$(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function saturate(v) {
    return v <= 0.0 ? 0.0 : v >= 1.0 ? 1.0 : v;
  }
  function compositeComponent(fgC, bgC, fgA, bgA, a) {
    return a === 0.0 ? 0.0 : (fgC * fgA + bgC * bgA * (1.0 - fgA)) / a;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).tint_oz42r0_k$ = function (color, blendMode) {
    return actualTintColorFilter(color, blendMode);
  };
  protoOf(Companion_3).tint$default_or1h4c_k$ = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_14().get_SrcIn_yyf2fo_k$() : blendMode;
    return $super === VOID ? this.tint_oz42r0_k$(color, blendMode) : $super.tint_oz42r0_k$.call(this, new Color(color), new BlendMode(blendMode));
  };
  protoOf(Companion_3).colorMatrix_16db4l_k$ = function (colorMatrix) {
    return actualColorMatrixColorFilter(colorMatrix);
  };
  protoOf(Companion_3).lighting_pskwdw_k$ = function (multiply, add) {
    return actualLightingColorFilter(multiply, add);
  };
  var Companion_instance_3;
  function Companion_getInstance_18() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter(nativeColorFilter) {
    Companion_getInstance_18();
    this.nativeColorFilter_1 = nativeColorFilter;
  }
  protoOf(ColorFilter).get_nativeColorFilter_tol2md_k$ = function () {
    return this.nativeColorFilter_1;
  };
  function _ColorMatrix___init__impl__3gytx1(values) {
    var tmp;
    if (values === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0]);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _ColorMatrix___get_values__impl__bpwpry($this) {
    return $this;
  }
  function ColorMatrix__get_impl_cdhqm3($this, row, column) {
    return _ColorMatrix___get_values__impl__bpwpry($this)[imul(row, 5) + column | 0];
  }
  function ColorMatrix__set_impl_33f5gv($this, row, column, v) {
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(row, 5) + column | 0] = v;
  }
  function ColorMatrix__reset_impl_aaa3ky($this) {
    fill(_ColorMatrix___get_values__impl__bpwpry($this), 0.0);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[18] = 1.0;
  }
  function ColorMatrix__set_impl_33f5gv_0($this, src) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = _ColorMatrix___get_values__impl__bpwpry(src);
    var tmp1_copyInto = _ColorMatrix___get_values__impl__bpwpry($this);
    var tmp2_copyInto = tmp0_copyInto.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_copyInto;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp2_copyInto);
    tmp$ret$4 = tmp1_copyInto;
  }
  function rotateInternal($this, degrees, block) {
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(radians);
    var cosine = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(radians);
    var sine = tmp$ret$1;
    block(cosine, sine);
  }
  function ColorMatrix__timesAssign_impl_tpdrdo($this, colorMatrix) {
    var v00 = dot($this, $this, 0, colorMatrix, 0);
    var v01 = dot($this, $this, 0, colorMatrix, 1);
    var v02 = dot($this, $this, 0, colorMatrix, 2);
    var v03 = dot($this, $this, 0, colorMatrix, 3);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$0 = _ColorMatrix___get_values__impl__bpwpry($this)[0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$1 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[4];
    var tmp_0 = tmp * tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$2 = _ColorMatrix___get_values__impl__bpwpry($this)[1];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$3 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[9];
    var tmp_2 = tmp_0 + tmp_1 * tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$4 = _ColorMatrix___get_values__impl__bpwpry($this)[2];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$5 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[14];
    var tmp_4 = tmp_2 + tmp_3 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$6 = _ColorMatrix___get_values__impl__bpwpry($this)[3];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$7 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[19];
    var tmp_6 = tmp_4 + tmp_5 * tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$8 = _ColorMatrix___get_values__impl__bpwpry($this)[4];
    var v04 = tmp_6 + tmp$ret$8;
    var v10 = dot($this, $this, 1, colorMatrix, 0);
    var v11 = dot($this, $this, 1, colorMatrix, 1);
    var v12 = dot($this, $this, 1, colorMatrix, 2);
    var v13 = dot($this, $this, 1, colorMatrix, 3);
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$9 = _ColorMatrix___get_values__impl__bpwpry($this)[5];
    var tmp_7 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$10 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[4];
    var tmp_8 = tmp_7 * tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$11 = _ColorMatrix___get_values__impl__bpwpry($this)[6];
    var tmp_9 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$12 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[9];
    var tmp_10 = tmp_8 + tmp_9 * tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$13 = _ColorMatrix___get_values__impl__bpwpry($this)[7];
    var tmp_11 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$14 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[14];
    var tmp_12 = tmp_10 + tmp_11 * tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$15 = _ColorMatrix___get_values__impl__bpwpry($this)[8];
    var tmp_13 = tmp$ret$15;
    var tmp$ret$16;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$16 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[19];
    var tmp_14 = tmp_12 + tmp_13 * tmp$ret$16;
    var tmp$ret$17;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$17 = _ColorMatrix___get_values__impl__bpwpry($this)[9];
    var v14 = tmp_14 + tmp$ret$17;
    var v20 = dot($this, $this, 2, colorMatrix, 0);
    var v21 = dot($this, $this, 2, colorMatrix, 1);
    var v22 = dot($this, $this, 2, colorMatrix, 2);
    var v23 = dot($this, $this, 2, colorMatrix, 3);
    var tmp$ret$18;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$18 = _ColorMatrix___get_values__impl__bpwpry($this)[10];
    var tmp_15 = tmp$ret$18;
    var tmp$ret$19;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$19 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[4];
    var tmp_16 = tmp_15 * tmp$ret$19;
    var tmp$ret$20;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$20 = _ColorMatrix___get_values__impl__bpwpry($this)[11];
    var tmp_17 = tmp$ret$20;
    var tmp$ret$21;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$21 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[9];
    var tmp_18 = tmp_16 + tmp_17 * tmp$ret$21;
    var tmp$ret$22;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$22 = _ColorMatrix___get_values__impl__bpwpry($this)[12];
    var tmp_19 = tmp$ret$22;
    var tmp$ret$23;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$23 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[14];
    var tmp_20 = tmp_18 + tmp_19 * tmp$ret$23;
    var tmp$ret$24;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$24 = _ColorMatrix___get_values__impl__bpwpry($this)[13];
    var tmp_21 = tmp$ret$24;
    var tmp$ret$25;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$25 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[19];
    var tmp_22 = tmp_20 + tmp_21 * tmp$ret$25;
    var tmp$ret$26;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$26 = _ColorMatrix___get_values__impl__bpwpry($this)[14];
    var v24 = tmp_22 + tmp$ret$26;
    var v30 = dot($this, $this, 3, colorMatrix, 0);
    var v31 = dot($this, $this, 3, colorMatrix, 1);
    var v32 = dot($this, $this, 3, colorMatrix, 2);
    var v33 = dot($this, $this, 3, colorMatrix, 3);
    var tmp$ret$27;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$27 = _ColorMatrix___get_values__impl__bpwpry($this)[15];
    var tmp_23 = tmp$ret$27;
    var tmp$ret$28;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$28 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[4];
    var tmp_24 = tmp_23 * tmp$ret$28;
    var tmp$ret$29;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$29 = _ColorMatrix___get_values__impl__bpwpry($this)[16];
    var tmp_25 = tmp$ret$29;
    var tmp$ret$30;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$30 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[9];
    var tmp_26 = tmp_24 + tmp_25 * tmp$ret$30;
    var tmp$ret$31;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$31 = _ColorMatrix___get_values__impl__bpwpry($this)[17];
    var tmp_27 = tmp$ret$31;
    var tmp$ret$32;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$32 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[14];
    var tmp_28 = tmp_26 + tmp_27 * tmp$ret$32;
    var tmp$ret$33;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$33 = _ColorMatrix___get_values__impl__bpwpry($this)[18];
    var tmp_29 = tmp$ret$33;
    var tmp$ret$34;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$34 = _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[19];
    var tmp_30 = tmp_28 + tmp_29 * tmp$ret$34;
    var tmp$ret$35;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$35 = _ColorMatrix___get_values__impl__bpwpry($this)[19];
    var v34 = tmp_30 + tmp$ret$35;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[4] = v04;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[5] = v10;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = v11;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[7] = v12;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[8] = v13;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[9] = v14;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[10] = v20;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[11] = v21;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = v22;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[13] = v23;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[14] = v24;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[15] = v30;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[16] = v31;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[17] = v32;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[18] = v33;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[19] = v34;
  }
  function dot($this, m1, row, m2, column) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$0 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 0 | 0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$1 = _ColorMatrix___get_values__impl__bpwpry(m2)[0 + column | 0];
    var tmp_0 = tmp * tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$2 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 1 | 0];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$3 = _ColorMatrix___get_values__impl__bpwpry(m2)[5 + column | 0];
    var tmp_2 = tmp_0 + tmp_1 * tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$4 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 2 | 0];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$5 = _ColorMatrix___get_values__impl__bpwpry(m2)[10 + column | 0];
    var tmp_4 = tmp_2 + tmp_3 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$6 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 3 | 0];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    tmp$ret$7 = _ColorMatrix___get_values__impl__bpwpry(m2)[15 + column | 0];
    return tmp_4 + tmp_5 * tmp$ret$7;
  }
  function ColorMatrix__setToSaturation_impl_j3wbeq($this, sat) {
    ColorMatrix__reset_impl_aaa3ky($this);
    var invSat = 1 - sat;
    var R = 0.213 * invSat;
    var G = 0.715 * invSat;
    var B = 0.072 * invSat;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp0_set = R + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = tmp0_set;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[1] = G;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[2] = B;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[5] = R;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp1_set = G + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = tmp1_set;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[7] = B;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[10] = R;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[11] = G;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp2_set = B + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = tmp2_set;
  }
  function ColorMatrix__setToScale_impl_162gnw($this, redScale, greenScale, blueScale, alphaScale) {
    ColorMatrix__reset_impl_aaa3ky($this);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = redScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = greenScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = blueScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[18] = alphaScale;
  }
  function ColorMatrix__setToRotateRed_impl_xjp2wg($this, degrees) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(radians);
    var cosine = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(radians);
    var sine = tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.setToRotateRed.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[7] = sine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp0_set = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[11] = tmp0_set;
  }
  function ColorMatrix__setToRotateGreen_impl_7547ya($this, degrees) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(radians);
    var cosine = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(radians);
    var sine = tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.setToRotateGreen.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp0_set = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[2] = tmp0_set;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[10] = sine;
  }
  function ColorMatrix__setToRotateBlue_impl_68t0yn($this, degrees) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(radians);
    var cosine = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(radians);
    var sine = tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.setToRotateBlue.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[1] = sine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var tmp0_set = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[5] = tmp0_set;
  }
  function ColorMatrix__convertRgbToYuv_impl_9vsur8($this) {
    ColorMatrix__reset_impl_aaa3ky($this);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[0] = 0.299;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[1] = 0.587;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[2] = 0.114;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[5] = -0.16874;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = -0.33126;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[7] = 0.5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[10] = 0.5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[11] = -0.41869;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = -0.08131;
  }
  function ColorMatrix__convertYuvToRgb_impl_um2qre($this) {
    ColorMatrix__reset_impl_aaa3ky($this);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[2] = 1.402;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[5] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[6] = -0.34414;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[7] = -0.71414;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[10] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[11] = 1.772;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[12] = 0.0;
  }
  function ColorMatrix__toString_impl_7jheub($this) {
    return 'ColorMatrix(values=' + toString($this) + ')';
  }
  function ColorMatrix__hashCode_impl_tanbn6($this) {
    return hashCode($this);
  }
  function ColorMatrix__equals_impl_k9m0uu($this, other) {
    if (!(other instanceof ColorMatrix_0))
      return false;
    var tmp0_other_with_cast = other instanceof ColorMatrix_0 ? other.values_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorMatrix_0(values) {
    this.values_1 = values;
  }
  protoOf(ColorMatrix_0).toString = function () {
    return ColorMatrix__toString_impl_7jheub(this.values_1);
  };
  protoOf(ColorMatrix_0).hashCode = function () {
    return ColorMatrix__hashCode_impl_tanbn6(this.values_1);
  };
  protoOf(ColorMatrix_0).equals = function (other) {
    return ColorMatrix__equals_impl_k9m0uu(this.values_1, other);
  };
  function degrees(radians) {
    return 57.29578 * radians;
  }
  function get_RadiansToDegrees() {
    return RadiansToDegrees;
  }
  var RadiansToDegrees;
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function _FilterQuality___get_value__impl__vmx58a($this) {
    return $this;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.None_1 = _FilterQuality___init__impl__nv51aq(0);
    this.Low_1 = _FilterQuality___init__impl__nv51aq(1);
    this.Medium_1 = _FilterQuality___init__impl__nv51aq(2);
    this.High_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  protoOf(Companion_4).get_None_8r7mce_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_4).get_Low_lx4az0_k$ = function () {
    return this.Low_1;
  };
  protoOf(Companion_4).get_Medium_l95upr_k$ = function () {
    return this.Medium_1;
  };
  protoOf(Companion_4).get_High_utfc24_k$ = function () {
    return this.High_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_19() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_19().None_1 ? 'None' : tmp0_subject === Companion_getInstance_19().Low_1 ? 'Low' : tmp0_subject === Companion_getInstance_19().Medium_1 ? 'Medium' : tmp0_subject === Companion_getInstance_19().High_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  function FilterQuality__equals_impl_katg2v($this, other) {
    if (!(other instanceof FilterQuality))
      return false;
    var tmp0_other_with_cast = other instanceof FilterQuality ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function FilterQuality(value) {
    Companion_getInstance_19();
    this.value_1 = value;
  }
  protoOf(FilterQuality).toString = function () {
    return FilterQuality__toString_impl_i5cfty(this.value_1);
  };
  protoOf(FilterQuality).hashCode = function () {
    return FilterQuality__hashCode_impl_v4lpcb(this.value_1);
  };
  protoOf(FilterQuality).equals = function (other) {
    return FilterQuality__equals_impl_katg2v(this.value_1, other);
  };
  function _get_One__e5trt7($this) {
    return $this.One_1;
  }
  function _get_NegativeOne__yf0cgw($this) {
    return $this.NegativeOne_1;
  }
  function _get_FP16_SIGN_SHIFT__s6944f($this) {
    return $this.FP16_SIGN_SHIFT_1;
  }
  function _get_FP16_SIGN_MASK__x2ykk3($this) {
    return $this.FP16_SIGN_MASK_1;
  }
  function _get_FP16_EXPONENT_SHIFT__eyg8q7($this) {
    return $this.FP16_EXPONENT_SHIFT_1;
  }
  function _get_FP16_EXPONENT_MASK__k8fogx($this) {
    return $this.FP16_EXPONENT_MASK_1;
  }
  function _get_FP16_SIGNIFICAND_MASK__ngumxz($this) {
    return $this.FP16_SIGNIFICAND_MASK_1;
  }
  function _get_FP16_EXPONENT_BIAS__keco9a($this) {
    return $this.FP16_EXPONENT_BIAS_1;
  }
  function _get_FP16_COMBINED__cpsvbw($this) {
    return $this.FP16_COMBINED_1;
  }
  function _get_FP16_EXPONENT_MAX__fdwxfx($this) {
    return $this.FP16_EXPONENT_MAX_1;
  }
  function _get_FP32_SIGN_SHIFT__phiacl($this) {
    return $this.FP32_SIGN_SHIFT_1;
  }
  function _get_FP32_EXPONENT_SHIFT__yiiezt($this) {
    return $this.FP32_EXPONENT_SHIFT_1;
  }
  function _get_FP32_EXPONENT_MASK__cq9esb($this) {
    return $this.FP32_EXPONENT_MASK_1;
  }
  function _get_FP32_SIGNIFICAND_MASK__ivg64z($this) {
    return $this.FP32_SIGNIFICAND_MASK_1;
  }
  function _get_FP32_EXPONENT_BIAS__cw6eko($this) {
    return $this.FP32_EXPONENT_BIAS_1;
  }
  function _get_FP32_QNAN_MASK__c2hda8($this) {
    return $this.FP32_QNAN_MASK_1;
  }
  function _get_FP32_DENORMAL_MAGIC__or798b($this) {
    return $this.FP32_DENORMAL_MAGIC_1;
  }
  function _get_FP32_DENORMAL_FLOAT__rwbx3e($this) {
    return $this.FP32_DENORMAL_FLOAT_1;
  }
  function toCompareValue($this, value) {
    var tmp;
    if (!((value & 32768) === 0)) {
      tmp = 32768 - (value & 65535) | 0;
    } else {
      tmp = value & 65535;
    }
    return tmp;
  }
  function floatToHalf($this, f) {
    var bits = toRawBits(f);
    var s = bits >>> 31 | 0;
    var e = (bits >>> 23 | 0) & 255;
    var m = bits & 8388607;
    var outE = 0;
    var outM = 0;
    if (e === 255) {
      outE = 31;
      outM = !(m === 0) ? 512 : 0;
    } else {
      e = (e - 127 | 0) + 15 | 0;
      if (e >= 31) {
        outE = 49;
      } else if (e <= 0) {
        if (e < -10) {
        } else {
          m = (m | 8388608) >> (1 - e | 0);
          if (!((m & 4096) === 0))
            m = m + 8192 | 0;
          outM = m >> 13;
        }
      } else {
        outE = e;
        outM = m >> 13;
        if (!((m & 4096) === 0)) {
          var out = outE << 10 | outM;
          var tmp0 = out;
          out = tmp0 + 1 | 0;
          return toShort(out | s << 15);
        }
      }
    }
    return toShort(s << 15 | outE << 10 | outM);
  }
  function _Float16___init__impl__fckrew(halfValue) {
    return halfValue;
  }
  function _Float16___get_halfValue__impl__89tmwx($this) {
    return $this;
  }
  function _Float16___init__impl__fckrew_0(value) {
    var tmp = _Float16___init__impl__fckrew(floatToHalf(Companion_getInstance_20(), value));
    return tmp;
  }
  function _Float16___init__impl__fckrew_1(value) {
    var tmp = _Float16___init__impl__fckrew_0(value);
    return tmp;
  }
  function Float16__toByte_impl_mggro7($this) {
    return toByte(numberToInt(Float16__toFloat_impl_6i8dal($this)));
  }
  function Float16__toShort_impl_lt4jwz($this) {
    return toShort(numberToInt(Float16__toFloat_impl_6i8dal($this)));
  }
  function Float16__toInt_impl_6odjmi($this) {
    return numberToInt(Float16__toFloat_impl_6i8dal($this));
  }
  function Float16__toLong_impl_dl0d11($this) {
    return numberToLong(Float16__toFloat_impl_6i8dal($this));
  }
  function Float16__toFloat_impl_6i8dal($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    Companion_getInstance_20();
    var s = bits & 32768;
    Companion_getInstance_20();
    var tmp = bits >>> 10 | 0;
    Companion_getInstance_20();
    var e = tmp & 31;
    Companion_getInstance_20();
    var m = bits & 1023;
    var outE = 0;
    var outM = 0;
    if (e === 0) {
      if (!(m === 0)) {
        var tmp$ret$0;
        // Inline function 'kotlin.fromBits' call
        var tmp0_fromBits = FloatCompanionObject_getInstance();
        Companion_getInstance_20();
        var tmp1_fromBits = 1056964608 + m | 0;
        tmp$ret$0 = floatFromBits(tmp1_fromBits);
        var o = tmp$ret$0;
        o = o - Companion_getInstance_20().FP32_DENORMAL_FLOAT_1;
        return s === 0 ? o : -o;
      }
    } else {
      outM = m << 13;
      if (e === 31) {
        outE = 255;
        if (!(outM === 0)) {
          var tmp_0 = outM;
          Companion_getInstance_20();
          outM = tmp_0 | 4194304;
        }
      } else {
        Companion_getInstance_20();
        var tmp_1 = e - 15 | 0;
        Companion_getInstance_20();
        outE = tmp_1 + 127 | 0;
      }
    }
    var tmp_2 = s << 16;
    var tmp_3 = outE;
    Companion_getInstance_20();
    var out = tmp_2 | tmp_3 << 23 | outM;
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp2_fromBits = FloatCompanionObject_getInstance();
    tmp$ret$1 = floatFromBits(out);
    return tmp$ret$1;
  }
  function Float16__toDouble_impl_915zuo($this) {
    return Float16__toFloat_impl_6i8dal($this);
  }
  function Float16__toBits_impl_k7yqp7($this) {
    var tmp;
    if (Float16__isNaN_impl_8e8jh($this)) {
      tmp = _Float16___get_halfValue__impl__89tmwx(Companion_getInstance_20().NaN_1);
    } else {
      tmp = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    }
    return tmp;
  }
  function Float16__toRawBits_impl_4w2cf9($this) {
    return _Float16___get_halfValue__impl__89tmwx($this) & 65535;
  }
  function Float16__toString_impl_at3wqo($this) {
    return Float16__toFloat_impl_6i8dal($this).toString();
  }
  function Float16__compareTo_impl_vr2ku($this, other) {
    if (Float16__isNaN_impl_8e8jh($this)) {
      return Float16__isNaN_impl_8e8jh(other) ? 0 : 1;
    } else if (Float16__isNaN_impl_8e8jh(other)) {
      return -1;
    }
    return compareTo(toCompareValue(Companion_getInstance_20(), _Float16___get_halfValue__impl__89tmwx($this)), toCompareValue(Companion_getInstance_20(), _Float16___get_halfValue__impl__89tmwx(other)));
  }
  function Float16__compareTo_impl_vr2ku_0($this, other) {
    var tmp = $this.halfValue_1;
    return Float16__compareTo_impl_vr2ku(tmp, other instanceof Float16 ? other.halfValue_1 : THROW_CCE());
  }
  function _Float16___get_sign__impl__t10b9g($this) {
    if (Float16__isNaN_impl_8e8jh($this)) {
      return Companion_getInstance_20().NaN_1;
    }
    if (Float16__compareTo_impl_vr2ku($this, Companion_getInstance_20().NegativeZero_1) < 0)
      return Companion_getInstance_20().NegativeOne_1;
    else if (Float16__compareTo_impl_vr2ku($this, Companion_getInstance_20().PositiveZero_1) > 0)
      return Companion_getInstance_20().One_1;
    else
      return $this;
  }
  function Float16__withSign_impl_b0tr55($this, sign) {
    var tmp = _Float16___get_halfValue__impl__89tmwx(sign);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32768;
    var tmp_1 = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    return _Float16___init__impl__fckrew(toShort(tmp_0 | tmp_1 & 32767));
  }
  function Float16__absoluteValue_impl_nv6ulo($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    return _Float16___init__impl__fckrew(toShort(tmp & 32767));
  }
  function Float16__round_impl_4qwlz4($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
      result = result | 15360 & (e >= 14336 ? 65535 : 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (1 << (e - 1 | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function Float16__ceil_impl_6fo2k9($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
      result = result | 15360 & (-(~(bits >> 15) & (!(e === 0) ? 1 : 0)) | 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (mask & ((bits >> 15) - 1 | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function Float16__floor_impl_rpasqm($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
      result = result | 15360 & (bits > 32768 ? 65535 : 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (mask & (-(bits >> 15) | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function Float16__trunc_impl_ud66ce($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      var tmp = result;
      Companion_getInstance_20();
      result = tmp & 32768;
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function _Float16___get_exponent__impl__3tixn6($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    var tmp_0 = tmp >>> 10 | 0;
    Companion_getInstance_20();
    var tmp_1 = tmp_0 & 31;
    Companion_getInstance_20();
    return tmp_1 - 15 | 0;
  }
  function _Float16___get_significand__impl__ku8yuy($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    return tmp & 1023;
  }
  function Float16__isNaN_impl_8e8jh($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32767;
    Companion_getInstance_20();
    return tmp_0 > 31744;
  }
  function Float16__isInfinite_impl_9h5mgi($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32767;
    Companion_getInstance_20();
    return tmp_0 === 31744;
  }
  function Float16__isFinite_impl_8t6ust($this) {
    var tmp = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    var tmp_0 = tmp & 32767;
    Companion_getInstance_20();
    return !(tmp_0 === 31744);
  }
  function Float16__isNormalized_impl_l312k5($this) {
    var tmp;
    var tmp_0 = _Float16___get_halfValue__impl__89tmwx($this);
    Companion_getInstance_20();
    if (!((tmp_0 & 31744) === 0)) {
      var tmp_1 = _Float16___get_halfValue__impl__89tmwx($this);
      Companion_getInstance_20();
      var tmp_2 = tmp_1 & 31744;
      Companion_getInstance_20();
      tmp = !(tmp_2 === 31744);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Float16__toHexString_impl_o1d02l($this) {
    var o = StringBuilder_init_$Create$();
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    Companion_getInstance_20();
    var s = bits >>> 15 | 0;
    Companion_getInstance_20();
    var tmp = bits >>> 10 | 0;
    Companion_getInstance_20();
    var e = tmp & 31;
    Companion_getInstance_20();
    var m = bits & 1023;
    if (e === 31) {
      if (m === 0) {
        if (!(s === 0)) {
          o.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
        }
        o.append_ssq29y_k$('Infinity');
      } else {
        o.append_ssq29y_k$('NaN');
      }
    } else {
      if (s === 1) {
        o.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
      }
      if (e === 0) {
        if (m === 0) {
          o.append_ssq29y_k$('0x0.0p0');
        } else {
          o.append_ssq29y_k$('0x0.');
          var significand = toString_0(m, 16);
          var tmp$ret$1;
          // Inline function 'kotlin.text.replaceFirst' call
          var tmp$ret$0;
          // Inline function 'kotlin.text.toRegex' call
          tmp$ret$0 = Regex_init_$Create$('0{2,}$');
          var tmp0_replaceFirst = tmp$ret$0;
          tmp$ret$1 = tmp0_replaceFirst.replaceFirst_hwe6o0_k$(significand, '');
          o.append_ssq29y_k$(tmp$ret$1);
          o.append_ssq29y_k$('p-14');
        }
      } else {
        o.append_ssq29y_k$('0x1.');
        var significand_0 = toString_0(m, 16);
        var tmp$ret$3;
        // Inline function 'kotlin.text.replaceFirst' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.toRegex' call
        tmp$ret$2 = Regex_init_$Create$('0{2,}$');
        var tmp1_replaceFirst = tmp$ret$2;
        tmp$ret$3 = tmp1_replaceFirst.replaceFirst_hwe6o0_k$(significand_0, '');
        o.append_ssq29y_k$(tmp$ret$3);
        o.append_t8oh9e_k$(_Char___init__impl__6a9atx(112));
        Companion_getInstance_20();
        o.append_ssq29y_k$((e - 15 | 0).toString());
      }
    }
    return o.toString();
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.Size_1 = 16;
    this.Epsilon_1 = _Float16___init__impl__fckrew(5120);
    this.MaxExponent_1 = 15;
    this.MinExponent_1 = -14;
    this.LowestValue_1 = _Float16___init__impl__fckrew(-1025);
    this.MaxValue_1 = _Float16___init__impl__fckrew(31743);
    this.MinNormal_1 = _Float16___init__impl__fckrew(1024);
    this.MinValue_1 = _Float16___init__impl__fckrew(1);
    this.NaN_1 = _Float16___init__impl__fckrew(32256);
    this.NegativeInfinity_1 = _Float16___init__impl__fckrew(-1024);
    this.NegativeZero_1 = _Float16___init__impl__fckrew(-32768);
    this.PositiveInfinity_1 = _Float16___init__impl__fckrew(31744);
    this.PositiveZero_1 = _Float16___init__impl__fckrew(0);
    this.One_1 = _Float16___init__impl__fckrew_0(1.0);
    this.NegativeOne_1 = _Float16___init__impl__fckrew_0(-1.0);
    this.FP16_SIGN_SHIFT_1 = 15;
    this.FP16_SIGN_MASK_1 = 32768;
    this.FP16_EXPONENT_SHIFT_1 = 10;
    this.FP16_EXPONENT_MASK_1 = 31;
    this.FP16_SIGNIFICAND_MASK_1 = 1023;
    this.FP16_EXPONENT_BIAS_1 = 15;
    this.FP16_COMBINED_1 = 32767;
    this.FP16_EXPONENT_MAX_1 = 31744;
    this.FP32_SIGN_SHIFT_1 = 31;
    this.FP32_EXPONENT_SHIFT_1 = 23;
    this.FP32_EXPONENT_MASK_1 = 255;
    this.FP32_SIGNIFICAND_MASK_1 = 8388607;
    this.FP32_EXPONENT_BIAS_1 = 127;
    this.FP32_QNAN_MASK_1 = 4194304;
    this.FP32_DENORMAL_MAGIC_1 = 1056964608;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = 1056964608;
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp.FP32_DENORMAL_FLOAT_1 = tmp$ret$0;
  }
  protoOf(Companion_5).get_Size_wo9w8a_k$ = function () {
    return this.Size_1;
  };
  protoOf(Companion_5).get_Epsilon_uqs4fs_k$ = function () {
    return this.Epsilon_1;
  };
  protoOf(Companion_5).get_MaxExponent_rspx06_k$ = function () {
    return this.MaxExponent_1;
  };
  protoOf(Companion_5).get_MinExponent_w12emw_k$ = function () {
    return this.MinExponent_1;
  };
  protoOf(Companion_5).get_LowestValue_trry71_k$ = function () {
    return this.LowestValue_1;
  };
  protoOf(Companion_5).get_MaxValue_n7sqoz_k$ = function () {
    return this.MaxValue_1;
  };
  protoOf(Companion_5).get_MinNormal_5b73h3_k$ = function () {
    return this.MinNormal_1;
  };
  protoOf(Companion_5).get_MinValue_webzhr_k$ = function () {
    return this.MinValue_1;
  };
  protoOf(Companion_5).get_NaN_11glfr_k$ = function () {
    return this.NaN_1;
  };
  protoOf(Companion_5).get_NegativeInfinity_d523fx_k$ = function () {
    return this.NegativeInfinity_1;
  };
  protoOf(Companion_5).get_NegativeZero_isdqb1_k$ = function () {
    return this.NegativeZero_1;
  };
  protoOf(Companion_5).get_PositiveInfinity_6gf60h_k$ = function () {
    return this.PositiveInfinity_1;
  };
  protoOf(Companion_5).get_PositiveZero_op9tfz_k$ = function () {
    return this.PositiveZero_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_20() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Float16__hashCode_impl_ay2027($this) {
    return $this;
  }
  function Float16__equals_impl_7m8a8d($this, other) {
    if (!(other instanceof Float16))
      return false;
    var tmp0_other_with_cast = other instanceof Float16 ? other.halfValue_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function Float16(halfValue) {
    Companion_getInstance_20();
    this.halfValue_1 = halfValue;
  }
  protoOf(Float16).toString = function () {
    return Float16__toString_impl_at3wqo(this.halfValue_1);
  };
  protoOf(Float16).compareTo_pe5tm2_k$ = function (other) {
    return Float16__compareTo_impl_vr2ku(this.halfValue_1, other);
  };
  protoOf(Float16).compareTo_6thzaj_k$ = function (other) {
    return Float16__compareTo_impl_vr2ku_0(this, other);
  };
  protoOf(Float16).hashCode = function () {
    return Float16__hashCode_impl_ay2027(this.halfValue_1);
  };
  protoOf(Float16).equals = function (other) {
    return Float16__equals_impl_7m8a8d(this.halfValue_1, other);
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  var Companion_instance_6;
  function Companion_getInstance_21() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ImageBitmap() {
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function _ImageBitmapConfig___get_value__impl__fqx4u7($this) {
    return $this;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.Argb8888__1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.Alpha8__1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.Rgb565__1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.F16__1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.Gpu_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  protoOf(Companion_7).get_Argb8888_tpu17z_k$ = function () {
    return this.Argb8888__1;
  };
  protoOf(Companion_7).get_Alpha8_zceb6n_k$ = function () {
    return this.Alpha8__1;
  };
  protoOf(Companion_7).get_Rgb565_i09itw_k$ = function () {
    return this.Rgb565__1;
  };
  protoOf(Companion_7).get_F16_f3achu_k$ = function () {
    return this.F16__1;
  };
  protoOf(Companion_7).get_Gpu_p1fzpd_k$ = function () {
    return this.Gpu_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_22() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_22().Argb8888__1 ? 'Argb8888' : tmp0_subject === Companion_getInstance_22().Alpha8__1 ? 'Alpha8' : tmp0_subject === Companion_getInstance_22().Rgb565__1 ? 'Rgb565' : tmp0_subject === Companion_getInstance_22().F16__1 ? 'F16' : tmp0_subject === Companion_getInstance_22().Gpu_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    var tmp0_other_with_cast = other instanceof ImageBitmapConfig ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_22();
    this.value_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.value_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.value_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.value_1, other);
  };
  function ImageBitmap_0(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_22().Argb8888__1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__get_impl_xogbpk($this, row, column) {
    return _Matrix___get_values__impl__fblr7b($this)[imul(row, 4) + column | 0];
  }
  function Matrix__set_impl_s2l54c($this, row, column, v) {
    _Matrix___get_values__impl__fblr7b($this)[imul(row, 4) + column | 0] = v;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    var x = _Offset___get_x__impl__xvi35n(point);
    var y = _Offset___get_y__impl__8bzhra(point);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[3];
    var tmp = tmp$ret$0 * x;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[7];
    var tmp_0 = tmp + tmp$ret$1 * y;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[15];
    var z = tmp_0 + tmp$ret$2;
    var inverseZ = 1 / z;
    var pZ = isFinite(inverseZ) ? inverseZ : 0.0;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[0];
    var tmp_1 = tmp$ret$3 * x;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var tmp_2 = tmp_1 + tmp$ret$4 * y;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[12];
    var tmp_3 = pZ * (tmp_2 + tmp$ret$5);
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[1];
    var tmp_4 = tmp$ret$6 * x;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[5];
    var tmp_5 = tmp_4 + tmp$ret$7 * y;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[13];
    return Offset_0(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$()));
    var p1 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_left_woprgw_k$(), rect.get_bottom_bj8ras_k$()));
    var p3 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_right_ixz7xv_k$(), rect.get_top_18ivbo_k$()));
    var p4 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$()));
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = _Offset___get_x__impl__xvi35n(p0);
    var tmp1_min = _Offset___get_x__impl__xvi35n(p1);
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    var tmp4_min = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp2_min = _Offset___get_x__impl__xvi35n(p3);
    var tmp3_min = _Offset___get_x__impl__xvi35n(p4);
    tmp$ret$1 = Math.min(tmp2_min, tmp3_min);
    var tmp5_min = tmp$ret$1;
    tmp$ret$2 = Math.min(tmp4_min, tmp5_min);
    var left = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$3;
    // Inline function 'kotlin.math.min' call
    var tmp6_min = _Offset___get_y__impl__8bzhra(p0);
    var tmp7_min = _Offset___get_y__impl__8bzhra(p1);
    tmp$ret$3 = Math.min(tmp6_min, tmp7_min);
    var tmp10_min = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.min' call
    var tmp8_min = _Offset___get_y__impl__8bzhra(p3);
    var tmp9_min = _Offset___get_y__impl__8bzhra(p4);
    tmp$ret$4 = Math.min(tmp8_min, tmp9_min);
    var tmp11_min = tmp$ret$4;
    tmp$ret$5 = Math.min(tmp10_min, tmp11_min);
    var top = tmp$ret$5;
    var tmp$ret$8;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$6;
    // Inline function 'kotlin.math.max' call
    var tmp12_max = _Offset___get_x__impl__xvi35n(p0);
    var tmp13_max = _Offset___get_x__impl__xvi35n(p1);
    tmp$ret$6 = Math.max(tmp12_max, tmp13_max);
    var tmp16_max = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'kotlin.math.max' call
    var tmp14_max = _Offset___get_x__impl__xvi35n(p3);
    var tmp15_max = _Offset___get_x__impl__xvi35n(p4);
    tmp$ret$7 = Math.max(tmp14_max, tmp15_max);
    var tmp17_max = tmp$ret$7;
    tmp$ret$8 = Math.max(tmp16_max, tmp17_max);
    var right = tmp$ret$8;
    var tmp$ret$11;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$9;
    // Inline function 'kotlin.math.max' call
    var tmp18_max = _Offset___get_y__impl__8bzhra(p0);
    var tmp19_max = _Offset___get_y__impl__8bzhra(p1);
    tmp$ret$9 = Math.max(tmp18_max, tmp19_max);
    var tmp22_max = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'kotlin.math.max' call
    var tmp20_max = _Offset___get_y__impl__8bzhra(p3);
    var tmp21_max = _Offset___get_y__impl__8bzhra(p4);
    tmp$ret$10 = Math.max(tmp20_max, tmp21_max);
    var tmp23_max = tmp$ret$10;
    tmp$ret$11 = Math.max(tmp22_max, tmp23_max);
    var bottom = tmp$ret$11;
    return new Rect(left, top, right, bottom);
  }
  function Matrix__map_impl_7meu7m_1($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$()));
    var p1 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_left_woprgw_k$(), rect.get_bottom_bj8ras_k$()));
    var p3 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_right_ixz7xv_k$(), rect.get_top_18ivbo_k$()));
    var p4 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$()));
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = _Offset___get_x__impl__xvi35n(p0);
    var tmp1_min = _Offset___get_x__impl__xvi35n(p1);
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    var tmp4_min = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp2_min = _Offset___get_x__impl__xvi35n(p3);
    var tmp3_min = _Offset___get_x__impl__xvi35n(p4);
    tmp$ret$1 = Math.min(tmp2_min, tmp3_min);
    var tmp5_min = tmp$ret$1;
    tmp$ret$2 = Math.min(tmp4_min, tmp5_min);
    rect.set_left_i6srx5_k$(tmp$ret$2);
    var tmp$ret$5;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$3;
    // Inline function 'kotlin.math.min' call
    var tmp6_min = _Offset___get_y__impl__8bzhra(p0);
    var tmp7_min = _Offset___get_y__impl__8bzhra(p1);
    tmp$ret$3 = Math.min(tmp6_min, tmp7_min);
    var tmp10_min = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.math.min' call
    var tmp8_min = _Offset___get_y__impl__8bzhra(p3);
    var tmp9_min = _Offset___get_y__impl__8bzhra(p4);
    tmp$ret$4 = Math.min(tmp8_min, tmp9_min);
    var tmp11_min = tmp$ret$4;
    tmp$ret$5 = Math.min(tmp10_min, tmp11_min);
    rect.set_top_62laxx_k$(tmp$ret$5);
    var tmp$ret$8;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$6;
    // Inline function 'kotlin.math.max' call
    var tmp12_max = _Offset___get_x__impl__xvi35n(p0);
    var tmp13_max = _Offset___get_x__impl__xvi35n(p1);
    tmp$ret$6 = Math.max(tmp12_max, tmp13_max);
    var tmp16_max = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'kotlin.math.max' call
    var tmp14_max = _Offset___get_x__impl__xvi35n(p3);
    var tmp15_max = _Offset___get_x__impl__xvi35n(p4);
    tmp$ret$7 = Math.max(tmp14_max, tmp15_max);
    var tmp17_max = tmp$ret$7;
    tmp$ret$8 = Math.max(tmp16_max, tmp17_max);
    rect.set_right_uydszm_k$(tmp$ret$8);
    var tmp$ret$11;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$9;
    // Inline function 'kotlin.math.max' call
    var tmp18_max = _Offset___get_y__impl__8bzhra(p0);
    var tmp19_max = _Offset___get_y__impl__8bzhra(p1);
    tmp$ret$9 = Math.max(tmp18_max, tmp19_max);
    var tmp22_max = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'kotlin.math.max' call
    var tmp20_max = _Offset___get_y__impl__8bzhra(p3);
    var tmp21_max = _Offset___get_y__impl__8bzhra(p4);
    tmp$ret$10 = Math.max(tmp20_max, tmp21_max);
    var tmp23_max = tmp$ret$10;
    tmp$ret$11 = Math.max(tmp22_max, tmp23_max);
    rect.set_bottom_y9ard7_k$(tmp$ret$11);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot_0($this, 0, m, 0);
    var v01 = dot_0($this, 0, m, 1);
    var v02 = dot_0($this, 0, m, 2);
    var v03 = dot_0($this, 0, m, 3);
    var v10 = dot_0($this, 1, m, 0);
    var v11 = dot_0($this, 1, m, 1);
    var v12 = dot_0($this, 1, m, 2);
    var v13 = dot_0($this, 1, m, 3);
    var v20 = dot_0($this, 2, m, 0);
    var v21 = dot_0($this, 2, m, 1);
    var v22 = dot_0($this, 2, m, 2);
    var v23 = dot_0($this, 2, m, 3);
    var v30 = dot_0($this, 3, m, 0);
    var v31 = dot_0($this, 3, m, 1);
    var v32 = dot_0($this, 3, m, 2);
    var v33 = dot_0($this, 3, m, 3);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[7] = v13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[8] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[9] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[11] = v23;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[15] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[1];
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[2];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[3];
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var tmp_4 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[6];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[7];
    var tmp_6 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[8];
    var tmp_7 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[9];
    var tmp_8 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b($this)[10];
    var tmp_9 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b($this)[11];
    var tmp_10 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b($this)[12];
    var tmp_11 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b($this)[13];
    var tmp_12 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b($this)[14];
    var tmp_13 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__invert_impl_9xyo46($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[0];
    var a00 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[1];
    var a01 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[3];
    var a03 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var a10 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var a11 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[7];
    var a13 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[8];
    var a20 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[9];
    var a21 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b($this)[10];
    var a22 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b($this)[11];
    var a23 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b($this)[12];
    var a30 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b($this)[13];
    var a31 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b($this)[14];
    var a32 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    var a33 = tmp$ret$15;
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (det === 0.0) {
      return Unit_getInstance();
    }
    var invDet = 1.0 / det;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp0_set = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[0] = tmp0_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp1_set = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[1] = tmp1_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp2_set = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[2] = tmp2_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp3_set = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[3] = tmp3_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp4_set = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[4] = tmp4_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp5_set = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[5] = tmp5_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp6_set = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[6] = tmp6_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp7_set = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[7] = tmp7_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp8_set = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[8] = tmp8_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp9_set = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[9] = tmp9_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp10_set = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[10] = tmp10_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp11_set = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[11] = tmp11_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp12_set = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[12] = tmp12_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp13_set = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[13] = tmp13_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp14_set = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[14] = tmp14_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp15_set = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[15] = tmp15_set;
  }
  function Matrix__reset_impl_4l49i7($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
            var tmp0_set = c === r ? 1.0 : 0.0;
            _Matrix___get_values__impl__fblr7b($this)[imul(r, 4) + c | 0] = tmp0_set;
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__setFrom_impl_5fylsu($this, matrix) {
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _Matrix___get_values__impl__fblr7b($this)[i] = _Matrix___get_values__impl__fblr7b(matrix)[i];
      }
       while (inductionVariable <= 15);
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    tmp$ret$0 = Math.cos(tmp0_cos);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    tmp$ret$1 = Math.sin(tmp1_sin);
    var s = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[1];
    var a01 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$3;
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[5];
    var a11 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$5;
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[9];
    var a21 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[10];
    var a22 = tmp$ret$7;
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[13];
    var a31 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[14];
    var a32 = tmp$ret$9;
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[9] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    tmp$ret$0 = Math.cos(tmp0_cos);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    tmp$ret$1 = Math.sin(tmp1_sin);
    var s = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[0];
    var a00 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$3;
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[4];
    var a10 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$5;
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[8];
    var a20 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[10];
    var a22 = tmp$ret$7;
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[12];
    var a30 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[14];
    var a32 = tmp$ret$9;
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[8] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    tmp$ret$0 = Math.cos(tmp0_cos);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    tmp$ret$1 = Math.sin(tmp1_sin);
    var s = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[0];
    var a00 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[4];
    var a10 = tmp$ret$3;
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[1];
    var a01 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var a11 = tmp$ret$5;
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[2];
    var a02 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[6];
    var a12 = tmp$ret$7;
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[3];
    var a03 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[7];
    var a13 = tmp$ret$9;
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[7] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    var tmp0_array = $this;
    var tmp1_index0 = 0;
    var tmp2_index1 = 0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b(tmp0_array)[imul(tmp1_index0, 4) + tmp2_index1 | 0];
    var tmp0_set = tmp$ret$0 * x;
    _Matrix___get_values__impl__fblr7b(tmp0_array)[imul(tmp1_index0, 4) + tmp2_index1 | 0] = tmp0_set;
    var tmp3_array = $this;
    var tmp4_index0 = 0;
    var tmp5_index1 = 1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b(tmp3_array)[imul(tmp4_index0, 4) + tmp5_index1 | 0];
    var tmp1_set = tmp$ret$1 * x;
    _Matrix___get_values__impl__fblr7b(tmp3_array)[imul(tmp4_index0, 4) + tmp5_index1 | 0] = tmp1_set;
    var tmp6_array = $this;
    var tmp7_index0 = 0;
    var tmp8_index1 = 2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b(tmp6_array)[imul(tmp7_index0, 4) + tmp8_index1 | 0];
    var tmp2_set = tmp$ret$2 * x;
    _Matrix___get_values__impl__fblr7b(tmp6_array)[imul(tmp7_index0, 4) + tmp8_index1 | 0] = tmp2_set;
    var tmp9_array = $this;
    var tmp10_index0 = 0;
    var tmp11_index1 = 3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b(tmp9_array)[imul(tmp10_index0, 4) + tmp11_index1 | 0];
    var tmp3_set = tmp$ret$3 * x;
    _Matrix___get_values__impl__fblr7b(tmp9_array)[imul(tmp10_index0, 4) + tmp11_index1 | 0] = tmp3_set;
    var tmp12_array = $this;
    var tmp13_index0 = 1;
    var tmp14_index1 = 0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b(tmp12_array)[imul(tmp13_index0, 4) + tmp14_index1 | 0];
    var tmp4_set = tmp$ret$4 * y;
    _Matrix___get_values__impl__fblr7b(tmp12_array)[imul(tmp13_index0, 4) + tmp14_index1 | 0] = tmp4_set;
    var tmp15_array = $this;
    var tmp16_index0 = 1;
    var tmp17_index1 = 1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b(tmp15_array)[imul(tmp16_index0, 4) + tmp17_index1 | 0];
    var tmp5_set = tmp$ret$5 * y;
    _Matrix___get_values__impl__fblr7b(tmp15_array)[imul(tmp16_index0, 4) + tmp17_index1 | 0] = tmp5_set;
    var tmp18_array = $this;
    var tmp19_index0 = 1;
    var tmp20_index1 = 2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b(tmp18_array)[imul(tmp19_index0, 4) + tmp20_index1 | 0];
    var tmp6_set = tmp$ret$6 * y;
    _Matrix___get_values__impl__fblr7b(tmp18_array)[imul(tmp19_index0, 4) + tmp20_index1 | 0] = tmp6_set;
    var tmp21_array = $this;
    var tmp22_index0 = 1;
    var tmp23_index1 = 3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b(tmp21_array)[imul(tmp22_index0, 4) + tmp23_index1 | 0];
    var tmp7_set = tmp$ret$7 * y;
    _Matrix___get_values__impl__fblr7b(tmp21_array)[imul(tmp22_index0, 4) + tmp23_index1 | 0] = tmp7_set;
    var tmp24_array = $this;
    var tmp25_index0 = 2;
    var tmp26_index1 = 0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b(tmp24_array)[imul(tmp25_index0, 4) + tmp26_index1 | 0];
    var tmp8_set = tmp$ret$8 * z;
    _Matrix___get_values__impl__fblr7b(tmp24_array)[imul(tmp25_index0, 4) + tmp26_index1 | 0] = tmp8_set;
    var tmp27_array = $this;
    var tmp28_index0 = 2;
    var tmp29_index1 = 1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b(tmp27_array)[imul(tmp28_index0, 4) + tmp29_index1 | 0];
    var tmp9_set = tmp$ret$9 * z;
    _Matrix___get_values__impl__fblr7b(tmp27_array)[imul(tmp28_index0, 4) + tmp29_index1 | 0] = tmp9_set;
    var tmp30_array = $this;
    var tmp31_index0 = 2;
    var tmp32_index1 = 2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b(tmp30_array)[imul(tmp31_index0, 4) + tmp32_index1 | 0];
    var tmp10_set = tmp$ret$10 * z;
    _Matrix___get_values__impl__fblr7b(tmp30_array)[imul(tmp31_index0, 4) + tmp32_index1 | 0] = tmp10_set;
    var tmp33_array = $this;
    var tmp34_index0 = 2;
    var tmp35_index1 = 3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b(tmp33_array)[imul(tmp34_index0, 4) + tmp35_index1 | 0];
    var tmp11_set = tmp$ret$11 * z;
    _Matrix___get_values__impl__fblr7b(tmp33_array)[imul(tmp34_index0, 4) + tmp35_index1 | 0] = tmp11_set;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Matrix($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Matrix(tmp_1)).scale_4t98rx_k$.call(tmp_0, x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b($this)[0];
    var tmp = tmp$ret$0 * x;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b($this)[4];
    var tmp_0 = tmp + tmp$ret$1 * y;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b($this)[8];
    var tmp_1 = tmp_0 + tmp$ret$2 * z;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b($this)[12];
    var t1 = tmp_1 + tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b($this)[1];
    var tmp_2 = tmp$ret$4 * x;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b($this)[5];
    var tmp_3 = tmp_2 + tmp$ret$5 * y;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b($this)[9];
    var tmp_4 = tmp_3 + tmp$ret$6 * z;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b($this)[13];
    var t2 = tmp_4 + tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[2];
    var tmp_5 = tmp$ret$8 * x;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b($this)[6];
    var tmp_6 = tmp_5 + tmp$ret$9 * y;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b($this)[10];
    var tmp_7 = tmp_6 + tmp$ret$10 * z;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b($this)[14];
    var t3 = tmp_7 + tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b($this)[3];
    var tmp_8 = tmp$ret$12 * x;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b($this)[7];
    var tmp_9 = tmp_8 + tmp$ret$13 * y;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b($this)[11];
    var tmp_10 = tmp_9 + tmp$ret$14 * z;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    var t4 = tmp_10 + tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[15] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Matrix($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Matrix(tmp_1)).translate_klqng1_k$.call(tmp_0, x, y, z);
    }
    return tmp;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.ScaleX_1 = 0;
    this.SkewY_1 = 1;
    this.Perspective0__1 = 3;
    this.SkewX_1 = 4;
    this.ScaleY_1 = 5;
    this.Perspective1__1 = 7;
    this.ScaleZ_1 = 10;
    this.TranslateX_1 = 12;
    this.TranslateY_1 = 13;
    this.TranslateZ_1 = 14;
    this.Perspective2__1 = 15;
  }
  protoOf(Companion_8).get_ScaleX_48mlbr_k$ = function () {
    return this.ScaleX_1;
  };
  protoOf(Companion_8).get_SkewY_igyudi_k$ = function () {
    return this.SkewY_1;
  };
  protoOf(Companion_8).get_Perspective0_s6kzs3_k$ = function () {
    return this.Perspective0__1;
  };
  protoOf(Companion_8).get_SkewX_igyudh_k$ = function () {
    return this.SkewX_1;
  };
  protoOf(Companion_8).get_ScaleY_48mlbs_k$ = function () {
    return this.ScaleY_1;
  };
  protoOf(Companion_8).get_Perspective1_s6kzs2_k$ = function () {
    return this.Perspective1__1;
  };
  protoOf(Companion_8).get_ScaleZ_48mlbt_k$ = function () {
    return this.ScaleZ_1;
  };
  protoOf(Companion_8).get_TranslateX_folfnx_k$ = function () {
    return this.TranslateX_1;
  };
  protoOf(Companion_8).get_TranslateY_folfnw_k$ = function () {
    return this.TranslateY_1;
  };
  protoOf(Companion_8).get_TranslateZ_folfnv_k$ = function () {
    return this.TranslateZ_1;
  };
  protoOf(Companion_8).get_Perspective2_s6kzs1_k$ = function () {
    return this.Perspective2__1;
  };
  var Companion_instance_8;
  function Companion_getInstance_23() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.values_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    Companion_getInstance_23();
    this.values_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.values_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.values_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.values_1, other);
  };
  function dot_0(m1, row, m2, column) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b(m2)[0 + column | 0];
    var tmp_0 = tmp * tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b(m2)[4 + column | 0];
    var tmp_2 = tmp_0 + tmp_1 * tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b(m2)[8 + column | 0];
    var tmp_4 = tmp_2 + tmp_3 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b(m2)[12 + column | 0];
    return tmp_4 + tmp_5 * tmp$ret$7;
  }
  function isIdentity(_this__u8e3s4) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            var tmp$ret$0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
            tmp$ret$0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(row, 4) + column | 0];
            if (!(tmp$ret$0 === expected)) {
              return false;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.rect_1 = rect;
  }
  protoOf(Rectangle).get_rect_wotlbh_k$ = function () {
    return this.rect_1;
  };
  protoOf(Rectangle).get_bounds_bj99ku_k$ = function () {
    return this.rect_1;
  };
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.rect_1.equals(other.rect_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.rect_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.roundRect_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!hasSameCornerRadius(this.roundRect_1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      tmp0_apply.addRoundRect_kr3fpw_k$(this.roundRect_1);
      tmp$ret$0 = tmp0_apply;
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = null;
    }
    tmp.roundRectPath_1 = tmp_0;
  }
  protoOf(Rounded).get_roundRect_8fhall_k$ = function () {
    return this.roundRect_1;
  };
  protoOf(Rounded).get_roundRectPath_kvhz1q_k$ = function () {
    return this.roundRectPath_1;
  };
  protoOf(Rounded).get_bounds_bj99ku_k$ = function () {
    return get_boundingRect(this.roundRect_1);
  };
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.roundRect_1.equals(other.roundRect_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.roundRect_1.hashCode();
  };
  function Generic(path) {
    Outline.call(this);
    this.path_1 = path;
  }
  protoOf(Generic).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(Generic).get_bounds_bj99ku_k$ = function () {
    return this.path_1.getBounds_568lnv_k$();
  };
  protoOf(Generic).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Generic))
      return false;
    if (!equals(this.path_1, other.path_1))
      return false;
    return true;
  };
  protoOf(Generic).hashCode = function () {
    return hashCode(this.path_1);
  };
  function Outline() {
  }
  function hasSameCornerRadius(_this__u8e3s4) {
    var sameRadiusX = (_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_bottomLeftCornerRadius_na53na_k$()) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_bottomRightCornerRadius_vv4dft_k$()) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_bottomRightCornerRadius_vv4dft_k$()) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_topRightCornerRadius_h21xrz_k$()) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_topRightCornerRadius_h21xrz_k$()) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_topLeftCornerRadius_nzteym_k$()) : false;
    var sameRadiusY = (_CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_bottomLeftCornerRadius_na53na_k$()) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_bottomRightCornerRadius_vv4dft_k$()) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_bottomRightCornerRadius_vv4dft_k$()) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_topRightCornerRadius_h21xrz_k$()) : false) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_topRightCornerRadius_h21xrz_k$()) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_topLeftCornerRadius_nzteym_k$()) : false;
    return sameRadiusX ? sameRadiusY : false;
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().get_DefaultBlendMode_8kor9s_k$() : blendMode;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      var tmp0__anonymous__q1qw7t = outline.rect_1;
      _this__u8e3s4.drawRect_srg7q1_k$(color, topLeft(tmp0__anonymous__q1qw7t), size(tmp0__anonymous__q1qw7t), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.drawPath_vpl0ok_k$(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1__anonymous__uwfjfc = outline.roundRect_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1__anonymous__uwfjfc.get_bottomLeftCornerRadius_na53na_k$());
          var tmp0_topLeft = topLeft_0(tmp1__anonymous__uwfjfc);
          var tmp1_size = size_0(tmp1__anonymous__uwfjfc);
          var tmp2_cornerRadius = CornerRadius(radius);
          _this__u8e3s4.drawRoundRect_q7amlu_k$(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          var tmp2__anonymous__z9zvc9 = outline.path_1;
          _this__u8e3s4.drawPath_vpl0ok_k$(tmp2__anonymous__z9zvc9, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_44().get_DefaultBlendMode_8kor9s_k$() : blendMode;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      var tmp0__anonymous__q1qw7t = outline.rect_1;
      _this__u8e3s4.drawRect_4jm64w_k$(brush, topLeft(tmp0__anonymous__q1qw7t), size(tmp0__anonymous__q1qw7t), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.drawPath_vsb9f_k$(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1__anonymous__uwfjfc = outline.roundRect_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1__anonymous__uwfjfc.get_bottomLeftCornerRadius_na53na_k$());
          _this__u8e3s4.drawRoundRect_nkvmol_k$(brush, topLeft_0(tmp1__anonymous__uwfjfc), size_0(tmp1__anonymous__uwfjfc), CornerRadius(radius), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          var tmp2__anonymous__z9zvc9 = outline.path_1;
          _this__u8e3s4.drawPath_vsb9f_k$(tmp2__anonymous__z9zvc9, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  }
  function drawOutlineHelper(_this__u8e3s4, outline, drawRectBlock, drawRoundedRectBlock, drawPathBlock) {
    var tmp0_subject = outline;
    var tmp;
    if (tmp0_subject instanceof Rectangle) {
      tmp = drawRectBlock(_this__u8e3s4, outline.rect_1);
    } else {
      if (tmp0_subject instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          tmp_0 = drawPathBlock(_this__u8e3s4, path);
        } else {
          tmp_0 = drawRoundedRectBlock(_this__u8e3s4, outline.roundRect_1);
        }
        tmp = tmp_0;
      } else {
        if (tmp0_subject instanceof Generic) {
          tmp = drawPathBlock(_this__u8e3s4, outline.path_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    return Offset_0(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$());
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.get_width_j0q4yl_k$(), _this__u8e3s4.get_height_e7t92o_k$());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset_0(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$());
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.get_width_j0q4yl_k$(), _this__u8e3s4.get_height_e7t92o_k$());
  }
  function Paint() {
  }
  function get_DefaultAlpha() {
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function _get_value__a43j40_1($this) {
    return $this;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.Fill_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.Stroke_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  protoOf(Companion_9).get_Fill_xeknbt_k$ = function () {
    return this.Fill_1;
  };
  protoOf(Companion_9).get_Stroke_dv2xoc_k$ = function () {
    return this.Stroke_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_24() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function PaintingStyle__toString_impl_anxeq4($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_24().Fill_1 ? 'Fill' : tmp0_subject === Companion_getInstance_24().Stroke_1 ? 'Stroke' : 'Unknown';
  }
  function PaintingStyle__hashCode_impl_wf3biz($this) {
    return $this;
  }
  function PaintingStyle__equals_impl_r3webl($this, other) {
    if (!(other instanceof PaintingStyle))
      return false;
    var tmp0_other_with_cast = other instanceof PaintingStyle ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PaintingStyle(value) {
    Companion_getInstance_24();
    this.value_1 = value;
  }
  protoOf(PaintingStyle).toString = function () {
    return PaintingStyle__toString_impl_anxeq4(this.value_1);
  };
  protoOf(PaintingStyle).hashCode = function () {
    return PaintingStyle__hashCode_impl_wf3biz(this.value_1);
  };
  protoOf(PaintingStyle).equals = function (other) {
    return PaintingStyle__equals_impl_r3webl(this.value_1, other);
  };
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).combine_ydees8_k$ = function (operation, path1, path2) {
    var path = Path_0();
    if (path.op_eh4rey_k$(path1, path2, operation)) {
      return path;
    }
    throw IllegalArgumentException_init_$Create$('Path.combine() failed.  This may be due an invalid path; in particular, check for NaN values.');
  };
  var Companion_instance_10;
  function Companion_getInstance_25() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function Path() {
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).cornerPathEffect_fpocxv_k$ = function (radius) {
    return actualCornerPathEffect(radius);
  };
  protoOf(Companion_11).dashPathEffect_iz0b5x_k$ = function (intervals, phase) {
    return actualDashPathEffect(intervals, phase);
  };
  protoOf(Companion_11).dashPathEffect$default_de05s1_k$ = function (intervals, phase, $super) {
    phase = phase === VOID ? 0.0 : phase;
    return $super === VOID ? this.dashPathEffect_iz0b5x_k$(intervals, phase) : $super.dashPathEffect_iz0b5x_k$.call(this, intervals, phase);
  };
  protoOf(Companion_11).chainPathEffect_8y4kg7_k$ = function (outer, inner) {
    return actualChainPathEffect(outer, inner);
  };
  protoOf(Companion_11).stampedPathEffect_uzafgs_k$ = function (shape, advance, phase, style) {
    return actualStampedPathEffect(shape, advance, phase, style);
  };
  var Companion_instance_11;
  function Companion_getInstance_26() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function PathEffect() {
  }
  function _StampedPathEffectStyle___init__impl__ekt0so(value) {
    return value;
  }
  function _get_value__a43j40_2($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.Translate_1 = _StampedPathEffectStyle___init__impl__ekt0so(0);
    this.Rotate_1 = _StampedPathEffectStyle___init__impl__ekt0so(1);
    this.Morph_1 = _StampedPathEffectStyle___init__impl__ekt0so(2);
  }
  protoOf(Companion_12).get_Translate_oyad1i_k$ = function () {
    return this.Translate_1;
  };
  protoOf(Companion_12).get_Rotate_t1fpff_k$ = function () {
    return this.Rotate_1;
  };
  protoOf(Companion_12).get_Morph_35mk00_k$ = function () {
    return this.Morph_1;
  };
  var Companion_instance_12;
  function Companion_getInstance_27() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function StampedPathEffectStyle__toString_impl_nfgepk($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_27().Translate_1 ? 'Translate' : tmp0_subject === Companion_getInstance_27().Rotate_1 ? 'Rotate' : tmp0_subject === Companion_getInstance_27().Morph_1 ? 'Morph' : 'Unknown';
  }
  function StampedPathEffectStyle__hashCode_impl_puhqgp($this) {
    return $this;
  }
  function StampedPathEffectStyle__equals_impl_nbax4b($this, other) {
    if (!(other instanceof StampedPathEffectStyle))
      return false;
    var tmp0_other_with_cast = other instanceof StampedPathEffectStyle ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StampedPathEffectStyle(value) {
    Companion_getInstance_27();
    this.value_1 = value;
  }
  protoOf(StampedPathEffectStyle).toString = function () {
    return StampedPathEffectStyle__toString_impl_nfgepk(this.value_1);
  };
  protoOf(StampedPathEffectStyle).hashCode = function () {
    return StampedPathEffectStyle__hashCode_impl_puhqgp(this.value_1);
  };
  protoOf(StampedPathEffectStyle).equals = function (other) {
    return StampedPathEffectStyle__equals_impl_nbax4b(this.value_1, other);
  };
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function _get_value__a43j40_3($this) {
    return $this;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.NonZero_1 = _PathFillType___init__impl__d59lzz(0);
    this.EvenOdd_1 = _PathFillType___init__impl__d59lzz(1);
  }
  protoOf(Companion_13).get_NonZero_j4d1fu_k$ = function () {
    return this.NonZero_1;
  };
  protoOf(Companion_13).get_EvenOdd_pai4nq_k$ = function () {
    return this.EvenOdd_1;
  };
  var Companion_instance_13;
  function Companion_getInstance_28() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_28().NonZero_1 ? 'NonZero' : tmp0_subject === Companion_getInstance_28().EvenOdd_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    var tmp0_other_with_cast = other instanceof PathFillType ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_28();
    this.value_1 = value;
  }
  protoOf(PathFillType).toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.value_1);
  };
  protoOf(PathFillType).hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.value_1);
  };
  protoOf(PathFillType).equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.value_1, other);
  };
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function _get_value__a43j40_4($this) {
    return $this;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.Difference_1 = _PathOperation___init__impl__8ddeif(0);
    this.Intersect_1 = _PathOperation___init__impl__8ddeif(1);
    this.Union_1 = _PathOperation___init__impl__8ddeif(2);
    this.Xor_1 = _PathOperation___init__impl__8ddeif(3);
    this.ReverseDifference_1 = _PathOperation___init__impl__8ddeif(4);
  }
  protoOf(Companion_14).get_Difference_61syb0_k$ = function () {
    return this.Difference_1;
  };
  protoOf(Companion_14).get_Intersect_pr81lo_k$ = function () {
    return this.Intersect_1;
  };
  protoOf(Companion_14).get_Union_6aiks4_k$ = function () {
    return this.Union_1;
  };
  protoOf(Companion_14).get_Xor_ja5law_k$ = function () {
    return this.Xor_1;
  };
  protoOf(Companion_14).get_ReverseDifference_yow8fw_k$ = function () {
    return this.ReverseDifference_1;
  };
  var Companion_instance_14;
  function Companion_getInstance_29() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function PathOperation__toString_impl_z2c7a9($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_29().Difference_1 ? 'Difference' : tmp0_subject === Companion_getInstance_29().Intersect_1 ? 'Intersect' : tmp0_subject === Companion_getInstance_29().Union_1 ? 'Union' : tmp0_subject === Companion_getInstance_29().Xor_1 ? 'Xor' : tmp0_subject === Companion_getInstance_29().ReverseDifference_1 ? 'ReverseDifference' : 'Unknown';
  }
  function PathOperation__hashCode_impl_e7lxw0($this) {
    return $this;
  }
  function PathOperation__equals_impl_kfyq50($this, other) {
    if (!(other instanceof PathOperation))
      return false;
    var tmp0_other_with_cast = other instanceof PathOperation ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PathOperation(value) {
    Companion_getInstance_29();
    this.value_1 = value;
  }
  protoOf(PathOperation).toString = function () {
    return PathOperation__toString_impl_z2c7a9(this.value_1);
  };
  protoOf(PathOperation).hashCode = function () {
    return PathOperation__hashCode_impl_e7lxw0(this.value_1);
  };
  protoOf(PathOperation).equals = function (other) {
    return PathOperation__equals_impl_kfyq50(this.value_1, other);
  };
  function _PointMode___init__impl__mgo5cq(value) {
    return value;
  }
  function _get_value__a43j40_5($this) {
    return $this;
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.Points_1 = _PointMode___init__impl__mgo5cq(0);
    this.Lines_1 = _PointMode___init__impl__mgo5cq(1);
    this.Polygon_1 = _PointMode___init__impl__mgo5cq(2);
  }
  protoOf(Companion_15).get_Points_g9arr3_k$ = function () {
    return this.Points_1;
  };
  protoOf(Companion_15).get_Lines_pf6qy3_k$ = function () {
    return this.Lines_1;
  };
  protoOf(Companion_15).get_Polygon_n5et2y_k$ = function () {
    return this.Polygon_1;
  };
  var Companion_instance_15;
  function Companion_getInstance_30() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function PointMode__toString_impl_nuk5g2($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_30().Points_1 ? 'Points' : tmp0_subject === Companion_getInstance_30().Lines_1 ? 'Lines' : tmp0_subject === Companion_getInstance_30().Polygon_1 ? 'Polygon' : 'Unknown';
  }
  function PointMode__hashCode_impl_pfdzq7($this) {
    return $this;
  }
  function PointMode__equals_impl_r8q797($this, other) {
    if (!(other instanceof PointMode))
      return false;
    var tmp0_other_with_cast = other instanceof PointMode ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function PointMode(value) {
    Companion_getInstance_30();
    this.value_1 = value;
  }
  protoOf(PointMode).toString = function () {
    return PointMode__toString_impl_nuk5g2(this.value_1);
  };
  protoOf(PointMode).hashCode = function () {
    return PointMode__hashCode_impl_pfdzq7(this.value_1);
  };
  protoOf(PointMode).equals = function (other) {
    return PointMode__equals_impl_r8q797(this.value_1, other);
  };
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (properties_initialized_RectangleShape_kt_h73j90) {
    } else {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : tileMode;
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    colorStops = colorStops === VOID ? null : colorStops;
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.None_1 = new Shadow();
  }
  protoOf(Companion_16).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_16;
  function Companion_getInstance_31() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_31();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance().get_Zero_sctq3f_k$() : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.color_1 = color;
    this.offset_1 = offset;
    this.blurRadius_1 = blurRadius;
  }
  protoOf(Shadow).get_color_v34vrz_k$ = function () {
    return this.color_1;
  };
  protoOf(Shadow).get_offset_y9g6r4_k$ = function () {
    return this.offset_1;
  };
  protoOf(Shadow).get_blurRadius_r8jo0y_k$ = function () {
    return this.blurRadius_1;
  };
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!equals(this.offset_1, other.offset_1))
      return false;
    if (!(this.blurRadius_1 === other.blurRadius_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.color_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.offset_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.blurRadius_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + new Color(this.color_1) + ', offset=' + new Offset(this.offset_1) + ', blurRadius=' + this.blurRadius_1 + ')';
  };
  protoOf(Shadow).copy_rnsz8_k$ = function (color, offset, blurRadius) {
    return new Shadow(color, offset, blurRadius);
  };
  protoOf(Shadow).copy$default_3br38s_k$ = function (color, offset, blurRadius, $super) {
    color = color === VOID ? this.color_1 : color;
    offset = offset === VOID ? this.offset_1 : offset;
    blurRadius = blurRadius === VOID ? this.blurRadius_1 : blurRadius;
    return $super === VOID ? this.copy_rnsz8_k$(color, offset, blurRadius) : $super.copy_rnsz8_k$.call(this, new Color(color), new Offset(offset), blurRadius);
  };
  function Shape() {
  }
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function _get_value__a43j40_6($this) {
    return $this;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.Butt_1 = _StrokeCap___init__impl__kfgr27(0);
    this.Round_1 = _StrokeCap___init__impl__kfgr27(1);
    this.Square_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  protoOf(Companion_17).get_Butt_vf89me_k$ = function () {
    return this.Butt_1;
  };
  protoOf(Companion_17).get_Round_x6oq4t_k$ = function () {
    return this.Round_1;
  };
  protoOf(Companion_17).get_Square_xmkdw4_k$ = function () {
    return this.Square_1;
  };
  var Companion_instance_17;
  function Companion_getInstance_32() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_32().Butt_1 ? 'Butt' : tmp0_subject === Companion_getInstance_32().Round_1 ? 'Round' : tmp0_subject === Companion_getInstance_32().Square_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    var tmp0_other_with_cast = other instanceof StrokeCap ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_32();
    this.value_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.value_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.value_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.value_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function _get_value__a43j40_7($this) {
    return $this;
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.Miter_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.Round_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.Bevel_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  protoOf(Companion_18).get_Miter_rcwd8a_k$ = function () {
    return this.Miter_1;
  };
  protoOf(Companion_18).get_Round_ybuhov_k$ = function () {
    return this.Round_1;
  };
  protoOf(Companion_18).get_Bevel_1szraz_k$ = function () {
    return this.Bevel_1;
  };
  var Companion_instance_18;
  function Companion_getInstance_33() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_33().Miter_1 ? 'Miter' : tmp0_subject === Companion_getInstance_33().Round_1 ? 'Round' : tmp0_subject === Companion_getInstance_33().Bevel_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    var tmp0_other_with_cast = other instanceof StrokeJoin ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_33();
    this.value_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.value_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.value_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.value_1, other);
  };
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function _get_value__a43j40_8($this) {
    return $this;
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.Clamp_1 = _TileMode___init__impl__syhjao(0);
    this.Repeated_1 = _TileMode___init__impl__syhjao(1);
    this.Mirror_1 = _TileMode___init__impl__syhjao(2);
    this.Decal_1 = _TileMode___init__impl__syhjao(3);
  }
  protoOf(Companion_19).get_Clamp_q8g1jp_k$ = function () {
    return this.Clamp_1;
  };
  protoOf(Companion_19).get_Repeated_k0uuck_k$ = function () {
    return this.Repeated_1;
  };
  protoOf(Companion_19).get_Mirror_3kopi9_k$ = function () {
    return this.Mirror_1;
  };
  protoOf(Companion_19).get_Decal_z0hn4z_k$ = function () {
    return this.Decal_1;
  };
  var Companion_instance_19;
  function Companion_getInstance_34() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_34().Clamp_1 ? 'Clamp' : tmp0_subject === Companion_getInstance_34().Repeated_1 ? 'Repeated' : tmp0_subject === Companion_getInstance_34().Mirror_1 ? 'Mirror' : tmp0_subject === Companion_getInstance_34().Decal_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    var tmp0_other_with_cast = other instanceof TileMode ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_34();
    this.value_1 = value;
  }
  protoOf(TileMode).toString = function () {
    return TileMode__toString_impl_tlb7f4(this.value_1);
  };
  protoOf(TileMode).hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.value_1);
  };
  protoOf(TileMode).equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.value_1, other);
  };
  function _VertexMode___init__impl__btp65i(value) {
    return value;
  }
  function _get_value__a43j40_9($this) {
    return $this;
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.Triangles_1 = _VertexMode___init__impl__btp65i(0);
    this.TriangleStrip_1 = _VertexMode___init__impl__btp65i(1);
    this.TriangleFan_1 = _VertexMode___init__impl__btp65i(2);
  }
  protoOf(Companion_20).get_Triangles_3v3h75_k$ = function () {
    return this.Triangles_1;
  };
  protoOf(Companion_20).get_TriangleStrip_fj1wve_k$ = function () {
    return this.TriangleStrip_1;
  };
  protoOf(Companion_20).get_TriangleFan_hugsxb_k$ = function () {
    return this.TriangleFan_1;
  };
  var Companion_instance_20;
  function Companion_getInstance_35() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function VertexMode__toString_impl_ujymw6($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_35().Triangles_1 ? 'Triangles' : tmp0_subject === Companion_getInstance_35().TriangleStrip_1 ? 'TriangleStrip' : tmp0_subject === Companion_getInstance_35().TriangleFan_1 ? 'TriangleFan' : 'Unknown';
  }
  function VertexMode__hashCode_impl_ipzia3($this) {
    return $this;
  }
  function VertexMode__equals_impl_k7ox9j($this, other) {
    if (!(other instanceof VertexMode))
      return false;
    var tmp0_other_with_cast = other instanceof VertexMode ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function VertexMode(value) {
    Companion_getInstance_35();
    this.value_1 = value;
  }
  protoOf(VertexMode).toString = function () {
    return VertexMode__toString_impl_ujymw6(this.value_1);
  };
  protoOf(VertexMode).hashCode = function () {
    return VertexMode__hashCode_impl_ipzia3(this.value_1);
  };
  protoOf(VertexMode).equals = function (other) {
    return VertexMode__equals_impl_k7ox9j(this.value_1, other);
  };
  function encodeColorList($this, colors) {
    var tmp = 0;
    var tmp_0 = colors.get_size_woubt6_k$();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Vertices.encodeColorList.<anonymous>' call
      tmp$ret$0 = toArgb(colors.get_fkrdnv_k$(tmp_2).value_1);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function encodePointList($this, points) {
    var tmp = 0;
    var tmp_0 = imul(points.get_size_woubt6_k$(), 2);
    var tmp_1 = new Float32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.Vertices.encodePointList.<anonymous>' call
      var pointIndex = tmp_2 / 2 | 0;
      var point = points.get_fkrdnv_k$(pointIndex).packedValue_1;
      var tmp_3;
      if ((tmp_2 % 2 | 0) === 0) {
        tmp_3 = _Offset___get_x__impl__xvi35n(point);
      } else {
        tmp_3 = _Offset___get_y__impl__8bzhra(point);
      }
      tmp$ret$0 = tmp_3;
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function Vertices$lambda($positions) {
    return function (it) {
      return it < 0 ? true : it >= $positions.get_size_woubt6_k$();
    };
  }
  function Vertices(vertexMode, positions, textureCoordinates, colors, indices) {
    this.vertexMode_1 = vertexMode;
    var outOfBounds = Vertices$lambda(positions);
    if (!(textureCoordinates.get_size_woubt6_k$() === positions.get_size_woubt6_k$()))
      throw IllegalArgumentException_init_$Create$('positions and textureCoordinates lengths must match.');
    if (!(colors.get_size_woubt6_k$() === positions.get_size_woubt6_k$()))
      throw IllegalArgumentException_init_$Create$('positions and colors lengths must match.');
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = indices.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = indices.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          if (outOfBounds(item)) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    if (tmp$ret$0)
      throw IllegalArgumentException_init_$Create$('indices values must be valid indices in the positions list.');
    this.positions_1 = encodePointList(this, positions);
    this.textureCoordinates_1 = encodePointList(this, textureCoordinates);
    this.colors_1 = encodeColorList(this, colors);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = indices.get_size_woubt6_k$();
    var tmp_2 = new Int16Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.graphics.Vertices.<anonymous>' call
      tmp$ret$1 = toShort(indices.get_fkrdnv_k$(tmp_3));
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.indices_1 = tmp_2;
  }
  protoOf(Vertices).get_vertexMode_afoau9_k$ = function () {
    return this.vertexMode_1;
  };
  protoOf(Vertices).get_positions_ya7scf_k$ = function () {
    return this.positions_1;
  };
  protoOf(Vertices).get_textureCoordinates_1i3vqh_k$ = function () {
    return this.textureCoordinates_1;
  };
  protoOf(Vertices).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(Vertices).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  function Adaptation$Companion$Bradford$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_21() {
    Companion_instance_21 = this;
    var tmp = this;
    tmp.Bradford_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.VonKries_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.Ciecat02__1 = new Adaptation$Companion$Ciecat02$1();
  }
  protoOf(Companion_21).get_Bradford_vb0mll_k$ = function () {
    return this.Bradford_1;
  };
  protoOf(Companion_21).get_VonKries_9ojdic_k$ = function () {
    return this.VonKries_1;
  };
  protoOf(Companion_21).get_Ciecat02_9csyjm_k$ = function () {
    return this.Ciecat02__1;
  };
  var Companion_instance_21;
  function Companion_getInstance_36() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function Adaptation(transform) {
    Companion_getInstance_36();
    this.transform_1 = transform;
  }
  protoOf(Adaptation).get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp0_unpackInt1 = _ColorModel___get_packedValue__impl__uvxrhj($this);
    tmp$ret$0 = tmp0_unpackInt1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    return tmp$ret$0;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = new Long(0, 3);
    tmp.Rgb_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$1 = new Long(1, 3);
    tmp_0.Xyz_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$2 = new Long(2, 3);
    tmp_1.Lab_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$3 = new Long(3, 4);
    tmp_2.Cmyk_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  protoOf(Companion_22).get_Rgb_hxm2yj_k$ = function () {
    return this.Rgb_1;
  };
  protoOf(Companion_22).get_Xyz_dr76iv_k$ = function () {
    return this.Xyz_1;
  };
  protoOf(Companion_22).get_Lab_uzchff_k$ = function () {
    return this.Lab_1;
  };
  protoOf(Companion_22).get_Cmyk_iotmf0_k$ = function () {
    return this.Cmyk_1;
  };
  var Companion_instance_22;
  function Companion_getInstance_37() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function ColorModel__toString_impl_msukd7($this) {
    var tmp0_subject = $this;
    return equals(tmp0_subject, Companion_getInstance_37().Rgb_1) ? 'Rgb' : equals(tmp0_subject, Companion_getInstance_37().Xyz_1) ? 'Xyz' : equals(tmp0_subject, Companion_getInstance_37().Lab_1) ? 'Lab' : equals(tmp0_subject, Companion_getInstance_37().Cmyk_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function ColorModel__equals_impl_dbkfqg($this, other) {
    if (!(other instanceof ColorModel))
      return false;
    var tmp0_other_with_cast = other instanceof ColorModel ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_37();
    this.packedValue_1 = packedValue;
  }
  protoOf(ColorModel).toString = function () {
    return ColorModel__toString_impl_msukd7(this.packedValue_1);
  };
  protoOf(ColorModel).hashCode = function () {
    return ColorModel__hashCode_impl_11onkc(this.packedValue_1);
  };
  protoOf(ColorModel).equals = function (other) {
    return ColorModel__equals_impl_dbkfqg(this.packedValue_1, other);
  };
  function ColorSpace_init_$Init$(name, model, $this) {
    Companion_getInstance_38();
    ColorSpace.call($this, name, model, -1);
    return $this;
  }
  function ColorSpace_init_$Create$(name, model) {
    return ColorSpace_init_$Init$(name, model, objectCreate(protoOf(ColorSpace)));
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.MinId_1 = -1;
    this.MaxId_1 = 63;
  }
  protoOf(Companion_23).get_MinId_idmyf8_k$ = function () {
    return this.MinId_1;
  };
  protoOf(Companion_23).get_MaxId_idi1xy_k$ = function () {
    return this.MaxId_1;
  };
  var Companion_instance_23;
  function Companion_getInstance_38() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function ColorSpace(name, model, id) {
    Companion_getInstance_38();
    this.name_1 = name;
    this.model_1 = model;
    this.id_1 = id;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.name_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    var tmp;
    Companion_getInstance_38();
    if (this.id_1 < -1) {
      tmp = true;
    } else {
      Companion_getInstance_38();
      tmp = this.id_1 > 63;
    }
    if (tmp) {
      Companion_getInstance_38();
      Companion_getInstance_38();
      throw IllegalArgumentException_init_$Create$('The id must be between ' + -1 + ' and ' + 63);
    }
  }
  protoOf(ColorSpace).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ColorSpace).get_model_rk6821_k$ = function () {
    return this.model_1;
  };
  protoOf(ColorSpace).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(ColorSpace).get_componentCount_ffrht1_k$ = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.model_1);
  };
  protoOf(ColorSpace).get_isSrgb_ew666l_k$ = function () {
    return false;
  };
  protoOf(ColorSpace).toXyz_htgd3k_k$ = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.toXyz_ox86g9_k$(tmp$ret$0);
  };
  protoOf(ColorSpace).toXy_sdu2b2_k$ = function (v0, v1, v2) {
    var xyz = this.toXyz_htgd3k_k$(v0, v1, v2);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = xyz[0];
    var tmp1_packFloats = xyz[1];
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1_0.shl_po5ip6_k$(32).or_s401rn_k$(v2_0.and_jhajnj_k$(new Long(-1, 0)));
    return tmp$ret$0;
  };
  protoOf(ColorSpace).toZ_3nx4hd_k$ = function (v0, v1, v2) {
    var xyz = this.toXyz_htgd3k_k$(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).xyzaToColor_orha54_k$ = function (x, y, z, a, colorSpace) {
    var colors = this.fromXyz_sxy01r_k$(x, y, z);
    return Color_0(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).fromXyz_sxy01r_k$ = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.model_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.fromXyz_idrdie_k$(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.name_1 + ' (id=' + this.id_1 + ', model=' + new ColorModel(this.model_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.id_1 === that.id_1))
      return false;
    return !(this.name_1 === that.name_1) ? false : equals(this.model_1, that.model_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.model_1) | 0;
    result = imul(31, result) + this.id_1 | 0;
    return result;
  };
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : destination;
    intent = intent === VOID ? Companion_getInstance_42().get_Perceptual_20219r_k$() : intent;
    if (_this__u8e3s4 === ColorSpaces_getInstance().get_Srgb_woa2g3_k$()) {
      if (destination === ColorSpaces_getInstance().get_Srgb_woa2g3_k$()) {
        return Companion_getInstance_39().get_SrgbIdentity_7ohf7j_k$();
      }
      if (destination === ColorSpaces_getInstance().get_Oklab_ierso8_k$() ? intent === Companion_getInstance_42().get_Perceptual_20219r_k$() : false) {
        return Companion_getInstance_39().get_SrgbToOklabPerceptual_ubj5w0_k$();
      }
    } else if ((_this__u8e3s4 === ColorSpaces_getInstance().get_Oklab_ierso8_k$() ? destination === ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : false) ? intent === Companion_getInstance_42().get_Perceptual_20219r_k$() : false) {
      return Companion_getInstance_39().get_OklabToSrgbPerceptual_iguhs6_k$();
    }
    if (_this__u8e3s4 === destination) {
      return Companion_getInstance_39().identity_orxv0l_k$(_this__u8e3s4);
    }
    var tmp;
    if (equals(_this__u8e3s4.model_1, Companion_getInstance_37().get_Rgb_hxm2yj_k$()) ? equals(destination.model_1, Companion_getInstance_37().get_Rgb_hxm2yj_k$()) : false) {
      var tmp_0 = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(_this__u8e3s4, destination, intent);
    }
    return tmp;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_36().get_Bradford_vb0mll_k$() : adaptation;
    if (equals(_this__u8e3s4.model_1, Companion_getInstance_37().get_Rgb_hxm2yj_k$())) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_1(rgb.get_whitePoint_g4n5ow_k$(), whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.toXyz_1tswm6_k$();
      var adaptationTransform = chromaticAdaptation(adaptation.get_transform_px941v_k$(), rgb.get_whitePoint_g4n5ow_k$().toXyz_1tswm6_k$(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.get_transform_px941v_k$());
      return Rgb_init_$Create$_7(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          var tmp$ret$0;
          // Inline function 'kotlin.math.abs' call
          var tmp0_abs = a[i] - b[i];
          tmp$ret$0 = Math.abs(tmp0_abs);
          tmp = tmp$ret$0 > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function compare_0(a, b) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    if (!(b == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = a.get_a_1mhr5k_k$() - b.get_a_1mhr5k_k$();
      tmp$ret$0 = Math.abs(tmp0_abs);
      tmp_5 = tmp$ret$0 < 0.001;
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = a.get_b_1mhr5l_k$() - b.get_b_1mhr5l_k$();
      tmp$ret$1 = Math.abs(tmp1_abs);
      tmp_4 = tmp$ret$1 < 0.001;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      var tmp$ret$2;
      // Inline function 'kotlin.math.abs' call
      var tmp2_abs = a.get_c_1mhr5m_k$() - b.get_c_1mhr5m_k$();
      tmp$ret$2 = Math.abs(tmp2_abs);
      tmp_3 = tmp$ret$2 < 0.001;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      var tmp$ret$3;
      // Inline function 'kotlin.math.abs' call
      var tmp3_abs = a.get_d_1mhr5n_k$() - b.get_d_1mhr5n_k$();
      tmp$ret$3 = Math.abs(tmp3_abs);
      tmp_2 = tmp$ret$3 < 0.002;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      var tmp$ret$4;
      // Inline function 'kotlin.math.abs' call
      var tmp4_abs = a.get_e_1mhr5o_k$() - b.get_e_1mhr5o_k$();
      tmp$ret$4 = Math.abs(tmp4_abs);
      tmp_1 = tmp$ret$4 < 0.001;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp$ret$5;
      // Inline function 'kotlin.math.abs' call
      var tmp5_abs = a.get_f_1mhr5p_k$() - b.get_f_1mhr5p_k$();
      tmp$ret$5 = Math.abs(tmp5_abs);
      tmp_0 = tmp$ret$5 < 0.001;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp$ret$6;
      // Inline function 'kotlin.math.abs' call
      var tmp6_abs = a.get_gamma_irsi2m_k$() - b.get_gamma_irsi2m_k$();
      tmp$ret$6 = Math.abs(tmp6_abs);
      tmp = tmp$ret$6 < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function mul3x3Float3_0(lhs, r0, r1, r2) {
    return lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
  }
  function mul3x3Float3_1(lhs, r0, r1, r2) {
    return lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
  }
  function mul3x3Float3_2(lhs, r0, r1, r2) {
    return lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
  }
  function compare_1(a, b) {
    if (a === b)
      return true;
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = a.get_x_1mhr67_k$() - b.get_x_1mhr67_k$();
    tmp$ret$0 = Math.abs(tmp0_abs);
    if (tmp$ret$0 < 0.001) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = a.get_y_1mhr68_k$() - b.get_y_1mhr68_k$();
      tmp$ret$1 = Math.abs(tmp1_abs);
      tmp = tmp$ret$1 < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    tmp$ret$0 = tmp0_floatArrayOf;
    var LMS = tmp$ret$0;
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / g;
      tmp$ret$0 = Math.pow(x, tmp0_pow);
      tmp = (tmp$ret$0 - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x - e;
      var tmp1_pow = 1.0 / g;
      tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
      tmp = (tmp$ret$0 - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = a * x + b;
      tmp$ret$0 = Math.pow(tmp0_pow, g);
      tmp = tmp$ret$0;
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = a * x + b;
      tmp$ret$0 = Math.pow(tmp0_pow, g);
      tmp = tmp$ret$0 + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function _get_NoneTransferParameters__hzx9fi($this) {
    return $this.NoneTransferParameters_1;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).invoke_z1dtyv_k$ = function (double) {
    return this.function_1(double);
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp.SrgbPrimaries_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    tmp_0.Ntsc1953Primaries_1 = tmp$ret$1;
    this.SrgbTransferParameters_1 = new TransferParameters(2.4, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.NoneTransferParameters_1 = new TransferParameters(2.2, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.Srgb_1 = Rgb_init_$Create$_3('sRGB IEC61966-2.1', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), this.SrgbTransferParameters_1, 0);
    this.LinearSrgb_1 = Rgb_init_$Create$_6('sRGB IEC61966-2.1 (Linear)', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), 1.0, 0.0, 1.0, 1);
    var tmp_1 = this;
    var tmp_2 = Illuminant_getInstance().get_D65_18jwbq_k$();
    var tmp_3 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_4 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_3);
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_1.ExtendedSrgb_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.SrgbPrimaries_1, tmp_2, null, tmp_4, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_5), -0.799, 2.399, this.SrgbTransferParameters_1, 2);
    this.LinearExtendedSrgb_1 = Rgb_init_$Create$_6('scRGB IEC 61966-2-2:2003', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_6.Bt709__1 = Rgb_init_$Create$_3('Rec. ITU-R BT.709-5', tmp$ret$2, Illuminant_getInstance().get_D65_18jwbq_k$(), new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 4);
    var tmp_7 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_7.Bt2020__1 = Rgb_init_$Create$_3('Rec. ITU-R BT.2020-1', tmp$ret$3, Illuminant_getInstance().get_D65_18jwbq_k$(), new TransferParameters(2.2222222222222223, 0.9096697898662786, 0.09033021013372146, 0.2222222222222222, 0.08145), 5);
    var tmp_8 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_8.DciP3__1 = Rgb_init_$Create$_6('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_9 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.DisplayP3__1 = Rgb_init_$Create$_3('Display P3', tmp$ret$5, Illuminant_getInstance().get_D65_18jwbq_k$(), this.SrgbTransferParameters_1, 7);
    this.Ntsc1953__1 = Rgb_init_$Create$_3('NTSC (1953)', this.Ntsc1953Primaries_1, Illuminant_getInstance().get_C_1mhr4q_k$(), new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 8);
    var tmp_10 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_10.SmpteC_1 = Rgb_init_$Create$_3('SMPTE-C RGB', tmp$ret$6, Illuminant_getInstance().get_D65_18jwbq_k$(), new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 9);
    var tmp_11 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_11.AdobeRgb_1 = Rgb_init_$Create$_6('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().get_D65_18jwbq_k$(), 2.2, 0.0, 1.0, 10);
    var tmp_12 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_12.ProPhotoRgb_1 = Rgb_init_$Create$_3('ROMM RGB ISO 22028-2:2013', tmp$ret$8, Illuminant_getInstance().get_D50_18jwcq_k$(), new TransferParameters(1.8, 1.0, 0.0, 0.0625, 0.031248), 11);
    var tmp_13 = this;
    var tmp$ret$9;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_13.Aces_1 = Rgb_init_$Create$_6('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().get_D60_18jwbv_k$(), 1.0, -65504.0, 65504.0, 12);
    var tmp_14 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_14.Acescg_1 = Rgb_init_$Create$_6('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().get_D60_18jwbv_k$(), 1.0, -65504.0, 65504.0, 13);
    this.CieXyz_1 = new Xyz('Generic XYZ', 14);
    this.CieLab_1 = new Lab('Generic L*a*b*', 15);
    this.Unspecified_1 = Rgb_init_$Create$_3('None', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), this.NoneTransferParameters_1, 16);
    this.Oklab_1 = new Oklab('Oklab', 17);
    var tmp_15 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [this.Srgb_1, this.LinearSrgb_1, this.ExtendedSrgb_1, this.LinearExtendedSrgb_1, this.Bt709__1, this.Bt2020__1, this.DciP3__1, this.DisplayP3__1, this.Ntsc1953__1, this.SmpteC_1, this.AdobeRgb_1, this.ProPhotoRgb_1, this.Aces_1, this.Acescg_1, this.CieXyz_1, this.CieLab_1, this.Unspecified_1, this.Oklab_1];
    var tmp$ret$12;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$11;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = tmp0_arrayOf;
    tmp$ret$12 = tmp$ret$11;
    tmp$ret$13 = tmp$ret$12;
    tmp_15.ColorSpacesArray_1 = tmp$ret$13;
  }
  protoOf(ColorSpaces).get_SrgbPrimaries_e57bel_k$ = function () {
    return this.SrgbPrimaries_1;
  };
  protoOf(ColorSpaces).get_Ntsc1953Primaries_s9kth_k$ = function () {
    return this.Ntsc1953Primaries_1;
  };
  protoOf(ColorSpaces).get_SrgbTransferParameters_mwzq88_k$ = function () {
    return this.SrgbTransferParameters_1;
  };
  protoOf(ColorSpaces).get_Srgb_woa2g3_k$ = function () {
    return this.Srgb_1;
  };
  protoOf(ColorSpaces).get_LinearSrgb_gaeay0_k$ = function () {
    return this.LinearSrgb_1;
  };
  protoOf(ColorSpaces).get_ExtendedSrgb_860058_k$ = function () {
    return this.ExtendedSrgb_1;
  };
  protoOf(ColorSpaces).get_LinearExtendedSrgb_2lon29_k$ = function () {
    return this.LinearExtendedSrgb_1;
  };
  protoOf(ColorSpaces).get_Bt709_i7r3c5_k$ = function () {
    return this.Bt709__1;
  };
  protoOf(ColorSpaces).get_Bt2020_3knrex_k$ = function () {
    return this.Bt2020__1;
  };
  protoOf(ColorSpaces).get_DciP3_i8kvl0_k$ = function () {
    return this.DciP3__1;
  };
  protoOf(ColorSpaces).get_DisplayP3_pa2gtg_k$ = function () {
    return this.DisplayP3__1;
  };
  protoOf(ColorSpaces).get_Ntsc1953_2r08mz_k$ = function () {
    return this.Ntsc1953__1;
  };
  protoOf(ColorSpaces).get_SmpteC_4ee9z9_k$ = function () {
    return this.SmpteC_1;
  };
  protoOf(ColorSpaces).get_AdobeRgb_p3r0p3_k$ = function () {
    return this.AdobeRgb_1;
  };
  protoOf(ColorSpaces).get_ProPhotoRgb_ygdri9_k$ = function () {
    return this.ProPhotoRgb_1;
  };
  protoOf(ColorSpaces).get_Aces_wny9ix_k$ = function () {
    return this.Aces_1;
  };
  protoOf(ColorSpaces).get_Acescg_4a3wo3_k$ = function () {
    return this.Acescg_1;
  };
  protoOf(ColorSpaces).get_CieXyz_38qfst_k$ = function () {
    return this.CieXyz_1;
  };
  protoOf(ColorSpaces).get_CieLab_38qpah_k$ = function () {
    return this.CieLab_1;
  };
  protoOf(ColorSpaces).get_Unspecified_el0w4u_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(ColorSpaces).get_Oklab_ierso8_k$ = function () {
    return this.Oklab_1;
  };
  protoOf(ColorSpaces).match_gsgfej_k$ = function (toXYZD50, function_0) {
    var indexedObject = this.ColorSpacesArray_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var colorSpace = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(colorSpace.get_model_rk6821_k$(), Companion_getInstance_37().get_Rgb_hxm2yj_k$())) {
        var tmp = adapt(colorSpace, Illuminant_getInstance().get_D50_18jwcq_k$());
        var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
        if (compare(toXYZD50, rgb.get_transform_px941v_k$()) ? compare_0(function_0, rgb.get_transferParameters_ak703m_k$()) : false) {
          return colorSpace;
        }
      }
    }
    return null;
  };
  protoOf(ColorSpaces).getColorSpace_n6qo08_k$ = function (id) {
    return this.ColorSpacesArray_1[id];
  };
  protoOf(ColorSpaces).get_ColorSpacesArray_qsodou_k$ = function () {
    return this.ColorSpacesArray_1;
  };
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function _get_mSource__pfxk2f($this) {
    return $this.mSource_1;
  }
  function _get_mDestination__f08o3u($this) {
    return $this.mDestination_1;
  }
  function _get_mTransform__1c5rl8($this) {
    return $this.mTransform_1;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_1(source.get_whitePoint_g4n5ow_k$(), destination.get_whitePoint_g4n5ow_k$())) {
      return mul3x3(destination.get_inverseTransform_5ywsth_k$(), source.get_transform_px941v_k$());
    } else {
      var transform = source.get_transform_px941v_k$();
      var inverseTransform = destination.get_inverseTransform_5ywsth_k$();
      var srcXYZ = source.get_whitePoint_g4n5ow_k$().toXyz_1tswm6_k$();
      var dstXYZ = destination.get_whitePoint_g4n5ow_k$().toXyz_1tswm6_k$();
      if (!compare_1(source.get_whitePoint_g4n5ow_k$(), Illuminant_getInstance().get_D50_18jwcq_k$())) {
        var tmp = Companion_getInstance_36().get_Bradford_vb0mll_k$().get_transform_px941v_k$();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.copyOf' call
        var tmp0_copyOf = Illuminant_getInstance().get_D50Xyz_3l7ykd_k$();
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_copyOf;
        tmp$ret$1 = tmp$ret$0.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.get_transform_px941v_k$());
      }
      if (!compare_1(destination.get_whitePoint_g4n5ow_k$(), Illuminant_getInstance().get_D50_18jwcq_k$())) {
        var tmp_0 = Companion_getInstance_36().get_Bradford_vb0mll_k$().get_transform_px941v_k$();
        var tmp$ret$3;
        // Inline function 'kotlin.collections.copyOf' call
        var tmp1_copyOf = Illuminant_getInstance().get_D50Xyz_3l7ykd_k$();
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_copyOf;
        tmp$ret$3 = tmp$ret$2.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.get_transform_px941v_k$()));
      }
      if (intent === Companion_getInstance_42().get_Absolute_4abvrf_k$()) {
        var tmp$ret$4;
        // Inline function 'kotlin.floatArrayOf' call
        var tmp2_floatArrayOf = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        tmp$ret$4 = tmp2_floatArrayOf;
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_42().get_Absolute_4abvrf_k$()))
      return null;
    var srcRGB = equals(source.get_model_rk6821_k$(), Companion_getInstance_37().get_Rgb_hxm2yj_k$());
    var dstRGB = equals(destination.get_model_rk6821_k$(), Companion_getInstance_37().get_Rgb_hxm2yj_k$());
    if (srcRGB ? dstRGB : false)
      return null;
    if (srcRGB ? true : dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.get_whitePoint_g4n5ow_k$().toXyz_1tswm6_k$() : Illuminant_getInstance().get_D50Xyz_3l7ykd_k$();
      var dstXYZ = dstRGB ? rgb.get_whitePoint_g4n5ow_k$().toXyz_1tswm6_k$() : Illuminant_getInstance().get_D50Xyz_3l7ykd_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.floatArrayOf' call
      var tmp0_floatArrayOf = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
      tmp$ret$0 = tmp0_floatArrayOf;
      return tmp$ret$0;
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_42().get_Relative_yydwow_k$(), this);
  }
  protoOf(Connector$Companion$identity$1).transform_aitls9_k$ = function (v) {
    return v;
  };
  protoOf(Connector$Companion$identity$1).transformToColor_9he873_k$ = function (r, g, b, a) {
    return Color_0(r, g, b, a, this.destination_1);
  };
  function _get_transformSource__ks0k3a($this) {
    return $this.transformSource_1;
  }
  function _get_transformDestination__y9np1l($this) {
    return $this.transformDestination_1;
  }
  function _get_transform__ku8tb9($this) {
    return $this.transform_1;
  }
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.get_model_rk6821_k$(), Companion_getInstance_37().get_Rgb_hxm2yj_k$()) ? adapt(source, Illuminant_getInstance().get_D50_18jwcq_k$()) : source;
    var tmp_0;
    if (equals(destination.get_model_rk6821_k$(), Companion_getInstance_37().get_Rgb_hxm2yj_k$())) {
      tmp_0 = adapt(destination, Illuminant_getInstance().get_D50_18jwcq_k$());
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_getInstance_39(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.mSource_1 = mSource;
    this.mDestination_1 = mDestination;
    this.mTransform_1 = computeTransform(this, this.mSource_1, this.mDestination_1, intent);
  }
  protoOf(RgbConnector).transform_aitls9_k$ = function (v) {
    v[0] = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_z1dtyv_k$(v[0]);
    v[1] = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_z1dtyv_k$(v[1]);
    v[2] = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_z1dtyv_k$(v[2]);
    mul3x3Float3(this.mTransform_1, v);
    v[0] = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_z1dtyv_k$(v[0]);
    v[1] = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_z1dtyv_k$(v[1]);
    v[2] = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_z1dtyv_k$(v[2]);
    return v;
  };
  protoOf(RgbConnector).transformToColor_9he873_k$ = function (r, g, b, a) {
    var v0 = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_z1dtyv_k$(r);
    var v1 = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_z1dtyv_k$(g);
    var v2 = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_z1dtyv_k$(b);
    var v01 = mul3x3Float3_0(this.mTransform_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(this.mTransform_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(this.mTransform_1, v0, v1, v2);
    var v02 = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_z1dtyv_k$(v01);
    var v12 = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_z1dtyv_k$(v11);
    var v22 = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_z1dtyv_k$(v21);
    return Color_0(v02, v12, v22, a, this.mDestination_1);
  };
  function Companion_24() {
    Companion_instance_24 = this;
    this.SrgbIdentity_1 = this.identity_orxv0l_k$(ColorSpaces_getInstance().get_Srgb_woa2g3_k$());
    this.SrgbToOklabPerceptual_1 = Connector_init_$Create$(ColorSpaces_getInstance().get_Srgb_woa2g3_k$(), ColorSpaces_getInstance().get_Oklab_ierso8_k$(), Companion_getInstance_42().get_Perceptual_20219r_k$());
    this.OklabToSrgbPerceptual_1 = Connector_init_$Create$(ColorSpaces_getInstance().get_Oklab_ierso8_k$(), ColorSpaces_getInstance().get_Srgb_woa2g3_k$(), Companion_getInstance_42().get_Perceptual_20219r_k$());
  }
  protoOf(Companion_24).identity_orxv0l_k$ = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  protoOf(Companion_24).get_SrgbIdentity_7ohf7j_k$ = function () {
    return this.SrgbIdentity_1;
  };
  protoOf(Companion_24).get_SrgbToOklabPerceptual_ubj5w0_k$ = function () {
    return this.SrgbToOklabPerceptual_1;
  };
  protoOf(Companion_24).get_OklabToSrgbPerceptual_iguhs6_k$ = function () {
    return this.OklabToSrgbPerceptual_1;
  };
  var Companion_instance_24;
  function Companion_getInstance_39() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_39();
    this.source_1 = source;
    this.destination_1 = destination;
    this.transformSource_1 = transformSource;
    this.transformDestination_1 = transformDestination;
    this.renderIntent_1 = renderIntent;
    this.transform_1 = transform;
  }
  protoOf(Connector).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(Connector).get_destination_9r3c63_k$ = function () {
    return this.destination_1;
  };
  protoOf(Connector).get_renderIntent_qndnh6_k$ = function () {
    return this.renderIntent_1;
  };
  protoOf(Connector).transform_2zmpfm_k$ = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.transform_aitls9_k$(tmp$ret$0);
  };
  protoOf(Connector).transform_aitls9_k$ = function (v) {
    var xyz = this.transformSource_1.toXyz_ox86g9_k$(v);
    if (!(this.transform_1 == null)) {
      var tmp0_array = xyz;
      var tmp1_index0 = 0;
      tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] * this.transform_1[0];
      var tmp2_array = xyz;
      var tmp3_index0 = 1;
      tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] * this.transform_1[1];
      var tmp4_array = xyz;
      var tmp5_index0 = 2;
      tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] * this.transform_1[2];
    }
    return this.transformDestination_1.fromXyz_idrdie_k$(xyz);
  };
  protoOf(Connector).transformToColor_9he873_k$ = function (r, g, b, a) {
    var packed = this.transformSource_1.toXy_sdu2b2_k$(r, g, b);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = packed.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    var x = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp$ret$2;
    // Inline function 'kotlin.fromBits' call
    var tmp2_fromBits = FloatCompanionObject_getInstance();
    var tmp3_fromBits = packed.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    tmp$ret$2 = floatFromBits(tmp3_fromBits);
    tmp$ret$3 = tmp$ret$2;
    var y = tmp$ret$3;
    var z = this.transformSource_1.toZ_3nx4hd_k$(r, g, b);
    if (!(this.transform_1 == null)) {
      x = x * this.transform_1[0];
      y = y * this.transform_1[1];
      z = z * this.transform_1[2];
    }
    return this.transformDestination_1.xyzaToColor_orha54_k$(x, y, z, a, this.destination_1);
  };
  function Illuminant() {
    Illuminant_instance = this;
    this.A_1 = new WhitePoint(0.44757, 0.40745);
    this.B_1 = new WhitePoint(0.34842, 0.35161);
    this.C_1 = new WhitePoint(0.31006, 0.31616);
    this.D50__1 = new WhitePoint(0.34567, 0.3585);
    this.D55__1 = new WhitePoint(0.33242, 0.34743);
    this.D60__1 = new WhitePoint(0.32168, 0.33767);
    this.D65__1 = new WhitePoint(0.31271, 0.32902);
    this.D75__1 = new WhitePoint(0.29902, 0.31485);
    this.E_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.964212, 1.0, 0.825188]);
    tmp.D50Xyz_1 = tmp$ret$0;
  }
  protoOf(Illuminant).get_A_1mhr4o_k$ = function () {
    return this.A_1;
  };
  protoOf(Illuminant).get_B_1mhr4p_k$ = function () {
    return this.B_1;
  };
  protoOf(Illuminant).get_C_1mhr4q_k$ = function () {
    return this.C_1;
  };
  protoOf(Illuminant).get_D50_18jwcq_k$ = function () {
    return this.D50__1;
  };
  protoOf(Illuminant).get_D55_18jwcl_k$ = function () {
    return this.D55__1;
  };
  protoOf(Illuminant).get_D60_18jwbv_k$ = function () {
    return this.D60__1;
  };
  protoOf(Illuminant).get_D65_18jwbq_k$ = function () {
    return this.D65__1;
  };
  protoOf(Illuminant).get_D75_18jwav_k$ = function () {
    return this.D75__1;
  };
  protoOf(Illuminant).get_E_1mhr4s_k$ = function () {
    return this.E_1;
  };
  protoOf(Illuminant).get_D50Xyz_3l7ykd_k$ = function () {
    return this.D50Xyz_1;
  };
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function _get_A__7mlnow($this) {
    return $this.A_1;
  }
  function _get_B__7mlnpr($this) {
    return $this.B_1;
  }
  function _get_C__7mlnqm($this) {
    return $this.C_1;
  }
  function _get_D__7mlnrh($this) {
    return $this.D_1;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    this.A_1 = 0.008856452;
    this.B_1 = 7.787037;
    this.C_1 = 0.13793103;
    this.D_1 = 0.20689656;
  }
  var Companion_instance_25;
  function Companion_getInstance_40() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Lab(name, id) {
    Companion_getInstance_40();
    ColorSpace.call(this, name, Companion_getInstance_37().get_Lab_uzchff_k$(), id);
  }
  protoOf(Lab).get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  protoOf(Lab).getMinValue_7r60q4_k$ = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).getMaxValue_8bwqwu_k$ = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).toXyz_ox86g9_k$ = function (v) {
    v[0] = coerceIn(v[0], 0.0, 100.0);
    v[1] = coerceIn(v[1], -128.0, 128.0);
    v[2] = coerceIn(v[2], -128.0, 128.0);
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var tmp;
    Companion_getInstance_40();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      Companion_getInstance_40();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_40();
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_40();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      Companion_getInstance_40();
      var tmp_2 = 1.0 / 7.787037;
      Companion_getInstance_40();
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp_3;
    Companion_getInstance_40();
    if (fz > 0.20689656) {
      tmp_3 = fz * fz * fz;
    } else {
      Companion_getInstance_40();
      var tmp_4 = 1.0 / 7.787037;
      Companion_getInstance_40();
      tmp_3 = tmp_4 * (fz - 0.13793103);
    }
    var z = tmp_3;
    v[0] = x * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[0];
    v[1] = y * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[1];
    v[2] = z * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[2];
    return v;
  };
  protoOf(Lab).toXy_sdu2b2_k$ = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v10 = coerceIn(v0, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var tmp;
    Companion_getInstance_40();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      Companion_getInstance_40();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_40();
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_40();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      Companion_getInstance_40();
      var tmp_2 = 1.0 / 7.787037;
      Companion_getInstance_40();
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = x * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[0];
    var tmp1_packFloats = y * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[1];
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1_0.shl_po5ip6_k$(32).or_s401rn_k$(v2_0.and_jhajnj_k$(new Long(-1, 0)));
    return tmp$ret$0;
  };
  protoOf(Lab).toZ_3nx4hd_k$ = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v20 = coerceIn(v2, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var tmp;
    Companion_getInstance_40();
    if (fz > 0.20689656) {
      tmp = fz * fz * fz;
    } else {
      Companion_getInstance_40();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_40();
      tmp = tmp_0 * (fz - 0.13793103);
    }
    var z = tmp;
    return z * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[2];
  };
  protoOf(Lab).xyzaToColor_orha54_k$ = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[0];
    var y1 = y / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[1];
    var z1 = z / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[2];
    var tmp;
    Companion_getInstance_40();
    if (x1 > 0.008856452) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / 3.0;
      tmp$ret$0 = Math.pow(x1, tmp0_pow);
      tmp = tmp$ret$0;
    } else {
      Companion_getInstance_40();
      var tmp_0 = 7.787037 * x1;
      Companion_getInstance_40();
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_40();
    if (y1 > 0.008856452) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = 1.0 / 3.0;
      tmp$ret$1 = Math.pow(y1, tmp1_pow);
      tmp_1 = tmp$ret$1;
    } else {
      Companion_getInstance_40();
      var tmp_2 = 7.787037 * y1;
      Companion_getInstance_40();
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_40();
    if (z1 > 0.008856452) {
      var tmp$ret$2;
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = 1.0 / 3.0;
      tmp$ret$2 = Math.pow(z1, tmp2_pow);
      tmp_3 = tmp$ret$2;
    } else {
      Companion_getInstance_40();
      var tmp_4 = 7.787037 * z1;
      Companion_getInstance_40();
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    return Color_0(coerceIn(l, 0.0, 100.0), coerceIn(a1, -128.0, 128.0), coerceIn(b, -128.0, 128.0), a, colorSpace);
  };
  protoOf(Lab).fromXyz_idrdie_k$ = function (v) {
    var x = v[0] / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[0];
    var y = v[1] / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[1];
    var z = v[2] / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[2];
    var tmp;
    Companion_getInstance_40();
    if (x > 0.008856452) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / 3.0;
      tmp$ret$0 = Math.pow(x, tmp0_pow);
      tmp = tmp$ret$0;
    } else {
      Companion_getInstance_40();
      var tmp_0 = 7.787037 * x;
      Companion_getInstance_40();
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_40();
    if (y > 0.008856452) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = 1.0 / 3.0;
      tmp$ret$1 = Math.pow(y, tmp1_pow);
      tmp_1 = tmp$ret$1;
    } else {
      Companion_getInstance_40();
      var tmp_2 = 7.787037 * y;
      Companion_getInstance_40();
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_40();
    if (z > 0.008856452) {
      var tmp$ret$2;
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = 1.0 / 3.0;
      tmp$ret$2 = Math.pow(z, tmp2_pow);
      tmp_3 = tmp$ret$2;
    } else {
      Companion_getInstance_40();
      var tmp_4 = 7.787037 * z;
      Companion_getInstance_40();
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    v[0] = coerceIn(l, 0.0, 100.0);
    v[1] = coerceIn(a, -128.0, 128.0);
    v[2] = coerceIn(b, -128.0, 128.0);
    return v;
  };
  function _get_M1__ndbh53($this) {
    return $this.M1__1;
  }
  function _get_M2__ndbh5y($this) {
    return $this.M2__1;
  }
  function _get_InverseM1__sa58eb($this) {
    return $this.InverseM1__1;
  }
  function _get_InverseM2__sa58dg($this) {
    return $this.InverseM2__1;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.M1__1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_36().get_Bradford_vb0mll_k$().get_transform_px941v_k$(), Illuminant_getInstance().get_D50_18jwcq_k$().toXyz_1tswm6_k$(), Illuminant_getInstance().get_D65_18jwbq_k$().toXyz_1tswm6_k$()));
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    tmp_0.M2__1 = tmp$ret$1;
    this.InverseM1__1 = inverse3x3(this.M1__1);
    this.InverseM2__1 = inverse3x3(this.M2__1);
  }
  var Companion_instance_26;
  function Companion_getInstance_41() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Oklab(name, id) {
    Companion_getInstance_41();
    ColorSpace.call(this, name, Companion_getInstance_37().get_Lab_uzchff_k$(), id);
  }
  protoOf(Oklab).get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  protoOf(Oklab).getMinValue_7r60q4_k$ = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).getMaxValue_8bwqwu_k$ = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).toXyz_ox86g9_k$ = function (v) {
    v[0] = coerceIn(v[0], 0.0, 1.0);
    v[1] = coerceIn(v[1], -0.5, 0.5);
    v[2] = coerceIn(v[2], -0.5, 0.5);
    mul3x3Float3(Companion_getInstance_41().InverseM2__1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_41().InverseM1__1, v);
    return v;
  };
  protoOf(Oklab).toXy_sdu2b2_k$ = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_41().InverseM2__1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_41().InverseM2__1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_41().InverseM2__1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v03 = mul3x3Float3_0(Companion_getInstance_41().InverseM1__1, v02, v12, v22);
    var v13 = mul3x3Float3_1(Companion_getInstance_41().InverseM1__1, v02, v12, v22);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toBits(v03));
    var v2_0 = toLong(toBits(v13));
    tmp$ret$0 = v1_0.shl_po5ip6_k$(32).or_s401rn_k$(v2_0.and_jhajnj_k$(new Long(-1, 0)));
    return tmp$ret$0;
  };
  protoOf(Oklab).toZ_3nx4hd_k$ = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_41().InverseM2__1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_41().InverseM2__1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_41().InverseM2__1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v23 = mul3x3Float3_2(Companion_getInstance_41().InverseM1__1, v02, v12, v22);
    return v23;
  };
  protoOf(Oklab).xyzaToColor_orha54_k$ = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(Companion_getInstance_41().M1__1, x, y, z);
    var v1 = mul3x3Float3_1(Companion_getInstance_41().M1__1, x, y, z);
    var v2 = mul3x3Float3_2(Companion_getInstance_41().M1__1, x, y, z);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sign' call
    var tmp0_sign = v0;
    tmp$ret$0 = sign(tmp0_sign);
    var tmp = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = v0;
    tmp$ret$1 = Math.abs(tmp1_abs);
    var tmp2_pow = tmp$ret$1;
    var tmp3_pow = 1.0 / 3.0;
    tmp$ret$2 = Math.pow(tmp2_pow, tmp3_pow);
    v0 = tmp * tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.sign' call
    var tmp4_sign = v1;
    tmp$ret$3 = sign(tmp4_sign);
    var tmp_0 = tmp$ret$3;
    var tmp$ret$5;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$4;
    // Inline function 'kotlin.math.abs' call
    var tmp5_abs = v1;
    tmp$ret$4 = Math.abs(tmp5_abs);
    var tmp6_pow = tmp$ret$4;
    var tmp7_pow = 1.0 / 3.0;
    tmp$ret$5 = Math.pow(tmp6_pow, tmp7_pow);
    v1 = tmp_0 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.math.sign' call
    var tmp8_sign = v2;
    tmp$ret$6 = sign(tmp8_sign);
    var tmp_1 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$7;
    // Inline function 'kotlin.math.abs' call
    var tmp9_abs = v2;
    tmp$ret$7 = Math.abs(tmp9_abs);
    var tmp10_pow = tmp$ret$7;
    var tmp11_pow = 1.0 / 3.0;
    tmp$ret$8 = Math.pow(tmp10_pow, tmp11_pow);
    v2 = tmp_1 * tmp$ret$8;
    var v01 = mul3x3Float3_0(Companion_getInstance_41().M2__1, v0, v1, v2);
    var v11 = mul3x3Float3_1(Companion_getInstance_41().M2__1, v0, v1, v2);
    var v21 = mul3x3Float3_2(Companion_getInstance_41().M2__1, v0, v1, v2);
    return Color_0(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).fromXyz_idrdie_k$ = function (v) {
    mul3x3Float3(Companion_getInstance_41().M1__1, v);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sign' call
    var tmp0_sign = v[0];
    tmp$ret$0 = sign(tmp0_sign);
    var tmp = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = v[0];
    tmp$ret$1 = Math.abs(tmp1_abs);
    var tmp2_pow = tmp$ret$1;
    var tmp3_pow = 1.0 / 3.0;
    tmp$ret$2 = Math.pow(tmp2_pow, tmp3_pow);
    v[0] = tmp * tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.sign' call
    var tmp4_sign = v[1];
    tmp$ret$3 = sign(tmp4_sign);
    var tmp_0 = tmp$ret$3;
    var tmp$ret$5;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$4;
    // Inline function 'kotlin.math.abs' call
    var tmp5_abs = v[1];
    tmp$ret$4 = Math.abs(tmp5_abs);
    var tmp6_pow = tmp$ret$4;
    var tmp7_pow = 1.0 / 3.0;
    tmp$ret$5 = Math.pow(tmp6_pow, tmp7_pow);
    v[1] = tmp_0 * tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.math.sign' call
    var tmp8_sign = v[2];
    tmp$ret$6 = sign(tmp8_sign);
    var tmp_1 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.math.pow' call
    var tmp$ret$7;
    // Inline function 'kotlin.math.abs' call
    var tmp9_abs = v[2];
    tmp$ret$7 = Math.abs(tmp9_abs);
    var tmp10_pow = tmp$ret$7;
    var tmp11_pow = 1.0 / 3.0;
    tmp$ret$8 = Math.pow(tmp10_pow, tmp11_pow);
    v[2] = tmp_1 * tmp$ret$8;
    mul3x3Float3(Companion_getInstance_41().M2__1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function _get_value__a43j40_10($this) {
    return $this;
  }
  function Companion_27() {
    Companion_instance_27 = this;
    this.Perceptual_1 = _RenderIntent___init__impl__jceahd(0);
    this.Relative_1 = _RenderIntent___init__impl__jceahd(1);
    this.Saturation_1 = _RenderIntent___init__impl__jceahd(2);
    this.Absolute_1 = _RenderIntent___init__impl__jceahd(3);
  }
  protoOf(Companion_27).get_Perceptual_20219r_k$ = function () {
    return this.Perceptual_1;
  };
  protoOf(Companion_27).get_Relative_yydwow_k$ = function () {
    return this.Relative_1;
  };
  protoOf(Companion_27).get_Saturation_agk0g6_k$ = function () {
    return this.Saturation_1;
  };
  protoOf(Companion_27).get_Absolute_4abvrf_k$ = function () {
    return this.Absolute_1;
  };
  var Companion_instance_27;
  function Companion_getInstance_42() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function RenderIntent__toString_impl_b479rl($this) {
    var tmp0_subject = $this;
    return tmp0_subject === Companion_getInstance_42().Perceptual_1 ? 'Perceptual' : tmp0_subject === Companion_getInstance_42().Relative_1 ? 'Relative' : tmp0_subject === Companion_getInstance_42().Saturation_1 ? 'Saturation' : tmp0_subject === Companion_getInstance_42().Absolute_1 ? 'Absolute' : 'Unknown';
  }
  function RenderIntent__hashCode_impl_wvd6kg($this) {
    return $this;
  }
  function RenderIntent__equals_impl_5o84ik($this, other) {
    if (!(other instanceof RenderIntent))
      return false;
    var tmp0_other_with_cast = other instanceof RenderIntent ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function RenderIntent(value) {
    Companion_getInstance_42();
    this.value_1 = value;
  }
  protoOf(RenderIntent).toString = function () {
    return RenderIntent__toString_impl_b479rl(this.value_1);
  };
  protoOf(RenderIntent).hashCode = function () {
    return RenderIntent__hashCode_impl_wvd6kg(this.value_1);
  };
  protoOf(RenderIntent).equals = function (other) {
    return RenderIntent__equals_impl_5o84ik(this.value_1, other);
  };
  function _get_DoubleIdentity__g3p9ng($this) {
    return $this.DoubleIdentity_1;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare(primaries, ColorSpaces_getInstance().get_SrgbPrimaries_e57bel_k$())) {
      return false;
    }
    if (!compare_1(whitePoint, Illuminant_getInstance().get_D65_18jwbq_k$())) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().get_Srgb_woa2g3_k$();
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_2($this, x, OETF, srgb.oetfOrig_1))
        return false;
      if (!compare_2($this, x, EOTF, srgb.eotfOrig_1))
        return false;
      x = x + 0.00392156862745098;
    }
    return true;
  }
  function compare_2($this, point, a, b) {
    var rA = a.invoke_z1dtyv_k$(point);
    var rB = b.invoke_z1dtyv_k$(point);
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = rA - rB;
    tmp$ret$0 = Math.abs(tmp0_abs);
    return tmp$ret$0 <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return (area($this, primaries) / area($this, ColorSpaces_getInstance().get_Ntsc1953Primaries_s9kth_k$()) > 0.9 ? contains($this, primaries, ColorSpaces_getInstance().get_SrgbPrimaries_e57bel_k$()) : false) ? true : min < 0.0 ? max > 1.0 : false;
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    tmp$ret$0 = tmp0_floatArrayOf;
    var p0 = tmp$ret$0;
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0 ? true : cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0 ? true : cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0 ? true : cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0);
  }
  function computeWhitePoint($this, toXYZ) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([1.0, 1.0, 1.0]);
    var w = mul3x3Float3(toXYZ, tmp$ret$0);
    var sum = w[0] + w[1] + w[2];
    return new WhitePoint(w[0] / sum, w[1] / sum);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = primaries;
      tmp$ret$1 = tmp$ret$0;
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = xyPrimaries;
      tmp$ret$3 = tmp$ret$2;
      arrayCopy(tmp, tmp$ret$3, 0, 0, 6);
      tmp$ret$4 = xyPrimaries;
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.get_x_1mhr67_k$();
    var wy = whitePoint.get_y_1mhr68_k$();
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).invoke_z1dtyv_k$ = function (double) {
    return this.function_1(double);
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function _get_min__e6ctxb($this) {
    return $this.min_1;
  }
  function _get_max__e6co8d($this) {
    return $this.max_1;
  }
  function Rgb_init_$Init$(name, toXYZ, oetf, eotf, $this) {
    var tmp = Companion_getInstance_43().computePrimaries_bmzsl0_k$(toXYZ);
    var tmp_0 = computeWhitePoint(Companion_getInstance_43(), toXYZ);
    var tmp_1 = Rgb$_init_$lambda_yyl4se(oetf);
    var tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    var tmp_3 = Rgb$_init_$lambda_yyl4se_0(eotf);
    Rgb.call($this, name, tmp, tmp_0, null, tmp_2, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_3), 0.0, 1.0, null, Companion_getInstance_38().get_MinId_idmyf8_k$());
    return $this;
  }
  function Rgb_init_$Create$(name, toXYZ, oetf, eotf) {
    return Rgb_init_$Init$(name, toXYZ, oetf, eotf, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, oetf, eotf, min, max, $this) {
    var tmp = Rgb$_init_$lambda_yyl4se_1(oetf);
    var tmp_0 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp);
    var tmp_1 = Rgb$_init_$lambda_yyl4se_2(eotf);
    Rgb.call($this, name, primaries, whitePoint, null, tmp_0, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_1), min, max, null, Companion_getInstance_38().get_MinId_idmyf8_k$());
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, oetf, eotf, min, max) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, oetf, eotf, min, max, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(name, toXYZ, function_0, $this) {
    Rgb_init_$Init$_3(name, Companion_getInstance_43().computePrimaries_bmzsl0_k$(toXYZ), computeWhitePoint(Companion_getInstance_43(), toXYZ), function_0, Companion_getInstance_38().get_MinId_idmyf8_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_1(name, toXYZ, function_0) {
    return Rgb_init_$Init$_1(name, toXYZ, function_0, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_2(name, primaries, whitePoint, function_0, $this) {
    Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, Companion_getInstance_38().get_MinId_idmyf8_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_2(name, primaries, whitePoint, function_0) {
    return Rgb_init_$Init$_2(name, primaries, whitePoint, function_0, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.get_e_1mhr5o_k$() === 0.0 ? function_0.get_f_1mhr5p_k$() === 0.0 : false) {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_0);
    } else {
      var tmp_1 = Rgb$_init_$lambda_yyl4se_4(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_1);
    }
    var tmp_2 = tmp;
    var tmp_3;
    if (function_0.get_e_1mhr5o_k$() === 0.0 ? function_0.get_f_1mhr5p_k$() === 0.0 : false) {
      var tmp_4 = Rgb$_init_$lambda_yyl4se_5(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_4);
    } else {
      var tmp_5 = Rgb$_init_$lambda_yyl4se_6(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_5);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_2, tmp_3, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$_3(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_4(name, toXYZ, gamma, $this) {
    Rgb_init_$Init$_6(name, Companion_getInstance_43().computePrimaries_bmzsl0_k$(toXYZ), computeWhitePoint(Companion_getInstance_43(), toXYZ), gamma, 0.0, 1.0, Companion_getInstance_38().get_MinId_idmyf8_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_4(name, toXYZ, gamma) {
    return Rgb_init_$Init$_4(name, toXYZ, gamma, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_5(name, primaries, whitePoint, gamma, $this) {
    Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, 0.0, 1.0, Companion_getInstance_38().get_MinId_idmyf8_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_5(name, primaries, whitePoint, gamma) {
    return Rgb_init_$Init$_5(name, primaries, whitePoint, gamma, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_43().DoubleIdentity_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_7(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_43().DoubleIdentity_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_8(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_6(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_7(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace.get_name_woqyms_k$(), colorSpace.primaries_1, whitePoint, transform, colorSpace.oetfOrig_1, colorSpace.eotfOrig_1, colorSpace.min_1, colorSpace.max_1, colorSpace.transferParameters_1, Companion_getInstance_38().get_MinId_idmyf8_k$());
    return $this;
  }
  function Rgb_init_$Create$_7(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_7(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_28() {
    Companion_instance_28 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.DoubleIdentity_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_0);
  }
  protoOf(Companion_28).computePrimaries_bmzsl0_k$ = function (toXYZ) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0]);
    var r = mul3x3Float3(toXYZ, tmp$ret$0);
    var tmp$ret$1;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$1 = new Float32Array([0.0, 1.0, 0.0]);
    var g = mul3x3Float3(toXYZ, tmp$ret$1);
    var tmp$ret$2;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$2 = new Float32Array([0.0, 0.0, 1.0]);
    var b = mul3x3Float3(toXYZ, tmp$ret$2);
    var rSum = r[0] + r[1] + r[2];
    var gSum = g[0] + g[1] + g[2];
    var bSum = b[0] + b[1] + b[2];
    var tmp$ret$3;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([r[0] / rSum, r[1] / rSum, g[0] / gSum, g[1] / gSum, b[0] / bSum, b[1] / bSum]);
    tmp$ret$3 = tmp0_floatArrayOf;
    return tmp$ret$3;
  };
  var Companion_instance_28;
  function Companion_getInstance_43() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).invoke_z1dtyv_k$ = function (double) {
    return this.function_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).invoke_z1dtyv_k$ = function (double) {
    return this.function_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).invoke_z1dtyv_k$ = function (double) {
    return this.function_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).invoke_z1dtyv_k$ = function (double) {
    return this.function_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).invoke_z1dtyv_k$ = function (double) {
    return this.function_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).invoke_z1dtyv_k$ = function (double) {
    return this.function_1(double);
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.oetfOrig_1.invoke_z1dtyv_k$(x), this$0.min_1, this$0.max_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.oetfOrig_1.invoke_z1dtyv_k$(x), this$0.min_1, this$0.max_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.eotfOrig_1.invoke_z1dtyv_k$(coerceIn_0(x, this$0.min_1, this$0.max_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.eotfOrig_1.invoke_z1dtyv_k$(coerceIn_0(x, this$0.min_1, this$0.max_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($oetf) {
    return function (x) {
      return $oetf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($eotf) {
    return function (x) {
      return $eotf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($oetf) {
    return function (x) {
      return $oetf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($eotf) {
    return function (x) {
      return $eotf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($function) {
    return function (x) {
      return rcpResponse(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($function) {
    return function (x) {
      return rcpResponse_0(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_e_1mhr5o_k$(), $function.get_f_1mhr5p_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$_init_$lambda_yyl4se_5($function) {
    return function (x) {
      return response(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$_init_$lambda_yyl4se_6($function) {
    return function (x) {
      return response_0(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_e_1mhr5o_k$(), $function.get_f_1mhr5p_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$_init_$lambda_yyl4se_7($gamma) {
    return function (x) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x < 0.0 ? 0.0 : x;
      var tmp1_pow = 1.0 / $gamma;
      tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
      return tmp$ret$0;
    };
  }
  function Rgb$_init_$lambda_yyl4se_8($gamma) {
    return function (x) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x < 0.0 ? 0.0 : x;
      tmp$ret$0 = Math.pow(tmp0_pow, $gamma);
      return tmp$ret$0;
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_43();
    ColorSpace.call(this, name, Companion_getInstance_37().get_Rgb_hxm2yj_k$(), id);
    this.whitePoint_1 = whitePoint;
    this.min_1 = min;
    this.max_1 = max;
    this.transferParameters_1 = transferParameters;
    this.oetfOrig_1 = oetf;
    var tmp = this;
    tmp.oetf_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.oetfFunc_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_1);
    this.eotfOrig_1 = eotf;
    var tmp_2 = this;
    tmp_2.eotf_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.eotfFunc_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_4);
    if (!(primaries.length === 6) ? !(primaries.length === 9) : false) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.min_1 >= this.max_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.min_1 + ', max=' + this.max_1 + '; min must ' + 'be strictly < max');
    }
    this.primaries_1 = xyPrimaries(Companion_getInstance_43(), primaries);
    if (transform == null) {
      this.transform_1 = computeXYZMatrix(Companion_getInstance_43(), this.primaries_1, this.whitePoint_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + ('' + transform.length));
      }
      this.transform_1 = transform;
    }
    this.inverseTransform_1 = inverse3x3(this.transform_1);
    this.isWideGamut_1 = isWideGamut(Companion_getInstance_43(), this.primaries_1, this.min_1, this.max_1);
    this.isSrgb_1 = isSrgb(Companion_getInstance_43(), this.primaries_1, this.whitePoint_1, oetf, eotf, this.min_1, this.max_1, id);
  }
  protoOf(Rgb).get_whitePoint_g4n5ow_k$ = function () {
    return this.whitePoint_1;
  };
  protoOf(Rgb).get_transferParameters_ak703m_k$ = function () {
    return this.transferParameters_1;
  };
  protoOf(Rgb).get_primaries_lyb4w9_k$ = function () {
    return this.primaries_1;
  };
  protoOf(Rgb).get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
  protoOf(Rgb).get_inverseTransform_5ywsth_k$ = function () {
    return this.inverseTransform_1;
  };
  protoOf(Rgb).get_oetfOrig_igrylu_k$ = function () {
    return this.oetfOrig_1;
  };
  protoOf(Rgb).get_oetf_woror5_k$ = function () {
    return this.oetf_1;
  };
  protoOf(Rgb).get_oetfFunc_igma2d_k$ = function () {
    return this.oetfFunc_1;
  };
  protoOf(Rgb).get_eotfOrig_j2q66e_k$ = function () {
    return this.eotfOrig_1;
  };
  protoOf(Rgb).get_eotf_woliat_k$ = function () {
    return this.eotf_1;
  };
  protoOf(Rgb).get_eotfFunc_j2khmx_k$ = function () {
    return this.eotfFunc_1;
  };
  protoOf(Rgb).get_isWideGamut_oxj4to_k$ = function () {
    return this.isWideGamut_1;
  };
  protoOf(Rgb).get_isSrgb_ew666l_k$ = function () {
    return this.isSrgb_1;
  };
  protoOf(Rgb).getPrimaries_umjt7a_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.primaries_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  protoOf(Rgb).getTransform_h90fqu_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.transform_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  protoOf(Rgb).getInverseTransform_s9peaa_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.inverseTransform_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  protoOf(Rgb).getPrimaries_y37ab9_k$ = function (primaries) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.primaries_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = primaries;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = primaries;
    return tmp$ret$4;
  };
  protoOf(Rgb).getTransform_qtf3nl_k$ = function (transform) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.transform_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = transform;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = transform;
    return tmp$ret$4;
  };
  protoOf(Rgb).getInverseTransform_wdrspp_k$ = function (inverseTransform) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.inverseTransform_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = inverseTransform;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = inverseTransform;
    return tmp$ret$4;
  };
  protoOf(Rgb).getMinValue_7r60q4_k$ = function (component) {
    return this.min_1;
  };
  protoOf(Rgb).getMaxValue_8bwqwu_k$ = function (component) {
    return this.max_1;
  };
  protoOf(Rgb).toLinear_913fy_k$ = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.toLinear_7ax7rf_k$(tmp$ret$0);
  };
  protoOf(Rgb).toLinear_7ax7rf_k$ = function (v) {
    v[0] = this.eotfFunc_1.invoke_z1dtyv_k$(v[0]);
    v[1] = this.eotfFunc_1.invoke_z1dtyv_k$(v[1]);
    v[2] = this.eotfFunc_1.invoke_z1dtyv_k$(v[2]);
    return v;
  };
  protoOf(Rgb).fromLinear_df0aht_k$ = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.fromLinear_yxqibq_k$(tmp$ret$0);
  };
  protoOf(Rgb).fromLinear_yxqibq_k$ = function (v) {
    v[0] = this.oetfFunc_1.invoke_z1dtyv_k$(v[0]);
    v[1] = this.oetfFunc_1.invoke_z1dtyv_k$(v[1]);
    v[2] = this.oetfFunc_1.invoke_z1dtyv_k$(v[2]);
    return v;
  };
  protoOf(Rgb).toXyz_ox86g9_k$ = function (v) {
    v[0] = this.eotfFunc_1.invoke_z1dtyv_k$(v[0]);
    v[1] = this.eotfFunc_1.invoke_z1dtyv_k$(v[1]);
    v[2] = this.eotfFunc_1.invoke_z1dtyv_k$(v[2]);
    return mul3x3Float3(this.transform_1, v);
  };
  protoOf(Rgb).toXy_sdu2b2_k$ = function (v0, v1, v2) {
    var v00 = this.eotfFunc_1.invoke_z1dtyv_k$(v0);
    var v10 = this.eotfFunc_1.invoke_z1dtyv_k$(v1);
    var v20 = this.eotfFunc_1.invoke_z1dtyv_k$(v2);
    var x = mul3x3Float3_0(this.transform_1, v00, v10, v20);
    var y = mul3x3Float3_1(this.transform_1, v00, v10, v20);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toBits(x));
    var v2_0 = toLong(toBits(y));
    tmp$ret$0 = v1_0.shl_po5ip6_k$(32).or_s401rn_k$(v2_0.and_jhajnj_k$(new Long(-1, 0)));
    return tmp$ret$0;
  };
  protoOf(Rgb).toZ_3nx4hd_k$ = function (v0, v1, v2) {
    var v00 = this.eotfFunc_1.invoke_z1dtyv_k$(v0);
    var v10 = this.eotfFunc_1.invoke_z1dtyv_k$(v1);
    var v20 = this.eotfFunc_1.invoke_z1dtyv_k$(v2);
    var z = mul3x3Float3_2(this.transform_1, v00, v10, v20);
    return z;
  };
  protoOf(Rgb).xyzaToColor_orha54_k$ = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(this.inverseTransform_1, x, y, z);
    var v1 = mul3x3Float3_1(this.inverseTransform_1, x, y, z);
    var v2 = mul3x3Float3_2(this.inverseTransform_1, x, y, z);
    v0 = this.oetfFunc_1.invoke_z1dtyv_k$(v0);
    v1 = this.oetfFunc_1.invoke_z1dtyv_k$(v1);
    v2 = this.oetfFunc_1.invoke_z1dtyv_k$(v2);
    return Color_0(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).fromXyz_idrdie_k$ = function (v) {
    mul3x3Float3(this.inverseTransform_1, v);
    v[0] = this.oetfFunc_1.invoke_z1dtyv_k$(v[0]);
    v[1] = this.oetfFunc_1.invoke_z1dtyv_k$(v[1]);
    v[2] = this.oetfFunc_1.invoke_z1dtyv_k$(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.min_1, this.min_1) === 0))
      return false;
    if (!(compareTo(rgb.max_1, this.max_1) === 0))
      return false;
    if (!this.whitePoint_1.equals(rgb.whitePoint_1))
      return false;
    if (!contentEquals(this.primaries_1, rgb.primaries_1))
      return false;
    if (!(this.transferParameters_1 == null)) {
      return equals(this.transferParameters_1, rgb.transferParameters_1);
    } else if (rgb.transferParameters_1 == null) {
      return true;
    }
    return !equals(this.oetfOrig_1, rgb.oetfOrig_1) ? false : equals(this.eotfOrig_1, rgb.eotfOrig_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.whitePoint_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.primaries_1) | 0;
    result = imul(31, result) + (!(this.min_1 === 0.0) ? toBits(this.min_1) : 0) | 0;
    result = imul(31, result) + (!(this.max_1 === 0.0) ? toBits(this.max_1) : 0) | 0;
    result = imul(31, result) + (!(this.transferParameters_1 == null) ? this.transferParameters_1.hashCode() : 0) | 0;
    if (this.transferParameters_1 == null) {
      result = imul(31, result) + hashCode(this.oetfOrig_1) | 0;
      result = imul(31, result) + hashCode(this.eotfOrig_1) | 0;
    }
    return result;
  };
  function DoubleFunction() {
  }
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.gamma_1 = gamma;
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    this.e_1 = e;
    this.f_1 = f;
    if ((((((isNaN_0(this.a_1) ? true : isNaN_0(this.b_1)) ? true : isNaN_0(this.c_1)) ? true : isNaN_0(this.d_1)) ? true : isNaN_0(this.e_1)) ? true : isNaN_0(this.f_1)) ? true : isNaN_0(this.gamma_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.d_1 >= 0.0 ? this.d_1 <= 1.0 : false)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.d_1));
    }
    if (this.d_1 === 0.0 ? this.a_1 === 0.0 ? true : this.gamma_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.d_1 >= 1.0 ? this.c_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.a_1 === 0.0 ? true : this.gamma_1 === 0.0) ? this.c_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.c_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.a_1 < 0.0 ? true : this.gamma_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  protoOf(TransferParameters).get_gamma_irsi2m_k$ = function () {
    return this.gamma_1;
  };
  protoOf(TransferParameters).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(TransferParameters).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(TransferParameters).get_c_1mhr5m_k$ = function () {
    return this.c_1;
  };
  protoOf(TransferParameters).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(TransferParameters).get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  protoOf(TransferParameters).get_f_1mhr5p_k$ = function () {
    return this.f_1;
  };
  protoOf(TransferParameters).component1_7eebsc_k$ = function () {
    return this.gamma_1;
  };
  protoOf(TransferParameters).component2_7eebsb_k$ = function () {
    return this.a_1;
  };
  protoOf(TransferParameters).component3_7eebsa_k$ = function () {
    return this.b_1;
  };
  protoOf(TransferParameters).component4_7eebs9_k$ = function () {
    return this.c_1;
  };
  protoOf(TransferParameters).component5_7eebs8_k$ = function () {
    return this.d_1;
  };
  protoOf(TransferParameters).component6_7eebs7_k$ = function () {
    return this.e_1;
  };
  protoOf(TransferParameters).component7_7eebs6_k$ = function () {
    return this.f_1;
  };
  protoOf(TransferParameters).copy_hfgv4i_k$ = function (gamma, a, b, c, d, e, f) {
    return new TransferParameters(gamma, a, b, c, d, e, f);
  };
  protoOf(TransferParameters).copy$default_b6zvc_k$ = function (gamma, a, b, c, d, e, f, $super) {
    gamma = gamma === VOID ? this.gamma_1 : gamma;
    a = a === VOID ? this.a_1 : a;
    b = b === VOID ? this.b_1 : b;
    c = c === VOID ? this.c_1 : c;
    d = d === VOID ? this.d_1 : d;
    e = e === VOID ? this.e_1 : e;
    f = f === VOID ? this.f_1 : f;
    return $super === VOID ? this.copy_hfgv4i_k$(gamma, a, b, c, d, e, f) : $super.copy_hfgv4i_k$.call(this, gamma, a, b, c, d, e, f);
  };
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.gamma_1 + ', a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ', e=' + this.e_1 + ', f=' + this.f_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.gamma_1);
    result = imul(result, 31) + getNumberHashCode(this.a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.gamma_1, tmp0_other_with_cast.gamma_1))
      return false;
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.c_1, tmp0_other_with_cast.c_1))
      return false;
    if (!equals(this.d_1, tmp0_other_with_cast.d_1))
      return false;
    if (!equals(this.e_1, tmp0_other_with_cast.e_1))
      return false;
    if (!equals(this.f_1, tmp0_other_with_cast.f_1))
      return false;
    return true;
  };
  function WhitePoint_init_$Init$(x, y, z, $this) {
    WhitePoint_init_$Init$_0(x, y, z, x + y + z, $this);
    return $this;
  }
  function WhitePoint_init_$Create$(x, y, z) {
    return WhitePoint_init_$Init$(x, y, z, objectCreate(protoOf(WhitePoint)));
  }
  function WhitePoint_init_$Init$_0(x, y, z, sum, $this) {
    WhitePoint.call($this, x / sum, y / sum);
    return $this;
  }
  function WhitePoint_init_$Create$_0(x, y, z, sum) {
    return WhitePoint_init_$Init$_0(x, y, z, sum, objectCreate(protoOf(WhitePoint)));
  }
  function WhitePoint(x, y) {
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(WhitePoint).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(WhitePoint).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(WhitePoint).toXyz_1tswm6_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp0_floatArrayOf = new Float32Array([this.x_1 / this.y_1, 1.0, (1.0 - this.x_1 - this.y_1) / this.y_1]);
    tmp$ret$0 = tmp0_floatArrayOf;
    return tmp$ret$0;
  };
  protoOf(WhitePoint).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(WhitePoint).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(WhitePoint).copy_138fzp_k$ = function (x, y) {
    return new WhitePoint(x, y);
  };
  protoOf(WhitePoint).copy$default_a0mf90_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_138fzp_k$(x, y) : $super.copy_138fzp_k$.call(this, x, y);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function clamp($this, x) {
    return coerceIn(x, -2.0, 2.0);
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_37().get_Xyz_dr76iv_k$(), id);
  }
  protoOf(Xyz).get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  protoOf(Xyz).getMinValue_7r60q4_k$ = function (component) {
    return -2.0;
  };
  protoOf(Xyz).getMaxValue_8bwqwu_k$ = function (component) {
    return 2.0;
  };
  protoOf(Xyz).toXyz_ox86g9_k$ = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  protoOf(Xyz).toXy_sdu2b2_k$ = function (v0, v1, v2) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = clamp(this, v0);
    var tmp1_packFloats = clamp(this, v1);
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1_0.shl_po5ip6_k$(32).or_s401rn_k$(v2_0.and_jhajnj_k$(new Long(-1, 0)));
    return tmp$ret$0;
  };
  protoOf(Xyz).toZ_3nx4hd_k$ = function (v0, v1, v2) {
    return clamp(this, v2);
  };
  protoOf(Xyz).xyzaToColor_orha54_k$ = function (x, y, z, a, colorSpace) {
    return Color_0(clamp(this, x), clamp(this, y), clamp(this, z), a, colorSpace);
  };
  protoOf(Xyz).fromXyz_idrdie_k$ = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  function get_DefaultDensity() {
    _init_properties_CanvasDrawScope_kt__90zepm();
    return DefaultDensity;
  }
  var DefaultDensity;
  function _set_fillPaint__8v4n0q($this, _set____db54di) {
    $this.fillPaint_1 = _set____db54di;
  }
  function _get_fillPaint__wv4yju($this) {
    return $this.fillPaint_1;
  }
  function _set_strokePaint__ed14xt($this, _set____db54di) {
    $this.strokePaint_1 = _set____db54di;
  }
  function _get_strokePaint__fxd1e3($this) {
    return $this.strokePaint_1;
  }
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.fillPaint_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      tmp0_apply.set_style_yrvwzh_k$(Companion_getInstance_24().get_Fill_xeknbt_k$());
      tmp$ret$0 = tmp0_apply;
      var tmp1_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.fillPaint_1 = tmp1_also;
      tmp$ret$1 = tmp1_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.strokePaint_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      tmp0_apply.set_style_yrvwzh_k$(Companion_getInstance_24().get_Stroke_dv2xoc_k$());
      tmp$ret$0 = tmp0_apply;
      var tmp1_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.strokePaint_1 = tmp1_also;
      tmp$ret$1 = tmp1_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp0_subject = drawStyle;
    var tmp;
    if (equals(tmp0_subject, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (tmp0_subject instanceof Stroke) {
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = obtainStrokePaint($this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.selectPaint.<anonymous>' call
        if (!(tmp0_apply.get_strokeWidth_pbded7_k$() === drawStyle.get_width_j0q4yl_k$())) {
          tmp0_apply.set_strokeWidth_3zju8k_k$(drawStyle.get_width_j0q4yl_k$());
        }
        if (!(tmp0_apply.get_strokeCap_du2v9b_k$() === drawStyle.get_cap_nlcndj_k$())) {
          tmp0_apply.set_strokeCap_un0ni9_k$(drawStyle.get_cap_nlcndj_k$());
        }
        if (!(tmp0_apply.get_strokeMiterLimit_p3434n_k$() === drawStyle.get_miter_iv8ijg_k$())) {
          tmp0_apply.set_strokeMiterLimit_jliqsy_k$(drawStyle.get_miter_iv8ijg_k$());
        }
        if (!(tmp0_apply.get_strokeJoin_t4v9w5_k$() === drawStyle.get_join_s7mxx9_k$())) {
          tmp0_apply.set_strokeJoin_oa46bf_k$(drawStyle.get_join_s7mxx9_k$());
        }
        if (!equals(tmp0_apply.get_pathEffect_d6tz6p_k$(), drawStyle.get_pathEffect_d6tz6p_k$())) {
          tmp0_apply.set_pathEffect_eo4nwm_k$(drawStyle.get_pathEffect_d6tz6p_k$());
        }
        tmp$ret$0 = tmp0_apply;
        tmp = tmp$ret$0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.applyTo_w34vc_k$($this.get_size_x9ctfw_k$(), tmp0_apply, alpha);
    } else if (!(tmp0_apply.get_alpha_iooth1_k$() === alpha)) {
      tmp0_apply.set_alpha_k1tx50_k$(alpha);
    }
    if (!equals(tmp0_apply.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      tmp0_apply.set_colorFilter_l1l4p0_k$(colorFilter);
    }
    if (!(tmp0_apply.get_blendMode_m8dzwh_k$() === blendMode)) {
      tmp0_apply.set_blendMode_gchh35_k$(blendMode);
    }
    if (!(tmp0_apply.get_filterQuality_2xbue9_k$() === filterQuality)) {
      tmp0_apply.set_filterQuality_8e157j_k$(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_44().get_DefaultFilterQuality_lpc3m8_k$() : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(tmp0_apply.get_color_v34vrz_k$(), targetColor)) {
      tmp0_apply.set_color_b5evhd_k$(targetColor);
    }
    if (!(tmp0_apply.get_shader_jgtazy_k$() == null)) {
      tmp0_apply.set_shader_bd5o0m_k$(null);
    }
    if (!equals(tmp0_apply.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      tmp0_apply.set_colorFilter_l1l4p0_k$(colorFilter);
    }
    if (!(tmp0_apply.get_blendMode_m8dzwh_k$() === blendMode)) {
      tmp0_apply.set_blendMode_gchh35_k$(blendMode);
    }
    if (!(tmp0_apply.get_filterQuality_2xbue9_k$() === filterQuality)) {
      tmp0_apply.set_filterQuality_8e157j_k$(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_44().get_DefaultFilterQuality_lpc3m8_k$() : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = obtainStrokePaint($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configureStrokePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(tmp0_apply.get_color_v34vrz_k$(), targetColor)) {
      tmp0_apply.set_color_b5evhd_k$(targetColor);
    }
    if (!(tmp0_apply.get_shader_jgtazy_k$() == null)) {
      tmp0_apply.set_shader_bd5o0m_k$(null);
    }
    if (!equals(tmp0_apply.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      tmp0_apply.set_colorFilter_l1l4p0_k$(colorFilter);
    }
    if (!(tmp0_apply.get_blendMode_m8dzwh_k$() === blendMode)) {
      tmp0_apply.set_blendMode_gchh35_k$(blendMode);
    }
    if (!(tmp0_apply.get_strokeWidth_pbded7_k$() === strokeWidth)) {
      tmp0_apply.set_strokeWidth_3zju8k_k$(strokeWidth);
    }
    if (!(tmp0_apply.get_strokeMiterLimit_p3434n_k$() === miter)) {
      tmp0_apply.set_strokeMiterLimit_jliqsy_k$(miter);
    }
    if (!(tmp0_apply.get_strokeCap_du2v9b_k$() === cap)) {
      tmp0_apply.set_strokeCap_un0ni9_k$(cap);
    }
    if (!(tmp0_apply.get_strokeJoin_t4v9w5_k$() === join)) {
      tmp0_apply.set_strokeJoin_oa46bf_k$(join);
    }
    if (!equals(tmp0_apply.get_pathEffect_d6tz6p_k$(), pathEffect)) {
      tmp0_apply.set_pathEffect_eo4nwm_k$(pathEffect);
    }
    if (!(tmp0_apply.get_filterQuality_2xbue9_k$() === filterQuality)) {
      tmp0_apply.set_filterQuality_8e157j_k$(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configureStrokePaint$default($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_44().get_DefaultFilterQuality_lpc3m8_k$() : filterQuality;
    return configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = obtainStrokePaint($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configureStrokePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.applyTo_w34vc_k$($this.get_size_x9ctfw_k$(), tmp0_apply, alpha);
    } else if (!(tmp0_apply.get_alpha_iooth1_k$() === alpha)) {
      tmp0_apply.set_alpha_k1tx50_k$(alpha);
    }
    if (!equals(tmp0_apply.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      tmp0_apply.set_colorFilter_l1l4p0_k$(colorFilter);
    }
    if (!(tmp0_apply.get_blendMode_m8dzwh_k$() === blendMode)) {
      tmp0_apply.set_blendMode_gchh35_k$(blendMode);
    }
    if (!(tmp0_apply.get_strokeWidth_pbded7_k$() === strokeWidth)) {
      tmp0_apply.set_strokeWidth_3zju8k_k$(strokeWidth);
    }
    if (!(tmp0_apply.get_strokeMiterLimit_p3434n_k$() === miter)) {
      tmp0_apply.set_strokeMiterLimit_jliqsy_k$(miter);
    }
    if (!(tmp0_apply.get_strokeCap_du2v9b_k$() === cap)) {
      tmp0_apply.set_strokeCap_un0ni9_k$(cap);
    }
    if (!(tmp0_apply.get_strokeJoin_t4v9w5_k$() === join)) {
      tmp0_apply.set_strokeJoin_oa46bf_k$(join);
    }
    if (!equals(tmp0_apply.get_pathEffect_d6tz6p_k$(), pathEffect)) {
      tmp0_apply.set_pathEffect_eo4nwm_k$(pathEffect);
    }
    if (!(tmp0_apply.get_filterQuality_2xbue9_k$() === filterQuality)) {
      tmp0_apply.set_filterQuality_8e157j_k$(filterQuality);
    }
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function configureStrokePaint$default_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_44().get_DefaultFilterQuality_lpc3m8_k$() : filterQuality;
    return configureStrokePaint_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__u8e3s4, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? new EmptyCanvas() : canvas;
    size = size === VOID ? Companion_getInstance_0().get_Zero_mv7bl9_k$() : size;
    this.density_1 = density;
    this.layoutDirection_1 = layoutDirection;
    this.canvas_1 = canvas;
    this.size_1 = size;
  }
  protoOf(DrawParams).set_density_kzqph6_k$ = function (_set____db54di) {
    this.density_1 = _set____db54di;
  };
  protoOf(DrawParams).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(DrawParams).set_layoutDirection_g6d9ui_k$ = function (_set____db54di) {
    this.layoutDirection_1 = _set____db54di;
  };
  protoOf(DrawParams).get_layoutDirection_7e37v0_k$ = function () {
    return this.layoutDirection_1;
  };
  protoOf(DrawParams).set_canvas_eyjvr_k$ = function (_set____db54di) {
    this.canvas_1 = _set____db54di;
  };
  protoOf(DrawParams).get_canvas_bshgm9_k$ = function () {
    return this.canvas_1;
  };
  protoOf(DrawParams).set_size_xj1bzm_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(DrawParams).get_size_x9ctfw_k$ = function () {
    return this.size_1;
  };
  protoOf(DrawParams).component1_7eebsc_k$ = function () {
    return this.density_1;
  };
  protoOf(DrawParams).component2_7eebsb_k$ = function () {
    return this.layoutDirection_1;
  };
  protoOf(DrawParams).component3_7eebsa_k$ = function () {
    return this.canvas_1;
  };
  protoOf(DrawParams).component4_e3pqs9_k$ = function () {
    return this.size_1;
  };
  protoOf(DrawParams).copy_vtyzqi_k$ = function (density, layoutDirection, canvas, size) {
    return new DrawParams(density, layoutDirection, canvas, size);
  };
  protoOf(DrawParams).copy$default_y1o7hl_k$ = function (density, layoutDirection, canvas, size, $super) {
    density = density === VOID ? this.density_1 : density;
    layoutDirection = layoutDirection === VOID ? this.layoutDirection_1 : layoutDirection;
    canvas = canvas === VOID ? this.canvas_1 : canvas;
    size = size === VOID ? this.size_1 : size;
    return $super === VOID ? this.copy_vtyzqi_k$(density, layoutDirection, canvas, size) : $super.copy_vtyzqi_k$.call(this, density, layoutDirection, canvas, new Size_0(size));
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + this.density_1 + ', layoutDirection=' + this.layoutDirection_1 + ', canvas=' + this.canvas_1 + ', size=' + new Size_0(this.size_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.density_1);
    result = imul(result, 31) + this.layoutDirection_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.canvas_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.size_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.density_1, tmp0_other_with_cast.density_1))
      return false;
    if (!this.layoutDirection_1.equals(tmp0_other_with_cast.layoutDirection_1))
      return false;
    if (!equals(this.canvas_1, tmp0_other_with_cast.canvas_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.this$0__1 = this$0;
    this.transform_1 = asDrawTransform(this);
  }
  protoOf(CanvasDrawScope$drawContext$1).get_canvas_bshgm9_k$ = function () {
    return this.this$0__1.drawParams_1.canvas_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).set_size_xj1bzm_k$ = function (value) {
    this.this$0__1.drawParams_1.size_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_size_x9ctfw_k$ = function () {
    return this.this$0__1.drawParams_1.size_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
  function CanvasDrawScope() {
    this.drawParams_1 = new DrawParams();
    var tmp = this;
    tmp.drawContext_1 = new CanvasDrawScope$drawContext$1(this);
    this.fillPaint_1 = null;
    this.strokePaint_1 = null;
  }
  protoOf(CanvasDrawScope).get_drawParams_ncgfpp_k$ = function () {
    return this.drawParams_1;
  };
  protoOf(CanvasDrawScope).get_layoutDirection_7e37v0_k$ = function () {
    return this.drawParams_1.layoutDirection_1;
  };
  protoOf(CanvasDrawScope).get_density_qy0267_k$ = function () {
    return this.drawParams_1.density_1.get_density_qy0267_k$();
  };
  protoOf(CanvasDrawScope).get_fontScale_h56n3i_k$ = function () {
    return this.drawParams_1.density_1.get_fontScale_h56n3i_k$();
  };
  protoOf(CanvasDrawScope).get_drawContext_ffwztu_k$ = function () {
    return this.drawContext_1;
  };
  protoOf(CanvasDrawScope).drawLine_94tzv7_k$ = function (brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawLine_uyv0nw_k$(start, end, configureStrokePaint$default_0(this, brush, strokeWidth, Companion_getInstance_45().get_DefaultMiter_3rtz6b_k$(), cap, Companion_getInstance_33().get_Miter_rcwd8a_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawLine_qcvbii_k$ = function (color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawLine_uyv0nw_k$(start, end, configureStrokePaint$default(this, color, strokeWidth, Companion_getInstance_45().get_DefaultMiter_3rtz6b_k$(), cap, Companion_getInstance_33().get_Miter_rcwd8a_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawRect_4jm64w_k$ = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawRect_iwqaze_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawRect_srg7q1_k$ = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawRect_iwqaze_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawImage_bk8e6s_k$ = function (image, topLeft, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawImage_wbfair_k$(image, topLeft, configurePaint$default(this, null, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawImage_td6jz_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawImageRect_pn8joi_k$(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint$default(this, null, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawImage_riofdh_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.drawParams_1.canvas_1.drawImageRect_pn8joi_k$(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).drawRoundRect_nkvmol_k$ = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawRoundRect_8v0cs4_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawRoundRect_q7amlu_k$ = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawRoundRect_8v0cs4_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawCircle_sp46sp_k$ = function (brush, radius, center, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawCircle_8yzxtr_k$(center, radius, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawCircle_n7txn6_k$ = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawCircle_8yzxtr_k$(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawOval_poyb4u_k$ = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawOval_wmf8q4_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawOval_1h49jp_k$ = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawOval_wmf8q4_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawArc_vjjneq_k$ = function (brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawArc_xj6sd2_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), startAngle, sweepAngle, useCenter, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawArc_y7e861_k$ = function (color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawArc_xj6sd2_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), startAngle, sweepAngle, useCenter, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPath_vpl0ok_k$ = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPath_843lu1_k$(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPath_vsb9f_k$ = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPath_843lu1_k$(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPoints_tvcs0g_k$ = function (points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPoints_7nk41w_k$(pointMode, points, configureStrokePaint$default(this, color, strokeWidth, Companion_getInstance_45().get_DefaultMiter_3rtz6b_k$(), cap, Companion_getInstance_33().get_Miter_rcwd8a_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPoints_yexgjr_k$ = function (points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPoints_7nk41w_k$(pointMode, points, configureStrokePaint$default_0(this, brush, strokeWidth, Companion_getInstance_45().get_DefaultMiter_3rtz6b_k$(), cap, Companion_getInstance_33().get_Miter_rcwd8a_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).draw_3qpj3e_k$ = function (density, layoutDirection, canvas, size, block) {
    var tmp0_container = this.drawParams_1;
    var prevDensity = tmp0_container.component1_7eebsc_k$();
    var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
    var prevCanvas = tmp0_container.component3_7eebsa_k$();
    var prevSize = tmp0_container.component4_e3pqs9_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.drawParams_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp0_apply.density_1 = density;
    tmp0_apply.layoutDirection_1 = layoutDirection;
    tmp0_apply.canvas_1 = canvas;
    tmp0_apply.size_1 = size;
    tmp$ret$0 = tmp0_apply;
    canvas.save_erlm4_k$();
    block(this);
    canvas.restore_a2id37_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = this.drawParams_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp1_apply.density_1 = prevDensity;
    tmp1_apply.layoutDirection_1 = prevLayoutDirection;
    tmp1_apply.canvas_1 = prevCanvas;
    tmp1_apply.size_1 = prevSize;
    tmp$ret$1 = tmp1_apply;
  };
  function asDrawTransform(_this__u8e3s4) {
    _init_properties_CanvasDrawScope_kt__90zepm();
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.$this_asDrawTransform_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).get_size_x9ctfw_k$ = function () {
    return this.$this_asDrawTransform_1.get_size_x9ctfw_k$();
  };
  protoOf(asDrawTransform$1).get_center_568eeq_k$ = function () {
    return get_center(this.get_size_x9ctfw_k$());
  };
  protoOf(asDrawTransform$1).inset_n0cgms_k$ = function (left, top, right, bottom) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'kotlin.contracts.contract' call
    var updatedSize = Size(_Size___get_width__impl__58y75t(this.get_size_x9ctfw_k$()) - (left + right), _Size___get_height__impl__a04p02(this.get_size_x9ctfw_k$()) - (top + bottom));
    // Inline function 'kotlin.require' call
    var tmp0_require = _Size___get_width__impl__58y75t(updatedSize) >= 0 ? _Size___get_height__impl__a04p02(updatedSize) >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.inset.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'Width and height must be greater than or equal to zero';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.$this_asDrawTransform_1.set_size_xj1bzm_k$(updatedSize);
    tmp0_let.translate_62wf99_k$(left, top);
    tmp$ret$1 = Unit_getInstance();
  };
  protoOf(asDrawTransform$1).clipRect_si0ig1_k$ = function (left, top, right, bottom, clipOp) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).clipPath_kn87dc_k$ = function (path, clipOp) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().clipPath_kn87dc_k$(path, clipOp);
  };
  protoOf(asDrawTransform$1).translate_62wf99_k$ = function (left, top) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().translate_62wf99_k$(left, top);
  };
  protoOf(asDrawTransform$1).rotate_qski4n_k$ = function (degrees, pivot) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.rotate.<anonymous>' call
    tmp0_apply.translate_62wf99_k$(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    tmp0_apply.rotate_ypq2w2_k$(degrees);
    tmp0_apply.translate_62wf99_k$(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
    tmp$ret$0 = tmp0_apply;
  };
  protoOf(asDrawTransform$1).scale_qp5ya8_k$ = function (scaleX, scaleY, pivot) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    tmp0_apply.translate_62wf99_k$(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    tmp0_apply.scale_sphyvb_k$(scaleX, scaleY);
    tmp0_apply.translate_62wf99_k$(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
    tmp$ret$0 = tmp0_apply;
  };
  protoOf(asDrawTransform$1).transform_v2nyvt_k$ = function (matrix) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().concat_oxfhdd_k$(matrix);
  };
  var properties_initialized_CanvasDrawScope_kt_93ztlk;
  function _init_properties_CanvasDrawScope_kt__90zepm() {
    if (properties_initialized_CanvasDrawScope_kt_93ztlk) {
    } else {
      properties_initialized_CanvasDrawScope_kt_93ztlk = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function ContentDrawScope() {
  }
  function DrawContext() {
  }
  function DrawStyle() {
  }
  function offsetSize(_this__u8e3s4, $this, offset) {
    return Size(_Size___get_width__impl__58y75t(_this__u8e3s4) - _Offset___get_x__impl__xvi35n(offset), _Size___get_height__impl__a04p02(_this__u8e3s4) - _Offset___get_y__impl__8bzhra(offset));
  }
  function Companion_29() {
    Companion_instance_29 = this;
    this.DefaultBlendMode_1 = Companion_getInstance_14().get_SrcOver_uyf80z_k$();
    this.DefaultFilterQuality_1 = Companion_getInstance_19().get_Low_lx4az0_k$();
  }
  protoOf(Companion_29).get_DefaultBlendMode_8kor9s_k$ = function () {
    return this.DefaultBlendMode_1;
  };
  protoOf(Companion_29).get_DefaultFilterQuality_lpc3m8_k$ = function () {
    return this.DefaultFilterQuality_1;
  };
  var Companion_instance_29;
  function Companion_getInstance_44() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function DrawScope() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.HairlineWidth_1 = 0.0;
    this.DefaultMiter_1 = 4.0;
    this.DefaultCap_1 = Companion_getInstance_32().get_Butt_vf89me_k$();
    this.DefaultJoin_1 = Companion_getInstance_33().get_Miter_rcwd8a_k$();
  }
  protoOf(Companion_30).get_HairlineWidth_tck213_k$ = function () {
    return this.HairlineWidth_1;
  };
  protoOf(Companion_30).get_DefaultMiter_3rtz6b_k$ = function () {
    return this.DefaultMiter_1;
  };
  protoOf(Companion_30).get_DefaultCap_alsnaw_k$ = function () {
    return this.DefaultCap_1;
  };
  protoOf(Companion_30).get_DefaultJoin_5ovl58_k$ = function () {
    return this.DefaultJoin_1;
  };
  var Companion_instance_30;
  function Companion_getInstance_45() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_45();
    width = width === VOID ? 0.0 : width;
    var tmp;
    if (miter === VOID) {
      Companion_getInstance_45();
      tmp = 4.0;
    } else {
      tmp = miter;
    }
    miter = tmp;
    cap = cap === VOID ? Companion_getInstance_45().DefaultCap_1 : cap;
    join = join === VOID ? Companion_getInstance_45().DefaultJoin_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.width_1 = width;
    this.miter_1 = miter;
    this.cap_1 = cap;
    this.join_1 = join;
    this.pathEffect_1 = pathEffect;
  }
  protoOf(Stroke).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(Stroke).get_miter_iv8ijg_k$ = function () {
    return this.miter_1;
  };
  protoOf(Stroke).get_cap_nlcndj_k$ = function () {
    return this.cap_1;
  };
  protoOf(Stroke).get_join_s7mxx9_k$ = function () {
    return this.join_1;
  };
  protoOf(Stroke).get_pathEffect_d6tz6p_k$ = function () {
    return this.pathEffect_1;
  };
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.width_1 === other.width_1))
      return false;
    if (!(this.miter_1 === other.miter_1))
      return false;
    if (!(this.cap_1 === other.cap_1))
      return false;
    if (!(this.join_1 === other.join_1))
      return false;
    if (!equals(this.pathEffect_1, other.pathEffect_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.width_1);
    result = imul(31, result) + getNumberHashCode(this.miter_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.cap_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.join_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.pathEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.width_1 + ', miter=' + this.miter_1 + ', cap=' + new StrokeCap(this.cap_1) + ', join=' + new StrokeJoin(this.join_1) + ', pathEffect=' + this.pathEffect_1 + ')';
  };
  function drawIntoCanvas(_this__u8e3s4, block) {
    return block(_this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$());
  }
  function translate(_this__u8e3s4, left, top, block) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(left, top);
    block(_this__u8e3s4);
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(-left, -top);
  }
  function scale(_this__u8e3s4, scaleX, scaleY, pivot, block) {
    pivot = pivot === VOID ? _this__u8e3s4.get_center_568eeq_k$() : pivot;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    // Inline function 'kotlin.contracts.contract' call
    var previousSize = tmp0_with.get_size_x9ctfw_k$();
    tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
    // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
    var tmp1__anonymous__uwfjfc = tmp0_with.get_transform_px941v_k$();
    tmp1__anonymous__uwfjfc.scale_qp5ya8_k$(scaleX, scaleY, pivot);
    block(_this__u8e3s4);
    tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
    tmp0_with.set_size_xj1bzm_k$(previousSize);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function clipRect_0(_this__u8e3s4, left, top, right, bottom, clipOp, block) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    right = right === VOID ? _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$()) : right;
    bottom = bottom === VOID ? _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$()) : bottom;
    clipOp = clipOp === VOID ? Companion_getInstance_16().get_Intersect_ow3v69_k$() : clipOp;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    // Inline function 'kotlin.contracts.contract' call
    var previousSize = tmp0_with.get_size_x9ctfw_k$();
    tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
    // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
    var tmp1__anonymous__uwfjfc = tmp0_with.get_transform_px941v_k$();
    tmp1__anonymous__uwfjfc.clipRect_si0ig1_k$(left, top, right, bottom, clipOp);
    block(_this__u8e3s4);
    tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
    tmp0_with.set_size_xj1bzm_k$(previousSize);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function withTransform(_this__u8e3s4, transformBlock, drawBlock) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    // Inline function 'kotlin.contracts.contract' call
    var previousSize = tmp0_with.get_size_x9ctfw_k$();
    tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
    transformBlock(tmp0_with.get_transform_px941v_k$());
    drawBlock(_this__u8e3s4);
    tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
    tmp0_with.set_size_xj1bzm_k$(previousSize);
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  }
  function DrawScopeMarker() {
  }
  protoOf(DrawScopeMarker).equals = function (other) {
    if (!(other instanceof DrawScopeMarker))
      return false;
    var tmp0_other_with_cast = other instanceof DrawScopeMarker ? other : THROW_CCE();
    return true;
  };
  protoOf(DrawScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(DrawScopeMarker).toString = function () {
    return '@androidx.compose.ui.graphics.drawscope.DrawScopeMarker()';
  };
  function DrawTransform() {
  }
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).save_erlm4_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).restore_a2id37_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).saveLayer_f9ux7q_k$ = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).translate_62wf99_k$ = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).scale_sphyvb_k$ = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).rotate_ypq2w2_k$ = function (degrees) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).skew_hcshkp_k$ = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).concat_oxfhdd_k$ = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).clipRect_si0ig1_k$ = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).clipPath_kn87dc_k$ = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawLine_uyv0nw_k$ = function (p1, p2, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawRect_iwqaze_k$ = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawRoundRect_8v0cs4_k$ = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawOval_wmf8q4_k$ = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawCircle_8yzxtr_k$ = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawArc_xj6sd2_k$ = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawPath_843lu1_k$ = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawImage_wbfair_k$ = function (image, topLeftOffset, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawImageRect_pn8joi_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawPoints_7nk41w_k$ = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawRawPoints_xnm1nu_k$ = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawVertices_blo9xi_k$ = function (vertices, blendMode, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).enableZ_eyv21m_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).disableZ_14frxd_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  function Close() {
    Close_instance = this;
    PathNode.call(this);
  }
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo(dx, dy) {
    PathNode.call(this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  protoOf(RelativeMoveTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeMoveTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeMoveTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeMoveTo).component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeMoveTo).copy_138fzp_k$ = function (dx, dy) {
    return new RelativeMoveTo(dx, dy);
  };
  protoOf(RelativeMoveTo).copy$default_y9dnr9_k$ = function (dx, dy, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_138fzp_k$(dx, dy) : $super.copy_138fzp_k$.call(this, dx, dy);
  };
  protoOf(RelativeMoveTo).toString = function () {
    return 'RelativeMoveTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeMoveTo).hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  protoOf(RelativeMoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeMoveTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function MoveTo(x, y) {
    PathNode.call(this);
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(MoveTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(MoveTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(MoveTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(MoveTo).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(MoveTo).copy_138fzp_k$ = function (x, y) {
    return new MoveTo(x, y);
  };
  protoOf(MoveTo).copy$default_evt90n_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_138fzp_k$(x, y) : $super.copy_138fzp_k$.call(this, x, y);
  };
  protoOf(MoveTo).toString = function () {
    return 'MoveTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(MoveTo).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(MoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeLineTo(dx, dy) {
    PathNode.call(this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  protoOf(RelativeLineTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeLineTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeLineTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeLineTo).component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeLineTo).copy_138fzp_k$ = function (dx, dy) {
    return new RelativeLineTo(dx, dy);
  };
  protoOf(RelativeLineTo).copy$default_j4o0vs_k$ = function (dx, dy, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_138fzp_k$(dx, dy) : $super.copy_138fzp_k$.call(this, dx, dy);
  };
  protoOf(RelativeLineTo).toString = function () {
    return 'RelativeLineTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeLineTo).hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  protoOf(RelativeLineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function LineTo(x, y) {
    PathNode.call(this);
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(LineTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(LineTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(LineTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(LineTo).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(LineTo).copy_138fzp_k$ = function (x, y) {
    return new LineTo(x, y);
  };
  protoOf(LineTo).copy$default_2r94bg_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_138fzp_k$(x, y) : $super.copy_138fzp_k$.call(this, x, y);
  };
  protoOf(LineTo).toString = function () {
    return 'LineTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(LineTo).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(LineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeHorizontalTo(dx) {
    PathNode.call(this);
    this.dx_1 = dx;
  }
  protoOf(RelativeHorizontalTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeHorizontalTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeHorizontalTo).copy_i912ft_k$ = function (dx) {
    return new RelativeHorizontalTo(dx);
  };
  protoOf(RelativeHorizontalTo).copy$default_rluqbb_k$ = function (dx, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    return $super === VOID ? this.copy_i912ft_k$(dx) : $super.copy_i912ft_k$.call(this, dx);
  };
  protoOf(RelativeHorizontalTo).toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.dx_1 + ')';
  };
  protoOf(RelativeHorizontalTo).hashCode = function () {
    return getNumberHashCode(this.dx_1);
  };
  protoOf(RelativeHorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    return true;
  };
  function HorizontalTo(x) {
    PathNode.call(this);
    this.x_1 = x;
  }
  protoOf(HorizontalTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(HorizontalTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(HorizontalTo).copy_i912ft_k$ = function (x) {
    return new HorizontalTo(x);
  };
  protoOf(HorizontalTo).copy$default_jipkwz_k$ = function (x, $super) {
    x = x === VOID ? this.x_1 : x;
    return $super === VOID ? this.copy_i912ft_k$(x) : $super.copy_i912ft_k$.call(this, x);
  };
  protoOf(HorizontalTo).toString = function () {
    return 'HorizontalTo(x=' + this.x_1 + ')';
  };
  protoOf(HorizontalTo).hashCode = function () {
    return getNumberHashCode(this.x_1);
  };
  protoOf(HorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    return true;
  };
  function RelativeVerticalTo(dy) {
    PathNode.call(this);
    this.dy_1 = dy;
  }
  protoOf(RelativeVerticalTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeVerticalTo).component1_7eebsc_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeVerticalTo).copy_i912ft_k$ = function (dy) {
    return new RelativeVerticalTo(dy);
  };
  protoOf(RelativeVerticalTo).copy$default_dopvc5_k$ = function (dy, $super) {
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_i912ft_k$(dy) : $super.copy_i912ft_k$.call(this, dy);
  };
  protoOf(RelativeVerticalTo).toString = function () {
    return 'RelativeVerticalTo(dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeVerticalTo).hashCode = function () {
    return getNumberHashCode(this.dy_1);
  };
  protoOf(RelativeVerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function VerticalTo(y) {
    PathNode.call(this);
    this.y_1 = y;
  }
  protoOf(VerticalTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(VerticalTo).component1_7eebsc_k$ = function () {
    return this.y_1;
  };
  protoOf(VerticalTo).copy_i912ft_k$ = function (y) {
    return new VerticalTo(y);
  };
  protoOf(VerticalTo).copy$default_yqro0h_k$ = function (y, $super) {
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_i912ft_k$(y) : $super.copy_i912ft_k$.call(this, y);
  };
  protoOf(VerticalTo).toString = function () {
    return 'VerticalTo(y=' + this.y_1 + ')';
  };
  protoOf(VerticalTo).hashCode = function () {
    return getNumberHashCode(this.y_1);
  };
  protoOf(VerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode.call(this, true);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
    this.dx3__1 = dx3;
    this.dy3__1 = dy3;
  }
  protoOf(RelativeCurveTo).get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeCurveTo).get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeCurveTo).get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeCurveTo).get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeCurveTo).get_dx3_18j70q_k$ = function () {
    return this.dx3__1;
  };
  protoOf(RelativeCurveTo).get_dy3_18j6zv_k$ = function () {
    return this.dy3__1;
  };
  protoOf(RelativeCurveTo).component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeCurveTo).component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeCurveTo).component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeCurveTo).component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeCurveTo).component5_7eebs8_k$ = function () {
    return this.dx3__1;
  };
  protoOf(RelativeCurveTo).component6_7eebs7_k$ = function () {
    return this.dy3__1;
  };
  protoOf(RelativeCurveTo).copy_htf379_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    return new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(RelativeCurveTo).copy$default_ia0div_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3, $super) {
    dx1 = dx1 === VOID ? this.dx1__1 : dx1;
    dy1 = dy1 === VOID ? this.dy1__1 : dy1;
    dx2 = dx2 === VOID ? this.dx2__1 : dx2;
    dy2 = dy2 === VOID ? this.dy2__1 : dy2;
    dx3 = dx3 === VOID ? this.dx3__1 : dx3;
    dy3 = dy3 === VOID ? this.dy3__1 : dy3;
    return $super === VOID ? this.copy_htf379_k$(dx1, dy1, dx2, dy2, dx3, dy3) : $super.copy_htf379_k$.call(this, dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(RelativeCurveTo).toString = function () {
    return 'RelativeCurveTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ', dx3=' + this.dx3__1 + ', dy3=' + this.dy3__1 + ')';
  };
  protoOf(RelativeCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx3__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy3__1) | 0;
    return result;
  };
  protoOf(RelativeCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    if (!equals(this.dx3__1, tmp0_other_with_cast.dx3__1))
      return false;
    if (!equals(this.dy3__1, tmp0_other_with_cast.dy3__1))
      return false;
    return true;
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode.call(this, true);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
    this.x3__1 = x3;
    this.y3__1 = y3;
  }
  protoOf(CurveTo).get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  protoOf(CurveTo).get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  protoOf(CurveTo).get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  protoOf(CurveTo).get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  protoOf(CurveTo).get_x3_kntnlo_k$ = function () {
    return this.x3__1;
  };
  protoOf(CurveTo).get_y3_kntnkt_k$ = function () {
    return this.y3__1;
  };
  protoOf(CurveTo).component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  protoOf(CurveTo).component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  protoOf(CurveTo).component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  protoOf(CurveTo).component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  protoOf(CurveTo).component5_7eebs8_k$ = function () {
    return this.x3__1;
  };
  protoOf(CurveTo).component6_7eebs7_k$ = function () {
    return this.y3__1;
  };
  protoOf(CurveTo).copy_htf379_k$ = function (x1, y1, x2, y2, x3, y3) {
    return new CurveTo(x1, y1, x2, y2, x3, y3);
  };
  protoOf(CurveTo).copy$default_lxsig3_k$ = function (x1, y1, x2, y2, x3, y3, $super) {
    x1 = x1 === VOID ? this.x1__1 : x1;
    y1 = y1 === VOID ? this.y1__1 : y1;
    x2 = x2 === VOID ? this.x2__1 : x2;
    y2 = y2 === VOID ? this.y2__1 : y2;
    x3 = x3 === VOID ? this.x3__1 : x3;
    y3 = y3 === VOID ? this.y3__1 : y3;
    return $super === VOID ? this.copy_htf379_k$(x1, y1, x2, y2, x3, y3) : $super.copy_htf379_k$.call(this, x1, y1, x2, y2, x3, y3);
  };
  protoOf(CurveTo).toString = function () {
    return 'CurveTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ', x3=' + this.x3__1 + ', y3=' + this.y3__1 + ')';
  };
  protoOf(CurveTo).hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x3__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y3__1) | 0;
    return result;
  };
  protoOf(CurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    if (!equals(this.x3__1, tmp0_other_with_cast.x3__1))
      return false;
    if (!equals(this.y3__1, tmp0_other_with_cast.y3__1))
      return false;
    return true;
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, true);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
  }
  protoOf(RelativeReflectiveCurveTo).get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeReflectiveCurveTo).get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeReflectiveCurveTo).get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeReflectiveCurveTo).get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeReflectiveCurveTo).component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeReflectiveCurveTo).component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeReflectiveCurveTo).component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeReflectiveCurveTo).component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeReflectiveCurveTo).copy_skjbed_k$ = function (dx1, dy1, dx2, dy2) {
    return new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeReflectiveCurveTo).copy$default_nngnk6_k$ = function (dx1, dy1, dx2, dy2, $super) {
    dx1 = dx1 === VOID ? this.dx1__1 : dx1;
    dy1 = dy1 === VOID ? this.dy1__1 : dy1;
    dx2 = dx2 === VOID ? this.dx2__1 : dx2;
    dy2 = dy2 === VOID ? this.dy2__1 : dy2;
    return $super === VOID ? this.copy_skjbed_k$(dx1, dy1, dx2, dy2) : $super.copy_skjbed_k$.call(this, dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeReflectiveCurveTo).toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ')';
  };
  protoOf(RelativeReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    return true;
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode.call(this, true);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
  }
  protoOf(ReflectiveCurveTo).get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  protoOf(ReflectiveCurveTo).get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  protoOf(ReflectiveCurveTo).get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  protoOf(ReflectiveCurveTo).get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  protoOf(ReflectiveCurveTo).component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  protoOf(ReflectiveCurveTo).component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  protoOf(ReflectiveCurveTo).component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  protoOf(ReflectiveCurveTo).component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  protoOf(ReflectiveCurveTo).copy_skjbed_k$ = function (x1, y1, x2, y2) {
    return new ReflectiveCurveTo(x1, y1, x2, y2);
  };
  protoOf(ReflectiveCurveTo).copy$default_173zxi_k$ = function (x1, y1, x2, y2, $super) {
    x1 = x1 === VOID ? this.x1__1 : x1;
    y1 = y1 === VOID ? this.y1__1 : y1;
    x2 = x2 === VOID ? this.x2__1 : x2;
    y2 = y2 === VOID ? this.y2__1 : y2;
    return $super === VOID ? this.copy_skjbed_k$(x1, y1, x2, y2) : $super.copy_skjbed_k$.call(this, x1, y1, x2, y2);
  };
  protoOf(ReflectiveCurveTo).toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ')';
  };
  protoOf(ReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    return result;
  };
  protoOf(ReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    return true;
  };
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, VOID, true);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
  }
  protoOf(RelativeQuadTo).get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeQuadTo).get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeQuadTo).get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeQuadTo).get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeQuadTo).component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeQuadTo).component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeQuadTo).component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeQuadTo).component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeQuadTo).copy_skjbed_k$ = function (dx1, dy1, dx2, dy2) {
    return new RelativeQuadTo(dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeQuadTo).copy$default_m4orq1_k$ = function (dx1, dy1, dx2, dy2, $super) {
    dx1 = dx1 === VOID ? this.dx1__1 : dx1;
    dy1 = dy1 === VOID ? this.dy1__1 : dy1;
    dx2 = dx2 === VOID ? this.dx2__1 : dx2;
    dy2 = dy2 === VOID ? this.dy2__1 : dy2;
    return $super === VOID ? this.copy_skjbed_k$(dx1, dy1, dx2, dy2) : $super.copy_skjbed_k$.call(this, dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeQuadTo).toString = function () {
    return 'RelativeQuadTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ')';
  };
  protoOf(RelativeQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    return result;
  };
  protoOf(RelativeQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeQuadTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    return true;
  };
  function QuadTo(x1, y1, x2, y2) {
    PathNode.call(this, VOID, true);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
  }
  protoOf(QuadTo).get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  protoOf(QuadTo).get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  protoOf(QuadTo).get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  protoOf(QuadTo).get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  protoOf(QuadTo).component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  protoOf(QuadTo).component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  protoOf(QuadTo).component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  protoOf(QuadTo).component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  protoOf(QuadTo).copy_skjbed_k$ = function (x1, y1, x2, y2) {
    return new QuadTo(x1, y1, x2, y2);
  };
  protoOf(QuadTo).copy$default_hx6igd_k$ = function (x1, y1, x2, y2, $super) {
    x1 = x1 === VOID ? this.x1__1 : x1;
    y1 = y1 === VOID ? this.y1__1 : y1;
    x2 = x2 === VOID ? this.x2__1 : x2;
    y2 = y2 === VOID ? this.y2__1 : y2;
    return $super === VOID ? this.copy_skjbed_k$(x1, y1, x2, y2) : $super.copy_skjbed_k$.call(this, x1, y1, x2, y2);
  };
  protoOf(QuadTo).toString = function () {
    return 'QuadTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ')';
  };
  protoOf(QuadTo).hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    return result;
  };
  protoOf(QuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof QuadTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    return true;
  };
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode.call(this, VOID, true);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  protoOf(RelativeReflectiveQuadTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeReflectiveQuadTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeReflectiveQuadTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeReflectiveQuadTo).component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeReflectiveQuadTo).copy_138fzp_k$ = function (dx, dy) {
    return new RelativeReflectiveQuadTo(dx, dy);
  };
  protoOf(RelativeReflectiveQuadTo).copy$default_7gpet2_k$ = function (dx, dy, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_138fzp_k$(dx, dy) : $super.copy_138fzp_k$.call(this, dx, dy);
  };
  protoOf(RelativeReflectiveQuadTo).toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function ReflectiveQuadTo(x, y) {
    PathNode.call(this, VOID, true);
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(ReflectiveQuadTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(ReflectiveQuadTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(ReflectiveQuadTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(ReflectiveQuadTo).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(ReflectiveQuadTo).copy_138fzp_k$ = function (x, y) {
    return new ReflectiveQuadTo(x, y);
  };
  protoOf(ReflectiveQuadTo).copy$default_jd90wa_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_138fzp_k$(x, y) : $super.copy_138fzp_k$.call(this, x, y);
  };
  protoOf(ReflectiveQuadTo).toString = function () {
    return 'ReflectiveQuadTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(ReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(ReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode.call(this);
    this.horizontalEllipseRadius_1 = horizontalEllipseRadius;
    this.verticalEllipseRadius_1 = verticalEllipseRadius;
    this.theta_1 = theta;
    this.isMoreThanHalf_1 = isMoreThanHalf;
    this.isPositiveArc_1 = isPositiveArc;
    this.arcStartDx_1 = arcStartDx;
    this.arcStartDy_1 = arcStartDy;
  }
  protoOf(RelativeArcTo).get_horizontalEllipseRadius_i0l277_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).get_verticalEllipseRadius_bilkpd_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).get_theta_iz24xh_k$ = function () {
    return this.theta_1;
  };
  protoOf(RelativeArcTo).get_isMoreThanHalf_ok4n2c_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(RelativeArcTo).get_isPositiveArc_qpecd6_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(RelativeArcTo).get_arcStartDx_twxbvx_k$ = function () {
    return this.arcStartDx_1;
  };
  protoOf(RelativeArcTo).get_arcStartDy_twxbvy_k$ = function () {
    return this.arcStartDy_1;
  };
  protoOf(RelativeArcTo).component1_7eebsc_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).component2_7eebsb_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).component3_7eebsa_k$ = function () {
    return this.theta_1;
  };
  protoOf(RelativeArcTo).component4_7eebs9_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(RelativeArcTo).component5_7eebs8_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(RelativeArcTo).component6_7eebs7_k$ = function () {
    return this.arcStartDx_1;
  };
  protoOf(RelativeArcTo).component7_7eebs6_k$ = function () {
    return this.arcStartDy_1;
  };
  protoOf(RelativeArcTo).copy_2l8civ_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    return new RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy);
  };
  protoOf(RelativeArcTo).copy$default_49ndgt_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy, $super) {
    horizontalEllipseRadius = horizontalEllipseRadius === VOID ? this.horizontalEllipseRadius_1 : horizontalEllipseRadius;
    verticalEllipseRadius = verticalEllipseRadius === VOID ? this.verticalEllipseRadius_1 : verticalEllipseRadius;
    theta = theta === VOID ? this.theta_1 : theta;
    isMoreThanHalf = isMoreThanHalf === VOID ? this.isMoreThanHalf_1 : isMoreThanHalf;
    isPositiveArc = isPositiveArc === VOID ? this.isPositiveArc_1 : isPositiveArc;
    arcStartDx = arcStartDx === VOID ? this.arcStartDx_1 : arcStartDx;
    arcStartDy = arcStartDy === VOID ? this.arcStartDy_1 : arcStartDy;
    return $super === VOID ? this.copy_2l8civ_k$(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) : $super.copy_2l8civ_k$.call(this, horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy);
  };
  protoOf(RelativeArcTo).toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.horizontalEllipseRadius_1 + ', verticalEllipseRadius=' + this.verticalEllipseRadius_1 + ', theta=' + this.theta_1 + ', isMoreThanHalf=' + this.isMoreThanHalf_1 + ', isPositiveArc=' + this.isPositiveArc_1 + ', arcStartDx=' + this.arcStartDx_1 + ', arcStartDy=' + this.arcStartDy_1 + ')';
  };
  protoOf(RelativeArcTo).hashCode = function () {
    var result = getNumberHashCode(this.horizontalEllipseRadius_1);
    result = imul(result, 31) + getNumberHashCode(this.verticalEllipseRadius_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.theta_1) | 0;
    result = imul(result, 31) + (this.isMoreThanHalf_1 | 0) | 0;
    result = imul(result, 31) + (this.isPositiveArc_1 | 0) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartDx_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartDy_1) | 0;
    return result;
  };
  protoOf(RelativeArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeArcTo ? other : THROW_CCE();
    if (!equals(this.horizontalEllipseRadius_1, tmp0_other_with_cast.horizontalEllipseRadius_1))
      return false;
    if (!equals(this.verticalEllipseRadius_1, tmp0_other_with_cast.verticalEllipseRadius_1))
      return false;
    if (!equals(this.theta_1, tmp0_other_with_cast.theta_1))
      return false;
    if (!(this.isMoreThanHalf_1 === tmp0_other_with_cast.isMoreThanHalf_1))
      return false;
    if (!(this.isPositiveArc_1 === tmp0_other_with_cast.isPositiveArc_1))
      return false;
    if (!equals(this.arcStartDx_1, tmp0_other_with_cast.arcStartDx_1))
      return false;
    if (!equals(this.arcStartDy_1, tmp0_other_with_cast.arcStartDy_1))
      return false;
    return true;
  };
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode.call(this);
    this.horizontalEllipseRadius_1 = horizontalEllipseRadius;
    this.verticalEllipseRadius_1 = verticalEllipseRadius;
    this.theta_1 = theta;
    this.isMoreThanHalf_1 = isMoreThanHalf;
    this.isPositiveArc_1 = isPositiveArc;
    this.arcStartX_1 = arcStartX;
    this.arcStartY_1 = arcStartY;
  }
  protoOf(ArcTo).get_horizontalEllipseRadius_i0l277_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(ArcTo).get_verticalEllipseRadius_bilkpd_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(ArcTo).get_theta_iz24xh_k$ = function () {
    return this.theta_1;
  };
  protoOf(ArcTo).get_isMoreThanHalf_ok4n2c_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(ArcTo).get_isPositiveArc_qpecd6_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(ArcTo).get_arcStartX_stlj0h_k$ = function () {
    return this.arcStartX_1;
  };
  protoOf(ArcTo).get_arcStartY_stlj0g_k$ = function () {
    return this.arcStartY_1;
  };
  protoOf(ArcTo).component1_7eebsc_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(ArcTo).component2_7eebsb_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(ArcTo).component3_7eebsa_k$ = function () {
    return this.theta_1;
  };
  protoOf(ArcTo).component4_7eebs9_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(ArcTo).component5_7eebs8_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(ArcTo).component6_7eebs7_k$ = function () {
    return this.arcStartX_1;
  };
  protoOf(ArcTo).component7_7eebs6_k$ = function () {
    return this.arcStartY_1;
  };
  protoOf(ArcTo).copy_2l8civ_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    return new ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY);
  };
  protoOf(ArcTo).copy$default_els6pt_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY, $super) {
    horizontalEllipseRadius = horizontalEllipseRadius === VOID ? this.horizontalEllipseRadius_1 : horizontalEllipseRadius;
    verticalEllipseRadius = verticalEllipseRadius === VOID ? this.verticalEllipseRadius_1 : verticalEllipseRadius;
    theta = theta === VOID ? this.theta_1 : theta;
    isMoreThanHalf = isMoreThanHalf === VOID ? this.isMoreThanHalf_1 : isMoreThanHalf;
    isPositiveArc = isPositiveArc === VOID ? this.isPositiveArc_1 : isPositiveArc;
    arcStartX = arcStartX === VOID ? this.arcStartX_1 : arcStartX;
    arcStartY = arcStartY === VOID ? this.arcStartY_1 : arcStartY;
    return $super === VOID ? this.copy_2l8civ_k$(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) : $super.copy_2l8civ_k$.call(this, horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY);
  };
  protoOf(ArcTo).toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.horizontalEllipseRadius_1 + ', verticalEllipseRadius=' + this.verticalEllipseRadius_1 + ', theta=' + this.theta_1 + ', isMoreThanHalf=' + this.isMoreThanHalf_1 + ', isPositiveArc=' + this.isPositiveArc_1 + ', arcStartX=' + this.arcStartX_1 + ', arcStartY=' + this.arcStartY_1 + ')';
  };
  protoOf(ArcTo).hashCode = function () {
    var result = getNumberHashCode(this.horizontalEllipseRadius_1);
    result = imul(result, 31) + getNumberHashCode(this.verticalEllipseRadius_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.theta_1) | 0;
    result = imul(result, 31) + (this.isMoreThanHalf_1 | 0) | 0;
    result = imul(result, 31) + (this.isPositiveArc_1 | 0) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartX_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartY_1) | 0;
    return result;
  };
  protoOf(ArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof ArcTo ? other : THROW_CCE();
    if (!equals(this.horizontalEllipseRadius_1, tmp0_other_with_cast.horizontalEllipseRadius_1))
      return false;
    if (!equals(this.verticalEllipseRadius_1, tmp0_other_with_cast.verticalEllipseRadius_1))
      return false;
    if (!equals(this.theta_1, tmp0_other_with_cast.theta_1))
      return false;
    if (!(this.isMoreThanHalf_1 === tmp0_other_with_cast.isMoreThanHalf_1))
      return false;
    if (!(this.isPositiveArc_1 === tmp0_other_with_cast.isPositiveArc_1))
      return false;
    if (!equals(this.arcStartX_1, tmp0_other_with_cast.arcStartX_1))
      return false;
    if (!equals(this.arcStartY_1, tmp0_other_with_cast.arcStartY_1))
      return false;
    return true;
  };
  function PathNode(isCurve, isQuad) {
    isCurve = isCurve === VOID ? false : isCurve;
    isQuad = isQuad === VOID ? false : isQuad;
    this.isCurve_1 = isCurve;
    this.isQuad_1 = isQuad;
  }
  protoOf(PathNode).get_isCurve_z9wfzw_k$ = function () {
    return this.isCurve_1;
  };
  protoOf(PathNode).get_isQuad_ew4yai_k$ = function () {
    return this.isQuad_1;
  };
  function putBytesInto(_this__u8e3s4, array, offset, length) {
    var byteBuffer = (new Uint8Array(toTypedArray(_this__u8e3s4))).buffer;
    var intArray = new Int32Array(byteBuffer, offset, length);
    var inductionVariable = 0;
    var last = intArray.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'org.khronos.webgl.get' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = intArray;
        tmp$ret$1 = tmp$ret$0[i];
        array[i] = tmp$ret$1;
      }
       while (inductionVariable < last);
  }
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
    return '@androidx.compose.ui.graphics.internal.NoOp()';
  };
  function toSkia(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_14().get_Clear_9hhqh4_k$() ? BlendMode_CLEAR_getInstance() : tmp0_subject === Companion_getInstance_14().get_Src_o7e167_k$() ? BlendMode_SRC_getInstance() : tmp0_subject === Companion_getInstance_14().get_Dst_o5v574_k$() ? BlendMode_DST_getInstance() : tmp0_subject === Companion_getInstance_14().get_SrcOver_uyf80z_k$() ? BlendMode_SRC_OVER_getInstance() : tmp0_subject === Companion_getInstance_14().get_DstOver_h25nrw_k$() ? BlendMode_DST_OVER_getInstance() : tmp0_subject === Companion_getInstance_14().get_SrcIn_yyf2fo_k$() ? BlendMode_SRC_IN_getInstance() : tmp0_subject === Companion_getInstance_14().get_DstIn_7c3x3p_k$() ? BlendMode_DST_IN_getInstance() : tmp0_subject === Companion_getInstance_14().get_SrcOut_78cqo7_k$() ? BlendMode_SRC_OUT_getInstance() : tmp0_subject === Companion_getInstance_14().get_DstOut_3e3t2e_k$() ? BlendMode_DST_OUT_getInstance() : tmp0_subject === Companion_getInstance_14().get_SrcAtop_erwkkd_k$() ? BlendMode_SRC_ATOP_getInstance() : tmp0_subject === Companion_getInstance_14().get_DstAtop_88mllw_k$() ? BlendMode_DST_ATOP_getInstance() : tmp0_subject === Companion_getInstance_14().get_Xor_7r0wg6_k$() ? BlendMode_XOR_getInstance() : tmp0_subject === Companion_getInstance_14().get_Plus_sl45pl_k$() ? BlendMode_PLUS_getInstance() : tmp0_subject === Companion_getInstance_14().get_Modulate_xd1sfq_k$() ? BlendMode_MODULATE_getInstance() : tmp0_subject === Companion_getInstance_14().get_Screen_76rbx3_k$() ? BlendMode_SCREEN_getInstance() : tmp0_subject === Companion_getInstance_14().get_Overlay_2mxasb_k$() ? BlendMode_OVERLAY_getInstance() : tmp0_subject === Companion_getInstance_14().get_Darken_1ojojo_k$() ? BlendMode_DARKEN_getInstance() : tmp0_subject === Companion_getInstance_14().get_Lighten_afcpbe_k$() ? BlendMode_LIGHTEN_getInstance() : tmp0_subject === Companion_getInstance_14().get_ColorDodge_gwt0pb_k$() ? BlendMode_COLOR_DODGE_getInstance() : tmp0_subject === Companion_getInstance_14().get_ColorBurn_55chr1_k$() ? BlendMode_COLOR_BURN_getInstance() : tmp0_subject === Companion_getInstance_14().get_Hardlight_ie4bsm_k$() ? BlendMode_HARD_LIGHT_getInstance() : tmp0_subject === Companion_getInstance_14().get_Softlight_3emetl_k$() ? BlendMode_SOFT_LIGHT_getInstance() : tmp0_subject === Companion_getInstance_14().get_Difference_k61r8m_k$() ? BlendMode_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_14().get_Exclusion_cabql5_k$() ? BlendMode_EXCLUSION_getInstance() : tmp0_subject === Companion_getInstance_14().get_Multiply_bawk0x_k$() ? BlendMode_MULTIPLY_getInstance() : tmp0_subject === Companion_getInstance_14().get_Hue_1rhqm5_k$() ? BlendMode_HUE_getInstance() : tmp0_subject === Companion_getInstance_14().get_Saturation_y5o6lt_k$() ? BlendMode_SATURATION_getInstance() : tmp0_subject === Companion_getInstance_14().get_Color_2ootbm_k$() ? BlendMode_COLOR_getInstance() : tmp0_subject === Companion_getInstance_14().get_Luminosity_99tf6q_k$() ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_getInstance_3().makeLTRB_ax757q_k$(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$(), _this__u8e3s4.get_right_ixz7xv_k$(), _this__u8e3s4.get_bottom_bj8ras_k$());
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_topLeftCornerRadius_nzteym_k$());
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_topLeftCornerRadius_nzteym_k$());
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_topRightCornerRadius_h21xrz_k$());
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_topRightCornerRadius_h21xrz_k$());
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_bottomRightCornerRadius_vv4dft_k$());
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_bottomRightCornerRadius_vv4dft_k$());
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_bottomLeftCornerRadius_na53na_k$());
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_bottomLeftCornerRadius_na53na_k$());
    return Companion_getInstance_4().makeComplexLTRB_r9qn2z_k$(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$(), _this__u8e3s4.get_right_ixz7xv_k$(), _this__u8e3s4.get_bottom_bj8ras_k$(), radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$(), _this__u8e3s4.get_right_ixz7xv_k$(), _this__u8e3s4.get_bottom_bj8ras_k$());
  }
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).skia_1;
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).alphaMultiplier_1 = value;
  }
  function get_alphaMultiplier(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).alphaMultiplier_1;
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.<get-skia>.<anonymous>' call
    tmp0_apply.set_alphaMultiplier_c87tvp_k$($this.alphaMultiplier_1);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.get_skia_woucvt_k$();
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    var tmp$ret$1;
    // Inline function 'org.jetbrains.skia.impl.use' call
    var tmp0_use = Companion_getInstance_5().makeFromBitmap_yu8eml_k$(bitmap);
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp$ret$0 = $this.skia_1.drawImageRect_cpr7cg_k$(tmp0_use, Companion_getInstance_3().makeXYWH_bits74_k$(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_getInstance_3().makeXYWH_bits74_k$(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.get_filterQuality_2xbue9_k$(), $this), _get_skia__ddpejf(paint, $this), true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_use.close_ymq55z_k$();
    }
    tmp$ret$1 = tmp;
  }
  function drawPoints($this, points, paint) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = points.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = points.get_fkrdnv_k$(index).packedValue_1;
        // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawPoints.<anonymous>' call
        $this.skia_1.drawPoint_1b3djp_k$(_Offset___get_x__impl__xvi35n(item), _Offset___get_y__impl__8bzhra(item), _get_skia__ddpejf(paint, $this));
      }
       while (inductionVariable <= last);
  }
  function drawLines($this, points, paint, stepBy) {
    if (points.get_size_woubt6_k$() >= 2) {
      var progression = step(until(0, points.get_size_woubt6_k$() - 1 | 0), stepBy);
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      var step_0 = progression.get_step_woujh1_k$();
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var p1 = points.get_fkrdnv_k$(i).packedValue_1;
          var p2 = points.get_fkrdnv_k$(i + 1 | 0).packedValue_1;
          $this.skia_1.drawLine_t27q09_k$(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, $this));
        }
         while (!(i === last));
    }
  }
  function drawRawPoints($this, points, paint, stepBy) {
    if ((points.length % 2 | 0) === 0) {
      var progression = step(until(0, points.length - 1 | 0), stepBy);
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      var step_0 = progression.get_step_woujh1_k$();
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var x = points[i];
          var y = points[i + 1 | 0];
          $this.skia_1.drawPoint_1b3djp_k$(x, y, _get_skia__ddpejf(paint, $this));
        }
         while (!(i === last));
    }
  }
  function drawRawLines($this, points, paint, stepBy) {
    if (points.length >= 4 ? (points.length % 2 | 0) === 0 : false) {
      var progression = step(until(0, points.length - 3 | 0), imul(stepBy, 2));
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      var step_0 = progression.get_step_woujh1_k$();
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var x1 = points[i];
          var y1 = points[i + 1 | 0];
          var x2 = points[i + 2 | 0];
          var y2 = points[i + 3 | 0];
          $this.skia_1.drawLine_t27q09_k$(x1, y1, x2, y2, _get_skia__ddpejf(paint, $this));
        }
         while (!(i === last));
    }
  }
  function toSkia_0(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_16().get_Difference_tu92bl_k$() ? ClipMode_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_16().get_Intersect_ow3v69_k$() ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__u8e3s4, $this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[0];
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[4];
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[8];
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[12];
    var tmp_2 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[1];
    var tmp_3 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[5];
    var tmp_4 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[9];
    var tmp_5 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[13];
    var tmp_6 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[2];
    var tmp_7 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[6];
    var tmp_8 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[10];
    var tmp_9 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[14];
    var tmp_10 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[3];
    var tmp_11 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[7];
    var tmp_12 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$14 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[11];
    var tmp_13 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[15];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_19().get_Low_lx4az0_k$() ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : tmp0_subject === Companion_getInstance_19().get_Medium_l95upr_k$() ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : tmp0_subject === Companion_getInstance_19().get_High_utfc24_k$() ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.skia_1 = skia;
    this.alphaMultiplier_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).get_skia_woucvt_k$ = function () {
    return this.skia_1;
  };
  protoOf(SkiaBackedCanvas).set_alphaMultiplier_c87tvp_k$ = function (_set____db54di) {
    this.alphaMultiplier_1 = _set____db54di;
  };
  protoOf(SkiaBackedCanvas).get_alphaMultiplier_wdu3ai_k$ = function () {
    return this.alphaMultiplier_1;
  };
  protoOf(SkiaBackedCanvas).save_erlm4_k$ = function () {
    this.skia_1.save_23ibh_k$();
  };
  protoOf(SkiaBackedCanvas).restore_a2id37_k$ = function () {
    this.skia_1.restore_i5fnny_k$();
  };
  protoOf(SkiaBackedCanvas).saveLayer_f9ux7q_k$ = function (bounds, paint) {
    this.skia_1.saveLayer_dsxx8u_k$(bounds.get_left_woprgw_k$(), bounds.get_top_18ivbo_k$(), bounds.get_right_ixz7xv_k$(), bounds.get_bottom_bj8ras_k$(), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).translate_62wf99_k$ = function (dx, dy) {
    this.skia_1.translate_y4aglq_k$(dx, dy);
  };
  protoOf(SkiaBackedCanvas).scale_sphyvb_k$ = function (sx, sy) {
    this.skia_1.scale_6iftdi_k$(sx, sy);
  };
  protoOf(SkiaBackedCanvas).rotate_ypq2w2_k$ = function (degrees) {
    this.skia_1.rotate_aghjf1_k$(degrees);
  };
  protoOf(SkiaBackedCanvas).skew_hcshkp_k$ = function (sx, sy) {
    this.skia_1.skew_r8bu0m_k$(sx, sy);
  };
  protoOf(SkiaBackedCanvas).concat_oxfhdd_k$ = function (matrix) {
    if (!isIdentity(matrix)) {
      this.skia_1.concat_f2glzm_k$(toSkia_1(matrix, this));
    }
  };
  protoOf(SkiaBackedCanvas).clipRect_si0ig1_k$ = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.skia_1.clipRect_9zlxw5_k$(Companion_getInstance_3().makeLTRB_ax757q_k$(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).clipPath_kn87dc_k$ = function (path, clipOp) {
    var antiAlias = true;
    this.skia_1.clipPath_yggl5f_k$(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).drawLine_uyv0nw_k$ = function (p1, p2, paint) {
    this.skia_1.drawLine_t27q09_k$(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawRect_iwqaze_k$ = function (left, top, right, bottom, paint) {
    this.skia_1.drawRect_svy35k_k$(Companion_getInstance_3().makeLTRB_ax757q_k$(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawRoundRect_8v0cs4_k$ = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.skia_1.drawRRect_i1m3a2_k$(Companion_getInstance_4().makeLTRB_o5673a_k$(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawOval_wmf8q4_k$ = function (left, top, right, bottom, paint) {
    this.skia_1.drawOval_k4zfhy_k$(Companion_getInstance_3().makeLTRB_ax757q_k$(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawCircle_8yzxtr_k$ = function (center, radius, paint) {
    this.skia_1.drawCircle_on0wlj_k$(_Offset___get_x__impl__xvi35n(center), _Offset___get_y__impl__8bzhra(center), radius, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawArc_xj6sd2_k$ = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    this.skia_1.drawArc_hhkfpn_k$(left, top, right, bottom, startAngle, sweepAngle, useCenter, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawPath_843lu1_k$ = function (path, paint) {
    this.skia_1.drawPath_qvim9i_k$(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawImage_wbfair_k$ = function (image, topLeftOffset, paint) {
    var size = Size(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$());
    drawImageRect(this, image, Companion_getInstance().get_Zero_sctq3f_k$(), size, topLeftOffset, size, paint);
  };
  protoOf(SkiaBackedCanvas).drawImageRect_pn8joi_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset_0(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset_0(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  protoOf(SkiaBackedCanvas).drawPoints_7nk41w_k$ = function (pointMode, points, paint) {
    var tmp0_subject = pointMode;
    if (tmp0_subject === Companion_getInstance_30().get_Lines_pf6qy3_k$()) {
      drawLines(this, points, paint, 2);
    } else if (tmp0_subject === Companion_getInstance_30().get_Polygon_n5et2y_k$()) {
      drawLines(this, points, paint, 1);
    } else if (tmp0_subject === Companion_getInstance_30().get_Points_g9arr3_k$()) {
      drawPoints(this, points, paint);
    }
  };
  protoOf(SkiaBackedCanvas).enableZ_eyv21m_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(SkiaBackedCanvas).disableZ_14frxd_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(SkiaBackedCanvas).drawRawPoints_xnm1nu_k$ = function (pointMode, points, paint) {
    if (!((points.length % 2 | 0) === 0)) {
      throw IllegalArgumentException_init_$Create$('points must have an even number of values');
    }
    var tmp0_subject = pointMode;
    if (tmp0_subject === Companion_getInstance_30().get_Lines_pf6qy3_k$()) {
      drawRawLines(this, points, paint, 2);
    } else if (tmp0_subject === Companion_getInstance_30().get_Polygon_n5et2y_k$()) {
      drawRawLines(this, points, paint, 1);
    } else if (tmp0_subject === Companion_getInstance_30().get_Points_g9arr3_k$()) {
      drawRawPoints(this, points, paint, 2);
    }
  };
  protoOf(SkiaBackedCanvas).drawVertices_blo9xi_k$ = function (vertices, blendMode, paint) {
    this.skia_1.drawVertices_5fhilh_k$(toSkiaVertexMode(vertices.get_vertexMode_afoau9_k$()), vertices.get_positions_ya7scf_k$(), vertices.get_colors_c05661_k$(), vertices.get_textureCoordinates_1i3vqh_k$(), vertices.get_indices_xelk8u_k$(), toSkia(blendMode), paint.asFrameworkPaint_huz48e_k$());
  };
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    var tmp0_require = !skiaBitmap.get_isImmutable_b8i701_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.ActualCanvas.<anonymous>' call
      tmp$ret$0 = 'Cannot draw on immutable ImageBitmap';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function asComposePaint(_this__u8e3s4) {
    return new SkiaBackedPaint(_this__u8e3s4);
  }
  function Paint_0() {
    return new SkiaBackedPaint();
  }
  function _set_mAlphaMultiplier__hzxq3($this, _set____db54di) {
    $this.mAlphaMultiplier_1 = _set____db54di;
  }
  function _get_mAlphaMultiplier__sl4bcp($this) {
    return $this.mAlphaMultiplier_1;
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.skia_1.set_color_n2ch1y_k$(toArgb(Color__copy$default_impl_ectz3s(Color_3($this.skia_1.get_color_ipu8u2_k$()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.get_alpha_iooth1_k$() : alpha;
    multiplier = multiplier === VOID ? $this.mAlphaMultiplier_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_24().get_Fill_xeknbt_k$() ? PaintMode_FILL_getInstance() : tmp0_subject === Companion_getInstance_24().get_Stroke_dv2xoc_k$() ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_32().get_Butt_vf89me_k$() ? PaintStrokeCap_BUTT_getInstance() : tmp0_subject === Companion_getInstance_32().get_Round_x6oq4t_k$() ? PaintStrokeCap_ROUND_getInstance() : tmp0_subject === Companion_getInstance_32().get_Square_xmkdw4_k$() ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_33().get_Miter_rcwd8a_k$() ? PaintStrokeJoin_MITER_getInstance() : tmp0_subject === Companion_getInstance_33().get_Round_ybuhov_k$() ? PaintStrokeJoin_ROUND_getInstance() : tmp0_subject === Companion_getInstance_33().get_Bevel_1szraz_k$() ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.skia_1 = skia;
    this.mAlphaMultiplier_1 = 1.0;
    this.blendMode_1 = Companion_getInstance_14().get_SrcOver_uyf80z_k$();
    this.style_1 = Companion_getInstance_24().get_Fill_xeknbt_k$();
    this.strokeCap_1 = Companion_getInstance_32().get_Butt_vf89me_k$();
    this.strokeJoin_1 = Companion_getInstance_33().get_Round_ybuhov_k$();
    this.strokeMiterLimit_1 = 0.0;
    this.filterQuality_1 = Companion_getInstance_19().get_Medium_l95upr_k$();
    this.shader_1 = null;
    this.colorFilter_1 = null;
    this.pathEffect_1 = null;
  }
  protoOf(SkiaBackedPaint).get_skia_woucvt_k$ = function () {
    return this.skia_1;
  };
  protoOf(SkiaBackedPaint).asFrameworkPaint_huz48e_k$ = function () {
    return this.skia_1;
  };
  protoOf(SkiaBackedPaint).set_alphaMultiplier_c87tvp_k$ = function (value) {
    var multiplier = coerceIn(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.mAlphaMultiplier_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).get_alphaMultiplier_wdu3ai_k$ = function () {
    return this.mAlphaMultiplier_1;
  };
  protoOf(SkiaBackedPaint).set_alpha_k1tx50_k$ = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).get_alpha_iooth1_k$ = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_3(this.skia_1.get_color_ipu8u2_k$()));
  };
  protoOf(SkiaBackedPaint).set_isAntiAlias_1h4ndu_k$ = function (value) {
    this.skia_1.set_isAntiAlias_1h4ndu_k$(value);
  };
  protoOf(SkiaBackedPaint).get_isAntiAlias_255n51_k$ = function () {
    return this.skia_1.get_isAntiAlias_255n51_k$();
  };
  protoOf(SkiaBackedPaint).set_color_b5evhd_k$ = function (color) {
    this.skia_1.set_color_n2ch1y_k$(toArgb(color));
  };
  protoOf(SkiaBackedPaint).get_color_v34vrz_k$ = function () {
    return Color_3(this.skia_1.get_color_ipu8u2_k$());
  };
  protoOf(SkiaBackedPaint).set_blendMode_gchh35_k$ = function (value) {
    this.skia_1.set_blendMode_2o4s1d_k$(toSkia(value));
    this.blendMode_1 = value;
  };
  protoOf(SkiaBackedPaint).get_blendMode_m8dzwh_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(SkiaBackedPaint).set_style_yrvwzh_k$ = function (value) {
    this.skia_1.set_mode_2kzbql_k$(toSkia_3(value, this));
    this.style_1 = value;
  };
  protoOf(SkiaBackedPaint).get_style_cnsirn_k$ = function () {
    return this.style_1;
  };
  protoOf(SkiaBackedPaint).set_strokeWidth_3zju8k_k$ = function (value) {
    this.skia_1.set_strokeWidth_3zju8k_k$(value);
  };
  protoOf(SkiaBackedPaint).get_strokeWidth_pbded7_k$ = function () {
    return this.skia_1.get_strokeWidth_pbded7_k$();
  };
  protoOf(SkiaBackedPaint).set_strokeCap_un0ni9_k$ = function (value) {
    this.skia_1.set_strokeCap_awr7nf_k$(toSkia_4(value, this));
    this.strokeCap_1 = value;
  };
  protoOf(SkiaBackedPaint).get_strokeCap_du2v9b_k$ = function () {
    return this.strokeCap_1;
  };
  protoOf(SkiaBackedPaint).set_strokeJoin_oa46bf_k$ = function (value) {
    this.skia_1.set_strokeJoin_earh59_k$(toSkia_5(value, this));
    this.strokeJoin_1 = value;
  };
  protoOf(SkiaBackedPaint).get_strokeJoin_t4v9w5_k$ = function () {
    return this.strokeJoin_1;
  };
  protoOf(SkiaBackedPaint).set_strokeMiterLimit_jliqsy_k$ = function (value) {
    this.skia_1.set_strokeMiter_9aj8vn_k$(value);
    this.strokeMiterLimit_1 = value;
  };
  protoOf(SkiaBackedPaint).get_strokeMiterLimit_p3434n_k$ = function () {
    return this.strokeMiterLimit_1;
  };
  protoOf(SkiaBackedPaint).set_filterQuality_8e157j_k$ = function (_set____db54di) {
    this.filterQuality_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).get_filterQuality_2xbue9_k$ = function () {
    return this.filterQuality_1;
  };
  protoOf(SkiaBackedPaint).set_shader_bd5o0m_k$ = function (value) {
    this.skia_1.set_shader_bd5o0m_k$(value);
    this.shader_1 = value;
  };
  protoOf(SkiaBackedPaint).get_shader_jgtazy_k$ = function () {
    return this.shader_1;
  };
  protoOf(SkiaBackedPaint).set_colorFilter_l1l4p0_k$ = function (value) {
    var tmp0_safe_receiver = value;
    this.skia_1.set_colorFilter_t69fte_k$(tmp0_safe_receiver == null ? null : asSkiaColorFilter(tmp0_safe_receiver));
    this.colorFilter_1 = value;
  };
  protoOf(SkiaBackedPaint).get_colorFilter_nt8pqq_k$ = function () {
    return this.colorFilter_1;
  };
  protoOf(SkiaBackedPaint).set_pathEffect_eo4nwm_k$ = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.skia_1.set_pathEffect_5avi6g_k$(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.pathEffect_1 = value;
  };
  protoOf(SkiaBackedPaint).get_pathEffect_d6tz6p_k$ = function () {
    return this.pathEffect_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function _set_internalPath__a4co45($this, _set____db54di) {
    $this.internalPath_1 = _set____db54di;
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_29().get_Difference_61syb0_k$() ? PathOp_DIFFERENCE_getInstance() : tmp0_subject === Companion_getInstance_29().get_Intersect_pr81lo_k$() ? PathOp_INTERSECT_getInstance() : tmp0_subject === Companion_getInstance_29().get_Union_6aiks4_k$() ? PathOp_UNION_getInstance() : tmp0_subject === Companion_getInstance_29().get_Xor_ja5law_k$() ? PathOp_XOR_getInstance() : tmp0_subject === Companion_getInstance_29().get_ReverseDifference_yow8fw_k$() ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.internalPath_1 = internalPath;
  }
  protoOf(SkiaBackedPath).get_internalPath_37vr9n_k$ = function () {
    return this.internalPath_1;
  };
  protoOf(SkiaBackedPath).set_fillType_288nii_k$ = function (value) {
    var tmp = this.internalPath_1;
    var tmp_0;
    if (value === Companion_getInstance_28().get_EvenOdd_pai4nq_k$()) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.set_fillMode_dzxls6_k$(tmp_0);
  };
  protoOf(SkiaBackedPath).get_fillType_qtoiy8_k$ = function () {
    if (this.internalPath_1.get_fillMode_r5zfyn_k$().equals(PathFillMode_EVEN_ODD_getInstance())) {
      return Companion_getInstance_28().get_EvenOdd_pai4nq_k$();
    } else {
      return Companion_getInstance_28().get_NonZero_j4d1fu_k$();
    }
  };
  protoOf(SkiaBackedPath).moveTo_ga4oez_k$ = function (x, y) {
    this.internalPath_1.moveTo_5934es_k$(x, y);
  };
  protoOf(SkiaBackedPath).relativeMoveTo_4j9kzr_k$ = function (dx, dy) {
    this.internalPath_1.rMoveTo_44r2iq_k$(dx, dy);
  };
  protoOf(SkiaBackedPath).lineTo_w9kq4e_k$ = function (x, y) {
    this.internalPath_1.lineTo_8bd4s1_k$(x, y);
  };
  protoOf(SkiaBackedPath).relativeLineTo_kipmp6_k$ = function (dx, dy) {
    this.internalPath_1.rLineTo_7712vz_k$(dx, dy);
  };
  protoOf(SkiaBackedPath).quadraticBezierTo_t2qfc1_k$ = function (x1, y1, x2, y2) {
    this.internalPath_1.quadTo_qnlly6_k$(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).relativeQuadraticBezierTo_z1apmz_k$ = function (dx1, dy1, dx2, dy2) {
    this.internalPath_1.rQuadTo_vz8b04_k$(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).cubicTo_1m51n8_k$ = function (x1, y1, x2, y2, x3, y3) {
    this.internalPath_1.cubicTo_tf08o5_k$(x1, y1, x2, y2, x3, y3);
  };
  protoOf(SkiaBackedPath).relativeCubicTo_a0rn6w_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.internalPath_1.rCubicTo_uljamr_k$(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(SkiaBackedPath).arcTo_948klo_k$ = function (rect, startAngleDegrees, sweepAngleDegrees, forceMoveTo) {
    this.internalPath_1.arcTo_ecvj8s_k$(toSkiaRect(rect), startAngleDegrees, sweepAngleDegrees, forceMoveTo);
  };
  protoOf(SkiaBackedPath).addRect_xu2nic_k$ = function (rect) {
    this.internalPath_1.addRect$default_4sb546_k$(toSkiaRect(rect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).addOval_91jhpm_k$ = function (oval) {
    this.internalPath_1.addOval$default_8xdsmk_k$(toSkiaRect(oval), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).addArcRad_jcx1ob_k$ = function (oval, startAngleRadians, sweepAngleRadians) {
    this.addArc_p7ur08_k$(oval, degrees(startAngleRadians), degrees(sweepAngleRadians));
  };
  protoOf(SkiaBackedPath).addArc_p7ur08_k$ = function (oval, startAngleDegrees, sweepAngleDegrees) {
    this.internalPath_1.addArc_vnodq_k$(toSkiaRect(oval), startAngleDegrees, sweepAngleDegrees);
  };
  protoOf(SkiaBackedPath).addRoundRect_kr3fpw_k$ = function (roundRect) {
    this.internalPath_1.addRRect$default_w9fmui_k$(toSkiaRRect(roundRect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).addPath_9947vg_k$ = function (path, offset) {
    this.internalPath_1.addPath$default_lxy9z6_k$(asSkiaPath(path), _Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(SkiaBackedPath).close_ymq55z_k$ = function () {
    this.internalPath_1.closePath_7zbz5v_k$();
  };
  protoOf(SkiaBackedPath).reset_5tn5dq_k$ = function () {
    var fillType = this.get_fillType_qtoiy8_k$();
    this.internalPath_1.reset_1sjh3j_k$();
    this.set_fillType_288nii_k$(fillType);
  };
  protoOf(SkiaBackedPath).translate_mdejcc_k$ = function (offset) {
    this.internalPath_1.transform$default_2lgwdr_k$(Companion_getInstance_6().makeTranslate_bkaev4_k$(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset)));
  };
  protoOf(SkiaBackedPath).getBounds_568lnv_k$ = function () {
    var bounds = this.internalPath_1.get_bounds_bj99ku_k$();
    return new Rect(bounds.get_left_woprgw_k$(), bounds.get_top_18ivbo_k$(), bounds.get_right_ixz7xv_k$(), bounds.get_bottom_bj8ras_k$());
  };
  protoOf(SkiaBackedPath).op_eh4rey_k$ = function (path1, path2, operation) {
    var path = Companion_getInstance_7().makeCombining_738xp1_k$(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    var tmp0_elvis_lhs = path;
    tmp.internalPath_1 = tmp0_elvis_lhs == null ? this.internalPath_1 : tmp0_elvis_lhs;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).get_isConvex_ryvmuy_k$ = function () {
    return this.internalPath_1.get_isConvex_ryvmuy_k$();
  };
  protoOf(SkiaBackedPath).get_isEmpty_zauvru_k$ = function () {
    return this.internalPath_1.get_isEmpty_zauvru_k$();
  };
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.internalPath_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect(nativePathEffect) {
    this.nativePathEffect_1 = nativePathEffect;
  }
  protoOf(SkiaBackedPathEffect).get_nativePathEffect_o1bxhy_k$ = function () {
    return this.nativePathEffect_1;
  };
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).nativePathEffect_1;
  }
  function actualCornerPathEffect(radius) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makeCorner_nvvp4b_k$(radius));
  }
  function actualDashPathEffect(intervals, phase) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makeDash_l6ju8t_k$(intervals, phase));
  }
  function actualChainPathEffect(outer, inner) {
    return new SkiaBackedPathEffect(asSkiaPathEffect(outer).makeCompose_8fhb2g_k$(asSkiaPathEffect(inner)));
  }
  function actualStampedPathEffect(shape, advance, phase, style) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makePath1D_ivleto_k$(asSkiaPath(shape), advance, phase, toSkiaStampedPathEffectStyle(style)));
  }
  function toSkiaStampedPathEffectStyle(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_27().get_Morph_35mk00_k$() ? Style_MORPH_getInstance() : tmp0_subject === Companion_getInstance_27().get_Rotate_t1fpff_k$() ? Style_ROTATE_getInstance() : tmp0_subject === Companion_getInstance_27().get_Translate_oyad1i_k$() ? Style_TRANSLATE_getInstance() : Style_TRANSLATE_getInstance();
  }
  function _set_internalImageFilter__a836z3($this, _set____db54di) {
    $this.internalImageFilter_1 = _set____db54di;
  }
  function _get_internalImageFilter__nitfvf($this) {
    return $this.internalImageFilter_1;
  }
  function RenderEffect() {
    this.internalImageFilter_1 = null;
  }
  protoOf(RenderEffect).asSkiaImageFilter_1de1rj_k$ = function () {
    var tmp0_elvis_lhs = this.internalImageFilter_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.createImageFilter_sv02y1_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.RenderEffect.asSkiaImageFilter.<anonymous>' call
      this.internalImageFilter_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(RenderEffect).isSupported_j5t6ec_k$ = function () {
    return true;
  };
  function _get_renderEffect__lnsspw($this) {
    return $this.renderEffect_1;
  }
  function _get_radiusX__yn9fij($this) {
    return $this.radiusX_1;
  }
  function _get_radiusY__yn9fje($this) {
    return $this.radiusY_1;
  }
  function _get_edgeTreatment__hm26t2($this) {
    return $this.edgeTreatment_1;
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.BlurSigmaScale_1 = 0.57735;
  }
  protoOf(Companion_31).get_BlurSigmaScale_a4lbmd_k$ = function () {
    return this.BlurSigmaScale_1;
  };
  protoOf(Companion_31).convertRadiusToSigma_iw86v_k$ = function (radius) {
    var tmp;
    if (radius > 0) {
      tmp = this.BlurSigmaScale_1 * radius + 0.5;
    } else {
      tmp = 0.0;
    }
    return tmp;
  };
  var Companion_instance_31;
  function Companion_getInstance_46() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function BlurEffect(renderEffect, radiusX, radiusY, edgeTreatment) {
    Companion_getInstance_46();
    radiusY = radiusY === VOID ? radiusX : radiusY;
    edgeTreatment = edgeTreatment === VOID ? Companion_getInstance_34().get_Clamp_q8g1jp_k$() : edgeTreatment;
    RenderEffect.call(this);
    this.renderEffect_1 = renderEffect;
    this.radiusX_1 = radiusX;
    this.radiusY_1 = radiusY;
    this.edgeTreatment_1 = edgeTreatment;
  }
  protoOf(BlurEffect).createImageFilter_sv02y1_k$ = function () {
    var tmp;
    if (this.renderEffect_1 == null) {
      tmp = Companion_getInstance_9().makeBlur$default_fknlxe_k$(Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusX_1), Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusY_1), toSkiaTileMode(this.edgeTreatment_1));
    } else {
      tmp = Companion_getInstance_9().makeBlur_3mengz_k$(Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusX_1), Companion_getInstance_46().convertRadiusToSigma_iw86v_k$(this.radiusY_1), toSkiaTileMode(this.edgeTreatment_1), this.renderEffect_1.asSkiaImageFilter_1de1rj_k$(), null);
    }
    return tmp;
  };
  protoOf(BlurEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlurEffect))
      return false;
    if (!(this.radiusX_1 === other.radiusX_1))
      return false;
    if (!(this.radiusY_1 === other.radiusY_1))
      return false;
    if (!(this.edgeTreatment_1 === other.edgeTreatment_1))
      return false;
    if (!equals(this.renderEffect_1, other.renderEffect_1))
      return false;
    return true;
  };
  protoOf(BlurEffect).hashCode = function () {
    var tmp0_safe_receiver = this.renderEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + getNumberHashCode(this.radiusX_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.radiusY_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.edgeTreatment_1) | 0;
    return result;
  };
  protoOf(BlurEffect).toString = function () {
    return 'BlurEffect(renderEffect=' + this.renderEffect_1 + ', radiusX=' + this.radiusX_1 + ', radiusY=' + this.radiusY_1 + ', ' + ('edgeTreatment=' + new TileMode(this.edgeTreatment_1) + ')');
  };
  function _get_renderEffect__lnsspw_0($this) {
    return $this.renderEffect_1;
  }
  function _get_offset__c6qzmg($this) {
    return $this.offset_1;
  }
  function OffsetEffect(renderEffect, offset) {
    RenderEffect.call(this);
    this.renderEffect_1 = renderEffect;
    this.offset_1 = offset;
  }
  protoOf(OffsetEffect).createImageFilter_sv02y1_k$ = function () {
    var tmp = Companion_getInstance_9();
    var tmp_0 = _Offset___get_x__impl__xvi35n(this.offset_1);
    var tmp_1 = _Offset___get_y__impl__8bzhra(this.offset_1);
    var tmp0_safe_receiver = this.renderEffect_1;
    return tmp.makeOffset_8qoczr_k$(tmp_0, tmp_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.asSkiaImageFilter_1de1rj_k$(), null);
  };
  protoOf(OffsetEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OffsetEffect))
      return false;
    if (!equals(this.renderEffect_1, other.renderEffect_1))
      return false;
    if (!equals(this.offset_1, other.offset_1))
      return false;
    return true;
  };
  protoOf(OffsetEffect).hashCode = function () {
    var tmp0_safe_receiver = this.renderEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.offset_1) | 0;
    return result;
  };
  protoOf(OffsetEffect).toString = function () {
    return 'OffsetEffect(renderEffect=' + this.renderEffect_1 + ', offset=' + new Offset(this.offset_1) + ')';
  };
  function SkiaBackedRenderEffect(imageFilter) {
    RenderEffect.call(this);
    this.imageFilter_1 = imageFilter;
  }
  protoOf(SkiaBackedRenderEffect).get_imageFilter_rhhupi_k$ = function () {
    return this.imageFilter_1;
  };
  protoOf(SkiaBackedRenderEffect).createImageFilter_sv02y1_k$ = function () {
    return this.imageFilter_1;
  };
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.get_nativeColorFilter_tol2md_k$();
  }
  function actualTintColorFilter(color, blendMode) {
    return new ColorFilter(Companion_getInstance_10().makeBlend_s8ia93_k$(toArgb(color), toSkia(blendMode)));
  }
  function actualColorMatrixColorFilter(colorMatrix) {
    return new ColorFilter(Companion_getInstance_10().makeMatrix_rjjhx4_k$(new ColorMatrix(_ColorMatrix___get_values__impl__bpwpry(colorMatrix).slice())));
  }
  function actualLightingColorFilter(multiply, add) {
    return new ColorFilter(Companion_getInstance_10().makeLighting_u1dhx6_k$(toArgb(multiply), toArgb(add)));
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.bitmap_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.bitmap_1 = bitmap;
    this.colorSpace_1 = toComposeColorSpace(this.bitmap_1.get_colorSpace_yx2b0_k$());
    this.config_1 = toComposeConfig(this.bitmap_1.get_colorType_tr6rn0_k$());
    this.hasAlpha_1 = !this.bitmap_1.get_isOpaque_xnqi0k_k$();
  }
  protoOf(SkiaBackedImageBitmap).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(SkiaBackedImageBitmap).get_colorSpace_yx2b0_k$ = function () {
    return this.colorSpace_1;
  };
  protoOf(SkiaBackedImageBitmap).get_config_df1eav_k$ = function () {
    return this.config_1;
  };
  protoOf(SkiaBackedImageBitmap).get_hasAlpha_txpv0z_k$ = function () {
    return this.hasAlpha_1;
  };
  protoOf(SkiaBackedImageBitmap).get_height_e7t92o_k$ = function () {
    return this.bitmap_1.get_height_e7t92o_k$();
  };
  protoOf(SkiaBackedImageBitmap).get_width_j0q4yl_k$ = function () {
    return this.bitmap_1.get_width_j0q4yl_k$();
  };
  protoOf(SkiaBackedImageBitmap).prepareToDraw_sbmxaj_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(SkiaBackedImageBitmap).readPixels_foa4om_k$ = function (buffer, startX, startY, width, height, bufferOffset, stride) {
    var lastScanline = bufferOffset + imul(height - 1 | 0, stride) | 0;
    // Inline function 'kotlin.require' call
    var tmp0_require = startX >= 0 ? startY >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = width > 0 ? (startX + width | 0) <= this.get_width_j0q4yl_k$() : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = height > 0 ? (startY + height | 0) <= this.get_height_e7t92o_k$() : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$2 = 'Failed requirement.';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    var tmp3_require = abs(stride) >= width;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_require) {
      var tmp$ret$3;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$3 = 'Failed requirement.';
      var message_2 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    var tmp4_require = bufferOffset >= 0 ? (bufferOffset + width | 0) <= buffer.length : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_require) {
      var tmp$ret$4;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$4 = 'Failed requirement.';
      var message_3 = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.require' call
    var tmp5_require = lastScanline >= 0 ? (lastScanline + width | 0) <= buffer.length : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp5_require) {
      var tmp$ret$5;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$5 = 'Failed requirement.';
      var message_4 = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$(toString(message_4));
    }
    var colorInfo = new ColorInfo(ColorType_BGRA_8888_getInstance(), ColorAlphaType_UNPREMUL_getInstance(), Companion_getInstance_11().get_sRGB_wottib_k$());
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bytesPerPixel = 4;
    var bytes = ensureNotNull(this.bitmap_1.readPixels_bwiudk_k$(imageInfo, imul(stride, bytesPerPixel), startX, startY));
    putBytesInto(bytes, buffer, bufferOffset, bytes.length / bytesPerPixel | 0);
  };
  function toComposeColorSpace(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return equals(tmp0_subject, Companion_getInstance_11().get_sRGB_wottib_k$()) ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : equals(tmp0_subject, Companion_getInstance_11().get_sRGBLinear_5cyq1k_k$()) ? ColorSpaces_getInstance().get_LinearSrgb_gaeay0_k$() : equals(tmp0_subject, Companion_getInstance_11().get_displayP3_clxlks_k$()) ? ColorSpaces_getInstance().get_DisplayP3_pa2gtg_k$() : ColorSpaces_getInstance().get_Srgb_woa2g3_k$();
  }
  function toComposeConfig(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject.equals(Companion_getInstance_12().get_N32_18jozg_k$()) ? Companion_getInstance_22().get_Argb8888_tpu17z_k$() : tmp0_subject.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_22().get_Alpha8_zceb6n_k$() : tmp0_subject.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_22().get_Rgb565_i09itw_k$() : tmp0_subject.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_22().get_F16_f3achu_k$() : Companion_getInstance_22().get_Argb8888_tpu17z_k$();
  }
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.allocPixels_jyyvpm_k$(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function toSkiaColorType(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_22().get_Argb8888_tpu17z_k$() ? Companion_getInstance_12().get_N32_18jozg_k$() : tmp0_subject === Companion_getInstance_22().get_Alpha8_zceb6n_k$() ? ColorType_ALPHA_8_getInstance() : tmp0_subject === Companion_getInstance_22().get_Rgb565_i09itw_k$() ? ColorType_RGB_565_getInstance() : tmp0_subject === Companion_getInstance_22().get_F16_f3achu_k$() ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_12().get_N32_18jozg_k$();
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject.equals(ColorSpaces_getInstance().get_Srgb_woa2g3_k$()) ? Companion_getInstance_11().get_sRGB_wottib_k$() : tmp0_subject.equals(ColorSpaces_getInstance().get_LinearSrgb_gaeay0_k$()) ? Companion_getInstance_11().get_sRGBLinear_5cyq1k_k$() : tmp0_subject.equals(ColorSpaces_getInstance().get_DisplayP3_pa2gtg_k$()) ? Companion_getInstance_11().get_displayP3_clxlks_k$() : Companion_getInstance_11().get_sRGB_wottib_k$();
  }
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_13();
    var tmp_0 = _Offset___get_x__impl__xvi35n(from);
    var tmp_1 = _Offset___get_y__impl__8bzhra(from);
    var tmp_2 = _Offset___get_x__impl__xvi35n(to);
    var tmp_3 = _Offset___get_y__impl__8bzhra(to);
    var tmp_4 = toIntArray(colors);
    var tmp0_safe_receiver = colorStops;
    return tmp.makeLinearGradient_p3pmrv_k$(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp0_safe_receiver == null ? null : toFloatArray(tmp0_safe_receiver), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_13();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    var tmp0_safe_receiver = colorStops;
    return tmp.makeRadialGradient_gn4elj_k$(tmp_0, tmp_1, radius, tmp_2, tmp0_safe_receiver == null ? null : toFloatArray(tmp0_safe_receiver), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_13();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    var tmp0_safe_receiver = colorStops;
    return tmp.makeSweepGradient_3ha3m6_k$(tmp_0, tmp_1, tmp_2, tmp0_safe_receiver == null ? null : toFloatArray(tmp0_safe_receiver));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.get_size_woubt6_k$() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.get_size_woubt6_k$() === colorStops.get_size_woubt6_k$())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.get_size_woubt6_k$();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.graphics.toIntArray.<anonymous>' call
      tmp$ret$0 = toArgb(_this__u8e3s4.get_fkrdnv_k$(tmp_2).value_1);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_34().get_Clamp_q8g1jp_k$() ? FilterTileMode_CLAMP_getInstance() : tmp0_subject === Companion_getInstance_34().get_Repeated_k0uuck_k$() ? FilterTileMode_REPEAT_getInstance() : tmp0_subject === Companion_getInstance_34().get_Mirror_3kopi9_k$() ? FilterTileMode_MIRROR_getInstance() : tmp0_subject === Companion_getInstance_34().get_Decal_z0hn4z_k$() ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  function toSkiaVertexMode(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    return tmp0_subject === Companion_getInstance_35().get_Triangles_3v3h75_k$() ? VertexMode_TRIANGLES_getInstance() : tmp0_subject === Companion_getInstance_35().get_TriangleStrip_fj1wve_k$() ? VertexMode_TRIANGLE_STRIP_getInstance() : tmp0_subject === Companion_getInstance_35().get_TriangleFan_hugsxb_k$() ? VertexMode_TRIANGLE_FAN_getInstance() : VertexMode_TRIANGLES_getInstance();
  }
  //region block: post-declaration
  protoOf(CanvasDrawScope).drawLine$default_o97yr2_k$ = drawLine$default;
  protoOf(CanvasDrawScope).drawLine$default_sn3s09_k$ = drawLine$default_0;
  protoOf(CanvasDrawScope).drawRect$default_8oolwl_k$ = drawRect$default;
  protoOf(CanvasDrawScope).drawRect$default_agcbs4_k$ = drawRect$default_0;
  protoOf(CanvasDrawScope).drawImage$default_px0mn0_k$ = drawImage$default;
  protoOf(CanvasDrawScope).drawImage$default_rf1qqy_k$ = drawImage$default_0;
  protoOf(CanvasDrawScope).drawImage$default_q3yuzr_k$ = drawImage$default_1;
  protoOf(CanvasDrawScope).drawRoundRect$default_mlaxib_k$ = drawRoundRect$default;
  protoOf(CanvasDrawScope).drawRoundRect$default_nnpnlg_k$ = drawRoundRect$default_0;
  protoOf(CanvasDrawScope).drawCircle$default_8oa7a0_k$ = drawCircle$default;
  protoOf(CanvasDrawScope).drawCircle$default_b2wyc1_k$ = drawCircle$default_0;
  protoOf(CanvasDrawScope).drawOval$default_l3u8q5_k$ = drawOval$default;
  protoOf(CanvasDrawScope).drawOval$default_us8vka_k$ = drawOval$default_0;
  protoOf(CanvasDrawScope).drawArc$default_k2v7h5_k$ = drawArc$default;
  protoOf(CanvasDrawScope).drawArc$default_15gi66_k$ = drawArc$default_0;
  protoOf(CanvasDrawScope).drawPath$default_2kcp9b_k$ = drawPath$default;
  protoOf(CanvasDrawScope).drawPath$default_oxe8h4_k$ = drawPath$default_0;
  protoOf(CanvasDrawScope).drawPoints$default_w02yfl_k$ = drawPoints$default;
  protoOf(CanvasDrawScope).drawPoints$default_o8qfp4_k$ = drawPoints$default_0;
  protoOf(CanvasDrawScope).get_center_568eeq_k$ = get_center_0;
  protoOf(CanvasDrawScope).get_size_x9ctfw_k$ = get_size;
  protoOf(CanvasDrawScope).toPx_u0ojv5_k$ = toPx;
  protoOf(CanvasDrawScope).toPx_x7oik4_k$ = toPx_0;
  protoOf(CanvasDrawScope).roundToPx_hl1u8z_k$ = roundToPx;
  protoOf(CanvasDrawScope).roundToPx_bdej4u_k$ = roundToPx_0;
  protoOf(CanvasDrawScope).toSp_ul0xj8_k$ = toSp;
  protoOf(CanvasDrawScope).toSp_8a8emd_k$ = toSp_0;
  protoOf(CanvasDrawScope).toSp_j4kre0_k$ = toSp_1;
  protoOf(CanvasDrawScope).toDp_amhzyl_k$ = toDp;
  protoOf(CanvasDrawScope).toDp_2eugbd_k$ = toDp_0;
  protoOf(CanvasDrawScope).toDp_2y47ho_k$ = toDp_1;
  protoOf(CanvasDrawScope).toRect_l767f3_k$ = toRect_0;
  protoOf(CanvasDrawScope).toSize_z60fpn_k$ = toSize;
  protoOf(CanvasDrawScope).toDpSize_ncjzav_k$ = toDpSize;
  protoOf(asDrawTransform$1).clipRect$default_37g4yl_k$ = clipRect$default_1;
  protoOf(asDrawTransform$1).clipPath$default_3e6chc_k$ = clipPath$default_0;
  protoOf(asDrawTransform$1).translate$default_t0ndyc_k$ = translate$default;
  protoOf(asDrawTransform$1).rotate$default_74zkwv_k$ = rotate$default;
  protoOf(asDrawTransform$1).scale$default_tdyvqo_k$ = scale$default_0;
  protoOf(EmptyCanvas).scale$default_5csufh_k$ = scale$default;
  protoOf(EmptyCanvas).clipRect$default_nsb3tl_k$ = clipRect$default_0;
  protoOf(EmptyCanvas).clipPath$default_e4vwl2_k$ = clipPath$default;
  protoOf(EmptyCanvas).drawImageRect$default_rboba7_k$ = drawImageRect$default;
  protoOf(EmptyCanvas).skewRad_jnvexm_k$ = skewRad;
  protoOf(EmptyCanvas).clipRect_5p7fgn_k$ = clipRect;
  protoOf(EmptyCanvas).clipRect$default_7dppdt_k$ = clipRect$default;
  protoOf(EmptyCanvas).drawRect_gsp0aa_k$ = drawRect;
  protoOf(EmptyCanvas).drawOval_5ze9o_k$ = drawOval;
  protoOf(EmptyCanvas).drawArc_wasmwu_k$ = drawArc;
  protoOf(EmptyCanvas).drawArcRad_pebonr_k$ = drawArcRad;
  protoOf(SkiaBackedCanvas).scale$default_5csufh_k$ = scale$default;
  protoOf(SkiaBackedCanvas).clipRect$default_nsb3tl_k$ = clipRect$default_0;
  protoOf(SkiaBackedCanvas).clipPath$default_e4vwl2_k$ = clipPath$default;
  protoOf(SkiaBackedCanvas).drawImageRect$default_rboba7_k$ = drawImageRect$default;
  protoOf(SkiaBackedCanvas).skewRad_jnvexm_k$ = skewRad;
  protoOf(SkiaBackedCanvas).clipRect_5p7fgn_k$ = clipRect;
  protoOf(SkiaBackedCanvas).clipRect$default_7dppdt_k$ = clipRect$default;
  protoOf(SkiaBackedCanvas).drawRect_gsp0aa_k$ = drawRect;
  protoOf(SkiaBackedCanvas).drawOval_5ze9o_k$ = drawOval;
  protoOf(SkiaBackedCanvas).drawArc_wasmwu_k$ = drawArc;
  protoOf(SkiaBackedCanvas).drawArcRad_pebonr_k$ = drawArcRad;
  protoOf(SkiaBackedPath).addPath$default_tzs6nd_k$ = addPath$default;
  protoOf(SkiaBackedPath).arcToRad_lid0rr_k$ = arcToRad;
  protoOf(SkiaBackedImageBitmap).readPixels$default_qmoziz_k$ = readPixels$default;
  //endregion
  //region block: init
  RadiansToDegrees = 57.29578;
  DefaultAlpha = 1.0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = ContentDrawScope;
  _.$_$.c = DrawScope;
  _.$_$.d = Stroke;
  _.$_$.e = BlendMode;
  _.$_$.f = Canvas_0;
  _.$_$.g = Color_2;
  _.$_$.h = Color_0;
  _.$_$.i = Color_1;
  _.$_$.j = Color;
  _.$_$.k = ImageBitmapConfig;
  _.$_$.l = ImageBitmap_0;
  _.$_$.m = Generic;
  _.$_$.n = Rectangle;
  _.$_$.o = Rounded;
  _.$_$.p = Paint_0;
  _.$_$.q = PathFillType;
  _.$_$.r = Path_0;
  _.$_$.s = get_RectangleShape;
  _.$_$.t = ShaderBrush;
  _.$_$.u = Shadow;
  _.$_$.v = Shape;
  _.$_$.w = SolidColor;
  _.$_$.x = StrokeCap;
  _.$_$.y = StrokeJoin;
  _.$_$.z = set_alphaMultiplier;
  _.$_$.a1 = asComposeCanvas;
  _.$_$.b1 = asComposePaint;
  _.$_$.c1 = asSkiaPath;
  _.$_$.d1 = compositeOver;
  _.$_$.e1 = drawOutline;
  _.$_$.f1 = drawOutline_0;
  _.$_$.g1 = luminance;
  _.$_$.h1 = get_nativeCanvas;
  _.$_$.i1 = toArgb;
  _.$_$.j1 = toComposeRect;
  _.$_$.k1 = toSkiaRRect;
  _.$_$.l1 = toSkiaRect;
  _.$_$.m1 = drawArc$default;
  _.$_$.n1 = drawArc$default_0;
  _.$_$.o1 = drawCircle$default;
  _.$_$.p1 = drawCircle$default_0;
  _.$_$.q1 = drawImage$default_0;
  _.$_$.r1 = drawImage$default;
  _.$_$.s1 = drawImage$default_1;
  _.$_$.t1 = drawLine$default;
  _.$_$.u1 = drawLine$default_0;
  _.$_$.v1 = drawOval$default;
  _.$_$.w1 = drawOval$default_0;
  _.$_$.x1 = drawPath$default_0;
  _.$_$.y1 = drawPath$default;
  _.$_$.z1 = drawPoints$default_0;
  _.$_$.a2 = drawPoints$default;
  _.$_$.b2 = drawRect$default;
  _.$_$.c2 = drawRect$default_0;
  _.$_$.d2 = drawRoundRect$default;
  _.$_$.e2 = drawRoundRect$default_0;
  _.$_$.f2 = BlendMode__hashCode_impl_93ceri;
  _.$_$.g2 = _Color___init__impl__r6cqi2;
  _.$_$.h2 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.i2 = _Color___get_blue__impl__xwez13;
  _.$_$.j2 = Color__convert_impl_so5m8t;
  _.$_$.k2 = _Color___get_green__impl__bta9rs;
  _.$_$.l2 = Color__hashCode_impl_vjyivj;
  _.$_$.m2 = _Color___get_red__impl__cwrsk6;
  _.$_$.n2 = _Color___get_value__impl__1pls5m;
  _.$_$.o2 = _Matrix___init__impl__q3kp4w;
  _.$_$.p2 = Matrix__map_impl_7meu7m;
  _.$_$.q2 = Matrix__map_impl_7meu7m_1;
  _.$_$.r2 = Matrix__reset_impl_4l49i7;
  _.$_$.s2 = Matrix__rotateX_impl_3e5y7j;
  _.$_$.t2 = Matrix__rotateY_impl_2x4btc;
  _.$_$.u2 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.v2 = Matrix__timesAssign_impl_oas521;
  _.$_$.w2 = _Matrix___get_values__impl__fblr7b;
  _.$_$.x2 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.y2 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.z2 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.a3 = Color__copy$default_impl_ectz3s;
  _.$_$.b3 = Matrix__scale$default_impl_snaws9;
  _.$_$.c3 = Matrix__translate$default_impl_10t8ql;
  _.$_$.d3 = ColorSpaces_getInstance;
  _.$_$.e3 = Companion_getInstance_44;
  _.$_$.f3 = Fill_getInstance;
  _.$_$.g3 = Companion_getInstance_14;
  _.$_$.h3 = Companion_getInstance_16;
  _.$_$.i3 = Companion_getInstance_17;
  _.$_$.j3 = Companion_getInstance_18;
  _.$_$.k3 = Companion_getInstance_22;
  _.$_$.l3 = Companion_getInstance_24;
  _.$_$.m3 = Companion_getInstance_28;
  _.$_$.n3 = Companion_getInstance_29;
  _.$_$.o3 = Companion_getInstance_31;
  _.$_$.p3 = Companion_getInstance_32;
  _.$_$.q3 = Companion_getInstance_33;
  //endregion
  return _;
}));
