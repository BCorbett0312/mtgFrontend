import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetcardsComponent } from './getcards/getcards.component';
import { AddcardsComponent } from './addcards/addcards.component';
import { AutocompleteService} from './services/autocomplete.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    GetcardsComponent,
    AddcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [AutocompleteService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
