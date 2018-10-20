import {Component, OnInit} from '@angular/core';
import {Dialog, DIALOGS} from "../dialog";

@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.css']
})
export class DialogListComponent implements OnInit {
  dialogList: Dialog[] = DIALOGS;

  constructor() {
  }

  ngOnInit() {
  }

}
