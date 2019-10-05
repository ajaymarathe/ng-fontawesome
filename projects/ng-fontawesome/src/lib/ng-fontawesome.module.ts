import { NgModule } from '@angular/core';
import { NgFontAwesomeComponent } from './ng-fontawesome.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgFontAwesomeComponent],
  exports: [NgFontAwesomeComponent]
})
export class NgFontawesomeModule { }
