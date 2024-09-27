import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { MenuComponent } from './components/menu/menu.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { HttpClientModule } from '@angular/common/http';

import { CardsliderComponent } from './components/cardslider/cardslider.component';
import { ReactiveFormsModule } from '@angular/forms';


register();

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactModalComponent,
    CustomModalComponent,
    CardsliderComponent
   
  ],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule ,
     HttpClientModule,
     ReactiveFormsModule
     
    ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
