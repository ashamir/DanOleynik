import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {PersonInfoViewModel} from '../../models/personInfoViewModel';



@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {
  private _active: boolean;
  @Input() personInfoViewModel: PersonInfoViewModel;


  @Output()
  activateInfo: EventEmitter<Object> = new EventEmitter<Object>();


  setMyStyles() {
    const bg = this.personInfoViewModel.backgroundPosition;
    const styles = {
      'background-position': this.personInfoViewModel.isActive ? `${bg.left}px ${bg.topActive}px ` : `${bg.left}px ${bg.top}px `
    };
    return styles;
  }
  setEnter() {
    this.activateInfo.emit({
      personInfoViewModel : this.personInfoViewModel
    });
  }
  constructor() { }

  ngOnInit() {
    if (this.personInfoViewModel.isActive) {
      this.setEnter();
    }
  }

}
