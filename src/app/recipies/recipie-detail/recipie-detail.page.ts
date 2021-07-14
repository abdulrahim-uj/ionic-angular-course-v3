import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipiesService } from '../recipies.service';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.page.html',
  styleUrls: ['./recipie-detail.page.scss'],
})

export class RecipieDetailPage implements OnInit {

  loadedRecipie: Recipie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipiesService: RecipiesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMapObj => {
                        //this recipieId same as app-routing.module' path mentioned.
      if(!paramMapObj.has('recipieId')) {
        //redirect
        return;
      }
                                    //this recipieId same as app-routing.module' path mentioned.
      const recipieID = paramMapObj.get('recipieId');
      this.loadedRecipie = this.recipiesService.getRecipie(recipieID);
    });
  }

}
