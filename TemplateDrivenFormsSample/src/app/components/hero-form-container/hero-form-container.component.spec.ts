import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormContainerComponent } from './hero-form-container.component';

describe('HeroFormContainerComponent', () => {
  let component: HeroFormContainerComponent;
  let fixture: ComponentFixture<HeroFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
