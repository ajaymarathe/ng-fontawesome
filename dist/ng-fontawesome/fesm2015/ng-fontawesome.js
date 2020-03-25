import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgFontawesomeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgFontawesomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-fontawesome',
                template: `
  <i [ngClass]="'fa fa-'+icon" [style.font-size.em]="size" [style.color]="color" aria-hidden="true"></i>
  `
            }] }
];
/** @nocollapse */
NgFontawesomeComponent.ctorParameters = () => [];
NgFontawesomeComponent.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }]
};
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
class NgFontawesomeModule {
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
