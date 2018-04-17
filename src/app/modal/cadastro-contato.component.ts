import { Endereco } from './../model/endereco';
import { HomeComponent } from './../home/home.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Component, NgModule, OnInit, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CadastroContatoBusiness } from './../business/contato.business';
import { Contato } from './../model/contato';
import { FormControl, Validators } from '@angular/forms';
import { AlertComponent } from './alert.component';

@Component({
    moduleId: module.id,
    selector: 'app-contato',
    templateUrl: 'cadastro-contato.component.html',
    styleUrls: ['cadastro-contato.component.css']
})
@NgModule({
    imports: []
})
export class ContatoComponent implements OnInit {
    contato: Contato;
    endereco: Endereco;
    business: CadastroContatoBusiness;
    home: HomeComponent;

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    nomeFormControl = new FormControl('', [
        Validators.required
    ]);

    telefoneFormControl = new FormControl('', [
        Validators.required
    ]);

    cepFormControl = new FormControl('', [
        Validators.required
    ]);

    enderecoFormControl = new FormControl('', [
        Validators.required
    ]);

    cidadeFormControl = new FormControl('', [
        Validators.required
    ]);

    ufFormControl = new FormControl('', [
        Validators.required
    ]);

    constructor(private http: HttpClient, public dialogRef: MatDialogRef<ContatoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
        this.contato = {};
        this.endereco = {};
        this.business = new CadastroContatoBusiness(http);
    }

    save_onClick() {
        if (this.contato.nome !== undefined
            && this.contato.email !== undefined
            && this.contato.telefone !== undefined
            && this.contato.cep !== undefined
            && this.contato.endereco !== undefined) {

            this.contato.id_usuario = sessionStorage.getItem('id_usuario');
            this.business.doSave(this.contato);
            this.contato = {};
            this.dialogRef.close();

        } else {

            const dialogRef = this.dialog.open(AlertComponent, {
                height: '210px',
                width: '300px',
                disableClose: true,
                data: { descricao: 'Há campos obrigatórios a serem preenchidos.' }
            });

            dialogRef.afterClosed().subscribe(result => console.log('modal fechado.'));
        }
    }


    preenche_cep(cep) {
        cep = cep.replace(/\D/g, '');
        if (cep !== '') {
            this.business.doGetEndereco(cep).subscribe(data => this.carrega_campos(data));
        }
    }

    carrega_campos(info_cep) {
        this.contato.endereco = info_cep['logradouro'];
        this.contato.cidade = info_cep['localidade'];
        this.contato.uf = info_cep['uf'];
    }

    ngOnInit() {
    }


}
