import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
/*
import { Hero }         from './hero';
import { HeroService }  from './hero.service';*/
@Component({
  selector: 'hero-detail',
  //templateUrl: './hero-detail.component.html',
  //styleUrls: [ './hero-detail.component.css' ]
})
export class AlertDetailComponent  {
  //hero: Hero;
/*
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
   getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  goBack(): void {
    this.location.back();
  }*/
}
