import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './shared/component/detail/detail.component';
import { DetailHouseComponent } from './shared/component/detail-house/detail-house.component';
import { CronologyPageComponent } from './pages/cronology-page/cronology-page.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SimplebarAngularModule } from 'simplebar-angular';



@NgModule({
  declarations: [
    AppComponent,
    HousesPageComponent,
    CharactersPageComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    DetailComponent,
    DetailHouseComponent,
    CronologyPageComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SimplebarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
