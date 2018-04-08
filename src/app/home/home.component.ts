import { Component, NgModule } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Usuario } from '../model/usuario';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
@NgModule({
    imports: []
})

export class HomeComponent {
    displayedColumns = ['id', 'nome', 'email', 'telefone', 'endereco'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
}

const ELEMENT_DATA: Usuario[] = [
    { id: 1, nome: 'celso henrique leite', email: 'celsohleite@gmail.com', telefone: '19 991623153', endereco: 'rua xpto' },
    { id: 2, nome: 'celso henrique ', email: 'celsohleite@gmail.com', telefone: '19 991623153', endereco: 'rua xpto' },
    { id: 3, nome: ' henrique leite', email: 'celsohleite@gmail.com', telefone: '19 991623153', endereco: 'rua xpto' },
    { id: 4, nome: 'celso leite', email: 'celsohleite@gmail.com', telefone: '19 991623153', endereco: 'rua xpto' }
];
