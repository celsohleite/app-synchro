import { AlertComponent } from './alert.component';
import { HttpClient } from '@angular/common/http';

import { UsuarioBusiness } from './../business/usuario.business';
import { Usuario } from './../model/usuario';
import { Component, NgModule, OnInit, Input, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

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
    is_hab_btn: boolean;
    descricao_tela: string;

    nomeFormControl = new FormControl('', [
        Validators.required
    ]);

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    usuarioFormControl = new FormControl('', [
        Validators.required
    ]);

    senhaFormControl = new FormControl('', [
        Validators.required
    ]);

    cfSenhaFormControl = new FormControl('', [
        Validators.required
    ]);

    constructor(private http: HttpClient, public dialog: MatDialog) {
        this.usuario = {};
        this.is_hab_btn = true;
        this.business = new UsuarioBusiness(http);
    }

    save_onClick() {

        if (this.usuario.senha !== this.cf_senha) {
            const dialogRef = this.dialog.open(AlertComponent, {
                height: '210px',
                width: '300px',
                disableClose: true,
                data: { descricao: 'Senha não confere, informe novamente.' }
            });

            dialogRef.afterClosed().subscribe(result => {

                this.cf_senha = undefined;
                this.usuario.senha = undefined;

                console.log('fechar dialog de mensagem');
            });

        } else {

            if (this.usuario.nome !== undefined
                && this.usuario.email !== undefined
                && this.usuario.usuario !== undefined
                && this.usuario.senha !== undefined) {

                this.business.doSave(this.usuario);
                this.usuario = {};
                this.cf_senha = '';
                this.dialog.closeAll();

            } else {

                const dialogRef = this.dialog.open(AlertComponent, {
                    height: '210px',
                    width: '300px',
                    disableClose: true,
                    data: { descricao: 'Há campos obrigatórios a serem preenchidos.' }
                });

                dialogRef.afterClosed().subscribe(result => {
                    console.log('fechar dialog de mensagem');
                });

            }
        }
    }

    check_nome_blur(nome, email, usuario) {
        this.business.doValidaUsuario(nome, email, usuario).subscribe(data => this.valida_usuario(data['usuario'][0]));
    }

    check_email_blur(nome, email, usuario) {
        this.business.doValidaUsuario(nome, email, usuario).subscribe(data => this.valida_usuario(data['usuario'][0]));
    }

    check_usuario_blur(nome, email, usuario) {
        this.business.doValidaUsuario(nome, email, usuario).subscribe(data => this.valida_usuario(data['usuario'][0]));
    }

    valida_usuario(usuario_cadastrado: string) {

        try {
            if (usuario_cadastrado !== undefined) {
                const dialogRef = this.dialog.open(AlertComponent, {
                    height: '170px',
                    width: '300px',
                    disableClose: true,
                    data: { descricao: 'Informação já cadastrada, verifique e digite um novo registro.' },

                });

                dialogRef.afterClosed().subscribe(result => {
                    this.usuario.usuario = undefined;
                    console.log('fechar dialog de mensagem');
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    ngOnInit() {
    }

}
