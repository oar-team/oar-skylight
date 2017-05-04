import { Component } from '@angular/core';
import { OarApiService } from '../../shared/services/oar-api/oar-api.service';
import { Job } from '../../shared/services/oar-api/model/job';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'resources-page',
    templateUrl: './resources.html',
    providers: [OarApiService]
})

export class ResourcesComponent {

    data: any;

    constructor(
        private apiService: OarApiService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.apiService.getResources().subscribe(
            data => this.loadResources(data),
            error => console.log(error)
        );
    }

    loadResources(json: any) {
        this.data = json.items;
    }
}
