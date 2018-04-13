import { Contato } from './../model/contato';
import { Usuario } from './../model/usuario';
import { NgModule, Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class CadastroContatoBusiness {

    contatos: Contato;

    constructor(private http: HttpClient) {
        this.contatos = {};
    }

     doSave(contato: Contato): void {
        const url = 'http://localhost:3000/api/contato/';

            const res = this.http.post(url, contato )
            .subscribe(req => {
                console.log(req);
            }, error => {
                console.log('error' + error);
            });
        }

        doGetContatos() {
            const url = 'http://localhost:3000/api/contato/';
            return this.http.get(url);
        }
}

