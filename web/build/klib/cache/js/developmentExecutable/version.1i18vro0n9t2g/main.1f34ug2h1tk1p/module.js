(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './MyKmpApp-common.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./MyKmpApp-common.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-web'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'MyKmpApp-web'.");
    }
    if (typeof this['MyKmpApp-common'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-web'. Its dependency 'MyKmpApp-common' was not found. Please, check whether 'MyKmpApp-common' is loaded prior to 'MyKmpApp-web'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-web'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'MyKmpApp-web'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'MyKmpApp-web'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'MyKmpApp-web'.");
    }
    root['MyKmpApp-web'] = factory(typeof this['MyKmpApp-web'] === 'undefined' ? {} : this['MyKmpApp-web'], this['androidx-runtime'], this['MyKmpApp-common'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_MyKmpApp_common, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var App$composable = kotlin_MyKmpApp_common.$_$.a;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Unit_getInstance = kotlin_kotlin.$_$.p2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var protoOf = kotlin_kotlin.$_$.c9;
  var objectMeta = kotlin_kotlin.$_$.b9;
  var VOID = kotlin_kotlin.$_$.ed;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var Window$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.l2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  //endregion
  function main() {
    onWasmReady(main$lambda);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2040062495, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:6)');
      }
      App$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-2040062495, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda() {
    Window$composable('KmpApp', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  main();
  return _;
}));
