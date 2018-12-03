import { Service } from './../../services/Service';
import { SportScholarship } from './../models/sportscholarship.model';
import { Member } from './../models/member.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  member: Member= new Member();
  sportScholarship: SportScholarship = new SportScholarship;
  errorMessage: string = "";
  
  constructor(public service : Service) {
    this.initMember();
  }

  ngOnInit() {
  }

  initMember(){
    this.member = new Member();
    this.sportScholarship = new SportScholarship();
    this.member.sportScholarship = this.sportScholarship;
  }

  register(){

    this.errorMessage = "";

    let member = this.getRequest(this.member);

    if(this.service.isEmpty(this.sportScholarship))member.sportScholarship = null;

    this.service.saveMember(member).subscribe(
      (member)=> {
        this.initMember();
      },
      (error)=>{
        console.log(error.error.message);
        this.checkError(error.error.message);
      }
    )
  }

  getRequest(member){
    let memberRequest = {
      "id":member.id,
      "firstName":member.firstName,
      "lastName": member.lastName,
      "sportScholarship": member.sportScholarship
    }

    return memberRequest;
  }

  checkError(error){
    if(error.includes('A collection with cascade="all-delete-orphan')){
      this.setError("Otro usuario ya está registrado con esta matrícula");
    }else if(error.includes("JSON parse error: Cannot deserialize value of type `java.lang.Long`")){
      this.setError("La matrícula ingresada no es un número válido");
    }else if(error.includes("JSON parse error: Cannot deserialize value of type `float` from String")){
      this.setError("Porcentaje de beca no válido");
    }
  }

  setError(message){
    this.errorMessage = message;
  }

}
