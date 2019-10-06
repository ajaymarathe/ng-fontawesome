(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-fontawesome', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ng-fontawesome'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgFontAwesomeComponent = /** @class */ (function () {
        function NgFontAwesomeComponent() {
        }
        /**
         * @return {?}
         */
        NgFontAwesomeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        NgFontAwesomeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-fontawesome',
                        template: "<i [ngClass]=\"'fa fa-'+icon\" [style.font-size.em]=\"size\" [style.color]=\"color\" aria-hidden=\"true\"></i>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgFontAwesomeComponent.ctorParameters = function () { return []; };
        NgFontAwesomeComponent.propDecorators = {
            icon: [{ type: core.Input }],
            size: [{ type: core.Input }],
            color: [{ type: core.Input }]
        };
        return NgFontAwesomeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgFontawesomeModule = /** @class */ (function () {
        function NgFontawesomeModule() {
        }
        NgFontawesomeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [NgFontAwesomeComponent],
                        exports: [NgFontAwesomeComponent]
                    },] }
        ];
        return NgFontawesomeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgFontAwesomeComponent = NgFontAwesomeComponent;
    exports.NgFontawesomeModule = NgFontawesomeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-fontawesome.umd.js.map