import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-fontawesome',
  template: `
  <i [ngClass]="'fa fa-'+icon" [style.font-size.em]="size" [style.color]="color" aria-hidden="true"></i>
  `,
  styles: []
})
export class NgFontawesomeComponent implements OnInit {

  constructor() { }

  @Input() icon;
  @Input() size;
  @Input() color;

  ngOnInit() {
  }

}
