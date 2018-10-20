import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class UserIconComponent {
  iconURL: string = 'assets/icon.jpg';

  @Output()
  toggleDrawer = new EventEmitter();

  toggle() {
    this.toggleDrawer.emit();
  }
}
