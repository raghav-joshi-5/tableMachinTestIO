import { Component, Input, OnInit } from '@angular/core';
import { Itable } from '../../module/table';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss'],
})
export class StdtableComponent implements OnInit {
  @Input() getstddata!: Array<Itable>;
  constructor() {}

  ngOnInit(): void {}
}
