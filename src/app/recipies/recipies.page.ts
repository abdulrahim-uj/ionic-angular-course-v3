import { Component, OnInit } from '@angular/core';

import { RecipiesService } from './recipies.service';
import { Recipie } from './recipie.model';


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

  rs_recipies: Recipie[];

  constructor(private recipiesService: RecipiesService) { }

  ngOnInit() {
    this.rs_recipies = this.recipiesService.getAllRecipies();
  }

}
