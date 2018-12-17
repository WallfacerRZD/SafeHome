import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {RoleInfoService} from "../../../info/role-info.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList:Contact[] = [];

  constructor(private roleInfoService: RoleInfoService) { }

  ngOnInit() {
      for (const i in this.roleInfoService.rolesInfo) {
          const info = this.roleInfoService.rolesInfo[i];
          this.contactList.push(new Contact(
              'assets/img/role/' + info['name'] + '.png',
              info['name'],
              info['motto'],
              info['name']
          ));
      }
  }

}
