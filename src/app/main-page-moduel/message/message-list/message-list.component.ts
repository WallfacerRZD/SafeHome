import {Component, OnInit} from '@angular/core';
import {Message} from "../message";
import {MessageContentDataService} from "../../../message-content-data.service";
import {SearchService} from "../../../search.service";

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
    messageList: Message[] = [];

    constructor(private messageContentDataService: MessageContentDataService,
                private search: SearchService) {
    }

    ngOnInit() {
        this.search.searchValue$.asObservable().subscribe(
            value => {
                if (value) {
                    this.messageList = Object.keys(this.messageContentDataService.messageContentData)
                        .filter(key => this.messageContentDataService.messageContentData[key]
                            .title.indexOf(value) !== -1
                        )
                        .map(key =>
                            new Message(
                                'assets/img/messageIcon.png',
                                this.messageContentDataService.messageContentData[key].title,
                                '',
                                key)
                        );

                } else {
                    this.messageList = Object.keys(this.messageContentDataService.messageContentData)
                        .map(key =>
                            new Message(
                                'assets/img/messageIcon.png',
                                this.messageContentDataService.messageContentData[key].title,
                                '',
                                key)
                        );
                }
            }
        );
        this.messageList = Object.keys(this.messageContentDataService.messageContentData)
            .map(key =>
                new Message(
                    'assets/img/messageIcon.png',
                    this.messageContentDataService.messageContentData[key].title,
                    '',
                    key)
            );
    }

}
