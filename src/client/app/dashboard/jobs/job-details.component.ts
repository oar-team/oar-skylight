import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { OarApiService } from '../../shared/oar-api/oar-api.service';
import { Job } from '../../shared/oar-api/model/job';
import { Link } from '../../shared/oar-api/model/link';

@Component({
    moduleId: module.id,
    selector: 'job-details',
    templateUrl: './job-details.html',
    providers: [OarApiService]
})

export class JobDetails {
    id: number;
    job: Job;
    buttonState: Number;
    messageButton = "Display details";

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private apiService: OarApiService
    ) {
        this.job = new Job();
        this.buttonState = 0;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
        });


    }


    /*
    *    Récupère le json d'un job
    */
    getJob(id: string) {
        let jsonJob: any;

        this.apiService.getJob(id)
            .subscribe(
            data => this.setJob(data),
            error => console.log(error)
            );
    }

    /*
    *  Populate job with json
    */
    setJob(json: any) {
        this.job = new Job().deserialize(json);
    }

    loadDetails() {

        if (this.buttonState == 0) {
            this.buttonState = 1;
            this.messageButton = "Hide Details";
            this.getJob(this.id.toString());
        } else {
            this.buttonState = 0;
            this.messageButton = "Display details";
            this.job = new Job();
        }
    }

    onClickLink(link: Link) {

        console.log('route : ' + link.href);
    }

}
