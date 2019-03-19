import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person';

 declare var M: any;

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss'],
  })
export class EditPersonComponent implements OnInit {
  private person: Person = {
    _id: '',
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    position: '',
    facebook: '',
    twitter: '',
    linkedin: '',
  };

  loading = true;

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) {
    setTimeout(() => {
      this.loading = false;
      this.route.params.subscribe((paramsPers) => {
        this.person._id = paramsPers.id;

        if (this.person._id !== 'person') {
          this.peopleService
            .getPerson(this.person._id)
            .subscribe((person: any) => (this.person = person));
        }
      });
    }, 3000);
  }

  ngOnInit() {}

  savePerson() {
    console.log(this.person);
    this.peopleService.updatePerson(this.person).subscribe(
      (data) => {
        console.log(data);
        M.toast({ html: 'Updated Successfuly' });
      },
      error => console.error(error),
    );
  }
}
