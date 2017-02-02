import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { OarApiService } from '../../shared/oar-api/oar-api.service';
import { JobsStore } from '../../shared/stores/jobs-store';
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
        private apiService: OarApiService,
        private jobStore: JobsStore,
    ) {
        this.job = new Job();
        this.buttonState = 0;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.job = this.jobStore.getJob(this.id.toString());
        });
    }


    /**
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

    /**
    *  Populate job with json
    */
    setJob(json: any) {
        console.log(json);
        this.job = new Job().deserialize(json);
        console.log(this.job);
    }

    getDetails() {

        if (this.buttonState == 0) {
            this.buttonState = 1;
            this.messageButton = "Hide Details";
            this.getJob(this.id.toString());
        } else {
            this.buttonState = 0;
            this.messageButton = "Display details";
        }
    }

    onClickLink(link: Link) {
        console.log('route : ' + link.href);
    }

}
