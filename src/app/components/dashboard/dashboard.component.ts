import {Component, NgZone, OnInit} from '@angular/core';
import {PersonsService} from '../../services/persons.service';
import {PersonViewModel} from '../../models/personViewModel';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(zone: NgZone,
              private personsService: PersonsService) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
    this.personsService.getPersons();
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  get persons(): PersonViewModel[] {
    return this.personsService.personViewModel;
  }
}
