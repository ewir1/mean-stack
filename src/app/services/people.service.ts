import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Person } from "../models/person";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  selectedPerson: Person;
  people: Person[];
  private urlApi = 'https://api-mean-angular.herokuapp.com/api/mean';

  constructor(private http: HttpClient) {
    this.selectedPerson = new Person();
  }

  getPeople() {
    return this.http.get(this.urlApi);
  }

  addPerson(person: Person) {
    return this.http.post(this.urlApi, person);
  }

  getPerson(_id: string) {
    return this.http.get(this.urlApi + `/${_id}`);
  }

  updatePerson(person: Person) {
    return this.http.put(this.urlApi + `/${person._id}`, person);
  }

  deletePerson(_id: string) {
    return this.http.delete(this.urlApi + `/${_id}`);
  }
}
