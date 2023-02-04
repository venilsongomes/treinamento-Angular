import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRutingModule } from './app-ruting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BarraPesquisaComponent } from "./barra-pesquisa/barra-pesquisa.component";
import { BoiComponent } from './boi/boi.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BoiComponent,
        BarraPesquisaComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppRutingModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        FormsModule
       
    ]
})
export class AppModule { }
