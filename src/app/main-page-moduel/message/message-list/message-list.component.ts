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
                    const matchMessage: Message[] = [];
                    for (const i in this.messageContentDataService.messageContentData) {
                        const data = this.messageContentDataService.messageContentData[i];
                        if (data.title.indexOf(value) !== -1) {
                            matchMessage.push(new Message(
                                'assets/img/messageIcon.png',
                                data.title,
                                '               ',
                                i
                            ));
                        }
                    }
                    this.messageList = matchMessage;
                } else {
                    const allMessage: Message[] = [];
                    for (const i in this.messageContentDataService.messageContentData) {
                        allMessage.push(new Message(
                            'assets/img/messageIcon.png',
                            this.messageContentDataService.messageContentData[i].title,
                            '                   ',
                            i
                        ))
                    }
                    this.messageList = allMessage;
                }
            }
        );
        for (const i in this.messageContentDataService.messageContentData) {
            this.messageList.push(new Message(
                'assets/img/messageIcon.png',
                this.messageContentDataService.messageContentData[i].title,
                '                      ',
                i
            ))
        }
    }

}
