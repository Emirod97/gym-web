import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../app/models/member.model'

@Injectable()
export class Service{

    BASE_URL = "http://localhost:8080";
    
    constructor(private http: HttpClient) { 
    
    }

    getMembers() {
        return this.http.get(this.BASE_URL + "/members");
    }

    getAttendances(){
        return this.http.get(this.BASE_URL + "/attendances");
    }

    saveMember(member: Member){
        return this.http.post(this.BASE_URL + "/members/create",member);
    }

    getAttendancesByMemberId(memberId){
        return this.http.get(this.BASE_URL + "/members/"+ memberId +"/attendances");
    }

    getAttendancesByDate(date){
        return this.http.get(this.BASE_URL + "/attendances/by-date?date=" + date);
    }

    getAttendancesByMemberIdAndDate(memberId, date){
        return this.http.get(this.BASE_URL + "/attendances/by-member-id-and-date?id=" + memberId +"&date=" +date);
    }

    isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return JSON.stringify(obj) === JSON.stringify({});
    }
    
}