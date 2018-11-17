import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-message-content-bar',
  templateUrl: './message-content-bar.component.html',
  styleUrls: ['./message-content-bar.component.css']
})
export class MessageContentBarComponent implements OnInit {
  backIconURL: string = 'assets/img/back.png';
  memberIconURL: string = 'assets/img/member.png';
  @Input()
  title: string = "UnSafeHome仿真";

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
