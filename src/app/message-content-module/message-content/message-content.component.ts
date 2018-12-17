import {Component, OnInit} from '@angular/core';
import {MessageContentList} from "../message-content-list/MessageContentList";
import {MessageContentDataService} from "../../message-content-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-message-content',
    templateUrl: './message-content.component.html',
    styleUrls: ['./message-content.component.css']
})
export class MessageContent implements OnInit {
    messageContentList: MessageContentList;

    constructor(private messageContentDataService: MessageContentDataService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(
            param => {
                const page = param.get('id');
                const data = this.messageContentDataService.getMessageContentData(page);
                this.messageContentList = data ? data : new MessageContentList('无该页数据', []);
            }
        )
    }
}
