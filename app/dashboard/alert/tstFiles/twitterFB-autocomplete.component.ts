import {Component,OnInit} from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'autocomplete-twFB',
  templateUrl: 'app/dashboard/alert/tstFiles/twitterFB-autocomplete.component.html',
})
export class AutocompleteTWFB implements OnInit{
  stateCtrl: FormControl;
  filteredStates: any;
  user: FormGroup;
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

 ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl(''),
      pass: new FormControl('')

    })
  }

  //onSubmit({ value, valid }: { value: User, valid: boolean })

  onSubmit() {
    console.log(this.user.value, this.user.valid);
  }

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.states;
  }

}

export class User
{
    name:string;
    pass:string;
}