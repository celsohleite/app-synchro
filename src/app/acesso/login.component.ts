import { Component, NgModule, OnInit, Inject } from '@angular/core';
import { Usuario } from '../model/usuario';
import { AcessoBusiness } from '../business/acesso.business';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CadastroUsuarioComponent } from '../modal/cadastro-usuario.component';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

@NgModule({
    imports: [
        AcessoBusiness
    ]
})
export class LoginComponent {

    acesso?: AcessoBusiness;
    results: string[];
    user: Usuario;

    constructor(private http: HttpClient,  public dialog: MatDialog) {
        this.acesso = new AcessoBusiness(http);
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CadastroUsuarioComponent, {
            height: '650px',
            width: '600px',
            data: {
                animal: 'panda'
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });

    }

    /*
    doAcesso() {
        this.acesso.restUsuario();
    }
    */
}
