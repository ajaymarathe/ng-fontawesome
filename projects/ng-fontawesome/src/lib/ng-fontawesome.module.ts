import { NgModule } from '@angular/core';
import { NgFontawesomeComponent } from './ng-fontawesome.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgFontawesomeComponent],
  imports: [
    CommonModule
  ],
  exports: [NgFontawesomeComponent]
})
export class NgFontawesomeModule { }
