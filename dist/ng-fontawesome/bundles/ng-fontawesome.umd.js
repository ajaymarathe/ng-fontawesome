(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-fontawesome', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-fontawesome'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgFontawesomeComponent = /** @class */ (function () {
        function NgFontawesomeComponent() {
        }
        /**
         * @return {?}
         */
        NgFontawesomeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        NgFontawesomeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-fontawesome',
                        template: "\n  <i [ngClass]=\"'fa fa-'+icon\" [style.font-size.em]=\"size\" [style.color]=\"color\" aria-hidden=\"true\"></i>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgFontawesomeComponent.ctorParameters = function () { return []; };
        NgFontawesomeComponent.propDecorators = {
            icon: [{ type: core.Input }],
            size: [{ type: core.Input }],
            color: [{ type: core.Input }]
        };
        return NgFontawesomeComponent;
    }());
    if (false) {
        /** @type {?} */
        NgFontawesomeComponent.prototype.icon;
        /** @type {?} */
        NgFontawesomeComponent.prototype.size;
        /** @type {?} */
        NgFontawesomeComponent.prototype.color;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgFontawesomeModule = /** @class */ (function () {
        function NgFontawesomeModule() {
        }
        NgFontawesomeModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgFontawesomeComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [NgFontawesomeComponent]
                    },] }
        ];
        return NgFontawesomeModule;
    }());

    exports.NgFontawesomeComponent = NgFontawesomeComponent;
    exports.NgFontawesomeModule = NgFontawesomeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-fontawesome.umd.js.map
