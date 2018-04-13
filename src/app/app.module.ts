import { ContatoComponent } from './modal/cadastro-contato.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { LoginComponent } from './acesso/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './modal/cadastro-usuario.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    MatRadioModule,
    HttpClientModule,
    RouterModule,
    routing
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


