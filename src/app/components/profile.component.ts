import { Component } from '@angular/core';
import { GithubServices } from '../services/github.service'
@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`,
})
export class ProfileComponent {
    user: any;
    repos: any[];
    username: string;

    constructor(private _githubService: GithubServices) {
        this.user=false;
        // this._githubService.getUser().subscribe(user => {
        //     console.log(user);
        //     this.user = user;
        // });
        // this._githubService.getRepos().subscribe(repos => {
        //     console.log(repos, "in seconds");
        //     this.repos = repos;
        // });
    }

    searchUser() {
        this._githubService.updateUser(this.username);

        this._githubService.getUser().subscribe(user => {
            this.user = user;
        });
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });

    }
}
