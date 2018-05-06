import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tricity-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class WrapperComponent implements OnInit {
  @Input() content: string;
  @Input() imageSource: string;

  constructor() { }

  ngOnInit() {
  }

}
