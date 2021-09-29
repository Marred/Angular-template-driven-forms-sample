import { Hero } from '../models/hero.model';
import { Data } from '../models/data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Like } from 'src/app/models/like.model';

@Injectable({providedIn: 'root'})
export class DataService {
    private cache = new BehaviorSubject<Data>(this.createDemoData());

    currentHeroAndLikes$ = this.cache.pipe(
        distinctUntilChanged((p, c) => 
        p.heroes === c.heroes 
        && p.likes === c.likes
        && p.currentHeroId === c.currentHeroId
        && p.selectedUi === c.selectedUi),
        map(data => ({
            hero: data.heroes.find(hero => hero.id === data.currentHeroId),
            likes: data.likes.filter(like => like.heroId === data.currentHeroId)
        })));
    )

    constructor() { }
    
    createDemoData(): Data {
        return {
            heroes: new Array<Hero>(),
            likes: new Array<Like>(),
            currentHeroId: 0,
            selectedUi: '',
        };
    }
}
