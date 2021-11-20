import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Input() link: string;
  @Input() padding:string;
  @Input() size: string;
  @Input() textSize: string;
  @Input() textColor: string;
  @Input() backgroundColor: string;
  @Input() radius: string;
  @Input() border: string;
  @Input() width: string;
  @Input() height: string;
  @Input() margin: string;
  @Output() click = new EventEmitter();

  sizeClassName: string;
  textSizeClassName: string;
  textColorClassName: string;
  backgroundColorClassName: string;
  radiusValue:string
  borderValue:string;
  widthValue:string;
  marginValue:string;
  heightValue:string;
  paddingValue:string

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    this.sizeClassName = this.size ? 'size-' + this.size : 'size-md';
    this.textSizeClassName = this.textSize ? 'text-size-' + this.textSize : 'text-size-md';
    this.textColorClassName = this.textColor ? 'text-color-' + this.textColor : '';
    this.radiusValue = this.radius ? 'border-radius-' + this.radius : '3px';
    this.borderValue = this.border ? 'border-' + this.border : '1px';
    this.widthValue = this.width ? 'button-width-' + this.width : '100px';
    this.heightValue = this.border ? 'button-height-' + this.border : '1px';
    this.paddingValue = this.padding ? 'padding-' + this.padding : '';
    this.marginValue = this.margin ? 'margin-' + this.margin : '';
    this.backgroundColorClassName = this.backgroundColor ? 'background-color-' + this.backgroundColor : 'background-color-white';
  }

  onClick() {
    this.click.emit();
  }

}
