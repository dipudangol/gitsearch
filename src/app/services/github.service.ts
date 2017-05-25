import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubServices {
    private username: string;
    private client_id = '201c85ca77c5801b4c5c';
    private client_secret = '364c0e01fc1cf14343ce2b2ad3a1135444560c2e';

    constructor(private _http: Http) {
        console.log("github services");
        this.username = "dipudangol";
    }

    getUser() {
        return this._http.get("http://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
            .map(res => res.json());
    }
    getRepos() {
        return this._http.get("http://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
            .map(res => res.json());
    }
    updateUser(username:string){
        this.username=username;

    }
}