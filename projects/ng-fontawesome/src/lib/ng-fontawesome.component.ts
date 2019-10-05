
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-fontawesome',
  templateUrl: './ng-fontawesome.component.html',
  styleUrls: ['./ng-fontawesome.component.css']
})
export class NgFontAwesomeComponent implements OnInit {

  @Input() icon;
  @Input() size;
  @Input() color;

  constructor() { }

  ngOnInit() {
  }



}
