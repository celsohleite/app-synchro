import { URL_REST } from './../const/url.const';
import { Component, NgModule, OnInit, Inject } from '@angular/core';
import { Usuario } from '../model/usuario';
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
    ]
})
export class LoginComponent implements OnInit {

    results: string[];
    user: Usuario;

    result: any;
    res: any;

    constructor(private http: HttpClient,  public dialog: MatDialog) {
       // this.acesso = new AcessoBusiness(http);
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CadastroUsuarioComponent, {
            height: '600px',
            width: '600px',
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });

    }

    restUsuario() {
        this.res = this.http.get<any>(URL_REST._url_viacep).subscribe(data => {
            console.log('URL :' + URL_REST._url_viacep);
            this.result = data['result'];
            console.log('retorno : ' + data.logradouro);
        }, error => {
            console.log('error');
        });
    }

    ngOnInit() {
        this.restUsuario();
     }

}
