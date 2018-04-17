import { AlertComponent } from './../modal/alert.component';
import { Usuario } from './../model/usuario';
import { URL_REST } from './../const/url.const';
import { Component, NgModule, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CadastroUsuarioComponent } from '../modal/cadastro-usuario.component';
import { LoginBusiness } from '../business/login.business';
import { isUndefined } from 'util';

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
    business: LoginBusiness;
    result: any;
    res: any;
    descricao: any;
    nome_usuario_logado: string;
    data_session: string;

    constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) {
        this.business = new LoginBusiness(http);
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CadastroUsuarioComponent, {
            height: '600px',
            width: '600px',
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('fechar dialog de mensagem');
        });

    }

    efetuar_login(usuario, senha) {
        console.log(usuario, senha);
        this.business.doLogarUsuario(usuario, senha).subscribe(data => this.valida_usuario(data['usuario'][0]));
    }

    valida_usuario(nome_usuario: string) {

        try {
            if (nome_usuario['nome'] !== '') {
                this.data_session = nome_usuario['_id'];
                sessionStorage.setItem('id_usuario', this.data_session );
                this.router.navigate(['/home']);
            }
        } catch (e) {
            const dialogRef = this.dialog.open(AlertComponent, {
                height: '170px',
                width: '300px',
                disableClose: true,
                data: {descricao: 'Usuario ou senha inválido.'}
            });

            dialogRef.afterClosed().subscribe(result => console.log('modal fechado.'));
        }
    }


    ngOnInit() {
    }

}
