import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/models/person';

declare var M: any;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  loading = true;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  addNewPerson(form?: NgForm) {
    console.log(form.value);
    
    this.peopleService.addPerson(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          M.toast({ html: 'Saved Successfuly' });
        })  
  }

  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.peopleService.selectedPerson = new Person();
    }
  }

}