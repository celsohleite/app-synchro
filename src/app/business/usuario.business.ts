import { URL_REST } from './../const/url.const';
import { Usuario } from './../model/usuario';
import { NgModule, Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export class UsuarioBusiness {

    constructor(private http: HttpClient) { }

    doValidaUsuario(nome, email, usuario) {
        const parametro = new HttpParams().set('nome', nome).set('email', email).set('usuario', usuario).set('tipo', 'cadastro');
        return this.http.get(URL_REST._url_usuario, { params: parametro });
    }

    doSave(usuario: Usuario): void {
        const res = this.http.post(URL_REST._url_usuario, usuario)
            .subscribe(req => {
                console.log(req);
            }, error => {
                console.log('error' + error);
            });
    }


}

