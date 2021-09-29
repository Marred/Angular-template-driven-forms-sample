import { Hero } from './hero.model';
import { Like } from './like.model';

export interface Data {
  heroes: Hero[];
  likes: Like[];

  currentHeroId: number;
  selectedUi: string;
}

export interface HeroAndLikes {
    hero: Hero;
    likes: Like[];
}
