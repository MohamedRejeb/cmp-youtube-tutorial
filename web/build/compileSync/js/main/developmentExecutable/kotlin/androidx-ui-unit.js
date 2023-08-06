(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-geometry.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-unit'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-unit'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-unit'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-ui-unit'.");
    }
    root['androidx-ui-unit'] = factory(typeof this['androidx-ui-unit'] === 'undefined' ? {} : this['androidx-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-geometry']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Long = kotlin_kotlin.$_$.sb;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var toString = kotlin_kotlin.$_$.h9;
  var VOID = kotlin_kotlin.$_$.ed;
  var protoOf = kotlin_kotlin.$_$.c9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var toLong = kotlin_kotlin.$_$.f9;
  var objectMeta = kotlin_kotlin.$_$.b9;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var classMeta = kotlin_kotlin.$_$.z7;
  var coerceAtLeast = kotlin_kotlin.$_$.r9;
  var coerceIn = kotlin_kotlin.$_$.w9;
  var roundToInt = kotlin_kotlin.$_$.m9;
  var isInfinite = kotlin_kotlin.$_$.lc;
  var equals = kotlin_kotlin.$_$.d8;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var interfaceMeta = kotlin_kotlin.$_$.n8;
  var getNumberHashCode = kotlin_kotlin.$_$.h8;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.k2;
  var floatFromBits = kotlin_kotlin.$_$.f8;
  var compareTo = kotlin_kotlin.$_$.a8;
  var isNaN_0 = kotlin_kotlin.$_$.mc;
  var Comparable = kotlin_kotlin.$_$.mb;
  var objectCreate = kotlin_kotlin.$_$.a9;
  var toBits = kotlin_kotlin.$_$.xc;
  var Annotation = kotlin_kotlin.$_$.ib;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var abs = kotlin_kotlin.$_$.j9;
  var THROW_ISE = kotlin_kotlin.$_$.zb;
  var Enum = kotlin_kotlin.$_$.ob;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Constraints, 'Constraints', classMeta);
  function toPx(_this__u8e3s4) {
    return _Dp___get_value__impl__geb1vb(_this__u8e3s4) * this.get_density_qy0267_k$();
  }
  function roundToPx(_this__u8e3s4) {
    var px = this.toPx_u0ojv5_k$(_this__u8e3s4);
    var tmp;
    if (isInfinite(px)) {
      tmp = Companion_getInstance_0().get_Infinity_rvchkf_k$();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      tmp$ret$0 = roundToInt(px);
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function toSp(_this__u8e3s4) {
    return get_sp_1(_Dp___get_value__impl__geb1vb(_this__u8e3s4) / this.get_fontScale_h56n3i_k$());
  }
  function toPx_0(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    var tmp0_check = equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_9().get_Sp_1up9b4_k$());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Density.toPx.<anonymous>' call
      tmp$ret$0 = 'Only Sp can convert to Px';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4) * this.get_fontScale_h56n3i_k$() * this.get_density_qy0267_k$();
  }
  function roundToPx_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = this.toPx_x7oik4_k$(_this__u8e3s4);
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    return tmp$ret$0;
  }
  function toDp(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    var tmp0_check = equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_9().get_Sp_1up9b4_k$());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Density.toDp.<anonymous>' call
      tmp$ret$0 = 'Only Sp can convert to Px';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _Dp___init__impl__ms3zkb(_TextUnit___get_value__impl__hpbx0k(_this__u8e3s4) * this.get_fontScale_h56n3i_k$());
  }
  function toDp_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = _this__u8e3s4 / this.get_density_qy0267_k$();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    return tmp$ret$0;
  }
  function toSp_0(_this__u8e3s4) {
    return get_sp_1(_this__u8e3s4 / (this.get_fontScale_h56n3i_k$() * this.get_density_qy0267_k$()));
  }
  function toDp_1(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = _this__u8e3s4 / this.get_density_qy0267_k$();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    return tmp$ret$0;
  }
  function toSp_1(_this__u8e3s4) {
    return get_sp_1(_this__u8e3s4 / (this.get_fontScale_h56n3i_k$() * this.get_density_qy0267_k$()));
  }
  function toRect(_this__u8e3s4) {
    return new Rect(this.toPx_u0ojv5_k$(_this__u8e3s4.get_left_854lf9_k$()), this.toPx_u0ojv5_k$(_this__u8e3s4.get_top_qz4pg9_k$()), this.toPx_u0ojv5_k$(_this__u8e3s4.get_right_33vr2q_k$()), this.toPx_u0ojv5_k$(_this__u8e3s4.get_bottom_dp2gsx_k$()));
  }
  function toSize(_this__u8e3s4) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    tmp$ret$0 = !_DpSize___get_packedValue__impl__jx4au8(_this__u8e3s4).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().get_Unspecified_3pf4om_k$()));
    if (tmp$ret$0) {
      tmp = Size(this.toPx_u0ojv5_k$(_DpSize___get_width__impl__o3d5gt(_this__u8e3s4)), this.toPx_u0ojv5_k$(_DpSize___get_height__impl__5xueo2(_this__u8e3s4)));
    } else {
      tmp = Companion_getInstance().get_Unspecified_o59ai8_k$();
    }
    return tmp;
  }
  function toDpSize(_this__u8e3s4) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    tmp$ret$0 = !_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance().get_Unspecified_o59ai8_k$()));
    if (tmp$ret$0) {
      tmp = DpSize_0(this.toDp_2y47ho_k$(_Size___get_width__impl__58y75t(_this__u8e3s4)), this.toDp_2y47ho_k$(_Size___get_height__impl__a04p02(_this__u8e3s4)));
    } else {
      tmp = Companion_getInstance_1().get_Unspecified_3pf4om_k$();
    }
    return tmp;
  }
  setMetadataFor(Density, 'Density', interfaceMeta);
  setMetadataFor(DensityImpl, 'DensityImpl', classMeta, VOID, [Density]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(DpSize, 'DpSize', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Dp, 'Dp', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(DpRect, 'DpRect', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(DpOffset, 'DpOffset', classMeta);
  setMetadataFor(ExperimentalUnitApi, 'ExperimentalUnitApi', classMeta, VOID, [Annotation]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(IntOffset, 'IntOffset', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(IntRect, 'IntRect', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(IntSize, 'IntSize', classMeta);
  setMetadataFor(LayoutDirection, 'LayoutDirection', classMeta, Enum);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(TextUnit, 'TextUnit', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(TextUnitType, 'TextUnitType', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Velocity, 'Velocity', classMeta);
  setMetadataFor(NoOp, 'NoOp', classMeta, VOID, [Annotation]);
  //endregion
  function _get_MinFocusWidth__gybzl($this) {
    return $this.MinFocusWidth_1;
  }
  function _get_MaxFocusWidth__ae5noh($this) {
    return $this.MaxFocusWidth_1;
  }
  function _get_MinFocusHeight__5pag4e($this) {
    return $this.MinFocusHeight_1;
  }
  function _get_MaxFocusHeight__o2f0a8($this) {
    return $this.MaxFocusHeight_1;
  }
  function _get_FocusMask__663u2b($this) {
    return $this.FocusMask_1;
  }
  function _get_MinFocusBits__1zhvxb($this) {
    return $this.MinFocusBits_1;
  }
  function _get_MinFocusMask__25ehmh($this) {
    return $this.MinFocusMask_1;
  }
  function _get_MinNonFocusBits__z54bce($this) {
    return $this.MinNonFocusBits_1;
  }
  function _get_MinNonFocusMask__zb0x1k($this) {
    return $this.MinNonFocusMask_1;
  }
  function _get_MaxFocusBits__s5ggi7($this) {
    return $this.MaxFocusBits_1;
  }
  function _get_MaxFocusMask__rzjut1($this) {
    return $this.MaxFocusMask_1;
  }
  function _get_MaxNonFocusBits__ytytes($this) {
    return $this.MaxNonFocusBits_1;
  }
  function _get_MaxNonFocusMask__yo27pm($this) {
    return $this.MaxNonFocusMask_1;
  }
  function _get_MinHeightOffsets__53hwh0($this) {
    return $this.MinHeightOffsets_1;
  }
  function _get_WidthMask__f6ww81($this) {
    return $this.WidthMask_1;
  }
  function _get_HeightMask__kyw4q0($this) {
    return $this.HeightMask_1;
  }
  function bitsNeedForSize($this, size) {
    var tmp;
    if (size < 8191) {
      tmp = 13;
    } else if (size < 32767) {
      tmp = 15;
    } else if (size < 65535) {
      tmp = 16;
    } else if (size < 262143) {
      tmp = 18;
    } else {
      throw IllegalArgumentException_init_$Create$("Can't represent a size of " + size + ' in ' + 'Constraints');
    }
    return tmp;
  }
  function _Constraints___init__impl__v8ud31(value) {
    return value;
  }
  function _Constraints___get_value__impl__3ah2ax($this) {
    return $this;
  }
  function _get_focusIndex__7g9rf3($this) {
    var tmp = _Constraints___get_value__impl__3ah2ax($this);
    Companion_getInstance_0();
    return tmp.and_jhajnj_k$(new Long(3, 0)).toInt_1tsl84_k$();
  }
  function _Constraints___get_minWidth__impl__hi9lfi($this) {
    var mask = Companion_getInstance_0().WidthMask_1[_get_focusIndex__7g9rf3($this)];
    return _Constraints___get_value__impl__3ah2ax($this).shr_wjue3g_k$(2).toInt_1tsl84_k$() & mask;
  }
  function _Constraints___get_maxWidth__impl__uuyqc($this) {
    var mask = Companion_getInstance_0().WidthMask_1[_get_focusIndex__7g9rf3($this)];
    var width = _Constraints___get_value__impl__3ah2ax($this).shr_wjue3g_k$(33).toInt_1tsl84_k$() & mask;
    var tmp;
    if (width === 0) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = width - 1 | 0;
    }
    return tmp;
  }
  function _Constraints___get_minHeight__impl__ev4bgx($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().HeightMask_1[focus];
    var offset = Companion_getInstance_0().MinHeightOffsets_1[focus];
    return _Constraints___get_value__impl__3ah2ax($this).shr_wjue3g_k$(offset).toInt_1tsl84_k$() & mask;
  }
  function _Constraints___get_maxHeight__impl__dt3e8z($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().HeightMask_1[focus];
    var offset = Companion_getInstance_0().MinHeightOffsets_1[focus] + 31 | 0;
    var height = _Constraints___get_value__impl__3ah2ax($this).shr_wjue3g_k$(offset).toInt_1tsl84_k$() & mask;
    var tmp;
    if (height === 0) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = height - 1 | 0;
    }
    return tmp;
  }
  function _Constraints___get_hasBoundedWidth__impl__7hd0wr($this) {
    var mask = Companion_getInstance_0().WidthMask_1[_get_focusIndex__7g9rf3($this)];
    return !((_Constraints___get_value__impl__3ah2ax($this).shr_wjue3g_k$(33).toInt_1tsl84_k$() & mask) === 0);
  }
  function _Constraints___get_hasBoundedHeight__impl__bsh4rw($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().HeightMask_1[focus];
    var offset = Companion_getInstance_0().MinHeightOffsets_1[focus] + 31 | 0;
    return !((_Constraints___get_value__impl__3ah2ax($this).shr_wjue3g_k$(offset).toInt_1tsl84_k$() & mask) === 0);
  }
  function _Constraints___get_hasFixedWidth__impl__4p17wc($this) {
    return _Constraints___get_maxWidth__impl__uuyqc($this) === _Constraints___get_minWidth__impl__hi9lfi($this);
  }
  function _Constraints___get_hasFixedHeight__impl__y56fxx($this) {
    return _Constraints___get_maxHeight__impl__dt3e8z($this) === _Constraints___get_minHeight__impl__ev4bgx($this);
  }
  function _Constraints___get_isZero__impl__fm0efw($this) {
    return _Constraints___get_maxWidth__impl__uuyqc($this) === 0 ? true : _Constraints___get_maxHeight__impl__dt3e8z($this) === 0;
  }
  function Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight) {
    // Inline function 'kotlin.require' call
    var tmp0_require = minHeight >= 0 ? minWidth >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      tmp$ret$0 = 'minHeight(' + minHeight + ') and minWidth(' + minWidth + ') must be >= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp;
    if (maxWidth >= minWidth) {
      tmp = true;
    } else {
      Companion_getInstance_0();
      tmp = maxWidth === 2147483647;
    }
    var tmp1_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      tmp$ret$1 = 'maxWidth(' + maxWidth + ') must be >= minWidth(' + minWidth + ')';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp_0;
    if (maxHeight >= minHeight) {
      tmp_0 = true;
    } else {
      Companion_getInstance_0();
      tmp_0 = maxHeight === 2147483647;
    }
    var tmp2_require = tmp_0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      tmp$ret$2 = 'maxHeight(' + maxHeight + ') must be >= minHeight(' + minHeight + ')';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return Companion_getInstance_0().createConstraints_1eoxu5_k$(minWidth, maxWidth, minHeight, maxHeight);
  }
  function Constraints__copy$default_impl_f452rp($this, minWidth, maxWidth, minHeight, maxHeight, $super) {
    minWidth = minWidth === VOID ? _Constraints___get_minWidth__impl__hi9lfi($this) : minWidth;
    maxWidth = maxWidth === VOID ? _Constraints___get_maxWidth__impl__uuyqc($this) : maxWidth;
    minHeight = minHeight === VOID ? _Constraints___get_minHeight__impl__ev4bgx($this) : minHeight;
    maxHeight = maxHeight === VOID ? _Constraints___get_maxHeight__impl__dt3e8z($this) : maxHeight;
    var tmp;
    if ($super === VOID) {
      tmp = Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight);
    } else {
      var tmp_0 = new Constraints($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Constraints(tmp_1)).copy_wgt7bm_k$.call(tmp_0, minWidth, maxWidth, minHeight, maxHeight).value_1;
    }
    return tmp;
  }
  function Constraints__toString_impl_37yskr($this) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc($this);
    var tmp;
    Companion_getInstance_0();
    if (maxWidth === 2147483647) {
      tmp = 'Infinity';
    } else {
      tmp = maxWidth.toString();
    }
    var maxWidthStr = tmp;
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z($this);
    var tmp_0;
    Companion_getInstance_0();
    if (maxHeight === 2147483647) {
      tmp_0 = 'Infinity';
    } else {
      tmp_0 = maxHeight.toString();
    }
    var maxHeightStr = tmp_0;
    return 'Constraints(minWidth = ' + _Constraints___get_minWidth__impl__hi9lfi($this) + ', maxWidth = ' + maxWidthStr + ', ' + ('minHeight = ' + _Constraints___get_minHeight__impl__ev4bgx($this) + ', maxHeight = ' + maxHeightStr + ')');
  }
  function Companion() {
    Companion_instance = this;
    this.Infinity_1 = 2147483647;
    this.MinFocusWidth_1 = new Long(0, 0);
    this.MaxFocusWidth_1 = new Long(1, 0);
    this.MinFocusHeight_1 = new Long(2, 0);
    this.MaxFocusHeight_1 = new Long(3, 0);
    this.FocusMask_1 = new Long(3, 0);
    this.MinFocusBits_1 = 16;
    this.MinFocusMask_1 = 65535;
    this.MinNonFocusBits_1 = 15;
    this.MinNonFocusMask_1 = 32767;
    this.MaxFocusBits_1 = 18;
    this.MaxFocusMask_1 = 262143;
    this.MaxNonFocusBits_1 = 13;
    this.MaxNonFocusMask_1 = 8191;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([18, 20, 17, 15]);
    tmp.MinHeightOffsets_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.intArrayOf' call
    var tmp0_intArrayOf = new Int32Array([65535, 262143, 32767, 8191]);
    tmp$ret$1 = tmp0_intArrayOf;
    tmp_0.WidthMask_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.intArrayOf' call
    var tmp0_intArrayOf_0 = new Int32Array([32767, 8191, 65535, 262143]);
    tmp$ret$2 = tmp0_intArrayOf_0;
    tmp_1.HeightMask_1 = tmp$ret$2;
  }
  protoOf(Companion).get_Infinity_rvchkf_k$ = function () {
    return this.Infinity_1;
  };
  protoOf(Companion).fixed_bmujv7_k$ = function (width, height) {
    // Inline function 'kotlin.require' call
    var tmp0_require = width >= 0 ? height >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Companion.fixed.<anonymous>' call
      tmp$ret$0 = 'width(' + width + ') and height(' + height + ') must be >= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.createConstraints_1eoxu5_k$(width, width, height, height);
  };
  protoOf(Companion).fixedWidth_qpk3so_k$ = function (width) {
    // Inline function 'kotlin.require' call
    var tmp0_require = width >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Companion.fixedWidth.<anonymous>' call
      tmp$ret$0 = 'width(' + width + ') must be >= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.createConstraints_1eoxu5_k$(width, width, 0, 2147483647);
  };
  protoOf(Companion).fixedHeight_6ko2bl_k$ = function (height) {
    // Inline function 'kotlin.require' call
    var tmp0_require = height >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Companion.fixedHeight.<anonymous>' call
      tmp$ret$0 = 'height(' + height + ') must be >= 0';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.createConstraints_1eoxu5_k$(0, 2147483647, height, height);
  };
  protoOf(Companion).createConstraints_1eoxu5_k$ = function (minWidth, maxWidth, minHeight, maxHeight) {
    var heightVal = maxHeight === 2147483647 ? minHeight : maxHeight;
    var heightBits = bitsNeedForSize(this, heightVal);
    var widthVal = maxWidth === 2147483647 ? minWidth : maxWidth;
    var widthBits = bitsNeedForSize(this, widthVal);
    if ((widthBits + heightBits | 0) > 31) {
      throw IllegalArgumentException_init_$Create$("Can't represent a width of " + widthVal + ' and height ' + ('of ' + heightVal + ' in Constraints'));
    }
    var tmp0_subject = widthBits;
    var tmp;
    switch (tmp0_subject) {
      case 15:
        tmp = new Long(2, 0);
        break;
      case 16:
        tmp = new Long(0, 0);
        break;
      case 13:
        tmp = new Long(3, 0);
        break;
      case 18:
        tmp = new Long(1, 0);
        break;
      default:
        throw IllegalStateException_init_$Create$('Should only have the provided constants.');
    }
    var focus = tmp;
    var maxWidthValue = maxWidth === 2147483647 ? 0 : maxWidth + 1 | 0;
    var maxHeightValue = maxHeight === 2147483647 ? 0 : maxHeight + 1 | 0;
    var minHeightOffset = this.MinHeightOffsets_1[focus.toInt_1tsl84_k$()];
    var maxHeightOffset = minHeightOffset + 31 | 0;
    var value = focus.or_s401rn_k$(toLong(minWidth).shl_po5ip6_k$(2)).or_s401rn_k$(toLong(maxWidthValue).shl_po5ip6_k$(33)).or_s401rn_k$(toLong(minHeight).shl_po5ip6_k$(minHeightOffset)).or_s401rn_k$(toLong(maxHeightValue).shl_po5ip6_k$(maxHeightOffset));
    return _Constraints___init__impl__v8ud31(value);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Constraints__hashCode_impl_ij7484($this) {
    return $this.hashCode();
  }
  function Constraints__equals_impl_33vs20($this, other) {
    if (!(other instanceof Constraints))
      return false;
    var tmp0_other_with_cast = other instanceof Constraints ? other.value_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Constraints(value) {
    Companion_getInstance_0();
    this.value_1 = value;
  }
  protoOf(Constraints).toString = function () {
    return Constraints__toString_impl_37yskr(this.value_1);
  };
  protoOf(Constraints).hashCode = function () {
    return Constraints__hashCode_impl_ij7484(this.value_1);
  };
  protoOf(Constraints).equals = function (other) {
    return Constraints__equals_impl_33vs20(this.value_1, other);
  };
  function Constraints_0(minWidth, maxWidth, minHeight, maxHeight) {
    minWidth = minWidth === VOID ? 0 : minWidth;
    var tmp;
    if (maxWidth === VOID) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = maxWidth;
    }
    maxWidth = tmp;
    minHeight = minHeight === VOID ? 0 : minHeight;
    var tmp_0;
    if (maxHeight === VOID) {
      Companion_getInstance_0();
      tmp_0 = 2147483647;
    } else {
      tmp_0 = maxHeight;
    }
    maxHeight = tmp_0;
    // Inline function 'kotlin.require' call
    var tmp0_require = maxWidth >= minWidth;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      tmp$ret$0 = 'maxWidth(' + maxWidth + ') must be >= than minWidth(' + minWidth + ')';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = maxHeight >= minHeight;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      tmp$ret$1 = 'maxHeight(' + maxHeight + ') must be >= than minHeight(' + minHeight + ')';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = minWidth >= 0 ? minHeight >= 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      tmp$ret$2 = 'minWidth(' + minWidth + ') and minHeight(' + minHeight + ') must be >= 0';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return Companion_getInstance_0().createConstraints_1eoxu5_k$(minWidth, maxWidth, minHeight, maxHeight);
  }
  function offset(_this__u8e3s4, horizontal, vertical) {
    horizontal = horizontal === VOID ? 0 : horizontal;
    vertical = vertical === VOID ? 0 : vertical;
    return Constraints_0(coerceAtLeast(_Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4) + horizontal | 0, 0), addMaxWithMinimum(_Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4), horizontal), coerceAtLeast(_Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4) + vertical | 0, 0), addMaxWithMinimum(_Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4), vertical));
  }
  function constrainWidth(_this__u8e3s4, width) {
    return coerceIn(width, _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4));
  }
  function constrainHeight(_this__u8e3s4, height) {
    return coerceIn(height, _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4));
  }
  function constrain(_this__u8e3s4, otherConstraints) {
    return Constraints_0(coerceIn(_Constraints___get_minWidth__impl__hi9lfi(otherConstraints), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_Constraints___get_maxWidth__impl__uuyqc(otherConstraints), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_Constraints___get_minHeight__impl__ev4bgx(otherConstraints), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)), coerceIn(_Constraints___get_maxHeight__impl__dt3e8z(otherConstraints), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)));
  }
  function addMaxWithMinimum(max, value) {
    var tmp;
    Companion_getInstance_0();
    if (max === 2147483647) {
      tmp = max;
    } else {
      tmp = coerceAtLeast(max + value | 0, 0);
    }
    return tmp;
  }
  function constrain_0(_this__u8e3s4, size) {
    return IntSize_0(coerceIn(_IntSize___get_width__impl__d9yl4o(size), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_IntSize___get_height__impl__prv63b(size), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)));
  }
  function Density() {
  }
  function Density_0(density, fontScale) {
    fontScale = fontScale === VOID ? 1.0 : fontScale;
    return new DensityImpl(density, fontScale);
  }
  function DensityImpl(density, fontScale) {
    this.density_1 = density;
    this.fontScale_1 = fontScale;
  }
  protoOf(DensityImpl).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(DensityImpl).get_fontScale_h56n3i_k$ = function () {
    return this.fontScale_1;
  };
  protoOf(DensityImpl).component1_7eebsc_k$ = function () {
    return this.density_1;
  };
  protoOf(DensityImpl).component2_7eebsb_k$ = function () {
    return this.fontScale_1;
  };
  protoOf(DensityImpl).copy_138fzp_k$ = function (density, fontScale) {
    return new DensityImpl(density, fontScale);
  };
  protoOf(DensityImpl).copy$default_f62lz1_k$ = function (density, fontScale, $super) {
    density = density === VOID ? this.density_1 : density;
    fontScale = fontScale === VOID ? this.fontScale_1 : fontScale;
    return $super === VOID ? this.copy_138fzp_k$(density, fontScale) : $super.copy_138fzp_k$.call(this, density, fontScale);
  };
  protoOf(DensityImpl).toString = function () {
    return 'DensityImpl(density=' + this.density_1 + ', fontScale=' + this.fontScale_1 + ')';
  };
  protoOf(DensityImpl).hashCode = function () {
    var result = getNumberHashCode(this.density_1);
    result = imul(result, 31) + getNumberHashCode(this.fontScale_1) | 0;
    return result;
  };
  protoOf(DensityImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DensityImpl))
      return false;
    var tmp0_other_with_cast = other instanceof DensityImpl ? other : THROW_CCE();
    if (!equals(this.density_1, tmp0_other_with_cast.density_1))
      return false;
    if (!equals(this.fontScale_1, tmp0_other_with_cast.fontScale_1))
      return false;
    return true;
  };
  function _DpSize___init__impl__t4mur0(packedValue) {
    return packedValue;
  }
  function _DpSize___get_packedValue__impl__jx4au8($this) {
    return $this;
  }
  function _DpSize___get_width__impl__o3d5gt($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_DpSize___get_packedValue__impl__jx4au8($this).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().Unspecified_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.DpSize.<get-width>.<anonymous>' call
      tmp$ret$0 = 'DpSize is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp3_unpackFloat1 = _DpSize___get_packedValue__impl__jx4au8($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    var tmp4__get_dp__wwq2dd = tmp$ret$2;
    tmp$ret$3 = _Dp___init__impl__ms3zkb(tmp4__get_dp__wwq2dd);
    return tmp$ret$3;
  }
  function _DpSize___get_height__impl__5xueo2($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_DpSize___get_packedValue__impl__jx4au8($this).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().Unspecified_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.DpSize.<get-height>.<anonymous>' call
      tmp$ret$0 = 'DpSize is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp3_unpackFloat2 = _DpSize___get_packedValue__impl__jx4au8($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    var tmp4__get_dp__wwq2dd = tmp$ret$2;
    tmp$ret$3 = _Dp___init__impl__ms3zkb(tmp4__get_dp__wwq2dd);
    return tmp$ret$3;
  }
  function DpSize__copy_impl_bqu9ud($this, width, height) {
    return DpSize_0(width, height);
  }
  function DpSize__copy$default_impl_lb23f6($this, width, height, $super) {
    width = width === VOID ? _DpSize___get_width__impl__o3d5gt($this) : width;
    height = height === VOID ? _DpSize___get_height__impl__5xueo2($this) : height;
    var tmp;
    if ($super === VOID) {
      tmp = DpSize__copy_impl_bqu9ud($this, width, height);
    } else {
      var tmp_0 = new DpSize($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new DpSize(tmp_1)).copy_xtnesz_k$.call(tmp_0, new Dp(width), new Dp(height)).packedValue_1;
    }
    return tmp;
  }
  function DpSize__minus_impl_h9olfa($this, other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var tmp0_minus = _DpSize___get_width__impl__o3d5gt($this);
    var tmp1_minus = _DpSize___get_width__impl__o3d5gt(other);
    tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var tmp2_minus = _DpSize___get_height__impl__5xueo2($this);
    var tmp3_minus = _DpSize___get_height__impl__5xueo2(other);
    tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_minus) - _Dp___get_value__impl__geb1vb(tmp3_minus));
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__plus_impl_9x81ba($this, other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var tmp0_plus = _DpSize___get_width__impl__o3d5gt($this);
    var tmp1_plus = _DpSize___get_width__impl__o3d5gt(other);
    tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_plus) + _Dp___get_value__impl__geb1vb(tmp1_plus));
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var tmp2_plus = _DpSize___get_height__impl__5xueo2($this);
    var tmp3_plus = _DpSize___get_height__impl__5xueo2(other);
    tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_plus) + _Dp___get_value__impl__geb1vb(tmp3_plus));
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__component1_impl_uakewc($this) {
    return _DpSize___get_width__impl__o3d5gt($this);
  }
  function DpSize__component2_impl_urm1aj($this) {
    return _DpSize___get_height__impl__5xueo2($this);
  }
  function DpSize__times_impl_jk75os($this, other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.Dp.times' call
    var tmp0_times = _DpSize___get_width__impl__o3d5gt($this);
    tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_times) * other);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.Dp.times' call
    var tmp1_times = _DpSize___get_height__impl__5xueo2($this);
    tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp1_times) * other);
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__times_impl_jk75os_0($this, other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.Dp.times' call
    var tmp0_times = _DpSize___get_width__impl__o3d5gt($this);
    tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_times) * other);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.Dp.times' call
    var tmp1_times = _DpSize___get_height__impl__5xueo2($this);
    tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp1_times) * other);
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__div_impl_vg5y6h($this, other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.Dp.div' call
    var tmp0_div = _DpSize___get_width__impl__o3d5gt($this);
    tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_div) / other);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.Dp.div' call
    var tmp1_div = _DpSize___get_height__impl__5xueo2($this);
    tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp1_div) / other);
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__div_impl_vg5y6h_0($this, other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.Dp.div' call
    var tmp0_div = _DpSize___get_width__impl__o3d5gt($this);
    tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_div) / other);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.Dp.div' call
    var tmp1_div = _DpSize___get_height__impl__5xueo2($this);
    tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp1_div) / other);
    return DpSize_0(tmp, tmp$ret$1);
  }
  function DpSize__toString_impl_1vggic($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    tmp$ret$0 = !_DpSize___get_packedValue__impl__jx4au8($this).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().Unspecified_1));
    if (tmp$ret$0) {
      tmp = '' + new Dp(_DpSize___get_width__impl__o3d5gt($this)) + ' x ' + new Dp(_DpSize___get_height__impl__5xueo2($this));
    } else {
      tmp = 'DpSize.Unspecified';
    }
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    tmp.Zero_1 = DpSize_0(tmp_0, tmp$ret$1);
    this.Unspecified_1 = DpSize_0(Companion_getInstance_2().Unspecified_1, Companion_getInstance_2().Unspecified_1);
  }
  protoOf(Companion_0).get_Zero_ijcx3n_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_0).get_Unspecified_3pf4om_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DpSize__hashCode_impl_jvpgaj($this) {
    return $this.hashCode();
  }
  function DpSize__equals_impl_rpnn4x($this, other) {
    if (!(other instanceof DpSize))
      return false;
    var tmp0_other_with_cast = other instanceof DpSize ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpSize(packedValue) {
    Companion_getInstance_1();
    this.packedValue_1 = packedValue;
  }
  protoOf(DpSize).toString = function () {
    return DpSize__toString_impl_1vggic(this.packedValue_1);
  };
  protoOf(DpSize).hashCode = function () {
    return DpSize__hashCode_impl_jvpgaj(this.packedValue_1);
  };
  protoOf(DpSize).equals = function (other) {
    return DpSize__equals_impl_rpnn4x(this.packedValue_1, other);
  };
  function _Dp___init__impl__ms3zkb(value) {
    return value;
  }
  function _Dp___get_value__impl__geb1vb($this) {
    return $this;
  }
  function Dp__plus_impl_jccqqv($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) + _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__minus_impl_9d2wwn($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) - _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__unaryMinus_impl_vjy6lc($this) {
    return _Dp___init__impl__ms3zkb(-_Dp___get_value__impl__geb1vb($this));
  }
  function Dp__div_impl_4wp0uw($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) / other);
  }
  function Dp__div_impl_4wp0uw_0($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) / other);
  }
  function Dp__div_impl_4wp0uw_1($this, other) {
    return _Dp___get_value__impl__geb1vb($this) / _Dp___get_value__impl__geb1vb(other);
  }
  function Dp__times_impl_bnlh65($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) * other);
  }
  function Dp__times_impl_bnlh65_0($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) * other);
  }
  function Dp__compareTo_impl_tlg3dl($this, other) {
    return compareTo(_Dp___get_value__impl__geb1vb($this), _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__compareTo_impl_tlg3dl_0($this, other) {
    var tmp = $this.value_1;
    return Dp__compareTo_impl_tlg3dl(tmp, other instanceof Dp ? other.value_1 : THROW_CCE());
  }
  function Dp__toString_impl_kcddez($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    tmp$ret$0 = isNaN_0(_Dp___get_value__impl__geb1vb($this));
    if (tmp$ret$0) {
      tmp = 'Dp.Unspecified';
    } else {
      tmp = '' + _Dp___get_value__impl__geb1vb($this) + '.dp';
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Hairline_1 = _Dp___init__impl__ms3zkb(0.0);
    this.Infinity_1 = _Dp___init__impl__ms3zkb(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
    this.Unspecified_1 = _Dp___init__impl__ms3zkb(FloatCompanionObject_getInstance().get_NaN_18jnv2_k$());
  }
  protoOf(Companion_1).get_Hairline_1wtat6_k$ = function () {
    return this.Hairline_1;
  };
  protoOf(Companion_1).get_Infinity_60yj04_k$ = function () {
    return this.Infinity_1;
  };
  protoOf(Companion_1).get_Unspecified_o6a50p_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Dp__hashCode_impl_sxkrra($this) {
    return getNumberHashCode($this);
  }
  function Dp__equals_impl_bc4gpq($this, other) {
    if (!(other instanceof Dp))
      return false;
    var tmp0_other_with_cast = other instanceof Dp ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Dp(value) {
    Companion_getInstance_2();
    this.value_1 = value;
  }
  protoOf(Dp).compareTo_46hxmm_k$ = function (other) {
    return Dp__compareTo_impl_tlg3dl(this.value_1, other);
  };
  protoOf(Dp).compareTo_6thzaj_k$ = function (other) {
    return Dp__compareTo_impl_tlg3dl_0(this, other);
  };
  protoOf(Dp).toString = function () {
    return Dp__toString_impl_kcddez(this.value_1);
  };
  protoOf(Dp).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.value_1);
  };
  protoOf(Dp).equals = function (other) {
    return Dp__equals_impl_bc4gpq(this.value_1, other);
  };
  function DpRect_init_$Init$(origin, size, $this) {
    var tmp = _DpOffset___get_x__impl__uauqb5(origin);
    var tmp_0 = _DpOffset___get_y__impl__1h898y(origin);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var tmp0_plus = _DpOffset___get_x__impl__uauqb5(origin);
    var tmp1_plus = _DpSize___get_width__impl__o3d5gt(size);
    tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_plus) + _Dp___get_value__impl__geb1vb(tmp1_plus));
    var tmp_1 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var tmp2_plus = _DpOffset___get_y__impl__1h898y(origin);
    var tmp3_plus = _DpSize___get_height__impl__5xueo2(size);
    tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_plus) + _Dp___get_value__impl__geb1vb(tmp3_plus));
    DpRect.call($this, tmp, tmp_0, tmp_1, tmp$ret$1);
    return $this;
  }
  function DpRect_init_$Create$(origin, size) {
    return DpRect_init_$Init$(origin, size, objectCreate(protoOf(DpRect)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop() {
    return 0;
  }
  function DpRect(left, top, right, bottom) {
    Companion_getInstance_3();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    this.$stable_1 = 0;
  }
  protoOf(DpRect).get_left_854lf9_k$ = function () {
    return this.left_1;
  };
  protoOf(DpRect).get_top_qz4pg9_k$ = function () {
    return this.top_1;
  };
  protoOf(DpRect).get_right_33vr2q_k$ = function () {
    return this.right_1;
  };
  protoOf(DpRect).get_bottom_dp2gsx_k$ = function () {
    return this.bottom_1;
  };
  protoOf(DpRect).component1_z2a8sv_k$ = function () {
    return this.left_1;
  };
  protoOf(DpRect).component2_11tj3k_k$ = function () {
    return this.top_1;
  };
  protoOf(DpRect).component3_xv6qz5_k$ = function () {
    return this.right_1;
  };
  protoOf(DpRect).component4_28x0xa_k$ = function () {
    return this.bottom_1;
  };
  protoOf(DpRect).copy_o1dksz_k$ = function (left, top, right, bottom) {
    return new DpRect(left, top, right, bottom);
  };
  protoOf(DpRect).copy$default_xbtagb_k$ = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.left_1 : left;
    top = top === VOID ? this.top_1 : top;
    right = right === VOID ? this.right_1 : right;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    return $super === VOID ? this.copy_o1dksz_k$(left, top, right, bottom) : $super.copy_o1dksz_k$.call(this, new Dp(left), new Dp(top), new Dp(right), new Dp(bottom));
  };
  protoOf(DpRect).toString = function () {
    return 'DpRect(left=' + new Dp(this.left_1) + ', top=' + new Dp(this.top_1) + ', right=' + new Dp(this.right_1) + ', bottom=' + new Dp(this.bottom_1) + ')';
  };
  protoOf(DpRect).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.left_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.right_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
    return result;
  };
  protoOf(DpRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpRect))
      return false;
    var tmp0_other_with_cast = other instanceof DpRect ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  function DpSize_0(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = _Dp___get_value__impl__geb1vb(width);
    var tmp1_packFloats = _Dp___get_value__impl__geb1vb(height);
    var v1 = toLong(toBits(tmp0_packFloats));
    var v2 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1.shl_po5ip6_k$(32).or_s401rn_k$(v2.and_jhajnj_k$(new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$0);
  }
  function get_dp(_this__u8e3s4) {
    return _Dp___init__impl__ms3zkb(_this__u8e3s4);
  }
  function _DpOffset___init__impl__yq36wy(packedValue) {
    return packedValue;
  }
  function _DpOffset___get_packedValue__impl__7zqn8y($this) {
    return $this;
  }
  function _DpOffset___get_x__impl__uauqb5($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_DpOffset___get_packedValue__impl__7zqn8y($this).equals(_DpOffset___get_packedValue__impl__7zqn8y(Companion_getInstance_4().Unspecified_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.DpOffset.<get-x>.<anonymous>' call
      tmp$ret$0 = 'DpOffset is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp3_unpackFloat1 = _DpOffset___get_packedValue__impl__7zqn8y($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    var tmp4__get_dp__wwq2dd = tmp$ret$2;
    tmp$ret$3 = _Dp___init__impl__ms3zkb(tmp4__get_dp__wwq2dd);
    return tmp$ret$3;
  }
  function _DpOffset___get_y__impl__1h898y($this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !_DpOffset___get_packedValue__impl__7zqn8y($this).equals(_DpOffset___get_packedValue__impl__7zqn8y(Companion_getInstance_4().Unspecified_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.DpOffset.<get-y>.<anonymous>' call
      tmp$ret$0 = 'DpOffset is unspecified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp3_unpackFloat2 = _DpOffset___get_packedValue__impl__7zqn8y($this);
    var tmp$ret$1;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = tmp3_unpackFloat2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    tmp$ret$1 = floatFromBits(tmp2_fromBits);
    tmp$ret$2 = tmp$ret$1;
    var tmp4__get_dp__wwq2dd = tmp$ret$2;
    tmp$ret$3 = _Dp___init__impl__ms3zkb(tmp4__get_dp__wwq2dd);
    return tmp$ret$3;
  }
  function DpOffset__copy_impl_z860gp($this, x, y) {
    return DpOffset_0(x, y);
  }
  function DpOffset__copy$default_impl_98vijo($this, x, y, $super) {
    x = x === VOID ? _DpOffset___get_x__impl__uauqb5($this) : x;
    y = y === VOID ? _DpOffset___get_y__impl__1h898y($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = DpOffset__copy_impl_z860gp($this, x, y);
    } else {
      var tmp_0 = new DpOffset($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new DpOffset(tmp_1)).copy_ppgn33_k$.call(tmp_0, new Dp(x), new Dp(y)).packedValue_1;
    }
    return tmp;
  }
  function DpOffset__minus_impl_i9b6l8($this, other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var tmp0_minus = _DpOffset___get_x__impl__uauqb5($this);
    var tmp1_minus = _DpOffset___get_x__impl__uauqb5(other);
    tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_minus) - _Dp___get_value__impl__geb1vb(tmp1_minus));
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var tmp2_minus = _DpOffset___get_y__impl__1h898y($this);
    var tmp3_minus = _DpOffset___get_y__impl__1h898y(other);
    tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_minus) - _Dp___get_value__impl__geb1vb(tmp3_minus));
    return DpOffset_0(tmp, tmp$ret$1);
  }
  function DpOffset__plus_impl_e4vqcs($this, other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var tmp0_plus = _DpOffset___get_x__impl__uauqb5($this);
    var tmp1_plus = _DpOffset___get_x__impl__uauqb5(other);
    tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_plus) + _Dp___get_value__impl__geb1vb(tmp1_plus));
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var tmp2_plus = _DpOffset___get_y__impl__1h898y($this);
    var tmp3_plus = _DpOffset___get_y__impl__1h898y(other);
    tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_plus) + _Dp___get_value__impl__geb1vb(tmp3_plus));
    return DpOffset_0(tmp, tmp$ret$1);
  }
  function DpOffset__toString_impl_qqhvsu($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    tmp$ret$0 = !_DpOffset___get_packedValue__impl__7zqn8y($this).equals(_DpOffset___get_packedValue__impl__7zqn8y(Companion_getInstance_4().Unspecified_1));
    if (tmp$ret$0) {
      tmp = '(' + new Dp(_DpOffset___get_x__impl__uauqb5($this)) + ', ' + new Dp(_DpOffset___get_y__impl__1h898y($this)) + ')';
    } else {
      tmp = 'DpOffset.Unspecified';
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    tmp.Zero_1 = DpOffset_0(tmp_0, tmp$ret$1);
    this.Unspecified_1 = DpOffset_0(Companion_getInstance_2().Unspecified_1, Companion_getInstance_2().Unspecified_1);
  }
  protoOf(Companion_3).get_Zero_c17vgf_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_3).get_Unspecified_bzfkf8_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function DpOffset__hashCode_impl_mjg9df($this) {
    return $this.hashCode();
  }
  function DpOffset__equals_impl_7fc41d($this, other) {
    if (!(other instanceof DpOffset))
      return false;
    var tmp0_other_with_cast = other instanceof DpOffset ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpOffset(packedValue) {
    Companion_getInstance_4();
    this.packedValue_1 = packedValue;
  }
  protoOf(DpOffset).toString = function () {
    return DpOffset__toString_impl_qqhvsu(this.packedValue_1);
  };
  protoOf(DpOffset).hashCode = function () {
    return DpOffset__hashCode_impl_mjg9df(this.packedValue_1);
  };
  protoOf(DpOffset).equals = function (other) {
    return DpOffset__equals_impl_7fc41d(this.packedValue_1, other);
  };
  function DpOffset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = _Dp___get_value__impl__geb1vb(x);
    var tmp1_packFloats = _Dp___get_value__impl__geb1vb(y);
    var v1 = toLong(toBits(tmp0_packFloats));
    var v2 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1.shl_po5ip6_k$(32).or_s401rn_k$(v2.and_jhajnj_k$(new Long(-1, 0)));
    return _DpOffset___init__impl__yq36wy(tmp$ret$0);
  }
  function get_dp_0(_this__u8e3s4) {
    return _Dp___init__impl__ms3zkb(_this__u8e3s4);
  }
  function get_dp_1(_this__u8e3s4) {
    return _Dp___init__impl__ms3zkb(_this__u8e3s4);
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_DpSize___get_packedValue__impl__jx4au8(_this__u8e3s4).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().Unspecified_1));
  }
  function get_isUnspecified(_this__u8e3s4) {
    return isNaN_0(_Dp___get_value__impl__geb1vb(_this__u8e3s4));
  }
  function get_isSpecified_0(_this__u8e3s4) {
    return !_DpOffset___get_packedValue__impl__7zqn8y(_this__u8e3s4).equals(_DpOffset___get_packedValue__impl__7zqn8y(Companion_getInstance_4().Unspecified_1));
  }
  function ExperimentalUnitApi() {
  }
  protoOf(ExperimentalUnitApi).equals = function (other) {
    if (!(other instanceof ExperimentalUnitApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalUnitApi ? other : THROW_CCE();
    return true;
  };
  protoOf(ExperimentalUnitApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalUnitApi).toString = function () {
    return '@androidx.compose.ui.unit.ExperimentalUnitApi()';
  };
  function _IntOffset___init__impl__rq8h7b(packedValue) {
    return packedValue;
  }
  function _IntOffset___get_packedValue__impl__982pbx($this) {
    return $this;
  }
  function _IntOffset___get_x__impl__qiqr5o($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp0_unpackInt1 = _IntOffset___get_packedValue__impl__982pbx($this);
    tmp$ret$0 = tmp0_unpackInt1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    return tmp$ret$0;
  }
  function _IntOffset___get_y__impl__2avpwj($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp0_unpackInt2 = _IntOffset___get_packedValue__impl__982pbx($this);
    tmp$ret$0 = tmp0_unpackInt2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    return tmp$ret$0;
  }
  function IntOffset__component1_impl_z0xjzd($this) {
    return _IntOffset___get_x__impl__qiqr5o($this);
  }
  function IntOffset__component2_impl_yjvxl6($this) {
    return _IntOffset___get_y__impl__2avpwj($this);
  }
  function IntOffset__copy_impl_pmdgk6($this, x, y) {
    return IntOffset_0(x, y);
  }
  function IntOffset__copy$default_impl_1y5pbb($this, x, y, $super) {
    x = x === VOID ? _IntOffset___get_x__impl__qiqr5o($this) : x;
    y = y === VOID ? _IntOffset___get_y__impl__2avpwj($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = IntOffset__copy_impl_pmdgk6($this, x, y);
    } else {
      var tmp_0 = new IntOffset($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new IntOffset(tmp_1)).copy_b61kim_k$.call(tmp_0, x, y).packedValue_1;
    }
    return tmp;
  }
  function IntOffset__minus_impl_4m69hb($this, other) {
    return IntOffset_0(_IntOffset___get_x__impl__qiqr5o($this) - _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj($this) - _IntOffset___get_y__impl__2avpwj(other) | 0);
  }
  function IntOffset__plus_impl_nqoa9b($this, other) {
    return IntOffset_0(_IntOffset___get_x__impl__qiqr5o($this) + _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj($this) + _IntOffset___get_y__impl__2avpwj(other) | 0);
  }
  function IntOffset__unaryMinus_impl_7xzl6y($this) {
    return IntOffset_0(-_IntOffset___get_x__impl__qiqr5o($this) | 0, -_IntOffset___get_y__impl__2avpwj($this) | 0);
  }
  function IntOffset__times_impl_2bnp7t($this, operand) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = _IntOffset___get_x__impl__qiqr5o($this) * operand;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = _IntOffset___get_y__impl__2avpwj($this) * operand;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return IntOffset_0(tmp, tmp$ret$1);
  }
  function IntOffset__div_impl_wnk4u6($this, operand) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = _IntOffset___get_x__impl__qiqr5o($this) / operand;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = _IntOffset___get_y__impl__2avpwj($this) / operand;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return IntOffset_0(tmp, tmp$ret$1);
  }
  function IntOffset__rem_impl_i1qrdh($this, operand) {
    return IntOffset_0(_IntOffset___get_x__impl__qiqr5o($this) % operand | 0, _IntOffset___get_y__impl__2avpwj($this) % operand | 0);
  }
  function IntOffset__toString_impl_h46d8h($this) {
    return '(' + _IntOffset___get_x__impl__qiqr5o($this) + ', ' + _IntOffset___get_y__impl__2avpwj($this) + ')';
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.Zero_1 = IntOffset_0(0, 0);
  }
  protoOf(Companion_4).get_Zero_c6qc7y_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function IntOffset__hashCode_impl_w5rrxs($this) {
    return $this.hashCode();
  }
  function IntOffset__equals_impl_45wak4($this, other) {
    if (!(other instanceof IntOffset))
      return false;
    var tmp0_other_with_cast = other instanceof IntOffset ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntOffset(packedValue) {
    Companion_getInstance_5();
    this.packedValue_1 = packedValue;
  }
  protoOf(IntOffset).toString = function () {
    return IntOffset__toString_impl_h46d8h(this.packedValue_1);
  };
  protoOf(IntOffset).hashCode = function () {
    return IntOffset__hashCode_impl_w5rrxs(this.packedValue_1);
  };
  protoOf(IntOffset).equals = function (other) {
    return IntOffset__equals_impl_45wak4(this.packedValue_1, other);
  };
  function toOffset(_this__u8e3s4) {
    return Offset(_IntOffset___get_x__impl__qiqr5o(_this__u8e3s4), _IntOffset___get_y__impl__2avpwj(_this__u8e3s4));
  }
  function plus(_this__u8e3s4, offset) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4) + _IntOffset___get_x__impl__qiqr5o(offset), _Offset___get_y__impl__8bzhra(_this__u8e3s4) + _IntOffset___get_y__impl__2avpwj(offset));
  }
  function minus(_this__u8e3s4, offset) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4) - _IntOffset___get_x__impl__qiqr5o(offset), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - _IntOffset___get_y__impl__2avpwj(offset));
  }
  function IntOffset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = toLong(x).shl_po5ip6_k$(32).or_s401rn_k$(toLong(y).and_jhajnj_k$(new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  }
  function round(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = _Offset___get_x__impl__xvi35n(_this__u8e3s4);
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = _Offset___get_y__impl__8bzhra(_this__u8e3s4);
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return IntOffset_0(tmp, tmp$ret$1);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.Zero_1 = new IntRect(0, 0, 0, 0);
  }
  protoOf(Companion_5).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function IntRect(left, top, right, bottom) {
    Companion_getInstance_6();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    this.$stable_1 = 0;
  }
  protoOf(IntRect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(IntRect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(IntRect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(IntRect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(IntRect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1 | 0;
  };
  protoOf(IntRect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1 | 0;
  };
  protoOf(IntRect).get_size_yscczt_k$ = function () {
    return IntSize_0(this.get_width_j0q4yl_k$(), this.get_height_e7t92o_k$());
  };
  protoOf(IntRect).get_isEmpty_zauvru_k$ = function () {
    return this.left_1 >= this.right_1 ? true : this.top_1 >= this.bottom_1;
  };
  protoOf(IntRect).translate_pe744e_k$ = function (offset) {
    return new IntRect(this.left_1 + _IntOffset___get_x__impl__qiqr5o(offset) | 0, this.top_1 + _IntOffset___get_y__impl__2avpwj(offset) | 0, this.right_1 + _IntOffset___get_x__impl__qiqr5o(offset) | 0, this.bottom_1 + _IntOffset___get_y__impl__2avpwj(offset) | 0);
  };
  protoOf(IntRect).translate_vez3i_k$ = function (translateX, translateY) {
    return new IntRect(this.left_1 + translateX | 0, this.top_1 + translateY | 0, this.right_1 + translateX | 0, this.bottom_1 + translateY | 0);
  };
  protoOf(IntRect).inflate_y7f6g6_k$ = function (delta) {
    return new IntRect(this.left_1 - delta | 0, this.top_1 - delta | 0, this.right_1 + delta | 0, this.bottom_1 + delta | 0);
  };
  protoOf(IntRect).deflate_b4kkqy_k$ = function (delta) {
    return this.inflate_y7f6g6_k$(-delta | 0);
  };
  protoOf(IntRect).intersect_5vipj6_k$ = function (other) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.left_1;
    var tmp1_max = other.left_1;
    tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp2_max = this.top_1;
    var tmp3_max = other.top_1;
    tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp4_min = this.right_1;
    var tmp5_min = other.right_1;
    tmp$ret$2 = Math.min(tmp4_min, tmp5_min);
    var tmp_1 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.math.min' call
    var tmp6_min = this.bottom_1;
    var tmp7_min = other.bottom_1;
    tmp$ret$3 = Math.min(tmp6_min, tmp7_min);
    return new IntRect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(IntRect).overlaps_6ffn2j_k$ = function (other) {
    if (this.right_1 <= other.left_1 ? true : other.right_1 <= this.left_1)
      return false;
    if (this.bottom_1 <= other.top_1 ? true : other.bottom_1 <= this.top_1)
      return false;
    return true;
  };
  protoOf(IntRect).get_minDimension_t9b43n_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0__get_absoluteValue__nukmtt = this.get_width_j0q4yl_k$();
    tmp$ret$0 = abs(tmp0__get_absoluteValue__nukmtt);
    var tmp2_min = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp1__get_absoluteValue__rcem8i = this.get_height_e7t92o_k$();
    tmp$ret$1 = abs(tmp1__get_absoluteValue__rcem8i);
    var tmp3_min = tmp$ret$1;
    tmp$ret$2 = Math.min(tmp2_min, tmp3_min);
    return tmp$ret$2;
  };
  protoOf(IntRect).get_maxDimension_xxccdn_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0__get_absoluteValue__nukmtt = this.get_width_j0q4yl_k$();
    tmp$ret$0 = abs(tmp0__get_absoluteValue__nukmtt);
    var tmp2_max = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp1__get_absoluteValue__rcem8i = this.get_height_e7t92o_k$();
    tmp$ret$1 = abs(tmp1__get_absoluteValue__rcem8i);
    var tmp3_max = tmp$ret$1;
    tmp$ret$2 = Math.max(tmp2_max, tmp3_max);
    return tmp$ret$2;
  };
  protoOf(IntRect).get_topLeft_hafo2o_k$ = function () {
    return IntOffset_0(this.left_1, this.top_1);
  };
  protoOf(IntRect).get_topCenter_jnouvm_k$ = function () {
    return IntOffset_0(this.left_1 + (this.get_width_j0q4yl_k$() / 2 | 0) | 0, this.top_1);
  };
  protoOf(IntRect).get_topRight_cpuk3n_k$ = function () {
    return IntOffset_0(this.right_1, this.top_1);
  };
  protoOf(IntRect).get_centerLeft_l0g502_k$ = function () {
    return IntOffset_0(this.left_1, this.top_1 + (this.get_height_e7t92o_k$() / 2 | 0) | 0);
  };
  protoOf(IntRect).get_center_tfozt7_k$ = function () {
    return IntOffset_0(this.left_1 + (this.get_width_j0q4yl_k$() / 2 | 0) | 0, this.top_1 + (this.get_height_e7t92o_k$() / 2 | 0) | 0);
  };
  protoOf(IntRect).get_centerRight_vnfyob_k$ = function () {
    return IntOffset_0(this.right_1, this.top_1 + (this.get_height_e7t92o_k$() / 2 | 0) | 0);
  };
  protoOf(IntRect).get_bottomLeft_3k4m3s_k$ = function () {
    return IntOffset_0(this.left_1, this.bottom_1);
  };
  protoOf(IntRect).get_bottomCenter_35u7t6_k$ = function () {
    return IntOffset_0(this.left_1 + (this.get_width_j0q4yl_k$() / 2 | 0) | 0, this.bottom_1);
  };
  protoOf(IntRect).get_bottomRight_c6oxaj_k$ = function () {
    return IntOffset_0(this.right_1, this.bottom_1);
  };
  protoOf(IntRect).contains_4xg8pb_k$ = function (offset) {
    return ((_IntOffset___get_x__impl__qiqr5o(offset) >= this.left_1 ? _IntOffset___get_x__impl__qiqr5o(offset) < this.right_1 : false) ? _IntOffset___get_y__impl__2avpwj(offset) >= this.top_1 : false) ? _IntOffset___get_y__impl__2avpwj(offset) < this.bottom_1 : false;
  };
  protoOf(IntRect).toString = function () {
    return 'IntRect.fromLTRB(' + ('' + this.left_1 + ', ') + ('' + this.top_1 + ', ') + ('' + this.right_1 + ', ') + ('' + this.bottom_1 + ')');
  };
  protoOf(IntRect).component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  protoOf(IntRect).component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  protoOf(IntRect).component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  protoOf(IntRect).component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  protoOf(IntRect).copy_2hj87f_k$ = function (left, top, right, bottom) {
    return new IntRect(left, top, right, bottom);
  };
  protoOf(IntRect).copy$default_cp8zmw_k$ = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.left_1 : left;
    top = top === VOID ? this.top_1 : top;
    right = right === VOID ? this.right_1 : right;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    return $super === VOID ? this.copy_2hj87f_k$(left, top, right, bottom) : $super.copy_2hj87f_k$.call(this, left, top, right, bottom);
  };
  protoOf(IntRect).hashCode = function () {
    var result = this.left_1;
    result = imul(result, 31) + this.top_1 | 0;
    result = imul(result, 31) + this.right_1 | 0;
    result = imul(result, 31) + this.bottom_1 | 0;
    return result;
  };
  protoOf(IntRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntRect))
      return false;
    var tmp0_other_with_cast = other instanceof IntRect ? other : THROW_CCE();
    if (!(this.left_1 === tmp0_other_with_cast.left_1))
      return false;
    if (!(this.top_1 === tmp0_other_with_cast.top_1))
      return false;
    if (!(this.right_1 === tmp0_other_with_cast.right_1))
      return false;
    if (!(this.bottom_1 === tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  function IntRect_0(offset, size) {
    return new IntRect(_IntOffset___get_x__impl__qiqr5o(offset), _IntOffset___get_y__impl__2avpwj(offset), _IntOffset___get_x__impl__qiqr5o(offset) + _IntSize___get_width__impl__d9yl4o(size) | 0, _IntOffset___get_y__impl__2avpwj(offset) + _IntSize___get_height__impl__prv63b(size) | 0);
  }
  function toSize_0(_this__u8e3s4) {
    return Size(_IntSize___get_width__impl__d9yl4o(_this__u8e3s4), _IntSize___get_height__impl__prv63b(_this__u8e3s4));
  }
  function _IntSize___init__impl__emcjft(packedValue) {
    return packedValue;
  }
  function _IntSize___get_packedValue__impl__uho7jf($this) {
    return $this;
  }
  function _IntSize___get_width__impl__d9yl4o($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp0_unpackInt1 = _IntSize___get_packedValue__impl__uho7jf($this);
    tmp$ret$0 = tmp0_unpackInt1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    return tmp$ret$0;
  }
  function _IntSize___get_height__impl__prv63b($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp0_unpackInt2 = _IntSize___get_packedValue__impl__uho7jf($this);
    tmp$ret$0 = tmp0_unpackInt2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    return tmp$ret$0;
  }
  function IntSize__component1_impl_v484if($this) {
    return _IntSize___get_width__impl__d9yl4o($this);
  }
  function IntSize__component2_impl_un6i48($this) {
    return _IntSize___get_height__impl__prv63b($this);
  }
  function IntSize__times_impl_8ewz1l($this, other) {
    return IntSize_0(imul(_IntSize___get_width__impl__d9yl4o($this), other), imul(_IntSize___get_height__impl__prv63b($this), other));
  }
  function IntSize__div_impl_a85o7o($this, other) {
    return IntSize_0(_IntSize___get_width__impl__d9yl4o($this) / other | 0, _IntSize___get_height__impl__prv63b($this) / other | 0);
  }
  function IntSize__toString_impl_54w9zl($this) {
    return '' + _IntSize___get_width__impl__d9yl4o($this) + ' x ' + _IntSize___get_height__impl__prv63b($this);
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.Zero_1 = _IntSize___init__impl__emcjft(new Long(0, 0));
  }
  protoOf(Companion_6).get_Zero_4ip44w_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function IntSize__hashCode_impl_gm9mta($this) {
    return $this.hashCode();
  }
  function IntSize__equals_impl_i3v38e($this, other) {
    if (!(other instanceof IntSize))
      return false;
    var tmp0_other_with_cast = other instanceof IntSize ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntSize(packedValue) {
    Companion_getInstance_7();
    this.packedValue_1 = packedValue;
  }
  protoOf(IntSize).toString = function () {
    return IntSize__toString_impl_54w9zl(this.packedValue_1);
  };
  protoOf(IntSize).hashCode = function () {
    return IntSize__hashCode_impl_gm9mta(this.packedValue_1);
  };
  protoOf(IntSize).equals = function (other) {
    return IntSize__equals_impl_i3v38e(this.packedValue_1, other);
  };
  function IntSize_0(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = toLong(width).shl_po5ip6_k$(32).or_s401rn_k$(toLong(height).and_jhajnj_k$(new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$0);
  }
  function toIntRect(_this__u8e3s4) {
    return IntRect_0(Companion_getInstance_5().get_Zero_c6qc7y_k$(), _this__u8e3s4);
  }
  var LayoutDirection_Ltr_instance;
  var LayoutDirection_Rtl_instance;
  function values() {
    return [LayoutDirection_Ltr_getInstance(), LayoutDirection_Rtl_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Ltr':
        return LayoutDirection_Ltr_getInstance();
      case 'Rtl':
        return LayoutDirection_Rtl_getInstance();
      default:
        LayoutDirection_initEntries();
        THROW_ISE();
        break;
    }
  }
  var LayoutDirection_entriesInitialized;
  function LayoutDirection_initEntries() {
    if (LayoutDirection_entriesInitialized)
      return Unit_getInstance();
    LayoutDirection_entriesInitialized = true;
    LayoutDirection_Ltr_instance = new LayoutDirection('Ltr', 0);
    LayoutDirection_Rtl_instance = new LayoutDirection('Rtl', 1);
  }
  function LayoutDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LayoutDirection_Ltr_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Ltr_instance;
  }
  function LayoutDirection_Rtl_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Rtl_instance;
  }
  function _TextUnit___init__impl__r5fj1s(packedValue) {
    return packedValue;
  }
  function _TextUnit___get_packedValue__impl__it60w4($this) {
    return $this;
  }
  function TextUnit__unaryMinus_impl_yh8f5n($this) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), -_TextUnit___get_value__impl__hpbx0k($this));
  }
  function TextUnit__div_impl_ql36z7($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) / other);
  }
  function TextUnit__div_impl_ql36z7_0($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) / other);
  }
  function TextUnit__div_impl_ql36z7_1($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) / other);
  }
  function TextUnit__times_impl_vrurc8($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) * other);
  }
  function TextUnit__times_impl_vrurc8_0($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) * other);
  }
  function TextUnit__times_impl_vrurc8_1($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) * other);
  }
  function TextUnit__compareTo_impl_6ryuvy($this, other) {
    checkArithmetic_0($this, other);
    return compareTo(_TextUnit___get_value__impl__hpbx0k($this), _TextUnit___get_value__impl__hpbx0k(other));
  }
  function TextUnit__toString_impl_51ghw0($this) {
    var tmp0_subject = _TextUnit___get_type__impl__uc2olt($this);
    return equals(tmp0_subject, Companion_getInstance_9().Unspecified_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_9().Sp_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.sp' : equals(tmp0_subject, Companion_getInstance_9().Em_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.em' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [new TextUnitType(Companion_getInstance_9().Unspecified_1), new TextUnitType(Companion_getInstance_9().Sp_1), new TextUnitType(Companion_getInstance_9().Em_1)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp.TextUnitTypes_1 = tmp$ret$2;
    this.Unspecified_1 = pack(new Long(0, 0), FloatCompanionObject_getInstance().get_NaN_18jnv2_k$());
  }
  protoOf(Companion_7).get_TextUnitTypes_8kg867_k$ = function () {
    return this.TextUnitTypes_1;
  };
  protoOf(Companion_7).get_Unspecified_n7zca6_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function _TextUnit___get_rawType__impl__tu8yq5($this) {
    return _TextUnit___get_packedValue__impl__it60w4($this).and_jhajnj_k$(new Long(0, 255));
  }
  function _TextUnit___get_type__impl__uc2olt($this) {
    return Companion_getInstance_8().TextUnitTypes_1[_TextUnit___get_rawType__impl__tu8yq5($this).ushr_rr8rvr_k$(32).toInt_1tsl84_k$()].type_1;
  }
  function _TextUnit___get_isSp__impl__8c3r6q($this) {
    return _TextUnit___get_rawType__impl__tu8yq5($this).equals(new Long(0, 1));
  }
  function _TextUnit___get_isEm__impl__esrmtl($this) {
    return _TextUnit___get_rawType__impl__tu8yq5($this).equals(new Long(0, 2));
  }
  function _TextUnit___get_value__impl__hpbx0k($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = _TextUnit___get_packedValue__impl__it60w4($this).and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    return tmp$ret$0;
  }
  function TextUnit__hashCode_impl_qsmeov($this) {
    return $this.hashCode();
  }
  function TextUnit__equals_impl_49w9tp($this, other) {
    if (!(other instanceof TextUnit))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnit ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnit(packedValue) {
    Companion_getInstance_8();
    this.packedValue_1 = packedValue;
  }
  protoOf(TextUnit).toString = function () {
    return TextUnit__toString_impl_51ghw0(this.packedValue_1);
  };
  protoOf(TextUnit).hashCode = function () {
    return TextUnit__hashCode_impl_qsmeov(this.packedValue_1);
  };
  protoOf(TextUnit).equals = function (other) {
    return TextUnit__equals_impl_49w9tp(this.packedValue_1, other);
  };
  function get_isUnspecified_0(_this__u8e3s4) {
    return _TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4).equals(new Long(0, 0));
  }
  function _TextUnitType___init__impl__br87qi(type) {
    return type;
  }
  function _TextUnitType___get_type__impl__sa627r($this) {
    return $this;
  }
  function TextUnitType__toString_impl_x93gyy($this) {
    var tmp0_subject = $this;
    return equals(tmp0_subject, Companion_getInstance_9().Unspecified_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_9().Sp_1) ? 'Sp' : equals(tmp0_subject, Companion_getInstance_9().Em_1) ? 'Em' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.Unspecified_1 = _TextUnitType___init__impl__br87qi(new Long(0, 0));
    this.Sp_1 = _TextUnitType___init__impl__br87qi(new Long(0, 1));
    this.Em_1 = _TextUnitType___init__impl__br87qi(new Long(0, 2));
  }
  protoOf(Companion_8).get_Unspecified_i4lxe0_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(Companion_8).get_Sp_1up9b4_k$ = function () {
    return this.Sp_1;
  };
  protoOf(Companion_8).get_Em_qgnn4l_k$ = function () {
    return this.Em_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function TextUnitType__hashCode_impl_g0uo7b($this) {
    return $this.hashCode();
  }
  function TextUnitType__equals_impl_nrbaqr($this, other) {
    if (!(other instanceof TextUnitType))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnitType ? other.type_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnitType(type) {
    Companion_getInstance_9();
    this.type_1 = type;
  }
  protoOf(TextUnitType).toString = function () {
    return TextUnitType__toString_impl_x93gyy(this.type_1);
  };
  protoOf(TextUnitType).hashCode = function () {
    return TextUnitType__hashCode_impl_g0uo7b(this.type_1);
  };
  protoOf(TextUnitType).equals = function (other) {
    return TextUnitType__equals_impl_nrbaqr(this.type_1, other);
  };
  function TextUnit_0(value, type) {
    return pack(_TextUnitType___get_type__impl__sa627r(type), value);
  }
  function get_sp(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function get_sp_0(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function get_sp_1(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function checkArithmetic(a) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !get_isUnspecified_0(a);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.checkArithmetic.<anonymous>' call
      tmp$ret$0 = 'Cannot perform operation for Unspecified type.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function pack(unitType, v) {
    return _TextUnit___init__impl__r5fj1s(unitType.or_s401rn_k$(toLong(toBits(v)).and_jhajnj_k$(new Long(-1, 0))));
  }
  function checkArithmetic_0(a, b) {
    // Inline function 'kotlin.require' call
    var tmp0_require = !get_isUnspecified_0(a) ? !get_isUnspecified_0(b) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.checkArithmetic.<anonymous>' call
      tmp$ret$0 = 'Cannot perform operation for Unspecified type.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = equals(_TextUnit___get_type__impl__uc2olt(a), _TextUnit___get_type__impl__uc2olt(b));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.checkArithmetic.<anonymous>' call
      tmp$ret$1 = 'Cannot perform operation for ' + new TextUnitType(_TextUnit___get_type__impl__uc2olt(a)) + ' and ' + new TextUnitType(_TextUnit___get_type__impl__uc2olt(b));
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function get_UNIT_TYPE_UNSPECIFIED() {
    return UNIT_TYPE_UNSPECIFIED;
  }
  var UNIT_TYPE_UNSPECIFIED;
  function get_UNIT_MASK() {
    return UNIT_MASK;
  }
  var UNIT_MASK;
  function get_UNIT_TYPE_SP() {
    return UNIT_TYPE_SP;
  }
  var UNIT_TYPE_SP;
  function get_UNIT_TYPE_EM() {
    return UNIT_TYPE_EM;
  }
  var UNIT_TYPE_EM;
  function get_isSpecified_1(_this__u8e3s4) {
    return !get_isUnspecified_0(_this__u8e3s4);
  }
  function _Velocity___init__impl__tjpg0s(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _Velocity___get_x__impl__qqcikv($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp2_unpackFloat1 = _get_packedValue__aj623s($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp2_unpackFloat1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function _Velocity___get_y__impl__239yhc($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp2_unpackFloat2 = _get_packedValue__aj623s($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp2_unpackFloat2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Velocity__component1_impl_owvb2c($this) {
    return _Velocity___get_x__impl__qqcikv($this);
  }
  function Velocity__component2_impl_oftoo5($this) {
    return _Velocity___get_y__impl__239yhc($this);
  }
  function Velocity__copy_impl_c7yiyt($this, x, y) {
    return Velocity_0(x, y);
  }
  function Velocity__copy$default_impl_eql69u($this, x, y, $super) {
    x = x === VOID ? _Velocity___get_x__impl__qqcikv($this) : x;
    y = y === VOID ? _Velocity___get_y__impl__239yhc($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = Velocity__copy_impl_c7yiyt($this, x, y);
    } else {
      var tmp_0 = new Velocity($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Velocity(tmp_1)).copy_7z654v_k$.call(tmp_0, x, y).packedValue_1;
    }
    return tmp;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.Zero_1 = Velocity_0(0.0, 0.0);
  }
  protoOf(Companion_9).get_Zero_s3q2zh_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Velocity__unaryMinus_impl_i21u3z($this) {
    return Velocity_0(-_Velocity___get_x__impl__qqcikv($this), -_Velocity___get_y__impl__239yhc($this));
  }
  function Velocity__minus_impl_w0cg92($this, other) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) - _Velocity___get_x__impl__qqcikv(other), _Velocity___get_y__impl__239yhc($this) - _Velocity___get_y__impl__239yhc(other));
  }
  function Velocity__plus_impl_9g3s6u($this, other) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) + _Velocity___get_x__impl__qqcikv(other), _Velocity___get_y__impl__239yhc($this) + _Velocity___get_y__impl__239yhc(other));
  }
  function Velocity__times_impl_yav0ik($this, operand) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) * operand, _Velocity___get_y__impl__239yhc($this) * operand);
  }
  function Velocity__div_impl_gomhdz($this, operand) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) / operand, _Velocity___get_y__impl__239yhc($this) / operand);
  }
  function Velocity__rem_impl_vafuuo($this, operand) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) % operand, _Velocity___get_y__impl__239yhc($this) % operand);
  }
  function Velocity__toString_impl_n5zo2k($this) {
    return '(' + _Velocity___get_x__impl__qqcikv($this) + ', ' + _Velocity___get_y__impl__239yhc($this) + ') px/sec';
  }
  function Velocity__hashCode_impl_q3yh3p($this) {
    return $this.hashCode();
  }
  function Velocity__equals_impl_327knj($this, other) {
    if (!(other instanceof Velocity))
      return false;
    var tmp0_other_with_cast = other instanceof Velocity ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Velocity(packedValue) {
    Companion_getInstance_10();
    this.packedValue_1 = packedValue;
  }
  protoOf(Velocity).toString = function () {
    return Velocity__toString_impl_n5zo2k(this.packedValue_1);
  };
  protoOf(Velocity).hashCode = function () {
    return Velocity__hashCode_impl_q3yh3p(this.packedValue_1);
  };
  protoOf(Velocity).equals = function (other) {
    return Velocity__equals_impl_327knj(this.packedValue_1, other);
  };
  function Velocity_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.shl_po5ip6_k$(32).or_s401rn_k$(v2.and_jhajnj_k$(new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$0);
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
    return '@androidx.compose.ui.unit.internal.NoOp()';
  };
  //region block: post-declaration
  protoOf(DensityImpl).toPx_u0ojv5_k$ = toPx;
  protoOf(DensityImpl).toPx_x7oik4_k$ = toPx_0;
  protoOf(DensityImpl).roundToPx_hl1u8z_k$ = roundToPx;
  protoOf(DensityImpl).roundToPx_bdej4u_k$ = roundToPx_0;
  protoOf(DensityImpl).toSp_ul0xj8_k$ = toSp;
  protoOf(DensityImpl).toSp_8a8emd_k$ = toSp_0;
  protoOf(DensityImpl).toSp_j4kre0_k$ = toSp_1;
  protoOf(DensityImpl).toDp_amhzyl_k$ = toDp;
  protoOf(DensityImpl).toDp_2eugbd_k$ = toDp_0;
  protoOf(DensityImpl).toDp_2y47ho_k$ = toDp_1;
  protoOf(DensityImpl).toRect_l767f3_k$ = toRect;
  protoOf(DensityImpl).toSize_z60fpn_k$ = toSize;
  protoOf(DensityImpl).toDpSize_ncjzav_k$ = toDpSize;
  //endregion
  //region block: init
  UNIT_TYPE_UNSPECIFIED = new Long(0, 0);
  UNIT_MASK = new Long(0, 255);
  UNIT_TYPE_SP = new Long(0, 1);
  UNIT_TYPE_EM = new Long(0, 2);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Constraints_0;
  _.$_$.b = Constraints;
  _.$_$.c = roundToPx;
  _.$_$.d = roundToPx_0;
  _.$_$.e = toDpSize;
  _.$_$.f = toDp_1;
  _.$_$.g = toDp;
  _.$_$.h = toDp_0;
  _.$_$.i = toPx;
  _.$_$.j = toPx_0;
  _.$_$.k = toRect;
  _.$_$.l = toSize;
  _.$_$.m = toSp_0;
  _.$_$.n = toSp;
  _.$_$.o = toSp_1;
  _.$_$.p = Density_0;
  _.$_$.q = Density;
  _.$_$.r = DpOffset_0;
  _.$_$.s = DpOffset;
  _.$_$.t = DpSize_0;
  _.$_$.u = Dp;
  _.$_$.v = IntOffset_0;
  _.$_$.w = IntOffset;
  _.$_$.x = IntSize_0;
  _.$_$.y = IntSize;
  _.$_$.z = TextUnitType;
  _.$_$.a1 = TextUnit_0;
  _.$_$.b1 = TextUnit;
  _.$_$.c1 = Velocity;
  _.$_$.d1 = checkArithmetic;
  _.$_$.e1 = constrainHeight;
  _.$_$.f1 = constrainWidth;
  _.$_$.g1 = constrain;
  _.$_$.h1 = constrain_0;
  _.$_$.i1 = get_isUnspecified_0;
  _.$_$.j1 = minus;
  _.$_$.k1 = offset;
  _.$_$.l1 = pack;
  _.$_$.m1 = plus;
  _.$_$.n1 = get_sp_0;
  _.$_$.o1 = get_sp;
  _.$_$.p1 = toIntRect;
  _.$_$.q1 = toSize_0;
  _.$_$.r1 = LayoutDirection_Ltr_getInstance;
  _.$_$.s1 = LayoutDirection_Rtl_getInstance;
  _.$_$.t1 = DpRect_init_$Create$;
  _.$_$.u1 = _Constraints___get_hasBoundedHeight__impl__bsh4rw;
  _.$_$.v1 = _Constraints___get_hasBoundedWidth__impl__7hd0wr;
  _.$_$.w1 = _Constraints___get_hasFixedHeight__impl__y56fxx;
  _.$_$.x1 = _Constraints___get_hasFixedWidth__impl__4p17wc;
  _.$_$.y1 = Constraints__hashCode_impl_ij7484;
  _.$_$.z1 = _Constraints___get_maxHeight__impl__dt3e8z;
  _.$_$.a2 = _Constraints___get_maxWidth__impl__uuyqc;
  _.$_$.b2 = _Constraints___get_minHeight__impl__ev4bgx;
  _.$_$.c2 = _Constraints___get_minWidth__impl__hi9lfi;
  _.$_$.d2 = _Dp___init__impl__ms3zkb;
  _.$_$.e2 = Dp__compareTo_impl_tlg3dl;
  _.$_$.f2 = Dp__hashCode_impl_sxkrra;
  _.$_$.g2 = _Dp___get_value__impl__geb1vb;
  _.$_$.h2 = _DpOffset___get_x__impl__uauqb5;
  _.$_$.i2 = _DpOffset___get_y__impl__1h898y;
  _.$_$.j2 = _IntOffset___get_x__impl__qiqr5o;
  _.$_$.k2 = _IntOffset___get_y__impl__2avpwj;
  _.$_$.l2 = IntSize__hashCode_impl_gm9mta;
  _.$_$.m2 = _IntSize___get_height__impl__prv63b;
  _.$_$.n2 = _IntSize___get_width__impl__d9yl4o;
  _.$_$.o2 = _TextUnit___init__impl__r5fj1s;
  _.$_$.p2 = TextUnit__hashCode_impl_qsmeov;
  _.$_$.q2 = _TextUnit___get_isEm__impl__esrmtl;
  _.$_$.r2 = _TextUnit___get_isSp__impl__8c3r6q;
  _.$_$.s2 = _TextUnit___get_packedValue__impl__it60w4;
  _.$_$.t2 = _TextUnit___get_rawType__impl__tu8yq5;
  _.$_$.u2 = _TextUnit___get_type__impl__uc2olt;
  _.$_$.v2 = _TextUnit___get_value__impl__hpbx0k;
  _.$_$.w2 = Velocity__minus_impl_w0cg92;
  _.$_$.x2 = Velocity__plus_impl_9g3s6u;
  _.$_$.y2 = Constraints__copy$default_impl_f452rp;
  _.$_$.z2 = Velocity__copy$default_impl_eql69u;
  _.$_$.a3 = Companion_getInstance_0;
  _.$_$.b3 = Companion_getInstance_2;
  _.$_$.c3 = Companion_getInstance_4;
  _.$_$.d3 = Companion_getInstance_1;
  _.$_$.e3 = Companion_getInstance_5;
  _.$_$.f3 = Companion_getInstance_6;
  _.$_$.g3 = Companion_getInstance_7;
  _.$_$.h3 = Companion_getInstance_8;
  _.$_$.i3 = Companion_getInstance_10;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-unit.js.map
