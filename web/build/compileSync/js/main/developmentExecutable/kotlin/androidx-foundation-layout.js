(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-unit.js', './androidx-ui.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-ui.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-foundation-layout'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation-layout'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-foundation-layout'.");
    }
    root['androidx-foundation-layout'] = factory(typeof this['androidx-foundation-layout'] === 'undefined' ? {} : this['androidx-foundation-layout'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-unit'], this['androidx-ui'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.c9;
  var classMeta = kotlin_kotlin.$_$.z7;
  var VOID = kotlin_kotlin.$_$.ed;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var interfaceMeta = kotlin_kotlin.$_$.n8;
  var objectMeta = kotlin_kotlin.$_$.b9;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var hashCode = kotlin_kotlin.$_$.l8;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var equals = kotlin_kotlin.$_$.d8;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var roundToInt = kotlin_kotlin.$_$.m9;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var InspectorValueInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.a2;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var foldOut = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var any = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.m2;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var ParentDataModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.p1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
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
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isObject = kotlin_kotlin.$_$.t8;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.n1;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.m1;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.l1;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.k1;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.q1;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var fillArrayVal = kotlin_kotlin.$_$.e8;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var Annotation = kotlin_kotlin.$_$.ib;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var THROW_ISE = kotlin_kotlin.$_$.zb;
  var Enum = kotlin_kotlin.$_$.ob;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var getNumberHashCode = kotlin_kotlin.$_$.h8;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var until = kotlin_kotlin.$_$.aa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var get_sign = kotlin_kotlin.$_$.o9;
  var coerceAtMost = kotlin_kotlin.$_$.t9;
  var ensureNotNull = kotlin_kotlin.$_$.ic;
  var coerceIn = kotlin_kotlin.$_$.w9;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var coerceAtLeast = kotlin_kotlin.$_$.q9;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.r9;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  setMetadataFor(Horizontal, 'Horizontal', interfaceMeta);
  setMetadataFor(Arrangement$Absolute$Left$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$Center$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$Right$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$SpaceBetween$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$SpaceEvenly$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$SpaceAround$1, VOID, classMeta, VOID, [Horizontal]);
  function get_spacing_0() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  setMetadataFor(Vertical, 'Vertical', interfaceMeta);
  function get_spacing_1() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(Absolute, 'Absolute', objectMeta);
  setMetadataFor(SpacedAligned, 'SpacedAligned', classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$Start$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$End$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Top$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Bottom$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Center$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$SpaceEvenly$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$SpaceBetween$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$SpaceAround$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement, 'Arrangement', objectMeta);
  setMetadataFor(BoxChildData, 'BoxChildData', classMeta, InspectorValueInfo, [ParentDataModifier, InspectorValueInfo]);
  setMetadataFor(BoxScope, 'BoxScope', interfaceMeta);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta, VOID, [BoxScope]);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0_0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(LayoutScopeMarker, 'LayoutScopeMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(PaddingValues, 'PaddingValues', interfaceMeta);
  setMetadataFor(Absolute_0, 'Absolute', classMeta, VOID, [PaddingValues]);
  setMetadataFor(PaddingModifier, 'PaddingModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(PaddingValuesImpl, 'PaddingValuesImpl', classMeta, VOID, [PaddingValues]);
  setMetadataFor(LayoutOrientation, 'LayoutOrientation', classMeta, Enum);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CrossAxisAlignment, 'CrossAxisAlignment', classMeta);
  setMetadataFor(CenterCrossAxisAlignment, 'CenterCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(StartCrossAxisAlignment, 'StartCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(EndCrossAxisAlignment, 'EndCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(AlignmentLineCrossAxisAlignment, 'AlignmentLineCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(VerticalCrossAxisAlignment, 'VerticalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(HorizontalCrossAxisAlignment, 'HorizontalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(SizeMode, 'SizeMode', classMeta, Enum);
  setMetadataFor(AlignmentLineProvider, 'AlignmentLineProvider', classMeta);
  setMetadataFor(Block, 'Block', classMeta, AlignmentLineProvider);
  setMetadataFor(Value, 'Value', classMeta, AlignmentLineProvider);
  setMetadataFor(IntrinsicMeasureBlocks, 'IntrinsicMeasureBlocks', objectMeta);
  setMetadataFor(RowColumnParentData, 'RowColumnParentData', classMeta);
  setMetadataFor(OrientationIndependentConstraints, 'OrientationIndependentConstraints', classMeta);
  setMetadataFor(rowColumnMeasurePolicy$1, VOID, classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(RowColumnMeasurementHelper, 'RowColumnMeasurementHelper', classMeta);
  setMetadataFor(RowColumnMeasureHelperResult, 'RowColumnMeasureHelperResult', classMeta);
  setMetadataFor(FillModifier, 'FillModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(WrapContentModifier, 'WrapContentModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(SizeModifier, 'SizeModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(UnspecifiedConstraintsModifier, 'UnspecifiedConstraintsModifier', classMeta, InspectorValueInfo, [LayoutModifier, InspectorValueInfo]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(WindowInsets, 'WindowInsets', interfaceMeta);
  setMetadataFor(FixedIntInsets, 'FixedIntInsets', classMeta, VOID, [WindowInsets]);
  setMetadataFor(NoOp, 'NoOp', classMeta, VOID, [Annotation]);
  //endregion
  function get_$stableprop() {
    return 0;
  }
  function Arrangement$Absolute$Left$1() {
  }
  protoOf(Arrangement$Absolute$Left$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Left$1).toString = function () {
    return 'AbsoluteArrangement#Left';
  };
  function Arrangement$Absolute$Center$1() {
  }
  protoOf(Arrangement$Absolute$Center$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Center$1).toString = function () {
    return 'AbsoluteArrangement#Center';
  };
  function Arrangement$Absolute$Right$1() {
  }
  protoOf(Arrangement$Absolute$Right$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Right$1).toString = function () {
    return 'AbsoluteArrangement#Right';
  };
  function Arrangement$Absolute$SpaceBetween$1() {
  }
  protoOf(Arrangement$Absolute$SpaceBetween$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceBetween$1).toString = function () {
    return 'AbsoluteArrangement#SpaceBetween';
  };
  function Arrangement$Absolute$SpaceEvenly$1() {
  }
  protoOf(Arrangement$Absolute$SpaceEvenly$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceEvenly$1).toString = function () {
    return 'AbsoluteArrangement#SpaceEvenly';
  };
  function Arrangement$Absolute$SpaceAround$1() {
  }
  protoOf(Arrangement$Absolute$SpaceAround$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceAround$1).toString = function () {
    return 'AbsoluteArrangement#SpaceAround';
  };
  function Arrangement$Absolute$spacedBy$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$Absolute$spacedBy$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement$Absolute$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Horizontal() {
  }
  function Vertical() {
  }
  function HorizontalOrVertical() {
  }
  function Absolute() {
    Absolute_instance = this;
    var tmp = this;
    tmp.Left_1 = new Arrangement$Absolute$Left$1();
    var tmp_0 = this;
    tmp_0.Center_1 = new Arrangement$Absolute$Center$1();
    var tmp_1 = this;
    tmp_1.Right_1 = new Arrangement$Absolute$Right$1();
    var tmp_2 = this;
    tmp_2.SpaceBetween_1 = new Arrangement$Absolute$SpaceBetween$1();
    var tmp_3 = this;
    tmp_3.SpaceEvenly_1 = new Arrangement$Absolute$SpaceEvenly$1();
    var tmp_4 = this;
    tmp_4.SpaceAround_1 = new Arrangement$Absolute$SpaceAround$1();
    this.$stable_1 = 0;
  }
  protoOf(Absolute).get_Left_wo5bw0_k$ = function () {
    return this.Left_1;
  };
  protoOf(Absolute).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Absolute).get_Right_igdsyb_k$ = function () {
    return this.Right_1;
  };
  protoOf(Absolute).get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  protoOf(Absolute).get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  protoOf(Absolute).get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  protoOf(Absolute).spacedBy_vy2thv_k$ = function (space) {
    return new SpacedAligned(space, false, null);
  };
  protoOf(Absolute).spacedBy_junro7_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda(alignment));
  };
  protoOf(Absolute).spacedBy_osvfph_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda_0(alignment));
  };
  protoOf(Absolute).aligned_2187lk_k$ = function (alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp = tmp$ret$0;
    return new SpacedAligned(tmp, false, Arrangement$Absolute$aligned$lambda(alignment));
  };
  var Absolute_instance;
  function Absolute_getInstance() {
    if (Absolute_instance == null)
      new Absolute();
    return Absolute_instance;
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.space_1 = space;
    this.rtlMirror_1 = rtlMirror;
    this.alignment_1 = alignment;
    this.spacing_1 = this.space_1;
  }
  protoOf(SpacedAligned).get_space_glqwpk_k$ = function () {
    return this.space_1;
  };
  protoOf(SpacedAligned).get_rtlMirror_4wv9cw_k$ = function () {
    return this.rtlMirror_1;
  };
  protoOf(SpacedAligned).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(SpacedAligned).get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  protoOf(SpacedAligned).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = sizes.length === 0;
    if (tmp$ret$0)
      return Unit_getInstance();
    var spacePx = _this__u8e3s4.roundToPx_hl1u8z_k$(this.space_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.rtlMirror_1 ? layoutDirection.equals(LayoutDirection_Rtl_getInstance()) : false;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    var tmp0_forEachIndexed = Arrangement_getInstance();
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = sizes;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$1;
        // Inline function 'kotlin.math.min' call
        var tmp0_min = occupied;
        var tmp1_min = totalSize - item | 0;
        tmp$ret$1 = Math.min(tmp0_min, tmp1_min);
        outPositions[tmp1__anonymous__uwfjfc] = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.min' call
        var tmp2_min = (totalSize - outPositions[tmp1__anonymous__uwfjfc] | 0) - item | 0;
        tmp$ret$2 = Math.min(spacePx, tmp2_min);
        lastSpace = tmp$ret$2;
        occupied = (outPositions[tmp1__anonymous__uwfjfc] + item | 0) + lastSpace | 0;
      }
    } else {
      var inductionVariable_0 = sizes.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = sizes[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.min' call
          var tmp0_min_0 = occupied;
          var tmp1_min_0 = totalSize - tmp2__anonymous__z9zvc9 | 0;
          tmp$ret$3 = Math.min(tmp0_min_0, tmp1_min_0);
          outPositions[i] = tmp$ret$3;
          var tmp$ret$4;
          // Inline function 'kotlin.math.min' call
          var tmp2_min_0 = (totalSize - outPositions[i] | 0) - tmp2__anonymous__z9zvc9 | 0;
          tmp$ret$4 = Math.min(spacePx, tmp2_min_0);
          lastSpace = tmp$ret$4;
          occupied = (outPositions[i] + tmp2__anonymous__z9zvc9 | 0) + lastSpace | 0;
        }
         while (0 <= inductionVariable_0);
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.alignment_1 == null) ? occupied < totalSize : false) {
      var groupPosition = this.alignment_1(totalSize - occupied | 0, layoutDirection);
      var inductionVariable_1 = 0;
      var last_0 = outPositions.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var tmp1_array = outPositions;
          var tmp2_index0 = index_0;
          tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + groupPosition | 0;
        }
         while (inductionVariable_1 <= last_0);
    }
  };
  protoOf(SpacedAligned).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.arrange_6sc983_k$(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.rtlMirror_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + new Dp(this.space_1) + ', ' + this.alignment_1 + ')';
  };
  protoOf(SpacedAligned).component1_z2a8sv_k$ = function () {
    return this.space_1;
  };
  protoOf(SpacedAligned).component2_7eebsb_k$ = function () {
    return this.rtlMirror_1;
  };
  protoOf(SpacedAligned).component3_7eebsa_k$ = function () {
    return this.alignment_1;
  };
  protoOf(SpacedAligned).copy_f6k3do_k$ = function (space, rtlMirror, alignment) {
    return new SpacedAligned(space, rtlMirror, alignment);
  };
  protoOf(SpacedAligned).copy$default_kmttfe_k$ = function (space, rtlMirror, alignment, $super) {
    space = space === VOID ? this.space_1 : space;
    rtlMirror = rtlMirror === VOID ? this.rtlMirror_1 : rtlMirror;
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    return $super === VOID ? this.copy_f6k3do_k$(space, rtlMirror, alignment) : $super.copy_f6k3do_k$.call(this, new Dp(space), rtlMirror, alignment);
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.space_1);
    result = imul(result, 31) + (this.rtlMirror_1 | 0) | 0;
    result = imul(result, 31) + (this.alignment_1 == null ? 0 : hashCode(this.alignment_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.space_1, tmp0_other_with_cast.space_1))
      return false;
    if (!(this.rtlMirror_1 === tmp0_other_with_cast.rtlMirror_1))
      return false;
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    return true;
  };
  function forEachIndexed(_this__u8e3s4, $this, reversed, action) {
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = _this__u8e3s4;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        action(tmp1, item);
      }
    } else {
      var inductionVariable_0 = _this__u8e3s4.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          action(i, _this__u8e3s4[i]);
        }
         while (0 <= inductionVariable_0);
    }
  }
  function get_$stableprop_0() {
    return 0;
  }
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.spacing_1 = tmp$ret$0;
  }
  protoOf(Arrangement$Center$1).get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$Center$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.spacing_1 = tmp$ret$0;
  }
  protoOf(Arrangement$SpaceEvenly$1).get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.spacing_1 = tmp$ret$0;
  }
  protoOf(Arrangement$SpaceBetween$1).get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceBetween$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.spacing_1 = tmp$ret$0;
  }
  protoOf(Arrangement$SpaceAround$1).get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceAround$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance().get_Start_ih4i6x_k$().align_a5f08y_k$(0, size, layoutDirection);
  }
  function Arrangement$spacedBy$lambda_0($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$spacedBy$lambda_1($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$aligned$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.Start_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.End_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.Top_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.Bottom_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.Center_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.SpaceEvenly_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.SpaceBetween_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.SpaceAround_1 = new Arrangement$SpaceAround$1();
    this.$stable_1 = 0;
  }
  protoOf(Arrangement).get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  protoOf(Arrangement).get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  protoOf(Arrangement).get_Top_18jj1w_k$ = function () {
    return this.Top_1;
  };
  protoOf(Arrangement).get_Bottom_3m75bg_k$ = function () {
    return this.Bottom_1;
  };
  protoOf(Arrangement).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Arrangement).get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  protoOf(Arrangement).get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  protoOf(Arrangement).get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  protoOf(Arrangement).spacedBy_vy2thv_k$ = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda);
  };
  protoOf(Arrangement).spacedBy_junro7_k$ = function (space, alignment) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda_0(alignment));
  };
  protoOf(Arrangement).spacedBy_osvfph_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$spacedBy$lambda_1(alignment));
  };
  protoOf(Arrangement).aligned_2187lk_k$ = function (alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp = tmp$ret$0;
    return new SpacedAligned(tmp, true, Arrangement$aligned$lambda(alignment));
  };
  protoOf(Arrangement).aligned_8fzwhi_k$ = function (alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp = tmp$ret$0;
    return new SpacedAligned(tmp, false, Arrangement$aligned$lambda_0(alignment));
  };
  protoOf(Arrangement).placeRightOrBottom_j5u2x1_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        outPosition[tmp1__anonymous__uwfjfc] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          outPosition[i] = current;
          current = current + tmp2__anonymous__z9zvc9 | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeLeftOrTop_1r2n9x_k$ = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = size;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0__anonymous__q1qw7t = tmp1;
        outPosition[tmp0__anonymous__q1qw7t] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
          var tmp1__anonymous__uwfjfc = size[i];
          outPosition[i] = current;
          current = current + tmp1__anonymous__uwfjfc | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).placeCenter_icok0k_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$2 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$2;
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$3 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$3;
          current = current + tmp2__anonymous__z9zvc9;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceEvenly_ojzjdq_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$2 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$2;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$3 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$3;
          current = current + (tmp2__anonymous__z9zvc9 + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceBetween_8d7z33_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var tmp;
    if (size.length > 1) {
      tmp = (totalSize - consumedSize | 0) / (size.length - 1 | 0);
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = 0.0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$2;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$2 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$2;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$3;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$3 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$3;
          current = current + (tmp2__anonymous__z9zvc9 + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceAround_2yd3pg_k$ = function (totalSize, size, outPosition, reverseInput) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var indexedObject = size;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$0 = tmp0__anonymous__q1qw7t + element | 0;
      accumulator = tmp$ret$0;
    }
    tmp$ret$1 = accumulator;
    var consumedSize = tmp$ret$1;
    var tmp;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$2 = size.length === 0;
    tmp$ret$3 = !tmp$ret$2;
    if (tmp$ret$3) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject_0 = size;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp1;
        var tmp$ret$4;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        tmp$ret$4 = roundToInt(tmp0_roundToInt);
        outPosition[tmp1__anonymous__uwfjfc] = tmp$ret$4;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = size[i];
          var tmp$ret$5;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          tmp$ret$5 = roundToInt(tmp0_roundToInt_0);
          outPosition[i] = tmp$ret$5;
          current = current + (tmp2__anonymous__z9zvc9 + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function get_DefaultBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return DefaultBoxMeasurePolicy;
  }
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  function boxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = boxMeasurePolicy$lambda(propagateMinConstraints, alignment);
    return new sam$androidx_compose_ui_layout_MeasurePolicy$0_0(tmp);
  }
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildData(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.matchParentSize_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildData(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.align_f85h4l_k$(IntSize(placeable.get_width_j0q4yl_k$(), placeable.get_height_e7t92o_k$()), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.place$default_b921p1_k$(placeable, position);
  }
  function BoxChildData(alignment, matchParentSize, inspectorInfo) {
    matchParentSize = matchParentSize === VOID ? false : matchParentSize;
    inspectorInfo = inspectorInfo === VOID ? get_NoInspectorInfo() : inspectorInfo;
    InspectorValueInfo.call(this, inspectorInfo);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
  }
  protoOf(BoxChildData).set_alignment_ks94gw_k$ = function (_set____db54di) {
    this.alignment_1 = _set____db54di;
  };
  protoOf(BoxChildData).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(BoxChildData).set_matchParentSize_t943cm_k$ = function (_set____db54di) {
    this.matchParentSize_1 = _set____db54di;
  };
  protoOf(BoxChildData).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(BoxChildData).modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    return this;
  };
  protoOf(BoxChildData).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildData ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignment_1, otherModifier.alignment_1) ? this.matchParentSize_1 === otherModifier.matchParentSize_1 : false;
  };
  protoOf(BoxChildData).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(31, result) + (this.matchParentSize_1 | 0) | 0;
    return result;
  };
  protoOf(BoxChildData).toString = function () {
    return 'BoxChildData(alignment=' + this.alignment_1 + ', matchParentSize=' + this.matchParentSize_1 + ')';
  };
  function get_boxChildData(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof BoxChildData ? tmp : null;
  }
  function Box$composable(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    _init_properties_Box_kt__tvzvdl();
    var modifier_0 = modifier;
    var contentAlignment_0 = contentAlignment;
    var propagateMinConstraints_0 = propagateMinConstraints;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1330882304);
    sourceInformation($composer_0, 'CC(Box$composable)P(2,1,3)70@3267L67,71@3339L130:Box.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    if (!(($default & 2) === 0))
      contentAlignment_0 = Companion_getInstance().get_TopStart_o4x792_k$();
    if (!(($default & 4) === 0))
      propagateMinConstraints_0 = false;
    var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp11_Layout$composable = modifier_0;
    var tmp12_Layout$composable = $composer_0;
    var tmp13_Layout$composable = 112 & $changed << 3;
    var modifier_1 = tmp11_Layout$composable;
    var $composer_1 = tmp12_Layout$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
    sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)73@2855L7,74@2910L7,75@2969L7,76@2981L460:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_1 = Companion_getInstance_0();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var tmp1_$get_current$$composable_gn3xww = $composer_1;
    var $composer_2 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_2.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp$ret$0 = tmp0;
    var density = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
    var tmp3_$get_current$$composable_fm67ua = $composer_1;
    var $composer_3 = tmp3_$get_current$$composable_fm67ua;
    sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_3.consume_11nid3_k$(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_3);
    tmp$ret$1 = tmp0_0;
    var layoutDirection = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp4_$get_current$$composable_f3pcsz = get_LocalViewConfiguration();
    var tmp5_$get_current$$composable_el8hro = $composer_1;
    var $composer_4 = tmp5_$get_current$$composable_el8hro;
    sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_4.consume_11nid3_k$(tmp4_$get_current$$composable_f3pcsz);
    sourceInformationMarkerEnd($composer_4);
    tmp$ret$2 = tmp0_1;
    var viewConfiguration = tmp$ret$2;
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp6_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
    var tmp7_ReusableComposeNode$composable = materializerOf(modifier_1);
    var tmp8_ReusableComposeNode$composable = $composer_1;
    var tmp9_ReusableComposeNode$composable = 6 | 7168 & tmp13_Layout$composable << 9;
    var $composer_5 = tmp8_ReusableComposeNode$composable;
    var tmp = $composer_5.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_5.startReusableNode_jk07k2_k$();
    if ($composer_5.get_inserting_25mlsw_k$()) {
      $composer_5.createNode_p4ouwd_k$(tmp6_ReusableComposeNode$composable);
    } else {
      $composer_5.useNode_inlzo8_k$();
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp10__anonymous__yfiz50 = _Updater___init__impl__rbfxm8($composer_5);
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, density, Companion_getInstance_1().get_SetDensity_gmdtxr_k$());
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, layoutDirection, Companion_getInstance_1().get_SetLayoutDirection_w7ypuk_k$());
    Updater__set_impl_v7kwss(tmp10__anonymous__yfiz50, viewConfiguration, Companion_getInstance_1().get_SetViewConfiguration_lke0s8_k$());
    tmp7_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp9_ReusableComposeNode$composable >> 3);
    $composer_5.startReplaceableGroup_rp6air_k$(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
    var tmp14__anonymous__f0seaw = $composer_5;
    var tmp15__anonymous__a63r3d = 14 & tmp9_ReusableComposeNode$composable >> 9;
    var $composer_6 = tmp14__anonymous__f0seaw;
    sourceInformationMarkerStart($composer_6, -1851536872, 'C72@3384L9:Box.kt#2w3rfo');
    content(BoxScopeInstance_getInstance(), $composer_6, 6 | 112 & $changed >> 6);
    sourceInformationMarkerEnd($composer_6);
    $composer_5.endReplaceableGroup_er37p7_k$();
    $composer_5.endNode_3mkr10_k$();
    $composer_1.endReplaceableGroup_er37p7_k$();
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function BoxScope() {
  }
  function rememberBoxMeasurePolicy$composable(alignment, propagateMinConstraints, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1048091512);
    sourceInformation($composer_0, 'C(rememberBoxMeasurePolicy$composable)86@3713L113:Box.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-1048091512, $changed, -1, 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable (Box.kt:80)');
    }
    var tmp;
    if (equals(alignment, Companion_getInstance().get_TopStart_o4x792_k$()) ? !propagateMinConstraints : false) {
      tmp = get_DefaultBoxMeasurePolicy();
    } else {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var tmp4_remember$composable = 14 & $changed | 112 & $changed;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.changed_ga7h3f_k$(alignment) | $composer_1.changed_ga7h3f_k$(propagateMinConstraints));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable.<anonymous>' call
        tmp$ret$0 = boxMeasurePolicy(alignment, propagateMinConstraints);
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
      tmp = tmp$ret$4;
    }
    var tmp1_group = tmp;
    var tmp0_0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('align');
      $this$null.set_value_rj6yh0_k$($alignment);
      return Unit_getInstance();
    };
  }
  function BoxScopeInstance$matchParentSize$lambda($this$null) {
    // Inline function 'androidx.compose.foundation.layout.BoxScopeInstance.matchParentSize.<anonymous>' call
    $this$null.set_name_1v3553_k$('matchParentSize');
    return Unit_getInstance();
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  protoOf(BoxScopeInstance).align_eg370n_k$ = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new BoxChildData(alignment, false, tmp$ret$0));
  };
  protoOf(BoxScopeInstance).matchParentSize_f3w2c1_k$ = function (_this__u8e3s4) {
    var tmp = Companion_getInstance().get_Center_3arb0i_k$();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_0;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_0 = BoxScopeInstance$matchParentSize$lambda;
    } else {
      tmp_0 = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp_0;
    return _this__u8e3s4.then_5qw5wu_k$(new BoxChildData(tmp, true, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    return this.function_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    return this.function_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
    return $this$MeasurePolicy.layout$default_8ylrvs_k$(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda_0($placeable, $measurable, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_MeasurePolicy.get_layoutDirection_7e37v0_k$(), $boxWidth, $boxHeight, $alignment);
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda$lambda_1($placeables, $measurables, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0__anonymous__q1qw7t = tmp1;
        if (item instanceof Placeable)
          item;
        else
          THROW_CCE();
        var measurable = $measurables.get_fkrdnv_k$(tmp0__anonymous__q1qw7t);
        placeInBox($this$layout, item, measurable, $this_MeasurePolicy.get_layoutDirection_7e37v0_k$(), $boxWidth._v, $boxHeight._v, $alignment);
      }
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda($propagateMinConstraints, $alignment) {
    return function ($this$MeasurePolicy, measurables, constraints) {
      var tmp;
      if (measurables.isEmpty_y1axqb_k$()) {
        var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
        var tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
        return $this$MeasurePolicy.layout$default_8ylrvs_k$(tmp_0, tmp_1, VOID, boxMeasurePolicy$lambda$lambda);
      }
      var tmp_2;
      if ($propagateMinConstraints) {
        tmp_2 = constraints.value_1;
      } else {
        tmp_2 = Constraints__copy$default_impl_f452rp(constraints.value_1, 0, VOID, 0);
      }
      var contentConstraints = tmp_2;
      var tmp_3;
      if (measurables.get_size_woubt6_k$() === 1) {
        var measurable = measurables.get_fkrdnv_k$(0);
        var boxWidth;
        var boxHeight;
        var placeable;
        if (!get_matchesParentSize(measurable)) {
          placeable = measurable.measure_ikak0q_k$(contentConstraints);
          var tmp$ret$0;
          // Inline function 'kotlin.math.max' call
          var tmp0_max = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
          var tmp1_max = placeable.get_width_j0q4yl_k$();
          tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
          boxWidth = tmp$ret$0;
          var tmp$ret$1;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
          var tmp3_max = placeable.get_height_e7t92o_k$();
          tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
          boxHeight = tmp$ret$1;
        } else {
          boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
          boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
          placeable = measurable.measure_ikak0q_k$(Companion_getInstance_3().fixed_bmujv7_k$(_Constraints___get_minWidth__impl__hi9lfi(constraints.value_1), _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1)));
        }
        return $this$MeasurePolicy.layout$default_8ylrvs_k$(boxWidth, boxHeight, VOID, boxMeasurePolicy$lambda$lambda_0(placeable, measurable, $this$MeasurePolicy, boxWidth, boxHeight, $alignment));
      }
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp4_arrayOfNulls = measurables.get_size_woubt6_k$();
      tmp$ret$2 = fillArrayVal(Array(tmp4_arrayOfNulls), null);
      var placeables = tmp$ret$2;
      var hasMatchParentSizeChildren = false;
      var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1)};
      var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1)};
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      var tmp_4;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
          if (!get_matchesParentSize(item)) {
            var placeable_0 = item.measure_ikak0q_k$(contentConstraints);
            placeables[index] = placeable_0;
            var tmp$ret$3;
            // Inline function 'kotlin.math.max' call
            var tmp0_max_0 = boxWidth_0._v;
            var tmp1_max_0 = placeable_0.get_width_j0q4yl_k$();
            tmp$ret$3 = Math.max(tmp0_max_0, tmp1_max_0);
            boxWidth_0._v = tmp$ret$3;
            var tmp$ret$4;
            // Inline function 'kotlin.math.max' call
            var tmp2_max_0 = boxHeight_0._v;
            var tmp3_max_0 = placeable_0.get_height_e7t92o_k$();
            tmp$ret$4 = Math.max(tmp2_max_0, tmp3_max_0);
            boxHeight_0._v = tmp$ret$4;
          } else {
            hasMatchParentSizeChildren = true;
          }
        }
         while (inductionVariable <= last);
        tmp_4 = Unit_getInstance();
      }
      var tmp_5;
      if (hasMatchParentSizeChildren) {
        var tmp0_minWidth = !(boxWidth_0._v === Companion_getInstance_3().get_Infinity_rvchkf_k$()) ? boxWidth_0._v : 0;
        var tmp1_minHeight = !(boxHeight_0._v === Companion_getInstance_3().get_Infinity_rvchkf_k$()) ? boxHeight_0._v : 0;
        var tmp2_maxWidth = boxWidth_0._v;
        var tmp3_maxHeight = boxHeight_0._v;
        var matchParentSizeConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
        var tmp_6;
        if (inductionVariable_0 <= last_0) {
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = measurables.get_fkrdnv_k$(index_0);
            // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
            if (get_matchesParentSize(item_0)) {
              placeables[index_0] = item_0.measure_ikak0q_k$(matchParentSizeConstraints);
            }
          }
           while (inductionVariable_0 <= last_0);
          tmp_6 = Unit_getInstance();
        }
        tmp_5 = tmp_6;
      }
      var tmp_7 = boxWidth_0._v;
      var tmp_8 = boxHeight_0._v;
      return $this$MeasurePolicy.layout$default_8ylrvs_k$(tmp_7, tmp_8, VOID, boxMeasurePolicy$lambda$lambda_1(placeables, measurables, $this$MeasurePolicy, boxWidth_0, boxHeight_0, $alignment));
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (properties_initialized_Box_kt_kr8cbp) {
    } else {
      properties_initialized_Box_kt_kr8cbp = true;
      DefaultBoxMeasurePolicy = boxMeasurePolicy(Companion_getInstance().get_TopStart_o4x792_k$(), false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function DefaultColumnMeasurePolicy$lambda(totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
    _init_properties_Column_kt__s1zb92();
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = Arrangement_getInstance().get_Top_18jj1w_k$();
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.arrange_bbki90_k$(density, totalSize, size, outPosition);
    tmp$ret$0 = Unit_getInstance();
    return Unit_getInstance();
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (properties_initialized_Column_kt_nm4x4) {
    } else {
      properties_initialized_Column_kt_nm4x4 = true;
      var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().get_Top_18jj1w_k$().get_spacing_kuwe3v_k$();
      var tmp2_crossAxisAlignment = Companion_getInstance_7().horizontal_d2uuko_k$(Companion_getInstance().get_Start_ih4i6x_k$());
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultColumnMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultColumnMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  function get_crossAxisRowArrangement() {
    _init_properties_FlowLayout_kt__ftkyso();
    return crossAxisRowArrangement;
  }
  var crossAxisRowArrangement;
  function get_crossAxisColumnArrangement() {
    _init_properties_FlowLayout_kt__ftkyso();
    return crossAxisColumnArrangement;
  }
  var crossAxisColumnArrangement;
  function crossAxisRowArrangement$lambda(totalSize, size, measureScope, outPosition) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = Arrangement_getInstance().get_Top_18jj1w_k$();
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.arrange_bbki90_k$(measureScope, totalSize, size, outPosition);
    tmp$ret$0 = Unit_getInstance();
    return Unit_getInstance();
  }
  function crossAxisColumnArrangement$lambda(totalSize, size, measureScope, outPosition) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = Arrangement_getInstance().get_Start_ih4i6x_k$();
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.arrange_6sc983_k$(measureScope, totalSize, size, measureScope.get_layoutDirection_7e37v0_k$(), outPosition);
    tmp$ret$0 = Unit_getInstance();
    return Unit_getInstance();
  }
  var properties_initialized_FlowLayout_kt_edjldy;
  function _init_properties_FlowLayout_kt__ftkyso() {
    if (properties_initialized_FlowLayout_kt_edjldy) {
    } else {
      properties_initialized_FlowLayout_kt_edjldy = true;
      crossAxisRowArrangement = crossAxisRowArrangement$lambda;
      crossAxisColumnArrangement = crossAxisColumnArrangement$lambda;
    }
  }
  function LayoutScopeMarker() {
  }
  protoOf(LayoutScopeMarker).equals = function (other) {
    if (!(other instanceof LayoutScopeMarker))
      return false;
    var tmp0_other_with_cast = other instanceof LayoutScopeMarker ? other : THROW_CCE();
    return true;
  };
  protoOf(LayoutScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(LayoutScopeMarker).toString = function () {
    return '@androidx.compose.foundation.layout.LayoutScopeMarker()';
  };
  function padding(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_3;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_3 = padding$lambda(start, top, end, bottom);
    } else {
      tmp_3 = get_NoInspectorInfo();
    }
    tmp$ret$4 = tmp_3;
    return _this__u8e3s4.then_5qw5wu_k$(new PaddingModifier(start, top, end, bottom, true, tmp$ret$4));
  }
  function _get_left__d9qyp0($this) {
    return $this.left_1;
  }
  function _get_top__e6hfbw($this) {
    return $this.top_1;
  }
  function _get_right__bvz45n($this) {
    return $this.right_1;
  }
  function _get_bottom__w3218g($this) {
    return $this.bottom_1;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function Absolute_0(left, top, right, bottom) {
    var tmp;
    if (left === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = left;
    }
    left = tmp;
    var tmp_0;
    if (top === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (right === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = right;
    }
    right = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    this.$stable_1 = 0;
  }
  protoOf(Absolute_0).calculateLeftPadding_71tp16_k$ = function (layoutDirection) {
    return this.left_1;
  };
  protoOf(Absolute_0).calculateTopPadding_ok52o3_k$ = function () {
    return this.top_1;
  };
  protoOf(Absolute_0).calculateRightPadding_wmvkqr_k$ = function (layoutDirection) {
    return this.right_1;
  };
  protoOf(Absolute_0).calculateBottomPadding_lu87vf_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Absolute_0).equals = function (other) {
    if (!(other instanceof Absolute_0))
      return false;
    return ((equals(this.left_1, other.left_1) ? equals(this.top_1, other.top_1) : false) ? equals(this.right_1, other.right_1) : false) ? equals(this.bottom_1, other.bottom_1) : false;
  };
  protoOf(Absolute_0).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.left_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.right_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  protoOf(Absolute_0).toString = function () {
    return 'PaddingValues.Absolute(left=' + new Dp(this.left_1) + ', top=' + new Dp(this.top_1) + ', right=' + new Dp(this.right_1) + ', bottom=' + new Dp(this.bottom_1) + ')';
  };
  function PaddingValues() {
  }
  function PaddingValues_0(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function PaddingValues_1(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function PaddingValues_2(horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return new PaddingValuesImpl(horizontal, vertical, horizontal, vertical);
  }
  function PaddingModifier$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rtlAware_1) {
        $this$layout.placeRelative$default_mxzlyj_k$($placeable, $this_measure.roundToPx_hl1u8z_k$(this$0.start_1), $this_measure.roundToPx_hl1u8z_k$(this$0.top_1));
        tmp = Unit_getInstance();
      } else {
        $this$layout.place$default_eachz5_k$($placeable, $this_measure.roundToPx_hl1u8z_k$(this$0.start_1), $this_measure.roundToPx_hl1u8z_k$(this$0.top_1));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function PaddingModifier(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    InspectorValueInfo.call(this, inspectorInfo);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
    // Inline function 'kotlin.require' call
    var tmp0_require = (((_Dp___get_value__impl__geb1vb(this.start_1) >= 0.0 ? true : equals(this.start_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) ? _Dp___get_value__impl__geb1vb(this.top_1) >= 0.0 ? true : equals(this.top_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) : false) ? _Dp___get_value__impl__geb1vb(this.end_1) >= 0.0 ? true : equals(this.end_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) : false) ? _Dp___get_value__impl__geb1vb(this.bottom_1) >= 0.0 ? true : equals(this.bottom_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.foundation.layout.PaddingModifier.<anonymous>' call
      tmp$ret$4 = 'Padding must be non-negative';
      var message = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(PaddingModifier).get_start_dazqs_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingModifier).get_top_qz4pg9_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingModifier).get_end_wf34x9_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingModifier).get_bottom_dp2gsx_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingModifier).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(PaddingModifier).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.roundToPx_hl1u8z_k$(this.start_1) + _this__u8e3s4.roundToPx_hl1u8z_k$(this.end_1) | 0;
    var vertical = _this__u8e3s4.roundToPx_hl1u8z_k$(this.top_1) + _this__u8e3s4.roundToPx_hl1u8z_k$(this.bottom_1) | 0;
    var placeable = measurable.measure_ikak0q_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_8ylrvs_k$(width, height, VOID, PaddingModifier$measure$lambda(this, placeable, _this__u8e3s4));
  };
  protoOf(PaddingModifier).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.start_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.top_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.end_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
    result = imul(31, result) + (this.rtlAware_1 | 0) | 0;
    return result;
  };
  protoOf(PaddingModifier).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return (((equals(this.start_1, otherModifier.start_1) ? equals(this.top_1, otherModifier.top_1) : false) ? equals(this.end_1, otherModifier.end_1) : false) ? equals(this.bottom_1, otherModifier.bottom_1) : false) ? this.rtlAware_1 === otherModifier.rtlAware_1 : false;
  };
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$0_0 = Unit_getInstance();
      tmp = tmp$ret$0;
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$1 = Unit_getInstance();
      tmp_0 = tmp$ret$0_1;
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_2 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$2 = Unit_getInstance();
      tmp_1 = tmp$ret$0_2;
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      var tmp$ret$0_3;
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_3 = _Dp___init__impl__ms3zkb(0);
      tmp$ret$3 = Unit_getInstance();
      tmp_2 = tmp$ret$0_3;
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
  }
  protoOf(PaddingValuesImpl).get_start_dazqs_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingValuesImpl).get_top_qz4pg9_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingValuesImpl).get_end_wf34x9_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingValuesImpl).get_bottom_dp2gsx_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingValuesImpl).calculateLeftPadding_71tp16_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.start_1 : this.end_1;
  };
  protoOf(PaddingValuesImpl).calculateTopPadding_ok52o3_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingValuesImpl).calculateRightPadding_wmvkqr_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.end_1 : this.start_1;
  };
  protoOf(PaddingValuesImpl).calculateBottomPadding_lu87vf_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return ((equals(this.start_1, other.start_1) ? equals(this.top_1, other.top_1) : false) ? equals(this.end_1, other.end_1) : false) ? equals(this.bottom_1, other.bottom_1) : false;
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.start_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.end_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + new Dp(this.start_1) + ', top=' + new Dp(this.top_1) + ', end=' + new Dp(this.end_1) + ', bottom=' + new Dp(this.bottom_1) + ')';
  };
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('padding');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('start', new Dp($start));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('top', new Dp($top));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('end', new Dp($end));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('bottom', new Dp($bottom));
      return Unit_getInstance();
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function DefaultRowMeasurePolicy$lambda(totalSize, size, layoutDirection, density, outPosition) {
    _init_properties_Row_kt__jenljs();
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = Arrangement_getInstance().get_Start_ih4i6x_k$();
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.arrange_6sc983_k$(density, totalSize, size, layoutDirection, outPosition);
    tmp$ret$0 = Unit_getInstance();
    return Unit_getInstance();
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (properties_initialized_Row_kt_sbxnna) {
    } else {
      properties_initialized_Row_kt_sbxnna = true;
      var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().get_Start_ih4i6x_k$().get_spacing_kuwe3v_k$();
      var tmp2_crossAxisAlignment = Companion_getInstance_7().vertical_qzmr60_k$(Companion_getInstance().get_Top_18jj1w_k$());
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultRowMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultRowMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  var LayoutOrientation_Horizontal_instance;
  var LayoutOrientation_Vertical_instance;
  function values() {
    return [LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Horizontal':
        return LayoutOrientation_Horizontal_getInstance();
      case 'Vertical':
        return LayoutOrientation_Vertical_getInstance();
      default:
        LayoutOrientation_initEntries();
        THROW_ISE();
        break;
    }
  }
  var LayoutOrientation_entriesInitialized;
  function LayoutOrientation_initEntries() {
    if (LayoutOrientation_entriesInitialized)
      return Unit_getInstance();
    LayoutOrientation_entriesInitialized = true;
    LayoutOrientation_Horizontal_instance = new LayoutOrientation('Horizontal', 0);
    LayoutOrientation_Vertical_instance = new LayoutOrientation('Vertical', 1);
  }
  function LayoutOrientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
    Companion_instance = this;
    this.Center_1 = CenterCrossAxisAlignment_getInstance();
    this.Start_1 = StartCrossAxisAlignment_getInstance();
    this.End_1 = EndCrossAxisAlignment_getInstance();
  }
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  protoOf(Companion).AlignmentLine_9o8d2s_k$ = function (alignmentLine) {
    return new AlignmentLineCrossAxisAlignment(new Value(alignmentLine));
  };
  protoOf(Companion).Relative_767dzl_k$ = function (alignmentLineProvider) {
    return new AlignmentLineCrossAxisAlignment(alignmentLineProvider);
  };
  protoOf(Companion).vertical_qzmr60_k$ = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(Companion).horizontal_d2uuko_k$ = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(CenterCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return size / 2 | 0;
  };
  var CenterCrossAxisAlignment_instance;
  function CenterCrossAxisAlignment_getInstance() {
    if (CenterCrossAxisAlignment_instance == null)
      new CenterCrossAxisAlignment();
    return CenterCrossAxisAlignment_instance;
  }
  function StartCrossAxisAlignment() {
    StartCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(StartCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? 0 : size;
  };
  var StartCrossAxisAlignment_instance;
  function StartCrossAxisAlignment_getInstance() {
    if (StartCrossAxisAlignment_instance == null)
      new StartCrossAxisAlignment();
    return StartCrossAxisAlignment_instance;
  }
  function EndCrossAxisAlignment() {
    EndCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(EndCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function AlignmentLineCrossAxisAlignment(alignmentLineProvider) {
    CrossAxisAlignment.call(this);
    this.alignmentLineProvider_1 = alignmentLineProvider;
  }
  protoOf(AlignmentLineCrossAxisAlignment).get_alignmentLineProvider_242uu9_k$ = function () {
    return this.alignmentLineProvider_1;
  };
  protoOf(AlignmentLineCrossAxisAlignment).get_isRelative_skgyhr_k$ = function () {
    return true;
  };
  protoOf(AlignmentLineCrossAxisAlignment).calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return this.alignmentLineProvider_1.calculateAlignmentLinePosition_92xdb9_k$(placeable);
  };
  protoOf(AlignmentLineCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    var alignmentLinePosition = this.alignmentLineProvider_1.calculateAlignmentLinePosition_92xdb9_k$(placeable);
    var tmp;
    if (!(alignmentLinePosition === Companion_getInstance_5().get_Unspecified_el0w4u_k$())) {
      var line = beforeCrossAxisAlignmentLine - alignmentLinePosition | 0;
      var tmp_0;
      if (layoutDirection.equals(LayoutDirection_Rtl_getInstance())) {
        tmp_0 = size - line | 0;
      } else {
        tmp_0 = line;
      }
      tmp = tmp_0;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.vertical_1 = vertical;
  }
  protoOf(VerticalCrossAxisAlignment).get_vertical_6ev9z3_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.vertical_1.align_1fj06d_k$(0, size);
  };
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.horizontal_1.align_a5f08y_k$(0, size, layoutDirection);
  };
  function CrossAxisAlignment() {
    Companion_getInstance_7();
  }
  protoOf(CrossAxisAlignment).get_isRelative_skgyhr_k$ = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return null;
  };
  var SizeMode_Wrap_instance;
  var SizeMode_Expand_instance;
  function values_0() {
    return [SizeMode_Wrap_getInstance(), SizeMode_Expand_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Wrap':
        return SizeMode_Wrap_getInstance();
      case 'Expand':
        return SizeMode_Expand_getInstance();
      default:
        SizeMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SizeMode_entriesInitialized;
  function SizeMode_initEntries() {
    if (SizeMode_entriesInitialized)
      return Unit_getInstance();
    SizeMode_entriesInitialized = true;
    SizeMode_Wrap_instance = new SizeMode('Wrap', 0);
    SizeMode_Expand_instance = new SizeMode('Expand', 1);
  }
  function SizeMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function rowColumnMeasurePolicy(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment) {
    return new rowColumnMeasurePolicy$1(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment);
  }
  function get_$stableprop_2() {
    return 0;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function Block(lineProviderBlock) {
    AlignmentLineProvider.call(this);
    this.lineProviderBlock_1 = lineProviderBlock;
    this.$stable_1 = 0;
  }
  protoOf(Block).get_lineProviderBlock_1gxdy7_k$ = function () {
    return this.lineProviderBlock_1;
  };
  protoOf(Block).calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return this.lineProviderBlock_1(placeable);
  };
  protoOf(Block).component1_7eebsc_k$ = function () {
    return this.lineProviderBlock_1;
  };
  protoOf(Block).copy_o786p1_k$ = function (lineProviderBlock) {
    return new Block(lineProviderBlock);
  };
  protoOf(Block).copy$default_qzfj8e_k$ = function (lineProviderBlock, $super) {
    lineProviderBlock = lineProviderBlock === VOID ? this.lineProviderBlock_1 : lineProviderBlock;
    return $super === VOID ? this.copy_o786p1_k$(lineProviderBlock) : $super.copy_o786p1_k$.call(this, lineProviderBlock);
  };
  protoOf(Block).toString = function () {
    return 'Block(lineProviderBlock=' + this.lineProviderBlock_1 + ')';
  };
  protoOf(Block).hashCode = function () {
    return hashCode(this.lineProviderBlock_1);
  };
  protoOf(Block).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Block))
      return false;
    var tmp0_other_with_cast = other instanceof Block ? other : THROW_CCE();
    if (!equals(this.lineProviderBlock_1, tmp0_other_with_cast.lineProviderBlock_1))
      return false;
    return true;
  };
  function Value(alignmentLine) {
    AlignmentLineProvider.call(this);
    this.alignmentLine_1 = alignmentLine;
    this.$stable_1 = 0;
  }
  protoOf(Value).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(Value).calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return placeable.get_4x1crv_k$(this.alignmentLine_1);
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(Value).copy_d594q2_k$ = function (alignmentLine) {
    return new Value(alignmentLine);
  };
  protoOf(Value).copy$default_8i1ixr_k$ = function (alignmentLine, $super) {
    alignmentLine = alignmentLine === VOID ? this.alignmentLine_1 : alignmentLine;
    return $super === VOID ? this.copy_d594q2_k$(alignmentLine) : $super.copy_d594q2_k$.call(this, alignmentLine);
  };
  protoOf(Value).toString = function () {
    return 'Value(alignmentLine=' + this.alignmentLine_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!equals(this.alignmentLine_1, tmp0_other_with_cast.alignmentLine_1))
      return false;
    return true;
  };
  function AlignmentLineProvider() {
  }
  function MinIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMinWidth_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMinWidth_1;
    }
    return tmp;
  }
  function MinIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMinHeight_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMinHeight_1;
    }
    return tmp;
  }
  function MaxIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMaxWidth_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMaxWidth_1;
    }
    return tmp;
  }
  function MaxIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMaxHeight_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMaxHeight_1;
    }
    return tmp;
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.minIntrinsicWidth_3wv0r6_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.minIntrinsicWidth_3wv0r6_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.minIntrinsicHeight_7ydhpj_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.minIntrinsicHeight_7ydhpj_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks() {
    IntrinsicMeasureBlocks_instance = this;
    var tmp = this;
    tmp.HorizontalMinWidth_1 = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda;
    var tmp_0 = this;
    tmp_0.VerticalMinWidth_1 = IntrinsicMeasureBlocks$VerticalMinWidth$lambda;
    var tmp_1 = this;
    tmp_1.HorizontalMinHeight_1 = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda;
    var tmp_2 = this;
    tmp_2.VerticalMinHeight_1 = IntrinsicMeasureBlocks$VerticalMinHeight$lambda;
    var tmp_3 = this;
    tmp_3.HorizontalMaxWidth_1 = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda;
    var tmp_4 = this;
    tmp_4.VerticalMaxWidth_1 = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda;
    var tmp_5 = this;
    tmp_5.HorizontalMaxHeight_1 = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda;
    var tmp_6 = this;
    tmp_6.VerticalMaxHeight_1 = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda;
  }
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMinWidth_u55zsv_k$ = function () {
    return this.HorizontalMinWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMinWidth_gd1cdp_k$ = function () {
    return this.VerticalMinWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMinHeight_i7hp2s_k$ = function () {
    return this.HorizontalMinHeight_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMinHeight_h65uva_k$ = function () {
    return this.VerticalMinHeight_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMaxWidth_rnxox_k$ = function () {
    return this.HorizontalMaxWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMaxWidth_d0gpq9_k$ = function () {
    return this.VerticalMaxWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMaxHeight_uzelcy_k$ = function () {
    return this.HorizontalMaxHeight_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMaxHeight_ty2r5g_k$ = function () {
    return this.VerticalMaxHeight_1;
  };
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    if (IntrinsicMeasureBlocks_instance == null)
      new IntrinsicMeasureBlocks();
    return IntrinsicMeasureBlocks_instance;
  }
  function intrinsicSize(children, intrinsicMainSize, intrinsicCrossSize, crossAxisAvailable, mainAxisSpacing, layoutOrientation, intrinsicOrientation) {
    var tmp;
    if (layoutOrientation.equals(intrinsicOrientation)) {
      tmp = intrinsicMainAxisSize(children, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    } else {
      tmp = intrinsicCrossAxisSize(children, intrinsicCrossSize, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    }
    return tmp;
  }
  function intrinsicMainAxisSize(children, mainAxisSize, crossAxisAvailable, mainAxisSpacing) {
    var weightUnitSpace = 0;
    var fixedSpace = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData(item));
        var size = mainAxisSize(item, crossAxisAvailable);
        if (weight === 0.0) {
          fixedSpace = fixedSpace + size | 0;
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          var tmp$ret$1;
          // Inline function 'kotlin.math.max' call
          var tmp1_max = weightUnitSpace;
          var tmp$ret$0;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt = size / weight;
          tmp$ret$0 = roundToInt(tmp0_roundToInt);
          var tmp2_max = tmp$ret$0;
          tmp$ret$1 = Math.max(tmp1_max, tmp2_max);
          weightUnitSpace = tmp$ret$1;
        }
      }
       while (inductionVariable <= last);
    var tmp$ret$2;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt_0 = weightUnitSpace * totalWeight;
    tmp$ret$2 = roundToInt(tmp0_roundToInt_0);
    return (tmp$ret$2 + fixedSpace | 0) + imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
  }
  function intrinsicCrossAxisSize(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
    tmp$ret$0 = Math.min(tmp0_min, mainAxisAvailable);
    var fixedSpace = tmp$ret$0;
    var crossAxisMax = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData(item));
        if (weight === 0.0) {
          var tmp$ret$1;
          // Inline function 'kotlin.math.min' call
          var tmp0_min_0 = mainAxisSize(item, Companion_getInstance_3().get_Infinity_rvchkf_k$());
          var tmp1_min = mainAxisAvailable - fixedSpace | 0;
          tmp$ret$1 = Math.min(tmp0_min_0, tmp1_min);
          var mainAxisSpace = tmp$ret$1;
          fixedSpace = fixedSpace + mainAxisSpace | 0;
          var tmp$ret$2;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = crossAxisMax;
          var tmp3_max = crossAxisSize(item, mainAxisSpace);
          tmp$ret$2 = Math.max(tmp2_max, tmp3_max);
          crossAxisMax = tmp$ret$2;
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (totalWeight === 0.0) {
      tmp = 0;
    } else if (mainAxisAvailable === Companion_getInstance_3().get_Infinity_rvchkf_k$()) {
      tmp = Companion_getInstance_3().get_Infinity_rvchkf_k$();
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp$ret$3;
      // Inline function 'kotlin.math.max' call
      var tmp1_max = mainAxisAvailable - fixedSpace | 0;
      tmp$ret$3 = Math.max(tmp1_max, 0);
      var tmp2_roundToInt = tmp$ret$3 / totalWeight;
      tmp$ret$4 = roundToInt(tmp2_roundToInt);
      tmp = tmp$ret$4;
    }
    var weightUnitSpace = tmp;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = children.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight_0 = get_weight(get_rowColumnParentData(item_0));
        if (weight_0 > 0.0) {
          var tmp$ret$6;
          // Inline function 'kotlin.math.max' call
          var tmp1_max_0 = crossAxisMax;
          var tmp_0;
          if (!(weightUnitSpace === Companion_getInstance_3().get_Infinity_rvchkf_k$())) {
            var tmp$ret$5;
            // Inline function 'kotlin.math.roundToInt' call
            var tmp0_roundToInt = weightUnitSpace * weight_0;
            tmp$ret$5 = roundToInt(tmp0_roundToInt);
            tmp_0 = tmp$ret$5;
          } else {
            tmp_0 = Companion_getInstance_3().get_Infinity_rvchkf_k$();
          }
          var tmp2_max_0 = crossAxisSize(item_0, tmp_0);
          tmp$ret$6 = Math.max(tmp1_max_0, tmp2_max_0);
          crossAxisMax = tmp$ret$6;
        }
      }
       while (inductionVariable_0 <= last_0);
    return crossAxisMax;
  }
  function get_weight(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.weight_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    this.weight_1 = weight;
    this.fill_1 = fill;
    this.crossAxisAlignment_1 = crossAxisAlignment;
  }
  protoOf(RowColumnParentData).set_weight_m01gs8_k$ = function (_set____db54di) {
    this.weight_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(RowColumnParentData).set_fill_4bxxsn_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(RowColumnParentData).set_crossAxisAlignment_lamcle_k$ = function (_set____db54di) {
    this.crossAxisAlignment_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_crossAxisAlignment_ebqiz9_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnParentData).component1_7eebsc_k$ = function () {
    return this.weight_1;
  };
  protoOf(RowColumnParentData).component2_7eebsb_k$ = function () {
    return this.fill_1;
  };
  protoOf(RowColumnParentData).component3_7eebsa_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnParentData).copy_he66y9_k$ = function (weight, fill, crossAxisAlignment) {
    return new RowColumnParentData(weight, fill, crossAxisAlignment);
  };
  protoOf(RowColumnParentData).copy$default_etqtut_k$ = function (weight, fill, crossAxisAlignment, $super) {
    weight = weight === VOID ? this.weight_1 : weight;
    fill = fill === VOID ? this.fill_1 : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? this.crossAxisAlignment_1 : crossAxisAlignment;
    return $super === VOID ? this.copy_he66y9_k$(weight, fill, crossAxisAlignment) : $super.copy_he66y9_k$.call(this, weight, fill, crossAxisAlignment);
  };
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.weight_1 + ', fill=' + this.fill_1 + ', crossAxisAlignment=' + this.crossAxisAlignment_1 + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(result, 31) + (this.fill_1 | 0) | 0;
    result = imul(result, 31) + (this.crossAxisAlignment_1 == null ? 0 : hashCode(this.crossAxisAlignment_1)) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.weight_1, tmp0_other_with_cast.weight_1))
      return false;
    if (!(this.fill_1 === tmp0_other_with_cast.fill_1))
      return false;
    if (!equals(this.crossAxisAlignment_1, tmp0_other_with_cast.crossAxisAlignment_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function OrientationIndependentConstraints_init_$Init$(c, orientation, $this) {
    OrientationIndependentConstraints.call($this, orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minWidth__impl__hi9lfi(c) : _Constraints___get_minHeight__impl__ev4bgx(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxWidth__impl__uuyqc(c) : _Constraints___get_maxHeight__impl__dt3e8z(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minHeight__impl__ev4bgx(c) : _Constraints___get_minWidth__impl__hi9lfi(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxHeight__impl__dt3e8z(c) : _Constraints___get_maxWidth__impl__uuyqc(c));
    return $this;
  }
  function OrientationIndependentConstraints_init_$Create$(c, orientation) {
    return OrientationIndependentConstraints_init_$Init$(c, orientation, objectCreate(protoOf(OrientationIndependentConstraints)));
  }
  function OrientationIndependentConstraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    this.mainAxisMin_1 = mainAxisMin;
    this.mainAxisMax_1 = mainAxisMax;
    this.crossAxisMin_1 = crossAxisMin;
    this.crossAxisMax_1 = crossAxisMax;
  }
  protoOf(OrientationIndependentConstraints).get_mainAxisMin_a6doq9_k$ = function () {
    return this.mainAxisMin_1;
  };
  protoOf(OrientationIndependentConstraints).get_mainAxisMax_a6dowv_k$ = function () {
    return this.mainAxisMax_1;
  };
  protoOf(OrientationIndependentConstraints).get_crossAxisMin_f0o1t2_k$ = function () {
    return this.crossAxisMin_1;
  };
  protoOf(OrientationIndependentConstraints).get_crossAxisMax_f0o1zo_k$ = function () {
    return this.crossAxisMax_1;
  };
  protoOf(OrientationIndependentConstraints).stretchCrossAxis_c8o32c_k$ = function () {
    return new OrientationIndependentConstraints(this.mainAxisMin_1, this.mainAxisMax_1, !(this.crossAxisMax_1 === Companion_getInstance_3().get_Infinity_rvchkf_k$()) ? this.crossAxisMax_1 : this.crossAxisMin_1, this.crossAxisMax_1);
  };
  protoOf(OrientationIndependentConstraints).toBoxConstraints_ru6otq_k$ = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = Constraints_0(this.mainAxisMin_1, this.mainAxisMax_1, this.crossAxisMin_1, this.crossAxisMax_1);
    } else {
      tmp = Constraints_0(this.crossAxisMin_1, this.crossAxisMax_1, this.mainAxisMin_1, this.mainAxisMax_1);
    }
    return tmp;
  };
  protoOf(OrientationIndependentConstraints).maxWidth_g16g1l_k$ = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = this.mainAxisMax_1;
    } else {
      tmp = this.crossAxisMax_1;
    }
    return tmp;
  };
  protoOf(OrientationIndependentConstraints).maxHeight_1ee5ps_k$ = function (orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      tmp = this.crossAxisMax_1;
    } else {
      tmp = this.mainAxisMax_1;
    }
    return tmp;
  };
  protoOf(OrientationIndependentConstraints).component1_7eebsc_k$ = function () {
    return this.mainAxisMin_1;
  };
  protoOf(OrientationIndependentConstraints).component2_7eebsb_k$ = function () {
    return this.mainAxisMax_1;
  };
  protoOf(OrientationIndependentConstraints).component3_7eebsa_k$ = function () {
    return this.crossAxisMin_1;
  };
  protoOf(OrientationIndependentConstraints).component4_7eebs9_k$ = function () {
    return this.crossAxisMax_1;
  };
  protoOf(OrientationIndependentConstraints).copy_2hj87f_k$ = function (mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return new OrientationIndependentConstraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  };
  protoOf(OrientationIndependentConstraints).copy$default_k8js4o_k$ = function (mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax, $super) {
    mainAxisMin = mainAxisMin === VOID ? this.mainAxisMin_1 : mainAxisMin;
    mainAxisMax = mainAxisMax === VOID ? this.mainAxisMax_1 : mainAxisMax;
    crossAxisMin = crossAxisMin === VOID ? this.crossAxisMin_1 : crossAxisMin;
    crossAxisMax = crossAxisMax === VOID ? this.crossAxisMax_1 : crossAxisMax;
    return $super === VOID ? this.copy_2hj87f_k$(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) : $super.copy_2hj87f_k$.call(this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  };
  protoOf(OrientationIndependentConstraints).toString = function () {
    return 'OrientationIndependentConstraints(mainAxisMin=' + this.mainAxisMin_1 + ', mainAxisMax=' + this.mainAxisMax_1 + ', crossAxisMin=' + this.crossAxisMin_1 + ', crossAxisMax=' + this.crossAxisMax_1 + ')';
  };
  protoOf(OrientationIndependentConstraints).hashCode = function () {
    var result = this.mainAxisMin_1;
    result = imul(result, 31) + this.mainAxisMax_1 | 0;
    result = imul(result, 31) + this.crossAxisMin_1 | 0;
    result = imul(result, 31) + this.crossAxisMax_1 | 0;
    return result;
  };
  protoOf(OrientationIndependentConstraints).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrientationIndependentConstraints))
      return false;
    var tmp0_other_with_cast = other instanceof OrientationIndependentConstraints ? other : THROW_CCE();
    if (!(this.mainAxisMin_1 === tmp0_other_with_cast.mainAxisMin_1))
      return false;
    if (!(this.mainAxisMax_1 === tmp0_other_with_cast.mainAxisMax_1))
      return false;
    if (!(this.crossAxisMin_1 === tmp0_other_with_cast.crossAxisMin_1))
      return false;
    if (!(this.crossAxisMax_1 === tmp0_other_with_cast.crossAxisMax_1))
      return false;
    return true;
  };
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isRelative_skgyhr_k$();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fill_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.crossAxisAlignment_1;
  }
  function rowColumnMeasurePolicy$o$measure$lambda($rowColumnMeasureHelper, $measureResult, $this_measure) {
    return function ($this$layout) {
      $rowColumnMeasureHelper.placeHelper_4kmipn_k$($this$layout, $measureResult, 0, $this_measure.get_layoutDirection_7e37v0_k$());
      return Unit_getInstance();
    };
  }
  function rowColumnMeasurePolicy$1($orientation, $arrangement, $arrangementSpacing, $crossAxisSize, $crossAxisAlignment) {
    this.$orientation_1 = $orientation;
    this.$arrangement_1 = $arrangement;
    this.$arrangementSpacing_1 = $arrangementSpacing;
    this.$crossAxisSize_1 = $crossAxisSize;
    this.$crossAxisAlignment_1 = $crossAxisAlignment;
  }
  protoOf(rowColumnMeasurePolicy$1).measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = measurables.get_size_woubt6_k$();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var placeables = tmp$ret$0;
    var rowColumnMeasureHelper = new RowColumnMeasurementHelper(this.$orientation_1, this.$arrangement_1, this.$arrangementSpacing_1, this.$crossAxisSize_1, this.$crossAxisAlignment_1, measurables, placeables);
    var measureResult = rowColumnMeasureHelper.measureWithoutPlacing_lsn42g_k$(_this__u8e3s4, constraints, 0, measurables.get_size_woubt6_k$());
    var layoutWidth;
    var layoutHeight;
    if (this.$orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      layoutWidth = measureResult.get_mainAxisSize_vd88f0_k$();
      layoutHeight = measureResult.get_crossAxisSize_vn6o3d_k$();
    } else {
      layoutWidth = measureResult.get_crossAxisSize_vn6o3d_k$();
      layoutHeight = measureResult.get_mainAxisSize_vd88f0_k$();
    }
    return _this__u8e3s4.layout$default_8ylrvs_k$(layoutWidth, layoutHeight, VOID, rowColumnMeasurePolicy$o$measure$lambda(rowColumnMeasureHelper, measureResult, _this__u8e3s4));
  };
  protoOf(rowColumnMeasurePolicy$1).minIntrinsicWidth_h4fdo9_k$ = function (_this__u8e3s4, measurables, height) {
    return MinIntrinsicWidthMeasureBlock(this.$orientation_1)(measurables, height, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  protoOf(rowColumnMeasurePolicy$1).minIntrinsicHeight_n7gxym_k$ = function (_this__u8e3s4, measurables, width) {
    return MinIntrinsicHeightMeasureBlock(this.$orientation_1)(measurables, width, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  protoOf(rowColumnMeasurePolicy$1).maxIntrinsicWidth_4tn57d_k$ = function (_this__u8e3s4, measurables, height) {
    return MaxIntrinsicWidthMeasureBlock(this.$orientation_1)(measurables, height, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  protoOf(rowColumnMeasurePolicy$1).maxIntrinsicHeight_6rhckk_k$ = function (_this__u8e3s4, measurables, width) {
    return MaxIntrinsicHeightMeasureBlock(this.$orientation_1)(measurables, width, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  function LayoutOrientation_Horizontal_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Horizontal_instance;
  }
  function LayoutOrientation_Vertical_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Vertical_instance;
  }
  function SizeMode_Wrap_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Wrap_instance;
  }
  function SizeMode_Expand_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Expand_instance;
  }
  function _get_rowColumnParentData__3b0p0t($this) {
    return $this.rowColumnParentData_1;
  }
  function mainAxisPositions($this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    $this.arrangement_1(mainAxisLayoutSize, childrenMainAxisSize, measureScope.get_layoutDirection_7e37v0_k$(), measureScope, mainAxisPositions);
    return mainAxisPositions;
  }
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, layoutDirection, beforeCrossAxisAlignmentLine) {
    var tmp0_safe_receiver = parentData;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_crossAxisAlignment_ebqiz9_k$();
    var childCrossAlignment = tmp1_elvis_lhs == null ? $this.crossAxisAlignment_1 : tmp1_elvis_lhs;
    var tmp = crossAxisLayoutSize - $this.crossAxisSize_chrzol_k$(placeable) | 0;
    var tmp_0;
    if ($this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_0 = LayoutDirection_Ltr_getInstance();
    } else {
      tmp_0 = layoutDirection;
    }
    return childCrossAlignment.align_gldapf_k$(tmp, tmp_0, placeable, beforeCrossAxisAlignmentLine);
  }
  function RowColumnMeasurementHelper(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment, measurables, placeables) {
    this.orientation_1 = orientation;
    this.arrangement_1 = arrangement;
    this.arrangementSpacing_1 = arrangementSpacing;
    this.crossAxisSize_1 = crossAxisSize;
    this.crossAxisAlignment_1 = crossAxisAlignment;
    this.measurables_1 = measurables;
    this.placeables_1 = placeables;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.measurables_1.get_size_woubt6_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.rowColumnParentData.<anonymous>' call
      tmp$ret$1 = get_rowColumnParentData(this.measurables_1.get_fkrdnv_k$(tmp_3));
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.rowColumnParentData_1 = tmp_2;
  }
  protoOf(RowColumnMeasurementHelper).get_orientation_9wu93t_k$ = function () {
    return this.orientation_1;
  };
  protoOf(RowColumnMeasurementHelper).get_arrangement_fq5uht_k$ = function () {
    return this.arrangement_1;
  };
  protoOf(RowColumnMeasurementHelper).get_arrangementSpacing_kcgzh9_k$ = function () {
    return this.arrangementSpacing_1;
  };
  protoOf(RowColumnMeasurementHelper).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(RowColumnMeasurementHelper).get_crossAxisAlignment_ebqiz9_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnMeasurementHelper).get_measurables_g5hf9z_k$ = function () {
    return this.measurables_1;
  };
  protoOf(RowColumnMeasurementHelper).get_placeables_ojteit_k$ = function () {
    return this.placeables_1;
  };
  protoOf(RowColumnMeasurementHelper).mainAxisSize_e623hw_k$ = function (_this__u8e3s4) {
    return this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.get_width_j0q4yl_k$() : _this__u8e3s4.get_height_e7t92o_k$();
  };
  protoOf(RowColumnMeasurementHelper).crossAxisSize_chrzol_k$ = function (_this__u8e3s4) {
    return this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.get_height_e7t92o_k$() : _this__u8e3s4.get_width_j0q4yl_k$();
  };
  protoOf(RowColumnMeasurementHelper).measureWithoutPlacing_lsn42g_k$ = function (measureScope, constraints, startIndex, endIndex) {
    var constraints_0 = OrientationIndependentConstraints_init_$Create$(constraints, this.orientation_1);
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
    tmp$ret$0 = measureScope.roundToPx_hl1u8z_k$(this.arrangementSpacing_1);
    tmp$ret$1 = tmp$ret$0;
    var arrangementSpacingPx = tmp$ret$1;
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = this.measurables_1.get_fkrdnv_k$(i);
        var parentData = this.rowColumnParentData_1[i];
        var weight = get_weight(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var mainAxisMax = constraints_0.get_mainAxisMax_a6dowv_k$();
          var tmp1_elvis_lhs = this.placeables_1[i];
          var tmp;
          if (tmp1_elvis_lhs == null) {
            var tmp_0;
            if (mainAxisMax === Companion_getInstance_3().get_Infinity_rvchkf_k$()) {
              tmp_0 = Companion_getInstance_3().get_Infinity_rvchkf_k$();
            } else {
              tmp_0 = mainAxisMax - fixedSpace | 0;
            }
            tmp = child.measure_ikak0q_k$(constraints_0.copy$default_k8js4o_k$(0, tmp_0, 0).toBoxConstraints_ru6otq_k$(this.orientation_1));
          } else {
            tmp = tmp1_elvis_lhs;
          }
          var placeable = tmp;
          var tmp$ret$2;
          // Inline function 'kotlin.math.min' call
          var tmp0_min = (mainAxisMax - fixedSpace | 0) - this.mainAxisSize_e623hw_k$(placeable) | 0;
          tmp$ret$2 = Math.min(arrangementSpacingPx, tmp0_min);
          spaceAfterLastNoWeight = tmp$ret$2;
          fixedSpace = fixedSpace + (this.mainAxisSize_e623hw_k$(placeable) + spaceAfterLastNoWeight | 0) | 0;
          var tmp$ret$3;
          // Inline function 'kotlin.math.max' call
          var tmp1_max = crossAxisSpace;
          var tmp2_max = this.crossAxisSize_chrzol_k$(placeable);
          tmp$ret$3 = Math.max(tmp1_max, tmp2_max);
          crossAxisSpace = tmp$ret$3;
          anyAlignBy = anyAlignBy ? true : get_isRelative(parentData);
          this.placeables_1[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_1;
      if (totalWeight > 0.0 ? !(constraints_0.get_mainAxisMax_a6dowv_k$() === Companion_getInstance_3().get_Infinity_rvchkf_k$()) : false) {
        tmp_1 = constraints_0.get_mainAxisMax_a6dowv_k$();
      } else {
        tmp_1 = constraints_0.get_mainAxisMin_a6doq9_k$();
      }
      var targetSpace = tmp_1;
      var remainingToTarget = (targetSpace - fixedSpace | 0) - imul(arrangementSpacingPx, weightChildrenCount - 1 | 0) | 0;
      var weightUnitSpace = totalWeight > 0 ? remainingToTarget / totalWeight : 0.0;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.sumOf' call
      var tmp3_sumOf = until(startIndex, endIndex);
      var sum = 0;
      var inductionVariable_0 = tmp3_sumOf.get_first_irdx8n_k$();
      var last = tmp3_sumOf.get_last_wopotb_k$();
      if (inductionVariable_0 <= last)
        do {
          var element = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_2 = sum;
          var tmp$ret$5;
          // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
          var tmp$ret$4;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt = weightUnitSpace * get_weight(this.rowColumnParentData_1[element]);
          tmp$ret$4 = roundToInt(tmp0_roundToInt);
          tmp$ret$5 = tmp$ret$4;
          sum = tmp_2 + tmp$ret$5 | 0;
        }
         while (!(element === last));
      tmp$ret$6 = sum;
      var remainder = remainingToTarget - tmp$ret$6 | 0;
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (this.placeables_1[i_0] == null) {
            var child_0 = this.measurables_1.get_fkrdnv_k$(i_0);
            var parentData_0 = this.rowColumnParentData_1[i_0];
            var weight_0 = get_weight(parentData_0);
            // Inline function 'kotlin.check' call
            var tmp4_check = weight_0 > 0;
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp4_check) {
              var tmp$ret$7;
              // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
              tmp$ret$7 = 'All weights <= 0 should have placeables';
              var message = tmp$ret$7;
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var remainderUnit = get_sign(remainder);
            remainder = remainder - remainderUnit | 0;
            var tmp$ret$9;
            // Inline function 'kotlin.math.max' call
            var tmp$ret$8;
            // Inline function 'kotlin.math.roundToInt' call
            var tmp5_roundToInt = weightUnitSpace * weight_0;
            tmp$ret$8 = roundToInt(tmp5_roundToInt);
            var tmp6_max = tmp$ret$8 + remainderUnit | 0;
            tmp$ret$9 = Math.max(0, tmp6_max);
            var childMainAxisSize = tmp$ret$9;
            var tmp_3;
            if (get_fill(parentData_0) ? !(childMainAxisSize === Companion_getInstance_3().get_Infinity_rvchkf_k$()) : false) {
              tmp_3 = childMainAxisSize;
            } else {
              tmp_3 = 0;
            }
            var placeable_0 = child_0.measure_ikak0q_k$((new OrientationIndependentConstraints(tmp_3, childMainAxisSize, 0, constraints_0.get_crossAxisMax_f0o1zo_k$())).toBoxConstraints_ru6otq_k$(this.orientation_1));
            weightedSpace = weightedSpace + this.mainAxisSize_e623hw_k$(placeable_0) | 0;
            var tmp$ret$10;
            // Inline function 'kotlin.math.max' call
            var tmp7_max = crossAxisSpace;
            var tmp8_max = this.crossAxisSize_chrzol_k$(placeable_0);
            tmp$ret$10 = Math.max(tmp7_max, tmp8_max);
            crossAxisSpace = tmp$ret$10;
            anyAlignBy = anyAlignBy ? true : get_isRelative(parentData_0);
            this.placeables_1[i_0] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      weightedSpace = coerceAtMost(weightedSpace + imul(arrangementSpacingPx, weightChildrenCount - 1 | 0) | 0, constraints_0.get_mainAxisMax_a6dowv_k$() - fixedSpace | 0);
    }
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = ensureNotNull(this.placeables_1[i_1]);
          var parentData_1 = this.rowColumnParentData_1[i_1];
          var tmp4_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.calculateAlignmentLinePosition_92xdb9_k$(placeable_1);
          if (!(alignmentLinePosition == null)) {
            var tmp$ret$13;
            // Inline function 'kotlin.math.max' call
            var tmp9_max = beforeCrossAxisAlignmentLine;
            var tmp$ret$12;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$11;
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            tmp$ret$11 = !(alignmentLinePosition === Companion_getInstance_5().get_Unspecified_el0w4u_k$()) ? alignmentLinePosition : 0;
            tmp$ret$12 = tmp$ret$11;
            var tmp10_max = tmp$ret$12;
            tmp$ret$13 = Math.max(tmp9_max, tmp10_max);
            beforeCrossAxisAlignmentLine = tmp$ret$13;
            var tmp$ret$16;
            // Inline function 'kotlin.math.max' call
            var tmp11_max = afterCrossAxisAlignmentLine;
            var tmp_4 = this.crossAxisSize_chrzol_k$(placeable_1);
            var tmp$ret$15;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$14;
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var tmp_5;
            if (!(alignmentLinePosition === Companion_getInstance_5().get_Unspecified_el0w4u_k$())) {
              tmp_5 = alignmentLinePosition;
            } else {
              tmp_5 = this.crossAxisSize_chrzol_k$(placeable_1);
            }
            tmp$ret$14 = tmp_5;
            tmp$ret$15 = tmp$ret$14;
            var tmp12_max = tmp_4 - tmp$ret$15 | 0;
            tmp$ret$16 = Math.max(tmp11_max, tmp12_max);
            afterCrossAxisAlignmentLine = tmp$ret$16;
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    var tmp$ret$17;
    // Inline function 'kotlin.math.max' call
    var tmp13_max = fixedSpace + weightedSpace | 0;
    var tmp14_max = constraints_0.get_mainAxisMin_a6doq9_k$();
    tmp$ret$17 = Math.max(tmp13_max, tmp14_max);
    var mainAxisLayoutSize = tmp$ret$17;
    var tmp_6;
    if (!(constraints_0.get_crossAxisMax_f0o1zo_k$() === Companion_getInstance_3().get_Infinity_rvchkf_k$()) ? this.crossAxisSize_1.equals(SizeMode_Expand_getInstance()) : false) {
      tmp_6 = constraints_0.get_crossAxisMax_f0o1zo_k$();
    } else {
      var tmp$ret$19;
      // Inline function 'kotlin.math.max' call
      var tmp17_max = crossAxisSpace;
      var tmp$ret$18;
      // Inline function 'kotlin.math.max' call
      var tmp15_max = constraints_0.get_crossAxisMin_f0o1t2_k$();
      var tmp16_max = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
      tmp$ret$18 = Math.max(tmp15_max, tmp16_max);
      var tmp18_max = tmp$ret$18;
      tmp$ret$19 = Math.max(tmp17_max, tmp18_max);
      tmp_6 = tmp$ret$19;
    }
    var crossAxisLayoutSize = tmp_6;
    var tmp_7 = 0;
    var tmp_8 = subSize;
    var tmp_9 = new Int32Array(tmp_8);
    while (tmp_7 < tmp_8) {
      var tmp_10 = tmp_7;
      var tmp$ret$20;
      // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
      tmp$ret$20 = 0;
      tmp_9[tmp_10] = tmp$ret$20;
      tmp_7 = tmp_7 + 1 | 0;
    }
    var mainAxisPositions_0 = tmp_9;
    var tmp_11 = 0;
    var tmp_12 = subSize;
    var tmp_13 = new Int32Array(tmp_12);
    while (tmp_11 < tmp_12) {
      var tmp_14 = tmp_11;
      var tmp$ret$21;
      // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
      tmp$ret$21 = this.mainAxisSize_e623hw_k$(ensureNotNull(this.placeables_1[tmp_14 + startIndex | 0]));
      tmp_13[tmp_14] = tmp$ret$21;
      tmp_11 = tmp_11 + 1 | 0;
    }
    var childrenMainAxisSize = tmp_13;
    var tmp5_beforeCrossAxisAlignmentLine = beforeCrossAxisAlignmentLine;
    var tmp6_mainAxisPositions = mainAxisPositions(this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions_0, measureScope);
    return new RowColumnMeasureHelperResult(crossAxisLayoutSize, mainAxisLayoutSize, startIndex, endIndex, tmp5_beforeCrossAxisAlignmentLine, tmp6_mainAxisPositions);
  };
  protoOf(RowColumnMeasurementHelper).placeHelper_4kmipn_k$ = function (placeableScope, measureResult, crossAxisOffset, layoutDirection) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = measureResult.startIndex_1;
    var last = measureResult.endIndex_1;
    var tmp;
    if (inductionVariable < last) {
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var placeable = this.placeables_1[i];
        ensureNotNull(placeable);
        var mainAxisPositions = measureResult.mainAxisPositions_1;
        var tmp_0 = this.measurables_1.get_fkrdnv_k$(i).get_parentData_o87vnn_k$();
        var crossAxisPosition = getCrossAxisPosition(this, placeable, tmp_0 instanceof RowColumnParentData ? tmp_0 : null, measureResult.crossAxisSize_1, layoutDirection, measureResult.beforeCrossAxisAlignmentLine_1) + crossAxisOffset | 0;
        if (this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
          placeableScope.place$default_eachz5_k$(placeable, mainAxisPositions[i - measureResult.startIndex_1 | 0], crossAxisPosition);
        } else {
          placeableScope.place$default_eachz5_k$(placeable, crossAxisPosition, mainAxisPositions[i - measureResult.startIndex_1 | 0]);
        }
      }
       while (inductionVariable < last);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
  };
  function RowColumnMeasureHelperResult(crossAxisSize, mainAxisSize, startIndex, endIndex, beforeCrossAxisAlignmentLine, mainAxisPositions) {
    this.crossAxisSize_1 = crossAxisSize;
    this.mainAxisSize_1 = mainAxisSize;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
    this.beforeCrossAxisAlignmentLine_1 = beforeCrossAxisAlignmentLine;
    this.mainAxisPositions_1 = mainAxisPositions;
  }
  protoOf(RowColumnMeasureHelperResult).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_mainAxisSize_vd88f0_k$ = function () {
    return this.mainAxisSize_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_endIndex_3lslfk_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_beforeCrossAxisAlignmentLine_gqpg9q_k$ = function () {
    return this.beforeCrossAxisAlignmentLine_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_mainAxisPositions_av3ffr_k$ = function () {
    return this.mainAxisPositions_1;
  };
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  function get_FillWholeMaxHeight() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxHeight;
  }
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  function get_WrapContentWidthCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthCenter;
  }
  var WrapContentWidthCenter;
  function get_WrapContentWidthStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthStart;
  }
  var WrapContentWidthStart;
  function get_WrapContentHeightCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function get_WrapContentHeightTop() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  function get_WrapContentSizeCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeCenter;
  }
  var WrapContentSizeCenter;
  function get_WrapContentSizeTopStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeTopStart;
  }
  var WrapContentSizeTopStart;
  function _get_direction__hwzary($this) {
    return $this.direction_1;
  }
  function _get_fraction__t0yzux($this) {
    return $this.fraction_1;
  }
  function FillModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_mxzlyj_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function FillModifier(direction, fraction, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
  }
  protoOf(FillModifier).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) ? !this.direction_1.equals(Direction_Vertical_getInstance()) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.fraction_1;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var width = coerceIn(tmp$ret$0, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) ? !this.direction_1.equals(Direction_Horizontal_getInstance()) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.fraction_1;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var height = coerceIn(tmp$ret$1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.measure_ikak0q_k$(Constraints_0(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_8ylrvs_k$(tmp, tmp_0, VOID, FillModifier$measure$lambda(placeable));
  };
  protoOf(FillModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FillModifier) {
      tmp_0 = this.direction_1.equals(other.direction_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.fraction_1 === other.fraction_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FillModifier).hashCode = function () {
    return imul(this.direction_1.hashCode(), 31) + getNumberHashCode(this.fraction_1) | 0;
  };
  function createFillWidthModifier(fraction) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Horizontal_getInstance();
    return new FillModifier(tmp, fraction, createFillWidthModifier$lambda(fraction));
  }
  function createFillHeightModifier(fraction) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Vertical_getInstance();
    return new FillModifier(tmp, fraction, createFillHeightModifier$lambda(fraction));
  }
  function createFillSizeModifier(fraction) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Both_getInstance();
    return new FillModifier(tmp, fraction, createFillSizeModifier$lambda(fraction));
  }
  function _get_direction__hwzary_0($this) {
    return $this.direction_1;
  }
  function _get_unbounded__vdc64z($this) {
    return $this.unbounded_1;
  }
  function _get_alignmentCallback__m7n7k9($this) {
    return $this.alignmentCallback_1;
  }
  function _get_align__jw21zo($this) {
    return $this.align_1;
  }
  function WrapContentModifier$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.alignmentCallback_1(new IntSize_0(IntSize($wrapperWidth - $placeable.get_width_j0q4yl_k$() | 0, $wrapperHeight - $placeable.get_height_e7t92o_k$() | 0)), $this_measure.get_layoutDirection_7e37v0_k$()).packedValue_1;
      $this$layout.place$default_b921p1_k$($placeable, position);
      return Unit_getInstance();
    };
  }
  function WrapContentModifier(direction, unbounded, alignmentCallback, align, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
    this.align_1 = align;
  }
  protoOf(WrapContentModifier).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.direction_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.direction_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.direction_1.equals(Direction_Vertical_getInstance()) ? this.unbounded_1 : false) {
      tmp = Companion_getInstance_3().get_Infinity_rvchkf_k$();
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.direction_1.equals(Direction_Horizontal_getInstance()) ? this.unbounded_1 : false) {
      tmp_0 = Companion_getInstance_3().get_Infinity_rvchkf_k$();
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.get_width_j0q4yl_k$(), _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.get_height_e7t92o_k$(), _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.layout$default_8ylrvs_k$(wrapperWidth, wrapperHeight, VOID, WrapContentModifier$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  protoOf(WrapContentModifier).equals = function (other) {
    if (!(other instanceof WrapContentModifier))
      return false;
    return (this.direction_1.equals(other.direction_1) ? this.unbounded_1 === other.unbounded_1 : false) ? equals(this.align_1, other.align_1) : false;
  };
  protoOf(WrapContentModifier).hashCode = function () {
    return imul(imul(this.direction_1.hashCode(), 31) + (this.unbounded_1 | 0) | 0, 31) + hashCode(this.align_1) | 0;
  };
  function createWrapContentWidthModifier(align, unbounded) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Horizontal_getInstance();
    var tmp_0 = createWrapContentWidthModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentWidthModifier$lambda_0(align, unbounded));
  }
  function createWrapContentHeightModifier(align, unbounded) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Vertical_getInstance();
    var tmp_0 = createWrapContentHeightModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentHeightModifier$lambda_0(align, unbounded));
  }
  function createWrapContentSizeModifier(align, unbounded) {
    _init_properties_Size_kt__jcru8v();
    var tmp = Direction_Both_getInstance();
    var tmp_0 = createWrapContentSizeModifier$lambda(align);
    return new WrapContentModifier(tmp, unbounded, tmp_0, align, createWrapContentSizeModifier$lambda_0(align, unbounded));
  }
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  function values_1() {
    return [Direction_Vertical_getInstance(), Direction_Horizontal_getInstance(), Direction_Both_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Vertical':
        return Direction_Vertical_getInstance();
      case 'Horizontal':
        return Direction_Horizontal_getInstance();
      case 'Both':
        return Direction_Both_getInstance();
      default:
        Direction_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function width(_this__u8e3s4, width) {
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeModifier(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function fillMaxHeight(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_5qw5wu_k$(fraction === 1.0 ? get_FillWholeMaxHeight() : createFillHeightModifier(fraction));
  }
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectorInfo = tmp$ret$0;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeModifier(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : min;
    max = max === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : max;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeModifier(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function widthIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : min;
    max = max === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : max;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = widthIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeModifier(min, VOID, max, VOID, true, tmp$ret$0));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minHeight;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = defaultMinSize$lambda(minWidth, minHeight);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new UnspecifiedConstraintsModifier(minWidth, minHeight, tmp$ret$0));
  }
  function _get_minWidth__tgi6yf($this) {
    return $this.minWidth_1;
  }
  function _get_minHeight__j32lk8($this) {
    return $this.minHeight_1;
  }
  function _get_maxWidth__golao9($this) {
    return $this.maxWidth_1;
  }
  function _get_maxHeight__b29xja($this) {
    return $this.maxHeight_1;
  }
  function _get_enforceIncoming__5fpgix($this) {
    return $this.enforceIncoming_1;
  }
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.maxWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
      var tmp_0 = new Dp($this.maxWidth_1);
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
      tmp = _this__u8e3s4.roundToPx_hl1u8z_k$(coerceAtLeast(tmp_0, new Dp(tmp$ret$0)).value_1);
    } else {
      tmp = Companion_getInstance_3().get_Infinity_rvchkf_k$();
    }
    var maxWidth = tmp;
    var tmp_1;
    if (!equals($this.maxHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
      var tmp_2 = new Dp($this.maxHeight_1);
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = _this__u8e3s4.roundToPx_hl1u8z_k$(coerceAtLeast(tmp_2, new Dp(tmp$ret$1)).value_1);
    } else {
      tmp_1 = Companion_getInstance_3().get_Infinity_rvchkf_k$();
    }
    var maxHeight = tmp_1;
    var tmp_3;
    if (!equals($this.minWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$($this.minWidth_1), maxWidth), 0);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.foundation.layout.SizeModifier.<get-targetConstraints>.<anonymous>' call
      tmp$ret$2 = !(tmp0_let === Companion_getInstance_3().get_Infinity_rvchkf_k$()) ? tmp0_let : 0;
      tmp$ret$3 = tmp$ret$2;
      tmp_3 = tmp$ret$3;
    } else {
      tmp_3 = 0;
    }
    var minWidth = tmp_3;
    var tmp_4;
    if (!equals($this.minHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp1_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$($this.minHeight_1), maxHeight), 0);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.foundation.layout.SizeModifier.<get-targetConstraints>.<anonymous>' call
      tmp$ret$4 = !(tmp1_let === Companion_getInstance_3().get_Infinity_rvchkf_k$()) ? tmp1_let : 0;
      tmp$ret$5 = tmp$ret$4;
      tmp_4 = tmp$ret$5;
    } else {
      tmp_4 = 0;
    }
    var minHeight = tmp_4;
    return Constraints_0(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_mxzlyj_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function SizeModifier(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : maxHeight;
    InspectorValueInfo.call(this, inspectorInfo);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
  }
  protoOf(SizeModifier).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.layout.SizeModifier.measure.<anonymous>' call
    var tmp;
    if (this.enforceIncoming_1) {
      tmp = constrain(constraints, tmp0_let);
    } else {
      var tmp_0;
      if (!equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(tmp0_let);
      } else {
        tmp_0 = coerceAtMost(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(tmp0_let));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.maxWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(tmp0_let);
      } else {
        tmp_1 = coerceAtLeast_0(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(tmp0_let));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(tmp0_let);
      } else {
        tmp_2 = coerceAtMost(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.maxHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let);
      } else {
        tmp_3 = coerceAtLeast_0(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(tmp0_let));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints_0(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var wrappedConstraints = tmp$ret$1;
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var tmp_4 = placeable.get_width_j0q4yl_k$();
    var tmp_5 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_8ylrvs_k$(tmp_4, tmp_5, VOID, SizeModifier$measure$lambda(placeable));
  };
  protoOf(SizeModifier).minIntrinsicWidth_72od57_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.minIntrinsicWidth_3wv0r6_k$(height));
    }
    return tmp;
  };
  protoOf(SizeModifier).minIntrinsicHeight_zr6pa_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.minIntrinsicHeight_7ydhpj_k$(width));
    }
    return tmp;
  };
  protoOf(SizeModifier).maxIntrinsicWidth_o2xntp_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.maxIntrinsicWidth_g1vwkc_k$(height));
    }
    return tmp;
  };
  protoOf(SizeModifier).maxIntrinsicHeight_t0gmkg_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.maxIntrinsicHeight_cegb5z_k$(width));
    }
    return tmp;
  };
  protoOf(SizeModifier).equals = function (other) {
    if (!(other instanceof SizeModifier))
      return false;
    return (((equals(this.minWidth_1, other.minWidth_1) ? equals(this.minHeight_1, other.minHeight_1) : false) ? equals(this.maxWidth_1, other.maxWidth_1) : false) ? equals(this.maxHeight_1, other.maxHeight_1) : false) ? this.enforceIncoming_1 === other.enforceIncoming_1 : false;
  };
  protoOf(SizeModifier).hashCode = function () {
    return imul(imul(imul(imul(Dp__hashCode_impl_sxkrra(this.minWidth_1), 31) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.maxWidth_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.maxHeight_1) | 0, 31);
  };
  function UnspecifiedConstraintsModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_mxzlyj_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function UnspecifiedConstraintsModifier(minWidth, minHeight, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minHeight;
    InspectorValueInfo.call(this, inspectorInfo);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsModifier).get_minWidth_iptkt4_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(UnspecifiedConstraintsModifier).get_minHeight_6vlbo5_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsModifier).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 : false) {
      tmp = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$(this.minWidth_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false) {
      tmp_2 = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$(this.minHeight_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints_0(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var tmp_3 = placeable.get_width_j0q4yl_k$();
    var tmp_4 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_8ylrvs_k$(tmp_3, tmp_4, VOID, UnspecifiedConstraintsModifier$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsModifier).minIntrinsicWidth_72od57_k$ = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.minIntrinsicWidth_3wv0r6_k$(height), !equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minWidth_1) : 0);
  };
  protoOf(UnspecifiedConstraintsModifier).maxIntrinsicWidth_o2xntp_k$ = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.maxIntrinsicWidth_g1vwkc_k$(height), !equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minWidth_1) : 0);
  };
  protoOf(UnspecifiedConstraintsModifier).minIntrinsicHeight_zr6pa_k$ = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.minIntrinsicHeight_7ydhpj_k$(width), !equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minHeight_1) : 0);
  };
  protoOf(UnspecifiedConstraintsModifier).maxIntrinsicHeight_t0gmkg_k$ = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.maxIntrinsicHeight_cegb5z_k$(width), !equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minHeight_1) : 0);
  };
  protoOf(UnspecifiedConstraintsModifier).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsModifier))
      return false;
    return equals(this.minWidth_1, other.minWidth_1) ? equals(this.minHeight_1, other.minHeight_1) : false;
  };
  protoOf(UnspecifiedConstraintsModifier).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.minWidth_1), 31) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0;
  };
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_5qw5wu_k$(fraction === 1.0 ? get_FillWholeMaxSize() : createFillSizeModifier(fraction));
  }
  function createFillWidthModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_1v3553_k$('fillMaxWidth');
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createFillHeightModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_1v3553_k$('fillMaxHeight');
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createFillSizeModifier$lambda($fraction) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_1v3553_k$('fillMaxSize');
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('fraction', $fraction);
      return Unit_getInstance();
    };
  }
  function createWrapContentWidthModifier$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.align_a5f08y_k$(0, _IntSize___get_width__impl__d9yl4o(size.packedValue_1), layoutDirection), 0));
    };
  }
  function createWrapContentWidthModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_1v3553_k$('wrapContentWidth');
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('align', $align);
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function createWrapContentHeightModifier$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.align_1fj06d_k$(0, _IntSize___get_height__impl__prv63b(size.packedValue_1))));
    };
  }
  function createWrapContentHeightModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_1v3553_k$('wrapContentHeight');
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('align', $align);
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function createWrapContentSizeModifier$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.align_f85h4l_k$(Companion_getInstance_6().get_Zero_4ip44w_k$(), size.packedValue_1, layoutDirection));
    };
  }
  function createWrapContentSizeModifier$lambda_0($align, $unbounded) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_1v3553_k$('wrapContentSize');
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('align', $align);
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('unbounded', $unbounded);
      return Unit_getInstance();
    };
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('width');
      $this$null.set_value_rj6yh0_k$(new Dp($width));
      return Unit_getInstance();
    };
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('size');
      $this$null.set_value_rj6yh0_k$(new Dp($size));
      return Unit_getInstance();
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('heightIn');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('min', new Dp($min));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function widthIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('widthIn');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('min', new Dp($min));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function defaultMinSize$lambda($minWidth, $minHeight) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('defaultMinSize');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('minWidth', new Dp($minWidth));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('minHeight', new Dp($minHeight));
      return Unit_getInstance();
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (properties_initialized_Size_kt_x7rk2r) {
    } else {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = createFillWidthModifier(1.0);
      FillWholeMaxHeight = createFillHeightModifier(1.0);
      FillWholeMaxSize = createFillSizeModifier(1.0);
      WrapContentWidthCenter = createWrapContentWidthModifier(Companion_getInstance().get_CenterHorizontally_97ab0v_k$(), false);
      WrapContentWidthStart = createWrapContentWidthModifier(Companion_getInstance().get_Start_ih4i6x_k$(), false);
      WrapContentHeightCenter = createWrapContentHeightModifier(Companion_getInstance().get_CenterVertically_dmkbbz_k$(), false);
      WrapContentHeightTop = createWrapContentHeightModifier(Companion_getInstance().get_Top_18jj1w_k$(), false);
      WrapContentSizeCenter = createWrapContentSizeModifier(Companion_getInstance().get_Center_3arb0i_k$(), false);
      WrapContentSizeTopStart = createWrapContentSizeModifier(Companion_getInstance().get_TopStart_o4x792_k$(), false);
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function WindowInsets() {
  }
  function WindowInsets_0(left, top, right, bottom) {
    left = left === VOID ? 0 : left;
    top = top === VOID ? 0 : top;
    right = right === VOID ? 0 : right;
    bottom = bottom === VOID ? 0 : bottom;
    return new FixedIntInsets(left, top, right, bottom);
  }
  function _get_leftVal__7g7e4p($this) {
    return $this.leftVal_1;
  }
  function _get_topVal__iy0agv($this) {
    return $this.topVal_1;
  }
  function _get_rightVal__1fxr7e($this) {
    return $this.rightVal_1;
  }
  function _get_bottomVal__lks4yj($this) {
    return $this.bottomVal_1;
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.leftVal_1 = leftVal;
    this.topVal_1 = topVal;
    this.rightVal_1 = rightVal;
    this.bottomVal_1 = bottomVal;
  }
  protoOf(FixedIntInsets).getLeft_1vhdo6_k$ = function (density, layoutDirection) {
    return this.leftVal_1;
  };
  protoOf(FixedIntInsets).getTop_6mwa89_k$ = function (density) {
    return this.topVal_1;
  };
  protoOf(FixedIntInsets).getRight_tjbxo3_k$ = function (density, layoutDirection) {
    return this.rightVal_1;
  };
  protoOf(FixedIntInsets).getBottom_smmq2d_k$ = function (density) {
    return this.bottomVal_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.leftVal_1 + ', top=' + this.topVal_1 + ', right=' + this.rightVal_1 + ', bottom=' + this.bottomVal_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return ((this.leftVal_1 === other.leftVal_1 ? this.topVal_1 === other.topVal_1 : false) ? this.rightVal_1 === other.rightVal_1 : false) ? this.bottomVal_1 === other.bottomVal_1 : false;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.leftVal_1;
    result = imul(31, result) + this.topVal_1 | 0;
    result = imul(31, result) + this.rightVal_1 | 0;
    result = imul(31, result) + this.bottomVal_1 | 0;
    return result;
  };
  function get_ModifierLocalConsumedWindowInsets() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
  function ModifierLocalConsumedWindowInsets$lambda() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return WindowInsets_0(0, 0, 0, 0);
  }
  var properties_initialized_WindowInsetsPadding_kt_k80ef9;
  function _init_properties_WindowInsetsPadding_kt__2qyozr() {
    if (properties_initialized_WindowInsetsPadding_kt_k80ef9) {
    } else {
      properties_initialized_WindowInsetsPadding_kt_k80ef9 = true;
      ModifierLocalConsumedWindowInsets = modifierLocalOf(ModifierLocalConsumedWindowInsets$lambda);
    }
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
    return '@androidx.compose.foundation.layout.internal.NoOp()';
  };
  //region block: post-declaration
  protoOf(Arrangement$Absolute$Left$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Absolute$Center$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Absolute$Right$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceBetween$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceEvenly$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceAround$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Start$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$End$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Top$1).get_spacing_kuwe3v_k$ = get_spacing_0;
  protoOf(Arrangement$Bottom$1).get_spacing_kuwe3v_k$ = get_spacing_0;
  protoOf(BoxChildData).foldIn_u08fre_k$ = foldIn;
  protoOf(BoxChildData).foldOut_4ty55p_k$ = foldOut;
  protoOf(BoxChildData).any_hrontp_k$ = any;
  protoOf(BoxChildData).all_ctzlrs_k$ = all;
  protoOf(BoxChildData).then_5qw5wu_k$ = then;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  protoOf(PaddingModifier).minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  protoOf(PaddingModifier).minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  protoOf(PaddingModifier).maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  protoOf(PaddingModifier).maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  protoOf(PaddingModifier).foldIn_u08fre_k$ = foldIn;
  protoOf(PaddingModifier).foldOut_4ty55p_k$ = foldOut;
  protoOf(PaddingModifier).any_hrontp_k$ = any;
  protoOf(PaddingModifier).all_ctzlrs_k$ = all;
  protoOf(PaddingModifier).then_5qw5wu_k$ = then;
  protoOf(FillModifier).minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  protoOf(FillModifier).minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  protoOf(FillModifier).maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  protoOf(FillModifier).maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  protoOf(FillModifier).foldIn_u08fre_k$ = foldIn;
  protoOf(FillModifier).foldOut_4ty55p_k$ = foldOut;
  protoOf(FillModifier).any_hrontp_k$ = any;
  protoOf(FillModifier).all_ctzlrs_k$ = all;
  protoOf(FillModifier).then_5qw5wu_k$ = then;
  protoOf(WrapContentModifier).minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  protoOf(WrapContentModifier).minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  protoOf(WrapContentModifier).maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  protoOf(WrapContentModifier).maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  protoOf(WrapContentModifier).foldIn_u08fre_k$ = foldIn;
  protoOf(WrapContentModifier).foldOut_4ty55p_k$ = foldOut;
  protoOf(WrapContentModifier).any_hrontp_k$ = any;
  protoOf(WrapContentModifier).all_ctzlrs_k$ = all;
  protoOf(WrapContentModifier).then_5qw5wu_k$ = then;
  protoOf(SizeModifier).foldIn_u08fre_k$ = foldIn;
  protoOf(SizeModifier).foldOut_4ty55p_k$ = foldOut;
  protoOf(SizeModifier).any_hrontp_k$ = any;
  protoOf(SizeModifier).all_ctzlrs_k$ = all;
  protoOf(SizeModifier).then_5qw5wu_k$ = then;
  protoOf(UnspecifiedConstraintsModifier).foldIn_u08fre_k$ = foldIn;
  protoOf(UnspecifiedConstraintsModifier).foldOut_4ty55p_k$ = foldOut;
  protoOf(UnspecifiedConstraintsModifier).any_hrontp_k$ = any;
  protoOf(UnspecifiedConstraintsModifier).all_ctzlrs_k$ = all;
  protoOf(UnspecifiedConstraintsModifier).then_5qw5wu_k$ = then;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PaddingValues_2;
  _.$_$.b = PaddingValues_0;
  _.$_$.c = PaddingValues_1;
  _.$_$.d = defaultMinSize;
  _.$_$.e = fillMaxHeight;
  _.$_$.f = fillMaxSize;
  _.$_$.g = heightIn;
  _.$_$.h = padding;
  _.$_$.i = rememberBoxMeasurePolicy$composable;
  _.$_$.j = size;
  _.$_$.k = widthIn;
  _.$_$.l = width;
  _.$_$.m = BoxScopeInstance_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-foundation-layout.js.map
