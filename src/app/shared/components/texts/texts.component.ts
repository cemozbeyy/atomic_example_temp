import { Component, Input, OnInit } from '@angular/core';

type TextType = 'default' | 'cyan' | 'grey' | 'title' | 'white';
type TextSizeType = 'default' | 'h1' | 'h2' | 'h3';
@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnInit {
  @Input() text: string;
  @Input() type: TextType;
  @Input() color: string;
  @Input() fontWeight = false;
  @Input() size: TextSizeType ;
  @Input() center = false;
  @Input() backgroundColor: string;
  @Input('left-icon') leftIcon = ''
  @Input('right-icon') rightIcon = ''

  constructor() { }

  ngOnInit(): void {
  }

}
