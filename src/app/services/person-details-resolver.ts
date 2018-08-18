import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {PersonViewModel} from '../models/personViewModel';
import {PersonsService} from './persons.service';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsResolver implements Resolve<PersonViewModel> {

  constructor(private personService: PersonsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PersonViewModel> {
    const id = route.paramMap.get('id');
    const person = this.personService.getPersonById(id);
    if (person != null) {
      return of(person);
    } else {
      this.router.navigate(['dashboard']);
      return of(null);
    }
  }
}
