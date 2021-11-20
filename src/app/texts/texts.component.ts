import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  @Input() color: string;
  @Input() backgroundColor: string;
  @Input() size: string;
  @Input() font: string;
  @Input() align: string
  @Input() margin: string
  sizeValue:string;
  fontValue: string
  colorClassName: string;
  backgroundColorClassName: string;
  textAlign: string
  marginValue:string;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.colorClassName = this.color ? 'text-color-' + this.color : 'text-gray';
    this.marginValue = this.margin ? 'text-margin-' + this.margin : '';
    this.sizeValue = this.size ? 'text-size-' + this.size : '';
    this.fontValue = this.font ? 'font-' + this.font : '';
    this.textAlign = this.align ? 'text-' + this.align : '';
    this.backgroundColorClassName = this.backgroundColor ? 'background-color-' + this.backgroundColor : 'background-color-transparent';
  }
}
