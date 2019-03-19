import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { Person } from 'src/app/models/person';

declare var M: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  })
export class ListComponent implements OnInit {
  loading = true;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      this.getListPeople();
    }, 3000);
  }

  getListPeople() {
    this.peopleService.getPeople().subscribe((res) => {
      this.peopleService.people = res as Person[];
      // console.log(res);
    });
  }

  deletePerson(_id: string) {
    this.peopleService.deletePerson(_id).subscribe((res) => {
      this.getListPeople();
      M.toast({ html: 'Deleted Successfuly' });
    });
  }
}
