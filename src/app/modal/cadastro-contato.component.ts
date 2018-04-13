import { Component, NgModule, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CadastroContatoBusiness } from './../business/contato.business';
import { Contato } from './../model/contato';


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
    business: CadastroContatoBusiness;

    constructor(private http: HttpClient) {
            this.contato = {};
            this.business = new CadastroContatoBusiness(http);
    }

    save_onClick() {
        this.business.doSave(this.contato);
        this.contato = {};
    }

    ngOnInit() {
    }

}
