import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CalculateDoseComponent } from './calculate-dose/calculate-dose.component';
import { TypeOfBirdsComponent } from './type-of-birds/type-of-birds.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'calculate-dose', component: CalculateDoseComponent },
  { path: 'type-of-birds', component: TypeOfBirdsComponent },
  { path: 'farm-details', component: FarmDetailsComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
