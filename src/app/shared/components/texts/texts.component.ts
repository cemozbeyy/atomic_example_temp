import { Component, Input, OnInit } from '@angular/core';

type TextType = 'default' | 'cyan' | 'grey' | 'title';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnInit {
  @Input() text: string;
  @Input() type: TextType = 'default';
  @Input() color: string;
  @Input() fontWeight = false;
  @Input() h3 = false;
  @Input() center = false;
  @Input() backgroundColor: string;
  @Input('left-icon') leftIcon = ''
  @Input('right-icon') rightIcon = ''

  constructor() { }

  ngOnInit(): void {
  }

}
