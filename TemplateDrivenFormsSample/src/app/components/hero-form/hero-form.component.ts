import { HeroAndLikes } from './../../models/data.model';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Input() vm: HeroAndLikes;
  @Input() selectedUi = '0';

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
  @Output() selectedUiChanged = new EventEmitter<string>();

  @ViewChild('heroForm') form: NgForm;

  addHero() {

  }
}
