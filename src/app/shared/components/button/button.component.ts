import { Component, Input, OnInit } from '@angular/core';

type ButtonType = 'default' | 'primary' | 'success' | 'orange';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: ButtonType = 'primary';

  @Input('left-icon') leftIcon = ''

  @Input('right-icon') rightIcon = ''

  @Input() block = false;

  constructor() { }

  ngOnInit(): void {
  }

}
