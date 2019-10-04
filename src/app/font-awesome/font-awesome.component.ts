import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-fontawesome',
  templateUrl: './font-awesome.component.html',
  styleUrls: ['./font-awesome.component.scss']
})
export class FontAwesomeComponent implements OnInit {

  @Input() icon;
  @Input() size;
  @Input() color;

  constructor() { }

  ngOnInit() {
  }



}
