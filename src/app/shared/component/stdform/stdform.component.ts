import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Itable } from '../../module/table';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss'],
})
export class StdformComponent implements OnInit {
  generateUuid() {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;

        return value.toString(16);
      }
    );
  }
  @Output() onaddstd: EventEmitter<Itable> = new EventEmitter<Itable>();
  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  onstdAdd() {
    if (
      !this.fname.nativeElement.value.trim() ||
      !this.lname.nativeElement.value.trim() ||
      !this.email.nativeElement.value.trim() ||
      !this.contact.nativeElement.value.trim()
    ) {
      return;
    }
    let newStd: Itable = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      stdId: this.generateUuid(),
    };

    console.log(newStd);
    this.fname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.contact.nativeElement.value = '';

    this.onaddstd.emit(newStd);
  }

  constructor() {}

  ngOnInit(): void {}
}
