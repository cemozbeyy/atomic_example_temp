import { Component, Input, OnInit } from '@angular/core';

type ButtonType = 'default' | 'primary' | 'success' | 'orange';
type textType = 'grey' | 'white' | 'black';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: ButtonType = 'primary';
  @Input() textColor: textType = 'white';

  @Input('left-icon') leftIcon = ''

  @Input('right-icon') rightIcon = ''
  @Input() noEffect = false;
  @Input() textGrey = false;
  @Input() block = false;

  constructor() { }

  ngOnInit(): void {
  }

}
