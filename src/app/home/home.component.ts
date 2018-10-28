import { CadastroContatoBusiness } from './../business/contato.business';
import { ContatoComponent } from './../modal/cadastro-contato.component';
import { HttpClient } from '@angular/common/http';
import { Contato } from './../model/contato';
import { Component, NgModule, OnInit, AfterContentInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
@NgModule({
    imports: []
})

export class HomeComponent implements OnInit, AfterContentInit {
    result: any;
    res: any;
    business: CadastroContatoBusiness;
    lista_contato: Contato[];
    dataSource: any;


    displayedColumns = ['id', 'nome', 'email', 'telefone', 'cep', 'endereco', 'cidade', 'uf'];
    constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) {
        this.business = new CadastroContatoBusiness(http);
        this.lista_contato = [{}];
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    open_cadastro(): void {
        const dialogRef = this.dialog.open(ContatoComponent, {
            height: '600px',
            width: '600px',
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe(result => {
            setTimeout(() => {
                this.load_lista_contato();
            }, 1000);
            console.log('The dialog was closed');
        });
    }

    sair_click() {
        sessionStorage.removeItem('id_usuario');
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        this.load_lista_contato();
        console.log('session : ', sessionStorage.getItem('id_usuario'));
    }

    ngAfterContentInit() {
    }

    load_lista_contato() {
        this.business.doGetContatos().subscribe(
            data => this.data_source(data['contato']));
    }

    data_source(contatos: Contato[]) {
        this.dataSource = new MatTableDataSource(contatos);
    }
}

