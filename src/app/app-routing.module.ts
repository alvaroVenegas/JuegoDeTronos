import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CronologyPageComponent } from './pages/cronology-page/cronology-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { DetailHouseComponent } from './shared/component/detail-house/detail-house.component';
import { DetailComponent } from './shared/component/detail/detail.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'houses', component: HousesPageComponent},
  {path: 'characters/:nameCharacter', component: DetailComponent},
  {path: 'houses/:nameHouse', component: DetailHouseComponent},
  {path: 'cronology', component: CronologyPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
