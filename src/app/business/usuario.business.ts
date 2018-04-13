import { Usuario } from './../model/usuario';
import { NgModule, Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class UsuarioBusiness {

    constructor(private http: HttpClient) {}

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

