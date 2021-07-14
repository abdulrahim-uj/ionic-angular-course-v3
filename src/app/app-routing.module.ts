import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipies',
    pathMatch: 'full'
  },
  {
    path: 'recipies',
    children: [
      {
        path: '',
        //m represents Module
        loadChildren: () => import('./recipies/recipies.module').then( m => m.RecipiesPageModule)
      },
      {
        path: ':recipieId',   //dynamic segment recipieId
        loadChildren: () => import('./recipies/recipie-detail/recipie-detail.module').then(
          m => m.RecipieDetailPageModule
        )
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
