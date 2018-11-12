import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  textMap = {
    '/message': '消息',
    '/contact': '消息',
    '/news': '消息',
    '/circle': '消息',
  };

  private text: string;

  getText(): string {
    return this.text;
  }

  setText(value: string) {
    this.text = value;
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(()=>this.setText(this.textMap[this.router]))
  }

}
