import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fullName = "Elon MUSK";

  constructor() { }

  ngOnInit(): void {

  }

  get firstLastSplit() {
    let arrName = this.fullName.split(" ");
    let iniName = this.fullName.charAt(0);
    let iniLname = arrName[arrName.length - 1].charAt(0);

    return iniName + iniLname;
  }

}
