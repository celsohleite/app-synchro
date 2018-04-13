import { HttpClient } from '@angular/common/http';

import { UsuarioBusiness } from './../business/usuario.business';
import { Usuario } from './../model/usuario';
import { Component, NgModule, OnInit, Input, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-usuario',
    templateUrl: 'cadastro-usuario.component.html',
    styleUrls: ['cadastro-usuario.component.css']
})
@NgModule({
    imports: []
})
export class CadastroUsuarioComponent implements OnInit {
    usuario: Usuario;
    cf_senha: string;
    business: UsuarioBusiness;

    constructor(private http: HttpClient) {
        this.usuario = {};
        this.business = new UsuarioBusiness(http);
    }

    save_onClick() {
        this.business.doSave(this.usuario);
        this.usuario = {};
        this.cf_senha = '';
    }

    ngOnInit() {
    }

}
