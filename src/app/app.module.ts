import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GituserCardComponent } from './gituser-card/gituser-card.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpServiceService } from './service/http-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GituserCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbPaginationModule,
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
