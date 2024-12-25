import { Component, OnInit } from '@angular/core';
import { Itable } from '../../module/table';

@Component({
  selector: 'app-stddash',
  templateUrl: './stddash.component.html',
  styleUrls: ['./stddash.component.scss'],
})
export class StddashComponent implements OnInit {
  stdArray: Array<Itable> = [
    // {
    //   fname: 'John',
    //   lname: 'Doe',
    //   contact: '1234567890',
    //   email: 'jd@gmail.com',
    //   stdId: '1234',
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
  stsAdd(std: Itable) {
    this.stdArray.push(std);
  }
}
