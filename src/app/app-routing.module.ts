import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>  import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'locations',
    loadChildren: () => import ('./locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: 'categories',
    loadChildren: () => import ('./categories/categories.module').then(m => m.CategoriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
