import {Component, Input, OnInit} from '@angular/core';
import {Dialog, DIALOGS} from "../dialog";

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css']
})
export class DialogCardComponent implements OnInit {
  @Input()dialog: Dialog;

  constructor() {
  }

  ngOnInit() {
  }

}
