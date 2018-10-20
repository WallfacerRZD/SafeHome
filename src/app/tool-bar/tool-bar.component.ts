import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  userIconURL: string = 'assets/icon.jpg';

  @Output()
  toggleDrawer = new EventEmitter();

  toggle() {
    this.toggleDrawer.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
