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
  firstLastSplit(fullName:any) {
    let arrName = fullName.split(" ");
    let iniName = fullName.charAt(0);
    let iniLname = arrName[arrName.length - 1].charAt(0);
    return iniName + iniLname;
  }
  
}
