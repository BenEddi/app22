import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Mention }         from './mention';
import { MentionService }  from './mention.service';
@Component({
  selector: 'mention-detail',
  templateUrl: 'app/mentions/mention-detail.component.html',
  styleUrls: [ 'app/mentions/mention-detail.component.css' ]
})
export class MentionDetailComponent  {
  mention: Mention;

  constructor(
    private mentionService: MentionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  /*ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.mentionService.getMention(params['ids']))
      .subscribe(mention => this.mention = mention);
  }
*/
  goBack(): void {
    this.location.back();
  }
}

