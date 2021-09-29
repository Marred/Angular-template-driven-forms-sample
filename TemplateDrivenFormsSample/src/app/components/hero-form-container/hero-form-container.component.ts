import { HeroAndLikes } from './../../models/data.model';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { cloneDeep } from 'lodash-es';
@Component({
  selector: 'app-hero-form-container',
  templateUrl: './hero-form-container.component.html',
  styleUrls: ['./hero-form-container.component.scss'],
})
export class HeroFormContainerComponent {
  constructor(private dataService: DataService) {}

  currentHeroAndLikes$ = this.dataService.currentHeroAndLikes$;

  vm$ = this.currentHeroAndLikes$.pipe(
    map(data => cloneDeep(data));
  )

  save(vm: HeroAndLikes) {

  }

  close() {

  }

  selectedUiChanged(ui: string) {
    
  }
}
