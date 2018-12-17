import {Component, OnInit} from '@angular/core';
import {RoleInfo} from "./RoleInfo";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleInfoService} from "./role-info.service";
import {Location} from "@angular/common";

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
    info: RoleInfo = new RoleInfo('test', 'test', 'test', 'test', 'test',);

    constructor(private activatedRoute: ActivatedRoute,
                private location: Location,
                private infoService: RoleInfoService) {
    }

    goBack() {
        this.location.back();
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(
            param => {
                this.info = this.infoService.getInfoByName(param.get('name'))
            }
        )
    }

}
