import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {PersonInfo} from '../models/persons';
import {PersonViewModel} from '../models/personViewModel';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  personViewModel: PersonViewModel[] = null;
  private personsUrl = 'https://randomuser.me/api/?results=10&noinfo';
  constructor(private http: HttpClient) { }
  getPersons() {
    let i = 0;
    this.http.get(this.personsUrl).pipe(
      map( (persons: any) => {
        return _.map(persons.results, (person: PersonInfo) => {
          const result =  <PersonViewModel>{
            personInfo : person,
            votesNumber : 0
          };
          result.personInfo.id.value = (++i).toString();
          return result;
        });
      })
    ).subscribe(data => {
      this.personViewModel = data;
    });
  }
  getPersonById(id: string): PersonViewModel|null {
    const person = _.find(this.personViewModel, (p: PersonViewModel) => {
      return p.personInfo.id.value === id;
    });
    return person || null;
  }
}
