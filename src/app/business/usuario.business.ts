import { Usuario } from './../model/usuario';
import { NgModule, Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export class UsuarioBusiness {

    constructor(private http: HttpClient) {}

    doValidaUsuario(nome, email, usuario) {
        const url = 'http://localhost:3000/api/usuario/';
        const parametro = new HttpParams().set('nome', nome).set('email', email).set('usuario', usuario).set('tipo', 'cadastro');

       return this.http.get(url, {params: parametro});
    }

     doSave(usuario: Usuario): void {
        const url = 'http://localhost:3000/api/usuario/';

            const res = this.http.post(url, usuario )
            .subscribe(req => {
                console.log(req);
            }, error => {
                console.log('error' + error);
            });
        }


}

