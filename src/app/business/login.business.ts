import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_REST } from '../const/url.const';
export class LoginBusiness {

    constructor(private http: HttpClient) { }

    doLogarUsuario(usuario, senha) {
        const parametro = new HttpParams().set('usuario', usuario).set('senha', senha).set('tipo', 'logon');
        return this.http.get(URL_REST._url_usuario, { params: parametro });
    }

}
