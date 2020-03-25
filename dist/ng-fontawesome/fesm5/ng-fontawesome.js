import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        { type: Component, args: [{
                    selector: 'ng-fontawesome',
                    template: "\n  <i [ngClass]=\"'fa fa-'+icon\" [style.font-size.em]=\"size\" [style.color]=\"color\" aria-hidden=\"true\"></i>\n  "
                }] }
    ];
    /** @nocollapse */
    NgFontawesomeComponent.ctorParameters = function () { return []; };
    NgFontawesomeComponent.propDecorators = {
        icon: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [NgFontawesomeComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [NgFontawesomeComponent]
                },] }
    ];
    return NgFontawesomeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgFontawesomeComponent, NgFontawesomeModule };
//# sourceMappingURL=ng-fontawesome.js.map
