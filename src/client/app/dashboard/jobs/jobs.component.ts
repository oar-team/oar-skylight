import { Component } from '@angular/core';
import { OarApiService } from '../../shared/oar-api/oar-api.service';
import { Job } from '../../shared/oar-api/model/job';
import { Link } from '../../shared/oar-api/model/link';
import { List} from 'immutable/';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/Rx";
import { Router } from '@angular/router';
import { JobsStore } from '../../shared/stores/jobs-store';
import { AuthenticationService } from '../../shared/auth/authentification.service';

@Component({
	moduleId: module.id,
    selector: 'jobs-page',
    templateUrl: './jobs.html',
    providers: [OarApiService]
})

export class JobsComponent {
    
    jobs : List<Job> = List ([]);

    constructor(
        private apiService: OarApiService,
        private router: Router,
        private jobStore: JobsStore,
        private AuthService: AuthenticationService  
    ){  
    }
    /**
     * 
     * TODO : Change ngFor of jobs to ngFor of mf.data
     */
    ngOnInit() {

        // tofix
        this.jobStore.jobs.subscribe(
            jobList => this.jobs = jobList,
            err => console.log(err)
        );


         this.apiService.getUserJobs(this.AuthService.getUser().getUsername())
            .subscribe(
                data => this.loadJobs(data),
                error => console.log(error)
            );
       
    }

    getJobs(){
        return this.jobStore.jobs.subscribe(
            value => this.jobs = value
        );
    }
    
    // Charge un ensemble de jobs
    loadJobs(data:any) {
        for(let jsonJob of data.items) {
            //let j:Job = new Job().deserialize(jsonJob);   
            this.getJob(jsonJob.id)
        }
    }
    
    /**
    *   
    */    
    getJob(id:string){
         this.jobStore.addJob(id);
    }
    
    
    gotoJob(id:string) {
        this.router.navigate(['dashboard/jobs/' + id]);
    }
 }
