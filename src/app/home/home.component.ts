import { CadastroContatoBusiness } from './../business/contato.business';
import { ContatoComponent } from './../modal/cadastro-contato.component';
import { HttpClient } from '@angular/common/http';
import { Contato } from './../model/contato';
import { Component, NgModule, OnInit, AfterContentInit } from '@angular/core';
import {  MatDialog } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
@NgModule({
    imports: []
})

export class HomeComponent implements OnInit, AfterContentInit  {
    result: any;
    res: any;
    business: CadastroContatoBusiness;
    lista_contato: Contato;

    displayedColumns = ['id', 'nome', 'email', 'telefone', 'cep', 'endereco'];
    
    constructor(private http: HttpClient,  public dialog: MatDialog) {
        this.business = new CadastroContatoBusiness(http);
        this.lista_contato = {};
     }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        //this.dataSource.filter = filterValue;
    }

    open_cadastro(): void {
            const dialogRef = this.dialog.open(ContatoComponent, {
                height: '600px',
                width: '600px',
                disableClose: true
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
            });
        }

        ngOnInit() {
           this.business.doGetContatos().subscribe(
                data => this.lista_contato = data['contato']);
        }

        ngAfterContentInit () {
        }
}

