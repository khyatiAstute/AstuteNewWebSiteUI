import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CarouselModule } from 'primeng/carousel';
@NgModule({
  declarations: [AppComponent, HomeComponent, AboutusComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    MatTabsModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
