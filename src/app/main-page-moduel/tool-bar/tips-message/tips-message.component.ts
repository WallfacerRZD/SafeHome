import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-tips-message',
  templateUrl: './tips-message.component.html',
  styleUrls: ['./tips-message.component.css']
})
export class TipsMessageComponent implements OnInit {
  textMap = {
    '/message': '消息',
    '/contact': '联系人',
    '/news': '看点',
    '/circle': '动态',
  };

  text: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.changeText());
  }

  private getText(): string {
    return this.text;
  }

  private setText(value: string) {
    this.text = value;
  }

  private changeText() {
    this.setText(this.textMap[this.router.url]);
  }
}
