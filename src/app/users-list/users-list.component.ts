import { Service } from './../../services/Service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    members;
    attendances;
    studentNumber: number;
    date;
    isFilters: boolean = false;

    constructor(public service: Service) {
    }

    ngOnInit() {
        this.getAllAttendances();
    }

    getAllAttendances() {
        this.service.getAttendances().subscribe(
            (data) => {
              this.setAttendances(data);
              this.clearFields();
            },
            error => console.log(error)
        );
    }

    setAttendances(attendances) {
        this.attendances = attendances;
        console.log(this.attendances);
    }

    filter() {
        console.log("date: ", this.date);
        console.log("studentNumber: ", this.studentNumber);

        if (!this.studentNumber && !this.date) {
            this.getAllAttendances();
        }

        else if (this.studentNumber && !this.date) {
            this.service.getAttendancesByMemberId(this.studentNumber).subscribe(
                (data) => {
                  this.setAttendances(data);
                  this.isFilters = true;
                },
                (error) => console.log(error)
            )
        }

        else if (!this.studentNumber && this.date){
            this.service.getAttendancesByDate(this.date).subscribe(
              (data)=> {
                this.setAttendances(data);
                this.isFilters = true;
              },
              (error)=> console.log(error)
            )    
        }

        else if(this.studentNumber && this.date){
          this.service.getAttendancesByMemberIdAndDate(this.studentNumber, this.date).subscribe(
            (data) => {
              this.setAttendances(data);
              this.isFilters = true;
            },
            (error) => console.log(error)
          )
        }
    }

    removeFilters(){
      this.getAllAttendances();
      this.clearFields();
    }

    clearFields(){
      this.isFilters = false;   
      this.date = undefined;
      this.studentNumber = undefined;
    }

}
