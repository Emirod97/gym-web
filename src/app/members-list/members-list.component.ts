import { Service } from './../../services/Service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users-list',
    templateUrl: './members-list.component.html',
    styleUrls: ['./members-list.component.css']
})
export class MemberListComponent implements OnInit {
    members;

    constructor(public service: Service) {
         
    }

    ngOnInit() {
        this.getMembers();
    }

    getMembers(){
        this.service.getMembers().subscribe(
            (data)=>{
               this.members = data;
            },
            (error)=>{
               console.log(error);
            }
        )
    }
}
