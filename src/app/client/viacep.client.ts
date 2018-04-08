
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Endereco } from '../model/endereco';

@Injectable()
export class ViaCepClient {

    cepUrl = 'https://viacep.com.br/ws/13052412/json/';

    constructor(private _http: HttpClient) {
    }

    getEndereco() {
        /*
        return this._http.get<any[]>(this.cepUrl).subscribe(
            data => {
                console.log(data);
            }, (err: HttpErrorResponse) => {
                console.log(err);
            }
        );*/
    }
}
