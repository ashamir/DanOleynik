import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {PersonViewModel} from '../../models/personViewModel';
import {PersonInfoViewModel} from '../../models/personInfoViewModel';


@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  _personViewModel: PersonViewModel;
  _title: string
  _value: string;

  infos: PersonInfoViewModel[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { personInfo: PersonViewModel }) => {
        this._personViewModel = data.personInfo;
        this.createPersonInfos();
      });
  }

  setInfo(event) {
    _.forEach(this.infos, vm => {
      vm.isActive = false;
    });
    event.personInfoViewModel.isActive = true;
    this._title = event.personInfoViewModel.title;
    this._value = event.personInfoViewModel.value;
  }

  get personImage(): string {
    return this._personViewModel.personInfo.picture.medium;
  }
  get personInfoTitle(): string {
    return this._title;
  }
  get personInfoValue(): string {
    return this._value;
  }

  private createPersonInfos() {
    this.infos = [];
    this._title = '';
    this._value = '';
    this.createNameInfo();
    this.createEmailInfo();
    this.createBirthdayInfo();
    this.createAddressInfo();
    this.createPhoneInfo();
    this.createPasswordInfo();
  }

  private createNameInfo() {
      this.infos.push( {
        title : `Hi, My name is`,
        value: `${this._personViewModel.personInfo.name.first} ${this._personViewModel.personInfo.name.last}`,
        label: 'name' ,
        isActive: true ,
        backgroundPosition: {
          left: '0',
          top: '-48',
          topActive: '-96'
        }
      });
  }

  private createEmailInfo() {
    this.infos.push( {
      title : `My email address is`,
      value: `${this._personViewModel.personInfo.email}`,
      label: 'email' ,
      isActive: false ,
      backgroundPosition: {
        left: '-68',
        top: '-48',
        topActive: '-96'
      }
    });
  }

  private createBirthdayInfo() {
    this.infos.push( {
      title : `My birthday is`,
      value: `${this._personViewModel.personInfo.dob.date}`,
      label: 'birthday' ,
      isActive: false ,
      backgroundPosition: {
        left: '-135',
        top: '-48',
        topActive: '-96'
      }
    });
  }

  private createAddressInfo() {
    this.infos.push( {
      title : `My address is`,
      value: `${this._personViewModel.personInfo.location.street}`,
      label: 'location' ,
      isActive: false ,
      backgroundPosition: {
        left: '-203',
        top: '-48',
        topActive: '-96'
      }
    });
  }

  private createPhoneInfo() {
    this.infos.push( {
      title : `My phone number is`,
      value: `${this._personViewModel.personInfo.cell}`,
      label: 'phone' ,
      isActive: false ,
      backgroundPosition: {
        left: '-270',
        top: '-48',
        topActive: '-96'
      }
    });
  }

  private createPasswordInfo() {
    this.infos.push( {
      title : `My password is`,
      value: `${this._personViewModel.personInfo.login.password}`,
      label: 'pass' ,
      isActive: false ,
      backgroundPosition: {
        left: '-338',
        top: '-48',
        topActive: '-96'
      }
    });
  }
}
