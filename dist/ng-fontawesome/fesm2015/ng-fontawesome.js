import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgFontAwesomeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgFontAwesomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-fontawesome',
                template: "<i [ngClass]=\"'fa fa-'+icon\" [style.font-size.em]=\"size\" [style.color]=\"color\" aria-hidden=\"true\"></i>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgFontAwesomeComponent.ctorParameters = () => [];
NgFontAwesomeComponent.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgFontawesomeModule {
}
NgFontawesomeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [NgFontAwesomeComponent],
                exports: [NgFontAwesomeComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgFontAwesomeComponent, NgFontawesomeModule };

//# sourceMappingURL=ng-fontawesome.js.map