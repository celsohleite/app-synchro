import { URL_REST } from './../const/url.const';
import { Contato } from './../model/contato';
import { Usuario } from './../model/usuario';
import { NgModule, Component, OnInit, Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class CadastroContatoBusiness {

    contatos: Contato;

    constructor(private http: HttpClient) {
        this.contatos = {};
    }

    doSave(contato: Contato): void {
        const res = this.http.post(URL_REST._url_contato, contato)
            .subscribe(req => {
                console.log(req);
            }, error => {
                console.log('error' + error);
            });
    }

    doGetContatos() {
        const url = URL_REST._url_contato;
        const parametro = new HttpParams().set('id_usuario', sessionStorage.getItem('id_usuario'));

        return this.http.get(url, { params: parametro });
    }

    doGetEndereco(cep) {
        const url = 'https://viacep.com.br/ws/' + cep + '/json/';
        return this.http.get(url);
    }
}

