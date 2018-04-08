import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//
import { LoginComponent } from './acesso/login.component';
import { HomeComponent } from './home/home.component';

import { Route, ModuleWithProviders } from '@angular/compiler/src/core';
import { CadastroUsuarioComponent } from './modal/cadastro-usuario.component';

const APP_ROUTING: Routes = [
{path : '' , component : LoginComponent },
{path : 'home' , component : HomeComponent },
{path : 'login' , component : LoginComponent },
{path : 'cadastro' , component : CadastroUsuarioComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTING);
