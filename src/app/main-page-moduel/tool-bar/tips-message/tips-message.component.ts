import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {SearchService} from "../../../search.service";

@Component({
  selector: 'app-tips-message',
  templateUrl: './tips-message.component.html',
  styleUrls: ['./tips-message.component.css']
})
export class TipsMessageComponent implements OnInit {
  textMap = {
    '/main/message': '消息',
    '/main/contact': '联系人',
    '/main/news': '看点',
    '/main/circle': '动态',
  };

  text: string;

  constructor(private router: Router,
              public search: SearchService) {
  }

  ngOnInit() {
    this.setText('消息');
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

    nextSearchValue(value: any) {
        this.search.searchValue$.next(value);
    }
}
