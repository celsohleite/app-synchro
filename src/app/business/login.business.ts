import { HttpClient, HttpParams } from '@angular/common/http';
export class LoginBusiness {

    constructor(private http: HttpClient) {}

    doLogarUsuario(usuario, senha) {
        const url = 'http://localhost:3000/api/usuario/';
        const parametro = new HttpParams().set('usuario', usuario).set('senha', senha).set('tipo', 'logon');

       return this.http.get(url, {params: parametro});
    }

}
