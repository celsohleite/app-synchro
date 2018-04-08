import { Endereco } from './../model/endereco';
import { ViaCepClient } from './../client/viacep.client';
import {Component, NgModule, Inject,  OnInit, Input, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-usuario',
    templateUrl  : 'cadastro-usuario.component.html',
    styleUrls : [ 'cadastro-usuario.component.css']
})
@NgModule({
    imports: [
    ]
})
export class CadastroUsuarioComponent implements OnInit {
    endereco: Array<any>;

    constructor() {
    }


    ngOnInit() {
       // this.getEndereco();
    }


    getEndereco() {
        //this.viaCep.getEndereco();
    }

}
